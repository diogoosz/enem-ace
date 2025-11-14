
'use client';

import { useState } from 'react';
import { Check, X, Star, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAuthContext } from '@/components/auth/auth-provider';
import type { Plan } from '@/lib/subscriptions';
import { allFeatures, plans } from '@/lib/subscriptions';
import { useFirebase } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PlanosPage() {
  const { userPlan } = useAuthContext();
  const { user, firestore } = useFirebase();
  const [isLoading, setIsLoading] = useState<Plan | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubscribe = async (plan: Plan) => {
    if (!user || !firestore) {
      toast({
        title: 'Erro',
        description: 'Usuário não autenticado. Por favor, faça login novamente.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(plan);

    try {
      // Simula a assinatura atualizando o documento do usuário diretamente
      // Esta é a alteração para evitar a cobrança e o plano Blaze
      const userDocRef = doc(firestore, 'customers', user.uid);
      await setDoc(userDocRef, { 
        name: user.displayName,
        email: user.email,
        subscriptionId: `simulated_${plan}_${new Date().getTime()}`,
        subscriptionName: plan,
        status: 'active'
       }, { merge: true });

      toast({
        title: 'Plano selecionado!',
        description: `Você agora está no plano ${plan}.`,
      });

      // Força a atualização do contexto de autenticação recarregando a página ou redirecionando
      // router.refresh() não é suficiente aqui, precisamos que o AuthProvider recarregue
      router.push('/questoes'); // Redireciona para a página principal do app
      
    } catch (error) {
      console.error("Error simulating subscription:", error);
      toast({
        title: 'Erro ao selecionar plano',
        description: 'Não foi possível registrar sua escolha. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(null);
    }
  };

  const planOrder: Plan[] = ['Basico', 'Intermediario', 'Premium'];

  return (
    <div className="space-y-6 p-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold">Nossos Planos</CardTitle>
          <CardDescription>
            Escolha o plano que melhor se adapta à sua jornada de estudos e libere todo o poder da IA.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {planOrder.map((planName) => {
          const planDetails = plans[planName];
          const isCurrentPlan = userPlan === planName;
          const isRecommended = planName === 'Intermediario';

          return (
            <Card key={planName} className={cn('flex flex-col', isCurrentPlan && 'border-primary ring-2 ring-primary', isRecommended && !isCurrentPlan && 'border-amber-500')}>
              <CardHeader className="relative">
                {isRecommended && (
                  <div className="absolute top-0 right-4 -translate-y-1/2 bg-amber-500 text-white px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    MAIS POPULAR
                  </div>
                )}
                <div className="flex items-center gap-2">
                    <Gem className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline text-2xl">{planName}</CardTitle>
                </div>
                <CardDescription>
                  <span className="text-3xl font-bold">R$ {planDetails.price}</span>
                  /mês
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {Object.entries(allFeatures).map(([featureKey, featureValue]) => {
                    const hasFeature = planDetails.features.includes(featureKey as any);
                    return (
                      <li key={featureKey} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          {hasFeature ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-muted-foreground" />}
                        </div>
                        <span className={cn(!hasFeature && 'text-muted-foreground line-through')}>{featureValue.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  disabled={isCurrentPlan || isLoading !== null}
                  onClick={() => handleSubscribe(planName)}
                >
                  {isLoading === planName && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isCurrentPlan ? 'Seu Plano Atual' : `Selecionar ${planName}`}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
