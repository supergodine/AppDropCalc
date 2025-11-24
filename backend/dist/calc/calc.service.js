"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcService = void 0;
const common_1 = require("@nestjs/common");
const exchange_service_1 = require("../exchange/exchange.service");
let CalcService = class CalcService {
    constructor(exchangeService) {
        this.exchangeService = exchangeService;
        this.platforms = [
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
        this.gateways = [
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
    }
    async calcularPrecoIdeal(dados) {
        const { precoFornecedor, frete = 0, margemDesejada, custoFixo = 0, moedaBase, moedaDestino, plataforma, gateway } = dados;
        const taxaCambio = moedaBase === moedaDestino
            ? 1
            : await this.exchangeService.getCurrentRate(moedaBase, moedaDestino);
        const plataformaData = this.platforms.find(p => p.id === plataforma);
        const gatewayData = this.gateways.find(g => g.id === gateway);
        if (!plataformaData) {
            throw new Error(`Plataforma não encontrada: ${plataforma}`);
        }
        if (!gatewayData) {
            throw new Error(`Gateway não encontrado: ${gateway}`);
        }
        const custoTotal = precoFornecedor + frete + custoFixo;
        const custoTotalBRL = custoTotal * taxaCambio;
        const taxaPlataforma = plataformaData.taxa;
        const taxaGateway = gatewayData.taxa;
        const adicionalPlataforma = plataformaData.adicional;
        const adicionalGateway = gatewayData.adicional;
        const taxaTotal = taxaPlataforma + taxaGateway;
        const precoVenda = (custoTotalBRL + adicionalPlataforma + adicionalGateway) /
            (1 - ((taxaTotal + margemDesejada) / 100));
        const valorTaxaPlataforma = precoVenda * (taxaPlataforma / 100);
        const valorTaxaGateway = precoVenda * (taxaGateway / 100);
        const lucroLiquido = precoVenda - custoTotalBRL - valorTaxaPlataforma - valorTaxaGateway - adicionalPlataforma - adicionalGateway;
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
};
exports.CalcService = CalcService;
exports.CalcService = CalcService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [exchange_service_1.ExchangeService])
], CalcService);
//# sourceMappingURL=calc.service.js.map