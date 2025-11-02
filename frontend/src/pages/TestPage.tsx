import React from 'react';

const TestPage: React.FC = () => {
  const clearAllData = () => {
    localStorage.clear();
    alert('Todos os dados do localStorage foram limpos! Recarregue a página.');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dbeafe 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header com botão de limpeza */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
              🧮 DropCalc
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              Calculadora de Preços para Dropshipping
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a 
              href="/dashboard" 
              style={{
                padding: '8px 16px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              📊 Dashboard
            </a>
            <button 
              onClick={clearAllData}
              style={{
                padding: '8px 16px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              🗑️ Limpar Dados
            </button>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
          gap: '2rem' 
        }}>
          {/* Form */}
          <div style={{ 
            background: 'white', 
            borderRadius: '0.5rem', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem' 
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem' }}>
              Dados do Produto
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>
                  Custo do Fornecedor (USD)
                </label>
                <input
                  type="number"
                  defaultValue="100"
                  style={{ 
                    width: '100%', 
                    padding: '0.5rem 0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>
                  Margem Desejada (%)
                </label>
                <input
                  type="number"
                  defaultValue="30"
                  style={{ 
                    width: '100%', 
                    padding: '0.5rem 0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>
                  Plataforma
                </label>
                <select style={{ 
                  width: '100%', 
                  padding: '0.5rem 0.75rem', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}>
                  <option>Mercado Livre (16%)</option>
                  <option>Amazon Brasil (15%)</option>
                  <option>Nuvemshop (2%)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>
                  Gateway de Pagamento
                </label>
                <select style={{ 
                  width: '100%', 
                  padding: '0.5rem 0.75rem', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}>
                  <option>Mercado Pago (4.99%)</option>
                  <option>PagSeguro (4.99%)</option>
                  <option>PayPal (6.4%)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div style={{ 
            background: 'white', 
            borderRadius: '0.5rem', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem' 
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem' }}>
              ✨ Resultado
            </h2>
            
            {/* Preço de Venda */}
            <div style={{ 
              background: '#f0fdf4', 
              borderRadius: '0.5rem', 
              padding: '1rem', 
              border: '1px solid #bbf7d0',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.875rem', color: '#16a34a', fontWeight: '500', marginBottom: '0.25rem' }}>
                PREÇO DE VENDA
              </p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#15803d' }}>
                R$ 825,00
              </p>
              <p style={{ fontSize: '0.875rem', color: '#16a34a' }}>
                (USD $ 150,00)
              </p>
            </div>

            {/* Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280' }}>Custo em BRL:</span>
                <span style={{ fontWeight: '500' }}>R$ 550,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280' }}>Taxa da Plataforma:</span>
                <span style={{ fontWeight: '500' }}>R$ 132,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280' }}>Taxa do Gateway:</span>
                <span style={{ fontWeight: '500' }}>R$ 41,17</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                background: '#f9fafb', 
                borderRadius: '0.375rem',
                padding: '0.75rem'
              }}>
                <span style={{ color: '#1f2937', fontWeight: '500' }}>Lucro:</span>
                <span style={{ fontWeight: 'bold', color: '#16a34a' }}>
                  R$ 101,83
                </span>
              </div>
            </div>

            {/* Exchange Rate */}
            <div style={{ 
              marginTop: '1rem', 
              padding: '0.75rem', 
              background: '#eff6ff', 
              borderRadius: '0.5rem', 
              border: '1px solid #bfdbfe' 
            }}>
              <p style={{ fontSize: '0.875rem', color: '#2563eb' }}>
                <strong>Taxa de câmbio:</strong> 1 USD = R$ 5,50
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#6b7280' }}>
            💡 DropCalc - Calculadora funcionando! Interface completa em desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;