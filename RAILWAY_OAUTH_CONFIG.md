# 🚨 CONFIGURAÇÃO URGENTE - Railway Environment Variables

O Google OAuth está falhando porque as variáveis de ambiente não estão configuradas no Railway.

## ✅ STEPS PARA CORRIGIR NO RAILWAY:

### 1. Acesse o Railway Dashboard:
- Vá para: https://railway.app/dashboard
- Selecione o projeto: appdropcalc-production

### 2. Configure estas variáveis de ambiente:
```
GOOGLE_CLIENT_ID=931741442377-t814hbaisjjah0nadg6hukpqphjmafv.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=https://appdropcalc-production.up.railway.app/auth/google/callback
BACKEND_URL=https://appdropcalc-production.up.railway.app
JWT_SECRET=your-super-secure-jwt-secret-key-for-production-change-this-immediately-2024
DATABASE_TYPE=sqlite
DATABASE_DATABASE=database.sqlite
```

### 3. Configure no Google Cloud Console:
- Acesse: https://console.cloud.google.com/apis/credentials
- Projeto: DropCalc ou o projeto usado
- Edite as "Authorized redirect URIs" para incluir:
  - `https://appdropcalc-production.up.railway.app/auth/google/callback`

### 4. Após configurar:
- O Railway vai fazer redeploy automaticamente
- Teste o login novamente

## 🎯 Status Atual:
- ✅ Frontend: Funcionando no Vercel 
- ✅ Backend: Funcionando no Railway
- ❌ Google OAuth: Precisa das env vars no Railway
- ❌ Google Console: Precisa atualizar callback URLs

## 🔍 Como verificar se funcionou:
1. Aguarde o redeploy do Railway (2-3 minutos)
2. Teste: https://app-drop-calc-matcqzw7v.vercel.app/login
3. Clique em "Continuar com Google"
4. Deve redirecionar para o Google OAuth sem erro 401

Timestamp: 2025-11-03 12:30:00