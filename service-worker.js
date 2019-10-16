/*set up*/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('Service worker registered successfully', registration);
    }).catch(function (err) {
        console.log('Service worker registration failed: ', err);
    });
};



/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    })
}*/
/*
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('Service Worker is registered with scope', registration.scope);
    }).catch(function (err) {
        console.log("Registration failed", err)
    })
}
*/
