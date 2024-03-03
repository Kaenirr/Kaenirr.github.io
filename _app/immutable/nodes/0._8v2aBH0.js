import{s as C,n as S,c as ee,q as ne,u as G,v as ae,w as le,x as re,o as oe}from"../chunks/scheduler.CCK3GfVR.js";import{S as N,i as H,e as _,s as I,c as b,a as x,g as q,f as D,d as h,h as u,k as E,l as f,z as ce,A as ie,t as O,b as B,v as Q,w as X,x as Y,q as M,o as A,y as Z}from"../chunks/index.4n2fF_ZY.js";import{w as de,b as te}from"../chunks/paths.u4mGmt00.js";function fe(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const ue=!0,Te=Object.freeze(Object.defineProperty({__proto__:null,prerender:ue},Symbol.toStringTag,{value:"Module"})),he=[{title:"Projects",to:"/projects"},{title:"Skills",to:"/skills"},{title:"Resume",to:"/resume"}],se="@riadh-adrani-theme",me=s=>{localStorage.setItem(se,JSON.stringify(s))},P=de(!1),T=s=>P.update(e=>{var n;const t=typeof s=="boolean"?s:!e;return me(t),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",t?"dark":"light"),t}),ve=()=>{const s=localStorage.getItem(se);s?T(JSON.parse(s)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?T(!0):T(!1)};function pe(s,e,t){const n=s.slice();return n[2]=e[t],n}function _e(s){let e,t,n=s[2].title+"",c,d;return{c(){e=_("a"),t=_("span"),c=O(n),d=I(),this.h()},l(l){e=b(l,"A",{href:!0,class:!0});var v=x(e);t=b(v,"SPAN",{class:!0});var m=x(t);c=B(m,n),m.forEach(h),d=D(v),v.forEach(h),this.h()},h(){u(t,"class","nav-bar-item-label svelte-wpwfj0"),u(e,"href",`${te}${s[2].to}`),u(e,"class","nav-bar-item !text-[var(--secondary-text)] svelte-wpwfj0")},m(l,v){E(l,e,v),f(e,t),f(t,c),f(e,d)},p:S,d(l){l&&h(e)}}}function be(s){let e;return{c(){e=O("Light")},l(t){e=B(t,"Light")},m(t,n){E(t,e,n)},d(t){t&&h(e)}}}function ge(s){let e;return{c(){e=O("Dark")},l(t){e=B(t,"Dark")},m(t,n){E(t,e,n)},d(t){t&&h(e)}}}function we(s){let e,t,n,c='<span class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis">Kaenirr</span>',d,l,v="Kaenirr",m,w,i,a,o,g,V,z,J=fe(he),$=[];for(let r=0;r<J.length;r+=1)$[r]=_e(pe(s,J,r));function K(r,k){return r[0]?ge:be}let j=K(s),y=j(s);return{c(){e=_("div"),t=_("nav"),n=_("a"),n.innerHTML=c,d=I(),l=_("div"),l.textContent=v,m=I(),w=_("div");for(let r=0;r<$.length;r+=1)$[r].c();i=I(),a=_("div"),o=_("div"),g=_("button"),y.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var k=x(e);t=b(k,"NAV",{class:!0});var p=x(t);n=b(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(n)!=="svelte-b8ece1"&&(n.innerHTML=c),d=D(p),l=b(p,"DIV",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-1vqdlwb"&&(l.textContent=v),m=D(p),w=b(p,"DIV",{class:!0});var R=x(w);for(let L=0;L<$.length;L+=1)$[L].l(R);R.forEach(h),i=D(p),a=b(p,"DIV",{class:!0});var U=x(a);o=b(U,"DIV",{class:!0});var W=x(o);g=b(W,"BUTTON",{class:!0});var F=x(g);y.l(F),F.forEach(h),W.forEach(h),U.forEach(h),p.forEach(h),k.forEach(h),this.h()},h(){u(n,"href",te+"/"),u(n,"class","nav-bar-left decoration-none w-auto Smd:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),u(l,"class","flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center"),u(w,"class","flex-row flex-1 self-center h-full justify-center hidden md:flex"),u(g,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),u(o,"class","row hidden md:flex"),u(a,"class","row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"),u(t,"class","container flex flex-row items-center text-sm"),u(e,"class","nav-bar svelte-wpwfj0")},m(r,k){E(r,e,k),f(e,t),f(t,n),f(t,d),f(t,l),f(t,m),f(t,w);for(let p=0;p<$.length;p+=1)$[p]&&$[p].m(w,null);f(t,i),f(t,a),f(a,o),f(o,g),y.m(g,null),V||(z=ce(g,"click",s[1]),V=!0)},p(r,[k]){j!==(j=K(r))&&(y.d(1),y=j(r),y&&(y.c(),y.m(g,null)))},i:S,o:S,d(r){r&&h(e),ie($,r),y.d(),V=!1,z()}}}function xe(s,e,t){let n;return ee(s,P,d=>t(0,n=d)),[n,()=>T()]}class $e extends N{constructor(e){super(),H(this,e,xe,we,C,{})}}function ye(s){let e,t="<h1>This page is WIP</h1>";return{c(){e=_("div"),e.innerHTML=t,this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-i4ufzf"&&(e.innerHTML=t),this.h()},h(){u(e,"class","bottom-bar svelte-1itqpmi")},m(n,c){E(n,e,c)},p:S,i:S,o:S,d(n){n&&h(e)}}}class ke extends N{constructor(e){super(),H(this,e,null,ye,C,{})}}function Se(s){let e,t,n,c,d,l,v,m;t=new $e({});const w=s[2].default,i=ne(w,s,s[1],null);return l=new ke({}),{c(){e=_("div"),Q(t.$$.fragment),n=I(),c=_("div"),i&&i.c(),d=I(),Q(l.$$.fragment),this.h()},l(a){e=b(a,"DIV",{class:!0});var o=x(e);X(t.$$.fragment,o),n=D(o),c=b(o,"DIV",{class:!0});var g=x(c);i&&i.l(g),g.forEach(h),d=D(o),X(l.$$.fragment,o),o.forEach(h),this.h()},h(){u(c,"class","content container svelte-mb6t29"),u(e,"class",v=G(`body contents ${s[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(a,o){E(a,e,o),Y(t,e,null),f(e,n),f(e,c),i&&i.m(c,null),f(e,d),Y(l,e,null),m=!0},p(a,[o]){i&&i.p&&(!m||o&2)&&ae(i,w,a,a[1],m?re(w,a[1],o,null):le(a[1]),null),(!m||o&1&&v!==(v=G(`body contents ${a[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&u(e,"class",v)},i(a){m||(M(t.$$.fragment,a),M(i,a),M(l.$$.fragment,a),m=!0)},o(a){A(t.$$.fragment,a),A(i,a),A(l.$$.fragment,a),m=!1},d(a){a&&h(e),Z(t),i&&i.d(a),Z(l)}}}function Ie(s,e,t){let n;ee(s,P,l=>t(0,n=l));let{$$slots:c={},$$scope:d}=e;return oe(()=>ve()),s.$$set=l=>{"$$scope"in l&&t(1,d=l.$$scope)},[n,d,c]}class Ve extends N{constructor(e){super(),H(this,e,Ie,Se,C,{})}}export{Ve as component,Te as universal};