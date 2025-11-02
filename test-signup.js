const axios = require('axios');

async function testSignup() {
  try {
    console.log('🔄 Testando cadastro...');
    
    const response = await axios.post('http://localhost:3001/auth/signup', {
      email: 'massuplas@gmail.com',
      password: 'Dhiko35@',
      name: 'Diego'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Cadastro realizado com sucesso!');
    console.log('Resposta:', JSON.stringify(response.data, null, 2));

  } catch (error) {
    console.log('❌ Erro no cadastro:');
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Dados:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.log('Erro:', error.message);
    }
  }
}

testSignup();