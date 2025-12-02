import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import AppDataSource from './database/data-source';
import { ValidationPipe } from '@nestjs/common';

async function testDatabaseConnectionAndMigrate() {
  try {
    console.log('🔎 [DEBUG] DATABASE_URL:', process.env.DATABASE_URL);
    console.log('🔎 [DEBUG] NODE_ENV:', process.env.NODE_ENV);
    console.log('🔎 [DEBUG] PORT:', process.env.PORT);
    console.log('🔎 [DEBUG] Iniciando conexão com o banco...');
    await AppDataSource.initialize();
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
    console.log('🔎 [DEBUG] Executando migrações...');
    await AppDataSource.runMigrations();
    console.log('✅ Migrações executadas com sucesso!');
    await AppDataSource.destroy();
    console.log('🔎 [DEBUG] Migrações finalizadas, seguindo para bootstrap do app...');
  } catch (error) {
    console.error('❌ Falha ao conectar ou migrar o banco:', error);
    process.exit(1);
  }
}

async function bootstrap() {
  console.log('🔎 [DEBUG] Iniciando bootstrap do backend...');
  // Removido testDatabaseConnectionAndMigrate para evitar conflito de conexão
  console.log('🔎 [DEBUG] Criando app NestJS...');
  const app = await NestFactory.create(AppModule);


  // Prefixo global da API
  app.setGlobalPrefix('api');

  // TRUST PROXY (necessário em Render / Railway)
  app.getHttpAdapter().getInstance().set('trust proxy', 1);

  // CORS ORIGINS
  const originsFromEnv = process.env.CORS_ORIGINS;

  const allowedOrigins = originsFromEnv
    ? originsFromEnv.split(',').map((o) => o.trim())
    : [
        'https://app-drop-calc.vercel.app',
        'https://dropcalc-front.vercel.app',
        'http://localhost:5173',
        'http://localhost:3000',
        'https://appdropcalc.onrender.com', // ← IMPORTANTE!
      ];

  console.log('🌐 CORS ORIGINS ATIVADOS:', allowedOrigins);

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  // ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Calculadora de Preços API')
    .setDescription('API para calculadora de preços de dropshipping')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Porta do servidor (Render usa variável PORT)
  const port = process.env.PORT || 3000;

  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Backend rodando na porta: ${port}`);
  console.log('📘 Swagger:', `http://localhost:${port}/api/docs`);
  console.log('🔎 [DEBUG] Backend inicializado com sucesso!');
}

bootstrap();
