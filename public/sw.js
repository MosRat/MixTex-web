const CACHE_NAME = 'onnx-model-cache-v1';
const ENCODER_MODEL_URL = '/models/encoder_model.onnx'; // 注意这里的路径可能需要调整
const DECODER_MODEL_URL = '/models/decoder_model_merged.onnx'; // 注意这里的路径可能需要调整
const TOKENIZER_MODEL_URL = '/models/tokenizer.json'; // 注意这里的路径可能需要调整

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.add(ENCODER_MODEL_URL) && cache.add(DECODER_MODEL_URL) && cache.add(TOKENIZER_MODEL_URL);
        })
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.endsWith('.onnx') || event.request.url.endsWith('tokenizer.json')) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    // console.log(event.request.url,response);
                    return response;
                }
                return fetch(event.request).then((response) => {
                    // console.log("no cache!",event.request.url,response);
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                });
            })
        );
    }
});