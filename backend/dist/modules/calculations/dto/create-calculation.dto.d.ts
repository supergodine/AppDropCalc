export declare class DimensionsDto {
    length: number;
    width: number;
    height: number;
    unit: 'cm' | 'in';
}
export declare class CreateCalculationDto {
    productName: string;
    supplierPrice: number;
    supplierCurrency: string;
    sellCurrency: string;
    freight?: number;
    fixedCostPerUnit?: number;
    marginPercent?: number;
    markupPercent?: number;
    adsCostPercent?: number;
    adsCostFixed?: number;
    platformId?: string;
    gatewayId?: string;
    weight?: number;
    dimensions?: DimensionsDto;
    category?: string;
    tags?: string[];
    notes?: string;
    customPlatformFee?: number;
    customGatewayFee?: number;
    customGatewayFixedFee?: number;
    customTaxPercent?: number;
}
