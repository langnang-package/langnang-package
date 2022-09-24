/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "43a6f8dd65d4139e7fba788acba2f3ad"
  },
  {
    "url": "assets/css/0.styles.e827cbb8.css",
    "revision": "98296bb2f19be5d090bf52bfa8d33e09"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2fc228b6.js",
    "revision": "be2474062a7d216eae1f0ff5e36f8f96"
  },
  {
    "url": "assets/js/11.773735d5.js",
    "revision": "fd8c17caa14080f7c02ab7b82b86bda0"
  },
  {
    "url": "assets/js/12.df8dfeca.js",
    "revision": "ff071db2b2b7457f4678599e6baa1e95"
  },
  {
    "url": "assets/js/13.82ed1846.js",
    "revision": "595e6d07254da94f61236bc4e8fd0631"
  },
  {
    "url": "assets/js/14.2f074095.js",
    "revision": "ad3c74cdf6ae6d05043c74ad50f09a34"
  },
  {
    "url": "assets/js/15.9e205725.js",
    "revision": "3f11ca9e5a64c14f985b133f9c910c6a"
  },
  {
    "url": "assets/js/16.4cdb85d5.js",
    "revision": "4a409248729de7de56d3c7496974c03c"
  },
  {
    "url": "assets/js/17.3a4aac83.js",
    "revision": "0bfd5682fa57176d9652fca926439ae6"
  },
  {
    "url": "assets/js/18.2fe67a27.js",
    "revision": "fbc0332819e7c0243caa76b4e957458b"
  },
  {
    "url": "assets/js/19.5883a759.js",
    "revision": "1d437934ec63f2c25ba451641d934189"
  },
  {
    "url": "assets/js/20.71a1267d.js",
    "revision": "7bbdd88ca6550db60d18d89d5ee51611"
  },
  {
    "url": "assets/js/21.156dbc7e.js",
    "revision": "525edeb8781790cc4d7d524999da64bf"
  },
  {
    "url": "assets/js/22.0b906339.js",
    "revision": "1b7bcd50ca22eccd1908ff8f6d711ac6"
  },
  {
    "url": "assets/js/23.7ae04cea.js",
    "revision": "c29b8d9d3ce658244c897fd4f1ad9344"
  },
  {
    "url": "assets/js/24.64a2b306.js",
    "revision": "8235539dbb1487539a24e3d7a710dc0c"
  },
  {
    "url": "assets/js/25.ef924e78.js",
    "revision": "0c4ec7f0ffbe8fa46f31a528cc396c52"
  },
  {
    "url": "assets/js/26.678b86cf.js",
    "revision": "cd8d211eb915e28a8b9d46f1482828cd"
  },
  {
    "url": "assets/js/27.64602c3f.js",
    "revision": "c0d6b1b5ab478b19e9013ff70e4a5423"
  },
  {
    "url": "assets/js/28.768f6fea.js",
    "revision": "ae28346dbe52a9c716dca2dffb6c8313"
  },
  {
    "url": "assets/js/29.7e3e45f5.js",
    "revision": "8ae1d8dce7fb90a41171a318c1f1eb2f"
  },
  {
    "url": "assets/js/3.757739a0.js",
    "revision": "3ffe8f1b002e659a20613bbbb5b0eecd"
  },
  {
    "url": "assets/js/30.ab2bfcf7.js",
    "revision": "ad0bcdf26ed2af98e57b743a2857d386"
  },
  {
    "url": "assets/js/31.27abd43c.js",
    "revision": "2e745f9a17c9cdc08ca5b6b6ff583adb"
  },
  {
    "url": "assets/js/32.ff69eba6.js",
    "revision": "9794b4a577ac0b34df99df0fc722c418"
  },
  {
    "url": "assets/js/33.a80a7691.js",
    "revision": "23b8af81627b33d1d1eaae4ef574e0da"
  },
  {
    "url": "assets/js/34.09645332.js",
    "revision": "f48dc1991d97dfc5c711e646cfc50121"
  },
  {
    "url": "assets/js/35.52c20cb1.js",
    "revision": "2e9d82e09adc93c3a2f5aa25c5178e67"
  },
  {
    "url": "assets/js/36.8f611ffc.js",
    "revision": "6b5d0bdf2ce2702179e02c92be40228d"
  },
  {
    "url": "assets/js/37.cb30c69c.js",
    "revision": "cdf728daa694fc7812092d3466e6fd87"
  },
  {
    "url": "assets/js/38.0df591fb.js",
    "revision": "9676acd684b57750dd7825fc99ffdb00"
  },
  {
    "url": "assets/js/39.a5dbc63c.js",
    "revision": "14d7d8423a9b0e5665d19aa5dbdbcd7a"
  },
  {
    "url": "assets/js/4.8f293769.js",
    "revision": "2425e08415d09904a06b1ca8e6d5e8f6"
  },
  {
    "url": "assets/js/40.80a18558.js",
    "revision": "c93093b3fa7f2f8224ce01f5bbd51141"
  },
  {
    "url": "assets/js/41.547ceb85.js",
    "revision": "31994cce00b10a54bc6bf74c90253f7e"
  },
  {
    "url": "assets/js/42.98735f52.js",
    "revision": "e6f032fcdadd44e7c8940c39a72c4b2e"
  },
  {
    "url": "assets/js/43.1b74793a.js",
    "revision": "db13519df9cfca8e17d7579667b8f91f"
  },
  {
    "url": "assets/js/44.3e547268.js",
    "revision": "b04406f4a73f7b60c7d61a67b7530cba"
  },
  {
    "url": "assets/js/45.c4774cbd.js",
    "revision": "0b86d0fbf6ff8072b1090ddefc925edc"
  },
  {
    "url": "assets/js/46.49714295.js",
    "revision": "a85843a13458eff39b41bcb3ff89aa5e"
  },
  {
    "url": "assets/js/47.01f8b0a8.js",
    "revision": "0b07bc1272ade90c92a05e5e299a40b2"
  },
  {
    "url": "assets/js/48.7d6f7eb6.js",
    "revision": "0ba373ae6cd08f295b97549569ec5416"
  },
  {
    "url": "assets/js/49.e840c9c1.js",
    "revision": "066cdd5e503ccebb38f011b827e719a4"
  },
  {
    "url": "assets/js/5.8fa841d7.js",
    "revision": "25c3a9248a0412586f1812a3abe42448"
  },
  {
    "url": "assets/js/50.7e3f7ce1.js",
    "revision": "20d8d66c8ae33ea86e8b6fe1be55df71"
  },
  {
    "url": "assets/js/51.00a251eb.js",
    "revision": "80e49693f982a1b54e36a5a4ffde273f"
  },
  {
    "url": "assets/js/52.f11acc60.js",
    "revision": "320cec312cb30a486f43181a9fce30d9"
  },
  {
    "url": "assets/js/53.0e9f740d.js",
    "revision": "299289c50689adf7d37936e88e239ae2"
  },
  {
    "url": "assets/js/54.4a7f5e09.js",
    "revision": "db1a1c3f7dcd62cf9e04be762743f5c9"
  },
  {
    "url": "assets/js/55.6a8fafad.js",
    "revision": "b866a81999042feb8196d04ebf245546"
  },
  {
    "url": "assets/js/56.1a7d2f0f.js",
    "revision": "a70d6053a4243976507c9aa95a6233db"
  },
  {
    "url": "assets/js/57.44754711.js",
    "revision": "a30b908cc4a34f1fc605796cd573ae20"
  },
  {
    "url": "assets/js/58.2d4211f5.js",
    "revision": "d7bef493d5fae783f3ba12ddc9b22708"
  },
  {
    "url": "assets/js/59.a0b663ee.js",
    "revision": "0b98537d930dd76aba44f892507d85ef"
  },
  {
    "url": "assets/js/6.657b6e84.js",
    "revision": "b87e9004cbaac2c52336c0aac4b79523"
  },
  {
    "url": "assets/js/60.027c8654.js",
    "revision": "c01f327138c38bb852d65940938cd6ed"
  },
  {
    "url": "assets/js/61.cd287bde.js",
    "revision": "625ac56ffae6ee126677bb3c2c56998d"
  },
  {
    "url": "assets/js/62.4e8e923c.js",
    "revision": "10e970b07e6e7cf0862c26d12efdcc08"
  },
  {
    "url": "assets/js/63.e4189b32.js",
    "revision": "63a5359af50f801794cd2f175a5eee97"
  },
  {
    "url": "assets/js/64.452ff081.js",
    "revision": "f6482c75cddf39f6f23c35a41681a010"
  },
  {
    "url": "assets/js/65.b6e28ecc.js",
    "revision": "0d9c0da943d1d5c56ef7bcfcd55da201"
  },
  {
    "url": "assets/js/66.cd47256f.js",
    "revision": "a137b3b9634d1a8eb662ba996f168bd3"
  },
  {
    "url": "assets/js/67.a805697d.js",
    "revision": "2a763d10d2cd94097216bd5c8b6ab9ca"
  },
  {
    "url": "assets/js/68.03e956d0.js",
    "revision": "fe7637f1e8cc907a944041a5b6c43fe8"
  },
  {
    "url": "assets/js/69.5039d2ea.js",
    "revision": "28e576d6230508bc216b2baab14af5c4"
  },
  {
    "url": "assets/js/7.e07399ed.js",
    "revision": "595f4230835a6b7310fb8e5796eaebee"
  },
  {
    "url": "assets/js/70.05266216.js",
    "revision": "41dbf1416f9dccdd006cfe9daecf8d73"
  },
  {
    "url": "assets/js/71.0a491ee9.js",
    "revision": "01817d4f5cc5b45bd18083d4c7c37707"
  },
  {
    "url": "assets/js/72.2e44a8c3.js",
    "revision": "9f8ba5c72b223d18fe13a5234f5a37be"
  },
  {
    "url": "assets/js/73.07e57074.js",
    "revision": "eabc37d9f8c91cef9376ed58fc7095f4"
  },
  {
    "url": "assets/js/74.78e0cc1a.js",
    "revision": "710de4cb5c1f1c2b15d1e5c7008c7ea9"
  },
  {
    "url": "assets/js/8.188bca0a.js",
    "revision": "461119394f09b9fafac322410b097bad"
  },
  {
    "url": "assets/js/9.ccbca563.js",
    "revision": "31d31399150ba8bab98b80a0b34d3f70"
  },
  {
    "url": "assets/js/app.d8e54a48.js",
    "revision": "3702f5bd63442693190587474b37bf4d"
  },
  {
    "url": "assets/js/vendors~flowchart.ae19101f.js",
    "revision": "aed116167383554e8a94fa9e7a2de0ae"
  },
  {
    "url": "css/index.html",
    "revision": "0fb43151b1e9343ad5f26cd800fb7a50"
  },
  {
    "url": "function/index.html",
    "revision": "0dbf913dfbe3eca763fbf1f1ffd129fb"
  },
  {
    "url": "guide/index.html",
    "revision": "28243bea1db2284d335bad4775b73517"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icon/index.html",
    "revision": "a78dadf923e4897874dc075684bf4c40"
  },
  {
    "url": "index.html",
    "revision": "7e94a3907ff9bb1ca146a309a688fed8"
  },
  {
    "url": "javascript/index.html",
    "revision": "8c5eb93662a065f280ba00baaaa42e76"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "php/index.html",
    "revision": "85fe91e41d9b004e9c25ec1c7a8623d7"
  },
  {
    "url": "ui/index.html",
    "revision": "2650995123af46964de043639ec34545"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
