# Guia Completo: PWA para Android com Bubblewrap

## 📱 **Setup Android TWA (Trusted Web Activity)**

### **Pré-requisitos:**

1. **Node.js** instalado
2. **Android Studio** com SDK
3. **JDK 8 ou superior**
4. **Domínio HTTPS** configurado

### **1. Instalar Bubblewrap**

```bash
npm install -g @bubblewrap/cli
```

### **2. Configurar Projeto Android**

```bash
# Navegar para diretório do projeto
cd c:\Users\DIEGO\Desktop\calculadora

# Criar pasta para Android
mkdir android
cd android

# Inicializar projeto Bubblewrap
bubblewrap init --manifest https://dropcalc.app/manifest.json
```

### **3. Configuração do twa-manifest.json**

O comando init criará um arquivo `twa-manifest.json`. Configurar como:

```json
{
  "packageId": "app.dropcalc.twa",
  "host": "dropcalc.app",
  "name": "DropCalc",
  "launcherName": "DropCalc",
  "display": "standalone",
  "themeColor": "#6366f1",
  "navigationColor": "#1e1b4b",
  "backgroundColor": "#1e1b4b",
  "enableNotifications": true,
  "startUrl": "/",
  "iconUrl": "https://dropcalc.app/pwa-512x512.png",
  "splashScreenFadeOutDuration": 300,
  "signingKey": {
    "path": "android.keystore",
    "alias": "dropcalc-key"
  },
  "appVersion": "1.0.0",
  "appVersionCode": 1,
  "shortcuts": [
    {
      "name": "Nova Calculação",
      "short_name": "Calcular",
      "url": "/new-calculation",
      "icon": "https://dropcalc.app/pwa-192x192.png"
    }
  ],
  "generatorApp": "@bubblewrap/cli",
  "webManifestUrl": "https://dropcalc.app/manifest.json",
  "fallbackType": "customtabs",
  "features": {
    "locationDelegation": {
      "enabled": false
    },
    "playBilling": {
      "enabled": false
    }
  },
  "alphaDependencies": {
    "enabled": false
  },
  "minSdkVersion": 19,
  "targetSdkVersion": 33
}
```

### **4. Gerar Keystore para Assinatura**

```bash
# Gerar chave de assinatura
keytool -genkey -v -keystore android.keystore -alias dropcalc-key -keyalg RSA -keysize 2048 -validity 10000

# Informações para preencher:
# Nome: DropCalc Team
# Organização: DropCalc Tecnologia
# Cidade: São Paulo
# Estado: SP
# País: BR
# Senha: [criar senha segura]
```

### **5. Configurar Asset Links**

Criar arquivo `.well-known/assetlinks.json` no domínio:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "app.dropcalc.twa",
    "sha256_cert_fingerprints": ["SHA256_DA_SUA_CHAVE"]
  }
}]
```

Para obter SHA256:
```bash
keytool -list -v -keystore android.keystore -alias dropcalc-key -storepass [sua-senha] -keypass [sua-senha]
```

### **6. Build do APK**

```bash
# Build do projeto
bubblewrap build

# Resultado será gerado em:
# app/build/outputs/apk/release/app-release.apk
```

### **7. Testar APK**

```bash
# Instalar no dispositivo/emulador conectado
adb install app/build/outputs/apk/release/app-release.apk
```

### **8. Gerar Bundle para Play Store**

```bash
# Build AAB (Android App Bundle)
bubblewrap build --target=bundle

# Resultado:
# app/build/outputs/bundle/release/app-release.aab
```

## 📋 **Checklist para Play Store**

### **Assets Necessários:**

#### **Ícones:**
- [x] 512x512px (ícone principal)
- [x] 192x192px (ícone adaptativo)
- [ ] Ícone adaptativo (foreground + background)

#### **Screenshots:**
- [ ] 2-8 screenshots por dispositivo
- [ ] Telefone: 320px-3840px (16:9 ou 9:16)
- [ ] Tablet: 1080px-7680px

#### **Banner:**
- [ ] Banner gráfico: 1024x500px

#### **Textos:**
- [ ] Título do app (30 caracteres)
- [ ] Descrição curta (80 caracteres)
- [ ] Descrição completa (4000 caracteres)

### **Informações do App:**

```
Título: DropCalc - Calculadora Dropshipping
Descrição curta: Calculadora profissional para precificar produtos de dropshipping
Categoria: Negócios
Classificação: Livre
```

### **Descrição completa:**
```
🚀 DropCalc - A calculadora definitiva para dropshipping!

Precifique seus produtos com precisão profissional e maximize seus lucros no dropshipping.

✨ RECURSOS PRINCIPAIS:
• Cálculo automático de preço de venda
• Suporte a 70+ moedas internacionais
• Cálculo de impostos e taxas
• Margem de lucro otimizada
• Histórico completo de cálculos
• Relatórios detalhados

💰 FUNCIONALIDADES:
• Conversão de moedas em tempo real
• Cálculo de frete e impostos
• Análise de competitividade
• Simulação de cenários
• Exportação de dados

🎯 PARA QUEM É:
• Empreendedores de dropshipping
• Lojistas online
• Revendedores
• Consultores de e-commerce

📱 DISPONÍVEL OFFLINE:
Funciona mesmo sem internet após instalação.

⭐ GRATUITO com funcionalidades premium disponíveis.

Baixe agora e transforme seu negócio de dropshipping!
```

## 🚀 **Comandos de Deploy**

### **Script automatizado:**

```bash
#!/bin/bash
# android-deploy.sh

echo "🏗️ Building Android TWA..."

# Build PWA
cd ../frontend
npm run build

# Deploy PWA (substituir por seu método)
# rsync -av dist/ user@servidor:/var/www/dropcalc.app/

# Build Android
cd ../android
bubblewrap build --target=bundle

echo "✅ Android AAB gerado em: app/build/outputs/bundle/release/app-release.aab"
echo "📱 Pronto para upload na Play Store!"
```

### **Testar Digital Asset Links:**

```bash
# Verificar se asset links estão corretos
curl https://dropcalc.app/.well-known/assetlinks.json
```

## 📈 **Próximos Passos:**

1. **Deploy PWA** em domínio HTTPS
2. **Configurar Asset Links** no servidor
3. **Build do AAB** com Bubblewrap
4. **Upload na Play Console**
5. **Configurar listing** da loja
6. **Teste interno** e review
7. **Publicação** para produção

## 🔧 **Troubleshooting:**

### **Erro de Asset Links:**
```bash
# Verificar sintaxe JSON
cat .well-known/assetlinks.json | python -m json.tool
```

### **Problema de certificado:**
```bash
# Verificar SHA256 da chave
keytool -list -v -keystore android.keystore -alias dropcalc-key
```

### **APK não instala:**
```bash
# Verificar permissões
adb shell pm list permissions
```