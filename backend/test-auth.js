const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

async function testSignup() {
  try {
    console.log('🔄 Testando signup...');
    
    const signupResponse = await axios.post(`${BASE_URL}/auth/signup`, {
      name: 'Diego Test',
      email: 'massuplas@gmail.com',
      password: 'Dhiko35@'
    });

    console.log('✅ Signup bem-sucedido:');
    console.log('Token:', signupResponse.data.accessToken);
    console.log('Usuário:', signupResponse.data.user);
    
    return signupResponse.data.accessToken;
  } catch (error) {
    if (error.response) {
      console.log('❌ Erro no signup:', error.response.status);
      console.log('Dados:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.log('❌ Erro:', error.message);
    }
    return null;
  }
}

async function testLogin() {
  try {
    console.log('\n🔄 Testando login...');
    
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'massuplas@gmail.com',
      password: 'Dhiko35@'
    });

    console.log('✅ Login bem-sucedido:');
    console.log('Token:', loginResponse.data.accessToken);
    console.log('Usuário:', loginResponse.data.user);
    
    return loginResponse.data.accessToken;
  } catch (error) {
    if (error.response) {
      console.log('❌ Erro no login:', error.response.status);
      console.log('Dados:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.log('❌ Erro:', error.message);
    }
    return null;
  }
}

async function main() {
  console.log('🚀 Iniciando testes de autenticação...\n');
  
  // Primeiro tenta fazer signup
  let token = await testSignup();
  
  // Se signup falhar (usuário já existe), tenta login
  if (!token) {
    token = await testLogin();
  }
  
  if (token) {
    console.log('\n✅ Autenticação funcionando corretamente!');
  } else {
    console.log('\n❌ Problemas na autenticação');
  }
}

main();