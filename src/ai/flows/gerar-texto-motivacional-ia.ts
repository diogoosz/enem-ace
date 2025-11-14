// src/ai/flows/gerar-texto-motivacional-ia.ts
'use server';

/**
 * @fileOverview This file contains the implementation for generating a motivational text using AI.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GerarTextoMotivacionalInputSchema = z.object({
  historicoDesempenho: z.string().describe('Um resumo do histórico de desempenho do aluno.'),
});
export type GerarTextoMotivacionalInput = z.infer<typeof GerarTextoMotivacionalInputSchema>;

const GerarTextoMotivacionalOutputSchema = z.object({
  textoMotivacional: z.string().describe('Um texto motivacional curto e inspirador.'),
});
export type GerarTextoMotivacionalOutput = z.infer<typeof GerarTextoMotivacionalOutputSchema>;

export async function gerarTextoMotivacional(
  input: GerarTextoMotivacionalInput
): Promise<GerarTextoMotivacionalOutput> {
  return gerarTextoMotivacionalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'gerarTextoMotivacionalPrompt',
  input: {schema: GerarTextoMotivacionalInputSchema},
  output: {schema: GerarTextoMotivacionalOutputSchema},
  prompt: `Você é um coach de estudos e mentor de ânimo. Baseado no resumo de desempenho do aluno, gere um texto motivacional curto, inspirador e otimista para incentivá-lo a continuar estudando.

Histórico de Desempenho:
{{{historicoDesempenho}}}
`,
});

const gerarTextoMotivacionalFlow = ai.defineFlow(
  {
    name: 'gerarTextoMotivacionalFlow',
    inputSchema: GerarTextoMotivacionalInputSchema,
    outputSchema: GerarTextoMotivacionalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
