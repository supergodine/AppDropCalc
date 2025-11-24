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
export declare class CalcService {
    private readonly exchangeService;
    private readonly platforms;
    private readonly gateways;
    constructor(exchangeService: ExchangeService);
    calcularPrecoIdeal(dados: CalculationDto): Promise<CalculationResult>;
    getPlatforms(): {
        id: string;
        nome: string;
        taxa: number;
        adicional: number;
        descricao: string;
        tipo: string;
    }[];
    getGateways(): {
        id: string;
        nome: string;
        taxa: number;
        adicional: number;
        descricao: string;
        metodosPagamento: string[];
    }[];
}
