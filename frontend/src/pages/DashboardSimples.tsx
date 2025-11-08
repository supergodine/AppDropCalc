import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, DollarSign, TrendingUp, Settings, User, Crown, Menu, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../hooks/useAuth';

// Componente de Tooltip
const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2 max-w-xs">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

interface CalculationResult {
  precoVenda: number;
  custoTotal: number;
  custoFornecedor: number;
  markup: number;
  taxaCambio: number;
  lucroLiquido: number;
  breakeven: number;
  taxas: {
    gateway: { percentual: number; valor: number };
    plataforma: { percentual: number; valor: number };
    marketing: { percentual: number; valor: number };
    extra: { percentual: number; valor: number };
    total: number;
  };
  projecoes: {
    quantidade: number;
    lucro: number;
  }[];
  percentuais: {
    custoMedio: number;
    marketing: number;
    margemContrib: number;
    breakeven: number;
  };
}

const DashboardSimples: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user, plan, logout: authLogout, refreshAuth } = useAuth();

  // Debug info
  console.log('🎯 DashboardSimples - Estado atual:', {
    user: !!user,
    userEmail: user?.email,
    userName: user?.name,
    plan: !!plan,
    planType: plan?.type,
    planName: plan?.name
  });

  // Verificar se o usuário está logado, senão redirecionar
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('currentUser');
    
    console.log('🔍 DashboardSimples - Verificação de auth:', {
      hasToken: !!token,
      hasUserData: !!userData
    });
    
    if (!token || !userData) {
      console.log('❌ Não autenticado, redirecionando para login');
      navigate('/login');
      return;
    }
    
    // Forçar refresh do auth se necessário
    if (!user && userData) {
      console.log('🔄 Fazendo refresh do auth...');
      refreshAuth();
    }
  }, [user, navigate, refreshAuth]);
  
  // Estados da calculadora expandidos
  const [nomeProduto, setNomeProduto] = useState('');
  
  // Interface para histórico de cálculos
  interface HistoricoCalculo {
    id: string;
    nomeProduto: string;
    precoVenda: number;
    moedaDestino: string;
    plataforma: string;
    gateway: string;
    dataCalculo: string;
    detalhes: CalculationResult;
  }
  
  const [historicoCalculos, setHistoricoCalculos] = useState<HistoricoCalculo[]>(() => {
    try {
      const saved = localStorage.getItem('calculadora-historico');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [custoProdutoUSD, setCustoProdutoUSD] = useState('5.00'); // Exato da planilha
  const [frete, setFrete] = useState('4.70'); // Para chegar no custo médio $9.70
  const [marketing, setMarketing] = useState('25'); // Igual planilha
  const [custoExtra, setCustoExtra] = useState('0'); // Zero na planilha
  const [markup, setMarkup] = useState('3'); // Exato da planilha
  const [plataforma, setPlataforma] = useState('shopify');
  const [gateway, setGateway] = useState('stripe');
  const [moedaOrigem, setMoedaOrigem] = useState('USD');
  const [moedaDestino, setMoedaDestino] = useState('USD'); // Mesmo resultado em USD
  const [resultado, setResultado] = useState<CalculationResult | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);
  const [loading, setLoading] = useState(false);

  // Determinar planos baseado no plano real do usuário
  const isPremium = plan?.type === 'premium';
  const isGold = plan?.type === 'professional';

  // Limitações por plano
  const planLimitations = {
    basic: {
      maxCalculations: 10,
      allowedPlatforms: ['shopify', 'nuvemshop'],
      allowedCurrencies: ['USD', 'BRL'], // Apenas USD e BRL
      allowedGateways: ['stripe', 'paypal'], // Apenas Stripe e PayPal
      hasHistory: false
    },
    gold: {
      maxCalculations: 100,
      allowedPlatforms: ['shopify', 'nuvemshop', 'woocommerce', 'magento', 'opencart', 'prestashop', 'mercadolivre', 'amazon'],
      allowedCurrencies: ['USD', 'EUR', 'BRL', 'GBP'], // 4 moedas
      allowedGateways: ['stripe', 'paypal', 'pagseguro', 'mercadopago', 'cielo', 'rede', 'getnet', 'stone'], // 8 gateways principais
      hasHistory: false
    },
    premium: {
      maxCalculations: Infinity,
      allowedPlatforms: 'all' as const,
      allowedCurrencies: 'all' as const,
      allowedGateways: 'all' as const,
      hasHistory: true
    }
  };

  // Determinar limitações do plano atual
  const currentPlanType = isPremium ? 'premium' : isGold ? 'gold' : 'basic';
  const currentLimitations = planLimitations[currentPlanType] || planLimitations.basic;

  // Verificar cálculos restantes (simulado - em produção viria do backend)
  const [calculationsUsed, setCalculationsUsed] = useState(() => {
    try {
      const used = localStorage.getItem('calculations-used-this-month');
      return used ? parseInt(used) : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    // Premium status agora é determinado pelo plano real do usuário
  }, []);

  // Plataformas e gateways expandidos (ajustado para planilha)
  const plataformas = [
    { id: 'shopify', nome: 'Shopify', taxa: 2.9 }, // Igual planilha
    { id: 'nuvemshop', nome: 'Nuvem Shop', taxa: 3.5 },
    { id: 'woocommerce', nome: 'WooCommerce', taxa: 0 },
    { id: 'magento', nome: 'Magento', taxa: 0 },
    { id: 'opencart', nome: 'OpenCart', taxa: 0 },
    { id: 'prestashop', nome: 'PrestaShop', taxa: 0 },
    { id: 'mercadolivre', nome: 'Mercado Livre', taxa: 13.99 },
    { id: 'amazon', nome: 'Amazon Brasil', taxa: 15 },
    { id: 'americanas', nome: 'Americanas', taxa: 17 },
    { id: 'submarino', nome: 'Submarino', taxa: 17 },
    { id: 'casasbahia', nome: 'Casas Bahia', taxa: 18 },
    { id: 'extra', nome: 'Extra', taxa: 16 },
    { id: 'pontofrio', nome: 'Ponto Frio', taxa: 17 },
    { id: 'shopee', nome: 'Shopee', taxa: 12 },
    { id: 'aliexpress', nome: 'AliExpress', taxa: 8 },
    { id: 'wish', nome: 'Wish', taxa: 15 },
    { id: 'etsy', nome: 'Etsy', taxa: 6.5 },
    { id: 'ebay', nome: 'eBay', taxa: 10 },
    { id: 'facebook', nome: 'Facebook Shop', taxa: 5 },
    { id: 'instagram', nome: 'Instagram Shop', taxa: 5 },
    { id: 'tiktok', nome: 'TikTok Shop', taxa: 6 },
    { id: 'elo7', nome: 'Elo7', taxa: 12 },
    { id: 'enjoei', nome: 'Enjoei', taxa: 15 },
    { id: 'olx', nome: 'OLX', taxa: 0 },
    { id: 'vinted', nome: 'Vinted', taxa: 7 },
    { id: 'shein', nome: 'Shein', taxa: 10 },
    { id: 'temu', nome: 'Temu', taxa: 8 },
    { id: 'zoom', nome: 'Zoom', taxa: 5 },
    { id: 'buscape', nome: 'Buscapé', taxa: 8 },
    { id: 'personalizado', nome: 'Site Personalizado', taxa: 0 },
  ];

  const gateways = [
    { id: 'stripe', nome: 'Stripe', taxa: 3.4 }, // Igual planilha
    { id: 'pagseguro', nome: 'PagSeguro', taxa: 3.99 },
    { id: 'mercadopago', nome: 'Mercado Pago', taxa: 4.99 },
    { id: 'paypal', nome: 'PayPal', taxa: 4.4 },
    { id: 'cielo', nome: 'Cielo', taxa: 3.25 },
    { id: 'rede', nome: 'Rede', taxa: 3.5 },
    { id: 'getnet', nome: 'Getnet', taxa: 3.2 },
    { id: 'stone', nome: 'Stone', taxa: 2.95 },
    { id: 'adyen', nome: 'Adyen', taxa: 2.9 },
    { id: 'wirecard', nome: 'Wirecard', taxa: 3.8 },
    { id: 'iugu', nome: 'Iugu', taxa: 4.5 },
    { id: 'pagar.me', nome: 'Pagar.me', taxa: 4.99 },
    { id: 'picpay', nome: 'PicPay', taxa: 3.99 },
    { id: 'asaas', nome: 'Asaas', taxa: 3.5 },
    { id: 'gerencianet', nome: 'Gerencianet', taxa: 4.2 },
    { id: 'moip', nome: 'Moip', taxa: 4.69 },
    { id: 'ebanx', nome: 'EBANX', taxa: 4.2 },
    { id: 'checkout', nome: 'Checkout.com', taxa: 2.95 },
    { id: 'rakuten', nome: 'Rakuten Pay', taxa: 4.5 },
    { id: 'ifood', nome: 'iFood Pay', taxa: 5.2 },
    { id: 'shipay', nome: 'SiPay', taxa: 3.8 },
    { id: 'zoop', nome: 'Zoop', taxa: 3.59 },
    { id: 'vindi', nome: 'Vindi', taxa: 3.99 },
    { id: 'yapay', nome: 'YaPay', taxa: 4.1 },
    { id: 'pagarme', nome: 'Pagar.me', taxa: 4.99 },
  ];

  const moedas = [
    { codigo: 'USD', nome: 'Dólar Americano' },
    { codigo: 'EUR', nome: 'Euro' },
    { codigo: 'GBP', nome: 'Libra Esterlina' },
    { codigo: 'CNY', nome: 'Yuan Chinês' },
    { codigo: 'JPY', nome: 'Iene Japonês' },
    { codigo: 'CAD', nome: 'Dólar Canadense' },
    { codigo: 'AUD', nome: 'Dólar Australiano' },
    { codigo: 'CHF', nome: 'Franco Suíço' },
    { codigo: 'SEK', nome: 'Coroa Sueca' },
    { codigo: 'NOK', nome: 'Coroa Norueguesa' },
    { codigo: 'DKK', nome: 'Coroa Dinamarquesa' },
    { codigo: 'PLN', nome: 'Zloty Polonês' },
    { codigo: 'CZK', nome: 'Coroa Tcheca' },
    { codigo: 'HUF', nome: 'Forint Húngaro' },
    { codigo: 'RON', nome: 'Leu Romeno' },
    { codigo: 'BGN', nome: 'Lev Búlgaro' },
    { codigo: 'HRK', nome: 'Kuna Croata' },
    { codigo: 'RUB', nome: 'Rublo Russo' },
    { codigo: 'TRY', nome: 'Lira Turca' },
    { codigo: 'ILS', nome: 'Shekel Israelense' },
    { codigo: 'ZAR', nome: 'Rand Sul-Africano' },
    { codigo: 'INR', nome: 'Rupia Indiana' },
    { codigo: 'KRW', nome: 'Won Sul-Coreano' },
    { codigo: 'SGD', nome: 'Dólar de Singapura' },
    { codigo: 'HKD', nome: 'Dólar de Hong Kong' },
    { codigo: 'THB', nome: 'Baht Tailandês' },
    { codigo: 'MYR', nome: 'Ringgit Malaio' },
    { codigo: 'IDR', nome: 'Rupia Indonésia' },
    { codigo: 'PHP', nome: 'Peso Filipino' },
    { codigo: 'VND', nome: 'Dong Vietnamita' },
    { codigo: 'BDT', nome: 'Taka de Bangladesh' },
    { codigo: 'PKR', nome: 'Rupia Paquistanesa' },
    { codigo: 'LKR', nome: 'Rupia do Sri Lanka' },
    { codigo: 'NPR', nome: 'Rupia Nepalesa' },
    { codigo: 'MVR', nome: 'Rufiyaa das Maldivas' },
    { codigo: 'BTN', nome: 'Ngultrum do Butão' },
    { codigo: 'AFN', nome: 'Afghani Afegão' },
    { codigo: 'IRR', nome: 'Rial Iraniano' },
    { codigo: 'IQD', nome: 'Dinar Iraquiano' },
    { codigo: 'JOD', nome: 'Dinar Jordaniano' },
    { codigo: 'KWD', nome: 'Dinar Kuwaitiano' },
    { codigo: 'LBP', nome: 'Libra Libanesa' },
    { codigo: 'SAR', nome: 'Riyal Saudita' },
    { codigo: 'AED', nome: 'Dirham dos Emirados' },
    { codigo: 'QAR', nome: 'Riyal do Catar' },
    { codigo: 'OMR', nome: 'Rial de Omã' },
    { codigo: 'BHD', nome: 'Dinar do Bahrein' },
    { codigo: 'YER', nome: 'Rial Iemenita' },
    { codigo: 'SYP', nome: 'Libra Síria' },
    { codigo: 'EGP', nome: 'Libra Egípcia' },
    { codigo: 'LYD', nome: 'Dinar Líbio' },
    { codigo: 'TND', nome: 'Dinar Tunisiano' },
    { codigo: 'DZD', nome: 'Dinar Argelino' },
    { codigo: 'MAD', nome: 'Dirham Marroquino' },
    { codigo: 'NGN', nome: 'Naira Nigeriana' },
    { codigo: 'GHS', nome: 'Cedi Ganês' },
    { codigo: 'KES', nome: 'Xelim Queniano' },
    { codigo: 'UGX', nome: 'Xelim Ugandense' },
    { codigo: 'TZS', nome: 'Xelim Tanzaniano' },
    { codigo: 'ETB', nome: 'Birr Etíope' },
    { codigo: 'RWF', nome: 'Franco Ruandês' },
    { codigo: 'MXN', nome: 'Peso Mexicano' },
    { codigo: 'GTQ', nome: 'Quetzal Guatemalteco' },
    { codigo: 'HNL', nome: 'Lempira Hondurenha' },
    { codigo: 'NIO', nome: 'Córdoba Nicaraguense' },
    { codigo: 'CRC', nome: 'Colón Costa-riquenho' },
    { codigo: 'PAB', nome: 'Balboa Panamenha' },
    { codigo: 'COP', nome: 'Peso Colombiano' },
    { codigo: 'VES', nome: 'Bolívar Venezuelano' },
    { codigo: 'GYD', nome: 'Dólar Guianense' },
    { codigo: 'SRD', nome: 'Dólar Surinamês' },
    { codigo: 'PEN', nome: 'Sol Peruano' },
    { codigo: 'BOB', nome: 'Boliviano' },
    { codigo: 'PYG', nome: 'Guarani Paraguaio' },
    { codigo: 'UYU', nome: 'Peso Uruguaio' },
    { codigo: 'ARS', nome: 'Peso Argentino' },
    { codigo: 'CLP', nome: 'Peso Chileno' },
    { codigo: 'BRL', nome: 'Real Brasileiro' },
  ];

  // Filtrar plataformas baseado no plano (com verificação de segurança)
  const plataformasDisponiveis = !currentLimitations || currentLimitations.allowedPlatforms === 'all' 
    ? plataformas 
    : plataformas.filter(p => currentLimitations.allowedPlatforms?.includes(p.id));

  // Filtrar moedas baseado no plano (com verificação de segurança)
  const moedasDisponiveis = !currentLimitations || currentLimitations.allowedCurrencies === 'all'
    ? moedas
    : moedas.filter(m => currentLimitations.allowedCurrencies?.includes(m.codigo));

  // Filtrar gateways baseado no plano (com verificação de segurança)
  const gatewaysDisponiveis = !currentLimitations || currentLimitations.allowedGateways === 'all'
    ? gateways
    : gateways.filter(g => currentLimitations.allowedGateways?.includes(g.id));

  // Função para salvar cálculo no histórico (apenas Premium)
  const salvarCalculo = () => {
    if (!resultado) return;
    
    // Verificar se o plano permite histórico
    if (!currentLimitations?.hasHistory) {
      alert('Histórico disponível apenas no plano Premium. Faça upgrade para salvar seus cálculos!');
      return;
    }
    
    const novoCalculo: HistoricoCalculo = {
      id: Date.now().toString(),
      nomeProduto: nomeProduto || 'Produto sem nome',
      precoVenda: resultado.precoVenda,
      moedaDestino,
      plataforma,
      gateway,
      dataCalculo: new Date().toLocaleString('pt-BR'),
      detalhes: resultado
    };
    
    const novoHistorico = [novoCalculo, ...historicoCalculos].slice(0, 50); // Limita a 50 cálculos
    setHistoricoCalculos(novoHistorico);
    localStorage.setItem('calculadora-historico', JSON.stringify(novoHistorico));
    
    // Feedback visual (poderia ser um toast)
    alert(t('calc.calculationSaved'));
  };

  // Função para obter símbolo da moeda
  const getSymbolMoeda = (codigo: string) => {
    const simbolos: { [key: string]: string } = {
      'USD': '$', 'EUR': '€', 'GBP': '£', 'BRL': 'R$', 'JPY': '¥', 'CNY': '¥',
      'CAD': 'C$', 'AUD': 'A$', 'CHF': 'CHF', 'SEK': 'kr', 'NOK': 'kr',
      'MXN': '$', 'ARS': '$', 'CLP': '$', 'COP': '$', 'PEN': 'S/', 
      'INR': '₹', 'KRW': '₩', 'THB': '฿', 'SGD': 'S$', 'HKD': 'HK$'
    };
    return simbolos[codigo] || codigo;
  };

  // Função para obter taxa de câmbio
  const getTaxaCambio = (origem: string, destino: string) => {
    if (origem === destino) return 1;
    
    // Taxas simuladas baseadas no USD
    const taxasUSD: { [key: string]: number } = {
      'BRL': 5.20, 'EUR': 0.92, 'GBP': 0.80, 'JPY': 150.0, 'CNY': 7.30,
      'CAD': 1.35, 'AUD': 1.55, 'CHF': 0.90, 'SEK': 10.50, 'NOK': 10.80,
      'MXN': 18.50, 'ARS': 365.0, 'CLP': 900.0, 'COP': 4100.0, 'PEN': 3.75,
      'INR': 83.50, 'KRW': 1320.0, 'THB': 36.0, 'SGD': 1.35, 'HKD': 7.80
    };
    
    if (origem === 'USD') {
      return taxasUSD[destino] || 1;
    } else if (destino === 'USD') {
      return 1 / (taxasUSD[origem] || 1);
    } else {
      // Conversão via USD
      const paraUSD = 1 / (taxasUSD[origem] || 1);
      const deUSD = taxasUSD[destino] || 1;
      return paraUSD * deUSD;
    }
  };

  useEffect(() => {
    // Premium status agora é determinado pelo plano real do usuário
  }, []);

  const calcular = async () => {
    if (!custoProdutoUSD || !markup) {
      setResultado(null);
      return;
    }

    // Verificar limite de cálculos
    if (calculationsUsed >= (currentLimitations?.maxCalculations || 10)) {
      alert(`Limite de ${currentLimitations?.maxCalculations || 10} cálculos por mês atingido! Faça upgrade para continuar calculando.`);
      return;
    }

    setLoading(true);

    try {
      // Cálculo avançado local baseado na imagem
      const custoProduto = parseFloat(custoProdutoUSD);
      const markupValue = parseFloat(markup);
      const marketingPercent = parseFloat(marketing);
      const custoExtraValue = parseFloat(custoExtra) || 0;
      const freteValue = parseFloat(frete) || 0;
      
      // Taxa de câmbio entre moeda origem e destino
      const taxaCambio = getTaxaCambio(moedaOrigem, moedaDestino);
      
      // Buscar taxas das plataformas e gateways
      const plataformaSelecionada = plataformas.find(p => p.id === plataforma);
      const gatewaySelecionado = gateways.find(g => g.id === gateway);
      
      const taxaPlataforma = plataformaSelecionada?.taxa || 2.9; // Shopify 2.9%
      const taxaGateway = gatewaySelecionado?.taxa || 3.4; // Stripe 3.4%
      
      // Cálculos principais baseados na planilha Excel
      const custoFornecedorConvertido = custoProduto * taxaCambio;
      const freteConvertido = freteValue * taxaCambio;
      const custoExtraConvertido = custoExtraValue * taxaCambio;
      
      // 1. Preço de venda = Custo Fornecedor × Markup (exatamente como no Excel)
      const precoVenda = custoFornecedorConvertido * markupValue;
      
      // 2. Custo médio = Custo Fornecedor + Frete + Extras (como na planilha)
      const custoMedio = custoFornecedorConvertido + freteConvertido + custoExtraConvertido;
      
      // 3. Cálculo das taxas baseadas no preço de venda
      const valorStripe = precoVenda * (taxaGateway / 100);
      const valorShopify = precoVenda * (taxaPlataforma / 100);
      const valorMarketing = precoVenda * (marketingPercent / 100);
      
      const totalTaxas = valorStripe + valorShopify + valorMarketing;
      
      // 4. Margem Contribuição = Preço Venda - Custo Médio - Taxas (como na planilha)
      const margemContrib = precoVenda - custoMedio - totalTaxas;
      
      // 5. Breakeven = Custo Médio + Taxas
      const breakeven = custoMedio + totalTaxas;
      
      // Projeções de vendas
      const quantidades = [1, 10, 50, 100, 500, 1000];
      const projecoes = quantidades.map(qty => ({
        quantidade: qty,
        lucro: margemContrib * qty
      }));
      
      // Percentuais
      const percentuais = {
        custoMedio: (custoMedio / precoVenda) * 100,
        marketing: marketingPercent,
        margemContrib: (margemContrib / precoVenda) * 100,
        breakeven: (breakeven / precoVenda) * 100
      };
      
      const resultadoCompleto: CalculationResult = {
        precoVenda: precoVenda,
        custoTotal: custoMedio,
        custoFornecedor: custoFornecedorConvertido,
        markup: markupValue,
        taxaCambio: taxaCambio,
        lucroLiquido: margemContrib,
        breakeven: breakeven,
        taxas: {
          gateway: { percentual: taxaGateway, valor: valorStripe },
          plataforma: { percentual: taxaPlataforma, valor: valorShopify },
          marketing: { percentual: marketingPercent, valor: valorMarketing },
          extra: { percentual: 0, valor: 0 }, // Zero como na planilha
          total: totalTaxas
        },
        projecoes: projecoes,
        percentuais: percentuais
      };
      
      setResultado(resultadoCompleto);

      // Incrementar contador de cálculos
      const newCount = calculationsUsed + 1;
      setCalculationsUsed(newCount);
      localStorage.setItem('calculations-used-this-month', newCount.toString());

    } catch (error) {
      console.error('Erro no cálculo:', error);
      setResultado(null);
    } finally {
      setLoading(false);
    }
  };

  // Verificar se as seleções atuais são válidas para o plano
  useEffect(() => {
    if (!currentLimitations) return;
    
    // Verificar moeda origem
    if (currentLimitations.allowedCurrencies !== 'all' && 
        currentLimitations.allowedCurrencies && 
        !currentLimitations.allowedCurrencies.includes(moedaOrigem)) {
      setMoedaOrigem(currentLimitations.allowedCurrencies[0] || 'USD');
    }
    
    // Verificar moeda destino
    if (currentLimitations.allowedCurrencies !== 'all' && 
        currentLimitations.allowedCurrencies &&
        !currentLimitations.allowedCurrencies.includes(moedaDestino)) {
      setMoedaDestino(currentLimitations.allowedCurrencies[0] || 'USD');
    }
    
    // Verificar plataforma
    if (currentLimitations.allowedPlatforms !== 'all' && 
        currentLimitations.allowedPlatforms &&
        !currentLimitations.allowedPlatforms.includes(plataforma)) {
      setPlataforma(currentLimitations.allowedPlatforms[0] || 'shopify');
    }
    
    // Verificar gateway
    if (currentLimitations.allowedGateways !== 'all' && 
        currentLimitations.allowedGateways &&
        !currentLimitations.allowedGateways.includes(gateway)) {
      setGateway(currentLimitations.allowedGateways[0] || 'stripe');
    }
  }, [plan, currentLimitations, moedaOrigem, moedaDestino, plataforma, gateway]);

  // Cálculo automático sempre que algum campo mudar
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      calcular();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [custoProdutoUSD, frete, marketing, custoExtra, markup, plataforma, gateway, moedaOrigem, moedaDestino]);

  const logout = async () => {
    try {
      console.log('🚪 Iniciando logout...');
      
      // Limpar localStorage completamente
      localStorage.clear();
      
      // Chamar logout do authService
      await authLogout();
      
      console.log('✅ Logout concluído, redirecionando...');
      
      // Forçar redirecionamento
      window.location.href = '/welcome';
    } catch (error) {
      console.error('❌ Erro no logout:', error);
      // Mesmo com erro, limpar e redirecionar
      localStorage.clear();
      window.location.href = '/welcome';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-purple-400 mr-3" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">DropCalc</h1>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {t('calc.welcome')}, {user?.name || 'Usuário'}!
                {/* Debug: mostrar dados do usuário */}
                {process.env.NODE_ENV === 'development' && (
                  <small style={{fontSize: '10px', color: 'red', marginLeft: '5px'}}>
                    (Debug: {user ? `User: ${user.name || user.email}` : 'No user'})
                  </small>
                )}
              </span>
              
              {/* Badge do Plano Atual */}
              {plan && (
                <span className={`px-2 py-1 text-xs font-bold rounded-full flex items-center ${
                  isPremium 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : isGold 
                    ? 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-black'
                    : 'bg-gradient-to-r from-gray-400 to-gray-600 text-white'
                }`}>
                  <Crown className="w-3 h-3 mr-1" />
                  {plan.name.toUpperCase()}
                </span>
              )}
              
              {/* Botão para Escolher/Alterar Plano */}
              <button
                onClick={() => {
                  console.log('🎯 Clicou em Alterar Plano, navegando para /payment');
                  navigate('/payment');
                }}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors"
              >
                {plan ? 'Alterar Plano' : 'Escolher Plano'}
              </button>
              
              <button
                onClick={() => navigate('/users')}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="Ver Usuários"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/settings')}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
              >
                {t('nav.logout')}
              </button>
            </div>

            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/30 backdrop-blur-sm border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {t('calc.welcome')}, {user?.name || t('calc.user')}!
              </div>
              
              {/* Badge do Plano no Mobile */}
              {plan && (
                <div className={`inline-flex px-2 py-1 text-xs font-bold rounded-full items-center mb-2 ${
                  isPremium 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : isGold 
                    ? 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-black'
                    : 'bg-gradient-to-r from-gray-400 to-gray-600 text-white'
                }`}>
                  <Crown className="w-3 h-3 mr-1" />
                  {plan.name.toUpperCase()}
                </div>
              )}
              
              <button
                onClick={() => {
                  console.log('🎯 Clicou em Alterar Plano (mobile), navegando para /payment');
                  navigate('/payment');
                  setMenuAberto(false);
                }}
                className="flex items-center w-full p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <Crown className="w-4 h-4 mr-2" />
                {plan ? 'Alterar Plano' : 'Escolher Plano'}
              </button>
              
              <button
                onClick={() => {
                  navigate('/users');
                  setMenuAberto(false);
                }}
                className="flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <User className="w-4 h-4 mr-2" />
                Ver Usuários
              </button>
              <button
                onClick={() => {
                  navigate('/settings');
                  setMenuAberto(false);
                }}
                className="flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Settings className="w-4 h-4 mr-2" />
                {t('nav.settings')}
              </button>
              <button
                onClick={logout}
                className="flex items-center w-full p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <User className="w-4 h-4 mr-2" />
                {t('nav.logout')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Cálculo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-2 text-purple-400" />
              {t('calc.title')}
              {loading && (
                <span className="ml-3 text-sm text-yellow-400 animate-pulse">
                  {t('calc.loading')}
                </span>
              )}
            </h2>

            {/* Indicador de Cálculos Restantes */}
            {currentLimitations?.maxCalculations !== Infinity && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 dark:text-blue-300 font-medium">
                    Cálculos restantes este mês:
                  </span>
                  <span className={`font-bold ${
                    ((currentLimitations?.maxCalculations || 10) - calculationsUsed) <= 2 
                      ? 'text-red-600 dark:text-red-400' 
                      : 'text-green-600 dark:text-green-400'
                  }`}>
                    {(currentLimitations?.maxCalculations || 10) - calculationsUsed} de {currentLimitations?.maxCalculations || 10}
                  </span>
                </div>
                {((currentLimitations?.maxCalculations || 10) - calculationsUsed) <= 2 && (
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                    Poucos cálculos restantes! Considere fazer upgrade para continuar usando.
                  </p>
                )}
              </div>
            )}

            <div className="space-y-4">
              {/* Campo Nome do Produto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  {t('calc.productName')}
                  <Tooltip text={t('tooltip.productName')}>
                    <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  </Tooltip>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder={t('calc.productName')}
                  value={nomeProduto}
                  onChange={(e) => setNomeProduto(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    {t('calc.productCost')} ({moedaOrigem})
                    <Tooltip text={t('tooltip.productCost')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <input
                    type="number"
                    value={custoProdutoUSD}
                    onChange={(e) => setCustoProdutoUSD(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Ex: 16.73"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    {t('calc.originCurrency')}
                    <Tooltip text={t('tooltip.originCurrency')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <select
                    value={moedaOrigem}
                    onChange={(e) => setMoedaOrigem(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto"
                    style={{ 
                      fontSize: '14px',
                      colorScheme: 'light dark'
                    }}
                  >
                    {moedasDisponiveis.map((moeda) => (
                      <option key={moeda.codigo} value={moeda.codigo}>
                        {moeda.codigo} - {moeda.nome}
                      </option>
                    ))}
                  </select>
                  {currentPlanType !== 'premium' && (
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                      {currentPlanType === 'basic' ? 'Plano Básico: 2 moedas' : 'Plano Gold: 4 moedas'} - Upgrade para Premium para todas as moedas
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    {t('calc.saleCurrency')}
                    <Tooltip text={t('tooltip.saleCurrency')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <select
                    value={moedaDestino}
                    onChange={(e) => setMoedaDestino(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto"
                    style={{ 
                      fontSize: '14px',
                      colorScheme: 'light dark'
                    }}
                  >
                    {moedasDisponiveis.map((moeda) => (
                      <option key={moeda.codigo} value={moeda.codigo}>
                        {moeda.codigo} - {moeda.nome}
                      </option>
                    ))}
                  </select>
                  {currentPlanType !== 'premium' && (
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                      {currentPlanType === 'basic' ? 'Plano Básico: 2 moedas' : 'Plano Gold: 4 moedas'} - Upgrade para Premium para todas as moedas
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    {t('calc.additionalCosts')} ({moedaOrigem})
                    <Tooltip text={t('tooltip.additionalCosts')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <input
                    type="number"
                    value={frete}
                    onChange={(e) => setFrete(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Ex: 5.00"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    {t('calc.profitMargin')}
                    <Tooltip text={t('tooltip.profitMargin')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <input
                    type="number"
                    value={markup}
                    onChange={(e) => setMarkup(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Ex: 4.12"
                    step="0.01"
                    min="1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    Marketing (%)
                    <Tooltip text={t('tooltip.marketing')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <input
                    type="number"
                    value={marketing}
                    onChange={(e) => setMarketing(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Ex: 25"
                    step="0.1"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    Custo Extra ({moedaOrigem})
                    <Tooltip text={t('tooltip.extraCost')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <input
                    type="number"
                    value={custoExtra}
                    onChange={(e) => setCustoExtra(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Ex: 2.00"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    {t('calc.platform')}
                    <Tooltip text={t('tooltip.platform')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <select
                    value={plataforma}
                    onChange={(e) => setPlataforma(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto"
                    style={{ 
                      fontSize: '14px',
                      colorScheme: 'light dark'
                    }}
                  >
                    {plataformasDisponiveis.map((plat) => (
                      <option key={plat.id} value={plat.id}>
                        {plat.nome} ({plat.taxa}%)
                      </option>
                    ))}
                  </select>
                  {currentPlanType !== 'premium' && (
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                      {currentPlanType === 'basic' 
                        ? 'Plano Básico: Apenas Shopify e Nuvem Shop' 
                        : 'Plano Gold: Plataformas limitadas'} - Upgrade para Premium para todas as plataformas
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    {t('calc.paymentGateway')}
                    <Tooltip text={t('tooltip.gateway')}>
                      <Info className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </Tooltip>
                  </label>
                  <select
                    value={gateway}
                    onChange={(e) => setGateway(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto"
                    style={{ 
                      fontSize: '14px',
                      colorScheme: 'light dark'
                    }}
                  >
                    {gatewaysDisponiveis.map((gw) => (
                      <option key={gw.id} value={gw.id}>
                        {gw.nome} ({gw.taxa}%)
                      </option>
                    ))}
                  </select>
                  {currentPlanType !== 'premium' && (
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                      {currentPlanType === 'basic' 
                        ? 'Plano Básico: Apenas Stripe e PayPal' 
                        : 'Plano Gold: 8 gateways principais'} - Upgrade para Premium para todos os gateways
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resultado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
              {t('calc.calculationResult')}
            </h2>

            {resultado ? (
              <div className="space-y-6">
                {/* Preço de Venda Principal */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4">
                  <div className="text-center">
                    <p className="text-green-100 text-sm">{t('calc.suggestedPrice')}</p>
                    <p className="text-3xl font-bold text-white">
                      {getSymbolMoeda(moedaDestino)} {resultado.precoVenda.toFixed(2)}
                    </p>
                    <p className="text-green-200 text-xs mt-1">
                      {t('calc.exchangeRate')}: 1 {moedaOrigem} = {resultado.taxaCambio.toFixed(4)} {moedaDestino}
                    </p>
                  </div>
                </div>

                {/* Informações da Plataforma e Gateway */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">Plataforma:</span>
                      <span className="ml-1 text-blue-800 dark:text-blue-300 font-semibold">
                        {plataformas.find(p => p.id === plataforma)?.nome || plataforma}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">Gateway:</span>
                      <span className="ml-1 text-blue-800 dark:text-blue-300 font-semibold">
                        {gateways.find(g => g.id === gateway)?.nome || gateway}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Duas Colunas Principais */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Coluna 1: PRECIFICAÇÃO */}
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded">
                      {t('calc.pricing')}
                    </h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-green-600 text-white px-2 py-1 rounded">
                        <span className="flex items-center">
                          {t('calc.sellingPrice')}:
                          <Tooltip text={t('tooltip.resultSellingPrice')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span>{getSymbolMoeda(moedaDestino)} {resultado.precoVenda.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center bg-red-500 text-white px-2 py-1 rounded">
                        <span className="flex items-center">
                          {t('calc.supplierCost')}:
                          <Tooltip text={t('tooltip.resultSupplierCost')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span>{getSymbolMoeda(moedaDestino)} {resultado.custoFornecedor.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center bg-gray-500 text-white px-2 py-1 rounded">
                        <span className="flex items-center">
                          {t('calc.markupLabel')}:
                          <Tooltip text={t('tooltip.resultMarkup')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span>{resultado.markup.toFixed(8)}</span>
                      </div>
                    </div>

                    {/* Seção TAXAS */}
                    <h4 className="text-white font-bold text-center bg-blue-600 text-sm py-2 mt-4 mb-2 rounded">
                      {t('calc.taxes')}
                    </h4>
                    
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400">{gateways.find(g => g.id === gateway)?.nome || gateway}</span>
                        <span className="text-gray-900 dark:text-white">{resultado.taxas.gateway.percentual.toFixed(2)}%</span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.taxas.gateway.valor.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400">{plataformas.find(p => p.id === plataforma)?.nome || plataforma}</span>
                        <span className="text-gray-900 dark:text-white">{resultado.taxas.plataforma.percentual.toFixed(2)}%</span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.taxas.plataforma.valor.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400">{t('calc.marketing')}</span>
                        <span className="text-gray-900 dark:text-white">{resultado.taxas.marketing.percentual}%</span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.taxas.marketing.valor.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400">{t('calc.extra')}</span>
                        <span className="text-gray-900 dark:text-white">0%</span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.taxas.extra.valor.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-center bg-green-600 text-white px-2 py-1 rounded font-bold">
                        {getSymbolMoeda(moedaDestino)} {resultado.taxas.total.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* Coluna 2: VALORES IMPORTANTES */}
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded">
                      {t('calc.importantValues')}
                    </h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 flex items-center">
                          {t('calc.saleValue')}
                          <Tooltip text={t('tooltip.resultSaleValue')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.precoVenda.toFixed(2)}</span>
                        <span className="text-green-600 dark:text-green-400">100,00%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 flex items-center">
                          {t('calc.averageCost')}
                          <Tooltip text={t('tooltip.resultAverageCost')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.custoTotal.toFixed(2)}</span>
                        <span className="text-red-400">{resultado.percentuais.custoMedio.toFixed(2)}%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 flex items-center">
                          {t('calc.marketing')}
                          <Tooltip text={t('tooltip.resultMarketing')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.taxas.marketing.valor.toFixed(2)}</span>
                        <span className="text-yellow-400">{resultado.percentuais.marketing.toFixed(2)}%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 flex items-center">
                          {t('calc.contributionMargin')}
                          <Tooltip text={t('tooltip.resultContributionMargin')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.lucroLiquido.toFixed(2)}</span>
                        <span className="text-green-600 dark:text-green-400">{resultado.percentuais.margemContrib.toFixed(2)}%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 flex items-center">
                          {t('calc.breakeven')}
                          <Tooltip text={t('tooltip.resultBreakeven')}>
                            <Info className="w-3 h-3 ml-1" />
                          </Tooltip>
                        </span>
                        <span className="text-gray-900 dark:text-white">{getSymbolMoeda(moedaDestino)} {resultado.breakeven.toFixed(2)}</span>
                        <span className="text-orange-400">{resultado.percentuais.breakeven.toFixed(2)}%</span>
                      </div>
                    </div>

                    {/* Seção VENDAS */}
                    <h4 className="text-white font-bold text-center bg-green-600 text-sm py-2 mt-4 mb-2 rounded">
                      {t('calc.sales')}
                    </h4>
                    
                    <div className="flex justify-between text-sm font-bold text-green-600 dark:text-green-400 mb-2">
                      <span className="flex items-center">
                        {t('calc.units')}:
                        <Tooltip text={t('tooltip.resultUnits')}>
                          <Info className="w-3 h-3 ml-1" />
                        </Tooltip>
                      </span>
                      <span className="flex items-center">
                        {t('calc.profitLabel')}
                        <Tooltip text={t('tooltip.resultProfit')}>
                          <Info className="w-3 h-3 ml-1" />
                        </Tooltip>
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      {resultado.projecoes.map((proj, index) => (
                        <div key={index} className="flex justify-between items-center bg-green-100/10 px-2 py-1 rounded">
                          <span className="text-gray-600 dark:text-gray-300">{t('calc.units')}:</span>
                          <span className="text-gray-900 dark:text-white font-bold">{proj.quantidade}</span>
                          <span className="text-green-600 dark:text-green-400">{getSymbolMoeda(moedaDestino)} {proj.lucro.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Botão Salvar Cálculo - Apenas Premium */}
                {currentLimitations?.hasHistory && (
                  <div className="text-center">
                    <button
                      onClick={salvarCalculo}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      {t('calc.saveCalculation')}
                    </button>
                  </div>
                )}

                {/* Aviso para upgrade se não tem histórico */}
                {!currentLimitations?.hasHistory && (
                  <div className="text-center bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
                      💾 Histórico de cálculos disponível apenas no plano Premium
                    </p>
                    <button
                      onClick={() => navigate('/payment')}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                    >
                      Fazer Upgrade Premium
                    </button>
                  </div>
                )}
              </div>
            ) : loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"></div>
                <p className="text-purple-400 font-medium">
                  {t('calc.loading')}
                </p>
              </div>
            ) : !custoProdutoUSD || !markup ? (
              <div className="text-center py-12">
                <DollarSign className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {t('calc.fillFieldsMessage')}
                </p>
              </div>
            ) : (
              <div className="text-center py-12">
                <DollarSign className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {t('calc.enterValuesMessage')}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DashboardSimples;