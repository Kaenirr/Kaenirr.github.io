import{n as b,s as h}from"./scheduler.Jw60DChV.js";const e=[];function d(i,l=b){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const c=!e.length;for(const s of o)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(n=l(r,u)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:_}}var f;const g=((f=globalThis.__sveltekit_1r300cc)==null?void 0:f.base)??"/Kaenirr.github.io";var a;const q=((a=globalThis.__sveltekit_1r300cc)==null?void 0:a.assets)??g;export{q as a,g as b,d as w};