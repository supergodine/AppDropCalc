// trigger build Vercel 2025-11-29
// Trigger deploy Vercel: 2025-11-29 - commit para garantir uso da VITE_API_URL correta
// Deploy sem impacto funcional - forçar build Vercel
// Configuração centralizada de URLs da API
// Use exclusivamente a variável de ambiente VITE_API_URL (sem fallback)
export const API_BASE_URL: string = import.meta.env.VITE_API_URL;

// trigger: deploy Vercel 2025-11-29

export const AUTH_URLS = {
  login: `${BASE_URL}/api/auth/login`,
  signup: `${BASE_URL}/api/auth/signup`,
  social: `${BASE_URL}/api/auth/social`,
  refresh: `${BASE_URL}/api/auth/refresh`,
  logout: `${BASE_URL}/api/auth/logout`,
  profile: `${BASE_URL}/api/auth/profile`,
  forgotPassword: `${BASE_URL}/api/auth/forgot-password`,
};

export const API_CONFIG = {
  getBaseURL(): string {
    return API_BASE_URL;
  },
  get auth() {
    return AUTH_URLS;
  },
  get users() {
    return {
      profile: `${API_BASE_URL}/users/profile`,
      list: `${API_BASE_URL}/users/list`,
    };
  },
  get calc() {
    return {
      calculate: `${API_BASE_URL}/calc/calcular`,
      platforms: `${API_BASE_URL}/calc/platforms`,
      gateways: `${API_BASE_URL}/calc/gateways`,
    };
  },
  get exchange() {
    return {
      rate: `${API_BASE_URL}/exchange/rate`,
      currencies: `${API_BASE_URL}/exchange/currencies`,
    };
  }
};

// Log da configuração para debug
console.log('🔧 API_CONFIG INICIALIZADO:', {
  baseURL: API_CONFIG.getBaseURL(),
  authSignup: API_CONFIG.auth.signup
});

// ...existing code...