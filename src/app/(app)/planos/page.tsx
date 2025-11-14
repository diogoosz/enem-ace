
'use client';

import { useState } from 'react';
import { Check, X, Star, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAuthContext } from '@/components/auth/auth-provider';
import type { Plan } from '@/lib/subscriptions';
import { allFeatures, plans, getPriceIdForPlan } from '@/lib/subscriptions';
import { useFirebase } from '@/firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function PlanosPage() {
  const { userPlan } = useAuthContext();
  const { user, firestore } = useFirebase();
  const [isLoading, setIsLoading] = useState<Plan | null>(null);
  const { toast } = useToast();

  const handleSubscribe = async (plan: Plan) => {
    if (!user || !firestore) return;
    setIsLoading(plan);

    try {
      const priceId = getPriceIdForPlan(plan);
      if (!priceId) {
        throw new Error('Price ID não encontrado para este plano.');
      }
      
      const checkoutSessionRef = collection(firestore, 'customers', user.uid, 'checkout_sessions');
      
      const docRef = await addDoc(checkoutSessionRef, {
        price: priceId,
        success_url: window.location.origin + '/questoes',
        cancel_url: window.location.href,
      });

      onSnapshot(docRef, (snap) => {
        const { error, url } = snap.data() as { error?: { message: string }; url?: string };
        if (error) {
          console.error(`An error occurred: ${error.message}`);
          toast({
            title: 'Erro no Checkout',
            description: error.message,
            variant: 'destructive',
          });
          setIsLoading(null);
        }
        if (url) {
          // We have a Stripe Checkout URL, let's redirect.
          window.location.assign(url);
        }
      });

    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast({
        title: 'Erro ao iniciar assinatura',
        description: 'Não foi possível se comunicar com o sistema de pagamento. Tente novamente.',
        variant: 'destructive',
      });
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
                  {isCurrentPlan ? 'Seu Plano Atual' : `Assinar ${planName}`}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
