const axios = require('axios');

async function listRailwayUsers() {
  try {
    console.log('🔍 Verificando usuários no Railway...');
    
    // Tentar login com admin criado
    const loginAdmin = await axios.post('https://appdropcalc-production.up.railway.app/auth/login', {
      email: 'comercial@calientabeauty.com',
      password: '001266'
    });
    
    console.log('✅ Admin login funcionou!');
    console.log('User data:', loginAdmin.data.user);
    
  } catch (error) {
    console.log('❌ Admin login falhou:', error.response?.data);
    
    // Tentar criar novamente o admin
    try {
      console.log('🔄 Tentando criar admin novamente...');
      const createAdmin = await axios.post('https://appdropcalc-production.up.railway.app/auth/signup', {
        name: 'Usuario Adm',
        email: 'comercial@calientabeauty.com',
        password: '001266'
      });
      
      console.log('✅ Admin criado novamente!');
      console.log('User data:', createAdmin.data.user);
      
    } catch (createError) {
      console.log('❌ Erro ao criar admin:', createError.response?.data);
    }
  }
  
  // Tentar com outros usuários existentes para ver se o problema é geral
  console.log('\n🔍 Testando outros logins...');
  
  const testUsers = [
    { email: 'lidiane181@hotmail.com', password: 'senha123' },
    { email: 'merciasantana3@gmail.com', password: 'senha123' },
    { email: 'massuplas@gmail.com', password: 'senha123' }
  ];
  
  for (const testUser of testUsers) {
    try {
      const loginTest = await axios.post('https://appdropcalc-production.up.railway.app/auth/login', testUser);
      console.log(`✅ Login funcionou para: ${testUser.email}`);
    } catch (error) {
      console.log(`❌ Login falhou para: ${testUser.email} - ${error.response?.data?.message}`);
    }
  }
}

listRailwayUsers();