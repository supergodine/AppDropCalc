import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { seedPresets } from './preset-seed';

// Configuração do banco para seed
async function createDataSource() {
  const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres123',
    database: process.env.DATABASE_NAME || 'dropcalc',
    entities: [
      'src/modules/**/entities/*.entity.ts',
      'dist/modules/**/entities/*.entity.js',
    ],
    synchronize: true, // Para desenvolvimento
    logging: false,
  });

  return dataSource;
}

async function runSeed() {
  console.log('🌱 Iniciando processo de seed...');
  
  const dataSource = await createDataSource();
  
  try {
    await dataSource.initialize();
    console.log('✅ Conexão com banco estabelecida');

    // Executar seeds
    await seedPresets(dataSource);

    console.log('🎉 Todos os seeds foram executados com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante execução dos seeds:', error);
    process.exit(1);
  } finally {
    await dataSource.destroy();
    console.log('🔌 Conexão com banco encerrada');
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  runSeed();
}

export { runSeed };