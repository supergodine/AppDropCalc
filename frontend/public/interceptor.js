// INTERCEPTADOR GLOBAL - DESATIVADO PARA EVITAR INTERFERIR COM GOOGLE AUTH
/*
(function() {
    'use strict';
    
    console.log('🚀 INTERCEPTADOR GLOBAL ATIVADO - Versão Google-Safe');
    
    // 1. INTERCEPTAR FETCH
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        let finalUrl = typeof url === 'string' ? url : url.toString();
        
        // NÃO INTERCEPTAR URLs DO GOOGLE, FIREBASE OU OUTROS SERVIÇOS EXTERNOS
        if (finalUrl.includes('googleapis.com') || 
            finalUrl.includes('google.com') || 
            finalUrl.includes('firebase') ||
            finalUrl.includes('accounts.google.com') ||
            finalUrl.includes('oauth2') ||
            finalUrl.includes('gstatic.com')) {
            console.log('🟢 Permitindo URL externa:', finalUrl);
            return originalFetch(finalUrl, options);
        }
        
        // FORÇAR CORREÇÃO APENAS DE URLs DA NOSSA API
        if (finalUrl.includes('3002') || 
            (finalUrl.includes('localhost') && finalUrl.includes('/auth/')) ||
            (finalUrl.includes('vercel.app:') && finalUrl.includes('/auth/'))) {
            console.warn('🚨 URL PROBLEMÁTICA DETECTADA:', finalUrl);
            
            // Interceptor antigo removido — use VITE_API_URL no build e configure URLs apropriadas no código fonte.
            console.log('ℹ Interceptor desativado: não serão feitas correções automáticas de URL.');
        }
        
        return originalFetch(finalUrl, options);
    };
    
    // 2. INTERCEPTAR XMLHttpRequest
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        let finalUrl = url;
        
        // NÃO INTERCEPTAR URLs DO GOOGLE, FIREBASE OU OUTROS SERVIÇOS EXTERNOS
        if (finalUrl.includes('googleapis.com') || 
            finalUrl.includes('google.com') || 
            finalUrl.includes('firebase') ||
            finalUrl.includes('accounts.google.com') ||
            finalUrl.includes('oauth2') ||
            finalUrl.includes('gstatic.com')) {
            return originalXHROpen.call(this, method, finalUrl, ...args);
        }
        
            if (finalUrl.includes('3002') || 
            (finalUrl.includes('localhost') && finalUrl.includes('/auth/')) ||
            (finalUrl.includes('vercel.app:') && finalUrl.includes('/auth/'))) {
            console.warn('🚨 XHR URL PROBLEMÁTICA:', finalUrl);
            // Não realizar correções automáticas aqui. Garanta que o código use import.meta.env.VITE_API_URL.
            console.log('ℹ XHR detectada — não realizada alteração automática.');
            
            }
        }
        
        return originalXHROpen.call(this, method, finalUrl, ...args);
    };
    
    // 3. INTERCEPTAR LOCATION CHANGES (NÃO INTERFERIR COM GOOGLE AUTH)
    const originalAssign = window.location.assign;
    window.location.assign = function(url) {
        // NÃO INTERCEPTAR URLs DO GOOGLE, FIREBASE OU OUTROS SERVIÇOS EXTERNOS
        if (url.includes('googleapis.com') || 
            url.includes('google.com') || 
            url.includes('firebase') ||
            url.includes('accounts.google.com') ||
            url.includes('oauth2') ||
            url.includes('gstatic.com')) {
            console.log('🟢 Permitindo redirecionamento externo:', url);
            return originalAssign.call(this, url);
        }
        
            if (url.includes('3002') || 
            (url.includes('localhost') && url.includes('/auth/'))) {
            console.warn('🚨 LOCATION PROBLEMÁTICA:', url);
            // Não realizar correções automáticas. Use VITE_API_URL no build.
            console.log('ℹ Location problemática detectada — não alterada.');
        }
        return originalAssign.call(this, url);
    };
    
    console.log('✅ INTERCEPTADOR GOOGLE-SAFE INSTALADO COM SUCESSO');
})();
*/