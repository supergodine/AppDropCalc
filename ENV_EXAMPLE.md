# Configuração de Ambiente para Desenvolvimento

Este arquivo contém as variáveis de ambiente necessárias para executar o DropCalc localmente.

## Backend (.env)

```bash
# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=dropcalc
DATABASE_PASSWORD=dropcalc123
DATABASE_NAME=dropcalc

# JWT
JWT_SECRET=sua_jwt_secret_super_segura_aqui_128_caracteres_minimo
JWT_EXPIRES_IN=7d

# Google OAuth
GOOGLE_CLIENT_ID=seu_google_client_id_aqui
GOOGLE_CLIENT_SECRET=seu_google_client_secret_aqui

# Exchange Rates APIs
OPENEXCHANGERATES_API_KEY=sua_api_key_openexchangerates_aqui
EXCHANGERATE_API_KEY=sua_api_key_exchangerate_api_aqui

# App
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

## Frontend (.env.local)

```bash
# API
VITE_API_URL=http://localhost:3001

# Google OAuth (mesmo client ID do backend)
VITE_GOOGLE_CLIENT_ID=seu_google_client_id_aqui

# App Info
VITE_APP_NAME=DropCalc
VITE_APP_VERSION=1.0.0
```

## Docker Compose (.env)

```bash
# Database
POSTGRES_DB=dropcalc
POSTGRES_USER=dropcalc
POSTGRES_PASSWORD=dropcalc123

# Backend
JWT_SECRET=sua_jwt_secret_super_segura_aqui_128_caracteres_minimo
JWT_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=seu_google_client_id_aqui
GOOGLE_CLIENT_SECRET=seu_google_client_secret_aqui
OPENEXCHANGERATES_API_KEY=sua_api_key_openexchangerates_aqui
EXCHANGERATE_API_KEY=sua_api_key_exchangerate_api_aqui
NODE_ENV=production
PORT=3001
FRONTEND_URL=http://localhost:3000

# Frontend
VITE_API_URL=http://localhost:3001
VITE_GOOGLE_CLIENT_ID=seu_google_client_id_aqui
VITE_APP_NAME=DropCalc
VITE_APP_VERSION=1.0.0
```

## Como Obter as API Keys

### 1. OpenExchangeRates (Recomendado)
1. Acesse https://openexchangerates.org/
2. Crie uma conta gratuita
3. Vá em "App IDs" no dashboard
4. Copie sua API Key

### 2. ExchangeRate-API (Fallback)
1. Acesse https://app.exchangerate-api.com/
2. Crie uma conta gratuita
3. Copie sua API Key do dashboard

### 3. Google OAuth
1. Acesse https://console.cloud.google.com/
2. Crie um novo projeto ou selecione um existente
3. Ative a API "Google+ API"
4. Vá em "Credenciais" > "Criar credenciais" > "ID do cliente OAuth"
5. Configure as URLs de callback:
   - Desenvolvimento: `http://localhost:3001/auth/google/callback`
   - Produção: `https://seudominio.com/auth/google/callback`

## Segurança

⚠️ **IMPORTANTE**: 
- Nunca commite arquivos `.env` no git
- Use senhas fortes em produção
- Regenere todas as secrets antes do deploy
- Configure CORS adequadamente para produção
- Use HTTPS em produção