import{s as he,o as ze,n as Fe}from"../chunks/scheduler.2m_-vOVp.js";import{S as _e,i as ge,e as I,c as V,f as P,g as M,a as q,h as $,j as D,k as w,m as L,t as p,b as h,d as y,s as U,o as x,p as z,q as ee,r as F,l as te,n as le,w as re,y as ue,u as ke,z as Ae}from"../chunks/index.q9ZZzrRA.js";import{e as Y}from"../chunks/theme.tUjKhYlT.js";import{t as Ne,i as we}from"../chunks/projects.TjaRhg7h.js";import{a as me,i as Re}from"../chunks/skills.6Wc2S-3E.js";import{C as Te,a as de}from"../chunks/Chip.BOGKtP-N.js";import{c as Ye,g as Ge,a as Ce}from"../chunks/app.8w9zGhSS.js";import{C as He}from"../chunks/Card._OzlIud2.js";import{C as Je,a as Ke}from"../chunks/ChipIcon.wP3hSJrV.js";import{U as Me}from"../chunks/UIcon._QefaBe3.js";import{C as je}from"../chunks/CardDivider.5Q0KBrwe.js";import{b as $e}from"../chunks/paths.nEADxHZH.js";import{C as Oe}from"../chunks/CommonPage.W1jVRdZa.js";function Qe(o){let t,r,e;return r=new Me({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=I("a"),V(r.$$.fragment),this.h()},l(l){t=P(l,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=M(t);q(r.$$.fragment,a),a.forEach($),this.h()},h(){D(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),D(t,"href",o[1]),D(t,"title",o[0]),D(t,"target","_blank"),D(t,"rel","noreferrer"),D(t,"data-help",o[0])},m(l,a){w(l,t,a),L(r,t,null),e=!0},p(l,[a]){(!e||a&2)&&D(t,"href",l[1]),(!e||a&1)&&D(t,"title",l[0]),(!e||a&1)&&D(t,"data-help",l[0])},i(l){e||(p(r.$$.fragment,l),e=!0)},o(l){h(r.$$.fragment,l),e=!1},d(l){l&&$(t),y(r)}}}function We(o,t,r){let{label:e}=t,{to:l}=t;return o.$$set=a=>{"label"in a&&r(0,e=a.label),"to"in a&&r(1,l=a.to)},[e,l]}class Xe extends _e{constructor(t){super(),ge(this,t,We,Qe,he,{label:0,to:1})}}function De(o,t,r){const e=o.slice();return e[5]=t[r],e}function Ee(o,t,r){const e=o.slice();return e[8]=t[r],e}function Se(o){let t,r;return t=new Xe({props:{label:o[8].label??"",to:o[8].to}}),{c(){V(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.label=e[8].label??""),l&1&&(a.to=e[8].to),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Ze(o){let t;return{c(){t=x(o[2])},l(r){t=ee(r,o[2])},m(r,e){w(r,t,e)},p(r,e){e&4&&re(t,r[2])},d(r){r&&$(t)}}}function Ie(o){let t,r;return t=new de({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&2050&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function xe(o){let t;return{c(){t=x(o[1])},l(r){t=ee(r,o[1])},m(r,e){w(r,t,e)},p(r,e){e&2&&re(t,r[1])},d(r){r&&$(t)}}}function Pe(o){let t,r;return t=new Ke({props:{logo:me(o[5].logo),name:o[5].name,href:`${$e}/skills/${o[5].slug}`}}),{c(){V(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.logo=me(e[5].logo)),l&1&&(a.name=e[5].name),l&1&&(a.href=`${$e}/skills/${e[5].slug}`),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function et(o){let t,r,e,l,a,i,c,s,b,g,k,B=o[0].type+"",u,_,E,C,G,H,Z,ne=o[0].shortDescription+"",se,ae,A,N,pe,ie,J,fe,R,K;t=new Te({props:{alt:o[0].name,src:me(o[0].logo),size:40,radius:"0"}}),l=new Je({props:{title:o[0].name}});let O=Y(o[0].links),d=[];for(let n=0;n<O.length;n+=1)d[n]=Se(Ee(o,O,n));const Be=n=>h(d[n],1,1,()=>{d[n]=null});s=new je({}),N=new de({props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}});let j=o[2]!==o[1]&&Ie(o);J=new je({});let Q=Y(o[0].skills),v=[];for(let n=0;n<Q.length;n+=1)v[n]=Pe(De(o,Q,n));const Ue=n=>h(v[n],1,1,()=>{v[n]=null});return{c(){V(t.$$.fragment),r=U(),e=I("div"),V(l.$$.fragment),a=U(),i=I("div");for(let n=0;n<d.length;n+=1)d[n].c();c=U(),V(s.$$.fragment),b=U(),g=I("div"),k=I("p"),u=x(B),_=U(),E=I("p"),C=x(o[3]),G=U(),H=I("div"),Z=I("p"),se=x(ne),ae=U(),A=I("div"),V(N.$$.fragment),pe=U(),j&&j.c(),ie=U(),V(J.$$.fragment),fe=U(),R=I("div");for(let n=0;n<v.length;n+=1)v[n].c();this.h()},l(n){q(t.$$.fragment,n),r=z(n),e=P(n,"DIV",{class:!0});var f=M(e);q(l.$$.fragment,f),a=z(f),i=P(f,"DIV",{class:!0});var S=M(i);for(let X=0;X<d.length;X+=1)d[X].l(S);S.forEach($),f.forEach($),c=z(n),q(s.$$.fragment,n),b=z(n),g=P(n,"DIV",{class:!0});var W=M(g);k=P(W,"P",{});var oe=M(k);u=ee(oe,B),oe.forEach($),_=z(W),E=P(W,"P",{});var m=M(E);C=ee(m,o[3]),m.forEach($),W.forEach($),G=z(n),H=P(n,"DIV",{class:!0});var T=M(H);Z=P(T,"P",{class:!0});var ve=M(Z);se=ee(ve,ne),ve.forEach($),T.forEach($),ae=z(n),A=P(n,"DIV",{class:!0});var ce=M(A);q(N.$$.fragment,ce),pe=z(ce),j&&j.l(ce),ce.forEach($),ie=z(n),q(J.$$.fragment,n),fe=z(n),R=P(n,"DIV",{class:!0});var be=M(R);for(let X=0;X<v.length;X+=1)v[X].l(be);be.forEach($),this.h()},h(){D(i,"class","row"),D(e,"class","m-t-20px row justify-between items-center"),D(g,"class","row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"),D(Z,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"),D(H,"class","col sm:h-100px md:h-160px"),D(A,"class","row justify-between text-0.8em font-400"),D(R,"class","row flex-wrap")},m(n,f){L(t,n,f),w(n,r,f),w(n,e,f),L(l,e,null),F(e,a),F(e,i);for(let S=0;S<d.length;S+=1)d[S]&&d[S].m(i,null);w(n,c,f),L(s,n,f),w(n,b,f),w(n,g,f),F(g,k),F(k,u),F(g,_),F(g,E),F(E,C),w(n,G,f),w(n,H,f),F(H,Z),F(Z,se),w(n,ae,f),w(n,A,f),L(N,A,null),F(A,pe),j&&j.m(A,null),w(n,ie,f),L(J,n,f),w(n,fe,f),w(n,R,f);for(let S=0;S<v.length;S+=1)v[S]&&v[S].m(R,null);K=!0},p(n,f){const S={};f&1&&(S.alt=n[0].name),f&1&&(S.src=me(n[0].logo)),t.$set(S);const W={};if(f&1&&(W.title=n[0].name),l.$set(W),f&1){O=Y(n[0].links);let m;for(m=0;m<O.length;m+=1){const T=Ee(n,O,m);d[m]?(d[m].p(T,f),p(d[m],1)):(d[m]=Se(T),d[m].c(),p(d[m],1),d[m].m(i,null))}for(te(),m=O.length;m<d.length;m+=1)Be(m);le()}(!K||f&1)&&B!==(B=n[0].type+"")&&re(u,B),(!K||f&8)&&re(C,n[3]),(!K||f&1)&&ne!==(ne=n[0].shortDescription+"")&&re(se,ne);const oe={};if(f&2052&&(oe.$$scope={dirty:f,ctx:n}),N.$set(oe),n[2]!==n[1]?j?(j.p(n,f),f&6&&p(j,1)):(j=Ie(n),j.c(),p(j,1),j.m(A,null)):j&&(te(),h(j,1,1,()=>{j=null}),le()),f&1){Q=Y(n[0].skills);let m;for(m=0;m<Q.length;m+=1){const T=De(n,Q,m);v[m]?(v[m].p(T,f),p(v[m],1)):(v[m]=Pe(T),v[m].c(),p(v[m],1),v[m].m(R,null))}for(te(),m=Q.length;m<v.length;m+=1)Ue(m);le()}},i(n){if(!K){p(t.$$.fragment,n),p(l.$$.fragment,n);for(let f=0;f<O.length;f+=1)p(d[f]);p(s.$$.fragment,n),p(N.$$.fragment,n),p(j),p(J.$$.fragment,n);for(let f=0;f<Q.length;f+=1)p(v[f]);K=!0}},o(n){h(t.$$.fragment,n),h(l.$$.fragment,n),d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)h(d[f]);h(s.$$.fragment,n),h(N.$$.fragment,n),h(j),h(J.$$.fragment,n),v=v.filter(Boolean);for(let f=0;f<v.length;f+=1)h(v[f]);K=!1},d(n){n&&($(r),$(e),$(c),$(b),$(g),$(G),$(H),$(ae),$(A),$(ie),$(fe),$(R)),y(t,n),y(l),ue(d,n),y(s,n),y(N),j&&j.d(),y(J,n),ue(v,n)}}}function tt(o){let t,r;return t=new He({props:{color:o[0].color,href:`${$e}/projects/${o[0].slug}`,$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,[l]){const a={};l&1&&(a.color=e[0].color),l&1&&(a.href=`${$e}/projects/${e[0].slug}`),l&2063&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function lt(o,t,r){let e,l,a,{project:i}=t;return o.$$set=c=>{"project"in c&&r(0,i=c.project)},o.$$.update=()=>{o.$$.dirty&1&&Ye(i.period.from,i.period.to),o.$$.dirty&1&&r(3,e=`${Ge(i.period.from,i.period.to??new Date(Date.now()+1e3*60*60*24))}`),o.$$.dirty&1&&r(2,l=`${Ce(i.period.from.getMonth())} ${i.period.from.getFullYear()}`),o.$$.dirty&1&&r(1,a=i.period.to?`${Ce(i.period.to.getMonth())} ${i.period.to.getFullYear()}`:"now")},[i,a,l,e]}class rt extends _e{constructor(t){super(),ge(this,t,lt,tt,he,{project:0})}}function Ve(o,t,r){const e=o.slice();return e[7]=t[r],e}function qe(o,t,r){const e=o.slice();return e[10]=t[r],e}function nt(o){let t=o[10].name+"",r;return{c(){r=x(t)},l(e){r=ee(e,t)},m(e,l){w(e,r,l)},p(e,l){l&1&&t!==(t=e[10].name+"")&&re(r,t)},d(e){e&&$(r)}}}function Le(o){let t,r;function e(){return o[4](o[10])}return t=new de({props:{active:o[10].isSelected,classes:"text-0.8em",$$slots:{default:[nt]},$$scope:{ctx:o}}}),t.$on("click",e),{c(){V(t.$$.fragment)},l(l){q(t.$$.fragment,l)},m(l,a){L(t,l,a),r=!0},p(l,a){o=l;const i={};a&1&&(i.active=o[10].isSelected),a&8193&&(i.$$scope={dirty:a,ctx:o}),t.$set(i)},i(l){r||(p(t.$$.fragment,l),r=!0)},o(l){h(t.$$.fragment,l),r=!1},d(l){y(t,l)}}}function ot(o){let t,r,e=Y(o[1]),l=[];for(let i=0;i<e.length;i+=1)l[i]=ye(Ve(o,e,i));const a=i=>h(l[i],1,1,()=>{l[i]=null});return{c(){t=I("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=P(i,"DIV",{class:!0});var c=M(t);for(let s=0;s<l.length;s+=1)l[s].l(c);c.forEach($),this.h()},h(){D(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,c){w(i,t,c);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);r=!0},p(i,c){if(c&2){e=Y(i[1]);let s;for(s=0;s<e.length;s+=1){const b=Ve(i,e,s);l[s]?(l[s].p(b,c),p(l[s],1)):(l[s]=ye(b),l[s].c(),p(l[s],1),l[s].m(t,null))}for(te(),s=e.length;s<l.length;s+=1)a(s);le()}},i(i){if(!r){for(let c=0;c<e.length;c+=1)p(l[c]);r=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)h(l[c]);r=!1},d(i){i&&$(t),ue(l,i)}}}function st(o){let t,r,e,l,a="Could not find anything...",i;return r=new Me({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=I("div"),V(r.$$.fragment),e=U(),l=I("p"),l.textContent=a,this.h()},l(c){t=P(c,"DIV",{class:!0});var s=M(t);q(r.$$.fragment,s),e=z(s),l=P(s,"P",{class:!0,"data-svelte-h":!0}),Ae(l)!=="svelte-1jyyf6v"&&(l.textContent=a),s.forEach($),this.h()},h(){D(l,"class","font-300"),D(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,s){w(c,t,s),L(r,t,null),F(t,e),F(t,l),i=!0},p:Fe,i(c){i||(p(r.$$.fragment,c),i=!0)},o(c){h(r.$$.fragment,c),i=!1},d(c){c&&$(t),y(r)}}}function ye(o){let t,r;return t=new rt({props:{project:o[7]}}),{c(){V(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&2&&(a.project=e[7]),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function at(o){let t,r,e,l,a,i,c=Y(o[0]),s=[];for(let u=0;u<c.length;u+=1)s[u]=Le(qe(o,c,u));const b=u=>h(s[u],1,1,()=>{s[u]=null}),g=[st,ot],k=[];function B(u,_){return u[1].length===0?0:1}return e=B(o),l=k[e]=g[e](o),{c(){t=I("div");for(let u=0;u<s.length;u+=1)s[u].c();r=U(),l.c(),a=ke(),this.h()},l(u){t=P(u,"DIV",{class:!0});var _=M(t);for(let E=0;E<s.length;E+=1)s[E].l(_);_.forEach($),r=z(u),l.l(u),a=ke(),this.h()},h(){D(t,"class","projects-filters")},m(u,_){w(u,t,_);for(let E=0;E<s.length;E+=1)s[E]&&s[E].m(t,null);w(u,r,_),k[e].m(u,_),w(u,a,_),i=!0},p(u,_){if(_&5){c=Y(u[0]);let C;for(C=0;C<c.length;C+=1){const G=qe(u,c,C);s[C]?(s[C].p(G,_),p(s[C],1)):(s[C]=Le(G),s[C].c(),p(s[C],1),s[C].m(t,null))}for(te(),C=c.length;C<s.length;C+=1)b(C);le()}let E=e;e=B(u),e===E?k[e].p(u,_):(te(),h(k[E],1,1,()=>{k[E]=null}),le(),l=k[e],l?l.p(u,_):(l=k[e]=g[e](u),l.c()),p(l,1),l.m(a.parentNode,a))},i(u){if(!i){for(let _=0;_<c.length;_+=1)p(s[_]);p(l),i=!0}},o(u){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)h(s[_]);h(l),i=!1},d(u){u&&($(t),$(r),$(a)),ue(s,u),k[e].d(u)}}}function it(o){let t,r;return t=new Oe({props:{title:Ne,$$slots:{default:[at]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,[l]){const a={};l&8195&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function ft(o,t,r){let e=Re.filter(b=>we.some(g=>g.skills.some(k=>k.slug===b.slug))),l="",a=[];const i=b=>e.some(g=>g.slug===b&&g.isSelected),c=b=>{r(0,e=e.map(g=>(g.slug===b&&(g.isSelected=!i(b)),g)))};ze(()=>{if(location.search){const k=new URLSearchParams(location.search).get("item");k&&r(3,l=k)}});const s=b=>c(b.slug);return o.$$.update=()=>{o.$$.dirty&9&&r(1,a=we.filter(b=>{const g=e.every(B=>!B.isSelected)||b.skills.some(B=>e.some(u=>u.isSelected&&u.slug===B.slug)),k=l.trim().length===0||b.name.trim().toLowerCase().includes(l.trim().toLowerCase());return g&&k}))},[e,a,c,l,s]}class Ct extends _e{constructor(t){super(),ge(this,t,ft,it,he,{})}}export{Ct as component};