import{S as s,i as t,s as e,e as n,c as a,a as l,d as r,b as c,f as o,g as f,u as i,o as u,h as m,t as h,j as $,k as g,l as p,m as d,n as v,p as w,q as E,r as P,v as b,w as A,x as G,y as x,z as L,A as N,B as I,C as y,D as j,E as C,F as k,G as q,H as D,L as H}from"./client.4e5e61f4.js";import{N as M}from"./NftThumbnail.c451a0c2.js";function S(s,t,e){const n=s.slice();return n[1]=t[e],n}function U(s){let t,e,g=[],p=new Map,d=s[0];const v=s=>s[1].index;for(let t=0;t<d.length;t+=1){let e=S(s,d,t),n=v(e);p.set(n,g[t]=V(n,e))}return{c(){t=n("ul");for(let s=0;s<g.length;s+=1)g[s].c();this.h()},l(s){t=a(s,"UL",{class:!0});var e=l(t);for(let s=0;s<g.length;s+=1)g[s].l(e);e.forEach(r),this.h()},h(){c(t,"class","svelte-up5e3c")},m(s,n){o(s,t,n);for(let s=0;s<g.length;s+=1)g[s].m(t,null);e=!0},p(s,e){1&e&&(d=s[0],f(),g=i(g,e,v,1,s,d,p,t,u,V,null,S),m())},i(s){if(!e){for(let s=0;s<d.length;s+=1)h(g[s]);e=!0}},o(s){for(let s=0;s<g.length;s+=1)$(g[s]);e=!1},d(s){s&&r(t);for(let s=0;s<g.length;s+=1)g[s].d()}}}function V(s,t){let e,c,f,i;return c=new M({props:{nft:t[1]}}),{key:s,first:null,c(){e=n("li"),p(c.$$.fragment),f=d(),this.h()},l(s){e=a(s,"LI",{});var t=l(e);v(c.$$.fragment,t),f=w(t),t.forEach(r),this.h()},h(){this.first=e},m(s,t){o(s,e,t),E(c,e,null),P(e,f),i=!0},p(s,e){t=s;const n={};1&e&&(n.nft=t[1]),c.$set(n)},i(s){i||(h(c.$$.fragment,s),i=!0)},o(s){$(c.$$.fragment,s),i=!1},d(s){s&&r(e),b(c)}}}function z(s){let t,e,n=s[0].length&&U(s);return{c(){n&&n.c(),t=g()},l(s){n&&n.l(s),t=g()},m(s,a){n&&n.m(s,a),o(s,t,a),e=!0},p(s,[e]){s[0].length?n?(n.p(s,e),1&e&&h(n,1)):(n=U(s),n.c(),h(n,1),n.m(t.parentNode,t)):n&&(f(),$(n,1,1,(()=>{n=null})),m())},i(s){e||(h(n),e=!0)},o(s){$(n),e=!1},d(s){n&&n.d(s),s&&r(t)}}}function B(s,t,e){let{nfts:n=[]}=t;return s.$$set=s=>{"nfts"in s&&e(0,n=s.nfts)},[n]}class F extends s{constructor(s){super(),t(this,s,B,z,e,{nfts:0})}}function T(s){let t,e,f,i,u,m,h,$,g;return{c(){t=n("nav"),e=n("ul"),f=n("li"),i=n("a"),u=A("99 APPs"),m=d(),h=n("li"),$=n("a"),g=A("Collabs"),this.h()},l(s){t=a(s,"NAV",{});var n=l(t);e=a(n,"UL",{class:!0});var c=l(e);f=a(c,"LI",{class:!0});var o=l(f);i=a(o,"A",{href:!0,class:!0});var p=l(i);u=G(p,"99 APPs"),p.forEach(r),o.forEach(r),m=w(c),h=a(c,"LI",{class:!0});var d=l(h);$=a(d,"A",{href:!0,class:!0});var v=l($);g=G(v,"Collabs"),v.forEach(r),d.forEach(r),c.forEach(r),n.forEach(r),this.h()},h(){c(i,"href",x({nfts:"99"})),c(i,"class","svelte-ml8amu"),L(i,"active","99"===s[0]),c(f,"class","svelte-ml8amu"),c($,"href",x({nfts:"collabs"})),c($,"class","svelte-ml8amu"),L($,"active","collabs"===s[0]),c(h,"class","svelte-ml8amu"),c(e,"class","svelte-ml8amu")},m(s,n){o(s,t,n),P(t,e),P(e,f),P(f,i),P(i,u),P(e,m),P(e,h),P(h,$),P($,g)},p(s,[t]){1&t&&L(i,"active","99"===s[0]),1&t&&L($,"active","collabs"===s[0])},i:N,o:N,d(s){s&&r(t)}}}function J(s,t,e){let n,{currentGrid:a="99"}=t;const{page:l}=I();return y(s,l,(s=>e(2,n=s))),s.$$set=s=>{"currentGrid"in s&&e(0,a=s.currentGrid)},s.$$.update=()=>{4&s.$$.dirty&&e(0,a=n.query.nfts||"99")},[a,l,n]}class K extends s{constructor(s){super(),t(this,s,J,T,e,{currentGrid:0})}}function O(s){let t,e,n,a,l,c,i;function u(t){s[2](t)}let P={};void 0!==s[0]&&(P.currentGrid=s[0]),t=new K({props:P}),k.push((()=>q(t,"currentGrid",u)));const A=[W,R],G=[];function x(s,t){return"99"===s[0]?0:"collabs"===s[0]?1:-1}return~(a=x(s))&&(l=G[a]=A[a](s)),{c(){p(t.$$.fragment),n=d(),l&&l.c(),c=g()},l(s){v(t.$$.fragment,s),n=w(s),l&&l.l(s),c=g()},m(s,e){E(t,s,e),o(s,n,e),~a&&G[a].m(s,e),o(s,c,e),i=!0},p(s,n){const r={};!e&&1&n&&(e=!0,r.currentGrid=s[0],D((()=>e=!1))),t.$set(r);let o=a;a=x(s),a===o?~a&&G[a].p(s,n):(l&&(f(),$(G[o],1,1,(()=>{G[o]=null})),m()),~a?(l=G[a],l?l.p(s,n):(l=G[a]=A[a](s),l.c()),h(l,1),l.m(c.parentNode,c)):l=null)},i(s){i||(h(t.$$.fragment,s),h(l),i=!0)},o(s){$(t.$$.fragment,s),$(l),i=!1},d(s){b(t,s),s&&r(n),~a&&G[a].d(s),s&&r(c)}}}function Q(s){let t,e;return t=new H({}),{c(){p(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,n){E(t,s,n),e=!0},p:N,i(s){e||(h(t.$$.fragment,s),e=!0)},o(s){$(t.$$.fragment,s),e=!1},d(s){b(t,s)}}}function R(s){let t,e;return t=new F({props:{nfts:C.collabs}}),{c(){p(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,n){E(t,s,n),e=!0},p:N,i(s){e||(h(t.$$.fragment,s),e=!0)},o(s){$(t.$$.fragment,s),e=!1},d(s){b(t,s)}}}function W(s){let t,e;return t=new F({props:{nfts:C.gen1}}),{c(){p(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,n){E(t,s,n),e=!0},p:N,i(s){e||(h(t.$$.fragment,s),e=!0)},o(s){$(t.$$.fragment,s),e=!1},d(s){b(t,s)}}}function X(s){let t,e,i,u,g,p,v,E,b,x,L;const N=[Q,O],I=[];function y(s,t){return s[1]&&s[1].loading?0:1}return b=y(s),x=I[b]=N[b](s),{c(){t=n("div"),e=n("h1"),i=n("img"),g=d(),p=n("span"),v=A("Awesome Profile Pics"),E=d(),x.c(),this.h()},l(s){t=a(s,"DIV",{class:!0});var n=l(t);e=a(n,"H1",{class:!0});var c=l(e);i=a(c,"IMG",{src:!0,alt:!0,class:!0}),g=w(c),p=a(c,"SPAN",{class:!0});var o=l(p);v=G(o,"Awesome Profile Pics"),o.forEach(r),c.forEach(r),E=w(n),x.l(n),n.forEach(r),this.h()},h(){j(i.src,u="/images/apps-logo.png")||c(i,"src","/images/apps-logo.png"),c(i,"alt","Awesome Profile Pics"),c(i,"class","svelte-1sdwc4g"),c(p,"class","subtitle svelte-1sdwc4g"),c(e,"class","logo page-title svelte-1sdwc4g"),c(t,"class","content svelte-1sdwc4g")},m(s,n){o(s,t,n),P(t,e),P(e,i),P(e,g),P(e,p),P(p,v),P(t,E),I[b].m(t,null),L=!0},p(s,[e]){let n=b;b=y(s),b===n?I[b].p(s,e):(f(),$(I[n],1,1,(()=>{I[n]=null})),m(),x=I[b],x?x.p(s,e):(x=I[b]=N[b](s),x.c()),h(x,1),x.m(t,null))},i(s){L||(h(x),L=!0)},o(s){$(x),L=!1},d(s){s&&r(t),I[b].d()}}}function Y(s,t,e){let n;y(s,C,(s=>e(1,n=s)));let a="99";return[a,n,function(s){a=s,e(0,a)}]}export default class extends s{constructor(s){super(),t(this,s,Y,X,e,{})}}
