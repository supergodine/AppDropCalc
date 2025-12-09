import { 
  signInWithPopup, 
  signInWithRedirect, 
  getRedirectResult, 
  signOut as firebaseSignOut,
  User 
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { API_CONFIG } from '../config/api';

export interface GoogleAuthUser {
  id: string;
  email: string;
  name: string;
  photoURL?: string;
  accessToken?: string;
}

class GoogleAuthService {
  // Login com popup (preferido para desktop)
  async loginWithPopup(): Promise<GoogleAuthUser> {
    try {
      console.log('🔐 Iniciando login Google com popup...');
      
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log('✅ Login Google sucesso:', {
        uid: user.uid,
        email: user.email,
        name: user.displayName
      });
      
      return this.processGoogleUser(user);
    } catch (error: any) {
      console.error('❌ Erro no login Google popup:', error);
      throw new Error(`Falha no login Google: ${error.message}`);
    }
  }

  // Login com redirecionamento (para mobile/casos especiais)
  async loginWithRedirect(): Promise<void> {
    try {
      console.log('🔐 Iniciando login Google com redirect...');
      await signInWithRedirect(auth, googleProvider);
    } catch (error: any) {
      console.error('❌ Erro no redirect Google:', error);
      throw new Error(`Falha no redirect Google: ${error.message}`);
    }
  }

  // Verificar resultado do redirecionamento
  async handleRedirectResult(): Promise<GoogleAuthUser | null> {
    try {
      const result = await getRedirectResult(auth);
      if (result?.user) {
        console.log('✅ Login Google redirect sucesso:', {
          uid: result.user.uid,
          email: result.user.email,
          name: result.user.displayName
        });
        return this.processGoogleUser(result.user);
      }
      return null;
    } catch (error: any) {
      console.error('❌ Erro no resultado redirect:', error);
      throw new Error(`Falha no resultado Google: ${error.message}`);
    }
  }

  // Processar dados do usuário Google
  private processGoogleUser(user: User): GoogleAuthUser {
    return {
      id: user.uid,
      email: user.email || '',
      name: user.displayName || '',
      photoURL: user.photoURL || undefined,
    };
  }

  // Sincronizar com backend (opcional)
  async syncWithBackend(googleUser: GoogleAuthUser): Promise<any> {
    try {
      console.log('🔄 Sincronizando com backend...');
      // Obter token JWT do Firebase
      const currentUser = auth.currentUser;
      const token = currentUser ? await currentUser.getIdToken() : null;

      // If provider is google, use social endpoint; keep email/password flow using login
      const endpoint = API_CONFIG.auth.social || API_CONFIG.auth.login;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          email: googleUser.email,
          name: googleUser.name,
          googleId: googleUser.id,
          photoURL: googleUser.photoURL,
          provider: 'google'
        }),
      });

      if (!response.ok) {
        // Se usuário não existe, tentar criar
        const created = await this.createUserInBackend(googleUser);
        if (created && created.accessToken && created.user) {
          localStorage.setItem('accessToken', created.accessToken);
          localStorage.setItem('currentUser', JSON.stringify(created.user));
          return created;
        }
        // Backend não retornou token; usar token do Firebase como fallback
        if (token) {
          try {
            localStorage.setItem('accessToken', token);
            localStorage.setItem('currentUser', JSON.stringify({
              id: googleUser.id,
              email: googleUser.email,
              name: googleUser.name,
              photoURL: googleUser.photoURL,
              provider: 'google'
            }));
            console.log('🔑 Usando token Firebase como fallback para accessToken');
            return { accessToken: token, user: googleUser };
          } catch (e) {
            console.warn('⚠️ Falha ao salvar token de fallback:', e);
          }
        }
        return googleUser;
      }

      const data = await response.json();
      if (data && data.accessToken && data.user) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        console.log('✅ Usuário sincronizado com backend');
        return data;
      }
      // Backend não retornou accessToken — usar token Firebase como fallback
      if (token) {
        try {
          localStorage.setItem('accessToken', token);
          localStorage.setItem('currentUser', JSON.stringify({
            id: googleUser.id,
            email: googleUser.email,
            name: googleUser.name,
            photoURL: googleUser.photoURL,
            provider: 'google'
          }));
          console.log('🔑 Usando token Firebase como fallback para accessToken (sem dados do backend)');
          return { accessToken: token, user: googleUser };
        } catch (e) {
          console.warn('⚠️ Falha ao salvar token de fallback:', e);
        }
      }
      console.warn('⚠️ Backend não retornou dados válidos, login Google incompleto');
      return googleUser;
    } catch (error) {
      console.error('❌ Erro na sincronização:', error);
      // Continuar mesmo se backend falhar
      // Se tivermos token Firebase, usar como fallback
      const currentUser = auth.currentUser;
      const token = currentUser ? await currentUser.getIdToken() : null;
      if (token) {
        try {
          localStorage.setItem('accessToken', token);
          localStorage.setItem('currentUser', JSON.stringify({
            id: googleUser.id,
            email: googleUser.email,
            name: googleUser.name,
            photoURL: googleUser.photoURL,
            provider: 'google'
          }));
          console.log('🔑 Usando token Firebase como fallback (catch)');
          return { accessToken: token, user: googleUser };
        } catch (e) {
          console.warn('⚠️ Falha ao salvar token de fallback no catch:', e);
        }
      }
      return googleUser;
    }
  }

  // Criar usuário no backend
  private async createUserInBackend(googleUser: GoogleAuthUser): Promise<any> {
    try {
      console.log('👤 Criando usuário no backend...');
      
      const response = await fetch(API_CONFIG.auth.signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: googleUser.email,
          name: googleUser.name,
          password: `google_${googleUser.id}`, // Password temporário
          googleId: googleUser.id,
          photoURL: googleUser.photoURL,
          provider: 'google'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Usuário criado no backend');
        // Salvar token JWT e dados do usuário
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
        }
        if (data.user) {
          localStorage.setItem('currentUser', JSON.stringify(data.user));
        }
        // Redirecionar para a calculadora
        window.location.href = '/dashboard';
        return data;
      } else {
        console.warn('⚠️ Falha ao criar no backend, continuando...');
        return googleUser;
      }
    } catch (error) {
      console.error('❌ Erro ao criar usuário:', error);
      return googleUser;
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await firebaseSignOut(auth);
      console.log('✅ Logout Google realizado');
    } catch (error) {
      console.error('❌ Erro no logout Google:', error);
      throw error;
    }
  }

  // Verificar se usuário está logado
  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  // Listener para mudanças de estado
  onAuthStateChange(callback: (user: User | null) => void) {
    return auth.onAuthStateChanged(callback);
  }
}

export const googleAuthService = new GoogleAuthService();