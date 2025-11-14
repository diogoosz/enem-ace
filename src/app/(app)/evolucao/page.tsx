"use client";

import { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { gerarTextoMotivacional } from '@/ai/flows/gerar-texto-motivacional-ia';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const chartData = [
  { month: 'Janeiro', matematica: 186, fisica: 80, quimica: 200 },
  { month: 'Fevereiro', matematica: 305, fisica: 200, quimica: 250 },
  { month: 'Março', matematica: 237, fisica: 120, quimica: 300 },
  { month: 'Abril', matematica: 73, fisica: 190, quimica: 180 },
  { month: 'Maio', matematica: 209, fisica: 130, quimica: 220 },
  { month: 'Junho', matematica: 214, fisica: 140, quimica: 280 },
];

const chartConfig = {
  matematica: { label: 'Matemática', color: 'hsl(var(--chart-1))' },
  fisica: { label: 'Física', color: 'hsl(var(--chart-2))' },
  quimica: { label: 'Química', color: 'hsl(var(--chart-3))' },
} satisfies ChartConfig;

const difficultyData = [
    { level: 'Fácil', acertos: 92 },
    { level: 'Médio', acertos: 78 },
    { level: 'Difícil', acertos: 45 },
]

const difficultyConfig = {
    acertos: { label: 'Acertos (%)', color: 'hsl(var(--primary))'},
} satisfies ChartConfig;

export default function EvolucaoPage() {
  const [motivationalText, setMotivationalText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchMotivationalText() {
      setIsLoading(true);
      try {
        const historicoDesempenho = `
          - Progresso notável em Matemática nos últimos meses.
          - Manteve consistência em Química.
          - Física apresenta uma leve queda no último mês, mas com bom desempenho geral.
          - Acertos em questões difíceis aumentou de 35% para 45% nos últimos 3 meses.
        `;
        const result = await gerarTextoMotivacional({ historicoDesempenho });
        setMotivationalText(result.textoMotivacional);
      } catch (error) {
        console.error(error);
        setMotivationalText('Não foi possível carregar a mensagem motivacional. Lembre-se, cada passo é um progresso. Continue estudando!');
        toast({
          title: 'Erro da IA',
          description: 'Não foi possível gerar o texto motivacional.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchMotivationalText();
  }, [toast]);
    
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold">Sua Evolução</CardTitle>
          <CardDescription>Acompanhe seu progresso ao longo do tempo com gráficos e análises.</CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
         <Card>
          <CardHeader>
            <CardTitle>Progresso por Matéria</CardTitle>
            <CardDescription>Questões resolvidas por mês</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart data={chartData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="matematica" fill="var(--color-matematica)" radius={4} />
                    <Bar dataKey="fisica" fill="var(--color-fisica)" radius={4} />
                    <Bar dataKey="quimica" fill="var(--color-quimica)" radius={4} />
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acertos por Nível de Dificuldade</CardTitle>
            <CardDescription>Percentual de acertos total</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={difficultyConfig} className="min-h-[200px] w-full">
                <BarChart data={difficultyData} layout='vertical' accessibilityLayer>
                    <CartesianGrid horizontal={false} />
                    <YAxis dataKey="level" type="category" tickLine={false} tickMargin={10} axisLine={false} />
                    <XAxis type="number" dataKey="acertos" hide/>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="acertos" fill="var(--color-acertos)" radius={5} layout="vertical">
                    </Bar>
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle>Texto Motivacional da IA</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Gerando uma mensagem especial para você...</span>
            </div>
          ) : (
            <p className="text-muted-foreground italic">"{motivationalText.trim()}"</p>
          )}
        </CardContent>
      </Card>

    </div>
  );
}
