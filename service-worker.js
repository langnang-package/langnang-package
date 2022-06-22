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
    "revision": "48b6495f501bfa9fc42f76953971789e"
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
    "url": "assets/js/10.eab5980e.js",
    "revision": "3488de872773fc4e1835979d0d1a185b"
  },
  {
    "url": "assets/js/11.2ae1af5a.js",
    "revision": "c748dfd737037b287ee3c42027a57dde"
  },
  {
    "url": "assets/js/12.c2e1fc97.js",
    "revision": "69ee06cc22f437f3500033aa743be489"
  },
  {
    "url": "assets/js/13.db433612.js",
    "revision": "aea6eeb2a3caad4dbfe3e89be9cfcd7d"
  },
  {
    "url": "assets/js/14.e82ea4c1.js",
    "revision": "e65f5f0f58d994f15035ed3531854e25"
  },
  {
    "url": "assets/js/15.61d94735.js",
    "revision": "398ea37e15ad27bcc452cb4164b07544"
  },
  {
    "url": "assets/js/16.7ea44ec0.js",
    "revision": "e314a757c2041bea7cacdf9f5d5acd82"
  },
  {
    "url": "assets/js/17.f0ec1efe.js",
    "revision": "0f4a34a2498b71709071e36b780d078f"
  },
  {
    "url": "assets/js/18.3b685816.js",
    "revision": "6cf1ffaa90ada8a362566317f684894a"
  },
  {
    "url": "assets/js/19.4bef0f25.js",
    "revision": "603ca06af610dfa54b6a060736e6f858"
  },
  {
    "url": "assets/js/3.bf12b629.js",
    "revision": "3475133131166995d87310381da602a7"
  },
  {
    "url": "assets/js/4.95d619c9.js",
    "revision": "56c674a1e4b10829b3c73a2578ddcffd"
  },
  {
    "url": "assets/js/5.8007a496.js",
    "revision": "f4a8a4d792bf3fd8a842d431679af078"
  },
  {
    "url": "assets/js/6.0525bae1.js",
    "revision": "5171ccd6939dbb0e42677d06149cc335"
  },
  {
    "url": "assets/js/7.f2554bc1.js",
    "revision": "6b66b44f89015a10418c4f92734a0e49"
  },
  {
    "url": "assets/js/8.54144eaf.js",
    "revision": "0dfbf43165c8b39f35a3d2c36aacda5e"
  },
  {
    "url": "assets/js/9.38dcae26.js",
    "revision": "a0b7f7efec660ee722a42a9edc1e8a21"
  },
  {
    "url": "assets/js/app.692dc492.js",
    "revision": "1c20d2ae7eb9fec9454da126e40ceaf1"
  },
  {
    "url": "assets/js/vendors~flowchart.8969c3d6.js",
    "revision": "19726498bbe883bf7ea6fce020eefa96"
  },
  {
    "url": "css/index.html",
    "revision": "66c84d83bf31de0492066b04fc793756"
  },
  {
    "url": "guide/index.html",
    "revision": "ef0c101086cf4570b9b24f2a115583be"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icon/index.html",
    "revision": "abe64cae5c4eff0564ec06e88eb56a17"
  },
  {
    "url": "index.html",
    "revision": "3a934476be8504de5717f3515a5e6588"
  },
  {
    "url": "javascript/index.html",
    "revision": "6248be36360fb6fbf8a0c8c742d9663e"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "php/index.html",
    "revision": "714c491da8daae7431ab425591abd9c0"
  },
  {
    "url": "ui/index.html",
    "revision": "4bf2c673db07fdc563a4b4bd04437ec9"
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
