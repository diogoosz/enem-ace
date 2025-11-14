"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { avaliacaoRedacao } from '@/ai/flows/avaliacao-redacao-ia';
import type { AvaliacaoRedacaoOutput } from '@/ai/flows/avaliacao-redacao-ia';
import { essayThemes } from '@/lib/themes';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  redacao: z.string().min(100, 'A redação deve ter no mínimo 100 caracteres.'),
});

function getRandomTheme() {
  return essayThemes[Math.floor(Math.random() * essayThemes.length)];
}

export default function RedacaoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('');
  const [avaliacao, setAvaliacao] = useState<AvaliacaoRedacaoOutput | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Evita loop de renderização definindo o tema apenas uma vez no cliente
    if (!currentTheme) {
      setCurrentTheme(getRandomTheme());
    }
  }, [currentTheme]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      redacao: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAvaliacao(null);
    try {
      const result = await avaliacaoRedacao({
        tema: currentTheme,
        redacao: values.redacao,
      });
      setAvaliacao(result);
      toast({
        title: 'Redação Avaliada!',
        description: 'Sua redação foi corrigida pela IA.',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao avaliar redação',
        description: 'A IA não conseguiu processar sua redação. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleNewTheme = () => {
    setCurrentTheme(getRandomTheme());
    form.reset();
    setAvaliacao(null);
  };
  
  const competencias = avaliacao ? [
    { name: "Competência 1", ...avaliacao.competencia1 },
    { name: "Competência 2", ...avaliacao.competencia2 },
    { name: "Competência 3", ...avaliacao.competencia3 },
    { name: "Competência 4", ...avaliacao.competencia4 },
    { name: "Competência 5", ...avaliacao.competencia5 },
  ] : [];

  const notaTotal = competencias.reduce((acc, comp) => acc + comp.nota, 0);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold">Avaliação de Redação</CardTitle>
          <CardDescription>Escreva sobre o tema proposto e receba uma correção completa da IA, baseada nos critérios do ENEM.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border-l-4 border-primary bg-primary/10 rounded-r-md">
            <p className="font-semibold text-primary-foreground">Tema:</p>
            <p className="text-lg font-medium">{currentTheme}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleNewTheme}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Gerar Novo Tema
          </Button>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="redacao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua Redação</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Comece a escrever sua redação aqui..."
                        className="min-h-[300px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Avaliar Redação
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && <div className="flex justify-center items-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /> <p className="ml-2">A IA está lendo e avaliando sua redação...</p></div>}
      
      {avaliacao && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Resultado da Avaliação</CardTitle>
            <CardDescription>Veja a nota e os comentários para cada competência.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Nota Final: <span className="text-primary">{notaTotal} / 1000</span></CardTitle>
                </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {competencias.map((comp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="font-headline text-lg">{comp.name}</CardTitle>
                    <CardDescription>Nota: <span className="font-bold text-primary">{comp.nota} / 200</span></CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Progress value={comp.nota / 2} />
                    <p className="text-sm"><span className="font-semibold">Comentário:</span> {comp.comentario}</p>
                    <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Correções:</span> {comp.correcoes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader><CardTitle className="font-headline text-xl">Orientações de Melhoria</CardTitle></CardHeader>
                <CardContent><p>{avaliacao.orientacoesMelhoria}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="font-headline text-xl">Versão Reescrita pela IA</CardTitle></CardHeader>
                <CardContent><p className="whitespace-pre-wrap">{avaliacao.redacaoReescrita}</p></CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
