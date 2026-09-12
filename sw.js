const CACHE_NAME = 'kofta-v2.2.1';
const OFFLINE_URL = './index.html';

// قائمة الملفات المراد تخزينها للعمل بدون إنترنت
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  // تأكد من وجود هذه الصور في مجلد المشروع أو استبدل الروابط بروابط سحابية
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  // مكتبات خارجية (CDN)
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js'
];

// ✅ 1. التثبيت (Install)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Cache opened');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW] Some assets failed to cache:', err);
        // نسمح بالتثبيت حتى لو فشل تحميل بعض الأصول الخارجية
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting(); // تفعيل الـ SW الجديد فوراً
});

// ✅ 2. التفعيل وحذف الكاش القديم (Activate)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim(); // السيطرة على الصفحات المفتوحة حالياً
});

// ✅ 3. اعتراض الطلبات (Fetch)
self.addEventListener('fetch', (event) => {
  // تجاهل طلبات Firebase Live Data (لضمان تحديث البيانات الحية)
  if (event.request.url.includes('firestore.googleapis.com') ||
      event.request.url.includes('identitytoolkit.googleapis.com') ||
      event.request.url.includes('securetoken.googleapis.com')) {
    return;
  }

  // التعامل فقط مع طلبات GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // إذا نجح الاتصال، احفظ نسخة في الكاش للزيارات القادمة
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // إذا انقطع الإنترنت، حاول جلب الملف من الكاش المحلي
        return caches.match(event.request).then((cachedResponse) => {
          // إذا لم يوجد في الكاش، اعرض صفحة Offline (إذا كانت موجودة)
          return cachedResponse || caches.match(OFFLINE_URL);
        });
      })
  );
});
