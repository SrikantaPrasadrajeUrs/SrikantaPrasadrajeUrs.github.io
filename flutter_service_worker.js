'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d9212213cd6e363e09b0ab1dc6ca3d20",
"version.json": "edf7e1fabe78920e324400463d192bd8",
"index.html": "64b920e4e0d6ce6dde449fabc182204c",
"/": "64b920e4e0d6ce6dde449fabc182204c",
"main.dart.js": "244ccd8beeb484bc56b53f43c9d0ac27",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d0595bbc8ac1fa4023884eec91b52668",
".git/config": "8a6993ca57dbcc8816c6f9e3b56a6019",
".git/objects/9e/f40000fcdddaf2ee391ac587d13ccf0a5319ba": "64d9b8528c5dabf9979c9c693498035d",
".git/objects/04/135e4f85946b9ec443232f2f4f3b6cb9668176": "98b2f99ef899884d2271661b8ee29f93",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/05/ffa8b6ac318ef15abfa09be7321f82909da9fc": "33c0875b8a3683b289c4ae1991236bca",
".git/objects/9d/4633e966c97f12c6f927136db4ea52da6aa14c": "45c96428d5733b5b7671c49be3538ca9",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/699602a50b3e0369527fa21a5f0784bd929510": "7243d68c47c91e7e9e407f4043edd243",
".git/objects/ad/0f1cd64733318661e09f75ca992275b1df499f": "2a049de58f3740b35f234ea0620d577c",
".git/objects/be/ea6e324499b61b2523843e5eecf243a933e0cc": "9051c1c19b87184f3412ac93920d0f4f",
".git/objects/b3/908c15a4c9ba3d987f93ab8c1df8c23acad17b": "b8a1978995764a04862383d7479f8e0f",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/3c5f711d197b2c457e2a3b4a5d447f2fb849ce": "c58bf01632ffb708653eebc8f5f2c330",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/f4/f6e2a92bcb06cc837cfd23b4e7b6f2902bc56b": "cac92b1cb59a250ea206237cf6ed29ae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/cbd2c836cb2374f388e7edf09bab88fb3472ef": "8635f3fcb1820bfc18baa076370f6bc6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fe/bc98226cf274b7a49fc2d67bed0c8195fa9e37": "a45008b90e3206781df3e538190bc26b",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/c6/6a1c17660ae161c775ef4de9ed8bebc2d41ab3": "fa58dfede2a10e084cc993fa1a1d3e98",
".git/objects/4e/5e2ac549d37303f2edcf89759e4f552a7800fe": "005500ca39be6ac3d065f1ea1c8ec1d7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/pack/pack-2efe2a10de84371c57ff3fcb9510f0f5dcd51ece.idx": "263fb28457d0678ed5c95958114d327f",
".git/objects/pack/pack-2efe2a10de84371c57ff3fcb9510f0f5dcd51ece.pack": "508b201d0d5746d75ea755e73112e646",
".git/objects/pack/pack-2efe2a10de84371c57ff3fcb9510f0f5dcd51ece.rev": "ad8371b1cf8e1c13b0b925a0bb3412dc",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/87/6f28dc60ed1e6bfb7c89d9bfed021376a34453": "d4f776a9a2bab3acd29afcf88742187c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/94888f96ccd26208dd2c3bda75041df238c81e": "e9666498e82e42be81bb561e4a326667",
".git/objects/26/94bf8a1292d9951906c505f81c2e08bd949dfc": "0934bb5d3262ccace925ee64b4b5a029",
".git/objects/75/ff6803f12ec91ca2524c5657bda07a50ad4b11": "0bc350be64efe7700f67f87d1ba68f07",
".git/objects/81/54b4c2ef808b650fcde8d45190ec5f6444e4e3": "8d6f0ab3b01f4566489fdec729de599e",
".git/objects/72/e439118d9400a27a95f6aae337f9b2feee7c5a": "d1a602ad7b7619c3d603f06ad7ba2811",
".git/objects/72/05993d84d279d8c339a39fdd3b5407474f29b4": "5a67ca860375fc65d078da78cc3b77c2",
".git/objects/2a/1fd22589c289cbdd0e50d707b02ded3af1e9ba": "54b565cdd32cc386503d44c11cc876fd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/f6144e304b86601cdf9b4da6060c92177fac1a": "ccb3fd702d10e8bf6fc90b3a559c6e0e",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/6e/076a364261c9ec05706cdb2c55fcec8b22615f": "3c6e7af6dbb9f3622faecce1cb738e96",
".git/objects/5c/c03cbaa403b733c5035880cf0f392673f8d8d8": "a39a8cecfcd19c25e537ad8fffe5398f",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/65/07c1bdbda299193ed8b106bbbb8ccd48eed1d0": "263b4ad64187d211fcb86f169c31bf2e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/22354e34cecc2d1e7bc34895d0ceb5021fb76a": "c46b002df279166428bef4ac46591c71",
".git/objects/01/b5941d8bec46349a2449fd1209473138142687": "e00d078854bd975d234a4e96bbdecedd",
".git/objects/06/e341b77ba8dc489d679dd0caacf246858846f7": "7c7a4fb3993d96fc2a4f42bb380f9bea",
".git/objects/6c/2a5c02a1d2afc242c0b7d5d91d7d3e6be48f12": "bd0c9c696c2f6da1de583659c38dd230",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/057c2db5594ea0d9216058f86256ceb2489e38": "6ce4079996ac1570d6da1fa082cf679a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b6/e307cc686e112f58451932bb7f1c99d71e9d21": "b0b673c6edefbbaa4937f9edbc2e05c2",
".git/objects/a9/2f6651959ee2edc6abd827a27d6242288d3f56": "4fd129afb3c79615e58ba0a37c669c48",
".git/objects/a9/2754f4f58bbbb710afd035252af5ebb24d32aa": "fb8d8ba950ab1b7b29bc29e0f9308e18",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/af/c124d884ccbdb2aeb6bbb1b6c4481c8950adbd": "8eda831cc2e7c22ad008d994e001a3dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a425bedaf60d37a7eeb22266e85c6d81923056": "20eb501632f5b0373d584f3397cf5005",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/81e8edcd8606b31d7d2c64f4698c083eabb0a0": "b64b98dbec12da4d30029f88b870ab33",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/ce/9bba09c61dbf4f162b256da1832a94491e152c": "62335216450c565ee122eabc5ef72eb1",
".git/objects/1e/bcf637291a6cf8135e49c0de145438991e6a62": "16daf26574c664bd27b6ea7e81b93d87",
".git/objects/84/5cc2dedad7fedd1e18236397e6f9a055b7942a": "3900df8ac226b279dc4d2461041686d5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/0b4f8a7557b72f8a932e88cb13752ebaff4863": "3bd6f4235af77de37f273cd26ae80e6a",
".git/objects/15/1e21d4dfec0671b64b60794cc145efe29c60ae": "3ca541fc8bc251434e53451f0568d496",
".git/objects/82/6dd37e1e28b9b3b83b2a24aeace39335b0dacf": "df8ad779269a430db1f0ae7052fd13ea",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/40/42762f8169c2606191fb29cb4d74698425fcfa": "4ac0e053f66a5c36cddd5856f40c706f",
".git/objects/2e/2daf7f1040d5cf84002ba1148a232c8d857eb6": "948d289bfecf69f3d5182765fdd9cbdc",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/78/e0e1774471361c102dba05e0fc95662a3d6870": "84bd13710b4b90e2480fdb5b05ea6fdf",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/14/765197692a8bd0de33c0ac4d295d59608716b8": "619349561546b16b542e068dcb8489e3",
".git/objects/22/7dffc1abeca37dbbaa02d18ea676d01dccf9c2": "7c3ae280ba85ec25b57ec32b77a3492b",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "190310c4b7422da597bf0912ed851cac",
".git/logs/refs/heads/master": "9763726ccd639d8386aef367557633b8",
".git/logs/refs/heads/main": "2131ceab95c8604ed076f31bad008521",
".git/logs/refs/remotes/origin/main": "cc6645ec37b687c0d1413c0302451d65",
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
".git/refs/heads/master": "03a036871df3e06ce3d0ee5335422422",
".git/refs/heads/main": "f039a8e4fd675c70db5e22ce76c08e88",
".git/refs/remotes/origin/main": "f039a8e4fd675c70db5e22ce76c08e88",
".git/index": "2a5e65a5803203df8fa88b4a0730c080",
".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/FETCH_HEAD": "5daf6f2c32ab73a8d03e8c9517fdac96",
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
"assets/NOTICES": "6b1a1bbc68cfaa02dfe5a8e963d0c5d1",
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
