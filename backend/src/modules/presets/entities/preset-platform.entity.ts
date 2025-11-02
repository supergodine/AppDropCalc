import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum PlatformType {
  ECOMMERCE = 'ecommerce',
  MARKETPLACE = 'marketplace',
  SOCIAL = 'social',
  CUSTOM = 'custom',
}

@Entity('preset_platforms')
export class PresetPlatform {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string; // Ex: "Shopify", "Mercado Livre", "Nuvemshop"

  @Column({ type: 'varchar', length: 100, unique: true })
  slug: string; // Ex: "shopify", "mercadolivre", "nuvemshop"

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 50, default: 'ecommerce' })
  type: PlatformType;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  feePercent: number; // Taxa percentual da plataforma

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  fixedFee: number; // Taxa fixa por transação

  @Column({ type: 'varchar', length: 10, default: 'BRL' })
  currency: string; // Moeda das taxas fixas

  @Column({ type: 'varchar', array: true, default: '{}' })
  supportedCountries: string[]; // ISO 3166-1 alpha-2

  @Column({ type: 'varchar', length: 255, nullable: true })
  websiteUrl?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  logoUrl?: string;

  @Column({ type: 'json', nullable: true })
  additionalFees?: {
    // Taxas específicas por categoria ou tipo
    categoryFees?: { [category: string]: number };
    volumeDiscounts?: {
      minVolume: number;
      discountPercent: number;
    }[];
    // Taxas específicas por país
    countryFees?: { [country: string]: number };
  };

  @Column({ type: 'json', nullable: true })
  integrationConfig?: {
    apiEndpoint?: string;
    authMethod?: 'oauth' | 'apikey' | 'token';
    webhookSupport?: boolean;
    realTimeFees?: boolean; // Se pode buscar taxas atualizadas via API
  };

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isCustom: boolean; // Se foi criado pelo usuário

  @Column({ type: 'int', default: 0 })
  usageCount: number; // Quantas vezes foi usado

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Métodos auxiliares
  getTotalFeeForAmount(amount: number, country?: string): number {
    let percentFee = this.feePercent;
    
    // Verificar taxa específica por país
    if (country && this.additionalFees?.countryFees?.[country]) {
      percentFee = this.additionalFees.countryFees[country];
    }

    return (amount * percentFee / 100) + this.fixedFee;
  }

  supportsCountry(country: string): boolean {
    return this.supportedCountries.length === 0 || 
           this.supportedCountries.includes(country.toUpperCase());
  }

  getDisplayName(): string {
    return this.name;
  }

  hasVolumeDiscounts(): boolean {
    return this.additionalFees?.volumeDiscounts && 
           this.additionalFees.volumeDiscounts.length > 0;
  }
}