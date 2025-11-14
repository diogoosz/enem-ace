
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MailCheck } from 'lucide-react';
import Link from 'next/link';

export default function VerificarEmailPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
            <MailCheck className="h-10 w-10" />
          </div>
          <CardTitle className="mt-4 font-headline text-2xl">Quase lá! Verifique seu E-mail</CardTitle>
          <CardDescription>
            Enviamos um link de confirmação para o seu endereço de e-mail.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Por favor, clique no link enviado para ativar sua conta. Se não encontrar o e-mail na sua caixa de entrada, verifique também a pasta de spam.
          </p>
          <p className="text-sm text-muted-foreground">
            Após verificar, você poderá fazer login.
          </p>
        </CardContent>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/login">Ir para a página de Login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
