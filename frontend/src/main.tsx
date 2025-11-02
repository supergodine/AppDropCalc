import ReactDOM from 'react-dom/client'
import { LanguageProvider } from './contexts/LanguageContext'
import AppHybrid from './AppHybrid'
import './index.css'
import './utils/pwa'

console.log('=== main.tsx carregando AppHybrid com sistema de idiomas ===');

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <LanguageProvider>
    <AppHybrid />
  </LanguageProvider>
);