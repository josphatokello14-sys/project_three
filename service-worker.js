const CACHE_NAME ="mini-projects-cache-v1"
const urlsToCache = [
    './index.html',
    './beauty.jpg',
    './coldertemp.jpg',
    './coldtemp.jpg',
    './hottemp.jpg',
    './hottertemp.jpg',
    './moderatetemp.jpg',
    './icon-192.png',
    './icon-512.png',
    './manifest.json',
];

//install event cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

//fetch event -serve from cache if available
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached response if found, else fetch from network
                return response || fetch(event.request);
            })
    );
});