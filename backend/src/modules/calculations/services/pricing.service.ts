import { Injectable, Logger } from '@nestjs/common';
import { CalculationResult } from '../entities/calculation.entity';

export interface PricingInput {
  // Produto
  productName: string;
  supplierPrice: number;
  supplierCurrency: string;
  sellCurrency: string;
  exchangeRate: number;
  
  // Custos
  freight: number;
  fixedCostPerUnit: number;
  
  // Configurações de plataforma/gateway
  platformFeePercent: number;
  gatewayFeePercent: number;
  gatewayFixedFee: number;
  taxPercent: number;
  
  // Marketing
  marginPercent: number;
  markupPercent: number;
  adsCostPercent: number;
  adsCostFixed: number;
}

@Injectable()
export class PricingService {
  private readonly logger = new Logger(PricingService.name);

  /**
   * Calcula preço de venda usando diferentes estratégias
   */
  calculatePricing(input: PricingInput): CalculationResult {
    this.logger.debug('Iniciando cálculo de precificação', input);

    // 1. Converter custo do produto para moeda de venda
    const convertedCost = this.convertCurrency(
      input.supplierPrice,
      input.exchangeRate,
    );

    // 2. Calcular custo total
    const totalCost = convertedCost + input.freight + input.fixedCostPerUnit;

    // 3. Calcular taxas totais
    const totalFeesPercent = 
      input.platformFeePercent + 
      input.gatewayFeePercent + 
      input.taxPercent;

    // 4. Calcular preços usando diferentes estratégias
    const priceByMargin = this.calculatePriceByMargin(
      totalCost,
      input.marginPercent,
      totalFeesPercent,
      input.adsCostPercent,
    );

    const priceByMarkup = this.calculatePriceByMarkup(
      totalCost,
      input.markupPercent,
    );

    // 5. Determinar preço recomendado (usando margem por padrão)
    const recommendedPrice = priceByMargin || priceByMarkup;

    // 6. Calcular breakdown de custos e lucros
    const breakdown = this.calculateBreakdown(
      recommendedPrice,
      totalCost,
      totalFeesPercent,
      input.gatewayFixedFee,
      input.adsCostPercent,
      input.adsCostFixed,
    );

    // 7. Calcular métricas
    const minimumROAS = this.calculateMinimumROAS(
      recommendedPrice,
      breakdown.adsCostTotal,
    );

    const breakEvenPrice = this.calculateBreakEvenPrice(
      totalCost,
      totalFeesPercent,
      input.gatewayFixedFee,
    );

    const result: CalculationResult = {
      // Entrada
      productName: input.productName,
      supplierPrice: input.supplierPrice,
      supplierCurrency: input.supplierCurrency,
      
      // Custos
      convertedCost,
      freight: input.freight,
      fixedCostPerUnit: input.fixedCostPerUnit,
      totalCost,
      
      // Taxas
      platformFeePercent: input.platformFeePercent,
      gatewayFeePercent: input.gatewayFeePercent,
      gatewayFixedFee: input.gatewayFixedFee,
      taxPercent: input.taxPercent,
      totalFeesPercent,
      
      // Marketing
      adsCostPercent: input.adsCostPercent,
      adsCostFixed: input.adsCostFixed,
      
      // Preços calculados
      priceByMargin,
      priceByMarkup,
      recommendedPrice,
      
      // Lucros
      grossProfit: breakdown.grossProfit,
      netProfit: breakdown.netProfit,
      profitMargin: breakdown.profitMargin,
      
      // Métricas
      minimumROAS,
      breakEvenPrice,
      
      // Metadata
      exchangeRate: input.exchangeRate,
      sellCurrency: input.sellCurrency,
      calculatedAt: new Date(),
    };

    this.logger.debug('Cálculo concluído', result);
    return result;
  }

  /**
   * Converte valor de uma moeda para outra
   */
  private convertCurrency(amount: number, exchangeRate: number): number {
    return Number((amount * exchangeRate).toFixed(2));
  }

