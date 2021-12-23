/* eslint-disable no-restricted-globals */

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
const apiCache = 'api-cache-v1';

// Fetch logic to fetch, then update cache
// If we cannot fetch, look in cache
self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).then(resp => {
      console.log('fetched', event.request.url);

      // First we cache, then we return response
      return caches.open(apiCache).then(cache => {
        console.log('Caching this response', event.request.url);
        cache.put(event.request, resp.clone());
        return resp;
      }).catch(err => { console.log('Could not open cache', err); });
    }).catch(err => {
      console.log('Could not fetch', event.request.url);

      // Try to find in cache
      return caches.open(apiCache).then(cache => {
        return cache.match(event.request).then(cacheResp => {
          return cacheResp;
        });
      });
    })
  );
});
