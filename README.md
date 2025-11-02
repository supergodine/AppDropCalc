# DropCalc - Calculadora de Precificação para Dropshipping

## 📋 Sobre o Projeto

DropCalc é uma aplicação web moderna e responsiva para calcular preços de venda em dropshipping, considerando automaticamente câmbio, taxas de gateway, impostos e custos operacionais.

### 🎯 Principais Funcionalidades

- ✅ Cálculo automático de preço de venda com múltiplas estratégias
- ✅ Integração com APIs de câmbio em tempo real
- ✅ Presets configuráveis para plataformas e gateways brasileiros
- ✅ Simulação interativa com ajustes em tempo real
- ✅ Histórico de cálculos com exportação
- ✅ Sistema de autenticação JWT + OAuth Google
- ✅ Interface moderna com Tailwind CSS e Framer Motion

## 🏗️ Arquitetura

```
calculadora/
├── backend/          # API NestJS + PostgreSQL
├── frontend/         # React + Vite + Tailwind
├── docker-compose.yml
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- PostgreSQL 14+
- Docker (opcional)

### 1. Clone e instale dependências

```bash
# Backend
cd backend
npm install

# Frontend  
cd frontend
npm install
```

### 2. Configure variáveis de ambiente

Copie `.env.example` para `.env` em cada pasta e configure:

```bash
# Backend (.env)
DATABASE_URL="postgresql://user:password@localhost:5432/dropcalc"
JWT_SECRET="seu-jwt-secret"
EXCHANGE_API_KEY="sua-chave-openexchangerates"
GOOGLE_CLIENT_ID="seu-google-client-id"
GOOGLE_CLIENT_SECRET="seu-google-client-secret"

# Frontend (.env)
VITE_API_URL="http://localhost:3001"
VITE_GOOGLE_CLIENT_ID="seu-google-client-id"
```

### 3. Execute o projeto

```bash
# Backend
cd backend
npm run start:dev

# Frontend
cd frontend  
npm run dev
```

### 4. Com Docker (Recomendado)

```bash
docker-compose up -d
```

## 📊 Fórmulas de Cálculo

### Preço por Margem
```
PreçoVenda = CustoTotal / (1 - (Taxas% + MargemDesejada% + Ads%))
```

### Preço por Markup
```
PreçoVenda = CustoTotal * (1 + Markup%)
```

### Lucro Líquido
```
Lucro = PreçoVenda - CustoTotal - (Taxas sobre PreçoVenda) - Ads
```

## 🔧 APIs Integradas

- **Câmbio**: OpenExchangeRates (primary), ExchangeRate-API (fallback)
- **Impostos BR**: IBPT (tabela de tributos simplificada)
- **Gateways**: Stripe, PayPal, MercadoPago, PagSeguro

## 📈 Planos de Monetização

- **Free**: 50 cálculos/mês
- **Pro**: Ilimitado + Export CSV/Excel 
- **Premium**: + Integrações avançadas + White-label

## 🛠️ Stack Tecnológica

### Backend
- NestJS
- PostgreSQL + TypeORM
- JWT + Passport
- Swagger Documentation

### Frontend  
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Query
- React Hook Form

## 🧪 Testes

```bash
# Backend
npm run test
npm run test:e2e

# Frontend
npm run test
npm run test:e2e
```

## 📦 Deploy

### Vercel (Frontend)
```bash
npm run build
vercel --prod
```

### Railway/Heroku (Backend)
```bash
git push heroku main
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido com ❤️ para a comunidade brasileira de dropshipping