  /**
   * Calcula preço por margem desejada
   * Fórmula: PreçoVenda = CustoTotal / (1 - (Taxas% + Margem% + Ads%))
   */
  private calculatePriceByMargin(
    totalCost: number,
    marginPercent: number,
    feesPercent: number,
    adsCostPercent: number,
  ): number {
    const totalDeductionsPercent = (marginPercent + feesPercent + adsCostPercent) / 100;
    
    // Verificar se denominador é válido
    if (totalDeductionsPercent >= 1) {
      this.logger.warn('Margem + Taxas + Ads >= 100%, impossível calcular preço');
      return 0;
    }

    const price = totalCost / (1 - totalDeductionsPercent);
    return Number(price.toFixed(2));
  }

  /**
   * Calcula preço por markup
   * Fórmula: PreçoVenda = CustoTotal * (1 + Markup%)
   */
  private calculatePriceByMarkup(totalCost: number, markupPercent: number): number {
    const price = totalCost * (1 + markupPercent / 100);
    return Number(price.toFixed(2));
  }

  /**
   * Calcula breakdown detalhado de custos e lucros
   */
  private calculateBreakdown(
    finalPrice: number,
    totalCost: number,
    feesPercent: number,
    gatewayFixedFee: number,
    adsCostPercent: number,
    adsCostFixed: number,
  ) {
    // Taxas sobre o preço de venda
    const feesOnPrice = (finalPrice * feesPercent / 100) + gatewayFixedFee;
    
    // Custo de ads
    const adsCostTotal = (finalPrice * adsCostPercent / 100) + adsCostFixed;
    
    // Lucro bruto (antes das taxas e ads)
    const grossProfit = finalPrice - totalCost;
    
    // Lucro líquido (depois de tudo)
    const netProfit = finalPrice - totalCost - feesOnPrice - adsCostTotal;
    
    // Margem de lucro líquido
    const profitMargin = finalPrice > 0 ? (netProfit / finalPrice) * 100 : 0;

    return {
      feesOnPrice,
      adsCostTotal,
      grossProfit: Number(grossProfit.toFixed(2)),
      netProfit: Number(netProfit.toFixed(2)),
      profitMargin: Number(profitMargin.toFixed(2)),
    };
  }

  /**
   * Calcula ROAS mínimo recomendado
   */
  private calculateMinimumROAS(finalPrice: number, adsCostTotal: number): number {
    if (adsCostTotal <= 0) return 0;
    const roas = finalPrice / adsCostTotal;
    return Number(roas.toFixed(2));
  }

  /**
   * Calcula preço de break-even (ponto de equilíbrio)
   */
  private calculateBreakEvenPrice(
    totalCost: number,
    feesPercent: number,
    gatewayFixedFee: number,
  ): number {
    // Preço onde lucro = 0 (apenas cobre custos e taxas)
    const price = (totalCost + gatewayFixedFee) / (1 - feesPercent / 100);
    return Number(price.toFixed(2));
  }

  /**
   * Simula diferentes cenários de margem/ads
   */
  simulateScenarios(input: PricingInput): {
    conservative: CalculationResult;
    balanced: CalculationResult;
    aggressive: CalculationResult;
  } {
    // Cenário conservador: margem alta, ads baixo
    const conservative = this.calculatePricing({
      ...input,
      marginPercent: Math.max(input.marginPercent + 10, 30),
      adsCostPercent: Math.max(input.adsCostPercent - 2, 0),
    });

    // Cenário balanceado: valores originais
    const balanced = this.calculatePricing(input);

    // Cenário agressivo: margem menor, ads maior
    const aggressive = this.calculatePricing({
      ...input,
      marginPercent: Math.max(input.marginPercent - 5, 10),
      adsCostPercent: input.adsCostPercent + 3,
    });

    return { conservative, balanced, aggressive };
  }

  /**
   * Valida se os parâmetros de entrada são válidos
   */
  validateInput(input: PricingInput): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (input.supplierPrice <= 0) {
      errors.push('Preço do fornecedor deve ser maior que zero');
    }

    if (input.exchangeRate <= 0) {
      errors.push('Taxa de câmbio deve ser maior que zero');
    }

    if (input.marginPercent + input.platformFeePercent + input.gatewayFeePercent + input.taxPercent + input.adsCostPercent >= 100) {
      errors.push('Soma de margem + taxas + ads não pode ser >= 100%');
    }

    if (input.freight < 0 || input.fixedCostPerUnit < 0 || input.adsCostFixed < 0) {
      errors.push('Custos não podem ser negativos');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}