import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppDataSource } from './database/data-source';

async function testDatabaseConnectionAndMigrate() {
  try {
    await AppDataSource.initialize();
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
    await AppDataSource.runMigrations();
    console.log('✅ Migrações executadas com sucesso!');
    await AppDataSource.destroy();
  } catch (error) {
    console.error('❌ Falha ao conectar ou migrar o banco:', error);
    process.exit(1);
  }
}

async function bootstrap() {
  await testDatabaseConnectionAndMigrate();
  const app = await NestFactory.create(AppModule);

  // TRUST PROXY - necessário no Railway
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.set('trust proxy', 1);

  // === MIDDLEWARE CORS MANUAL ===
  app.use((req: any, res: any, next: any) => {
    const allowedOrigins = [
      'https://app-drop-calc.vercel.app',
      'https://dropcalc-front.vercel.app',
      'http://localhost:5173',
    ];
    
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');

    // Responde imediatamente para requisições OPTIONS
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    
    next();
  });

  // === CORS do NestJS como backup ===
  app.enableCors({
    origin: [
      'https://app-drop-calc.vercel.app',
      'https://dropcalc-front.vercel.app',
      'http://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization,Accept',
    credentials: true,
  });

  // === Swagger ===
  const config = new DocumentBuilder()
    .setTitle('Calculadora de Preços API')
    .setDescription('API para calculadora de preços de dropshipping')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Railway port binding
  await app.listen(process.env.PORT || 3000, '0.0.0.0');

  console.log('🚀 Backend rodando!');
}

bootstrap();