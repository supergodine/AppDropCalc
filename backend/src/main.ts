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
  // Middleware para logar requests e garantir resposta para preflight
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Cache-Control, X-Requested-With, Origin, Referer, User-Agent, Access-Control-Allow-Origin');
      res.header('Access-Control-Allow-Credentials', 'true');
      return res.sendStatus(200);
    }
    next();
  });

  // CORS SUPER PERMISSIVO PARA PRODUÇÃO FUNCIONAR
  app.enableCors({
    origin: function (origin, callback) {
      const allowed = [
        "https://app-drop-calc.vercel.app",
        "https://dropcalc-front.vercel.app",
        "https://*.vercel.app",
        "http://localhost:5173"
      ];
      // Permite qualquer subdomínio *.vercel.app
      if (!origin || allowed.includes(origin) || /https:\/\/.+\.vercel\.app$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Cache-Control",
      "X-Requested-With",
      "Origin",
      "Referer",
      "User-Agent",
      "Access-Control-Allow-Origin"
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Calculadora de Preços API')
    .setDescription('API para calculadora de preços de dropshipping')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

    // Força novo deploy após instalar TypeScript
  // Railway PORT
  await app.listen(process.env.PORT || 3000, "0.0.0.0");

  console.log("🚀 Backend rodando!");
  console.log("🌐 CORS habilitado para:", [
    "https://app-drop-calc.vercel.app",
    "https://dropcalc-front.vercel.app",
    "https://*.vercel.app",
  ]);
}

bootstrap();
