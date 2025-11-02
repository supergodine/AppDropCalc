const fetch = require('node-fetch');

async function testBackend() {
  try {
    console.log('🔄 Testando conexão com backend na porta 3002...');
    
    // Teste 1: Endpoint básico
    const healthResponse = await fetch('http://localhost:3002');
    console.log('Health Check Status:', healthResponse.status);
    
    // Teste 2: Endpoint de login
    const loginResponse = await fetch('http://localhost:3002/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'massuplas@gmail.com',
        password: 'Dhiko35@'
      })
    });
    
    console.log('Login Status:', loginResponse.status);
    console.log('Login Headers:', Object.fromEntries(loginResponse.headers.entries()));
    
    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      console.log('✅ Login Response:', loginData);
    } else {
      const errorText = await loginResponse.text();
      console.log('❌ Login Error:', errorText);
    }
    
  } catch (error) {
    console.error('❌ Erro de conexão:', error.message);
  }
}

testBackend();