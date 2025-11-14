
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import Link from 'next/link';

export function AccessDenied({ featureName }: { featureName: string }) {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
            <Lock className="h-8 w-8" />
          </div>
          <CardTitle className="mt-4 font-headline text-2xl">Acesso Restrito</CardTitle>
          <CardDescription>
            A funcionalidade "{featureName}" não está inclusa no seu plano atual.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Faça um upgrade no seu plano para desbloquear esta e muitas outras vantagens para turbinar seus estudos!
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/planos">Ver Planos de Assinatura</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
