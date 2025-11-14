
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Loader2, Sparkles, FileText, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generatePersonalizedSimulado } from '@/ai/flows/simulados-personalizados-ia';
import type { GeneratePersonalizedSimuladoOutput } from '@/ai/flows/simulados-personalizados-ia';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useAuthContext } from '@/components/auth/auth-provider';
import { hasAccess } from '@/lib/subscriptions';
import { AccessDenied } from '@/components/auth/access-denied';

const formSchema = z.object({
  materia: z.enum(['Matemática', 'Física', 'Biologia', 'Química', 'História', 'Geografia', 'Português']),
  dificuldade: z.enum(['Fácil', 'Médio', 'Difícil']),
  numeroQuestoes: z.coerce.number().min(1, 'Mínimo 1 questão').max(10, 'Máximo 10 questões'),
});

type QuestionType = GeneratePersonalizedSimuladoOutput['simulado'][number];

type SimuladoState = {
  questions: QuestionType[];
  answers: Record<number, string>;
  isFinished: boolean;
  score: number;
}

export default function SimuladosPage() {
  const { userPlan } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [simuladoResult, setSimuladoResult] = useState<GeneratePersonalizedSimuladoOutput | null>(null);
  const [simuladoState, setSimuladoState] = useState<SimuladoState | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      materia: 'Matemática',
      dificuldade: 'Médio',
      numeroQuestoes: 5,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSimuladoResult(null);
    setSimuladoState(null);
    try {
      const result = await generatePersonalizedSimulado(values);
      setSimuladoResult(result);
      setSimuladoState({
        questions: result.simulado,
        answers: {},
        isFinished: false,
        score: 0,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar simulado',
        description: 'A IA não conseguiu criar seu simulado. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleAnswerChange = (index: number, answer: string) => {
    if (!simuladoState || simuladoState.isFinished) return;
    setSimuladoState(prev => prev ? ({ ...prev, answers: { ...prev.answers, [index]: answer } }) : null);
  }

  const finishSimulado = () => {
    if (!simuladoState) return;
    let currentScore = 0;
    simuladoState.questions.forEach((q, i) => {
      if (simuladoState.answers[i] === q.respostaCorreta) {
        currentScore++;
      }
    });
    setSimuladoState(prev => prev ? ({ ...prev, isFinished: true, score: currentScore }) : null);
  }

  if (!hasAccess(userPlan, 'simulados-personalizados')) {
    return <AccessDenied featureName="Simulados Personalizados" />;
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold">Simulados Personalizados</CardTitle>
          <CardDescription>Crie um simulado com a ajuda da IA. Escolha a matéria, a dificuldade e o número de questões.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="materia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Matéria</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Selecione a matéria" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Matemática">Matemática</SelectItem>
                          <SelectItem value="Física">Física</SelectItem>
                          <SelectItem value="Biologia">Biologia</SelectItem>
                          <SelectItem value="Química">Química</SelectItem>
                          <SelectItem value="História">História</SelectItem>
                          <SelectItem value="Geografia">Geografia</SelectItem>
                          <SelectItem value="Português">Português</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dificuldade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dificuldade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Selecione a dificuldade" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Fácil">Fácil</SelectItem>
                          <SelectItem value="Médio">Médio</SelectItem>
                          <SelectItem value="Difícil">Difícil</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numeroQuestoes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nº de Questões</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Gerar Simulado
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && <div className="flex justify-center items-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /> <p className="ml-2">A IA está montando seu simulado...</p></div>}
      
      {simuladoState && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Simulado em Andamento</CardTitle>
            {!simuladoState.isFinished && <CardDescription>Responda as questões abaixo.</CardDescription>}
            {simuladoState.isFinished && <CardDescription>Simulado finalizado! Veja seu resultado abaixo.</CardDescription>}
          </CardHeader>
          <CardContent className="space-y-4">
            {simuladoState.isFinished && (
               <Card className="bg-primary/10 border-primary">
                <CardHeader>
                  <CardTitle className="font-headline">Resultado Final</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Você acertou <span className="font-bold text-primary">{simuladoState.score}</span> de <span className="font-bold">{simuladoState.questions.length}</span> questões.</p>
                </CardContent>
              </Card>
            )}

            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {simuladoState.questions.map((q, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className={`font-semibold ${simuladoState.isFinished ? (simuladoState.answers[i] === q.respostaCorreta ? 'text-green-600' : 'text-red-600') : ''}`}>
                    {simuladoState.isFinished && (simuladoState.answers[i] === q.respostaCorreta ? <CheckCircle className="mr-2"/> : <XCircle className="mr-2"/>)}
                    Questão {i + 1}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="font-medium">{q.enunciado}</p>
                      {q.image && (
                        <div className="relative aspect-video w-full max-w-md mx-auto my-4 rounded-md overflow-hidden">
                           <Image
                            src={q.image}
                            alt={`Imagem da questão ${i + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <RadioGroup
                        value={simuladoState.answers[i]}
                        onValueChange={(value) => handleAnswerChange(i, value)}
                        disabled={simuladoState.isFinished}
                        className="space-y-2"
                      >
                        {q.alternativas.map((alt, idx) => (
                          <div key={idx} className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${simuladoState.isFinished && q.respostaCorreta === alt ? 'bg-green-100' : ''} ${simuladoState.isFinished && q.respostaCorreta !== alt && simuladoState.answers[i] === alt ? 'bg-red-100' : ''}`}>
                            <RadioGroupItem value={alt} id={`q${i}-opt${idx}`} />
                            <Label htmlFor={`q${i}-opt${idx}`} className="cursor-pointer flex-1">{alt}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {simuladoState.isFinished && (
                        <div className="p-4 bg-muted/50 rounded-md space-y-2">
                          <h4 className="font-bold">Explicação da IA:</h4>
                          <p>{q.explicacao}</p>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {!simuladoState.isFinished && (
              <Button onClick={finishSimulado}>Finalizar Simulado</Button>
            )}
          </CardContent>
        </Card>
      )}

      {simuladoResult && simuladoState?.isFinished && hasAccess(userPlan, 'relatorios-inteligentes-basico') && (
        <Card className="bg-accent/20 border-accent">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><FileText /> Resumo de Desempenho da IA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{simuladoResult.resumoDesempenho}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
