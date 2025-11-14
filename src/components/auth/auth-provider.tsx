
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

    setIsDataLoading(true); // Start loading user data
    const userDocRef = doc(firestore, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setUserPlan(data.subscriptionName as Plan);
        setUserName(data.name);
      } else {
        // This case can happen briefly if the user document hasn't been created yet
        setUserPlan(undefined);
        setUserName(null);
      }
      setIsDataLoading(false);
    }, (error) => {
      console.error("Error fetching user data:", error);
      setIsDataLoading(false);
    });

    return () => unsubscribe();
  }, [user, isAuthLoading, firestore]);

  const isOverallLoading = isAuthLoading || isDataLoading;
  
  if (isOverallLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

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
