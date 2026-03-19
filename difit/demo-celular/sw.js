const CACHE_NAME = 'difit-v1';
const ASSETS = [
  './',
  './index.html',
  './checkin.html',
  './diet.html',
  './diet_detail.html',
  './membership.html',
  './progress.html',
  './progress_photos.html',
  './routines.html',
  './routine_detail.html',
  './cuerpo-frente.png',
  './cuerpo-perfil.png',
  './cuerpo-espalda.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});