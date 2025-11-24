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

  // === CORS CONFIGURATION SIMPLIFICADA E CORRIGIDA ===
  const allowedOrigins = [
    'https://app-drop-calc.vercel.app',
    'https://dropcalc-front.vercel.app',
    'http://localhost:5173',
  ];

  // Middleware CORS manual para tratamento correto do preflight
  app.use((req: any, res: any, next: any) => {
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Cache-Control, X-Requested-With');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Max-Age', '86400'); // Cache preflight por 24h

    // Resposta CORRETA para preflight OPTIONS
    if (req.method === 'OPTIONS') {
      res.header('Content-Length', '0');
      res.header('Content-Type', 'text/plain');
      res.status(204).send();
      return;
    }

    next();
  });

  // === CORS do NestJS como backup (OPCIONAL - pode remover se quiser usar só o middleware) ===
  app.enableCors({
    origin: (origin, callback) => {
      // Permitir requests sem origin (como mobile apps ou curl)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Cache-Control', 'X-Requested-With'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
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
  console.log('📋 CORS configurado para origins:', allowedOrigins);
}

bootstrap();