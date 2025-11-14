'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized ENEM (Exame Nacional do Ensino Médio) mock exams.
 *
 * The flow takes in user preferences for subject, difficulty, and number of questions, and returns
 * a simulated exam along with a performance summary.
 *
 * - generatePersonalizedSimulado - A function that generates the personalized simulated exam and analysis.
 * - GeneratePersonalizedSimuladoInput - The input type for the generatePersonalizedSimulado function.
 * - GeneratePersonalizedSimuladoOutput - The return type for the generatePersonalizedSimulado function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MateriasSchema = z.enum(['Matemática', 'Física', 'Biologia', 'Química', 'História', 'Geografia', 'Português']);
const DificuldadeSchema = z.enum(['Fácil', 'Médio', 'Difícil']);

const GeneratePersonalizedSimuladoInputSchema = z.object({
  materia: MateriasSchema.describe('A matéria do simulado.'),
  dificuldade: DificuldadeSchema.describe('O nível de dificuldade do simulado.'),
  numeroQuestoes: z
    .number()
    .min(1)
    .max(10)
    .describe('O número de questões no simulado.'),
});
export type GeneratePersonalizedSimuladoInput = z.infer<
  typeof GeneratePersonalizedSimuladoInputSchema
>;

const QuestaoSchema = z.object({
  enunciado: z.string().describe('O enunciado da questão.'),
  image: z.string().optional().describe('An optional placeholder URL for an image related to the question, e.g., "https://picsum.photos/seed/example-seed/600/400".'),
  alternativas: z.array(z.string()).describe('As alternativas da questão.'),
  respostaCorreta: z.string().describe('A resposta correta da questão.'),
  explicacao: z.string().describe('A explicação da resposta.'),
});

const GeneratePersonalizedSimuladoOutputSchema = z.object({
  simulado: z.array(QuestaoSchema).describe('O simulado gerado.'),
  resumoDesempenho: z
    .string()
    .describe(
      'Um resumo do desempenho do aluno, destacando pontos fortes e áreas que precisam de melhoria.'
    ),
});
export type GeneratePersonalizedSimuladoOutput = z.infer<
  typeof GeneratePersonalizedSimuladoOutputSchema
>;

export async function generatePersonalizedSimulado(
  input: GeneratePersonalizedSimuladoInput
): Promise<GeneratePersonalizedSimuladoOutput> {
  return generatePersonalizedSimuladoFlow(input);
}

const generateQuestoes = ai.defineTool({
  name: 'generateQuestoes',
  description:
    'Gera questões estilo ENEM com base na matéria, dificuldade e número de questões especificados.',
  inputSchema: GeneratePersonalizedSimuladoInputSchema,
  outputSchema: z.array(QuestaoSchema),
},
async (input) => {
    const { output } = await questoesPrompt(input);
    return output || [];
});

const questoesPrompt = ai.definePrompt({
  name: 'questoesPrompt',
  input: {
    schema: GeneratePersonalizedSimuladoInputSchema,
  },
  output: {
    schema: z.array(QuestaoSchema),
  },
  prompt: `Você é um especialista em criar questões no estilo ENEM. Gere um array com {{{numeroQuestoes}}} questões de múltipla escolha com 5 alternativas sobre a matéria: {{{materia}}}, nível de dificuldade: {{{dificuldade}}}.\n\nCada item no array deve ser um objeto contendo o campo "enunciado", um campo opcional "image" com uma URL de imagem placeholder (ex: https://picsum.photos/seed/seed-aleatoria/600/400) se for relevante, um campo "alternativas" (array de 5 strings), um campo "respostaCorreta" e um campo "explicacao".`,
});

const resumoDesempenhoPrompt = ai.definePrompt({
  name: 'resumoDesempenhoPrompt',
  input: {
    schema: z.object({
      materia: MateriasSchema,
      dificuldade: DificuldadeSchema,
      numeroQuestoes: z.number(),
      simulado: z.array(QuestaoSchema),
    }),
  },
  output: {
    schema: z.object({
      resumoDesempenho: z.string(),
    }),
  },
  prompt: `Você é um especialista em analisar o desempenho de estudantes em simulados do ENEM. Com base no desempenho do aluno no seguinte simulado, gere um resumo destacando os pontos fortes e as áreas que precisam de melhoria. O simulado foi sobre a matéria {{{materia}}}, com nível de dificuldade {{{dificuldade}}} e número de questões {{{numeroQuestoes}}}.\n\nSimulado:\n{{#each simulado}}\n  - Enunciado: {{{this.enunciado}}}\n    Alternativas: {{this.alternativas}}\n    Resposta Correta: {{{this.respostaCorreta}}}\n    Explicação: {{{this.explicacao}}}\n{{/each}}\n\nResumo do Desempenho:`,
});

const generatePersonalizedSimuladoFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedSimuladoFlow',
    inputSchema: GeneratePersonalizedSimuladoInputSchema,
    outputSchema: GeneratePersonalizedSimuladoOutputSchema,
  },
  async input => {
    const simulado = await generateQuestoes(input);
    const { output } = await resumoDesempenhoPrompt({
      ...input,
      simulado,
    });

    return {
      simulado: simulado,
      resumoDesempenho: output?.resumoDesempenho ?? 'Sem resumo disponível.',
    };
  }
);
