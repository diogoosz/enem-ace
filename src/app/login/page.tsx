
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Logo } from '@/components/icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  email: z.string().email('Por favor, insira um email válido.'),
  password: z.string().min(1, 'A senha é obrigatória.'),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showVerificationAlert, setShowVerificationAlert] = useState(false);
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

  const handleResendVerification = async () => {
    setIsLoading(true);
    try {
      const user = auth?.currentUser;
      if (user) {
        await sendEmailVerification(user);
        toast({
          title: 'E-mail reenviado!',
          description: 'Um novo link de verificação foi enviado para o seu e-mail.',
        });
      }
    } catch (error) {
      toast({
        title: 'Erro ao reenviar',
        description: 'Não foi possível reenviar o e-mail. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!auth || !firestore) return;
    setIsLoading(true);
    setShowVerificationAlert(false);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setShowVerificationAlert(true);
        setIsLoading(false);
        return;
      }

      const userDocRef = doc(firestore, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists() || !userDoc.data()?.subscriptionName) {
        await setDoc(userDocRef, {
          name: user.displayName || 'Novo Usuário',
          email: user.email,
          subscriptionId: null,
          subscriptionName: null,
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
      if (!showVerificationAlert) {
         setIsLoading(false);
      }
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
          {showVerificationAlert && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle className="font-bold">Verifique seu E-mail</AlertTitle>
              <AlertDescription>
                Sua conta ainda não foi ativada. Por favor, clique no link que enviamos para o seu e-mail.
                <Button variant="link" className="p-0 h-auto ml-1" onClick={handleResendVerification} disabled={isLoading}>
                  Reenviar e-mail
                </Button>
              </AlertDescription>
            </Alert>
          )}

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
