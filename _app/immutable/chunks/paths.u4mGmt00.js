import{n as c,s as _}from"./scheduler.CCK3GfVR.js";const e=[];function d(i,l=c){let n;const o=new Set;function r(t){if(_(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function h(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,u)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:h}}var f;const g=((f=globalThis.__sveltekit_hz4v2)==null?void 0:f.base)??"/Kaenirr.github.io";var a;const z=((a=globalThis.__sveltekit_hz4v2)==null?void 0:a.assets)??g;export{z as a,g as b,d as w};