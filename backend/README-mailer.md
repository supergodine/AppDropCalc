# Envio de E-mails via Hostinger SMTP

## 1. Crie o arquivo `.env` com as variáveis:

```
HOSTINGER_SMTP_HOST=smtp.hostinger.com
HOSTINGER_SMTP_PORT=587
HOSTINGER_SMTP_SECURE=false
HOSTINGER_SMTP_USER=seu-email@dominio.com
HOSTINGER_SMTP_PASS=sua-senha
MAIL_FROM="Equipe DropCalc <suporte@procuracerta.com>"
```

## 2. Instale as dependências

```bash
npm install nodemailer dotenv
```

## 3. Teste o envio de e-mail

```bash
node test-sendmail.js
```
