"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let ExchangeService = class ExchangeService {
    constructor() {
        this.FRANKFURTER_BASE_URL = 'https://api.frankfurter.app';
        this.RESTCOUNTRIES_URL = 'https://restcountries.com/v3.1/all';
    }
    async getCurrentRate(from, to) {
        try {
            const response = await axios_1.default.get(`${this.FRANKFURTER_BASE_URL}/latest?from=${from}&to=${to}`);
            const rate = response.data.rates[to];
            if (!rate) {
                throw new common_1.HttpException(`Taxa de câmbio não encontrada para ${from}/${to}`, common_1.HttpStatus.NOT_FOUND);
            }
            return rate;
        }
        catch (error) {
            if (error.response?.status === 404) {
                throw new common_1.HttpException(`Moeda não suportada: ${from} ou ${to}`, common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Erro ao buscar taxa de câmbio', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
    async getSupportedCurrencies() {
        try {
            const frankfurterResponse = await axios_1.default.get(`${this.FRANKFURTER_BASE_URL}/currencies`);
            const supportedCodes = Object.keys(frankfurterResponse.data);
            const countriesResponse = await axios_1.default.get(this.RESTCOUNTRIES_URL);
            const countries = countriesResponse.data;
            const currencyMap = new Map();
            countries.forEach(country => {
                if (country.currencies) {
                    Object.entries(country.currencies).forEach(([code, details]) => {
                        if (supportedCodes.includes(code) && !currencyMap.has(code)) {
                            currencyMap.set(code, {
                                code,
                                name: details.name,
                                symbol: details.symbol
                            });
                        }
                    });
                }
            });
            const mainCurrencies = [
                { code: 'USD', name: 'US Dollar', symbol: '$' },
                { code: 'EUR', name: 'Euro', symbol: '€' },
                { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
                { code: 'GBP', name: 'British Pound', symbol: '£' },
                { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
                { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
                { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
                { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
                { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
                { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' }
            ];
            mainCurrencies.forEach(currency => {
                if (supportedCodes.includes(currency.code)) {
                    currencyMap.set(currency.code, currency);
                }
            });
            return Array.from(currencyMap.values()).sort((a, b) => a.code.localeCompare(b.code));
        }
        catch (error) {
            return [
                { code: 'USD', name: 'US Dollar', symbol: '$' },
                { code: 'EUR', name: 'Euro', symbol: '€' },
                { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
                { code: 'GBP', name: 'British Pound', symbol: '£' },
                { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
                { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' }
            ];
        }
    }
    async getHistoricalRate(from, to, date) {
        try {
            const response = await axios_1.default.get(`${this.FRANKFURTER_BASE_URL}/${date}?from=${from}&to=${to}`);
            return response.data.rates[to];
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar taxa histórica', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
};
exports.ExchangeService = ExchangeService;
exports.ExchangeService = ExchangeService = __decorate([
    (0, common_1.Injectable)()
], ExchangeService);
//# sourceMappingURL=exchange.service.js.map