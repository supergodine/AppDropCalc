import { useState, useEffect } from 'react';
import { authService, UserPlan, AuthUser } from '@/lib/auth';

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState<UserPlan | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('🔄 useAuth - Verificando estado inicial...');
    
    // Verificar usuário atual no localStorage
    const currentUser = authService.getCurrentUser();
    const isAuth = authService.isAuthenticated();
    
    console.log('🔍 useAuth - Estado encontrado:', {
      currentUser: !!currentUser,
      isAuth,
      userEmail: currentUser?.email
    });
    
    setUser(currentUser);
    setIsAuthenticated(isAuth);
    
    if (currentUser) {
      let userPlan = authService.getUserPlan();
      // Garante que userPlan nunca seja null ou inválido
      if (!userPlan || typeof userPlan !== 'object' || !userPlan.type) {
        userPlan = {
          type: 'basic',
          name: 'Básico',
          price: 0,
          active: true
        };
      }
      console.log('📋 useAuth - Plano do usuário:', userPlan);
      setPlan(userPlan);
    } else {
      setPlan({
        type: 'basic',
        name: 'Básico',
        price: 0,
        active: true
      });
    }
    
    setLoading(false);
  }, []);

  const logout = async () => {
    console.log('🚪 useAuth - Fazendo logout...');
    await authService.logout();
    setUser(null);
    setPlan(null);
    setIsAuthenticated(false);
  };

  const updatePlan = (newPlan: UserPlan) => {
    console.log('📋 useAuth - Atualizando plano:', newPlan);
    authService.updateUserPlan(newPlan);
    setPlan(newPlan);
  };

  // Função para forçar refresh do estado (útil após login)
  const refreshAuth = () => {
    console.log('🔄 useAuth - Refresh forçado...');
    const currentUser = authService.getCurrentUser();
    const isAuth = authService.isAuthenticated();
    
    setUser(currentUser);
    setIsAuthenticated(isAuth);
    
    if (currentUser) {
      setPlan(authService.getUserPlan());
    } else {
      setPlan(null);
    }
  };

  return {
    user,
    loading,
    plan,
    logout,
    updatePlan,
    refreshAuth,
    isAuthenticated,
    isAdmin: authService.isAdmin(),
    checkPlanAccess: (requiredPlan: 'basic' | 'professional' | 'premium') =>
      authService.checkPlanAccess(requiredPlan)
  };
};