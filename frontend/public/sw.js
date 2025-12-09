// Use a timestamped cache name to force clients to fetch the new service worker
const CACHE_NAME = 'dropcalc-cache-' + Date.now();
const urlsToCache = [
  '/index.html',
  '/assets/',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/icon.svg',
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
  const req = event.request;

  // Ignore non-http/https requests (chrome-extension:, data:, etc.)
  if (!req || !req.url || !(req.url.startsWith('http://') || req.url.startsWith('https://'))) {
    return;
  }

  // Navigation requests (single-page app navigations) -> Network first, fallback to cache
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          // Update cache for index.html only
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put('/index.html', clone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // For other requests (scripts, styles, images) -> Cache first, then network fallback
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((networkResponse) => {
          // Only cache successful responses and typical static types
          if (!networkResponse || !networkResponse.ok) return networkResponse;
          const contentType = networkResponse.headers.get('content-type') || '';
          if (
            contentType.includes('javascript') ||
            contentType.includes('text/css') ||
            contentType.includes('image/') ||
            contentType.includes('font/') ||
            contentType.includes('application/json')
          ) {
            try {
              const respClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, respClone));
            } catch (err) {
              console.warn('ServiceWorker cache put failed', err);
            }
          }
          return networkResponse;
        })
        .catch(() => {
          // If request is a document and offline, serve cached index
          if (req.destination === 'document') return caches.match('/index.html');
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