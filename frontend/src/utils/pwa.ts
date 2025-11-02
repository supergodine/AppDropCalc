// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('DropCalc PWA: Service Worker registrado com sucesso:', registration.scope);
        
        // Verificar atualizações
        registration.addEventListener('updatefound', () => {
          console.log('DropCalc PWA: Nova versão disponível!');
        });
      })
      .catch((error) => {
        console.log('DropCalc PWA: Falha ao registrar Service Worker:', error);
      });
  });
}

// Detectar se é PWA instalada
function isPWAInstalled() {
  return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
}

// Evento para instalar PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Previne o prompt automático
  e.preventDefault();
  deferredPrompt = e;
  
  // Mostrar botão de instalação customizado
  showInstallButton();
});

function showInstallButton() {
  // Criar botão de instalação se não existir
  if (!document.getElementById('install-pwa-btn') && !isPWAInstalled()) {
    const installBtn = document.createElement('button');
    installBtn.id = 'install-pwa-btn';
    installBtn.innerHTML = '📱 Instalar App';
    installBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      color: white;
      border: none;
      border-radius: 50px;
      padding: 12px 24px;
      font-weight: bold;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      cursor: pointer;
      z-index: 1000;
      font-size: 14px;
      transition: transform 0.2s;
    `;
    
    installBtn.addEventListener('mouseover', () => {
      installBtn.style.transform = 'scale(1.05)';
    });
    
    installBtn.addEventListener('mouseout', () => {
      installBtn.style.transform = 'scale(1)';
    });
    
    installBtn.addEventListener('click', installPWA);
    document.body.appendChild(installBtn);
    
    // Animar entrada
    setTimeout(() => {
      installBtn.style.animation = 'pulse 2s infinite';
    }, 1000);
  }
}

async function installPWA() {
  if (deferredPrompt) {
    // Mostrar prompt de instalação
    deferredPrompt.prompt();
    
    // Aguardar escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    console.log('DropCalc PWA: Resultado da instalação:', outcome);
    
    if (outcome === 'accepted') {
      console.log('DropCalc PWA: Usuário instalou o app!');
      // Remover botão de instalação
      const installBtn = document.getElementById('install-pwa-btn');
      if (installBtn) {
        installBtn.remove();
      }
    }
    
    deferredPrompt = null;
  }
}

// Verificar se já está instalado
window.addEventListener('appinstalled', () => {
  console.log('DropCalc PWA: App instalado com sucesso!');
  const installBtn = document.getElementById('install-pwa-btn');
  if (installBtn) {
    installBtn.remove();
  }
});

// CSS para animação
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);

export { isPWAInstalled, installPWA };