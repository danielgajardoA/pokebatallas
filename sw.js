
const APP_SHELL = [
    "/",
    "/index.html",
    "js/init.js"

];

const APP_SHELL_INMUTABLE = [
    "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
];

const CACHE_ESTATICO = "estatico-v1";
const CACHE_INMUTABLE ="inmutable-v1";


self.addEventListener('install', e=>{
    console.log("El service worker fue instalado");
});

self.addEventListener('activate', e=>{
    console.log("El service worker fue activado");
});

self.addEventListener('fetch', e=>{
    console.log(e);
});

self.addEventListener('install', e=>{
    const cacheEstatico = caches.open(CACHE_ESTATICO).then(cache=>cache.addAll(APP_SHELL));
    const cacheInmutable = caches.open(CACHE_INMUTABLE).then(cache=>cache.addAll(APP_SHELL_INMUTABLE));
    e.waitUntil(Promise.all([cacheEstatico,cacheInmutable]));
});
