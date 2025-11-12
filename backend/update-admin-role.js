const axios = require('axios');

async function updateAdminRole() {
  const BASE_URL = 'https://appdropcalc-production.up.railway.app';
  
  try {
    // Primeiro fazer login para obter token
    console.log('🔐 Fazendo login como admin...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'comercial@calientabeauty.com',
      password: '001266'
    });
    
    const { accessToken, user } = loginResponse.data;
    console.log('✅ Login realizado com sucesso');
    console.log('User ID:', user.id);
    console.log('Current role:', user.role);
    console.log('Current plan:', user.plan);
    
    // Tentar acessar endpoint de usuários para verificar se existe update
    try {
      const usersResponse = await axios.get(`${BASE_URL}/users`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      console.log('✅ Acesso aos usuários funcionando');
      console.log('Total usuários:', usersResponse.data.length);
    } catch (error) {
      console.log('⚠️  Endpoint /users não encontrado ou sem permissão');
    }

    // Tentar atualizar via PATCH
    try {
      const updateResponse = await axios.patch(`${BASE_URL}/users/${user.id}`, {
        role: 'admin',
        plan: 'premium'
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Usuário atualizado para admin/premium');
      console.log('Updated user:', updateResponse.data);
    } catch (error) {
      console.log('⚠️  Não foi possível atualizar via PATCH');
      console.log('Erro:', error.response?.data || error.message);
    }

  } catch (error) {
    console.log('❌ Erro:', error.response?.data || error.message);
  }
}

updateAdminRole();