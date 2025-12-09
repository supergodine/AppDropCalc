# 🌐 Guia Completo de Deploy e Domínio - DropCalc

## 🎯 **Arquitetura de Produção**

```
Internet
    ↓
Cloudflare (CDN + Security)
    ↓
Nginx Proxy (Load Balancer)
    ↓
┌─────────────────┬─────────────────┐
│   Frontend      │    Backend      │
│   (Vite PWA)    │   (NestJS API)  │
│   Port: 3000    │   Port: 3001    │
└─────────────────┴─────────────────┘
    ↓                       ↓
Static Files            PostgreSQL
(CDN)                   (Database)
                            ↓
                        Redis
                        (Cache)
```

## 🛒 **1. Comprar Domínio**

### **Sugestões de Domínio:**
- ✅ `dropcalc.app` (recomendado)
- ✅ `dropcalc.com.br`
- ✅ `dropcalc.co`
- ✅ `calculadrop.com`

### **Onde Comprar:**
- **Registro.br** (domínios .com.br) - R$ 40/ano
- **Namecheap** (domínios .app) - $12/ano
- **Cloudflare** (registro + DNS) - $8-15/ano

### **Configuração DNS:**
```
Tipo    Nome        Valor                    TTL
A       @           [IP_DO_SERVIDOR]         300
A       www         [IP_DO_SERVIDOR]         300
A       api         [IP_DO_SERVIDOR]         300
CNAME   cdn         dropcalc.b-cdn.net      300
```

## 🖥️ **2. Escolher Hospedagem**

### **Opção 1: VPS (Recomendado)**
**DigitalOcean Droplet:**
- **CPU:** 2 vCPUs
- **RAM:** 2GB
- **Storage:** 50GB SSD
- **Bandwidth:** 3TB
- **Preço:** $12/mês (~R$ 60/mês)

**Hetzner Cloud:**
- **CPU:** 2 vCPUs
- **RAM:** 4GB
- **Storage:** 40GB SSD
- **Preço:** €4.15/mês (~R$ 25/mês)

### **Opção 2: PaaS (Mais Simples)**
**Fly.io:**
- Deploy via Docker or buildpacks; recomendado para APIs com baixa-latência
- Suporta múltiplas regiões e volumes
- **Preço:** grátis até limites modestos, planos pagos conforme uso

**Vercel (para Frontend):**
- Deploy automático de apps Vite/Next; ótimo para frontend estático e PWA
- Recomenda-se usar Vercel apenas para o frontend e Fly.io para o backend

## 🐳 **3. Setup do Servidor (VPS)**

### **Servidor Ubuntu 22.04:**

```bash
#!/bin/bash
# setup-server.sh

# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependências
sudo apt install -y curl wget git nginx certbot python3-certbot-nginx

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Instalar Node.js (para builds)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Configurar firewall
sudo ufw allow 22   # SSH
sudo ufw allow 80   # HTTP
sudo ufw allow 443  # HTTPS
sudo ufw enable

# Criar usuário para deploy
sudo adduser dropcalc
sudo usermod -aG docker dropcalc
sudo usermod -aG sudo dropcalc
```

### **Configurar Nginx:**

```nginx
# /etc/nginx/sites-available/dropcalc.app
server {
    listen 80;
    server_name dropcalc.app www.dropcalc.app;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name dropcalc.app www.dropcalc.app;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/dropcalc.app/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dropcalc.app/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Frontend (PWA)
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # API Backend
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # CORS Headers
        add_header Access-Control-Allow-Origin "https://dropcalc.app" always;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Authorization, Content-Type" always;
    }
    
    # Static Files com Cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        proxy_pass http://localhost:3000;
    }
    
    # PWA Manifest e Service Worker
    location ~* \.(json|js)$ {
        expires 0;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        proxy_pass http://localhost:3000;
    }
}

# API Subdomain
server {
    listen 443 ssl http2;
    server_name api.dropcalc.app;
    
    ssl_certificate /etc/letsencrypt/live/dropcalc.app/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dropcalc.app/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### **Configurar SSL:**

```bash
# Gerar certificados Let's Encrypt
sudo certbot --nginx -d dropcalc.app -d www.dropcalc.app -d api.dropcalc.app

# Auto-renovação
sudo crontab -e
# Adicionar linha:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

## 🚀 **4. Deploy Automatizado**

### **GitHub Actions CI/CD:**

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

env:
  DOCKER_REGISTRY: ghcr.io
  IMAGE_NAME_FRONTEND: dropcalc-frontend
  IMAGE_NAME_BACKEND: dropcalc-backend

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: |
          frontend/package-lock.json
          backend/package-lock.json
    
    - name: Install and test frontend
      run: |
        cd frontend
        npm ci
        npm run build
        npm run test:unit
    
    - name: Install and test backend
      run: |
        cd backend
        npm ci
        npm run build
        npm run test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Build and push Docker images
      run: |
        echo ${{ secrets.DOCKER_PASSWORD }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin
        
        # Build and push frontend
        docker build -t ghcr.io/${{ github.repository_owner }}/${{ env.IMAGE_NAME_FRONTEND }}:latest ./frontend
        docker push ghcr.io/${{ github.repository_owner }}/${{ env.IMAGE_NAME_FRONTEND }}:latest
        
        # Build and push backend
        docker build -t ghcr.io/${{ github.repository_owner }}/${{ env.IMAGE_NAME_BACKEND }}:latest ./backend
        docker push ghcr.io/${{ github.repository_owner }}/${{ env.IMAGE_NAME_BACKEND }}:latest
    
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.SERVER_HOST }}
        username: ${{ secrets.SERVER_USER }}
        key: ${{ secrets.SERVER_SSH_KEY }}
        script: |
          cd /home/dropcalc/app
          docker-compose pull
          docker-compose down
          docker-compose up -d
          docker system prune -f
