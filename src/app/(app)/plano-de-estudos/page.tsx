
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { gerarPlanoDeEstudoSemanal } from '@/ai/flows/plano-estudo-semanal-ia';
import { useAuthContext } from '@/components/auth/auth-provider';
import { hasAccess } from '@/lib/subscriptions';
import { AccessDenied } from '@/components/auth/access-denied';

export default function PlanoDeEstudosPage() {
  const { userPlan } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [plano, setPlano] = useState<string | null>(null);
  const { toast } = useToast();

  const historicoDesempenho = `
    - Matemática: 15 acertos de 20 questões. Dificuldade maior em geometria.
    - Física: 10 acertos de 20 questões. Dificuldade em cinemática e leis de Newton.
    - Química: 18 acertos de 20 questões. Bom desempenho geral, pequena dificuldade em estequiometria.
    - Tempo médio por questão: 3 minutos.
  `;

  async function handleGeneratePlan() {
    setIsLoading(true);
    setPlano(null);
    try {
      const result = await gerarPlanoDeEstudoSemanal({ historicoDesempenho });
      setPlano(result.planoDeEstudo);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar plano',
        description: 'A IA não conseguiu criar seu plano de estudos. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  if (!hasAccess(userPlan, 'plano-de-estudos')) {
    return <AccessDenied featureName="Plano de Estudos Semanal" />;
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold">Plano de Estudos Semanal</CardTitle>
          <CardDescription>
            Deixe a IA analisar seu desempenho e criar um cronograma de estudos personalizado para a semana.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGeneratePlan} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {plano ? 'Gerar Novo Plano' : 'Gerar Plano de Estudos'}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">Analisando seu progresso e montando o plano...</p>
        </div>
      )}

      {plano && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Seu Plano de Estudos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
              {plano}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
