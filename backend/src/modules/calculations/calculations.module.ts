import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calculation } from './entities/calculation.entity';
import { CalculationsController } from './calculations.controller';
import { CalculationsService } from './calculations.service';
import { PricingService } from './services/pricing.service';
import { ExchangeModule } from '../exchange/exchange.module';
import { PresetsModule } from '../presets/presets.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Calculation]),
    ExchangeModule,
    PresetsModule,
    AuthModule,
  ],
  controllers: [CalculationsController],
  providers: [CalculationsService, PricingService],
  exports: [CalculationsService],
})
export class CalculationsModule {}