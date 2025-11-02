import { Injectable } from '@nestjs/common';
import { ExchangeService } from '../exchange/exchange.service';

export interface CalculationDto {
  precoFornecedor: number;
  frete?: number;
  margemDesejada: number;
  custoFixo?: number;
  moedaBase: string;
  moedaDestino: string;
  plataforma: string;
  gateway: string;
}

export interface CalculationResult {
  custoTotal: number;
  taxaCambio: number;
  precoVenda: number;
  lucroLiquido: number;
  roasMinimo: number;
  breakdown: {
    custoFornecedor: number;
    frete: number;
    custoFixo: number;
    taxaPlataforma: number;
    taxaGateway: number;
    margem: number;
  };
}

@Injectable()
export class CalcService {
  private readonly platforms = [
    { 
      id: 'shopify',
      nome: 'Shopify', 
      taxa: 2.9, 
      adicional: 0.30,
      descricao: 'E-commerce completo com apps e temas',
      tipo: 'ECOMMERCE'
    },
    { 
      id: 'nuvemshop',
      nome: 'Nuvemshop', 
      taxa: 2.0, 
      adicional: 0.49,
      descricao: 'Plataforma brasileira de e-commerce',
      tipo: 'ECOMMERCE'
    },
    { 
      id: 'woocommerce',
      nome: 'WooCommerce', 
      taxa: 0, 
      adicional: 0,
      descricao: 'Plugin WordPress gratuito',
      tipo: 'ECOMMERCE'
    },
    { 
      id: 'mercadolivre',
      nome: 'Mercado Livre', 
      taxa: 16, 
      adicional: 0,
      descricao: 'Maior marketplace da América Latina',
      tipo: 'MARKETPLACE'
    },
    { 
      id: 'amazon',
      nome: 'Amazon Brasil', 
      taxa: 15, 
      adicional: 0,
      descricao: 'Marketplace global',
      tipo: 'MARKETPLACE'
    },
    { 
      id: 'shopee',
      nome: 'Shopee', 
      taxa: 10, 
      adicional: 0,
      descricao: 'Marketplace asiático em crescimento',
      tipo: 'MARKETPLACE'
    }
  ];

  private readonly gateways = [
    { 
      id: 'stripe',
      nome: 'Stripe', 
      taxa: 2.9, 
      adicional: 0.30,
      descricao: 'Gateway internacional líder',
      metodosPagamento: ['cartao', 'pix', 'boleto']
    },
    { 
      id: 'mercadopago',
      nome: 'Mercado Pago', 
      taxa: 4.99, 
      adicional: 0,
      descricao: 'Gateway brasileiro do Mercado Livre',
      metodosPagamento: ['cartao', 'pix', 'boleto']
    },
    { 
      id: 'paypal',
      nome: 'PayPal', 
      taxa: 3.9, 
      adicional: 0.60,
      descricao: 'Gateway global tradicional',
      metodosPagamento: ['cartao', 'paypal']
    },
    { 
      id: 'pagseguro',
      nome: 'PagSeguro', 
      taxa: 4.99, 
      adicional: 0,
      descricao: 'Gateway brasileiro do UOL',
      metodosPagamento: ['cartao', 'pix', 'boleto']
    },
    { 
      id: 'stone',
      nome: 'Stone', 
      taxa: 3.99, 
      adicional: 0,
      descricao: 'Fintech brasileira moderna',
      metodosPagamento: ['cartao', 'pix']
    },
    { 
      id: 'cielo',
      nome: 'Cielo', 
      taxa: 4.5, 
      adicional: 0,
      descricao: 'Tradicional adquirente brasileiro',
      metodosPagamento: ['cartao', 'boleto']
    }
  ];

  constructor(private readonly exchangeService: ExchangeService) {}

  async calcularPrecoIdeal(dados: CalculationDto): Promise<CalculationResult> {
    const {
      precoFornecedor,
      frete = 0,
      margemDesejada,
      custoFixo = 0,
      moedaBase,
      moedaDestino,
      plataforma,
      gateway
    } = dados;

    // Buscar taxa de câmbio em tempo real
    const taxaCambio = moedaBase === moedaDestino 
      ? 1 
      : await this.exchangeService.getCurrentRate(moedaBase, moedaDestino);

    // Encontrar dados da plataforma e gateway
    const plataformaData = this.platforms.find(p => p.id === plataforma);
    const gatewayData = this.gateways.find(g => g.id === gateway);

    if (!plataformaData) {
      throw new Error(`Plataforma não encontrada: ${plataforma}`);
    }

    if (!gatewayData) {
      throw new Error(`Gateway não encontrado: ${gateway}`);
    }

    // Calcular custos
    const custoTotal = precoFornecedor + frete + custoFixo;
    const custoTotalBRL = custoTotal * taxaCambio;

    // Calcular taxas
    const taxaPlataforma = plataformaData.taxa;
    const taxaGateway = gatewayData.taxa;
    const adicionalPlataforma = plataformaData.adicional;
    const adicionalGateway = gatewayData.adicional;

    // Fórmula: Preço = (Custo + Adicionais) / (1 - (TaxaTotal + Margem) / 100)
    const taxaTotal = taxaPlataforma + taxaGateway;
    const precoVenda = (custoTotalBRL + adicionalPlataforma + adicionalGateway) / 
                      (1 - ((taxaTotal + margemDesejada) / 100));

    // Calcular lucro líquido
    const valorTaxaPlataforma = precoVenda * (taxaPlataforma / 100);
    const valorTaxaGateway = precoVenda * (taxaGateway / 100);
    const lucroLiquido = precoVenda - custoTotalBRL - valorTaxaPlataforma - valorTaxaGateway - adicionalPlataforma - adicionalGateway;

    // Calcular ROAS mínimo
    const roasMinimo = parseFloat((100 / (margemDesejada || 10)).toFixed(2));

    return {
      custoTotal: custoTotalBRL,
      taxaCambio,
      precoVenda: parseFloat(precoVenda.toFixed(2)),
      lucroLiquido: parseFloat(lucroLiquido.toFixed(2)),
      roasMinimo,
      breakdown: {
        custoFornecedor: precoFornecedor * taxaCambio,
        frete: frete * taxaCambio,
        custoFixo: custoFixo * taxaCambio,
        taxaPlataforma: valorTaxaPlataforma,
        taxaGateway: valorTaxaGateway,
        margem: lucroLiquido
      }
    };
  }

  getPlatforms() {
    return this.platforms;
  }

  getGateways() {
    return this.gateways;
  }
}