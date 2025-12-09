const CACHE_NAME = 'dropcalc-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard',
  '/login',
  '/settings',
  '/manifest.json',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/icon.svg'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('DropCalc PWA: Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('DropCalc PWA: Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('DropCalc PWA: Erro ao cachear:', error);
      })
  );
});

// Interceptar requisições de rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna do cache se disponível
        if (response) {
          return response;
        }
        
        // Senão, busca da rede
        return fetch(event.request)
          .then((response) => {
            // Verifica se é uma resposta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

                // Clona a resposta
                const responseToCache = response.clone();

                // Evita tentar cachear requests não-http (ex: chrome-extension:, data:)
                try {
                  if (event.request && typeof event.request.url === 'string' && event.request.url.startsWith('http')) {
                    caches.open(CACHE_NAME).then((cache) => {
                      cache.put(event.request, responseToCache);
                    });
                  }
                } catch (err) {
                  // Falha ao tentar cache.put — ignorar silenciosamente
                  console.warn('ServiceWorker: unable to cache request', err);
                }

            return response;
          })
          .catch((error) => {
            console.log('Fetch failed silently:', error);
            // Fallback para página offline
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
            // Para outros recursos, retorna uma resposta vazia
            return new Response('', { status: 200 });
          });
      })
  );
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('DropCalc PWA: Service Worker ativado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('DropCalc PWA: Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Push notifications (futuro)
self.addEventListener('push', (event) => {
  console.log('DropCalc PWA: Push notification recebida');
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação do DropCalc',
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('DropCalc', options)
  );
});