export declare enum GatewayType {
    CREDIT_CARD = "credit_card",
    DEBIT_CARD = "debit_card",
    PIX = "pix",
    BOLETO = "boleto",
    PAYPAL = "paypal",
    DIGITAL_WALLET = "digital_wallet",
    CRYPTO = "crypto",
    OTHER = "other"
}
export declare class Gateway {
    id: string;
    name: string;
    slug: string;
    description?: string;
    primaryType: GatewayType;
    supportedTypes: string;
    feePercent: number;
    fixedFee: number;
    currency: string;
    supportedCountries: string[];
    supportedCurrencies: string[];
    feeStructure?: {
        creditCard?: {
            percent: number;
            fixed: number;
        };
        debitCard?: {
            percent: number;
            fixed: number;
        };
        pix?: {
            percent: number;
            fixed: number;
        };
        boleto?: {
            percent: number;
            fixed: number;
        };
        paypal?: {
            percent: number;
            fixed: number;
        };
        international?: {
            percent: number;
            fixed: number;
            currencies?: string[];
        };
        volumeDiscounts?: {
            minAmount: number;
            discountPercent: number;
        }[];
    };
    processingTimes?: {
        creditCard?: string;
        debitCard?: string;
        pix?: string;
        boleto?: string;
        settlement?: {
            creditCard?: string;
            debitCard?: string;
            pix?: string;
            boleto?: string;
        };
    };
    websiteUrl?: string;
    logoUrl?: string;
    integrationConfig?: {
        apiEndpoint?: string;
        authMethod?: 'oauth' | 'apikey' | 'webhook';
        hasTestMode?: boolean;
        realTimeFees?: boolean;
        webhookEvents?: string[];
    };
    isActive: boolean;
    isCustom: boolean;
    usageCount: number;
    createdAt: Date;
    updatedAt: Date;
    getFeeForPaymentType(amount: number, paymentType: GatewayType, isInternational?: boolean): {
        percent: number;
        fixed: number;
        total: number;
    };
    supportsPaymentType(type: GatewayType): boolean;
    supportsCountry(country: string): boolean;
    supportsCurrency(currency: string): boolean;
    getDisplayName(): string;
}
