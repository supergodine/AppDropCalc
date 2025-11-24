  // Handler global para OPTIONS (CORS preflight)
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control');
      res.header('Access-Control-Allow-Credentials', 'true');
      return res.sendStatus(200);
    }
    next();
  });
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppDataSource } from './database/data-source';
import { ValidationPipe } from '@nestjs/common';

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
  app.getHttpAdapter().getInstance().set('trust proxy', 1);

  // === CORS CONFIGURATION CORRIGIDA ===
  const allowedOrigins = [
    'https://app-drop-calc.vercel.app',
    'https://dropcalc-front.vercel.app', 
    'http://localhost:5173',
  ];

  // HABILITAR CORS DO NESTJS (PRINCIPAL)
  app.enableCors({
    origin: function (origin, callback) {
      // Permitir requests sem origin (mobile apps, postman, etc)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log('❌ Blocked by CORS:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Allow-Headers',
      'Access-Control-Request-Headers',
      'Access-Control-Allow-Origin',
      'Cache-Control'
    ],
    exposedHeaders: ['Authorization'],
    credentials: true,
    preflightContinue: false,
  optionsSuccessStatus: 200
  });

  // VALIDATION PIPE
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  // === SWAGGER ===
  const config = new DocumentBuilder()
    .setTitle('Calculadora de Preços API')
    .setDescription('API para calculadora de preços de dropshipping')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Railway port binding
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log('🚀 Backend rodando na porta:', port);
  console.log('📋 CORS configurado para origins:', allowedOrigins);
  console.log('🔗 Swagger: http://localhost:' + port + '/api/docs');
}

bootstrap();