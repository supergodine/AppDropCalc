import { DataSource } from 'typeorm';
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

const dataSourceOptions: any = {
  type: 'postgres',
  entities: [],
  logging: true,
};

if (process.env.DATABASE_URL) {
  dataSourceOptions.url = process.env.DATABASE_URL;
  if (isProd) {
    dataSourceOptions.ssl = { rejectUnauthorized: false };
    dataSourceOptions.extra = { ssl: { rejectUnauthorized: false } };
  }
} else {
  // fallback only for local/dev (not for production)
  dataSourceOptions.host = process.env.DB_HOST;
  dataSourceOptions.port = Number(process.env.DB_PORT || 5432);
  dataSourceOptions.username = process.env.DB_USERNAME;
  dataSourceOptions.password = process.env.DB_PASSWORD;
  dataSourceOptions.database = process.env.DB_NAME;
}

const dataSource = new DataSource(dataSourceOptions);

async function testDatabaseConnection() {
  try {
    await dataSource.initialize();
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
    await dataSource.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Falha ao conectar ao PostgreSQL:', error);
    process.exit(1);
  }
}

testDatabaseConnection();
