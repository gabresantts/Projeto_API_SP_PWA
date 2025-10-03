const CACHE_NAME = 'poi-finder-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    // Adicione os links do Bootstrap e outros recursos estáticos aqui se quiser caching total:
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
    // Inclua também seus ícones: '/icon-196.png', etc.
];

// 1. Instalação: Armazena o shell do app no cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto, pré-armazenando recursos.');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.error('Falha na instalação do Service Worker:', err);
            })
    );
});

// 2. Ativação: Limpa caches antigos
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 3. Busca de Requisições
self.addEventListener('fetch', event => {
    // URL da Overpass API
    const overpassApiUrl = 'https://overpass-api.de/api/interpreter';
    
    // Verifica se a requisição é para a Overpass API
    if (event.request.url.startsWith(overpassApiUrl)) {
        // Estratégia: Network-only (Não faz sentido armazenar buscas dinâmicas)
        event.respondWith(fetch(event.request).catch(error => {
            // Em caso de erro de rede, o Service Worker pode responder com uma página de erro
            console.error('Falha na busca da API:', error);
            return new Response(JSON.stringify({ elements: [] }), { headers: { 'Content-Type': 'application/json' } });
        }));
        return;
    }
    
    // Para todos os outros recursos (o shell do app)
    // Estratégia: Cache-first
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Retorna o recurso do cache se existir
                if (response) {
                    return response;
                }
                // Senão, busca na rede
                return fetch(event.request);
            })
    );
});