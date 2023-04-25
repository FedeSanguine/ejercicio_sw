console.log( "sW: Soy un service worker");

self.addEventListener("fetch", event => {
    console.log("SW: ", event.request.url);
    console.log(event);
})