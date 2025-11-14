
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Logo } from '@/components/icons';

const formSchema = z.object({
  email: z.string().email('Por favor, insira um email válido.'),
  password: z.string().min(1, 'A senha é obrigatória.'),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      // Check if user document exists in Firestore
      const userDocRef = doc(firestore, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists() || !userDoc.data()?.subscriptionName) {
        // If doc doesn't exist or doesn't have a plan, create/update it and go to plans
        await setDoc(userDocRef, {
          name: user.displayName || 'Novo Usuário',
          email: user.email,
          subscriptionId: 'basico',
          subscriptionName: 'Basico',
        }, { merge: true });
        
        toast({
          title: 'Bem-vindo(a) de volta!',
          description: 'Escolha seu plano para começar a estudar.',
        });
        router.push('/planos');
      } else {
         toast({
          title: 'Login realizado com sucesso!',
          description: 'Bem-vindo de volta!',
        });
        router.push('/questoes');
      }
      
    } catch (error: any) {
      let description = 'Ocorreu um erro ao fazer login. Tente novamente.';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        description = 'Email ou senha inválidos. Verifique seus dados e tente novamente.';
      }
      toast({
        title: 'Erro no Login',
        description,
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
       <div className="absolute top-8 left-8 flex items-center gap-2">
         <Logo className="size-8 text-primary" />
         <h1 className="font-headline text-xl font-semibold text-primary">ENEM Ace</h1>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Acesse sua conta</CardTitle>
          <CardDescription>Insira seu email e senha para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Entrar
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{' '}
            <Link href="/cadastro" className="underline">
              Cadastre-se
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
