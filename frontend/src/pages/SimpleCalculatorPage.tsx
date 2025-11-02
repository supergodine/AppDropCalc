import React, { useState } from 'react';

const SimpleCalculatorPage: React.FC = () => {
  const [supplierCost, setSupplierCost] = useState<number>(100);
  const [margin, setMargin] = useState<number>(30);
  const [platformFee, setPlatformFee] = useState<number>(16);
  const [gatewayFee, setGatewayFee] = useState<number>(4.99);

  // Cálculo simples
  const totalTaxes = (platformFee + gatewayFee) / 100;
  const salePrice = supplierCost / (1 - (totalTaxes + margin / 100));
  const profit = salePrice - supplierCost - (salePrice * totalTaxes);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🧮 DropCalc
          </h1>
          <p className="text-lg text-gray-600">
            Calculadora de Preços para Dropshipping
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Dados do Produto
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Custo do Fornecedor (USD)
                </label>
                <input
                  type="number"
                  value={supplierCost}
                  onChange={(e) => setSupplierCost(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Margem Desejada (%)
                </label>
                <input
                  type="number"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  min="0"
                  max="99"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Taxa da Plataforma (%)
                </label>
                <select
                  value={platformFee}
                  onChange={(e) => setPlatformFee(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="16">Mercado Livre (16%)</option>
                  <option value="15">Amazon Brasil (15%)</option>
                  <option value="2">Nuvemshop (2%)</option>
                  <option value="10">Shopee (10%)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Taxa do Gateway (%)
                </label>
                <select
                  value={gatewayFee}
                  onChange={(e) => setGatewayFee(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="4.99">Mercado Pago (4.99%)</option>
                  <option value="4.99">PagSeguro (4.99%)</option>
                  <option value="6.4">PayPal (6.4%)</option>
                  <option value="3.4">Stripe (3.4%)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              ✨ Resultado
            </h2>
            
            {/* Preço de Venda */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-6">
              <div className="text-center">
                <p className="text-sm text-green-600 font-medium">PREÇO DE VENDA</p>
                <p className="text-3xl font-bold text-green-700">
                  R$ {(salePrice * 5.5).toFixed(2)}
                </p>
                <p className="text-sm text-green-600">
                  (USD $ {salePrice.toFixed(2)})
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Custo em BRL:</span>
                <span className="font-medium">R$ {(supplierCost * 5.5).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Taxa da Plataforma:</span>
                <span className="font-medium">R$ {(salePrice * 5.5 * platformFee / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Taxa do Gateway:</span>
                <span className="font-medium">R$ {(salePrice * 5.5 * gatewayFee / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-gray-50 rounded px-3">
                <span className="text-gray-900 font-medium">Lucro:</span>
                <span className="font-bold text-green-600">
                  R$ {(profit * 5.5).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Exchange Rate */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600">
                <strong>Taxa de câmbio:</strong> 1 USD = R$ 5.50 (simulado)
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            💡 Esta é uma versão demonstrativa. Interface completa em desenvolvimento!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculatorPage;