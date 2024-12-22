'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1fdafb0dc4830ef15363cf363e063aa8",
"version.json": "edf7e1fabe78920e324400463d192bd8",
"index.html": "28af100fd19b011fbaf21816879b7a99",
"/": "28af100fd19b011fbaf21816879b7a99",
"main.dart.js": "c38b072881c309e00050d8a81de00c54",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5d0c90bf902f183d369fd409c202a82f",
".git/config": "8a6993ca57dbcc8816c6f9e3b56a6019",
".git/objects/61/01420faf4ca2913b559690a51eaa717089e782": "00e173aa4395f9fc9de037f8a061545b",
".git/objects/59/68f15a820dbd3eac454158ee4e153c2244a6ff": "510cbd78156afd7a0af1cb36fa822f75",
".git/objects/59/458e7390a9e85b79a28010f8f2c3f34b3c2dac": "07e359f213ec027ec09e7bee6df9916b",
".git/objects/50/3eaf7619ea9642a0dcce3b6d29c1026141d8f2": "fcf8bbc94d5ca17fc0e6bff7889147ad",
".git/objects/03/43aa7d83eee3699c5f905902dfe67227f18ed6": "f58f9b751985f3a00f9741ebcc214c61",
".git/objects/9e/f40000fcdddaf2ee391ac587d13ccf0a5319ba": "64d9b8528c5dabf9979c9c693498035d",
".git/objects/04/135e4f85946b9ec443232f2f4f3b6cb9668176": "98b2f99ef899884d2271661b8ee29f93",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/d9/27b767690679a73204af1a048313f3e366a95d": "75cb488d5e3e199ff133486b1aadfcb4",
".git/objects/ad/0f1cd64733318661e09f75ca992275b1df499f": "2a049de58f3740b35f234ea0620d577c",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/ea6e324499b61b2523843e5eecf243a933e0cc": "9051c1c19b87184f3412ac93920d0f4f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/4e79fb3a0c628153064a1230c6166c6b954c2d": "68ace159ce83a5d0eba2492572e37fac",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0783630b5eb05738132ceb487d039ce0144ed1": "59d7a5ca56fda09c8d275141ed2069c4",
".git/objects/ee/5444ba5de334245300fe499a5965aec7123430": "334041964f44a994ccdf2eeb02e38eec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f90d1a7d3c9d70e8a7d208479a608968a668b9": "6225a042403bc8df785e0c301fe98dbe",
".git/objects/cf/0a3aa6208bdedd186c1c429b515c02c78d6d0d": "b6631306326e74fac4bfde1a03fbdb53",
".git/objects/fe/f52b1e8018d5ac82a11346c785a776c4742d14": "b23fd2a1a243664d87e1687e2c77b37c",
".git/objects/fe/4e23d598f23013e59c59593ce39f6aed77c74d": "bc99ea2237c2f1280a62fb7010aee21d",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/6a1c17660ae161c775ef4de9ed8bebc2d41ab3": "fa58dfede2a10e084cc993fa1a1d3e98",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/5e2ac549d37303f2edcf89759e4f552a7800fe": "005500ca39be6ac3d065f1ea1c8ec1d7",
".git/objects/4e/9b7d9b381a10a9d4be88dbcaf43067cbe0afbe": "2e3cca2f208a69d05cd897ba19887863",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/89/f4812305c76205863c29405324fe9b210eb732": "582e3eb0353562c4f8557a22ac71131e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/6f28dc60ed1e6bfb7c89d9bfed021376a34453": "d4f776a9a2bab3acd29afcf88742187c",
".git/objects/7b/8a4af3c73be0c020fdbe5c51c92798eddc6215": "66aef803324b44dd46f8a2e54f953cc3",
".git/objects/8a/9a8d1f7ba5a6ba251562755e40f23b97993f37": "9a76012480b298779dcc1165988102a2",
".git/objects/8a/1d84d6b60969780deab440359d51ef5599b567": "8902a58183db965d2872108a404d66be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/857770bc68920129c6dd765360e9b806fa6873": "f64a70ab14db1024bdce6aeff0017cea",
".git/objects/4c/c3cddb553381311e47393a3cc5feca838d3267": "a17194f5487c8c375eb791ee18e171c6",
".git/objects/26/94bf8a1292d9951906c505f81c2e08bd949dfc": "0934bb5d3262ccace925ee64b4b5a029",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/21/7d5ea7672fa51af6b86434fb28f56e7177825a": "63d6afe1818f8120c25e1b12db8b981b",
".git/objects/81/54b4c2ef808b650fcde8d45190ec5f6444e4e3": "8d6f0ab3b01f4566489fdec729de599e",
".git/objects/72/e439118d9400a27a95f6aae337f9b2feee7c5a": "d1a602ad7b7619c3d603f06ad7ba2811",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/72/05993d84d279d8c339a39fdd3b5407474f29b4": "5a67ca860375fc65d078da78cc3b77c2",
".git/objects/2a/2cac7325e632d242e7e5a1e70d1d3b439c2395": "da1c18e52ba342ca6dae1c9cf286b97e",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/6e/076a364261c9ec05706cdb2c55fcec8b22615f": "3c6e7af6dbb9f3622faecce1cb738e96",
".git/objects/5c/c03cbaa403b733c5035880cf0f392673f8d8d8": "a39a8cecfcd19c25e537ad8fffe5398f",
".git/objects/09/53f27cc401d7f9e2a32d6e4a6d1f603153c57e": "2ca13c9b4b4c7185a6a031fc5bd081a2",
".git/objects/09/78dedc3bc149fc639e80f490a5d3768200b8d3": "47a899246fe9f7f60219da37902f8527",
".git/objects/65/07c1bdbda299193ed8b106bbbb8ccd48eed1d0": "263b4ad64187d211fcb86f169c31bf2e",
".git/objects/3a/08bb395a5381e1f207e82326752b8ca0fc4af9": "513a48bd0a32ee2a0160f58d401d17aa",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/22354e34cecc2d1e7bc34895d0ceb5021fb76a": "c46b002df279166428bef4ac46591c71",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/879083e34ca8242ae5991221a6e06b79a889cd": "973e1137d5172b7749dd37fd0e448332",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/057c2db5594ea0d9216058f86256ceb2489e38": "6ce4079996ac1570d6da1fa082cf679a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/274200bd471d3cb3ec8e245cc7d2d929f18bb7": "1ee2f9abfb6c408f30356ab8d5974f66",
".git/objects/a9/2754f4f58bbbb710afd035252af5ebb24d32aa": "fb8d8ba950ab1b7b29bc29e0f9308e18",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/2927fb7251df653f1f21d77190d0a79742a9f4": "3b89683c878b617a94aceadddc432f54",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/aa5690185f81da5ad4762789ead65e1ae3f474": "279057a2a4cdc063b4a05f0a5b189155",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f7/5a52d1efe293946111649e171afa60f88f282a": "3675ba6d7e0986fb1100066d6249afaa",
".git/objects/f6/f23bfe970ffe22ab2e64b10b6ae24575915cda": "076d4adec06322b02289ceda5b4dba96",
".git/objects/f1/6b4c34213acd9dbc719b4548786853e6e9503b": "152df85019e8b7b2580c77fc34d7f4ca",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/f8/2553a1979f63a6d5b66b0d5f49f1944baadda8": "4ad775eb8ec8cba813a30527042ef1f1",
".git/objects/ce/9bba09c61dbf4f162b256da1832a94491e152c": "62335216450c565ee122eabc5ef72eb1",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/2c/d07e8e8cdd38efb662eaa4a09817487013a7b1": "35dea4bc17c5f943f505d0d95b13c42d",
".git/objects/79/b41f2a5de151c00231b2b4ba4c41fba9d21f4e": "c1a6c11ff9e986d1451a4d8b6a97f1d0",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/521b06e23ee2c51b15f3d692e3aee3b5a1db66": "5c762d9dcf63c35a562b90bc58216c3c",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/84/5cc2dedad7fedd1e18236397e6f9a055b7942a": "3900df8ac226b279dc4d2461041686d5",
".git/objects/84/9f3abccb89bcf952f0f024dd0b84eb302c7645": "3ee26df7e69e6a2eba890366059368db",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/1e21d4dfec0671b64b60794cc145efe29c60ae": "3ca541fc8bc251434e53451f0568d496",
".git/objects/12/40c8b9f0b2d1c918197f69300c0f3f9ac377f4": "8efe995909d3913ccd039001acdc00a4",
".git/objects/12/3714fa9bf7159753e4452a7329f224f94921d7": "f6ab6289ca0c68a9ac69c5b7d789d0b1",
".git/objects/8c/4196f4ecdeb7892eb78dade18de0956b3033f3": "6e6a4c0a9cd8a06e7a5feb85333c9fe2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/6dd37e1e28b9b3b83b2a24aeace39335b0dacf": "df8ad779269a430db1f0ae7052fd13ea",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/47/86956c013b9b51605ce638eaa6b819e23e60d1": "6abb6c7adfa5a772189cacfc2bfd3545",
".git/objects/7f/e489d68fe67553cbf0cc3de04cb1e9fd484a43": "5e847164e4b8aae57d0d0dd3e105a695",
".git/objects/25/15fc37d007f98caa5b658e726de53c9fe92c43": "f966907f41e22df7a5fe8e140c98fa88",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed3210fe82a0af804a291b0687b52352",
".git/logs/refs/heads/master": "ca98e527414f770bae2f9a8f42e1df87",
".git/logs/refs/heads/main": "82885781a8aaeff51688155faaee960f",
".git/logs/refs/remotes/origin/main": "fba16d75d0d5863b6787d24278ce3fe2",
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
".git/refs/heads/master": "af1117dc1732a68e81eddc19d1013039",
".git/refs/heads/main": "f32515817847c317dbf8884dfe95fba8",
".git/refs/remotes/origin/main": "f32515817847c317dbf8884dfe95fba8",
".git/index": "726a86894fd4759e79cfea1c240dd0c7",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "831fd2322c0c45dc0e7d00af6d2f85e3",
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
"assets/NOTICES": "39d39fb4ea9b5babbe5f92234634332e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "e44b1b2fd49264dc9a5beb8a0e8744b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
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
