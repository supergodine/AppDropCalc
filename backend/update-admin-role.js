const axios = require('axios');
const BASE_URL = process.env.BACKEND_URL || 'http://localhost:10000';

async function updateAdminRole() {
    // Teste de login e chamada autenticada ao endpoint /users/create-admin
    try {
      console.log('🔐 Testando login para obter token...');
      const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
        email: 'massuplas@gmail.com',
        password: '01659760'
      });
      const { accessToken } = loginResponse.data;
      console.log('✅ Token obtido:', accessToken ? 'OK' : 'FALHA');

      // Chamada autenticada ao endpoint de criação de admin
      console.log('🚀 Chamando /users/create-admin com token...');
      const adminResponse = await axios.get(`${BASE_URL}/users/create-admin`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      console.log('✅ Usuário admin criado/recuperado:', adminResponse.data);
    } catch (error) {
      console.log('❌ Erro no teste autenticado:', error.response?.data || error.message);
    }

  // Teste de criação de usuário
  try {
    console.log('🆕 Testando criação de usuário...');
    const signupResponse = await axios.post(`${BASE_URL}/auth/signup`, {
      email: 'testuser' + Date.now() + '@example.com',
      password: 'test1234',
      name: 'Usuário Teste'
    });
    console.log('✅ Usuário criado:', signupResponse.data);

    // Agora tentar login com o novo usuário
    console.log('🔐 Fazendo login com usuário teste...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: signupResponse.data.email,
      password: 'test1234'
    });
    const { accessToken, user } = loginResponse.data;
    console.log('✅ Login realizado com sucesso');
    console.log('User ID:', user.id);
    console.log('Current role:', user.role);
    console.log('Current plan:', user.plan);
  } catch (error) {
    console.log('❌ Erro:', error.response?.data || error.message);
  }
}

updateAdminRole();