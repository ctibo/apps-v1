import{S as s,i as t,s as a,e as l,t as e,k as n,c as r,a as c,b as o,d as i,m as f,f as h,g as u,h as g,A as m,B as v,D as $,r as d,x as p,E,l as w,n as T,J as A,o as H,j as S,y as b,C as x,I as D,Q as j,K as I,G as L}from"./client.ecce2a47.js";import{N as P}from"./NftThumbnail.12e35f7f.js";import{L as N}from"./LoadingInline.8ef21c82.js";function V(s,t,a){const l=s.slice();return l[1]=t[a],l}function k(s){let t,a,E,w,T,A,H,S,b,D,j,I,L,P,N=[],k=new Map,B=s[0];const G=s=>s[1].index;for(let t=0;t<B.length;t+=1){let a=V(s,B,t),l=G(a);k.set(l,N[t]=y(l,a))}return{c(){t=l("h2"),a=e("Highest Valued"),E=n(),w=l("table"),T=l("tr"),A=l("th"),H=e("APP"),S=n(),b=l("th"),D=n(),j=l("th"),I=e("Amount"),L=n();for(let s=0;s<N.length;s+=1)N[s].c();this.h()},l(s){t=r(s,"H2",{class:!0});var l=c(t);a=o(l,"Highest Valued"),l.forEach(i),E=f(s),w=r(s,"TABLE",{class:!0});var e=c(w);T=r(e,"TR",{});var n=c(T);A=r(n,"TH",{class:!0});var h=c(A);H=o(h,"APP"),h.forEach(i),S=f(n),b=r(n,"TH",{class:!0}),c(b).forEach(i),D=f(n),j=r(n,"TH",{class:!0});var u=c(j);I=o(u,"Amount"),u.forEach(i),n.forEach(i),L=f(e);for(let s=0;s<N.length;s+=1)N[s].l(e);e.forEach(i),this.h()},h(){h(t,"class","section-title"),h(A,"class","thumb svelte-iwvv1l"),h(b,"class","unit svelte-iwvv1l"),h(j,"class","price svelte-iwvv1l"),h(w,"class","highest-sales")},m(s,l){u(s,t,l),g(t,a),u(s,E,l),u(s,w,l),g(w,T),g(T,A),g(A,H),g(T,S),g(T,b),g(T,D),g(T,j),g(j,I),g(w,L);for(let s=0;s<N.length;s+=1)N[s].m(w,null);P=!0},p(s,t){1&t&&(B=s[0],m(),N=v(N,t,G,1,s,B,k,w,x,y,null,V),$())},i(s){if(!P){for(let s=0;s<B.length;s+=1)d(N[s]);P=!0}},o(s){for(let s=0;s<N.length;s+=1)p(N[s]);P=!1},d(s){s&&i(t),s&&i(E),s&&i(w);for(let s=0;s<N.length;s+=1)N[s].d()}}}function y(s,t){let a,m,v,$,E,x,D,j,I,L,N,V,k,y=t[1].unit+"",B=t[1].highestSale+"";return v=new P({props:{nft:t[1]}}),{key:s,first:null,c(){a=l("tr"),m=l("td"),w(v.$$.fragment),$=n(),E=l("td"),x=e(y),D=n(),j=l("td"),I=e(B),L=l("img"),V=n(),this.h()},l(s){a=r(s,"TR",{});var t=c(a);m=r(t,"TD",{class:!0});var l=c(m);T(v.$$.fragment,l),l.forEach(i),$=f(t),E=r(t,"TD",{class:!0});var e=c(E);x=o(e,y),e.forEach(i),D=f(t),j=r(t,"TD",{class:!0});var n=c(j);I=o(n,B),L=r(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(i),V=f(t),t.forEach(i),this.h()},h(){h(m,"class","thumb svelte-iwvv1l"),h(E,"class","unit svelte-iwvv1l"),h(L,"class","algos"),A(L.src,N="/images/algo-logo.svg")||h(L,"src","/images/algo-logo.svg"),h(L,"alt","Algos"),h(j,"class","price svelte-iwvv1l"),this.first=a},m(s,t){u(s,a,t),g(a,m),H(v,m,null),g(a,$),g(a,E),g(E,x),g(a,D),g(a,j),g(j,I),g(j,L),g(a,V),k=!0},p(s,a){t=s;const l={};1&a&&(l.nft=t[1]),v.$set(l),(!k||1&a)&&y!==(y=t[1].unit+"")&&S(x,y),(!k||1&a)&&B!==(B=t[1].highestSale+"")&&S(I,B)},i(s){k||(d(v.$$.fragment,s),k=!0)},o(s){p(v.$$.fragment,s),k=!1},d(s){s&&i(a),b(v)}}}function B(s){let t,a,l=s[0].length&&k(s);return{c(){l&&l.c(),t=E()},l(s){l&&l.l(s),t=E()},m(s,e){l&&l.m(s,e),u(s,t,e),a=!0},p(s,[a]){s[0].length?l?(l.p(s,a),1&a&&d(l,1)):(l=k(s),l.c(),d(l,1),l.m(t.parentNode,t)):l&&(m(),p(l,1,1,(()=>{l=null})),$())},i(s){a||(d(l),a=!0)},o(s){p(l),a=!1},d(s){l&&l.d(s),s&&i(t)}}}function G(s,t,a){let{nfts:l=[]}=t;return s.$$set=s=>{"nfts"in s&&a(0,l=s.nfts)},[l]}class M extends s{constructor(s){super(),t(this,s,G,B,a,{nfts:0})}}function R(s){let t,a;return t=new M({props:{nfts:I.stats.highestSales}}),{c(){w(t.$$.fragment)},l(s){T(t.$$.fragment,s)},m(s,l){H(t,s,l),a=!0},p:L,i(s){a||(d(t.$$.fragment,s),a=!0)},o(s){p(t.$$.fragment,s),a=!1},d(s){b(t,s)}}}function C(s){let t,a;return t=new N({}),{c(){w(t.$$.fragment)},l(s){T(t.$$.fragment,s)},m(s,l){H(t,s,l),a=!0},p:L,i(s){a||(d(t.$$.fragment,s),a=!0)},o(s){p(t.$$.fragment,s),a=!1},d(s){b(t,s)}}}function J(s){let t,a,v,E,w,T,A;const H=[C,R],S=[];function b(s,t){return s[0]&&(s[0].loading||s[0].statsLoading)?0:1}return w=b(s),T=S[w]=H[w](s),{c(){t=l("div"),a=l("h1"),v=e("Stats"),E=n(),T.c(),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=c(t);a=r(l,"H1",{class:!0});var e=c(a);v=o(e,"Stats"),e.forEach(i),E=f(l),T.l(l),l.forEach(i),this.h()},h(){h(a,"class","page-title"),h(t,"class","content")},m(s,l){u(s,t,l),g(t,a),g(a,v),g(t,E),S[w].m(t,null),A=!0},p(s,[a]){let l=w;w=b(s),w===l?S[w].p(s,a):(m(),p(S[l],1,1,(()=>{S[l]=null})),$(),T=S[w],T?T.p(s,a):(T=S[w]=H[w](s),T.c()),d(T,1),T.m(t,null))},i(s){A||(d(T),A=!0)},o(s){p(T),A=!1},d(s){s&&i(t),S[w].d()}}}function K(s,t,a){let l;return D(s,I,(s=>a(0,l=s))),j((()=>{I.dispatchUpdate()})),[l]}export default class extends s{constructor(s){super(),t(this,s,K,J,a,{})}}
