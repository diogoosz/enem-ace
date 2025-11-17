
'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized ENEM (Exame Nacional do Ensino Médio) mock exams.
 *
 * The flow takes in user preferences for subject, difficulty, and number of questions, and returns
 * a simulated exam. The performance summary is now handled separately on the client-side after the user completes the exam.
 *
 * - generatePersonalizedSimulado - A function that generates the personalized simulated exam.
 * - GeneratePersonalizedSimuladoInput - The input type for the generatePersonalizedSimulado function.
 * - GeneratePersonalizedSimuladoOutput - The return type for the generatePersonalizedSimulado function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MateriasSchema = z.enum(['Matemática', 'Física', 'Biologia', 'Química']);
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
  alternativas: z.array(z.string()).length(5).describe('As 5 alternativas da questão.'),
  respostaCorreta: z.string().describe('A resposta correta da questão.'),
  explicacao: z.string().describe('A explicação da resposta.'),
});

// A saída agora só se preocupa com o simulado em si e o resumo.
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


// Este prompt agora é o único responsável por gerar as questões.
const questoesPrompt = ai.definePrompt({
  name: 'questoesPrompt',
  input: {
    schema: GeneratePersonalizedSimuladoInputSchema,
  },
  output: {
    // A saída esperada do prompt é diretamente o array de questões.
    schema: z.object({
        simulado: z.array(QuestaoSchema)
    }),
  },
  model: 'googleai/gemini-1.5-flash',
  prompt: `Você é um especialista em criar questões no estilo ENEM. Gere um array com {{{numeroQuestoes}}} questões de múltipla escolha com 5 alternativas sobre a matéria: {{{materia}}}, nível de dificuldade: {{{dificuldade}}}.\n\nCada item no array deve ser um objeto contendo o campo "enunciado", um campo opcional "image" com uma URL de imagem placeholder (ex: https://picsum.photos/seed/seed-aleatoria/600/400) se for relevante, um campo "alternativas" (array de 5 strings), um campo "respostaCorreta" e um campo "explicacao".`,
});


const generatePersonalizedSimuladoFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedSimuladoFlow',
    inputSchema: GeneratePersonalizedSimuladoInputSchema,
    outputSchema: GeneratePersonalizedSimuladoOutputSchema,
  },
  async input => {
    // Chamada única e direta para gerar as questões.
    const { output } = await questoesPrompt(input);
    
    // Se a IA não retornar nada, o que pode causar o erro, retornamos um array vazio para evitar o crash.
    const simulado = output?.simulado ?? [];

    // O resumo é gerado dinamicamente com base nas respostas do usuário no front-end, então retornamos um valor padrão aqui.
    const resumo = 'Complete o simulado para receber uma análise de desempenho da IA.';
    
    return {
      simulado: simulado,
      resumoDesempenho: resumo,
    };
  }
);
