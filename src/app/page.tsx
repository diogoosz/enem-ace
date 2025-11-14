
'use client';
import { useFirebase } from '@/firebase/provider';
import { redirect } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function HomePage() {
  const { user, isUserLoading } = useFirebase();

  if (isUserLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (user) {
    redirect('/questoes');
  } else {
    redirect('/login');
  }
}
