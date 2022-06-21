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
    "revision": "5009183a6801c8f26e0a50825424e4e2"
  },
  {
    "url": "assets/css/0.styles.ea3d12ae.css",
    "revision": "7f1213754f3c634a42c18e0e6df8b5d2"
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
    "url": "assets/js/10.66331258.js",
    "revision": "0ec8884b3cd377c5e53dab4406f7f9e0"
  },
  {
    "url": "assets/js/11.2ae1af5a.js",
    "revision": "c748dfd737037b287ee3c42027a57dde"
  },
  {
    "url": "assets/js/12.c3131e3b.js",
    "revision": "f7fd1bf925b4701c632c2267313b3b60"
  },
  {
    "url": "assets/js/13.ead17eeb.js",
    "revision": "083a768f39f44578504d8b8869abd3ef"
  },
  {
    "url": "assets/js/14.3321dac6.js",
    "revision": "c05a413c80b66832e1f6860f34cb617e"
  },
  {
    "url": "assets/js/15.143f4add.js",
    "revision": "d064dbee79db39e8e47daf47bb58c670"
  },
  {
    "url": "assets/js/16.a38b4d29.js",
    "revision": "42c0ab21c078c3814ee6bbf0c77e3ea9"
  },
  {
    "url": "assets/js/17.ef8b02d6.js",
    "revision": "40686067ca743c6629bdd781620bf845"
  },
  {
    "url": "assets/js/18.57f12a47.js",
    "revision": "61ebd807394795e3225629c7086e7f54"
  },
  {
    "url": "assets/js/3.bf12b629.js",
    "revision": "3475133131166995d87310381da602a7"
  },
  {
    "url": "assets/js/4.d4fbbfd5.js",
    "revision": "b79aaf1302e8896eaecfe75d5aec78ae"
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
    "url": "assets/js/app.c765ff14.js",
    "revision": "2994bc7a7ad833ae229d3db0ae9323a0"
  },
  {
    "url": "assets/js/vendors~flowchart.8969c3d6.js",
    "revision": "19726498bbe883bf7ea6fce020eefa96"
  },
  {
    "url": "css/index.html",
    "revision": "ef13f601807844d53d52c01a52c9ba87"
  },
  {
    "url": "guide/index.html",
    "revision": "fc4c8ff59f39079b0ca705f31b19625a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icon/index.html",
    "revision": "7c9a44bf058fa472ecb962a80e1c7d71"
  },
  {
    "url": "index.html",
    "revision": "2e853f5ba5d55b2a0910b5cbb81bbfeb"
  },
  {
    "url": "javascript/index.html",
    "revision": "d008cf504c58d6091e4fdaeacb208398"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "php/index.html",
    "revision": "795f1f472dc911e298e5009607441954"
  },
  {
    "url": "ui/index.html",
    "revision": "6c37f5d181a46f24997906dba47e2070"
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
