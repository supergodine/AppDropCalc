import React from 'react'
import ReactDOM from 'react-dom/client'
import { LanguageProvider } from './contexts/LanguageContext'
import './index.css'
import './utils/pwa'

console.log('=== main.tsx: carregando app dinamicamente para tratamento de erros ===');

const rootEl = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootEl);

(async function mount() {
  try {
    // Carrega o App dinamicamente para capturar erros de import/execução
    const { default: App } = await import('./AppWithAuth');

    root.render(
      <React.StrictMode>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </React.StrictMode>
    );
  } catch (err) {
    console.error('Erro ao iniciar o frontend:', err);
    // Mostra mensagem simples no DOM para evitar página branca
    rootEl.innerHTML = `
      <div style="font-family: Inter, system-ui, Arial; padding: 32px; color: #111;">
        <h2>O aplicativo falhou ao iniciar</h2>
        <p>Houve um erro ao carregar a aplicação. Verifique o console do navegador para detalhes.</p>
        <pre style="white-space: pre-wrap; background:#f8f8f8;padding:12px;border-radius:6px;">${String(
          err
        )}</pre>
      </div>
    `;
  }
})();