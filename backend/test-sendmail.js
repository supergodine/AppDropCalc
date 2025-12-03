require('dotenv').config();
const nodemailer = require('nodemailer');

const {
  HOSTINGER_SMTP_HOST,
  HOSTINGER_SMTP_PORT,
  HOSTINGER_SMTP_SECURE,
  HOSTINGER_SMTP_USER,
  HOSTINGER_SMTP_PASS,
  MAIL_FROM,
} = process.env;

const transporter = nodemailer.createTransport({
  host: HOSTINGER_SMTP_HOST,
  port: Number(HOSTINGER_SMTP_PORT),
  secure: HOSTINGER_SMTP_SECURE === 'true',
  auth: {
    user: HOSTINGER_SMTP_USER,
    pass: HOSTINGER_SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

(async () => {
  try {
    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: 'chavegoko35@gmail.com',
      subject: 'Teste SMTP Hostinger',
      html: '<b>Funcionando!</b>',
      text: 'Funcionando!',
    });
    console.log('Resposta:', info);
  } catch (err) {
    console.error('Erro:', err.message, err.response);
  }
})();
