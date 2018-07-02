// Change this version number manually when sw is updated.
// Should be automated really!!
const cacheNameStatic = 'restaurant-reviews-0';
const urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/sw.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/js/main.js',
  '/data/restaurants.json',
  '/css/styles.css',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'
];

// Install Service-Worker & cache all pages used by the app.
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheNameStatic).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Delete existing cache if Service Worker has been updated
// (cache name changed)
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-reviews-') &&
                 cacheName != cacheNameStatic;
          }).map(function(cacheName) {
              return caches.delete(cacheName);
          })
        );
      })
    );
});

// Hijack fetch requests.
// Respond with a cached entry if available, otherwise fetch from network
// and add entry to the cache.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      // Otherwise fetch from network and cache it.
      return fetch(event.request).then(function(response) {
        // then clone the response and open the static cache
        var responseClone = response.clone();
        caches.open(cacheNameStatic).then(function (cache) {
          // add cloned response to the cache
          cache.put(event.request, responseClone);
        });
        return response;
      });
    }
  ));
});