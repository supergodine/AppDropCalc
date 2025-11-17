import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Calculadora de Preços API')
    .setDescription('API para calculadora de preços de dropshipping')
    .setVersion('1.0')
    .addTag('auth', 'Autenticação de usuários')
    .addTag('calculations', 'Cálculos de preços')
    .addTag('users', 'Gerenciamento de usuários')
    .addTag('exchange', 'Taxas de câmbio')
    .addTag('presets', 'Presets de cálculo')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // ============================
  // 🔥 CORS CONFIG (USANDO .ENV)
  // ============================
  const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
    : ['http://localhost:3000'];

  console.log('🛑 CORS ORIGINS LOADED:', allowedOrigins);

  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'cache-control'],
    credentials: true,
  });

  // Porta dinâmica do Railway
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Backend rodando na porta ${port}`);
  console.log(`📚 Swagger docs: http://localhost:${port}/api/docs`);
  console.log(`🌎 Ambiente: ${process.env.NODE_ENV}`);
  console.log(`🔗 Backend URL: ${process.env.BACKEND_URL}`);
}

bootstrap();
