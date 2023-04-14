import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /^https:\/\/my-app.com\/api\/.*$/,
  new NetworkFirst({
    cacheName: 'my-app-api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  }),
);

self.addEventListener('install', event => {
  console.log('Installing service worker...');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('Activating service worker...');
  event.waitUntil(self.clients.claim());
});

export { precacheAndRoute };
