# 🔥 Configuração do Firebase Authentication

## ⚙️ Passos para configurar Firebase real:

### 1️⃣ Criar projeto no Firebase Console
1. Acesse: https://console.firebase.google.com/
2. Clique em "Adicionar projeto"
3. Digite o nome: `dropcalc-production`
4. Desabilite Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2️⃣ Configurar Authentication
1. No painel lateral, clique em "Authentication"
2. Vá para a aba "Sign-in method"
3. Habilite "E-mail/senha"
4. Marque "Permitir que os usuários se cadastrem"

### 3️⃣ Obter configuração do projeto
1. Clique no ícone de engrenagem ⚙️ → "Configurações do projeto"
2. Role até "Seus apps" → clique em "Web" `</>`
3. Digite o nome do app: `DropCalc Web`
4. **NÃO** marque Firebase Hosting
5. Copie as configurações que aparecem

### 4️⃣ Substituir no código
Substitua o conteúdo de `src/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// COLE SUA CONFIGURAÇÃO REAL AQUI:
const firebaseConfig = {
  apiKey: "sua-api-key-aqui",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:seuappid"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
```

### 5️⃣ Configurar domínio autorizado
1. Em Authentication → Settings → Authorized domains
2. Adicione seu domínio de produção
3. `localhost` já está liberado por padrão

## 🔒 Regras de Segurança (Firestore - opcional)
Se for usar Firestore posteriormente:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários podem ler/escrever apenas seus próprios dados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Dados públicos (planos, configurações)
    match /public/{document} {
      allow read: if true;
      allow write: if false; // Apenas admin pode escrever
    }
  }
}
```

## 📊 Plano Spark (Gratuito)
- **Autenticação**: 10,000 verificações/mês
- **Firestore**: 50,000 leituras + 20,000 escritas/dia
- **Hosting**: 10GB armazenamento + 360MB transferência/dia
- **Functions**: 125,000 invocações/mês

## ⚠️ Importante
- Mantenha suas chaves privadas **SEGURAS**
- Use variáveis de ambiente em produção
- Configure regras de segurança adequadas
- Monitore uso no console Firebase

## 🧪 Para desenvolvimento local
O app atual funciona com configuração demo. Para testar:
1. Use email: `teste@demo.com`
2. Use senha: `123456`
3. Crie novas contas com qualquer email válido