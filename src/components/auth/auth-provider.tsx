
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useFirebase } from '@/firebase/provider';
import { doc, onSnapshot, collection, query, where, getDocs } from 'firebase/firestore';
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

    const customerDocRef = doc(firestore, 'customers', user.uid);
    const unsubscribe = onSnapshot(customerDocRef, (customerDoc) => {
        const fetchSubscriptions = async () => {
            if (customerDoc.exists()) {
                setUserName(customerDoc.data().name || user.displayName);
                const subscriptionsRef = collection(firestore, 'customers', user.uid, 'subscriptions');
                const q = query(subscriptionsRef, where("status", "in", ["trialing", "active"]));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    setUserPlan(undefined);
                } else {
                    const subscription = querySnapshot.docs[0].data();
                    const role = subscription.role as Plan;
                    setUserPlan(role);
                }
            } else {
                setUserName(user.displayName);
                setUserPlan(undefined);
            }
            setIsDataLoading(false);
        };
        
        fetchSubscriptions().catch(error => {
            console.error("Error fetching user subscriptions:", error);
            setIsDataLoading(false);
        });
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
