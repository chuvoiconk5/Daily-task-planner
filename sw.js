self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('task-planner-v7').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
                'https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/Sortable.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js',
                'https://cdn.jsdelivr.net/npm/flatpickr@4.6.13',
                'https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});