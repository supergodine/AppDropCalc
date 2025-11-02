import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue' }}>🚀 DropCalc Teste</h1>
      <p>Se você está vendo esta página, o React está funcionando!</p>
      <div style={{ 
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', 
        padding: '20px', 
        borderRadius: '10px',
        color: 'white',
        marginTop: '20px'
      }}>
        <h2>Teste de Estilo</h2>
        <p>Esta div tem estilo inline para testar se o problema é CSS</p>
      </div>
    </div>
  );
};

export default TestPage;