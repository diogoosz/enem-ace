// src/ai/flows/avaliacao-redacao-ia.ts
'use server';
/**
 * @fileOverview A redaction evaluation AI agent.
 *
 * - avaliacaoRedacao - A function that handles the redaction evaluation process.
 * - AvaliacaoRedacaoInput - The input type for the avaliacaoRedacao function.
 * - AvaliacaoRedacaoOutput - The return type for the avaliacaoRedacao function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AvaliacaoRedacaoInputSchema = z.object({
  tema: z.string().describe('O tema da redação.'),
  redacao: z.string().describe('A redação do aluno.'),
});
export type AvaliacaoRedacaoInput = z.infer<typeof AvaliacaoRedacaoInputSchema>;

const AvaliacaoRedacaoOutputSchema = z.object({
  competencia1: z.object({
    nota: z.number().describe('A nota da competência 1 (0 a 200).'),
    comentario: z.string().describe('Um comentário sobre o desempenho na competência 1.'),
    correcoes: z.string().describe('Sugestões de correções para a competência 1.'),
  }),
  competencia2: z.object({
    nota: z.number().describe('A nota da competência 2 (0 a 200).'),
    comentario: z.string().describe('Um comentário sobre o desempenho na competência 2.'),
    correcoes: z.string().describe('Sugestões de correções para a competência 2.'),
  }),
  competencia3: z.object({
    nota: z.number().describe('A nota da competência 3 (0 a 200).'),
    comentario: z.string().describe('Um comentário sobre o desempenho na competência 3.'),
    correcoes: z.string().describe('Sugestões de correções para a competência 3.'),
  }),
  competencia4: z.object({
    nota: z.number().describe('A nota da competência 4 (0 a 200).'),
    comentario: z.string().describe('Um comentário sobre o desempenho na competência 4.'),
    correcoes: z.string().describe('Sugestões de correções para a competência 4.'),
  }),
  competencia5: z.object({
    nota: z.number().describe('A nota da competência 5 (0 a 200).'),
    comentario: z.string().describe('Um comentário sobre o desempenho na competência 5.'),
    correcoes: z.string().describe('Sugestões de correções para a competência 5.'),
  }),
  redacaoReescrita: z.string().describe('Uma versão reescrita da redação.'),
  orientacoesMelhoria: z.string().describe('Orientações claras de melhoria para o aluno.'),
});
export type AvaliacaoRedacaoOutput = z.infer<typeof AvaliacaoRedacaoOutputSchema>;

export async function avaliacaoRedacao(input: AvaliacaoRedacaoInput): Promise<AvaliacaoRedacaoOutput> {
  return avaliacaoRedacaoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'avaliacaoRedacaoPrompt',
  input: {schema: AvaliacaoRedacaoInputSchema},
  output: {schema: AvaliacaoRedacaoOutputSchema},
  prompt: `Você é um corretor de redações no estilo ENEM. Sua tarefa é avaliar a redação de um aluno com base nos critérios oficiais do ENEM:

*   Competência 1: Demonstrar domínio da modalidade escrita formal da língua portuguesa.
*   Competência 2: Compreender a proposta de redação e aplicar conceitos das várias áreas de conhecimento para desenvolver o tema, dentro dos limites estruturais do texto dissertativo-argumentativo.
*   Competência 3: Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista.
*   Competência 4: Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação.
*   Competência 5: Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos.

Para cada competência, você deve dar uma nota de 0 a 200, fazer um comentário explicando o desempenho do aluno, e sugerir correções.
Além disso, você deve gerar uma versão reescrita da redação e fornecer orientações claras de melhoria para o aluno.

Tema da redação: {{{tema}}}
Redação do aluno: {{{redacao}}}

Formate sua resposta em JSON, seguindo o esquema especificado. Seja conciso e direto em suas avaliações e sugestões.`,
});

const avaliacaoRedacaoFlow = ai.defineFlow(
  {
    name: 'avaliacaoRedacaoFlow',
    inputSchema: AvaliacaoRedacaoInputSchema,
    outputSchema: AvaliacaoRedacaoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
