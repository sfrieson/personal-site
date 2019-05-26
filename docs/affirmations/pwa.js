const cacheRE = /([\w-]+)\/(\d+)\.(\d+)\.(\d+)/
const CACHE_NAME = 'affirmations/1.0.2';
const ROOT_PATH = '/affirmations';
var urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/affirmations.json'
].map(path => `${ROOT_PATH}${path}`);

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) return response;
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function (event) {
  caches.keys().then(function(cacheNames) {
    if (!cacheRE.test(CACHE_NAME)) return Promise.resolve();
    const matches = CACHE_NAME.match(cacheRE);
    const current = {
      name: matches[1],
      major: +matches[2],
      minor: +matches[3],
      patch: +matches[4]
    };

    return Promise.all(
      cacheNames.filter(function(cacheName) {
        if (!cacheRE.test(cacheName)) return false; // Don't delete any that don't match the pattern schema. Might not be ours.
        const matches = cacheName.match(cacheRE);
        if (
          matches[1] === current.name
          && (
            +matches[2] < current.major
            || +matches[3] < current.minor
            || +matches[4] < current.patch
          )
        ) return true;
      }).map(cacheName => caches.delete(cacheName))
    );
  });
});
