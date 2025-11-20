const { DataSource } = require('typeorm');

async function checkUsers() {
  const dataSource = new DataSource({
  // type: 'postgres',
  // database: '...' // configure para PostgreSQL
    synchronize: false,
    logging: true
  });

  try {
    await dataSource.initialize();
  // console.log('🔍 Conectado ao banco PostgreSQL');

    // Listar todos os usuários
    const users = await dataSource.query('SELECT id, name, email, createdAt FROM users ORDER BY createdAt DESC');
    
    console.log('\n📊 Usuários no banco:');
    console.log('Total:', users.length);
    
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.email} - ${user.name} (${user.createdAt})`);
    });

    // Verificar email específico
    const testEmail = '+teste@gmail.com';
    const existingUser = await dataSource.query('SELECT * FROM users WHERE email = ?', [testEmail]);
    
    console.log(`\n🔍 Verificando email: ${testEmail}`);
    console.log('Encontrado:', existingUser.length > 0 ? 'SIM' : 'NÃO');
    
    if (existingUser.length > 0) {
      console.log('Dados do usuário encontrado:', existingUser[0]);
    }

    await dataSource.destroy();
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

checkUsers();