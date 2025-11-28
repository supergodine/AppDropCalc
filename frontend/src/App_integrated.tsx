import React, { useState, useEffect } from 'react';

const API_BASE = 'https://appdropcalc.onrender.com/api';
// const API_BASE = 'https://appdropcalc.onrender.com/api'; // Render

function App() {
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

  const [currencies, setCurrencies] = useState({});
  const [platforms, setPlatforms] = useState({});
  const [gateways, setGateways] = useState({});
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
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
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
    } finally {
      setLoading(false);
    }
  };

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`${API_BASE}/exchange-rate?from=${formData.moedaOrigem}&to=${formData.moedaVenda}`);
      const data = await response.json();
      setExchangeRate(data.rate);
    } catch (error) {
      console.error('Erro ao obter taxa de câmbio:', error);
      setExchangeRate(5.5); // Fallback rate
    }
  };

  const calculatePrice = async () => {
    try {
      const response = await fetch(`${API_BASE}/calc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Erro no cálculo:', error);
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
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }
    }, 'Carregando dados das APIs...');
  }

  return React.createElement('div', {
    style: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }
  }, [
    React.createElement('h1', {
      key: 'title',
      style: {
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px'
      }
    }, '🚀 DropCalc - Calculadora de Dropshipping'),

    React.createElement('div', {
      key: 'content',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }
    }, [
      // Formulário
      React.createElement('div', {
        key: 'form',
        style: {
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      }, [
        React.createElement('h2', {
          key: 'form-title',
          style: { color: '#34495e', marginBottom: '20px' }
        }, '📊 Dados do Produto'),

        React.createElement('div', {
          key: 'form-fields',
          style: { display: 'flex', flexDirection: 'column', gap: '15px' }
        }, [
          React.createElement('div', { key: 'custo-produto' }, [
            React.createElement('label', {
              style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' }
            }, 'Custo do Produto:'),
            React.createElement('input', {
              type: 'number',
              name: 'custoProduto',
              value: formData.custoProduto,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }
            })
          ]),

          React.createElement('div', { key: 'custos-adicionais' }, [
            React.createElement('label', {
              style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' }
            }, 'Custos Adicionais (frete, etc):'),
            React.createElement('input', {
              type: 'number',
              name: 'custosAdicionais',
              value: formData.custosAdicionais,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }
            })
          ]),

          React.createElement('div', { key: 'moedas', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' } }, [
            React.createElement('div', { key: 'moeda-origem' }, [
              React.createElement('label', {
                style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' }
              }, 'Moeda de Origem:'),
              React.createElement('select', {
                name: 'moedaOrigem',
                value: formData.moedaOrigem,
                onChange: handleInputChange,
                style: {
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }
              }, Object.entries(currencies).map(([code, name]) =>
                React.createElement('option', { key: code, value: code }, `${code} - ${name}`)
              ))
            ]),

            React.createElement('div', { key: 'moeda-venda' }, [
              React.createElement('label', {
                style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' }
              }, 'Moeda de Venda:'),
              React.createElement('select', {
                name: 'moedaVenda',
                value: formData.moedaVenda,
                onChange: handleInputChange,
                style: {
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }
              }, Object.entries(currencies).map(([code, name]) =>
                React.createElement('option', { key: code, value: code }, `${code} - ${name}`)
              ))
            ])
          ]),

          React.createElement('div', { key: 'plataforma' }, [
            React.createElement('label', {
              style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' }
            }, 'Plataforma de Venda:'),
            React.createElement('select', {
              name: 'plataforma',
              value: formData.plataforma,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }
            }, Object.entries(platforms).map(([key, platform]) =>
              React.createElement('option', { key: key, value: key }, `${(platform as any).nome} (${(platform as any).taxa}%)`)
            ))
          ]),

          React.createElement('div', { key: 'gateway' }, [
            React.createElement('label', {
              style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' }
            }, 'Gateway de Pagamento:'),
            React.createElement('select', {
              name: 'gateway',
              value: formData.gateway,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }
            }, Object.entries(gateways).map(([key, gateway]) =>
              React.createElement('option', { key: key, value: key }, `${(gateway as any).nome} (${(gateway as any).taxa}%)`)
            ))
          ]),

          React.createElement('div', { key: 'margem' }, [
            React.createElement('label', {
              style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' }
            }, 'Margem de Lucro (%):'),
            React.createElement('input', {
              type: 'number',
              name: 'margemLucro',
              value: formData.margemLucro,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }
            })
          ])
        ]),

        React.createElement('div', {
          key: 'buttons',
          style: {
            display: 'flex',
            gap: '10px',
            marginTop: '20px'
          }
        }, [
          React.createElement('button', {
            key: 'calculate',
            onClick: calculatePrice,
            style: {
              flex: 1,
              padding: '12px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }
          }, '🧮 Calcular'),

          React.createElement('button', {
            key: 'clear',
            onClick: clearForm,
            style: {
              flex: 1,
              padding: '12px',
              backgroundColor: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }
          }, '🗑️ Limpar')
        ])
      ]),

      // Resultados
      React.createElement('div', {
        key: 'results',
        style: {
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      }, [
        React.createElement('h2', {
          key: 'results-title',
          style: { color: '#34495e', marginBottom: '20px' }
        }, '💰 Resultado do Cálculo'),

        React.createElement('div', {
          key: 'price-display',
          style: {
            backgroundColor: '#2ecc71',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '20px'
          }
        }, [
          React.createElement('div', {
            style: { fontSize: '14px', marginBottom: '5px' }
          }, 'Preço de Venda Sugerido'),
          React.createElement('div', {
            style: { fontSize: '32px', fontWeight: 'bold' }
          }, `R$ ${result.precoVenda.toFixed(2)}`)
        ]),

        React.createElement('div', {
          key: 'details',
          style: { fontSize: '14px', lineHeight: '1.6' }
        }, [
          React.createElement('div', {
            key: 'exchange-info',
            style: {
              padding: '10px',
              backgroundColor: '#ecf0f1',
              borderRadius: '4px',
              marginBottom: '15px'
            }
          }, `💱 Taxa de Câmbio: 1 ${formData.moedaOrigem} = ${exchangeRate.toFixed(4)} ${formData.moedaVenda}`),

          React.createElement('h3', {
            key: 'breakdown-title',
            style: { marginBottom: '10px', color: '#2c3e50' }
          }, '📋 Detalhamento dos Custos:'),

          React.createElement('ul', {
            key: 'breakdown-list',
            style: { listStyle: 'none', padding: 0 }
          }, [
            React.createElement('li', {
              key: 'custo-produto',
              style: { padding: '5px 0', borderBottom: '1px solid #ecf0f1' }
            }, `Custo do Produto: ${formData.moedaOrigem} ${result.detalhes.custoProduto.toFixed(2)}`),

            React.createElement('li', {
              key: 'custos-add',
              style: { padding: '5px 0', borderBottom: '1px solid #ecf0f1' }
            }, `Custos Adicionais: ${formData.moedaOrigem} ${result.detalhes.custosAdicionais.toFixed(2)}`),

            React.createElement('li', {
              key: 'custo-convertido',
              style: { padding: '5px 0', borderBottom: '1px solid #ecf0f1' }
            }, `Custo Total Convertido: R$ ${result.detalhes.custoConvertido.toFixed(2)}`),

            React.createElement('li', {
              key: 'taxa-plataforma',
              style: { padding: '5px 0', borderBottom: '1px solid #ecf0f1' }
            }, `Taxa da Plataforma: ${result.detalhes.taxaPlataforma}%`),

            React.createElement('li', {
              key: 'taxa-gateway',
              style: { padding: '5px 0', borderBottom: '1px solid #ecf0f1' }
            }, `Taxa do Gateway: ${result.detalhes.taxaGateway}%`),

            React.createElement('li', {
              key: 'taxa-total',
              style: { padding: '5px 0', borderBottom: '1px solid #ecf0f1' }
            }, `Taxa Total: ${result.detalhes.taxaTotal}%`),

            React.createElement('li', {
              key: 'margem-lucro',
              style: { padding: '5px 0', borderBottom: '1px solid #ecf0f1' }
            }, `Margem de Lucro: ${result.detalhes.margemLucro}%`),

            React.createElement('li', {
              key: 'valor-margem',
              style: { 
                padding: '10px 0', 
                fontWeight: 'bold',
                color: '#27ae60',
                backgroundColor: '#d5f4e6',
                borderRadius: '4px',
                textAlign: 'center',
                marginTop: '10px'
              }
            }, `💰 Lucro Líquido: R$ ${result.detalhes.valorMargemBRL.toFixed(2)}`)
          ])
        ]),

        React.createElement('button', {
          key: 'save',
          onClick: saveCalculation,
          style: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '20px'
          }
        }, '💾 Salvar Cálculo')
      ])
    ]),

    React.createElement('div', {
      key: 'footer',
      style: {
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }
    }, [
      React.createElement('p', {
        key: 'footer-text',
        style: { margin: 0, color: '#7f8c8d' }
      }, '🌐 APIs: Frankfurter.app (câmbio) + RestCountries (moedas) | 🚀 Backend: NestJS + Express | ⚛️ Frontend: React + Vite')
    ])
  ]);
}

export default App;