!function(){"use strict";const e=1643130267477,s=`cache${e}`,t=["/client/client.f97c7779.js","/client/inject_styles.803b7e80.js","/client/index.d8b478a6.js","/client/address.9fd9fc9e.js","/client/roadmap.9ba80ad3.js","/client/about.f5e97a2c.js"].concat(["/service-worker-index.html","/CNAME","/browserconfig.xml","/favicon.ico","/icons/android-chrome-192x192.png","/icons/android-chrome-512x512.png","/icons/apple-touch-icon.png","/icons/favicon-16x16.png","/icons/favicon-32x32.png","/icons/mstile-150x150.png","/images/algo-logo.svg","/images/apps-logo.png","/images/bg-noise.jpg","/images/frame-bottom.png","/images/frame-sides.png","/images/frame-top.png","/images/hand-left.png","/images/hand-right.png","/images/myalgo-logo.png","/images/noise.png","/images/walletconnect-logo.svg","/ipfs/bafybeiaogjqgmdtxn6nw5ncc2ykhqxqbqbjg2557vl4chuffstuvqhklg4.jpeg","/ipfs/bafybeib5gum4trjkhztrskouing23swtk64ozr46uzw3sunfevxan4xuoi.jpeg","/ipfs/bafybeib5sjgkoub25iqqs2wxwu77tkoi7rda6oeye3gtcgpeeonhadnay4.jpeg","/ipfs/bafybeifj5fhnldvru62ao6r6hetrtavnzo3zrvnxmwmwpu6ualdafaie6e.jpeg","/ipfs/bafybeifvgi5ch2dtv5g5obnwrr6hlzewxbb4wtvnkh6gmwsrirv3c2seoe.jpeg","/ipfs/bafybeihqwvrmjspod3maflvjvo4qc6kjypmocquijd7lm5kmk5jfezkofi.jpeg","/manifest.json","/mstile-150x150.png","/safari-pinned-tab.svg","/scripts/algosdk.1.13.0-beta.2.min.js","/scripts/algosdk.min.js","/scripts/myalgo.min.js","/share/apps-twitter-share.jpg"]),a=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==s&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const t=new URL(s.request.url),n=t.protocol.startsWith("http"),i=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&a.has(t.pathname),c="only-if-cached"===s.request.cache&&!o;!n||i||c||s.respondWith((async()=>o&&await caches.match(s.request)||async function(s){const t=await caches.open(`offline${e}`);try{const e=await fetch(s);return t.put(s,e.clone()),e}catch(e){const a=await t.match(s);if(a)return a;throw e}}(s.request))())}))}();
