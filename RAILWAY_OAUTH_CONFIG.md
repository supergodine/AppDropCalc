# 🚨 CONFIGURAÇÃO URGENTE - Environment Variables

O Google OAuth está falhando porque as variáveis de ambiente não estão configuradas no provedor de deploy.

## ✅ STEPS PARA CORRIGIR NO PROVEDOR DE DEPLOY:

### 1. Acesse o painel do provedor de deploy:
- Vá para o painel do seu provedor de deploy (ex.: https://dashboard.do/ ou https://console.fly.io/)
- Selecione o projeto: appdropcalc-production (ou projeto correspondente)

### 2. Configure estas variáveis de ambiente:
```
GOOGLE_CLIENT_ID=931741442377-t814hbaisjjah0nadg6hukpqphjmafv.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=https://api.seu-dominio.com/auth/google/callback
BACKEND_URL=https://api.seu-dominio.com
JWT_SECRET=your-super-secure-jwt-secret-key-for-production-change-this-immediately-2024
DATABASE_TYPE=sqlite
DATABASE_DATABASE=database.sqlite
```

### 3. Configure no Google Cloud Console:
- Acesse: https://console.cloud.google.com/apis/credentials
- Projeto: DropCalc ou o projeto usado
- Edite as "Authorized redirect URIs" para incluir:
  - `https://api.seu-dominio.com/auth/google/callback`

### 4. Após configurar:
-- O provedor de deploy fará o redeploy automaticamente
-- Teste o login novamente

## 🎯 Status Atual:
- ✅ Frontend: Funcionando no Vercel 
-- ✅ Backend: Funcionando no provedor de deploy
-- ❌ Google OAuth: Precisa das env vars no provedor de deploy
- ❌ Google Console: Precisa atualizar callback URLs

## 🔍 Como verificar se funcionou:
1. Aguarde o redeploy do provedor de deploy (2-3 minutos)
2. Teste: https://app-drop-calc.example.com/login
3. Clique em "Continuar com Google"
4. Deve redirecionar para o Google OAuth sem erro 401

Timestamp: 2025-11-03 12:30:00