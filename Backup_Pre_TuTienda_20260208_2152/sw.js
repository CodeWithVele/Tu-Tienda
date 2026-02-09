// Service Worker para MacasConecta
const CACHE_NAME = "macasconecta-v1";

self.addEventListener("install", event => {
  console.log("✅ Service Worker instalado");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
