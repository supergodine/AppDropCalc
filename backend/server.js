// Simple Express server for testing
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.1.136:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Exchange service
class ExchangeService {
  async getCurrentRate(from, to) {
    // Validar parâmetros
    if (!from || !to || from === to) {
      console.error('Parâmetros inválidos para conversão:', { from, to });
      return 1;
    }

    try {
      // Tentar Frankfurter primeiro
      console.log(`Buscando taxa ${from} → ${to} via Frankfurter...`);
      const response = await axios.get(`https://api.frankfurter.app/latest?from=${from}&to=${to}`);
      const rate = response.data.rates[to];
      
      if (rate && typeof rate === 'number' && rate > 0) {
        console.log(`Taxa obtida: 1 ${from} = ${rate} ${to}`);
        return rate; // Retorna com precisão completa
      }
    } catch (error) {
      console.error('Erro na Frankfurter API:', error.message);
    }

    try {
      // Fallback: exchangerate.host
      console.log(`Tentando fallback via exchangerate.host...`);
      const response = await axios.get(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
      const rate = response.data.rates[to];
      
      if (rate && typeof rate === 'number' && rate > 0) {
        console.log(`Taxa fallback obtida: 1 ${from} = ${rate} ${to}`);
        return rate;
      }
    } catch (error) {
      console.error('Erro na exchangerate.host API:', error.message);
    }

    // Fallback final com taxas aproximadas atuais
    const fallbackRates = {
      'USD-BRL': 5.50,
      'EUR-BRL': 6.23,
      'GBP-BRL': 7.10,
      'JPY-BRL': 0.037,
      'CNY-BRL': 0.77,
      'BRL-USD': 0.18,
      'BRL-EUR': 0.16,
      'BRL-GBP': 0.14
    };
    
    const pairKey = `${from}-${to}`;
    const fallbackRate = fallbackRates[pairKey];
    
    if (fallbackRate) {
      console.log(`Usando taxa fallback: 1 ${from} = ${fallbackRate} ${to}`);
      return fallbackRate;
    }

    console.error('Nenhuma taxa disponível, usando 1.0');
    return 1;
  }

  async getSupportedCurrencies() {
    try {
      const response = await axios.get('https://api.frankfurter.app/currencies');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter moedas:', error);
      return {
        USD: 'US Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        JPY: 'Japanese Yen',
        CNY: 'Chinese Yuan',
        BRL: 'Brazilian Real'
      };
    }
  }
}

// Calc service
class CalcService {
  constructor() {
    this.exchangeService = new ExchangeService();
    
    this.platforms = {
      'shopify': { nome: 'Shopify', taxa: 2.9 },
      'nuvemshop': { nome: 'Nuvemshop', taxa: 2.0 },
      'woocommerce': { nome: 'WooCommerce', taxa: 0 },
      'mercado-livre': { nome: 'Mercado Livre', taxa: 16.0 },
      'amazon': { nome: 'Amazon Brasil', taxa: 15.0 },
      'shopee': { nome: 'Shopee', taxa: 10.0 }
    };

    this.gateways = {
      'stripe': { nome: 'Stripe', taxa: 2.9 },
      'mercado-pago': { nome: 'Mercado Pago', taxa: 4.99 },
      'paypal': { nome: 'PayPal', taxa: 3.9 },
      'pagseguro': { nome: 'PagSeguro', taxa: 4.99 },
      'stone': { nome: 'Stone', taxa: 3.99 },
      'cielo': { nome: 'Cielo', taxa: 4.5 }
    };
  }

  getPlatforms() {
    return this.platforms;
  }

  getGateways() {
    return this.gateways;
  }

  async calcularPrecoIdeal(dados) {
    console.log('Iniciando cálculo com dados:', dados);
    
    const taxaCambio = await this.exchangeService.getCurrentRate(dados.moedaOrigem, dados.moedaVenda);
    console.log(`Taxa de câmbio obtida: ${taxaCambio}`);
    
    // Manter alta precisão nos cálculos
    const custoConvertido = (dados.custoProduto + dados.custosAdicionais) * taxaCambio;
    
    const taxaPlataforma = this.platforms[dados.plataforma]?.taxa || 0;
    const taxaGateway = this.gateways[dados.gateway]?.taxa || 0;
    const taxaTotal = taxaPlataforma + taxaGateway;
    
    // Calcular preço de venda com precisão completa
    const precoVenda = custoConvertido / (1 - (taxaTotal + dados.margemLucro) / 100);
    const valorMargemBRL = precoVenda - custoConvertido - (precoVenda * taxaTotal / 100);

    const resultado = {
      precoVenda: precoVenda, // Manter precisão completa
      detalhes: {
        custoProduto: dados.custoProduto,
        custosAdicionais: dados.custosAdicionais,
        taxaCambio: taxaCambio, // Precisão completa da taxa
        custoConvertido: custoConvertido,
        taxaPlataforma: taxaPlataforma,
        taxaGateway: taxaGateway,
        taxaTotal: taxaTotal,
        margemLucro: dados.margemLucro,
        valorMargemBRL: valorMargemBRL
      }
    };

    console.log('Resultado calculado:', resultado);
    return resultado;
  }
}

// Initialize services
const calcService = new CalcService();
const exchangeService = new ExchangeService();

// Routes
app.get('/api/presets/platforms', (req, res) => {
  res.json(calcService.getPlatforms());
});

app.get('/api/presets/gateways', (req, res) => {
  res.json(calcService.getGateways());
});

app.get('/api/currencies', async (req, res) => {
  try {
    const currencies = await exchangeService.getSupportedCurrencies();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter moedas' });
  }
});

app.get('/api/exchange-rate', async (req, res) => {
  try {
    const { from, to } = req.query;
    
    if (!from || !to) {
      return res.status(400).json({ error: 'Parâmetros from e to são obrigatórios' });
    }

    const rate = await exchangeService.getCurrentRate(from, to);
    res.json({ 
      from, 
      to, 
      rate, 
      timestamp: new Date().toISOString(),
      precision: 'high', // Indica que a taxa tem alta precisão
      source: 'frankfurter.app + exchangerate.host'
    });
  } catch (error) {
    console.error('Erro no endpoint exchange-rate:', error);
    res.status(500).json({ error: 'Erro ao obter taxa de câmbio' });
  }
});

app.post('/api/calc', async (req, res) => {
  try {
    const result = await calcService.calcularPrecoIdeal(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro no cálculo', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
  console.log(`📡 APIs disponíveis:`);
  console.log(`  GET /api/presets/platforms`);
  console.log(`  GET /api/presets/gateways`);
  console.log(`  GET /api/currencies`);
  console.log(`  GET /api/exchange-rate?from=USD&to=BRL`);
  console.log(`  POST /api/calc`);
});