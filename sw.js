// Minimal service worker: makes the app installable on Android.
// Data is always fetched live, so nothing is cached.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
