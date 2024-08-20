(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ks(e,t){const r=new Set(e.split(","));return i=>r.has(i)}const He={},Lr=[],vt=()=>{},cy=()=>!1,zn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ts=e=>e.startsWith("onUpdate:"),at=Object.assign,As=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},fy=Object.prototype.hasOwnProperty,Te=(e,t)=>fy.call(e,t),be=Array.isArray,qr=e=>On(e)==="[object Map]",kc=e=>On(e)==="[object Set]",_e=e=>typeof e=="function",et=e=>typeof e=="string",gr=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Tc=e=>(Le(e)||_e(e))&&_e(e.then)&&_e(e.catch),Ac=Object.prototype.toString,On=e=>Ac.call(e),hy=e=>On(e).slice(8,-1),zc=e=>On(e)==="[object Object]",zs=e=>et(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yi=ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},my=/-(\w)/g,Rr=Rn(e=>e.replace(my,(t,r)=>r?r.toUpperCase():"")),gy=/\B([A-Z])/g,Mr=Rn(e=>e.replace(gy,"-$1").toLowerCase()),Oc=Rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ua=Rn(e=>e?`on${Oc(e)}`:""),pr=(e,t)=>!Object.is(e,t),un=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Rc=(e,t,r,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:r})},is=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Du;const Dc=()=>Du||(Du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Os(e){if(be(e)){const t={};for(let r=0;r<e.length;r++){const i=e[r],n=et(i)?_y(i):Os(i);if(n)for(const s in n)t[s]=n[s]}return t}else if(et(e)||Le(e))return e}const yy=/;(?![^(]*\))/g,wy=/:([^]+)/,by=/\/\*[^]*?\*\//g;function _y(e){const t={};return e.replace(by,"").split(yy).forEach(r=>{if(r){const i=r.split(wy);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Rs(e){let t="";if(et(e))t=e;else if(be(e))for(let r=0;r<e.length;r++){const i=Rs(e[r]);i&&(t+=i+" ")}else if(Le(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const $y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vy=ks($y);function Mc(e){return!!e||e===""}const Bc=e=>!!(e&&e.__v_isRef===!0),Pc=e=>et(e)?e:e==null?"":be(e)||Le(e)&&(e.toString===Ac||!_e(e.toString))?Bc(e)?Pc(e.value):JSON.stringify(e,Nc,2):String(e),Nc=(e,t)=>Bc(t)?Nc(e,t.value):qr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[i,n],s)=>(r[la(i,s)+" =>"]=n,r),{})}:kc(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>la(r))}:gr(t)?la(t):Le(t)&&!be(t)&&!zc(t)?String(t):t,la=(e,t="")=>{var r;return gr(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class xy{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!t&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const r=At;try{return At=this,t()}finally{At=r}}}on(){At=this}off(){At=this.parent}stop(t){if(this._active){let r,i;for(r=0,i=this.effects.length;r<i;r++)this.effects[r].stop();for(r=0,i=this.cleanups.length;r<i;r++)this.cleanups[r]();if(this.scopes)for(r=0,i=this.scopes.length;r<i;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Sy(e,t=At){t&&t.active&&t.effects.push(e)}function Ey(){return At}let zr;class Ds{constructor(t,r,i,n){this.fn=t,this.trigger=r,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Sy(this,n)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,yr();for(let t=0;t<this._depsLength;t++){const r=this.deps[t];if(r.computed&&(Iy(r.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),wr()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ur,r=zr;try{return ur=!0,zr=this,this._runnings++,Mu(this),this.fn()}finally{Bu(this),this._runnings--,zr=r,ur=t}}stop(){this.active&&(Mu(this),Bu(this),this.onStop&&this.onStop(),this.active=!1)}}function Iy(e){return e.value}function Mu(e){e._trackId++,e._depsLength=0}function Bu(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Uc(e.deps[t],e);e.deps.length=e._depsLength}}function Uc(e,t){const r=e.get(t);r!==void 0&&t._trackId!==r&&(e.delete(t),e.size===0&&e.cleanup())}let ur=!0,ns=0;const Wc=[];function yr(){Wc.push(ur),ur=!1}function wr(){const e=Wc.pop();ur=e===void 0?!0:e}function Ms(){ns++}function Bs(){for(ns--;!ns&&as.length;)as.shift()()}function Hc(e,t,r){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const i=e.deps[e._depsLength];i!==t?(i&&Uc(i,e),e.deps[e._depsLength++]=t):e._depsLength++}}const as=[];function Vc(e,t,r){Ms();for(const i of e.keys()){let n;i._dirtyLevel<t&&(n??(n=e.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(n??(n=e.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&as.push(i.scheduler)))}Bs()}const Fc=(e,t)=>{const r=new Map;return r.cleanup=e,r.computed=t,r},ss=new WeakMap,Or=Symbol(""),os=Symbol("");function ft(e,t,r){if(ur&&zr){let i=ss.get(e);i||ss.set(e,i=new Map);let n=i.get(r);n||i.set(r,n=Fc(()=>i.delete(r))),Hc(zr,n)}}function Yt(e,t,r,i,n,s){const a=ss.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(r==="length"&&be(e)){const l=Number(i);a.forEach((p,f)=>{(f==="length"||!gr(f)&&f>=l)&&o.push(p)})}else switch(r!==void 0&&o.push(a.get(r)),t){case"add":be(e)?zs(r)&&o.push(a.get("length")):(o.push(a.get(Or)),qr(e)&&o.push(a.get(os)));break;case"delete":be(e)||(o.push(a.get(Or)),qr(e)&&o.push(a.get(os)));break;case"set":qr(e)&&o.push(a.get(Or));break}Ms();for(const l of o)l&&Vc(l,4);Bs()}const Cy=ks("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gr)),Pu=ky();function ky(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const i=Re(this);for(let s=0,a=this.length;s<a;s++)ft(i,"get",s+"");const n=i[t](...r);return n===-1||n===!1?i[t](...r.map(Re)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){yr(),Ms();const i=Re(this)[t].apply(this,r);return Bs(),wr(),i}}),e}function Ty(e){gr(e)||(e=String(e));const t=Re(this);return ft(t,"has",e),t.hasOwnProperty(e)}class Lc{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,i){const n=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return s;if(r==="__v_raw")return i===(n?s?Vy:Yc:s?Kc:Gc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=be(t);if(!n){if(a&&Te(Pu,r))return Reflect.get(Pu,r,i);if(r==="hasOwnProperty")return Ty}const o=Reflect.get(t,r,i);return(gr(r)?jc.has(r):Cy(r))||(n||ft(t,"get",r),s)?o:ht(o)?a&&zs(r)?o:o.value:Le(o)?n?Xc(o):Us(o):o}}class qc extends Lc{constructor(t=!1){super(!1,t)}set(t,r,i,n){let s=t[r];if(!this._isShallow){const l=Dr(s);if(!Yr(i)&&!Dr(i)&&(s=Re(s),i=Re(i)),!be(t)&&ht(s)&&!ht(i))return l?!1:(s.value=i,!0)}const a=be(t)&&zs(r)?Number(r)<t.length:Te(t,r),o=Reflect.set(t,r,i,n);return t===Re(n)&&(a?pr(i,s)&&Yt(t,"set",r,i):Yt(t,"add",r,i)),o}deleteProperty(t,r){const i=Te(t,r);t[r];const n=Reflect.deleteProperty(t,r);return n&&i&&Yt(t,"delete",r,void 0),n}has(t,r){const i=Reflect.has(t,r);return(!gr(r)||!jc.has(r))&&ft(t,"has",r),i}ownKeys(t){return ft(t,"iterate",be(t)?"length":Or),Reflect.ownKeys(t)}}class Ay extends Lc{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const zy=new qc,Oy=new Ay,Ry=new qc(!0);const Ps=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function Fi(e,t,r=!1,i=!1){e=e.__v_raw;const n=Re(e),s=Re(t);r||(pr(t,s)&&ft(n,"get",t),ft(n,"get",s));const{has:a}=Dn(n),o=i?Ps:r?Hs:$i;if(a.call(n,t))return o(e.get(t));if(a.call(n,s))return o(e.get(s));e!==n&&e.get(t)}function ji(e,t=!1){const r=this.__v_raw,i=Re(r),n=Re(e);return t||(pr(e,n)&&ft(i,"has",e),ft(i,"has",n)),e===n?r.has(e):r.has(e)||r.has(n)}function Li(e,t=!1){return e=e.__v_raw,!t&&ft(Re(e),"iterate",Or),Reflect.get(e,"size",e)}function Nu(e,t=!1){!t&&!Yr(e)&&!Dr(e)&&(e=Re(e));const r=Re(this);return Dn(r).has.call(r,e)||(r.add(e),Yt(r,"add",e,e)),this}function Uu(e,t,r=!1){!r&&!Yr(t)&&!Dr(t)&&(t=Re(t));const i=Re(this),{has:n,get:s}=Dn(i);let a=n.call(i,e);a||(e=Re(e),a=n.call(i,e));const o=s.call(i,e);return i.set(e,t),a?pr(t,o)&&Yt(i,"set",e,t):Yt(i,"add",e,t),this}function Wu(e){const t=Re(this),{has:r,get:i}=Dn(t);let n=r.call(t,e);n||(e=Re(e),n=r.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return n&&Yt(t,"delete",e,void 0),s}function Hu(){const e=Re(this),t=e.size!==0,r=e.clear();return t&&Yt(e,"clear",void 0,void 0),r}function qi(e,t){return function(i,n){const s=this,a=s.__v_raw,o=Re(a),l=t?Ps:e?Hs:$i;return!e&&ft(o,"iterate",Or),a.forEach((p,f)=>i.call(n,l(p),l(f),s))}}function Gi(e,t,r){return function(...i){const n=this.__v_raw,s=Re(n),a=qr(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,p=n[e](...i),f=r?Ps:t?Hs:$i;return!t&&ft(s,"iterate",l?os:Or),{next(){const{value:h,done:d}=p.next();return d?{value:h,done:d}:{value:o?[f(h[0]),f(h[1])]:f(h),done:d}},[Symbol.iterator](){return this}}}}function tr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Dy(){const e={get(s){return Fi(this,s)},get size(){return Li(this)},has:ji,add:Nu,set:Uu,delete:Wu,clear:Hu,forEach:qi(!1,!1)},t={get(s){return Fi(this,s,!1,!0)},get size(){return Li(this)},has:ji,add(s){return Nu.call(this,s,!0)},set(s,a){return Uu.call(this,s,a,!0)},delete:Wu,clear:Hu,forEach:qi(!1,!0)},r={get(s){return Fi(this,s,!0)},get size(){return Li(this,!0)},has(s){return ji.call(this,s,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:qi(!0,!1)},i={get(s){return Fi(this,s,!0,!0)},get size(){return Li(this,!0)},has(s){return ji.call(this,s,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Gi(s,!1,!1),r[s]=Gi(s,!0,!1),t[s]=Gi(s,!1,!0),i[s]=Gi(s,!0,!0)}),[e,r,t,i]}const[My,By,Py,Ny]=Dy();function Ns(e,t){const r=t?e?Ny:Py:e?By:My;return(i,n,s)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?i:Reflect.get(Te(r,n)&&n in i?r:i,n,s)}const Uy={get:Ns(!1,!1)},Wy={get:Ns(!1,!0)},Hy={get:Ns(!0,!1)};const Gc=new WeakMap,Kc=new WeakMap,Yc=new WeakMap,Vy=new WeakMap;function Fy(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jy(e){return e.__v_skip||!Object.isExtensible(e)?0:Fy(hy(e))}function Us(e){return Dr(e)?e:Ws(e,!1,zy,Uy,Gc)}function Ly(e){return Ws(e,!1,Ry,Wy,Kc)}function Xc(e){return Ws(e,!0,Oy,Hy,Yc)}function Ws(e,t,r,i,n){if(!Le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=n.get(e);if(s)return s;const a=jy(e);if(a===0)return e;const o=new Proxy(e,a===2?i:r);return n.set(e,o),o}function wi(e){return Dr(e)?wi(e.__v_raw):!!(e&&e.__v_isReactive)}function Dr(e){return!!(e&&e.__v_isReadonly)}function Yr(e){return!!(e&&e.__v_isShallow)}function Zc(e){return e?!!e.__v_raw:!1}function Re(e){const t=e&&e.__v_raw;return t?Re(t):e}function qy(e){return Object.isExtensible(e)&&Rc(e,"__v_skip",!0),e}const $i=e=>Le(e)?Us(e):e,Hs=e=>Le(e)?Xc(e):e;class Qc{constructor(t,r,i,n){this.getter=t,this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ds(()=>t(this._value),()=>ln(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const t=Re(this);return(!t._cacheable||t.effect.dirty)&&pr(t._value,t._value=t.effect.run())&&ln(t,4),Jc(t),t.effect._dirtyLevel>=2&&ln(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Gy(e,t,r=!1){let i,n;const s=_e(e);return s?(i=e,n=vt):(i=e.get,n=e.set),new Qc(i,n,s||!n,r)}function Jc(e){var t;ur&&zr&&(e=Re(e),Hc(zr,(t=e.dep)!=null?t:e.dep=Fc(()=>e.dep=void 0,e instanceof Qc?e:void 0)))}function ln(e,t=4,r,i){e=Re(e);const n=e.dep;n&&Vc(n,t)}function ht(e){return!!(e&&e.__v_isRef===!0)}function Ur(e){return Ky(e,!1)}function Ky(e,t){return ht(e)?e:new Yy(e,t)}class Yy{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:Re(t),this._value=r?t:$i(t)}get value(){return Jc(this),this._value}set value(t){const r=this.__v_isShallow||Yr(t)||Dr(t);t=r?t:Re(t),pr(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=r?t:$i(t),ln(this,4))}}function Xy(e){return ht(e)?e.value:e}const Zy={get:(e,t,r)=>Xy(Reflect.get(e,t,r)),set:(e,t,r,i)=>{const n=e[t];return ht(n)&&!ht(r)?(n.value=r,!0):Reflect.set(e,t,r,i)}};function ef(e){return wi(e)?e:new Proxy(e,Zy)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lr(e,t,r,i){try{return i?e(...i):e()}catch(n){Mn(n,t,r)}}function Ot(e,t,r,i){if(_e(e)){const n=lr(e,t,r,i);return n&&Tc(n)&&n.catch(s=>{Mn(s,t,r)}),n}if(be(e)){const n=[];for(let s=0;s<e.length;s++)n.push(Ot(e[s],t,r,i));return n}}function Mn(e,t,r,i=!0){const n=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${r}`;for(;s;){const p=s.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){yr(),lr(l,null,10,[e,a,o]),wr();return}}Qy(e,r,n,i)}function Qy(e,t,r,i=!0){console.error(e)}let vi=!1,us=!1;const nt=[];let Vt=0;const Gr=[];let ar=null,Ir=0;const tf=Promise.resolve();let Vs=null;function Jy(e){const t=Vs||tf;return e?t.then(this?e.bind(this):e):t}function ew(e){let t=Vt+1,r=nt.length;for(;t<r;){const i=t+r>>>1,n=nt[i],s=xi(n);s<e||s===e&&n.pre?t=i+1:r=i}return t}function Fs(e){(!nt.length||!nt.includes(e,vi&&e.allowRecurse?Vt+1:Vt))&&(e.id==null?nt.push(e):nt.splice(ew(e.id),0,e),rf())}function rf(){!vi&&!us&&(us=!0,Vs=tf.then(af))}function tw(e){const t=nt.indexOf(e);t>Vt&&nt.splice(t,1)}function rw(e){be(e)?Gr.push(...e):(!ar||!ar.includes(e,e.allowRecurse?Ir+1:Ir))&&Gr.push(e),rf()}function Vu(e,t,r=vi?Vt+1:0){for(;r<nt.length;r++){const i=nt[r];if(i&&i.pre){if(e&&i.id!==e.uid)continue;nt.splice(r,1),r--,i()}}}function nf(e){if(Gr.length){const t=[...new Set(Gr)].sort((r,i)=>xi(r)-xi(i));if(Gr.length=0,ar){ar.push(...t);return}for(ar=t,Ir=0;Ir<ar.length;Ir++){const r=ar[Ir];r.active!==!1&&r()}ar=null,Ir=0}}const xi=e=>e.id==null?1/0:e.id,iw=(e,t)=>{const r=xi(e)-xi(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function af(e){us=!1,vi=!0,nt.sort(iw);try{for(Vt=0;Vt<nt.length;Vt++){const t=nt[Vt];t&&t.active!==!1&&lr(t,t.i,t.i?15:14)}}finally{Vt=0,nt.length=0,nf(),vi=!1,Vs=null,(nt.length||Gr.length)&&af()}}let xt=null,Bn=null;function bn(e){const t=xt;return xt=e,Bn=e&&e.type.__scopeId||null,t}function nw(e){Bn=e}function aw(){Bn=null}function sw(e,t=xt,r){if(!t||e._n)return e;const i=(...n)=>{i._d&&Xu(-1);const s=bn(t);let a;try{a=e(...n)}finally{bn(s),i._d&&Xu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ow(e,t){if(xt===null)return e;const r=Hn(xt),i=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[s,a,o,l=He]=t[n];s&&(_e(s)&&(s={mounted:s,updated:s}),s.deep&&or(a),i.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function vr(e,t,r,i){const n=e.dirs,s=t&&t.dirs;for(let a=0;a<n.length;a++){const o=n[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(yr(),Ot(l,r,8,[e.el,o,e,t]),wr())}}function sf(e,t){e.shapeFlag&6&&e.component?sf(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function uw(e,t){return _e(e)?at({name:e.name},t,{setup:e}):e}const dn=e=>!!e.type.__asyncLoader,of=e=>e.type.__isKeepAlive;function lw(e,t){uf(e,"a",t)}function dw(e,t){uf(e,"da",t)}function uf(e,t,r=lt){const i=e.__wdc||(e.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Pn(t,i,r),r){let n=r.parent;for(;n&&n.parent;)of(n.parent.vnode)&&pw(i,t,r,n),n=n.parent}}function pw(e,t,r,i){const n=Pn(t,e,i,!0);lf(()=>{As(i[t],n)},r)}function Pn(e,t,r=lt,i=!1){if(r){const n=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{yr();const o=Ti(r),l=Ot(t,r,e,a);return o(),wr(),l});return i?n.unshift(s):n.push(s),s}}const Xt=e=>(t,r=lt)=>{(!Wn||e==="sp")&&Pn(e,(...i)=>t(...i),r)},cw=Xt("bm"),js=Xt("m"),fw=Xt("bu"),hw=Xt("u"),mw=Xt("bum"),lf=Xt("um"),gw=Xt("sp"),yw=Xt("rtg"),ww=Xt("rtc");function bw(e,t=lt){Pn("ec",e,t)}const _w=Symbol.for("v-ndc"),ls=e=>e?Cf(e)?Hn(e):ls(e.parent):null,bi=at(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ls(e.parent),$root:e=>ls(e.root),$emit:e=>e.emit,$options:e=>Ls(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Fs(e.update)}),$nextTick:e=>e.n||(e.n=Jy.bind(e.proxy)),$watch:e=>jw.bind(e)}),da=(e,t)=>e!==He&&!e.__isScriptSetup&&Te(e,t),$w={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:i,data:n,props:s,accessCache:a,type:o,appContext:l}=e;let p;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return i[t];case 2:return n[t];case 4:return r[t];case 3:return s[t]}else{if(da(i,t))return a[t]=1,i[t];if(n!==He&&Te(n,t))return a[t]=2,n[t];if((p=e.propsOptions[0])&&Te(p,t))return a[t]=3,s[t];if(r!==He&&Te(r,t))return a[t]=4,r[t];ds&&(a[t]=0)}}const f=bi[t];let h,d;if(f)return t==="$attrs"&&ft(e.attrs,"get",""),f(e);if((h=o.__cssModules)&&(h=h[t]))return h;if(r!==He&&Te(r,t))return a[t]=4,r[t];if(d=l.config.globalProperties,Te(d,t))return d[t]},set({_:e},t,r){const{data:i,setupState:n,ctx:s}=e;return da(n,t)?(n[t]=r,!0):i!==He&&Te(i,t)?(i[t]=r,!0):Te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:i,appContext:n,propsOptions:s}},a){let o;return!!r[a]||e!==He&&Te(e,a)||da(t,a)||(o=s[0])&&Te(o,a)||Te(i,a)||Te(bi,a)||Te(n.config.globalProperties,a)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Te(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Fu(e){return be(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let ds=!0;function vw(e){const t=Ls(e),r=e.proxy,i=e.ctx;ds=!1,t.beforeCreate&&ju(t.beforeCreate,e,"bc");const{data:n,computed:s,methods:a,watch:o,provide:l,inject:p,created:f,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:w,deactivated:v,beforeDestroy:x,beforeUnmount:_,destroyed:E,unmounted:S,render:C,renderTracked:A,renderTriggered:R,errorCaptured:B,serverPrefetch:X,expose:K,inheritAttrs:ce,components:he,directives:ne,filters:Se}=t;if(p&&xw(p,i,null),a)for(const fe in a){const L=a[fe];_e(L)&&(i[fe]=L.bind(r))}if(n){const fe=n.call(r,r);Le(fe)&&(e.data=Us(fe))}if(ds=!0,s)for(const fe in s){const L=s[fe],re=_e(L)?L.bind(r,r):_e(L.get)?L.get.bind(r,r):vt,we=!_e(L)&&_e(L.set)?L.set.bind(r):vt,z=hb({get:re,set:we});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>z.value,set:Q=>z.value=Q})}if(o)for(const fe in o)df(o[fe],i,r,fe);if(l){const fe=_e(l)?l.call(r):l;Reflect.ownKeys(fe).forEach(L=>{Tw(L,fe[L])})}f&&ju(f,e,"c");function ae(fe,L){be(L)?L.forEach(re=>fe(re.bind(r))):L&&fe(L.bind(r))}if(ae(cw,h),ae(js,d),ae(fw,g),ae(hw,y),ae(lw,w),ae(dw,v),ae(bw,B),ae(ww,A),ae(yw,R),ae(mw,_),ae(lf,S),ae(gw,X),be(K))if(K.length){const fe=e.exposed||(e.exposed={});K.forEach(L=>{Object.defineProperty(fe,L,{get:()=>r[L],set:re=>r[L]=re})})}else e.exposed||(e.exposed={});C&&e.render===vt&&(e.render=C),ce!=null&&(e.inheritAttrs=ce),he&&(e.components=he),ne&&(e.directives=ne)}function xw(e,t,r=vt){be(e)&&(e=ps(e));for(const i in e){const n=e[i];let s;Le(n)?"default"in n?s=pn(n.from||i,n.default,!0):s=pn(n.from||i):s=pn(n),ht(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function ju(e,t,r){Ot(be(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,r)}function df(e,t,r,i){const n=i.includes(".")?Sf(r,i):()=>r[i];if(et(e)){const s=t[e];_e(s)&&ca(n,s)}else if(_e(e))ca(n,e.bind(r));else if(Le(e))if(be(e))e.forEach(s=>df(s,t,r,i));else{const s=_e(e.handler)?e.handler.bind(r):t[e.handler];_e(s)&&ca(n,s,e)}}function Ls(e){const t=e.type,{mixins:r,extends:i}=t,{mixins:n,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!n.length&&!r&&!i?l=t:(l={},n.length&&n.forEach(p=>_n(l,p,a,!0)),_n(l,t,a)),Le(t)&&s.set(t,l),l}function _n(e,t,r,i=!1){const{mixins:n,extends:s}=t;s&&_n(e,s,r,!0),n&&n.forEach(a=>_n(e,a,r,!0));for(const a in t)if(!(i&&a==="expose")){const o=Sw[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Sw={data:Lu,props:qu,emits:qu,methods:ci,computed:ci,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:ci,directives:ci,watch:Iw,provide:Lu,inject:Ew};function Lu(e,t){return t?e?function(){return at(_e(e)?e.call(this,this):e,_e(t)?t.call(this,this):t)}:t:e}function Ew(e,t){return ci(ps(e),ps(t))}function ps(e){if(be(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function ci(e,t){return e?at(Object.create(null),e,t):t}function qu(e,t){return e?be(e)&&be(t)?[...new Set([...e,...t])]:at(Object.create(null),Fu(e),Fu(t??{})):t}function Iw(e,t){if(!e)return t;if(!t)return e;const r=at(Object.create(null),e);for(const i in t)r[i]=ot(e[i],t[i]);return r}function pf(){return{app:null,config:{isNativeTag:cy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cw=0;function kw(e,t){return function(i,n=null){_e(i)||(i=at({},i)),n!=null&&!Le(n)&&(n=null);const s=pf(),a=new WeakSet;let o=!1;const l=s.app={_uid:Cw++,_component:i,_props:n,_container:null,_context:s,_instance:null,version:mb,get config(){return s.config},set config(p){},use(p,...f){return a.has(p)||(p&&_e(p.install)?(a.add(p),p.install(l,...f)):_e(p)&&(a.add(p),p(l,...f))),l},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),l},component(p,f){return f?(s.components[p]=f,l):s.components[p]},directive(p,f){return f?(s.directives[p]=f,l):s.directives[p]},mount(p,f,h){if(!o){const d=dr(i,n);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&t?t(d,p):e(d,p,h),o=!0,l._container=p,p.__vue_app__=l,Hn(d.component)}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(p,f){return s.provides[p]=f,l},runWithContext(p){const f=Kr;Kr=l;try{return p()}finally{Kr=f}}};return l}}let Kr=null;function Tw(e,t){if(lt){let r=lt.provides;const i=lt.parent&&lt.parent.provides;i===r&&(r=lt.provides=Object.create(i)),r[e]=t}}function pn(e,t,r=!1){const i=lt||xt;if(i||Kr){const n=Kr?Kr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return r&&_e(t)?t.call(i&&i.proxy):t}}const cf={},ff=()=>Object.create(cf),hf=e=>Object.getPrototypeOf(e)===cf;function Aw(e,t,r,i=!1){const n={},s=ff();e.propsDefaults=Object.create(null),mf(e,t,n,s);for(const a in e.propsOptions[0])a in n||(n[a]=void 0);r?e.props=i?n:Ly(n):e.type.props?e.props=n:e.props=s,e.attrs=s}function zw(e,t,r,i){const{props:n,attrs:s,vnode:{patchFlag:a}}=e,o=Re(n),[l]=e.propsOptions;let p=!1;if((i||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let d=f[h];if(Nn(e.emitsOptions,d))continue;const g=t[d];if(l)if(Te(s,d))g!==s[d]&&(s[d]=g,p=!0);else{const y=Rr(d);n[y]=cs(l,o,y,g,e,!1)}else g!==s[d]&&(s[d]=g,p=!0)}}}else{mf(e,t,n,s)&&(p=!0);let f;for(const h in o)(!t||!Te(t,h)&&((f=Mr(h))===h||!Te(t,f)))&&(l?r&&(r[h]!==void 0||r[f]!==void 0)&&(n[h]=cs(l,o,h,void 0,e,!0)):delete n[h]);if(s!==o)for(const h in s)(!t||!Te(t,h))&&(delete s[h],p=!0)}p&&Yt(e.attrs,"set","")}function mf(e,t,r,i){const[n,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(yi(l))continue;const p=t[l];let f;n&&Te(n,f=Rr(l))?!s||!s.includes(f)?r[f]=p:(o||(o={}))[f]=p:Nn(e.emitsOptions,l)||(!(l in i)||p!==i[l])&&(i[l]=p,a=!0)}if(s){const l=Re(r),p=o||He;for(let f=0;f<s.length;f++){const h=s[f];r[h]=cs(n,l,h,p[h],e,!Te(p,h))}}return a}function cs(e,t,r,i,n,s){const a=e[r];if(a!=null){const o=Te(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&_e(l)){const{propsDefaults:p}=n;if(r in p)i=p[r];else{const f=Ti(n);i=p[r]=l.call(null,t),f()}}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Mr(r))&&(i=!0))}return i}const Ow=new WeakMap;function gf(e,t,r=!1){const i=r?Ow:t.propsCache,n=i.get(e);if(n)return n;const s=e.props,a={},o=[];let l=!1;if(!_e(e)){const f=h=>{l=!0;const[d,g]=gf(h,t,!0);at(a,d),g&&o.push(...g)};!r&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return Le(e)&&i.set(e,Lr),Lr;if(be(s))for(let f=0;f<s.length;f++){const h=Rr(s[f]);Gu(h)&&(a[h]=He)}else if(s)for(const f in s){const h=Rr(f);if(Gu(h)){const d=s[f],g=a[h]=be(d)||_e(d)?{type:d}:at({},d),y=g.type;let w=!1,v=!0;if(be(y))for(let x=0;x<y.length;++x){const _=y[x],E=_e(_)&&_.name;if(E==="Boolean"){w=!0;break}else E==="String"&&(v=!1)}else w=_e(y)&&y.name==="Boolean";g[0]=w,g[1]=v,(w||Te(g,"default"))&&o.push(h)}}const p=[a,o];return Le(e)&&i.set(e,p),p}function Gu(e){return e[0]!=="$"&&!yi(e)}const yf=e=>e[0]==="_"||e==="$stable",qs=e=>be(e)?e.map(Ht):[Ht(e)],Rw=(e,t,r)=>{if(t._n)return t;const i=sw((...n)=>qs(t(...n)),r);return i._c=!1,i},wf=(e,t,r)=>{const i=e._ctx;for(const n in e){if(yf(n))continue;const s=e[n];if(_e(s))t[n]=Rw(n,s,i);else if(s!=null){const a=qs(s);t[n]=()=>a}}},bf=(e,t)=>{const r=qs(t);e.slots.default=()=>r},_f=(e,t,r)=>{for(const i in t)(r||i!=="_")&&(e[i]=t[i])},Dw=(e,t,r)=>{const i=e.slots=ff();if(e.vnode.shapeFlag&32){const n=t._;n?(_f(i,t,r),r&&Rc(i,"_",n,!0)):wf(t,i)}else t&&bf(e,t)},Mw=(e,t,r)=>{const{vnode:i,slots:n}=e;let s=!0,a=He;if(i.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:_f(n,t,r):(s=!t.$stable,wf(t,n)),a=t}else t&&(bf(e,t),a={default:1});if(s)for(const o in n)!yf(o)&&a[o]==null&&delete n[o]};function fs(e,t,r,i,n=!1){if(be(e)){e.forEach((d,g)=>fs(d,t&&(be(t)?t[g]:t),r,i,n));return}if(dn(i)&&!n)return;const s=i.shapeFlag&4?Hn(i.component):i.el,a=n?null:s,{i:o,r:l}=e,p=t&&t.r,f=o.refs===He?o.refs={}:o.refs,h=o.setupState;if(p!=null&&p!==l&&(et(p)?(f[p]=null,Te(h,p)&&(h[p]=null)):ht(p)&&(p.value=null)),_e(l))lr(l,o,12,[a,f]);else{const d=et(l),g=ht(l);if(d||g){const y=()=>{if(e.f){const w=d?Te(h,l)?h[l]:f[l]:l.value;n?be(w)&&As(w,s):be(w)?w.includes(s)||w.push(s):d?(f[l]=[s],Te(h,l)&&(h[l]=f[l])):(l.value=[s],e.k&&(f[e.k]=l.value))}else d?(f[l]=a,Te(h,l)&&(h[l]=a)):g&&(l.value=a,e.k&&(f[e.k]=a))};a?(y.id=-1,pt(y,r)):y()}}}const Bw=Symbol("_vte"),Pw=e=>e.__isTeleport,pt=Qw;function Nw(e){return Uw(e)}function Uw(e,t){const r=Dc();r.__VUE__=!0;const{insert:i,remove:n,patchProp:s,createElement:a,createText:o,createComment:l,setText:p,setElementText:f,parentNode:h,nextSibling:d,setScopeId:g=vt,insertStaticContent:y}=e,w=(I,T,D,H=null,P=null,F=null,Z=void 0,q=null,Y=!!T.dynamicChildren)=>{if(I===T)return;I&&!ii(I,T)&&(H=mt(I),Q(I,P,F,!0),I=null),T.patchFlag===-2&&(Y=!1,T.dynamicChildren=null);const{type:V,ref:ee,shapeFlag:se}=T;switch(V){case Un:v(I,T,D,H);break;case Si:x(I,T,D,H);break;case ha:I==null&&_(T,D,H,Z);break;case Wt:he(I,T,D,H,P,F,Z,q,Y);break;default:se&1?C(I,T,D,H,P,F,Z,q,Y):se&6?ne(I,T,D,H,P,F,Z,q,Y):(se&64||se&128)&&V.process(I,T,D,H,P,F,Z,q,Y,Ve)}ee!=null&&P&&fs(ee,I&&I.ref,F,T||I,!T)},v=(I,T,D,H)=>{if(I==null)i(T.el=o(T.children),D,H);else{const P=T.el=I.el;T.children!==I.children&&p(P,T.children)}},x=(I,T,D,H)=>{I==null?i(T.el=l(T.children||""),D,H):T.el=I.el},_=(I,T,D,H)=>{[I.el,I.anchor]=y(I.children,T,D,H,I.el,I.anchor)},E=({el:I,anchor:T},D,H)=>{let P;for(;I&&I!==T;)P=d(I),i(I,D,H),I=P;i(T,D,H)},S=({el:I,anchor:T})=>{let D;for(;I&&I!==T;)D=d(I),n(I),I=D;n(T)},C=(I,T,D,H,P,F,Z,q,Y)=>{T.type==="svg"?Z="svg":T.type==="math"&&(Z="mathml"),I==null?A(T,D,H,P,F,Z,q,Y):X(I,T,P,F,Z,q,Y)},A=(I,T,D,H,P,F,Z,q)=>{let Y,V;const{props:ee,shapeFlag:se,transition:oe,dirs:ye}=I;if(Y=I.el=a(I.type,F,ee&&ee.is,ee),se&8?f(Y,I.children):se&16&&B(I.children,Y,null,H,P,pa(I,F),Z,q),ye&&vr(I,null,H,"created"),R(Y,I,I.scopeId,Z,H),ee){for(const De in ee)De!=="value"&&!yi(De)&&s(Y,De,null,ee[De],F,H);"value"in ee&&s(Y,"value",null,ee.value,F),(V=ee.onVnodeBeforeMount)&&Ut(V,H,I)}ye&&vr(I,null,H,"beforeMount");const ve=Ww(P,oe);ve&&oe.beforeEnter(Y),i(Y,T,D),((V=ee&&ee.onVnodeMounted)||ve||ye)&&pt(()=>{V&&Ut(V,H,I),ve&&oe.enter(Y),ye&&vr(I,null,H,"mounted")},P)},R=(I,T,D,H,P)=>{if(D&&g(I,D),H)for(let F=0;F<H.length;F++)g(I,H[F]);if(P){let F=P.subTree;if(T===F){const Z=P.vnode;R(I,Z,Z.scopeId,Z.slotScopeIds,P.parent)}}},B=(I,T,D,H,P,F,Z,q,Y=0)=>{for(let V=Y;V<I.length;V++){const ee=I[V]=q?sr(I[V]):Ht(I[V]);w(null,ee,T,D,H,P,F,Z,q)}},X=(I,T,D,H,P,F,Z)=>{const q=T.el=I.el;let{patchFlag:Y,dynamicChildren:V,dirs:ee}=T;Y|=I.patchFlag&16;const se=I.props||He,oe=T.props||He;let ye;if(D&&xr(D,!1),(ye=oe.onVnodeBeforeUpdate)&&Ut(ye,D,T,I),ee&&vr(T,I,D,"beforeUpdate"),D&&xr(D,!0),(se.innerHTML&&oe.innerHTML==null||se.textContent&&oe.textContent==null)&&f(q,""),V?K(I.dynamicChildren,V,q,D,H,pa(T,P),F):Z||L(I,T,q,null,D,H,pa(T,P),F,!1),Y>0){if(Y&16)ce(q,se,oe,D,P);else if(Y&2&&se.class!==oe.class&&s(q,"class",null,oe.class,P),Y&4&&s(q,"style",se.style,oe.style,P),Y&8){const ve=T.dynamicProps;for(let De=0;De<ve.length;De++){const Ce=ve[De],Pe=se[Ce],Ee=oe[Ce];(Ee!==Pe||Ce==="value")&&s(q,Ce,Pe,Ee,P,D)}}Y&1&&I.children!==T.children&&f(q,T.children)}else!Z&&V==null&&ce(q,se,oe,D,P);((ye=oe.onVnodeUpdated)||ee)&&pt(()=>{ye&&Ut(ye,D,T,I),ee&&vr(T,I,D,"updated")},H)},K=(I,T,D,H,P,F,Z)=>{for(let q=0;q<T.length;q++){const Y=I[q],V=T[q],ee=Y.el&&(Y.type===Wt||!ii(Y,V)||Y.shapeFlag&70)?h(Y.el):D;w(Y,V,ee,null,H,P,F,Z,!0)}},ce=(I,T,D,H,P)=>{if(T!==D){if(T!==He)for(const F in T)!yi(F)&&!(F in D)&&s(I,F,T[F],null,P,H);for(const F in D){if(yi(F))continue;const Z=D[F],q=T[F];Z!==q&&F!=="value"&&s(I,F,q,Z,P,H)}"value"in D&&s(I,"value",T.value,D.value,P)}},he=(I,T,D,H,P,F,Z,q,Y)=>{const V=T.el=I?I.el:o(""),ee=T.anchor=I?I.anchor:o("");let{patchFlag:se,dynamicChildren:oe,slotScopeIds:ye}=T;ye&&(q=q?q.concat(ye):ye),I==null?(i(V,D,H),i(ee,D,H),B(T.children||[],D,ee,P,F,Z,q,Y)):se>0&&se&64&&oe&&I.dynamicChildren?(K(I.dynamicChildren,oe,D,P,F,Z,q),(T.key!=null||P&&T===P.subTree)&&$f(I,T,!0)):L(I,T,D,ee,P,F,Z,q,Y)},ne=(I,T,D,H,P,F,Z,q,Y)=>{T.slotScopeIds=q,I==null?T.shapeFlag&512?P.ctx.activate(T,D,H,Z,Y):Se(T,D,H,P,F,Z,Y):Me(I,T,Y)},Se=(I,T,D,H,P,F,Z)=>{const q=I.component=ub(I,H,P);if(of(I)&&(q.ctx.renderer=Ve),lb(q,!1,Z),q.asyncDep){if(P&&P.registerDep(q,ae,Z),!I.el){const Y=q.subTree=dr(Si);x(null,Y,T,D)}}else ae(q,I,T,D,P,F,Z)},Me=(I,T,D)=>{const H=T.component=I.component;if(Yw(I,T,D))if(H.asyncDep&&!H.asyncResolved){fe(H,T,D);return}else H.next=T,tw(H.update),H.effect.dirty=!0,H.update();else T.el=I.el,H.vnode=T},ae=(I,T,D,H,P,F,Z)=>{const q=()=>{if(I.isMounted){let{next:ee,bu:se,u:oe,parent:ye,vnode:ve}=I;{const Mt=vf(I);if(Mt){ee&&(ee.el=ve.el,fe(I,ee,Z)),Mt.asyncDep.then(()=>{I.isUnmounted||q()});return}}let De=ee,Ce;xr(I,!1),ee?(ee.el=ve.el,fe(I,ee,Z)):ee=ve,se&&un(se),(Ce=ee.props&&ee.props.onVnodeBeforeUpdate)&&Ut(Ce,ye,ee,ve),xr(I,!0);const Pe=fa(I),Ee=I.subTree;I.subTree=Pe,w(Ee,Pe,h(Ee.el),mt(Ee),I,P,F),ee.el=Pe.el,De===null&&Xw(I,Pe.el),oe&&pt(oe,P),(Ce=ee.props&&ee.props.onVnodeUpdated)&&pt(()=>Ut(Ce,ye,ee,ve),P)}else{let ee;const{el:se,props:oe}=T,{bm:ye,m:ve,parent:De}=I,Ce=dn(T);if(xr(I,!1),ye&&un(ye),!Ce&&(ee=oe&&oe.onVnodeBeforeMount)&&Ut(ee,De,T),xr(I,!0),se&&Ge){const Pe=()=>{I.subTree=fa(I),Ge(se,I.subTree,I,P,null)};Ce?T.type.__asyncLoader().then(()=>!I.isUnmounted&&Pe()):Pe()}else{const Pe=I.subTree=fa(I);w(null,Pe,D,H,I,P,F),T.el=Pe.el}if(ve&&pt(ve,P),!Ce&&(ee=oe&&oe.onVnodeMounted)){const Pe=T;pt(()=>Ut(ee,De,Pe),P)}(T.shapeFlag&256||De&&dn(De.vnode)&&De.vnode.shapeFlag&256)&&I.a&&pt(I.a,P),I.isMounted=!0,T=D=H=null}},Y=I.effect=new Ds(q,vt,()=>Fs(V),I.scope),V=I.update=()=>{Y.dirty&&Y.run()};V.i=I,V.id=I.uid,xr(I,!0),V()},fe=(I,T,D)=>{T.component=I;const H=I.vnode.props;I.vnode=T,I.next=null,zw(I,T.props,H,D),Mw(I,T.children,D),yr(),Vu(I),wr()},L=(I,T,D,H,P,F,Z,q,Y=!1)=>{const V=I&&I.children,ee=I?I.shapeFlag:0,se=T.children,{patchFlag:oe,shapeFlag:ye}=T;if(oe>0){if(oe&128){we(V,se,D,H,P,F,Z,q,Y);return}else if(oe&256){re(V,se,D,H,P,F,Z,q,Y);return}}ye&8?(ee&16&&Ne(V,P,F),se!==V&&f(D,se)):ee&16?ye&16?we(V,se,D,H,P,F,Z,q,Y):Ne(V,P,F,!0):(ee&8&&f(D,""),ye&16&&B(se,D,H,P,F,Z,q,Y))},re=(I,T,D,H,P,F,Z,q,Y)=>{I=I||Lr,T=T||Lr;const V=I.length,ee=T.length,se=Math.min(V,ee);let oe;for(oe=0;oe<se;oe++){const ye=T[oe]=Y?sr(T[oe]):Ht(T[oe]);w(I[oe],ye,D,null,P,F,Z,q,Y)}V>ee?Ne(I,P,F,!0,!1,se):B(T,D,H,P,F,Z,q,Y,se)},we=(I,T,D,H,P,F,Z,q,Y)=>{let V=0;const ee=T.length;let se=I.length-1,oe=ee-1;for(;V<=se&&V<=oe;){const ye=I[V],ve=T[V]=Y?sr(T[V]):Ht(T[V]);if(ii(ye,ve))w(ye,ve,D,null,P,F,Z,q,Y);else break;V++}for(;V<=se&&V<=oe;){const ye=I[se],ve=T[oe]=Y?sr(T[oe]):Ht(T[oe]);if(ii(ye,ve))w(ye,ve,D,null,P,F,Z,q,Y);else break;se--,oe--}if(V>se){if(V<=oe){const ye=oe+1,ve=ye<ee?T[ye].el:H;for(;V<=oe;)w(null,T[V]=Y?sr(T[V]):Ht(T[V]),D,ve,P,F,Z,q,Y),V++}}else if(V>oe)for(;V<=se;)Q(I[V],P,F,!0),V++;else{const ye=V,ve=V,De=new Map;for(V=ve;V<=oe;V++){const qe=T[V]=Y?sr(T[V]):Ht(T[V]);qe.key!=null&&De.set(qe.key,V)}let Ce,Pe=0;const Ee=oe-ve+1;let Mt=!1,ti=0;const Lt=new Array(Ee);for(V=0;V<Ee;V++)Lt[V]=0;for(V=ye;V<=se;V++){const qe=I[V];if(Pe>=Ee){Q(qe,P,F,!0);continue}let gt;if(qe.key!=null)gt=De.get(qe.key);else for(Ce=ve;Ce<=oe;Ce++)if(Lt[Ce-ve]===0&&ii(qe,T[Ce])){gt=Ce;break}gt===void 0?Q(qe,P,F,!0):(Lt[gt-ve]=V+1,gt>=ti?ti=gt:Mt=!0,w(qe,T[gt],D,null,P,F,Z,q,Y),Pe++)}const St=Mt?Hw(Lt):Lr;for(Ce=St.length-1,V=Ee-1;V>=0;V--){const qe=ve+V,gt=T[qe],yt=qe+1<ee?T[qe+1].el:H;Lt[V]===0?w(null,gt,D,yt,P,F,Z,q,Y):Mt&&(Ce<0||V!==St[Ce]?z(gt,D,yt,2):Ce--)}}},z=(I,T,D,H,P=null)=>{const{el:F,type:Z,transition:q,children:Y,shapeFlag:V}=I;if(V&6){z(I.component.subTree,T,D,H);return}if(V&128){I.suspense.move(T,D,H);return}if(V&64){Z.move(I,T,D,Ve);return}if(Z===Wt){i(F,T,D);for(let se=0;se<Y.length;se++)z(Y[se],T,D,H);i(I.anchor,T,D);return}if(Z===ha){E(I,T,D);return}if(H!==2&&V&1&&q)if(H===0)q.beforeEnter(F),i(F,T,D),pt(()=>q.enter(F),P);else{const{leave:se,delayLeave:oe,afterLeave:ye}=q,ve=()=>i(F,T,D),De=()=>{se(F,()=>{ve(),ye&&ye()})};oe?oe(F,ve,De):De()}else i(F,T,D)},Q=(I,T,D,H=!1,P=!1)=>{const{type:F,props:Z,ref:q,children:Y,dynamicChildren:V,shapeFlag:ee,patchFlag:se,dirs:oe,cacheIndex:ye}=I;if(se===-2&&(P=!1),q!=null&&fs(q,null,D,I,!0),ye!=null&&(T.renderCache[ye]=void 0),ee&256){T.ctx.deactivate(I);return}const ve=ee&1&&oe,De=!dn(I);let Ce;if(De&&(Ce=Z&&Z.onVnodeBeforeUnmount)&&Ut(Ce,T,I),ee&6)We(I.component,D,H);else{if(ee&128){I.suspense.unmount(D,H);return}ve&&vr(I,null,T,"beforeUnmount"),ee&64?I.type.remove(I,T,D,Ve,H):V&&!V.hasOnce&&(F!==Wt||se>0&&se&64)?Ne(V,T,D,!1,!0):(F===Wt&&se&384||!P&&ee&16)&&Ne(Y,T,D),H&&pe(I)}(De&&(Ce=Z&&Z.onVnodeUnmounted)||ve)&&pt(()=>{Ce&&Ut(Ce,T,I),ve&&vr(I,null,T,"unmounted")},D)},pe=I=>{const{type:T,el:D,anchor:H,transition:P}=I;if(T===Wt){Oe(D,H);return}if(T===ha){S(I);return}const F=()=>{n(D),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(I.shapeFlag&1&&P&&!P.persisted){const{leave:Z,delayLeave:q}=P,Y=()=>Z(D,F);q?q(I.el,F,Y):Y()}else F()},Oe=(I,T)=>{let D;for(;I!==T;)D=d(I),n(I),I=D;n(T)},We=(I,T,D)=>{const{bum:H,scope:P,update:F,subTree:Z,um:q,m:Y,a:V}=I;Ku(Y),Ku(V),H&&un(H),P.stop(),F&&(F.active=!1,Q(Z,I,T,D)),q&&pt(q,T),pt(()=>{I.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Ne=(I,T,D,H=!1,P=!1,F=0)=>{for(let Z=F;Z<I.length;Z++)Q(I[Z],T,D,H,P)},mt=I=>{if(I.shapeFlag&6)return mt(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const T=d(I.anchor||I.el),D=T&&T[Bw];return D?d(D):T};let Ze=!1;const rt=(I,T,D)=>{I==null?T._vnode&&Q(T._vnode,null,null,!0):w(T._vnode||null,I,T,null,null,null,D),T._vnode=I,Ze||(Ze=!0,Vu(),nf(),Ze=!1)},Ve={p:w,um:Q,m:z,r:pe,mt:Se,mc:B,pc:L,pbc:K,n:mt,o:e};let Zt,Ge;return{render:rt,hydrate:Zt,createApp:kw(rt,Zt)}}function pa({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function xr({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function Ww(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $f(e,t,r=!1){const i=e.children,n=t.children;if(be(i)&&be(n))for(let s=0;s<i.length;s++){const a=i[s];let o=n[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[s]=sr(n[s]),o.el=a.el),!r&&o.patchFlag!==-2&&$f(a,o)),o.type===Un&&(o.el=a.el)}}function Hw(e){const t=e.slice(),r=[0];let i,n,s,a,o;const l=e.length;for(i=0;i<l;i++){const p=e[i];if(p!==0){if(n=r[r.length-1],e[n]<p){t[i]=n,r.push(i);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<p?s=o+1:a=o;p<e[r[s]]&&(s>0&&(t[i]=r[s-1]),r[s]=i)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function vf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vf(t)}function Ku(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Vw=Symbol.for("v-scx"),Fw=()=>pn(Vw),Ki={};function ca(e,t,r){return xf(e,t,r)}function xf(e,t,{immediate:r,deep:i,flush:n,once:s,onTrack:a,onTrigger:o}=He){if(t&&s){const A=t;t=(...R)=>{A(...R),C()}}const l=lt,p=A=>i===!0?A:or(A,i===!1?1:void 0);let f,h=!1,d=!1;if(ht(e)?(f=()=>e.value,h=Yr(e)):wi(e)?(f=()=>p(e),h=!0):be(e)?(d=!0,h=e.some(A=>wi(A)||Yr(A)),f=()=>e.map(A=>{if(ht(A))return A.value;if(wi(A))return p(A);if(_e(A))return lr(A,l,2)})):_e(e)?t?f=()=>lr(e,l,2):f=()=>(g&&g(),Ot(e,l,3,[y])):f=vt,t&&i){const A=f;f=()=>or(A())}let g,y=A=>{g=E.onStop=()=>{lr(A,l,4),g=E.onStop=void 0}},w;if(Wn)if(y=vt,t?r&&Ot(t,l,3,[f(),d?[]:void 0,y]):f(),n==="sync"){const A=Fw();w=A.__watcherHandles||(A.__watcherHandles=[])}else return vt;let v=d?new Array(e.length).fill(Ki):Ki;const x=()=>{if(!(!E.active||!E.dirty))if(t){const A=E.run();(i||h||(d?A.some((R,B)=>pr(R,v[B])):pr(A,v)))&&(g&&g(),Ot(t,l,3,[A,v===Ki?void 0:d&&v[0]===Ki?[]:v,y]),v=A)}else E.run()};x.allowRecurse=!!t;let _;n==="sync"?_=x:n==="post"?_=()=>pt(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),_=()=>Fs(x));const E=new Ds(f,vt,_),S=Ey(),C=()=>{E.stop(),S&&As(S.effects,E)};return t?r?x():v=E.run():n==="post"?pt(E.run.bind(E),l&&l.suspense):E.run(),w&&w.push(C),C}function jw(e,t,r){const i=this.proxy,n=et(e)?e.includes(".")?Sf(i,e):()=>i[e]:e.bind(i,i);let s;_e(t)?s=t:(s=t.handler,r=t);const a=Ti(this),o=xf(n,s.bind(i),r);return a(),o}function Sf(e,t){const r=t.split(".");return()=>{let i=e;for(let n=0;n<r.length&&i;n++)i=i[r[n]];return i}}function or(e,t=1/0,r){if(t<=0||!Le(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),t--,ht(e))or(e.value,t,r);else if(be(e))for(let i=0;i<e.length;i++)or(e[i],t,r);else if(kc(e)||qr(e))e.forEach(i=>{or(i,t,r)});else if(zc(e)){for(const i in e)or(e[i],t,r);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&or(e[i],t,r)}return e}const Lw=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Rr(t)}Modifiers`]||e[`${Mr(t)}Modifiers`];function qw(e,t,...r){if(e.isUnmounted)return;const i=e.vnode.props||He;let n=r;const s=t.startsWith("update:"),a=s&&Lw(i,t.slice(7));a&&(a.trim&&(n=r.map(f=>et(f)?f.trim():f)),a.number&&(n=r.map(is)));let o,l=i[o=ua(t)]||i[o=ua(Rr(t))];!l&&s&&(l=i[o=ua(Mr(t))]),l&&Ot(l,e,6,n);const p=i[o+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ot(p,e,6,n)}}function Ef(e,t,r=!1){const i=t.emitsCache,n=i.get(e);if(n!==void 0)return n;const s=e.emits;let a={},o=!1;if(!_e(e)){const l=p=>{const f=Ef(p,t,!0);f&&(o=!0,at(a,f))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(Le(e)&&i.set(e,null),null):(be(s)?s.forEach(l=>a[l]=null):at(a,s),Le(e)&&i.set(e,a),a)}function Nn(e,t){return!e||!zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,Mr(t))||Te(e,t))}function fa(e){const{type:t,vnode:r,proxy:i,withProxy:n,propsOptions:[s],slots:a,attrs:o,emit:l,render:p,renderCache:f,props:h,data:d,setupState:g,ctx:y,inheritAttrs:w}=e,v=bn(e);let x,_;try{if(r.shapeFlag&4){const S=n||i,C=S;x=Ht(p.call(C,S,f,h,g,d,y)),_=o}else{const S=t;x=Ht(S.length>1?S(h,{attrs:o,slots:a,emit:l}):S(h,null)),_=t.props?o:Gw(o)}}catch(S){_i.length=0,Mn(S,e,1),x=dr(Si)}let E=x;if(_&&w!==!1){const S=Object.keys(_),{shapeFlag:C}=E;S.length&&C&7&&(s&&S.some(Ts)&&(_=Kw(_,s)),E=Xr(E,_,!1,!0))}return r.dirs&&(E=Xr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(r.dirs):r.dirs),r.transition&&(E.transition=r.transition),x=E,bn(v),x}const Gw=e=>{let t;for(const r in e)(r==="class"||r==="style"||zn(r))&&((t||(t={}))[r]=e[r]);return t},Kw=(e,t)=>{const r={};for(const i in e)(!Ts(i)||!(i.slice(9)in t))&&(r[i]=e[i]);return r};function Yw(e,t,r){const{props:i,children:n,component:s}=e,{props:a,children:o,patchFlag:l}=t,p=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return i?Yu(i,a,p):!!a;if(l&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const d=f[h];if(a[d]!==i[d]&&!Nn(p,d))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Yu(i,a,p):!0:!!a;return!1}function Yu(e,t,r){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let n=0;n<i.length;n++){const s=i[n];if(t[s]!==e[s]&&!Nn(r,s))return!0}return!1}function Xw({vnode:e,parent:t},r){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=r,t=t.parent;else break}}const Zw=e=>e.__isSuspense;function Qw(e,t){t&&t.pendingBranch?be(e)?t.effects.push(...e):t.effects.push(e):rw(e)}const Wt=Symbol.for("v-fgt"),Un=Symbol.for("v-txt"),Si=Symbol.for("v-cmt"),ha=Symbol.for("v-stc"),_i=[];let wt=null;function cn(e=!1){_i.push(wt=e?null:[])}function Jw(){_i.pop(),wt=_i[_i.length-1]||null}let Ei=1;function Xu(e){Ei+=e,e<0&&wt&&(wt.hasOnce=!0)}function eb(e){return e.dynamicChildren=Ei>0?wt||Lr:null,Jw(),Ei>0&&wt&&wt.push(e),e}function fn(e,t,r,i,n,s){return eb(Tr(e,t,r,i,n,s,!0))}function tb(e){return e?e.__v_isVNode===!0:!1}function ii(e,t){return e.type===t.type&&e.key===t.key}const If=({key:e})=>e??null,hn=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?et(e)||ht(e)||_e(e)?{i:xt,r:e,k:t,f:!!r}:e:null);function Tr(e,t=null,r=null,i=0,n=null,s=e===Wt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&If(t),ref:t&&hn(t),scopeId:Bn,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:xt};return o?(Gs(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=et(r)?8:16),Ei>0&&!a&&wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&wt.push(l),l}const dr=rb;function rb(e,t=null,r=null,i=0,n=null,s=!1){if((!e||e===_w)&&(e=Si),tb(e)){const o=Xr(e,t,!0);return r&&Gs(o,r),Ei>0&&!s&&wt&&(o.shapeFlag&6?wt[wt.indexOf(e)]=o:wt.push(o)),o.patchFlag=-2,o}if(fb(e)&&(e=e.__vccOpts),t){t=ib(t);let{class:o,style:l}=t;o&&!et(o)&&(t.class=Rs(o)),Le(l)&&(Zc(l)&&!be(l)&&(l=at({},l)),t.style=Os(l))}const a=et(e)?1:Zw(e)?128:Pw(e)?64:Le(e)?4:_e(e)?2:0;return Tr(e,t,r,i,n,a,s,!0)}function ib(e){return e?Zc(e)||hf(e)?at({},e):e:null}function Xr(e,t,r=!1,i=!1){const{props:n,ref:s,patchFlag:a,children:o,transition:l}=e,p=t?ab(n||{},t):n,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&If(p),ref:t&&t.ref?r&&s?be(s)?s.concat(hn(t)):[s,hn(t)]:hn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Wt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xr(e.ssContent),ssFallback:e.ssFallback&&Xr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&sf(f,l.clone(f)),f}function nb(e=" ",t=0){return dr(Un,null,e,t)}function Ht(e){return e==null||typeof e=="boolean"?dr(Si):be(e)?dr(Wt,null,e.slice()):typeof e=="object"?sr(e):dr(Un,null,String(e))}function sr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xr(e)}function Gs(e,t){let r=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(be(t))r=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),Gs(e,n()),n._c&&(n._d=!0));return}else{r=32;const n=t._;!n&&!hf(t)?t._ctx=xt:n===3&&xt&&(xt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else _e(t)?(t={default:t,_ctx:xt},r=32):(t=String(t),i&64?(r=16,t=[nb(t)]):r=8);e.children=t,e.shapeFlag|=r}function ab(...e){const t={};for(let r=0;r<e.length;r++){const i=e[r];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=Rs([t.class,i.class]));else if(n==="style")t.style=Os([t.style,i.style]);else if(zn(n)){const s=t[n],a=i[n];a&&s!==a&&!(be(s)&&s.includes(a))&&(t[n]=s?[].concat(s,a):a)}else n!==""&&(t[n]=i[n])}return t}function Ut(e,t,r,i=null){Ot(e,t,7,[r,i])}const sb=pf();let ob=0;function ub(e,t,r){const i=e.type,n=(t?t.appContext:e.appContext)||sb,s={uid:ob++,vnode:e,type:i,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new xy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gf(i,n),emitsOptions:Ef(i,n),emit:null,emitted:null,propsDefaults:He,inheritAttrs:i.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=qw.bind(null,s),e.ce&&e.ce(s),s}let lt=null,$n,hs;{const e=Dc(),t=(r,i)=>{let n;return(n=e[r])||(n=e[r]=[]),n.push(i),s=>{n.length>1?n.forEach(a=>a(s)):n[0](s)}};$n=t("__VUE_INSTANCE_SETTERS__",r=>lt=r),hs=t("__VUE_SSR_SETTERS__",r=>Wn=r)}const Ti=e=>{const t=lt;return $n(e),e.scope.on(),()=>{e.scope.off(),$n(t)}},Zu=()=>{lt&&lt.scope.off(),$n(null)};function Cf(e){return e.vnode.shapeFlag&4}let Wn=!1;function lb(e,t=!1,r=!1){t&&hs(t);const{props:i,children:n}=e.vnode,s=Cf(e);Aw(e,i,s,t),Dw(e,n,r);const a=s?db(e,t):void 0;return t&&hs(!1),a}function db(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$w);const{setup:i}=r;if(i){const n=e.setupContext=i.length>1?cb(e):null,s=Ti(e);yr();const a=lr(i,e,0,[e.props,n]);if(wr(),s(),Tc(a)){if(a.then(Zu,Zu),t)return a.then(o=>{Qu(e,o,t)}).catch(o=>{Mn(o,e,0)});e.asyncDep=a}else Qu(e,a,t)}else kf(e,t)}function Qu(e,t,r){_e(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Le(t)&&(e.setupState=ef(t)),kf(e,r)}let Ju;function kf(e,t,r){const i=e.type;if(!e.render){if(!t&&Ju&&!i.render){const n=i.template||Ls(e).template;if(n){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=i,p=at(at({isCustomElement:s,delimiters:o},a),l);i.render=Ju(n,p)}}e.render=i.render||vt}{const n=Ti(e);yr();try{vw(e)}finally{wr(),n()}}}const pb={get(e,t){return ft(e,"get",""),e[t]}};function cb(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,pb),slots:e.slots,emit:e.emit,expose:t}}function Hn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ef(qy(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in bi)return bi[r](e)},has(t,r){return r in t||r in bi}})):e.proxy}function fb(e){return _e(e)&&"__vccOpts"in e}const hb=(e,t)=>Gy(e,t,Wn),mb="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gb="http://www.w3.org/2000/svg",yb="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,el=Kt&&Kt.createElement("template"),wb={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,i)=>{const n=t==="svg"?Kt.createElementNS(gb,e):t==="mathml"?Kt.createElementNS(yb,e):r?Kt.createElement(e,{is:r}):Kt.createElement(e);return e==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:e=>Kt.createTextNode(e),createComment:e=>Kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,i,n,s){const a=r?r.previousSibling:t.lastChild;if(n&&(n===s||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),r),!(n===s||!(n=n.nextSibling)););else{el.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const o=el.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},bb=Symbol("_vtc");function _b(e,t,r){const i=e[bb];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const tl=Symbol("_vod"),$b=Symbol("_vsh"),vb=Symbol(""),xb=/(^|;)\s*display\s*:/;function Sb(e,t,r){const i=e.style,n=et(r);let s=!1;if(r&&!n){if(t)if(et(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&mn(i,o,"")}else for(const a in t)r[a]==null&&mn(i,a,"");for(const a in r)a==="display"&&(s=!0),mn(i,a,r[a])}else if(n){if(t!==r){const a=i[vb];a&&(r+=";"+a),i.cssText=r,s=xb.test(r)}}else t&&e.removeAttribute("style");tl in e&&(e[tl]=s?i.display:"",e[$b]&&(i.display="none"))}const rl=/\s*!important$/;function mn(e,t,r){if(be(r))r.forEach(i=>mn(e,t,i));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const i=Eb(e,t);rl.test(r)?e.setProperty(Mr(i),r.replace(rl,""),"important"):e[i]=r}}const il=["Webkit","Moz","ms"],ma={};function Eb(e,t){const r=ma[t];if(r)return r;let i=Rr(t);if(i!=="filter"&&i in e)return ma[t]=i;i=Oc(i);for(let n=0;n<il.length;n++){const s=il[n]+i;if(s in e)return ma[t]=s}return t}const nl="http://www.w3.org/1999/xlink";function al(e,t,r,i,n,s=vy(t)){i&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(nl,t.slice(6,t.length)):e.setAttributeNS(nl,t,r):r==null||s&&!Mc(r)?e.removeAttribute(t):e.setAttribute(t,s?"":gr(r)?String(r):r)}function Ib(e,t,r,i){if(t==="innerHTML"||t==="textContent"){if(r==null)return;e[t]=r;return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const a=n==="OPTION"?e.getAttribute("value")||"":e.value,o=r==null?"":String(r);(a!==o||!("_value"in e))&&(e.value=o),r==null&&e.removeAttribute(t),e._value=r;return}let s=!1;if(r===""||r==null){const a=typeof e[t];a==="boolean"?r=Mc(r):r==null&&a==="string"?(r="",s=!0):a==="number"&&(r=0,s=!0)}try{e[t]=r}catch{}s&&e.removeAttribute(t)}function Hr(e,t,r,i){e.addEventListener(t,r,i)}function Cb(e,t,r,i){e.removeEventListener(t,r,i)}const sl=Symbol("_vei");function kb(e,t,r,i,n=null){const s=e[sl]||(e[sl]={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=Tb(t);if(i){const p=s[t]=Ob(i,n);Hr(e,o,p,l)}else a&&(Cb(e,o,a,l),s[t]=void 0)}}const ol=/(?:Once|Passive|Capture)$/;function Tb(e){let t;if(ol.test(e)){t={};let i;for(;i=e.match(ol);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mr(e.slice(2)),t]}let ga=0;const Ab=Promise.resolve(),zb=()=>ga||(Ab.then(()=>ga=0),ga=Date.now());function Ob(e,t){const r=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=r.attached)return;Ot(Rb(i,r.value),t,5,[i])};return r.value=e,r.attached=zb(),r}function Rb(e,t){if(be(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(i=>n=>!n._stopped&&i&&i(n))}else return t}const ul=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Db=(e,t,r,i,n,s)=>{const a=n==="svg";t==="class"?_b(e,i,a):t==="style"?Sb(e,r,i):zn(t)?Ts(t)||kb(e,t,r,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mb(e,t,i,a))?(Ib(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&al(e,t,i,a,s,t!=="value")):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),al(e,t,i,a))};function Mb(e,t,r,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&ul(t)&&_e(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return ul(t)&&et(r)?!1:t in e}const ll=e=>{const t=e.props["onUpdate:modelValue"]||!1;return be(t)?r=>un(t,r):t};function Bb(e){e.target.composing=!0}function dl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ya=Symbol("_assign"),Pb={created(e,{modifiers:{lazy:t,trim:r,number:i}},n){e[ya]=ll(n);const s=i||n.props&&n.props.type==="number";Hr(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;r&&(o=o.trim()),s&&(o=is(o)),e[ya](o)}),r&&Hr(e,"change",()=>{e.value=e.value.trim()}),t||(Hr(e,"compositionstart",Bb),Hr(e,"compositionend",dl),Hr(e,"change",dl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:i,trim:n,number:s}},a){if(e[ya]=ll(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?is(e.value):e.value,l=t??"";o!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===r||n&&e.value.trim()===l)||(e.value=l))}},Nb=["ctrl","shift","alt","meta"],Ub={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Nb.some(r=>e[`${r}Key`]&&!t.includes(r))},pl=(e,t)=>{const r=e._withMods||(e._withMods={}),i=t.join(".");return r[i]||(r[i]=(n,...s)=>{for(let a=0;a<t.length;a++){const o=Ub[t[a]];if(o&&o(n,t))return}return e(n,...s)})},Wb=at({patchProp:Db},wb);let cl;function Hb(){return cl||(cl=Nw(Wb))}const Vb=(...e)=>{const t=Hb().createApp(...e),{mount:r}=t;return t.mount=i=>{const n=jb(i);if(!n)return;const s=t._component;!_e(s)&&!s.render&&!s.template&&(s.template=n.innerHTML),n.innerHTML="";const a=r(n,!1,Fb(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},t};function Fb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jb(e){return et(e)?document.querySelector(e):e}const Tf=(e,t)=>{const r=e.__vccOpts||e;for(const[i,n]of t)r[i]=n;return r};/*!
 * ONNX Runtime Web v1.19.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ks=Object.defineProperty,Lb=Object.getOwnPropertyDescriptor,qb=Object.getOwnPropertyNames,Gb=Object.prototype.hasOwnProperty,Kb=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),j=(e,t)=>()=>(e&&(t=e(e=0)),t),Ai=(e,t)=>{for(var r in t)Ks(e,r,{get:t[r],enumerable:!0})},Yb=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of qb(t))!Gb.call(e,n)&&n!==r&&Ks(e,n,{get:()=>t[n],enumerable:!(i=Lb(t,n))||i.enumerable});return e},vn=e=>Yb(Ks({},"__esModule",{value:!0}),e),ni,rr,Fr,fl,Ys,Xs=j(()=>{ni=new Map,rr=[],Fr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=ni.get(e);if(i===void 0)ni.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=rr.indexOf(e);n!==-1&&rr.splice(n,1);for(let s=0;s<rr.length;s++)if(ni.get(rr[s]).priority<=r){rr.splice(s,0,e);return}rr.push(e)}return}throw new TypeError("not a valid backend")},fl=async e=>{let t=ni.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ys=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?rr:r,n,s=[],a=new Set;for(let l of i){let p=await fl(l);typeof p=="string"?s.push({name:l,err:p}):(n||(n=p),n===p&&a.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:p}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${p}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,p)=>p==="executionProviders"?o:Reflect.get(l,p)})]}}),Xb=j(()=>{Xs()}),Af,Zb=j(()=>{Af="1.19.0"}),wa,$t,zf=j(()=>{Zb(),wa="warning",$t={wasm:{},webgl:{},webgpu:{},versions:{common:Af},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wa=e}},get logLevel(){return wa}},Object.defineProperty($t,"logLevel",{enumerable:!0})}),Ue,Qb=j(()=>{zf(),Ue=$t}),Of,Rf,Jb=j(()=>{Of=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[3]):(n=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,p;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?p=[0,0,0,0]:typeof o.bias=="number"?p=[o.bias,o.bias,o.bias,o.bias]:(p=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(p[3]=o.bias[3]));let f=s*n,h=0,d=f,g=f*2,y=-1;a==="RGBA"?(h=0,d=f,g=f*2,y=f*3):a==="RGB"?(h=0,d=f,g=f*2):a==="RBG"&&(h=0,g=f,d=f*2);for(let w=0;w<s;w++)for(let v=0;v<n;v++){let x=(e.data[h++]-p[0])*l[0],_=(e.data[d++]-p[1])*l[1],E=(e.data[g++]-p[2])*l[2],S=y===-1?255:(e.data[y++]-p[3])*l[3];i.fillStyle="rgba("+x+","+_+","+E+","+S+")",i.fillRect(v,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Rf=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[1],a=e.dims[3]):(n=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,p,f;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?f=[0,0,0,0]:typeof l.bias=="number"?f=[l.bias,l.bias,l.bias,l.bias]:(f=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(f[3]=l.bias[3]));let h=s*n;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let d=4,g=0,y=1,w=2,v=3,x=0,_=h,E=h*2,S=-1;o==="RGBA"?(x=0,_=h,E=h*2,S=h*3):o==="RGB"?(x=0,_=h,E=h*2):o==="RBG"&&(x=0,E=h,_=h*2),i=r.createImageData(n,s);for(let C=0;C<s*n;g+=d,y+=d,w+=d,v+=d,C++)i.data[g]=(e.data[x++]-f[0])*p[0],i.data[y]=(e.data[_++]-f[1])*p[1],i.data[w]=(e.data[E++]-f[2])*p[2],i.data[v]=S===-1?255:(e.data[S++]-f[3])*p[3]}else throw new Error("Can not access image data");return i}}),Yi,Df,Mf,Bf,Pf,e_=j(()=>{Zs(),Yi=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},s,a;typeof n.mean=="number"?s=[n.mean,n.mean,n.mean,n.mean]:s=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?a=[n.bias,n.bias,n.bias,n.bias]:a=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,f=l==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),h=4,d=0,g=1,y=2,w=3,v=0,x=p,_=p*2,E=-1;o==="RGB"&&(h=3,d=0,g=1,y=2,w=-1),l==="RGBA"?E=p*3:l==="RBG"?(v=0,_=p,x=p*2):l==="BGR"&&(_=0,x=p,v=p*2);for(let S=0;S<p;S++,d+=h,y+=h,g+=h,w+=h)f[v++]=(e[d]+a[0])/s[0],f[x++]=(e[g]+a[1])/s[1],f[_++]=(e[y]+a[2])/s[2],E!==-1&&w!==-1&&(f[E++]=(e[w]+a[3])/s[3]);return l==="RGBA"?new zt("float32",f,[1,4,r,i]):new zt("float32",f,[1,3,r,i])},Df=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=f=>f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=l();f.width=e.width,f.height=e.height;let h=p(f);if(h!=null){let d=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(d=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=d,o.width=g}else o.tensorFormat="RGBA",o.height=d,o.width=g;h.drawImage(e,0,0),a=h.getImageData(0,0,g,d).data}else throw new Error("Can not access image data")}else if(i){let f,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,h=t.resizedWidth):(f=e.height,h=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=h,t!==void 0){let d=l();d.width=h,d.height=f;let g=p(d);if(g!=null)g.putImageData(e,0,0),a=g.getImageData(0,0,h,f).data;else throw new Error("Can not access image data")}else a=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=l();f.width=e.width,f.height=e.height;let h=p(f);if(h!=null){let d=e.height,g=e.width;return h.drawImage(e,0,0,g,d),a=h.getImageData(0,0,g,d).data,o.height=d,o.width=g,Yi(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((f,h)=>{let d=l(),g=p(d);if(!e||!g)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{d.width=y.width,d.height=y.height,g.drawImage(y,0,0,d.width,d.height);let w=g.getImageData(0,0,d.width,d.height);o.height=d.height,o.width=d.width,f(Yi(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Yi(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Mf=(e,t)=>{let{width:r,height:i,download:n,dispose:s}=t,a=[1,i,r,4];return new zt({location:"texture",type:"float32",texture:e,dims:a,download:n,dispose:s})},Bf=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new zt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:s})},Pf=(e,t,r)=>new zt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Cr,fi,ba,Nf,t_=j(()=>{Cr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array]]),fi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ba=!1,Nf=()=>{if(!ba){ba=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(Cr.set("int64",BigInt64Array),fi.set(BigInt64Array,"int64")),t&&(Cr.set("uint64",BigUint64Array),fi.set(BigUint64Array,"uint64")),r?(Cr.set("float16",Float16Array),fi.set(Float16Array,"float16")):Cr.set("float16",Uint16Array)}}}),Uf,Wf,r_=j(()=>{Zs(),Uf=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Wf=(e,t)=>{switch(e.location){case"cpu":return new zt(e.type,e.data,t);case"cpu-pinned":return new zt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new zt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new zt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),zt,Zs=j(()=>{Jb(),e_(),t_(),r_(),zt=class{constructor(e,t,r){Nf();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let a=Cr.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Cr.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array)throw new TypeError("Creating a float16 tensor from number array is not supported. Please use Uint16Array as data.");e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",a=e;else if(l==="boolean")i="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else{let l=fi.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=a,this.dataLocation="cpu"}let s=Uf(n);if(this.cpuData&&s!==this.cpuData.length)throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=s}static async fromImage(e,t){return Df(e,t)}static fromTexture(e,t){return Mf(e,t)}static fromGpuBuffer(e,t){return Bf(e,t)}static fromPinnedBuffer(e,t,r){return Pf(e,t,r)}toDataURL(e){return Of(this,e)}toImageData(e){return Rf(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Wf(this,e)}}}),ct,Qs=j(()=>{Zs(),ct=zt}),xn,_a,jt,Rt,Hf=j(()=>{zf(),xn=(e,t)=>{(typeof $t.trace>"u"?!$t.wasm.trace:!$t.trace)||console.timeStamp(`${e}::ORT::${t}`)},_a=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<r.length;s++){if(i&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),xn("CPU",a);return}r[s].includes("TRACE_FUNC")&&(i=!0)}},jt=e=>{(typeof $t.trace>"u"?!$t.wasm.trace:!$t.trace)||_a("BEGIN",e)},Rt=e=>{(typeof $t.trace>"u"?!$t.wasm.trace:!$t.trace)||_a("END",e)}}),Vf,i_=j(()=>{Xs(),Qs(),Hf(),Vf=class Ff{constructor(t){this.handler=t}async run(t,r,i){jt();let n={},s={};if(typeof t!="object"||t===null||t instanceof ct||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof ct)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);n[p]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(f.indexOf(h)!==-1){let d=r[h];(d===null||d instanceof ct)&&(p=!0,a=!1,n[h]=d)}if(p){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(a)for(let p of this.outputNames)n[p]=null;let o=await this.handler.run(t,n,s),l={};for(let p in o)if(Object.hasOwnProperty.call(o,p)){let f=o[p];f instanceof ct?l[p]=f:l[p]=new ct(f.type,f.data,f.dims)}return Rt(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){jt();let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,h=0,d=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(d=t.byteLength-h,typeof i=="number"){if(d=i,!Number.isSafeInteger(d))throw new RangeError("'byteLength' must be an integer.");if(d<=0||h+d>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-h}].`);if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(f,h,d)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await Ys(a),p=await o.createInferenceSessionHandler(s,l);return Rt(),new Ff(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),jf,n_=j(()=>{i_(),jf=Vf}),a_=j(()=>{}),s_=j(()=>{}),o_=j(()=>{}),u_=j(()=>{}),hl,Lf,l_=j(()=>{Xs(),Qs(),hl="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Lf=class qf{constructor(t,r,i){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=i}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let i=t.evalModel||"",n=t.optimizerModel||"",s=r||{},[a,o]=await Ys(s);if(a.createTrainingSessionHandler){let l=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,i,n,o);return new qf(l,!!t.optimizerModel,!!t.evalModel)}else throw new Error(hl)}typeNarrowingForRunStep(t,r,i,n,s){let a={},o={};if(typeof i!="object"||i===null||i instanceof ct||Array.isArray(i))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof ct)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let p of n){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof s=="object"&&s!==null)o=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(n);for(let h of r)if(f.indexOf(h)!==-1){let d=n[h];(d===null||d instanceof ct)&&(p=!0,l=!1,a[h]=d)}if(p){if(typeof s=="object"&&s!==null)o=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of t)if(typeof i[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(l)for(let p of r)a[p]=null;return[a,o]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let i in t)if(Object.hasOwnProperty.call(t,i)){let n=t[i];n instanceof ct?r[i]=n:r[i]=new ct(n.type,n.data,n.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,i){let[n,s]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,i),a=await this.handler.runTrainStep(t,n,s);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,i){if(this.hasEvalModel){let[n,s]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,i),a=await this.handler.runEvalStep(t,n,s);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let i=await this.getParametersSize(r);if(t.length!==4*i)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Gf,d_=j(()=>{l_(),Gf=Lf}),p_={};Ai(p_,{InferenceSession:()=>jf,TRACE:()=>xn,TRACE_FUNC_BEGIN:()=>jt,TRACE_FUNC_END:()=>Rt,Tensor:()=>ct,TrainingSession:()=>Gf,env:()=>Ue,registerBackend:()=>Fr});var Dt=j(()=>{Xb(),Qb(),n_(),Qs(),a_(),s_(),Hf(),o_(),u_(),d_()}),Js=j(()=>{}),Kf={};Ai(Kf,{default:()=>Yf});var $a,va,Yf,c_=j(()=>{var e;Ng(),Jr(),Vn(),$a="ort-wasm-proxy-worker",va=((e=globalThis.self)==null?void 0:e.name)===$a,va&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":eo(i.wasm).then(()=>{yo(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:s}=i;wo(s,n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:n}=i,s=An(n);postMessage({type:r,out:s});break}case"create":{let{model:n,options:s}=i;bo(n,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":_o(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:s,inputs:a,outputIndices:o,options:l}=i;$o(n,s,a,o,new Array(o.length).fill(null),l).then(p=>{p.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},xo([...a,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":vo(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Yf=va?null:t=>new Worker(t??Vr,{type:"module",name:$a})}),Xf={};Ai(Xf,{default:()=>Zf});var xa,Sa,Zf,f_=j(()=>{var e;Sa=(xa=import.meta.url,async function(t={}){function r(){return ae.buffer!=re.buffer&&Ve(),re}function i(){return ae.buffer!=re.buffer&&Ve(),we}function n(){return ae.buffer!=re.buffer&&Ve(),z}function s(){return ae.buffer!=re.buffer&&Ve(),Q}function a(){return ae.buffer!=re.buffer&&Ve(),pe}function o(){return ae.buffer!=re.buffer&&Ve(),Oe}function l(){return ae.buffer!=re.buffer&&Ve(),We}function p(){return ae.buffer!=re.buffer&&Ve(),Ze}var f,h,d=Object.assign({},t),g=new Promise((u,c)=>{f=u,h=c}),y=typeof window=="object",w=typeof importScripts=="function",v=w&&self.name=="em-pthread";d.mountExternalData=(u,c)=>{(d.Fb||(d.Fb=new Map)).set(u,c)},d.unmountExternalData=()=>{delete d.Fb};var x=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let _=()=>{let u=(m,b,$)=>(...k)=>{let M=Pt,N=b==null?void 0:b();k=m(...k);let G=b==null?void 0:b();return N!==G&&(m=G,$(N),b=$=null),Pt!=M?new Promise((J,de)=>{ea={resolve:J,reject:de}}):k},c=m=>async(...b)=>{var $;try{if(d.Eb)throw Error("Session already started");let k=d.Eb={bc:b[0],errors:[]},M=await m(...b);if(d.Eb!==k)throw Error("Session mismatch");($=d.Mb)==null||$.flush();let N=k.errors;if(0<N.length){let G=await Promise.all(N);if(G=G.filter(J=>J),0<G.length)throw Error(G.join(`
`))}return M}finally{d.Eb=null}};d._OrtCreateSession=u(d._OrtCreateSession,()=>d._OrtCreateSession,m=>d._OrtCreateSession=m),d._OrtRun=c(u(d._OrtRun,()=>d._OrtRun,m=>d._OrtRun=m)),d._OrtRunWithBinding=c(u(d._OrtRunWithBinding,()=>d._OrtRunWithBinding,m=>d._OrtRunWithBinding=m)),d._OrtBindInput=u(d._OrtBindInput,()=>d._OrtBindInput,m=>d._OrtBindInput=m),_=void 0};d.jsepInit=(u,c)=>{if(_==null||_(),u==="webgpu"){[d.Mb,d.Tb,d.Xb,d.Nb,d.Wb,d.jb,d.Yb,d.$b,d.Ub,d.Vb,d.Zb]=c;let m=d.Mb;d.jsepRegisterBuffer=(b,$,k,M)=>m.registerBuffer(b,$,k,M),d.jsepGetBuffer=b=>m.getBuffer(b),d.jsepCreateDownloader=(b,$,k)=>m.createDownloader(b,$,k),d.jsepOnReleaseSession=b=>{m.onReleaseSession(b)},d.jsepOnRunStart=b=>m.onRunStart(b)}};var E,S,C=Object.assign({},d),A="./this.program",R=(u,c)=>{throw c},B="";(y||w)&&(w?B=self.location.href:typeof document<"u"&&document.currentScript&&(B=document.currentScript.src),xa&&(B=xa),B=B.startsWith("blob:")?"":B.substr(0,B.replace(/[?#].*/,"").lastIndexOf("/")+1),w&&(S=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),E=(u,c,m)=>{var b=new XMLHttpRequest;b.open("GET",u,!0),b.responseType="arraybuffer",b.onload=()=>{b.status==200||b.status==0&&b.response?c(b.response):m()},b.onerror=m,b.send(null)});var X,K=console.log.bind(console),ce=console.error.bind(console),he=K,ne=ce;if(Object.assign(d,C),C=null,v){let u=function(c){try{var m=c.data,b=m.cmd;if(b==="load"){let $=[];self.onmessage=k=>$.push(k),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let k of $)u(k);self.onmessage=u};for(let k of m.handlers)d[k]&&!d[k].proxy||(d[k]=(...M)=>{postMessage({Lb:"callHandler",kc:k,args:M})},k=="print"&&(he=d[k]),k=="printErr"&&(ne=d[k]));ae=m.wasmMemory,Ve(),Se(m.wasmModule)}else if(b==="run"){na(m.pthread_ptr,0,0,1,0,0),Zn(m.pthread_ptr),Zg(),Eo(),Me||(vu(),Me=!0);try{Qg(m.start_routine,m.arg)}catch($){if($!="unwind")throw $}}else b==="cancel"?Nr()&&Hi(-1):m.target!=="setimmediate"&&(b==="checkMailbox"?Me&&Oi():b&&(ne(`worker: received unknown command ${b}`),ne(m)))}catch($){throw xu(),$}};var Se,Me=!1;ne=function(...c){c=c.join(" "),console.error(c)},self.alert=function(...c){postMessage({Lb:"alert",text:c.join(" "),mc:Nr()})},d.instantiateWasm=(c,m)=>new Promise(b=>{Se=$=>{$=new WebAssembly.Instance($,ee()),m($),b()}}),self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}d.wasmBinary&&(X=d.wasmBinary);var ae,fe,L,re,we,z,Q,pe,Oe,We,Ne,mt,Ze,rt=!1;function Ve(){var u=ae.buffer;d.HEAP8=re=new Int8Array(u),d.HEAP16=z=new Int16Array(u),d.HEAPU8=we=new Uint8Array(u),d.HEAPU16=Q=new Uint16Array(u),d.HEAP32=pe=new Int32Array(u),d.HEAPU32=Oe=new Uint32Array(u),d.HEAPF32=We=new Float32Array(u),d.HEAPF64=Ze=new Float64Array(u),d.HEAP64=Ne=new BigInt64Array(u),d.HEAPU64=mt=new BigUint64Array(u)}if(!v){if(!((ae=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof x))throw ne("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");Ve()}var Zt=[],Ge=[],I=[],T=0,D=null;function H(){if(--T==0&&D){var u=D;D=null,u()}}function P(u){throw ne(u="Aborted("+u+")"),rt=!0,L=1,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),h(u),u}var F,Z=u=>u.startsWith("data:application/octet-stream;base64,"),q=u=>u.startsWith("file://");function Y(u){if(u==F&&X)return new Uint8Array(X);if(S)return S(u);throw"both async and sync fetching of the wasm failed"}function V(u,c,m){return function(b){if(!X&&(y||w)){if(typeof fetch=="function"&&!q(b))return fetch(b,{credentials:"same-origin"}).then($=>{if(!$.ok)throw`failed to load wasm binary file at '${b}'`;return $.arrayBuffer()}).catch(()=>Y(b));if(E)return new Promise(($,k)=>{E(b,M=>$(new Uint8Array(M)),k)})}return Promise.resolve().then(()=>Y(b))}(u).then(b=>WebAssembly.instantiate(b,c)).then(m,b=>{ne(`failed to asynchronously prepare wasm: ${b}`),P(b)})}function ee(){return{a:{M:ye,za:oe,b:e0,$:To,z:Oo,pa:Ro,X:Mo,Z:Bo,qa:Po,na:No,ga:Uo,ma:Wo,J:Ho,Y:Vo,V:Fo,oa:jo,W:Lo,va:t0,D:r0,P:i0,O:a0,C:o0,s:u0,p:l0,E:d0,y:y0,Q:w0,ta:b0,ja:_0,T:$0,aa:v0,F:x0,ia:Zn,sa:S0,u:E0,B:k0,o:T0,m:z0,c:Yn,n:O0,k:M0,Aa:B0,r:P0,f:N0,v:U0,l:W0,g:H0,i:V0,j:F0,h:j0,e:L0,da:q0,ea:G0,fa:K0,ba:au,ca:su,S:Y0,d:X0,N:Z0,G:Q0,K:J0,w:ey,ra:ty,U:ry,t:uu,x:iy,L:ny,R:ay,ya:sy,xa:oy,ka:pu,la:cu,_:Lt,A:fu,I:hu,ha:mu,H:gu,a:ae,wa:Mt,ua:bu,q:dy}}}var se={849460:(u,c,m,b)=>{if(d===void 0||!d.Fb)return 1;if((u=Qe(u>>>0)).startsWith("./")&&(u=u.substring(2)),!(u=d.Fb.get(u)))return 2;if(b>>>=0,(c>>>=0)+(m>>>=0)>u.byteLength)return 3;try{return i().set(u.subarray(c,c+m),b>>>0),0}catch{return 4}},849961:()=>{d.Ub()},849992:()=>{d.Vb()},850021:()=>{d.Zb()},850046:u=>d.Tb(u),850079:u=>d.Xb(u),850111:(u,c,m)=>{d.Nb(u,c,m,!0)},850150:(u,c,m)=>{d.Nb(u,c,m)},850183:()=>typeof wasmOffsetConverter<"u",850240:u=>{d.jb("Abs",u,void 0)},850291:u=>{d.jb("Neg",u,void 0)},850342:u=>{d.jb("Floor",u,void 0)},850395:u=>{d.jb("Ceil",u,void 0)},850447:u=>{d.jb("Reciprocal",u,void 0)},850505:u=>{d.jb("Sqrt",u,void 0)},850557:u=>{d.jb("Exp",u,void 0)},850608:u=>{d.jb("Erf",u,void 0)},850659:u=>{d.jb("Sigmoid",u,void 0)},850714:(u,c,m)=>{d.jb("HardSigmoid",u,{alpha:c,beta:m})},850793:u=>{d.jb("Log",u,void 0)},850844:u=>{d.jb("Sin",u,void 0)},850895:u=>{d.jb("Cos",u,void 0)},850946:u=>{d.jb("Tan",u,void 0)},850997:u=>{d.jb("Asin",u,void 0)},851049:u=>{d.jb("Acos",u,void 0)},851101:u=>{d.jb("Atan",u,void 0)},851153:u=>{d.jb("Sinh",u,void 0)},851205:u=>{d.jb("Cosh",u,void 0)},851257:u=>{d.jb("Asinh",u,void 0)},851310:u=>{d.jb("Acosh",u,void 0)},851363:u=>{d.jb("Atanh",u,void 0)},851416:u=>{d.jb("Tanh",u,void 0)},851468:u=>{d.jb("Not",u,void 0)},851519:(u,c,m)=>{d.jb("Clip",u,{min:c,max:m})},851588:u=>{d.jb("Clip",u,void 0)},851640:(u,c)=>{d.jb("Elu",u,{alpha:c})},851698:u=>{d.jb("Relu",u,void 0)},851750:(u,c)=>{d.jb("LeakyRelu",u,{alpha:c})},851814:(u,c)=>{d.jb("ThresholdedRelu",u,{alpha:c})},851884:(u,c)=>{d.jb("Cast",u,{to:c})},851942:u=>{d.jb("Add",u,void 0)},851993:u=>{d.jb("Sub",u,void 0)},852044:u=>{d.jb("Mul",u,void 0)},852095:u=>{d.jb("Div",u,void 0)},852146:u=>{d.jb("Pow",u,void 0)},852197:u=>{d.jb("Equal",u,void 0)},852250:u=>{d.jb("Greater",u,void 0)},852305:u=>{d.jb("GreaterOrEqual",u,void 0)},852367:u=>{d.jb("Less",u,void 0)},852419:u=>{d.jb("LessOrEqual",u,void 0)},852478:(u,c,m,b,$)=>{d.jb("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},852637:(u,c,m,b,$)=>{d.jb("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},852795:(u,c,m,b,$)=>{d.jb("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},852953:(u,c,m,b,$)=>{d.jb("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},853112:(u,c,m,b,$)=>{d.jb("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},853270:(u,c,m,b,$)=>{d.jb("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},853427:(u,c,m,b,$)=>{d.jb("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},853584:(u,c,m,b,$)=>{d.jb("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},853745:(u,c,m,b,$)=>{d.jb("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},853909:(u,c,m,b,$)=>{d.jb("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},854073:u=>{d.jb("Where",u,void 0)},854126:(u,c,m)=>{d.jb("Transpose",u,{perm:c?Array.from(a().subarray(c>>>0,m>>>0)):[]})},854234:(u,c,m,b)=>{d.jb("DepthToSpace",u,{blocksize:c,mode:Qe(m),format:b?"NHWC":"NCHW"})},854367:(u,c,m,b)=>{d.jb("DepthToSpace",u,{blocksize:c,mode:Qe(m),format:b?"NHWC":"NCHW"})},854500:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O,ge)=>{d.jb("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[m],group:b,kernelShape:[$],pads:[k,M],strides:[N],wIsConst:()=>!!r()[J>>>0],outputPadding:de?Array.from(a().subarray(de>>>0,ke>>>0)):[],outputShape:Ae?Array.from(a().subarray(Ae>>>0,O>>>0)):[],activation:Qe(ge)})},854901:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O)=>{d.jb("ConvTranspose",u,{format:N?"NHWC":"NCHW",autoPad:c,dilations:Array.from(a().subarray(m>>>0,2+(m>>>0)>>>0)),group:b,kernelShape:Array.from(a().subarray($>>>0,2+($>>>0)>>>0)),pads:Array.from(a().subarray(k>>>0,4+(k>>>0)>>>0)),strides:Array.from(a().subarray(M>>>0,2+(M>>>0)>>>0)),wIsConst:()=>!!r()[G>>>0],outputPadding:J?Array.from(a().subarray(J>>>0,de>>>0)):[],outputShape:ke?Array.from(a().subarray(ke>>>0,Ae>>>0)):[],activation:Qe(O)})},855466:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O,ge)=>{d.jb("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[m],group:b,kernelShape:[$],pads:[k,M],strides:[N],wIsConst:()=>!!r()[J>>>0],outputPadding:de?Array.from(a().subarray(de>>>0,ke>>>0)):[],outputShape:Ae?Array.from(a().subarray(Ae>>>0,O>>>0)):[],activation:Qe(ge)})},855867:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O)=>{d.jb("ConvTranspose",u,{format:N?"NHWC":"NCHW",autoPad:c,dilations:Array.from(a().subarray(m>>>0,2+(m>>>0)>>>0)),group:b,kernelShape:Array.from(a().subarray($>>>0,2+($>>>0)>>>0)),pads:Array.from(a().subarray(k>>>0,4+(k>>>0)>>>0)),strides:Array.from(a().subarray(M>>>0,2+(M>>>0)>>>0)),wIsConst:()=>!!r()[G>>>0],outputPadding:J?Array.from(a().subarray(J>>>0,de>>>0)):[],outputShape:ke?Array.from(a().subarray(ke>>>0,Ae>>>0)):[],activation:Qe(O)})},856432:(u,c)=>{d.jb("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},856523:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O,ge,ze)=>{d.jb("AveragePool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:b,storage_order:$,dilations:[k,M],kernel_shape:[N,G],pads:[J,de,ke,Ae],strides:[O,ge]})},856807:(u,c)=>{d.jb("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},856898:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O,ge,ze)=>{d.jb("AveragePool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:b,storage_order:$,dilations:[k,M],kernel_shape:[N,G],pads:[J,de,ke,Ae],strides:[O,ge]})},857182:(u,c)=>{d.jb("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},857269:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O,ge,ze)=>{d.jb("MaxPool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:b,storage_order:$,dilations:[k,M],kernel_shape:[N,G],pads:[J,de,ke,Ae],strides:[O,ge]})},857549:(u,c)=>{d.jb("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},857636:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O,ge,ze)=>{d.jb("MaxPool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:b,storage_order:$,dilations:[k,M],kernel_shape:[N,G],pads:[J,de,ke,Ae],strides:[O,ge]})},857916:(u,c,m,b,$)=>{d.jb("Gemm",u,{alpha:c,beta:m,transA:b,transB:$})},858020:u=>{d.jb("MatMul",u,void 0)},858074:(u,c,m,b)=>{d.jb("ArgMax",u,{keepDims:!!c,selectLastIndex:!!m,axis:b})},858182:(u,c,m,b)=>{d.jb("ArgMin",u,{keepDims:!!c,selectLastIndex:!!m,axis:b})},858290:(u,c)=>{d.jb("Softmax",u,{axis:c})},858353:(u,c)=>{d.jb("Concat",u,{axis:c})},858413:(u,c,m,b,$)=>{d.jb("Split",u,{axis:c,numOutputs:m,splitSizes:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},858553:u=>{d.jb("Expand",u,void 0)},858607:(u,c)=>{d.jb("Gather",u,{axis:Number(c)})},858678:(u,c)=>{d.jb("GatherElements",u,{axis:Number(c)})},858757:(u,c,m,b,$,k,M,N,G,J,de)=>{d.jb("Resize",u,{antialias:c,axes:m?Array.from(a().subarray(m>>>0,b>>>0)):[],coordinateTransformMode:Qe($),cubicCoeffA:k,excludeOutside:M,extrapolationValue:N,keepAspectRatioPolicy:Qe(G),mode:Qe(J),nearestMode:Qe(de)})},859103:(u,c,m,b,$,k,M)=>{d.jb("Slice",u,{starts:c?Array.from(a().subarray(c>>>0,m>>>0)):[],ends:b?Array.from(a().subarray(b>>>0,$>>>0)):[],axes:k?Array.from(a().subarray(k>>>0,M>>>0)):[]})},859319:u=>{d.jb("Tile",u,void 0)},859371:(u,c,m)=>{d.jb("InstanceNormalization",u,{epsilon:c,format:m?"NHWC":"NCHW"})},859485:(u,c,m)=>{d.jb("InstanceNormalization",u,{epsilon:c,format:m?"NHWC":"NCHW"})},859599:u=>{d.jb("Range",u,void 0)},859652:(u,c)=>{d.jb("Einsum",u,{equation:Qe(c)})},859733:(u,c,m,b,$)=>{d.jb("Pad",u,{mode:c,value:m,pads:b?Array.from(a().subarray(b>>>0,$>>>0)):[]})},859860:(u,c,m,b,$,k)=>{d.jb("BatchNormalization",u,{epsilon:c,momentum:m,spatial:!!$,trainingMode:!!b,format:k?"NHWC":"NCHW"})},860029:(u,c,m,b,$,k)=>{d.jb("BatchNormalization",u,{epsilon:c,momentum:m,spatial:!!$,trainingMode:!!b,format:k?"NHWC":"NCHW"})},860198:(u,c,m)=>{d.jb("CumSum",u,{exclusive:Number(c),reverse:Number(m)})},860295:(u,c,m,b,$,k,M,N,G)=>{d.jb("Attention",u,{numHeads:c,isUnidirectional:m,maskFilterValue:b,scale:$,doRotary:k,qkvHiddenSizes:M?Array.from(a().subarray(Number(N)>>>0,Number(N)+M>>>0)):[],pastPresentShareBuffer:!!G})},860567:u=>{d.jb("BiasAdd",u,void 0)},860622:u=>{d.jb("BiasSplitGelu",u,void 0)},860683:u=>{d.jb("FastGelu",u,void 0)},860739:(u,c,m,b,$,k,M,N,G,J,de,ke,Ae,O,ge,ze)=>{d.jb("Conv",u,{format:ke?"NHWC":"NCHW",auto_pad:c,dilations:m?Array.from(a().subarray(m>>>0,b>>>0)):[],group:$,kernel_shape:k?Array.from(a().subarray(k>>>0,M>>>0)):[],pads:N?Array.from(a().subarray(N>>>0,G>>>0)):[],strides:J?Array.from(a().subarray(J>>>0,de>>>0)):[],w_is_const:()=>!!r()[Ae>>>0],activation:Qe(O),activation_params:ge?Array.from(l().subarray(ge>>>0,ze>>>0)):[]})},861235:u=>{d.jb("Gelu",u,void 0)},861287:(u,c,m,b)=>{d.jb("GroupQueryAttention",u,{numHeads:c,kvNumHeads:m,scale:b})},861400:(u,c,m,b)=>{d.jb("LayerNormalization",u,{axis:c,epsilon:m,simplified:!!b})},861511:(u,c,m,b)=>{d.jb("LayerNormalization",u,{axis:c,epsilon:m,simplified:!!b})},861622:(u,c,m,b,$,k)=>{d.jb("MatMulNBits",u,{k:c,n:m,accuracyLevel:b,bits:$,blockSize:k})},861749:(u,c,m,b,$,k)=>{d.jb("MultiHeadAttention",u,{numHeads:c,isUnidirectional:m,maskFilterValue:b,scale:$,doRotary:k})},861908:(u,c)=>{d.jb("QuickGelu",u,{alpha:c})},861972:(u,c,m,b,$)=>{d.jb("RotaryEmbedding",u,{interleaved:!!c,numHeads:m,rotaryEmbeddingDim:b,scale:$})},862111:(u,c,m)=>{d.jb("SkipLayerNormalization",u,{epsilon:c,simplified:!!m})},862213:u=>{d.Yb(u)},862247:(u,c)=>d.$b(u,c,d.Eb.bc,d.Eb.errors),862359:(u,c,m)=>{d.jb("SkipLayerNormalization",u,{epsilon:c,simplified:!!m})}};function oe(u,c,m){return eu(async()=>{await d.Wb(u,c,m)})}function ye(){return typeof wasmOffsetConverter<"u"}function ve(u){this.name="ExitStatus",this.message=`Program terminated with exit(${u})`,this.status=u}var De=u=>{u.terminate(),u.onmessage=()=>{}},Ce=u=>{St.length==0&&(Co(),Io(St[0]));var c=St.pop();if(!c)return 6;qe.push(c),yt[u.Ab]=c,c.Ab=u.Ab;var m={cmd:"run",start_routine:u.cc,arg:u.Pb,pthread_ptr:u.Ab};return c.postMessage(m,u.ic),0},Pe=0,Ee=(u,c,...m)=>{for(var b=2*m.length,$=oa(),k=sa(8*b),M=k>>>3,N=0;N<m.length;N++){var G=m[N];typeof G=="bigint"?(Ne[M+2*N]=1n,Ne[M+2*N+1]=G):(Ne[M+2*N]=0n,p()[M+2*N+1>>>0]=G)}return u=Su(u,0,b,k,c),Vi($),u};function Mt(u){if(v)return Ee(0,1,u);if(L=u,!(0<Pe)){for(var c of qe)De(c);for(c of St)De(c);St=[],qe=[],yt=[],rt=!0}R(u,new ve(u))}function ti(u){if(v)return Ee(1,0,u);Lt(u)}var Lt=u=>{if(L=u,v)throw ti(u),"unwind";Mt(u)},St=[],qe=[],gt=[],yt={},So=u=>{var c=u.Ab;delete yt[c],St.push(u),qe.splice(qe.indexOf(u),1),u.Ab=0,aa(c)};function Eo(){gt.forEach(u=>u())}var Io=u=>new Promise(c=>{u.onmessage=$=>{var k=($=$.data).cmd;if($.targetThread&&$.targetThread!=Nr()){var M=yt[$.targetThread];M?M.postMessage($,$.transferList):ne(`Internal error! Worker sent a message "${k}" to target pthread ${$.targetThread}, but that thread no longer exists!`)}else k==="checkMailbox"?Oi():k==="spawnThread"?Ce($):k==="cleanupThread"?So(yt[$.thread]):k==="killThread"?($=$.thread,k=yt[$],delete yt[$],De(k),aa($),qe.splice(qe.indexOf(k),1),k.Ab=0):k==="cancelThread"?yt[$.thread].postMessage({cmd:"cancel"}):k==="loaded"?(u.loaded=!0,c(u)):k==="alert"?alert(`Thread ${$.threadId}: ${$.text}`):$.target==="setimmediate"?u.postMessage($):k==="callHandler"?d[$.handler](...$.args):k&&ne(`worker sent an unknown command ${k}`)},u.onerror=$=>{throw ne(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var m,b=[];for(m of[])d.hasOwnProperty(m)&&b.push(m);u.postMessage({cmd:"load",handlers:b,wasmMemory:ae,wasmModule:fe})});function Co(){var u=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});St.push(u)}var zi=u=>{for(;0<u.length;)u.shift()(d)},Zg=()=>{var u=Nr(),c=o()[u+52>>>2>>>0];u=o()[u+56>>>2>>>0],Iu(c,c-u),Vi(c)},Qg=(u,c)=>{Pe=0,u=Cu(u,c),0<Pe?L=u:Hi(u)};class Jg{constructor(c){this.Ib=c-24}}function e0(u,c,m){var b=new Jg(u>>>=0);throw c>>>=0,m>>>=0,o()[b.Ib+16>>>2>>>0]=0,o()[b.Ib+4>>>2>>>0]=c,o()[b.Ib+8>>>2>>>0]=m,u}function ko(u,c,m,b){return v?Ee(2,1,u,c,m,b):To(u,c,m,b)}function To(u,c,m,b){if(u>>>=0,c>>>=0,m>>>=0,b>>>=0,x===void 0)return ne("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var $=[];return v&&$.length===0?ko(u,c,m,b):(u={cc:m,Ab:u,Pb:b,ic:$},v?(u.Lb="spawnThread",postMessage(u,$),0):Ce(u))}var Ao=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,zo=(u,c,m)=>{var b=(c>>>=0)+m;for(m=c;u[m]&&!(m>=b);)++m;if(16<m-c&&u.buffer&&Ao)return Ao.decode(u.buffer instanceof x?u.slice(c,m):u.subarray(c,m));for(b="";c<m;){var $=u[c++];if(128&$){var k=63&u[c++];if((224&$)==192)b+=String.fromCharCode((31&$)<<6|k);else{var M=63&u[c++];65536>($=(240&$)==224?(15&$)<<12|k<<6|M:(7&$)<<18|k<<12|M<<6|63&u[c++])?b+=String.fromCharCode($):($-=65536,b+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else b+=String.fromCharCode($)}return b},Qe=(u,c)=>(u>>>=0)?zo(i(),u,c):"";function Oo(u,c,m){return v?Ee(3,1,u,c,m):0}function Ro(u,c){if(v)return Ee(4,1,u,c)}var Ln=u=>{for(var c=0,m=0;m<u.length;++m){var b=u.charCodeAt(m);127>=b?c++:2047>=b?c+=2:55296<=b&&57343>=b?(c+=4,++m):c+=3}return c},Do=(u,c,m,b)=>{if(!(0<b))return 0;var $=m>>>=0;b=m+b-1;for(var k=0;k<u.length;++k){var M=u.charCodeAt(k);if(55296<=M&&57343>=M&&(M=65536+((1023&M)<<10)|1023&u.charCodeAt(++k)),127>=M){if(m>=b)break;c[m++>>>0]=M}else{if(2047>=M){if(m+1>=b)break;c[m++>>>0]=192|M>>6}else{if(65535>=M){if(m+2>=b)break;c[m++>>>0]=224|M>>12}else{if(m+3>=b)break;c[m++>>>0]=240|M>>18,c[m++>>>0]=128|M>>12&63}c[m++>>>0]=128|M>>6&63}c[m++>>>0]=128|63&M}}return c[m>>>0]=0,m-$},Br=(u,c,m)=>Do(u,i(),c,m);function Mo(u,c){if(v)return Ee(5,1,u,c)}function Bo(u,c,m){if(v)return Ee(6,1,u,c,m)}function Po(u,c,m){return v?Ee(7,1,u,c,m):0}function No(u,c){if(v)return Ee(8,1,u,c)}function Uo(u,c,m){if(v)return Ee(9,1,u,c,m)}function Wo(u,c,m,b){if(v)return Ee(10,1,u,c,m,b)}function Ho(u,c,m,b){if(v)return Ee(11,1,u,c,m,b)}function Vo(u,c,m,b){if(v)return Ee(12,1,u,c,m,b)}function Fo(u){if(v)return Ee(13,1,u)}function jo(u,c){if(v)return Ee(14,1,u,c)}function Lo(u,c,m){if(v)return Ee(15,1,u,c,m)}var qo,Qt,t0=()=>{P("")},Bt=u=>{for(var c="";i()[u>>>0];)c+=qo[i()[u++>>>0]];return c},qn={},Gn={};function qt(u,c,m={}){if(!("argPackAdvance"in c))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(b,$,k={}){var M=$.name;if(!b)throw new Qt(`type "${M}" must have a positive integer typeid pointer`);if(Gn.hasOwnProperty(b)){if(k.Rb)return;throw new Qt(`Cannot register type '${M}' twice`)}Gn[b]=$,qn.hasOwnProperty(b)&&($=qn[b],delete qn[b],$.forEach(N=>N()))}(u,c,m)}var Go=(u,c,m)=>{switch(c){case 1:return m?b=>r()[b>>>0]:b=>i()[b>>>0];case 2:return m?b=>n()[b>>>1>>>0]:b=>s()[b>>>1>>>0];case 4:return m?b=>a()[b>>>2>>>0]:b=>o()[b>>>2>>>0];case 8:return m?b=>Ne[b>>>3]:b=>mt[b>>>3];default:throw new TypeError(`invalid integer width (${c}): ${u}`)}};function r0(u,c,m){m>>>=0,qt(u>>>=0,{name:c=Bt(c>>>0),fromWireType:b=>b,toWireType:function(b,$){if(typeof $!="bigint"&&typeof $!="number")throw $=$===null?"null":(b=typeof $)=="object"||b==="array"||b==="function"?$.toString():""+$,new TypeError(`Cannot convert "${$}" to ${this.name}`);return typeof $=="number"&&($=BigInt($)),$},argPackAdvance:Jt,readValueFromPointer:Go(c,m,c.indexOf("u")==-1),Db:null})}var Jt=8;function i0(u,c,m,b){qt(u>>>=0,{name:c=Bt(c>>>0),fromWireType:function($){return!!$},toWireType:function($,k){return k?m:b},argPackAdvance:Jt,readValueFromPointer:function($){return this.fromWireType(i()[$>>>0])},Db:null})}var Kn=[],Gt=[];function Yn(u){9<(u>>>=0)&&--Gt[u+1]==0&&(Gt[u]=void 0,Kn.push(u))}var bt=u=>{if(!u)throw new Qt("Cannot use deleted val. handle = "+u);return Gt[u]},_t=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Kn.pop()||Gt.length;return Gt[c]=u,Gt[c+1]=1,c}};function Xn(u){return this.fromWireType(o()[u>>>2>>>0])}var n0={name:"emscripten::val",fromWireType:u=>{var c=bt(u);return Yn(u),c},toWireType:(u,c)=>_t(c),argPackAdvance:Jt,readValueFromPointer:Xn,Db:null};function a0(u){return qt(u>>>0,n0)}var s0=(u,c)=>{switch(c){case 4:return function(m){return this.fromWireType(l()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(p()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${u}`)}};function o0(u,c,m){m>>>=0,qt(u>>>=0,{name:c=Bt(c>>>0),fromWireType:b=>b,toWireType:(b,$)=>$,argPackAdvance:Jt,readValueFromPointer:s0(c,m),Db:null})}function u0(u,c,m,b,$){if(u>>>=0,m>>>=0,c=Bt(c>>>0),$===-1&&($=4294967295),$=N=>N,b===0){var k=32-8*m;$=N=>N<<k>>>k}var M=c.includes("unsigned")?function(N,G){return G>>>0}:function(N,G){return G};qt(u,{name:c,fromWireType:$,toWireType:M,argPackAdvance:Jt,readValueFromPointer:Go(c,m,b!==0),Db:null})}function l0(u,c,m){function b(k){var M=o()[k>>>2>>>0];return k=o()[k+4>>>2>>>0],new $(r().buffer,k,M)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];qt(u>>>=0,{name:m=Bt(m>>>0),fromWireType:b,argPackAdvance:Jt,readValueFromPointer:b},{Rb:!0})}function d0(u,c){u>>>=0;var m=(c=Bt(c>>>0))==="std::string";qt(u,{name:c,fromWireType:function(b){var $=o()[b>>>2>>>0],k=b+4;if(m)for(var M=k,N=0;N<=$;++N){var G=k+N;if(N==$||i()[G>>>0]==0){if(M=Qe(M,G-M),J===void 0)var J=M;else J+="\0",J+=M;M=G+1}}else{for(J=Array($),N=0;N<$;++N)J[N]=String.fromCharCode(i()[k+N>>>0]);J=J.join("")}return Nt(b),J},toWireType:function(b,$){$ instanceof ArrayBuffer&&($=new Uint8Array($));var k=typeof $=="string";if(!(k||$ instanceof Uint8Array||$ instanceof Uint8ClampedArray||$ instanceof Int8Array))throw new Qt("Cannot pass non-string to std::string");var M=m&&k?Ln($):$.length,N=Wi(4+M+1),G=N+4;if(o()[N>>>2>>>0]=M,m&&k)Br($,G,M+1);else if(k)for(k=0;k<M;++k){var J=$.charCodeAt(k);if(255<J)throw Nt(G),new Qt("String has UTF-16 code units that do not fit in 8 bits");i()[G+k>>>0]=J}else for(k=0;k<M;++k)i()[G+k>>>0]=$[k];return b!==null&&b.push(Nt,N),N},argPackAdvance:Jt,readValueFromPointer:Xn,Db(b){Nt(b)}})}var Ko=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,p0=(u,c)=>{for(var m=u>>1,b=m+c/2;!(m>=b)&&s()[m>>>0];)++m;if(32<(m<<=1)-u&&Ko)return Ko.decode(i().slice(u,m));for(m="",b=0;!(b>=c/2);++b){var $=n()[u+2*b>>>1>>>0];if($==0)break;m+=String.fromCharCode($)}return m},c0=(u,c,m)=>{if(m??(m=2147483647),2>m)return 0;var b=c;m=(m-=2)<2*u.length?m/2:u.length;for(var $=0;$<m;++$){var k=u.charCodeAt($);n()[c>>>1>>>0]=k,c+=2}return n()[c>>>1>>>0]=0,c-b},f0=u=>2*u.length,h0=(u,c)=>{for(var m=0,b="";!(m>=c/4);){var $=a()[u+4*m>>>2>>>0];if($==0)break;++m,65536<=$?($-=65536,b+=String.fromCharCode(55296|$>>10,56320|1023&$)):b+=String.fromCharCode($)}return b},m0=(u,c,m)=>{if(c>>>=0,m??(m=2147483647),4>m)return 0;var b=c;m=b+m-4;for(var $=0;$<u.length;++$){var k=u.charCodeAt($);if(55296<=k&&57343>=k&&(k=65536+((1023&k)<<10)|1023&u.charCodeAt(++$)),a()[c>>>2>>>0]=k,(c+=4)+4>m)break}return a()[c>>>2>>>0]=0,c-b},g0=u=>{for(var c=0,m=0;m<u.length;++m){var b=u.charCodeAt(m);55296<=b&&57343>=b&&++m,c+=4}return c};function y0(u,c,m){if(u>>>=0,c>>>=0,m=Bt(m>>>=0),c===2)var b=p0,$=c0,k=f0,M=N=>s()[N>>>1>>>0];else c===4&&(b=h0,$=m0,k=g0,M=N=>o()[N>>>2>>>0]);qt(u,{name:m,fromWireType:N=>{for(var G,J=o()[N>>>2>>>0],de=N+4,ke=0;ke<=J;++ke){var Ae=N+4+ke*c;ke!=J&&M(Ae)!=0||(de=b(de,Ae-de),G===void 0?G=de:(G+="\0",G+=de),de=Ae+c)}return Nt(N),G},toWireType:(N,G)=>{if(typeof G!="string")throw new Qt(`Cannot pass non-string to C++ string type ${m}`);var J=k(G),de=Wi(4+J+c);return o()[de>>>2>>>0]=J/c,$(G,de+4,J+c),N!==null&&N.push(Nt,de),de},argPackAdvance:Jt,readValueFromPointer:Xn,Db(N){Nt(N)}})}function w0(u,c){qt(u>>>=0,{Sb:!0,name:c=Bt(c>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var b0=()=>1;function _0(u){na(u>>>0,!w,1,!y,131072,!1),Eo()}var Yo=u=>{if(!rt)try{if(u(),!(0<Pe))try{v?Hi(L):Lt(L)}catch(c){c instanceof ve||c=="unwind"||R(1,c)}}catch(c){c instanceof ve||c=="unwind"||R(1,c)}};function Zn(u){u>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(a(),u>>>2,u).value.then(Oi),u+=128,Atomics.store(a(),u>>>2,1))}var Oi=()=>{var u=Nr();u&&(Zn(u),Yo(Eu))};function $0(u,c){(u>>>=0)==c>>>0?setTimeout(Oi):v?postMessage({targetThread:u,cmd:"checkMailbox"}):(u=yt[u])&&u.postMessage({cmd:"checkMailbox"})}var Qn=[];function v0(u,c,m,b,$){for(c>>>=0,b/=2,Qn.length=b,m=$>>>0>>>3,$=0;$<b;$++)Qn[$]=Ne[m+2*$]?Ne[m+2*$+1]:p()[m+2*$+1>>>0];return(c?se[c]:py[u])(...Qn)}function x0(u){u>>>=0,v?postMessage({cmd:"cleanupThread",thread:u}):So(yt[u])}function S0(u){}var Jn=(u,c)=>{var m=Gn[u];if(m===void 0)throw u=$u(u),m=Bt(u),Nt(u),new Qt(`${c} has unknown type ${m}`);return m},Xo=(u,c,m)=>{var b=[];return u=u.toWireType(b,m),b.length&&(o()[c>>>2>>>0]=_t(b)),u};function E0(u,c,m){return c>>>=0,m>>>=0,u=bt(u>>>0),c=Jn(c,"emval::as"),Xo(c,m,u)}var Ri=u=>{try{u()}catch(c){P(c)}},er=0,Pt=null,Zo=0,Di=[],Qo={},Jo={},I0=0,ea=null,C0=[];function eu(u){return function(c){if(!rt){if(er===0){var m=!1,b=!1;c(($=0)=>{if(!rt&&(Zo=$,m=!0,b)){er=2,Ri(()=>Au(Pt)),typeof Browser<"u"&&Browser.Jb.Qb&&Browser.Jb.resume(),$=!1;try{var k=function(){var G=a()[Pt+8>>>2>>>0];return G=ue[Jo[G]],--Pe,G()}()}catch(G){k=G,$=!0}var M=!1;if(!Pt){var N=ea;N&&(ea=null,($?N.reject:N.resolve)(k),M=!0)}if($&&!M)throw k}}),b=!0,m||(er=1,Pt=function(){var $=Wi(65548),k=$+12;o()[$>>>2>>>0]=k,o()[$+4>>>2>>>0]=k+65536,k=Di[0];var M=Qo[k];return M===void 0&&(M=I0++,Qo[k]=M,Jo[M]=k),k=M,a()[$+8>>>2>>>0]=k,$}(),typeof Browser<"u"&&Browser.Jb.Qb&&Browser.Jb.pause(),Ri(()=>ku(Pt)))}else er===2?(er=0,Ri(zu),Nt(Pt),Pt=null,C0.forEach(Yo)):P(`invalid state: ${er}`);return Zo}}(c=>{u().then(c)})}function k0(u){return u>>>=0,eu(()=>(u=bt(u)).then(_t))}var Mi=[];function T0(u,c,m,b){return m>>>=0,b>>>=0,(u=Mi[u>>>0])(null,c=bt(c>>>0),m,b)}var A0={},Bi=u=>{var c=A0[u];return c===void 0?Bt(u):c};function z0(u,c,m,b,$){return m>>>=0,b>>>=0,$>>>=0,(u=Mi[u>>>0])(c=bt(c>>>0),c[m=Bi(m)],b,$)}var tu=()=>typeof globalThis=="object"?globalThis:Function("return this")();function O0(u){return(u>>>=0)==0?_t(tu()):(u=Bi(u),_t(tu()[u]))}var R0=u=>{var c=Mi.length;return Mi.push(u),c},D0=(u,c)=>{for(var m=Array(u),b=0;b<u;++b)m[b]=Jn(o()[c+4*b>>>2>>>0],"parameter "+b);return m},ru=(u,c)=>Object.defineProperty(c,"name",{value:u});function M0(u,c,m){var b=(c=D0(u,c>>>0)).shift();u--;var $=`return function (obj, func, destructorsRef, args) {
`,k=0,M=[];m===0&&M.push("obj");for(var N=["retType"],G=[b],J=0;J<u;++J)M.push("arg"+J),N.push("argType"+J),G.push(c[J]),$+=`  var arg${J} = argType${J}.readValueFromPointer(args${k?"+"+k:""});
`,k+=c[J].argPackAdvance;return $+=`  var rv = ${m===1?"new func":"func.call"}(${M.join(", ")});
`,b.Sb||(N.push("emval_returnValue"),G.push(Xo),$+=`  return emval_returnValue(retType, destructorsRef, rv);
`),N.push($+`};
`),u=function(de){var ke=Function;if(!(ke instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof ke} which is not a function`);var Ae=ru(ke.name||"unknownFunctionName",function(){});return Ae.prototype=ke.prototype,Ae=new Ae,(de=ke.apply(Ae,de))instanceof Object?de:Ae}(N)(...G),m=`methodCaller<(${c.map(de=>de.name).join(", ")}) => ${b.name}>`,R0(ru(m,u))}function B0(u){return u=Bi(u>>>0),_t(d[u])}function P0(u,c){return c>>>=0,u=bt(u>>>0),c=bt(c),_t(u[c])}function N0(u){9<(u>>>=0)&&(Gt[u+1]+=1)}function U0(){return _t([])}function W0(u){u=bt(u>>>0);for(var c=Array(u.length),m=0;m<u.length;m++)c[m]=u[m];return _t(c)}function H0(u){return _t(Bi(u>>>0))}function V0(){return _t({})}function F0(u){for(var c=bt(u>>>=0);c.length;){var m=c.pop();c.pop()(m)}Yn(u)}function j0(u,c,m){c>>>=0,m>>>=0,u=bt(u>>>0),c=bt(c),m=bt(m),u[c]=m}function L0(u,c){return c>>>=0,u=(u=Jn(u>>>0,"_emval_take_value")).readValueFromPointer(c),_t(u)}function q0(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),a()[c>>>2>>>0]=u.getUTCSeconds(),a()[c+4>>>2>>>0]=u.getUTCMinutes(),a()[c+8>>>2>>>0]=u.getUTCHours(),a()[c+12>>>2>>>0]=u.getUTCDate(),a()[c+16>>>2>>>0]=u.getUTCMonth(),a()[c+20>>>2>>>0]=u.getUTCFullYear()-1900,a()[c+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,a()[c+28>>>2>>>0]=u}var Pr=u=>u%4==0&&(u%100!=0||u%400==0),iu=[0,31,60,91,121,152,182,213,244,274,305,335],nu=[0,31,59,90,120,151,181,212,243,273,304,334];function G0(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),a()[c>>>2>>>0]=u.getSeconds(),a()[c+4>>>2>>>0]=u.getMinutes(),a()[c+8>>>2>>>0]=u.getHours(),a()[c+12>>>2>>>0]=u.getDate(),a()[c+16>>>2>>>0]=u.getMonth(),a()[c+20>>>2>>>0]=u.getFullYear()-1900,a()[c+24>>>2>>>0]=u.getDay();var m=(Pr(u.getFullYear())?iu:nu)[u.getMonth()]+u.getDate()-1|0;a()[c+28>>>2>>>0]=m,a()[c+36>>>2>>>0]=-60*u.getTimezoneOffset(),m=new Date(u.getFullYear(),6,1).getTimezoneOffset();var b=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(m!=b&&u.getTimezoneOffset()==Math.min(b,m)),a()[c+32>>>2>>>0]=u}function K0(u){u>>>=0;var c=new Date(a()[u+20>>>2>>>0]+1900,a()[u+16>>>2>>>0],a()[u+12>>>2>>>0],a()[u+8>>>2>>>0],a()[u+4>>>2>>>0],a()[u>>>2>>>0],0),m=a()[u+32>>>2>>>0],b=c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset(),k=new Date(c.getFullYear(),0,1).getTimezoneOffset(),M=Math.min(k,$);return 0>m?a()[u+32>>>2>>>0]=+($!=k&&M==b):0<m!=(M==b)&&($=Math.max(k,$),c.setTime(c.getTime()+6e4*((0<m?M:$)-b))),a()[u+24>>>2>>>0]=c.getDay(),m=(Pr(c.getFullYear())?iu:nu)[c.getMonth()]+c.getDate()-1|0,a()[u+28>>>2>>>0]=m,a()[u>>>2>>>0]=c.getSeconds(),a()[u+4>>>2>>>0]=c.getMinutes(),a()[u+8>>>2>>>0]=c.getHours(),a()[u+12>>>2>>>0]=c.getDate(),a()[u+16>>>2>>>0]=c.getMonth(),a()[u+20>>>2>>>0]=c.getYear(),u=c.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function au(u,c,m,b,$,k,M){return v?Ee(16,1,u,c,m,b,$,k,M):-52}function su(u,c,m,b,$,k){if(v)return Ee(17,1,u,c,m,b,$,k)}function Y0(u,c,m,b){u>>>=0,c>>>=0,m>>>=0,b>>>=0;var $=new Date().getFullYear(),k=new Date($,0,1),M=new Date($,6,1);$=k.getTimezoneOffset();var N=M.getTimezoneOffset(),G=Math.max($,N);o()[u>>>2>>>0]=60*G,a()[c>>>2>>>0]=+($!=N),k=(u=J=>J.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(k),M=u(M),N<$?(Br(k,m,17),Br(M,b,17)):(Br(k,b,17),Br(M,m,17))}var ta=[],ou=(u,c)=>{ta.length=0;for(var m;m=i()[u++>>>0];){var b=m!=105;c+=(b&=m!=112)&&c%8?4:0,ta.push(m==112?o()[c>>>2>>>0]:m==106?Ne[c>>>3]:m==105?a()[c>>>2>>>0]:p()[c>>>3>>>0]),c+=b?8:4}return ta};function X0(u,c,m){return u>>>=0,c=ou(c>>>0,m>>>0),se[u](...c)}function Z0(u,c,m){return u>>>=0,c=ou(c>>>0,m>>>0),se[u](...c)}var Q0=()=>{},J0=()=>Date.now();function ey(u,c){return ne(Qe(u>>>0,c>>>0))}var uu,ty=()=>{throw Pe+=1,"unwind"};function ry(){return 4294901760}uu=()=>performance.timeOrigin+performance.now();var iy=()=>navigator.hardwareConcurrency;function ny(){return P("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ay(u){u>>>=0;var c=i().length;if(u<=c||4294901760<u)return!1;for(var m=1;4>=m;m*=2){var b=c*(1+.2/m);b=Math.min(b,u+100663296);var $=Math;b=Math.max(u,b);e:{$=($.min.call($,4294901760,b+(65536-b%65536)%65536)-ae.buffer.byteLength+65535)/65536;try{ae.grow($),Ve();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}var Pi=()=>(P("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),ri={},lu=u=>{u.forEach(c=>{Pi()})};function sy(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),lu(u),ri.Ob=Pi(),ri.ac=u,ri.Ob}function oy(u,c,m){if(u>>>=0,c>>>=0,ri.Ob==u)var b=ri.ac;else(b=Error().stack.toString().split(`
`))[0]=="Error"&&b.shift(),lu(b);for(var $=3;b[$]&&Pi()!=u;)++$;for(u=0;u<m&&b[u+$];++u)a()[c+4*u>>>2>>>0]=Pi();return u}var ra,ia={},du=()=>{if(!ra){var u,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:A};for(u in ia)ia[u]===void 0?delete c[u]:c[u]=ia[u];var m=[];for(u in c)m.push(`${u}=${c[u]}`);ra=m}return ra};function pu(u,c){if(v)return Ee(18,1,u,c);u>>>=0,c>>>=0;var m=0;return du().forEach((b,$)=>{var k=c+m;for($=o()[u+4*$>>>2>>>0]=k,k=0;k<b.length;++k)r()[$++>>>0]=b.charCodeAt(k);r()[$>>>0]=0,m+=b.length+1}),0}function cu(u,c){if(v)return Ee(19,1,u,c);u>>>=0,c>>>=0;var m=du();o()[u>>>2>>>0]=m.length;var b=0;return m.forEach($=>b+=$.length+1),o()[c>>>2>>>0]=b,0}function fu(u){return v?Ee(20,1,u):52}function hu(u,c,m,b){return v?Ee(21,1,u,c,m,b):52}function mu(u,c,m,b){return v?Ee(22,1,u,c,m,b):70}var uy=[null,[],[]];function gu(u,c,m,b){if(v)return Ee(23,1,u,c,m,b);c>>>=0,m>>>=0,b>>>=0;for(var $=0,k=0;k<m;k++){var M=o()[c>>>2>>>0],N=o()[c+4>>>2>>>0];c+=8;for(var G=0;G<N;G++){var J=i()[M+G>>>0],de=uy[u];J===0||J===10?((u===1?he:ne)(zo(de,0)),de.length=0):de.push(J)}$+=N}return o()[b>>>2>>>0]=$,0}var yu=[31,29,31,30,31,30,31,31,30,31,30,31],wu=[31,28,31,30,31,30,31,31,30,31,30,31],ly=(u,c)=>{r().set(u,c>>>0)};function bu(u,c,m,b){function $(O,ge,ze){for(O=typeof O=="number"?O.toString():O||"";O.length<ge;)O=ze[0]+O;return O}function k(O,ge){return $(O,ge,"0")}function M(O,ge){function ze(Ru){return 0>Ru?-1:0<Ru?1:0}var $r;return($r=ze(O.getFullYear()-ge.getFullYear()))===0&&($r=ze(O.getMonth()-ge.getMonth()))===0&&($r=ze(O.getDate()-ge.getDate())),$r}function N(O){switch(O.getDay()){case 0:return new Date(O.getFullYear()-1,11,29);case 1:return O;case 2:return new Date(O.getFullYear(),0,3);case 3:return new Date(O.getFullYear(),0,2);case 4:return new Date(O.getFullYear(),0,1);case 5:return new Date(O.getFullYear()-1,11,31);case 6:return new Date(O.getFullYear()-1,11,30)}}function G(O){var ge=O.Bb;for(O=new Date(new Date(O.Cb+1900,0,1).getTime());0<ge;){var ze=O.getMonth(),$r=(Pr(O.getFullYear())?yu:wu)[ze];if(!(ge>$r-O.getDate())){O.setDate(O.getDate()+ge);break}ge-=$r-O.getDate()+1,O.setDate(1),11>ze?O.setMonth(ze+1):(O.setMonth(0),O.setFullYear(O.getFullYear()+1))}return ze=new Date(O.getFullYear()+1,0,4),ge=N(new Date(O.getFullYear(),0,4)),ze=N(ze),0>=M(ge,O)?0>=M(ze,O)?O.getFullYear()+1:O.getFullYear():O.getFullYear()-1}u>>>=0,c>>>=0,m>>>=0,b>>>=0;var J=o()[b+40>>>2>>>0];for(var de in b={fc:a()[b>>>2>>>0],ec:a()[b+4>>>2>>>0],Gb:a()[b+8>>>2>>>0],Kb:a()[b+12>>>2>>>0],Hb:a()[b+16>>>2>>>0],Cb:a()[b+20>>>2>>>0],ub:a()[b+24>>>2>>>0],Bb:a()[b+28>>>2>>>0],nc:a()[b+32>>>2>>>0],dc:a()[b+36>>>2>>>0],hc:J?Qe(J):""},m=Qe(m),J={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})m=m.replace(new RegExp(de,"g"),J[de]);var ke="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ae="January February March April May June July August September October November December".split(" ");for(de in J={"%a":O=>ke[O.ub].substring(0,3),"%A":O=>ke[O.ub],"%b":O=>Ae[O.Hb].substring(0,3),"%B":O=>Ae[O.Hb],"%C":O=>k((O.Cb+1900)/100|0,2),"%d":O=>k(O.Kb,2),"%e":O=>$(O.Kb,2," "),"%g":O=>G(O).toString().substring(2),"%G":G,"%H":O=>k(O.Gb,2),"%I":O=>((O=O.Gb)==0?O=12:12<O&&(O-=12),k(O,2)),"%j":O=>{for(var ge=0,ze=0;ze<=O.Hb-1;ge+=(Pr(O.Cb+1900)?yu:wu)[ze++]);return k(O.Kb+ge,3)},"%m":O=>k(O.Hb+1,2),"%M":O=>k(O.ec,2),"%n":()=>`
`,"%p":O=>0<=O.Gb&&12>O.Gb?"AM":"PM","%S":O=>k(O.fc,2),"%t":()=>"	","%u":O=>O.ub||7,"%U":O=>k(Math.floor((O.Bb+7-O.ub)/7),2),"%V":O=>{var ge=Math.floor((O.Bb+7-(O.ub+6)%7)/7);if(2>=(O.ub+371-O.Bb-2)%7&&ge++,ge)ge==53&&((ze=(O.ub+371-O.Bb)%7)==4||ze==3&&Pr(O.Cb)||(ge=1));else{ge=52;var ze=(O.ub+7-O.Bb-1)%7;(ze==4||ze==5&&Pr(O.Cb%400-1))&&ge++}return k(ge,2)},"%w":O=>O.ub,"%W":O=>k(Math.floor((O.Bb+7-(O.ub+6)%7)/7),2),"%y":O=>(O.Cb+1900).toString().substring(2),"%Y":O=>O.Cb+1900,"%z":O=>{var ge=0<=(O=O.dc);return O=Math.abs(O)/60,(ge?"+":"-")+("0000"+(O/60*100+O%60)).slice(-4)},"%Z":O=>O.hc,"%%":()=>"%"},m=m.replace(/%%/g,"\0\0"),J)m.includes(de)&&(m=m.replace(new RegExp(de,"g"),J[de](b)));return de=function(O){var ge=Array(Ln(O)+1);return Do(O,ge,0,ge.length),ge}(m=m.replace(/\0\0/g,"%")),de.length>c?0:(ly(de,u),de.length-1)}function dy(u,c,m,b){return bu(u>>>0,c>>>0,m>>>0,b>>>0)}v||function(){for(var u=d.numThreads-1;u--;)Co();Zt.unshift(()=>{T++,function(c){v?c():Promise.all(St.map(Io)).then(c)}(()=>H())})}();for(var _u=Array(256),Ni=0;256>Ni;++Ni)_u[Ni]=String.fromCharCode(Ni);qo=_u,Qt=d.BindingError=class extends Error{constructor(u){super(u),this.name="BindingError"}},d.InternalError=class extends Error{constructor(u){super(u),this.name="InternalError"}},Gt.push(0,1,void 0,1,null,1,!0,1,!1,1),d.count_emval_handles=()=>Gt.length/2-5-Kn.length;var py=[Mt,ti,ko,Oo,Ro,Mo,Bo,Po,No,Uo,Wo,Ho,Vo,Fo,jo,Lo,au,su,pu,cu,fu,hu,mu,gu],ue=function(){function u(m,b){return ue=m.exports,ue=function(){var $=ue,k={};for(let[M,N]of Object.entries($))k[M]=typeof N=="function"?(...G)=>{Di.push(M);try{return N(...G)}finally{rt||(Di.pop(),Pt&&er===1&&Di.length===0&&(er=0,Pe+=1,Ri(Tu),typeof Fibers<"u"&&Fibers.oc()))}}:N;return k}(),ue=function(){var $=ue,k=N=>G=>N(G)>>>0,M=N=>()=>N()>>>0;return($=Object.assign({},$)).Ca=k($.Ca),$.fb=M($.fb),$.gb=k($.gb),$.emscripten_main_runtime_thread_id=M($.emscripten_main_runtime_thread_id),$.sb=k($.sb),$.tb=M($.tb),$}(),gt.push(ue.ib),Ge.unshift(ue.Ba),fe=b,H(),ue}var c=ee();if(T++,d.instantiateWasm)try{return d.instantiateWasm(c,u)}catch(m){ne(`Module.instantiateWasm callback failed with error: ${m}`),h(m)}return F||(F=d.locateFile?Z("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":d.locateFile?d.locateFile("ort-wasm-simd-threaded.jsep.wasm",B):B+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-Bi_tskx4.wasm",import.meta.url).href),function(m,b){var $=F;return X||typeof WebAssembly.instantiateStreaming!="function"||Z($)||q($)||typeof fetch!="function"?V($,m,b):fetch($,{credentials:"same-origin"}).then(k=>WebAssembly.instantiateStreaming(k,m).then(b,function(M){return ne(`wasm streaming compile failed: ${M}`),ne("falling back to ArrayBuffer instantiation"),V($,m,b)}))}(c,function(m){u(m.instance,m.module)}).catch(h),{}}(),$u=u=>($u=ue.Ca)(u),vu=()=>(vu=ue.Da)();d._OrtInit=(u,c)=>(d._OrtInit=ue.Ea)(u,c),d._OrtGetLastError=(u,c)=>(d._OrtGetLastError=ue.Fa)(u,c),d._OrtCreateSessionOptions=(u,c,m,b,$,k,M,N,G,J)=>(d._OrtCreateSessionOptions=ue.Ga)(u,c,m,b,$,k,M,N,G,J),d._OrtAppendExecutionProvider=(u,c)=>(d._OrtAppendExecutionProvider=ue.Ha)(u,c),d._OrtAddFreeDimensionOverride=(u,c,m)=>(d._OrtAddFreeDimensionOverride=ue.Ia)(u,c,m),d._OrtAddSessionConfigEntry=(u,c,m)=>(d._OrtAddSessionConfigEntry=ue.Ja)(u,c,m),d._OrtReleaseSessionOptions=u=>(d._OrtReleaseSessionOptions=ue.Ka)(u),d._OrtCreateSession=(u,c,m)=>(d._OrtCreateSession=ue.La)(u,c,m),d._OrtReleaseSession=u=>(d._OrtReleaseSession=ue.Ma)(u),d._OrtGetInputOutputCount=(u,c,m)=>(d._OrtGetInputOutputCount=ue.Na)(u,c,m),d._OrtGetInputName=(u,c)=>(d._OrtGetInputName=ue.Oa)(u,c),d._OrtGetOutputName=(u,c)=>(d._OrtGetOutputName=ue.Pa)(u,c),d._OrtFree=u=>(d._OrtFree=ue.Qa)(u),d._OrtCreateTensor=(u,c,m,b,$,k)=>(d._OrtCreateTensor=ue.Ra)(u,c,m,b,$,k),d._OrtGetTensorData=(u,c,m,b,$)=>(d._OrtGetTensorData=ue.Sa)(u,c,m,b,$),d._OrtReleaseTensor=u=>(d._OrtReleaseTensor=ue.Ta)(u),d._OrtCreateRunOptions=(u,c,m,b)=>(d._OrtCreateRunOptions=ue.Ua)(u,c,m,b),d._OrtAddRunConfigEntry=(u,c,m)=>(d._OrtAddRunConfigEntry=ue.Va)(u,c,m),d._OrtReleaseRunOptions=u=>(d._OrtReleaseRunOptions=ue.Wa)(u),d._OrtCreateBinding=u=>(d._OrtCreateBinding=ue.Xa)(u),d._OrtBindInput=(u,c,m)=>(d._OrtBindInput=ue.Ya)(u,c,m),d._OrtBindOutput=(u,c,m,b)=>(d._OrtBindOutput=ue.Za)(u,c,m,b),d._OrtClearBoundOutputs=u=>(d._OrtClearBoundOutputs=ue._a)(u),d._OrtReleaseBinding=u=>(d._OrtReleaseBinding=ue.$a)(u),d._OrtRunWithBinding=(u,c,m,b,$)=>(d._OrtRunWithBinding=ue.ab)(u,c,m,b,$),d._OrtRun=(u,c,m,b,$,k,M,N)=>(d._OrtRun=ue.bb)(u,c,m,b,$,k,M,N),d._OrtEndProfiling=u=>(d._OrtEndProfiling=ue.cb)(u),d._JsepOutput=(u,c,m)=>(d._JsepOutput=ue.db)(u,c,m),d._JsepGetNodeName=u=>(d._JsepGetNodeName=ue.eb)(u);var Ui,Nr=()=>(Nr=ue.fb)(),Wi=d._malloc=u=>(Wi=d._malloc=ue.gb)(u),Nt=d._free=u=>(Nt=d._free=ue.hb)(u),na=(u,c,m,b,$,k)=>(na=ue.kb)(u,c,m,b,$,k),xu=()=>(xu=ue.lb)(),Su=(u,c,m,b,$)=>(Su=ue.mb)(u,c,m,b,$),aa=u=>(aa=ue.nb)(u),Hi=u=>(Hi=ue.ob)(u),Eu=()=>(Eu=ue.pb)(),Iu=(u,c)=>(Iu=ue.qb)(u,c),Vi=u=>(Vi=ue.rb)(u),sa=u=>(sa=ue.sb)(u),oa=()=>(oa=ue.tb)(),Cu=d.dynCall_ii=(u,c)=>(Cu=d.dynCall_ii=ue.vb)(u,c),ku=u=>(ku=ue.wb)(u),Tu=()=>(Tu=ue.xb)(),Au=u=>(Au=ue.yb)(u),zu=()=>(zu=ue.zb)();function Ou(){0<T||(v?(f(d),v||zi(Ge),startWorker(d)):(zi(Zt),0<T||Ui||(Ui=!0,d.calledRun=!0,rt||(v||zi(Ge),f(d),v||zi(I)))))}return d.___start_em_js=862461,d.___stop_em_js=862683,d.stackSave=()=>oa(),d.stackRestore=u=>Vi(u),d.stackAlloc=u=>sa(u),d.UTF8ToString=Qe,d.stringToUTF8=Br,d.lengthBytesUTF8=Ln,D=function u(){Ui||Ou(),Ui||(D=u)},Ou(),g}),Zf=Sa,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&Sa()}),Vr,ml,gl,yl,Ea,Qf,wl,Jf,Vn=j(()=>{var e,t;Js(),Vr=import.meta.url??(typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(t=self.location)==null?void 0:t.href:void 0),ml=typeof location>"u"?void 0:location.origin,gl=(r,i)=>{try{let n=i??Vr;return(n?new URL(r,n):new URL(r)).origin===ml}catch{return!1}},yl=async r=>{let i=await(await fetch(r,{credentials:"same-origin"})).blob();return URL.createObjectURL(i)},Ea=(c_(),vn(Kf)).default,Qf=async()=>{if(!Vr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(gl(Vr))return[void 0,Ea()];let r=await yl(Vr);return[r,Ea(r)]},wl=(f_(),vn(Xf)).default,Jf=async(r,i,n)=>[void 0,wl]}),Ia,Xi,ai,Ca,bl,_l,eo,Je,Jr=j(()=>{Vn(),Xi=!1,ai=!1,Ca=!1,bl=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},_l=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},eo=async e=>{if(Xi)return Promise.resolve();if(ai)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ca)throw new Error("previous call to 'initializeWebAssembly()' failed.");ai=!0;let t=e.initTimeout,r=e.numThreads;if(!_l())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=bl();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,s=typeof n=="string"?n:void 0,a=n==null?void 0:n.mjs,o=(a==null?void 0:a.href)??a,l=n==null?void 0:n.wasm,p=(l==null?void 0:l.href)??l,f=e.wasmBinary,[h,d]=await Jf(o,s,r>1),g=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{g=!0,w()},t)})),y.push(new Promise((w,v)=>{let x={numThreads:r};f?x.wasmBinary=f:(p||s)&&(x.locateFile=(_,E)=>p??(s??E)+_),d(x).then(_=>{ai=!1,Xi=!0,Ia=_,w(),h&&URL.revokeObjectURL(h)},_=>{ai=!1,Ca=!0,v(_)})})),await Promise.race(y),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Je=()=>{if(Xi&&Ia)return Ia;throw new Error("WebAssembly is not initialized yet.")}}),tt,Sn,Fe,to=j(()=>{Jr(),tt=(e,t)=>{let r=Je(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Sn=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,s])=>{let a=t?t+n:n;if(typeof s=="object")Sn(s,a+".",r,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Fe=e=>{let t=Je(),r=t.stackSave();try{let i=t.stackAlloc(8);t._OrtGetLastError(i,i+4);let n=t.HEAP32[i/4],s=t.HEAPU32[i/4+1],a=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(r)}}}),eh,h_=j(()=>{Jr(),to(),eh=e=>{let t=Je(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=tt(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),r===0&&Fe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Sn(e.extra,"",new WeakSet,(a,o)=>{let l=tt(a,i),p=tt(o,i);t._OrtAddRunConfigEntry(r,l,p)!==0&&Fe(`Can't set a run config entry: ${a} - ${o}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(a=>t._free(a)),s}}}),$l,vl,xl,Sl,th,m_=j(()=>{Jr(),to(),$l=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},vl=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xl=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Sl=(e,t,r)=>{for(let i of t){let n=typeof i=="string"?i:i.name;switch(n){case"webnn":if(n="WEBNN",typeof i!="string"){let a=i==null?void 0:i.deviceType;if(a){let o=tt("deviceType",r),l=tt(a,r);Je()._OrtAddSessionConfigEntry(e,o,l)!==0&&Fe(`Can't set a session config entry: 'deviceType' - ${a}.`)}}break;case"webgpu":if(n="JS",typeof i!="string"){let a=i;if(a!=null&&a.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let o=tt("preferredLayout",r),l=tt(a.preferredLayout,r);Je()._OrtAddSessionConfigEntry(e,o,l)!==0&&Fe(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let s=tt(n,r);Je()._OrtAppendExecutionProvider(e,s)!==0&&Fe(`Can't append execution provider: ${n}.`)}},th=e=>{let t=Je(),r=0,i=[],n=e||{};xl(n);try{let s=$l(n.graphOptimizationLevel??"all"),a=vl(n.executionMode??"sequential"),o=typeof n.logId=="string"?tt(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let p=n.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let f=typeof n.optimizedModelFilePath=="string"?tt(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!n.enableCpuMemArena,!!n.enableMemPattern,a,!!n.enableProfiling,0,o,l,p,f),r===0&&Fe("Can't create session options."),n.executionProviders&&Sl(r,n.executionProviders,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let h=tt("enableGraphCapture",i),d=tt(n.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,h,d)!==0&&Fe(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[h,d]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof d!="number"||!Number.isInteger(d)||d<0)throw new Error(`free dimension override value must be a non-negative integer: ${d}`);let g=tt(h,i);t._OrtAddFreeDimensionOverride(r,g,d)!==0&&Fe(`Can't set a free dimension override: ${h} - ${d}.`)}return n.extra!==void 0&&Sn(n.extra,"",new WeakSet,(h,d)=>{let g=tt(h,i),y=tt(d,i);t._OrtAddSessionConfigEntry(r,g,y)!==0&&Fe(`Can't set a session config entry: ${h} - ${d}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r),i.forEach(a=>t._free(a)),s}}}),ms,kr,Ii,ro,En,io,gs,me=j(()=>{ms=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;default:throw new Error(`unsupported data type: ${e}`)}},kr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";default:throw new Error(`unsupported data type: ${e}`)}},Ii=e=>[void 0,4,1,1,2,2,4,8,void 0,1,2,8,4,8,void 0,void 0,void 0][e],ro=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},En=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},io=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool",gs=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;default:throw new Error(`unsupported data location: ${e}`)}}}),no,rh=j(()=>{Js(),no=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let p=l.byteLength;new Uint8Array(s,a,p).set(l),a+=p}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),El,Il,Cl,kl,ih,Tl,je,br=j(()=>{me(),El=["V","I","W","E","F"],Il=(e,t)=>{console.log(`[${El[e]},${new Date().toISOString()}]${t}`)},ih=(e,t)=>{Cl=e,kl=t},Tl=(e,t)=>{let r=En(e),i=En(Cl);r>=i&&Il(r,typeof t=="function"?t():t)},je=(...e)=>{kl&&Tl(...e)}}),nh,g_=j(()=>{me(),nh=(e,t)=>new(ro(t))(e)}),ao=j(()=>{}),ka,Zi,Qi,Al,zl,Ta,ys,Ol,ah,y_=j(()=>{br(),ao(),ka=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Zi=[],Qi=e=>Math.ceil(e/16)*16,Al=e=>{for(let t=0;t<Zi.length;t++){let r=Zi[t];if(e<=r)return r}return Math.ceil(e/16)*16},zl=1,Ta=()=>zl++,ys=async(e,t,r,i)=>{let n=Qi(r),s=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,n),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Ol=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.externalBuffers=new Map,this.capturedPendingBuffers=new Map;for(let[t]of ka)Zi.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,s=Qi(n),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(a.originalSize!==n)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),o.unmap();let p=this.backend.getCommandEncoder();this.backend.endComputePass(),p.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),je("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(o)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Qi(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=this.externalBuffers.get(r),i===void 0)throw new Error("previous buffer is not registered");if(e===r)return je("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`);this.externalBuffers.delete(r)}else i=Ta();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),this.externalBuffers.set(e,i),je("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){let t=this.externalBuffers.get(e);t!==void 0&&(this.storageCache.delete(t),this.externalBuffers.delete(e),je("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Al(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let a={id:Ta(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:e}),je("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return je("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await ys(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ka.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},ah=(...e)=>new Ol(...e)}),Rl,Be,Xe=j(()=>{Rl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Be=e=>new Rl(e)}),Dl,Zr,W,In,sh,so,oo,xe=j(()=>{Dl=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Zr=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(i<2||n<2)return;let o=Dl.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=i-o<0?1:e[i-o],p=n-o<0?1:t[n-o];if(l!==p&&l>1&&p>1)return;let f=Math.max(l,p);if(l&&p)a[s-o]=Math.max(l,p);else{if(f>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},W=class gn{static size(t){return gn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){n[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");n[s]=1,r/=t[s],s--}for(s--;s>=0;s--)n[s]=t[s];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return gn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return gn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=t[s]}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,s)=>n+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},In=class hi{static adjustPoolAttributes(t,r,i,n,s,a){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)hi.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],i[l],n[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return hi.computeShapeHelper(t,r,l,i,n,s,a,o),l}static computeConvOutputShape(t,r,i,n,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return hi.computeShapeHelper(!1,t,l,i,n,s,a,o),l}static computeShapeHelper(t,r,i,n,s,a,o,l){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(hi.adjustPadAndReturnShape(r[p+2],n[p],s[p],a[p],o,p,p+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,s,a,o,l){let p=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+n-t;return s[a]=Math.floor(l==="SAME_LOWER"?(f+1)/2:f/2),s[o]=f-s[a],Math.floor((t+f-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-p)/r+1)}},sh=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(n&&!Zr.isValidBroadcast(n,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},so=-34028234663852886e22,oo=34028234663852886e22}),Qr,Ji,Ye,ut,ie,Ke,Ar,jr,cr,te,en,U,le,uo,Ml,oh,Ci,$e=j(()=>{me(),xe(),Qr=64,Ji=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];default:throw new Error(`Unknown data type: ${e}`)}},Ye=(e,t=1)=>{let r=Ji(e,t);return typeof r=="string"?r:r[0]},ut=(e,t=1)=>{let r=Ji(e,t);return typeof r=="string"?r:r[1]},ie=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:W.computeStrides(r)})}),t},Ke=e=>e%4===0?4:e%2===0?2:1,Ar=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,jr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,cr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,te=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,en=(e,t,r,i,n)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,p=Ji(t,n),f=typeof p=="string"?p:p[1],h=typeof p=="string"?p:p[0],d={indices:l,value:f,storage:h,tensor:t},g=z=>typeof z=="string"?z:`${z}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=s?"uniforms.":"",v=`${w}${e}_shape`,x=`${w}${e}_strides`,_="";for(let z=0;z<a-1;z++)_+=`
    let dim${z} = current / ${te(x,z,a)};
    let rest${z} = current % ${te(x,z,a)};
    indices[${z}] = dim${z};
    current = rest${z};
    `;_+=`indices[${a-1}] = current;`;let E=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,S=z=>(y.offsetToIndices=!0,a<2?z:`o2i_${e}(${z})`),C=[];if(a>=2)for(let z=a-1;z>=0;z--)C.push(`${te(x,z,a)} * (indices[${z}])`);let A=a<2?"":`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${C.join("+")};
  }`,R=z=>(y.indicesToOffset=!0,a<2?z:`i2o_${e}(${z})`),B=(...z)=>a===0?"0u":`${d.indices}(${z.map(g).join(",")})`,X=(z,Q)=>a<2?`${z}`:`${te(z,Q,a)}`,K=(z,Q,pe)=>a<2?`${z}=${pe};`:`${te(z,Q,a)}=${pe};`,ce={},he=(z,Q)=>{y.broadcastedIndicesToOffset=!0;let pe=`${Q.name}broadcastedIndicesTo${e}Offset`;if(pe in ce)return`${pe}(${z})`;let Oe=[];for(let We=a-1;We>=0;We--){let Ne=Q.indicesGet("outputIndices",We+Q.rank-a);Oe.push(`${X(x,We)} * (${Ne} % ${X(v,We)})`)}return ce[pe]=`fn ${pe}(outputIndices: ${Q.type.indices}) -> u32 {
             return ${Oe.length>0?Oe.join("+"):"0u"};
           }`,`${pe}(${z})`},ne=(z,Q)=>(()=>{if(d.storage===d.value)return`${e}[${z}]=${Q};`;if(d.storage==="vec2<u32>"&&d.value==="i32")return`${e}[${z}]=vec2<u32>(u32(${Q}), select(0u, 0xFFFFFFFFu, ${Q} < 0));`;if(d.storage==="vec2<u32>"&&d.value==="u32")return`${e}[${z}]=vec2<u32>(u32(${Q}), 0u);`;if(d.storage==="u32"&&d.value==="vec4<bool>")return`${e}[${z}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Q}));`;throw new Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),Se=z=>(()=>{if(d.storage===d.value)return`${e}[${z}]`;if(d.storage==="vec2<u32>"&&d.value==="i32")return`i32(${e}[${z}].x)`;if(d.storage==="vec2<u32>"&&d.value==="u32")return`u32(${e}[${z}].x)`;if(d.storage==="u32"&&d.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${z}] & 0xFFu), bool(${e}[${z}] & 0xFF00u), bool(${e}[${z}] & 0xFF0000u), bool(${e}[${z}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),Me=a<2?"":`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${f} {
    return ${Se(`i2o_${e}(indices)`)};
  }`,ae=a<2?"":(()=>{let z=o.map(pe=>`d${pe}: u32`).join(", "),Q=o.map(pe=>`d${pe}`).join(", ");return`
  fn get_${e}(${z}) -> ${f} {
    return get_${e}ByIndices(${B(Q)});
  }`})(),fe=(...z)=>{if(z.length!==a)throw new Error(`indices length must be ${a}`);let Q=z.map(g).join(",");return a===0?Se("0u"):a===1?Se(Q[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${Q})`)},L=z=>a<2?Se(z):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${z})`),re=a<2?"":`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${f}) {
    ${ne(`i2o_${e}(indices)`,"value")}
  }`,we=a<2?"":(()=>{let z=o.map(pe=>`d${pe}: u32`).join(", "),Q=o.map(pe=>`d${pe}`).join(", ");return`
  fn set_${e}(${z}, value: ${f}) {
    set_${e}ByIndices(${B(Q)}, value);
  }`})();return{impl:()=>{let z=[],Q=!1;return y.offsetToIndices&&(z.push(E),Q=!0),y.indicesToOffset&&(z.push(A),Q=!0),y.broadcastedIndicesToOffset&&(Object.values(ce).forEach(pe=>z.push(pe)),Q=!0),y.set&&(z.push(we),Q=!0),y.setByIndices&&(z.push(re),Q=!0),y.get&&(z.push(ae),Q=!0),y.getByIndices&&(z.push(Me),Q=!0),!s&&Q&&z.unshift(`const ${v} = ${d.indices}(${r.join(",")});`,`const ${x} = ${d.indices}(${W.computeStrides(r).join(",")});`),z.join(`
