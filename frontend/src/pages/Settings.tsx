import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  Moon, 
  Sun, 
  Globe, 
  Crown, 
  LogOut, 
  User, 
  Bell,
  Shield,
  ArrowLeft,
  Check,
  Trash2,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '../contexts/LanguageContext';

// Interface para histórico de cálculos
interface HistoricoCalculo {
  id: string;
  nomeProduto: string;
  precoVenda: number;
  moedaDestino: string;
  plataforma: string;
  gateway: string;
  dataCalculo: string;
  detalhes: any;
}

// Componente para exibir histórico de cálculos
const CalculationHistory: React.FC = () => {
  const { t } = useLanguage();
  const [historico, setHistorico] = useState<HistoricoCalculo[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('calculadora-historico');
      if (saved) {
        setHistorico(JSON.parse(saved));
      }
    } catch {
      setHistorico([]);
    }
  }, []);

  const excluirCalculo = (id: string) => {
    const novoHistorico = historico.filter(calc => calc.id !== id);
    setHistorico(novoHistorico);
    localStorage.setItem('calculadora-historico', JSON.stringify(novoHistorico));
    toast.success('Cálculo excluído');
  };

  const getSymbolMoeda = (codigo: string) => {
    const simbolos: { [key: string]: string } = {
      'USD': '$', 'EUR': '€', 'GBP': '£', 'BRL': 'R$', 'JPY': '¥', 'CNY': '¥',
      'CAD': 'C$', 'AUD': 'A$', 'CHF': 'CHF', 'SEK': 'kr', 'NOK': 'kr',
      'MXN': '$', 'ARS': '$', 'CLP': '$', 'COP': '$', 'PEN': 'S/', 
      'INR': '₹', 'KRW': '₩', 'THB': '฿', 'SGD': 'S$', 'HKD': 'HK$'
    };
    return simbolos[codigo] || codigo;
  };

  if (historico.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p>{t('calc.noHistory')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {historico.map((calculo) => (
        <motion.div
          key={calculo.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 mb-1">
                {calculo.nomeProduto}
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">Preço:</span> {getSymbolMoeda(calculo.moedaDestino)} {calculo.precoVenda.toFixed(2)}
                </p>
                <p>
                  <span className="font-medium">Plataforma:</span> {calculo.plataforma} | <span className="font-medium">Gateway:</span> {calculo.gateway}
                </p>
                <p className="text-xs text-gray-500">
                  {t('calc.savedAt')}: {calculo.dataCalculo}
                </p>
              </div>
            </div>
            <button
              onClick={() => excluirCalculo(calculo.id)}
              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
              title={t('calc.deleteCalculation')}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

interface SettingsState {
  language: 'pt' | 'en' | 'es';
  notifications: boolean;
  isPremium: boolean;
}

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  // Simulação de dados do usuário via localStorage
  const [user, setUser] = useState<any>(null);
  const [userPlan, setUserPlan] = useState<'basic' | 'gold' | 'premium'>('basic');
  const [settings, setSettings] = useState<SettingsState>({
    language: 'pt',
    notifications: true,
    isPremium: false
  });

  useEffect(() => {
    // Carregar dados do usuário
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Carregar plano do usuário
    const planData = localStorage.getItem('userPlan');
    if (planData) {
      try {
        const parsed = JSON.parse(planData);
        if (parsed && typeof parsed === 'object' && parsed.type) {
          setUserPlan(parsed.type);
        }
      } catch {
        setUserPlan('basic');
      }
    } else {
      setUserPlan('basic');
    }

    // Carregar configurações do localStorage
    const savedLanguage = language; // Usar idioma do contexto
    const savedNotifications = localStorage.getItem('notifications') === 'true';
    setSettings({
      language: savedLanguage,
      notifications: savedNotifications,
      isPremium: userPlan === 'premium'
    });
  }, [language]);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    toast.success(`Tema ${newTheme === 'dark' ? 'escuro' : 'claro'} ativado!`);
  };

  const handleLanguageChange = (newLanguage: 'pt' | 'en' | 'es') => {
    setSettings(prev => ({ ...prev, language: newLanguage }));
    setLanguage(newLanguage); // Atualizar contexto de idioma
    
    toast.success(t('msg.languageChanged'));
  };

  const handleNotificationsToggle = () => {
    const newValue = !settings.notifications;
    setSettings(prev => ({ ...prev, notifications: newValue }));
    localStorage.setItem('notifications', newValue.toString());
    
    toast.success(`Notificações ${newValue ? 'ativadas' : 'desativadas'}!`);
  };

  const handleLogout = async () => {
    try {
      // Limpar dados do localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      localStorage.removeItem('premiumActive');
      localStorage.removeItem('userPlan');
      localStorage.removeItem('billingStatus');
      
      toast.success('Logout realizado com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('Erro ao fazer logout');
    }
  };

  const languageOptions = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="flex items-center gap-3">
            <SettingsIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t('settings.title')}
          </h1>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* User Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{user?.name || 'Usuário'}</h3>
                <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {userPlan === 'premium' ? (
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Crown className="w-4 h-4" />
                  Premium Ativo
                </div>
              ) : userPlan === 'gold' ? (
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  <Crown className="w-4 h-4" />
                  Gold Ativo
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  <User className="w-4 h-4" />
                  Plano Básico
                </div>
              )}
            </div>
          </motion.div>

          {/* Theme Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              {t('settings.theme')}
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleThemeChange('light')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  theme === 'light'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <Sun className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <p className="font-medium text-gray-800 dark:text-white">{t('settings.light')}</p>
                {theme === 'light' && (
                  <Check className="w-4 h-4 text-blue-500 mx-auto mt-1" />
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleThemeChange('dark')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  theme === 'dark'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <Moon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="font-medium text-gray-800 dark:text-white">{t('settings.dark')}</p>
                {theme === 'dark' && (
                  <Check className="w-4 h-4 text-blue-500 mx-auto mt-1" />
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Language Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              {t('settings.language')}
            </h3>
            
            <div className="space-y-2">
              {languageOptions.map((lang) => (
                <motion.button
                  key={lang.code}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleLanguageChange(lang.code as 'pt' | 'en' | 'es')}
                  className={`w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    settings.language === lang.code
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium text-gray-800">{lang.name}</span>
                  {settings.language === lang.code && (
                    <Check className="w-4 h-4 text-blue-500 ml-auto" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{t('settings.notifications')}</h3>
                  <p className="text-gray-600 text-sm">Receber alertas e atualizações</p>
                </div>
              </div>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleNotificationsToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.notifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <motion.span
                  animate={{ x: settings.notifications ? 20 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Premium Status */}
          {!settings.isPremium && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Upgrade para Premium</h3>
              </div>
              <p className="mb-4 opacity-90">
                Desbloqueie todos os recursos da calculadora e tenha acesso completo às funcionalidades avançadas.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/payment')}
                className="bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Ativar Premium
              </motion.button>
            </motion.div>
          )}

          {/* Histórico de Cálculos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <SettingsIcon className="w-5 h-5" />
              {t('calc.calculationHistory')}
            </h3>
            
            <CalculationHistory />
          </motion.div>

          {/* Security & Logout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Segurança
            </h3>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="w-full p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <LogOut className="w-5 h-5" />
              {t('settings.logout')}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;