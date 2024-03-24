import{s as j,n as h,e as G,f as H,h as v,i as M,j as q,c as T,u as U,g as A,d as D}from"./scheduler.fi8CUvgs.js";import{S as N,i as S,e as C,o as F,f as w,g as B,q as J,h as d,j as f,k as b,r as K,w as L,u as z,t as p,b as g,B as E,l as O,n as P,C as I}from"./index.OVLYbi5p.js";import{g as Q}from"./spread.AQEXjpNi.js";import{t as R}from"./theme.yimnE6UC.js";function V(a){let t,r;return{c(){t=C("h3"),r=F(a[0]),this.h()},l(l){t=w(l,"H3",{class:!0});var e=B(t);r=J(e,a[0]),e.forEach(d),this.h()},h(){f(t,"class","font-[var(--title-f)] text-1.25em")},m(l,e){b(l,t,e),K(t,r)},p(l,[e]){e&1&&L(r,l[0])},i:h,o:h,d(l){l&&d(t)}}}function W(a,t,r){let{title:l}=t;return a.$$set=e=>{"title"in e&&r(0,l=e.title)},[l]}class re extends N{constructor(t){super(),S(this,t,W,V,j,{title:0})}}function X(a){let t,r,l;return{c(){t=C("img"),this.h()},l(e){t=w(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(t,"class",r=v(`w-15px h-15px ${a[2]?"invert-100":""}`)+" svelte-1m94jop"),q(t.src,l=a[1])||f(t,"src",l),f(t,"alt",a[0]),I(t,"chip-icon-logo-inverted",a[5]&&a[2])},m(e,s){b(e,t,s)},p(e,s){s&4&&r!==(r=v(`w-15px h-15px ${e[2]?"invert-100":""}`)+" svelte-1m94jop")&&f(t,"class",r),s&2&&!q(t.src,l=e[1])&&f(t,"src",l),s&1&&f(t,"alt",e[0]),s&36&&I(t,"chip-icon-logo-inverted",e[5]&&e[2])},i:h,o:h,d(e){e&&d(t)}}}function Y(a){let t;const r=a[8].default,l=T(r,a,a[7],null);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,s){l&&l.m(e,s),t=!0},p(e,s){l&&l.p&&(!t||s&128)&&U(l,r,e,e[7],t?D(r,e[7],s,null):A(e[7]),null)},i(e){t||(p(l,e),t=!0)},o(e){g(l,e),t=!1},d(e){l&&l.d(e)}}}function y(a){let t,r,l,e,s;const u=[Y,X],n=[];function m(i,o){return i[6].default?0:1}r=m(a),l=n[r]=u[r](a);let _=[{href:a[4]},{class:e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${a[4]?"cursor-pointer":"cursor-help"} ${a[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"},{"data-help":a[0]}],c={};for(let i=0;i<_.length;i+=1)c=M(c,_[i]);return{c(){t=C(a[4]?"a":"div"),l.c(),this.h()},l(i){t=w(i,((a[4]?"a":"div")||"null").toUpperCase(),{href:!0,class:!0,"data-help":!0});var o=B(t);l.l(o),o.forEach(d),this.h()},h(){E(a[4]?"a":"div")(t,c)},m(i,o){b(i,t,o),n[r].m(t,null),s=!0},p(i,o){let k=r;r=m(i),r===k?n[r].p(i,o):(O(),g(n[k],1,1,()=>{n[k]=null}),P(),l=n[r],l?l.p(i,o):(l=n[r]=u[r](i),l.c()),p(l,1),l.m(t,null)),E(i[4]?"a":"div")(t,c=Q(_,[(!s||o&16)&&{href:i[4]},(!s||o&24&&e!==(e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${i[4]?"cursor-pointer":"cursor-help"} ${i[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"))&&{class:e},(!s||o&1)&&{"data-help":i[0]}]))},i(i){s||(p(l),s=!0)},o(i){g(l),s=!1},d(i){i&&d(t),n[r].d()}}}function Z(a){let t=a[4]?"a":"div",r,l,e=(a[4]?"a":"div")&&y(a);return{c(){e&&e.c(),r=z()},l(s){e&&e.l(s),r=z()},m(s,u){e&&e.m(s,u),b(s,r,u),l=!0},p(s,[u]){s[4],t?j(t,s[4]?"a":"div")?(e.d(1),e=y(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r)):e.p(s,u):(e=y(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r))},i(s){l||(p(e,s),l=!0)},o(s){g(e,s),l=!1},d(s){s&&d(r),e&&e.d(s)}}}function x(a,t,r){let l;G(a,R,o=>r(5,l=o));let{$$slots:e={},$$scope:s}=t;const u=H(e);let{name:n=""}=t,{logo:m=""}=t,{inverted:_=!1}=t,{grayscale:c=!0}=t,{href:i=void 0}=t;return a.$$set=o=>{"name"in o&&r(0,n=o.name),"logo"in o&&r(1,m=o.logo),"inverted"in o&&r(2,_=o.inverted),"grayscale"in o&&r(3,c=o.grayscale),"href"in o&&r(4,i=o.href),"$$scope"in o&&r(7,s=o.$$scope)},[n,m,_,c,i,l,u,s,e]}class se extends N{constructor(t){super(),S(this,t,x,Z,j,{name:0,logo:1,inverted:2,grayscale:3,href:4})}}export{re as C,se as a};