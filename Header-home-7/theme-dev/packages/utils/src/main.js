"use strict";var Q=Object.defineProperty;var z=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var c=(e,t,n)=>(z(e,typeof t!="symbol"?t+"":t,n),n);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const J={get:(e,t)=>e.getAttribute(t)==="false"?!1:e.hasAttribute(t),set:(e,t,n)=>{n?e.setAttribute(t,""):e.removeAttribute(t)}};function $(e,t){throw new Error(`${e}

${t?`Example:
${t}`:""}`)}function K(e,t,n){n||$(`${e} must have a \`${t}\` attribute.`,`
<${e} ${t}="..."></${e}>
    `)}function Z(e,t,n){return Math.min(Math.max(e,t),n)}function w(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function N(e){return e===null||typeof e!="function"&&typeof e!="object"}w.primitive=N;function v(e){if(w(e)==="array")return e.map(t=>v(t));if(w(e)==="object"){const t={};for(const n in e)t[n]=v(e[n]);return t}else return e}function b(e,t){for(let n=0;n<e.length;n++)t(e[n],n,e)}const I=e=>Object.keys(e);function ee(e,t){b(I(e),n=>{customElements.get(n)||customElements.define(n,e[n],t)})}function F(e,t){const n=[];for(let s=0;s<e.length;s++)t(e[s],s,e)&&n.push(e[s]);return n}class D{constructor(){c(this,"id");c(this,"events");this.id=0,this.events={}}on(t,n){return this.id++,this.events={...this.events,[t]:[...this.events[t]||[],{listener:n,id:this.id}]},this.id}off(t){for(const n in this.events)this.events={...this.events,[n]:F(this.events[n],s=>s.id!==t)}}emit(t,n){this.events[t]&&b(this.events[t],({listener:s})=>{s(n)})}}function te(){const e=new D;let t=-1,n=-1,s=-1,i=0,r=-1,o=-1;function l({to:a,from:h,duration:u=1e3,friction:d=1,reverseEasing:f=!1,easing:m,onStart:k,onUpdate:p,onEnd:L}){let P=null;i=h,k==null||k(i),e.emit("start",i),cancelAnimationFrame(o);function X(Y){P||(P=Y);const G=Y-P,E=Math.min(G/u,1);i=h+(a-h)*E*d,typeof m=="function"&&(f?i=h+(a-h)*(1-m(1-E)):i=h+(a-h)*m(E)),e.emit("update",i),p==null||p(i),E<1&&(o=requestAnimationFrame(X))}return o=requestAnimationFrame(X),r=window.setTimeout(()=>{cancelAnimationFrame(o),clearTimeout(r),i=a,p==null||p(i),L==null||L(i),e.emit("update",i),e.emit("end",i)},u),()=>{clearTimeout(r),cancelAnimationFrame(o)}}return l.onStart=a=>(t=e.on("start",a),()=>e.off(t)),l.onUpdate=a=>(n=e.on("update",a),()=>e.off(n)),l.onEnd=a=>(s=e.on("end",a),()=>e.off(s)),l.off=()=>{e.off(t),e.off(n),e.off(s),cancelAnimationFrame(o),clearTimeout(r)},l.getValue=()=>i,l}function ne(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return t>>>0}function O(e){return e.replace(/\s+/g," ").trim()}function se(e="global"){return(t,...n)=>{let s=O(t.reduce((r,o,l)=>n[l]==null?r+o:r+o+n[l],""));const i={};return e==="scope"&&(s=O(s.replace(/(:global\(|)(?:[\.]{1})([a-zA-Z_]+[\w-_\\\[\]\+\=\{\}\?\*\!\(\)]*)(?:[\s\.\,\{\>#\:]{0})/gim,r=>{if(r.includes(":global(")){const a=r.replace(/:global\(\s*\.|\)$/g,"");return i[a]=a,`.${a}`}const o=r.trim().replace(/^\./g,""),l=`xo-${o}-${ne(s)}`;return i[o]=l,`.${l}`}))),{classes:i,cssText:s}}}function ie(e,t){var s;const n=t.querySelector(".xo-styles");if(n)n.textContent&&!((s=n.textContent)!=null&&s.includes(e))&&(n.textContent+=e);else{const i=document.createElement("style");i.classList.add("xo-styles"),i.textContent=e,t.appendChild(i)}}function re(e,t=300){let n=-1;return function(...i){const r=this;clearTimeout(n),n=window.setTimeout(()=>{e.apply(r,i)},t)}}function oe(e=0){return new Promise(t=>{const n=window.setTimeout(()=>{t(()=>window.clearTimeout(n)),clearTimeout(n)},e)})}function B(e){/comp|inter/.test(document.readyState)?e():"addEventListener"in document?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&e()})}const A={linear:e=>e,ease:e=>.5*(1-Math.cos(Math.PI*e)),easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e,easeOutBounce:e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,easeInBounce:e=>1-A.easeOutBounce(1-e),easeOutBack:e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2,easeInBack:e=>2.70158*e*e*e-1.70158*e*e,easeInOut:e=>e<.5?A.easeInBack(e*2)/2:A.easeOutBack(e*2-1)/2+.5,easeInElastic:e=>{const t=2*Math.PI/3;return e===0?0:e===1?1:-(2**(10*e-10))*Math.sin((e*10-10.75)*t)},easeOutElastic:e=>{const t=2*Math.PI/3;return e===0?0:e===1?1:2**(-10*e)*Math.sin((e*10-.75)*t)+1},easeInExpo:e=>e===0?0:2**(10*e-10),easeOutExpo:e=>e===1?1:1-2**(-10*e),spring:e=>1-Math.cos(e*4.5*Math.PI)*Math.exp(-e*6),decay:e=>1-Math.exp(-e*6)};function x(e,t){if(w.primitive(e)||w.primitive(e)||e==null||t==null)return e===t;const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(const i of n){const r=e[i],o=t[i];if(typeof r=="object"&&typeof o=="object"){if(!x(r,o))return!1}else if(r!==o)return!1}return!0}function ce(e,t){for(let n=0;n<e.length;n++)if(t(e[n],n,e))return n;return-1}function y(e,t){const n=[];for(let s=0;s<e.length;s++)n.push(t(e[s],s,e));return n}function W(e,t,n){let s=n;for(let i=0;i<e.length;i++)s=t(s,e[i],i,e);return s}class le{constructor(){c(this,"frameId");c(this,"keepAliveFrameId");c(this,"lastTimestamp");c(this,"frames");c(this,"keepAliveFrames");c(this,"defaultTimestep");c(this,"handleFrameLoop",t=>{if(this.lastTimestamp){const n=t-this.lastTimestamp;b(this.keepAliveFrames,s=>s.call(this,{delta:n,timestamp:t}))}this.lastTimestamp=t,this.keepAliveFrameId&&cancelAnimationFrame(this.keepAliveFrameId),this.keepAliveFrameId=requestAnimationFrame(this.handleFrameLoop)});c(this,"handleFrame",t=>{b(this.frames,n=>n.call(this,{delta:this.defaultTimestep,timestamp:t}))});c(this,"getFrames",()=>this.frames);c(this,"add",(t,n=!1)=>(this.cancelFrame(),this.frames.includes(t)||this.frames.push(t),n&&!this.keepAliveFrames.includes(t)&&this.keepAliveFrames.push(t),this.start(),this));c(this,"start",()=>{this.frameId=requestAnimationFrame(this.handleFrame),this.keepAliveFrameId=requestAnimationFrame(this.handleFrameLoop)});c(this,"cancelFrame",()=>{this.frameId!=null&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.keepAliveFrameId!=null&&(cancelAnimationFrame(this.keepAliveFrameId),this.keepAliveFrameId=null)});c(this,"stopFrame",(t,n)=>{const s=t.indexOf(n);s!==-1&&t.splice(s,1),t.length===0&&(this.cancelFrame(),this.lastTimestamp=null)});c(this,"remove",t=>(this.stopFrame(this.frames,t),this.stopFrame(this.keepAliveFrames,t),this));c(this,"clear",()=>(this.frames=[],this.keepAliveFrames=[],this.cancelFrame(),this.lastTimestamp=null,this));this.frameId=null,this.keepAliveFrameId=null,this.lastTimestamp=null,this.frames=[],this.keepAliveFrames=[],this.defaultTimestep=1/60*1e3}}const ae=new le;function he(e){return e.replace(/([_]\w)/g,t=>t[1].toUpperCase())}function ue(e){return e.replace(/(\-\w|\_\w)/g,t=>t[1].toUpperCase()).replace(/^(\w)/,t=>t[0].toUpperCase())}function q(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function de(e){return e.replace(/^(\w)/,t=>t[0].toUpperCase())}function fe(e){return q(e).replace(/^_/g,"")}function me(e){return e.replace(/^(\w)/,t=>t[0].toLowerCase())}function pe(e){return e.replace(/([-]\w)/g,t=>t[1].toUpperCase())}function ge(e){return e.replace(/([-]\w)/g,t=>t[1].toUpperCase()).replace(/^(\w)/,t=>t[0].toUpperCase())}function j(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function ve(e){return j(e).replace(/^-/g,"")}const H={snakeToCamel:he,snakeToPascal:ue,camelToSnake:q,camelToPascal:de,pascalToSnake:fe,pascalToCamel:me,kebabToCamel:pe,kebabToPascal:ge,camelToKebab:j,pascalToKebab:ve};function C(e){const t=e.trim();if(/^{|\[/g.test(t))try{const s=new Function(`return ${t}`)();return JSON.parse(JSON.stringify(s))}catch{return/^\[/g.test(t)?[]:{}}else return{}}function we(e,t){switch(t){case"string":return e;case"number":return Number(e);case"boolean":return e==="true"||e==="";case"object":return C(e);case"array":return C(e);default:return e}}function ye(e,{pick:t,types:n,camelCase:s=!0,propTransformer:i}={}){let r={};if(e==null)return r;const o=Array.from(e.attributes);t==null&&(t=y(o,l=>l.name));for(const l of o){let a=s?H.kebabToCamel(l.name):l.name;const h=n==null?void 0:n[a];l.value!=null&&(t==null?void 0:t.includes(a))&&(typeof i=="function"&&(a=i(a)),!!n&&h!=null?r={...r,[a]:we(l.value,h)}:r={...r,[a]:l.value})}return r}function be(e,{width:t,height:n}={}){const s=e.replace(/(\?|&)width=\d*/g,""),i=s.includes("?")?"&":"?",r=t?`${i}width=${t}`:"",o=n?`${i}height=${n}`:"";return`${s}${r}${o}`}function Ee({inputRange:e,outputRange:t,value:n,easing:s=o=>o,reverseEasing:i=!1,extrapolate:r="extend"}){const o=y(e,(f,m)=>({input:e[m],output:t[m]})).sort((f,m)=>f.input-m.input),l=y(o,({input:f})=>f),a=y(o,({output:f})=>f);if(n<=l[0])return a[0];if(n>=l[l.length-1])return a[a.length-1];let h=0;for(const f of l)f<n&&h++;const u=h-1;let d=(n-l[u])/(l[h]-l[u]);return typeof s=="function"&&(i?d=1-s(1-d):d=s(d)),r==="clamp"&&(d=Math.max(Math.min(d,1),0)),a[u]*(1-d)+a[h]*d}const g={android:!!navigator.userAgent.match(/Android/i),blackBerry:!!navigator.userAgent.match(/BlackBerry/i),ipad:!!navigator.userAgent.match(/iPad/i),iOS:!!navigator.userAgent.match(/iPhone|iPad|iPod/i),opera:!!navigator.userAgent.match(/Opera Mini/i),windows:!!navigator.userAgent.match(/Windows Phone/i),amazonePhone:!!navigator.userAgent.match(/(?:SD4930UR|\\bSilk(?:.+)Mobile\\b)/i),amazoneTablet:!!navigator.userAgent.match(/Silk/i),any:!!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|Windows Phone|(?:SD4930UR|\bSilk(?:.+)Mobile\b)|Silk/i)};B(()=>{const e=document.documentElement;g.any?e.classList.add("is-mobile"):e.classList.add("is-desktop")});const Se=e=>Object.values(e);function Ae(e){return e.nodeType===9&&e.defaultView}function R(e){const t=e==null?void 0:e.ownerDocument,n=t.documentElement,s=Ae(t);let i={top:0,left:0};return t?(typeof e.getBoundingClientRect<"u"&&(i=e.getBoundingClientRect()),{top:i.top+s.scrollY-n.clientTop,left:i.left+s.scrollX-n.clientLeft}):{top:0,left:0}}class V{constructor(t){c(this,"dx");c(this,"dy");c(this,"vx",0);c(this,"vy",0);c(this,"isStart",!1);c(this,"isMove",!1);c(this,"startX",0);c(this,"startY",0);c(this,"options");c(this,"frameId",-1);c(this,"handleMouseDown",t=>{const{onStart:n}=this.options;t.type==="touchstart"&&t.touches.length>1||(g.any||t.preventDefault(),this.isStart=!0,t.type==="touchstart"?(this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY):(this.startX=t.clientX,this.startY=t.clientY),n==null||n(t),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("touchmove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleMouseUp))});c(this,"handleMouseMove",t=>{this.frameId=requestAnimationFrame(()=>{const{onMove:n}=this.options;if(t.type==="touchmove"&&t.touches.length>1||(g.any||t.preventDefault(),!this.isStart))return;let s,i;t.type==="touchmove"?(s=t.touches[0].clientX,i=t.touches[0].clientY):(s=t.clientX,i=t.clientY);const r=s-this.startX,o=i-this.startY;this.startX=s,this.startY=i,this.dx+=r,this.dy+=o,this.vx=r,this.vy=o,this.isMove=!0,n==null||n({dx:this.dx,dy:this.dy,vx:this.vx,vy:this.vy},t)})});c(this,"handleEnd",(t,n)=>{const{onEnd:s}=this.options;this.isStart=!1,this.isMove&&(this.isMove=!1,n&&(this.dx=n.dx,this.dy=n.dy,this.vx=n.vx,this.vy=n.vy),s==null||s({dx:this.dx,dy:this.dy,vx:this.vx,vy:this.vy},t),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("touchmove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleMouseUp),cancelAnimationFrame(this.frameId))});c(this,"handleMouseUp",t=>{g.any||t.preventDefault(),this.handleEnd(t)});c(this,"setValue",({dx:t,dy:n})=>{t!=null&&(this.dx=t),n!=null&&(this.dy=n)});c(this,"destroy",()=>{this.options.element.removeEventListener("mousedown",this.handleMouseDown),this.options.element.removeEventListener("touchstart",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("touchmove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleMouseUp),cancelAnimationFrame(this.frameId)});this.options=t,this.dx=t.dx||0,this.dy=t.dy||0,t.element.addEventListener("mousedown",this.handleMouseDown),g.any&&t.element.addEventListener("touchstart",this.handleMouseDown)}}function _e(e){return new V(e)}class Ie{constructor(t){c(this,"element");c(this,"onStart");c(this,"onPinch");c(this,"onEnd");c(this,"startScale",1);c(this,"currentScale",1);c(this,"startX",0);c(this,"startY",0);c(this,"currentX",0);c(this,"currentY",0);c(this,"handleStart",t=>{if(t.preventDefault(),t instanceof TouchEvent&&t.touches.length===2){this.startScale=this.currentScale;const n=t.touches[0],s=t.touches[1];this.startX=(n.pageX+s.pageX)/2,this.startY=(n.pageY+s.pageY)/2,this.onStart&&this.onStart(),this.element.addEventListener("touchmove",this.handlePinch),this.element.addEventListener("touchend",this.handleEnd)}else t instanceof MouseEvent&&t.button===0&&(this.startX=t.clientX,this.startY=t.clientY,this.onStart&&this.onStart(),this.element.addEventListener("mousemove",this.handlePan),this.element.addEventListener("mouseup",this.handleEnd))});c(this,"handlePinch",t=>{t.preventDefault();const n=t.touches[0],s=t.touches[1],i=(n.pageX+s.pageX)/2,r=(n.pageY+s.pageY)/2,o=i-this.startX,l=r-this.startY,h=Math.sqrt(o*o+l*l)/this.startScale;this.currentX=i,this.currentY=r,this.currentScale=h;const u={scale:this.currentScale,centerX:this.currentX,centerY:this.currentY};this.onPinch&&this.onPinch(u,t)});c(this,"handlePan",t=>{t.preventDefault();const n=t.clientX-this.startX,s=t.clientY-this.startY;this.currentX+=n,this.currentY+=s;const i={scale:this.currentScale,centerX:this.currentX,centerY:this.currentY};this.onPinch&&this.onPinch(i,t),this.startX=t.clientX,this.startY=t.clientY});c(this,"handleEnd",t=>{t instanceof TouchEvent?(this.element.removeEventListener("touchmove",this.handlePinch),this.element.removeEventListener("touchend",this.handleEnd)):t instanceof MouseEvent&&(this.element.removeEventListener("mousemove",this.handlePan),this.element.removeEventListener("mouseup",this.handleEnd));const n={scale:this.currentScale,centerX:this.currentX,centerY:this.currentY};this.onEnd&&this.onEnd(n,t)});c(this,"destroy",()=>{this.element.removeEventListener("mousedown",this.handleStart),this.element.removeEventListener("touchstart",this.handleStart),this.element.removeEventListener("touchmove",this.handlePinch),this.element.removeEventListener("touchend",this.handleEnd),this.element.removeEventListener("mousemove",this.handlePan),this.element.removeEventListener("mouseup",this.handleEnd)});this.element=t.element,this.onStart=t.onStart,this.onPinch=t.onPinch,this.onEnd=t.onEnd,this.element.addEventListener("mousedown",this.handleStart),this.element.addEventListener("touchstart",this.handleStart)}}function Me(e){return new Ie(e)}class U{constructor(t,n){c(this,"target");c(this,"options");c(this,"top");c(this,"left");c(this,"handlePlacement",()=>{const{element:t,placement:n,offset:s}=this.options,{offsetWidth:i,offsetHeight:r}=this.target,{top:o,left:l}=R(this.target),{offsetWidth:a,offsetHeight:h}=t;switch(n){case"top-left":this.top=o-h-s,this.left=l;break;case"top-center":this.top=o-h-s,this.left=l+i/2-a/2;break;case"top-right":this.top=o-h-s,this.left=l+i-a;break;case"bottom-left":this.top=o+r+s,this.left=l;break;case"bottom-center":this.top=o+r+s,this.left=l+i/2-a/2;break;case"bottom-right":this.top=o+r+s,this.left=l+i-a;break;case"left-top":this.top=o,this.left=l-a-s;break;case"left-center":this.top=o+r/2-h/2,this.left=l-a-s;break;case"left-bottom":this.top=o+r-h,this.left=l-a-s;break;case"right-top":this.top=o,this.left=l+i+s;break;case"right-center":this.top=o+r/2-h/2,this.left=l+i+s;break;case"right-bottom":this.top=o+r-h,this.left=l+i+s;break}});c(this,"checkBoundary",()=>{const{element:t}=this.options,{offsetWidth:n,offsetHeight:s}=t,{clientWidth:i,clientHeight:r}=document.documentElement;this.top<window.scrollY?this.top=window.scrollY:this.top+s>r+window.scrollY&&(this.top=r+window.scrollY-s),this.left<0?this.left=window.scrollX:this.left+n>i+window.scrollX&&(this.left=i+window.scrollX-n)});c(this,"init",()=>{const{element:t}=this.options,{width:n,height:s}=t.getBoundingClientRect();return this.handlePlacement(),this.checkBoundary(),{top:this.top,left:this.left,width:n,height:s}});this.target=t,this.options=n,this.top=0,this.left=0}}function ke(e,{element:t,placement:n="bottom-center",offset:s=0}){return new U(e,{element:t,placement:n,offset:s}).init()}function Le(e,t=!1){const n=t?{}:[],s=new URLSearchParams(e);for(const i of s.entries())if(t){const[r,o]=i;n[r]=o}else n.push([i[0],i[1]]);return n}function Pe(e){return new URLSearchParams(e).toString().replace(/&/g,`&
`).replace(/\w.*=&?$/gm,"").replace(/\n+/g,"").replace(/&$/g,"")}const Ce={parse:Le,stringify:Pe};function T(e,t,n=.55){return e*t*n/(t+n*e)}function Fe(e,t,n,s){return n<e?-T(e-n,t-e,s)+e:n>t?T(n-t,t-e,s)+t:n}function xe(){let e=!1;const t=()=>{if(!e){e=!0;const i="@xoLocalStorageCheck";try{return window.localStorage.setItem(i,i),window.localStorage.removeItem(i),!0}catch{return!1}}return!0};return(()=>t()?window.localStorage:{getItem(){return null},setItem(){},removeItem(){},clear(){},key(){return null},length:0})()}const _=xe();function Xe(e,t=200){let n=0;return function(...s){const i=this,r=Date.now();r-n<t||(n=r,e.apply(i,s))}}class M{constructor(t={}){c(this,"_store");c(this,"_prevStore");c(this,"_options");c(this,"_listeners");c(this,"_storageRegisters");c(this,"_useDeepEquals");c(this,"_handleListeners",t=>{if(this._listeners[t]){const n=this.get(t);for(let s=0;s<this._listeners[t].length;s++){const{equal:i,listener:r}=this._listeners[t][s];if(!i)r(n);else{const o=v(this._prevStore[t]);i(o,n)||r(n)}}}});c(this,"_getState",(t,n)=>{const s=_.getItem(t);return s!=null&&s!==void 0&&this._storageRegisters[t]?JSON.parse(s):n});c(this,"_setStorage",(t,n)=>{if(!!t&&n!==void 0&&this._storageRegisters[t]){const s=JSON.stringify(n);_.setItem(t,s)}});c(this,"_set",(t,n)=>{const{logger:s,loggerCollapsed:i}=this._options;return(this._useDeepEquals[t]?!x(this._store[t],n):this._store[t]!==n)&&(this._prevStore[t]=v(this._store[t]),this._store[t]=n,this._setStorage(t,n),this._handleListeners(t),s)?o=>{M.logger(o,n,t,i,this._prevStore,this._store)}:()=>{}});c(this,"create",(t,{initialState:n,useStorage:s,useDeepEqual:i})=>{const{logger:r,loggerCollapsed:o}=this._options;this._store[t]||(this._storageRegisters[t]=s,this._getState(t,n)||this._setStorage(t,n),this._store[t]=this._getState(t,n),s||_.removeItem(t),this._handleListeners(t),r&&M.logger("@store/initialState",n,t,o)),this._useDeepEquals[t]||(this._useDeepEquals[t]=!!i)});this._store={},this._prevStore={},this._listeners={},this._storageRegisters={},this._options={logger:t.logger||!1,loggerCollapsed:t.loggerCollapsed||!1},this._useDeepEquals={}}static logger(t,n,s,i=!1,r,o){const a=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),h=s,u=h.length<9?Array(9-h.length).fill(" ").join(""):"";console[i?"groupCollapsed":"group"](`%c XOStore: ${t}`,"color: #614eff",`@${a}`),r&&console.log("%c Prev Store ","color: #999; font-weight: 600",r),console.log(`%c ${h}  ${u}`,"color: #44b0e2; font-weight: 600",n),o&&console.log("%c Next Store ","color: #7ac143; font-weight: 600",o),console.groupEnd()}get(t){return t?this._store[t]:this._store}set(t,n){if(typeof n=="function"){const s=n,i=this._store[t];return this._set(t,s(i))}return this._set(t,n)}subscribe(t,n,s){if(this._listeners[t]=this._listeners[t]||[],this._listeners[t].push({listener:n,equal:s}),Object.keys(this._store).includes(t)){const i=this.get(t),r=v(this._prevStore[t]);s&&s(r,i)||n(i)}return()=>{this._listeners[t]=F(this._listeners[t],({listener:i})=>i!==n)}}}let S=null;function Ye(){if(S!==null)return S;if(!document.body)return 0;const e=document.createElement("div"),t=100;return e.style.width=`${t}px`,e.style.height=`${t}px`,e.style.overflow="scroll",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e),S=t-e.clientWidth,document.body.removeChild(e),S}function Oe(e){if(e==null)return;const t=I(e||{}),n=W(t,(s,i,r)=>{var a,h;const o=parseInt(i.toString())||0,l=parseInt(((h=(a=t[r-1])==null?void 0:a.toString)==null?void 0:h.call(a))||"0");return window.innerWidth>=l&&window.innerWidth<=o?{...s,...e[i]}:s},{});if(!!I(n).length)return n}function Te(e,t){let n=window.innerWidth,s=window.innerHeight;return function(...r){const o=this;e==="x"?n!==window.innerWidth&&t.apply(o,r):e==="y"&&s!==window.innerHeight&&t.apply(o,r),n=window.innerWidth,s=window.innerHeight}}const $e=({file:e,content:t,insertPosition:n="beforeend",id:s,parentElement:i=document.head})=>{if(s){const r=document.getElementById(s);r==null||r.remove()}if(e){const r=document.createElement("link");return s&&(r.id=s),r.rel="stylesheet",r.href=e,i.insertAdjacentElement(n,r),r}if(t){const r=document.createElement("style");return s&&(r.id=s),r.textContent=t,i.insertAdjacentElement(n,r),r}},De=async({file:e,content:t,insertPosition:n="beforeend",id:s,parentElement:i=document.head,type:r})=>{if(s){const l=document.getElementById(s);l==null||l.remove()}const o=document.createElement("script");return s&&(o.id=s),e&&(o.src=e,r&&(o.type=r)),t&&(o.textContent=t),!!e||!!t?(i.insertAdjacentElement(n,o),new Promise(l=>{o.onload=()=>{l(o)}})):new Promise(l=>{l(o)})};function Be(e,t,n=1){const s=Math.ceil((t-e)/n);return Array.from({length:s},(i,r)=>e+r*n)}class We{static toArray(t){const n=[],s=t.match(/[a-df-z][^a-df-z]*/gi);if(!s)return n;for(let i=0;i<s.length;i++){const r=s[i],o=r.charAt(0),l=r.substring(1).split(/[\s,]+|(?=\s?[+\-])/).map(a=>+a);n.push({type:o,values:l})}return n}static toString(t){let n="";for(let s=0;s<t.length;s++){const i=t[s],r=i.type,o=i.values;n+=r;for(let l=0;l<o.length;l++){const a=o[l];n+=a+(l<o.length-1?" ":"")}}return n}}function qe(e,t=0){const n=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,r=n.bottom>=0&&n.right>=0&&n.top<=s&&n.left<=i;return t>0?r||n.top-t<=s&&n.bottom+t>=0||n.left-t<=i&&n.right+t>=0:r}exports.DOMLoaded=B;exports.Emitter=D;exports.PanGesture=V;exports.Popper=U;exports.SVGPath=We;exports.XOStore=M;exports.appendStyle=ie;exports.attrBoolean=J;exports.checkAttr=K;exports.clamp=Z;exports.cloneDeep=v;exports.componentDefine=ee;exports.createAnimate=te;exports.createCssInJs=se;exports.debounce=re;exports.delay=oe;exports.each=b;exports.easings=A;exports.equal=x;exports.filter=F;exports.findIndex=ce;exports.frameManager=ae;exports.getAttrs=ye;exports.getBreakpointsOptions=Oe;exports.getScrollbarWidth=Ye;exports.imageUrl=be;exports.interpolate=Ee;exports.isMobile=g;exports.isViewport=qe;exports.loadScript=De;exports.loadStyle=$e;exports.map=y;exports.namingConvention=H;exports.objectKeys=I;exports.objectParse=C;exports.objectValues=Se;exports.offset=R;exports.panGesture=_e;exports.pinchGesture=Me;exports.popper=ke;exports.queryString=Ce;exports.range=Be;exports.reduce=W;exports.resizeAxis=Te;exports.rubberBandClamp=Fe;exports.storage=_;exports.throttle=Xe;exports.throwError=$;exports.typeOf=w;
