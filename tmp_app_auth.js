// REMOVED: frontend build artifact (minified).
// This file previously contained minified bundle output and embedded secrets.
// For security, the file content has been removed from the repository HEAD.

export default {};
import{j as e,u as t}from"./index-BR3xqJln-1765573536099.js";import{r,u as s,N as a,L as n,a as i,R as o,b as l,B as c,c as d,d as u}from"./router-Ch7Tu9Z_-1765573536099.js";import{m as h,C as m,T as p,Z as g,A as f,a as x,b as y,M as b,S as w,c as v,L as N,E as j,d as k,U as S,e as E,f as I,g as C,G as _,h as T,i as A,j as P,H as R,k as O,X as L,l as D,n as U,o as M,I as F,D as B,p as $,P as H,q as z,r as V,s as G,t as q,u as W,B as J,v as K,w as Z,x as X}from"./ui-zhRHp9Yr-1765573536099.js";import"./vendor-QYCSsVv3-1765573536099.js";let Y,Q,ee,te={data:""},re=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||te},se=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ae=/\/\*[^]*?\*\/|  +/g,ne=/\n+/g,ie=(e,t)=>{let r="",s="",a="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+i+";":s+="f"==n[1]?ie(i,n):n+"{"+ie(i,"k"==n[1]?"":t)+"}":"object"==typeof i?s+=ie(i,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=ie.p?ie.p(n,i):n+":"+i+";")}return r+(t&&a?t+"{"+a+"}":a)+s},oe={},le=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+le(e[r]);return t}return e},ce=(e,t,r,s,a)=>{let n=le(e),i=oe[n]||(oe[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!oe[i]){let t=n!==e?e:(e=>{let t,r,s=[{}];for(;t=se.exec(e.replace(ae,""));)t[4]?s.shift():t[3]?(r=t[3].replace(ne," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(ne," ").trim();return s[0]})(e);oe[i]=ie(a?{["@keyframes "+i]:t}:t,r?"":"."+i)}let o=r&&oe.g?oe.g:null;return r&&(oe.g=oe[i]),((e,t,r,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(oe[i],t,s,o),i};function de(e){let t=this||{},r=e.call?e(t.p):e;return ce(r.unshift?r.raw?((e,t,r)=>e.reduce((e,s,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":ie(e,""):!1===e?"":e}return e+s+(null==n?"":n)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,re(t.target),t.g,t.o,t.k)}de.bind({g:1});let ue=de.bind({k:1});function he(e,t){let r=this||{};return function(){let s=arguments;function a(t,n){let i=Object.assign({},t),o=i.className||a.className;r.p=Object.assign({theme:Q&&Q()},i),r.o=/ *go\d+/.test(o),i.className=de.apply(r,s)+(o?" "+o:"");let l=e;return e[0]&&(l=i.as||e,delete i.as),ee&&l[0]&&ee(i),Y(l,i)}return t?t(a):a}}var me=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,pe=(()=>{let e=0;return()=>(++e).toString()})(),ge=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),fe="default",xe=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return xe(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},ye=[],be={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},we={},ve=(e,t=fe)=>{we[t]=xe(we[t]||be,e),ye.forEach(([e,r])=>{e===t&&r(we[t])})},Ne=e=>Object.keys(we).forEach(t=>ve(e,t)),je=(e=fe)=>t=>{ve(t,e)},ke={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Se=e=>(t,r)=>{let s=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||pe()}))(t,e,r);return je(s.toasterId||(e=>Object.keys(we).find(t=>we[t].toasts.some(t=>t.id===e)))(s.id))({type:2,toast:s}),s.id},Ee=(e,t)=>Se("blank")(e,t);Ee.error=Se("error"),Ee.success=Se("success"),Ee.loading=Se("loading"),Ee.custom=Se("custom"),Ee.dismiss=(e,t)=>{let r={type:3,toastId:e};t?je(t)(r):Ne(r)},Ee.dismissAll=e=>Ee.dismiss(void 0,e),Ee.remove=(e,t)=>{let r={type:4,toastId:e};t?je(t)(r):Ne(r)},Ee.removeAll=e=>Ee.remove(void 0,e),Ee.promise=(e,t,r)=>{let s=Ee.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?me(t.success,e):void 0;return a?Ee.success(a,{id:s,...r,...null==r?void 0:r.success}):Ee.dismiss(s),e}).catch(e=>{let a=t.error?me(t.error,e):void 0;a?Ee.error(a,{id:s,...r,...null==r?void 0:r.error}):Ee.dismiss(s)}),e};var Ie=(e,t="default")=>{let{toasts:s,pausedAt:a}=((e={},t=fe)=>{let[s,a]=r.useState(we[t]||be),n=r.useRef(we[t]);r.useEffect(()=>(n.current!==we[t]&&a(we[t]),ye.push([t,a]),()=>{let e=ye.findIndex(([e])=>e===t);e>-1&&ye.splice(e,1)}),[t]);let i=s.toasts.map(t=>{var r,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||ke[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...s,toasts:i}})(e,t),n=r.useRef(new Map).current,i=r.useCallback((e,t=1e3)=>{if(n.has(e))return;let r=setTimeout(()=>{n.delete(e),o({type:4,toastId:e})},t);n.set(e,r)},[]);r.useEffect(()=>{if(a)return;let e=Date.now(),r=s.map(r=>{if(r.duration===1/0)return;let s=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(!(s<0))return setTimeout(()=>Ee.dismiss(r.id,t),s);r.visible&&Ee.dismiss(r.id)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[s,a,t]);let o=r.useCallback(je(t),[t]),l=r.useCallback(()=>{o({type:5,time:Date.now()})},[o]),c=r.useCallback((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),d=r.useCallback(()=>{a&&o({type:6,time:Date.now()})},[a,o]),u=r.useCallback((e,t)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:n}=t||{},i=s.filter(t=>(t.position||n)===(e.position||n)&&t.height),o=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<o&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[s]);return r.useEffect(()=>{s.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=n.get(e.id);t&&(clearTimeout(t),n.delete(e.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},Ce=ue`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_e=ue`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=ue`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ae=he("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_e} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Te} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pe=ue`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Re=he("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Pe} 1s linear infinite;
`,Oe=ue`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Le=ue`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,De=he("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Le} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ue=he("div")`
  position: absolute;
`,Me=he("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Fe=ue`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Be=he("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$e=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?r.createElement(Be,null,t):t:"blank"===s?null:r.createElement(Me,null,r.createElement(Re,{...a}),"loading"!==s&&r.createElement(Ue,null,"error"===s?r.createElement(Ae,{...a}):r.createElement(De,{...a})))},He=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,ze=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Ve=he("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ge=he("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,qe=r.memo(({toast:e,position:t,style:s,children:a})=>{let n=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[s,a]=ge()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[He(r),ze(r)];return{animation:t?`${ue(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ue(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=r.createElement($e,{toast:e}),o=r.createElement(Ge,{...e.ariaProps},me(e.message,e));return r.createElement(Ve,{className:e.className,style:{...n,...s,...e.style}},"function"==typeof a?a({icon:i,message:o}):r.createElement(r.Fragment,null,i,o))});!function(e,t,r,s){ie.p=t,Y=e,Q=r,ee=s}(r.createElement);var We=({id:e,className:t,style:s,onHeightUpdate:a,children:n})=>{let i=r.useCallback(t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;a(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return r.createElement("div",{ref:i,className:t,style:s},n)},Je=de`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ke=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:n,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:c,handlers:d}=Ie(s,i);return r.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(s=>{let i=s.position||t,o=((e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ge()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...a}})(i,d.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}));return r.createElement(We,{id:s.id,key:s.id,onHeightUpdate:d.updateHeight,className:s.visible?Je:"",style:o},"custom"===s.type?me(s.message,s):n?n(s):r.createElement(qe,{toast:s,position:i}))}))},Ze=Ee;const Xe="https://backend-holy-fog-6984.fly.dev/api";let Ye=Xe.replace(/\/$/,"");Ye||(Ye=Xe),Ye&&!Ye.endsWith("/api")&&(Ye=`${Ye}/api`),Ye=Ye.replace(/\/api\/api+/g,"/api");const Qe=Ye,et={login:`${Qe}/auth/login`,signup:`${Qe}/auth/signup`,social:`${Qe}/auth/social`,refresh:`${Qe}/auth/refresh`,logout:`${Qe}/auth/logout`,profile:`${Qe}/auth/profile`,forgotPassword:`${Qe}/auth/forgot-password`},tt={getBaseURL:()=>Qe||Xe,get auth(){return et},get users(){return{profile:`${Qe}/users/profile`,list:`${Qe}/users/list`}},get calc(){return{calculate:`${Qe}/calc/calcular`,platforms:`${Qe}/calc/platforms`,gateways:`${Qe}/calc/gateways`}},get exchange(){return{rate:`${Qe}/exchange/rate`,currencies:`${Qe}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO:",{baseURL:tt.getBaseURL(),authSignup:tt.auth.signup});var rt={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=function(e){const t=[];let r=0;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++s)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},at={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<e.length;a+=3){const t=e[a],n=a+1<e.length,i=n?e[a+1]:0,o=a+2<e.length,l=o?e[a+2]:0,c=t>>2,d=(3&t)<<4|i>>4;let u=(15&i)<<2|l>>6,h=63&l;o||(h=64,n||(u=64)),s.push(r[c],r[d],r[u],r[h])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(st(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,s=0;for(;r<e.length;){const a=e[r++];if(a<128)t[s++]=String.fromCharCode(a);else if(a>191&&a<224){const n=e[r++];t[s++]=String.fromCharCode((31&a)<<6|63&n)}else if(a>239&&a<365){const n=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[s++]=String.fromCharCode(55296+(n>>10)),t[s++]=String.fromCharCode(56320+(1023&n))}else{const n=e[r++],i=e[r++];t[s++]=String.fromCharCode((15&a)<<12|(63&n)<<6|63&i)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<e.length;){const t=r[e.charAt(a++)],n=a<e.length?r[e.charAt(a)]:0;++a;const i=a<e.length?r[e.charAt(a)]:64;++a;const o=a<e.length?r[e.charAt(a)]:64;if(++a,null==t||null==n||null==i||null==o)throw new nt;const l=t<<2|n>>4;if(s.push(l),64!==i){const e=n<<4&240|i>>2;if(s.push(e),64!==o){const e=i<<6&192|o;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const it=function(e){return function(e){const t=st(e);return at.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ot=function(e){try{return at.decodeString(e,!0)}catch(te){console.error("base64Decode failed: ",te)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ct=()=>{try{return lt()||(()=>{if("undefined"==typeof process)return;const e=rt.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(te){return}const t=e&&ot(e[1]);return t&&JSON.parse(t)})()}catch(te){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${te}`)}},dt=()=>ct()?.config,ut=e=>ct()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const pt={};let gt=!1;function ft(e,t){if("undefined"==typeof window||"undefined"==typeof document||!mt(window.location.host)||pt[e]===t||pt[e]||gt)return;function r(e){return`__firebase__banner__${e}`}pt[e]=t;const s="__firebase__banner",a=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(pt))pt[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function n(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{gt=!0,function(){const e=document.getElementById(s);e&&e.remove()}()},e}function i(){const e=function(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}(s),t=r("text"),i=document.getElementById(t)||document.createElement("span"),o=r("learnmore"),l=document.getElementById(o)||document.createElement("a"),c=r("preprendIcon"),d=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,o);const r=n();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(d,c),t.append(d,i,l,r),document.body.appendChild(t)}a?(i.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',i.innerText="Preview backend running in this workspace."),i.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",i):i()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bt.prototype.create)}}class bt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],n=a?function(e,t){return e.replace(wt,(e,r)=>{const s=t[r];return null!=s?String(s):`<${r}?>`})}(a,r):"Error",i=`${this.serviceName}: ${n} (${s}).`;return new yt(s,i,r)}}const wt=/\{\$([^}]+)}/g;function vt(e,t){if(e===t)return!0;const r=Object.keys(e),s=Object.keys(t);for(const a of r){if(!s.includes(a))return!1;const r=e[a],n=t[a];if(Nt(r)&&Nt(n)){if(!vt(r,n))return!1}else if(r!==n)return!1}for(const a of s)if(!r.includes(a))return!1;return!0}function Nt(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){const t=[];for(const[r,s]of Object.entries(e))Array.isArray(s)?s.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}class kt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===s.next&&(s.next=St),void 0===s.error&&(s.error=St),void 0===s.complete&&(s.complete=St);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(te){}}),this.observers.push(s),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(te){"undefined"!=typeof console&&console.error&&console.error(te)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function St(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return e&&e._delegate?e._delegate:e}class It{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ht;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(te){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(te){if(r)return null;throw te}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch(te){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(te){}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,n]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(a)&&n.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,s===Ct?void 0:s),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}var s;return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Tt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _t(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(At||(At={}));const Pt={debug:At.DEBUG,verbose:At.VERBOSE,info:At.INFO,warn:At.WARN,error:At.ERROR,silent:At.SILENT},Rt=At.INFO,Ot={[At.DEBUG]:"log",[At.VERBOSE]:"log",[At.INFO]:"info",[At.WARN]:"warn",[At.ERROR]:"error"},Lt=(e,t,...r)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),a=Ot[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${s}]  ${e.name}:`,...r)};class Dt{constructor(e){this.name=e,this._logLevel=Rt,this._logHandler=Lt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in At))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Pt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,At.DEBUG,...e),this._logHandler(this,At.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,At.VERBOSE,...e),this._logHandler(this,At.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,At.INFO,...e),this._logHandler(this,At.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,At.WARN,...e),this._logHandler(this,At.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,At.ERROR,...e),this._logHandler(this,At.ERROR,...e)}}let Ut,Mt;const Ft=new WeakMap,Bt=new WeakMap,$t=new WeakMap,Ht=new WeakMap,zt=new WeakMap;let Vt={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Bt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$t.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Wt(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Gt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Mt||(Mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Jt(this),t),Wt(Ft.get(this))}:function(...t){return Wt(e.apply(Jt(this),t))}:function(t,...r){const s=e.call(Jt(this),t,...r);return $t.set(s,t.sort?t.sort():[t]),Wt(s)}}function qt(e){return"function"==typeof e?Gt(e):(e instanceof IDBTransaction&&function(e){if(Bt.has(e))return;const t=new Promise((t,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",n),e.removeEventListener("abort",n)},a=()=>{t(),s()},n=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",n),e.addEventListener("abort",n)});Bt.set(e,t)}(e),t=e,(Ut||(Ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Vt):e);var t}function Wt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",n)},a=()=>{t(Wt(e.result)),s()},n=()=>{r(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",n)});return t.then(t=>{t instanceof IDBCursor&&Ft.set(t,e)}).catch(()=>{}),zt.set(t,e),t}(e);if(Ht.has(e))return Ht.get(e);const t=qt(e);return t!==e&&(Ht.set(e,t),zt.set(t,e)),t}const Jt=e=>zt.get(e);const Kt=["get","getKey","getAll","getAllKeys","count"],Zt=["put","add","delete","clear"],Xt=new Map;function Yt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Xt.get(t))return Xt.get(t);const r=t.replace(/FromIndex$/,""),s=t!==r,a=Zt.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!a&&!Kt.includes(r))return;const n=async function(e,...t){const n=this.transaction(e,a?"readwrite":"readonly");let i=n.store;return s&&(i=i.index(t.shift())),(await Promise.all([i[r](...t),a&&n.done]))[0]};return Xt.set(t,n),n}Vt=(e=>({...e,get:(t,r,s)=>Yt(t,r)||e.get(t,r,s),has:(t,r)=>!!Yt(t,r)||e.has(t,r)}))(Vt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const er="@firebase/app",tr="0.14.6",rr=new Dt("@firebase/app"),sr="@firebase/app-compat",ar="@firebase/analytics-compat",nr="@firebase/analytics",ir="@firebase/app-check-compat",or="@firebase/app-check",lr="@firebase/auth",cr="@firebase/auth-compat",dr="@firebase/database",ur="@firebase/data-connect",hr="@firebase/database-compat",mr="@firebase/functions",pr="@firebase/functions-compat",gr="@firebase/installations",fr="@firebase/installations-compat",xr="@firebase/messaging",yr="@firebase/messaging-compat",br="@firebase/performance",wr="@firebase/performance-compat",vr="@firebase/remote-config",Nr="@firebase/remote-config-compat",jr="@firebase/storage",kr="@firebase/storage-compat",Sr="@firebase/firestore",Er="@firebase/ai",Ir="@firebase/firestore-compat",Cr="firebase",_r="[DEFAULT]",Tr={[er]:"fire-core",[sr]:"fire-core-compat",[nr]:"fire-analytics",[ar]:"fire-analytics-compat",[or]:"fire-app-check",[ir]:"fire-app-check-compat",[lr]:"fire-auth",[cr]:"fire-auth-compat",[dr]:"fire-rtdb",[ur]:"fire-data-connect",[hr]:"fire-rtdb-compat",[mr]:"fire-fn",[pr]:"fire-fn-compat",[gr]:"fire-iid",[fr]:"fire-iid-compat",[xr]:"fire-fcm",[yr]:"fire-fcm-compat",[br]:"fire-perf",[wr]:"fire-perf-compat",[vr]:"fire-rc",[Nr]:"fire-rc-compat",[jr]:"fire-gcs",[kr]:"fire-gcs-compat",[Sr]:"fire-fst",[Ir]:"fire-fst-compat",[Er]:"fire-vertex","fire-js":"fire-js",[Cr]:"fire-js-all"},Ar=new Map,Pr=new Map,Rr=new Map;function Or(e,t){try{e.container.addComponent(t)}catch(te){rr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,te)}}function Lr(e){const t=e.name;if(Rr.has(t))return rr.debug(`There were multiple attempts to register component ${t}.`),!1;Rr.set(t,e);for(const r of Ar.values())Or(r,e);for(const r of Pr.values())Or(r,e);return!0}function Dr(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Ur(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new bt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="12.6.0";function $r(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const s={name:_r,automaticDataCollectionEnabled:!0,...t},a=s.name;if("string"!=typeof a||!a)throw Mr.create("bad-app-name",{appName:String(a)});if(r||(r=dt()),!r)throw Mr.create("no-options");const n=Ar.get(a);if(n){if(vt(r,n.options)&&vt(s,n.config))return n;throw Mr.create("duplicate-app",{appName:a})}const i=new Tt(a);for(const l of Rr.values())i.addComponent(l);const o=new Fr(r,s,i);return Ar.set(a,o),o}function Hr(e,t,r){let s=Tr[e]??e;r&&(s+=`-${r}`);const a=s.match(/\s|\//),n=t.match(/\s|\//);if(a||n){const e=[`Unable to register library "${s}" with version "${t}":`];return a&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&n&&e.push("and"),n&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void rr.warn(e.join(" "))}Lr(new It(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="firebase-heartbeat-store";let Vr=null;function Gr(){return Vr||(Vr=function(e,t,{blocked:r,upgrade:s,blocking:a,terminated:n}={}){const i=indexedDB.open(e,t),o=Wt(i);return s&&i.addEventListener("upgradeneeded",e=>{s(Wt(i.result),e.oldVersion,e.newVersion,Wt(i.transaction),e)}),r&&i.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{n&&e.addEventListener("close",()=>n()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(zr)}catch(te){console.warn(te)}}}).catch(e=>{throw Mr.create("idb-open",{originalErrorMessage:e.message})})),Vr}async function qr(e,t){try{const r=(await Gr()).transaction(zr,"readwrite"),s=r.objectStore(zr);await s.put(t,Wr(e)),await r.done}catch(te){if(te instanceof yt)rr.warn(te.message);else{const t=Mr.create("idb-set",{originalErrorMessage:te?.message});rr.warn(t.message)}}}function Wr(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Kr();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let s=1;s<e.length;s++)e[s].date<r&&(r=e[s].date,t=s);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(te){rr.warn(te)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Kr(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let s=e.slice();for(const a of e){const e=r.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),Xr(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),Xr(r)>t){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=it(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(te){return rr.warn(te),""}}}function Kr(){return(new Date).toISOString().substring(0,10)}class Zr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(te){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(s),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(r){t(r)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Gr()).transaction(zr),r=await t.objectStore(zr).get(Wr(e));return await t.done,r}catch(te){if(te instanceof yt)rr.warn(te.message);else{const t=Mr.create("idb-get",{originalErrorMessage:te?.message});rr.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return qr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return qr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Xr(e){return it(JSON.stringify({version:2,heartbeats:e})).length}var Yr;function Qr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Yr="",Lr(new It("platform-logger",e=>new Qt(e),"PRIVATE")),Lr(new It("heartbeat",e=>new Jr(e),"PRIVATE")),Hr(er,tr,Yr),Hr(er,tr,"esm2020"),Hr("fire-js","");const es=Qr,ts=new bt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rs=new Dt("@firebase/auth");function ss(e,...t){rs.logLevel<=At.ERROR&&rs.error(`Auth (${Br}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e,...t){throw cs(e,...t)}function ns(e,...t){return cs(e,...t)}function is(e,t,r){const s={...es(),[t]:r};return new bt("auth","Firebase",s).create(t,{appName:e.name})}function os(e){return is(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ls(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&as(e,"argument-error"),is(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cs(e,...t){if("string"!=typeof e){const r=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(r,...s)}return ts.create(e,...t)}function ds(e,t,...r){if(!e)throw cs(t,...r)}function us(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ss(t),new Error(t)}function hs(e,t){e||us(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(){return"undefined"!=typeof self&&self.location?.href||""}function ps(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ps()&&"https:"!==ps()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(e,t){this.shortDelay=e,this.longDelay=t,hs(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return gs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e,t){hs(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void us("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void us("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void us("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ws=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vs=new fs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function js(e,t,r,s,a={}){return ks(e,a,async()=>{let a={},n={};s&&("GET"===t?n=s:a={body:JSON.stringify(s)});const i=jt({key:e.config.apiKey,...n}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:o,...a};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&mt(e.emulatorConfig.host)&&(l.credentials="include"),ys.fetch()(await Ss(e,e.config.apiHost,r,i),l)})}async function ks(e,t,r){e._canInitEmulator=!1;const s={...bs,...t};try{const t=new Es(e),a=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const n=await a.json();if("needConfirmation"in n)throw Is(e,"account-exists-with-different-credential",n);if(a.ok&&!("errorMessage"in n))return n;{const t=a.ok?n.errorMessage:n.error.message,[r,i]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Is(e,"credential-already-in-use",n);if("EMAIL_EXISTS"===r)throw Is(e,"email-already-in-use",n);if("USER_DISABLED"===r)throw Is(e,"user-disabled",n);const o=s[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw is(e,o,i);as(e,o)}}catch(te){if(te instanceof yt)throw te;as(e,"network-request-failed",{message:String(te)})}}async function Ss(e,t,r,s){const a=`${t}${r}?${s}`,n=e,i=n.config.emulator?xs(e.config,a):`${e.config.apiScheme}://${a}`;if(ws.includes(r)&&(await n._persistenceManagerAvailable,"COOKIE"===n._getPersistenceType())){return n._getPersistence()._getFinalTarget(i).toString()}return i}class Es{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ns(this.auth,"network-request-failed")),vs.get())})}}function Is(e,t,r){const s={appName:e.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const a=ns(e,t,s);return a.customData._tokenResponse=r,a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e,t){return js(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(te){}}function Ts(e){return 1e3*Number(e)}function As(e){const[t,r,s]=e.split(".");if(void 0===t||void 0===r||void 0===s)return ss("JWT malformed, contained fewer than 3 sections"),null;try{const e=ot(r);return e?JSON.parse(e):(ss("Failed to decode base64 JWT payload"),null)}catch(te){return ss("Caught error parsing JWT payload as JSON",te?.toString()),null}}function Ps(e){const t=As(e);return ds(t,"internal-error"),ds(void 0!==t.exp,"internal-error"),ds(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(e,t,r=!1){if(r)return t;try{return await t}catch(te){throw te instanceof yt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(te)&&e.auth.currentUser===e&&await e.auth.signOut(),te}}class Os{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(te){return void("auth/network-request-failed"===te?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(e){const t=e.auth,r=await e.getIdToken(),s=await Rs(e,Cs(t,{idToken:r}));ds(s?.users.length,t,"internal-error");const a=s.users[0];e._notifyReloadListener(a);const n=a.providerUserInfo?.length?Us(a.providerUserInfo):[],i=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,n),o=e.isAnonymous,l=!(e.email&&a.passwordHash||i?.length),c=!!o&&l,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:i,metadata:new Ls(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}function Us(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ds(e.idToken,"internal-error"),ds(void 0!==e.idToken,"internal-error"),ds(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Ps(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ds(0!==e.length,"internal-error");const t=Ps(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(ds(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await async function(e,t){const r=await ks(e,{},async()=>{const r=jt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:a}=e.config,n=await Ss(e,s,"/v1/token",`key=${a}`),i=await e._getAdditionalHeaders();i["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:i,body:r};return e.emulatorConfig&&mt(e.emulatorConfig.host)&&(o.credentials="include"),ys.fetch()(n,o)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,n=new Ms;return r&&(ds("string"==typeof r,"internal-error",{appName:e}),n.refreshToken=r),s&&(ds("string"==typeof s,"internal-error",{appName:e}),n.accessToken=s),a&&(ds("number"==typeof a,"internal-error",{appName:e}),n.expirationTime=a),n}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return us("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e,t){ds("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Bs{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Os(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ls(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return ds(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=Et(e),s=await r.getIdToken(t),a=As(s);ds(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");const n="object"==typeof a.firebase?a.firebase:void 0,i=n?.sign_in_provider;return{claims:a,token:s,authTime:_s(Ts(a.auth_time)),issuedAtTime:_s(Ts(a.iat)),expirationTime:_s(Ts(a.exp)),signInProvider:i||null,signInSecondFactor:n?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Et(e);await Ds(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ds(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bs({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ds(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ur(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await Rs(this,async function(e,t){return js(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,n=t.photoURL??void 0,i=t.tenantId??void 0,o=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:h,providerData:m,stsTokenManager:p}=t;ds(d&&p,e,"internal-error");const g=Ms.fromJSON(this.name,p);ds("string"==typeof d,e,"internal-error"),Fs(r,e.name),Fs(s,e.name),ds("boolean"==typeof u,e,"internal-error"),ds("boolean"==typeof h,e,"internal-error"),Fs(a,e.name),Fs(n,e.name),Fs(i,e.name),Fs(o,e.name),Fs(l,e.name),Fs(c,e.name);const f=new Bs({uid:d,auth:e,email:s,emailVerified:u,displayName:r,isAnonymous:h,photoURL:n,phoneNumber:a,tenantId:i,stsTokenManager:g,createdAt:l,lastLoginAt:c});return m&&Array.isArray(m)&&(f.providerData=m.map(e=>({...e}))),o&&(f._redirectEventId=o),f}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ms;s.updateFromServerResponse(t);const a=new Bs({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ds(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ds(void 0!==s.localId,"internal-error");const a=void 0!==s.providerUserInfo?Us(s.providerUserInfo):[],n=!(s.email&&s.passwordHash||a?.length),i=new Ms;i.updateFromIdToken(r);const o=new Bs({uid:s.localId,auth:e,stsTokenManager:i,isAnonymous:n}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ls(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash||a?.length)};return Object.assign(o,l),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Map;function Hs(e){hs(e instanceof Function,"Expected a class definition");let t=$s.get(e);return t?(hs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$s.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zs.type="NONE";const Vs=zs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e,t,r){return`firebase:${e}:${t}:${r}`}class qs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Gs(this.userKey,s.apiKey,a),this.fullPersistenceKey=Gs("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Cs(this.auth,{idToken:e}).catch(()=>{});return t?Bs._fromGetAccountInfoResponse(this.auth,t,e):null}return Bs._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qs(Hs(Vs),e,r);const s=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let a=s[0]||Hs(Vs);const n=Gs(r,e.config.apiKey,e.name);let i=null;for(const l of t)try{const t=await l._get(n);if(t){let r;if("string"==typeof t){const s=await Cs(e,{idToken:t}).catch(()=>{});if(!s)break;r=await Bs._fromGetAccountInfoResponse(e,s,t)}else r=Bs._fromJSON(e,t);l!==a&&(i=r),a=l;break}}catch{}const o=s.filter(e=>e._shouldAllowMigration);return a._shouldAllowMigration&&o.length?(a=o[0],i&&await a._set(n,i.toJSON()),await Promise.all(t.map(async e=>{if(e!==a)try{await e._remove(n)}catch{}})),new qs(a,e,r)):new qs(a,e,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Js(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qs(t))return"Blackberry";if(ea(t))return"Webos";if(Ks(t))return"Safari";if((t.includes("chrome/")||Zs(t))&&!t.includes("edge/"))return"Chrome";if(Ys(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===r?.length)return r[1]}return"Other"}function Js(e=xt()){return/firefox\//i.test(e)}function Ks(e=xt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Zs(e=xt()){return/crios\//i.test(e)}function Xs(e=xt()){return/iemobile/i.test(e)}function Ys(e=xt()){return/android/i.test(e)}function Qs(e=xt()){return/blackberry/i.test(e)}function ea(e=xt()){return/webos/i.test(e)}function ta(e=xt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ra(){return function(){const e=xt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function sa(e=xt()){return ta(e)||Ys(e)||ea(e)||Qs(e)||/windows phone/i.test(e)||Xs(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e,t=[]){let r;switch(e){case"Browser":r=Ws(xt());break;case"Worker":r=`${Ws(xt())}-${e}`;break;default:r=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Br}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,s)=>{try{r(e(t))}catch(te){s(te)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(te){t.reverse();for(const r of t)try{r()}catch(Ne){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:te?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ca(this),this.idTokenSubscription=new ca(this),this.beforeStateQueue=new na(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ts,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hs(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(te){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Cs(this,{idToken:e}),r=await Bs._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ur(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,a=r?._redirectEventId,n=await this.tryRedirectSignIn(e);t&&t!==a||!n?.user||(r=n.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(te){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(te))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ds(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(te){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ds(e)}catch(te){if("auth/network-request-failed"!==te?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ur(this.app))return Promise.reject(os(this));const t=e?Et(e):null;return t&&ds(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ds(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ur(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ur(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hs(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return js(e,"GET","/v2/passwordPolicy",Ns(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new ia(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return js(e,"POST","/v2/accounts:revokeToken",Ns(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hs(e)||this._popupRedirectResolver;ds(t,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Hs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a="function"==typeof t?t:t.next.bind(t);let n=!1;const i=this._isInitialized?Promise.resolve():this._initializationPromise;if(ds(i,this,"internal-error"),i.then(()=>{n||a(this.currentUser)}),"function"==typeof t){const a=e.addObserver(t,r,s);return()=>{n=!0,a()}}{const r=e.addObserver(t);return()=>{n=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ds(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ur(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){rs.logLevel<=At.WARN&&rs.warn(`Auth (${Br}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function la(e){return Et(e)}class ca{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new kt(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return ds(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ua(e,t,r){const s=la(e);ds(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const a=ha(t),{host:n,port:i}=function(e){const t=ha(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const s=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const e=a[1];return{host:e,port:ma(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:ma(t)}}}(t),o=null===i?"":`:${i}`,l={url:`${a}//${n}${o}/`},c=Object.freeze({host:n,port:i,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!s._canInitEmulator)return ds(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),void ds(vt(l,s.config.emulator)&&vt(c,s.emulatorConfig),s,"emulator-config-failed");s.config.emulator=l,s.emulatorConfig=c,s.settings.appVerificationDisabledForTesting=!0,mt(n)?(!async function(e){(await fetch(e,{credentials:"include"})).ok}(`${a}//${n}${o}`),ft("Auth",!0)):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ha(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ma(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class pa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return us("not implemented")}_getIdTokenResponse(e){return us("not implemented")}_linkToIdToken(e,t){return us("not implemented")}_getReauthenticationResolver(e){return us("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(e,t){return async function(e,t,r,s,a={}){const n=await js(e,t,r,s,a);return"mfaPendingCredential"in n&&as(e,"multi-factor-auth-required",{_serverResponse:n}),n}(e,"POST","/v1/accounts:signInWithIdp",Ns(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):as("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:s,...a}=t;if(!r||!s)return null;const n=new fa(r,s);return n.idToken=a.idToken||void 0,n.accessToken=a.accessToken||void 0,n.secret=a.secret,n.nonce=a.nonce,n.pendingToken=a.pendingToken||null,n}_getIdTokenResponse(e){return ga(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ga(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ga(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jt(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends ya{constructor(){super("facebook.com")}static credential(e){return fa._fromParams({providerId:ba.PROVIDER_ID,signInMethod:ba.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ba.credentialFromTaggedObject(e)}static credentialFromError(e){return ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ba.credential(e.oauthAccessToken)}catch{return null}}}ba.FACEBOOK_SIGN_IN_METHOD="facebook.com",ba.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fa._fromParams({providerId:wa.PROVIDER_ID,signInMethod:wa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wa.credentialFromTaggedObject(e)}static credentialFromError(e){return wa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return wa.credential(t,r)}catch{return null}}}wa.GOOGLE_SIGN_IN_METHOD="google.com",wa.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va extends ya{constructor(){super("github.com")}static credential(e){return fa._fromParams({providerId:va.PROVIDER_ID,signInMethod:va.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return va.credentialFromTaggedObject(e)}static credentialFromError(e){return va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return va.credential(e.oauthAccessToken)}catch{return null}}}va.GITHUB_SIGN_IN_METHOD="github.com",va.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na extends ya{constructor(){super("twitter.com")}static credential(e,t){return fa._fromParams({providerId:Na.PROVIDER_ID,signInMethod:Na.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Na.credentialFromTaggedObject(e)}static credentialFromError(e){return Na.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Na.credential(t,r)}catch{return null}}}Na.TWITTER_SIGN_IN_METHOD="twitter.com",Na.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Bs._fromIdTokenResponse(e,r,s),n=ka(r);return new ja({user:a,providerId:n,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ka(r);return new ja({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ka(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends yt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Sa(e,t,r,s)}}function Ea(e,t,r,s){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw Sa._fromErrorAndOperation(e,r,t,s);throw r})}const Ia="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ia,"1"),this.storage.removeItem(Ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Ca{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},a=this.storage.getItem(r);ra()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_a.type="LOCAL";const Ta=_a;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Ca{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Aa.type="SESSION";const Pa=Aa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const r=new Ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,n=this.handlersMap[s];if(!n?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const i=Array.from(n).map(async e=>e(t.origin,a)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(i);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oa(e="",t=10){let r="";for(let s=0;s<t;s++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ra.receivers=[];class La{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,n;return new Promise((i,o)=>{const l=Oa("",20);s.port1.start();const c=setTimeout(()=>{o(new Error("unsupported_event"))},r);n={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),i(t.data.response);break;default:clearTimeout(c),clearTimeout(a),o(new Error("invalid_response"))}}},this.handlers.add(n),s.port1.addEventListener("message",n.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{n&&this.removeMessageHandler(n)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ua(){return void 0!==Da().WorkerGlobalScope&&"function"==typeof Da().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ma="firebaseLocalStorageDb",Fa="firebaseLocalStorage",Ba="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ha(e,t){return e.transaction([Fa],t?"readwrite":"readonly").objectStore(Fa)}function za(){const e=indexedDB.open(Ma,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Fa,{keyPath:Ba})}catch(te){r(te)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Fa)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(Ma);return new $a(e).toPromise()}(),t(await za()))})})}async function Va(e,t,r){const s=Ha(e,!0).put({[Ba]:t,value:r});return new $a(s).toPromise()}function Ga(e,t){const r=Ha(e,!0).delete(t);return new $a(r).toPromise()}class qa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await za()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(te){if(t++>3)throw te;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ua()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(Ua()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new La(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await za();return await Va(e,Ia,"1"),await Ga(e,Ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Va(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const r=Ha(e,!1).get(t),s=await new $a(r).toPromise();return void 0===s?null:s.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ga(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ha(e,!1).getAll();return new $a(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qa.type="LOCAL";const Wa=qa;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ja(e,t){return t?Hs(t):(ds(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new fs(3e4,6e4);class Ka extends pa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ga(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ga(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ga(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Za(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,r=!1){if(Ur(e.app))return Promise.reject(os(e));const s="signIn",a=await Ea(e,s,t),n=await ja._fromIdTokenResponse(e,s,a);return r||await e._updateCurrentUser(n.user),n}(e.auth,new Ka(e),e.bypassAuthState)}function Xa(e){const{auth:t,user:r}=e;return ds(r,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,r=!1){const{auth:s}=e;if(Ur(s.app))return Promise.reject(os(s));const a="reauthenticate";try{const n=await Rs(e,Ea(s,a,t,e),r);ds(n.idToken,s,"internal-error");const i=As(n.idToken);ds(i,s,"internal-error");const{sub:o}=i;return ds(e.uid===o,s,"user-mismatch"),ja._forOperation(e,a,n)}catch(te){throw"auth/user-not-found"===te?.code&&as(s,"user-mismatch"),te}}(r,new Ka(e),e.bypassAuthState)}async function Ya(e){const{auth:t,user:r}=e;return ds(r,t,"internal-error"),async function(e,t,r=!1){const s=await Rs(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return ja._forOperation(e,"link",s)}(r,new Ka(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(te){this.reject(te)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:n,type:i}=e;if(n)return void this.reject(n);const o={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(te){this.reject(te)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Za;case"linkViaPopup":case"linkViaRedirect":return Ya;case"reauthViaPopup":case"reauthViaRedirect":return Xa;default:as(this.auth,"internal-error")}}resolve(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new fs(2e3,1e4);class tn extends Qa{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ds(e,this.auth,"internal-error"),e}async onExecution(){hs(1===this.filter.length,"Popup operations only handle one event");const e=Oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ns(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ns(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ns(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,en.get())};e()}}tn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn=new Map;class sn extends Qa{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=on(t),s=nn(e);if(!(await s._isAvailable()))return!1;const a="true"===await s._get(r);return await s._remove(r),a}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(te){e=()=>Promise.reject(te)}rn.set(this.auth._key(),e)}return this.bypassAuthState||rn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function an(e,t){rn.set(e._key(),t)}function nn(e){return Hs(e._redirectPersistence)}function on(e){return Gs("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e,t,r){return async function(e,t,r){if(Ur(e.app))return Promise.reject(os(e));const s=la(e);ls(e,t,xa),await s._initializationPromise;const a=Ja(s,r);return await async function(e,t){return nn(e)._set(on(t),"true")}(a,s),a._openRedirect(s,t,"signInViaRedirect")}(e,t,r)}async function cn(e,t,r=!1){if(Ur(e.app))return Promise.reject(os(e));const s=la(e),a=Ja(s,t),n=new sn(s,a,r),i=await n.execute();return i&&!r&&(delete i.user._redirectEventId,await s._persistUserIfCurrent(i.user),await s._setRedirectUser(null,t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!hn(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ns(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(un(e))}saveEventToCache(e){this.cachedEventUids.add(un(e)),this.lastProcessedEventTime=Date.now()}}function un(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function hn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pn=/^https?/;async function gn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return js(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(fn(r))return}catch{}as(e,"unauthorized-domain")}function fn(e){const t=ms(),{protocol:r,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===s?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===s}if(!pn.test(r))return!1;if(mn.test(e))return s===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new fs(3e4,6e4);function yn(){const e=Da().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function bn(e){return new Promise((t,r)=>{function s(){yn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yn(),r(ns(e,"network-request-failed"))},timeout:xn.get()})}if(Da().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Da().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Da()[t]=()=>{gapi.load?s():r(ns(e,"network-request-failed"))},(a=`${da.gapiScript}?onload=${t}`,da.loadJS(a)).catch(e=>r(e))}s()}var a}).catch(e=>{throw wn=null,e})}let wn=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=new fs(5e3,15e3),Nn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kn(e){const t=e.config;ds(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?xs(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:Br},a=jn.get(e.config.apiHost);a&&(s.eid=a);const n=e._getFrameworks();return n.length&&(s.fw=n.join(",")),`${r}?${jt(s).slice(1)}`}async function Sn(e){const t=await function(e){return wn=wn||bn(e),wn}(e),r=Da().gapi;return ds(r,e,"internal-error"),t.open({where:document.body,url:kn(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nn,dontclear:!0},t=>new Promise(async(r,s)=>{await t.restyle({setHideOnLeave:!1});const a=ns(e,"network-request-failed"),n=Da().setTimeout(()=>{s(a)},vn.get());function i(){Da().clearTimeout(n),r(t)}t.ping(i).then(i,()=>{s(a)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class In{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(te){}}}function Cn(e,t,r,s=500,a=600){const n=Math.max((window.screen.availHeight-a)/2,0).toString(),i=Math.max((window.screen.availWidth-s)/2,0).toString();let o="";const l={...En,width:s.toString(),height:a.toString(),top:n,left:i},c=xt().toLowerCase();r&&(o=Zs(c)?"_blank":r),Js(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=xt()){return ta(e)&&!!window.navigator?.standalone}(c)&&"_self"!==o)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new In(null);const u=window.open(t||"",o,d);ds(u,e,"popup-blocked");try{u.focus()}catch(te){}return new In(u)}const _n="__/auth/handler",Tn="emulator/auth/handler",An=encodeURIComponent("fac");async function Pn(e,t,r,s,a,n){ds(e.config.authDomain,e,"auth-domain-config-required"),ds(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:s,v:Br,eventId:a};if(t instanceof xa){t.setDefaultLanguage(e.languageCode),i.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(i.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))i[e]=t}if(t instanceof ya){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(i.scopes=e.join(","))}e.tenantId&&(i.tid=e.tenantId);const o=i;for(const d of Object.keys(o))void 0===o[d]&&delete o[d];const l=await e._getAppCheckToken(),c=l?`#${An}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${_n}`;return xs(e,Tn)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${jt(o).slice(1)}${c}`}const Rn="webStorageSupport";const On=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pa,this._completeRedirectFn=cn,this._overrideRedirectResult=an}async _openPopup(e,t,r,s){hs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Cn(e,await Pn(e,t,r,ms(),s),Oa())}async _openRedirect(e,t,r,s){await this._originValidation(e);return function(e){Da().location.href=e}(await Pn(e,t,r,ms(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(hs(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Sn(e),r=new dn(e);return t.register("authEvent",t=>{ds(t?.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rn,{type:Rn},r=>{const s=r?.[0]?.[Rn];void 0!==s&&t(!!s),as(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sa()||Ks()||ta()}};var Ln="@firebase/auth",Dn="1.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ds(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn=ut("authIdTokenMaxAge")||300;let Fn=null;var Bn;!function(e){da=e}({loadJS:e=>new Promise((t,r)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=ns("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Bn="Browser",Lr(new It("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:n,authDomain:i}=r.options;ds(n&&!n.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:n,authDomain:i,clientPlatform:Bn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aa(Bn)},l=new oa(r,s,a,o);return function(e,t){const r=t?.persistence||[],s=(Array.isArray(r)?r:[r]).map(Hs);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Lr(new It("auth-internal",e=>(e=>new Un(e))(la(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Hr(Ln,Dn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Bn)),Hr(Ln,Dn,"esm2020");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Hr("firebase","12.6.0","app");const $n={apiKey:"AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",authDomain:"dropcalc-11fd7.firebaseapp.com",projectId:"dropcalc-11fd7",storageBucket:"dropcalc-11fd7.firebasestorage.app",messagingSenderId:"779840470463",appId:"1:779840470463:web:62b5e584a22c8028a4750a"};console.log("🔥 Firebase Config:",{apiKey:$n.apiKey?"✅ Configurado":"❌ Faltando",authDomain:$n.authDomain,projectId:$n.projectId});try{console.log("🌐 App origin:",window.location.origin)}catch(te){console.warn("⚠️ Não foi possível ler window.location.origin:",te)}const Hn=function(e=function(e=_r){const t=Ar.get(e);if(!t&&e===_r&&dt())return $r();if(!t)throw Mr.create("no-app",{appName:e});return t}()){const t=Dr(e,"auth");if(t.isInitialized())return t.getImmediate();const r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const r=Dr(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(vt(r.getOptions(),t??{}))return e;as(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:On,persistence:[Wa,Ta,Pa]}),s=ut("authTokenSyncURL");if(s&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=(a=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Mn)return;const s=t?.token;Fn!==s&&(Fn=s,await fetch(a,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});!function(e,t,r){Et(e).beforeAuthStateChanged(t,r)}(r,t,()=>t(r.currentUser)),function(e,t,r,s){Et(e).onIdTokenChanged(t,r,s)}(r,e=>t(e))}}var a;const n=(i="auth",ct()?.emulatorHosts?.[i]);var i;return n&&ua(r,`http://${n}`),r}($r($n)),zn=new wa;zn.addScope("email"),zn.addScope("profile");const Vn=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,r){if(Ur(e.app))return Promise.reject(ns(e,"operation-not-supported-in-this-environment"));const s=la(e);ls(e,t,xa);const a=Ja(s,r);return new tn(s,"signInViaPopup",t,a).executeNotNull()}(Hn,zn),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await ln(Hn,zn)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await la(e)._initializationPromise,cn(e,t,!1)}(Hn);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=Hn.currentUser,r=t?await t.getIdToken():null,s=tt.auth.social||tt.auth.login,a=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${r}`}:{}},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!a.ok){const t=await this.createUserInBackend(e);if(t&&t.accessToken&&t.user)return localStorage.setItem("accessToken",t.accessToken),localStorage.setItem("currentUser",JSON.stringify(t.user)),t;if(r)try{return localStorage.setItem("accessToken",r),localStorage.setItem("currentUser",JSON.stringify({id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google"})),console.log("🔑 Usando token Firebase como fallback para accessToken"),{accessToken:r,user:e}}catch(te){console.warn("⚠️ Falha ao salvar token de fallback:",te)}return e}const n=await a.json();if(n&&n.accessToken&&n.user)return localStorage.setItem("accessToken",n.accessToken),localStorage.setItem("currentUser",JSON.stringify(n.user)),console.log("✅ Usuário sincronizado com backend"),n;if(r)try{return localStorage.setItem("accessToken",r),localStorage.setItem("currentUser",JSON.stringify({id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google"})),console.log("🔑 Usando token Firebase como fallback para accessToken (sem dados do backend)"),{accessToken:r,user:e}}catch(te){console.warn("⚠️ Falha ao salvar token de fallback:",te)}return console.warn("⚠️ Backend não retornou dados válidos, login Google incompleto"),e}catch(t){console.error("❌ Erro na sincronização:",t);const r=Hn.currentUser,s=r?await r.getIdToken():null;if(s)try{return localStorage.setItem("accessToken",s),localStorage.setItem("currentUser",JSON.stringify({id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google"})),console.log("🔑 Usando token Firebase como fallback (catch)"),{accessToken:s,user:e}}catch(te){console.warn("⚠️ Falha ao salvar token de fallback no catch:",te)}return e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch(tt.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e.accessToken&&localStorage.setItem("accessToken",e.accessToken),e.user&&localStorage.setItem("currentUser",JSON.stringify(e.user)),window.location.href="/dashboard",e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return Et(e).signOut()}(Hn),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return Hn.currentUser}onAuthStateChange(e){return Hn.onAuthStateChanged(e)}};const Gn=new class{getBaseURL(){const e=tt.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async loginAlternative(e,t){try{return console.log("🔄 Tentando login alternativo..."),new Promise((r,s)=>{const a=new XMLHttpRequest,n=tt.auth.login;a.open("POST",n,!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Accept","application/json"),a.setRequestHeader("Cache-Control","no-cache"),a.onreadystatechange=function(){if(4===a.readyState)if(console.log("🔍 XHR Status:",a.status),console.log("🔍 XHR Response:",a.responseText),200===a.status)try{const e=JSON.parse(a.responseText);localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("currentUser",JSON.stringify(e.user)),r(e.user)}catch(e){s(new Error("Resposta inválida do servidor"))}else try{const e=JSON.parse(a.responseText);s(new Error(e.message||"Erro no login"))}catch(e){s(new Error("Credenciais inválidas"))}},a.onerror=function(){s(new Error("Erro de conexão"))},a.ontimeout=function(){s(new Error("Timeout na conexão"))},a.timeout=1e4;const i=JSON.stringify({email:e,password:t});a.send(i)})}catch(r){throw console.error("❌ Erro no login alternativo:",r),r}}async login(e,t){try{const s=tt.auth.login;console.log("🔐 Login attempt:",{email:e,url:s});const a=JSON.stringify({email:e,password:t,provider:"email"});console.log("📤 Request body:",a);const n=new AbortController,i=setTimeout(()=>n.abort(),1e4),o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"},body:a,signal:n.signal});if(clearTimeout(i),console.log("📡 Response status:",o.status),console.log("📡 Response ok:",o.ok),console.log("📡 Response headers:",Object.fromEntries(o.headers.entries())),!o.ok){const e=await o.text();console.error("❌ Error response text:",e),console.error("❌ Error response status:",o.status),console.error("❌ Error response statusText:",o.statusText);let t="Falha no login";try{t=JSON.parse(e).message||t}catch(r){t=e||t}throw 401===o.status&&(t="Credenciais inválidas. Verifique email e senha."),new Error(t)}const l=await o.text();let c;console.log("📥 Raw response text:",l);try{c=JSON.parse(l)}catch(r){throw console.error("❌ Failed to parse response JSON:",r),new Error("Resposta inválida do servidor")}if(console.log("✅ Login successful, data:",c),!c.accessToken||!c.user)throw console.error("❌ Invalid response structure:",c),new Error("Resposta do servidor incompleta");return localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("currentUser",JSON.stringify(c.user)),c.user.plan&&localStorage.setItem("userPlan",JSON.stringify(c.user.plan)),c.user}catch(s){if(console.error("❌ Erro no login completo:",s),"AbortError"===s.name)throw new Error("Timeout na conexão. Tente novamente.");if("TypeError"===s.name&&s.message.includes("fetch"))throw new Error("Erro de conexão. Verifique sua internet.");throw s}}async register(e,t,r){try{this.clearPlanData();const s=tt.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:s});const a=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:r})});if(!a.ok){const e=await a.json();throw new Error(e.message||"Falha no registro")}return(await a.json()).user}catch(s){throw console.error("Erro no registro:",s),s}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await Vn.loginWithPopup(),t=await Vn.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",r),r}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await Vn.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await Vn.handleRedirectResult();if(!e)return null;const t=await Vn.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),r}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await Vn.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e){try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("⚠️ userPlan detectado como string legada:",e)}try{const t=(e.replace(/^\"|\"$/g,"")||"basic").toLowerCase(),r={basic:{type:"basic",name:"Básico",price:0,active:!0},gold:{type:"gold",name:"Gold",price:9.9,active:!0},professional:{type:"professional",name:"Profissional",price:19.9,active:!0},premium:{type:"premium",name:"Premium",price:19.9,active:!0}},s=r[t]||r.basic;try{localStorage.setItem("userPlan",JSON.stringify(s))}catch(te){}return s}catch(te){console.warn("⚠️ Erro ao normalizar userPlan legada:",te)}}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const r={basic:0,professional:1,premium:2};return r[t.type]>=r[e]}isAdmin(){const e=this.getCurrentUser();if(!e)return!1;if(!0===e.isAdmin)return!0;if("string"==typeof e.role){const t=e.role.toLowerCase();if(["admin","administrator","superadmin"].includes(t))return!0}return!(!Array.isArray(e.roles)||!e.roles.some(e=>"string"==typeof e&&"admin"===e.toLowerCase()))}},qn=()=>{const[e,t]=r.useState(null),[s,a]=r.useState(!0),[n,i]=r.useState(null),[o,l]=r.useState(!1);r.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=Gn.getCurrentUser(),r=Gn.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:r,userEmail:e?.email}),t(e),l(r),e){let e=Gn.getUserPlan();e&&"object"==typeof e&&e.type||(e={type:"basic",name:"Básico",price:0,active:!0}),console.log("📋 useAuth - Plano do usuário:",e),i(e)}else i({type:"basic",name:"Básico",price:0,active:!0});a(!1),(async()=>{try{const r=Gn.getAccessToken();if(!r)return;console.log("🔄 useAuth - Buscando profile no backend para sincronizar estado...");const s=await fetch(tt.users.profile,{method:"GET",headers:{Authorization:"Bearer "+r,Accept:"application/json"},cache:"no-store"});if(!s.ok)return void console.warn("⚠️ useAuth - Falha ao buscar profile:",s.status);const a=await s.json(),n=a.currentUser||a.user||a;if(n){try{localStorage.setItem("currentUser",JSON.stringify(n)),console.log("✅ useAuth - currentUser sincronizado com backend")}catch(e){console.warn("🚨 useAuth - erro ao salvar currentUser:",e)}const r=a.userPlan||n.plan;if(r)try{localStorage.setItem("userPlan",JSON.stringify(r)),localStorage.setItem("billingStatus","active"),localStorage.setItem("subscriptionDate",(new Date).toISOString()),console.log("✅ useAuth - userPlan sincronizado com backend")}catch(e){console.warn("🚨 useAuth - erro ao salvar userPlan:",e)}t(Gn.getCurrentUser()),l(!!Gn.getAccessToken()),i(Gn.getUserPlan())}}catch(e){console.warn("⚠️ useAuth - erro ao sincronizar profile:",e)}})()},[]);return{user:e,loading:s,plan:n,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await Gn.logout(),t(null),i(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),Gn.updateUserPlan(e),i(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=Gn.getCurrentUser(),r=Gn.isAuthenticated();t(e),l(r),i(e?Gn.getUserPlan():null)},isAuthenticated:o,isAdmin:Gn.isAdmin(),checkPlanAccess:e=>Gn.checkPlanAccess(e)}},Wn=({children:t})=>{const{isAuthenticated:r,loading:n}=qn(),i=s();return n?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):r?e.jsx(e.Fragment,{children:t}):e.jsx(a,{to:"/login",state:{from:i},replace:!0})},Jn=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),e.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),e.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),e.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),e.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[e.jsxs(h.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:e.jsx(m,{className:"w-10 h-10 text-white"})}),e.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),e.jsxs(h.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",e.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",e.jsx("br",{}),e.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[e.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[e.jsx(p,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),e.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[e.jsx(g,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),e.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[e.jsx(m,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[e.jsx(n,{to:"/login",children:e.jsxs(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",e.jsx(f,{className:"w-5 h-5"})]})}),e.jsx(n,{to:"/login?mode=signup",children:e.jsx(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]});function Kn(...e){return e.filter(e=>"string"==typeof e&&e).join(" ")}const Zn=({children:t,className:r,padding:s="md"})=>e.jsx("div",{className:Kn("bg-white rounded-lg border border-gray-200 shadow-sm",{none:"p-0",sm:"p-4",md:"p-6",lg:"p-8"}[s],r),children:t}),Xn=({className:t,variant:r="default",size:s="md",loading:a,children:n,disabled:i,...o})=>e.jsxs("button",{className:Kn("inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",{default:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",outline:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-green-500",ghost:"text-gray-600 hover:bg-gray-100 focus:ring-green-500"}[r],{sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"}[s],t),disabled:i||a,...o,children:[a&&e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),n]}),Yn=({className:t,type:r,label:s,error:a,startIcon:n,endIcon:i,...o})=>e.jsxs("div",{className:"w-full",children:[s&&e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:s}),e.jsxs("div",{className:"relative",children:[n&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("div",{className:"h-5 w-5 text-gray-400",children:n})}),e.jsx("input",{type:r,className:Kn("flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",n?"pl-10":"",i?"pr-10":"",a?"border-red-500 focus:ring-red-600":"",t),...o}),i&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:e.jsx("div",{className:"h-5 w-5 text-gray-400",children:i})})]}),a&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:a})]});function Qn(e,t){return function(){return e.apply(t,arguments)}}const{toString:ei}=Object.prototype,{getPrototypeOf:ti}=Object,{iterator:ri,toStringTag:si}=Symbol,ai=(ni=Object.create(null),e=>{const t=ei.call(e);return ni[t]||(ni[t]=t.slice(8,-1).toLowerCase())});var ni;const ii=e=>(e=e.toLowerCase(),t=>ai(t)===e),oi=e=>t=>typeof t===e,{isArray:li}=Array,ci=oi("undefined");function di(e){return null!==e&&!ci(e)&&null!==e.constructor&&!ci(e.constructor)&&mi(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ui=ii("ArrayBuffer");const hi=oi("string"),mi=oi("function"),pi=oi("number"),gi=e=>null!==e&&"object"==typeof e,fi=e=>{if("object"!==ai(e))return!1;const t=ti(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||si in e||ri in e)},xi=ii("Date"),yi=ii("File"),bi=ii("Blob"),wi=ii("FileList"),vi=ii("URLSearchParams"),[Ni,ji,ki,Si]=["ReadableStream","Request","Response","Headers"].map(ii);function Ei(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let s,a;if("object"!=typeof e&&(e=[e]),li(e))for(s=0,a=e.length;s<a;s++)t.call(null,e[s],s,e);else{if(di(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),n=a.length;let i;for(s=0;s<n;s++)i=a[s],t.call(null,e[i],i,e)}}function Ii(e,t){if(di(e))return null;t=t.toLowerCase();const r=Object.keys(e);let s,a=r.length;for(;a-- >0;)if(s=r[a],t===s.toLowerCase())return s;return null}const Ci="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,_i=e=>!ci(e)&&e!==Ci;const Ti=(Ai="undefined"!=typeof Uint8Array&&ti(Uint8Array),e=>Ai&&e instanceof Ai);var Ai;const Pi=ii("HTMLFormElement"),Ri=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Oi=ii("RegExp"),Li=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),s={};Ei(r,(r,a)=>{let n;!1!==(n=t(r,a,e))&&(s[a]=n||r)}),Object.defineProperties(e,s)};const Di=ii("AsyncFunction"),Ui=(Mi="function"==typeof setImmediate,Fi=mi(Ci.postMessage),Mi?setImmediate:Fi?(Bi=`axios@${Math.random()}`,$i=[],Ci.addEventListener("message",({source:e,data:t})=>{e===Ci&&t===Bi&&$i.length&&$i.shift()()},!1),e=>{$i.push(e),Ci.postMessage(Bi,"*")}):e=>setTimeout(e));var Mi,Fi,Bi,$i;const Hi="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Ci):"undefined"!=typeof process&&process.nextTick||Ui,zi={isArray:li,isArrayBuffer:ui,isBuffer:di,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||mi(e.append)&&("formdata"===(t=ai(e))||"object"===t&&mi(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ui(e.buffer),t},isString:hi,isNumber:pi,isBoolean:e=>!0===e||!1===e,isObject:gi,isPlainObject:fi,isEmptyObject:e=>{if(!gi(e)||di(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(te){return!1}},isReadableStream:Ni,isRequest:ji,isResponse:ki,isHeaders:Si,isUndefined:ci,isDate:xi,isFile:yi,isBlob:bi,isRegExp:Oi,isFunction:mi,isStream:e=>gi(e)&&mi(e.pipe),isURLSearchParams:vi,isTypedArray:Ti,isFileList:wi,forEach:Ei,merge:function e(){const{caseless:t,skipUndefined:r}=_i(this)&&this||{},s={},a=(a,n)=>{const i=t&&Ii(s,n)||n;fi(s[i])&&fi(a)?s[i]=e(s[i],a):fi(a)?s[i]=e({},a):li(a)?s[i]=a.slice():r&&ci(a)||(s[i]=a)};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&Ei(arguments[n],a);return s},extend:(e,t,r,{allOwnKeys:s}={})=>(Ei(t,(t,s)=>{r&&mi(t)?e[s]=Qn(t,r):e[s]=t},{allOwnKeys:s}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,s)=>{e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,s)=>{let a,n,i;const o={};if(t=t||{},null==e)return t;do{for(a=Object.getOwnPropertyNames(e),n=a.length;n-- >0;)i=a[n],s&&!s(i,e,t)||o[i]||(t[i]=e[i],o[i]=!0);e=!1!==r&&ti(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:ai,kindOfTest:ii,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const s=e.indexOf(t,r);return-1!==s&&s===r},toArray:e=>{if(!e)return null;if(li(e))return e;let t=e.length;if(!pi(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[ri]).call(e);let s;for(;(s=r.next())&&!s.done;){const r=s.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const s=[];for(;null!==(r=e.exec(t));)s.push(r);return s},isHTMLForm:Pi,hasOwnProperty:Ri,hasOwnProp:Ri,reduceDescriptors:Li,freezeMethods:e=>{Li(e,(t,r)=>{if(mi(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const s=e[r];mi(s)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},s=e=>{e.forEach(e=>{r[e]=!0})};return li(e)?s(e):s(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ii,global:Ci,isContextDefined:_i,isSpecCompliantForm:function(e){return!!(e&&mi(e.append)&&"FormData"===e[si]&&e[ri])},toJSONObject:e=>{const t=new Array(10),r=(e,s)=>{if(gi(e)){if(t.indexOf(e)>=0)return;if(di(e))return e;if(!("toJSON"in e)){t[s]=e;const a=li(e)?[]:{};return Ei(e,(e,t)=>{const n=r(e,s+1);!ci(n)&&(a[t]=n)}),t[s]=void 0,a}}return e};return r(e,0)},isAsyncFn:Di,isThenable:e=>e&&(gi(e)||mi(e))&&mi(e.then)&&mi(e.catch),setImmediate:Ui,asap:Hi,isIterable:e=>null!=e&&mi(e[ri])};function Vi(e,t,r,s,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),s&&(this.request=s),a&&(this.response=a,this.status=a.status?a.status:null)}zi.inherits(Vi,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:zi.toJSONObject(this.config),code:this.code,status:this.status}}});const Gi=Vi.prototype,qi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qi[e]={value:e}}),Object.defineProperties(Vi,qi),Object.defineProperty(Gi,"isAxiosError",{value:!0}),Vi.from=(e,t,r,s,a,n)=>{const i=Object.create(Gi);zi.toFlatObject(e,i,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const o=e&&e.message?e.message:"Error",l=null==t&&e?e.code:t;return Vi.call(i,o,l,r,s,a),e&&null==i.cause&&Object.defineProperty(i,"cause",{value:e,configurable:!0}),i.name=e&&e.name||"Error",n&&Object.assign(i,n),i};function Wi(e){return zi.isPlainObject(e)||zi.isArray(e)}function Ji(e){return zi.endsWith(e,"[]")?e.slice(0,-2):e}function Ki(e,t,r){return e?e.concat(t).map(function(e,t){return e=Ji(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const Zi=zi.toFlatObject(zi,{},null,function(e){return/^is[A-Z]/.test(e)});function Xi(e,t,r){if(!zi.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const s=(r=zi.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!zi.isUndefined(t[e])})).metaTokens,a=r.visitor||c,n=r.dots,i=r.indexes,o=(r.Blob||"undefined"!=typeof Blob&&Blob)&&zi.isSpecCompliantForm(t);if(!zi.isFunction(a))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(zi.isDate(e))return e.toISOString();if(zi.isBoolean(e))return e.toString();if(!o&&zi.isBlob(e))throw new Vi("Blob is not supported. Use a Buffer instead.");return zi.isArrayBuffer(e)||zi.isTypedArray(e)?o&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,a){let o=e;if(e&&!a&&"object"==typeof e)if(zi.endsWith(r,"{}"))r=s?r:r.slice(0,-2),e=JSON.stringify(e);else if(zi.isArray(e)&&function(e){return zi.isArray(e)&&!e.some(Wi)}(e)||(zi.isFileList(e)||zi.endsWith(r,"[]"))&&(o=zi.toArray(e)))return r=Ji(r),o.forEach(function(e,s){!zi.isUndefined(e)&&null!==e&&t.append(!0===i?Ki([r],s,n):null===i?r:r+"[]",l(e))}),!1;return!!Wi(e)||(t.append(Ki(a,r,n),l(e)),!1)}const d=[],u=Object.assign(Zi,{defaultVisitor:c,convertValue:l,isVisitable:Wi});if(!zi.isObject(e))throw new TypeError("data must be an object");return function e(r,s){if(!zi.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+s.join("."));d.push(r),zi.forEach(r,function(r,n){!0===(!(zi.isUndefined(r)||null===r)&&a.call(t,r,zi.isString(n)?n.trim():n,s,u))&&e(r,s?s.concat(n):[n])}),d.pop()}}(e),t}function Yi(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Qi(e,t){this._pairs=[],e&&Xi(e,this,t)}const eo=Qi.prototype;function to(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ro(e,t,r){if(!t)return e;const s=r&&r.encode||to;zi.isFunction(r)&&(r={serialize:r});const a=r&&r.serialize;let n;if(n=a?a(t,r):zi.isURLSearchParams(t)?t.toString():new Qi(t,r).toString(s),n){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}eo.append=function(e,t){this._pairs.push([e,t])},eo.toString=function(e){const t=e?function(t){return e.call(this,t,Yi)}:Yi;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};class so{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){zi.forEach(this.handlers,function(t){null!==t&&e(t)})}}const ao={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},no={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Qi,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},io="undefined"!=typeof window&&"undefined"!=typeof document,oo="object"==typeof navigator&&navigator||void 0,lo=io&&(!oo||["ReactNative","NativeScript","NS"].indexOf(oo.product)<0),co="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,uo=io&&window.location.href||"http://localhost",ho={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:io,hasStandardBrowserEnv:lo,hasStandardBrowserWebWorkerEnv:co,navigator:oo,origin:uo},Symbol.toStringTag,{value:"Module"})),...no};function mo(e){function t(e,r,s,a){let n=e[a++];if("__proto__"===n)return!0;const i=Number.isFinite(+n),o=a>=e.length;if(n=!n&&zi.isArray(s)?s.length:n,o)return zi.hasOwnProp(s,n)?s[n]=[s[n],r]:s[n]=r,!i;s[n]&&zi.isObject(s[n])||(s[n]=[]);return t(e,r,s[n],a)&&zi.isArray(s[n])&&(s[n]=function(e){const t={},r=Object.keys(e);let s;const a=r.length;let n;for(s=0;s<a;s++)n=r[s],t[n]=e[n];return t}(s[n])),!i}if(zi.isFormData(e)&&zi.isFunction(e.entries)){const r={};return zi.forEachEntry(e,(e,s)=>{t(function(e){return zi.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),s,r,0)}),r}return null}const po={transitional:ao,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",s=r.indexOf("application/json")>-1,a=zi.isObject(e);a&&zi.isHTMLForm(e)&&(e=new FormData(e));if(zi.isFormData(e))return s?JSON.stringify(mo(e)):e;if(zi.isArrayBuffer(e)||zi.isBuffer(e)||zi.isStream(e)||zi.isFile(e)||zi.isBlob(e)||zi.isReadableStream(e))return e;if(zi.isArrayBufferView(e))return e.buffer;if(zi.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let n;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Xi(e,new ho.classes.URLSearchParams,{visitor:function(e,t,r,s){return ho.isNode&&zi.isBuffer(e)?(this.append(t,e.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((n=zi.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Xi(n?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||s?(t.setContentType("application/json",!1),function(e,t,r){if(zi.isString(e))try{return(t||JSON.parse)(e),zi.trim(e)}catch(te){if("SyntaxError"!==te.name)throw te}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||po.transitional,r=t&&t.forcedJSONParsing,s="json"===this.responseType;if(zi.isResponse(e)||zi.isReadableStream(e))return e;if(e&&zi.isString(e)&&(r&&!this.responseType||s)){const r=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(te){if(r){if("SyntaxError"===te.name)throw Vi.from(te,Vi.ERR_BAD_RESPONSE,this,null,this.response);throw te}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ho.classes.FormData,Blob:ho.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};zi.forEach(["delete","get","head","post","put","patch"],e=>{po.headers[e]={}});const go=zi.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fo=Symbol("internals");function xo(e){return e&&String(e).trim().toLowerCase()}function yo(e){return!1===e||null==e?e:zi.isArray(e)?e.map(yo):String(e)}function bo(e,t,r,s,a){return zi.isFunction(s)?s.call(this,t,r):(a&&(t=r),zi.isString(t)?zi.isString(s)?-1!==t.indexOf(s):zi.isRegExp(s)?s.test(t):void 0:void 0)}let wo=class{constructor(e){e&&this.set(e)}set(e,t,r){const s=this;function a(e,t,r){const a=xo(t);if(!a)throw new Error("header name must be a non-empty string");const n=zi.findKey(s,a);(!n||void 0===s[n]||!0===r||void 0===r&&!1!==s[n])&&(s[n||t]=yo(e))}const n=(e,t)=>zi.forEach(e,(e,r)=>a(e,r,t));if(zi.isPlainObject(e)||e instanceof this.constructor)n(e,t);else if(zi.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))n((e=>{const t={};let r,s,a;return e&&e.split("\n").forEach(function(e){a=e.indexOf(":"),r=e.substring(0,a).trim().toLowerCase(),s=e.substring(a+1).trim(),!r||t[r]&&go[r]||("set-cookie"===r?t[r]?t[r].push(s):t[r]=[s]:t[r]=t[r]?t[r]+", "+s:s)}),t})(e),t);else if(zi.isObject(e)&&zi.isIterable(e)){let r,s,a={};for(const t of e){if(!zi.isArray(t))throw TypeError("Object iterator must return a key-value pair");a[s=t[0]]=(r=a[s])?zi.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}n(a,t)}else null!=e&&a(t,e,r);return this}get(e,t){if(e=xo(e)){const r=zi.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(e);)t[s[1]]=s[2];return t}(e);if(zi.isFunction(t))return t.call(this,e,r);if(zi.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xo(e)){const r=zi.findKey(this,e);return!(!r||void 0===this[r]||t&&!bo(0,this[r],r,t))}return!1}delete(e,t){const r=this;let s=!1;function a(e){if(e=xo(e)){const a=zi.findKey(r,e);!a||t&&!bo(0,r[a],a,t)||(delete r[a],s=!0)}}return zi.isArray(e)?e.forEach(a):a(e),s}clear(e){const t=Object.keys(this);let r=t.length,s=!1;for(;r--;){const a=t[r];e&&!bo(0,this[a],a,e,!0)||(delete this[a],s=!0)}return s}normalize(e){const t=this,r={};return zi.forEach(this,(s,a)=>{const n=zi.findKey(r,a);if(n)return t[n]=yo(s),void delete t[a];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(a):String(a).trim();i!==a&&delete t[a],t[i]=yo(s),r[i]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return zi.forEach(this,(r,s)=>{null!=r&&!1!==r&&(t[s]=e&&zi.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[fo]=this[fo]={accessors:{}}).accessors,r=this.prototype;function s(e){const s=xo(e);t[s]||(!function(e,t){const r=zi.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+r,{value:function(e,r,a){return this[s].call(this,t,e,r,a)},configurable:!0})})}(r,e),t[s]=!0)}return zi.isArray(e)?e.forEach(s):s(e),this}};function vo(e,t){const r=this||po,s=t||r,a=wo.from(s.headers);let n=s.data;return zi.forEach(e,function(e){n=e.call(r,n,a.normalize(),t?t.status:void 0)}),a.normalize(),n}function No(e){return!(!e||!e.__CANCEL__)}function jo(e,t,r){Vi.call(this,null==e?"canceled":e,Vi.ERR_CANCELED,t,r),this.name="CanceledError"}function ko(e,t,r){const s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(new Vi("Request failed with status code "+r.status,[Vi.ERR_BAD_REQUEST,Vi.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}wo.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),zi.reduceDescriptors(wo.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),zi.freezeMethods(wo),zi.inherits(jo,Vi,{__CANCEL__:!0});const So=(e,t,r=3)=>{let s=0;const a=function(e,t){e=e||10;const r=new Array(e),s=new Array(e);let a,n=0,i=0;return t=void 0!==t?t:1e3,function(o){const l=Date.now(),c=s[i];a||(a=l),r[n]=o,s[n]=l;let d=i,u=0;for(;d!==n;)u+=r[d++],d%=e;if(n=(n+1)%e,n===i&&(i=(i+1)%e),l-a<t)return;const h=c&&l-c;return h?Math.round(1e3*u/h):void 0}}(50,250);return function(e,t){let r,s,a=0,n=1e3/t;const i=(t,n=Date.now())=>{a=n,r=null,s&&(clearTimeout(s),s=null),e(...t)};return[(...e)=>{const t=Date.now(),o=t-a;o>=n?i(e,t):(r=e,s||(s=setTimeout(()=>{s=null,i(r)},n-o)))},()=>r&&i(r)]}(r=>{const n=r.loaded,i=r.lengthComputable?r.total:void 0,o=n-s,l=a(o);s=n;e({loaded:n,total:i,progress:i?n/i:void 0,bytes:o,rate:l||void 0,estimated:l&&i&&n<=i?(i-n)/l:void 0,event:r,lengthComputable:null!=i,[t?"download":"upload"]:!0})},r)},Eo=(e,t)=>{const r=null!=e;return[s=>t[0]({lengthComputable:r,total:e,loaded:s}),t[1]]},Io=e=>(...t)=>zi.asap(()=>e(...t)),Co=ho.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,ho.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(ho.origin),ho.navigator&&/(msie|trident)/i.test(ho.navigator.userAgent)):()=>!0,_o=ho.hasStandardBrowserEnv?{write(e,t,r,s,a,n,i){if("undefined"==typeof document)return;const o=[`${e}=${encodeURIComponent(t)}`];zi.isNumber(r)&&o.push(`expires=${new Date(r).toUTCString()}`),zi.isString(s)&&o.push(`path=${s}`),zi.isString(a)&&o.push(`domain=${a}`),!0===n&&o.push("secure"),zi.isString(i)&&o.push(`SameSite=${i}`),document.cookie=o.join("; ")},read(e){if("undefined"==typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function To(e,t,r){let s=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(s||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ao=e=>e instanceof wo?{...e}:e;function Po(e,t){t=t||{};const r={};function s(e,t,r,s){return zi.isPlainObject(e)&&zi.isPlainObject(t)?zi.merge.call({caseless:s},e,t):zi.isPlainObject(t)?zi.merge({},t):zi.isArray(t)?t.slice():t}function a(e,t,r,a){return zi.isUndefined(t)?zi.isUndefined(e)?void 0:s(void 0,e,0,a):s(e,t,0,a)}function n(e,t){if(!zi.isUndefined(t))return s(void 0,t)}function i(e,t){return zi.isUndefined(t)?zi.isUndefined(e)?void 0:s(void 0,e):s(void 0,t)}function o(r,a,n){return n in t?s(r,a):n in e?s(void 0,r):void 0}const l={url:n,method:n,data:n,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:o,headers:(e,t,r)=>a(Ao(e),Ao(t),0,!0)};return zi.forEach(Object.keys({...e,...t}),function(s){const n=l[s]||a,i=n(e[s],t[s],s);zi.isUndefined(i)&&n!==o||(r[s]=i)}),r}const Ro=e=>{const t=Po({},e);let{data:r,withXSRFToken:s,xsrfHeaderName:a,xsrfCookieName:n,headers:i,auth:o}=t;if(t.headers=i=wo.from(i),t.url=ro(To(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),o&&i.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),zi.isFormData(r))if(ho.hasStandardBrowserEnv||ho.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(zi.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&i.set(e,r)})}if(ho.hasStandardBrowserEnv&&(s&&zi.isFunction(s)&&(s=s(t)),s||!1!==s&&Co(t.url))){const e=a&&n&&_o.read(n);e&&i.set(a,e)}return t},Oo="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const s=Ro(e);let a=s.data;const n=wo.from(s.headers).normalize();let i,o,l,c,d,{responseType:u,onUploadProgress:h,onDownloadProgress:m}=s;function p(){c&&c(),d&&d(),s.cancelToken&&s.cancelToken.unsubscribe(i),s.signal&&s.signal.removeEventListener("abort",i)}let g=new XMLHttpRequest;function f(){if(!g)return;const s=wo.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());ko(function(e){t(e),p()},function(e){r(e),p()},{data:u&&"text"!==u&&"json"!==u?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:s,config:e,request:g}),g=null}g.open(s.method.toUpperCase(),s.url,!0),g.timeout=s.timeout,"onloadend"in g?g.onloadend=f:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(f)},g.onabort=function(){g&&(r(new Vi("Request aborted",Vi.ECONNABORTED,e,g)),g=null)},g.onerror=function(t){const s=new Vi(t&&t.message?t.message:"Network Error",Vi.ERR_NETWORK,e,g);s.event=t||null,r(s),g=null},g.ontimeout=function(){let t=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const a=s.transitional||ao;s.timeoutErrorMessage&&(t=s.timeoutErrorMessage),r(new Vi(t,a.clarifyTimeoutError?Vi.ETIMEDOUT:Vi.ECONNABORTED,e,g)),g=null},void 0===a&&n.setContentType(null),"setRequestHeader"in g&&zi.forEach(n.toJSON(),function(e,t){g.setRequestHeader(t,e)}),zi.isUndefined(s.withCredentials)||(g.withCredentials=!!s.withCredentials),u&&"json"!==u&&(g.responseType=s.responseType),m&&([l,d]=So(m,!0),g.addEventListener("progress",l)),h&&g.upload&&([o,c]=So(h),g.upload.addEventListener("progress",o),g.upload.addEventListener("loadend",c)),(s.cancelToken||s.signal)&&(i=t=>{g&&(r(!t||t.type?new jo(null,e,g):t),g.abort(),g=null)},s.cancelToken&&s.cancelToken.subscribe(i),s.signal&&(s.signal.aborted?i():s.signal.addEventListener("abort",i)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(s.url);x&&-1===ho.protocols.indexOf(x)?r(new Vi("Unsupported protocol "+x+":",Vi.ERR_BAD_REQUEST,e)):g.send(a||null)})},Lo=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,s=new AbortController;const a=function(e){if(!r){r=!0,i();const t=e instanceof Error?e:this.reason;s.abort(t instanceof Vi?t:new jo(t instanceof Error?t.message:t))}};let n=t&&setTimeout(()=>{n=null,a(new Vi(`timeout ${t} of ms exceeded`,Vi.ETIMEDOUT))},t);const i=()=>{e&&(n&&clearTimeout(n),n=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)}),e=null)};e.forEach(e=>e.addEventListener("abort",a));const{signal:o}=s;return o.unsubscribe=()=>zi.asap(i),o}},Do=function*(e,t){let r=e.byteLength;if(r<t)return void(yield e);let s,a=0;for(;a<r;)s=a+t,yield e.slice(a,s),a=s},Uo=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Mo=(e,t,r,s)=>{const a=async function*(e,t){for await(const r of Uo(e))yield*Do(r,t)}(e,t);let n,i=0,o=e=>{n||(n=!0,s&&s(e))};return new ReadableStream({async pull(e){try{const{done:t,value:s}=await a.next();if(t)return o(),void e.close();let n=s.byteLength;if(r){let e=i+=n;r(e)}e.enqueue(new Uint8Array(s))}catch(t){throw o(t),t}},cancel:e=>(o(e),a.return())},{highWaterMark:2})},{isFunction:Fo}=zi,Bo=(({Request:e,Response:t})=>({Request:e,Response:t}))(zi.global),{ReadableStream:$o,TextEncoder:Ho}=zi.global,zo=(e,...t)=>{try{return!!e(...t)}catch(te){return!1}},Vo=e=>{e=zi.merge.call({skipUndefined:!0},Bo,e);const{fetch:t,Request:r,Response:s}=e,a=t?Fo(t):"function"==typeof fetch,n=Fo(r),i=Fo(s);if(!a)return!1;const o=a&&Fo($o),l=a&&("function"==typeof Ho?(c=new Ho,e=>c.encode(e)):async e=>new Uint8Array(await new r(e).arrayBuffer()));var c;const d=n&&o&&zo(()=>{let e=!1;const t=new r(ho.origin,{body:new $o,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),u=i&&o&&zo(()=>zi.isReadableStream(new s("").body)),h={stream:u&&(e=>e.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!h[e]&&(h[e]=(t,r)=>{let s=t&&t[e];if(s)return s.call(t);throw new Vi(`Response type '${e}' is not supported`,Vi.ERR_NOT_SUPPORT,r)})});const m=async(e,t)=>{const s=zi.toFiniteNumber(e.getContentLength());return null==s?(async e=>{if(null==e)return 0;if(zi.isBlob(e))return e.size;if(zi.isSpecCompliantForm(e)){const t=new r(ho.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return zi.isArrayBufferView(e)||zi.isArrayBuffer(e)?e.byteLength:(zi.isURLSearchParams(e)&&(e+=""),zi.isString(e)?(await l(e)).byteLength:void 0)})(t):s};return async e=>{let{url:a,method:i,data:o,signal:l,cancelToken:c,timeout:p,onDownloadProgress:g,onUploadProgress:f,responseType:x,headers:y,withCredentials:b="same-origin",fetchOptions:w}=Ro(e),v=t||fetch;x=x?(x+"").toLowerCase():"text";let N=Lo([l,c&&c.toAbortSignal()],p),j=null;const k=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let S;try{if(f&&d&&"get"!==i&&"head"!==i&&0!==(S=await m(y,o))){let e,t=new r(a,{method:"POST",body:o,duplex:"half"});if(zi.isFormData(o)&&(e=t.headers.get("content-type"))&&y.setContentType(e),t.body){const[e,r]=Eo(S,So(Io(f)));o=Mo(t.body,65536,e,r)}}zi.isString(b)||(b=b?"include":"omit");const t=n&&"credentials"in r.prototype,l={...w,signal:N,method:i.toUpperCase(),headers:y.normalize().toJSON(),body:o,duplex:"half",credentials:t?b:void 0};j=n&&new r(a,l);let c=await(n?v(j,w):v(a,l));const p=u&&("stream"===x||"response"===x);if(u&&(g||p&&k)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=c[t]});const t=zi.toFiniteNumber(c.headers.get("content-length")),[r,a]=g&&Eo(t,So(Io(g),!0))||[];c=new s(Mo(c.body,65536,r,()=>{a&&a(),k&&k()}),e)}x=x||"text";let E=await h[zi.findKey(h,x)||"text"](c,e);return!p&&k&&k(),await new Promise((t,r)=>{ko(t,r,{data:E,headers:wo.from(c.headers),status:c.status,statusText:c.statusText,config:e,request:j})})}catch(E){if(k&&k(),E&&"TypeError"===E.name&&/Load failed|fetch/i.test(E.message))throw Object.assign(new Vi("Network Error",Vi.ERR_NETWORK,e,j),{cause:E.cause||E});throw Vi.from(E,E&&E.code,e,j)}}},Go=new Map,qo=e=>{let t=e&&e.env||{};const{fetch:r,Request:s,Response:a}=t,n=[s,a,r];let i,o,l=n.length,c=Go;for(;l--;)i=n[l],o=c.get(i),void 0===o&&c.set(i,o=l?new Map:Vo(t)),c=o;return o};qo();const Wo={http:null,xhr:Oo,fetch:{get:qo}};zi.forEach(Wo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(te){}Object.defineProperty(e,"adapterName",{value:t})}});const Jo=e=>`- ${e}`,Ko=e=>zi.isFunction(e)||null===e||!1===e;const Zo={getAdapter:function(e,t){e=zi.isArray(e)?e:[e];const{length:r}=e;let s,a;const n={};for(let i=0;i<r;i++){let r;if(s=e[i],a=s,!Ko(s)&&(a=Wo[(r=String(s)).toLowerCase()],void 0===a))throw new Vi(`Unknown adapter '${r}'`);if(a&&(zi.isFunction(a)||(a=a.get(t))))break;n[r||"#"+i]=a}if(!a){const e=Object.entries(n).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Vi("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map(Jo).join("\n"):" "+Jo(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return a},adapters:Wo};function Xo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new jo(null,e)}function Yo(e){Xo(e),e.headers=wo.from(e.headers),e.data=vo.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Zo.getAdapter(e.adapter||po.adapter,e)(e).then(function(t){return Xo(e),t.data=vo.call(e,e.transformResponse,t),t.headers=wo.from(t.headers),t},function(t){return No(t)||(Xo(e),t&&t.response&&(t.response.data=vo.call(e,e.transformResponse,t.response),t.response.headers=wo.from(t.response.headers))),Promise.reject(t)})}const Qo="1.13.2",el={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{el[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tl={};el.transitional=function(e,t,r){function s(e,t){return"[Axios v"+Qo+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,a,n)=>{if(!1===e)throw new Vi(s(a," has been removed"+(t?" in "+t:"")),Vi.ERR_DEPRECATED);return t&&!tl[a]&&(tl[a]=!0,console.warn(s(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,a,n)}},el.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const rl={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Vi("options must be an object",Vi.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let a=s.length;for(;a-- >0;){const n=s[a],i=t[n];if(i){const t=e[n],r=void 0===t||i(t,n,e);if(!0!==r)throw new Vi("option "+n+" must be "+r,Vi.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Vi("Unknown option "+n,Vi.ERR_BAD_OPTION)}},validators:el},sl=rl.validators;let al=class{constructor(e){this.defaults=e||{},this.interceptors={request:new so,response:new so}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(te){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Po(this.defaults,t);const{transitional:r,paramsSerializer:s,headers:a}=t;void 0!==r&&rl.assertOptions(r,{silentJSONParsing:sl.transitional(sl.boolean),forcedJSONParsing:sl.transitional(sl.boolean),clarifyTimeoutError:sl.transitional(sl.boolean)},!1),null!=s&&(zi.isFunction(s)?t.paramsSerializer={serialize:s}:rl.assertOptions(s,{encode:sl.function,serialize:sl.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),rl.assertOptions(t,{baseUrl:sl.spelling("baseURL"),withXsrfToken:sl.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let n=a&&zi.merge(a.common,a[t.method]);a&&zi.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=wo.concat(n,a);const i=[];let o=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,i.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let d,u=0;if(!o){const e=[Yo.bind(this),void 0];for(e.unshift(...i),e.push(...l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=i.length;let h=t;for(;u<d;){const e=i[u++],t=i[u++];try{h=e(h)}catch(m){t.call(this,m);break}}try{c=Yo.call(this,h)}catch(m){return Promise.reject(m)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return ro(To((e=Po(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};zi.forEach(["delete","get","head","options"],function(e){al.prototype[e]=function(t,r){return this.request(Po(r||{},{method:e,url:t,data:(r||{}).data}))}}),zi.forEach(["post","put","patch"],function(e){function t(t){return function(r,s,a){return this.request(Po(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:s}))}}al.prototype[e]=t(),al.prototype[e+"Form"]=t(!0)});const nl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(nl).forEach(([e,t])=>{nl[t]=e});const il=function e(t){const r=new al(t),s=Qn(al.prototype.request,r);return zi.extend(s,al.prototype,r,{allOwnKeys:!0}),zi.extend(s,r,null,{allOwnKeys:!0}),s.create=function(r){return e(Po(t,r))},s}(po);il.Axios=al,il.CanceledError=jo,il.CancelToken=class e{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const s=new Promise(e=>{r.subscribe(e),t=e}).then(e);return s.cancel=function(){r.unsubscribe(t)},s},e(function(e,s,a){r.reason||(r.reason=new jo(e,s,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;const r=new e(function(e){t=e});return{token:r,cancel:t}}},il.isCancel=No,il.VERSION=Qo,il.toFormData=Xi,il.AxiosError=Vi,il.Cancel=il.CanceledError,il.all=function(e){return Promise.all(e)},il.spread=function(e){return function(t){return e.apply(null,t)}},il.isAxiosError=function(e){return zi.isObject(e)&&!0===e.isAxiosError},il.mergeConfig=Po,il.AxiosHeaders=wo,il.formToJSON=e=>mo(zi.isHTMLForm(e)?new FormData(e):e),il.getAdapter=Zo.getAdapter,il.HttpStatusCode=nl,il.default=il;const{Axios:ol,AxiosError:ll,CanceledError:cl,isCancel:dl,CancelToken:ul,VERSION:hl,all:ml,Cancel:pl,isAxiosError:gl,spread:fl,toFormData:xl,AxiosHeaders:yl,HttpStatusCode:bl,formToJSON:wl,getAdapter:vl,mergeConfig:Nl}=il;console.log("🔥 API_BASE_URL:",Xe,"🔥 API_ROOT:",Qe);const jl=il.create({baseURL:Qe||Xe,timeout:1e4});jl.interceptors.request.use(e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),jl.interceptors.response.use(e=>e,async e=>{const t=e.config;if(401===e.response?.status&&!t._retry){t._retry=!0;try{const e=localStorage.getItem("refreshToken");if(!e)throw new Error("No refresh token available");const r=await il.post(`${Xe}/auth/refresh`,{refreshToken:e}),{accessToken:s}=r.data;return localStorage.setItem("accessToken",s),t.headers.Authorization=`Bearer ${s}`,jl(t)}catch(r){return localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),window.location.href="/login",Promise.reject(r)}}return Promise.reject(e)});const kl={async logout(){await jl.post("/auth/logout"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")},getProfile:async()=>(await jl.get("/auth/profile")).data,refreshToken:async e=>(await jl.post("/auth/refresh",{refreshToken:e})).data,forgotPassword:async e=>(await jl.post("/auth/forgot-password",{email:e})).data,resetPassword:async(e,t)=>(await jl.post("/auth/reset-password",{token:e,newPassword:t})).data},Sl=()=>{const t=i(),[s,a]=r.useState(""),[n,l]=r.useState(!1),[c,d]=r.useState(!1),u=()=>{t("/login")},[m,p]=r.useState(60),[g,f]=r.useState(!1);o.useEffect(()=>{if(!c)return;if(0===m)return void f(!0);const e=setInterval(()=>{p(e=>e>0?e-1:0)},1e3);return()=>clearInterval(e)},[c,m]);const v=async()=>{l(!0),f(!1),p(60);try{const e=await kl.forgotPassword(s);Ee.success(e.message)}catch(e){Ee.error(e?.response?.data?.message||"Erro ao reenviar email de recuperação")}finally{l(!1)}};return c?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:e.jsx(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:e.jsxs(Zn,{className:"p-8 text-center",children:[e.jsx(h.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:e.jsx(x,{className:"w-16 h-16 text-green-500 mx-auto"})}),e.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Email Enviado!"}),e.jsxs("p",{className:"text-gray-300 mb-6",children:["Enviamos um link de recuperação para ",e.jsx("strong",{children:s}),". Verifique sua caixa de entrada e siga as instruções para redefinir sua senha."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(Xn,{onClick:u,variant:"outline",className:"w-full",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]}),e.jsx("p",{className:"text-sm text-gray-400",children:"Não recebeu o email? Verifique sua pasta de spam ou tente novamente em alguns minutos."}),g?e.jsx(Xn,{onClick:v,disabled:n,className:"w-full mt-2",children:"Reenviar Email de Recuperação"}):e.jsxs("p",{className:"text-xs text-blue-300 mt-2",children:["Você poderá reenviar o email em ",m," segundos."]})]})]})})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:e.jsx(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:e.jsxs(Zn,{className:"p-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx(h.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:e.jsx(b,{className:"w-12 h-12 text-blue-400 mx-auto"})}),e.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Esqueci a Senha"}),e.jsx("p",{className:"text-gray-300",children:"Digite seu email para receber um link de recuperação de senha"})]}),e.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!s)return void Ee.error("Por favor, insira seu email");if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)){l(!0);try{const e=await kl.forgotPassword(s);d(!0),Ee.success(e.message)}catch(t){Ee.error(t?.response?.data?.message||"Erro ao enviar email de recuperação")}finally{l(!1)}}else Ee.error("Por favor, insira um email válido")},className:"space-y-6",children:[e.jsx("div",{children:e.jsx(Yn,{type:"email",placeholder:"Digite seu email",value:s,onChange:e=>a(e.target.value),disabled:n,className:"w-full"})}),e.jsxs(Xn,{type:"submit",disabled:n||!s,className:"w-full",children:[n?e.jsx(h.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):e.jsx(w,{className:"w-4 h-4 mr-2"}),n?"Enviando...":"Enviar Link de Recuperação"]}),e.jsxs(Xn,{type:"button",variant:"outline",onClick:u,className:"w-full",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]}),e.jsx("div",{className:"mt-6 text-center",children:e.jsxs("p",{className:"text-sm text-gray-400",children:["Lembrou da senha?"," ",e.jsx("button",{onClick:u,className:"text-blue-400 hover:text-blue-300 font-medium transition-colors",children:"Faça login aqui"})]})})]})})})},El=()=>{const t=i(),[s]=l(),[a,n]=r.useState(""),[o,c]=r.useState(""),[d,u]=r.useState(!1),[m,p]=r.useState(!1),[g,f]=r.useState(!1),[b,w]=r.useState(!0),[S,E]=r.useState(!1),I=s.get("token");r.useEffect(()=>{console.log("ResetPassword mounted, token=",I),I||w(!1)},[I]);const C=()=>{t("/login")};return b?S?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:e.jsx(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:e.jsxs(Zn,{className:"p-8 text-center",children:[e.jsx(h.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:e.jsx(x,{className:"w-16 h-16 text-green-500 mx-auto"})}),e.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Senha Redefinida!"}),e.jsx("p",{className:"text-gray-300 mb-6",children:"Sua senha foi redefinida com sucesso. Agora você pode fazer login com sua nova senha."}),e.jsx(Xn,{onClick:C,className:"w-full",children:"Fazer Login"})]})})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:e.jsx(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:e.jsxs(Zn,{className:"p-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx(h.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:e.jsx(N,{className:"w-12 h-12 text-blue-400 mx-auto"})}),e.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Redefinir Senha"}),e.jsx("p",{className:"text-gray-300",children:"Digite sua nova senha"})]}),e.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!a||!o)return void Ee.error("Por favor, preencha todos os campos");const t=(r=a).length<8?"A senha deve ter pelo menos 8 caracteres":/(?=.*[a-z])/.test(r)?/(?=.*[A-Z])/.test(r)?/(?=.*\d)/.test(r)?null:"A senha deve conter pelo menos um número":"A senha deve conter pelo menos uma letra maiúscula":"A senha deve conter pelo menos uma letra minúscula";var r;if(t)Ee.error(t);else if(a===o){f(!0);try{if(!I)throw new Error("Token ausente");const e=await kl.resetPassword(I,a);E(!0),Ee.success(e?.message||"Senha redefinida com sucesso!")}catch(s){console.error("ResetPassword submit error:",s?.response?.data||s);const e=s?.response?.status,t=s?.response?.data?.message||s?.message||"Erro ao redefinir senha. Tente novamente";400===e||404===e?(w(!1),console.warn("ResetPassword: backend returned status indicating invalid token:",e,t)):Ee.error(t)}finally{f(!1)}}else Ee.error("As senhas não coincidem")},className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"relative",children:[e.jsx(Yn,{type:d?"text":"password",placeholder:"Nova senha",value:a,onChange:e=>n(e.target.value),disabled:g,className:"w-full pr-12"}),e.jsx("button",{type:"button",onClick:()=>u(!d),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:d?e.jsx(j,{className:"w-4 h-4"}):e.jsx(k,{className:"w-4 h-4"})})]}),a&&e.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[e.jsxs("div",{className:"flex items-center "+(a.length>=8?"text-green-400":"text-red-400"),children:[e.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(a.length>=8?"bg-green-400":"bg-red-400")}),"Pelo menos 8 caracteres"]}),e.jsxs("div",{className:"flex items-center "+(/(?=.*[a-z])/.test(a)?"text-green-400":"text-red-400"),children:[e.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[a-z])/.test(a)?"bg-green-400":"bg-red-400")}),"Uma letra minúscula"]}),e.jsxs("div",{className:"flex items-center "+(/(?=.*[A-Z])/.test(a)?"text-green-400":"text-red-400"),children:[e.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[A-Z])/.test(a)?"bg-green-400":"bg-red-400")}),"Uma letra maiúscula"]}),e.jsxs("div",{className:"flex items-center "+(/(?=.*\d)/.test(a)?"text-green-400":"text-red-400"),children:[e.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*\d)/.test(a)?"bg-green-400":"bg-red-400")}),"Um número"]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"relative",children:[e.jsx(Yn,{type:m?"text":"password",placeholder:"Confirmar nova senha",value:o,onChange:e=>c(e.target.value),disabled:g,className:"w-full pr-12"}),e.jsx("button",{type:"button",onClick:()=>p(!m),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:m?e.jsx(j,{className:"w-4 h-4"}):e.jsx(k,{className:"w-4 h-4"})})]}),o&&e.jsx("div",{className:"mt-2 text-xs",children:e.jsxs("div",{className:"flex items-center "+(a===o?"text-green-400":"text-red-400"),children:[e.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(a===o?"bg-green-400":"bg-red-400")}),a===o?"Senhas coincidem":"Senhas não coincidem"]})})]}),e.jsxs(Xn,{type:"submit",disabled:g||!a||!o||a!==o,className:"w-full",children:[g?e.jsx(h.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):e.jsx(N,{className:"w-4 h-4 mr-2"}),g?"Redefinindo...":"Redefinir Senha"]}),e.jsxs(Xn,{type:"button",variant:"outline",onClick:C,className:"w-full",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:e.jsx(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:e.jsxs(Zn,{className:"p-8 text-center",children:[e.jsx(v,{className:"w-16 h-16 text-red-500 mx-auto mb-6"}),e.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Token Inválido"}),e.jsx("p",{className:"text-gray-300 mb-6",children:"O link de recuperação é inválido ou expirou. Por favor, solicite um novo link de recuperação."}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(Xn,{onClick:()=>t("/forgot-password"),className:"w-full",children:"Solicitar Novo Link"}),e.jsxs(Xn,{onClick:C,variant:"outline",className:"w-full",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})})},Il=()=>{const[t,s]=r.useState(""),[a,n]=r.useState(""),[o,c]=r.useState(""),[d,u]=r.useState(!0),[m,p]=r.useState(!1),[g,f]=r.useState(!1),x=i(),[y]=l(),{refreshAuth:w}=qn();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",d),console.log("searchParams mode:",y.get("mode")),console.log("authService.isAuthenticated():",Gn.isAuthenticated()),r.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await Gn.handleGoogleRedirectResult();if(e){console.log("✅ Login Google por redirect:",e),Ze.success(`Bem-vindo, ${e.name}! 🎉`);try{w()}catch(te){console.warn("⚠️ refreshAuth falhou após redirect:",te)}return void x("/dashboard")}}catch(e){console.error("❌ Erro no redirect Google:",e),Ze.error("Erro ao processar login Google")}})();const e=y.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void u(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[x,y]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",d,"loading =",g),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx(h.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),e.jsx(h.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),e.jsx(h.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),e.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx(h.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:e.jsx("span",{className:"text-3xl",children:"💰"})}),e.jsx(h.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),e.jsx(h.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:d?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!d&&e.jsx(h.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),e.jsxs(h.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[e.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&a&&(d||o)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?a.length<6?(Ze.error("A senha deve ter pelo menos 6 caracteres"),0):!(!d&&o.length<2&&(Ze.error("O nome deve ter pelo menos 2 caracteres"),1)):(Ze.error("Por favor, insira um e-mail válido"),0):(Ze.error("Por favor, preencha todos os campos"),0)){f(!0);try{if(d){let e=!1,n=null;try{console.log("🔄 Tentando login principal..."),n=await Gn.login(t,a),e=!0}catch(r){console.log("❌ Login principal falhou:",r.message),console.log("🔄 Tentando método alternativo...");try{n=await Gn.loginAlternative(t,a),e=!0,console.log("✅ Login alternativo funcionou!")}catch(s){throw console.error("❌ Login alternativo também falhou:",s.message),s}}e&&n&&(w(),Ze.success("Login realizado com sucesso!"),x("/dashboard"))}else await Gn.register(o,t,a),Ze.success("Conta criada com sucesso!"),w(),x("/dashboard")}catch(n){console.error("Auth error:",n);const e=n.message||"Erro inesperado. Tente novamente";Ze.error(e)}finally{f(!1)}}},className:"space-y-6",children:[!d&&e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:e.jsx(S,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{id:"name",type:"text",value:o,onChange:e=>c(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!d})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:e.jsx(b,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{id:"email",type:"email",value:t,onChange:e=>s(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:e.jsx(N,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{id:"password",type:m?"text":"password",value:a,onChange:e=>n(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),e.jsx("button",{type:"button",onClick:()=>p(!m),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:m?e.jsx(j,{className:"h-5 w-5"}):e.jsx(k,{className:"h-5 w-5"})})]})]}),e.jsx(h.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:g,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:g?e.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):e.jsxs(e.Fragment,{children:[d?e.jsx(E,{className:"h-5 w-5"}):e.jsx(S,{className:"h-5 w-5"}),e.jsx("span",{children:d?"Entrar":"Criar Conta"})]})})]}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300/30"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),e.jsxs(h.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(g)return;f(!0);const e=Ze.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await Gn.loginWithGoogle();Ze.dismiss(e),Ze.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t);try{w()}catch(te){console.warn("⚠️ refreshAuth falhou após loginWithGoogle:",te)}x("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),Ze.dismiss(e);let r="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?r="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?r="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(r="Erro de conexão. Verifique sua internet"),Ze.error(r)}finally{f(!1)}},disabled:g,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),e.jsx("span",{children:"Continuar com Google"})]})]}),d&&e.jsx("div",{className:"mt-6 text-center",children:e.jsx(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>x("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),e.jsxs("div",{className:"mt-8 text-center",children:[e.jsx("p",{className:"text-gray-300 mb-4",children:d?"Não tem uma conta?":"Já tem uma conta?"}),e.jsx(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>u(!d),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:d?"Criar conta":"Entrar na minha conta"})]})]})]})]})},Cl=()=>(console.log("LoginSimple carregando..."),e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[e.jsx("h1",{children:"LOGIN SIMPLES"}),e.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),e.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{children:"Email:"}),e.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{children:"Senha:"}),e.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),e.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]}));async function _l(e){let t;try{const r=localStorage.getItem("accessToken"),s=`${e.planId}_${e.userId}`,a=await il.post("https://backend-holy-fog-6984.fly.dev/api/payments/create-pending",{planId:e.planId,amount:e.price,externalReference:s},{headers:{Authorization:r?`Bearer ${r}`:void 0}});if(!a||!a.data||!a.data.externalReference)throw new Error("PENDING_FAILED");t=a.data.externalReference}catch(s){throw new Error("PENDING_FAILED")}const r={...e,metadata:{period:e.period||"monthly"}};return t&&(r.externalReference=t),async function({title:e,description:t,price:r,quantity:s=1,planId:a,userId:n,externalReference:i,metadata:o}){const l={items:[{title:e,description:t,quantity:s,currency_id:"BRL",unit_price:r}],external_reference:i||`${a}_${n}`,back_urls:{success:`${window.location.origin}/payment-success`,failure:`${window.location.origin}/payment-failure`,pending:`${window.location.origin}/payment-pending`},auto_return:"approved",payer:{id:n}};return o&&(l.metadata=o),(await il.post("https://api.mercadopago.com/checkout/preferences",l,{headers:{Authorization:"Bearer APP_USR-3052209763520164-111122-a38846f5945c8a9ce31476a4b2e8933b-140581134","Content-Type":"application/json"}})).data}(r)}const Tl=()=>{const{user:t}=qn(),[s,a]=r.useState("monthly"),[n,i]=r.useState({isConnected:!1,isLoading:!0,products:null}),[o,l]=r.useState(null),[c,d]=r.useState(null),u=[{id:"basic",name:"Básico",icon:e.jsx(I,{className:"w-10 h-10 text-gray-500"}),color:"gray",gradient:"from-gray-400 to-gray-600",features:["Gratuito (R$ 0,00/mês)","Limite de 2 moedas (ex: BRL, USD)","Limite de 2 plataformas (Shopify, Nuvemshop)","Limite de 2 gateways de pagamento (Stripe, Mercado Pago)","Pode realizar 10 cálculos por mês","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:0,quarterly:{total:0,perMonth:0},annual:{total:0,perMonth:0}}},{id:"gold",name:"Gold",icon:e.jsx(h.div,{initial:{scale:1},animate:{scale:[1,1.15,1],boxShadow:["0 0 0px #FFD700","0 0 24px #FFD700","0 0 0px #FFD700"]},transition:{repeat:1/0,duration:2},children:e.jsx(C,{className:"w-12 h-12 text-yellow-500 drop-shadow-lg"})}),color:"yellow",gradient:"from-yellow-400 to-yellow-600",popular:!0,features:["R$ 9,90/mês","Suporte a 10 moedas","Até 4 plataformas","Até 4 gateways de pagamento","Cálculo automático em tempo real","Atualização automática de câmbio","Principais plataformas (Shopee, AliExpress, Nuvemshop, etc.)","Suporte via e-mail"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:9},annual:{total:89.9,perMonth:7.5}}},{id:"premium",name:"Premium",icon:e.jsxs(h.div,{initial:{rotate:0,scale:1},animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{repeat:1/0,duration:3},className:"relative flex items-center justify-center",children:[e.jsx(_,{className:"w-12 h-12 text-purple-500 drop-shadow-lg"}),e.jsx(h.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1},className:"absolute -top-2 -right-2",children:e.jsx(T,{className:"w-7 h-7 text-blue-500 drop-shadow-xl"})})]}),color:"purple",gradient:"from-purple-400 to-purple-600",features:["R$ 19,90/mês","Todas as moedas disponíveis (70+)","Todas as plataformas integradas","Todos os gateways de pagamento","Cálculo automático em tempo real","Histórico de preços completo","Suporte técnico prioritário","Segurança avançada nos pagamentos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.6}}}],m=(e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)} (R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês)`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)} (R$ ${e.prices.annual.perMonth.toFixed(2)}/mês)`}}},p=(e,t)=>{const r=e.prices.monthly*("quarterly"===t?3:12),s=e.prices[t].total;return Math.round((r-s)/r*100)};return r.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),r=localStorage.getItem("currentUser");if(e&&"active"===t&&r){const t=localStorage.getItem("subscriptionDate");if(t){const r=new Date(t);if(((new Date).getTime()-r.getTime())/36e5<24)try{if(e.trim().startsWith("{")){const t=JSON.parse(e);t&&t.type?l(t.type):l(String(e))}else l(e)}catch(te){l(String(e))}else localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate")}}i({isConnected:!0,isLoading:!1,products:null})},[]),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 flex items-center justify-center",children:e.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border-2 border-blue-200 shadow-2xl mb-8",children:[e.jsx("h3",{className:"text-2xl font-bold text-blue-700 mb-6 text-center tracking-tight",children:"Escolha o período de cobrança"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:["monthly","quarterly","annual"].map(t=>e.jsxs(h.button,{whileHover:{scale:1.07,boxShadow:"0 0 16px #60A5FA"},whileTap:{scale:.97},onClick:()=>a(t),className:"p-4 rounded-2xl border-2 font-semibold text-lg transition-all relative shadow-lg "+(s===t?"border-blue-500 bg-blue-100 text-blue-700":"border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"),children:[e.jsx("p",{className:"font-bold text-lg",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[t]}),"monthly"!==t&&e.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow",children:["-",p(u[1],t),"%"]})]},t))})]}),!n.isLoading&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:u.map((r,a)=>e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*a},className:`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl flex flex-col h-full transition-all duration-300 ${r.popular?"border-yellow-400 shadow-yellow-200 scale-105":""} ${o===r.id?"ring-2 ring-green-500":""}`,children:[e.jsxs("div",{className:"flex flex-col items-center mb-8",children:[e.jsx("div",{className:`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${r.gradient} shadow-lg`,children:r.icon}),e.jsx("span",{className:`text-3xl font-extrabold text-${r.color}-700 mb-2 tracking-tight`,children:r.name}),r.popular&&e.jsx(h.span,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.5},className:"px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse",children:"⭐ Mais Popular"}),e.jsx("span",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:m(r,s).label})]}),e.jsx("ul",{className:"mb-8 text-base text-gray-900 space-y-4 flex-1",children:r.features.map((t,r)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(I,{className:"w-5 h-5 text-green-500"}),e.jsx("span",{children:t})]},r))}),e.jsx("div",{className:"mt-auto",children:e.jsxs(h.button,{whileHover:{scale:o===r.id?1:1.07,boxShadow:o===r.id?void 0:"0 0 16px "+("yellow"===r.color?"#FFD700":"purple"===r.color?"#6366F1":"#60A5FA")},whileTap:{scale:o===r.id?1:.97},onClick:async()=>{if(o!==r.id){d(`${r.id}_${s}`),Ze.loading("Redirecionando para pagamento...",{id:"purchase"});try{if(!t?.id)throw new Error("Usuário não encontrado");let a;try{a=await _l({title:`Assinatura DropCalc - ${r.name}`,description:`Plano ${r.name} (${s})`,price:m(r,s).value,planId:r.id,userId:t.id,period:s})}catch(e){return console.error("Erro ao criar pending/payment preference:",e),void Ze.error("Erro ao iniciar assinatura, tente novamente.",{id:"purchase"})}a&&a.init_point?window.location.href=a.init_point:(console.error("Preferência criada sem init_point:",a),Ze.error("Erro ao iniciar assinatura, tente novamente.",{id:"purchase"}))}catch(a){console.error("Erro no fluxo de compra:",a),Ze.error("Erro ao iniciar assinatura, tente novamente.",{id:"purchase"})}finally{d(null)}}},disabled:c===`${r.id}_${s}`||o===r.id,className:"w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 "+(o===r.id?"bg-green-100 text-green-700 cursor-default":c===`${r.id}_${s}`?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${r.gradient} text-white hover:shadow-2xl`),children:[e.jsx(A,{className:"w-5 h-5"}),"Assinar"]})})]},r.id))}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"overflow-x-auto mb-10",children:[e.jsx("h3",{className:"text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight",children:"Comparativo dos Planos"}),e.jsxs("table",{className:"min-w-full bg-white/80 rounded-3xl shadow-2xl border border-blue-100",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-4 px-6 text-left font-bold text-lg bg-blue-50 rounded-tl-3xl",children:"Benefício"}),u.map(t=>e.jsx("th",{className:"py-4 px-6 text-center font-bold text-lg bg-blue-50",children:e.jsx("span",{className:`text-base font-bold text-${t.color}-700`,children:t.name})},t.id))]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-white/60",children:[e.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Preço"}),u.map(t=>e.jsx("td",{className:"py-3 px-6 text-center font-bold text-lg",children:m(t,s).label},t.id))]}),e.jsxs("tr",{className:"bg-blue-50/60",children:[e.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Moedas suportadas"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"70+"})]}),e.jsxs("tr",{className:"bg-white/60",children:[e.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Plataformas integradas"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"Todas"})]}),e.jsxs("tr",{className:"bg-blue-50/60",children:[e.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Gateways de pagamento"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"Todos"})]}),e.jsxs("tr",{className:"bg-white/60",children:[e.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Cálculos por mês"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"})]}),e.jsxs("tr",{className:"bg-blue-50/60",children:[e.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Suporte"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"Prioritário"})]}),e.jsxs("tr",{className:"bg-white/60 rounded-b-3xl",children:[e.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Segurança avançada"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),e.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),e.jsx("td",{className:"py-3 px-6 text-center",children:e.jsx(I,{className:"w-6 h-6 text-green-500 mx-auto"})})]})]})]})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mt-10",children:[e.jsx(g,{className:"w-16 h-16 mx-auto mb-6 opacity-90 animate-bounce"}),e.jsx("h3",{className:"text-2xl font-extrabold mb-3 tracking-tight",children:"💡 Dica Especial"}),e.jsxs("p",{className:"opacity-95 text-lg",children:["Com o ",e.jsx("span",{className:"font-bold text-yellow-200",children:"DropCalc Premium"}),", você economiza tempo e maximiza seus lucros com cálculos automáticos, integração completa e segurança avançada."]})]})]})})},Al={basic:{maxCurrencies:2,maxPlatforms:2,maxGateways:2,maxCalculationsPerMonth:10,hasAutoCalc:!1,hasExchangeUpdate:!1,hasAI:!1,hasHistory:!1,supportType:"email"},gold:{maxCurrencies:10,maxPlatforms:4,maxGateways:4,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!1,hasHistory:!1,supportType:"email"},premium:{maxCurrencies:70,maxPlatforms:99,maxGateways:99,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!0,hasHistory:!0,supportType:"priority"}};const Pl=({text:t,children:r})=>{const[s,a]=o.useState(!1);return e.jsxs("div",{className:"relative inline-block",children:[e.jsx("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),className:"cursor-help",children:r}),s&&e.jsxs("div",{className:"absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2 max-w-xs",children:[t,e.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"})]})]})},Rl=()=>{const{plan:s,limits:a,isBasic:n,isGold:o,isPremium:l}=function(){const e=localStorage.getItem("userPlan");let t="basic";if(e)if(e.trim().startsWith("{"))try{const r=JSON.parse(e);r&&r.type&&(t=r.type)}catch(te){}else t=e;const s=r.useMemo(()=>Al[t],[t]);return{plan:t,limits:s,isBasic:"basic"===t,isGold:"gold"===t,isPremium:"premium"===t}}(),c=a,d=n,u=i(),{t:g}=t(),{user:f,logout:x,refreshAuth:y,isAdmin:b}=qn();console.log("🎯 DashboardSimples - Estado atual:",{user:!!f,userEmail:f?.email,userName:f?.name,plan:!!s,planType:s,planName:s}),r.useEffect(()=>{const e=localStorage.getItem("accessToken"),t=localStorage.getItem("currentUser");if(console.log("🔍 DashboardSimples - Verificação de auth:",{hasToken:!!e,hasUserData:!!t}),!e||!t)return console.log("❌ Não autenticado, redirecionando para login"),void u("/login");!f&&t&&(console.log("🔄 Fazendo refresh do auth..."),y())},[f,u,y]);const[w,v]=r.useState(""),[N,j]=r.useState(()=>{try{const e=localStorage.getItem("calculadora-historico");return e?JSON.parse(e):[]}catch{return[]}}),[k,S]=r.useState("5.00"),[E,I]=r.useState("4.70"),[C,_]=r.useState("25"),[T,A]=r.useState("0"),[$,H]=r.useState("3"),[z,V]=r.useState("shopify"),[G,q]=r.useState("stripe"),[W,J]=r.useState("USD"),[K,Z]=r.useState("USD"),[X,Y]=r.useState(null),[Q,ee]=r.useState(!1),[re,se]=r.useState(!1),[ae,ne]=r.useState(!1),[ie,oe]=r.useState(()=>{try{const e=localStorage.getItem("calculations-used-this-month");return e?parseInt(e):0}catch{return 0}});r.useEffect(()=>{},[]);const le=[{id:"shopify",nome:"Shopify",taxa:2.9},{id:"nuvemshop",nome:"Nuvem Shop",taxa:3.5},{id:"woocommerce",nome:"WooCommerce",taxa:0},{id:"magento",nome:"Magento",taxa:0},{id:"opencart",nome:"OpenCart",taxa:0},{id:"prestashop",nome:"PrestaShop",taxa:0},{id:"mercadolivre",nome:"Mercado Livre",taxa:13.99},{id:"amazon",nome:"Amazon Brasil",taxa:15},{id:"americanas",nome:"Americanas",taxa:17},{id:"submarino",nome:"Submarino",taxa:17},{id:"casasbahia",nome:"Casas Bahia",taxa:18},{id:"extra",nome:"Extra",taxa:16},{id:"pontofrio",nome:"Ponto Frio",taxa:17},{id:"shopee",nome:"Shopee",taxa:12},{id:"aliexpress",nome:"AliExpress",taxa:8},{id:"wish",nome:"Wish",taxa:15},{id:"etsy",nome:"Etsy",taxa:6.5},{id:"ebay",nome:"eBay",taxa:10},{id:"facebook",nome:"Facebook Shop",taxa:5},{id:"instagram",nome:"Instagram Shop",taxa:5},{id:"tiktok",nome:"TikTok Shop",taxa:6},{id:"elo7",nome:"Elo7",taxa:12},{id:"enjoei",nome:"Enjoei",taxa:15},{id:"olx",nome:"OLX",taxa:0},{id:"vinted",nome:"Vinted",taxa:7},{id:"shein",nome:"Shein",taxa:10},{id:"temu",nome:"Temu",taxa:8},{id:"zoom",nome:"Zoom",taxa:5},{id:"buscape",nome:"Buscapé",taxa:8},{id:"personalizado",nome:"Site Personalizado",taxa:0}],ce=[{id:"stripe",nome:"Stripe",taxa:3.4},{id:"pagseguro",nome:"PagSeguro",taxa:3.99},{id:"mercadopago",nome:"Mercado Pago",taxa:4.99},{id:"paypal",nome:"PayPal",taxa:4.4},{id:"cielo",nome:"Cielo",taxa:3.25},{id:"rede",nome:"Rede",taxa:3.5},{id:"getnet",nome:"Getnet",taxa:3.2},{id:"stone",nome:"Stone",taxa:2.95},{id:"adyen",nome:"Adyen",taxa:2.9},{id:"wirecard",nome:"Wirecard",taxa:3.8},{id:"iugu",nome:"Iugu",taxa:4.5},{id:"pagar.me",nome:"Pagar.me",taxa:4.99},{id:"picpay",nome:"PicPay",taxa:3.99},{id:"asaas",nome:"Asaas",taxa:3.5},{id:"gerencianet",nome:"Gerencianet",taxa:4.2},{id:"moip",nome:"Moip",taxa:4.69},{id:"ebanx",nome:"EBANX",taxa:4.2},{id:"checkout",nome:"Checkout.com",taxa:2.95},{id:"rakuten",nome:"Rakuten Pay",taxa:4.5},{id:"ifood",nome:"iFood Pay",taxa:5.2},{id:"shipay",nome:"SiPay",taxa:3.8},{id:"zoop",nome:"Zoop",taxa:3.59},{id:"vindi",nome:"Vindi",taxa:3.99},{id:"yapay",nome:"YaPay",taxa:4.1},{id:"pagarme",nome:"Pagar.me",taxa:4.99}],de=le.slice(0,c.maxPlatforms),ue=[{codigo:"USD",nome:"Dólar Americano"},{codigo:"EUR",nome:"Euro"},{codigo:"GBP",nome:"Libra Esterlina"},{codigo:"CNY",nome:"Yuan Chinês"},{codigo:"JPY",nome:"Iene Japonês"},{codigo:"CAD",nome:"Dólar Canadense"},{codigo:"AUD",nome:"Dólar Australiano"},{codigo:"CHF",nome:"Franco Suíço"},{codigo:"SEK",nome:"Coroa Sueca"},{codigo:"NOK",nome:"Coroa Norueguesa"},{codigo:"DKK",nome:"Coroa Dinamarquesa"},{codigo:"PLN",nome:"Zloty Polonês"},{codigo:"CZK",nome:"Coroa Tcheca"},{codigo:"HUF",nome:"Forint Húngaro"},{codigo:"RON",nome:"Leu Romeno"},{codigo:"BGN",nome:"Lev Búlgaro"},{codigo:"HRK",nome:"Kuna Croata"},{codigo:"RUB",nome:"Rublo Russo"},{codigo:"TRY",nome:"Lira Turca"},{codigo:"ILS",nome:"Shekel Israelense"},{codigo:"ZAR",nome:"Rand Sul-Africano"},{codigo:"INR",nome:"Rupia Indiana"},{codigo:"KRW",nome:"Won Sul-Coreano"},{codigo:"SGD",nome:"Dólar de Singapura"},{codigo:"HKD",nome:"Dólar de Hong Kong"},{codigo:"THB",nome:"Baht Tailandês"},{codigo:"MYR",nome:"Ringgit Malaio"},{codigo:"IDR",nome:"Rupia Indonésia"},{codigo:"PHP",nome:"Peso Filipino"},{codigo:"VND",nome:"Dong Vietnamita"},{codigo:"BDT",nome:"Taka de Bangladesh"},{codigo:"PKR",nome:"Rupia Paquistanesa"},{codigo:"LKR",nome:"Rupia do Sri Lanka"},{codigo:"NPR",nome:"Rupia Nepalesa"},{codigo:"MVR",nome:"Rufiyaa das Maldivas"},{codigo:"BTN",nome:"Ngultrum do Butão"},{codigo:"AFN",nome:"Afghani Afegão"},{codigo:"IRR",nome:"Rial Iraniano"},{codigo:"IQD",nome:"Dinar Iraquiano"},{codigo:"JOD",nome:"Dinar Jordaniano"},{codigo:"KWD",nome:"Dinar Kuwaitiano"},{codigo:"LBP",nome:"Libra Libanesa"},{codigo:"SAR",nome:"Riyal Saudita"},{codigo:"AED",nome:"Dirham dos Emirados"},{codigo:"QAR",nome:"Riyal do Catar"},{codigo:"OMR",nome:"Rial de Omã"},{codigo:"BHD",nome:"Dinar do Bahrein"},{codigo:"YER",nome:"Rial Iemenita"},{codigo:"SYP",nome:"Libra Síria"},{codigo:"EGP",nome:"Libra Egípcia"},{codigo:"LYD",nome:"Dinar Líbio"},{codigo:"TND",nome:"Dinar Tunisiano"},{codigo:"DZD",nome:"Dinar Argelino"},{codigo:"MAD",nome:"Dirham Marroquino"},{codigo:"NGN",nome:"Naira Nigeriana"},{codigo:"GHS",nome:"Cedi Ganês"},{codigo:"KES",nome:"Xelim Queniano"},{codigo:"UGX",nome:"Xelim Ugandense"},{codigo:"TZS",nome:"Xelim Tanzaniano"},{codigo:"ETB",nome:"Birr Etíope"},{codigo:"RWF",nome:"Franco Ruandês"},{codigo:"MXN",nome:"Peso Mexicano"},{codigo:"GTQ",nome:"Quetzal Guatemalteco"},{codigo:"HNL",nome:"Lempira Hondurenha"},{codigo:"NIO",nome:"Córdoba Nicaraguense"},{codigo:"CRC",nome:"Colón Costa-riquenho"},{codigo:"PAB",nome:"Balboa Panamenha"},{codigo:"COP",nome:"Peso Colombiano"},{codigo:"VES",nome:"Bolívar Venezuelano"},{codigo:"GYD",nome:"Dólar Guianense"},{codigo:"SRD",nome:"Dólar Surinamês"},{codigo:"PEN",nome:"Sol Peruano"},{codigo:"BOB",nome:"Boliviano"},{codigo:"PYG",nome:"Guarani Paraguaio"},{codigo:"UYU",nome:"Peso Uruguaio"},{codigo:"ARS",nome:"Peso Argentino"},{codigo:"CLP",nome:"Peso Chileno"},{codigo:"BRL",nome:"Real Brasileiro"}].slice(0,c.maxCurrencies),he=ce.slice(0,c.maxGateways),me=e=>({USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[e]||e);r.useEffect(()=>{},[]);const pe=async()=>{if(ne(!0),!k||!$)return Y(null),void ne(!1);if(c.maxCalculationsPerMonth&&ie>=c.maxCalculationsPerMonth)return alert(`Limite de ${c.maxCalculationsPerMonth} cálculos por mês atingido! Faça upgrade para continuar calculando.`),void ne(!1);se(!0);try{const e=parseFloat(k),t=parseFloat($),r=parseFloat(C),s=parseFloat(T)||0,a=parseFloat(E)||0,n=((e,t)=>{if(e===t)return 1;const r={BRL:5.2,EUR:.92,GBP:.8,JPY:150,CNY:7.3,CAD:1.35,AUD:1.55,CHF:.9,SEK:10.5,NOK:10.8,MXN:18.5,ARS:365,CLP:900,COP:4100,PEN:3.75,INR:83.5,KRW:1320,THB:36,SGD:1.35,HKD:7.8};return"USD"===e?r[t]||1:"USD"===t?1/(r[e]||1):1/(r[e]||1)*(r[t]||1)})(W,K),i=le.find(e=>e.id===z),o=ce.find(e=>e.id===G),l=i?.taxa||2.9,c=o?.taxa||3.4,d=e*n,u=d*t,h=d+a*n+s*n,m=u*(c/100),p=u*(l/100),g=u*(r/100),f=m+p+g,x=u-h-f,y=h+f,b=[1,10,50,100,500,1e3].map(e=>({quantidade:e,lucro:x*e}));Y({precoVenda:u,custoTotal:h,custoFornecedor:d,markup:t,taxaCambio:n,lucroLiquido:x,breakeven:y,taxas:{gateway:{percentual:c,valor:m},plataforma:{percentual:l,valor:p},marketing:{percentual:r,valor:g},extra:{percentual:0,valor:0},total:f},projecoes:b,percentuais:{custoMedio:h/u*100,marketing:r,margemContrib:x/u*100,breakeven:y/u*100}});const w=ie+1;oe(w),localStorage.setItem("calculations-used-this-month",w.toString())}catch(e){console.error("Erro no cálculo:",e),Y(null)}finally{se(!1),ne(!1)}};r.useEffect(()=>{c&&(ue.length>0&&!ue.map(e=>e.codigo).includes(W)&&J(ue[0].codigo||"USD"),ue.length>0&&!ue.map(e=>e.codigo).includes(K)&&Z(ue[0].codigo||"USD"),de.length>0&&!de.map(e=>e.id).includes(z)&&V(de[0].id||"shopify"),he.length>0&&!he.map(e=>e.id).includes(G)&&q(he[0].id||"stripe"))},[s,c,W,K,z,G]),r.useEffect(()=>{if(!d){const e=setTimeout(()=>{pe()},500);return()=>clearTimeout(e)}null!==X&&Y(null)},[k,E,C,T,$,z,G,W,K,d]);const ge=async()=>{try{console.log("🚪 Iniciando logout..."),localStorage.clear(),await x(),console.log("✅ Logout concluído, redirecionando..."),window.location.href="/welcome"}catch(e){console.error("❌ Erro no logout:",e),localStorage.clear(),window.location.href="/welcome"}};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900",children:[e.jsx("header",{className:"bg-white/20 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m,{className:"h-8 w-8 text-purple-400 mr-3"}),e.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"DropCalc"})]}),e.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[e.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:[g("calc.welcome"),", ",f?.name||"Usuário","!",!1]}),s&&e.jsxs("span",{className:"px-2 py-1 text-xs font-bold rounded-full flex items-center "+(l?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":o?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[e.jsx(P,{className:"w-3 h-3 mr-1"}),s.toUpperCase()]}),e.jsx("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano, navegando para /payment"),u("/payment")},className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors",children:s?"Alterar Plano":"Escolher Plano"}),e.jsx("button",{onClick:()=>u("/help"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",title:"Ajuda",children:e.jsx(R,{className:"w-5 h-5"})}),e.jsx("button",{onClick:()=>{window.history.pushState({},"","/settings"),u("/settings",{replace:!0})},className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:e.jsx(O,{className:"w-5 h-5"})}),e.jsx("button",{onClick:ge,className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors",children:g("nav.logout")})]}),e.jsx("button",{onClick:()=>ee(!Q),className:"md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",children:Q?e.jsx(L,{className:"w-6 h-6"}):e.jsx(D,{className:"w-6 h-6"})})]})})}),e.jsx(U,{children:Q&&e.jsx(h.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-black/30 backdrop-blur-sm border-b border-white/10",children:e.jsxs("div",{className:"px-4 py-4 space-y-2",children:[e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300 mb-2",children:[g("calc.welcome"),", ",f?.name||g("calc.user"),"!"]}),s&&e.jsxs("div",{className:"inline-flex px-2 py-1 text-xs font-bold rounded-full items-center mb-2 "+(l?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":o?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[e.jsx(P,{className:"w-3 h-3 mr-1"}),s.toUpperCase()]}),e.jsxs("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano (mobile), navegando para /payment"),u("/payment"),ee(!1)},className:"flex items-center w-full p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:[e.jsx(P,{className:"w-4 h-4 mr-2"}),s?"Alterar Plano":"Escolher Plano"]}),b&&e.jsxs("button",{onClick:()=>{u("/users"),ee(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[e.jsx(M,{className:"w-4 h-4 mr-2"}),"Ver Usuários (Admin)"]}),e.jsxs("button",{onClick:()=>{window.history.pushState({},"","/settings"),u("/settings",{replace:!0}),ee(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[e.jsx(O,{className:"w-4 h-4 mr-2"}),g("nav.settings")]}),e.jsxs("button",{onClick:ge,className:"flex items-center w-full p-2 text-red-400 hover:text-red-300 transition-colors",children:[e.jsx(M,{className:"w-4 h-4 mr-2"}),g("nav.logout")]})]})})}),e.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[e.jsx(m,{className:"w-6 h-6 mr-2 text-purple-400"}),g("calc.title"),re&&e.jsx("span",{className:"ml-3 text-sm text-yellow-400 animate-pulse",children:g("calc.loading")})]}),null!==c.maxCalculationsPerMonth&&e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"Cálculos restantes este mês:"}),e.jsxs("span",{className:"font-bold "+((c.maxCalculationsPerMonth||10)-ie<=2?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"),children:[(c.maxCalculationsPerMonth||10)-ie," de ",c.maxCalculationsPerMonth||10]})]}),(c.maxCalculationsPerMonth||10)-ie<=2&&e.jsx("p",{className:"text-xs text-orange-600 dark:text-orange-400 mt-1",children:"Poucos cálculos restantes! Considere fazer upgrade para continuar usando."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.productName"),e.jsx(Pl,{text:g("tooltip.productName"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("input",{type:"text",className:"w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500",placeholder:g("calc.productName"),value:w,onChange:e=>v(e.target.value)})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.productCost")," (",W,")",e.jsx(Pl,{text:g("tooltip.productCost"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("input",{type:"number",value:k,onChange:e=>S(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 16.73",step:"0.01"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.originCurrency"),e.jsx(Pl,{text:g("tooltip.originCurrency"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("select",{value:W,onChange:e=>J(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ue.map(t=>e.jsxs("option",{value:t.codigo,children:[t.codigo," - ",t.nome]},t.codigo))}),!l&&e.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[n?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.saleCurrency"),e.jsx(Pl,{text:g("tooltip.saleCurrency"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("select",{value:K,onChange:e=>Z(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ue.map(t=>e.jsxs("option",{value:t.codigo,children:[t.codigo," - ",t.nome]},t.codigo))}),!l&&e.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[n?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.additionalCosts")," (",W,")",e.jsx(Pl,{text:g("tooltip.additionalCosts"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("input",{type:"number",value:E,onChange:e=>I(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 5.00",step:"0.01"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.profitMargin"),e.jsx(Pl,{text:g("tooltip.profitMargin"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("input",{type:"number",value:$,onChange:e=>H(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 4.12",step:"0.01",min:"1"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Marketing (%)",e.jsx(Pl,{text:g("tooltip.marketing"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("input",{type:"number",value:C,onChange:e=>_(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 25",step:"0.1",min:"0",max:"100"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Custo Extra (",W,")",e.jsx(Pl,{text:g("tooltip.extraCost"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("input",{type:"number",value:T,onChange:e=>A(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 2.00",step:"0.01"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.platform"),e.jsx(Pl,{text:g("tooltip.platform"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("select",{value:z,onChange:e=>V(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:de.map(t=>e.jsxs("option",{value:t.id,children:[t.nome," (",t.taxa,"%)"]},t.id))}),!l&&e.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[n?"Plano Básico: Apenas Shopify e Nuvem Shop":"Plano Gold: Plataformas limitadas"," - Upgrade para Premium para todas as plataformas"]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[g("calc.paymentGateway"),e.jsx(Pl,{text:g("tooltip.gateway"),children:e.jsx(F,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),e.jsx("select",{value:G,onChange:e=>q(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:he.map(t=>e.jsxs("option",{value:t.id,children:[t.nome," (",t.taxa,"%)"]},t.id))}),!l&&e.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[n?"Plano Básico: Apenas Stripe e PayPal":"Plano Gold: 4 gateways principais"," - Upgrade para Premium para todos os gateways"]})]})]}),d&&e.jsx("div",{className:"mt-6",children:e.jsxs("button",{onClick:pe,disabled:ae||!k||!$,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center text-lg",children:[e.jsx(m,{className:"h-5 w-5 mr-2"}),ae?"Calculando...":"Calcular Preço"]})}),e.jsx("div",{className:"mt-4 p-4 rounded-lg "+(d?"bg-orange-50 dark:bg-orange-900/20":"bg-green-50 dark:bg-green-900/20"),children:e.jsxs("p",{className:"text-sm flex items-center "+(d?"text-orange-600 dark:text-orange-400":"text-green-600 dark:text-green-400"),children:[e.jsx(p,{className:"h-4 w-4 mr-2"}),d?'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado':"Cálculo automático ativado - O preço é atualizado em tempo real"]})})]})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[e.jsx(p,{className:"w-6 h-6 mr-2 text-green-400"}),g("calc.calculationResult")]}),X?e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-green-100 text-sm",children:g("calc.suggestedPrice")}),e.jsxs("p",{className:"text-3xl font-bold text-white",children:[me(K)," ",X.precoVenda.toFixed(2)]}),e.jsxs("p",{className:"text-green-200 text-xs mt-1",children:[g("calc.exchangeRate"),": 1 ",W," = ",X.taxaCambio.toFixed(4)," ",K]})]})}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3",children:e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 text-sm",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Plataforma:"}),e.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:le.find(e=>e.id===z)?.nome||z})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Gateway:"}),e.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:ce.find(e=>e.id===G)?.nome||G})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[e.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:g("calc.pricing")}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between items-center bg-green-600 text-white px-2 py-1 rounded",children:[e.jsxs("span",{className:"flex items-center",children:[g("calc.sellingPrice"),":",e.jsx(Pl,{text:g("tooltip.resultSellingPrice"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{children:[me(K)," ",X.precoVenda.toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between items-center bg-red-500 text-white px-2 py-1 rounded",children:[e.jsxs("span",{className:"flex items-center",children:[g("calc.supplierCost"),":",e.jsx(Pl,{text:g("tooltip.resultSupplierCost"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{children:[me(K)," ",X.custoFornecedor.toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between items-center bg-gray-500 text-white px-2 py-1 rounded",children:[e.jsxs("span",{className:"flex items-center",children:[g("calc.markupLabel"),":",e.jsx(Pl,{text:g("tooltip.resultMarkup"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsx("span",{children:X.markup.toFixed(8)})]})]}),e.jsx("h4",{className:"text-white font-bold text-center bg-blue-600 text-sm py-2 mt-4 mb-2 rounded",children:g("calc.taxes")}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-blue-400",children:ce.find(e=>e.id===G)?.nome||G}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[X.taxas.gateway.percentual.toFixed(2),"%"]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.taxas.gateway.valor.toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-blue-400",children:le.find(e=>e.id===z)?.nome||z}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[X.taxas.plataforma.percentual.toFixed(2),"%"]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.taxas.plataforma.valor.toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-blue-400",children:g("calc.marketing")}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[X.taxas.marketing.percentual,"%"]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.taxas.marketing.valor.toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-blue-400",children:g("calc.extra")}),e.jsx("span",{className:"text-gray-900 dark:text-white",children:"0%"}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.taxas.extra.valor.toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-center bg-green-600 text-white px-2 py-1 rounded font-bold",children:[me(K)," ",X.taxas.total.toFixed(2)]})]})]}),e.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[e.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:g("calc.importantValues")}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[g("calc.saleValue"),e.jsx(Pl,{text:g("tooltip.resultSaleValue"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.precoVenda.toFixed(2)]}),e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"100,00%"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[g("calc.averageCost"),e.jsx(Pl,{text:g("tooltip.resultAverageCost"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.custoTotal.toFixed(2)]}),e.jsxs("span",{className:"text-red-400",children:[X.percentuais.custoMedio.toFixed(2),"%"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[g("calc.marketing"),e.jsx(Pl,{text:g("tooltip.resultMarketing"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.taxas.marketing.valor.toFixed(2)]}),e.jsxs("span",{className:"text-yellow-400",children:[X.percentuais.marketing.toFixed(2),"%"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[g("calc.contributionMargin"),e.jsx(Pl,{text:g("tooltip.resultContributionMargin"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.lucroLiquido.toFixed(2)]}),e.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[X.percentuais.margemContrib.toFixed(2),"%"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[g("calc.breakeven"),e.jsx(Pl,{text:g("tooltip.resultBreakeven"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{className:"text-gray-900 dark:text-white",children:[me(K)," ",X.breakeven.toFixed(2)]}),e.jsxs("span",{className:"text-orange-400",children:[X.percentuais.breakeven.toFixed(2),"%"]})]})]}),e.jsx("h4",{className:"text-white font-bold text-center bg-green-600 text-sm py-2 mt-4 mb-2 rounded",children:g("calc.sales")}),e.jsxs("div",{className:"flex justify-between text-sm font-bold text-green-600 dark:text-green-400 mb-2",children:[e.jsxs("span",{className:"flex items-center",children:[g("calc.units"),":",e.jsx(Pl,{text:g("tooltip.resultUnits"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]}),e.jsxs("span",{className:"flex items-center",children:[g("calc.profitLabel"),e.jsx(Pl,{text:g("tooltip.resultProfit"),children:e.jsx(F,{className:"w-3 h-3 ml-1"})})]})]}),e.jsx("div",{className:"space-y-1 text-sm",children:X.projecoes.map((t,r)=>e.jsxs("div",{className:"flex justify-between items-center bg-green-100/10 px-2 py-1 rounded",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:[g("calc.units"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-white font-bold",children:t.quantidade}),e.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[me(K)," ",t.lucro.toFixed(2)]})]},r))})]})]}),c?.hasHistory&&e.jsx("div",{className:"text-center",children:e.jsxs("button",{onClick:()=>{if(!X)return;if(!c?.hasHistory)return void alert("Histórico disponível apenas no plano Premium. Faça upgrade para salvar seus cálculos!");const e=[{id:Date.now().toString(),nomeProduto:w||"Produto sem nome",precoVenda:X.precoVenda,moedaDestino:K,plataforma:z,gateway:G,dataCalculo:(new Date).toLocaleString("pt-BR"),detalhes:X},...N].slice(0,50);j(e),localStorage.setItem("calculadora-historico",JSON.stringify(e)),alert(g("calc.calculationSaved"))},className:"bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),g("calc.saveCalculation")]})}),!c?.hasHistory&&e.jsxs("div",{className:"text-center bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm mb-2",children:"💾 Histórico de cálculos disponível apenas no plano Premium"}),e.jsx("button",{onClick:()=>u("/payment"),className:"bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm",children:"Fazer Upgrade Premium"})]})]}):re?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"}),e.jsx("p",{className:"text-purple-400 font-medium",children:g("calc.loading")})]}):k&&$?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(B,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:g("calc.enterValuesMessage")})]}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx(B,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:g("calc.fillFieldsMessage")})]})]})]})})]})},Ol=()=>e.jsx(Rl,{}),Ll=()=>{const t=i(),[s,a]=r.useState(null),n=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:e.jsx(m,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:e.jsx(V,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:e.jsx(p,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:e.jsx(P,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Mercado Pago"',"4. Complete o pagamento através do Mercado Pago","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsxs(h.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[e.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:e.jsx(y,{className:"w-6 h-6 text-gray-600"})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(R,{className:"w-8 h-8 text-blue-600"}),e.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),e.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),n.map((t,r)=>e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*r},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[e.jsxs("button",{onClick:()=>{return e=t.id,void a(s===e?null:e);var e},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:t.icon}),e.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:t.title})]}),e.jsx(h.div,{animate:{rotate:s===t.id?90:0},transition:{duration:.2},children:e.jsx($,{className:"w-5 h-5 text-gray-500"})})]}),e.jsx(U,{children:s===t.id&&e.jsx(h.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:e.jsxs("div",{className:"p-6 pt-4",children:[e.jsx("div",{className:"space-y-3 mb-4",children:t.content.map((t,r)=>e.jsx(h.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*r},className:"text-gray-700",children:t},r))}),t.videoUrl&&e.jsxs(h.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[e.jsx(H,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},t.id))]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((t,r)=>e.jsxs(h.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*r},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:t.title}),e.jsx("p",{className:"text-gray-600 text-sm",children:t.content})]},r))})]}),e.jsxs(h.form,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",onSubmit:async e=>{e.preventDefault();const t=e.target,r=new FormData(t),s=r.get("nome"),a=r.get("email"),n=r.get("mensagem");try{await fetch("https://formspree.io/f/xwkzqgqg",{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify({nome:s,email:a,mensagem:n})}),alert("Mensagem enviada com sucesso!"),t.reset()}catch{alert("Erro ao enviar mensagem. Tente novamente.")}},children:[e.jsx(z,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),e.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[e.jsx("input",{name:"nome",required:!0,placeholder:"Seu nome",className:"p-3 rounded-xl text-gray-800"}),e.jsx("input",{name:"email",required:!0,type:"email",placeholder:"Seu e-mail",className:"p-3 rounded-xl text-gray-800"}),e.jsx("input",{name:"mensagem",required:!0,placeholder:"Sua mensagem",className:"p-3 rounded-xl text-gray-800"})]}),e.jsx(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"submit",className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Enviar Mensagem"})]})]})]})})};const Dl=()=>{const{t:s}=t(),[a,n]=r.useState([]);r.useEffect(()=>{try{const e=localStorage.getItem("calculadora-historico");e&&n(JSON.parse(e))}catch{n([])}},[]);return 0===a.length?e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx(Z,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),e.jsx("p",{children:s("calc.noHistory")})]}):e.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:a.map(t=>{return e.jsx(h.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-white/80 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:t.nomeProduto}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Preço:"})," ",(r=t.moedaDestino,{USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[r]||r)," ",t.precoVenda.toFixed(2)]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Plataforma:"})," ",t.plataforma," | ",e.jsx("span",{className:"font-medium",children:"Gateway:"})," ",t.gateway]}),e.jsxs("p",{className:"text-xs text-gray-500",children:[s("calc.savedAt"),": ",t.dataCalculo]})]})]}),e.jsx("button",{onClick:()=>(e=>{const t=a.filter(t=>t.id!==e);n(t),localStorage.setItem("calculadora-historico",JSON.stringify(t)),Ee.success("Cálculo excluído")})(t.id),className:"text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors",title:s("calc.deleteCalculation"),children:e.jsx(X,{className:"w-4 h-4"})})]})},t.id);var r})})},Ul=()=>{const s=i(),{theme:a,setTheme:n}=function(){const[e,t]=r.useState(()=>"undefined"!=typeof window&&localStorage.getItem("theme")||"light");return r.useEffect(()=>{document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,setTheme:t,isDark:"dark"===e,isLight:"light"===e}}(),{language:o,setLanguage:l,t:c}=t(),[d,u]=r.useState(null),[m,p]=r.useState("basic"),[g,f]=r.useState({language:"pt",notifications:!0,isPremium:!1});r.useEffect(()=>{const e=localStorage.getItem("user");u(e?JSON.parse(e):null);const t=localStorage.getItem("userPlan");if(t)try{const e=JSON.parse(t);e&&"object"==typeof e&&e.type&&p(e.type)}catch{p("basic")}else p("basic");const r=o,s="true"===localStorage.getItem("notifications");f({language:r,notifications:s,isPremium:"premium"===m})},[o]);const x=e=>{n(e),Ee.success(`Tema ${"dark"===e?"escuro":"claro"} ativado!`)};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900",children:e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsxs(h.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[e.jsx("button",{onClick:()=>s(-1),className:"p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",children:e.jsx(y,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(O,{className:"w-8 h-8 text-blue-600 dark:text-blue-400"}),e.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:c("settings.title")})]})]}),e.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center",children:e.jsx(M,{className:"w-6 h-6 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:d?.name||"Usuário"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:d?.email})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:"premium"===m?e.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium",children:[e.jsx(P,{className:"w-4 h-4"}),"Premium Ativo"]}):"gold"===m?e.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium",children:[e.jsx(P,{className:"w-4 h-4"}),"Gold Ativo"]}):e.jsxs("div",{className:"flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium",children:[e.jsx(M,{className:"w-4 h-4"}),"Plano Básico"]})})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2",children:["dark"===a?e.jsx(G,{className:"w-5 h-5"}):e.jsx(q,{className:"w-5 h-5"}),c("settings.theme")]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs(h.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>x("light"),className:"p-4 rounded-xl border-2 transition-all "+("light"===a?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[e.jsx(q,{className:"w-6 h-6 mx-auto mb-2 text-yellow-500"}),e.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:c("settings.light")}),"light"===a&&e.jsx(I,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]}),e.jsxs(h.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>x("dark"),className:"p-4 rounded-xl border-2 transition-all "+("dark"===a?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[e.jsx(G,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),e.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:c("settings.dark")}),"dark"===a&&e.jsx(I,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]})]})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[e.jsx(W,{className:"w-5 h-5"}),c("settings.language")]}),e.jsx("div",{className:"space-y-2",children:[{code:"pt",name:"Português",flag:"🇧🇷"},{code:"en",name:"English",flag:"🇺🇸"},{code:"es",name:"Español",flag:"🇪🇸"}].map(t=>e.jsxs(h.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:()=>{return e=t.code,f(t=>({...t,language:e})),l(e),void Ee.success(c("msg.languageChanged"));var e},className:"w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 "+(g.language===t.code?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"),children:[e.jsx("span",{className:"text-2xl",children:t.flag}),e.jsx("span",{className:"font-medium text-gray-800",children:t.name}),g.language===t.code&&e.jsx(I,{className:"w-4 h-4 text-blue-500 ml-auto"})]},t.code))})]}),e.jsx(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(J,{className:"w-5 h-5 text-gray-600"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:c("settings.notifications")}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Receber alertas e atualizações"})]})]}),e.jsx(h.button,{whileTap:{scale:.95},onClick:()=>{const e=!g.notifications;f(t=>({...t,notifications:e})),localStorage.setItem("notifications",e.toString()),Ee.success(`Notificações ${e?"ativadas":"desativadas"}!`)},className:"relative inline-flex h-6 w-11 items-center rounded-full transition-colors "+(g.notifications?"bg-blue-600":"bg-gray-300"),children:e.jsx(h.span,{animate:{x:g.notifications?20:4},transition:{type:"spring",stiffness:500,damping:30},className:"inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"})})]})}),!g.isPremium&&e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(P,{className:"w-6 h-6"}),e.jsx("h3",{className:"text-lg font-semibold",children:"Upgrade para Premium"})]}),e.jsx("p",{className:"mb-4 opacity-90",children:"Desbloqueie todos os recursos da calculadora e tenha acesso completo às funcionalidades avançadas."}),e.jsx(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>s("/payment"),className:"bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Ativar Premium"})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[e.jsx(O,{className:"w-5 h-5"}),c("calc.calculationHistory")]}),e.jsx(Dl,{})]}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[e.jsx(T,{className:"w-5 h-5"}),"Segurança"]}),e.jsxs(h.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:async()=>{try{localStorage.removeItem("user"),localStorage.removeItem("authToken"),localStorage.removeItem("premiumActive"),localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),Ee.success("Logout realizado com sucesso!"),s("/")}catch(e){Ee.error("Erro ao fazer logout")}},className:"w-full p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-2 font-medium",children:[e.jsx(K,{className:"w-5 h-5"}),c("settings.logout")]})]})]})]})})},Ml=()=>{const{loading:t,user:r}=qn(),s=window.location?.pathname+window.location?.search;return o.useEffect(()=>{console.log("AppWithAuth: current location =",s)},[s]),console.log("=== AppWithAuth carregando ==="),console.log("Loading:",t,"User:",r),console.log("AppWithAuth: user state changed. current user =",r),t?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):e.jsx(c,{children:e.jsxs("div",{className:"App",children:[e.jsxs(d,{children:[e.jsx(u,{path:"/welcome",element:e.jsx(Jn,{})}),e.jsx(u,{path:"/login",element:e.jsx(Il,{})}),e.jsx(u,{path:"/login-simple",element:e.jsx(Cl,{})}),e.jsx(u,{path:"/signup",element:e.jsx(Il,{})}),e.jsx(u,{path:"/help",element:e.jsx(Ll,{})}),e.jsx(u,{path:"/forgot-password",element:e.jsx(Sl,{})}),e.jsx(u,{path:"/reset-password",element:e.jsx(El,{})}),e.jsx(u,{path:"/payment",element:e.jsx(Wn,{children:e.jsx(Tl,{})})}),e.jsx(u,{path:"/dashboard",element:e.jsx(Wn,{children:e.jsx(Ol,{})})}),e.jsx(u,{path:"/settings",element:e.jsx(Wn,{children:e.jsx(Ul,{})})}),e.jsx(u,{path:"/",element:r?e.jsx(a,{to:"/dashboard",replace:!0}):e.jsx(a,{to:"/welcome",replace:!0})}),e.jsx(u,{path:"*",element:e.jsx(a,{to:"/welcome",replace:!0})})]}),e.jsx(Ke,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})};export{Ml as default};
