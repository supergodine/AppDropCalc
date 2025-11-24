import { CalcService, CalculationDto } from './calc.service';
import { ExchangeService } from '../exchange/exchange.service';
export declare class CalcController {
    private readonly calcService;
    constructor(calcService: CalcService);
    calcular(dados: CalculationDto): Promise<import("./calc.service").CalculationResult>;
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
export declare class ExchangeController {
    private readonly exchangeService;
    constructor(exchangeService: ExchangeService);
    getCurrencies(): Promise<{
        code: string;
        name: string;
        symbol?: string;
    }[]>;
    getExchangeRate(from: string, to: string): Promise<{
        from: string;
        to: string;
        rate: number;
        timestamp: string;
    }>;
}
