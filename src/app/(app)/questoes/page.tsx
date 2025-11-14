"use client";

import { useState } from 'react';
import type { Question } from '@/lib/questions';
import { questions } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, XCircle, Bot, Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { iaFeedbackQuestao } from '@/ai/flows/ia-feedback-questao';
import { generateDetailedExplanation } from '@/ai/flows/explicacao-detalhada-ia';
import type { IAFeedbackQuestaoOutput } from '@/ai/flows/ia-feedback-questao';
import { cn } from '@/lib/utils';

type QuestionState = {
  selectedAnswer?: string;
  feedback?: IAFeedbackQuestaoOutput;
  detailedExplanation?: string;
  isSubmitting: boolean;
  isGettingDetails: boolean;
};

const subjects = ['Todos', 'Matemática', 'Física', 'Química'];

export default function QuestoesPage() {
  const [questionStates, setQuestionStates] = useState<Record<number, QuestionState>>({});
  const [activeTab, setActiveTab] = useState('Todos');

  const { toast } = useToast();

  const handleAnswerChange = (questionId: number, answer: string) => {
    setQuestionStates(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], selectedAnswer: answer },
    }));
  };

  const handleSubmit = async (question: Question) => {
    const state = questionStates[question.id];
    if (!state?.selectedAnswer) {
      toast({
        title: 'Selecione uma resposta',
        description: 'Você precisa escolher uma alternativa antes de responder.',
        variant: 'destructive',
      });
      return;
    }

    setQuestionStates(prev => ({ ...prev, [question.id]: { ...state, isSubmitting: true } }));

    try {
      const feedback = await iaFeedbackQuestao({
        question: question.statement,
        answer: state.selectedAnswer,
        correctAnswer: question.correctAnswer,
        explanationType: 'concise',
      });
      setQuestionStates(prev => ({ ...prev, [question.id]: { ...prev[question.id], feedback, isSubmitting: false } }));
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro da IA',
        description: 'Não foi possível obter o feedback da IA. Tente novamente.',
        variant: 'destructive',
      });
      setQuestionStates(prev => ({ ...prev, [question.id]: { ...state, isSubmitting: false } }));
    }
  };

  const handleGetDetailedExplanation = async (question: Question) => {
    const state = questionStates[question.id];
    if (!state?.selectedAnswer) return;

    setQuestionStates(prev => ({ ...prev, [question.id]: { ...state, isGettingDetails: true } }));
    try {
      const result = await generateDetailedExplanation({
        question: question.statement,
        userAnswer: state.selectedAnswer,
        correctAnswer: question.correctAnswer,
        subject: question.subject,
        difficulty: question.difficulty,
      });
      setQuestionStates(prev => ({ ...prev, [question.id]: { ...prev[question.id], detailedExplanation: result.explanation, isGettingDetails: false } }));
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro da IA',
        description: 'Não foi possível gerar a explicação detalhada.',
        variant: 'destructive',
      });
      setQuestionStates(prev => ({ ...prev, [question.id]: { ...state, isGettingDetails: false } }));
    }
  };
  
  const filteredQuestions = questions.filter(q => activeTab === 'Todos' || q.subject === activeTab);

  return (
    <div className="space-y-6">
      <h1 className="font-headline text-3xl font-bold">Banco de Questões</h1>
      <p className="text-muted-foreground">
        Filtre por matéria e teste seus conhecimentos. A IA irá corrigir suas respostas e fornecer explicações.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {subjects.map(subject => (
            <TabsTrigger key={subject} value={subject}>{subject}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTab} className="mt-4">
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {filteredQuestions.map(question => {
              const state = questionStates[question.id] || { isSubmitting: false, isGettingDetails: false };
              const isAnswered = !!state.feedback;
              const isCorrect = state.feedback?.isCorrect;

              return (
                <Card key={question.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-headline text-xl">Questão {question.id}</CardTitle>
                        <CardDescription>{question.subject} - {question.difficulty}</CardDescription>
                      </div>
                       <span className={`px-2 py-1 text-xs rounded-full ${
                        question.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                        question.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {question.difficulty}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{question.statement}</p>
                    <RadioGroup
                      value={state.selectedAnswer}
                      onValueChange={(value) => handleAnswerChange(question.id, value)}
                      disabled={isAnswered}
                    >
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex items-center space-x-2 rounded-md p-2 transition-colors",
                            isAnswered && option === question.correctAnswer && "bg-green-100",
                            isAnswered && option === state.selectedAnswer && option !== question.correctAnswer && "bg-red-100",
                          )}
                        >
                          <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                          <Label htmlFor={`${question.id}-${index}`} className="flex-1 cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-4">
                    {!isAnswered && (
                      <Button onClick={() => handleSubmit(question)} disabled={state.isSubmitting}>
                        {state.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Responder
                      </Button>
                    )}
                    {state.feedback && (
                      <div className='w-full space-y-4'>
                        <Alert variant={isCorrect ? 'default' : 'destructive'} className={cn(isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50")}>
                          {isCorrect ? <CheckCircle className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-600" />}
                          <AlertTitle className={cn("font-bold", isCorrect ? "text-green-800" : "text-red-800")}>
                            {isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta!'}
                          </AlertTitle>
                          <AlertDescription className={cn(isCorrect ? "text-green-700" : "text-red-700")}>
                            {state.feedback.explanation}
                          </AlertDescription>
                        </Alert>
                         <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" onClick={() => !state.detailedExplanation && handleGetDetailedExplanation(question)}>
                              <Sparkles className="mr-2 h-4 w-4" />
                              Ver Explicação Detalhada da IA
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[625px]">
                            <DialogHeader>
                              <DialogTitle className="font-headline text-2xl">Análise da Questão {question.id}</DialogTitle>
                              <DialogDescription>
                                A IA analisou a questão e sua resposta. Veja o passo a passo e dicas de estudo.
                              </DialogDescription>
                            </DialogHeader>
                            {state.isGettingDetails && (
                              <div className="flex items-center justify-center p-8 space-x-2 text-muted-foreground">
                                <Loader2 className="h-6 w-6 animate-spin" />
                                <span>Analisando...</span>
                              </div>
                            )}
                            {state.detailedExplanation && <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: state.detailedExplanation.replace(/\n/g, '<br />') }} />}
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
