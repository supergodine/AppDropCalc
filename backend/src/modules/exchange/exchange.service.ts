import {
  Injectable,
  Logger,
  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

// Cache simples em memória (em produção, usar Redis)
interface ExchangeCache {
  [key: string]: {
    rate: number;
    timestamp: number;
    ttl: number;
  };
}

@Injectable()
export class ExchangeService {
  private readonly logger = new Logger(ExchangeService.name);
  private readonly cache: ExchangeCache = {};
  private readonly CACHE_TTL = 60 * 60 * 1000; // 1 hora em milliseconds

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Obter taxa de câmbio entre duas moedas
   */
  async getExchangeRate(from: string, to: string): Promise<number> {
    // Se as moedas são iguais, retornar 1
    if (from === to) {
      return 1.0;
    }

    const cacheKey = `${from}_${to}`;
    
    // Verificar cache
    const cached = this.getCachedRate(cacheKey);
    if (cached) {
      this.logger.debug(`Taxa de câmbio ${from}/${to} obtida do cache: ${cached}`);
      return cached;
    }

    // Buscar taxa atual
    try {
      const rate = await this.fetchExchangeRate(from, to);
      
      // Salvar no cache
      this.setCachedRate(cacheKey, rate);
      
      this.logger.log(`Taxa de câmbio ${from}/${to} obtida: ${rate}`);
      return rate;
    } catch (error) {
      this.logger.error(`Erro ao obter taxa de câmbio ${from}/${to}:`, error);
      
      // Tentar taxa inversa se disponível no cache
      const inverseKey = `${to}_${from}`;
      const inverseRate = this.getCachedRate(inverseKey);
      if (inverseRate) {
        const rate = 1 / inverseRate;
        this.logger.warn(`Usando taxa inversa para ${from}/${to}: ${rate}`);
        return rate;
      }

      throw new ServiceUnavailableException(
        'Serviço de câmbio temporariamente indisponível. Tente novamente em alguns minutos.',
      );
    }
  }

  /**
   * Obter múltiplas taxas de câmbio
   */
  async getMultipleRates(base: string, targets: string[]): Promise<Record<string, number>> {
    const rates: Record<string, number> = {};
    
    for (const target of targets) {
      try {
        rates[target] = await this.getExchangeRate(base, target);
      } catch (error) {
        this.logger.warn(`Falha ao obter taxa ${base}/${target}:`, error);
        rates[target] = null;
      }
    }

    return rates;
  }

  /**
   * Listar moedas suportadas
   */
  getSupportedCurrencies(): string[] {
    return [
      'USD', // Dólar Americano
      'EUR', // Euro
      'BRL', // Real Brasileiro
      'ARS', // Peso Argentino
      'CLP', // Peso Chileno
      'COP', // Peso Colombiano
      'MXN', // Peso Mexicano
      'UYU', // Peso Uruguaio
      'PEN', // Sol Peruano
      'GBP', // Libra Esterlina
      'CAD', // Dólar Canadense
      'AUD', // Dólar Australiano
      'JPY', // Iene Japonês
      'CNY', // Yuan Chinês
    ];
  }

  /**
   * Buscar taxa de câmbio da API externa
   */
  private async fetchExchangeRate(from: string, to: string): Promise<number> {
    // Tentar OpenExchangeRates primeiro
    try {
      return await this.fetchFromOpenExchangeRates(from, to);
    } catch (error) {
      this.logger.warn('OpenExchangeRates falhou, tentando ExchangeRate-API');
    }

    // Fallback para ExchangeRate-API
    try {
      return await this.fetchFromExchangeRateAPI(from, to);
    } catch (error) {
      this.logger.warn('ExchangeRate-API falhou, tentando European Central Bank');
    }

    // Fallback para ECB (apenas EUR)
    if (from === 'EUR' || to === 'EUR') {
      try {
        return await this.fetchFromECB(from, to);
      } catch (error) {
        this.logger.error('Todas as APIs de câmbio falharam');
      }
    }

    throw new ServiceUnavailableException('Nenhuma API de câmbio disponível');
  }

  /**
   * OpenExchangeRates API (principal)
   */
  private async fetchFromOpenExchangeRates(from: string, to: string): Promise<number> {
    const apiKey = this.configService.get('EXCHANGE_API_KEY');
    if (!apiKey) {
      throw new Error('EXCHANGE_API_KEY não configurada');
    }

    const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD&symbols=${from},${to}`;
    
    const response = await firstValueFrom(this.httpService.get(url));
    const data = response.data;

    if (!data.rates) {
      throw new Error('Resposta inválida da OpenExchangeRates');
    }

    // OpenExchangeRates sempre usa USD como base
    const fromRate = from === 'USD' ? 1 : data.rates[from];
    const toRate = to === 'USD' ? 1 : data.rates[to];

    if (!fromRate || !toRate) {
      throw new Error(`Taxa não encontrada para ${from}/${to}`);
    }

    return toRate / fromRate;
  }

  /**
   * ExchangeRate-API (fallback)
   */
  private async fetchFromExchangeRateAPI(from: string, to: string): Promise<number> {
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    
    const response = await firstValueFrom(this.httpService.get(url));
    const data = response.data;

    if (!data.rates || !data.rates[to]) {
      throw new Error(`Taxa não encontrada para ${from}/${to}`);
    }

    return data.rates[to];
  }

  /**
   * European Central Bank (apenas EUR)
   */
  private async fetchFromECB(from: string, to: string): Promise<number> {
    // ECB fornece apenas EUR como base
    if (from !== 'EUR' && to !== 'EUR') {
      throw new Error('ECB suporta apenas EUR como base ou destino');
    }

    const url = 'https://api.exchangerate.host/latest?base=EUR';
    const response = await firstValueFrom(this.httpService.get(url));
    const data = response.data;

    if (!data.rates) {
      throw new Error('Resposta inválida do ECB');
    }

    if (from === 'EUR') {
      return data.rates[to] || 1;
    } else {
      return 1 / (data.rates[from] || 1);
    }
  }

  /**
   * Verificar cache
   */
  private getCachedRate(key: string): number | null {
    const cached = this.cache[key];
    if (!cached) return null;

    const now = Date.now();
    if (now - cached.timestamp > cached.ttl) {
      delete this.cache[key];
      return null;
    }

    return cached.rate;
  }

  /**
   * Salvar no cache
   */
  private setCachedRate(key: string, rate: number): void {
    this.cache[key] = {
      rate,
      timestamp: Date.now(),
      ttl: this.CACHE_TTL,
    };
  }

  /**
   * Limpar cache expirado
   */
  clearExpiredCache(): void {
    const now = Date.now();
    Object.keys(this.cache).forEach(key => {
      const cached = this.cache[key];
      if (now - cached.timestamp > cached.ttl) {
        delete this.cache[key];
      }
    });
  }

  /**
   * Converter valor entre moedas
   */
  async convertAmount(amount: number, from: string, to: string): Promise<number> {
    const rate = await this.getExchangeRate(from, to);
    return Number((amount * rate).toFixed(2));
  }
}