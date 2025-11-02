import React from 'react';

const LoginSimple: React.FC = () => {
  console.log('LoginSimple carregando...');
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a2e', 
      color: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px'
    }}>
      <h1>LOGIN SIMPLES</h1>
      <p>Esta é uma página de login simplificada para teste</p>
      <form style={{ 
        backgroundColor: '#16213e', 
        padding: '30px', 
        borderRadius: '10px',
        marginTop: '20px',
        minWidth: '300px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input 
            type="email" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              marginTop: '5px',
              borderRadius: '5px',
              border: 'none',
              color: '#333'
            }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Senha:</label>
          <input 
            type="password" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              marginTop: '5px',
              borderRadius: '5px',
              border: 'none',
              color: '#333'
            }} 
          />
        </div>
        <button 
          type="submit"
          style={{ 
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginSimple;