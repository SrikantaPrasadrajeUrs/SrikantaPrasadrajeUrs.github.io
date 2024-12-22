'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7edddca3958c1255ace4ba66954d59b1",
"version.json": "e2b9c2b78288faca650e92e1ef9bc8ba",
"index.html": "0d0b7a8d2936c6c547d8477d381329ea",
"/": "0d0b7a8d2936c6c547d8477d381329ea",
"main.dart.js": "59592b121343ef9969363a977bb92f51",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "a45b57aa45c3fe14ef1e9b321ac77181",
"linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"linux/CMakeLists.txt": "99eaf045e4b613f472c112fcb12b52e4",
"linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"linux/my_application.cc": "7e6b08ef86bec3e950d0ed28bc96f97f",
"linux/flutter/generated_plugin_registrant.cc": "bd6e64368e100cca8e55173215ae1bdd",
"linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"linux/flutter/generated_plugins.cmake": "0ed0777552923ab7bc4a3a8b5a31840e",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/LICENSE": "a60894397335535eb10b54e2fff9f265",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/test/path_provider_linux_test.dart": "3926362913a8c84846469f45de6a23e8",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/test/get_application_id_test.dart": "0cccfddb972e34c834af1953426aedf0",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/CHANGELOG.md": "4bf65f750b5abb4c110cb837937fbb11",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/AUTHORS": "c189179be54a192fd6bcd97130ce6e7a",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/test_driver/integration_test.dart": "1ad084e36a4cbb363a4abc230483bfe4",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/integration_test/path_provider_test.dart": "8da68d9cafe19ed47f9ed5b8695dc5e6",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/README.md": "99031e0915db7698934985a61f425ee8",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/pubspec.yaml": "ca7307567c9a733d66310fffb1ac3980",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/linux/main.cc": "162a1f36747f7bc942c9eaa8a967046a",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/linux/CMakeLists.txt": "66ca3f6b8203faf500257c342badfc22",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/linux/my_application.h": "48cfefe80bc58c58694104e9b008a12a",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/linux/my_application.cc": "3b374e07fcb17759ab16864cf97fbc87",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/linux/flutter/CMakeLists.txt": "ae213daab15b34923e9019bc0c7c4cf3",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/example/lib/main.dart": "14ab058387ceaf2705532edf62ee186b",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/README.md": "cdd4e8bebda4b21f75f1f504d1b2a7c3",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/pubspec.yaml": "a47bf8ce1a22b63f0758ce5a5dc611e5",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/lib/path_provider_linux.dart": "b48ba72a2d5d084d297c3d78e351036e",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/lib/src/path_provider_linux.dart": "8ac537f4af05ad812e8cd29f077aee24",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/lib/src/get_application_id.dart": "7c9dad55d8458841b39deacc873ca73a",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/lib/src/get_application_id_stub.dart": "358d0d060272732dc01cbb32b3cc1366",
"linux/flutter/ephemeral/.plugin_symlinks/path_provider_linux/lib/src/get_application_id_real.dart": "c011e9d3c02eb21bdfa1704553d5081b",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/LICENSE": "a60894397335535eb10b54e2fff9f265",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/test/url_launcher_linux_test.dart": "a75f58f6503c3ca3cd613c4d099d01c8",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/CHANGELOG.md": "77578d4ee48833a1c1c3face471c87af",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/AUTHORS": "c189179be54a192fd6bcd97130ce6e7a",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/test_driver/integration_test.dart": "1ad084e36a4cbb363a4abc230483bfe4",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/integration_test/url_launcher_test.dart": "1f57699edf542f16f7bc40dc7e4d395d",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/README.md": "99031e0915db7698934985a61f425ee8",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/pubspec.yaml": "05a78766a1f81cee2d0d3407f246aa1f",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/linux/main.cc": "efeff8dfcfb2d66ea857e1eee3b31856",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/linux/CMakeLists.txt": "c4417e38f3a76e0e59189809f05eab18",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/linux/my_application.h": "48cfefe80bc58c58694104e9b008a12a",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/linux/my_application.cc": "0f5e070b124cc4dceff48d32a18a6f6e",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/linux/flutter/CMakeLists.txt": "66a8ccde85d32f0bb51bdfcd6c3eebcc",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/linux/flutter/generated_plugins.cmake": "0ed0777552923ab7bc4a3a8b5a31840e",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/example/lib/main.dart": "b22d398ffad39eb00c3f5030f568ac48",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/README.md": "96d23f5c301b5a7ec2a79712403c7cb5",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/pubspec.yaml": "0dc0473e490ab2e7adde889fa1e77637",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/linux/url_launcher_plugin.cc": "627e223837184849fb6c4585b029ce1a",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/linux/CMakeLists.txt": "a9f5d25d3912966b559864aed388b45a",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/linux/test/url_launcher_linux_test.cc": "f7f7a06797a0fcdc3845cdb2bc713904",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/linux/include/url_launcher_linux/url_launcher_plugin.h": "701ba2a0769e7832bc972a82bf60e0d5",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/linux/url_launcher_plugin_private.h": "ff21cb97a0c57edf31a29fa7aee646a9",
"linux/flutter/ephemeral/.plugin_symlinks/url_launcher_linux/lib/url_launcher_linux.dart": "eed62e6e189aa82a69539a7c66a76501",
"icons/Icon-192.png": "f717189b812c1cd4de501d35ddce38e2",
"icons/Icon-maskable-192.png": "f717189b812c1cd4de501d35ddce38e2",
"icons/Icon-maskable-512.png": "35b9bc885a824e2e8371bef17d145c2c",
"icons/Icon-512.png": "35b9bc885a824e2e8371bef17d145c2c",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/images/selfie1.jpeg": "82c7f3de59ba20d11eefaf263a75dba1",
"assets/asset/images/my_image.jpg": "82c7f3de59ba20d11eefaf263a75dba1",
"assets/asset/images/selfie.jpeg": "650e1052b757b5b6b033459eb69c839f",
"assets/asset/images/portfolio.png": "16e7dcebb5552f0d0c0ac022d9b1932a",
"assets/asset/images/Animation%2520-%25201712066599010.gif": "0f8fd2972e17a7d604467bfa273bd7de",
"assets/asset/images/flutter_bird.png": "051f373ca2cca51e0a16ea1faf5cee1d",
"assets/asset/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/asset/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/asset/experience.json": "1660bd86de1b258e4de1d6b99554fec5",
"assets/asset/projects.json": "75f51af4383a61c036b118372d24be0e",
"assets/asset/svgs/spring.svg": "1eaed43784b2ec3e2491ec156bf8507c",
"assets/asset/svgs/reactNative.svg": "e20b70e7a752c7c83393a91c33ebcdb1",
"assets/asset/svgs/nodejs.svg": "3ff00db3eb3597629aaf2796cded4028",
"assets/asset/svgs/pencil.svg": "2dccba01a85dc390f09e955e6711c683",
"assets/asset/svgs/riverpod.png": "875b2c58f7a51a01d72ffcc2ed38371e",
"assets/asset/svgs/leetcode.svg": "af73f359955728cab453ae3aa4d6a508",
"assets/asset/coding-animation.json": "f9acdeb584a42a36da2f66f2db55f558",
"assets/asset/certificateInfo.json": "35fb2ae422a112087a3e6f2f34b99405",
"assets/asset/LottieLogo1.json": "33d7163fc87e449d6bcfd41894f7d21b",
"assets/asset/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/asset/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/asset/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/asset/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/asset/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/asset/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/asset/icons/logo.png": "875b2c58f7a51a01d72ffcc2ed38371e",
"assets/asset/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/asset/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/asset/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/AssetManifest.json": "feadc1bd95503b3f1eb8c31cb6a33c96",
"assets/NOTICES": "cad983f7c3ef32bcf869cb10cbd78d2a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "e44b1b2fd49264dc9a5beb8a0e8744b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8c33d88d2c4e3d33b2d55f70e7d42f72",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4d01a98b312bee4e4e1dfbd0260d1cb0",
"assets/fonts/MaterialIcons-Regular.otf": "93b4ccfc98e311cf8cc82e18ee8eaf1d",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
