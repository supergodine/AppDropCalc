import { API_CONFIG } from '../config/api';
import { googleAuthService } from '../services/googleAuth';

export interface UserPlan {
  type: 'basic' | 'professional' | 'premium';
  name: string;
  price: number;
  active: boolean;
  expiresAt?: Date;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  plan?: UserPlan;
  photoURL?: string;
  provider?: 'email' | 'google';
}

class AuthService {
  public getBaseURL(): string {
    const url = API_CONFIG.getBaseURL();
    console.log('🔒 AUTH baseURL configurado:', url);
    return url;
  }

  // Login tradicional com email/senha
  async login(email: string, password: string): Promise<AuthUser> {
    try {
      const loginUrl = API_CONFIG.auth.login;
      console.log('🔐 Login attempt:', { email, url: loginUrl });
      
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Falha no login');
      }

      const data = await response.json();
      
      // Armazenar token e dados do usuário
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      
      return data.user;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  async register(name: string, email: string, password: string): Promise<AuthUser> {
    try {
      // Limpar todos os dados de planos anteriores
      this.clearPlanData();
      
      const signupUrl = API_CONFIG.auth.signup;
      console.log('📝 Signup attempt:', { name, email, url: signupUrl });
      
      const response = await fetch(signupUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Falha no registro');
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    }
  }

  // ===== GOOGLE AUTH METHODS =====
  
  async loginWithGoogle(): Promise<AuthUser> {
    try {
      console.log('🚀 Iniciando login com Google...');
      
      // Fazer login com Google
      const googleUser = await googleAuthService.loginWithPopup();
      
      // Sincronizar com backend
      const backendUser = await googleAuthService.syncWithBackend(googleUser);
      
      // Criar AuthUser do nosso sistema
      const authUser: AuthUser = {
        id: googleUser.id,
        email: googleUser.email,
        name: googleUser.name,
        photoURL: googleUser.photoURL,
        provider: 'google',
        plan: backendUser.plan || this.getUserPlan()
      };
      
      // Salvar no localStorage
      localStorage.setItem('currentUser', JSON.stringify(authUser));
      if (backendUser.accessToken) {
        localStorage.setItem('accessToken', backendUser.accessToken);
      }
      
      console.log('✅ Login Google completo:', authUser);
      return authUser;
      
    } catch (error) {
      console.error('❌ Erro no login Google:', error);
      throw error;
    }
  }

  async loginWithGoogleRedirect(): Promise<void> {
    try {
      await googleAuthService.loginWithRedirect();
    } catch (error) {
      console.error('❌ Erro no redirect Google:', error);
      throw error;
    }
  }

  async handleGoogleRedirectResult(): Promise<AuthUser | null> {
    try {
      const googleUser = await googleAuthService.handleRedirectResult();
      if (!googleUser) return null;
      
      // Processar igual ao popup
      const backendUser = await googleAuthService.syncWithBackend(googleUser);
      
      const authUser: AuthUser = {
        id: googleUser.id,
        email: googleUser.email,
        name: googleUser.name,
        photoURL: googleUser.photoURL,
        provider: 'google',
        plan: backendUser.plan || this.getUserPlan()
      };
      
      localStorage.setItem('currentUser', JSON.stringify(authUser));
      if (backendUser.accessToken) {
        localStorage.setItem('accessToken', backendUser.accessToken);
      }
      
      return authUser;
    } catch (error) {
      console.error('❌ Erro no resultado redirect:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      // Logout do Google se estiver logado
      const currentUser = this.getCurrentUser();
      if (currentUser?.provider === 'google') {
        await googleAuthService.logout();
      }
      
      // Limpar dados locais
      this.clearPlanData();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('currentUser');
      
      console.log('✅ Logout completo realizado');
    } catch (error) {
      console.error('❌ Erro no logout:', error);
      // Limpar mesmo com erro
      this.clearPlanData();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('currentUser');
    }
  }

  clearPlanData(): void {
    // Limpar todos os dados relacionados a planos
    localStorage.removeItem('userPlan');
    localStorage.removeItem('billingStatus');
    localStorage.removeItem('subscriptionPeriod');
    localStorage.removeItem('subscriptionDate');
    localStorage.removeItem('premiumActive');
  }

  getCurrentUser(): AuthUser | null {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      try {
        const parsed = JSON.parse(userStr);
        // Verificar se tem a estrutura básica de usuário
        if (parsed && typeof parsed === 'object' && parsed.id && parsed.email) {
          return parsed;
        }
      } catch (error) {
        console.warn('🚨 currentUser inválido no localStorage:', userStr);
        console.warn('Erro:', error);
        // Limpar o localStorage inválido
        localStorage.removeItem('currentUser');
      }
    }
    return null;
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken() && !!this.getCurrentUser();
  }

  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    // Simular mudança de estado para compatibilidade
    const user = this.getCurrentUser();
    callback(user);
    
    // Retornar função de cleanup
    return () => {};
  }

  getUserPlan(): UserPlan {
    const storedPlan = localStorage.getItem('userPlan');
    if (storedPlan) {
      try {
        // Verificar se é JSON válido
        const parsed = JSON.parse(storedPlan);
        // Verificar se tem a estrutura correta
        if (parsed && typeof parsed === 'object' && parsed.type && parsed.name) {
          return parsed;
        }
      } catch (error) {
        console.warn('🚨 userPlan inválido no localStorage:', storedPlan);
        console.warn('Erro:', error);
        // Limpar o localStorage inválido
        localStorage.removeItem('userPlan');
      }
    }
    
    // Default to basic plan
    return {
      type: 'basic',
      name: 'Básico',
      price: 0,
      active: true
    };
  }

  updateUserPlan(plan: UserPlan): void {
    localStorage.setItem('userPlan', JSON.stringify(plan));
  }

  checkPlanAccess(requiredPlan: 'basic' | 'professional' | 'premium'): boolean {
    const userPlan = this.getUserPlan();
    
    if (!userPlan.active) return false;
    
    const planHierarchy = {
      basic: 0,
      professional: 1,
      premium: 2
    };
    
    return planHierarchy[userPlan.type] >= planHierarchy[requiredPlan];
  }
}

export const authService = new AuthService();