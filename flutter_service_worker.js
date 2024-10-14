'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"index.html": "556ccb9dc6152831a29ceb97cf28a0d2",
"/": "556ccb9dc6152831a29ceb97cf28a0d2",
"version.json": "f1b56ff9ea17ae46138d2cc702e9ac76",
"main.dart.js": "0342fddedc5d38873ffca5ad9f1e2c7f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cbc6d6c4c5797ead699df516133e791a",
"assets/AssetManifest.bin.json": "79f207408f7c6cf8e626e99c2d9f3e9a",
"assets/NOTICES": "408dbc97f5529fde6a8999dea89f6fa0",
"assets/AssetManifest.json": "ea745cfff6e3962378070e08f3edb4dc",
"assets/assets/temp_buttons/player_hover.png": "17c938f4761035274d473bc75e6345a7",
"assets/assets/temp_buttons/either_pair_hover.png": "74b3dad2f0079b2460c48286c5dd0e04",
"assets/assets/temp_buttons/lucky.png": "1712e09473b09c69601035559a66dbad",
"assets/assets/temp_buttons/either_pair.png": "e3dcbb5af3ff4fb27e3d2275acab4586",
"assets/assets/temp_buttons/banker_pair.png": "1ee554e3a369f5656728bc0137096205",
"assets/assets/temp_buttons/lucky_hover.png": "125f2e31cfe073cf1664781c6633dbd6",
"assets/assets/temp_buttons/banker_hover.png": "2315299fdcb8f02400bae1689550fb2a",
"assets/assets/temp_buttons/banker_pair_hover.png": "d91ec13780018823fe9d97e9bcbc1498",
"assets/assets/temp_buttons/tie_hover.png": "eb79017e8d695369ce81a7f49b2fd19b",
"assets/assets/temp_buttons/perfect_pair_hover.png": "0fa4c38f139dbd3b955928335cbe0701",
"assets/assets/temp_buttons/player.png": "ff3007d5e9e366538b6788a556df09a3",
"assets/assets/temp_buttons/player_pair_hover.png": "d3ed841def6c810009a3cc3fc61fbd7b",
"assets/assets/temp_buttons/banker.png": "708694318f4df345d9819340fd71b31b",
"assets/assets/temp_buttons/tie.png": "873571e12240051dede580f3a6d80818",
"assets/assets/temp_buttons/player_pair.png": "eab23f4198de3c5f9933acc75a68755f",
"assets/assets/temp_buttons/perfect_pair.png": "99b59ce2d7a56799719321ef0aede26a",
"assets/assets/game_item/dealer_name.png": "e605fc733fb619812211906695f5061e",
"assets/assets/game_item/start_game.png": "9e2ac8ae56a132e7add9d43c8c98de49",
"assets/assets/game_item/status/timeOK.png": "9b7c4e05a014b71c2419e01e8177d45d",
"assets/assets/game_item/status/shuffling.png": "4be255f0492035d07dae62817c22da24",
"assets/assets/game_item/status/timeLow.png": "d8c54cb158f0de748230df369f44ebb7",
"assets/assets/game_item/status/dealing_card.png": "99ef8ddbc49f6f24d8f663a4a771d079",
"assets/assets/game_item/dice_faces/dice_5_3d.png": "f7deab128b4d108d7d25ff34b96b1d2a",
"assets/assets/game_item/dice_faces/dice_6_2d.png": "8c7bbee3d906390a474247105da9bb39",
"assets/assets/game_item/dice_faces/dice_3_2d.png": "f99ea3300e917ecaf19ed314329b175f",
"assets/assets/game_item/dice_faces/dice_4_3d.png": "e11ae7f1c1f44dbdb433476b5dc1950d",
"assets/assets/game_item/dice_faces/dice_2_3d.png": "f9eba0d6d89c95dfc15d4c8f43363f5e",
"assets/assets/game_item/dice_faces/dice_1_2d.png": "313790ad7afb37d0ad740706909f8df6",
"assets/assets/game_item/dice_faces/dice_5_background.png": "756afa8f4c73d8f59ece53ed97c9d467",
"assets/assets/game_item/dice_faces/dice_6_background.png": "9ee833b94a313df352567a0d05178eda",
"assets/assets/game_item/dice_faces/dice_6_3d.png": "42f146b77fd158da86fd627114f6aca0",
"assets/assets/game_item/dice_faces/dice_1_3d.png": "c13ca24ef6894dd08c35dd2af4f20f87",
"assets/assets/game_item/dice_faces/dice_3_background.png": "52af5106d754e065db576f31390df077",
"assets/assets/game_item/dice_faces/dice_4_2d.png": "df1e9ec3d61835d0e058e9482d9f27cd",
"assets/assets/game_item/dice_faces/dice_2_background.png": "974670ef96c822904637567240df49a2",
"assets/assets/game_item/dice_faces/dice_1_background.png": "851ed553116c40c0caa73f99c99ee06c",
"assets/assets/game_item/dice_faces/dice_5_2d.png": "0a91f80e40cf12b7c414b260adc842f9",
"assets/assets/game_item/dice_faces/dice_2_2d.png": "8bd30f51c801e7faf23d89d1a9b5f92c",
"assets/assets/game_item/dice_faces/dice_3_3d.png": "b28dbaf5d5c0235f9da29d6b50be3a3d",
"assets/assets/game_item/dice_faces/dice_4_background.png": "2ebd40e09b302d43debd166cc776a60d",
"assets/assets/game_item/bet_limit.png": "1ac5c2b728016339c5ddd60840e3b709",
"assets/assets/game_navigation_bar/wifi_good.png": "8486cb9a112b2ecbd016796145ff94d7",
"assets/assets/game_navigation_bar/menu_mobile.png": "7cb1baa864a13e138a733c30223dedb4",
"assets/assets/game_navigation_bar/menu.png": "8898e3e4d08de4cce0e5baaec53c6e19",
"assets/assets/game_navigation_bar/wifi_ok_mobile.png": "e1b44e850e802eef0f0e2629cce1cb43",
"assets/assets/game_navigation_bar/wifi_good_mobile.png": "8ab44482a3f623b833f74f943538eb69",
"assets/assets/game_navigation_bar/lobby.png": "071ac604999d91291933a0a66d7a24d4",
"assets/assets/game_navigation_bar/wifi_ok.png": "6d94f5cb45a61a378eb1fa7a67c06dec",
"assets/assets/game_navigation_bar/wifi_bad.png": "b7788f09c90ee08f1362f8a2fdb956fd",
"assets/assets/game_navigation_bar/wifi_bad_mobile.png": "3e3ac6a68b7a3fed03b4f58953c3399d",
"assets/assets/game_navigation_bar/lobby_mobile.png": "305d1c2b96fc62a74b83dc00c8674d8c",
"assets/assets/game_page/void.png": "544cbcc651945489d74054266298cfa6",
"assets/assets/game_page/bet_info.png": "0fbef22cf84b8ae34dc27acf6afc8115",
"assets/assets/game_page/void_mobile.png": "bb1f9e55706eb8e8361e307e6a8e91de",
"assets/assets/game_page/status_default.png": "e5d0f434b22c44d184324c91d66d0b38",
"assets/assets/game_page/double.png": "fc388239fa7aaa43a8b35e60d010d18a",
"assets/assets/game_page/rebet_mobile.png": "4ca00dd5f77ae789f6479c66b4ec88a1",
"assets/assets/game_page/cancel_mobile.png": "be6a5213e8f255423903be1ab351de4a",
"assets/assets/game_page/user_info.png": "f77f0f95cf1fec9412ec8df43ed4b8a0",
"assets/assets/game_page/chip_set.png": "973ff0f43bbf5a7b9a54ae48bcdc3b5a",
"assets/assets/game_page/rebet.png": "5ebece4611537719d6898b7744b30e67",
"assets/assets/game_page/chip_set_mobile.png": "6187be6d6e31c73aca829092572f0066",
"assets/assets/game_page/cancel.png": "9a1f65e4eb0c277b5b5c705dffe4e109",
"assets/assets/game_page/double_mobile.png": "d61aedcb4d020dfa320e5ae8602d6d90",
"assets/assets/chips/chip_5000000_3d.png": "8622359d38a55528d0b19304050b6123",
"assets/assets/chips/chip_2000_3d.png": "78ba2233da51854aaadf6534bf66f799",
"assets/assets/chips/chip_200000_3d.png": "ff0fa2551549701f06250e64d644c19a",
"assets/assets/chips/chip_20_3d.png": "0b3a4674d46079c73cee65679b352305",
"assets/assets/chips/chip_100_3d.png": "63904a46b0cae0ffe9d06e24109a821a",
"assets/assets/chips/chip_500_3d.png": "ffec6f10935c6583765650a1f0930d6a",
"assets/assets/chips/chip_10000_3d.png": "6ea91f4178d5a0fb93d5a9561b68f145",
"assets/assets/chips/chip_5_3d.png": "59484f8d40e4269976ec8260b6a55e98",
"assets/assets/chips/chip_2000000_3d.png": "b059d8fb60d1b5c1d56743d2fe4604d0",
"assets/assets/chips/chip_500000_3d.png": "74b235c7e485564775a0aa408d38840c",
"assets/assets/chips/chip_10000000_3d.png": "5d98476891fb0fca2c1096e7bde41574",
"assets/assets/chips/chip_1_3d.png": "8dce5c16ba01096c6bafb469a5699cfe",
"assets/assets/chips/chip_0.5_3d.png": "11451837c0a72794c49281efe6b65ea0",
"assets/assets/chips/chip_100000_3d.png": "a7c1a7fe51b97ba8d4b7b94087d8ee8a",
"assets/assets/chips/chip_10_3d.png": "30b03f745d6e138597fa79455cc57c42",
"assets/assets/chips/chip_200_3d.png": "1872c1ed536d7a153c87620daa72319b",
"assets/assets/chips/chip_deselected.png": "2ba66fafa4586b1962638171c96d5da6",
"assets/assets/chips/chip_30000_3d.png": "e88324424b7be77c82fb505cf709585e",
"assets/assets/chips/chip_5000_3d.png": "8df339003edc7bfb8581ad266594ea06",
"assets/assets/chips/chip_25_3d.png": "53558c3198447216cbcf4d03c1fabdd0",
"assets/assets/chips/chip_1000000_3d.png": "ba6c26afdc67d60477b9cab5d1da539c",
"assets/assets/chips/chip_20000_3d.png": "bbbaae7140240ce6652deec9a2dc98a9",
"assets/assets/chips/chip_1000_3d.png": "24aaebd91e295144b571d30bfb1bcf3d",
"assets/assets/chips/chip_selected_3d.png": "f7e533eacd1ac0f644d0f14d897de97e",
"assets/assets/chips/chip_50_3d.png": "a29d142af54dc5277ff48ac054495e8e",
"assets/assets/chips/chip_50000_3d.png": "ab787505a1353f54e11fc88bbc355b87",
"assets/assets/lobby_navigation_bar/game_navigation/baccarat.png": "42dd23f53d1097b4ae7c970a89f8959f",
"assets/assets/lobby_navigation_bar/game_navigation/dragon_tiger.png": "3abe22d319c62c94f8f3c6b88ee8408f",
"assets/assets/lobby_navigation_bar/game_navigation/multi_table.png": "0827bb974691dc93efdbe0042ebdcd3b",
"assets/assets/lobby_navigation_bar/game_navigation/color_disc.png": "f8462866e213d7fe3f9ca3387cae3f67",
"assets/assets/lobby_navigation_bar/game_navigation/roulette.png": "6eeef573c10a7adf8a0500c3a4ae873e",
"assets/assets/lobby_navigation_bar/game_navigation/sicbo.png": "af22233b4780d456c1a1b42d9e0392af",
"assets/assets/lobby_navigation_bar/logo.png": "7052796986d042be464abb2c0b2abf52",
"assets/assets/lobby_navigation_bar/next_arrow.png": "579e705417913f1989ee0af59c7143a9",
"assets/assets/lobby_navigation_bar/notice_history.png": "3ea60242c986cc009f49e4ff2b7f1cc7",
"assets/assets/lobby_navigation_bar/user_data_background.png": "6d74363b415e0cec51adfed9064df4b8",
"assets/assets/lobby_navigation_bar/user_id.png": "be803058b6cb8ca611359a43755abe57",
"assets/assets/lobby_navigation_bar/top_background.png": "4b93259ed53d18782ebcbe878fd6e4bf",
"assets/assets/lobby_navigation_bar/game_type_holder_mobile.png": "c578d4d84d776903395e0d9bb0cf08df",
"assets/assets/lobby_navigation_bar/game_type_holder_desktop_tablet.png": "a83233ded1b631845d4c6989a24972d9",
"assets/assets/lobby_navigation_bar/previous_arrow.png": "49bd460a8cbd8c34b5610dc4a5d155c5",
"assets/assets/lobby_navigation_bar/menu/bet_history.png": "2a6ceed8ddbf5cc30db55d671b038bf7",
"assets/assets/lobby_navigation_bar/menu/exit.png": "36141976134cbcf1ebb211d5f7516e2c",
"assets/assets/lobby_navigation_bar/menu/language.png": "e9dff3da819bd625ece9716a260be16d",
"assets/assets/lobby_navigation_bar/menu/menu.png": "8898e3e4d08de4cce0e5baaec53c6e19",
"assets/assets/lobby_navigation_bar/menu/enter_full_screen.png": "08d8b54beb610324ea40484cd0d8207f",
"assets/assets/lobby_navigation_bar/menu/change_password.png": "84d42f8a96bba364a426a60e552f94cf",
"assets/assets/lobby_navigation_bar/menu/exit_full_screen.png": "b0495b79ac86d60bccc0e4c0e77f4195",
"assets/assets/lobby_navigation_bar/menu/settings.png": "2f7c6462e6cac6a68cfb73f041c6b18d",
"assets/assets/lobby_navigation_bar/menu/sound_setting.png": "6eb2605624d1e64843d10bfdfe30474f",
"assets/assets/lobby_navigation_bar/credit.png": "da42fc3c42a4dbf208050bd5cae501da",
"assets/assets/lobby_navigation_bar/popups/casino_icon.png": "36033bdd778efa228c0cd56e759be365",
"assets/assets/lobby_navigation_bar/popups/sfx_icon.png": "891048926ac53ec568c13abd1aeebeae",
"assets/assets/lobby_navigation_bar/popups/bgm_icon.png": "cef9a35a79392f2183f82bfa191cd030",
"assets/assets/lobby_navigation_bar/popups/close.png": "6fe93caaf6d37ac071e7294ce397aef1",
"assets/assets/lobby_navigation_bar/popups/language_option.png": "0e37c6d20546f1fc31b0860fde721099",
"assets/assets/lobby_navigation_bar/popups/refresh.png": "623fffa65ab1c24db922b76a88c368af",
"assets/assets/lobby_navigation_bar/popups/sound_toggle.png": "12614391a90fc53da544492da3c2b746",
"assets/assets/lobby_navigation_bar/notice.png": "8b1879afa6619467216798a48267f69d",
"assets/assets/background.png": "889cf3870880f696ceca64be3fc7f3ad",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flv_player.html": "823ca9118427af14f9c8fa5743f4831f",
"flutter_bootstrap.js": "c16b272152997f328e24d72d962e5f1b"};
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
