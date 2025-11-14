// src/ai/flows/geracao-questoes-extras-ia.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating extra ENEM-style questions.
 *
 * It includes the following:
 * - generateEnemQuestion - A function that generates an ENEM-style question based on subject and difficulty level.
 * - GenerateEnemQuestionInput - The input type for the generateEnemQuestion function.
 * - GenerateEnemQuestionOutput - The output type for the generateEnemQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEnemQuestionInputSchema = z.object({
  subject: z.enum(['Matemática', 'Física', 'Química']).describe('The subject of the question.'),
  difficulty: z.enum(['Fácil', 'Médio', 'Difícil']).describe('The difficulty level of the question.'),
});
export type GenerateEnemQuestionInput = z.infer<typeof GenerateEnemQuestionInputSchema>;

const GenerateEnemQuestionOutputSchema = z.object({
  question: z.string().describe('The question statement.'),
  alternatives: z.array(z.string()).describe('The alternatives for the question.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
  explanation: z.string().describe('The explanation of the correct answer.'),
});
export type GenerateEnemQuestionOutput = z.infer<typeof GenerateEnemQuestionOutputSchema>;

export async function generateEnemQuestion(input: GenerateEnemQuestionInput): Promise<GenerateEnemQuestionOutput> {
  return generateEnemQuestionFlow(input);
}

const generateEnemQuestionPrompt = ai.definePrompt({
  name: 'generateEnemQuestionPrompt',
  input: {schema: GenerateEnemQuestionInputSchema},
  output: {schema: GenerateEnemQuestionOutputSchema},
  prompt: `Você é um professor especialista na prova do ENEM. Sua tarefa é gerar uma questão no estilo ENEM com o seguinte formato:

Questão: {enunciado da questão}

Alternativas:
A) {alternativa A}
B) {alternativa B}
C) {alternativa C}
D) {alternativa D}
E) {alternativa E}

Resposta Correta: {letra da alternativa correta}

Explicação: {explicação da resposta correta}

A questão deve ser da matéria de {{{subject}}} e ter nível de dificuldade {{{difficulty}}}. O enunciado da questão, as alternativas e a explicação devem ser concisos e claros.
`,
});

const generateEnemQuestionFlow = ai.defineFlow(
  {
    name: 'generateEnemQuestionFlow',
    inputSchema: GenerateEnemQuestionInputSchema,
    outputSchema: GenerateEnemQuestionOutputSchema,
  },
  async input => {
    const {output} = await generateEnemQuestionPrompt(input);
    return output!;
  }
);
