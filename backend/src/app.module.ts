import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers and Services
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { CalcModule } from './calc/calc.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ExchangeModule } from './modules/exchange/exchange.module';
import { MailerModule } from './common/mailer/mailer.module';
import { MercadoPagoModule } from './modules/mercadopago/mercadopago.module';

// Config
import { DatabaseConfig } from './config/database.config';

@Module({
  imports: [
    // Configuração global
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production'
        ? ['.env.production']
        : ['.env', '.env.local', '.env.development'],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
      inject: [DatabaseConfig],
    }),

    // Módulos da aplicação
    CalcModule,
    AuthModule,
    UsersModule,
    ExchangeModule,
    MercadoPagoModule,
    MailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}