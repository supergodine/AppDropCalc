import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExchangeService {
  private readonly FRANKFURTER_BASE_URL = 'https://api.frankfurter.app';
  private readonly RESTCOUNTRIES_URL = 'https://restcountries.com/v3.1/all';

  async getCurrentRate(from: string, to: string): Promise<number> {
    try {
      const response = await axios.get(
        `${this.FRANKFURTER_BASE_URL}/latest?from=${from}&to=${to}`
      );
      
      const rate = response.data.rates[to];
      if (!rate) {
        throw new HttpException(`Taxa de câmbio não encontrada para ${from}/${to}`, HttpStatus.NOT_FOUND);
      }
      
      return rate;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new HttpException(`Moeda não suportada: ${from} ou ${to}`, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Erro ao buscar taxa de câmbio', HttpStatus.SERVICE_UNAVAILABLE);
    }
  }

  async getSupportedCurrencies(): Promise<Array<{ code: string; name: string; symbol?: string }>> {
    try {
      // Primeiro, pegar moedas suportadas pelo Frankfurter
      const frankfurterResponse = await axios.get(`${this.FRANKFURTER_BASE_URL}/currencies`);
      const supportedCodes = Object.keys(frankfurterResponse.data);

      // Depois, buscar detalhes das moedas do RestCountries
      const countriesResponse = await axios.get(this.RESTCOUNTRIES_URL);
      const countries = countriesResponse.data;

      const currencyMap = new Map();

      // Mapear informações das moedas
      countries.forEach(country => {
        if (country.currencies) {
          Object.entries(country.currencies).forEach(([code, details]: [string, any]) => {
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

      // Adicionar moedas principais que podem não estar nos países
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
    } catch (error) {
      // Fallback para moedas principais caso as APIs falhem
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

  async getHistoricalRate(from: string, to: string, date: string): Promise<number> {
    try {
      const response = await axios.get(
        `${this.FRANKFURTER_BASE_URL}/${date}?from=${from}&to=${to}`
      );
      
      return response.data.rates[to];
    } catch (error) {
      throw new HttpException('Erro ao buscar taxa histórica', HttpStatus.SERVICE_UNAVAILABLE);
    }
  }
}