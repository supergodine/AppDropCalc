import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum GatewayType {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  PIX = 'pix',
  BOLETO = 'boleto',
  PAYPAL = 'paypal',
  DIGITAL_WALLET = 'digital_wallet',
  CRYPTO = 'crypto',
  OTHER = 'other',
}

@Entity('gateways')
export class Gateway {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string; // Ex: "Stripe", "PayPal", "Mercado Pago"

  @Column({ type: 'varchar', length: 100, unique: true })
  slug: string; // Ex: "stripe", "paypal", "mercadopago"

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 50, default: 'credit_card' })
  primaryType: GatewayType;

  @Column({ type: 'text' })
  supportedTypes: string; // JSON string para SQLite

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  feePercent: number; // Taxa percentual padrão

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  fixedFee: number; // Taxa fixa padrão

  @Column({ type: 'varchar', length: 10, default: 'BRL' })
  currency: string; // Moeda das taxas

  @Column({ type: 'varchar', array: true, default: '{}' })
  supportedCountries: string[]; // ISO 3166-1 alpha-2

  @Column({ type: 'varchar', array: true, default: '{}' })
  supportedCurrencies: string[]; // ISO 4217

  @Column({ type: 'json', nullable: true })
  feeStructure?: {
    // Taxas por tipo de pagamento
    creditCard?: { percent: number; fixed: number };
    debitCard?: { percent: number; fixed: number };
    pix?: { percent: number; fixed: number };
    boleto?: { percent: number; fixed: number };
    paypal?: { percent: number; fixed: number };
    
    // Taxas internacionais
    international?: {
      percent: number;
      fixed: number;
      currencies?: string[];
    };
    
    // Desconto por volume
    volumeDiscounts?: {
      minAmount: number;
      discountPercent: number;
    }[];
  };

  @Column({ type: 'json', nullable: true })
  processingTimes?: {
    // Tempo de processamento por tipo
    creditCard?: string; // Ex: "Instantâneo"
    debitCard?: string;
    pix?: string;
    boleto?: string;
    // Tempo para recebimento
    settlement?: {
      creditCard?: string; // Ex: "D+1"
      debitCard?: string;
      pix?: string;
      boleto?: string;
    };
  };

  @Column({ type: 'varchar', length: 255, nullable: true })
  websiteUrl?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  logoUrl?: string;

  @Column({ type: 'json', nullable: true })
  integrationConfig?: {
    apiEndpoint?: string;
    authMethod?: 'oauth' | 'apikey' | 'webhook';
    hasTestMode?: boolean;
    realTimeFees?: boolean;
    webhookEvents?: string[];
  };

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isCustom: boolean;

  @Column({ type: 'int', default: 0 })
  usageCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Métodos auxiliares
  getFeeForPaymentType(
    amount: number, 
    paymentType: GatewayType,
    isInternational = false
  ): { percent: number; fixed: number; total: number } {
    let percent = this.feePercent;
    let fixed = this.fixedFee;

    // Verificar taxa específica por tipo de pagamento
    if (this.feeStructure && this.feeStructure[paymentType as keyof typeof this.feeStructure]) {
      const typeConfig = this.feeStructure[paymentType as keyof typeof this.feeStructure] as any;
      if (typeConfig && typeof typeConfig === 'object') {
        percent = typeConfig.percent || percent;
        fixed = typeConfig.fixed || fixed;
      }
    }

    // Verificar taxa internacional
    if (isInternational && this.feeStructure?.international) {
      percent += this.feeStructure.international.percent;
      fixed += this.feeStructure.international.fixed;
    }

    const total = (amount * percent / 100) + fixed;
    return { percent, fixed, total };
  }

  supportsPaymentType(type: GatewayType): boolean {
    return this.supportedTypes.includes(type);
  }

  supportsCountry(country: string): boolean {
    return this.supportedCountries.length === 0 || 
           this.supportedCountries.includes(country.toUpperCase());
  }

  supportsCurrency(currency: string): boolean {
    return this.supportedCurrencies.length === 0 || 
           this.supportedCurrencies.includes(currency.toUpperCase());
  }

  getDisplayName(): string {
    return this.name;
  }
}