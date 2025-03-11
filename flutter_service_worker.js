'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dd0db93bbeb7ca1bd8ced042f1f56326",
"version.json": "edf7e1fabe78920e324400463d192bd8",
"index.html": "5165a0d87c9040f12428cd5ceebc1e05",
"/": "5165a0d87c9040f12428cd5ceebc1e05",
"main.dart.js": "671a80ce2832dc13c4e8e7b96109fe9f",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d0595bbc8ac1fa4023884eec91b52668",
".git/config": "8a6993ca57dbcc8816c6f9e3b56a6019",
".git/objects/59/4bb562a08e04defda1753b55fc5cf8e0287791": "ab5bc0dd544e719febd7a4a6d267044d",
".git/objects/3e/43a92fbf5396cddb6bdb7915cf3e3685c99f3c": "4e5f1de0396a1476657c6fa32c34dd34",
".git/objects/57/b03c806b17bb26d3f5df61ee0af86baed9a4df": "2f74e9c6f503aa994d8e1c1d3e155e22",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/a2/8d8d59c48267478999bf260388b282d3c6a5d1": "aaabc26057b1ba42cda585bfbfe7fcaa",
".git/objects/bd/587f1606626536089525e4168f6d2eb2ee2bc4": "a2504c868f9a1c5357186158b951822a",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/f4/f6e2a92bcb06cc837cfd23b4e7b6f2902bc56b": "cac92b1cb59a250ea206237cf6ed29ae",
".git/objects/fd/cbd2c836cb2374f388e7edf09bab88fb3472ef": "8635f3fcb1820bfc18baa076370f6bc6",
".git/objects/f5/5af60aaf64340d80c458c06aa30b8b3b57a61c": "6fc329984a3b8de6643eeb00f89200a8",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/5fbf66a2adce2b4a1595bb26a1753f1cbb49a7": "4f4052fab28b186f7946ea47edb2a3cb",
".git/objects/pack/pack-4bcf4011030f8b9b48c78b7d3920267c65cada7d.pack": "ea4f356a65a9100c55f588d34e3097b1",
".git/objects/pack/pack-4bcf4011030f8b9b48c78b7d3920267c65cada7d.rev": "e2bffe9f08a5018cd5dcfb9b97dcba42",
".git/objects/pack/pack-4bcf4011030f8b9b48c78b7d3920267c65cada7d.idx": "c989f8de436ebff15270849318d7bffe",
".git/objects/80/af7e13422814940d9ffefb51c84fbf9d1edad3": "2d3a05ba10224993ea50f143f5b3312c",
".git/objects/74/96a804eabace5cb832058c70befeaf1f2ab6b7": "28e9c3b1bdc81ecf53f08d9206b3a22b",
".git/objects/74/1d6c054b1cabcae8adbcee4a8ca3594c263e19": "3ad80f643940714d5b0ed2c2050b50bc",
".git/objects/10/94888f96ccd26208dd2c3bda75041df238c81e": "e9666498e82e42be81bb561e4a326667",
".git/objects/19/f241365698d9ff6542d2b4c7385495b35cb5e5": "74e4d85efdbd7849dc8372c3de95bfb5",
".git/objects/75/ff6803f12ec91ca2524c5657bda07a50ad4b11": "0bc350be64efe7700f67f87d1ba68f07",
".git/objects/2a/1fd22589c289cbdd0e50d707b02ded3af1e9ba": "54b565cdd32cc386503d44c11cc876fd",
".git/objects/2a/6060df322004bc10e27b2ebdf121a50dd2cf7e": "d6694754435e810b0ec6f91ed56f9c93",
".git/objects/36/0ea3af0712fe9b7af08b4ff6ee4be25a2353be": "48199daccbfaead15d32ab4bf89e9d4e",
".git/objects/08/45a9d66a380dc97c3b40aee7597b0f7c5bc4d7": "ea969724435a2257656694c91cfd7bf5",
".git/objects/06/89d825dde82e041ce990eca8d7e1cd0844edae": "fa20153e18f08797878e8c75670a17f5",
".git/objects/6c/2a5c02a1d2afc242c0b7d5d91d7d3e6be48f12": "bd0c9c696c2f6da1de583659c38dd230",
".git/objects/0a/27dd657ee10354c1b5491a47e6d4f51291d85e": "9c3dc8ac0e7c56724d99c2c8ed086333",
".git/objects/a7/eeddcbdcc9cb05588fb5bff8415582720c8951": "353384deb74e4447899acb2061fe85af",
".git/objects/b8/738650e46aa9064afe4d0c107a8e345185be51": "41ce5601a8c7a6590fe8784c67d3fe62",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/dd/3c442593a1250b6ff592f6d6194e1497a97a3a": "808514fc5803720f2df8a4a1fa9a44c5",
".git/objects/a9/2f6651959ee2edc6abd827a27d6242288d3f56": "4fd129afb3c79615e58ba0a37c669c48",
".git/objects/d2/e7f6f71375a53afa77fe3d2895fea739595c1c": "31e6f41938eb17365302416d3b1535d5",
".git/objects/aa/9320e55bb7d32ca59440f86603ec7515556808": "1232b1af20565e516bf298d63d12ece6",
".git/objects/af/c124d884ccbdb2aeb6bbb1b6c4481c8950adbd": "8eda831cc2e7c22ad008d994e001a3dd",
".git/objects/c3/a425bedaf60d37a7eeb22266e85c6d81923056": "20eb501632f5b0373d584f3397cf5005",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f6/6d94d3c9c86163a498cf433e7222ebf6446e4c": "6200f8a77667f8e2269cd6ccd4db0158",
".git/objects/e9/48db856989d1bd21476b1455047e78007f7143": "bfae8be43d13138f52bcdef2fad1a9ae",
".git/objects/77/bbe78c2cb1545d14b9f4e2ee140541f56d4068": "a5e54f80de24d68b1792be1130140966",
".git/objects/8d/3c4498a3ba112e3a43dc95b718b368e53bde15": "65d2bd35b7caf7491f2407b4b37c1a17",
".git/objects/8d/0b4f8a7557b72f8a932e88cb13752ebaff4863": "3bd6f4235af77de37f273cd26ae80e6a",
".git/objects/8b/5a994775ffab68db5ebc6e15d24b2e48e37a18": "cafe0bb3ae9486abe8adf8b16a9c4f26",
".git/objects/22/7dffc1abeca37dbbaa02d18ea676d01dccf9c2": "7c3ae280ba85ec25b57ec32b77a3492b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73822622ea4768cfd4617097cbc9711e",
".git/logs/refs/heads/main": "7ea299d2e7c10f96356dddcabd07f78b",
".git/logs/refs/remotes/origin/main": "1988cdcbb23b1e6972d9781edc878279",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "586819dc997d4773c6cdf1d85be6fc17",
".git/refs/remotes/origin/main": "586819dc997d4773c6cdf1d85be6fc17",
".git/index": "ec768e5c3383382317b1eac1cb203d52",
".git/COMMIT_EDITMSG": "0e0f865c8431085103067e40a38648ee",
".git/FETCH_HEAD": "63a60bd392d4602a383dd2d142f30a5c",
"assets/asset/images/selfie2.jpg": "45cd0e112f34474b65f6ee568d3df38d",
"assets/asset/images/selfie1.jpeg": "82c7f3de59ba20d11eefaf263a75dba1",
"assets/asset/images/my_image.jpg": "82c7f3de59ba20d11eefaf263a75dba1",
"assets/asset/images/community.png": "6ba7610d9839db94a4f15dba01a1ce5f",
"assets/asset/images/selfie.jpeg": "650e1052b757b5b6b033459eb69c839f",
"assets/asset/images/portfolio.png": "16e7dcebb5552f0d0c0ac022d9b1932a",
"assets/asset/images/Animation%2520-%25201712066599010.gif": "0f8fd2972e17a7d604467bfa273bd7de",
"assets/asset/images/flutter_bird.png": "051f373ca2cca51e0a16ea1faf5cee1d",
"assets/asset/images/pizza%2520app.jpg": "85c0eb177e9f4a040ea034ac2b24e5af",
"assets/asset/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/asset/images/task_manager.jpg": "d3a835fb94acc9350eb73c23c1639c7d",
"assets/asset/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/asset/experience.json": "97f7ee3a0c0d6ba9c4eeeadbe2eee0f1",
"assets/asset/projects.json": "96ba3db8f5e2fda1d15c7c14249bd378",
"assets/asset/svgs/spring.svg": "1eaed43784b2ec3e2491ec156bf8507c",
"assets/asset/svgs/reactNative.svg": "e20b70e7a752c7c83393a91c33ebcdb1",
"assets/asset/svgs/nodejs.svg": "3ff00db3eb3597629aaf2796cded4028",
"assets/asset/svgs/pencil.svg": "2dccba01a85dc390f09e955e6711c683",
"assets/asset/svgs/riverpod.png": "875b2c58f7a51a01d72ffcc2ed38371e",
"assets/asset/svgs/leetcode.svg": "af73f359955728cab453ae3aa4d6a508",
"assets/asset/coding-animation.json": "f9acdeb584a42a36da2f66f2db55f558",
"assets/asset/certificateInfo.json": "35fb2ae422a112087a3e6f2f34b99405",
"assets/asset/videos/2x_sound_tm.mp4": "03ba36238704a542f7821ffd2c9b0561",
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
"assets/AssetManifest.json": "fdbdc3a8f2bca1db00bf24c9ff812d94",
"assets/NOTICES": "ca4ed081ad9f40efb37ee2e7c401c97b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "1f06846b18f21f2dc63f84a74bcbc71b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c423f015de6eef420556bf8ce92faa66",
"assets/fonts/MaterialIcons-Regular.otf": "571a0e8224f0a05ab50b24d8ee571506",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
