import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Calculator: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {t('calc.title')}
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('calc.productCost')}
          </label>
          <input 
            type="number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="100.00"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('calc.additionalCosts')}
          </label>
          <input 
            type="number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('calc.profit')}
          </label>
          <input 
            type="number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="30"
          />
        </div>
        
        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          {t('calc.calculate')}
        </button>
      </div>
    </div>
  );
};

export default Calculator;