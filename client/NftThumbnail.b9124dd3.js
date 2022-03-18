import{O as s,S as t,i as a,s as n,e as i,k as r,c as l,a as e,m as c,d as o,J as u,f,g as h,h as p,p as d,r as m,l as g,n as $,o as v,x as w,P as y,y as b,A as E,D as k,z as x,E as I,Q as j,t as A,b as D,j as L,u as N,w as S,L as C,M as V,N as M,R as P}from"./client.719f909f.js";import{L as R}from"./LoadingInline.2ef1c46e.js";function W(s){const t=s-1;return t*t*t+1}function z(t,{delay:a=0,duration:n=400,easing:i=s}={}){const r=+getComputedStyle(t).opacity;return{delay:a,duration:n,easing:i,css:s=>"opacity: "+s*r}}function G(s,{delay:t=0,duration:a=400,easing:n=W,start:i=0,opacity:r=0}={}){const l=getComputedStyle(s),e=+l.opacity,c="none"===l.transform?"":l.transform,o=1-i,u=e*(1-r);return{delay:t,duration:a,easing:n,css:(s,t)=>`\n\t\t\ttransform: ${c} scale(${1-o*t});\n\t\t\topacity: ${e-u*t}\n\t\t`}}const H=["/ipfs/:hash.jpeg","https://cloudflare-ipfs.com/ipfs/:hash","https://gateway.ipfs.io/ipfs/:hash","https://ipfs.io/ipfs/:hash","https://gateway.pinata.cloud/ipfs/:hash","https://dweb.link/ipfs/:hash"];function J(s){return s.startsWith("ipfs://")?s.replace("ipfs://","").replace("#i",""):s}function O(s){let t,a,n,g,$,v,y,b=s[1]&&Q();return{c(){t=i("div"),a=i("img"),g=r(),b&&b.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var n=e(t);a=l(n,"IMG",{src:!0,alt:!0,class:!0}),g=c(n),b&&b.l(n),n.forEach(o),this.h()},h(){u(a.src,n=s[0])||f(a,"src",n),f(a,"alt",s[2]),f(a,"class","svelte-fbws8x"),f(t,"class","img-wrapper svelte-fbws8x")},m(n,i){h(n,t,i),p(t,a),p(t,g),b&&b.m(t,null),$=!0,v||(y=[d(a,"load",s[3]),d(a,"error",s[4])],v=!0)},p(s,i){(!$||1&i&&!u(a.src,n=s[0]))&&f(a,"src",n),(!$||4&i)&&f(a,"alt",s[2]),s[1]?b?2&i&&m(b,1):(b=Q(),b.c(),m(b,1),b.m(t,null)):b&&(E(),w(b,1,1,(()=>{b=null})),k())},i(s){$||(m(b),$=!0)},o(s){w(b),$=!1},d(s){s&&o(t),b&&b.d(),v=!1,x(y)}}}function Q(s){let t,a,n,r;return a=new R({}),{c(){t=i("div"),g(a.$$.fragment),this.h()},l(s){t=l(s,"DIV",{class:!0});var n=e(t);$(a.$$.fragment,n),n.forEach(o),this.h()},h(){f(t,"class","loader svelte-fbws8x")},m(s,n){h(s,t,n),v(a,t,null),r=!0},i(s){r||(m(a.$$.fragment,s),n&&n.end(1),r=!0)},o(s){w(a.$$.fragment,s),s&&(n=y(t,z,{duration:300})),r=!1},d(s){s&&o(t),b(a),s&&n&&n.end()}}}function T(s){let t,a,n=s[0]&&O(s);return{c(){n&&n.c(),t=I()},l(s){n&&n.l(s),t=I()},m(s,i){n&&n.m(s,i),h(s,t,i),a=!0},p(s,[a]){s[0]?n?(n.p(s,a),1&a&&m(n,1)):(n=O(s),n.c(),m(n,1),n.m(t.parentNode,t)):n&&(E(),w(n,1,1,(()=>{n=null})),k())},i(s){a||(m(n),a=!0)},o(s){w(n),a=!1},d(s){n&&n.d(s),s&&o(t)}}}function q(s,t,a){let n,{src:i}=t,{alt:r}=t,{loading:l=!0}=t,e=0;function c(){n&&a(0,i=H[e].replace(":hash",n))}return j((()=>{i&&i.startsWith("ipfs://")&&(n=J(i),c())})),s.$$set=s=>{"src"in s&&a(0,i=s.src),"alt"in s&&a(2,r=s.alt),"loading"in s&&a(1,l=s.loading)},s.$$.update=()=>{1&s.$$.dirty&&a(1,l=!0)},[i,l,r,function(){a(1,l=!1)},function(){e++,c()}]}class B extends t{constructor(s){super(),a(this,s,q,T,n,{src:0,alt:2,loading:1})}}function F(s){let t,a,n,r,c=s[0].tag+"";return{c(){t=i("span"),a=A(c),this.h()},l(s){t=l(s,"SPAN",{class:!0});var n=e(t);a=D(n,c),n.forEach(o),this.h()},h(){f(t,"class","tag svelte-1mnkbhw")},m(s,n){h(s,t,n),p(t,a),r=!0},p(s,t){(!r||1&t)&&c!==(c=s[0].tag+"")&&L(a,c)},i(s){r||(s&&N((()=>{n||(n=S(t,z,{duration:300},!0)),n.run(1)})),r=!0)},o(s){s&&(n||(n=S(t,z,{duration:300},!1)),n.run(0)),r=!1},d(s){s&&o(t),s&&n&&n.end()}}}function K(s){let t,a,n,u,y,x,I,j,N,S,P,R=s[0].unit+"",W=s[0].tag&&!s[1]&&F(s);function z(t){s[3](t)}let G={src:s[0].url,alt:s[0].unit};return void 0!==s[1]&&(G.loading=s[1]),u=new B({props:G}),C.push((()=>V(u,"loading",z))),{c(){t=i("article"),W&&W.c(),a=r(),n=i("div"),g(u.$$.fragment),x=r(),I=i("h2"),j=A(R),this.h()},l(s){t=l(s,"ARTICLE",{class:!0});var i=e(t);W&&W.l(i),a=c(i),n=l(i,"DIV",{class:!0});var r=e(n);$(u.$$.fragment,r),r.forEach(o),x=c(i),I=l(i,"H2",{class:!0});var f=e(I);j=D(f,R),f.forEach(o),i.forEach(o),this.h()},h(){f(n,"class","thumbnail svelte-1mnkbhw"),f(I,"class","thumbnail-title svelte-1mnkbhw"),f(t,"class","wrapper svelte-1mnkbhw")},m(i,r){h(i,t,r),W&&W.m(t,null),p(t,a),p(t,n),v(u,n,null),p(t,x),p(t,I),p(I,j),N=!0,S||(P=d(t,"click",s[2]),S=!0)},p(s,[n]){s[0].tag&&!s[1]?W?(W.p(s,n),3&n&&m(W,1)):(W=F(s),W.c(),m(W,1),W.m(t,a)):W&&(E(),w(W,1,1,(()=>{W=null})),k());const i={};1&n&&(i.src=s[0].url),1&n&&(i.alt=s[0].unit),!y&&2&n&&(y=!0,i.loading=s[1],M((()=>y=!1))),u.$set(i),(!N||1&n)&&R!==(R=s[0].unit+"")&&L(j,R)},i(s){N||(m(W),m(u.$$.fragment,s),N=!0)},o(s){w(W),w(u.$$.fragment,s),N=!1},d(s){s&&o(t),W&&W.d(),b(u),S=!1,P()}}}function U(s,t,a){let{nft:n={}}=t,i=!0;return s.$$set=s=>{"nft"in s&&a(0,n=s.nft)},[n,i,function(t){P.call(this,s,t)},function(s){i=s,a(1,i)}]}class X extends t{constructor(s){super(),a(this,s,U,K,n,{nft:0})}}export{B as A,X as N,J as g,G as s};
