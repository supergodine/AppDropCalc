import React, { useState, useEffect } from 'react';
import { API_CONFIG } from './config/api';

interface Platform {
  nome: string;
  taxa: number;
}

interface Gateway {
  nome: string;
  taxa: number;
}

function App() {
  const API_BASE = API_CONFIG.getBaseURL();
  // Log de ambiente e branch
  console.log('🔎 Ambiente VITE:', {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_BRANCH: import.meta.env.VITE_BRANCH,
    NODE_ENV: import.meta.env.MODE,
    location: window.location.href
  });
  // Log do commit (se disponível)
  if (import.meta.env.VITE_COMMIT) {
    console.log('🔎 Commit atual:', import.meta.env.VITE_COMMIT);
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

  const [result, setResult] = useState({
    precoVenda: 0,
    detalhes: {
      custoProduto: 0,
      custosAdicionais: 0,
      taxaCambio: 0,
      custoConvertido: 0,
      taxaPlataforma: 0,
      taxaGateway: 0,
      taxaTotal: 0,
      margemLucro: 0,
      valorMargemBRL: 0
    }
  });

  const [currencies, setCurrencies] = useState<Record<string, string>>({});
  const [platforms, setPlatforms] = useState<Record<string, Platform>>({});
  const [gateways, setGateways] = useState<Record<string, Gateway>>({});
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);

  // Carregar dados das APIs ao inicializar
  useEffect(() => {
    loadData();
  }, []);

  // Atualizar taxa de câmbio quando mudar moedas
  useEffect(() => {
    if (formData.moedaOrigem && formData.moedaVenda) {
      fetchExchangeRate();
    }
  }, [formData.moedaOrigem, formData.moedaVenda]);

  // Recalcular automaticamente quando dados mudarem
  useEffect(() => {
    if (exchangeRate > 0) {
      calculatePrice();
    }
  }, [formData, exchangeRate]);

  const loadData = async () => {
    try {
      setLoading(true);
      console.log('🔄 Iniciando carregamento de dados das APIs:', {
        currencies: `${API_BASE}/currencies`,
        platforms: `${API_BASE}/presets/platforms`,
        gateways: `${API_BASE}/presets/gateways`
      });
      // Carregar todas as APIs em paralelo
      const [currenciesRes, platformsRes, gatewaysRes] = await Promise.all([
        fetch(`${API_BASE}/currencies`),
        fetch(`${API_BASE}/presets/platforms`),
        fetch(`${API_BASE}/presets/gateways`)
      ]);

      const currenciesData = await currenciesRes.json();
      const platformsData = await platformsRes.json();
      const gatewaysData = await gatewaysRes.json();

      setCurrencies(currenciesData);
      setPlatforms(platformsData);
      setGateways(gatewaysData);
      console.log('✅ Dados das APIs carregados com sucesso');
    } catch (error) {
      console.error('❌ Erro ao carregar dados das APIs:', error);
      // Fallback com dados padrão se API falhar
      setCurrencies({
        USD: 'US Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        JPY: 'Japanese Yen',
        CNY: 'Chinese Yuan',
        BRL: 'Brazilian Real'
      });
      setPlatforms({
        'shopify': { nome: 'Shopify', taxa: 2.9 },
        'nuvemshop': { nome: 'Nuvemshop', taxa: 2.0 },
        'woocommerce': { nome: 'WooCommerce', taxa: 0 },
        'mercado-livre': { nome: 'Mercado Livre', taxa: 16.0 },
        'amazon': { nome: 'Amazon Brasil', taxa: 15.0 },
        'shopee': { nome: 'Shopee', taxa: 10.0 }
      });
      setGateways({
        'stripe': { nome: 'Stripe', taxa: 2.9 },
        'mercado-pago': { nome: 'Mercado Pago', taxa: 4.99 },
        'paypal': { nome: 'PayPal', taxa: 3.9 },
        'pagseguro': { nome: 'PagSeguro', taxa: 4.99 },
        'stone': { nome: 'Stone', taxa: 3.99 },
        'cielo': { nome: 'Cielo', taxa: 4.5 }
      });
      console.warn('⚠️ Usando dados padrão devido a erro nas APIs');
    } finally {
      setLoading(false);
      console.log('🔄 Carregamento de dados finalizado');
    }
  };

  const fetchExchangeRate = async () => {
    try {
      console.log('🔄 Buscando taxa de câmbio:', {
        from: formData.moedaOrigem,
        to: formData.moedaVenda,
        url: `${API_BASE}/exchange-rate?from=${formData.moedaOrigem}&to=${formData.moedaVenda}`
      });
      const response = await fetch(`${API_BASE}/exchange-rate?from=${formData.moedaOrigem}&to=${formData.moedaVenda}`);
      const data = await response.json();
      console.log('✅ Taxa de câmbio recebida:', data);
      setExchangeRate(data.rate); // Manter precisão completa
    } catch (error) {
      console.error('❌ Erro ao obter taxa de câmbio:', error);
      setExchangeRate(5.5); // Fallback rate
      console.warn('⚠️ Usando taxa de câmbio padrão 5.5');
    }
  };

  const calculatePrice = async () => {
    try {
      console.log('🔄 Iniciando cálculo de preço:', {
        url: `${API_BASE}/calc`,
        payload: formData
      });
      const response = await fetch(`${API_BASE}/calc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('✅ Resultado do cálculo:', data);
      setResult(data); // Usar dados com precisão completa
    } catch (error) {
      console.error('❌ Erro no cálculo:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'custoProduto' || name === 'custosAdicionais' || name === 'margemLucro' 
        ? parseFloat(value) || 0 
        : value
    }));
  };

  const saveCalculation = () => {
    const calculation = {
      ...formData,
      ...result,
      timestamp: new Date().toLocaleString('pt-BR')
    };
    
    const saved = JSON.parse(localStorage.getItem('calculations') || '[]');
    saved.push(calculation);
    localStorage.setItem('calculations', JSON.stringify(saved));
    
    alert('Cálculo salvo com sucesso!');
  };

  const clearForm = () => {
    setFormData({
      custoProduto: 100,
      custosAdicionais: 0,
      moedaOrigem: 'USD',
      moedaVenda: 'BRL',
      plataforma: 'mercado-livre',
      gateway: 'mercado-pago',
      margemLucro: 30
    });
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        Carregando dados das APIs...
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px'
      }}>
        🚀 DropCalc - Calculadora de Dropshipping
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>
        {/* Formulário */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#34495e', marginBottom: '20px' }}>
            📊 Dados do Produto
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Custo do Produto:
              </label>
              <input
                type="number"
                name="custoProduto"
                value={formData.custoProduto}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Custos Adicionais (frete, etc):
              </label>
              <input
                type="number"
                name="custosAdicionais"
                value={formData.custosAdicionais}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Moeda de Origem:
                </label>
                <select
                  name="moedaOrigem"
                  value={formData.moedaOrigem}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  {Object.entries(currencies).map(([code, name]) => (
                    <option key={code} value={code}>{code} - {name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Moeda de Venda:
                </label>
                <select
                  name="moedaVenda"
                  value={formData.moedaVenda}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  {Object.entries(currencies).map(([code, name]) => (
                    <option key={code} value={code}>{code} - {name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Plataforma de Venda:
              </label>
              <select
                name="plataforma"
                value={formData.plataforma}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {Object.entries(platforms).map(([key, platform]) => (
                  <option key={key} value={key}>{platform.nome} ({platform.taxa}%)</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Gateway de Pagamento:
              </label>
              <select
                name="gateway"
                value={formData.gateway}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {Object.entries(gateways).map(([key, gateway]) => (
                  <option key={key} value={key}>{gateway.nome} ({gateway.taxa}%)</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Margem de Lucro (%):
              </label>
              <input
                type="number"
                name="margemLucro"
                value={formData.margemLucro}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px'
          }}>
            <button
              onClick={calculatePrice}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🧮 Calcular
            </button>

            <button
              onClick={clearForm}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#95a5a6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🗑️ Limpar
            </button>
          </div>
        </div>

        {/* Resultados */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#34495e', marginBottom: '20px' }}>
            💰 Resultado do Cálculo
          </h2>

          <div style={{
            backgroundColor: '#2ecc71',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '14px', marginBottom: '5px' }}>
              Preço de Venda Sugerido
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
              R$ {result.precoVenda.toFixed(2)}
            </div>
          </div>

          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <div style={{
              padding: '10px',
              backgroundColor: '#ecf0f1',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              💱 Taxa de Câmbio: 1 {formData.moedaOrigem} = {exchangeRate.toFixed(6)} {formData.moedaVenda}
              <br />
              <small style={{ color: '#666', fontSize: '12px' }}>
                (Fonte: Frankfurter.app | Atualização em tempo real)
              </small>
            </div>

            <h3 style={{ marginBottom: '10px', color: '#2c3e50' }}>
              📋 Detalhamento dos Custos:
            </h3>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '5px 0', borderBottom: '1px solid #ecf0f1' }}>
                Custo do Produto: {formData.moedaOrigem} {result.detalhes.custoProduto.toFixed(2)}
              </li>
              <li style={{ padding: '5px 0', borderBottom: '1px solid #ecf0f1' }}>
                Custos Adicionais: {formData.moedaOrigem} {result.detalhes.custosAdicionais.toFixed(2)}
              </li>
              <li style={{ padding: '5px 0', borderBottom: '1px solid #ecf0f1' }}>
                Custo Total Convertido: R$ {result.detalhes.custoConvertido.toFixed(2)}
              </li>
              <li style={{ padding: '5px 0', borderBottom: '1px solid #ecf0f1' }}>
                Taxa da Plataforma: {result.detalhes.taxaPlataforma}%
              </li>
              <li style={{ padding: '5px 0', borderBottom: '1px solid #ecf0f1' }}>
                Taxa do Gateway: {result.detalhes.taxaGateway}%
              </li>
              <li style={{ padding: '5px 0', borderBottom: '1px solid #ecf0f1' }}>
                Taxa Total: {result.detalhes.taxaTotal}%
              </li>
              <li style={{ padding: '5px 0', borderBottom: '1px solid #ecf0f1' }}>
                Margem de Lucro: {result.detalhes.margemLucro}%
              </li>
              <li style={{ 
                padding: '10px 0', 
                fontWeight: 'bold',
                color: '#27ae60',
                backgroundColor: '#d5f4e6',
                borderRadius: '4px',
                textAlign: 'center',
                marginTop: '10px'
              }}>
                💰 Lucro Líquido: R$ {result.detalhes.valorMargemBRL.toFixed(2)}
              </li>
            </ul>
          </div>

          <button
            onClick={saveCalculation}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '20px'
            }}
          >
            💾 Salvar Cálculo
          </button>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{ margin: 0, color: '#7f8c8d' }}>
          🌐 APIs: Frankfurter.app (câmbio) + RestCountries (moedas) | 🚀 Backend: NestJS + Express | ⚛️ Frontend: React + Vite
        </p>
      </div>
    </div>
  );
}

export default App;