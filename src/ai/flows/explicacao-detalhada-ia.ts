'use server';
/**
 * @fileOverview This file contains the implementation for generating detailed explanations of answered questions using AI.
 *
 * - generateDetailedExplanation - A function that takes a question and user's answer, and generates a detailed explanation.
 * - DetailedExplanationInput - The input type for the generateDetailedExplanation function.
 * - DetailedExplanationOutput - The return type for the generateDetailedExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetailedExplanationInputSchema = z.object({
  question: z.string().describe('The question that was answered.'),
  userAnswer: z.string().describe('The user\'s answer to the question.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
  subject: z.string().describe('The subject of the question (e.g., Matemática, Física, Química).'),
  difficulty: z.string().describe('The difficulty level of the question (e.g., fácil, médio, difícil).'),
});
export type DetailedExplanationInput = z.infer<typeof DetailedExplanationInputSchema>;

const DetailedExplanationOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of the question, including a step-by-step solution and study tips.'),
});
export type DetailedExplanationOutput = z.infer<typeof DetailedExplanationOutputSchema>;

export async function generateDetailedExplanation(input: DetailedExplanationInput): Promise<DetailedExplanationOutput> {
  return detailedExplanationFlow(input);
}

const detailedExplanationPrompt = ai.definePrompt({
  name: 'detailedExplanationPrompt',
  input: {schema: DetailedExplanationInputSchema},
  output: {schema: DetailedExplanationOutputSchema},
  prompt: `Você é um professor especializado em preparar alunos para o ENEM. Sua tarefa é fornecer uma explicação detalhada e passo a passo para a seguinte questão:

Matéria: {{{subject}}}
Dificuldade: {{{difficulty}}}
Questão: {{{question}}}
Resposta do Aluno: {{{userAnswer}}}
Resposta Correta: {{{correctAnswer}}}

Sua explicação deve incluir:
1. Uma análise da questão, identificando os principais conceitos envolvidos.
2. Uma explicação detalhada da solução correta, passo a passo.
3. Dicas de estudo e recursos adicionais relacionados ao tema da questão.
4. Feedback construtivo sobre a resposta do aluno, indicando onde ele acertou e onde errou, e por quê.

Formate a explicação de forma clara e organizada, utilizando uma linguagem acessível e adaptada ao nível do aluno.
`,
});

const detailedExplanationFlow = ai.defineFlow(
  {
    name: 'detailedExplanationFlow',
    inputSchema: DetailedExplanationInputSchema,
    outputSchema: DetailedExplanationOutputSchema,
  },
  async input => {
    const {output} = await detailedExplanationPrompt(input);
    return output!;
  }
);
