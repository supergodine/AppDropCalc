# DropCalc - Guia de Instalação e Desenvolvimento

## 🚀 Quick Start

### Opção 1: Docker (Recomendado)

```bash
# Clone o repositório
git clone <repository-url>
cd calculadora

# Configure as variáveis de ambiente
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edite os arquivos .env com suas configurações

# Suba os serviços
docker-compose up -d

# Execute os seeds (primeira vez)
docker-compose exec backend npm run seed
```

Acesse:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Documentação: http://localhost:3001/api/docs

### Opção 2: Desenvolvimento Local

#### Pré-requisitos
- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

#### Backend

```bash
cd backend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env

# Executar migrations e seeds
npm run migration:run
npm run seed

# Iniciar em modo desenvolvimento
npm run start:dev
```

#### Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env

# Iniciar em modo desenvolvimento
npm run dev
```

## 📚 Documentação Técnica

### Arquitetura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   React + Vite  │◄──►│   NestJS        │◄──►│   PostgreSQL    │
│   Tailwind CSS  │    │   TypeORM       │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       
         │              ┌─────────────────┐              
         └──────────────►│  External APIs  │              
                        │  Exchange Rates │              
                        │  OAuth Google   │              
                        └─────────────────┘              
```

### Fluxo de Dados

1. **Usuário** preenche formulário de cálculo
2. **Frontend** valida dados e envia para API
3. **Backend** busca taxa de câmbio em tempo real
4. **Backend** aplica presets de plataforma/gateway
5. **Serviço de Precificação** calcula preços com diferentes estratégias
6. **Backend** salva cálculo no banco
7. **Frontend** exibe resultado com simulações

### Fórmulas de Cálculo

#### Preço por Margem
```
PreçoVenda = CustoTotal / (1 - (Taxas% + MargemDesejada% + Ads%))
```

#### Preço por Markup
```
PreçoVenda = CustoTotal * (1 + Markup%)
```

#### Lucro Líquido
```
LucroLíquido = PreçoVenda - CustoTotal - TaxasReais - CustoAds
```

### APIs Externas

#### Câmbio (Fallback em cascata)
1. **OpenExchangeRates** (principal)
2. **ExchangeRate-API** (fallback 1)
3. **European Central Bank** (fallback 2, apenas EUR)

#### OAuth
- **Google** para login social

## 🔧 Configurações

### Variáveis de Ambiente

#### Backend (.env)
```env
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/dropcalc"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRATION="7d"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Exchange API
EXCHANGE_API_KEY="your-openexchangerates-key"

# Environment
NODE_ENV="development"
PORT=3001
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

### Presets Incluídos

#### Plataformas Brasileiras
- **Nuvemshop**: 2.0% + R$0.49
- **Shopify**: 2.9% + R$0.30
- **WooCommerce**: 0% (taxas do gateway)
- **Mercado Livre**: ~16% (variável)
- **Amazon Brasil**: ~15%
- **Americanas**: ~18%
- **Magazine Luiza**: ~17%
- **Facebook/Instagram Shop**: ~5%

#### Gateways Brasileiros
- **Mercado Pago**: 4.99% (cartão), 0.99% (PIX)
- **PagSeguro**: 4.99% (cartão), 0.99% (PIX)
- **Stripe**: 3.4% + R$0.30
- **PayPal**: 4.4% + R$0.60
- **Cielo**: 3.25% (cartão)
- **Rede**: 3.5% (cartão)
- **GetNet**: 3.4% (cartão)

## 🧪 Testes

### Backend
```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Coverage
npm run test:cov
```

### Frontend
```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e
```

## 📦 Deploy

### Produção com Docker

```bash
# Build das imagens
docker-compose -f docker-compose.prod.yml build

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

### Vercel (Frontend)

```bash
# Configurar variáveis no Vercel
# VITE_API_URL=https://api.your-domain.com
# VITE_GOOGLE_CLIENT_ID=your-google-client-id

# Deploy automático via Git
git push origin main
```

### Railway/Heroku (Backend)

```bash
# Configurar variáveis de ambiente no painel
# Fazer deploy via Git
git push railway main
```

## 🔐 Segurança

### Implementado
- ✅ Validação de entrada (class-validator)
- ✅ Rate limiting (100 req/min)
- ✅ CORS configurado
- ✅ Helmet para headers de segurança
- ✅ JWT com expiração
- ✅ Senhas hasheadas (bcrypt)
- ✅ Sanitização de dados

### Recomendações para Produção
- [ ] HTTPS obrigatório
- [ ] WAF (Cloudflare/AWS)
- [ ] Logs centralizados
- [ ] Monitoramento (Sentry)
- [ ] Backup automático do banco
- [ ] Rotação de secrets

## 📊 Monitoramento

### Métricas Importantes
- Tempo de resposta da API
- Taxa de erro das APIs externas
- Número de cálculos por usuário
- Conversão de cadastros
- Uso de cada preset

### Health Checks
- Backend: `GET /health`
- Frontend: `GET /health`
- Database: Connection status

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

### Problemas Comuns

#### Erro de conexão com banco
```bash
# Verificar se PostgreSQL está rodando
docker-compose logs postgres

# Recriar volume se necessário
docker-compose down -v
docker-compose up -d
```

#### Erro nas APIs de câmbio
- Verificar se `EXCHANGE_API_KEY` está configurada
- Verificar logs do backend para detalhes
- APIs têm fallback automático

#### Erro no OAuth Google
- Verificar `GOOGLE_CLIENT_ID` no frontend e backend
- Configurar URLs de callback no Google Console

### Contato
- 📧 Email: suporte@dropcalc.com
- 💬 Discord: [Link do servidor]
- 📚 Docs: https://docs.dropcalc.com