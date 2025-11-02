import { useState, useEffect } from 'react';
import { authService, UserPlan, AuthUser } from '@/lib/auth';

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState<UserPlan | null>(null);

  useEffect(() => {
    // Verificar usuário atual no localStorage
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    if (currentUser) {
      setPlan(authService.getUserPlan());
    } else {
      setPlan(null);
    }
    setLoading(false);
  }, []);

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setPlan(null);
  };

  const updatePlan = (newPlan: UserPlan) => {
    authService.updateUserPlan(newPlan);
    setPlan(newPlan);
  };

  return {
    user,
    loading,
    plan,
    logout,
    updatePlan,
    isAuthenticated: authService.isAuthenticated(),
    checkPlanAccess: (requiredPlan: 'basic' | 'professional' | 'premium') =>
      authService.checkPlanAccess(requiredPlan)
  };
};