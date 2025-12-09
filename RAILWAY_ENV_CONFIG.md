# Configuração de Variáveis de Ambiente para provedor de deploy
# Execute estes comandos no painel do provedor de deploy ou CLI

# Database Configuration
DATABASE_TYPE=sqlite
DATABASE_URL=./data/database.sqlite

# JWT Configuration  
JWT_SECRET=your-super-secret-jwt-key-change-in-production-123456789
JWT_EXPIRATION=7d

# OAuth Google Configuration
GOOGLE_CLIENT_ID=931741442377-t814hbaisjjah0nadg6hukpqphjmafv.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=https://api.seu-dominio.com/auth/google/callback

# Gmail Configuration
GMAIL_USER=massuplas@gmail.com
GMAIL_PASSWORD=uqhd cmye vyfx derx

# Application Configuration
NODE_ENV=production
PORT=3001
API_PREFIX=api

# CORS Configuration
CORS_ORIGIN=https://app-drop-calc-matcqzw7v.vercel.app

# Rate Limiting
THROTTLE_TTL=60
THROTTLE_LIMIT=100