'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized study reports based on a student's historical performance.
 *
 * The flow analyzes the student's data to identify strengths, weaknesses, performance by subject, and provides study recommendations.
 *
 * - generateIntelligentReport - An async function that triggers the report generation flow.
 * - IntelligentReportInput - The input type for the generateIntelligentReport function.
 * - IntelligentReportOutput - The output type for the generateIntelligentReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentReportInputSchema = z.object({
  studentHistory: z.string().describe('A detailed record of the student\'s performance, including questions answered, subjects studied, and time spent.'),
});

export type IntelligentReportInput = z.infer<typeof IntelligentReportInputSchema>;

const IntelligentReportOutputSchema = z.object({
  report: z.string().describe('A comprehensive report detailing the student\'s strengths, weaknesses, subject-wise performance, and study recommendations.'),
});

export type IntelligentReportOutput = z.infer<typeof IntelligentReportOutputSchema>;

export async function generateIntelligentReport(input: IntelligentReportInput): Promise<IntelligentReportOutput> {
  return intelligentReportFlow(input);
}

const intelligentReportPrompt = ai.definePrompt({
  name: 'intelligentReportPrompt',
  input: {schema: IntelligentReportInputSchema},
  output: {schema: IntelligentReportOutputSchema},
  prompt: `Você é um tutor de IA especializado em analisar o desempenho de estudantes e gerar relatórios detalhados com recomendações personalizadas.

  Com base no histórico de estudos do aluno:
  {{studentHistory}}

  Gere um relatório abrangente que inclua:
  - Pontos fortes do aluno.
  - Pontos fracos do aluno.
  - Desempenho por matéria (Matemática, Física, Química).
  - Desempenho por dificuldade (Fácil, Médio, Difícil).
  - Evolução com o tempo
  - Recomendações de estudo específicas para melhorar o desempenho do aluno.
  - Dicas de melhoria.

  O relatório deve ser escrito em português e ser claro, conciso e útil para o aluno.
  Estruture o relatório de forma organizada, com seções para cada um dos tópicos mencionados acima.
  Use uma linguagem motivacional para incentivar o aluno a continuar estudando e a superar suas dificuldades.`,
});

const intelligentReportFlow = ai.defineFlow(
  {
    name: 'intelligentReportFlow',
    inputSchema: IntelligentReportInputSchema,
    outputSchema: IntelligentReportOutputSchema,
  },
  async input => {
    const {output} = await intelligentReportPrompt(input);
    return output!;
  }
);
