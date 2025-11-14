
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth, useFirestore } from '@/firebase';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Logo } from '@/components/icons';

const formSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('Por favor, insira um email válido.'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
});

export default function CadastroPage() {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // Tenta criar o usuário
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: values.name });

      // Cria o documento no Firestore
      const userDocRef = doc(firestore, 'users', user.uid);
      await setDoc(userDocRef, {
        name: values.name,
        email: values.email,
        subscriptionId: 'basico',
        subscriptionName: 'Basico',
      });
      
      toast({
        title: 'Conta criada com sucesso!',
        description: 'Seja bem-vindo ao ENEM Ace! Escolha seu plano para começar.',
      });
      router.push('/planos');

    } catch (error: any) {
      // Se o erro for "email já em uso"
      if (error.code === 'auth/email-already-in-use') {
        try {
          // Tenta fazer login para ver se o perfil no DB foi deletado
          const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
          const user = userCredential.user;
          const userDocRef = doc(firestore, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          // Se o documento não existe, cria ele e continua
          if (!userDoc.exists()) {
             await setDoc(userDocRef, {
              name: values.name,
              email: values.email,
              subscriptionId: 'basico',
              subscriptionName: 'Basico',
            });
            await updateProfile(user, { displayName: values.name });
            toast({
              title: 'Conta recuperada!',
              description: 'Recriamos seu perfil. Escolha seu plano para continuar.',
            });
            router.push('/planos');
          } else {
            // Se o documento existe, o usuário realmente já está cadastrado
             toast({
              title: 'Email já cadastrado',
              description: 'Este email já está em uso. Tente fazer login.',
              variant: 'destructive',
            });
          }
        } catch (signInError: any) {
           // Se o login falhar (senha errada, por ex)
           toast({
            title: 'Erro no Cadastro',
            description: 'Este email já está em uso e a senha está incorreta.',
            variant: 'destructive',
          });
        }
      } else {
        // Outros erros de criação de conta
        toast({
          title: 'Erro no Cadastro',
          description: 'Ocorreu um erro ao criar sua conta. Tente novamente.',
          variant: 'destructive',
        });
        console.error(error);
      }
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
          <CardTitle className="text-2xl font-headline">Crie sua conta</CardTitle>
          <CardDescription>É rápido e fácil. Comece a estudar agora mesmo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                Criar Conta
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{' '}
            <Link href="/login" className="underline">
              Faça login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
