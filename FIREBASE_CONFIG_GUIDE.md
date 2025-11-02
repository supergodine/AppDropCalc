# 🔥 Guia de Configuração Firebase

## Passo 1: Criar Projeto
1. Vá para: https://console.firebase.google.com/
2. Clique em "Adicionar projeto" 
3. Nome: `DropCalc` (ou qualquer nome)
4. Aceite os termos e crie

## Passo 2: Adicionar App Web
1. No painel do projeto, clique no ícone `</>`
2. Nome do app: `DropCalc Web App`
3. **IMPORTANTE**: Marque "Also set up Firebase Hosting"
4. Clique em "Registrar app"

## Passo 3: Copiar Configuração
Você verá uma tela com um código assim:

```javascript
const firebaseConfig = {
  apiKey: "sua-api-key-aqui",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

**COPIE ESSES VALORES!** Você vai precisar deles.

## Passo 4: Ativar Authentication
1. No menu esquerdo, clique em "Authentication"
2. Clique em "Get started"
3. Vá na aba "Sign-in method"
4. Clique em "Email/Password"
5. **Ative** a primeira opção "Email/Password"
6. Clique em "Save"

## Passo 5: Configurar no projeto
Após copiar os valores, me informe que eu atualizo o arquivo de configuração!