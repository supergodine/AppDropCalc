import { useState, useEffect } from 'react';
import { authService, UserPlan, AuthUser } from '@/lib/auth';
import { API_CONFIG } from '@/config/api';

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

    // Se houver token e user, tentar atualizar o perfil no backend
    (async () => {
      try {
        const token = authService.getAccessToken();
        if (!token) return;

        console.log('🔄 useAuth - Buscando profile no backend para sincronizar estado...');
        const resp = await fetch(API_CONFIG.users.profile, {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json'
          },
          cache: 'no-store'
        });

        if (!resp.ok) {
          console.warn('⚠️ useAuth - Falha ao buscar profile:', resp.status);
          return;
        }

        const data = await resp.json();
        // Backend may return { currentUser, userPlan } or just user
        const backendUser = data.currentUser || data.user || data;
        if (backendUser) {
          try {
            // Merge backend user with existing local user to avoid
            // unintentionally removing fields like `role`, `isAdmin` or `roles`
            const existing = authService.getCurrentUser();
            const merged = Object.assign({}, existing || {}, backendUser || {});

            // Preserve explicit admin markers if backend didn't return them
            if (existing) {
              if (!('role' in backendUser) && existing.role) merged.role = existing.role;
              if (!('isAdmin' in backendUser) && (existing as any).isAdmin) (merged as any).isAdmin = (existing as any).isAdmin;
              if (!('roles' in backendUser) && Array.isArray((existing as any).roles)) (merged as any).roles = (existing as any).roles;
            }

            localStorage.setItem('currentUser', JSON.stringify(merged));
            console.log('✅ useAuth - currentUser sincronizado com backend (merge)');
          } catch (err) {
            console.warn('🚨 useAuth - erro ao salvar currentUser:', err);
          }

          // Update plan if backend returned it
          const backendPlan = data.userPlan || backendUser.plan;
          if (backendPlan) {
            try {
              localStorage.setItem('userPlan', JSON.stringify(backendPlan));
              localStorage.setItem('billingStatus', 'active');
              localStorage.setItem('subscriptionDate', new Date().toISOString());
              console.log('✅ useAuth - userPlan sincronizado com backend');
            } catch (err) {
              console.warn('🚨 useAuth - erro ao salvar userPlan:', err);
            }
          }

          // Update local state
          setUser(authService.getCurrentUser());
          setIsAuthenticated(!!authService.getAccessToken());
          setPlan(authService.getUserPlan());
        }
      } catch (err) {
        console.warn('⚠️ useAuth - erro ao sincronizar profile:', err);
      }
    })();
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