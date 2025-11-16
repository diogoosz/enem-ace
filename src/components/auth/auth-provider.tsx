
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useFirebase } from '@/firebase/provider';
import { doc, onSnapshot } from 'firebase/firestore';
import type { Plan } from '@/lib/subscriptions';
import { Loader2 } from 'lucide-react';

interface AuthContextType {
  userName: string | null;
  userPlan: Plan | undefined;
  isUserLoading: boolean; // Renomeado para refletir o carregamento combinado
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ==================================================================
//  E-MAIL DE ADMINISTRADOR - Substitua pelo seu e-mail de cadastro
// ==================================================================
const ADMIN_EMAIL = 'diogomarciano40@gmail.com';
// ==================================================================


export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, isUserLoading: isAuthLoading, firestore } = useFirebase();
  const [userPlan, setUserPlan] = useState<Plan | undefined>();
  const [userName, setUserName] = useState<string | null>(null);
  const [isCustomerDataLoading, setIsCustomerDataLoading] = useState(true);

  useEffect(() => {
    // Se a autenticação do Firebase ainda está carregando, não faça nada.
    if (isAuthLoading) {
      return;
    }
    // Se não há usuário logado, não há dados para carregar.
    if (!user || !firestore) {
      setIsCustomerDataLoading(false);
      setUserPlan(undefined);
      setUserName(null);
      return;
    }
    
    // ==================================================================
    //  Verificação de Administrador
    // ==================================================================
    if (user.email === ADMIN_EMAIL) {
      setUserName(user.displayName || 'Admin');
      setUserPlan('Premium');
      setIsCustomerDataLoading(false);
      return; // Pula a busca no Firestore para o admin
    }
    // ==================================================================


    // Inicia o carregamento dos dados do cliente
    setIsCustomerDataLoading(true);

    const customerDocRef = doc(firestore, 'customers', user.uid);
    const unsubscribe = onSnapshot(customerDocRef, (customerDoc) => {
      if (customerDoc.exists()) {
        const customerData = customerDoc.data();
        setUserName(customerData.name || user.displayName);
        
        const plan = customerData.subscriptionName as Plan;
        const status = customerData.status;

        // Considera o plano como ativo apenas se o status for 'active' ou 'trialing'
        if (status === 'active' || status === 'trialing') {
          setUserPlan(plan);
        } else {
          setUserPlan(undefined);
        }
      } else {
        // Se o documento do cliente não existe, ele não tem plano.
        setUserName(user.displayName);
        setUserPlan(undefined);
      }
      // Finaliza o carregamento dos dados do cliente.
      setIsCustomerDataLoading(false);
    }, (error) => {
      console.error("Error fetching customer data:", error);
      setIsCustomerDataLoading(false);
    });

    return () => unsubscribe();
  }, [user, isAuthLoading, firestore]);

  // O carregamento geral agora depende da autenticação E dos dados do cliente.
  const isOverallLoading = isAuthLoading || isCustomerDataLoading;
  
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
