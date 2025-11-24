import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class ExchangeService {
    private readonly httpService;
    private readonly configService;
    private readonly logger;
    private readonly cache;
    private readonly CACHE_TTL;
    constructor(httpService: HttpService, configService: ConfigService);
    getExchangeRate(from: string, to: string): Promise<number>;
    getMultipleRates(base: string, targets: string[]): Promise<Record<string, number>>;
    getSupportedCurrencies(): string[];
    private fetchExchangeRate;
    private fetchFromOpenExchangeRates;
    private fetchFromExchangeRateAPI;
    private fetchFromECB;
    private getCachedRate;
    private setCachedRate;
    clearExpiredCache(): void;
    convertAmount(amount: number, from: string, to: string): Promise<number>;
}
