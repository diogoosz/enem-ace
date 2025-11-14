
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useFirebase } from '@/firebase/provider';
import { doc, onSnapshot } from 'firebase/firestore';
import type { Plan } from '@/lib/subscriptions';
import { Loader2 } from 'lucide-react';

interface AuthContextType {
  userName: string | null;
  userPlan: Plan | undefined;
  isUserLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, isUserLoading: isAuthLoading, firestore } = useFirebase();
  const [userPlan, setUserPlan] = useState<Plan | undefined>();
  const [userName, setUserName] = useState<string | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading || !firestore) {
      return;
    }
    if (!user) {
      setIsDataLoading(false);
      setUserPlan(undefined);
      setUserName(null);
      return;
    }

    setIsDataLoading(true);

    // No lugar de ouvir a coleção de 'subscriptions', ouvimos o documento 'customers'
    const customerDocRef = doc(firestore, 'customers', user.uid);
    const unsubscribe = onSnapshot(customerDocRef, (customerDoc) => {
      if (customerDoc.exists()) {
        const customerData = customerDoc.data();
        setUserName(customerData.name || user.displayName);
        // O plano agora está no campo 'subscriptionName' do documento do cliente
        const plan = customerData.subscriptionName as Plan;
        const status = customerData.status;

        if (status === 'active' || status === 'trialing') {
          setUserPlan(plan);
        } else {
          setUserPlan(undefined);
        }
      } else {
        // Se o documento do cliente não existe, ele não tem plano
        setUserName(user.displayName);
        setUserPlan(undefined);
      }
      setIsDataLoading(false);
    }, (error) => {
      console.error("Error fetching customer data:", error);
      setIsDataLoading(false);
    });

    return () => unsubscribe();
  }, [user, isAuthLoading, firestore]);

  const isOverallLoading = isAuthLoading || isDataLoading;
  
  return (
    <AuthContext.Provider value={{ userName, userPlan, isUserLoading: isOverallLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
