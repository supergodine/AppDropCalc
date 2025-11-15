import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Calculator, DollarSign, TrendingUp, Settings, HelpCircle, Crown, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE = 'https://appdropcalc-production.up.railway.app';

interface CalculationResult {
  precoVenda: number;
  detalhes: {
    custoProduto: number;
    custosAdicionais: number;
    taxaCambio: number;
    custoConvertido: number;
    taxaPlataforma: number;
    taxaGateway: number;
    taxaTotal: number;
    margemLucro: number;
    valorMargemBRL: number;
  };
}

const DashboardCalculadora: React.FC = () => {
  const { user, plan, checkPlanAccess } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  
  // Log para debug
  console.log('=== DashboardCalculadora INICIANDO ===');
  console.log('User:', user);
  console.log('User autenticado:', !!user);
  console.log('Plan:', plan);
  console.log('localStorage userPlan:', localStorage.getItem('userPlan'));
  console.log('localStorage premiumActive:', localStorage.getItem('premiumActive'));
  
  // Restaurar bloqueio de usuário não autenticado
  if (!user) {
    console.log('Usuário não autenticado, redirecionando para login');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1>Carregando usuário...</h1>
          <p>Redirecionando...</p>
        </div>
      </div>
    );
  }
  
  const [formData, setFormData] = useState({
    custoProduto: 100,
    custosAdicionais: 0,
    moedaOrigem: 'USD',
    moedaVenda: 'BRL',
    plataforma: 'mercado-livre',
    gateway: 'mercado-pago',
    margemLucro: 30
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Check if user has premium access
  const hasPremiumAccess = () => {
    return localStorage.getItem('premiumActive') === 'true';
  };

  // Verificar se é plano básico
  const isBasicPlan = () => {
    return plan?.type === 'basic' || !checkPlanAccess('professional');
  };

  // Buscar taxa de câmbio
  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`${API_BASE}/exchange/rate/${formData.moedaOrigem}/${formData.moedaVenda}`);
      const data = await response.json();
      setExchangeRate(data.rate);
    } catch (error) {
      console.error('Erro ao buscar taxa de câmbio:', error);
      setExchangeRate(5.50); // Valor padrão USD->BRL
    }
  };

  // Calcular preço (manual para plano básico, automático para outros)
  const calculatePrice = useCallback(async () => {
    setIsCalculating(true);
    try {
      const response = await fetch(`${API_BASE}/calc/calcular`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro no cálculo');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Erro no cálculo:', error);
      // Cálculo manual como fallback
      const custoTotal = formData.custoProduto + formData.custosAdicionais;
      const custoConvertido = custoTotal * exchangeRate;
      const taxaPlataforma = custoConvertido * 0.05; // 5% padrão
      const taxaGateway = custoConvertido * 0.035; // 3.5% padrão
      const custoFinal = custoConvertido + taxaPlataforma + taxaGateway;
      const margemValor = custoFinal * (formData.margemLucro / 100);
      const precoVenda = custoFinal + margemValor;

      setResult({
        precoVenda,
        detalhes: {
          custoProduto: formData.custoProduto,
          custosAdicionais: formData.custosAdicionais,
          taxaCambio: exchangeRate,
          custoConvertido,
          taxaPlataforma,
          taxaGateway,
          taxaTotal: taxaPlataforma + taxaGateway,
          margemLucro: formData.margemLucro,
          valorMargemBRL: margemValor
        }
      });
    } finally {
      setIsCalculating(false);
    }
  }, [formData, exchangeRate]);

  // Limpar formulário
  const clearForm = () => {
    setFormData({
      custoProduto: 0,
      custosAdicionais: 0,
      moedaOrigem: 'USD',
      moedaVenda: 'BRL',
      plataforma: 'mercado-livre',
      gateway: 'mercado-pago',
      margemLucro: 30
    });
    setResult(null);
  };

  // Buscar taxa quando mudar moedas ou recalcular automaticamente
  useEffect(() => {
    if (formData.moedaOrigem && formData.moedaVenda) {
      fetchExchangeRate();
    }
  }, [formData.moedaOrigem, formData.moedaVenda]);

  // Calcular automaticamente quando qualquer campo mudar (APENAS para planos premium/professional)
  // Para plano básico, limpar resultado quando campos mudarem
  useEffect(() => {
    if (isBasicPlan()) {
      // Para plano básico, limpar resultado quando campos mudarem (exceto na primeira carga)
      if (result !== null) {
        setResult(null);
      }
    } else {
      // Para planos premium/professional, calcular automaticamente
      if (exchangeRate > 0 && formData.custoProduto > 0) {
        calculatePrice();
      }
    }
  }, [formData, exchangeRate, plan, calculatePrice, result, isBasicPlan]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Corrigir erro de plano básico: garantir que userPlan nunca seja null
  const planoAtivo = plan?.type || 'basic';
  const descricaoPlano = planoAtivo === 'basic'
    ? 'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado'
    : 'Cálculo automático ativado - O preço é atualizado em tempo real';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900`}>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-b border-white/20 dark:border-gray-700/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">DropCalc</h1>
                {hasPremiumAccess() && (
                  <div className="flex items-center gap-1">
                    <Crown className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-yellow-600 font-medium">Premium</span>
                  </div>
                )}
              </div>
            </div>

            {/* User menu */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 dark:text-gray-200 font-medium hidden sm:block">
                Olá, {user?.name || 'Usuário'}!
              </span>
              
              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/help')}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Ajuda"
                >
                  <HelpCircle className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/settings')}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Configurações"
                >
                  <Settings className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors sm:hidden"
                  title="Menu"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-gray-200 bg-white sm:hidden"
            >
              <div className="px-4 py-3 space-y-2">
                <button
                  onClick={() => {
                    navigate('/help');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                  Ajuda
                </button>
                <button
                  onClick={() => {
                    navigate('/settings');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  Configurações
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Cálculo */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <Settings className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Parâmetros do Produto
              </h2>
            </div>

            <div className="space-y-6">
              {/* Custo do Produto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Custo do Produto
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="number"
                    value={formData.custoProduto}
                    onChange={(e) => handleInputChange('custoProduto', parseFloat(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100.00"
                  />
                </div>
              </div>

              {/* Custos Adicionais */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Custos Adicionais (Frete, Impostos, etc.)
                </label>
                <input
                  type="number"
                  value={formData.custosAdicionais}
                  onChange={(e) => handleInputChange('custosAdicionais', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="0.00"
                />
              </div>

              {/* Moedas */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Moeda Origem
                  </label>
                  <select
                    value={formData.moedaOrigem}
                    onChange={(e) => handleInputChange('moedaOrigem', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <optgroup label=" Principais">
                      <option value="USD">USD - Dólar Americano</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="BRL">BRL - Real Brasileiro</option>
                      <option value="CNY">CNY - Yuan Chinês</option>
                      <option value="GBP">GBP - Libra Esterlina</option>
                      <option value="JPY">JPY - Iene Japonês</option>
                    </optgroup>
                    <optgroup label="🇺🇸 América do Norte">
                      <option value="CAD">CAD - Dólar Canadense</option>
                      <option value="MXN">MXN - Peso Mexicano</option>
                    </optgroup>
                    <optgroup label="🇧🇷 América do Sul">
                      <option value="ARS">ARS - Peso Argentino</option>
                      <option value="CLP">CLP - Peso Chileno</option>
                      <option value="COP">COP - Peso Colombiano</option>
                      <option value="UYU">UYU - Peso Uruguaio</option>
                      <option value="PEN">PEN - Sol Peruano</option>
                      <option value="BOB">BOB - Boliviano</option>
                      <option value="PYG">PYG - Guarani Paraguaio</option>
                      <option value="VES">VES - Bolívar Venezuelano</option>
                    </optgroup>
                    <optgroup label="🇪🇺 Europa">
                      <option value="CHF">CHF - Franco Suíço</option>
                      <option value="NOK">NOK - Coroa Norueguesa</option>
                      <option value="SEK">SEK - Coroa Sueca</option>
                      <option value="DKK">DKK - Coroa Dinamarquesa</option>
                      <option value="PLN">PLN - Zloty Polonês</option>
                      <option value="CZK">CZK - Coroa Tcheca</option>
                      <option value="HUF">HUF - Forint Húngaro</option>
                      <option value="RON">RON - Leu Romeno</option>
                      <option value="BGN">BGN - Lev Búlgaro</option>
                      <option value="HRK">HRK - Kuna Croata</option>
                      <option value="RUB">RUB - Rublo Russo</option>
                      <option value="UAH">UAH - Hryvnia Ucraniana</option>
                      <option value="TRY">TRY - Lira Turca</option>
                    </optgroup>
                    <optgroup label=" Ásia-Pacífico">
                      <option value="AUD">AUD - Dólar Australiano</option>
                      <option value="NZD">NZD - Dólar Neozelandês</option>
                      <option value="KRW">KRW - Won Sul-coreano</option>
                      <option value="SGD">SGD - Dólar de Singapura</option>
                      <option value="HKD">HKD - Dólar de Hong Kong</option>
                      <option value="THB">THB - Baht Tailandês</option>
                      <option value="MYR">MYR - Ringgit Malaio</option>
                      <option value="PHP">PHP - Peso Filipino</option>
                      <option value="IDR">IDR - Rupia Indonésia</option>
                      <option value="VND">VND - Dong Vietnamita</option>
                      <option value="INR">INR - Rupia Indiana</option>
                      <option value="PKR">PKR - Rupia Paquistanesa</option>
                      <option value="BDT">BDT - Taka de Bangladesh</option>
                      <option value="LKR">LKR - Rupia do Sri Lanka</option>
                      <option value="NPR">NPR - Rupia Nepalesa</option>
                      <option value="MMK">MMK - Kyat de Mianmar</option>
                      <option value="KHR">KHR - Riel Cambojano</option>
                      <option value="LAK">LAK - Kip Laosiano</option>
                      <option value="BND">BND - Dólar de Brunei</option>
                    </optgroup>
                    <optgroup label=" Oriente Médio & África">
                      <option value="SAR">SAR - Riyal Saudita</option>
                      <option value="AED">AED - Dirham dos Emirados</option>
                      <option value="QAR">QAR - Riyal do Qatar</option>
                      <option value="KWD">KWD - Dinar do Kuwait</option>
                      <option value="BHD">BHD - Dinar do Bahrein</option>
                      <option value="OMR">OMR - Rial Omanense</option>
                      <option value="JOD">JOD - Dinar Jordaniano</option>
                      <option value="LBP">LBP - Libra Libanesa</option>
                      <option value="ILS">ILS - Shekel Israelense</option>
                      <option value="EGP">EGP - Libra Egípcia</option>
                      <option value="ZAR">ZAR - Rand Sul-africano</option>
                      <option value="NGN">NGN - Naira Nigeriana</option>
                      <option value="KES">KES - Xelim Queniano</option>
                      <option value="UGX">UGX - Xelim Ugandense</option>
                      <option value="TZS">TZS - Xelim Tanzaniano</option>
                      <option value="GHS">GHS - Cedi Ganês</option>
                      <option value="MAD">MAD - Dirham Marroquino</option>
                      <option value="TND">TND - Dinar Tunisiano</option>
                      <option value="DZD">DZD - Dinar Argelino</option>
                      <option value="LYD">LYD - Dinar Líbio</option>
                      <option value="SDG">SDG - Libra Sudanesa</option>
                      <option value="ETB">ETB - Birr Etíope</option>
                      <option value="XOF">XOF - Franco CFA Oeste Africano</option>
                      <option value="XAF">XAF - Franco CFA Centro Africano</option>
                    </optgroup>
                    <optgroup label=" Criptomoedas">
                      <option value="BTC">BTC - Bitcoin</option>
                      <option value="ETH">ETH - Ethereum</option>
                      <option value="USDT">USDT - Tether</option>
                      <option value="BNB">BNB - Binance Coin</option>
                      <option value="ADA">ADA - Cardano</option>
                      <option value="DOGE">DOGE - Dogecoin</option>
                      <option value="XRP">XRP - Ripple</option>
                      <option value="LTC">LTC - Litecoin</option>
                      <option value="BCH">BCH - Bitcoin Cash</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Moeda Venda
                  </label>
                  <select
                    value={formData.moedaVenda}
                    onChange={(e) => handleInputChange('moedaVenda', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <optgroup label=" Principais">
                      <option value="BRL">BRL - Real Brasileiro</option>
                      <option value="USD">USD - Dólar Americano</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="CNY">CNY - Yuan Chinês</option>
                      <option value="GBP">GBP - Libra Esterlina</option>
                      <option value="JPY">JPY - Iene Japonês</option>
                    </optgroup>
                    <optgroup label="🇺🇸 América do Norte">
                      <option value="CAD">CAD - Dólar Canadense</option>
                      <option value="MXN">MXN - Peso Mexicano</option>
                    </optgroup>
                    <optgroup label="🇧🇷 América do Sul">
                      <option value="ARS">ARS - Peso Argentino</option>
                      <option value="CLP">CLP - Peso Chileno</option>
                      <option value="COP">COP - Peso Colombiano</option>
                      <option value="UYU">UYU - Peso Uruguaio</option>
                      <option value="PEN">PEN - Sol Peruano</option>
                      <option value="BOB">BOB - Boliviano</option>
                      <option value="PYG">PYG - Guarani Paraguaio</option>
                      <option value="VES">VES - Bolívar Venezuelano</option>
                    </optgroup>
                    <optgroup label="🇪🇺 Europa">
                      <option value="CHF">CHF - Franco Suíço</option>
                      <option value="NOK">NOK - Coroa Norueguesa</option>
                      <option value="SEK">SEK - Coroa Sueca</option>
                      <option value="DKK">DKK - Coroa Dinamarquesa</option>
                      <option value="PLN">PLN - Zloty Polonês</option>
                      <option value="CZK">CZK - Coroa Tcheca</option>
                      <option value="HUF">HUF - Forint Húngaro</option>
                      <option value="RON">RON - Leu Romeno</option>
                      <option value="BGN">BGN - Lev Búlgaro</option>
                      <option value="HRK">HRK - Kuna Croata</option>
                      <option value="RUB">RUB - Rublo Russo</option>
                      <option value="UAH">UAH - Hryvnia Ucraniana</option>
                      <option value="TRY">TRY - Lira Turca</option>
                    </optgroup>
                    <optgroup label=" Ásia-Pacífico">
                      <option value="AUD">AUD - Dólar Australiano</option>
                      <option value="NZD">NZD - Dólar Neozelandês</option>
                      <option value="KRW">KRW - Won Sul-coreano</option>
                      <option value="SGD">SGD - Dólar de Singapura</option>
                      <option value="HKD">HKD - Dólar de Hong Kong</option>
                      <option value="THB">THB - Baht Tailandês</option>
                      <option value="MYR">MYR - Ringgit Malaio</option>
                      <option value="PHP">PHP - Peso Filipino</option>
                      <option value="IDR">IDR - Rupia Indonésia</option>
                      <option value="VND">VND - Dong Vietnamita</option>
                      <option value="INR">INR - Rupia Indiana</option>
                      <option value="PKR">PKR - Rupia Paquistanesa</option>
                      <option value="BDT">BDT - Taka de Bangladesh</option>
                      <option value="LKR">LKR - Rupia do Sri Lanka</option>
                      <option value="NPR">NPR - Rupia Nepalesa</option>
                      <option value="MMK">MMK - Kyat de Mianmar</option>
                      <option value="KHR">KHR - Riel Cambojano</option>
                      <option value="LAK">LAK - Kip Laosiano</option>
                      <option value="BND">BND - Dólar de Brunei</option>
                    </optgroup>
                    <optgroup label=" Oriente Médio & África">
                      <option value="SAR">SAR - Riyal Saudita</option>
                      <option value="AED">AED - Dirham dos Emirados</option>
                      <option value="QAR">QAR - Riyal do Qatar</option>
                      <option value="KWD">KWD - Dinar do Kuwait</option>
                      <option value="BHD">BHD - Dinar do Bahrein</option>
                      <option value="OMR">OMR - Rial Omanense</option>
                      <option value="JOD">JOD - Dinar Jordaniano</option>
                      <option value="LBP">LBP - Libra Libanesa</option>
                      <option value="ILS">ILS - Shekel Israelense</option>
                      <option value="EGP">EGP - Libra Egípcia</option>
                      <option value="ZAR">ZAR - Rand Sul-africano</option>
                      <option value="NGN">NGN - Naira Nigeriana</option>
                      <option value="KES">KES - Xelim Queniano</option>
                      <option value="UGX">UGX - Xelim Ugandense</option>
                      <option value="TZS">TZS - Xelim Tanzaniano</option>
                      <option value="GHS">GHS - Cedi Ganês</option>
                      <option value="MAD">MAD - Dirham Marroquino</option>
                      <option value="TND">TND - Dinar Tunisiano</option>
                      <option value="DZD">DZD - Dinar Argelino</option>
                      <option value="LYD">LYD - Dinar Líbio</option>
                      <option value="SDG">SDG - Libra Sudanesa</option>
                      <option value="ETB">ETB - Birr Etíope</option>
                      <option value="XOF">XOF - Franco CFA Oeste Africano</option>
                      <option value="XAF">XAF - Franco CFA Centro Africano</option>
                    </optgroup>
                    <optgroup label=" Criptomoedas">
                      <option value="BTC">BTC - Bitcoin</option>
                      <option value="ETH">ETH - Ethereum</option>
                      <option value="USDT">USDT - Tether</option>
                      <option value="BNB">BNB - Binance Coin</option>
                      <option value="ADA">ADA - Cardano</option>
                      <option value="DOGE">DOGE - Dogecoin</option>
                      <option value="XRP">XRP - Ripple</option>
                      <option value="LTC">LTC - Litecoin</option>
                      <option value="BCH">BCH - Bitcoin Cash</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Plataforma */}
              <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Plataforma de Venda
                </label>
                <select
                  value={formData.plataforma}
                  onChange={(e) => handleInputChange('plataforma', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <optgroup label="Marketplaces Nacionais">
                    <option value="mercado-livre">Mercado Livre</option>
                    <option value="amazon-br">Amazon Brasil</option>
                    <option value="shopee">Shopee</option>
                    <option value="magazineluiza">Magazine Luiza</option>
                    <option value="americanas">Americanas</option>
                    <option value="casas-bahia">Casas Bahia</option>
                    <option value="via-varejo">Via Varejo</option>
                  </optgroup>
                  <optgroup label="E-commerce Próprio">
                    <option value="shopify">Shopify</option>
                    <option value="nuvemshop">Nuvemshop</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="opencart">OpenCart</option>
                    <option value="prestashop">PrestaShop</option>
                    <option value="tray">Tray Commerce</option>
                    <option value="vtex">VTEX</option>
                  </optgroup>
                  <optgroup label="Marketplaces Internacionais">
                    <option value="amazon-us">Amazon US</option>
                    <option value="ebay">eBay</option>
                    <option value="etsy">Etsy</option>
                    <option value="aliexpress">AliExpress</option>
                  </optgroup>
                  <optgroup label="Redes Sociais">
                    <option value="facebook-shop">Facebook Shop</option>
                    <option value="instagram-shop">Instagram Shopping</option>
                    <option value="whatsapp-business">WhatsApp Business</option>
                  </optgroup>
                </select>
              </div>

              {/* Gateway */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gateway de Pagamento
                </label>
                <select
                  value={formData.gateway}
                  onChange={(e) => handleInputChange('gateway', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <optgroup label="Gateways Nacionais">
                    <option value="mercado-pago">Mercado Pago</option>
                    <option value="pagseguro">PagSeguro</option>
                    <option value="cielo">Cielo</option>
                    <option value="rede">Rede</option>
                    <option value="getnet">Getnet</option>
                    <option value="stone">Stone</option>
                    <option value="pagar-me">Pagar.me</option>
                    <option value="wirecard">Wirecard</option>
                    <option value="asaas">Asaas</option>
                    <option value="ebanx">EBANX</option>
                  </optgroup>
                  <optgroup label="Gateways Internacionais">
                    <option value="paypal">PayPal</option>
                    <option value="stripe">Stripe</option>
                    <option value="square">Square</option>
                    <option value="braintree">Braintree</option>
                    <option value="adyen">Adyen</option>
                    <option value="checkout">Checkout.com</option>
                  </optgroup>
                  <optgroup label="Pagamento Digital">
                    <option value="pix">PIX</option>
                    <option value="picpay">PicPay</option>
                    <option value="payoneer">Payoneer</option>
                    <option value="skrill">Skrill</option>
                  </optgroup>
                </select>
              </div>

              {/* Margem de Lucro */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Margem de Lucro (%)
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="number"
                    value={formData.margemLucro}
                    onChange={(e) => handleInputChange('margemLucro', parseFloat(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30"
                  />
                </div>
              </div>

              {/* Taxa de Câmbio */}
              {exchangeRate > 0 && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-600">
                    Taxa de câmbio atual: {formData.moedaOrigem} → {formData.moedaVenda} = {exchangeRate.toFixed(4)}
                  </p>
                </div>
              )}

              {/* Botão Calcular - APENAS para plano básico */}
              {isBasicPlan() && (
                <button
                  onClick={calculatePrice}
                  disabled={isCalculating || formData.custoProduto <= 0 || exchangeRate <= 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  {isCalculating ? 'Calculando...' : 'Calcular Preço'}
                </button>
              )}

              {/* Botão Limpar */}
              <button
                onClick={clearForm}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Settings className="h-5 w-5 mr-2" />
                Limpar Formulário
              </button>

              {/* Indicador de Cálculo Automático ou Manual */}
              <div className={`p-4 rounded-lg ${isBasicPlan() ? 'bg-orange-50' : 'bg-green-50'}`}>
                <p className={`text-sm flex items-center ${isBasicPlan() ? 'text-orange-600' : 'text-green-600'}`}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {descricaoPlano}
                </p>
              </div>
            </div>
          </div>

          {/* Resultado */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <DollarSign className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Resultado do Cálculo
              </h2>
            </div>

            {result ? (
              <div className="space-y-6">
                {/* Preço Final */}
                <div className="text-center bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                    Preço de Venda Sugerido
                  </h3>
                  <p className="text-4xl font-bold text-green-700 dark:text-green-300">
                    {formData.moedaVenda} {result.precoVenda.toFixed(2)}
                  </p>
                </div>

                {/* Detalhes */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Detalhamento:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Custo do Produto:</span>
                      <span className="font-medium">{formData.moedaOrigem} {result.detalhes.custoProduto.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Custos Adicionais:</span>
                      <span className="font-medium">{formData.moedaOrigem} {result.detalhes.custosAdicionais.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Taxa de Câmbio:</span>
                      <span className="font-medium">{result.detalhes.taxaCambio.toFixed(4)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Custo Convertido:</span>
                      <span className="font-medium">{formData.moedaVenda} {result.detalhes.custoConvertido.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Taxa da Plataforma:</span>
                      <span className="font-medium">{formData.moedaVenda} {result.detalhes.taxaPlataforma.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Taxa do Gateway:</span>
                      <span className="font-medium">{formData.moedaVenda} {result.detalhes.taxaGateway.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-gray-600 dark:text-gray-300">Total de Taxas:</span>
                      <span className="font-medium">{formData.moedaVenda} {result.detalhes.taxaTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Margem de Lucro ({formData.margemLucro}%):</span>
                      <span className="font-medium text-green-600 dark:text-green-400">{formData.moedaVenda} {result.detalhes.valorMargemBRL.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Preencha os dados e clique em "Calcular Preço" para ver o resultado</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCalculadora;