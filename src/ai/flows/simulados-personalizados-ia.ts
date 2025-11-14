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
    .max(90)
    .describe('O número de questões no simulado.'),
});
export type GeneratePersonalizedSimuladoInput = z.infer<
  typeof GeneratePersonalizedSimuladoInputSchema
>;

const QuestaoSchema = z.object({
  enunciado: z.string().describe('O enunciado da questão.'),
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
  const questoes: z.infer<typeof QuestaoSchema>[] = [];

    for (let i = 0; i < input.numeroQuestoes; i++) {
      const { output } = await questaoPrompt(input);
      if (output) {
        questoes.push(output);
      }
    }

  return questoes;
});

const questaoPrompt = ai.definePrompt({
  name: 'questaoPrompt',
  input: {
    schema: GeneratePersonalizedSimuladoInputSchema,
  },
  output: {
    schema: QuestaoSchema,
  },
  prompt: `Você é um especialista em criar questões no estilo ENEM. Gere uma questão de múltipla escolha com 5 alternativas sobre a matéria: {{{materia}}}, nível de dificuldade: {{{dificuldade}}}.\n\nA resposta deve incluir o campo \"enunciado\" contendo o enunciado da questão, um campo \"alternativas\" contendo um array de 5 strings com as alternativas, um campo \"respostaCorreta\" contendo a alternativa correta, e um campo \"explicacao\" com uma explicação detalhada da resolução da questão.`,
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
