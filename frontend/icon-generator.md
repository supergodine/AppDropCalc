# Gerador de Ícones PWA para DropCalc

## Como usar este script:

### 1. Instalar Sharp (conversor de imagens)
```bash
npm install -g sharp-cli
```

### 2. Converter SVG para PNG em diferentes tamanhos
```bash
# Navegar para a pasta public
cd c:\Users\DIEGO\Desktop\calculadora\frontend\public

# Gerar ícone 192x192
sharp -i icon.svg -o pwa-192x192.png --resize 192

# Gerar ícone 512x512
sharp -i icon.svg -o pwa-512x512.png --resize 512

# Gerar favicon
sharp -i icon.svg -o favicon.ico --resize 32

# Gerar apple-touch-icon
sharp -i icon.svg -o apple-touch-icon.png --resize 180
```

### 3. Alternative: Use online converter
Se não conseguir instalar Sharp, use:
- https://cloudconvert.com/svg-to-png
- Upload do icon.svg
- Gerar nos tamanhos: 192x192, 512x512, 180x180, 32x32

### 4. Renomear arquivos:
- 192x192.png → pwa-192x192.png
- 512x512.png → pwa-512x512.png  
- 180x180.png → apple-touch-icon.png
- 32x32.png → favicon.ico

## Resultado final:
```
public/
├── icon.svg
├── pwa-192x192.png
├── pwa-512x512.png
├── apple-touch-icon.png
└── favicon.ico
```