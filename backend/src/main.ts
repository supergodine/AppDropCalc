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
  
  // Enable CORS for frontend connection - PERMISSIVO PARA DEBUG
  app.enableCors({
    origin: true, // Aceita qualquer origem
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const port = 3002;
  await app.listen(port, '0.0.0.0'); // Listen on all network interfaces
  console.log(`🚀 Backend rodando na porta ${port}`);
  console.log(`📚 Swagger documentação disponível em: http://localhost:${port}/api/docs`);
  console.log(`🌐 Acesso via rede: http://192.168.0.14:${port}/api/docs`);
}
bootstrap();