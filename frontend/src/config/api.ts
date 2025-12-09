// trigger build Vercel 2025-11-29
// Trigger deploy Vercel: 2025-11-29 - commit para garantir uso da VITE_API_URL correta
// Deploy sem impacto funcional - forçar build Vercel
// Configuração centralizada de URLs da API
// Use exclusivamente a variável de ambiente VITE_API_URL (sem fallback)
export const API_BASE_URL: string = import.meta.env.VITE_API_URL;

// trigger: deploy Vercel 2025-11-29

// Normalize API root so callers won't accidentally create duplicate `/api/api` paths.
const _base = API_BASE_URL ? API_BASE_URL.replace(/\/$/, '') : API_BASE_URL;
// Ensure API_ROOT always ends with a single '/api' and avoid duplicate '/api/api'
let computedRoot = _base;
if (!computedRoot) {
  computedRoot = API_BASE_URL;
}
if (computedRoot && !computedRoot.endsWith('/api')) {
  computedRoot = `${computedRoot}/api`;
}
// Defensive: collapse any accidental '/api/api' to '/api'
computedRoot = computedRoot.replace(/\/api\/api+/g, '/api');
export const API_ROOT = computedRoot;

export const AUTH_URLS = {
  login: `${API_ROOT}/auth/login`,
  signup: `${API_ROOT}/auth/signup`,
  social: `${API_ROOT}/auth/social`,
  refresh: `${API_ROOT}/auth/refresh`,
  logout: `${API_ROOT}/auth/logout`,
  profile: `${API_ROOT}/auth/profile`,
  forgotPassword: `${API_ROOT}/auth/forgot-password`,
};

export const API_CONFIG = {
  getBaseURL(): string {
    return API_ROOT || API_BASE_URL;
  },
  get auth() {
    return AUTH_URLS;
  },
  get users() {
    return {
      profile: `${API_ROOT}/users/profile`,
      list: `${API_ROOT}/users/list`,
    };
  },
  get calc() {
    return {
      calculate: `${API_ROOT}/calc/calcular`,
      platforms: `${API_ROOT}/calc/platforms`,
      gateways: `${API_ROOT}/calc/gateways`,
    };
  },
  get exchange() {
    return {
      rate: `${API_ROOT}/exchange/rate`,
      currencies: `${API_ROOT}/exchange/currencies`,
    };
  }
};

// Log da configuração para debug
console.log('🔧 API_CONFIG INICIALIZADO:', {
  baseURL: API_CONFIG.getBaseURL(),
  authSignup: API_CONFIG.auth.signup
});

// ...existing code...