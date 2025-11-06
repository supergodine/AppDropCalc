// Configuração centralizada de URLs da API
export const API_CONFIG = {
  // URL base da API
  getBaseURL(): string {
    // Em desenvolvimento: localhost
    if (import.meta.env.DEV) {
      return 'http://localhost:3001';
    }
    
    // Em produção: usar variável de ambiente ou Railway como fallback
    const envUrl = import.meta.env.VITE_API_URL;
    if (envUrl) {
      return envUrl;
    }
    
    // Fallback para Railway (nosso backend real)
    return 'https://appdropcalc-production.up.railway.app';
  },

  // URLs específicas da API
  get auth() {
    const base = this.getBaseURL();
    return {
      login: `${base}/auth/login`,
      signup: `${base}/auth/signup`,
      refresh: `${base}/auth/refresh`,
      logout: `${base}/auth/logout`,
      profile: `${base}/auth/profile`,
    };
  },

  get users() {
    const base = this.getBaseURL();
    return {
      profile: `${base}/users/profile`,
      list: `${base}/users/list`,
    };
  },

  get calc() {
    const base = this.getBaseURL();
    return {
      calculate: `${base}/calc/calcular`,
      platforms: `${base}/calc/platforms`,
      gateways: `${base}/calc/gateways`,
    };
  },

  get exchange() {
    const base = this.getBaseURL();
    return {
      rate: `${base}/exchange/rate`,
      currencies: `${base}/exchange/currencies`,
    };
  }
};

// Log da configuração para debug
console.log('🔧 API_CONFIG:', {
  isDev: import.meta.env.DEV,
  envUrl: import.meta.env.VITE_API_URL,
  baseURL: API_CONFIG.getBaseURL(),
  mode: import.meta.env.MODE
});