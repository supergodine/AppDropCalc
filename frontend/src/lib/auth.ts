// trigger deploy Vercel 2025-11-29
// commit forçar build Vercel
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
  role?: 'user' | 'admin';
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

  // Método alternativo de login para resolver problemas de CORS/cache
  async loginAlternative(email: string, password: string): Promise<AuthUser> {
    try {
      console.log('🔄 Tentando login alternativo...');
      
      // Usar XMLHttpRequest para contornar possíveis problemas de fetch
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const loginUrl = API_CONFIG.auth.login;
        
        xhr.open('POST', loginUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            console.log('🔍 XHR Status:', xhr.status);
            console.log('🔍 XHR Response:', xhr.responseText);
            
            if (xhr.status === 200) {
              try {
                const data = JSON.parse(xhr.responseText);
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                resolve(data.user);
              } catch (parseError) {
                reject(new Error('Resposta inválida do servidor'));
              }
            } else {
              try {
                const errorData = JSON.parse(xhr.responseText);
                reject(new Error(errorData.message || 'Erro no login'));
              } catch (parseError) {
                reject(new Error('Credenciais inválidas'));
              }
            }
          }
        };
        
        xhr.onerror = function() {
          reject(new Error('Erro de conexão'));
        };
        
        xhr.ontimeout = function() {
          reject(new Error('Timeout na conexão'));
        };
        
        xhr.timeout = 10000; // 10s timeout
        
        const requestBody = JSON.stringify({ email, password });
        xhr.send(requestBody);
      });
    } catch (error: any) {
      console.error('❌ Erro no login alternativo:', error);
      throw error;
    }
  }

  // Login tradicional com email/senha
  async login(email: string, password: string): Promise<AuthUser> {
    try {
      const loginUrl = API_CONFIG.auth.login;
      console.log('🔐 Login attempt:', { email, url: loginUrl });

      // Adicionar provider: 'email' para compatibilidade backend
      const requestBody = JSON.stringify({ email, password, provider: 'email' });
      console.log('📤 Request body:', requestBody);

      // Fazer a requisição com timeout e headers específicos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
        },
        body: requestBody,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Error response text:', errorText);
        console.error('❌ Error response status:', response.status);
        console.error('❌ Error response statusText:', response.statusText);

        let errorMessage = 'Falha no login';
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.message || errorMessage;
        } catch (parseError) {
          errorMessage = errorText || errorMessage;
        }

        // Tratamento específico para erro 401
        if (response.status === 401) {
          errorMessage = 'Credenciais inválidas. Verifique email e senha.';
        }

        throw new Error(errorMessage);
      }

      const responseText = await response.text();
      console.log('📥 Raw response text:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('❌ Failed to parse response JSON:', parseError);
        throw new Error('Resposta inválida do servidor');
      }

      console.log('✅ Login successful, data:', data);

      // Validar estrutura da resposta
      if (!data.accessToken || !data.user) {
        console.error('❌ Invalid response structure:', data);
        throw new Error('Resposta do servidor incompleta');
      }

      // Armazenar token e dados do usuário
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('currentUser', JSON.stringify(data.user));

      // Atualizar plano do usuário se vier na resposta
      if (data.user.plan) {
        localStorage.setItem('userPlan', JSON.stringify(data.user.plan));
      }

      return data.user;
    } catch (error: any) {
      console.error('❌ Erro no login completo:', error);

      // Tratamento específico para diferentes tipos de erro
      if (error.name === 'AbortError') {
        throw new Error('Timeout na conexão. Tente novamente.');
      }

      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Erro de conexão. Verifique sua internet.');
      }

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
      // Primeiro, tentar parsear como JSON (objeto salvo por outras partes do app)
      try {
        const parsed = JSON.parse(storedPlan);
        if (parsed && typeof parsed === 'object' && parsed.type && parsed.name) {
          return parsed as UserPlan;
        }
      } catch (error) {
        // Se não for JSON válido, pode ser um valor legado salvo como string simples
        console.warn('⚠️ userPlan detectado como string legada:', storedPlan);
      }

      // Tratar o caso em que o valor é uma string simples (ex: 'premium', 'gold', 'basic')
      try {
        // Remover possíveis aspas extras
        const plain = storedPlan.replace(/^\"|\"$/g, '');
        const type = (plain || 'basic').toLowerCase();

        // Mapear nomes legados para um objeto UserPlan
        const mapping: Record<string, UserPlan> = {
          basic: { type: 'basic', name: 'Básico', price: 0, active: true },
          gold: { type: 'gold' as any, name: 'Gold', price: 9.9, active: true },
          professional: { type: 'professional' as any, name: 'Profissional', price: 19.9, active: true },
          premium: { type: 'premium', name: 'Premium', price: 19.9, active: true }
        };

        const resolved = mapping[type] || mapping['basic'];

        // Normalizar armazenamento para o formato de objeto
        try {
          localStorage.setItem('userPlan', JSON.stringify(resolved));
        } catch (e) {
          // ignore storage errors
        }

        return resolved;
      } catch (e) {
        console.warn('⚠️ Erro ao normalizar userPlan legada:', e);
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

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }
}

export const authService = new AuthService();