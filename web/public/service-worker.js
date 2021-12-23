/* eslint-disable no-restricted-globals */

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        // Debug statements
        if (response) console.log('From cache', event.request.url);
        if (!response) console.log(event.request.url, 'was not found in cache');

        return response || fetch(event.request).then(function (response) {
          console.log('Caching', event.request.url);
          cache.put(event.request, response.clone());
          return response;
        }).catch(err => console.log('Could not fetch', err));
      });
    }).catch(err => console.log('Could not open cache', err))
  );
});