`)},type:d,offsetToIndices:S,indicesToOffset:R,broadcastedIndicesToOffset:he,indices:B,indicesGet:X,indicesSet:K,set:(...z)=>{if(z.length!==a+1)throw new Error(`indices length must be ${a}`);let Q=z[a];if(typeof Q!="string")throw new Error("value must be string");let pe=z.slice(0,a).map(g).join(",");return a===0?ne("0u",Q):a===1?ne(pe[0],Q):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${pe}, ${Q})`)},setByOffset:ne,setByIndices:(z,Q)=>a<2?ne(z,Q):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${z}, ${Q});`),get:fe,getByOffset:Se,getByIndices:L,usage:i,name:e,strides:x,shape:v,rank:a}},U=(e,t,r,i=1)=>en(e,t,r,"input",i),le=(e,t,r,i=1)=>en(e,t,r,"output",i),uo=(e,t,r,i=1)=>en(e,t,r,"internal",i),Ml=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Qr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=n?"let global_idx = global_id.x; let local_idx = local_id.x;":`let global_idx = (workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
          workgroup_id.y * num_workgroups[0] + workgroup_id.x) * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},oh=(e,t)=>new Ml(e,t),Ci=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;n++){let s=r-1-n,a=e[s]||1;(t[t.length-1-n]||1)>1&&a===1&&i.unshift(s)}return i}}),Bl,Aa,Pl,Nl,Ft,uh,lh,ei=j(()=>{me(),xe(),Xe(),$e(),Bl=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},Aa=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,Pl=(e,t)=>W.sortBasedOnPerm(e,Aa(e.length,t)),Nl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)n.push(r.indicesSet("a",e[s],`i[${s}]`));return n.push("return a;}"),n.join(`
`)},Ft=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Aa(i,t),s=Pl(e.dims,n),a=le("output",r,s.length),o=U("a",r,i),l;if(n.length===2&&n[0]===1&&n[1]===0){let p=a.type.value,f=[16,16,1];l=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(o,a)}
  var<workgroup> tile : array<array<${p}, ${f[0]+1}>, ${f[0]}>;
  ${h.mainStart(f)}
    var x = workgroup_id.x * ${f[0]}u + local_id.x;
    var y = workgroup_id.y * ${f[0]}u + local_id.y;
    let width = uniforms.output_shape[0];
    let height = uniforms.output_shape[1];
    if (x < width && y < height) {
      tile[local_id.y][local_id.x] = ${o.getByOffset("y * width + x")};
    }
    workgroupBarrier();
    x = workgroup_id.y * ${f[0]}u + local_id.x;
    y = workgroup_id.x * ${f[0]}u + local_id.y;
    if (x < height && y < width) {
      ${a.setByOffset("y * height + x","tile[local_id.x][local_id.y]")}
    }
  }`}else l=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(o,a)}

  ${Nl(n,i,o,a)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${a.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${a.setByOffset("global_idx",o.getByIndices("aIndices"))}
  }`;return{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:p=>{let f=W.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ie(p[0].dims,s)]}},getShaderSource:l}},uh=(e,t)=>{Bl(e.inputs),e.compute(Ft(e.inputs[0],t.perm))},lh=e=>Be({perm:e.perm})}),Ul,Wl,Hl,Vl,Fl,jl,Ll,ql,Gl,Kl,Et,dh,ph,ch,fh,hh,mh,gh,yh,wh,bh,w_=j(()=>{me(),xe(),$e(),lo(),ei(),Ul={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Hl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Vl={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Fl=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},jl=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]},Ll=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[n++]):i.push(1);return i},ql=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Gl=(e,t)=>{let r=[];if(!ql(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Kl=(e,t,r,i,n,s,a)=>{let o=r[0].dims,l=W.size(s),p=W.size(a),f=U("_A",r[0].dataType,o),h=le("output",n,s),d=32,g=`
          var<workgroup> aBestValues : array<f32, ${d}>;
       `;return{name:e,shaderCache:t,getShaderSource:y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(f,h)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(d)}

          let outputIndex = global_idx / ${d};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Hl[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${d}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Ul[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${d}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wl[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Vl[i]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:p}]})}},Et=(e,t,r,i)=>{let n=e.inputs.length===1?r:ws(e.inputs,r),s=n.axes;s.length===0&&!n.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((g,y)=>y));let a=W.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],p=Gl(o,e.inputs[0].dims.length);p.length>0&&(l=e.compute(Ft(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],o=Fl(o.length,l.dims.length));let[f,h]=jl(l.dims,o),d=f;n.keepDims&&(d=Ll(f,a)),e.compute(Kl(t,{hint:n.cacheKey,inputDependencies:["type"]},[l],i,e.inputs[0].dataType,d,h),{inputs:[l]})},dh=(e,t)=>{Et(e,"ReduceMeanShared",t,"mean")},ph=(e,t)=>{Et(e,"ReduceL1Shared",t,"l1")},ch=(e,t)=>{Et(e,"ReduceL2Shared",t,"l2")},fh=(e,t)=>{Et(e,"ReduceLogSumExpShared",t,"logSumExp")},hh=(e,t)=>{Et(e,"ReduceMaxShared",t,"max")},mh=(e,t)=>{Et(e,"ReduceMinShared",t,"min")},gh=(e,t)=>{Et(e,"ReduceProdShared",t,"prod")},yh=(e,t)=>{Et(e,"ReduceSumShared",t,"sum")},wh=(e,t)=>{Et(e,"ReduceSumSquareShared",t,"sumSquare")},bh=(e,t)=>{Et(e,"ReduceLogSumShared",t,"logSum")}}),It,Yl,Cn,ws,Ct,Xl,Zl,Ql,Jl,ed,td,rd,id,nd,ad,kt,_h,$h,vh,xh,Sh,Eh,Ih,Ch,kh,Th,lo=j(()=>{me(),xe(),Xe(),$e(),w_(),It=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Yl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Cn=(e,t,r,i,n,s,a=!1,o=!1)=>{let l=[],p=r[0].dims,f=p.length,h=W.normalizeAxes(n,f),d=!o&&h.length===0;p.forEach((w,v)=>{d||h.indexOf(v)>=0?a&&l.push(1):l.push(w)});let g=l.length,y=W.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let v=[],x=U("_A",r[0].dataType,f),_=le("output",s,g),E=i(x,_,h),S=E[2];for(let C=0,A=0;C<f;C++)d||h.indexOf(C)>=0?(a&&A++,S=`for(var j${C}: u32 = 0; j${C} < ${p[C]}; j${C}++) {
                  ${E[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${x.indicesSet("input_indices",C,`j${C}`)}
                  ${S}
                }`):(v.push(`${x.indicesSet("input_indices",C,_.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables(x,_)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${v.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${S}
          ${E[3]}
          ${E.length===4?_.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ie(p,l)]})}},ws=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Be({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ct=(e,t,r,i)=>{let n=e.inputs,s=n.length===1?r:ws(n,r);e.compute(Cn(t,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&s.axes.length===0?Yl:i,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Xl=(e,t)=>{It(e.inputs),Ct(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Zl=(e,t)=>{It(e.inputs),Ct(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ql=(e,t)=>{It(e.inputs),Ct(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Jl=(e,t)=>{It(e.inputs),Ct(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ed=(e,t)=>{It(e.inputs),Ct(e,"ReduceMax",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},td=(e,t)=>{It(e.inputs),Ct(e,"ReduceMean",t,(r,i,n)=>{let s=1;for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},rd=(e,t)=>{It(e.inputs),Ct(e,"ReduceMin",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},id=(e,t)=>{It(e.inputs),Ct(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},nd=(e,t)=>{It(e.inputs),Ct(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ad=(e,t)=>{It(e.inputs),Ct(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},kt=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:n*=e[s];return n<32&&i>1024},_h=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?td(e,t):dh(e,t)},$h=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zl(e,t):ph(e,t)},vh=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ql(e,t):ch(e,t)},xh=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jl(e,t):fh(e,t)},Sh=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ed(e,t):hh(e,t)},Eh=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rd(e,t):mh(e,t)},Ih=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?id(e,t):gh(e,t)},Ch=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nd(e,t):yh(e,t)},kh=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ad(e,t):wh(e,t)},Th=(e,t)=>{kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xl(e,t):bh(e,t)}}),za,Ah,zh,bs,b_=j(()=>{me(),Xe(),lo(),za=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ah=(e,t)=>{za(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Cn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},zh=(e,t)=>{za(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Cn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},bs=e=>Be(e)}),sd,od,ud,ld,ki,dd,Oh,po=j(()=>{me(),ao(),$e(),sd=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and relative_position_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],p=r.dims[1],f=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,d=h,g=d;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of t.qkvHiddenSizes)if(E%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],d=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let y=p;if(h!==d)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+d+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(a){if(d!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==d/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=a.dims[3])}let v=y+w,x=-1,_=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");return{batchSize:l,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:v,maxSequenceLength:x,inputHiddenSize:f,hiddenSize:h,vHiddenSize:g,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},od=(e,t,r,i)=>{let n=Ke(i),s=64,a=i/n;a<s?s=1:a/8<64&&(s=Math.ceil(a/8));let o=Math.ceil(i/n/s),l=[{type:t.dataType,data:1/i},{type:12,data:a},{type:12,data:o}],p=Ye(t.dataType,n),f=ut(1,n),h=d=>{let g=le("x",t.dataType,t.dims,n),y=[{name:"d_inv",type:ut(t.dataType)},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${s}>;
  var<workgroup> thread_sum: array<f32, ${s}>;
  ${d.registerUniforms(y).declareVariables(g)}
  ${d.mainStart([s,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = workgroup_id.x * uniforms.d_comp + local_offset;

    var thread_max_vector = ${f}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${f}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(n){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${n}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${s}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${f}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${f}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(n){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${n}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${s}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${g.type.value}(uniforms.d_inv);
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${f}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${s};${p};${n}`},getShaderSource:h,getRunData:()=>({outputs:[],dispatchGroup:{x:r},programUniforms:l})}},ud=(e,t,r,i,n,s,a,o)=>{let l=o+s.kvSequenceLength,p=[s.batchSize,s.numHeads,s.sequenceLength,l],f=s.kvNumHeads===void 0&&e.outputCount>1,h=f?[s.batchSize,s.numHeads,l,s.headSize]:void 0,d=a.scale===0?1/Math.sqrt(s.headSize):a.scale,g=Ke(s.headSize),y=s.headSize/g,w=12,v={x:Math.ceil(l/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},x=[{type:12,data:s.sequenceLength},{type:12,data:y},{type:12,data:l},{type:12,data:s.numHeads},{type:1,data:d},{type:12,data:o},{type:12,data:s.kvSequenceLength}],_=["type","type"];i&&_.push("type"),n&&_.push("type");let E=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&E.push({dims:h,dataType:t.dataType,gpuDataType:0});let S=C=>{let A=U("q",t.dataType,t.dims,g),R=U("key",r.dataType,r.dims,g),B=[A,R];if(i){let ne=U("past_key",i.dataType,i.dims,g);B.push(ne)}n&&B.push(U("relative_position_bias",n.dataType,n.dims));let X=le("output",t.dataType,p),K=[X];f&&K.push(le("present_key",t.dataType,h,g));let ce=ut(1,g),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${A.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${A.type.storage}, ${w*w}>;
  ${C.registerUniforms(he).declareVariables(...B,...K)}
  ${C.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${i&&f?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${f?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${ce}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${i&&f?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${f?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${ce}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${X.type.value} (sum * uniforms.alpha) + ${n?"relative_position_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${g};${n!==void 0};${i!==void 0};${e.outputCount}`,inputDependencies:_},getRunData:()=>({outputs:E,dispatchGroup:v,programUniforms:x}),getShaderSource:S}},ld=(e,t,r,i,n,s)=>{let a=s+n.kvSequenceLength,o=n.nReps?n.nReps:1,l=n.vHiddenSize*o,p=n.kvNumHeads==null&&e.outputCount>1,f=p?[n.batchSize,n.numHeads,a,n.headSize]:void 0,h=[n.batchSize,n.sequenceLength,l],d=12,g={x:Math.ceil(n.vHeadSize/d),y:Math.ceil(n.sequenceLength/d),z:n.batchSize*n.numHeads},y=[{type:12,data:n.sequenceLength},{type:12,data:a},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:l},{type:12,data:s},{type:12,data:n.kvSequenceLength}],w=i?["type","type","type"]:["type","type"],v=[{dims:h,dataType:t.dataType,gpuDataType:0}];p&&v.push({dims:f,dataType:t.dataType,gpuDataType:0});let x=_=>{let E=U("probs",t.dataType,t.dims),S=U("v",r.dataType,r.dims),C=[E,S];i&&C.push(U("past_value",i.dataType,i.dims));let A=[le("output",t.dataType,h)];p&&A.push(le("present_value",t.dataType,f));let R=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${d}u;
  var<workgroup> tileQ: array<${E.type.value}, ${d*d}>;
  var<workgroup> tileK: array<${E.type.value}, ${d*d}>;
  ${_.registerUniforms(R).declareVariables(...C,...A)}
  ${_.mainStart([d,d,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${i&&p?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${p?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${i&&p?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${p?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e.outputCount}`,inputDependencies:w},getRunData:()=>({outputs:v,dispatchGroup:g,programUniforms:y}),getShaderSource:x}},ki=(e,t,r,i,n,s,a,o,l,p,f)=>{let h=e.outputCount,d=p.kvNumHeads!==void 0||h>1?p.pastSequenceLength:0,g=d+p.kvSequenceLength,y=p.kvNumHeads===void 0&&h>1&&a?[t,r,a]:[t,r];l&&y.push(l);let w=e.compute(ud(e,t,r,h>1?a:void 0,l,p,f,d),{inputs:y,outputs:p.kvNumHeads===void 0&&h>1?[-1,1]:[-1]})[0];e.compute(od(e,w,p.batchSize*p.numHeads*p.sequenceLength,g),{inputs:[w],outputs:[]});let v=p.kvNumHeads===void 0&&h>1&&o?[w,i,o]:[w,i];e.compute(ld(e,w,i,h>1&&o?o:void 0,p,d),{inputs:v,outputs:p.kvNumHeads===void 0&&h>1?[0,2]:[0]})},dd=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=h=>{let d=le("output_q",l[0].dataType,r),g=le("output_k",l[0].dataType,r),y=le("output_v",l[0].dataType,r),w=U("input",l[0].dataType,l[0].dims),v=U("weight",l[1].dataType,l[1].dims),x=U("bias",l[2].dataType,l[2].dims),_=w.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${_}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${_}, ${a*a}>;
  var<workgroup> tileWeightK: array<${_}, ${a*a}>;
  var<workgroup> tileWeightV: array<${_}, ${a*a}>;
  ${h.registerUniforms(E).declareVariables(w,v,x,d,g,y)}
  ${h.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:p}),getShaderSource:f},{inputs:l,outputs:[-1,-1,-1]})},Oh=(e,t)=>{let r=sd(e.inputs,t),[i,n,s]=dd(e,r);return ki(e,i,n,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),pd,cd,fd,Rh,__=j(()=>{Dt(),me(),xe(),Xe(),$e(),pd=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,s)=>{let a=n.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},cd=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,s=e[0].dims,a=i?Ke(s[s.length-1]):1,o=n==="NHWC"&&s.length>1?a:1,l=W.size(s)/a,p=i,f=p?s.length:s,h=U("x",e[0].dataType,e[0].dims,a),d=U("scale",e[1].dataType,e[1].dims,o),g=U("bias",e[2].dataType,e[2].dims,o),y=U("inputMean",e[3].dataType,e[3].dims,o),w=U("inputVar",e[4].dataType,e[4].dims,o),v=le("y",e[0].dataType,f,a),x=()=>{let E="";if(i)E=`let cOffset = ${s.length===1?"0u":n==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(n==="NCHW")E=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${d.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<d.rank;S++)E+=`cIndices[${S}] = outputIndices[${S}];`;E+=`let cOffset = ${d.indicesToOffset("cIndices")};`}return E},_=E=>`
  const epsilon = ${r};
  ${E.registerUniform("outputSize","u32").declareVariables(h,d,g,y,w,v)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${v.offsetToIndices(`global_idx * ${a}`)};
    ${x()}
    let scale = ${d.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${v.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${a}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p?[{type:12,data:l},...ie(s)]:[{type:12,data:l}]})}},fd=e=>Be(e),Rh=(e,t)=>{let{inputs:r,outputCount:i}=e,n=fd({...t,outputCount:i});if(Ue.webgpu.validateInputContent&&pd(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(cd(r,n))}}),hd,md,Dh,$_=j(()=>{xe(),$e(),hd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},md=e=>{let t=e[0].dims,r=e[0].dims[2],i=W.size(t)/4,n=e[0].dataType,s=U("input",n,t,4),a=U("bias",n,[r],4),o=U("residual",n,t,4),l=le("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(s,a,o,l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Dh=e=>{hd(e.inputs),e.compute(md(e.inputs))}}),gd,Ie,Mh,Bh,Ph,Nh,Uh,Wh,Hh,Vh,Fh,yd,jh,Lh,qh,Gh,mi,Kh,yn,Yh,Xh,Zh,Qh,Jh,em,tm,rm,im,nm,am,sm,om,um,lm,dm,Oa,pm,_s,$s,cm,fm,hm,wd,bd,mm,co=j(()=>{me(),xe(),Xe(),$e(),gd=(e,t,r,i,n,s)=>{let a=Math.ceil(t/4),o="";typeof n=="string"?o=`${n}(a)`:o=n("a");let l=U("inputData",r,[a],4),p=le("outputData",i,[a],4);return`
      ${e.registerUniform("vec_size","u32").declareVariables(l,p)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",o)}
  }`},Ie=(e,t,r,i,n,s=e.dataType)=>({name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:a=>gd(a,W.size(e.dims),e.dataType,s,r,i),getRunData:a=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(W.size(a[0].dims)/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(e.dims)/4)}]})}),Mh=e=>{e.compute(Ie(e.inputs[0],"Abs","abs"))},Bh=e=>{e.compute(Ie(e.inputs[0],"Acos","acos"))},Ph=e=>{e.compute(Ie(e.inputs[0],"Acosh","acosh"))},Nh=e=>{e.compute(Ie(e.inputs[0],"Asin","asin"))},Uh=e=>{e.compute(Ie(e.inputs[0],"Asinh","asinh"))},Wh=e=>{e.compute(Ie(e.inputs[0],"Atan","atan"))},Hh=e=>{e.compute(Ie(e.inputs[0],"Atanh","atanh"))},Vh=e=>Be(e),Fh=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ie(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},yd=e=>{let t=e.length>=2&&e[1].data!==0?e[1].getFloat32Array()[0]:so,r=e.length>=3&&e[2].data!==0?e[2].getFloat32Array()[0]:oo;return Be({min:t,max:r})},jh=(e,t)=>{let r=e.inputs.length===1?t:yd(e.inputs),i=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Clip",n=>`clamp(${n}, clip_min_, clip_max_)`,`
    const clip_min_: vec4<${i}> = vec4(${i}(${r.min}));
    const clip_max_: vec4<${i}> = vec4(${i}(${r.max}));
`,r.cacheKey),{inputs:[0]})},Lh=e=>{e.compute(Ie(e.inputs[0],"Ceil","ceil"))},qh=e=>{e.compute(Ie(e.inputs[0],"Cos","cos"))},Gh=e=>{e.compute(Ie(e.inputs[0],"Cosh","cosh"))},mi=e=>Be(e),Kh=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},yn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Yh=e=>{let t=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,yn(t)))},Xh=e=>{e.compute(Ie(e.inputs[0],"Exp","exp"))},Zh=e=>{e.compute(Ie(e.inputs[0],"Floor","floor"))},Qh=e=>{let t=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,yn(t)))},Jh=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},em=e=>{e.compute(Ie(e.inputs[0],"Not",t=>`!${t}`))},tm=e=>{e.compute(Ie(e.inputs[0],"Neg",t=>`-${t}`))},rm=e=>{e.compute(Ie(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},im=e=>{let t=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},nm=e=>{e.compute(Ie(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},am=e=>Be(e),sm=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},om=e=>{e.compute(Ie(e.inputs[0],"Sin","sin"))},um=e=>{e.compute(Ie(e.inputs[0],"Sinh","sinh"))},lm=e=>{e.compute(Ie(e.inputs[0],"Sqrt","sqrt"))},dm=e=>{e.compute(Ie(e.inputs[0],"Tan","tan"))},Oa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,pm=e=>{e.compute(Ie(e.inputs[0],"Tanh",Oa))},_s=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Oa("v")};
}
`,$s=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,cm=e=>{let t=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"FastGelu",$s,_s(t),void 0,e.inputs[0].dataType))},fm=(e,t)=>{let r=ut(e.inputs[0].dataType);return e.compute(Ie(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},hm=e=>{e.compute(Ie(e.inputs[0],"Log","log"))},wd=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,bd=e=>`quick_gelu_impl(${e})`,mm=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"QuickGelu",bd,wd(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),_d,$d,gm,v_=j(()=>{xe(),$e(),co(),_d=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},$d=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=U("input",e[0].dataType,e[0].dims,4),i=U("bias",e[0].dataType,[e[0].dims[2]],4),n=le("output",e[0].dataType,t,4),s=W.size(t)/4,a=Ye(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${yn(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},gm=e=>{_d(e.inputs),e.compute($d(e.inputs))}}),vd,xd,Tt,ym,wm,bm,_m,$m,vm,xm,Sm,Em,Im,x_=j(()=>{me(),xe(),$e(),vd=(e,t,r,i,n,s,a,o,l,p,f,h)=>{let d,g;typeof o=="string"?d=g=(_,E)=>`${o}((${_}),(${E}))`:typeof o=="function"?d=g=o:(d=o.scalar,g=o.vector);let y=le("outputData",f,i.length,4),w=U("aData",l,t.length,4),v=U("bData",p,r.length,4),x;if(n)if(s){let _=W.size(t)===1,E=W.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;_||E?x=y.setByOffset("global_idx",g(_?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),E?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):x=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${v.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",g(a||S?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||C?v.getByOffset("offsetB / 4u"):`${v.type.value}(${v.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=y.setByOffset("global_idx",g(w.getByOffset("global_idx"),v.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(E,S,C="")=>{let A=`aData[indexA${S}][componentA${S}]`,R=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${y.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let offsetB${S} = ${v.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${E}[${S}] = ${C}(${d(A,R)});
          `};f===9?x=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,v,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},xd=(e,t,r,i,n,s,a=r.dataType)=>{let o=!W.areEqual(r.dims,i.dims),l=r.dims,p=W.size(r.dims),f=!1,h=!1,d=[o];if(o){let g=Zr.calcShape(r.dims,i.dims,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");l=g,p=W.size(l);let y=W.size(r.dims)===1,w=W.size(i.dims)===1,v=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,x=i.dims.length>0&&i.dims[i.dims.length-1]%4===0;d.push(y),d.push(w),d.push(v),d.push(x);let _=1;for(let E=1;E<l.length;E++){let S=r.dims[r.dims.length-E]??1,C=i.dims[i.dims.length-E]??1;if(S===C)_*=S;else break}_%4===0?(h=!0,f=!0):(y||w||v||x)&&(f=!0)}else f=!0;return d.push(f),{name:e,shaderCache:{hint:t+d.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>vd(g,r.dims,i.dims,l,f,o,h,n,r.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(l)/4)},...ie(r.dims,i.dims,l)]})}},Tt=(e,t,r,i,n,s)=>{e.compute(xd(t,n??"",e.inputs[0],e.inputs[1],r,i,s))},ym=e=>{Tt(e,"Add",(t,r)=>`${t}+${r}`)},wm=e=>{Tt(e,"Div",(t,r)=>`${t}/${r}`)},bm=e=>{Tt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},_m=e=>{Tt(e,"Mul",(t,r)=>`${t}*${r}`)},$m=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},vm=e=>{Tt(e,"Sub",(t,r)=>`${t}-${r}`)},xm=e=>{Tt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Sm=e=>{Tt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Em=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Im=e=>{Tt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Sd,Ed,Id,Cd,Cm,km,S_=j(()=>{me(),xe(),Xe(),$e(),Sd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,s=i.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==n)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,p)=>{if(p!==t&&l!==i.dims[p])throw new Error("non concat dimensions must match")})}})},Ed=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Id=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let s=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(s):n===0?i.push(`if (inputIndex == ${n}u) { ${s} }`):n===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${n}) { ${s} }`)}return i.join(`
`)},Cd=(e,t,r,i)=>{let n=W.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],p=[],f=[{type:12,data:n}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],s[w]=o,p.push(e[w].dims.length),a[w]=U(`input${w}`,i,p[w]),l.push("rank"),f.push({type:12,data:s[w]});for(let w=0;w<e.length;++w)f.push(...ie(e[w].dims));f.push(...ie(r));let h=le("output",i,r.length),d=h.indicesGet("indices",t),g=Array.from(Array(s.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let v=0;v<e.length;v++)w.registerUniform(`sizeInConcatAxis${v}`,"u32");return w.declareVariables(...a,h)})()}

  ${Ed(s.length,g)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${d});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${g});
      ${d} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Id(a,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}),getShaderSource:y}},Cm=(e,t)=>{let r=e.inputs,i=r[0].dims,n=W.normalizeAxis(t.axis,i.length);Sd(r,n);let s=i.slice();s[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let a=r.filter(o=>W.size(o.dims)>0);e.compute(Cd(a,n,s,r[0].dataType),{inputs:a})},km=e=>Be({axis:e.axis})}),fr,hr,mr,fo,_r=j(()=>{me(),xe(),fr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},hr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},mr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},fo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[so,oo];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),it,ho,Fn=j(()=>{it=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ho=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),mo,Tm=j(()=>{mo=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),kd,Td,kn,Ra,Ad,Tn,zd,go,jn=j(()=>{me(),xe(),$e(),_r(),Fn(),kd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Td=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,kn=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],p=t[0]*e[0],f=n?l:s,h=n?s:l,d=f/t[0],g=s/t[1];if(!((n&&d===4&&e[1]===4||!n&&(d===3||d===4))&&f%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${d} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${d} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${d}<${r}>, ${f/d}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${d};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${kd(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${d===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Td(n,d)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ra=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ad=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Tn=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32,l=!1)=>{let p=e[1]*t[1],f=e[0]*t[0],h=n?p:s,d=n?s:p;if(!(d%t[1]===0&&h%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${d} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let g=d/t[1],y=h/t[0],w=s/t[1],v=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Ra(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ra(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ad(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${d}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${v}
  }
`},zd=(e,t,r,i,n,s=!1)=>{let[a,o,l]=n,[p,f,h,d]=i,g=Ci(a,l),y=Ci(o,l),w=Ye(i[0].type.tensor),v=()=>{let _=f.rank,E=p.rank,S=`var aIndices: ${f.type.indices};`;for(let C=_-2-1,A=E-1;C>=0;C--,A--)S+=`
aIndices[${C}] = ${E>1?`batchIndices[${A}]`:"batchIndices"};`;return g.forEach(C=>{S+=`
aIndices[${C}] = 0;`}),S+=`
aIndices[${_-2}] = u32(row);
                   aIndices[${_-1}] = u32(colIn);`,S},x=()=>{let _=h.rank,E=p.rank,S=`var bIndices: ${h.type.indices};`;for(let C=_-2-1,A=E-1;C>=0;C--,A--)S+=`
bIndices[${C}] = ${E>1?`batchIndices[${A}]`:"batchIndices"};`;return y.forEach(C=>{S+=`
bIndices[${C}] = 0;`}),S+=`
bIndices[${_-2}] = u32(row);
                   bIndices[${_-1}] = u32(colIn);`,S};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${it(e,w)} {
      var value = ${it(e,w)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${v()}
        value = ${f.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${it(e,w)} {
      var value = ${it(e,w)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${x()}
        value = ${h.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${it(e,w)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${it(e,w)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},go=(e,t,r,i,n=!1)=>{let s=e[0].dims,a=e[1].dims,o=s.slice(0,-2),l=a.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),f=W.size(p),h=s[s.length-2],d=s[s.length-1],g=a[a.length-1],y=d%4===0&&g%4===0,w=h<=8?[4,1,1]:[4,4,1],v=[8,8,1],x=[Math.ceil(g/v[0]/w[0]),Math.ceil(h/v[1]/w[1]),Math.ceil(f/v[2]/w[2])],_=y?4:1,E=[...o,h,d/_],S=E.length,C=[...l,d,g/_],A=C.length,R=[f,h,g/_],B=[{type:6,data:h},{type:6,data:g},{type:6,data:d}];hr(t,B),B.push(...ie(p,E,C));let X=["rank","rank"],K=e.length>2;K&&(B.push(...ie(e[2].dims)),X.push("rank")),B.push(...ie(R));let ce=he=>{let ne=p.length,Se=uo("batchDims",e[0].dataType,ne,1),Me=Ye(e[0].dataType),ae=U("a",e[0].dataType,S,_),fe=U("b",e[1].dataType,A,_),L=le("result",e[0].dataType,R.length,_),re=[ae,fe];if(K){let Oe=n?_:1;re.push(U("bias",e[2].dataType,e[2].dims.length,Oe))}let we=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];mr(t,we);let z=Ye(L.type.tensor),Q=fr(t,L.type.value,z),pe=zd(_,K,Q,[Se,ae,fe,L],[o,l,p],n);return`
  ${he.registerUniforms(we).registerInternalVariables(Se).declareVariables(...re,L)}
  ${pe}
  ${y?kn(w,v,Me,Se):Tn(w,v,Me,Se)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${n}`,inputDependencies:X},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:B}),getShaderSource:ce}}}),Od,Am,E_=j(()=>{me(),br(),$e(),_r(),Fn(),Tm(),jn(),Od=(e,t,r,i,n=!1,s,a=4,o=4,l=4,p="f32")=>{let f=X=>{switch(X){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${X} is not supported.`)}},h=X=>{switch(X){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${X} is not supported.`)}},d=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",v=e?"row":"col",x=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${v} / outWidth;
    let outCol = ${v} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${it(a,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
      ${d}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(a)}
    }
    return resData;`,E=e?t&&i?`
    let col = colIn * ${a};
    ${_}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${it(a,p)}(0.0);`:i&&r?`
    let col = colIn * ${a};
    ${_}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${it(a,p)}(0.0);`,S=`${h(o)}`,C=it(l,p),A=it(e?a:o,p),R=it(e?o:a,p),B=fr(s,C,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?E:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${R} {
      ${e?S:E}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${ho(n)}
      ${B}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Am=(e,t,r,i,n,s,a,o)=>{let l=t.format==="NHWC",p=l?e[0].dims[3]:e[0].dims[1],f=r[0],h=l?r[2]:r[3],d=l?r[1]:r[2],g=l?r[3]:r[1],y=l&&(p%4===0||p%3===0)&&g%4===0,w=l?g:h*d,v=l?h*d:g,x=[8,8,1],_=i<=8?[4,1,1]:[4,4,1],E=[Math.ceil(w/x[0]/_[0]),Math.ceil(v/x[1]/_[1]),Math.ceil(f/x[2]/_[2])];je("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${E}`);let S=y?l&&p%4!==0?3:4:1,C=x[1]*_[1],A=x[0]*_[0],R=Math.max(x[0]*S,x[1]),B=i%C===0,X=n%A===0,K=s%R===0,ce=y?[S,4,4]:[1,1,1],he=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];hr(t,he),he.push(...ie(e[0].dims,e[1].dims));let ne=["rank","rank"];a&&(he.push(...ie(e[2].dims)),ne.push("rank")),he.push(...ie(r));let Se=Me=>{let ae=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];mr(t,ae);let fe=y?4:1,L=Ye(e[0].dataType),re=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,we=U("x",e[0].dataType,e[0].dims.length,S===3?1:S),z=U("w",e[1].dataType,e[1].dims.length,fe),Q=[we,z],pe=le("result",e[0].dataType,r.length,fe);if(a){let Oe=U("bias",e[2].dataType,e[2].dims.length,fe);Q.push(Oe),re+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${mo("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Me.registerUniforms(ae).declareVariables(...Q,pe)}
        ${re}
        ${Od(l,B,X,K,a,t,ce[0],ce[1],ce[2],L)}
        ${y?kn(_,x,L,void 0,!l,R):Tn(_,x,L,void 0,!l,R,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${S};${y};${B};${X};${K};${C};${A};${R}`,inputDependencies:ne},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:he}),getShaderSource:Se}}}),Rd,Da,si,Dd,Ma,Md,zm,Om,I_=j(()=>{me(),br(),xe(),$e(),_r(),Fn(),Rd=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Da=e=>typeof e=="number"?[e,e,e]:e,si=(e,t)=>t<=1?e:e+(e-1)*(t-1),Dd=(e,t,r,i=1)=>{let n=si(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},Ma=(e,t,r,i,n)=>{n==null&&(n=Dd(e,t[0],i[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*n)/i[a]+1));return s},Md=(e,t,r,i,n,s,a,o,l,p)=>{let f,h,d,g;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Ma([t,r,i,1],[o,l,p],1,[n,s,a],e);h=y[0],d=y[1],g=y[2]}else if(Array.isArray(e)){if(!e.every((w,v,x)=>w===x[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Ma([t,r,i,1],[o,l,p],1,[n,s,a],e[0]);h=y[0],d=y[1],g=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),d=Math.ceil(r/s),g=Math.ceil(i/a);let y=(h-1)*n+o-t,w=(d-1)*s+l-r,v=(g-1)*a+p-i,x=Math.floor(y/2),_=y-x,E=Math.floor(w/2),S=w-E,C=Math.floor(v/2),A=v-C;f={top:E,bottom:S,left:C,right:A,front:x,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:h,outHeight:d,outWidth:g}},zm=(e,t,r,i,n,s=!1,a="channelsLast")=>{let o,l,p,f,h;if(a==="channelsLast")[o,l,p,f,h]=e;else if(a==="channelsFirst")[o,h,l,p,f]=e;else throw new Error(`Unknown dataFormat ${a}`);let[d,,g,y,w]=t,[v,x,_]=Da(r),[E,S,C]=Da(i),A=si(g,E),R=si(y,S),B=si(w,C),{padInfo:X,outDepth:K,outHeight:ce,outWidth:he}=Md(n,l,p,f,v,x,_,A,R,B),ne=s?d*h:d,Se=[0,0,0,0,0];return a==="channelsFirst"?Se=[o,ne,K,ce,he]:a==="channelsLast"&&(Se=[o,K,ce,he,ne]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:p,inWidth:f,inChannels:h,outDepth:K,outHeight:ce,outWidth:he,outChannels:ne,padInfo:X,strideDepth:v,strideHeight:x,strideWidth:_,filterDepth:g,filterHeight:y,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:R,effectiveFilterWidth:B,dilationDepth:E,dilationHeight:S,dilationWidth:C,inShape:e,outShape:Se,filterShape:t}},Om=(e,t,r,i,n,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((v,x)=>x)},p=[Math.ceil(Rd(l.x.map(v=>r[v]))/o[0]),1,1];je("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let f=1,h=W.size(r),d=[{type:12,data:h},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];hr(t,d),d.push(...ie(e[0].dims,e[1].dims));let g=["rank","rank"],y=e.length===3;y&&(d.push(...ie(e[2].dims)),g.push("rank")),d.push(...ie(r));let w=v=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];mr(t,x);let _=1,E=Ye(e[0].dataType),S=U("x",e[0].dataType,e[0].dims.length,f),C=U("W",e[1].dataType,e[1].dims.length,_),A=[S,C],R=le("result",e[0].dataType,r.length,_),B="";if(y){let ce=U("bias",e[2].dataType,e[2].dims.length,_);A.push(ce),B+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${E} {
          return bias[${a?te("coords",4,5):te("coords",1,5)}];
        }`}let X=it(f,E),K=fr(t,X,E);return`
            ${B}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${v.registerUniforms(x).declareVariables(...A,R)}
          ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${R.offsetToIndices("global_idx")};
              let batch = ${te("coords",0,S.rank)};
              let d2 = ${a?te("coords",S.rank-1,S.rank):te("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${a?te("coords",1,S.rank):te("coords",2,S.rank)},
              ${a?te("coords",2,S.rank):te("coords",3,S.rank)},
              ${a?te("coords",3,S.rank):te("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?te("uniforms.x_shape",1,S.rank):te("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${a?te("uniforms.x_shape",2,S.rank):te("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${a?te("uniforms.x_shape",3,S.rank):te("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${a?te("uniforms.x_shape",4,S.rank):te("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${K}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${f};${y}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:d}),getShaderSource:w}}}),vs,Rm,C_=j(()=>{me(),xe(),$e(),Bm(),_r(),vs=(e,t,r)=>{let i=e.length>2,n=i?"value += b[output_channel];":"",s=e[0].dims,a=e[1].dims,o=a[0]/t.group,l=t.format==="NHWC",p=wn(s,a,t.dilations,t.pads,t.strides,l),f=W.size(p),h=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:o}];hr(t,h),h.push(...ie(s,a));let d=["rank","rank"];i&&(h.push(...ie(e[2].dims)),d.push("rank")),h.push(...ie(p));let g=y=>{let w=le("output",e[0].dataType,p.length),v=Ye(w.type.tensor),x=fr(t,w.type.value,v),_=U("x",e[0].dataType,s.length),E=U("w",e[1].dataType,a.length),S=[_,E];i&&S.push(U("b",e[2].dataType,e[2].dims.length));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];return mr(t,C),`
  ${y.registerUniforms(C).declareVariables(...S,w)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${w.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel / uniforms.output_channels_per_group;

    var value: ${w.type.value} = ${w.type.value}(0);
    for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
      let input_channel = group_id * uniforms.w_shape[1] + wInChannel;
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[${l?1:2}]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[${l?2:3}]) {
            continue;
          }

          let xVal = ${l?_.get("batch","xHeight","xWidth","input_channel"):_.get("batch","input_channel","xHeight","xWidth")};
          let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
          value += xVal*wVal;
        }
      }
    }
    ${n}
    ${x}
    ${w.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:t.cacheKey,inputDependencies:d},getRunData:()=>({outputs:[{dims:r?r(p):p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:h}),getShaderSource:g}},Rm=(e,t,r)=>{let i=e.length>2,n=Ke(r[3]),s=Ke(r[2]),a=W.size(r)/n/s,o=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],p=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:a},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];hr(t,f),f.push(...ie(o,l,p));let h=(s-1)*t.strides[1]+l[1],d=g=>{let y=le("output",e[0].dataType,p.length,n),w=Ye(y.type.tensor),v=fr(t,y.type.value,w),x=U("x",e[0].dataType,o.length,n),_=U("w",e[1].dataType,l.length,n),E=[x,_];i&&E.push(U("b",e[2].dataType,e[2].dims,n));let S=i?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return mr(t,C),`
  ${g.registerUniforms(C).declareVariables(...E,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${h}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${x.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${x.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${_.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${S}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:d}}}),xs,Bd,Dm,Mm=j(()=>{me(),xe(),jn(),$e(),_r(),xs=(e,t,r,i,n=!1)=>{let s=e[0].dims,a=e[1].dims,o=s[s.length-2],l=a[a.length-1],p=s[s.length-1],f=Ke(l),h=Ke(p),d=Ke(o),g=W.size(r)/f/d,y=e.length>2,w=i?i.slice(0,-2):r.slice(0,-2),v=[W.size(w),o,l],x=[{type:12,data:g},{type:12,data:o},{type:12,data:l},{type:12,data:p}];hr(t,x),x.push(...ie(w,s,a)),y&&x.push(...ie(e[2].dims)),x.push(...ie(v));let _=E=>{let S=uo("batch_dims",e[0].dataType,w.length),C=U("a",e[0].dataType,s.length,h),A=U("b",e[1].dataType,a.length,f),R=le("output",e[0].dataType,v.length,f),B=Ye(R.type.tensor),X=fr(t,R.type.value,B),K=[C,A],ce="";if(y){let re=n?f:1;K.push(U("bias",e[2].dataType,e[2].dims.length,re)),ce=`${n?`value += bias[col / ${re}];`:`value += ${R.type.value}(bias[row + i]);`}`}let he=s.slice(0,-2),ne=a.slice(0,-2),Se=Ci(he,w),Me=Ci(ne,w),ae=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];mr(t,ae);let fe=(re,we)=>{let z=re.rank,Q=re.name;if(z===2)return`var ${Q}_indices = ${re.type.indices}(0u, 0u);`;let pe=S.rank,Oe=`var ${Q}_indices: ${re.type.indices};`;for(let We=z-2-1,Ne=pe-1;We>=0;We--,Ne--)Oe+=`
${Q}_indices[${We}] = ${pe>1?`batch_indices[${Ne}]`:"batch_indices"};`;return we.forEach(We=>{Oe+=`
${Q}_indices[${We}] = 0;`}),Oe+=`${Q}_indices[${z-2}] = 0u;
                     ${Q}_indices[${z-1}] = 0u;`,Oe},L=()=>{let re=`var a_data: ${C.type.value};`;for(let we=0;we<h;we++)re+=`
              let b_data${we} = b[(b_offset + (k + ${we}) * uniforms.N + col) / ${f}];`;for(let we=0;we<d;we++){re+=`a_data = a[(a_offset + (row + ${we}) * uniforms.K + k) / ${h}];`;for(let z=0;z<h;z++)re+=`
            values[${we}] = fma(${A.type.value}(a_data${h===1?"":`[${z}]`}), b_data${z}, values[${we}]);
`}return re};return`
  ${E.registerUniforms(ae).registerInternalVariables(S).declareVariables(...K,R)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${d};
    let row = (index1 % stride1) * ${d};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${S.offsetToIndices("batch")};`}
    ${fe(C,Se)}
    let a_offset = ${C.indicesToOffset("a_indices")};
    ${fe(A,Me)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${R.type.value}, ${d}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${L()}
    }
    for (var i = 0u; i < ${d}u; i++) {
      var value = values[i];
      ${ce}
      ${X}
      let cur_indices = ${R.type.indices}(batch, row + i, col);
      let offset = ${R.indicesToOffset("cur_indices")};
      ${R.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${d};${n}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:_}},Bd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Dm=e=>{Bd(e.inputs);let t=Zr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&i<8?e.compute(xs(e.inputs,{activation:""},t)):e.compute(go(e.inputs,{activation:""},t))}}),wn,tn,Pd,rn,Ss,Nd,Ud,Wd,Es,Bm=j(()=>{xe(),E_(),I_(),jn(),C_(),_r(),Mm(),ei(),wn=(e,t,r,i,n,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,p=t[0],f=t.slice(2).map((d,g)=>d+(d-1)*(r[g]-1)),h=o.map((d,g)=>d+i[g]+i[g+l]).map((d,g)=>Math.floor((d-f[g]+n[g])/n[g]));return h.splice(0,0,a),h.splice(s?3:1,0,p),h},tn=[2,3,1,0],Pd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},rn=(e,t)=>{let r=e.kernelShape.slice();for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();In.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Ss=e=>{let t=fo(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,pads:o,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Nd=(e,t,r)=>{let i=rn(r,t),n=r.format==="NHWC";if(r.group!==1){if(!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1){let A=wn(t[0].dims,t[1].dims,r.dilations,i.pads,r.strides,n),R=e.kernelCustomData.wT??e.compute(Ft(t[1],tn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=R);let B=[t[0],R];t.length===3&&B.push(t[2]),e.compute(Rm(B,i,A),{inputs:B})}else e.compute(vs(t,i));return}let s=t.length===3,a=t[0].dims[n?1:2],o=t[0].dims[n?2:3],l=t[0].dims[n?3:1],p=t[1].dims[2],f=t[1].dims[3],h=wn(t[0].dims,t[1].dims,r.dilations,i.pads,r.strides,n),d=h[n?1:2],g=h[n?2:3],y=h[n?3:1],w=n&&p===a&&f===o&&r.pads[0]===0&&r.pads[1]===0;if(w||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=h[0],R,B,X,K=[];if(n){let ne=e.kernelCustomData.wT??e.compute(Ft(t[1],tn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ne),w){let Se=a*o*l;R=t[0].reshape([1,A,Se]),B=ne.reshape([1,Se,y]),X=[1,A,y]}else R=t[0].reshape([A,a*o,l]),B=ne.reshape([1,l,y]),X=[A,d*g,y];K.push(R),K.push(B)}else R=t[0].reshape([A,l,a*o]),B=t[1].reshape([1,y,l]),X=[A,y,d*g],K.push(B),K.push(R);s&&K.push(t[2]);let ce=X[2],he=K[0].dims[K[0].dims.length-1];ce<8&&he<8?e.compute(xs(K,i,h,X,n),{inputs:K}):e.compute(go(K,i,h,X,n),{inputs:K});return}let v=!0,x=e.kernelCustomData.wT??e.compute(Ft(t[1],tn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let _=[t[0],x];s&&_.push(t[2]);let E=n?d*g:y,S=n?y:d*g,C=p*f*l;e.compute(Am(_,i,h,E,S,C,s,v),{inputs:_})},Ud=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=rn({...t,pads:n,strides:s,dilations:a,kernelShape:o},i);e.compute(vs(i,l,p=>r?[p[0],p[2],p[3]]:[]))},Wd=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=rn(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=zm(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(Om(t,n,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},Es=(e,t)=>{Pd(e.inputs,t),e.inputs[0].dims.length===3?Ud(e,t):e.inputs[0].dims.length===5?Wd(e,e.inputs,t):Nd(e,e.inputs,t)}}),Hd,Pm,k_=j(()=>{me(),br(),$e(),_r(),Fn(),Tm(),jn(),Hd=(e,t=!1,r,i,n=4)=>{let s=v=>{switch(v){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${i}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${v} is not supported.`)}},a=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,o=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,l=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",p=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",f=e?"row":"col",h=e?"col":"row",d=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${f} / outWidth;
      let outCol = ${f} % outWidth;

      let WRow = ${h} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${h} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${l}) || fract(xR) > 0.0) {
        return ${i}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${p}) || fract(xC) > 0.0) {
        return ${i}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${h} % inChannels;
      ${a}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${n}];`,g=e?`
      let col = colIn * ${n};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${d}
      }
      return ${i}(0.0);`:`
      let col = colIn * ${n};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${d}
      }
      return ${i}(0.0);`,y=`
      let col = colIn * ${n};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${s(n)}
      }
      return ${i}(0.0);
      `,w=fr(r,i);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?g:y}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?y:g}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${i}) {
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${o}
      ${ho(t)}
      ${w}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${n}] = value;
    }
  }`},Pm=(e,t,r,i,n,s,a,o)=>{let l=t.format==="NHWC",p=l?e[0].dims[3]:e[0].dims[1],f=r[0],h=l?r[2]:r[3],d=l?r[1]:r[2],g=l?r[3]:r[1],y=l&&p%4===0&&p%3&&g%4===0,w=l?g:h*d,v=l?h*d:g,x=[8,8,1],_=i<=8?[4,1,1]:[4,4,1],E=[Math.ceil(w/x[0]/_[0]),Math.ceil(v/x[1]/_[1]),Math.ceil(f/x[2]/_[2])];je("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${E}`);let S=y?4:1,C=Math.max(x[0]*S,x[1]),A=y?4:1,R=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],B=[R[0]+(t.dilations[0]<=1?0:(R[0]-1)*(t.dilations[0]-1)),R[1]+(t.dilations[1]<=1?0:(R[1]-1)*(t.dilations[1]-1))],X=[B[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),B[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],K=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:R},{type:6,data:X}];hr(t,K),K.push(...ie(e[0].dims,e[1].dims));let ce=["rank","rank"];a&&(K.push(...ie(e[2].dims)),ce.push("rank")),K.push(...ie(r));let he=ne=>{let Se=U("x",e[0].dataType,e[0].dims.length,A),Me=U("w",e[1].dataType,e[1].dims.length,1),ae=le("result",e[0].dataType,r.length,A),fe=[Se,Me],L="";if(a){let z=U("bias",e[2].dataType,e[2].dims.length,A);fe.push(z),L+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${z.type.value} {
            return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
          }`}let re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:R.length},{name:"pads",type:"i32",length:X.length}];mr(t,re);let we=Ye(e[0].dataType,1);if(we!=="f16"&&we!=="f32")throw new Error(`elemType ${we} is not supported.`);return`
        ${mo("uniforms.result_strides")}
        ${ne.registerUniforms(re).declareVariables(...fe,ae)};
        ${L}
        ${Hd(l,a,t,Se.type.value,S)}
        ${y?kn(_,x,we,void 0,!l,C):Tn(_,x,we,void 0,!l,C,!1,void 0,o)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${_};${x};${y}`,inputDependencies:ce},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:K}),getShaderSource:he}}}),Vd,Is,T_=j(()=>{me(),br(),xe(),$e(),Vd=(e,t,r,i,n,s=!1,a,o,l=!1)=>{let p=l?1:2,f=l?2:3,h=l?3:1,d=s?2:1,g=`
  fn setOutputAtIndex(flatIndex : u32, value : ${s?`vec4<${a}>`:a}) {
    result[flatIndex] = ${s?`vec4<${a}>`:a}(value);
  }`;i&&(g+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${s?`vec4<${a}>`:a} {
      return bias[coords.${l?"w":"y"}${s?"/ 4":""}];
    }`);let y=s?4:1,w=U("W",t[1].dataType,t[1].dims.length,y),v=U("Dy",t[0].dataType,t[0].dims.length,y),x=[v,w];i&&x.push(U("bias",t[2].dataType,[r[h]].length,y));let _=le("result",t[0].dataType,r.length,y),E=`{
        let batch: u32 = ${n?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${n?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${n?"global_id.y":"workgroup_id.y"} * ${d};
        let d1: u32 = ${n?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${a}>, ${d}>;
        for (var i = 0; i < ${d}; i++) {
          dotProd[i] = vec4<${a}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${a}(dyCorner.x) + ${a}(wR)) / ${a}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${a}(dyCorner.y) + ${a}(wC)) / ${a}(uniforms.strides.y);
            let dyC2 = (${a}(dyCorner.y) + 1.0 + ${a}(wC)) / ${a}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${v.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${v.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${a}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${h}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${v.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${v.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${d}; i = i + 1) {
          let value = dotProd[i] + ${i?"bias[c+i]":`vec4<${a}>(0.0)`};
          ${_.set("batch","r","c + i","d1","value")};
        }
      }`,S=`
          let outputIndices = ${_.offsetToIndices("global_idx")};
          let batch = ${_.indicesGet("outputIndices",0)};
          let d1 = ${_.indicesGet("outputIndices",h)};
          let r = ${_.indicesGet("outputIndices",p)};
          let c = ${_.indicesGet("outputIndices",f)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${a}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${a}(dyRCorner) + ${a}(wR)) / ${a}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[${p}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${a}(dyCCorner) + ${a}(wC)) / ${a}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[${f}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${l?v.get("batch","idyR","idyC","inputChannel"):v.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${w.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${i?"bias[d1]":`${a}(0.0)`};
          ${_.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(o).declareVariables(...x,_)}
  ${g}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${s?E:S}}`},Is=(e,t,r)=>{let i=e.length>2,n=t.outputShape,s=W.size(n),a=[Math.ceil(s/64),1,1];je("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${a}`);let o=t.format==="NHWC",l=["rank","rank"],p=[t.strides[0],t.strides[1]],f=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],h=[t.dilations[0],t.dilations[1]],d=[f[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),f[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],g=[d[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),d[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],y=!1,w=t.group,v=e[1].dims,x=v[0]/w,_=v[1],E=[{type:12,data:s},{type:12,data:p},{type:12,data:f},{type:12,data:h},{type:12,data:d},{type:6,data:g},{type:12,data:x},{type:12,data:_},...ie(e[0].dims,e[1].dims)];i&&(E.push(...ie(e[2].dims)),l.push("rank")),E.push(...ie(n));let S=a[1]===1&&a[2]===1,C=A=>{let R=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:p.length},{name:"filter_dims",type:"u32",length:f.length},{name:"dilations",type:"u32",length:f.length},{name:"effective_filter_dims",type:"u32",length:d.length},{name:"pads",type:"i32",length:g.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],B=Ye(e[0].dataType);return`${Vd(A,e,n,i,S,y,B,R,o)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:l},getRunData:()=>({dispatchGroup:{x:a[0],y:a[1],z:a[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:E}),getShaderSource:C}}}),Fd,jd,Ld,Ba,Nm,qd,Gd,Kd,Yd,Um,A_=j(()=>{k_(),T_(),_r(),ei(),Fd=(e,t,r,i,n,s)=>(e-1)*t+r+(i-1)*n+1-s,jd=(e,t,r,i,n)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[n]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[n]=s)},Ld=(e,t,r,i,n,s,a,o,l,p)=>{let f=e.length-2,h=p.length===0;if(l.length===0)for(let y=0;y<f;++y)l.push(0);let d=e[0],g=t[o?3:1]*n;for(let y=0,w=e.length-f-(o?1:0);y<f;++y,++w){let v=e[w],x=h?v*a[y]:p[y],_=Fd(v,a[y],s[y],t[w],r[y],x);jd(_,i,s,y,y+f),h&&p.push(a[y]*(v-1)+l[y]+(t[w]-1)*r[y]+1-s[y]-s[y+f])}p.splice(0,0,d),p.splice(o?3:1,0,g)},Ba=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,d)=>h*d,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((h,d)=>h+d,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let p=e.strides.slice();if(p.reduce((h,d)=>h+d,0)===0){let h=t[0].dims.length-2;p=new Array(h).fill(1)}Ld(o,r,l,e.autoPad,e.group,n,p,i,a,s);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:n,outputPadding:a,outputShape:s,dilations:l,strides:p}),f},Nm=e=>{let t=fo(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,s=e.group,a=e.kernelShape,o=e.pads,l=e.strides,p=e.wIsConst(),f=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,outputPadding:f,outputShape:h,pads:o,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},qd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Gd=[2,3,1,0],Kd=(e,t,r)=>{let i=Ba(r,t),n=r.format==="NHWC",s=i.outputShape,a=s[n?3:1],o=t[0].dims[n?3:1];if(i.group!==1||a===1&&o===1){e.compute(Is(t,i));return}let l=s[n?1:2],p=s[n?2:3],f=t[1].dims[2],h=t[1].dims[3],d=n?l*p:a,g=n?a:l*p,y=f*h*o,w=!0,v=e.kernelCustomData.wT??e.compute(Ft(t[1],Gd),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let x=[t[0],v],_=t.length===3;_&&(!n&&t[2].dims.length===1?x.push(t[2].reshape([t[2].dims[0],1,1])):x.push(t[2])),e.compute(Pm(x,i,s,d,g,y,_,w),{inputs:x})},Yd=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),n=[1].concat(n);let l=Ba({...t,pads:o,strides:a,dilations:s,kernelShape:n},i);e.compute(Is(i,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]]))},Um=(e,t)=>{qd(e.inputs,t),e.inputs[0].dims.length===3?Yd(e,t):Kd(e,e.inputs,t)}}),Xd,Wm,Hm,z_=j(()=>{me(),xe(),Xe(),$e(),Xd=(e,t,r,i)=>{let n=W.size(t),s=t.length,a=U("input",e,s),o=le("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=W.normalizeAxis(l,s),f=h=>{let d=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,g=te("uniforms.input_shape","uniforms.axis",s),y=i.reverse?d+(i.exclusive?" + 1":""):"0",w=i.reverse?g:d+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:p},...ie(t,t)]}),getShaderSource:f}},Wm=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(Xd(i,r,n,t),{inputs:[0]})},Hm=e=>{let t=e.exclusive===1,r=e.reverse===1;return Be({exclusive:t,reverse:r})}}),Zd,Qd,Jd,Vm,Fm,O_=j(()=>{me(),xe(),Xe(),$e(),Zd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Qd=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)n.push(r.indicesSet("a",e[s],`i[${s}]`));return n.push("return a;}"),n.join(`
`)},Jd=(e,t)=>{let r,i,n,s,a,o,l=t.format==="NHWC",p=t.blocksize,f=t.mode==="DCR";l?([r,i,n,s]=e.dims,a=f?[r,i,n,p,p,s/p**2]:[r,i,n,s/p**2,p,p],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=f?[r,p,p,s/p**2,i,n]:[r,s/p**2,p,p,i,n],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(a),d=h.dims.length,g=e.dataType,y=U("a",g,d),w=le("output",g,d),v=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Qd(o,d,y,w)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let _=l?[r,i*p,n*p,s/p**2]:[r,s/p**2,i*p,n*p],E=W.size(_),S=h.dims,C=W.sortBasedOnPerm(S,o);return{outputs:[{dims:_,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...ie(S,C)]}},getShaderSource:v}},Vm=(e,t)=>{Zd(e.inputs),e.compute(Jd(e.inputs[0],t))},Fm=e=>Be({blocksize:e.blocksize,mode:e.mode,format:e.format})}),nn,oi,Pa,ep,tp,rp,ip,Na,np,jm,Lm,R_=j(()=>{me(),xe(),Xe(),$e(),nn="[a-zA-Z]|\\.\\.\\.",oi="("+nn+")+",Pa="^"+oi+"$",ep="("+oi+",)*"+oi,tp="^"+ep+"$",rp=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},ip=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(tp)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp(Pa)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,a);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(oi)))throw new Error("Invalid RHS");(n=i.match(RegExp(nn,"g")))==null||n.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Pa))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(nn,"g")),p=new rp(i);return l==null||l.forEach((f,h)=>{if(f==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let d=n-l.length+1;if(d<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+d),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<a.length;g++){let y=String.fromCharCode(48+g);p.addSymbol(y,h+g),this.addSymbol(y,r[o++],i)}}else p.addSymbol(f,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[o++],i)}),p}},Na=e=>e+"_max",np=(e,t,r,i)=>{let n=e.map(p=>p.length).map((p,f)=>U(`input${f}`,t,p)),s=W.size(i),a=le("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),l=p=>{let f=[],h="var prod = 1.0;",d="var sum = 0.0;",g="sum += prod;",y=[],w=[],v=[],x=[],_=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,C)=>{var A;if(r.rhs.symbolToIndices.has(C)){let R=(A=r.rhs.symbolToIndices.get(C))==null?void 0:A[0];R!==void 0&&r.lhs.forEach((B,X)=>{if(S.inputIndices.includes(X)){let K=B.symbolToIndices.get(C);if(K===void 0)throw new Error("Invalid symbol error");K.forEach(ce=>{f.push(`${n[X].indicesSet(`input${X}Indices`,ce,a.indicesGet("outputIndices",R))}`)})}})}else r.lhs.forEach((R,B)=>{if(S.inputIndices.includes(B)){let X=R.symbolToIndices.get(C);if(X===void 0)throw new Error("Invalid symbol error");X.forEach(K=>{y.push(`${n[B].indicesSet(`input${B}Indices`,K,`${C}`)}`)}),x.push(`prod *= ${n[B].getByIndices(`input${B}Indices`)};`)}}),w.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${Na(C)}; ${C}++) {`),v.push("}")});let E=_?[...f,`let sum = ${n.map((S,C)=>S.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...f,d,...w,...y,h,...x,g,...v];return`
            ${p.registerUniforms(o.map(S=>({name:`${Na(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,a)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${n.map((S,C)=>`var input${C}Indices: ${n[C].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=o.filter(h=>r.symbolToInfo.has(h)).map(h=>{var d;return{type:12,data:((d=r.symbolToInfo.get(h))==null?void 0:d.dimValue)||0}});p.push({type:12,data:s});let f=e.map((h,d)=>[...ie(h)]).reduce((h,d)=>h.concat(d),p);return f.push(...ie(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}},getShaderSource:l}},jm=(e,t)=>{let r=new ip(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((s,a)=>s.dims);e.compute(np(n,e.inputs[0].dataType,r,i))},Lm=e=>{let t=e.equation.replace(/\s+/g,"");return Be({equation:t})}}),ap,Ua,sp,op,qm,D_=j(()=>{me(),xe(),$e(),ap=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ua=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},sp=(e,t)=>e.length>t.length?Ua(e,t):Ua(t,e),op=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=sp(t,r),n=e[0].dataType,s=n===9?4:1,a=Math.ceil(W.size(i)/s),o=p=>{let f=U("input",n,t.length,s),h=le("output",n,i.length,s),d;if(n===9){let g=(y,w,v="")=>`
          let outputIndices${w} = ${h.offsetToIndices(`outputOffset + ${w}u`)};
          let offset${w} = ${f.broadcastedIndicesToOffset(`outputIndices${w}`,h)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${y}[${w}] = ${v}(${f.getByOffset(`index${w}`)}[component${w}]);
        `;d=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${h.setByOffset("global_idx","data")}
      }`}else d=`
        let outputIndices = ${h.offsetToIndices("global_idx")};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",h)};
        ${h.setByOffset("global_idx",f.getByOffset("inputOffset"))}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(f,h)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${d}`},l=[{type:12,data:a},...ie(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length}`,inputDependencies:["rank"]},getShaderSource:o,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l})}},qm=e=>{ap(e.inputs),e.compute(op(e.inputs),{inputs:[0]})}}),up,Gm,M_=j(()=>{me(),xe(),$e(),co(),up=e=>{let t=e[0].dataType,r=W.size(e[0].dims),i=W.size(e[1].dims),n=i%4===0,s=a=>{let o=U("x",t,[1],4),l=U("bias",t,[1],4),p=le("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,d=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(f).declareVariables(o,l,p)}

    ${_s(ut(t))}

    ${a.mainStart(Qr)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${d}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",$s("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Qr/4)}})}},Gm=e=>{e.inputs.length<2||W.size(e.inputs[1].dims)===0?cm(e):e.compute(up(e.inputs))}}),lp,dp,Km,Ym,B_=j(()=>{me(),xe(),Xe(),$e(),lp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=W.normalizeAxis(t.axis,n),a=r.slice(0);a.splice(s,1,...i);let o=r[s],l=e[0].dataType===9?4:1,p=Math.ceil(W.size(a)/l),f=[{type:12,data:p},{type:6,data:o},{type:12,data:s},...ie(e[0].dims,e[1].dims,a)],h=d=>{let g=U("data",e[0].dataType,e[0].dims.length,l),y=U("inputIndices",e[1].dataType,e[1].dims.length),w=le("output",e[0].dataType,a.length,l),v=_=>{let E=i.length,S=`var indicesIndices${_}  = ${y.type.indices}(0);`;for(let C=0;C<E;C++)S+=`${E>1?`indicesIndices${_}[${C}]`:`indicesIndices${_}`} = ${a.length>1?`outputIndices${_}[uniforms.axis + ${C}]`:`outputIndices${_}`};`;S+=`
          var idx${_} = ${y.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${g.type.indices};
        `;for(let C=0,A=0;C<n;C++)C===s?(S+=`${n>1?`dataIndices${_}[${C}]`:`dataIndices${_}`} = u32(idx${_});`,A+=E):(S+=`${n>1?`dataIndices${_}[${C}]`:`dataIndices${_}`} = ${a.length>1?`outputIndices${_}[${A}]`:`outputIndices${_}`};`,A++);return S},x;if(e[0].dataType===9){let _=(E,S,C="")=>`
          let outputIndices${S} = ${w.offsetToIndices(`outputOffset + ${S}u`)};
          ${v(S)};
          let offset${S} = ${g.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${E}[${S}] = ${C}(${g.getByOffset(`index${S}`)}[component${S}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${v("")};
      let value = ${g.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${d.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,w)}
      ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:h}},Km=e=>Be({axis:e.axis}),Ym=(e,t)=>{let r=e.inputs;lp(r),e.compute(dp(e.inputs,t))}}),pp,cp,Xm,Zm,P_=j(()=>{me(),xe(),Xe(),$e(),pp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},cp=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,s=e[1].dims,a=e[1].dataType,o=W.normalizeAxis(t.axis,n),l=r[o],p=s.slice(0),f=W.size(p),h=U("input",i,n),d=U("indicesInput",a,s.length),g=le("output",i,p.length),y=[{type:12,data:f},{type:6,data:l},{type:12,data:o}];return y.push(...ie(r,s,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,d,g)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${d.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},Xm=e=>Be({axis:e.axis}),Zm=(e,t)=>{let r=e.inputs;pp(r),e.compute(cp(e.inputs,t))}}),fp,hp,Qm,Jm,N_=j(()=>{me(),xe(),$e(),fp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},hp=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,s,a]=sh.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=W.size(o),p=[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],f=["type","type"];e.length===3&&(p.push(...ie(e[2].dims)),f.push("rank")),p.push(...ie(o));let h=d=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let y=t.alpha===1?"":"value *= uniforms.alpha;",w=U("a",e[0].dataType,e[0].dims),v=U("b",e[1].dataType,e[1].dims),x=w.type.value,_=null,E=[w,v];e.length===3&&(_=U("c",e[2].dataType,e[2].dims.length),E.push(_));let S=le("output",e[0].dataType,o.length);E.push(S);let C=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${d.registerUniforms(C).declareVariables(...E)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${x}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${y}
    ${_!=null?`let cOffset = ${_.broadcastedIndicesToOffset("vec2(m, n)",S)}; value += ${x}(uniforms.beta) * ${_.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:h}},Qm=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Jm=(e,t)=>{fp(e.inputs),e.compute(hp(e.inputs,t))}}),st,mp,eg,Wa,gp,gi,tg,rg=j(()=>{me(),xe(),Xe(),ao(),po(),$e(),ei(),st=(e,t)=>e.length>t&&e[t].dims.length>0&&W.size(e[t].dims)>0?e[t]:void 0,mp=(e,t)=>{let r=e[0],i=st(e,1),n=st(e,2),s=st(e,3),a=st(e,4),o=st(e,5),l=st(e,6),p=st(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=!1,h=r.dims[0],d=r.dims[1],g=r.dims.length===3?f?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],y=d,w=0,v=0,x=Math.floor(g/t.numHeads);if(l&&p){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==h||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=l.dims[2],v=l.dims[2]}else if(l||p)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,y=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(s){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let E=0;if(a){E=8;let B=a.dims;throw B.length===1?B[0]===h?E=1:B[0]===3*h+2&&(E=3):B.length===2&&B[0]===h&&B[1]===y&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, kv_sequence_length)'):new Error("Mask not supported")}let S=!1,C=g;if(n){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');C=n.dims[1]*n.dims[3],S=!0}}let A=w+y,R=!1;if(a)throw new Error("Key padding mask is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "relative_position_bias" is expected to have 4 dimensions');if(o.dims[0]!==h&&o.dims[0]!==1||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==A)throw new Error('Input "relative_position_bias" shape (batch_size, 1, sequence_length, kv_sequence_length)')}return{batchSize:h,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:A,maxSequenceLength:v,inputHiddenSize:0,hiddenSize:g,vHiddenSize:C,headSize:x,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:R,passPastInKv:S,qkvFormat:_}},eg=e=>Be({...e}),Wa=Be({perm:[0,2,1,3]}),gp=(e,t,r,i,n,s,a)=>{let o=[i,n,s],l=W.size(o),p=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],f=h=>{let d=le("qkv_with_bias",t.dataType,o),g=U("qkv",t.dataType,o),y=U("bias",r.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(g,y,d)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},gi=(e,t,r,i,n,s,a,o)=>{let l=s;if(a){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=gp(e,s,a,t,i,r*n,o),l=l.reshape([t,i,r,n]),e.compute(Ft(l,Wa.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,i,r,n])),e.compute(Ft(l,Wa.perm),{inputs:[l],outputs:[-1]})[0]},tg=(e,t)=>{let r=mp(e.inputs,t),i=e.inputs[0],n=st(e.inputs,1),s=st(e.inputs,2),a=st(e.inputs,3),o=st(e.inputs,4),l=st(e.inputs,5),p=st(e.inputs,6),f=st(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&s&&n.dims.length===4&&s.dims.length===4,d=gi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,a,0);if(h)return ki(e,d,n,s,o,void 0,p,f,l,r,t);if(!n||!s)throw new Error("key and value must be provided");let g=gi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,a,r.hiddenSize),y=gi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ki(e,d,g,y,o,void 0,p,f,l,r,t)}}),Ha,yp,wp,Cs,ig,ng=j(()=>{me(),xe(),$e(),Ha=e=>Array.from(e.getBigInt64Array(),Number),yp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ha(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},wp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Cs=(e,t)=>{let r=e[0].dims,i=t??Ha(e[1]),n=wp(r,i),s=W.size(n),a=e[0].dataType,o=U("input",a,r.length),l=le("output",a,n.length),p=f=>`
      const inputShape = ${o.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(o,l)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ie(e[0].dims,n)]}),getShaderSource:p}},ig=e=>{yp(e.inputs),e.compute(Cs(e.inputs),{inputs:[0]})}}),bp,Va,ag,_p,Fa,sg,U_=j(()=>{me(),xe(),Xe(),po(),$e(),rg(),ng(),ei(),bp=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],p=r.dims[1],f=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=p,d=0,g=0,y=Math.floor(f/t.numHeads),w=s&&s.dims.length!==0,v=a&&a.dims.length!==0,x=!0;if(w&&v){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');d=s.dims[1],g=s.dims[1]}else if(w||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');_=2,h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let E=0,S=!1,C=f;if(n){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');C=n.dims[1]*n.dims[3],S=!0}}let A=d+h;return{batchSize:l,sequenceLength:p,pastSequenceLength:d,kvSequenceLength:h,totalSequenceLength:A,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:f,vHiddenSize:C,headSize:y,vHeadSize:Math.floor(C/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:E,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:_,isPastkvBSNH:x}},Va=(e,t,r,i)=>{let n=[i.batchSize,i.totalSequenceLength,i.kvNumHeads,i.headSize],s=4,a=W.size(n)/s,o=i.totalSequenceLength,l=le("present_kv",r,n.length,s),p=U("new_kv",e.dataType,e.dims.length,s),f=t?U("past_kv",t.dataType,t.dims.length,s):void 0,h=Math.ceil(i.headSize/s),d={x:o,y:e.dims[0],z:1},g=t?["rank","rank"]:["rank"],y=[{type:12,data:a},{type:12,data:i.pastSequenceLength},{type:12,data:i.kvSequenceLength},{type:12,data:i.totalSequenceLength}],w=[p];f?(y.push(...ie(e.dims),...ie(t.dims),...ie(n)),w.push(f)):y.push(...ie(e.dims),...ie(n));let v=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],x=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,_=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,E=t?`if (s < past_seqlen) {
        ${x}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${_}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${_}
        }`,S=C=>`

  ${C.registerUniforms(v).declareVariables(...w,l)}
  ${C.mainStart([h,i.kvNumHeads,1])}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${l.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${i.kvNumHeads}u;
    let H = ${h}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${i.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${E}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${i.kvNumHeads}${h}${!!t}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:d,programUniforms:y}),getShaderSource:S}},ag=e=>Be({...e}),_p=Be({perm:[0,2,1,3]}),Fa=(e,t,r,i,n)=>{let s=t,a=i.kvNumHeads,o=i.nReps;return t.dims.length===3&&i.kvSequenceLength!==0&&(s=t.reshape([i.batchSize,i.kvSequenceLength,a,i.headSize])),r?s=e.compute(Va(s,r,s.dataType,i),{inputs:[s,r],outputs:[i.isPastkvBSNH?n:-1]})[0]:s=e.compute(Va(s,void 0,s.dataType,i),{inputs:[s],outputs:[i.isPastkvBSNH?n:-1]})[0],o!==1&&(s=e.compute(Cs([s],[1,1,1,o]),{inputs:[s],outputs:[-1]})[0],s=s.reshape([i.batchSize,i.totalSequenceLength,a*o,i.headSize])),e.compute(Ft(s,_p.perm),{inputs:[s],outputs:[-1]})[0]},sg=(e,t)=>{var l;let r=bp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((l=e.inputs[1])==null?void 0:l.dims.length)===5)throw new Error("Packed KV is not implemented");let i=gi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,a=Fa(e,e.inputs[1],n,r,1),o=Fa(e,e.inputs[2],s,r,2);ki(e,i,a,o,void 0,void 0,void 0,void 0,void 0,r,t)}}),$p,vp,xp,og,W_=j(()=>{me(),xe(),$e(),$p=(e,t)=>{let r=e[0].dims,i=r,n=2,s=W.sizeToDimension(r,n),a=W.sizeFromDimension(r,n),o=Ke(a),l=a/o,p=[r[0],r[1],l],f=["rank","type","type"],h=[{type:12,data:a},{type:12,data:l}];h.push(...ie(p,p));let d=g=>{let y=U("x",e[0].dataType,p.length,o),w=U("scale",e[1].dataType,e[1].dims),v=U("bias",e[2].dataType,e[2].dims),x=le("output",e[0].dataType,p.length,o),_=[y,w,v,x],E=y.type.value,S=o===1?"f32":`vec${o}<f32>`,C=64,A=[{name:"normSize",type:"u32"},{name:"normPackedSize",type:"u32"}];return`
  var<workgroup> meanShared : f32;
  var<workgroup> squaredNormShared : f32;
  var<workgroup> workgroupShared : array<${S}, ${C}>;
  const workgroupSize = ${C}u;
  ${g.registerUniforms(A).declareVariables(..._)}
  ${g.mainStart(C)}
    let norm = global_idx / workgroupSize;
    let batch = norm / uniforms.x_shape[1];
    let channel = norm % uniforms.x_shape[1];
    let localIndex = local_id.x;

    // initialize workgroup memory
    var initial = ${S}(0);
    for (var h = localIndex; h < uniforms.normPackedSize; h += workgroupSize) {
      initial = initial + ${S}(${y.get("batch","channel","h")});
    }
    workgroupShared[localIndex] = initial;
    workgroupBarrier();

    // Calculate the mean of current channel data.
    for (var currSize = workgroupSize >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (localIndex < currSize) {
        workgroupShared[localIndex] = workgroupShared[localIndex] + workgroupShared[localIndex + currSize];
      }
      workgroupBarrier();
    }
    if (localIndex == 0) {
      meanShared = ${cr("workgroupShared[0]",o)} / f32(uniforms.normSize);
    }
    workgroupBarrier();

    // reinitialize workgroup memory.
    initial = ${S}(0);
    for (var h = localIndex; h < uniforms.normPackedSize; h += workgroupSize) {
      let deviation =  ${S}(${y.get("batch","channel","h")}) - ${S}(meanShared);
      initial = initial + deviation * deviation;
    }
    workgroupShared[localIndex] = initial;
    workgroupBarrier();

    // Calculate the sum of square of deviation of current channel data.
    for (var currSize = workgroupSize >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (localIndex < currSize) {
        workgroupShared[localIndex] = workgroupShared[localIndex] + workgroupShared[localIndex + currSize];
      }
      workgroupBarrier();
    }
    if (localIndex == 0) {
      squaredNormShared = ${cr("workgroupShared[0]",o)};
    }
    workgroupBarrier();

    let invStdDev = inverseSqrt(squaredNormShared / f32(uniforms.normSize) + f32(${t.epsilon}));
    let channelScale = invStdDev * f32(${w.getByOffset("channel")});
    let channelShift = f32(${v.getByOffset("channel")}) - meanShared * channelScale;
    for (var h = localIndex; h < uniforms.normPackedSize; h += workgroupSize) {
      let value = ${y.get("batch","channel","h")} * ${E}(${S}(channelScale)) + ${E}(${S}(channelShift));
      ${x.set("batch","channel","h","value")};
    }
  }`};return{name:"InstanceNormalization",shaderCache:{hint:`${t.epsilon};${o}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:s},programUniforms:h}),getShaderSource:d}},vp=(e,t,r,i,n,s,a,o)=>{let l=Ke(a),p=64,f=l===1?"vec2f":`mat2x${l}f`,h=l===1?"f32":`vec${l}f`,d=(A,R)=>`${f}(${A}, ${R})`,g=n*a/l,y=Math.ceil(s/p),w=["type"],v=[{type:12,data:y},{type:12,data:s},{type:12,data:Math.floor(a/l)},{type:12,data:Math.floor(s*a/l)}],x=A=>{let R=U("input",t.dataType,t.dims,l);return`
  ${A.declareVariables(R)}
  @group(0) @binding(1) var<storage, read_write> output : array<${f}>;
  struct Uniforms {wg_size:u32, H:u32, C:u32, image_size:u32};
  @group(0) @binding(2) var<uniform> uniforms: Uniforms;

  ${A.mainStart(p)}
    let currentImageNumber = global_idx / ${p} / uniforms.C;
    let currentChannelNumber = (global_idx / ${p}) % uniforms.C;
    let wgOffset = local_id.x * uniforms.wg_size;
    if (wgOffset >= uniforms.H) {
        return;
    }
    let wgMax = min(wgOffset + uniforms.wg_size, uniforms.H);

    let offset = currentImageNumber * uniforms.image_size + currentChannelNumber;
    var sum = ${Ar("f32",l)};
    var squaredSum = ${Ar("f32",l)};
    for (var i: u32 = wgOffset; i < wgMax; i++) {
        let value = ${h}(input[offset + i * uniforms.C]);
        sum += value;
        squaredSum += value * value;
    }
    output[global_idx] = ${d("sum","squaredSum")};
  }`},_=e.compute({name:"InstanceNormComputeMean",shaderCache:{hint:`${l}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:[n,a,p,2],dataType:1}],dispatchGroup:{x:n*a/l},programUniforms:v}),getShaderSource:x},{inputs:[t],outputs:[-1]})[0],E=[{type:12,data:g},{type:12,data:s},{type:12,data:Math.floor(a/l)},{type:12,data:Math.floor(p*a/l)}],S=["type","type","type"],C=A=>{let R=U("scale",r.dataType,r.dims,l),B=U("bias",i.dataType,i.dims,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${f}>;
  @group(0) @binding(1) var<storage, read> scale : array<${R.type.storage}>;
  @group(0) @binding(2) var<storage, read> bias : array<${B.type.storage}>;
  @group(0) @binding(3) var<storage, read_write> output : array<${f}>;
  struct Uniforms {units_of_work : u32, H: u32, C : u32, image_size : u32};
  @group(0) @binding(4) var<uniform> uniforms: Uniforms;

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.units_of_work")}
    let currentImageNumber = global_idx / uniforms.C;
    let currentChannelNumber = global_idx % uniforms.C;

    let offset = currentImageNumber * uniforms.image_size;
    var sum = ${Ar("f32",l)};
    var squaredSum = ${Ar("f32",l)};
    for (var i: u32 = 0; i < min(${p}, uniforms.H); i++) {
        let value = input[offset + i + currentChannelNumber * ${p}];
        sum += value[0];
        squaredSum += value[1];
    }
    sum = sum / f32(uniforms.H);
    squaredSum = squaredSum / f32(uniforms.H);
    let invStdDev = inverseSqrt(squaredSum - sum * sum + f32(${o}));
    let channelScale = invStdDev * ${h}(scale[currentChannelNumber]);
    let channelShift = ${h}(bias[currentChannelNumber]) - sum * channelScale;

    output[global_idx] = ${d("channelScale","channelShift")};
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:[n,a,2],dataType:1}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:E}),getShaderSource:C},{inputs:[_,r,i],outputs:[-1]})[0]},xp=(e,t,r)=>{let i=t[0].dims,n=i,s=i[0],a=i[i.length-1],o=W.sizeFromDimension(i,1)/a,l=Ke(a),p=W.size(n)/l,f=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],h=["type","type"],d=vp(e,t[0],t[1],t[2],s,o,a,r.epsilon),g=y=>{let w=Ye(t[0].dataType),v=l===1?"vec2f":`mat2x${l}f`,x=l===1?w:`vec${l}<${w}>`,_=U("input",t[0].dataType,t[0].dims,l),E=le("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${_.type.storage}>;
  @group(0) @binding(1) var<storage, read> scaleInput : array<${v}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let currentImageNumber = global_idx / (uniforms.C * uniforms.H);
    let currentChannelNumber = global_idx % uniforms.C;

    let scaleOffset = currentImageNumber * uniforms.C + currentChannelNumber;
    let scale = scaleInput[scaleOffset];
    output[global_idx] = fma(input[global_idx], ${x}(scale[0]), ${x}(scale[1]));
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:g},{inputs:[t[0],d]})},og=(e,t)=>{t.format==="NHWC"?xp(e,e.inputs,t):e.compute($p(e.inputs,t))}}),Sp,Ep,ug,H_=j(()=>{me(),xe(),$e(),Sp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ep=(e,t,r)=>{let i=t.simplified,n=e[0].dims,s=e[1],a=!i&&e[2],o=n,l=W.normalizeAxis(t.axis,n.length),p=W.sizeToDimension(n,l),f=W.sizeFromDimension(n,l),h=W.size(s.dims),d=a?W.size(a.dims):0;if(h!==f||a&&d!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${d}`);let g=[];for(let C=0;C<n.length;++C)C<l?g.push(n[C]):g.push(1);let y=Ke(f),w=["type","type"],v=[{type:12,data:p},{type:1,data:f},{type:12,data:Math.floor(f/y)},{type:1,data:t.epsilon}];a&&w.push("type");let x=r>1,_=r>2,E=C=>{let A=Ye(e[0].dataType),R=[U("x",e[0].dataType,e[0].dims,y),U("scale",s.dataType,s.dims,y)];a&&R.push(U("bias",a.dataType,a.dims,y)),R.push(le("output",e[0].dataType,o,y)),x&&R.push(le("mean_data_output",1,g)),_&&R.push(le("inv_std_output",1,g));let B=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(B).declareVariables(...R)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ar("f32",y)};
    var mean_square_vector = ${Ar("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${jr(A,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${cr("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${cr("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${jr(A,y,"x[j + offset]")};
      let f32scale = ${jr(A,y,"scale[j]")};
      output[j + offset] = ${R[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${jr(A,y,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return x&&S.push({dims:g,dataType:1}),_&&S.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:v}),getShaderSource:E}},ug=(e,t)=>{Sp(e.inputs),e.compute(Ep(e.inputs,t,e.outputCount))}}),Ip,Cp,lg,dg,V_=j(()=>{me(),xe(),Xe(),$e(),Ip=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!W.areEqual(a.dims,[t.n,n,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(W.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,p=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(W.size(l)!==p)throw new Error("zeroPoints input size error.")}},Cp=(e,t,r,i)=>{let n=e[0].dims,s=n.length,a=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=n[s-2],l=t.k,p=t.n,f=n.slice(0,s-2),h=W.size(f),d=t.blockSize/8*t.bits/4,g=e[0].dataType,y=Ke(o),w=Ke(t.k),v=Ke(d),x=Ii(g),_=o*a*x,E=Math.floor(i/_),S=a<=r[0]&&E>0,C=!S||E>=4?Ke(p):E>=2&&Ke(p)>=2?2:1,A=f.concat([o,p]),R=W.size(A)/C/y,B=S?[]:[{type:12,data:R},{type:12,data:t.blockSize}],X=[h,o,l/w],K=W.convertShape(e[1].dims).slice();K.splice(-1,1,d/v),B.push(...ie(X)),B.push(...ie(K)),B.push(...ie(e[2].dims)),e.length===4&&B.push(...ie(W.convertShape(e[3].dims)));let ce=[h,o,p/C];B.push(...ie(ce));let he=ne=>{let Se=X.length,Me=U("a",e[0].dataType,Se,w),ae=U("b",12,K.length,v),fe=U("scales",e[2].dataType,e[2].dims.length),L=[Me,ae,fe],re=e.length===4?U("zero_points",12,e[3].dims.length):void 0;re&&L.push(re);let we=ce.length,z=le("output",e[0].dataType,we,C),Q=[{name:"output_size",type:"u32"},{name:"block_size",type:"u32"}],pe=Ye(e[0].dataType),Oe=(()=>{switch(w){case 1:return`array<${pe}, 8>`;case 2:return`mat4x2<${pe}>`;case 4:return`mat2x4<${pe}>`;default:throw new Error(`${w}-component is not supported.`)}})(),We=`
        for (var word: u32 = 0; word < ${d}; word += ${v}) {
          ${ae.indicesSet("b_indices","2","word")};
          let b_data = ${ae.getByIndices("b_indices")};
          for (var i: u32 = 0; i < ${v}; i++) {
            let b_value: u32 = ${v===1?"b_data":"b_data[word + i]"};
            let b_mask: u32 = 0x0F0F0F0Fu;
            let b_value_lower: vec4<u32> = unpack4xU8(b_value & b_mask);
            let b_value_upper: vec4<u32> = unpack4xU8((b_value >> 4) & b_mask);
            let b_quantized_values = ${Oe}(${Array.from({length:4},(mt,Ze)=>`${pe}(b_value_lower[${Ze}]), ${pe}(b_value_upper[${Ze}])`).join(", ")});
            let b_dequantized_values = ${w===1?`${Oe}(${Array.from({length:8},(mt,Ze)=>`(b_quantized_values[${Ze}] - zero_point) * scale`).join(", ")});`:`(b_quantized_values - ${Oe}(${Array(8).fill("zero_point").join(",")})) * scale;`};
            // Number of B elements per 32-bit word is 32/bits = 32/4 = 8
            for (var m: u32 = 0; m < ${S?o:y}u; m++) {
              ${Me.indicesSet("a_indices",Se-2,S?"m":`row * ${y} + m`)};
              ${Me.indicesSet("a_indices",Se-1,"word_offset")};
              var input_offset = ${Me.indicesToOffset("a_indices")};
              var a_data: ${Oe};
              for (var j: u32 = 0; j < ${8/w}; j++) {
                a_data[j] = ${Me.getByOffset("input_offset")};
                input_offset++;
              }
              ${S?"workgroup_shared[workgroup_shared_offset + m]":"output_values[m]"}${C>1?"[c]":""} += ${Array.from({length:8/w},(mt,Ze)=>`${w===1?`a_data[${Ze}] * b_dequantized_values[${Ze}]`:`dot(a_data[${Ze}], b_dequantized_values[${Ze}])`}`).join(" + ")};
            }
            word_offset += ${8/w};
          }
        }`,Ne=re?`
          zero_point_offset += 4;
          if (zero_point_offset == 32) {
            zero_point_offset = 0;
            zero_point_index++;
            zero_point_word = ${re.getByOffset("zero_point_index")};
          }`:"";return S?`
        var<workgroup> workgroup_shared: array<${z.type.value}, ${o*a}>;
        ${ne.declareVariables(...L,z)}
        ${ne.mainStart([a,1,1])}
          var a_indices: ${Me.type.indices};
          var block = local_id.x;
          var col = workgroup_id.y;
          var batch = workgroup_id.z;
          ${Me.indicesSet("a_indices","0","batch")};
          // Two zero points are packed into one byte when uniforms.bits is 4.
          for (var c: u32 = 0; c < ${C}; c++) {
            let col_times_components_plus_c = col * ${C} + c;
              ${re?`
            var zero_point_bytes_per_col: u32 = (${a} + 1) / 2;
            var zero_point_byte_count: u32 = col_times_components_plus_c * zero_point_bytes_per_col + (block >> 0x1u);
            var zero_point_word_index: u32 = zero_point_byte_count >> 0x2u;
            var zero_point_byte_offset: u32 = zero_point_byte_count & 0x3u;
            var zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32 = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            var zero_point_word: u32 = ${re.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;`:""}
            var b_indices: ${ae.type.indices};
            ${ae.indicesSet("b_indices","0","col_times_components_plus_c")};
            // The scale and zero points are computed per block.
            var scales_index = col_times_components_plus_c * ${a} + block;
            let scale = ${fe.getByOffset("scales_index")};
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${pe}(${re?"(zero_point_word) & 0xFu":8});
            ${ae.indicesSet("b_indices","1","block")};
            var word_offset: u32 = block * ${t.blockSize/w};
            var workgroup_shared_offset: u32 = block * ${o};
            ${We}
          }
          workgroupBarrier();
          var output_indices: ${z.type.indices};
          var elements_per_thread: u32 = ${Math.ceil(o/a)};
          ${z.indicesSet("output_indices","0","batch")};
          ${z.indicesSet("output_indices",we-1,"col")};
          ${z.indicesSet("output_indices",we-2,"local_id.x * elements_per_thread")};
          var output_offset = ${z.indicesToOffset("output_indices")};
          for (var m: u32 = 0u; m < elements_per_thread; m++) {
            var row = m + local_id.x * elements_per_thread;
            if (row < ${o}) {
              var output_value: ${z.type.value} = ${z.type.value}(0);
              var workgroup_shared_offset: u32 = row;
              for (var b: u32 = 0u; b < ${a}u; b++) {
                output_value += workgroup_shared[workgroup_shared_offset];
                workgroup_shared_offset += ${o};
              }
              ${z.setByOffset("output_offset","output_value")};
              output_offset += ${p/C};
            }
          }
        }`:`
        ${ne.registerUniforms(Q).declareVariables(...L,z)}
        ${ne.mainStart()}
          ${ne.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var output_values: array<${z.type.value}, ${y}>;
          var output_indices = ${z.offsetToIndices("global_idx")};
          var col = ${z.indicesGet("output_indices",we-1)};
          var row = ${z.indicesGet("output_indices",we-2)};
          var a_indices: ${Me.type.indices} = output_indices;
          // Two zero points are packed into one byte because uniforms.bits <= 4.
          // zero_point_offset is either 0 or 4. It is bit offset within one byte.
          // TODO support zero_point_offset for bits > 4
          ${re?`
          var zero_point_abs_offset = col * ${C} * ((${a} + 1) / 2);
          var zero_point_index: u32 = zero_point_abs_offset / 4;
          var zero_point_word: u32 = ${re.getByOffset("zero_point_index")};
          var zero_point_offset: u32 = (zero_point_abs_offset % 4) * 8;`:""}
          var scale_index = col * ${a*C};
          var b_indices: ${ae.type.indices};
          for (var c: u32 = 0; c < ${C}; c++) {
            ${ae.indicesSet("b_indices","0",`col * ${C} + c`)};
            var block_offset: u32 = 0;
            for (var block: u32 = 0; block < ${a}; block++) {
              // The scale and zero points are computed per block.
              let scale = ${fe.getByOffset("scale_index")};
              // The default zero point is 8 for unsigned 4-bit quantization.
              let zero_point = ${pe}(${re?"extractBits(zero_point_word, zero_point_offset, 4)":8});
              ${ae.indicesSet("b_indices","1","block")};
              var word_offset: u32 = block_offset;
              ${We}
              scale_index++;
              ${Ne}
              block_offset += uniforms.block_size / ${w};
            }
            // Drop the trailing 4 bits if the zero_poit_offset is not a byte boundary to align with the next byte.
            ${re?`if (zero_point_offset % 8 > 0) {
                ${Ne}
              }`:""}
            }
            for (var k: u32 = 0u; k < ${y}u; k++) {
              ${z.indicesSet("output_indices",we-2,`${y} * row + k`)};
              ${z.setByIndices("output_indices","output_values[k]")}
            }
        }`};return{name:S?"BlockwiseMatMulNBits":"MatMulNBits",shaderCache:{hint:`${t.cacheKey};${o};${g};${e.length}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:A,dataType:g}],name:S?"BlockwiseMatMulNBits":"MatMulNBits",dispatchGroup:S?{x:1,y:Math.ceil(p/C),z:h}:{x:Math.ceil(R/64)},programUniforms:B}),getShaderSource:he}},lg=(e,t)=>{Ip(e.inputs,t);let r=e.getMaxComputeWorkgroupSizes(),i=e.getMaxComputeWorkgroupStoragesize();e.compute(Cp(e.inputs,t,r,i))},dg=e=>Be(e)}),kp,Tp,Ap,zp,Op,Rp,Dp,Mp,pg,F_=j(()=>{me(),xe(),$e(),kp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Tp=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${te("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${te("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Ap=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${te("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${te("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${te("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},zp=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${te("uniforms.x_shape",n,t)})) {
                  k = i32(${te("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${te("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Op=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${te("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${te("uniforms.x_shape",n,t)})) {
                  k -= i32(${te("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${te("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Rp=(e,t,r)=>{switch(r.mode){case 0:return Tp(e,t,r.pads.length);case 1:return Ap(e,t,r.pads.length);case 2:return zp(e,t,r.pads.length);case 3:return Op(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Dp=(e,t)=>{let r=W.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=W.size(r),s=[{type:12,data:n},{type:6,data:t.pads}];t.mode===0&&s.push({type:e[0].dataType,data:t.value}),s.push(...ie(e[0].dims,r));let a=["rank"],o=l=>{let p=le("output",e[0].dataType,r.length),f=U("x",e[0].dataType,i.length),h=f.type.value,d=Rp(p,i.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:h}),`
            ${l.registerUniforms(g).declareVariables(f,p)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${d}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(r)/64)},programUniforms:s}),getShaderSource:o}},Mp=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].getFloat32Array()[0]:0,n=e[0].dims.length,s=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:i,pads:a}}else return t},pg=(e,t)=>{kp(e.inputs);let r=Mp(e.inputs,t);e.compute(Dp(e.inputs,r),{inputs:[0]})}}),ui,ja,La,qa,Ga,Bp,Pp,Ka,Ya,cg,fg,Xa,hg,mg,Za,gg,yg,wg,bg,j_=j(()=>{Dt(),me(),xe(),$e(),ui=e=>{if(Ue.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ja=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],p=t.pads.slice();In.adjustPoolAttributes(r,n,a,o,l,p);let f=In.computePoolOutputShape(r,n,o,l,a,p,t.autoPad),h=Object.assign({},t);s?Object.assign(h,{kernelShape:a,strides:o,pads:p,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:a,strides:o,pads:p,cacheKey:t.cacheKey});let d=f.slice();return d.push(d.splice(1,1)[0]),[h,i?d:f]},La=(e,t)=>{let r=t.format==="NHWC",i=W.size(e),n=W.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:n}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],h=!!(p+f);s.push({type:12,data:o},{type:12,data:l},{type:12,data:p},{type:12,data:f}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let d=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],v=t.pads[t.pads.length-2];d=!!(w+v),s.push({type:12,data:g},{type:12,data:y},{type:12,data:w},{type:12,data:v}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,h,d]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=W.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((p,f)=>p+f);return[s,a,!!l,!1,!1]}},qa=(e,t,r,i,n,s,a,o,l,p,f,h)=>{let d=n.format==="NHWC",g=t.type.value,y=le("output",t.type.tensor,i);if(n.kernelShape.length<=2){let w="",v="",x="",_=r-(d?2:1);if(f?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,n.kernelShape.length===2){let E=r-(d?3:2);h?v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${E}] < 0 || xIndices[${E}] >= uniforms.x_shape[${E}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${g}(${o});
              var pad = 0;
              ${v}
              ${w}
              ${x}
              ${a}

              output[global_idx] = value;
            }`}else{if(d)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=n.kernelShape.length,v=n.pads.length,x="";return p?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${g}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${te("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${te("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${te("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${te("uniforms.pads","j - 2u",v)};
                  ${x}
              }
              ${a}

              output[global_idx] = value;
            }`}},Ga=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Bp=e=>`${Ga(e)};${e.countIncludePad}`,Pp=e=>`${Ga(e)};${e.storageOrder};${e.dilations}`,Ka=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ya=(e,t,r,i)=>{let[n,s]=ja(t,i,r),a=U("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",p="";n.countIncludePad?p+=`value /= ${o}(uniforms.kernelSize);`:p+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,h,d,g,y]=La(s,n);f.push(...ie(t.dims,s));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${d};${g};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(s)/64)},programUniforms:f}),getShaderSource:v=>qa(v,a,t.dims.length,s.length,n,l,p,0,h,d,g,y)}},cg=e=>{let t=e.count_include_pad!==0,r=Ka(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Bp(i)}},fg=(e,t)=>{ui(e.inputs),e.compute(Ya("AveragePool",e.inputs[0],!1,t))},Xa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},hg=e=>{let t=e.format;return{format:t,...Xa,cacheKey:t}},mg=(e,t)=>{ui(e.inputs),e.compute(Ya("GlobalAveragePool",e.inputs[0],!0,t))},Za=(e,t,r,i)=>{let[n,s]=ja(t,i,r),a=`
      value = max(x_val, value);
    `,o="",l=U("x",t.dataType,t.dims.length),p=["rank"],[f,h,d,g,y]=La(s,n);return f.push(...ie(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${d};${g};${y}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(s)/64)},programUniforms:f}),getShaderSource:w=>qa(w,l,t.dims.length,s.length,n,a,o,t.dataType===10?-65504:-1e5,h,d,g,y)}},gg=(e,t)=>{ui(e.inputs),e.compute(Za("MaxPool",e.inputs[0],!1,t))},yg=e=>{let t=e.storage_order,r=e.dilations,i=Ka(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Pp(n)}},wg=e=>{let t=e.format;return{format:t,...Xa,cacheKey:t}},bg=(e,t)=>{ui(e.inputs),e.compute(Za("GlobalMaxPool",e.inputs[0],!0,t))}}),Np,Up,_g,L_=j(()=>{Dt(),me(),$e(),Np=(e,t,r)=>{let i=e===t,n=e<t&&r<0,s=e>t&&r>0;if(i||n||s)throw new Error("Range these inputs' contents are invalid.")},Up=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),s=[n],a=n,o=[{type:12,data:a},{type:i,data:e},{type:i,data:r},...ie(s)],l=p=>{let f=le("output",i,s.length),h=f.type.value,d=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${p.registerUniforms(d).declareVariables(f)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},_g=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),Ue.webgpu.validateInputContent&&Np(t,r,i),e.compute(Up(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Wp,Hp,Vp,Fp,jp,Lp,qp,Gp,Kp,Yp,Xp,Qa,Zp,Qp,Jp,ec,tc,$g,vg,q_=j(()=>{me(),xe(),Xe(),$e(),Wp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Hp=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,s)=>i[n]=e[s]),i},Vp=(e,t,r,i,n,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(f=>s.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length>0){if(e[o].getFloat32Array().forEach(f=>i.push(f)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Wp(i,t),t.axes.length>0&&Hp(i,t.axes,p).forEach((f,h)=>i[h]=f)}if(l>0&&e.length>l&&(e[l].getBigInt64Array().forEach(f=>n.push(Number(f))),n.length!==p||r>=18&&n.length===t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Fp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",jp=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Lp=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,a)=>{i[s]=n[a],i[a+r]=n[t.length+a]}),i):n},qp=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>n.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,a)=>n[s]=r[a])}else r.forEach(s=>n.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((s,a)=>Math.round(s*t[a]))}return n},Gp=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>n[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),n.forEach((s,a)=>n[a]=Math.round(s*t[a]))),n},Kp=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${te("uniforms.scales","i",i)};
        var roi_low = ${te("uniforms.roi","i",n)};
        var roi_hi = ${te("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${te("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Yp=(e,t,r,i,n,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${te("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${te("uniforms.roi","i",s)};
          var roi_hi = ${te("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${te("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,Xp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${te("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Qa=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Zp=(e,t,r,i,n)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Qa(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${a}];
      var col:${p} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Qp=(e,t,r,i,n,s,a,o,l,p)=>{let f=r.length===2,[h,d]=f?[0,1]:[2,3],g=e.type.value,y=w=>{let v=w===h?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[w]},
        ${i[w]}, ${r[w]}, ${s[w]}, ${s[w]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${g} = originalIdx + ${g}(i);
          if (${v} < 0 || ${v} >= ${r[w]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${v} = max(0, min(${v}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${v})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(h)};
    ${y(d)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Jp=(e,t,r,i,n)=>{let[s,a,o,l,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Qa(e,p,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${a}];
      var height:${f} = originalIndices[${o}];
      var width:${f} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ec=(e,t,r,i,n,s)=>{let a=e.dims,o=Lp(s,t.axes,a.length),l=qp(a,i,n,t.axes),p=i.slice();i.length===0&&(p=a.map((_,E)=>_===0?1:l[E]/_),t.keepAspectRatioPolicy!=="stretch"&&(l=Gp(a,p,t)));let f=le("output",e.dataType,l.length),h=U("input",e.dataType,a.length),d=W.size(l),g=a.length===l.length&&a.every((_,E)=>_===l[E]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,v=h.type.value,x=_=>`
      ${g?"":`
      ${Fp(t.coordinateTransformMode,v)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Xp(h,a)};
              ${jp(t.nearestMode,r,v)};
              ${Yp(h,f,a,l,p.length,o.length,y)};
              `;case"linear":return`
              ${Kp(f,a,l,p.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Zp(h,f,a,y,w)}`;if(a.length===3||a.length===5)return`${Jp(h,f,a,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Qp(h,f,a,l,p,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",o.length).declareVariables(h,f)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?p:""}|${n.length>0?n:""}|${o.length>0?o:""}|${g}|${a}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},{type:1,data:p},{type:1,data:o},...ie(a,l)]})}},tc=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},$g=(e,t)=>{let r=[],i=[],n=[],s=tc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Vp(e.inputs,t,s,r,i,n),e.compute(ec(e.inputs[0],t,s,r,i,n),{inputs:[0]})},vg=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return Be({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:p})}}),rc,ic,xg,G_=j(()=>{me(),xe(),Xe(),$e(),rc=(e,t)=>{let[r,i,n,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!W.areEqual(i.dims,[])&&!W.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!W.areEqual(n.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],p=r.dims[r.dims.length-2],f=n.dims[0],h=W.sizeFromDimension(r.dims,1)/p,d=o===0?n.dims[1]*2:h/a;if(o>d)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(p>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ic=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:s}=t,a=e[0].dims[0],o=W.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],p=o/l,f=e[2].dims[1],h=n===0?f*2:p/i,d=new Array(a,l,p/h,h-f),g=W.computeStrides(d),y=[{type:1,data:s},{type:12,data:d},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[o,p,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,h,l*h,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=v=>{let x=U("input",e[0].dataType,e[0].dims.length),_=U("position_ids",e[1].dataType,e[1].dims.length),E=U("cos_cache",e[2].dataType,e[2].dims.length),S=U("sin_cache",e[3].dataType,e[3].dims.length),C=le("output",e[0].dataType,e[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:d.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${v.declareVariables(x,_,E,S,C)}

        ${v.mainStart(Qr)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",le("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Be({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(d)/Qr)},programUniforms:y})}},xg=(e,t)=>{rc(e.inputs,t),e.compute(ic(e.inputs,t))}}),nc,ac,Sg,K_=j(()=>{me(),xe(),$e(),nc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},ac=(e,t,r,i)=>{let n=t.simplified,s=e[0].dims,a=W.size(s),o=s,l=a,p=s.slice(-1)[0],f=i?s.slice(0,-1).concat(1):[],h=!n&&e.length>3,d=e.length>4,g=i&&r>1,y=i&&r>2,w=r>3,v=64,x=Ke(p),_=[{type:12,data:l},{type:12,data:x},{type:12,data:p},{type:1,data:t.epsilon}],E=C=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],R=[U("x",e[0].dataType,e[0].dims,x),U("skip",e[1].dataType,e[1].dims,x),U("gamma",e[2].dataType,e[2].dims,x)];h&&R.push(U("beta",e[3].dataType,e[3].dims,x)),d&&R.push(U("bias",e[4].dataType,e[4].dims,x)),R.push(le("output",e[0].dataType,o,x)),g&&R.push(le("mean_output",1,f)),y&&R.push(le("inv_std_output",1,f)),w&&R.push(le("input_skip_bias_sum",e[0].dataType,o,x));let B=Ye(e[0].dataType),X=Ye(1,x);return`

      ${C.registerUniforms(A).declareVariables(...R)}
      var<workgroup> sum_shared : array<${X}, ${v}>;
      var<workgroup> sum_squared_shared : array<${X}, ${v}>;

      ${C.mainStart([v,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${v};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${v};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${v-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${d?"bias[offset1d + i]":B+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${jr(B,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${v};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${cr("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${cr("square_sum",x)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${B}(mean)`}) *
            ${B}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:f,dataType:1}),r>2&&S.push({dims:f,dataType:1}),r>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${g};${y};${w}`,inputDependencies:e.map((C,A)=>"type")},getShaderSource:E,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/p)},programUniforms:_})}},Sg=(e,t)=>{nc(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(ac(e.inputs,t,e.outputCount,!1),{outputs:r})}}),sc,li,oc,Ja,uc,lc,Eg,Ig,Y_=j(()=>{me(),xe(),Xe(),$e(),sc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},li=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},oc=(e,t)=>{if(e.length>1){let r=li(e,1),i=li(e,2),n=li(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),Be({starts:r,ends:i,axes:n})}else return t},Ja=(e,t,r,i,n)=>{let s=e;return e<0&&(s+=r[i[t]]),n[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},uc=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${te("uniforms.input_shape","i",r.length)};
            let steps_i = ${te("uniforms.steps","i",r.length)};
            let signs_i = ${te("uniforms.signs","i",r.length)};
            let starts_i = ${te("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,lc=(e,t)=>{let r=e[0].dims,i=W.size(r),n=t.axes.length>0?W.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=li(e,4);s.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(n.length).fill(1));let a=t.starts.map((x,_)=>Ja(x,_,r,n,s)),o=t.ends.map((x,_)=>Ja(x,_,r,n,s));if(n.length!==a.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let x=0;x<r.length;++x)n.includes(x)||(a.splice(x,0,0),o.splice(x,0,r[x]),s.splice(x,0,1));let l=s.map(x=>Math.sign(x));s.forEach((x,_,E)=>{if(x<0){let S=(o[_]-a[_])/x,C=a[_],A=C+S*s[_];a[_]=A,o[_]=C,E[_]=-x}});let p=r.slice(0);n.forEach((x,_)=>{p[x]=Math.ceil((o[x]-a[x])/s[x])});let f={dims:p,dataType:e[0].dataType},h=le("output",e[0].dataType,p.length),d=U("input",e[0].dataType,e[0].dims.length),g=W.size(p),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],w=[{type:12,data:g},{type:12,data:a},{type:6,data:l},{type:12,data:s},...ie(e[0].dims,p)],v=x=>`
      ${x.registerUniforms(y).declareVariables(d,h)}
        ${uc(d,h,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",d.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},Eg=(e,t)=>{sc(e.inputs,t);let r=oc(e.inputs,t);e.compute(lc(e.inputs,r),{inputs:[0]})},Ig=e=>{let t=e.starts,r=e.ends,i=e.axes;return Be({starts:t,ends:r,axes:i})}}),dc,pc,Cg,kg,X_=j(()=>{me(),xe(),Xe(),$e(),dc=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},pc=(e,t)=>{let r=e.dims,i=W.size(r),n=64,s=t.axis;if(s<0&&(s=r.length+s),s<r.length-1)throw new Error("softmax only supports last axis for now.");let a=r[s],o=i/a,l=Ke(a),p=a/l,f=(v,x)=>x===4?`max(max(${v}.x, ${v}.y), max(${v}.z, ${v}.w))`:x===2?`max(${v}.x, ${v}.y)`:x===3?`max(max(${v}.x, ${v}.y), ${v}.z)`:v,h=U("x",e.dataType,e.dims,l),d=le("result",e.dataType,e.dims,l),g=h.type.value,y=Ye(e.dataType)==="f32"?`var threadMax = ${g}(-3.402823e+38f);`:`var threadMax = ${g}(-65504.0h);`,w=v=>`
      var<workgroup> rowMaxShared : ${g};
      var<workgroup> rowSumShared : ${g};
      var<workgroup> threadShared : array<${g}, ${n}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${g} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${g}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${v.registerUniform("packedCols","i32").declareVariables(h,d)}
      ${v.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${n};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${y}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${g}(${f("threadShared[0]",l)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${g}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${g}(${cr("threadShared[0]",l)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`;return{name:"Softmax",shaderCache:{hint:`${l}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:o},programUniforms:[{type:6,data:p}]}),getShaderSource:w}},Cg=(e,t)=>{dc(e.inputs),e.compute(pc(e.inputs[0],t))},kg=e=>Be({axis:e.axis})}),cc,fc,hc,mc,gc,Tg,Ag,Z_=j(()=>{me(),xe(),Xe(),$e(),cc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},fc=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),Be({numOutputs:i,axis:t.axis,splitSizes:r})},hc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${te("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,mc=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},gc=(e,t)=>{let r=e[0].dims,i=W.size(r),n=e[0].dataType,s=W.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=U("input",n,r.length),l=new Array(t.numOutputs),p=[],f=[],h=0,d=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],l[y]=h;let w=r.slice();w[t.axis]=t.splitSizes[y],f.push(w),a[y]=le(`output${y}`,n,w.length),p.push({dims:f[y],dataType:e[0].dataType})}d.push({type:12,data:l},...ie(r,...f));let g=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${hc(l.length)}
  ${mc(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${te("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d})}},Tg=(e,t)=>{cc(e.inputs);let r=e.inputs.length===1?t:fc(e.inputs,t);e.compute(gc(e.inputs,r),{inputs:[0]})},Ag=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Be({axis:t,numOutputs:i,splitSizes:r})}}),yc,wc,zg,Q_=j(()=>{me(),xe(),$e(),yc=(e,t,r,i,n)=>{let s=le("output_data",n,r.length,4),a=U("a_data",t[1].dataType,t[1].dims.length,4),o=U("b_data",t[2].dataType,t[2].dims.length,4),l=U("c_data",t[0].dataType,t[0].dims.length,4),p,f=(h,d,g)=>`select(${d}, ${h}, ${g})`;if(!i)p=s.setByOffset("global_idx",f(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(d,g,y="")=>{let w=`a_data[index_a${g}][component_a${g}]`,v=`b_data[index_b${g}][component_b${g}]`,x=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${s.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${a.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let offset_b${g} = ${o.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${d}[${g}] = ${y}(${f(w,v,x)});
          `};n===9?p=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},wc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,s=!(W.areEqual(t,r)&&W.areEqual(r,i)),a=t,o=W.size(t);if(s){let p=Zr.calcShape(Zr.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");a=p,o=W.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>yc(p,e,a,s,n),getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ie(i,t,r,a)]})}},zg=e=>{e.compute(wc(e.inputs))}}),Og,J_=j(()=>{b_(),po(),__(),$_(),v_(),x_(),S_(),Bm(),A_(),z_(),O_(),R_(),D_(),M_(),B_(),P_(),N_(),U_(),W_(),H_(),Mm(),V_(),rg(),F_(),j_(),L_(),lo(),q_(),G_(),K_(),Y_(),X_(),Z_(),ng(),ei(),co(),Q_(),Og=new Map([["Abs",[Mh]],["Acos",[Bh]],["Acosh",[Ph]],["Add",[ym]],["ArgMax",[zh,bs]],["ArgMin",[Ah,bs]],["Asin",[Nh]],["Asinh",[Uh]],["Atan",[Wh]],["Atanh",[Hh]],["Attention",[Oh]],["AveragePool",[fg,cg]],["BatchNormalization",[Rh]],["BiasAdd",[Dh]],["BiasSplitGelu",[gm]],["Cast",[Fh,Vh]],["Ceil",[Lh]],["Clip",[jh]],["Concat",[Cm,km]],["Conv",[Es,Ss]],["ConvTranspose",[Um,Nm]],["Cos",[qh]],["Cosh",[Gh]],["CumSum",[Wm,Hm]],["DepthToSpace",[Vm,Fm]],["Div",[wm]],["Einsum",[jm,Lm]],["Elu",[Kh,mi]],["Equal",[bm]],["Erf",[Yh]],["Exp",[Xh]],["Expand",[qm]],["FastGelu",[Gm]],["Floor",[Zh]],["FusedConv",[Es,Ss]],["Gather",[Ym,Km]],["GatherElements",[Zm,Xm]],["Gelu",[Qh]],["Gemm",[Jm,Qm]],["GlobalAveragePool",[mg,hg]],["GlobalMaxPool",[bg,wg]],["Greater",[xm]],["GreaterOrEqual",[Em]],["GroupQueryAttention",[sg,ag]],["HardSigmoid",[sm,am]],["InstanceNormalization",[og]],["LayerNormalization",[ug]],["LeakyRelu",[Jh,mi]],["Less",[Sm]],["LessOrEqual",[Im]],["Log",[hm]],["MatMul",[Dm]],["MatMulNBits",[lg,dg]],["MaxPool",[gg,yg]],["Mul",[_m]],["MultiHeadAttention",[tg,eg]],["Neg",[tm]],["Not",[em]],["Pad",[pg]],["Pow",[$m]],["QuickGelu",[mm,mi]],["Range",[_g]],["Reciprocal",[rm]],["ReduceMin",[Eh]],["ReduceMean",[_h]],["ReduceMax",[Sh]],["ReduceSum",[Ch]],["ReduceProd",[Ih]],["ReduceL1",[$h]],["ReduceL2",[vh]],["ReduceLogSum",[Th]],["ReduceLogSumExp",[xh]],["ReduceSumSquare",[kh]],["Relu",[im]],["Resize",[$g,vg]],["RotaryEmbedding",[xg]],["Sigmoid",[nm]],["Sin",[om]],["Sinh",[um]],["Slice",[Eg,Ig]],["SkipLayerNormalization",[Sg]],["Split",[Tg,Ag]],["Sqrt",[lm]],["Softmax",[Cg,kg]],["Sub",[vm]],["Tan",[dm]],["Tanh",[pm]],["ThresholdedRelu",[fm,mi]],["Tile",[ig]],["Transpose",[uh,lh]],["Where",[zg]]])}),Rg,e$=j(()=>{Dt(),br(),$e(),Rg=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){jt(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let p of t)o.push({binding:o.length,resource:{buffer:p.buffer}});for(let p of r)o.push({binding:o.length,resource:{buffer:p.buffer}});n&&o.push({binding:o.length,resource:n});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Rt(e.programInfo.name)}dispose(){}build(e,t){jt(e.name);let r=this.backend.device,i=[];r.features.has("shader-f16")&&i.push("enable f16;");let n=oh(t,this.backend.device.limits),s=e.getShaderSource(n),a=`${i.join(`
`)}
${n.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});je("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Rt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let s=t*r*i,a=Math.ceil(Math.sqrt(s));if(a>n){if(a=Math.ceil(Math.cbrt(s)),a>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),bc,_c,$c,Dg,t$=j(()=>{Dt(),me(),br(),g_(),y_(),J_(),e$(),bc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let s=e[i].dims.length;r.push(`${n};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${n};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},_c=(e,t,r)=>{var n,s;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${bc(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,i},$c=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Dg=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(i),this.adapterInfo=new $c(t.info||await t.requestAdapterInfo()),this.gpuDataManager=ah(this),this.programManager=new Rg(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ih(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;jt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let s=r[n],a=s.kernelId,o=this.kernels.get(a),l=o.kernelType,p=o.kernelName,f=s.programName,h=s.inputTensorViews,d=s.outputTensorViews,g=t[n*2],y=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let w=Number(g-this.queryTimeBase),v=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(x=>({dims:x.dims,dataType:kr(x.dataType)})),outputsMetadata:d.map(x=>({dims:x.dims,dataType:kr(x.dataType)})),kernelId:a,kernelType:l,kernelName:p,programName:f,startTime:w,endTime:v});else{let x="";h.forEach((E,S)=>{x+=`input[${S}]: [${E.dims}] | ${kr(E.dataType)}, `});let _="";d.forEach((E,S)=>{_+=`output[${S}]: [${E.dims}] | ${kr(E.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${p}|${f}" ${x}${_}execution time: ${v-w} ns`)}xn("GPU",`${f}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Rt()}run(e,t,r,i,n,s){jt(e.name);let a=[];for(let _=0;_<t.length;++_){let E=t[_].data;if(E===0)continue;let S=this.gpuDataManager.get(E);if(!S)throw new Error(`no GPU data for input: ${E}`);a.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:p}=e.getRunData(t),f=r.length===0?o.map((_,E)=>E):r;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let h=[],d=[];for(let _=0;_<o.length;++_){if(!Number.isInteger(f[_])||f[_]<-3||f[_]>=s)throw new Error(`Invalid output index: ${f[_]}`);if(f[_]===-3)continue;let E=f[_]===-1,S=f[_]===-2,C=E||S?n(o[_].dataType,o[_].dims):i(f[_],o[_].dataType,o[_].dims);if(h.push(C),C.data===0)continue;let A=this.gpuDataManager.get(C.data);if(!A)throw new Error(`no GPU data for output: ${C.data}`);if(E&&this.temporaryData.push(A),S){let R=this.kernelPersistentData.get(this.currentKernelId);R||(R=[],this.kernelPersistentData.set(this.currentKernelId,R)),R.push(A)}d.push(A)}if(a.length!==t.length||d.length!==h.length){if(d.length===0)return Rt(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(p){let _=0,E=[];p.forEach(R=>{let B=typeof R.data=="number"?[R.data]:R.data;if(B.length===0)return;let X=R.type===10?2:4,K,ce;R.type===10?(ce=B.length>4?16:B.length>2?8:B.length*X,K=B.length>4?16:X*B.length):(ce=B.length<=2?B.length*X:16,K=16),_=Math.ceil(_/ce)*ce,E.push(_);let he=R.type===10?8:4;_+=B.length>4?Math.ceil(B.length/he)*K:B.length*X});let S=16;_=Math.ceil(_/S)*S;let C=new ArrayBuffer(_);p.forEach((R,B)=>{let X=E[B],K=typeof R.data=="number"?[R.data]:R.data;if(R.type===6)new Int32Array(C,X,K.length).set(K);else if(R.type===12)new Uint32Array(C,X,K.length).set(K);else if(R.type===10)new Uint16Array(C,X,K.length).set(K);else if(R.type===1)new Float32Array(C,X,K.length).set(K);else throw new Error(`Unsupported uniform type: ${kr(R.type)}`)});let A=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,C,0,_),this.gpuDataManager.release(A.id),g={offset:0,size:_,buffer:A.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),w=y[1]===1&&y[2]===1,v=_c(e,t,w),x=this.programManager.getArtifact(v);if(x||(x=this.programManager.build(e,y),this.programManager.setArtifact(v,x),je("info",()=>`[artifact] key: ${v}, programName: ${e.name}`)),p&&x.uniformVariablesInfo){if(p.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${p.length} in program "${x.programInfo.name}".`);for(let _=0;_<p.length;_++){let E=p[_],S=E.type,C=typeof E.data=="number"?1:E.data.length,[A,R]=x.uniformVariablesInfo[_];if(S!==A||C!==R)throw new Error(`Uniform variable ${_} mismatch: expect type ${A} with size ${R}, got type ${S} with size ${C} in program "${x.programInfo.name}".`)}}if(je("info",()=>`[ProgramManager] run "${e.name}" (key=${v}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(x,a,d,y,g),Rt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Og.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,s=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),je("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${p}`)),1}finally{l&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${n}] ${s}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let s=n.get(t),a=this.gpuDataManager.registerExternalBuffer(r,i,s==null?void 0:s[1]);return n.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[1])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await ys(this,e,t);return nh(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){je("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){je("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){je("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(s.computePipeline),n.setBindGroup(0,s.bindGroup),n.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Mg={};Ai(Mg,{init:()=>Bg});var an,vc,Bg,r$=j(()=>{me(),t$(),br(),xe(),an=class Pg{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(W.size(t)!==W.size(this.dims))throw new Error("Invalid new shape");return new Pg(this.module,this.dataType,this.data,t)}},vc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.HEAPU32,n=r>>>2;this.opKernelContext=i[n++];let s=i[n++];this.outputCount=i[n++],this.customDataOffset=i[n++],this.customDataSize=i[n++];let a=[];for(let o=0;o<s;o++){let l=i[n++],p=i[n++],f=i[n++],h=[];for(let d=0;d<f;d++)h.push(i[n++]);a.push(new an(e,l,p,h))}this.inputs=a}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(o,l,p)=>new an(this.module,l,this.output(o,p),p),s=(o,l)=>{let p=Ii(o);if(!p)throw new Error(`Unsupported data type: ${o}`);let f=p*W.size(l),h=f>0?this.backend.gpuDataManager.create(f).id:0;return new an(this.module,o,h,l)};return this.backend.run(e,r,i,n,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.stackAlloc((1+t.length)*4),n=i>>2;this.module.HEAPU32[n++]=t.length;for(let s=0;s<t.length;s++)this.module.HEAPU32[n++]=t[s];return this.module._JsepOutput(this.opKernelContext,e,i)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Bg=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=new Dg;await s.initialize(r,i),n("webgpu",[s,a=>s.alloc(a),a=>s.free(a),(a,o,l,p=!1)=>{if(p)je("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${a}, dst=${o}, size=${l}`),s.memcpy(a,o);else{je("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${a}, gpuDataId=${o}, size=${l}`);let f=t.HEAPU8.subarray(a>>>0,(a>>>0)+l);s.upload(o,f)}},async(a,o,l)=>{je("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${o}, size=${l}`),await s.download(a,()=>t.HEAPU8.subarray(o>>>0,(o>>>0)+l))},(a,o,l)=>s.createKernel(a,o,l,t.UTF8ToString(t._JsepGetNodeName(o))),a=>s.releaseKernel(a),(a,o,l,p)=>{je("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${a}, contextDataOffset=${o}`);let f=new vc(t,s,o);return s.computeKernel(a,f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else n("webnn")}}),xc,yo,wo,ir,Sc,An,bo,_o,es,$o,vo,xo,Ng=j(()=>{h_(),m_(),me(),Jr(),to(),rh(),xc=(e,t)=>{Je()._OrtInit(e,t)!==0&&Fe("Can't initialize onnxruntime.")},yo=async e=>{xc(e.wasm.numThreads,En(e.logLevel))},wo=async(e,t)=>{{let r=(r$(),vn(Mg)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:s}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Je(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Je(),e)}}},ir=new Map,Sc=e=>{let t=Je(),r=t.stackSave();try{let i=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,i,i+4)!==0&&Fe("Can't get session input/output count."),[t.HEAP32[i/4],t.HEAP32[i/4+1]]}finally{t.stackRestore(r)}},An=e=>{let t=Je(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},bo=async(e,t)=>{var h,d;let r,i,n=Je();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=An(e);let s=0,a=0,o=0,l=[],p=[],f=[];try{if([a,l]=th(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let S=[];for(let C of t.externalData){let A=typeof C=="string"?C:C.path;S.push(no(typeof C=="string"?C:C.data).then(R=>{n.mountExternalData(A,R)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(n.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof S!="string"){let C=S,A=C==null?void 0:C.context,R=C==null?void 0:C.gpuDevice,B=C==null?void 0:C.deviceType,X=C==null?void 0:C.numThreads,K=C==null?void 0:C.powerPreference;A?n.currentContext=A:R?n.currentContext=await navigator.ml.createContext(R):n.currentContext=await navigator.ml.createContext({deviceType:B,numThreads:X,powerPreference:K})}else n.currentContext=await navigator.ml.createContext();break}s=await n._OrtCreateSession(r,i,a),s===0&&Fe("Can't create a session."),n.currentContext&&(n.currentContext=void 0);let[g,y]=Sc(s),w=!!(t!=null&&t.enableGraphCapture),v=[],x=[],_=[];for(let S=0;S<g;S++){let C=n._OrtGetInputName(s,S);C===0&&Fe("Can't get an input name."),p.push(C),v.push(n.UTF8ToString(C))}for(let S=0;S<y;S++){let C=n._OrtGetOutputName(s,S);C===0&&Fe("Can't get an output name."),f.push(C);let A=n.UTF8ToString(C);x.push(A);{if(w&&(t==null?void 0:t.preferredOutputLocation)===void 0){_.push("gpu-buffer");continue}let R=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((h=t==null?void 0:t.preferredOutputLocation)==null?void 0:h[A])??"cpu";if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}.`);if(w&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(R)}}let E=null;return _.some(S=>S==="gpu-buffer")&&(o=n._OrtCreateBinding(s),o===0&&Fe("Can't create IO binding."),E={handle:o,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(S=>gs(S))}),ir.set(s,[s,p,f,E,w,!1]),[s,v,x]}catch(g){throw p.forEach(y=>n._OrtFree(y)),f.forEach(y=>n._OrtFree(y)),o!==0&&n._OrtReleaseBinding(o),s!==0&&n._OrtReleaseSession(s),g}finally{n._free(r),a!==0&&n._OrtReleaseSessionOptions(a),l.forEach(g=>n._free(g)),(d=n.unmountExternalData)==null||d.call(n)}},_o=e=>{var l;let t=Je(),r=ir.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle),t._OrtReleaseBinding(a.handle)),(l=t.jsepOnReleaseSession)==null||l.call(t,e),n.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(i),ir.delete(e)},es=(e,t,r,i,n,s=!1)=>{if(!e){t.push(0);return}let a=Je(),o=e[0],l=e[1],p=e[3],f,h;if(o==="string"&&p==="gpu-buffer")throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let y=e[2].gpuBuffer,w=Ii(ms(o));h=l.reduce((x,_)=>x*_,1)*w;let v=a.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=v(i,n,y,h)}else{let y=e[2];if(Array.isArray(y)){h=4*y.length,f=a._malloc(h),r.push(f);let w=f/4;for(let v=0;v<y.length;v++){if(typeof y[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);a.HEAPU32[w++]=tt(y[v],r)}}else h=y.byteLength,f=a._malloc(h),r.push(f),a.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,h),f)}let d=a.stackSave(),g=a.stackAlloc(4*l.length);try{let y=g/4;l.forEach(v=>a.HEAP32[y++]=v);let w=a._OrtCreateTensor(ms(o),f,h,g,l.length,gs(p));w===0&&Fe(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(w)}finally{a.stackRestore(d)}},$o=async(e,t,r,i,n,s)=>{var K,ce;let a=Je(),o=ir.get(e);if(!o)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=o[0],p=o[1],f=o[2],h=o[3],d=o[4],g=o[5],y=t.length,w=i.length,v=0,x=[],_=[],E=[],S=[],C=a.stackSave(),A=a.stackAlloc(y*4),R=a.stackAlloc(y*4),B=a.stackAlloc(w*4),X=a.stackAlloc(w*4);try{[v,x]=eh(s);for(let L=0;L<y;L++)es(r[L],_,S,e,t[L],d);for(let L=0;L<w;L++)es(n[L],E,S,e,y+i[L],d);let he=A/4,ne=R/4,Se=B/4,Me=X/4;for(let L=0;L<y;L++)a.HEAPU32[he++]=_[L],a.HEAPU32[ne++]=p[t[L]];for(let L=0;L<w;L++)a.HEAPU32[Se++]=E[L],a.HEAPU32[Me++]=f[i[L]];if(h&&!g){let{handle:L,outputPreferredLocations:re,outputPreferredLocationsEncoded:we}=h;if(p.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${p.length}).`);for(let z=0;z<y;z++){let Q=t[z];await a._OrtBindInput(L,p[Q],_[z])!==0&&Fe(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<w;z++){let Q=i[z];(K=n[z])!=null&&K[3]?a._OrtBindOutput(L,f[Q],E[z],0)!==0&&Fe(`Can't bind pre-allocated output[${z}] for session=${e}.`):a._OrtBindOutput(L,f[Q],0,we[Q])!==0&&Fe(`Can't bind output[${z}] to ${re[z]} for session=${e}.`)}ir.set(e,[l,p,f,h,d,!0])}(ce=a.jsepOnRunStart)==null||ce.call(a,l);let ae;h?ae=await a._OrtRunWithBinding(l,h.handle,w,B,v):ae=await a._OrtRun(l,R,A,y,X,w,B,v),ae!==0&&Fe("failed to call OrtRun().");let fe=[];for(let L=0;L<w;L++){let re=a.HEAPU32[B/4+L];if(re===E[L]){fe.push(n[L]);continue}let we=a.stackSave(),z=a.stackAlloc(4*4),Q=!1,pe,Oe=0;try{a._OrtGetTensorData(re,z,z+4,z+8,z+12)!==0&&Fe(`Can't access output tensor data on index ${L}.`);let We=z/4,Ne=a.HEAPU32[We++];Oe=a.HEAPU32[We++];let mt=a.HEAPU32[We++],Ze=a.HEAPU32[We++],rt=[];for(let Ge=0;Ge<Ze;Ge++)rt.push(a.HEAPU32[mt/4+Ge]);a._OrtFree(mt);let Ve=rt.reduce((Ge,I)=>Ge*I,1);pe=kr(Ne);let Zt=h==null?void 0:h.outputPreferredLocations[i[L]];if(pe==="string"){if(Zt==="gpu-buffer")throw new Error("String tensor is not supported on GPU.");let Ge=[],I=Oe/4;for(let T=0;T<Ve;T++){let D=a.HEAPU32[I++],H=T===Ve-1?void 0:a.HEAPU32[I]-D;Ge.push(a.UTF8ToString(D,H))}fe.push([pe,rt,Ge,"cpu"])}else if(Zt==="gpu-buffer"&&Ve>0){let Ge=a.jsepGetBuffer;if(!Ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let I=Ge(Oe),T=Ii(Ne);if(T===void 0||!io(pe))throw new Error(`Unsupported data type: ${pe}`);Q=!0,fe.push([pe,rt,{gpuBuffer:I,download:a.jsepCreateDownloader(I,Ve*T,pe),dispose:()=>{a._OrtReleaseTensor(re)}},"gpu-buffer"])}else{let Ge=ro(pe),I=new Ge(Ve);new Uint8Array(I.buffer,I.byteOffset,I.byteLength).set(a.HEAPU8.subarray(Oe,Oe+I.byteLength)),fe.push([pe,rt,I,"cpu"])}}finally{a.stackRestore(we),pe==="string"&&Oe&&a._free(Oe),Q||a._OrtReleaseTensor(re)}}return h&&!d&&(a._OrtClearBoundOutputs(h.handle),ir.set(e,[l,p,f,h,d,!1])),fe}finally{a.stackRestore(C),_.forEach(he=>a._OrtReleaseTensor(he)),E.forEach(he=>a._OrtReleaseTensor(he)),S.forEach(he=>a._free(he)),v!==0&&a._OrtReleaseRunOptions(v),x.forEach(he=>a._free(he))}},vo=e=>{let t=Je(),r=ir.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Fe("Can't get an profile file name."),t._OrtFree(n)},xo=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),nr,dt,Wr,di,pi,sn,ts,on,Sr,Er,Ec,Ug,Wg,Hg,Vg,Fg,jg,Lg,qg=j(()=>{Dt(),Ng(),Jr(),Vn(),nr=()=>!!Ue.wasm.proxy&&typeof document<"u",Wr=!1,di=!1,pi=!1,on=new Map,Sr=(e,t)=>{let r=on.get(e);r?r.push(t):on.set(e,[t])},Er=()=>{if(Wr||!di||pi||!dt)throw new Error("worker not ready")},Ec=e=>{switch(e.data.type){case"init-wasm":Wr=!1,e.data.err?(pi=!0,ts[1](e.data.err)):(di=!0,ts[0]()),sn&&(URL.revokeObjectURL(sn),sn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=on.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ug=async()=>{if(!di){if(Wr)throw new Error("multiple calls to 'initWasm()' detected.");if(pi)throw new Error("previous call to 'initWasm()' failed.");if(Wr=!0,nr())return new Promise((e,t)=>{dt==null||dt.terminate(),Qf().then(([r,i])=>{try{dt=i,dt.onerror=s=>t(s),dt.onmessage=Ec,ts=[e,t];let n={type:"init-wasm",in:Ue};dt.postMessage(n),sn=r}catch(n){t(n)}},t)});try{await eo(Ue.wasm),await yo(Ue),di=!0}catch(e){throw pi=!0,e}finally{Wr=!1}}},Wg=async e=>{if(nr())return Er(),new Promise((t,r)=>{Sr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:Ue}};dt.postMessage(i)});await wo(Ue,e)},Hg=async e=>nr()?(Er(),new Promise((t,r)=>{Sr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};dt.postMessage(i,[e.buffer])})):An(e),Vg=async(e,t)=>{if(nr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Er(),new Promise((r,i)=>{Sr("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),dt.postMessage(n,s)})}else return bo(e,t)},Fg=async e=>{if(nr())return Er(),new Promise((t,r)=>{Sr("release",[t,r]);let i={type:"release",in:e};dt.postMessage(i)});_o(e)},jg=async(e,t,r,i,n,s)=>{if(nr()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Er(),new Promise((a,o)=>{Sr("run",[a,o]);let l=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:s}};dt.postMessage(p,xo(l))})}else return $o(e,t,r,i,n,s)},Lg=async e=>{if(nr())return Er(),new Promise((t,r)=>{Sr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};dt.postMessage(i)});vo(e)}}),rs,Ic,Gg,i$=j(()=>{Dt(),qg(),me(),Js(),rh(),rs=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ic=e=>{switch(e[3]){case"cpu":return new ct(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!io(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return ct.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Gg=class{async fetchModelAndCopyToWasmMemory(e){return Hg(await no(e))}async loadModel(e,t){jt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Vg(r,t),Rt()}async dispose(){return Fg(this.sessionId)}async run(e,t,r){jt();let i=[],n=[];Object.entries(e).forEach(h=>{let d=h[0],g=h[1],y=this.inputNames.indexOf(d);if(y===-1)throw new Error(`invalid input '${d}'`);i.push(g),n.push(y)});let s=[],a=[];Object.entries(t).forEach(h=>{let d=h[0],g=h[1],y=this.outputNames.indexOf(d);if(y===-1)throw new Error(`invalid output '${d}'`);s.push(g),a.push(y)});let o=i.map((h,d)=>rs(h,()=>`input "${this.inputNames[n[d]]}"`)),l=s.map((h,d)=>h?rs(h,()=>`output "${this.outputNames[a[d]]}"`):null),p=await jg(this.sessionId,n,o,a,l,r),f={};for(let h=0;h<p.length;h++)f[this.outputNames[a[h]]]=s[h]??Ic(p[h]);return Rt(),f}startProfiling(){}endProfiling(){Lg(this.sessionId)}}}),Cc,Kg,n$=j(()=>{Dt(),qg(),i$(),Vn(),Cc=()=>{if((typeof Ue.wasm.initTimeout!="number"||Ue.wasm.initTimeout<0)&&(Ue.wasm.initTimeout=0),Ue.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Ue.wasm.proxy!="boolean"&&(Ue.wasm.proxy=!1),typeof Ue.wasm.trace!="boolean"&&(Ue.wasm.trace=!1),typeof Ue.wasm.numThreads!="number"||!Number.isInteger(Ue.wasm.numThreads)||Ue.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ue.wasm.numThreads=1;else{let e=typeof navigator>"u"?Kb("node:os").cpus().length:navigator.hardwareConcurrency;Ue.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Kg=class{async init(e){Cc(),await Ug(),await Wg(e)}async createInferenceSessionHandler(e,t){let r=new Gg;return await r.loadModel(e,t),Promise.resolve(r)}}}),Yg={};Ai(Yg,{wasmBackend:()=>Xg});var Xg,a$=j(()=>{n$(),Xg=new Kg});Dt();Dt();Dt();var s$="1.19.0";{let e=(a$(),vn(Yg)).wasmBackend;Fr("webgpu",e,5),Fr("webnn",e,5),Fr("cpu",e,10),Fr("wasm",e,10)}Object.defineProperty(Ue.versions,"web",{value:s$,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o$=e=>(nw("data-v-826dd2f4"),e=e(),aw(),e),u$={key:0,class:"upload-placeholder"},l$=o$(()=>Tr("p",null,"点击、拖拽或粘贴(Ctrl+V)上传图片",-1)),d$=[l$],p$=["src"],c$=["disabled"],f$=uw({__name:"ImgUploader",setup(e){const t=Ur(null),r=Ur(null),i=Ur(null),n=Ur(""),s=Ur(!1),a=Ur(!1),o=new Worker(new URL("/assets/infer-Sb5DZL40.js",import.meta.url),{type:"module"});o.onerror=w=>{console.error(w)},o.onmessageerror=w=>{console.error(w)},"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(w=>{console.log("ServiceWorker registration successful with scope: ",w.scope)}).catch(w=>{console.log("ServiceWorker registration failed: ",w)});const l=w=>{const v=new FileReader;v.onload=x=>{var E,S;t.value=(E=x.target)==null?void 0:E.result;const _=new Image;_.src=(S=x.target)==null?void 0:S.result,_.onload=async()=>{const C=document.createElement("canvas");C.width=448,C.height=448;const A=C.getContext("2d");if(!A)throw new Error("Failed to get 2D context");A.drawImage(_,0,0,448,448);const B=A.getImageData(0,0,448,448).data,X=448*448,K=new Float32Array(X*3),ce=.00392156862745098;for(let he=0;he<B.length;he+=4){const ne=he/4;K[X*0+ne]=B[he]*ce-.5/.5,K[X*1+ne]=B[he+1]*ce-.5/.5,K[X*2+ne]=B[he+2]*ce-.5/.5}o.postMessage({type:"img",data:{img:K}})},_.onerror=C=>{throw C}},v.readAsDataURL(w)},p=w=>{var _;const x=(_=w.target.files)==null?void 0:_[0];x&&l(x)},f=w=>{var x;const v=(x=w.dataTransfer)==null?void 0:x.files[0];v&&l(v)},h=w=>{var x;const v=(x=w.clipboardData)==null?void 0:x.items;if(v){for(let _=0;_<v.length;_++)if(v[_].type.indexOf("image")!==-1){const E=v[_].getAsFile();if(E){l(E);break}}}},d=()=>{var w;(w=r.value)==null||w.click()},g=async()=>{},y=async()=>{o.onmessage=w=>{w.data.type==="result"?n.value+=w.data.token:w.data.type==="complete"?s.value=!1:w.data.type==="error"&&console.error(w.data.error)},console.log(o),s.value=!0,o.postMessage({type:"infer",data:{}})};return js(async()=>{o.postMessage({type:"init",data:{}}),o.onmessage=w=>{w.data.type==="ready"&&(a.value=!0)},console.log(o)}),(w,v)=>(cn(),fn(Wt,null,[Tr("div",{class:"image-uploader",onClick:d,onDragover:v[0]||(v[0]=pl(()=>{},["prevent"])),onDrop:pl(f,["prevent"]),onPaste:h,tabindex:"0"},[Tr("input",{type:"file",accept:"image/*",onChange:p,ref_key:"fileInput",ref:r,style:{display:"none"}},null,544),t.value?(cn(),fn("img",{key:1,ref_key:"img",ref:i,src:t.value,onLoad:g,alt:"Uploaded image",class:"preview-image"},null,40,p$)):(cn(),fn("div",u$,d$))],32),Tr("button",{disabled:!a.value||s.value,onClick:y,style:{"min-height":"4vh","min-width":"5vw","text-align":"center"}},Pc(a.value?"Infer!":"Model Loading..."),9,c$),ow(Tr("textarea",{rows:"25",cols:"80","onUpdate:modelValue":v[1]||(v[1]=x=>n.value=x)},null,512),[[Pb,n.value]])],64))}}),h$=Tf(f$,[["__scopeId","data-v-826dd2f4"]]),m$={__name:"App",setup(e){return js(()=>{}),(t,r)=>(cn(),fn("header",null,[dr(h$)]))}},g$=Tf(m$,[["__scopeId","data-v-e528c17f"]]);Vb(g$).mount("#app");
