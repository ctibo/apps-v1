import{S as s,i as t,s as e,v as a,e as l,t as n,c as r,a as c,b as o,d as i,f,g as u,h,j as p,k as m,l as d,m as $,n as g,o as v,p as E,q as A,r as w,u as b,w as I,x as k,y as x,z as C,A as L,B as N,C as P,D as G,E as z,F as T,G as O,H as U,I as y,J as D,K as S,L as R,M as j,N as V}from"./client.e9cd08ea.js";import{g as _,A as H,s as M,N as q}from"./NftThumbnail.5bc9aae2.js";import{s as B}from"./address.5b8c75e5.js";import{L as F}from"./LoadingInline.611da945.js";function J(s){let t,e;return{c(){t=l("span"),e=n("Creator"),this.h()},l(s){t=r(s,"SPAN",{class:!0});var a=c(t);e=o(a,"Creator"),a.forEach(i),this.h()},h(){f(t,"class","tag svelte-1fzn90e")},m(s,a){u(s,t,a),h(t,e)},d(s){s&&i(t)}}}function K(s){let t,e,a,m,d=s[1].link.label+"";return{c(){t=l("li"),e=l("a"),a=n(d),this.h()},l(s){t=r(s,"LI",{class:!0});var l=c(t);e=r(l,"A",{class:!0,href:!0,target:!0});var n=c(e);a=o(n,d),n.forEach(i),l.forEach(i),this.h()},h(){f(e,"class","btn"),f(e,"href",m=s[1].link.href),f(e,"target","_blank"),f(t,"class","extra-link svelte-1fzn90e")},m(s,l){u(s,t,l),h(t,e),h(e,a)},p(s,t){2&t&&d!==(d=s[1].link.label+"")&&p(a,d),2&t&&m!==(m=s[1].link.href)&&f(e,"href",m)},d(s){s&&i(t)}}}function Q(s){let t,e,L,N,P,G,z,T,O,U,y,D,S,R,j,V,q,F,Q,W,X,Y,Z,ss,ts,es,as,ls,ns,rs,cs,os,is,fs,us,hs,ps,ms,ds=s[1].unit+"",$s=s[1].unit+"",gs=s[1].index+"",vs=B(_(s[1].url)).toUpperCase()+"",Es=B(s[1].holder)+"";U=new H({props:{src:s[1].url,alt:s[1].unit}});let As=s[1].holder===a.CREATOR_ACCOUNT&&J(),ws=s[1].link&&K(s);return{c(){t=l("article"),e=l("div"),L=l("div"),N=l("span"),P=n(ds),G=m(),z=l("button"),T=l("i"),O=m(),d(U.$$.fragment),y=m(),D=l("div"),S=l("ul"),R=l("li"),j=l("strong"),V=n($s),q=m(),F=l("li"),Q=n("ASA ID:\n          "),W=l("a"),X=n(gs),Z=m(),ss=l("li"),ts=n("Original file:\n          "),es=l("a"),as=n(vs),ns=m(),rs=l("li"),cs=n("Holder: "),os=n(Es),is=m(),As&&As.c(),fs=m(),ws&&ws.c(),this.h()},l(s){t=r(s,"ARTICLE",{class:!0});var a=c(t);e=r(a,"DIV",{class:!0});var l=c(e);L=r(l,"DIV",{class:!0});var n=c(L);N=r(n,"SPAN",{class:!0});var f=c(N);P=o(f,ds),f.forEach(i),G=$(n),z=r(n,"BUTTON",{class:!0});var u=c(z);T=r(u,"I",{class:!0}),c(T).forEach(i),u.forEach(i),n.forEach(i),O=$(l),g(U.$$.fragment,l),y=$(l),D=r(l,"DIV",{class:!0});var h=c(D);S=r(h,"UL",{class:!0});var p=c(S);R=r(p,"LI",{});var m=c(R);j=r(m,"STRONG",{});var d=c(j);V=o(d,$s),d.forEach(i),m.forEach(i),q=$(p),F=r(p,"LI",{});var v=c(F);Q=o(v,"ASA ID:\n          "),W=r(v,"A",{class:!0,href:!0,target:!0});var E=c(W);X=o(E,gs),E.forEach(i),v.forEach(i),Z=$(p),ss=r(p,"LI",{});var A=c(ss);ts=o(A,"Original file:\n          "),es=r(A,"A",{class:!0,href:!0,target:!0});var w=c(es);as=o(w,vs),w.forEach(i),A.forEach(i),ns=$(p),rs=r(p,"LI",{});var b=c(rs);cs=o(b,"Holder: "),os=o(b,Es),is=$(b),As&&As.l(b),b.forEach(i),fs=$(p),ws&&ws.l(p),p.forEach(i),h.forEach(i),l.forEach(i),a.forEach(i),this.h()},h(){f(N,"class","app-title svelte-1fzn90e"),f(T,"class","fas fa-times"),f(z,"class","close-btn svelte-1fzn90e"),f(L,"class","top-bar svelte-1fzn90e"),f(W,"class","text-link"),f(W,"href",Y="https://www.nftexplorer.app/asset/"+s[1].index),f(W,"target","_blank"),f(es,"class","text-link ipfs-hash"),f(es,"href",ls="https://ipfs.io/ipfs/"+_(s[1].url)),f(es,"target","_blank"),f(S,"class","infos"),f(D,"class","content svelte-1fzn90e"),f(e,"class","window svelte-1fzn90e"),f(t,"class","wrapper svelte-1fzn90e")},m(a,l){u(a,t,l),h(t,e),h(e,L),h(L,N),h(N,P),h(L,G),h(L,z),h(z,T),h(e,O),v(U,e,null),h(e,y),h(e,D),h(D,S),h(S,R),h(R,j),h(j,V),h(S,q),h(S,F),h(F,Q),h(F,W),h(W,X),h(S,Z),h(S,ss),h(ss,ts),h(ss,es),h(es,as),h(S,ns),h(S,rs),h(rs,cs),h(rs,os),h(rs,is),As&&As.m(rs,null),h(S,fs),ws&&ws.m(S,null),hs=!0,ps||(ms=[E(window,"keydown",s[2]),E(z,"click",(function(){A(s[0])&&s[0].apply(this,arguments)}))],ps=!0)},p(t,[e]){s=t,(!hs||2&e)&&ds!==(ds=s[1].unit+"")&&p(P,ds);const l={};2&e&&(l.src=s[1].url),2&e&&(l.alt=s[1].unit),U.$set(l),(!hs||2&e)&&$s!==($s=s[1].unit+"")&&p(V,$s),(!hs||2&e)&&gs!==(gs=s[1].index+"")&&p(X,gs),(!hs||2&e&&Y!==(Y="https://www.nftexplorer.app/asset/"+s[1].index))&&f(W,"href",Y),(!hs||2&e)&&vs!==(vs=B(_(s[1].url)).toUpperCase()+"")&&p(as,vs),(!hs||2&e&&ls!==(ls="https://ipfs.io/ipfs/"+_(s[1].url)))&&f(es,"href",ls),(!hs||2&e)&&Es!==(Es=B(s[1].holder)+"")&&p(os,Es),s[1].holder===a.CREATOR_ACCOUNT?As||(As=J(),As.c(),As.m(rs,null)):As&&(As.d(1),As=null),s[1].link?ws?ws.p(s,e):(ws=K(s),ws.c(),ws.m(S,null)):ws&&(ws.d(1),ws=null)},i(s){hs||(w(U.$$.fragment,s),b((()=>{us||(us=I(t,M,{duration:300,start:.8},!0)),us.run(1)})),hs=!0)},o(s){k(U.$$.fragment,s),us||(us=I(t,M,{duration:300,start:.8},!1)),us.run(0),hs=!1},d(s){s&&i(t),x(U),As&&As.d(),ws&&ws.d(),s&&us&&us.end(),ps=!1,C(ms)}}}function W(s,t,e){let{closeApp:a}=t,{nft:l={}}=t;return s.$$set=s=>{"closeApp"in s&&e(0,a=s.closeApp),"nft"in s&&e(1,l=s.nft)},[a,l,function(s){27===s.keyCode&&a()}]}class X extends s{constructor(s){super(),t(this,s,W,Q,e,{closeApp:0,nft:1})}}function Y(s,t,e){const a=s.slice();return a[5]=t[e],a}function Z(s){let t,e,a=[],n=new Map,o=s[0];const h=s=>s[5].index;for(let t=0;t<o.length;t+=1){let e=Y(s,o,t),l=h(e);n.set(l,a[t]=ss(l,e))}return{c(){t=l("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=r(s,"UL",{class:!0});var e=c(t);for(let s=0;s<a.length;s+=1)a[s].l(e);e.forEach(i),this.h()},h(){f(t,"class","svelte-up5e3c")},m(s,l){u(s,t,l);for(let s=0;s<a.length;s+=1)a[s].m(t,null);e=!0},p(s,e){5&e&&(o=s[0],L(),a=N(a,e,h,1,s,o,n,t,P,ss,null,Y),G())},i(s){if(!e){for(let s=0;s<o.length;s+=1)w(a[s]);e=!0}},o(s){for(let s=0;s<a.length;s+=1)k(a[s]);e=!1},d(s){s&&i(t);for(let s=0;s<a.length;s+=1)a[s].d()}}}function ss(s,t){let e,a,n,o;return a=new q({props:{nft:t[5]}}),a.$on("click",(function(){return t[4](t[5])})),{key:s,first:null,c(){e=l("li"),d(a.$$.fragment),n=m(),this.h()},l(s){e=r(s,"LI",{});var t=c(e);g(a.$$.fragment,t),n=$(t),t.forEach(i),this.h()},h(){this.first=e},m(s,t){u(s,e,t),v(a,e,null),h(e,n),o=!0},p(s,e){t=s;const l={};1&e&&(l.nft=t[5]),a.$set(l)},i(s){o||(w(a.$$.fragment,s),o=!0)},o(s){k(a.$$.fragment,s),o=!1},d(s){s&&i(e),x(a)}}}function ts(s){let t,e;return t=new X({props:{nft:s[1],closeApp:s[3]}}),{c(){d(t.$$.fragment)},l(s){g(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},p(s,e){const a={};2&e&&(a.nft=s[1]),t.$set(a)},i(s){e||(w(t.$$.fragment,s),e=!0)},o(s){k(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function es(s){let t,e,a,l=s[0].length&&Z(s),n=s[1]&&ts(s);return{c(){l&&l.c(),t=m(),n&&n.c(),e=z()},l(s){l&&l.l(s),t=$(s),n&&n.l(s),e=z()},m(s,r){l&&l.m(s,r),u(s,t,r),n&&n.m(s,r),u(s,e,r),a=!0},p(s,[a]){s[0].length?l?(l.p(s,a),1&a&&w(l,1)):(l=Z(s),l.c(),w(l,1),l.m(t.parentNode,t)):l&&(L(),k(l,1,1,(()=>{l=null})),G()),s[1]?n?(n.p(s,a),2&a&&w(n,1)):(n=ts(s),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(L(),k(n,1,1,(()=>{n=null})),G())},i(s){a||(w(l),w(n),a=!0)},o(s){k(l),k(n),a=!1},d(s){l&&l.d(s),s&&i(t),n&&n.d(s),s&&i(e)}}}function as(s,t,e){let a,{nfts:l=[]}=t;function n(s){e(1,a=s)}return s.$$set=s=>{"nfts"in s&&e(0,l=s.nfts)},[l,a,n,function(){e(1,a=void 0)},s=>n(s)]}class ls extends s{constructor(s){super(),t(this,s,as,es,e,{nfts:0})}}function ns(s){let t,e,a,p,d,g,v,E,A;return{c(){t=l("nav"),e=l("ul"),a=l("li"),p=l("a"),d=n("99 APPs"),g=m(),v=l("li"),E=l("a"),A=n("Collabs"),this.h()},l(s){t=r(s,"NAV",{});var l=c(t);e=r(l,"UL",{class:!0});var n=c(e);a=r(n,"LI",{class:!0});var f=c(a);p=r(f,"A",{href:!0,class:!0});var u=c(p);d=o(u,"99 APPs"),u.forEach(i),f.forEach(i),g=$(n),v=r(n,"LI",{class:!0});var h=c(v);E=r(h,"A",{href:!0,class:!0});var m=c(E);A=o(m,"Collabs"),m.forEach(i),h.forEach(i),n.forEach(i),l.forEach(i),this.h()},h(){f(p,"href","?nfts=99"),f(p,"class","svelte-ml8amu"),T(p,"active","99"===s[0]),f(a,"class","svelte-ml8amu"),f(E,"href","?nfts=collabs"),f(E,"class","svelte-ml8amu"),T(E,"active","collabs"===s[0]),f(v,"class","svelte-ml8amu"),f(e,"class","svelte-ml8amu")},m(s,l){u(s,t,l),h(t,e),h(e,a),h(a,p),h(p,d),h(e,g),h(e,v),h(v,E),h(E,A)},p(s,[t]){1&t&&T(p,"active","99"===s[0]),1&t&&T(E,"active","collabs"===s[0])},i:O,o:O,d(s){s&&i(t)}}}function rs(s,t,e){let a,{currentGrid:l="99"}=t;const{page:n}=U();return y(s,n,(s=>e(2,a=s))),s.$$set=s=>{"currentGrid"in s&&e(0,l=s.currentGrid)},s.$$.update=()=>{4&s.$$.dirty&&e(0,l=a.query.nfts||"99")},[l,n,a]}class cs extends s{constructor(s){super(),t(this,s,rs,ns,e,{currentGrid:0})}}function os(s){let t,e,a,l,n,r,c;function o(t){s[2](t)}let f={};void 0!==s[0]&&(f.currentGrid=s[0]),t=new cs({props:f}),R.push((()=>j(t,"currentGrid",o)));const h=[us,fs],p=[];function E(s,t){return"99"===s[0]?0:"collabs"===s[0]?1:-1}return~(l=E(s))&&(n=p[l]=h[l](s)),{c(){d(t.$$.fragment),a=m(),n&&n.c(),r=z()},l(s){g(t.$$.fragment,s),a=$(s),n&&n.l(s),r=z()},m(s,e){v(t,s,e),u(s,a,e),~l&&p[l].m(s,e),u(s,r,e),c=!0},p(s,a){const c={};!e&&1&a&&(e=!0,c.currentGrid=s[0],V((()=>e=!1))),t.$set(c);let o=l;l=E(s),l===o?~l&&p[l].p(s,a):(n&&(L(),k(p[o],1,1,(()=>{p[o]=null})),G()),~l?(n=p[l],n?n.p(s,a):(n=p[l]=h[l](s),n.c()),w(n,1),n.m(r.parentNode,r)):n=null)},i(s){c||(w(t.$$.fragment,s),w(n),c=!0)},o(s){k(t.$$.fragment,s),k(n),c=!1},d(s){x(t,s),s&&i(a),~l&&p[l].d(s),s&&i(r)}}}function is(s){let t,e;return t=new F({}),{c(){d(t.$$.fragment)},l(s){g(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},p:O,i(s){e||(w(t.$$.fragment,s),e=!0)},o(s){k(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function fs(s){let t,e;return t=new ls({props:{nfts:S.collabs}}),{c(){d(t.$$.fragment)},l(s){g(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},p:O,i(s){e||(w(t.$$.fragment,s),e=!0)},o(s){k(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function us(s){let t,e;return t=new ls({props:{nfts:S.gen1}}),{c(){d(t.$$.fragment)},l(s){g(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},p:O,i(s){e||(w(t.$$.fragment,s),e=!0)},o(s){k(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function hs(s){let t,e,a,p,d,g,v,E,A,b,I;const x=[is,os],C=[];function N(s,t){return s[1]&&s[1].loading?0:1}return A=N(s),b=C[A]=x[A](s),{c(){t=l("div"),e=l("h1"),a=l("img"),d=m(),g=l("span"),v=n("Awesome Profile Pics"),E=m(),b.c(),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=c(t);e=r(l,"H1",{class:!0});var n=c(e);a=r(n,"IMG",{src:!0,alt:!0,class:!0}),d=$(n),g=r(n,"SPAN",{class:!0});var f=c(g);v=o(f,"Awesome Profile Pics"),f.forEach(i),n.forEach(i),E=$(l),b.l(l),l.forEach(i),this.h()},h(){D(a.src,p="/images/apps-logo.png")||f(a,"src","/images/apps-logo.png"),f(a,"alt","Awesome Profile Pics"),f(a,"class","svelte-1sdwc4g"),f(g,"class","subtitle svelte-1sdwc4g"),f(e,"class","logo page-title svelte-1sdwc4g"),f(t,"class","content svelte-1sdwc4g")},m(s,l){u(s,t,l),h(t,e),h(e,a),h(e,d),h(e,g),h(g,v),h(t,E),C[A].m(t,null),I=!0},p(s,[e]){let a=A;A=N(s),A===a?C[A].p(s,e):(L(),k(C[a],1,1,(()=>{C[a]=null})),G(),b=C[A],b?b.p(s,e):(b=C[A]=x[A](s),b.c()),w(b,1),b.m(t,null))},i(s){I||(w(b),I=!0)},o(s){k(b),I=!1},d(s){s&&i(t),C[A].d()}}}function ps(s,t,e){let a;y(s,S,(s=>e(1,a=s)));let l="99";return[l,a,function(s){l=s,e(0,l)}]}export default class extends s{constructor(s){super(),t(this,s,ps,hs,e,{})}}
