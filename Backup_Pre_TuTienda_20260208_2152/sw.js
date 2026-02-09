// Service Worker para Tu-Tienda
const CACHE_NAME = "Tu-Tienda-v1";

self.addEventListener("install", event => {
  console.log("? Service Worker instalado");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});

