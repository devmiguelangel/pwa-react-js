/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Precarga la app
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
//Eliminar los warnings
// workbox.precaching.suppressWarnings();
//Toma el precatch manifest (js, css, indext.html) y los va a guardar detrás de escena.
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
// workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event =>
  event.waitUntil(self.clients.claim())
);

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.networkFirst());
