#!/bin/bash

# Script de Deploy para Produção - DropCalc
# Uso: ./deploy.sh [staging|production]

set -e

ENVIRONMENT=${1:-staging}
DOMAIN="dropcalc.app"

echo "🚀 Iniciando deploy para ambiente: $ENVIRONMENT"

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para logging
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

# Verificar se Docker está rodando
if ! docker info > /dev/null 2>&1; then
    error "Docker não está rodando. Inicie o Docker e tente novamente."
    exit 1
fi

# Backup do banco de dados (se produção)
if [ "$ENVIRONMENT" = "production" ]; then
    log "Fazendo backup do banco de dados..."
    docker-compose exec -T postgres pg_dump -U dropcalc_user dropcalc_prod > "backup_$(date +%Y%m%d_%H%M%S).sql"
fi

# Build das imagens
log "Construindo imagens Docker..."
docker-compose build --no-cache

# Parar containers antigos
log "Parando containers antigos..."
docker-compose down

# Iniciar novos containers
log "Iniciando novos containers..."
docker-compose up -d

# Aguardar containers ficarem prontos
log "Aguardando containers ficarem prontos..."
sleep 30

# Verificar se containers estão rodando
log "Verificando status dos containers..."
if docker-compose ps | grep -q "Up"; then
    log "✅ Deploy realizado com sucesso!"
else
    error "❌ Erro no deploy. Verificando logs..."
    docker-compose logs
    exit 1
fi

# Executar migrações do banco
log "Executando migrações do banco de dados..."
docker-compose exec backend npm run migration:run

# Executar seeds (se necessário)
if [ "$ENVIRONMENT" = "staging" ]; then
    log "Executando seeds de desenvolvimento..."
    docker-compose exec backend npm run seed
fi

# Verificar health checks
log "Verificando health checks..."
sleep 10

# Backend health check
if curl -f http://localhost:3001/api/health > /dev/null 2>&1; then
    log "✅ Backend está funcionando"
else
    error "❌ Backend não está respondendo"
fi

# Frontend health check
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    log "✅ Frontend está funcionando"
else
    error "❌ Frontend não está respondendo"
fi

# Configurar SSL (se produção)
if [ "$ENVIRONMENT" = "production" ]; then
    log "Configurando SSL com Let's Encrypt..."
    # docker-compose exec nginx-proxy certbot --nginx -d $DOMAIN -d api.$DOMAIN
fi

# Limpar imagens antigas
log "Limpando imagens Docker antigas..."
docker image prune -f

log "🎉 Deploy concluído com sucesso!"
log "📱 Frontend: http://localhost:3000"
log "🔧 Backend: http://localhost:3001"
log "📊 Swagger: http://localhost:3001/api/docs"

if [ "$ENVIRONMENT" = "production" ]; then
    log "🌐 Site: https://$DOMAIN"
    log "🔐 SSL configurado para https://$DOMAIN"
fi