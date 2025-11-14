"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateIntelligentReport } from '@/ai/flows/relatorios-inteligentes-ia';

export default function RelatoriosPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const { toast } = useToast();

  const studentHistory = `
    - Histórico de 4 semanas de estudo.
    - Total de 250 questões resolvidas.
    - Matemática: 80% de acertos em questões fáceis, 60% em médias, 30% em difíceis. Tópicos com mais erros: Logaritmos, Análise Combinatória.
    - Física: 65% de acertos em fáceis, 50% em médias, 25% em difíceis. Tópicos com mais erros: Circuitos Elétricos, Termodinâmica.
    - Química: 90% de acertos em fáceis, 75% em médias, 50% em difíceis. Tópicos com mais erros: Cálculo Estequiométrico.
    - Tempo médio por questão diminuiu de 3.5 min para 2.8 min nas últimas 4 semanas.
    - Últimas duas redações com notas 680 e 740.
  `;

  async function handleGenerateReport() {
    setIsLoading(true);
    setReport(null);
    try {
      const result = await generateIntelligentReport({ studentHistory });
      setReport(result.report);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar relatório',
        description: 'A IA não conseguiu analisar seu histórico. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold">Relatórios Inteligentes</CardTitle>
          <CardDescription>
            Gere um relatório completo sobre seu desempenho. A IA irá analisar todo seu histórico para identificar pontos fortes, fracos e dar recomendações.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGenerateReport} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {report ? 'Gerar Novo Relatório' : 'Gerar Relatório Inteligente'}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">A IA está processando meses de dados... um momento.</p>
        </div>
      )}

      {report && (
        <Card className="border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2"><Bot /> Análise da IA sobre seu Desempenho</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
              {report}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
