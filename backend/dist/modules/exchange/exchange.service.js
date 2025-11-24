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
var ExchangeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
let ExchangeService = ExchangeService_1 = class ExchangeService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.logger = new common_1.Logger(ExchangeService_1.name);
        this.cache = {};
        this.CACHE_TTL = 60 * 60 * 1000;
    }
    async getExchangeRate(from, to) {
        if (from === to) {
            return 1.0;
        }
        const cacheKey = `${from}_${to}`;
        const cached = this.getCachedRate(cacheKey);
        if (cached) {
            this.logger.debug(`Taxa de câmbio ${from}/${to} obtida do cache: ${cached}`);
            return cached;
        }
        try {
            const rate = await this.fetchExchangeRate(from, to);
            this.setCachedRate(cacheKey, rate);
            this.logger.log(`Taxa de câmbio ${from}/${to} obtida: ${rate}`);
            return rate;
        }
        catch (error) {
            this.logger.error(`Erro ao obter taxa de câmbio ${from}/${to}:`, error);
            const inverseKey = `${to}_${from}`;
            const inverseRate = this.getCachedRate(inverseKey);
            if (inverseRate) {
                const rate = 1 / inverseRate;
                this.logger.warn(`Usando taxa inversa para ${from}/${to}: ${rate}`);
                return rate;
            }
            throw new common_1.ServiceUnavailableException('Serviço de câmbio temporariamente indisponível. Tente novamente em alguns minutos.');
        }
    }
    async getMultipleRates(base, targets) {
        const rates = {};
        for (const target of targets) {
            try {
                rates[target] = await this.getExchangeRate(base, target);
            }
            catch (error) {
                this.logger.warn(`Falha ao obter taxa ${base}/${target}:`, error);
                rates[target] = null;
            }
        }
        return rates;
    }
    getSupportedCurrencies() {
        return [
            'USD',
            'EUR',
            'BRL',
            'ARS',
            'CLP',
            'COP',
            'MXN',
            'UYU',
            'PEN',
            'GBP',
            'CAD',
            'AUD',
            'JPY',
            'CNY',
        ];
    }
    async fetchExchangeRate(from, to) {
        try {
            return await this.fetchFromOpenExchangeRates(from, to);
        }
        catch (error) {
            this.logger.warn('OpenExchangeRates falhou, tentando ExchangeRate-API');
        }
        try {
            return await this.fetchFromExchangeRateAPI(from, to);
        }
        catch (error) {
            this.logger.warn('ExchangeRate-API falhou, tentando European Central Bank');
        }
        if (from === 'EUR' || to === 'EUR') {
            try {
                return await this.fetchFromECB(from, to);
            }
            catch (error) {
                this.logger.error('Todas as APIs de câmbio falharam');
            }
        }
        throw new common_1.ServiceUnavailableException('Nenhuma API de câmbio disponível');
    }
    async fetchFromOpenExchangeRates(from, to) {
        const apiKey = this.configService.get('EXCHANGE_API_KEY');
        if (!apiKey) {
            throw new Error('EXCHANGE_API_KEY não configurada');
        }
        const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD&symbols=${from},${to}`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const data = response.data;
        if (!data.rates) {
            throw new Error('Resposta inválida da OpenExchangeRates');
        }
        const fromRate = from === 'USD' ? 1 : data.rates[from];
        const toRate = to === 'USD' ? 1 : data.rates[to];
        if (!fromRate || !toRate) {
            throw new Error(`Taxa não encontrada para ${from}/${to}`);
        }
        return toRate / fromRate;
    }
    async fetchFromExchangeRateAPI(from, to) {
        const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const data = response.data;
        if (!data.rates || !data.rates[to]) {
            throw new Error(`Taxa não encontrada para ${from}/${to}`);
        }
        return data.rates[to];
    }
    async fetchFromECB(from, to) {
        if (from !== 'EUR' && to !== 'EUR') {
            throw new Error('ECB suporta apenas EUR como base ou destino');
        }
        const url = 'https://api.exchangerate.host/latest?base=EUR';
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const data = response.data;
        if (!data.rates) {
            throw new Error('Resposta inválida do ECB');
        }
        if (from === 'EUR') {
            return data.rates[to] || 1;
        }
        else {
            return 1 / (data.rates[from] || 1);
        }
    }
    getCachedRate(key) {
        const cached = this.cache[key];
        if (!cached)
            return null;
        const now = Date.now();
        if (now - cached.timestamp > cached.ttl) {
            delete this.cache[key];
            return null;
        }
        return cached.rate;
    }
    setCachedRate(key, rate) {
        this.cache[key] = {
            rate,
            timestamp: Date.now(),
            ttl: this.CACHE_TTL,
        };
    }
    clearExpiredCache() {
        const now = Date.now();
        Object.keys(this.cache).forEach(key => {
            const cached = this.cache[key];
            if (now - cached.timestamp > cached.ttl) {
                delete this.cache[key];
            }
        });
    }
    async convertAmount(amount, from, to) {
        const rate = await this.getExchangeRate(from, to);
        return Number((amount * rate).toFixed(2));
    }
};
exports.ExchangeService = ExchangeService;
exports.ExchangeService = ExchangeService = ExchangeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], ExchangeService);
//# sourceMappingURL=exchange.service.js.map