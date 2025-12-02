// trigger build Vercel 2025-11-29
// Trigger deploy Vercel: 2025-11-29 - commit para garantir uso da VITE_API_URL correta
// Deploy sem impacto funcional - forçar build Vercel
// Configuração centralizada de URLs da API
const BASE_URL = import.meta.env.VITE_API_URL || "https://appdropcalc.onrender.com";

// trigger: deploy Vercel 2025-11-29

export const AUTH_URLS = {
  login: `${BASE_URL}/api/auth/login`,
  signup: `${BASE_URL}/api/auth/signup`,
  refresh: `${BASE_URL}/api/auth/refresh`,
  logout: `${BASE_URL}/api/auth/logout`,
  profile: `${BASE_URL}/api/auth/profile`,
};

export const API_CONFIG = {
  getBaseURL(): string {
    return BASE_URL;
  },
  get auth() {
    return AUTH_URLS;
  },
  get users() {
    return {
      profile: `${BASE_URL}/users/profile`,
      list: `${BASE_URL}/users/list`,
    };
  },
  get calc() {
    return {
      calculate: `${BASE_URL}/calc/calcular`,
      platforms: `${BASE_URL}/calc/platforms`,
      gateways: `${BASE_URL}/calc/gateways`,
    };
  },
  get exchange() {
    return {
      rate: `${BASE_URL}/exchange/rate`,
      currencies: `${BASE_URL}/exchange/currencies`,
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