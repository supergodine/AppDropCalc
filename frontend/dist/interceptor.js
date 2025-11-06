// INTERCEPTADOR GLOBAL - FORÇA URL CORRETA
(function() {
    'use strict';
    
    console.log('🚀 INTERCEPTADOR GLOBAL ATIVADO');
    
    // 1. INTERCEPTAR FETCH
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        let finalUrl = typeof url === 'string' ? url : url.toString();
        
        // FORÇAR CORREÇÃO DE QUALQUER URL PROBLEMÁTICA
        if (finalUrl.includes('3002') || finalUrl.includes('localhost') || finalUrl.includes('vercel.app:')) {
            console.warn('🚨 URL PROBLEMÁTICA DETECTADA:', finalUrl);
            
            // REGEX PARA CORRIGIR QUALQUER VARIAÇÃO
            finalUrl = finalUrl
                .replace(/http:\/\/.*?:3002/g, 'https://appdropcalc-production.up.railway.app')
                .replace(/http:\/\/localhost:\d+/g, 'https://appdropcalc-production.up.railway.app')
                .replace(/http:\/\/.*\.vercel\.app:\d+/g, 'https://appdropcalc-production.up.railway.app')
                .replace(/https:\/\/.*\.vercel\.app:\d+/g, 'https://appdropcalc-production.up.railway.app');
            
            console.log('✅ URL CORRIGIDA PARA:', finalUrl);
        }
        
        return originalFetch(finalUrl, options);
    };
    
    // 2. INTERCEPTAR XMLHttpRequest
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        let finalUrl = url;
        
        if (finalUrl.includes('3002') || finalUrl.includes('localhost') || finalUrl.includes('vercel.app:')) {
            console.warn('🚨 XHR URL PROBLEMÁTICA:', finalUrl);
            finalUrl = finalUrl
                .replace(/http:\/\/.*?:3002/g, 'https://appdropcalc-production.up.railway.app')
                .replace(/http:\/\/localhost:\d+/g, 'https://appdropcalc-production.up.railway.app')
                .replace(/http:\/\/.*\.vercel\.app:\d+/g, 'https://appdropcalc-production.up.railway.app');
            console.log('✅ XHR CORRIGIDA:', finalUrl);
        }
        
        return originalXHROpen.call(this, method, finalUrl, ...args);
    };
    
    // 3. INTERCEPTAR LOCATION CHANGES
    const originalAssign = window.location.assign;
    window.location.assign = function(url) {
        if (url.includes('3002') || url.includes('localhost')) {
            console.warn('🚨 LOCATION PROBLEMÁTICA:', url);
            url = url.replace(/http:\/\/.*?:3002/g, 'https://appdropcalc-production.up.railway.app');
            console.log('✅ LOCATION CORRIGIDA:', url);
        }
        return originalAssign.call(this, url);
    };
    
    console.log('✅ INTERCEPTADOR INSTALADO COM SUCESSO');
})();