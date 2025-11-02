# 📱 DropCalc - Guia para Publicação no Google Play Store

## 🎯 Estratégia Recomendada: TWA (Trusted Web Activity)

### O que é TWA?
- Converte seu PWA em um app Android nativo
- Mantém todo o código web existente
- Aceito pelo Google Play Store
- Experiência nativa para o usuário

## 🛠️ Ferramentas Necessárias

### 1. Bubblewrap (Google)
```bash
npm install -g @bubblewrap/cli
```

### 2. Android Studio
- Download: https://developer.android.com/studio
- Necessário para assinar o APK

### 3. Conta Google Play Console
- Taxa única: $25 USD
- https://play.google.com/console

## 📋 Passos para Publicação

### Fase 1: Preparação do PWA
1. ✅ PWA funcional (já temos)
2. ✅ HTTPS obrigatório (configurar domínio)
3. ✅ Manifest.json otimizado
4. ✅ Service Worker ativo
5. ✅ Ícones em todas as resoluções

### Fase 2: Geração do APK
1. Configurar Bubblewrap
2. Gerar projeto Android
3. Build e assinatura
4. Testes em dispositivos

### Fase 3: Play Store
1. Criar conta de desenvolvedor
2. Upload do APK
3. Configurar listagem
4. Política de privacidade
5. Revisão do Google

## 💰 Custos Envolvidos

### Obrigatórios:
- **Conta Google Play Console**: $25 USD (taxa única)
- **Domínio HTTPS**: ~$10-15/ano
- **Hospedagem**: ~$5-20/mês

### Opcionais:
- **Certificado SSL**: Gratuito (Let's Encrypt)
- **Analytics**: Gratuito (Google Analytics)

## 🔧 Próximos Passos Imediatos

1. **Configurar domínio e HTTPS**
2. **Otimizar PWA para produção**
3. **Configurar Android build**
4. **Preparar assets da Play Store**

## 📱 Assets Necessários para Play Store

### Ícones:
- 512x512 (ícone principal)
- 192x192, 144x144, 96x96, 72x72, 48x48

### Screenshots:
- Telefone: 16:9 ou 9:16 (mín. 320px)
- Tablet: Opcional mas recomendado

### Gráficos:
- Banner: 1024x500
- Ícone de recurso: 512x512

### Textos:
- Título: Máx. 30 caracteres
- Descrição curta: Máx. 80 caracteres  
- Descrição completa: Máx. 4000 caracteres

## 🎯 Monetização

### Estratégias:
1. **Freemium**: Básico grátis + Premium pago
2. **Assinatura mensal**: R$ 9,90-29,90/mês
3. **Compra única**: R$ 49,90-99,90
4. **In-app purchases**: Features extras

### Play Store Taxa:
- **30%** das vendas para Google
- **15%** se faturar menos de $1M/ano

## ⚠️ Requisitos Legais

### Obrigatório:
- **Política de Privacidade** (LGPD/GDPR)
- **Termos de Uso**
- **Idade mínima** (classificação)
- **Permissões claras**

### Compliance:
- LGPD (Brasil)
- GDPR (Europa)
- COPPA (EUA - menores)