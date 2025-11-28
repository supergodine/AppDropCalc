// Configuração centralizada de URLs da API
export const API_CONFIG = {
  // URL base da API
  getBaseURL(): string {
    // Sempre usar variável de ambiente VITE_API_URL, fallback correto
    return import.meta.env.VITE_API_URL || 'https://dropcalc-backend.onrender.com';
  },

  // URLs específicas da API
  get auth() {
    const base = this.getBaseURL();
    const urls = {
      login: `${base}/auth/login`,
      signup: `${base}/auth/signup`,
      refresh: `${base}/auth/refresh`,
      logout: `${base}/auth/logout`,
      profile: `${base}/auth/profile`,
    };
    
    // Log das URLs para debug
    console.log('🔐 AUTH URLs:', urls);
    return urls;
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
console.log('🔧 API_CONFIG INICIALIZADO:', {
  hostname: window.location.hostname,
  baseURL: API_CONFIG.getBaseURL(),
  authSignup: API_CONFIG.auth.signup
});

// ...existing code...