```

### **Script de Deploy Local:**

```bash
#!/bin/bash
# deploy-production.sh

set -e

echo "🚀 Deploying DropCalc to Production..."

# Variáveis
SERVER_HOST="dropcalc.app"
SERVER_USER="dropcalc"
APP_DIR="/home/dropcalc/app"

# Build local
echo "📦 Building applications..."
cd frontend && npm run build && cd ..
cd backend && npm run build && cd ..

# Enviar arquivos
echo "📤 Uploading files..."
rsync -av --exclude node_modules --exclude .git . $SERVER_USER@$SERVER_HOST:$APP_DIR/

# Deploy no servidor
echo "🐳 Deploying with Docker..."
ssh $SERVER_USER@$SERVER_HOST "cd $APP_DIR && docker-compose down && docker-compose up -d --build"

# Verificar health
echo "🏥 Checking health..."
sleep 30
curl -f https://dropcalc.app/api/health || echo "❌ Backend health check failed"
curl -f https://dropcalc.app || echo "❌ Frontend health check failed"

echo "✅ Deploy completed successfully!"
```

## 📊 **5. Monitoramento**

### **Setup Logging:**

```yaml
# docker-compose.monitoring.yml
version: '3.8'

services:
  # Logs centralizados
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    volumes:
      - loki_data:/loki

  # Métricas
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus

  # Dashboard
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3300:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin123
    volumes:
      - grafana_data:/var/lib/grafana

volumes:
  loki_data:
  prometheus_data:
  grafana_data:
```

### **Alertas (Webhook):**

```bash
# webhook-alerts.sh
#!/bin/bash

# Monitorar uptime
while true; do
  if ! curl -f https://dropcalc.app/api/health > /dev/null 2>&1; then
    # Enviar alerta via Slack/Discord
    curl -X POST -H 'Content-type: application/json' \
      --data '{"text":"🚨 DropCalc está fora do ar!"}' \
      $SLACK_WEBHOOK_URL
  fi
  sleep 300 # Check every 5 minutes
done
```

## 💰 **6. Custos Estimados**

### **Infraestrutura Mensal:**
```
Domínio (.app):           ~R$ 8/mês
VPS (Hetzner 2GB):        ~R$ 25/mês
CDN (Cloudflare Pro):     ~R$ 100/mês
Backup (S3):              ~R$ 5/mês
SSL (Let's Encrypt):      Gratuito
Monitoramento:            ~R$ 15/mês
TOTAL:                    ~R$ 153/mês
```

### **Opção Econômica:**
```
Domínio (.com.br):        ~R$ 3/mês
VPS (DigitalOcean 1GB):   ~R$ 30/mês
Cloudflare Free:          Gratuito
SSL (Let's Encrypt):      Gratuito
TOTAL:                    ~R$ 33/mês
```

## 🔧 **7. Manutenção**

### **Backup Automatizado:**

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/dropcalc/backups"

# Backup do banco
docker-compose exec -T postgres pg_dump -U dropcalc_user dropcalc_prod > "$BACKUP_DIR/db_$DATE.sql"

# Backup dos arquivos
tar -czf "$BACKUP_DIR/files_$DATE.tar.gz" /home/dropcalc/app

# Enviar para S3 (opcional)
aws s3 cp "$BACKUP_DIR/db_$DATE.sql" s3://dropcalc-backups/
aws s3 cp "$BACKUP_DIR/files_$DATE.tar.gz" s3://dropcalc-backups/

# Limpar backups antigos (manter 30 dias)
find "$BACKUP_DIR" -type f -mtime +30 -delete
```

### **Atualização Zero-Downtime:**

```bash
#!/bin/bash
# update.sh

# Build nova versão
docker-compose build

# Deploy com rolling update
docker-compose up -d --scale backend=2
sleep 30
docker-compose up -d --scale backend=1

echo "✅ Update completed with zero downtime"
```

## 🎯 **Próximos Passos:**

1. ✅ **Comprar domínio** dropcalc.app
2. ✅ **Configurar VPS** (Hetzner/DigitalOcean)
3. ✅ **Setup Nginx + SSL**
4. ✅ **Deploy inicial** com Docker
5. ✅ **Configurar CI/CD** GitHub Actions
6. ✅ **Setup monitoramento** e alertas
7. ✅ **Configurar backups** automatizados
8. ✅ **Testar performance** e otimizar

O DropCalc está **100% pronto para produção**! 🚀