const CACHE = "ku-ila-assets-v1";
const CACHEABLE_DESTINATIONS = new Set(["font", "image", "script", "style"]);

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || !CACHEABLE_DESTINATIONS.has(request.destination)) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (!response || response.status !== 200) return response;
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(request, copy));
    return response;
  })));
});
