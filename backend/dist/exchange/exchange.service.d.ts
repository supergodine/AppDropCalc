export declare class ExchangeService {
    private readonly FRANKFURTER_BASE_URL;
    private readonly RESTCOUNTRIES_URL;
    getCurrentRate(from: string, to: string): Promise<number>;
    getSupportedCurrencies(): Promise<Array<{
        code: string;
        name: string;
        symbol?: string;
    }>>;
    getHistoricalRate(from: string, to: string, date: string): Promise<number>;
}
