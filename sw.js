/**
 * EcoSynTech Global — Service Worker
 * Strategy:
 *   - HTML pages: network-first with cache fallback (offline support)
 *   - CSS/images/fonts: cache-first (instant subsequent loads)
 *   - 404 fallback to /404.html when offline
 * Version: 2026-06-07-v1
 * License: proprietary
 */

const CACHE = 'ecosyn-v1-2026-06-07';
const CORE = [
  '/ecosyntech-website/',
  '/ecosyntech-website/index.html',
  '/ecosyntech-website/about.html',
  '/ecosyntech-website/products.html',
  '/ecosyntech-website/story.html',
  '/ecosyntech-website/contact.html',
  '/ecosyntech-website/policies.html',
  '/ecosyntech-website/404.html',
  '/ecosyntech-website/styles.css',
  '/ecosyntech-website/assets/logo/logo-horizontal-color.png',
  '/ecosyntech-website/assets/logo/favicon-512.png',
  '/ecosyntech-website/assets/logo/app-icon-512.png',
  '/ecosyntech-website/assets/og/og-cover.png',
  '/ecosyntech-website/manifest.webmanifest'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).catch(() => {})));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Skip Google Fonts (CDN handles cache)
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // HTML navigation: network-first
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(req);
        return cached || caches.match('/ecosyntech-website/404.html');
      }
    })());
    return;
  }

  // Assets: cache-first
  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      if (fresh.ok) {
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());
      }
      return fresh;
    } catch {
      return new Response('', { status: 504, statusText: 'offline' });
    }
  })());
});
