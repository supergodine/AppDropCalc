import { ExchangeService } from './exchange.service';
export declare class ExchangeController {
    private readonly exchangeService;
    constructor(exchangeService: ExchangeService);
    getRate(from: string, to: string): Promise<{
        from: string;
        to: string;
        rate: number;
        timestamp: string;
    }>;
    getSupportedCurrencies(): {
        currencies: string[];
        message: string;
    };
    getMultipleRates(base: string, targets: string): Promise<{
        base: string;
        rates: Record<string, number>;
        timestamp: string;
    }>;
}
