# Backend Dockerfile - NestJS API
FROM node:18-alpine AS base

# Instalar dependências do sistema
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Instalar dependências
FROM base AS deps
RUN npm ci --only=production && npm cache clean --force

# Build da aplicação
FROM base AS builder
COPY . .
RUN npm run build

# Produção
FROM node:18-alpine AS runner
WORKDIR /app

# Criar usuário não-root
RUN addgroup --system --gid 1001 nestjs
RUN adduser --system --uid 1001 nestjs

# Criar diretório para banco de dados
RUN mkdir -p /app/data && chown -R nestjs:nestjs /app/data

# Copiar arquivos necessários
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Definir permissões
RUN chown -R nestjs:nestjs /app
USER nestjs

# Expor porta
EXPOSE 3001

# Variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "http.get('http://localhost:3001/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Comando de inicialização
CMD ["node", "dist/main"]