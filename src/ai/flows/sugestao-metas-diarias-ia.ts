// src/ai/flows/sugestao-metas-diarias-ia.ts
'use server';

/**
 * @fileOverview A flow that suggests daily goals based on user performance.
 *
 * - suggestDailyGoals - A function that suggests daily goals.
 * - SuggestDailyGoalsInput - The input type for the suggestDailyGoals function.
 * - SuggestDailyGoalsOutput - The return type for the suggestDailyGoals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDailyGoalsInputSchema = z.object({
  performanceData: z
    .string()
    .describe(
      'A summary of the user performance data, including strengths, weaknesses, and areas for improvement.'
    ),
});

export type SuggestDailyGoalsInput = z.infer<typeof SuggestDailyGoalsInputSchema>;

const SuggestDailyGoalsOutputSchema = z.object({
  dailyGoals: z.array(
    z.string().describe('A suggested daily goal, such as solving a certain number of questions or reviewing a specific topic.')
  ).describe('A list of suggested daily goals based on the user performance.'),
});

export type SuggestDailyGoalsOutput = z.infer<typeof SuggestDailyGoalsOutputSchema>;

export async function suggestDailyGoals(input: SuggestDailyGoalsInput): Promise<SuggestDailyGoalsOutput> {
  return suggestDailyGoalsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDailyGoalsPrompt',
  input: {schema: SuggestDailyGoalsInputSchema},
  output: {schema: SuggestDailyGoalsOutputSchema},
  prompt: `Com base nos dados de desempenho do aluno a seguir, sugira metas diárias para o aluno. As metas devem ser específicas, mensuráveis, atingíveis, relevantes e com prazo determinado (SMART).

Dados de Desempenho:
{{{performanceData}}}

Sugestões de Metas Diárias:
`,
});

const suggestDailyGoalsFlow = ai.defineFlow(
  {
    name: 'suggestDailyGoalsFlow',
    inputSchema: SuggestDailyGoalsInputSchema,
    outputSchema: SuggestDailyGoalsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
