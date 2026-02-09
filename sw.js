// Service Worker para tutienda
const CACHE_NAME = "tutienda-v1";

self.addEventListener("install", event => {
  console.log("✅ Service Worker instalado");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});

