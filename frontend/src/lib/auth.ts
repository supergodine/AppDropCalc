import { API_CONFIG } from '../config/api';

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
}

class AuthService {
  public getBaseURL(): string {
    const url = API_CONFIG.getBaseURL();
    console.log('🔒 AUTH baseURL configurado:', url);
    return url;
  }

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

  async logout(): Promise<void> {
    this.clearPlanData();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
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
      return JSON.parse(userStr);
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
      return JSON.parse(storedPlan);
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