import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresetPlatform } from './entities/preset-platform.entity';
import { Gateway } from './entities/gateway.entity';
import { PresetsController } from './presets.controller';
import { PresetsService } from './presets.service';

@Module({
  imports: [TypeOrmModule.forFeature([PresetPlatform, Gateway])],
  controllers: [PresetsController],
  providers: [PresetsService],
  exports: [PresetsService],
})
export class PresetsModule {}