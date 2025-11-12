const axios = require('axios');

async function createAdminViaAPI() {
  const BASE_URL = 'https://appdropcalc-production.up.railway.app';
  
  try {
    console.log('🔍 Tentando criar usuário admin via API...');
    
    // Dados do admin
    const adminData = {
      name: 'Usuario Adm',
      email: 'comercial@calientabeauty.com',
      password: '001266'
    };

    // Tentar criar via signup
    const response = await axios.post(`${BASE_URL}/auth/signup`, adminData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Usuário admin criado no Railway!');
    console.log('Response:', response.data);

  } catch (error) {
    if (error.response) {
      console.log('❌ Erro na resposta:', error.response.status);
      console.log('Mensagem:', error.response.data);
      
      if (error.response.status === 400 && error.response.data.message?.includes('já existe')) {
        console.log('⚠️  Usuário já existe, tentando fazer login...');
        
        try {
          const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
            email: adminData.email,
            password: adminData.password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          console.log('✅ Login bem-sucedido!');
          console.log('Token:', loginResponse.data.accessToken);
          console.log('User:', loginResponse.data.user);
          
        } catch (loginError) {
          console.log('❌ Erro no login:', loginError.response?.data || loginError.message);
        }
      }
    } else {
      console.log('❌ Erro de rede:', error.message);
    }
  }
}

createAdminViaAPI();