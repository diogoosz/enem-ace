
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
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateEnemQuestion } from '@/ai/flows/geracao-questoes-extras-ia';
import type { GenerateEnemQuestionOutput } from '@/ai/flows/geracao-questoes-extras-ia';
import { useAuthContext } from '@/components/auth/auth-provider';
import { hasAccess } from '@/lib/subscriptions';
import { AccessDenied } from '@/components/auth/access-denied';

const formSchema = z.object({
  subject: z.enum(['Matemática', 'Física', 'Química', 'Biologia']),
  difficulty: z.enum(['Fácil', 'Médio', 'Difícil']),
});

export default function QuestoesExtrasPage() {
  const { userPlan } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<GenerateEnemQuestionOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: 'Matemática',
      difficulty: 'Médio',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedQuestion(null);
    try {
      const result = await generateEnemQuestion(values);
      setGeneratedQuestion(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar questão',
        description: 'A IA não conseguiu criar sua questão. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (!hasAccess(userPlan, 'questoes-extras')) {
    return <AccessDenied featureName="Gerador de Questões Extras" />;
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold">Gerador de Questões Extras</CardTitle>
          <CardDescription>Precisa de mais desafios? Peça para a IA criar uma questão nova para você.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="subject"
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
                          <SelectItem value="Química">Química</SelectItem>
                          <SelectItem value="Biologia">Biologia</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="difficulty"
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
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Gerar Questão
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">A IA está elaborando uma questão inédita...</p>
        </div>
      )}

      {generatedQuestion && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Questão Gerada pela IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-medium">{generatedQuestion.question}</p>
            {generatedQuestion.image && (
              <div className="relative aspect-video w-full max-w-lg mx-auto my-4 rounded-md overflow-hidden">
                <Image
                  src={generatedQuestion.image}
                  alt="Imagem da questão"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="space-y-2">
              {generatedQuestion.alternatives.map((alt, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 rounded-md border">
                  <span className="font-bold text-primary">{String.fromCharCode(65 + index)}</span>
                  <p>{alt}</p>
                </div>
              ))}
            </div>
            <Card className="bg-green-50 border-green-200">
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Resposta e Explicação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><span className="font-bold">Resposta Correta:</span> {generatedQuestion.correctAnswer}</p>
                    <p><span className="font-bold">Explicação:</span> {generatedQuestion.explanation}</p>
                </CardContent>
            </Card>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
