const { DataSource } = require('typeorm');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

async function createAdminUser() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: './database.sqlite',
    synchronize: false,
    logging: true
  });

  try {
    await dataSource.initialize();
    console.log('🔍 Conectado ao banco SQLite');

    const adminEmail = 'comercial@calientabeauty.com';
    const adminName = 'Usuario Adm';
    const adminPassword = '001266';

    // Verificar estrutura da tabela users
    const tableInfo = await dataSource.query("PRAGMA table_info(users)");
    console.log('\n📋 Estrutura da tabela users:');
    tableInfo.forEach(col => {
      console.log(`- ${col.name}: ${col.type} ${col.notnull ? '(NOT NULL)' : '(NULL)'}`);
    });

    // Verificar se já existe
    const existingAdmin = await dataSource.query('SELECT * FROM users WHERE email = ?', [adminEmail]);
    
    if (existingAdmin.length > 0) {
      console.log('⚠️  Usuário administrador já existe!');
      console.log('Dados:', existingAdmin[0]);
      await dataSource.destroy();
      return;
    }

    // Criptografar senha
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(adminPassword, saltRounds);

    // Criar usuário administrador (sem coluna role se não existir)
    const adminId = uuidv4();
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const hasRoleColumn = tableInfo.some(col => col.name === 'role');
    
    if (hasRoleColumn) {
      await dataSource.query(`
        INSERT INTO users (
          id, name, email, passwordHash, currencyDefault, country, 
          plan, status, calculationsCount, role, createdAt, updatedAt
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        adminId, adminName, adminEmail, passwordHash, 'BRL', 'BR',
        'premium', 'active', 0, 'admin', now, now
      ]);
    } else {
      console.log('⚠️  Coluna role não existe, criando usuário sem role...');
      await dataSource.query(`
        INSERT INTO users (
          id, name, email, passwordHash, currencyDefault, country, 
          plan, status, calculationsCount, createdAt, updatedAt
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        adminId, adminName, adminEmail, passwordHash, 'BRL', 'BR',
        'premium', 'active', 0, now, now
      ]);
    }

    console.log('✅ Usuário administrador criado com sucesso!');
    console.log('📧 Email:', adminEmail);
    console.log('👤 Nome:', adminName);
    console.log('🔑 Senha:', adminPassword);
    console.log('� Plan: premium');
    console.log('⚠️  Note: Role será gerenciado pelo email no frontend');

    // Verificar criação
    const createdAdmin = await dataSource.query('SELECT id, name, email, plan, createdAt FROM users WHERE email = ?', [adminEmail]);
    console.log('\n🔍 Usuário criado:', createdAdmin[0]);

    await dataSource.destroy();
    console.log('\n✅ Usuário administrador pronto para uso!');

  } catch (error) {
    console.error('❌ Erro ao criar usuário administrador:', error.message);
    console.error('Stack:', error.stack);
  }
}

createAdminUser();