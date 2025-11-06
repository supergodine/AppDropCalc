// Configuração centralizada de URLs da API
export const API_CONFIG = {
  // URL base da API
  getBaseURL(): string {
    // FORÇAR detecção de ambiente mais robusta
    const isProduction = window.location.hostname !== 'localhost' && 
                        window.location.hostname !== '127.0.0.1' &&
                        !window.location.hostname.includes('localhost');
    
    // Em desenvolvimento: localhost
    if (!isProduction) {
      console.log('🟡 AMBIENTE: DESENVOLVIMENTO - usando localhost:3001');
      return 'http://localhost:3001';
    }
    
    // EM PRODUÇÃO: SEMPRE RAILWAY HTTPS - NUNCA VERCEL COM PORTA
    console.log('🟢 AMBIENTE: PRODUÇÃO - forçando Railway HTTPS');
    return 'https://appdropcalc-production.up.railway.app';
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
  isProduction: window.location.hostname !== 'localhost' && 
                window.location.hostname !== '127.0.0.1' &&
                !window.location.hostname.includes('localhost'),
  baseURL: API_CONFIG.getBaseURL(),
  authSignup: API_CONFIG.auth.signup
});

// VALIDAÇÃO EXTRA: Verificar se há URLs problemáticas
const validateUrls = () => {
  const problematicPatterns = [':3002', 'vercel.app:3002', 'localhost:3002'];
  const urls = [API_CONFIG.auth.signup, API_CONFIG.auth.login];
  
  urls.forEach(url => {
    problematicPatterns.forEach(pattern => {
      if (url.includes(pattern)) {
        console.error('🚨 URL PROBLEMÁTICA DETECTADA:', url);
        console.error('🚨 PADRÃO PROBLEMÁTICO:', pattern);
      }
    });
  });
};

validateUrls();