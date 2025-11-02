import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { PresetPlatform } from '../../presets/entities/preset-platform.entity';
import { Gateway } from '../../presets/entities/gateway.entity';

export interface CalculationResult {
  // Entrada
  productName: string;
  supplierPrice: number;
  supplierCurrency: string;
  
  // Custos
  convertedCost: number; // Custo convertido para moeda de venda
  freight: number;
  fixedCostPerUnit: number;
  totalCost: number;
  
  // Taxas
  platformFeePercent: number;
  gatewayFeePercent: number;
  gatewayFixedFee: number;
  taxPercent: number;
  totalFeesPercent: number;
  
  // Marketing
  adsCostPercent: number;
  adsCostFixed: number;
  
  // Preços calculados
  priceByMargin: number;
  priceByMarkup: number;
  recommendedPrice: number;
  
  // Lucros
  grossProfit: number;
  netProfit: number;
  profitMargin: number;
  
  // Métricas
  minimumROAS: number;
  breakEvenPrice: number;
  
  // Metadata
  exchangeRate: number;
  sellCurrency: string;
  calculatedAt: Date;
}

@Entity('calculations')
export class Calculation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  productName: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  supplierPrice: number;

  @Column({ type: 'varchar', length: 10 })
  supplierCurrency: string; // ISO 4217

  @Column({ type: 'varchar', length: 10 })
  sellCurrency: string; // ISO 4217

  @Column({ type: 'decimal', precision: 10, scale: 4 })
  exchangeRate: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  freight: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  fixedCostPerUnit: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  marginPercent: number; // Margem desejada

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  markupPercent: number; // Markup alternativo

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  adsCostPercent: number; // % do preço de venda

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  adsCostFixed: number; // Valor fixo por venda

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  finalPrice: number; // Preço final recomendado

  @Column({ type: 'json' })
  resultBreakdown: CalculationResult; // Detalhes completos do cálculo

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column({ type: 'varchar', array: true, default: '{}' })
  tags: string[]; // Para organização

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  weight?: number; // Em kg

  @Column({ type: 'json', nullable: true })
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: 'cm' | 'in';
  };

  @Column({ type: 'varchar', length: 50, nullable: true })
  category?: string; // Categoria do produto

  @Column({ type: 'boolean', default: false })
  isFavorite: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relacionamentos
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => PresetPlatform, { nullable: true })
  @JoinColumn({ name: 'platformId' })
  platform?: PresetPlatform;

  @Column({ type: 'uuid', nullable: true })
  platformId?: string;

  @ManyToOne(() => Gateway, { nullable: true })
  @JoinColumn({ name: 'gatewayId' })
  gateway?: Gateway;

  @Column({ type: 'uuid', nullable: true })
  gatewayId?: string;

  // Métodos auxiliares
  getROAS(): number {
    if (this.adsCostFixed <= 0 && this.adsCostPercent <= 0) return 0;
    const adsCost = this.adsCostFixed + (this.finalPrice * this.adsCostPercent / 100);
    return adsCost > 0 ? this.finalPrice / adsCost : 0;
  }

  getProfitMargin(): number {
    const totalCost = this.resultBreakdown?.totalCost || 0;
    return this.finalPrice > 0 ? ((this.finalPrice - totalCost) / this.finalPrice) * 100 : 0;
  }

  isRecent(): boolean {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return this.createdAt > oneWeekAgo;
  }
}