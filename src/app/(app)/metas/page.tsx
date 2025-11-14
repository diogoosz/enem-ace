"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { suggestDailyGoals } from '@/ai/flows/sugestao-metas-diarias-ia';

export default function MetasPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [goals, setGoals] = useState<string[] | null>(null);
  const { toast } = useToast();

  const performanceData = `
    - Pontos Fortes: Química Orgânica, Análise Combinatória.
    - Pontos Fracos: Eletromagnetismo (Física), Geometria Espacial (Matemática).
    - Última semana: Foco em Física, mas com baixo percentual de acertos (45%).
    - Redação: Última nota 720, precisa melhorar a Competência 5 (proposta de intervenção).
  `;

  async function handleSuggestGoals() {
    setIsLoading(true);
    setGoals(null);
    try {
      const result = await suggestDailyGoals({ performanceData });
      setGoals(result.dailyGoals);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao sugerir metas',
        description: 'A IA não conseguiu gerar suas metas. Tente novamente.',
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
          <CardTitle className="font-headline text-3xl font-bold">Metas Diárias com IA</CardTitle>
          <CardDescription>
            Receba sugestões de metas diárias personalizadas para otimizar seus estudos e focar em suas dificuldades.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSuggestGoals} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {goals ? 'Sugerir Novas Metas' : 'Sugerir Metas para Hoje'}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">A IA está pensando nas melhores metas para você...</p>
        </div>
      )}

      {goals && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Suas Metas Sugeridas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
