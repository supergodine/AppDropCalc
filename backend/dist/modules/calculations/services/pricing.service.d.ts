import { CalculationResult } from '../entities/calculation.entity';
export interface PricingInput {
    productName: string;
    supplierPrice: number;
    supplierCurrency: string;
    sellCurrency: string;
    exchangeRate: number;
    freight: number;
    fixedCostPerUnit: number;
    platformFeePercent: number;
    gatewayFeePercent: number;
    gatewayFixedFee: number;
    taxPercent: number;
    marginPercent: number;
    markupPercent: number;
    adsCostPercent: number;
    adsCostFixed: number;
}
export declare class PricingService {
    private readonly logger;
    calculatePricing(input: PricingInput): CalculationResult;
    private convertCurrency;
    private calculatePriceByMargin;
    private calculatePriceByMarkup;
    private calculateBreakdown;
    private calculateMinimumROAS;
    private calculateBreakEvenPrice;
    simulateScenarios(input: PricingInput): {
        conservative: CalculationResult;
        balanced: CalculationResult;
        aggressive: CalculationResult;
    };
    validateInput(input: PricingInput): {
        isValid: boolean;
        errors: string[];
    };
}
