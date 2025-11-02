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
  
  // Enable CORS for frontend connection
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000', 
      'http://192.168.0.14:3000',
      'http://10.0.2.2:3000',
      /^http:\/\/192\.168\.\d{1,3}\.\d{1,3}:3000$/,
      /^http:\/\/10\.0\.2\.\d{1,3}:3000$/
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const port = 3001;
  await app.listen(port, '0.0.0.0'); // Listen on all network interfaces
  console.log(`🚀 Backend rodando na porta ${port}`);
  console.log(`📚 Swagger documentação disponível em: http://localhost:${port}/api/docs`);
  console.log(`🌐 Acesso via rede: http://192.168.0.14:${port}/api/docs`);
}
bootstrap();