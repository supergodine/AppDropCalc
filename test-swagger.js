const fetch = require('node-fetch');

async function testSwagger() {
  try {
    console.log('🔄 Testando Swagger...');
    const response = await fetch('http://localhost:3001/api/docs');
    console.log('Status:', response.status);
    const text = await response.text();
    console.log('Response length:', text.length);
    console.log('Content-Type:', response.headers.get('content-type'));
    console.log('First 500 chars:', text.substring(0, 500));
  } catch (error) {
    console.error('❌ Erro ao acessar Swagger:', error.message);
  }
}

testSwagger();