import{S as t,i as s,s as l,e as a,w as e,m as n,c as r,a as c,x as i,d as o,p as h,b as f,f as u,r as p,j as m,h as d,t as g,C as v,O as $,g as E,E as x,P as j,Q as w,F as z,z as T,u as y,k as P,R as b,T as k,L as A,l as D,n as I,q as H,A as L,v as N,U,I as V,o as R}from"./client.744433ee.js";import{N as q}from"./NftThumbnail.2af4823c.js";function B(t,s,l){const a=t.slice();return a[8]=s[l],a}function F(t,s,l){const a=t.slice();return a[8]=s[l],a}function G(t){let s,l,v,$,x,j,w,z,T,y,A,D=t[2].length&&O(t),I=t[1].length&&C(t);return{c(){s=a("div"),l=a("button"),v=e("Pick a winner"),$=n(),x=a("div"),j=a("div"),D&&D.c(),w=n(),I&&I.c(),z=P(),this.h()},l(t){s=r(t,"DIV",{class:!0});var a=c(s);l=r(a,"BUTTON",{class:!0});var e=c(l);v=i(e,"Pick a winner"),e.forEach(o),a.forEach(o),$=h(t),x=r(t,"DIV",{class:!0});var n=c(x);j=r(n,"DIV",{class:!0});var f=c(j);D&&D.l(f),f.forEach(o),n.forEach(o),w=h(t),I&&I.l(t),z=P(),this.h()},h(){f(l,"class","btn"),f(s,"class","centered svelte-zprxtj"),f(j,"class","spinner-wrapper svelte-zprxtj"),f(x,"class","spinner svelte-zprxtj")},m(a,e){u(a,s,e),p(s,l),p(l,v),u(a,$,e),u(a,x,e),p(x,j),D&&D.m(j,null),u(a,w,e),I&&I.m(a,e),u(a,z,e),T=!0,y||(A=b(l,"click",k(t[5])),y=!0)},p(t,s){t[2].length?D?(D.p(t,s),4&s&&g(D,1)):(D=O(t),D.c(),g(D,1),D.m(j,null)):D&&(E(),m(D,1,1,(()=>{D=null})),d()),t[1].length?I?(I.p(t,s),2&s&&g(I,1)):(I=C(t),I.c(),g(I,1),I.m(z.parentNode,z)):I&&(E(),m(I,1,1,(()=>{I=null})),d())},i(t){T||(g(D),g(I),T=!0)},o(t){m(D),m(I),T=!1},d(t){t&&o(s),t&&o($),t&&o(x),D&&D.d(),t&&o(w),I&&I.d(t),t&&o(z),y=!1,A()}}}function M(t){let s,l;return s=new A({}),{c(){D(s.$$.fragment)},l(t){I(s.$$.fragment,t)},m(t,a){H(s,t,a),l=!0},p:L,i(t){l||(g(s.$$.fragment,t),l=!0)},o(t){m(s.$$.fragment,t),l=!1},d(t){N(s,t)}}}function O(t){let s,l,e=[],n=new Map,i=t[2];const h=t=>t[8].index;for(let s=0;s<i.length;s+=1){let l=F(t,i,s),a=h(l);n.set(a,e[s]=W(a,l))}return{c(){s=a("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){s=r(t,"UL",{class:!0});var l=c(s);for(let t=0;t<e.length;t+=1)e[t].l(l);l.forEach(o),this.h()},h(){f(s,"class","track svelte-zprxtj"),T(s,"animating",t[3])},m(a,n){u(a,s,n);for(let t=0;t<e.length;t+=1)e[t].m(s,null);t[6](s),l=!0},p(t,l){4&l&&(i=t[2],E(),e=y(e,l,h,1,t,i,n,s,R,W,null,F),d()),8&l&&T(s,"animating",t[3])},i(t){if(!l){for(let t=0;t<i.length;t+=1)g(e[t]);l=!0}},o(t){for(let t=0;t<e.length;t+=1)m(e[t]);l=!1},d(l){l&&o(s);for(let t=0;t<e.length;t+=1)e[t].d();t[6](null)}}}function W(t,s){let l,e,i,d;return e=new q({props:{nft:s[8],lazyload:!1}}),{key:t,first:null,c(){l=a("li"),D(e.$$.fragment),i=n(),this.h()},l(t){l=r(t,"LI",{class:!0});var s=c(l);I(e.$$.fragment,s),i=h(s),s.forEach(o),this.h()},h(){f(l,"class","entry svelte-zprxtj"),this.first=l},m(t,s){u(t,l,s),H(e,l,null),p(l,i),d=!0},p(t,l){s=t;const a={};4&l&&(a.nft=s[8]),e.$set(a)},i(t){d||(g(e.$$.fragment,t),d=!0)},o(t){m(e.$$.fragment,t),d=!1},d(t){t&&o(l),N(e)}}}function C(t){let s,l,v,$,x,j,w,z,T,P=[],b=new Map,k=t[1];const A=t=>t[8].index;for(let s=0;s<k.length;s+=1){let l=B(t,k,s),a=A(l);b.set(a,P[s]=Q(a,l))}return{c(){s=a("table"),l=a("tr"),v=a("th"),$=e("APP"),x=n(),j=a("th"),w=e("Winner"),z=n();for(let t=0;t<P.length;t+=1)P[t].c();this.h()},l(t){s=r(t,"TABLE",{class:!0});var a=c(s);l=r(a,"TR",{});var e=c(l);v=r(e,"TH",{class:!0});var n=c(v);$=i(n,"APP"),n.forEach(o),x=h(e),j=r(e,"TH",{class:!0});var f=c(j);w=i(f,"Winner"),f.forEach(o),e.forEach(o),z=h(a);for(let t=0;t<P.length;t+=1)P[t].l(a);a.forEach(o),this.h()},h(){f(v,"class","thumb svelte-zprxtj"),f(j,"class","holder svelte-zprxtj"),f(s,"class","highest-sales")},m(t,a){u(t,s,a),p(s,l),p(l,v),p(v,$),p(l,x),p(l,j),p(j,w),p(s,z);for(let t=0;t<P.length;t+=1)P[t].m(s,null);T=!0},p(t,l){2&l&&(k=t[1],E(),P=y(P,l,A,1,t,k,b,s,R,Q,null,B),d())},i(t){if(!T){for(let t=0;t<k.length;t+=1)g(P[t]);T=!0}},o(t){for(let t=0;t<P.length;t+=1)m(P[t]);T=!1},d(t){t&&o(s);for(let t=0;t<P.length;t+=1)P[t].d()}}}function Q(t,s){let l,d,v,$,E,x,j,w,z=U(s[8].holder)+"";return v=new q({props:{nft:s[8],lazyload:!1}}),{key:t,first:null,c(){l=a("tr"),d=a("td"),D(v.$$.fragment),$=n(),E=a("td"),x=e(z),j=n(),this.h()},l(t){l=r(t,"TR",{});var s=c(l);d=r(s,"TD",{class:!0});var a=c(d);I(v.$$.fragment,a),a.forEach(o),$=h(s),E=r(s,"TD",{class:!0});var e=c(E);x=i(e,z),e.forEach(o),j=h(s),s.forEach(o),this.h()},h(){f(d,"class","thumb svelte-zprxtj"),f(E,"class","holder svelte-zprxtj"),this.first=l},m(t,s){u(t,l,s),p(l,d),H(v,d,null),p(l,$),p(l,E),p(E,x),p(l,j),w=!0},p(t,l){s=t;const a={};2&l&&(a.nft=s[8]),v.$set(a),(!w||2&l)&&z!==(z=U(s[8].holder)+"")&&V(x,z)},i(t){w||(g(v.$$.fragment,t),w=!0)},o(t){m(v.$$.fragment,t),w=!1},d(t){t&&o(l),N(v)}}}function S(t){let s,l,v,$,x,j,w;const z=[M,G],T=[];function y(t,s){return t[4]&&(t[4].loading||t[4].statsLoading)?0:1}return x=y(t),j=T[x]=z[x](t),{c(){s=a("div"),l=a("h1"),v=e("Holders Giveaway"),$=n(),j.c(),this.h()},l(t){s=r(t,"DIV",{class:!0});var a=c(s);l=r(a,"H1",{class:!0});var e=c(l);v=i(e,"Holders Giveaway"),e.forEach(o),$=h(a),j.l(a),a.forEach(o),this.h()},h(){f(l,"class","page-title"),f(s,"class","content")},m(t,a){u(t,s,a),p(s,l),p(l,v),p(s,$),T[x].m(s,null),w=!0},p(t,[l]){let a=x;x=y(t),x===a?T[x].p(t,l):(E(),m(T[a],1,1,(()=>{T[a]=null})),d(),j=T[x],j?j.p(t,l):(j=T[x]=z[x](t),j.c()),g(j,1),j.m(s,null))},i(t){w||(g(j),w=!0)},o(t){m(j),w=!1},d(t){t&&o(s),T[x].d()}}}function J(t,s,l){let a;v(t,x,(t=>l(4,a=t)));let e,n=[],r=[],c=!1;return $((()=>{x.dispatchUpdate()})),t.$$.update=()=>{1&t.$$.dirty&&e&&async function(){l(3,c=!1),requestAnimationFrame((()=>{l(3,c=!0)}))}()},[e,n,r,c,a,async function(){if(l(3,c=!1),l(2,r=[]),await j(),!x.all)return;const t=n.map((t=>t.unit));t.push("APP-?");const s=x.all.filter((s=>!t.includes(s.unit)));l(2,r=w.shuffle(s)),console.log(r),setTimeout((()=>{l(1,n=[...n,r[50]])}),7e3)},function(t){z[t?"unshift":"push"]((()=>{e=t,l(0,e)}))}]}export default class extends t{constructor(t){super(),s(this,t,J,S,l,{})}}