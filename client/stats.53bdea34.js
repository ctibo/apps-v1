import{S as t,i as s,s as l,e as a,w as e,m as n,c as r,a as o,x as c,d as h,p as i,b as f,f as u,r as d,g,u as v,h as m,t as $,j as p,k as E,l as w,n as T,D as b,q as H,I as y,v as A,o as D,A as Q,Q as M,R as P,C as x,T as N,E as S,L as R}from"./client.d2371a71.js";import{N as I}from"./NftThumbnail.5a0690f7.js";function L(t,s,l){const a=t.slice();return a[1]=s[l],a}function V(t){let s,l,E,w,T,b,H,y,A,Q,M,P,x,N,S=[],R=new Map,I=t[0];const V=t=>t[1].index;for(let s=0;s<I.length;s+=1){let l=L(t,I,s),a=V(l);R.set(a,S[s]=j(a,l))}return{c(){s=a("h2"),l=e("Most Valued"),E=n(),w=a("table"),T=a("tr"),b=a("th"),H=e("APP"),y=n(),A=a("th"),Q=n(),M=a("th"),P=e("Amount"),x=n();for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){s=r(t,"H2",{class:!0});var a=o(s);l=c(a,"Most Valued"),a.forEach(h),E=i(t),w=r(t,"TABLE",{class:!0});var e=o(w);T=r(e,"TR",{});var n=o(T);b=r(n,"TH",{class:!0});var f=o(b);H=c(f,"APP"),f.forEach(h),y=i(n),A=r(n,"TH",{class:!0}),o(A).forEach(h),Q=i(n),M=r(n,"TH",{class:!0});var u=o(M);P=c(u,"Amount"),u.forEach(h),n.forEach(h),x=i(e);for(let t=0;t<S.length;t+=1)S[t].l(e);e.forEach(h),this.h()},h(){f(s,"class","section-title"),f(b,"class","thumb svelte-iwvv1l"),f(A,"class","unit svelte-iwvv1l"),f(M,"class","price svelte-iwvv1l"),f(w,"class","highest-sales")},m(t,a){u(t,s,a),d(s,l),u(t,E,a),u(t,w,a),d(w,T),d(T,b),d(b,H),d(T,y),d(T,A),d(T,Q),d(T,M),d(M,P),d(w,x);for(let t=0;t<S.length;t+=1)S[t].m(w,null);N=!0},p(t,s){1&s&&(I=t[0],g(),S=v(S,s,V,1,t,I,R,w,D,j,null,L),m())},i(t){if(!N){for(let t=0;t<I.length;t+=1)$(S[t]);N=!0}},o(t){for(let t=0;t<S.length;t+=1)p(S[t]);N=!1},d(t){t&&h(s),t&&h(E),t&&h(w);for(let t=0;t<S.length;t+=1)S[t].d()}}}function j(t,s){let l,g,v,m,E,D,Q,M,P,x,N,S,R,L=s[1].unit+"",V=s[1].highestSale+"";return v=new I({props:{nft:s[1]}}),{key:t,first:null,c(){l=a("tr"),g=a("td"),w(v.$$.fragment),m=n(),E=a("td"),D=e(L),Q=n(),M=a("td"),P=e(V),x=a("img"),S=n(),this.h()},l(t){l=r(t,"TR",{});var s=o(l);g=r(s,"TD",{class:!0});var a=o(g);T(v.$$.fragment,a),a.forEach(h),m=i(s),E=r(s,"TD",{class:!0});var e=o(E);D=c(e,L),e.forEach(h),Q=i(s),M=r(s,"TD",{class:!0});var n=o(M);P=c(n,V),x=r(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(h),S=i(s),s.forEach(h),this.h()},h(){f(g,"class","thumb svelte-iwvv1l"),f(E,"class","unit svelte-iwvv1l"),f(x,"class","algos"),b(x.src,N="/images/algo-logo.svg")||f(x,"src","/images/algo-logo.svg"),f(x,"alt","Algos"),f(M,"class","price svelte-iwvv1l"),this.first=l},m(t,s){u(t,l,s),d(l,g),H(v,g,null),d(l,m),d(l,E),d(E,D),d(l,Q),d(l,M),d(M,P),d(M,x),d(l,S),R=!0},p(t,l){s=t;const a={};1&l&&(a.nft=s[1]),v.$set(a),(!R||1&l)&&L!==(L=s[1].unit+"")&&y(D,L),(!R||1&l)&&V!==(V=s[1].highestSale+"")&&y(P,V)},i(t){R||($(v.$$.fragment,t),R=!0)},o(t){p(v.$$.fragment,t),R=!1},d(t){t&&h(l),A(v)}}}function k(t){let s,l,a=t[0].length&&V(t);return{c(){a&&a.c(),s=E()},l(t){a&&a.l(t),s=E()},m(t,e){a&&a.m(t,e),u(t,s,e),l=!0},p(t,[l]){t[0].length?a?(a.p(t,l),1&l&&$(a,1)):(a=V(t),a.c(),$(a,1),a.m(s.parentNode,s)):a&&(g(),p(a,1,1,(()=>{a=null})),m())},i(t){l||($(a),l=!0)},o(t){p(a),l=!1},d(t){a&&a.d(t),t&&h(s)}}}function B(t,s,l){let{nfts:a=[]}=s;return t.$$set=t=>{"nfts"in t&&l(0,a=t.nfts)},[a]}class F extends t{constructor(t){super(),s(this,t,B,k,l,{nfts:0})}}function q(t,s,l){const a=t.slice();return a[2]=s[l],a}function C(t){let s,l,g,m,$,p,E,w,T,b,H,A,D,Q,M,x=[],N=new Map,S=t[1];const R=t=>t[2].nftsQty;for(let s=0;s<S.length;s+=1){let l=q(t,S,s),a=R(l);N.set(a,x[s]=G(a,l))}return{c(){s=a("h2"),l=e("Distribution"),g=n(),m=a("h3"),$=e("Total holders: "),p=e(t[0]),E=n(),w=a("table"),T=a("tr"),b=a("th"),H=e("NFTs"),A=n(),D=a("th"),Q=e("Holders"),M=n();for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(a){s=r(a,"H2",{class:!0});var e=o(s);l=c(e,"Distribution"),e.forEach(h),g=i(a),m=r(a,"H3",{class:!0});var n=o(m);$=c(n,"Total holders: "),p=c(n,t[0]),n.forEach(h),E=i(a),w=r(a,"TABLE",{class:!0});var f=o(w);T=r(f,"TR",{class:!0});var u=o(T);b=r(u,"TH",{class:!0});var d=o(b);H=c(d,"NFTs"),d.forEach(h),A=i(u),D=r(u,"TH",{class:!0});var v=o(D);Q=c(v,"Holders"),v.forEach(h),u.forEach(h),M=i(f);for(let t=0;t<x.length;t+=1)x[t].l(f);f.forEach(h),this.h()},h(){f(s,"class","section-title"),f(m,"class","content-title svelte-119wunh"),f(b,"class","nfts"),f(D,"class","holders svelte-119wunh"),f(T,"class","svelte-119wunh"),f(w,"class","highest-sales")},m(t,a){u(t,s,a),d(s,l),u(t,g,a),u(t,m,a),d(m,$),d(m,p),u(t,E,a),u(t,w,a),d(w,T),d(T,b),d(b,H),d(T,A),d(T,D),d(D,Q),d(w,M);for(let t=0;t<x.length;t+=1)x[t].m(w,null)},p(t,s){1&s&&y(p,t[0]),2&s&&(S=t[1],x=v(x,s,R,1,t,S,N,w,P,G,null,q))},d(t){t&&h(s),t&&h(g),t&&h(m),t&&h(E),t&&h(w);for(let t=0;t<x.length;t+=1)x[t].d()}}}function G(t,s){let l,g,v,m,$,p,E,w,T,b,H,A,D,Q,P,x=s[2].nftsQty+"",N=s[2].nftsQty>1?"s":"",S=s[2].holdersQty+"",R=s[2].holdersQty>1?"s":"",I=Math.round(1e3*s[2].ratio)/10+"";return{key:t,first:null,c(){l=a("tr"),g=a("td"),v=e(x),m=e(" APP"),$=e(N),p=n(),E=a("td"),w=e(S),T=e(" Holder"),b=e(R),H=e(" ("),A=e(I),D=e("%)\n          "),Q=a("div"),P=n(),this.h()},l(t){l=r(t,"TR",{class:!0});var s=o(l);g=r(s,"TD",{class:!0});var a=o(g);v=c(a,x),m=c(a," APP"),$=c(a,N),a.forEach(h),p=i(s),E=r(s,"TD",{class:!0});var e=o(E);w=c(e,S),T=c(e," Holder"),b=c(e,R),H=c(e," ("),A=c(e,I),D=c(e,"%)\n          "),Q=r(e,"DIV",{class:!0,style:!0}),o(Q).forEach(h),e.forEach(h),P=i(s),s.forEach(h),this.h()},h(){f(g,"class","nfts svelte-119wunh"),f(Q,"class","bg svelte-119wunh"),M(Q,"width",Math.round(1e3*s[2].ratio)/10+"%"),f(E,"class","holders svelte-119wunh"),f(l,"class","segment svelte-119wunh"),this.first=l},m(t,s){u(t,l,s),d(l,g),d(g,v),d(g,m),d(g,$),d(l,p),d(l,E),d(E,w),d(E,T),d(E,b),d(E,H),d(E,A),d(E,D),d(E,Q),d(l,P)},p(t,l){s=t,2&l&&x!==(x=s[2].nftsQty+"")&&y(v,x),2&l&&N!==(N=s[2].nftsQty>1?"s":"")&&y($,N),2&l&&S!==(S=s[2].holdersQty+"")&&y(w,S),2&l&&R!==(R=s[2].holdersQty>1?"s":"")&&y(b,R),2&l&&I!==(I=Math.round(1e3*s[2].ratio)/10+"")&&y(A,I),2&l&&M(Q,"width",Math.round(1e3*s[2].ratio)/10+"%")},d(t){t&&h(l)}}}function U(t){let s,l=t[1].length&&C(t);return{c(){l&&l.c(),s=E()},l(t){l&&l.l(t),s=E()},m(t,a){l&&l.m(t,a),u(t,s,a)},p(t,[a]){t[1].length?l?l.p(t,a):(l=C(t),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i:Q,o:Q,d(t){l&&l.d(t),t&&h(s)}}}function z(t,s,l){let{total:a=0}=s,{distribution:e=[]}=s;return t.$$set=t=>{"total"in t&&l(0,a=t.total),"distribution"in t&&l(1,e=t.distribution)},[a,e]}class J extends t{constructor(t){super(),s(this,t,z,U,l,{total:0,distribution:1})}}function K(t){let s,l,a,e;return s=new J({props:{total:S.stats.totalHolders,distribution:S.stats.holdersDistribution}}),a=new F({props:{nfts:S.stats.highestSales}}),{c(){w(s.$$.fragment),l=n(),w(a.$$.fragment)},l(t){T(s.$$.fragment,t),l=i(t),T(a.$$.fragment,t)},m(t,n){H(s,t,n),u(t,l,n),H(a,t,n),e=!0},p:Q,i(t){e||($(s.$$.fragment,t),$(a.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),p(a.$$.fragment,t),e=!1},d(t){A(s,t),t&&h(l),A(a,t)}}}function O(t){let s,l;return s=new R({}),{c(){w(s.$$.fragment)},l(t){T(s.$$.fragment,t)},m(t,a){H(s,t,a),l=!0},p:Q,i(t){l||($(s.$$.fragment,t),l=!0)},o(t){p(s.$$.fragment,t),l=!1},d(t){A(s,t)}}}function W(t){let s,l,v,E,w,T,b;const H=[O,K],y=[];function A(t,s){return t[0]&&(t[0].loading||t[0].statsLoading)?0:1}return w=A(t),T=y[w]=H[w](t),{c(){s=a("div"),l=a("h1"),v=e("Awesome Stats"),E=n(),T.c(),this.h()},l(t){s=r(t,"DIV",{class:!0});var a=o(s);l=r(a,"H1",{class:!0});var e=o(l);v=c(e,"Awesome Stats"),e.forEach(h),E=i(a),T.l(a),a.forEach(h),this.h()},h(){f(l,"class","page-title"),f(s,"class","content")},m(t,a){u(t,s,a),d(s,l),d(l,v),d(s,E),y[w].m(s,null),b=!0},p(t,[l]){let a=w;w=A(t),w===a?y[w].p(t,l):(g(),p(y[a],1,1,(()=>{y[a]=null})),m(),T=y[w],T?T.p(t,l):(T=y[w]=H[w](t),T.c()),$(T,1),T.m(s,null))},i(t){b||($(T),b=!0)},o(t){p(T),b=!1},d(t){t&&h(s),y[w].d()}}}function X(t,s,l){let a;return x(t,S,(t=>l(0,a=t))),N((()=>{S.dispatchUpdate()})),[a]}export default class extends t{constructor(t){super(),s(this,t,X,W,l,{})}}