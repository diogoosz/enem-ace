// src/ai/flows/plano-estudo-semanal-ia.ts
'use server';

/**
 * @fileOverview Cria um plano de estudo semanal personalizado com base no desempenho do aluno.
 *
 * - gerarPlanoDeEstudoSemanal - Função para gerar o plano de estudo.
 * - PlanoDeEstudoSemanalInput - Tipo de entrada para a função gerarPlanoDeEstudoSemanal.
 * - PlanoDeEstudoSemanalOutput - Tipo de saída para a função gerarPlanoDeEstudoSemanal.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PlanoDeEstudoSemanalInputSchema = z.object({
  historicoDesempenho: z
    .string()
    .describe(
      'Um resumo do histórico de desempenho do aluno, incluindo acertos e erros por matéria e dificuldade.'
    ),
});
export type PlanoDeEstudoSemanalInput = z.infer<typeof PlanoDeEstudoSemanalInputSchema>;

const PlanoDeEstudoSemanalOutputSchema = z.object({
  planoDeEstudo: z
    .string()
    .describe(
      'Um plano de estudo semanal detalhado, incluindo matérias sugeridas, número de questões e recomendações de revisão.'
    ),
});
export type PlanoDeEstudoSemanalOutput = z.infer<typeof PlanoDeEstudoSemanalOutputSchema>;

export async function gerarPlanoDeEstudoSemanal(
  input: PlanoDeEstudoSemanalInput
): Promise<PlanoDeEstudoSemanalOutput> {
  return planoDeEstudoSemanalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'planoDeEstudoSemanalPrompt',
  input: {schema: PlanoDeEstudoSemanalInputSchema},
  output: {schema: PlanoDeEstudoSemanalOutputSchema},
  prompt: `Com base no histórico de desempenho do aluno:
  {{historicoDesempenho}}

  Crie um plano de estudo semanal simples e prático, incluindo:

  - Matérias do dia.
  - Quantidade de questões sugeridas por matéria.
  - Recomendações sobre o que revisar em cada matéria.
  - Dicas de melhoria para o aluno.

  Formate o plano de estudo de forma clara e concisa, fácil de seguir pelo aluno.
  Seja motivacional e otimista em suas recomendações.
  Estruture o plano de estudo em formato de texto.
  `,
});

const planoDeEstudoSemanalFlow = ai.defineFlow(
  {
    name: 'planoDeEstudoSemanalFlow',
    inputSchema: PlanoDeEstudoSemanalInputSchema,
    outputSchema: PlanoDeEstudoSemanalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
