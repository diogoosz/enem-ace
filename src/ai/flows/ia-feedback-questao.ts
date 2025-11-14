'use server';

/**
 * @fileOverview A flow that provides feedback on a question answered by the user.
 *
 * - iaFeedbackQuestao - A function that handles the feedback process.
 * - IAFeedbackQuestaoInput - The input type for the iaFeedbackQuestao function.
 * - IAFeedbackQuestaoOutput - The return type for the iaFeedbackQuestao function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IAFeedbackQuestaoInputSchema = z.object({
  question: z.string().describe('The question that was asked.'),
  answer: z.string().describe('The answer provided by the user.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
  explanationType: z
    .enum(['concise', 'detailed'])
    .describe('The type of explanation requested: concise or detailed.'),
});
export type IAFeedbackQuestaoInput = z.infer<typeof IAFeedbackQuestaoInputSchema>;

const IAFeedbackQuestaoOutputSchema = z.object({
  isCorrect: z.boolean().describe('Whether the answer is correct or not.'),
  explanation: z.string().describe('The explanation of the answer.'),
  performanceStats: z.string().describe('The performance statistics of the user.'),
});
export type IAFeedbackQuestaoOutput = z.infer<typeof IAFeedbackQuestaoOutputSchema>;

export async function iaFeedbackQuestao(input: IAFeedbackQuestaoInput): Promise<IAFeedbackQuestaoOutput> {
  return iaFeedbackQuestaoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'iaFeedbackQuestaoPrompt',
  input: {schema: IAFeedbackQuestaoInputSchema},
  output: {schema: IAFeedbackQuestaoOutputSchema},
  prompt: `Você é um professor especializado em ENEM e irá fornecer feedback sobre a resposta do aluno.

Questão: {{{question}}}
Resposta do Aluno: {{{answer}}}
Resposta Correta: {{{correctAnswer}}}

Você deve seguir estas diretrizes:

1. Determine se a resposta do aluno está correta ou incorreta. Seja preciso.
2. Gere uma explicação com base no tipo solicitado:
   - Se o tipo for "concise", forneça uma explicação curta e direta.
   - Se o tipo for "detailed", forneça uma explicação passo a passo completa.
3. Inclua estatísticas de desempenho relevantes com base na resposta do aluno. Estas estatísticas devem ser formatadas de maneira fácil de entender.

Formate sua resposta da seguinte forma:

{
  "isCorrect": true ou false,
  "explanation": "A explicação da resposta.",
  "performanceStats": "As estatísticas de desempenho do aluno."
}
`,
});

const iaFeedbackQuestaoFlow = ai.defineFlow(
  {
    name: 'iaFeedbackQuestaoFlow',
    inputSchema: IAFeedbackQuestaoInputSchema,
    outputSchema: IAFeedbackQuestaoOutputSchema,
  },
  async input => {
    const isCorrect = input.answer.trim().toLowerCase() === input.correctAnswer.trim().toLowerCase();

    const promptResult = await prompt({...input, isCorrect});

    return {
      ...promptResult.output, 
      isCorrect: isCorrect, // Overwrite isCorrect value
    };
  }
);
