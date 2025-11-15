import ReactDOM from 'react-dom/client'
import { LanguageProvider } from './contexts/LanguageContext'
import App from './AppWithAuth'
import './index.css'
import './utils/pwa'

console.log('=== main.tsx carregando AppWithAuth com sistema de idiomas ===');

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);