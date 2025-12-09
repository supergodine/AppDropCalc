const Mailjet = require('node-mailjet');
require('dotenv').config();

const toEmail = process.argv[2] || 'chavecoko35@gmail.com';
(async () => {
  const { MAILJET_API_KEY, MAILJET_SECRET_KEY, MAILJET_SENDER_EMAIL } = process.env;
  if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !MAILJET_SENDER_EMAIL) {
    console.error('Missing Mailjet env vars. Check .env');
    process.exit(1);
  }

  const client = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);
  try {
    const body = {
      Messages: [
        {
          From: { Email: MAILJET_SENDER_EMAIL, Name: 'DropCalc' },
          To: [{ Email: toEmail }],
          Subject: 'Teste Mailjet - DropCalc',
          TextPart: 'Este é um e-mail de teste enviado via Mailjet',
          HTMLPart: '<h3>Teste Mailjet - DropCalc</h3><p>Se recebeu este e-mail, a configuração do Mailjet está funcionando.</p>'
        },
      ],
    };

    const res = await client.post('send', { version: 'v3.1' }).request(body);
    console.log('Mailjet response status:', res.status);
    console.log('Mailjet response body:', JSON.stringify(res.body, null, 2));
    process.exit(0);
  } catch (err) {
    console.error('Mailjet send error:', err.message || err);
    if (err && err.response && err.response.body) console.error('Response body:', JSON.stringify(err.response.body, null,2));
    process.exit(2);
  }
})();