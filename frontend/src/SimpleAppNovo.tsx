import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TestPage: React.FC = () => (
  <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
    <h1>✅ REACT ESTÁ FUNCIONANDO!</h1>
    <p>Se você está vendo isso, o React Router está OK.</p>
    <div style={{ marginTop: '20px' }}>
      <a href="/welcome" style={{ marginRight: '10px', color: 'blue' }}>→ Welcome</a>
      <a href="/login" style={{ marginRight: '10px', color: 'blue' }}>→ Login</a>
      <a href="/test" style={{ color: 'blue' }}>→ Test</a>
    </div>
  </div>
);

const SimpleLogin: React.FC = () => (
  <div style={{ padding: '20px', backgroundColor: '#e8f4f8', minHeight: '100vh' }}>
    <h1>📱 LOGIN SIMPLES</h1>
    <p>Tela de login funcionando!</p>
    <form style={{ marginTop: '20px' }}>
      <input type="email" placeholder="Email" style={{ display: 'block', margin: '10px 0', padding: '8px' }} />
      <input type="password" placeholder="Senha" style={{ display: 'block', margin: '10px 0', padding: '8px' }} />
      <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
        Entrar
      </button>
    </form>
    <a href="/" style={{ color: 'blue' }}>← Voltar</a>
  </div>
);

const SimpleWelcome: React.FC = () => (
  <div style={{ padding: '20px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
    <h1>🏠 BEM-VINDO!</h1>
    <p>Tela de boas-vindas funcionando!</p>
    <div style={{ marginTop: '20px' }}>
      <a href="/login" style={{ 
        display: 'inline-block', 
        margin: '10px', 
        padding: '10px 20px', 
        backgroundColor: '#28a745', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        Entrar
      </a>
      <a href="/login" style={{ 
        display: 'inline-block', 
        margin: '10px', 
        padding: '10px 20px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        Criar conta
      </a>
    </div>
  </div>
);

const SimpleApp: React.FC = () => {
  console.log('🚀 SimpleApp carregando...');
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/welcome" element={<SimpleWelcome />} />
          <Route path="/login" element={<SimpleLogin />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default SimpleApp;