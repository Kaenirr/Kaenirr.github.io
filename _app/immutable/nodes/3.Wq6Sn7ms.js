import{s as fe}from"../chunks/scheduler.fi8CUvgs.js";import{S as me,i as ue,c as A,a as B,m as S,t as v,b as E,d as U,e as b,s as V,o as O,f as w,g as k,p as M,h as d,q as Q,j as D,k as z,r as g,l as W,n as X,w as $e,A as le}from"../chunks/index.OVLYbi5p.js";import{e as y,u as de,o as _e}from"../chunks/each.ScuT7RXG.js";import{g as ve,a as re}from"../chunks/app.ipMXKYUx.js";import{C as xe}from"../chunks/Card.liTK0tRo.js";import{C as be,a as we,U as pe}from"../chunks/Chip.5Kn-rVHI.js";import{C as ke,a as De}from"../chunks/ChipIcon.AhENr6I0.js";import{a as G}from"../chunks/skills.i7Prcmj1.js";import{b as J}from"../chunks/paths.Z16M8_7_.js";import{t as Ee,i as Ie}from"../chunks/experience.Vn-1EuCY.js";import{C as Ce}from"../chunks/CommonPage.F1ZzPRAl.js";function ne(a,t,l){const e=a.slice();return e[6]=t[l],e}function oe(a,t,l){const e=a.slice();return e[9]=t[l],e}function Ve(a){let t,l,e,r=a[9].label+"",s,u,i;return t=new pe({props:{icon:a[9].icon}}),{c(){A(t.$$.fragment),l=V(),e=b("span"),s=O(r),u=V(),this.h()},l(n){B(t.$$.fragment,n),l=M(n),e=w(n,"SPAN",{class:!0});var c=k(e);s=Q(c,r),c.forEach(d),u=M(n),this.h()},h(){D(e,"class","m-l-1")},m(n,c){S(t,n,c),z(n,l,c),z(n,e,c),g(e,s),z(n,u,c),i=!0},p(n,c){const C={};c&2&&(C.icon=n[9].icon),t.$set(C),(!i||c&2)&&r!==(r=n[9].label+"")&&$e(s,r)},i(n){i||(v(t.$$.fragment,n),i=!0)},o(n){E(t.$$.fragment,n),i=!1},d(n){n&&(d(l),d(e),d(u)),U(t,n)}}}function se(a){let t,l;return t=new we({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){S(t,e,r),l=!0},p(e,r){const s={};r&4098&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){U(t,e)}}}function ae(a){let t,l;return t=new De({props:{logo:G(a[6].logo),name:a[6].name,href:`${J}/skills/${a[6].slug}`}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){S(t,e,r),l=!0},p(e,r){const s={};r&1&&(s.logo=G(e[6].logo)),r&1&&(s.name=e[6].name),r&1&&(s.href=`${J}/skills/${e[6].slug}`),t.$set(s)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){U(t,e)}}}function Me(a){let t,l,e,r,s,u,i,n,c,C,I,_,x,P,j=a[0].shortDescription+"",R,K,F,H;l=new be({props:{src:G(a[0].logo),alt:a[0].company,size:55}}),i=new ke({props:{title:`${a[0].name}`}});let L=y(a[1]),$=[];for(let o=0;o<L.length;o+=1)$[o]=se(oe(a,L,o));const he=o=>E($[o],1,1,()=>{$[o]=null});let N=y(a[0].skills),p=[];for(let o=0;o<N.length;o+=1)p[o]=ae(ne(a,N,o));const ge=o=>E(p[o],1,1,()=>{p[o]=null});return{c(){t=b("div"),A(l.$$.fragment),e=V(),r=b("div"),s=b("div"),u=b("h3"),A(i.$$.fragment),n=V(),c=b("div");for(let o=0;o<$.length;o+=1)$[o].c();C=V(),I=b("div"),_=O(a[2]),x=V(),P=b("div"),R=O(j),K=V(),F=b("div");for(let o=0;o<p.length;o+=1)p[o].c();this.h()},l(o){t=w(o,"DIV",{class:!0});var m=k(t);B(l.$$.fragment,m),e=M(m),r=w(m,"DIV",{class:!0});var h=k(r);s=w(h,"DIV",{class:!0});var T=k(s);u=w(T,"H3",{class:!0});var f=k(u);B(i.$$.fragment,f),f.forEach(d),n=M(T),c=w(T,"DIV",{class:!0});var q=k(c);for(let Y=0;Y<$.length;Y+=1)$[Y].l(q);q.forEach(d),T.forEach(d),C=M(h),I=w(h,"DIV",{class:!0});var Z=k(I);_=Q(Z,a[2]),Z.forEach(d),x=M(h),P=w(h,"DIV",{class:!0});var ee=k(P);R=Q(ee,j),ee.forEach(d),K=M(h),F=w(h,"DIV",{class:!0});var te=k(F);for(let Y=0;Y<p.length;Y+=1)p[Y].l(te);te.forEach(d),h.forEach(d),m.forEach(d),this.h()},h(){D(u,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),D(c,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),D(s,"class","col "),D(I,"class","text-[var(--text)] text-[0.9em] font-200"),D(P,"class","experience-description"),D(F,"class","flex flex-row flex-wrap mt-5"),D(r,"class","col ml-0 md:ml-[20px] gap-3 w-full"),D(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(o,m){z(o,t,m),S(l,t,null),g(t,e),g(t,r),g(r,s),g(s,u),S(i,u,null),g(s,n),g(s,c);for(let h=0;h<$.length;h+=1)$[h]&&$[h].m(c,null);g(r,C),g(r,I),g(I,_),g(r,x),g(r,P),g(P,R),g(r,K),g(r,F);for(let h=0;h<p.length;h+=1)p[h]&&p[h].m(F,null);H=!0},p(o,m){const h={};m&1&&(h.src=G(o[0].logo)),m&1&&(h.alt=o[0].company),l.$set(h);const T={};if(m&1&&(T.title=`${o[0].name}`),i.$set(T),m&2){L=y(o[1]);let f;for(f=0;f<L.length;f+=1){const q=oe(o,L,f);$[f]?($[f].p(q,m),v($[f],1)):($[f]=se(q),$[f].c(),v($[f],1),$[f].m(c,null))}for(W(),f=L.length;f<$.length;f+=1)he(f);X()}if((!H||m&1)&&j!==(j=o[0].shortDescription+"")&&$e(R,j),m&1){N=y(o[0].skills);let f;for(f=0;f<N.length;f+=1){const q=ne(o,N,f);p[f]?(p[f].p(q,m),v(p[f],1)):(p[f]=ae(q),p[f].c(),v(p[f],1),p[f].m(F,null))}for(W(),f=N.length;f<p.length;f+=1)ge(f);X()}},i(o){if(!H){v(l.$$.fragment,o),v(i.$$.fragment,o);for(let m=0;m<L.length;m+=1)v($[m]);for(let m=0;m<N.length;m+=1)v(p[m]);H=!0}},o(o){E(l.$$.fragment,o),E(i.$$.fragment,o),$=$.filter(Boolean);for(let m=0;m<$.length;m+=1)E($[m]);p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)E(p[m]);H=!1},d(o){o&&d(t),U(l),U(i),le($,o),le(p,o)}}}function Pe(a){let t,l;return t=new xe({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${J}/experience/${a[0].slug}`,color:a[0].color,$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){S(t,e,r),l=!0},p(e,[r]){const s={};r&1&&(s.href=`${J}/experience/${e[0].slug}`),r&1&&(s.color=e[0].color),r&4099&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){U(t,e)}}}function Ae(a,t,l){let e,{experience:r}=t;const s=ve(r.period.from,r.period.to),u=`${re(r.period.from.getMonth())} ${r.period.from.getFullYear()}`,i=r.period.to?`${re(r.period.to.getMonth())} ${r.period.to.getFullYear()}`:"Present",n=`${u} - ${i} · ${s}`;return a.$$set=c=>{"experience"in c&&l(0,r=c.experience)},a.$$.update=()=>{a.$$.dirty&1&&l(1,e=[{label:r.company,icon:"i-carbon-building"},{label:r.location,icon:"i-carbon-location"},{label:r.contract,icon:"i-carbon-hourglass"}])},[r,e,n]}class Be extends me{constructor(t){super(),ue(this,t,Ae,Pe,fe,{experience:0})}}function ie(a,t,l){const e=a.slice();return e[1]=t[l],e[3]=l,e}function ce(a,t){let l,e,r,s,u,i,n,c,C,I;return u=new pe({props:{icon:"i-carbon-condition-point",classes:""}}),c=new Be({props:{experience:t[1]}}),{key:a,first:null,c(){l=b("div"),e=b("div"),r=V(),s=b("div"),A(u.$$.fragment),i=V(),n=b("div"),A(c.$$.fragment),C=V(),this.h()},l(_){l=w(_,"DIV",{class:!0});var x=k(l);e=w(x,"DIV",{class:!0}),k(e).forEach(d),r=M(x),s=w(x,"DIV",{class:!0});var P=k(s);B(u.$$.fragment,P),P.forEach(d),i=M(x),n=w(x,"DIV",{class:!0});var j=k(n);B(c.$$.fragment,j),j.forEach(d),C=M(x),x.forEach(d),this.h()},h(){D(e,"class","flex-1 hidden lg:flex"),D(s,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),D(n,"class","flex-1 col items-stretch"),D(l,"class",`flex ${t[3]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=l},m(_,x){z(_,l,x),g(l,e),g(l,r),g(l,s),S(u,s,null),g(l,i),g(l,n),S(c,n,null),g(l,C),I=!0},p(_,x){t=_},i(_){I||(v(u.$$.fragment,_),v(c.$$.fragment,_),I=!0)},o(_){E(u.$$.fragment,_),E(c.$$.fragment,_),I=!1},d(_){_&&d(l),U(u),U(c)}}}function Se(a){let t,l=[],e=new Map,r,s=y(a[0]);const u=i=>i[1].slug;for(let i=0;i<s.length;i+=1){let n=ie(a,s,i),c=u(n);e.set(c,l[i]=ce(c,n))}return{c(){t=b("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=w(i,"DIV",{class:!0});var n=k(t);for(let c=0;c<l.length;c+=1)l[c].l(n);n.forEach(d),this.h()},h(){D(t,"class","col items-center relative mt-10 flex-1")},m(i,n){z(i,t,n);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(t,null);r=!0},p(i,n){n&1&&(s=y(i[0]),W(),l=de(l,n,u,1,i,s,e,t,_e,ce,null,ie),X())},i(i){if(!r){for(let n=0;n<s.length;n+=1)v(l[n]);r=!0}},o(i){for(let n=0;n<l.length;n+=1)E(l[n]);r=!1},d(i){i&&d(t);for(let n=0;n<l.length;n+=1)l[n].d()}}}function Ue(a){let t,l;return t=new Ce({props:{title:Ee,$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){S(t,e,r),l=!0},p(e,[r]){const s={};r&16&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){U(t,e)}}}function je(a){return[[...Ie]]}class Je extends me{constructor(t){super(),ue(this,t,je,Ue,fe,{})}}export{Je as component};