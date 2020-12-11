if (!('serviceWorker' in navigator)) {
  // service workers no son soportados :(
}
if(navigator.serviceWorker){//Esta disponible trabajar con service worker en este navegador?
  if(window.location.href.includes("localhost") || window.location.href.includes("http://127.0.0.1:8887/")){
    navigator.serviceWorker.register("/sw.js");
    } else {
       //Este servidor es un servidor web (github pages)
       navigator.serviceWorker.register("/pokeapi/sw.js");
    }
  }

