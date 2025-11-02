import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipo para idiomas suportados
export type Language = 'pt' | 'en' | 'es';

// Interface para contexto de idioma
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Traduções
export const translations = {
  pt: {
    // Navegação
    'nav.dashboard': 'Dashboard',
    'nav.calculator': 'Calculadora',
    'nav.settings': 'Configurações',
    'nav.plans': 'Planos',
    'nav.logout': 'Sair',
    
    // Calculadora
    'calc.title': 'Calculadora de Preços para Dropshipping',
    'calc.loading': 'Carregando dados das APIs...',
    'calc.calculationSaved': 'Cálculo salvo com sucesso!',
    'calc.totalCostConverted': 'Custo Total Convertido',
    'calc.platformTax': 'Taxa da Plataforma',
    'calc.gatewayTax': 'Taxa do Gateway',
    'calc.totalTax': 'Taxa Total',
    'calc.productCost': 'Custo do Produto',
    'calc.additionalCosts': 'Custos Adicionais',
    'calc.profit': 'Margem de Lucro (%)',
    'calc.platform': 'Plataforma',
    'calc.gateway': 'Gateway de Pagamento',
    'calc.calculate': 'Calcular Preço',
    'calc.result': 'Preço Ideal de Venda',
    'calc.details': 'Detalhes do Cálculo',
    'calc.dataProduct': 'Dados do Produto',
    'calc.calculationResult': 'Resultado do Cálculo',
    'calc.suggestedPrice': 'Preço de Venda Sugerido',
    'calc.exchangeRate': 'Taxa de Câmbio',
    'calc.costDetails': 'Detalhamento dos Custos',
    'calc.originCurrency': 'Moeda de Origem',
    'calc.saleCurrency': 'Moeda de Venda',
    'calc.salesPlatform': 'Plataforma de Venda',
    'calc.paymentGateway': 'Gateway de Pagamento',
    'calc.profitMargin': 'Margem de Lucro (%)',
    'calc.clear': 'Limpar',
    'calc.save': 'Salvar Cálculo',
    'calc.netProfit': 'Lucro Líquido',
    'calc.productName': 'Nome do Produto',
    'calc.calculationHistory': 'Histórico de Cálculos',
    'calc.noHistory': 'Nenhum cálculo salvo ainda',
    'calc.savedAt': 'Salvo em',
    'calc.deleteCalculation': 'Excluir',
    'calc.saveCalculation': 'Salvar Cálculo',
    'calc.welcome': 'Bem-vindo',
    'calc.user': 'Usuário',
    'calc.fillFieldsMessage': 'Preencha o custo fornecedor e o markup para ver o cálculo automático',
    'calc.costSupplier': 'custo fornecedor',
    'calc.markup': 'markup',
    'calc.enterValuesMessage': 'Digite os valores para ver o resultado do cálculo',
    'calc.pricing': 'PRECIFICAÇÃO',
    'calc.sellingPrice': 'Preço de venda',
    'calc.supplierCost': 'Custo Fornecedor',
    'calc.markupLabel': 'Markup',
    'calc.taxes': 'TAXAS',
    'calc.importantValues': 'VALORES IMPORTANTES',
    'calc.saleValue': 'Valor de venda',
    'calc.averageCost': 'Custo médio',
    'calc.marketing': 'Marketing',
    'calc.contributionMargin': 'Margem Contrib.',
    'calc.breakeven': 'Breakeven',
    'calc.sales': 'VENDAS',
    'calc.units': 'Unidades',
    'calc.profitLabel': 'LUCRO',
    'calc.extra': 'Extra',
    
    // Tooltips
    'tooltip.productName': 'Nome identificativo do produto para facilitar o histórico de cálculos',
    'tooltip.productCost': 'O custo que você paga para o fornecedor pelo produto',
    'tooltip.originCurrency': 'A moeda em que você paga o fornecedor',
    'tooltip.saleCurrency': 'A moeda em que você vai vender o produto',
    'tooltip.additionalCosts': 'Custos extras como frete, embalagem, impostos de importação',
    'tooltip.profitMargin': 'Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)',
    'tooltip.marketing': 'Percentual do preço de venda destinado a marketing e publicidade',
    'tooltip.extraCost': 'Custos adicionais não cobertos em outras categorias',
    'tooltip.platform': 'Marketplace onde você vai vender (cada um tem taxas diferentes)',
    'tooltip.gateway': 'Processador de pagamento (taxa cobrada por transação)',
    'tooltip.resultSellingPrice': 'Preço final sugerido para vender o produto com lucro',
    'tooltip.resultSupplierCost': 'Valor que você paga ao fornecedor pelo produto',
    'tooltip.resultMarkup': 'Multiplicador aplicado sobre o custo para calcular o preço de venda',
    'tooltip.resultSaleValue': 'Valor total que o cliente paga pelo produto',
    'tooltip.resultAverageCost': 'Custo médio incluindo produto, frete e custos extras',
    'tooltip.resultMarketing': 'Porcentagem do preço destinada para investimento em marketing',
    'tooltip.resultContributionMargin': 'Margem que contribui para cobrir custos fixos e gerar lucro',
    'tooltip.resultBreakeven': 'Ponto de equilíbrio - preço mínimo para não ter prejuízo',
    'tooltip.resultUnits': 'Quantidade de produtos vendidos',
    'tooltip.resultProfit': 'Lucro líquido obtido com a venda',
    
    // Configurações
    'settings.title': 'Configurações',
    'settings.theme': 'Tema do Aplicativo',
    'settings.language': 'Idioma',
    'settings.notifications': 'Notificações',
    'settings.account': 'Conta',
    'settings.logout': 'Sair da Conta',
    'settings.light': 'Claro',
    'settings.dark': 'Escuro',
    
    // Planos
    'plans.title': 'Escolha seu Plano',
    'plans.free': 'Gratuito',
    'plans.gold': 'Gold',
    'plans.premium': 'Premium',
    'plans.month': '/mês',
    'plans.upgrade': 'Fazer Upgrade',
    'plans.current': 'Plano Atual',
    
    // Mensagens
    'msg.languageChanged': 'Idioma alterado com sucesso!',
    'msg.themeChanged': 'Tema alterado com sucesso!',
    'msg.calculationDone': 'Cálculo realizado com sucesso!',
    'msg.error': 'Ocorreu um erro',
    'msg.success': 'Sucesso!',
    
    // Botões
    'btn.save': 'Salvar',
    'btn.cancel': 'Cancelar',
    'btn.back': 'Voltar',
    'btn.continue': 'Continuar',
    'btn.close': 'Fechar',
    
    // Moedas
    'currency.brl': 'Real Brasileiro',
    'currency.usd': 'Dólar Americano',
    'currency.eur': 'Euro',
    'currency.gbp': 'Libra Esterlina',
    'currency.jpy': 'Iene Japonês',
    'currency.cny': 'Yuan Chinês',
  },
  
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.calculator': 'Calculator',
    'nav.settings': 'Settings',
    'nav.plans': 'Plans',
    'nav.logout': 'Logout',
    
    // Calculator
    'calc.title': 'Dropshipping Price Calculator',
    'calc.loading': 'Loading API data...',
    'calc.calculationSaved': 'Calculation saved successfully!',
    'calc.totalCostConverted': 'Total Cost Converted',
    'calc.platformTax': 'Platform Fee',
    'calc.gatewayTax': 'Gateway Fee',
    'calc.totalTax': 'Total Fee',
    'calc.productCost': 'Product Cost',
    'calc.additionalCosts': 'Additional Costs',
    'calc.profit': 'Profit Margin (%)',
    'calc.platform': 'Platform',
    'calc.gateway': 'Payment Gateway',
    'calc.calculate': 'Calculate Price',
    'calc.result': 'Ideal Selling Price',
    'calc.details': 'Calculation Details',
    'calc.dataProduct': 'Product Data',
    'calc.calculationResult': 'Calculation Result',
    'calc.suggestedPrice': 'Suggested Selling Price',
    'calc.exchangeRate': 'Exchange Rate',
    'calc.costDetails': 'Cost Breakdown',
    'calc.originCurrency': 'Origin Currency',
    'calc.saleCurrency': 'Sale Currency',
    'calc.salesPlatform': 'Sales Platform',
    'calc.paymentGateway': 'Payment Gateway',
    'calc.profitMargin': 'Profit Margin (%)',
    'calc.clear': 'Clear',
    'calc.save': 'Save Calculation',
    'calc.netProfit': 'Net Profit',
    'calc.productName': 'Product Name',
    'calc.calculationHistory': 'Calculation History',
    'calc.noHistory': 'No calculations saved yet',
    'calc.savedAt': 'Saved at',
    'calc.deleteCalculation': 'Delete',
    'calc.saveCalculation': 'Save Calculation',
    'calc.welcome': 'Welcome',
    'calc.user': 'User',
    'calc.fillFieldsMessage': 'Fill in the supplier cost and markup to see the automatic calculation',
    'calc.costSupplier': 'supplier cost',
    'calc.markup': 'markup',
    'calc.enterValuesMessage': 'Enter values to see the calculation result',
    'calc.pricing': 'PRICING',
    'calc.sellingPrice': 'Selling price',
    'calc.supplierCost': 'Supplier Cost',
    'calc.markupLabel': 'Markup',
    'calc.taxes': 'TAXES',
    'calc.importantValues': 'IMPORTANT VALUES',
    'calc.saleValue': 'Sale value',
    'calc.averageCost': 'Average cost',
    'calc.marketing': 'Marketing',
    'calc.contributionMargin': 'Contrib. Margin',
    'calc.breakeven': 'Breakeven',
    'calc.sales': 'SALES',
    'calc.units': 'Units',
    'calc.profitLabel': 'PROFIT',
    'calc.extra': 'Extra',
    
    // Tooltips
    'tooltip.productName': 'Identification name for the product to facilitate calculation history',
    'tooltip.productCost': 'The cost you pay to the supplier for the product',
    'tooltip.originCurrency': 'The currency in which you pay the supplier',
    'tooltip.saleCurrency': 'The currency in which you will sell the product',
    'tooltip.additionalCosts': 'Extra costs like shipping, packaging, import taxes',
    'tooltip.profitMargin': 'Multiplier applied to total cost (e.g. 3 = 300% of cost)',
    'tooltip.marketing': 'Percentage of selling price allocated to marketing and advertising',
    'tooltip.extraCost': 'Additional costs not covered in other categories',
    'tooltip.platform': 'Marketplace where you will sell (each has different fees)',
    'tooltip.gateway': 'Payment processor (fee charged per transaction)',
    'tooltip.resultSellingPrice': 'Suggested final price to sell the product with profit',
    'tooltip.resultSupplierCost': 'Amount you pay to the supplier for the product',
    'tooltip.resultMarkup': 'Multiplier applied to cost to calculate selling price',
    'tooltip.resultSaleValue': 'Total amount the customer pays for the product',
    'tooltip.resultAverageCost': 'Average cost including product, shipping and extra costs',
    'tooltip.resultMarketing': 'Percentage of price allocated for marketing investment',
    'tooltip.resultContributionMargin': 'Margin that contributes to cover fixed costs and generate profit',
    'tooltip.resultBreakeven': 'Break-even point - minimum price to avoid loss',
    'tooltip.resultUnits': 'Quantity of products sold',
    'tooltip.resultProfit': 'Net profit obtained from the sale',
    
    // Settings
    'settings.title': 'Settings',
    'settings.theme': 'App Theme',
    'settings.language': 'Language',
    'settings.notifications': 'Notifications',
    'settings.account': 'Account',
    'settings.logout': 'Logout Account',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
    
    // Plans
    'plans.title': 'Choose your Plan',
    'plans.free': 'Free',
    'plans.gold': 'Gold',
    'plans.premium': 'Premium',
    'plans.month': '/month',
    'plans.upgrade': 'Upgrade',
    'plans.current': 'Current Plan',
    
    // Messages
    'msg.languageChanged': 'Language changed successfully!',
    'msg.themeChanged': 'Theme changed successfully!',
    'msg.calculationDone': 'Calculation completed successfully!',
    'msg.error': 'An error occurred',
    'msg.success': 'Success!',
    
    // Buttons
    'btn.save': 'Save',
    'btn.cancel': 'Cancel',
    'btn.back': 'Back',
    'btn.continue': 'Continue',
    'btn.close': 'Close',
    
    // Currencies
    'currency.brl': 'Brazilian Real',
    'currency.usd': 'US Dollar',
    'currency.eur': 'Euro',
    'currency.gbp': 'British Pound',
    'currency.jpy': 'Japanese Yen',
    'currency.cny': 'Chinese Yuan',
  },
  
  es: {
    // Navegación
    'nav.dashboard': 'Panel',
    'nav.calculator': 'Calculadora',
    'nav.settings': 'Configuración',
    'nav.plans': 'Planes',
    'nav.logout': 'Cerrar Sesión',
    
    // Calculadora
    'calc.title': 'Calculadora de Precios para Dropshipping',
    'calc.loading': 'Cargando datos de las APIs...',
    'calc.calculationSaved': '¡Cálculo guardado con éxito!',
    'calc.totalCostConverted': 'Costo Total Convertido',
    'calc.platformTax': 'Tasa de la Plataforma',
    'calc.gatewayTax': 'Tasa del Gateway',
    'calc.totalTax': 'Tasa Total',
    'calc.productCost': 'Costo del Producto',
    'calc.additionalCosts': 'Costos Adicionales',
    'calc.profit': 'Margen de Ganancia (%)',
    'calc.platform': 'Plataforma',
    'calc.gateway': 'Pasarela de Pago',
    'calc.calculate': 'Calcular Precio',
    'calc.result': 'Precio Ideal de Venta',
    'calc.details': 'Detalles del Cálculo',
    'calc.dataProduct': 'Datos del Producto',
    'calc.calculationResult': 'Resultado del Cálculo',
    'calc.suggestedPrice': 'Precio de Venta Sugerido',
    'calc.exchangeRate': 'Tipo de Cambio',
    'calc.costDetails': 'Desglose de Costos',
    'calc.originCurrency': 'Moneda de Origen',
    'calc.saleCurrency': 'Moneda de Venta',
    'calc.salesPlatform': 'Plataforma de Ventas',
    'calc.paymentGateway': 'Pasarela de Pago',
    'calc.profitMargin': 'Margen de Ganancia (%)',
    'calc.clear': 'Limpiar',
    'calc.save': 'Guardar Cálculo',
    'calc.netProfit': 'Ganancia Neta',
    'calc.welcome': 'Bienvenido',
    'calc.user': 'Usuario',
    'calc.fillFieldsMessage': 'Complete el costo del proveedor y el markup para ver el cálculo automático',
    'calc.costSupplier': 'costo del proveedor',
    'calc.markup': 'markup',
    'calc.enterValuesMessage': 'Ingrese valores para ver el resultado del cálculo',
    'calc.pricing': 'PRECIFICACIÓN',
    'calc.sellingPrice': 'Precio de venta',
    'calc.supplierCost': 'Costo Proveedor',
    'calc.markupLabel': 'Markup',
    'calc.taxes': 'TASAS',
    'calc.importantValues': 'VALORES IMPORTANTES',
    'calc.saleValue': 'Valor de venta',
    'calc.averageCost': 'Costo promedio',
    'calc.marketing': 'Marketing',
    'calc.contributionMargin': 'Margen Contrib.',
    'calc.breakeven': 'Punto de equilibrio',
    'calc.sales': 'VENTAS',
    'calc.units': 'Unidades',
    'calc.profitLabel': 'GANANCIA',
    'calc.extra': 'Extra',
    'calc.productName': 'Nombre del Producto',
    'calc.calculationHistory': 'Historial de Cálculos',
    'calc.noHistory': 'Ningún cálculo guardado aún',
    'calc.savedAt': 'Guardado en',
    'calc.deleteCalculation': 'Eliminar',
    'calc.saveCalculation': 'Guardar Cálculo',
    
    // Tooltips
    'tooltip.productName': 'Nombre identificativo del producto para facilitar el historial de cálculos',
    'tooltip.productCost': 'El costo que pagas al proveedor por el producto',
    'tooltip.originCurrency': 'La moneda en que pagas al proveedor',
    'tooltip.saleCurrency': 'La moneda en que vas a vender el producto',
    'tooltip.additionalCosts': 'Costos extras como envío, embalaje, impuestos de importación',
    'tooltip.profitMargin': 'Multiplicador aplicado al costo total (ej: 3 = 300% del costo)',
    'tooltip.marketing': 'Porcentaje del precio de venta destinado a marketing y publicidad',
    'tooltip.extraCost': 'Costos adicionales no cubiertos en otras categorías',
    'tooltip.platform': 'Marketplace donde vas a vender (cada uno tiene tarifas diferentes)',
    'tooltip.gateway': 'Procesador de pagos (tarifa cobrada por transacción)',
    'tooltip.resultSellingPrice': 'Precio final sugerido para vender el producto con ganancia',
    'tooltip.resultSupplierCost': 'Valor que pagas al proveedor por el producto',
    'tooltip.resultMarkup': 'Multiplicador aplicado sobre el costo para calcular precio de venta',
    'tooltip.resultSaleValue': 'Valor total que el cliente paga por el producto',
    'tooltip.resultAverageCost': 'Costo promedio incluyendo producto, envío y costos extras',
    'tooltip.resultMarketing': 'Porcentaje del precio destinado para inversión en marketing',
    'tooltip.resultContributionMargin': 'Margen que contribuye a cubrir costos fijos y generar ganancia',
    'tooltip.resultBreakeven': 'Punto de equilibrio - precio mínimo para no tener pérdidas',
    'tooltip.resultUnits': 'Cantidad de productos vendidos',
    'tooltip.resultProfit': 'Ganancia neta obtenida con la venta',
    
    // Configuración
    'settings.title': 'Configuración',
    'settings.theme': 'Tema de la Aplicación',
    'settings.language': 'Idioma',
    'settings.notifications': 'Notificaciones',
    'settings.account': 'Cuenta',
    'settings.logout': 'Cerrar Cuenta',
    'settings.light': 'Claro',
    'settings.dark': 'Oscuro',
    
    // Planes
    'plans.title': 'Elige tu Plan',
    'plans.free': 'Gratuito',
    'plans.gold': 'Gold',
    'plans.premium': 'Premium',
    'plans.month': '/mes',
    'plans.upgrade': 'Mejorar',
    'plans.current': 'Plan Actual',
    
    // Mensajes
    'msg.languageChanged': '¡Idioma cambiado con éxito!',
    'msg.themeChanged': '¡Tema cambiado con éxito!',
    'msg.calculationDone': '¡Cálculo realizado con éxito!',
    'msg.error': 'Ocurrió un error',
    'msg.success': '¡Éxito!',
    
    // Botones
    'btn.save': 'Guardar',
    'btn.cancel': 'Cancelar',
    'btn.back': 'Volver',
    'btn.continue': 'Continuar',
    'btn.close': 'Cerrar',
    
    // Monedas
    'currency.brl': 'Real Brasileño',
    'currency.usd': 'Dólar Estadounidense',
    'currency.eur': 'Euro',
    'currency.gbp': 'Libra Esterlina',
    'currency.jpy': 'Yen Japonés',
    'currency.cny': 'Yuan Chino',
  }
};

// Criar contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider do contexto
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  // Carregar idioma do localStorage na inicialização
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Função para alterar idioma
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Função de tradução
  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations['pt']];
    return translation || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar o contexto de idioma
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};