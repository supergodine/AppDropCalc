export declare enum PlatformType {
    ECOMMERCE = "ecommerce",
    MARKETPLACE = "marketplace",
    SOCIAL = "social",
    CUSTOM = "custom"
}
export declare class PresetPlatform {
    id: string;
    name: string;
    slug: string;
    description?: string;
    type: PlatformType;
    feePercent: number;
    fixedFee: number;
    currency: string;
    supportedCountries: string[];
    websiteUrl?: string;
    logoUrl?: string;
    additionalFees?: {
        categoryFees?: {
            [category: string]: number;
        };
        volumeDiscounts?: {
            minVolume: number;
            discountPercent: number;
        }[];
        countryFees?: {
            [country: string]: number;
        };
    };
    integrationConfig?: {
        apiEndpoint?: string;
        authMethod?: 'oauth' | 'apikey' | 'token';
        webhookSupport?: boolean;
        realTimeFees?: boolean;
    };
    isActive: boolean;
    isCustom: boolean;
    usageCount: number;
    createdAt: Date;
    updatedAt: Date;
    getTotalFeeForAmount(amount: number, country?: string): number;
    supportsCountry(country: string): boolean;
    getDisplayName(): string;
    hasVolumeDiscounts(): boolean;
}
