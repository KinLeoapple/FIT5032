(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Oe={},Fr=[],kt=()=>{},Qg=()=>!1,ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ml=t=>t.startsWith("onUpdate:"),it=Object.assign,Ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jg=Object.prototype.hasOwnProperty,Ee=(t,e)=>Jg.call(t,e),ce=Array.isArray,Ur=t=>No(t)==="[object Map]",Uf=t=>No(t)==="[object Set]",ue=t=>typeof t=="function",ze=t=>typeof t=="string",Wn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Bf=t=>(xe(t)||ue(t))&&ue(t.then)&&ue(t.catch),jf=Object.prototype.toString,No=t=>jf.call(t),Xg=t=>No(t).slice(8,-1),$f=t=>No(t)==="[object Object]",Fl=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ks=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yg=/-(\w)/g,jt=Do(t=>t.replace(Yg,(e,n)=>n?n.toUpperCase():"")),Zg=/\B([A-Z])/g,br=Do(t=>t.replace(Zg,"-$1").toLowerCase()),xo=Do(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ia=Do(t=>t?`on${xo(t)}`:""),Hn=(t,e)=>!Object.is(t,e),qi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Qa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ru;const qf=()=>Ru||(Ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ul(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?r_(r):Ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||xe(t))return t}const e_=/;(?![^(]*\))/g,t_=/:([^]+)/,n_=/\/\*[^]*?\*\//g;function r_(t){const e={};return t.replace(n_,"").split(e_).forEach(n=>{if(n){const r=n.split(t_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Bl(t){let e="";if(ze(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Bl(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const s_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i_=Vl(s_);function Kf(t){return!!t||t===""}const zf=t=>!!(t&&t.__v_isRef===!0),Mn=t=>ze(t)?t:t==null?"":ce(t)||xe(t)&&(t.toString===jf||!ue(t.toString))?zf(t)?Mn(t.value):JSON.stringify(t,Wf,2):String(t),Wf=(t,e)=>zf(e)?Wf(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Aa(r,i)+" =>"]=s,n),{})}:Uf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Aa(n))}:Wn(e)?Aa(e):xe(e)&&!ce(e)&&!$f(e)?String(e):e,Aa=(t,e="")=>{var n;return Wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class o_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function a_(t,e=Vt){e&&e.active&&e.effects.push(t)}function l_(){return Vt}let cr;class jl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Gn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(c_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ln,n=cr;try{return Ln=!0,cr=this,this._runnings++,Su(this),this.fn()}finally{Pu(this),this._runnings--,cr=n,Ln=e}}stop(){this.active&&(Su(this),Pu(this),this.onStop&&this.onStop(),this.active=!1)}}function c_(t){return t.value}function Su(t){t._trackId++,t._depsLength=0}function Pu(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Gf(t.deps[e],t);t.deps.length=t._depsLength}}function Gf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ln=!0,Ja=0;const Qf=[];function Gn(){Qf.push(Ln),Ln=!1}function Qn(){const t=Qf.pop();Ln=t===void 0?!0:t}function $l(){Ja++}function Hl(){for(Ja--;!Ja&&Xa.length;)Xa.shift()()}function Jf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Gf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Xa=[];function Xf(t,e,n){$l();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Xa.push(r.scheduler)))}Hl()}const Yf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ya=new WeakMap,ur=Symbol(""),Za=Symbol("");function gt(t,e,n){if(Ln&&cr){let r=Ya.get(t);r||Ya.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Yf(()=>r.delete(n))),Jf(cr,s)}}function un(t,e,n,r,s,i){const a=Ya.get(t);if(!a)return;let l=[];if(e==="clear")l=[...a.values()];else if(n==="length"&&ce(t)){const c=Number(r);a.forEach((h,d)=>{(d==="length"||!Wn(d)&&d>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(a.get(n)),e){case"add":ce(t)?Fl(n)&&l.push(a.get("length")):(l.push(a.get(ur)),Ur(t)&&l.push(a.get(Za)));break;case"delete":ce(t)||(l.push(a.get(ur)),Ur(t)&&l.push(a.get(Za)));break;case"set":Ur(t)&&l.push(a.get(ur));break}$l();for(const c of l)c&&Xf(c,4);Hl()}const u_=Vl("__proto__,__v_isRef,__isVue"),Zf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wn)),Cu=h_();function h_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,a=this.length;i<a;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gn(),$l();const r=Ie(this)[e].apply(this,n);return Hl(),Qn(),r}}),t}function f_(t){Wn(t)||(t=String(t));const e=Ie(this);return gt(e,"has",t),e.hasOwnProperty(t)}class ed{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?b_:sd:i?rd:nd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ce(e);if(!s){if(a&&Ee(Cu,n))return Reflect.get(Cu,n,r);if(n==="hasOwnProperty")return f_}const l=Reflect.get(e,n,r);return(Wn(n)?Zf.has(n):u_(n))||(s||gt(e,"get",n),i)?l:_t(l)?a&&Fl(n)?l:l.value:xe(l)?s?od(l):Mo(l):l}}class td extends ed{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=pr(i);if(!zr(r)&&!pr(r)&&(i=Ie(i),r=Ie(r)),!ce(e)&&_t(i)&&!_t(r))return c?!1:(i.value=r,!0)}const a=ce(e)&&Fl(n)?Number(n)<e.length:Ee(e,n),l=Reflect.set(e,n,r,s);return e===Ie(s)&&(a?Hn(r,i)&&un(e,"set",n,r):un(e,"add",n,r)),l}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Wn(n)||!Zf.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",ce(e)?"length":ur),Reflect.ownKeys(e)}}class d_ extends ed{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const p_=new td,m_=new d_,g_=new td(!0);const ql=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function Ni(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(Hn(e,i)&&gt(s,"get",e),gt(s,"get",i));const{has:a}=Vo(s),l=r?ql:n?Wl:Hs;if(a.call(s,e))return l(t.get(e));if(a.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function Di(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(Hn(t,s)&&gt(r,"has",t),gt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xi(t,e=!1){return t=t.__v_raw,!e&&gt(Ie(t),"iterate",ur),Reflect.get(t,"size",t)}function Ou(t,e=!1){!e&&!zr(t)&&!pr(t)&&(t=Ie(t));const n=Ie(this);return Vo(n).has.call(n,t)||(n.add(t),un(n,"add",t,t)),this}function ku(t,e,n=!1){!n&&!zr(e)&&!pr(e)&&(e=Ie(e));const r=Ie(this),{has:s,get:i}=Vo(r);let a=s.call(r,t);a||(t=Ie(t),a=s.call(r,t));const l=i.call(r,t);return r.set(t,e),a?Hn(e,l)&&un(r,"set",t,e):un(r,"add",t,e),this}function Nu(t){const e=Ie(this),{has:n,get:r}=Vo(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&un(e,"delete",t,void 0),i}function Du(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function Vi(t,e){return function(r,s){const i=this,a=i.__v_raw,l=Ie(a),c=e?ql:t?Wl:Hs;return!t&&gt(l,"iterate",ur),a.forEach((h,d)=>r.call(s,c(h),c(d),i))}}function Mi(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),a=Ur(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?ql:e?Wl:Hs;return!e&&gt(i,"iterate",c?Za:ur),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function __(){const t={get(i){return Ni(this,i)},get size(){return xi(this)},has:Di,add:Ou,set:ku,delete:Nu,clear:Du,forEach:Vi(!1,!1)},e={get(i){return Ni(this,i,!1,!0)},get size(){return xi(this)},has:Di,add(i){return Ou.call(this,i,!0)},set(i,a){return ku.call(this,i,a,!0)},delete:Nu,clear:Du,forEach:Vi(!1,!0)},n={get(i){return Ni(this,i,!0)},get size(){return xi(this,!0)},has(i){return Di.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Vi(!0,!1)},r={get(i){return Ni(this,i,!0,!0)},get size(){return xi(this,!0)},has(i){return Di.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mi(i,!1,!1),n[i]=Mi(i,!0,!1),e[i]=Mi(i,!1,!0),r[i]=Mi(i,!0,!0)}),[t,n,e,r]}const[y_,v_,E_,w_]=__();function Kl(t,e){const n=e?t?w_:E_:t?v_:y_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const T_={get:Kl(!1,!1)},I_={get:Kl(!1,!0)},A_={get:Kl(!0,!1)};const nd=new WeakMap,rd=new WeakMap,sd=new WeakMap,b_=new WeakMap;function R_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S_(t){return t.__v_skip||!Object.isExtensible(t)?0:R_(Xg(t))}function Mo(t){return pr(t)?t:zl(t,!1,p_,T_,nd)}function id(t){return zl(t,!1,g_,I_,rd)}function od(t){return zl(t,!0,m_,A_,sd)}function zl(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=S_(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Ns(t){return pr(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function zr(t){return!!(t&&t.__v_isShallow)}function ad(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function P_(t){return Object.isExtensible(t)&&Hf(t,"__v_skip",!0),t}const Hs=t=>xe(t)?Mo(t):t,Wl=t=>xe(t)?od(t):t;class ld{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new jl(()=>e(this._value),()=>Ki(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&Hn(e._value,e._value=e.effect.run())&&Ki(e,4),cd(e),e.effect._dirtyLevel>=2&&Ki(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function C_(t,e,n=!1){let r,s;const i=ue(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new ld(r,s,i||!s,n)}function cd(t){var e;Ln&&cr&&(t=Ie(t),Jf(cr,(e=t.dep)!=null?e:t.dep=Yf(()=>t.dep=void 0,t instanceof ld?t:void 0)))}function Ki(t,e=4,n,r){t=Ie(t);const s=t.dep;s&&Xf(s,e)}function _t(t){return!!(t&&t.__v_isRef===!0)}function $t(t){return ud(t,!1)}function O_(t){return ud(t,!0)}function ud(t,e){return _t(t)?t:new k_(t,e)}class k_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:Hs(e)}get value(){return cd(this),this._value}set value(e){const n=this.__v_isShallow||zr(e)||pr(e);e=n?e:Ie(e),Hn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Hs(e),Ki(this,4))}}function Br(t){return _t(t)?t.value:t}const N_={get:(t,e,n)=>Br(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _t(s)&&!_t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hd(t){return Ns(t)?t:new Proxy(t,N_)}/**
* @vue/runtime-core v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(t,e,n,r){try{return r?t(...r):t()}catch(s){Lo(s,e,n)}}function Bt(t,e,n,r){if(ue(t)){const s=Fn(t,e,n,r);return s&&Bf(s)&&s.catch(i=>{Lo(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function Lo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,a,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Gn(),Fn(c,null,10,[t,a,l]),Qn();return}}D_(t,n,s,r)}function D_(t,e,n,r=!0){console.error(t)}let qs=!1,el=!1;const nt=[];let Qt=0;const jr=[];let Sn=null,or=0;const fd=Promise.resolve();let Gl=null;function dd(t){const e=Gl||fd;return t?e.then(this?t.bind(this):t):e}function x_(t){let e=Qt+1,n=nt.length;for(;e<n;){const r=e+n>>>1,s=nt[r],i=Ks(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ql(t){(!nt.length||!nt.includes(t,qs&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?nt.push(t):nt.splice(x_(t.id),0,t),pd())}function pd(){!qs&&!el&&(el=!0,Gl=fd.then(gd))}function V_(t){const e=nt.indexOf(t);e>Qt&&nt.splice(e,1)}function M_(t){ce(t)?jr.push(...t):(!Sn||!Sn.includes(t,t.allowRecurse?or+1:or))&&jr.push(t),pd()}function xu(t,e,n=qs?Qt+1:0){for(;n<nt.length;n++){const r=nt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;nt.splice(n,1),n--,r()}}}function md(t){if(jr.length){const e=[...new Set(jr)].sort((n,r)=>Ks(n)-Ks(r));if(jr.length=0,Sn){Sn.push(...e);return}for(Sn=e,or=0;or<Sn.length;or++){const n=Sn[or];n.active!==!1&&n()}Sn=null,or=0}}const Ks=t=>t.id==null?1/0:t.id,L_=(t,e)=>{const n=Ks(t)-Ks(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gd(t){el=!1,qs=!0,nt.sort(L_);try{for(Qt=0;Qt<nt.length;Qt++){const e=nt[Qt];e&&e.active!==!1&&Fn(e,e.i,e.i?15:14)}}finally{Qt=0,nt.length=0,md(),qs=!1,Gl=null,(nt.length||jr.length)&&gd()}}let Tt=null,_d=null;function oo(t){const e=Tt;return Tt=t,_d=t&&t.type.__scopeId||null,e}function Pn(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Hu(-1);const i=oo(e);let a;try{a=t(...s)}finally{oo(i),r._d&&Hu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function mr(t,e){if(Tt===null)return t;const n=$o(Tt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Oe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&kn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Gn(),Bt(c,n,8,[t.el,l,t,e]),Qn())}}function yd(t,e){t.shapeFlag&6&&t.component?yd(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function vd(t,e){return ue(t)?it({name:t.name},e,{setup:t}):t}const zi=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function F_(t,e){wd(t,"a",e)}function U_(t,e){wd(t,"da",e)}function wd(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ed(s.parent.vnode)&&B_(r,e,n,s),s=s.parent}}function B_(t,e,n,r){const s=Fo(e,t,r,!0);Td(()=>{Ll(r[e],s)},n)}function Fo(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Gn();const l=ii(n),c=Bt(e,n,t,a);return l(),Qn(),c});return r?s.unshift(i):s.push(i),i}}const gn=t=>(e,n=rt)=>{(!jo||t==="sp")&&Fo(t,(...r)=>e(...r),n)},j_=gn("bm"),$_=gn("m"),H_=gn("bu"),q_=gn("u"),K_=gn("bum"),Td=gn("um"),z_=gn("sp"),W_=gn("rtg"),G_=gn("rtc");function Q_(t,e=rt){Fo("ec",t,e)}const Id="components";function Jl(t,e){return X_(Id,t,!0,e)||t}const J_=Symbol.for("v-ndc");function X_(t,e,n=!0,r=!1){const s=Tt||rt;if(s){const i=s.type;if(t===Id){const l=jy(i,!1);if(l&&(l===e||l===jt(e)||l===xo(jt(e))))return i}const a=Vu(s[t]||i[t],e)||Vu(s.appContext[t],e);return!a&&r?i:a}}function Vu(t,e){return t&&(t[e]||t[jt(e)]||t[xo(jt(e))])}const tl=t=>t?$d(t)?$o(t):tl(t.parent):null,Ds=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$emit:t=>t.emit,$options:t=>Xl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ql(t.update)}),$nextTick:t=>t.n||(t.n=dd.bind(t.proxy)),$watch:t=>Ey.bind(t)}),ba=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ee(t,e),Y_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ba(r,e))return a[e]=1,r[e];if(s!==Oe&&Ee(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ee(h,e))return a[e]=3,i[e];if(n!==Oe&&Ee(n,e))return a[e]=4,n[e];nl&&(a[e]=0)}}const d=Ds[e];let p,_;if(d)return e==="$attrs"&&gt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Ee(n,e))return a[e]=4,n[e];if(_=c.config.globalProperties,Ee(_,e))return _[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ba(s,e)?(s[e]=n,!0):r!==Oe&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Oe&&Ee(t,a)||ba(e,a)||(l=i[0])&&Ee(l,a)||Ee(r,a)||Ee(Ds,a)||Ee(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mu(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nl=!0;function Z_(t){const e=Xl(t),n=t.proxy,r=t.ctx;nl=!1,e.beforeCreate&&Lu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:I,updated:R,activated:k,deactivated:O,beforeDestroy:j,beforeUnmount:F,destroyed:L,unmounted:Z,render:le,renderTracked:J,renderTriggered:T,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:b,components:S,directives:E,filters:at}=e;if(h&&ey(h,r,null),a)for(const ge in a){const de=a[ge];ue(de)&&(r[ge]=de.bind(n))}if(s){const ge=s.call(n,n);xe(ge)&&(t.data=Mo(ge))}if(nl=!0,i)for(const ge in i){const de=i[ge],vt=ue(de)?de.bind(n,n):ue(de.get)?de.get.bind(n,n):kt,Dt=!ue(de)&&ue(de.set)?de.set.bind(n):kt,St=Lt({get:vt,set:Dt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>St.value,set:ke=>St.value=ke})}if(l)for(const ge in l)Ad(l[ge],r,n,ge);if(c){const ge=ue(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(de=>{Wi(de,ge[de])})}d&&Lu(d,t,"c");function Be(ge,de){ce(de)?de.forEach(vt=>ge(vt.bind(n))):de&&ge(de.bind(n))}if(Be(j_,p),Be($_,_),Be(H_,I),Be(q_,R),Be(F_,k),Be(U_,O),Be(Q_,y),Be(G_,J),Be(W_,T),Be(K_,F),Be(Td,Z),Be(z_,w),ce(A))if(A.length){const ge=t.exposed||(t.exposed={});A.forEach(de=>{Object.defineProperty(ge,de,{get:()=>n[de],set:vt=>n[de]=vt})})}else t.exposed||(t.exposed={});le&&t.render===kt&&(t.render=le),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),E&&(t.directives=E)}function ey(t,e,n=kt){ce(t)&&(t=rl(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),_t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Lu(t,e,n){Bt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ad(t,e,n,r){const s=r.includes(".")?Fd(n,r):()=>n[r];if(ze(t)){const i=e[t];ue(i)&&Gi(s,i)}else if(ue(t))Gi(s,t.bind(n));else if(xe(t))if(ce(t))t.forEach(i=>Ad(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Gi(s,i,t)}}function Xl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>ao(c,h,a,!0)),ao(c,e,a)),xe(e)&&i.set(e,c),c}function ao(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ao(t,i,n,!0),s&&s.forEach(a=>ao(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=ty[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const ty={data:Fu,props:Uu,emits:Uu,methods:Ss,computed:Ss,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Ss,directives:Ss,watch:ry,provide:Fu,inject:ny};function Fu(t,e){return e?t?function(){return it(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function ny(t,e){return Ss(rl(t),rl(e))}function rl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?it(Object.create(null),t,e):e}function Uu(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:it(Object.create(null),Mu(t),Mu(e??{})):e}function ry(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=ut(t[r],e[r]);return n}function bd(){return{app:null,config:{isNativeTag:Qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sy=0;function iy(t,e){return function(r,s=null){ue(r)||(r=it({},r)),s!=null&&!xe(s)&&(s=null);const i=bd(),a=new WeakSet;let l=!1;const c=i.app={_uid:sy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hy,get config(){return i.config},set config(h){},use(h,...d){return a.has(h)||(h&&ue(h.install)?(a.add(h),h.install(c,...d)):ue(h)&&(a.add(h),h(c,...d))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,d){return d?(i.components[h]=d,c):i.components[h]},directive(h,d){return d?(i.directives[h]=d,c):i.directives[h]},mount(h,d,p){if(!l){const _=Me(r,s);return _.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(_,h):t(_,h,p),l=!0,c._container=h,h.__vue_app__=c,$o(_.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(h,d){return i.provides[h]=d,c},runWithContext(h){const d=xs;xs=c;try{return h()}finally{xs=d}}};return c}}let xs=null;function Wi(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=rt||Tt;if(r||xs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Rd={},Sd=()=>Object.create(Rd),Pd=t=>Object.getPrototypeOf(t)===Rd;function oy(t,e,n,r=!1){const s={},i=Sd();t.propsDefaults=Object.create(null),Cd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:id(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ay(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ie(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(Uo(t.emitsOptions,_))continue;const I=e[_];if(c)if(Ee(i,_))I!==i[_]&&(i[_]=I,h=!0);else{const R=jt(_);s[R]=sl(c,l,R,I,t,!1)}else I!==i[_]&&(i[_]=I,h=!0)}}}else{Cd(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ee(e,p)&&((d=br(p))===p||!Ee(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=sl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&un(t.attrs,"set","")}function Cd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(ks(c))continue;const h=e[c];let d;s&&Ee(s,d=jt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Uo(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ie(n),h=l||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=sl(s,c,p,h[p],t,!Ee(h,p))}}return a}function sl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ee(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ii(s);r=h[n]=c.call(null,e),d()}}else r=c}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===br(n))&&(r=!0))}return r}const ly=new WeakMap;function Od(t,e,n=!1){const r=n?ly:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ue(t)){const d=p=>{c=!0;const[_,I]=Od(p,e,!0);it(a,_),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return xe(t)&&r.set(t,Fr),Fr;if(ce(i))for(let d=0;d<i.length;d++){const p=jt(i[d]);Bu(p)&&(a[p]=Oe)}else if(i)for(const d in i){const p=jt(d);if(Bu(p)){const _=i[d],I=a[p]=ce(_)||ue(_)?{type:_}:it({},_),R=I.type;let k=!1,O=!0;if(ce(R))for(let j=0;j<R.length;++j){const F=R[j],L=ue(F)&&F.name;if(L==="Boolean"){k=!0;break}else L==="String"&&(O=!1)}else k=ue(R)&&R.name==="Boolean";I[0]=k,I[1]=O,(k||Ee(I,"default"))&&l.push(p)}}const h=[a,l];return xe(t)&&r.set(t,h),h}function Bu(t){return t[0]!=="$"&&!ks(t)}const kd=t=>t[0]==="_"||t==="$stable",Yl=t=>ce(t)?t.map(Gt):[Gt(t)],cy=(t,e,n)=>{if(e._n)return e;const r=Pn((...s)=>Yl(e(...s)),n);return r._c=!1,r},Nd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kd(s))continue;const i=t[s];if(ue(i))e[s]=cy(s,i,r);else if(i!=null){const a=Yl(i);e[s]=()=>a}}},Dd=(t,e)=>{const n=Yl(e);t.slots.default=()=>n},xd=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},uy=(t,e,n)=>{const r=t.slots=Sd();if(t.vnode.shapeFlag&32){const s=e._;s?(xd(r,e,n),n&&Hf(r,"_",s,!0)):Nd(e,r)}else e&&Dd(t,e)},hy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:xd(s,e,n):(i=!e.$stable,Nd(e,s)),a=e}else e&&(Dd(t,e),a={default:1});if(i)for(const l in s)!kd(l)&&a[l]==null&&delete s[l]};function il(t,e,n,r,s=!1){if(ce(t)){t.forEach((_,I)=>il(_,e&&(ce(e)?e[I]:e),n,r,s));return}if(zi(r)&&!s)return;const i=r.shapeFlag&4?$o(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Oe?l.refs={}:l.refs,p=l.setupState;if(h!=null&&h!==c&&(ze(h)?(d[h]=null,Ee(p,h)&&(p[h]=null)):_t(h)&&(h.value=null)),ue(c))Fn(c,l,12,[a,d]);else{const _=ze(c),I=_t(c);if(_||I){const R=()=>{if(t.f){const k=_?Ee(p,c)?p[c]:d[c]:c.value;s?ce(k)&&Ll(k,i):ce(k)?k.includes(i)||k.push(i):_?(d[c]=[i],Ee(p,c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else _?(d[c]=a,Ee(p,c)&&(p[c]=a)):I&&(c.value=a,t.k&&(d[t.k]=a))};a?(R.id=-1,ft(R,n)):R()}}}const fy=Symbol("_vte"),dy=t=>t.__isTeleport,ft=Py;function py(t){return my(t)}function my(t,e){const n=qf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:I=kt,insertStaticContent:R}=t,k=(g,v,C,M=null,x=null,$=null,W=void 0,q=null,z=!!v.dynamicChildren)=>{if(g===v)return;g&&!Ts(g,v)&&(M=V(g),ke(g,x,$,!0),g=null),v.patchFlag===-2&&(z=!1,v.dynamicChildren=null);const{type:U,ref:Q,shapeFlag:ne}=v;switch(U){case Bo:O(g,v,C,M);break;case gr:j(g,v,C,M);break;case Pa:g==null&&F(v,C,M,W);break;case Ot:S(g,v,C,M,x,$,W,q,z);break;default:ne&1?le(g,v,C,M,x,$,W,q,z):ne&6?E(g,v,C,M,x,$,W,q,z):(ne&64||ne&128)&&U.process(g,v,C,M,x,$,W,q,z,Y)}Q!=null&&x&&il(Q,g&&g.ref,$,v||g,!v)},O=(g,v,C,M)=>{if(g==null)r(v.el=l(v.children),C,M);else{const x=v.el=g.el;v.children!==g.children&&h(x,v.children)}},j=(g,v,C,M)=>{g==null?r(v.el=c(v.children||""),C,M):v.el=g.el},F=(g,v,C,M)=>{[g.el,g.anchor]=R(g.children,v,C,M,g.el,g.anchor)},L=({el:g,anchor:v},C,M)=>{let x;for(;g&&g!==v;)x=_(g),r(g,C,M),g=x;r(v,C,M)},Z=({el:g,anchor:v})=>{let C;for(;g&&g!==v;)C=_(g),s(g),g=C;s(v)},le=(g,v,C,M,x,$,W,q,z)=>{v.type==="svg"?W="svg":v.type==="math"&&(W="mathml"),g==null?J(v,C,M,x,$,W,q,z):w(g,v,x,$,W,q,z)},J=(g,v,C,M,x,$,W,q)=>{let z,U;const{props:Q,shapeFlag:ne,transition:te,dirs:ee}=g;if(z=g.el=a(g.type,$,Q&&Q.is,Q),ne&8?d(z,g.children):ne&16&&y(g.children,z,null,M,x,Ra(g,$),W,q),ee&&nr(g,null,M,"created"),T(z,g,g.scopeId,W,M),Q){for(const Te in Q)Te!=="value"&&!ks(Te)&&i(z,Te,null,Q[Te],$,M);"value"in Q&&i(z,"value",null,Q.value,$),(U=Q.onVnodeBeforeMount)&&Wt(U,M,g)}ee&&nr(g,null,M,"beforeMount");const se=gy(x,te);se&&te.beforeEnter(z),r(z,v,C),((U=Q&&Q.onVnodeMounted)||se||ee)&&ft(()=>{U&&Wt(U,M,g),se&&te.enter(z),ee&&nr(g,null,M,"mounted")},x)},T=(g,v,C,M,x)=>{if(C&&I(g,C),M)for(let $=0;$<M.length;$++)I(g,M[$]);if(x){let $=x.subTree;if(v===$){const W=x.vnode;T(g,W,W.scopeId,W.slotScopeIds,x.parent)}}},y=(g,v,C,M,x,$,W,q,z=0)=>{for(let U=z;U<g.length;U++){const Q=g[U]=q?Cn(g[U]):Gt(g[U]);k(null,Q,v,C,M,x,$,W,q)}},w=(g,v,C,M,x,$,W)=>{const q=v.el=g.el;let{patchFlag:z,dynamicChildren:U,dirs:Q}=v;z|=g.patchFlag&16;const ne=g.props||Oe,te=v.props||Oe;let ee;if(C&&rr(C,!1),(ee=te.onVnodeBeforeUpdate)&&Wt(ee,C,v,g),Q&&nr(v,g,C,"beforeUpdate"),C&&rr(C,!0),(ne.innerHTML&&te.innerHTML==null||ne.textContent&&te.textContent==null)&&d(q,""),U?A(g.dynamicChildren,U,q,C,M,Ra(v,x),$):W||de(g,v,q,null,C,M,Ra(v,x),$,!1),z>0){if(z&16)b(q,ne,te,C,x);else if(z&2&&ne.class!==te.class&&i(q,"class",null,te.class,x),z&4&&i(q,"style",ne.style,te.style,x),z&8){const se=v.dynamicProps;for(let Te=0;Te<se.length;Te++){const ve=se[Te],Ue=ne[ve],Et=te[ve];(Et!==Ue||ve==="value")&&i(q,ve,Ue,Et,x,C)}}z&1&&g.children!==v.children&&d(q,v.children)}else!W&&U==null&&b(q,ne,te,C,x);((ee=te.onVnodeUpdated)||Q)&&ft(()=>{ee&&Wt(ee,C,v,g),Q&&nr(v,g,C,"updated")},M)},A=(g,v,C,M,x,$,W)=>{for(let q=0;q<v.length;q++){const z=g[q],U=v[q],Q=z.el&&(z.type===Ot||!Ts(z,U)||z.shapeFlag&70)?p(z.el):C;k(z,U,Q,null,M,x,$,W,!0)}},b=(g,v,C,M,x)=>{if(v!==C){if(v!==Oe)for(const $ in v)!ks($)&&!($ in C)&&i(g,$,v[$],null,x,M);for(const $ in C){if(ks($))continue;const W=C[$],q=v[$];W!==q&&$!=="value"&&i(g,$,q,W,x,M)}"value"in C&&i(g,"value",v.value,C.value,x)}},S=(g,v,C,M,x,$,W,q,z)=>{const U=v.el=g?g.el:l(""),Q=v.anchor=g?g.anchor:l("");let{patchFlag:ne,dynamicChildren:te,slotScopeIds:ee}=v;ee&&(q=q?q.concat(ee):ee),g==null?(r(U,C,M),r(Q,C,M),y(v.children||[],C,Q,x,$,W,q,z)):ne>0&&ne&64&&te&&g.dynamicChildren?(A(g.dynamicChildren,te,C,x,$,W,q),(v.key!=null||x&&v===x.subTree)&&Vd(g,v,!0)):de(g,v,C,Q,x,$,W,q,z)},E=(g,v,C,M,x,$,W,q,z)=>{v.slotScopeIds=q,g==null?v.shapeFlag&512?x.ctx.activate(v,C,M,W,z):at(v,C,M,x,$,W,z):Rt(g,v,z)},at=(g,v,C,M,x,$,W)=>{const q=g.component=My(g,M,x);if(Ed(g)&&(q.ctx.renderer=Y),Ly(q,!1,W),q.asyncDep){if(x&&x.registerDep(q,Be,W),!g.el){const z=q.subTree=Me(gr);j(null,z,v,C)}}else Be(q,g,v,C,x,$,W)},Rt=(g,v,C)=>{const M=v.component=g.component;if(by(g,v,C))if(M.asyncDep&&!M.asyncResolved){ge(M,v,C);return}else M.next=v,V_(M.update),M.effect.dirty=!0,M.update();else v.el=g.el,M.vnode=v},Be=(g,v,C,M,x,$,W)=>{const q=()=>{if(g.isMounted){let{next:Q,bu:ne,u:te,parent:ee,vnode:se}=g;{const Pt=Md(g);if(Pt){Q&&(Q.el=se.el,ge(g,Q,W)),Pt.asyncDep.then(()=>{g.isUnmounted||q()});return}}let Te=Q,ve;rr(g,!1),Q?(Q.el=se.el,ge(g,Q,W)):Q=se,ne&&qi(ne),(ve=Q.props&&Q.props.onVnodeBeforeUpdate)&&Wt(ve,ee,Q,se),rr(g,!0);const Ue=Sa(g),Et=g.subTree;g.subTree=Ue,k(Et,Ue,p(Et.el),V(Et),g,x,$),Q.el=Ue.el,Te===null&&Ry(g,Ue.el),te&&ft(te,x),(ve=Q.props&&Q.props.onVnodeUpdated)&&ft(()=>Wt(ve,ee,Q,se),x)}else{let Q;const{el:ne,props:te}=v,{bm:ee,m:se,parent:Te}=g,ve=zi(v);if(rr(g,!1),ee&&qi(ee),!ve&&(Q=te&&te.onVnodeBeforeMount)&&Wt(Q,Te,v),rr(g,!0),ne&&be){const Ue=()=>{g.subTree=Sa(g),be(ne,g.subTree,g,x,null)};ve?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ue()):Ue()}else{const Ue=g.subTree=Sa(g);k(null,Ue,C,M,g,x,$),v.el=Ue.el}if(se&&ft(se,x),!ve&&(Q=te&&te.onVnodeMounted)){const Ue=v;ft(()=>Wt(Q,Te,Ue),x)}(v.shapeFlag&256||Te&&zi(Te.vnode)&&Te.vnode.shapeFlag&256)&&g.a&&ft(g.a,x),g.isMounted=!0,v=C=M=null}},z=g.effect=new jl(q,kt,()=>Ql(U),g.scope),U=g.update=()=>{z.dirty&&z.run()};U.i=g,U.id=g.uid,rr(g,!0),U()},ge=(g,v,C)=>{v.component=g;const M=g.vnode.props;g.vnode=v,g.next=null,ay(g,v.props,M,C),hy(g,v.children,C),Gn(),xu(g),Qn()},de=(g,v,C,M,x,$,W,q,z=!1)=>{const U=g&&g.children,Q=g?g.shapeFlag:0,ne=v.children,{patchFlag:te,shapeFlag:ee}=v;if(te>0){if(te&128){Dt(U,ne,C,M,x,$,W,q,z);return}else if(te&256){vt(U,ne,C,M,x,$,W,q,z);return}}ee&8?(Q&16&&ht(U,x,$),ne!==U&&d(C,ne)):Q&16?ee&16?Dt(U,ne,C,M,x,$,W,q,z):ht(U,x,$,!0):(Q&8&&d(C,""),ee&16&&y(ne,C,M,x,$,W,q,z))},vt=(g,v,C,M,x,$,W,q,z)=>{g=g||Fr,v=v||Fr;const U=g.length,Q=v.length,ne=Math.min(U,Q);let te;for(te=0;te<ne;te++){const ee=v[te]=z?Cn(v[te]):Gt(v[te]);k(g[te],ee,C,null,x,$,W,q,z)}U>Q?ht(g,x,$,!0,!1,ne):y(v,C,M,x,$,W,q,z,ne)},Dt=(g,v,C,M,x,$,W,q,z)=>{let U=0;const Q=v.length;let ne=g.length-1,te=Q-1;for(;U<=ne&&U<=te;){const ee=g[U],se=v[U]=z?Cn(v[U]):Gt(v[U]);if(Ts(ee,se))k(ee,se,C,null,x,$,W,q,z);else break;U++}for(;U<=ne&&U<=te;){const ee=g[ne],se=v[te]=z?Cn(v[te]):Gt(v[te]);if(Ts(ee,se))k(ee,se,C,null,x,$,W,q,z);else break;ne--,te--}if(U>ne){if(U<=te){const ee=te+1,se=ee<Q?v[ee].el:M;for(;U<=te;)k(null,v[U]=z?Cn(v[U]):Gt(v[U]),C,se,x,$,W,q,z),U++}}else if(U>te)for(;U<=ne;)ke(g[U],x,$,!0),U++;else{const ee=U,se=U,Te=new Map;for(U=se;U<=te;U++){const lt=v[U]=z?Cn(v[U]):Gt(v[U]);lt.key!=null&&Te.set(lt.key,U)}let ve,Ue=0;const Et=te-se+1;let Pt=!1,ls=0;const vn=new Array(Et);for(U=0;U<Et;U++)vn[U]=0;for(U=ee;U<=ne;U++){const lt=g[U];if(Ue>=Et){ke(lt,x,$,!0);continue}let Ct;if(lt.key!=null)Ct=Te.get(lt.key);else for(ve=se;ve<=te;ve++)if(vn[ve-se]===0&&Ts(lt,v[ve])){Ct=ve;break}Ct===void 0?ke(lt,x,$,!0):(vn[Ct-se]=U+1,Ct>=ls?ls=Ct:Pt=!0,k(lt,v[Ct],C,null,x,$,W,q,z),Ue++)}const Pr=Pt?_y(vn):Fr;for(ve=Pr.length-1,U=Et-1;U>=0;U--){const lt=se+U,Ct=v[lt],Cr=lt+1<Q?v[lt+1].el:M;vn[U]===0?k(null,Ct,C,Cr,x,$,W,q,z):Pt&&(ve<0||U!==Pr[ve]?St(Ct,C,Cr,2):ve--)}}},St=(g,v,C,M,x=null)=>{const{el:$,type:W,transition:q,children:z,shapeFlag:U}=g;if(U&6){St(g.component.subTree,v,C,M);return}if(U&128){g.suspense.move(v,C,M);return}if(U&64){W.move(g,v,C,Y);return}if(W===Ot){r($,v,C);for(let ne=0;ne<z.length;ne++)St(z[ne],v,C,M);r(g.anchor,v,C);return}if(W===Pa){L(g,v,C);return}if(M!==2&&U&1&&q)if(M===0)q.beforeEnter($),r($,v,C),ft(()=>q.enter($),x);else{const{leave:ne,delayLeave:te,afterLeave:ee}=q,se=()=>r($,v,C),Te=()=>{ne($,()=>{se(),ee&&ee()})};te?te($,se,Te):Te()}else r($,v,C)},ke=(g,v,C,M=!1,x=!1)=>{const{type:$,props:W,ref:q,children:z,dynamicChildren:U,shapeFlag:Q,patchFlag:ne,dirs:te,cacheIndex:ee}=g;if(ne===-2&&(x=!1),q!=null&&il(q,null,C,g,!0),ee!=null&&(v.renderCache[ee]=void 0),Q&256){v.ctx.deactivate(g);return}const se=Q&1&&te,Te=!zi(g);let ve;if(Te&&(ve=W&&W.onVnodeBeforeUnmount)&&Wt(ve,v,g),Q&6)zt(g.component,C,M);else{if(Q&128){g.suspense.unmount(C,M);return}se&&nr(g,null,v,"beforeUnmount"),Q&64?g.type.remove(g,v,C,Y,M):U&&!U.hasOnce&&($!==Ot||ne>0&&ne&64)?ht(U,v,C,!1,!0):($===Ot&&ne&384||!x&&Q&16)&&ht(z,v,C),M&&Ne(g)}(Te&&(ve=W&&W.onVnodeUnmounted)||se)&&ft(()=>{ve&&Wt(ve,v,g),se&&nr(g,null,v,"unmounted")},C)},Ne=g=>{const{type:v,el:C,anchor:M,transition:x}=g;if(v===Ot){yn(C,M);return}if(v===Pa){Z(g);return}const $=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(g.shapeFlag&1&&x&&!x.persisted){const{leave:W,delayLeave:q}=x,z=()=>W(C,$);q?q(g.el,$,z):z()}else $()},yn=(g,v)=>{let C;for(;g!==v;)C=_(g),s(g),g=C;s(v)},zt=(g,v,C)=>{const{bum:M,scope:x,update:$,subTree:W,um:q,m:z,a:U}=g;ju(z),ju(U),M&&qi(M),x.stop(),$&&($.active=!1,ke(W,g,v,C)),q&&ft(q,v),ft(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},ht=(g,v,C,M=!1,x=!1,$=0)=>{for(let W=$;W<g.length;W++)ke(g[W],v,C,M,x)},V=g=>{if(g.shapeFlag&6)return V(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=_(g.anchor||g.el),C=v&&v[fy];return C?_(C):v};let X=!1;const G=(g,v,C)=>{g==null?v._vnode&&ke(v._vnode,null,null,!0):k(v._vnode||null,g,v,null,null,null,C),X||(X=!0,xu(),md(),X=!1),v._vnode=g},Y={p:k,um:ke,m:St,r:Ne,mt:at,mc:y,pc:de,pbc:A,n:V,o:t};let _e,be;return{render:G,hydrate:_e,createApp:iy(G,_e)}}function Ra({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vd(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Cn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Vd(a,l)),l.type===Bo&&(l.el=a.el)}}function _y(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Md(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Md(e)}function ju(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const yy=Symbol.for("v-scx"),vy=()=>Xt(yy),Li={};function Gi(t,e,n){return Ld(t,e,n)}function Ld(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:a,onTrigger:l}=Oe){if(e&&i){const J=e;e=(...T)=>{J(...T),le()}}const c=rt,h=J=>r===!0?J:kn(J,r===!1?1:void 0);let d,p=!1,_=!1;if(_t(t)?(d=()=>t.value,p=zr(t)):Ns(t)?(d=()=>h(t),p=!0):ce(t)?(_=!0,p=t.some(J=>Ns(J)||zr(J)),d=()=>t.map(J=>{if(_t(J))return J.value;if(Ns(J))return h(J);if(ue(J))return Fn(J,c,2)})):ue(t)?e?d=()=>Fn(t,c,2):d=()=>(I&&I(),Bt(t,c,3,[R])):d=kt,e&&r){const J=d;d=()=>kn(J())}let I,R=J=>{I=L.onStop=()=>{Fn(J,c,4),I=L.onStop=void 0}},k;if(jo)if(R=kt,e?n&&Bt(e,c,3,[d(),_?[]:void 0,R]):d(),s==="sync"){const J=vy();k=J.__watcherHandles||(J.__watcherHandles=[])}else return kt;let O=_?new Array(t.length).fill(Li):Li;const j=()=>{if(!(!L.active||!L.dirty))if(e){const J=L.run();(r||p||(_?J.some((T,y)=>Hn(T,O[y])):Hn(J,O)))&&(I&&I(),Bt(e,c,3,[J,O===Li?void 0:_&&O[0]===Li?[]:O,R]),O=J)}else L.run()};j.allowRecurse=!!e;let F;s==="sync"?F=j:s==="post"?F=()=>ft(j,c&&c.suspense):(j.pre=!0,c&&(j.id=c.uid),F=()=>Ql(j));const L=new jl(d,kt,F),Z=l_(),le=()=>{L.stop(),Z&&Ll(Z.effects,L)};return e?n?j():O=L.run():s==="post"?ft(L.run.bind(L),c&&c.suspense):L.run(),k&&k.push(le),le}function Ey(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Fd(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=ii(this),l=Ld(s,i.bind(r),n);return a(),l}function Fd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function kn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_t(t))kn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Uf(t)||Ur(t))t.forEach(r=>{kn(r,e,n)});else if($f(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}const wy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${jt(e)}Modifiers`]||t[`${br(e)}Modifiers`];function Ty(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),a=i&&wy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>ze(d)?d.trim():d)),a.number&&(s=n.map(Qa)));let l,c=r[l=Ia(e)]||r[l=Ia(jt(e))];!c&&i&&(c=r[l=Ia(br(e))]),c&&Bt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Bt(h,t,6,s)}}function Ud(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const c=h=>{const d=Ud(h,e,!0);d&&(l=!0,it(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>a[c]=null):it(a,i),xe(t)&&r.set(t,a),a)}function Uo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,br(e))||Ee(t,e))}function Sa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:_,setupState:I,ctx:R,inheritAttrs:k}=t,O=oo(t);let j,F;try{if(n.shapeFlag&4){const Z=s||r,le=Z;j=Gt(h.call(le,Z,d,p,I,_,R)),F=l}else{const Z=e;j=Gt(Z.length>1?Z(p,{attrs:l,slots:a,emit:c}):Z(p,null)),F=e.props?l:Iy(l)}}catch(Z){Vs.length=0,Lo(Z,t,1),j=Me(gr)}let L=j;if(F&&k!==!1){const Z=Object.keys(F),{shapeFlag:le}=L;Z.length&&le&7&&(i&&Z.some(Ml)&&(F=Ay(F,i)),L=Wr(L,F,!1,!0))}return n.dirs&&(L=Wr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),j=L,oo(O),j}const Iy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},Ay=(t,e)=>{const n={};for(const r in t)(!Ml(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function by(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$u(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!Uo(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?$u(r,a,h):!0:!!a;return!1}function $u(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Uo(n,i))return!0}return!1}function Ry({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sy=t=>t.__isSuspense;function Py(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):M_(t)}const Ot=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),gr=Symbol.for("v-cmt"),Pa=Symbol.for("v-stc"),Vs=[];let It=null;function dt(t=!1){Vs.push(It=t?null:[])}function Cy(){Vs.pop(),It=Vs[Vs.length-1]||null}let zs=1;function Hu(t){zs+=t,t<0&&It&&(It.hasOnce=!0)}function Bd(t){return t.dynamicChildren=zs>0?It||Fr:null,Cy(),zs>0&&It&&It.push(t),t}function At(t,e,n,r,s,i){return Bd(ie(t,e,n,r,s,i,!0))}function Oy(t,e,n,r,s){return Bd(Me(t,e,n,r,s,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const jd=({key:t})=>t??null,Qi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||_t(t)||ue(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jd(e),ref:e&&Qi(e),scopeId:_d,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return l?(Zl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),zs>0&&!a&&It&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&It.push(c),c}const Me=ky;function ky(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===J_)&&(t=gr),ol(t)){const l=Wr(t,e,!0);return n&&Zl(l,n),zs>0&&!i&&It&&(l.shapeFlag&6?It[It.indexOf(t)]=l:It.push(l)),l.patchFlag=-2,l}if($y(t)&&(t=t.__vccOpts),e){e=Ny(e);let{class:l,style:c}=e;l&&!ze(l)&&(e.class=Bl(l)),xe(c)&&(ad(c)&&!ce(c)&&(c=it({},c)),e.style=Ul(c))}const a=ze(t)?1:Sy(t)?128:dy(t)?64:xe(t)?4:ue(t)?2:0;return ie(t,e,n,r,s,a,i,!0)}function Ny(t){return t?ad(t)||Pd(t)?it({},t):t:null}function Wr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Dy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&jd(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(Qi(e)):[i,Qi(e)]:Qi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wr(t.ssContent),ssFallback:t.ssFallback&&Wr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&yd(d,c.clone(d)),d}function sr(t=" ",e=0){return Me(Bo,null,t,e)}function lo(t="",e=!1){return e?(dt(),Oy(gr,null,t)):Me(gr,null,t)}function Gt(t){return t==null||typeof t=="boolean"?Me(gr):ce(t)?Me(Ot,null,t.slice()):typeof t=="object"?Cn(t):Me(Bo,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wr(t)}function Zl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pd(e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[sr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Bl([e.class,r.class]));else if(s==="style")e.style=Ul([e.style,r.style]);else if(ko(s)){const i=e[s],a=r[s];a&&i!==a&&!(ce(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){Bt(t,e,7,[n,r])}const xy=bd();let Vy=0;function My(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xy,i={uid:Vy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Od(r,s),emitsOptions:Ud(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ty.bind(null,i),t.ce&&t.ce(i),i}let rt=null,co,al;{const t=qf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};co=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),al=e("__VUE_SSR_SETTERS__",n=>jo=n)}const ii=t=>{const e=rt;return co(t),t.scope.on(),()=>{t.scope.off(),co(e)}},qu=()=>{rt&&rt.scope.off(),co(null)};function $d(t){return t.vnode.shapeFlag&4}let jo=!1;function Ly(t,e=!1,n=!1){e&&al(e);const{props:r,children:s}=t.vnode,i=$d(t);oy(t,r,i,e),uy(t,s,n);const a=i?Fy(t,e):void 0;return e&&al(!1),a}function Fy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Y_);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?By(t):null,i=ii(t);Gn();const a=Fn(r,t,0,[t.props,s]);if(Qn(),i(),Bf(a)){if(a.then(qu,qu),e)return a.then(l=>{Ku(t,l,e)}).catch(l=>{Lo(l,t,0)});t.asyncDep=a}else Ku(t,a,e)}else Hd(t,e)}function Ku(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=hd(e)),Hd(t,n)}let zu;function Hd(t,e,n){const r=t.type;if(!t.render){if(!e&&zu&&!r.render){const s=r.template||Xl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=it(it({isCustomElement:i,delimiters:l},a),c);r.render=zu(s,h)}}t.render=r.render||kt}{const s=ii(t);Gn();try{Z_(t)}finally{Qn(),s()}}}const Uy={get(t,e){return gt(t,"get",""),t[e]}};function By(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Uy),slots:t.slots,emit:t.emit,expose:e}}function $o(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hd(P_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ds)return Ds[n](t)},has(e,n){return n in e||n in Ds}})):t.proxy}function jy(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function $y(t){return ue(t)&&"__vccOpts"in t}const Lt=(t,e)=>C_(t,e,jo);function qd(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ce(e)?ol(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ol(n)&&(n=[n]),Me(t,e,n))}const Hy="3.4.36";/**
* @vue/runtime-dom v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const qy="http://www.w3.org/2000/svg",Ky="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,Wu=on&&on.createElement("template"),zy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?on.createElementNS(qy,t):e==="mathml"?on.createElementNS(Ky,t):n?on.createElement(t,{is:n}):on.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wu.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const l=Wu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wy=Symbol("_vtc");function Gy(t,e,n){const r=t[Wy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gu=Symbol("_vod"),Qy=Symbol("_vsh"),Jy=Symbol(""),Xy=/(^|;)\s*display\s*:/;function Yy(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ji(r,l,"")}else for(const a in e)n[a]==null&&Ji(r,a,"");for(const a in n)a==="display"&&(i=!0),Ji(r,a,n[a])}else if(s){if(e!==n){const a=r[Jy];a&&(n+=";"+a),r.cssText=n,i=Xy.test(n)}}else e&&t.removeAttribute("style");Gu in t&&(t[Gu]=i?r.display:"",t[Qy]&&(r.display="none"))}const Qu=/\s*!important$/;function Ji(t,e,n){if(ce(n))n.forEach(r=>Ji(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Zy(t,e);Qu.test(n)?t.setProperty(br(r),n.replace(Qu,""),"important"):t[r]=n}}const Ju=["Webkit","Moz","ms"],Ca={};function Zy(t,e){const n=Ca[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return Ca[e]=r;r=xo(r);for(let s=0;s<Ju.length;s++){const i=Ju[s]+r;if(i in t)return Ca[e]=i}return e}const Xu="http://www.w3.org/1999/xlink";function Yu(t,e,n,r,s,i=i_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xu,e.slice(6,e.length)):t.setAttributeNS(Xu,e,n):n==null||i&&!Kf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Wn(n)?String(n):n)}function ev(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kf(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function tv(t,e,n,r){t.removeEventListener(e,n,r)}const Zu=Symbol("_vei");function nv(t,e,n,r,s=null){const i=t[Zu]||(t[Zu]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=rv(e);if(r){const h=i[e]=ov(r,s);xr(t,l,h,c)}else a&&(tv(t,l,a,c),i[e]=void 0)}}const eh=/(?:Once|Passive|Capture)$/;function rv(t){let e;if(eh.test(t)){e={};let r;for(;r=t.match(eh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let Oa=0;const sv=Promise.resolve(),iv=()=>Oa||(sv.then(()=>Oa=0),Oa=Date.now());function ov(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(av(r,n.value),e,5,[r])};return n.value=t,n.attached=iv(),n}function av(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const th=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Gy(t,r,a):e==="style"?Yy(t,n,r):ko(e)?Ml(e)||nv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cv(t,e,r,a))?(ev(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yu(t,e,r,a,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yu(t,e,r,a))};function cv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&th(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return th(e)&&ze(n)?!1:e in t}const nh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>qi(e,n):e};function uv(t){t.target.composing=!0}function rh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ka=Symbol("_assign"),_r={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ka]=nh(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Qa(l)),t[ka](l)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",uv),xr(t,"compositionend",rh),xr(t,"change",rh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ka]=nh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Qa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hv=["ctrl","shift","alt","meta"],fv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hv.some(n=>t[`${n}Key`]&&!e.includes(n))},dv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=fv[e[a]];if(l&&l(s,e))return}return t(s,...i)})},pv=it({patchProp:lv},zy);let sh;function mv(){return sh||(sh=py(pv))}const gv=(...t)=>{const e=mv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,_v(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function _v(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yv(t){return ze(t)?document.querySelector(t):t}const ec=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vv={},Ev={class:"container"},wv={class:"d-flex justify-content-center py-3"},Tv={class:"nav nav-pills"},Iv={class:"nav-item"},Av={class:"nav-item"},bv={class:"nav-item"},Rv={class:"nav-item"},Sv={class:"nav-item"},Pv={class:"nav-item"};function Cv(t,e){const n=Jl("router-link");return dt(),At("div",Ev,[ie("header",wv,[ie("ul",Tv,[ie("li",Iv,[Me(n,{to:"/",class:"nav-link","active-class":"active","aria-current":"page"},{default:Pn(()=>[sr("Home (Week 5)")]),_:1})]),ie("li",Av,[Me(n,{to:"/about",class:"nav-link","active-class":"active"},{default:Pn(()=>[sr("About")]),_:1})]),ie("li",bv,[Me(n,{to:"/FireLogin",class:"nav-link","active-class":"active"},{default:Pn(()=>[sr("Firebase Login")]),_:1})]),ie("li",Rv,[Me(n,{to:"/addbook",class:"nav-link","active-class":"active"},{default:Pn(()=>[sr("Add Book")]),_:1})]),ie("li",Sv,[Me(n,{to:"/WeatherCheck",class:"nav-link","active-class":"active"},{default:Pn(()=>[sr("Get Weather")]),_:1})]),ie("li",Pv,[Me(n,{to:"/CountBookAPI",class:"nav-link","active-class":"active"},{default:Pn(()=>[sr("Count Book API")]),_:1})])])])])}const Ov=ec(vv,[["render",Cv],["__scopeId","data-v-6ad8f231"]]),kv={class:"container"},Nv={key:0},Dv={class:"container"},xv={__name:"App",setup(t){const e=()=>this.$route.name!=="CountBookAPI";return(n,r)=>{const s=Jl("router-view");return dt(),At("div",kv,[e?(dt(),At("header",Nv,[Me(Ov)])):lo("",!0),ie("main",Dv,[Me(s)])])}}};/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof document<"u";function Vv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function Na(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const Ms=()=>{},Ht=Array.isArray,Kd=/#/g,Mv=/&/g,Lv=/\//g,Fv=/=/g,Uv=/\?/g,zd=/\+/g,Bv=/%5B/g,jv=/%5D/g,Wd=/%5E/g,$v=/%60/g,Gd=/%7B/g,Hv=/%7C/g,Qd=/%7D/g,qv=/%20/g;function tc(t){return encodeURI(""+t).replace(Hv,"|").replace(Bv,"[").replace(jv,"]")}function Kv(t){return tc(t).replace(Gd,"{").replace(Qd,"}").replace(Wd,"^")}function ll(t){return tc(t).replace(zd,"%2B").replace(qv,"+").replace(Kd,"%23").replace(Mv,"%26").replace($v,"`").replace(Gd,"{").replace(Qd,"}").replace(Wd,"^")}function zv(t){return ll(t).replace(Fv,"%3D")}function Wv(t){return tc(t).replace(Kd,"%23").replace(Uv,"%3F")}function Gv(t){return t==null?"":Wv(t).replace(Lv,"%2F")}function Ws(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Qv=/\/$/,Jv=t=>t.replace(Qv,"");function Da(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=eE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ws(a)}}function Xv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ih(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gr(e.matched[r],n.matched[s])&&Jd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zv(t[n],e[n]))return!1;return!0}function Zv(t,e){return Ht(t)?oh(t,e):Ht(e)?oh(e,t):t===e}function oh(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Gs;(function(t){t.pop="pop",t.push="push"})(Gs||(Gs={}));var Ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ls||(Ls={}));function tE(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jv(t)}const nE=/^[^#]+#/;function rE(t,e){return t.replace(nE,"#")+e}function sE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ho=()=>({left:window.scrollX,top:window.scrollY});function iE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ah(t,e){return(history.state?history.state.position-e:-1)+t}const cl=new Map;function oE(t,e){cl.set(t,e)}function aE(t){const e=cl.get(t);return cl.delete(t),e}let lE=()=>location.protocol+"//"+location.host;function Xd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ih(c,"")}return ih(n,t)+r+s}function cE(t,e,n,r){let s=[],i=[],a=null;const l=({state:_})=>{const I=Xd(t,location),R=n.value,k=e.value;let O=0;if(_){if(n.value=I,e.value=_,a&&a===R){a=null;return}O=k?_.position-k.position:0}else r(I);s.forEach(j=>{j(n.value,R,{delta:O,type:Gs.pop,direction:O?O>0?Ls.forward:Ls.back:Ls.unknown})})};function c(){a=n.value}function h(_){s.push(_);const I=()=>{const R=s.indexOf(_);R>-1&&s.splice(R,1)};return i.push(I),I}function d(){const{history:_}=window;_.state&&_.replaceState(Ae({},_.state,{scroll:Ho()}),"")}function p(){for(const _ of i)_();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function lh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ho():null}}function uE(t){const{history:e,location:n}=window,r={value:Xd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),_=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:lE()+t+c;try{e[d?"replaceState":"pushState"](h,"",_),s.value=h}catch(I){console.error(I),n[d?"replace":"assign"](_)}}function a(c,h){const d=Ae({},e.state,lh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Ae({},s.value,e.state,{forward:c,scroll:Ho()});i(d.current,d,!0);const p=Ae({},lh(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function hE(t){t=tE(t);const e=uE(t),n=cE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:rE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fE(t){return typeof t=="string"||t&&typeof t=="object"}function Yd(t){return typeof t=="string"||typeof t=="symbol"}const Zd=Symbol("");var ch;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ch||(ch={}));function Qr(t,e){return Ae(new Error,{type:t,[Zd]:!0},e)}function sn(t,e){return t instanceof Error&&Zd in t&&(e==null||!!(t.type&e))}const uh="[^/]+?",dE={sensitive:!1,strict:!1,start:!0,end:!0},pE=/[.+*?^${}()[\]/\\]/g;function mE(t,e){const n=Ae({},dE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const _=h[p];let I=40+(n.sensitive?.25:0);if(_.type===0)p||(s+="/"),s+=_.value.replace(pE,"\\$&"),I+=40;else if(_.type===1){const{value:R,repeatable:k,optional:O,regexp:j}=_;i.push({name:R,repeatable:k,optional:O});const F=j||uh;if(F!==uh){I+=10;try{new RegExp(`(${F})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${R}" (${F}): `+Z.message)}}let L=k?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(L=O&&h.length<2?`(?:/${L})`:"/"+L),O&&(L+="?"),s+=L,I+=20,O&&(I+=-8),k&&(I+=-20),F===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let _=1;_<d.length;_++){const I=d[_]||"",R=i[_-1];p[R.name]=I&&R.repeatable?I.split("/"):I}return p}function c(h){let d="",p=!1;for(const _ of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of _)if(I.type===0)d+=I.value;else if(I.type===1){const{value:R,repeatable:k,optional:O}=I,j=R in h?h[R]:"";if(Ht(j)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const F=Ht(j)?j.join("/"):j;if(!F)if(O)_.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=F}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function gE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ep(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hh(r))return 1;if(hh(s))return-1}return s.length-r.length}function hh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _E={type:0,value:""},yE=/[a-zA-Z0-9_]/;function vE(t){if(!t)return[[]];if(t==="/")return[[_E]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${h}": ${I}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function _(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):_();break;case 4:_(),n=r;break;case 1:c==="("?n=2:yE.test(c)?_():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function EE(t,e,n){const r=mE(vE(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wE(t,e){const n=[],r=new Map;e=ph({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,_,I){const R=!I,k=TE(p);k.aliasOf=I&&I.record;const O=ph(e,p),j=[k];if("alias"in p){const Z=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of Z)j.push(Ae({},k,{components:I?I.record.components:k.components,path:le,aliasOf:I?I.record:k}))}let F,L;for(const Z of j){const{path:le}=Z;if(_&&le[0]!=="/"){const J=_.record.path,T=J[J.length-1]==="/"?"":"/";Z.path=_.record.path+(le&&T+le)}if(F=EE(Z,_,O),I?I.alias.push(F):(L=L||F,L!==F&&L.alias.push(F),R&&p.name&&!dh(F)&&a(p.name)),tp(F)&&c(F),k.children){const J=k.children;for(let T=0;T<J.length;T++)i(J[T],F,I&&I.children[T])}I=I||F}return L?()=>{a(L)}:Ms}function a(p){if(Yd(p)){const _=r.get(p);_&&(r.delete(p),n.splice(n.indexOf(_),1),_.children.forEach(a),_.alias.forEach(a))}else{const _=n.indexOf(p);_>-1&&(n.splice(_,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const _=bE(p,n);n.splice(_,0,p),p.record.name&&!dh(p)&&r.set(p.record.name,p)}function h(p,_){let I,R={},k,O;if("name"in p&&p.name){if(I=r.get(p.name),!I)throw Qr(1,{location:p});O=I.record.name,R=Ae(fh(_.params,I.keys.filter(L=>!L.optional).concat(I.parent?I.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&fh(p.params,I.keys.map(L=>L.name))),k=I.stringify(R)}else if(p.path!=null)k=p.path,I=n.find(L=>L.re.test(k)),I&&(R=I.parse(k),O=I.record.name);else{if(I=_.name?r.get(_.name):n.find(L=>L.re.test(_.path)),!I)throw Qr(1,{location:p,currentLocation:_});O=I.record.name,R=Ae({},_.params,p.params),k=I.stringify(R)}const j=[];let F=I;for(;F;)j.unshift(F.record),F=F.parent;return{name:O,path:k,params:R,matched:j,meta:AE(j)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function fh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function TE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:IE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function IE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function dh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AE(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function ph(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function bE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ep(t,e[i])<0?r=i:n=i+1}const s=RE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function RE(t){let e=t;for(;e=e.parent;)if(tp(e)&&ep(t,e)===0)return e}function tp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function SE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(zd," "),a=i.indexOf("="),l=Ws(a<0?i:i.slice(0,a)),c=a<0?null:Ws(i.slice(a+1));if(l in e){let h=e[l];Ht(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function mh(t){let e="";for(let n in t){const r=t[n];if(n=zv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(i=>i&&ll(i)):[r&&ll(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function PE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CE=Symbol(""),gh=Symbol(""),qo=Symbol(""),np=Symbol(""),ul=Symbol("");function Is(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=_=>{_===!1?c(Qr(4,{from:n,to:e})):_ instanceof Error?c(_):fE(_)?c(Qr(2,{from:e,to:_})):(a&&r.enterCallbacks[s]===a&&typeof _=="function"&&a.push(_),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(_=>c(_))})}function xa(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(OE(c)){const d=(c.__vccOpts||c)[e];d&&i.push(On(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const p=Vv(d)?d.default:d;a.components[l]=p;const I=(p.__vccOpts||p)[e];return I&&On(I,n,r,a,l,s)()}))}}return i}function OE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _h(t){const e=Xt(qo),n=Xt(np),r=Lt(()=>{const c=Br(t.to);return e.resolve(c)}),s=Lt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const _=p.findIndex(Gr.bind(null,d));if(_>-1)return _;const I=yh(c[h-2]);return h>1&&yh(d)===I&&p[p.length-1].path!==I?p.findIndex(Gr.bind(null,c[h-2])):_}),i=Lt(()=>s.value>-1&&xE(n.params,r.value.params)),a=Lt(()=>s.value>-1&&s.value===n.matched.length-1&&Jd(n.params,r.value.params));function l(c={}){return DE(c)?e[Br(t.replace)?"replace":"push"](Br(t.to)).catch(Ms):Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const kE=vd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_h,setup(t,{slots:e}){const n=Mo(_h(t)),{options:r}=Xt(qo),s=Lt(()=>({[vh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:qd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),NE=kE;function DE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function yh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vh=(t,e,n)=>t??e??n,VE=vd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(ul),s=Lt(()=>t.route||r.value),i=Xt(gh,0),a=Lt(()=>{let h=Br(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Lt(()=>s.value.matched[a.value]);Wi(gh,Lt(()=>a.value+1)),Wi(CE,l),Wi(ul,s);const c=$t();return Gi(()=>[c.value,l.value,t.name],([h,d,p],[_,I,R])=>{d&&(d.instances[p]=h,I&&I!==d&&h&&h===_&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),h&&d&&(!I||!Gr(d,I)||!_)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,_=p&&p.components[d];if(!_)return Eh(n.default,{Component:_,route:h});const I=p.props[d],R=I?I===!0?h.params:typeof I=="function"?I(h):I:null,O=qd(_,Ae({},R,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Eh(n.default,{Component:O,route:h})||O}}});function Eh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ME=VE;function LE(t){const e=wE(t.routes,t),n=t.parseQuery||SE,r=t.stringifyQuery||mh,s=t.history,i=Is(),a=Is(),l=Is(),c=O_(An);let h=An;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Na.bind(null,V=>""+V),p=Na.bind(null,Gv),_=Na.bind(null,Ws);function I(V,X){let G,Y;return Yd(V)?(G=e.getRecordMatcher(V),Y=X):Y=V,e.addRoute(Y,G)}function R(V){const X=e.getRecordMatcher(V);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function j(V,X){if(X=Ae({},X||c.value),typeof V=="string"){const v=Da(n,V,X.path),C=e.resolve({path:v.path},X),M=s.createHref(v.fullPath);return Ae(v,C,{params:_(C.params),hash:Ws(v.hash),redirectedFrom:void 0,href:M})}let G;if(V.path!=null)G=Ae({},V,{path:Da(n,V.path,X.path).path});else{const v=Ae({},V.params);for(const C in v)v[C]==null&&delete v[C];G=Ae({},V,{params:p(v)}),X.params=p(X.params)}const Y=e.resolve(G,X),_e=V.hash||"";Y.params=d(_(Y.params));const be=Xv(r,Ae({},V,{hash:Kv(_e),path:Y.path})),g=s.createHref(be);return Ae({fullPath:be,hash:_e,query:r===mh?PE(V.query):V.query||{}},Y,{redirectedFrom:void 0,href:g})}function F(V){return typeof V=="string"?Da(n,V,c.value.path):Ae({},V)}function L(V,X){if(h!==V)return Qr(8,{from:X,to:V})}function Z(V){return T(V)}function le(V){return Z(Ae(F(V),{replace:!0}))}function J(V){const X=V.matched[V.matched.length-1];if(X&&X.redirect){const{redirect:G}=X;let Y=typeof G=="function"?G(V):G;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=F(Y):{path:Y},Y.params={}),Ae({query:V.query,hash:V.hash,params:Y.path!=null?{}:V.params},Y)}}function T(V,X){const G=h=j(V),Y=c.value,_e=V.state,be=V.force,g=V.replace===!0,v=J(G);if(v)return T(Ae(F(v),{state:typeof v=="object"?Ae({},_e,v.state):_e,force:be,replace:g}),X||G);const C=G;C.redirectedFrom=X;let M;return!be&&Yv(r,Y,G)&&(M=Qr(16,{to:C,from:Y}),St(Y,Y,!0,!1)),(M?Promise.resolve(M):A(C,Y)).catch(x=>sn(x)?sn(x,2)?x:Dt(x):de(x,C,Y)).then(x=>{if(x){if(sn(x,2))return T(Ae({replace:g},F(x.to),{state:typeof x.to=="object"?Ae({},_e,x.to.state):_e,force:be}),X||C)}else x=S(C,Y,!0,g,_e);return b(C,Y,x),x})}function y(V,X){const G=L(V,X);return G?Promise.reject(G):Promise.resolve()}function w(V){const X=yn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(V):V()}function A(V,X){let G;const[Y,_e,be]=FE(V,X);G=xa(Y.reverse(),"beforeRouteLeave",V,X);for(const v of Y)v.leaveGuards.forEach(C=>{G.push(On(C,V,X))});const g=y.bind(null,V,X);return G.push(g),ht(G).then(()=>{G=[];for(const v of i.list())G.push(On(v,V,X));return G.push(g),ht(G)}).then(()=>{G=xa(_e,"beforeRouteUpdate",V,X);for(const v of _e)v.updateGuards.forEach(C=>{G.push(On(C,V,X))});return G.push(g),ht(G)}).then(()=>{G=[];for(const v of be)if(v.beforeEnter)if(Ht(v.beforeEnter))for(const C of v.beforeEnter)G.push(On(C,V,X));else G.push(On(v.beforeEnter,V,X));return G.push(g),ht(G)}).then(()=>(V.matched.forEach(v=>v.enterCallbacks={}),G=xa(be,"beforeRouteEnter",V,X,w),G.push(g),ht(G))).then(()=>{G=[];for(const v of a.list())G.push(On(v,V,X));return G.push(g),ht(G)}).catch(v=>sn(v,8)?v:Promise.reject(v))}function b(V,X,G){l.list().forEach(Y=>w(()=>Y(V,X,G)))}function S(V,X,G,Y,_e){const be=L(V,X);if(be)return be;const g=X===An,v=Vr?history.state:{};G&&(Y||g?s.replace(V.fullPath,Ae({scroll:g&&v&&v.scroll},_e)):s.push(V.fullPath,_e)),c.value=V,St(V,X,G,g),Dt()}let E;function at(){E||(E=s.listen((V,X,G)=>{if(!zt.listening)return;const Y=j(V),_e=J(Y);if(_e){T(Ae(_e,{replace:!0}),Y).catch(Ms);return}h=Y;const be=c.value;Vr&&oE(ah(be.fullPath,G.delta),Ho()),A(Y,be).catch(g=>sn(g,12)?g:sn(g,2)?(T(g.to,Y).then(v=>{sn(v,20)&&!G.delta&&G.type===Gs.pop&&s.go(-1,!1)}).catch(Ms),Promise.reject()):(G.delta&&s.go(-G.delta,!1),de(g,Y,be))).then(g=>{g=g||S(Y,be,!1),g&&(G.delta&&!sn(g,8)?s.go(-G.delta,!1):G.type===Gs.pop&&sn(g,20)&&s.go(-1,!1)),b(Y,be,g)}).catch(Ms)}))}let Rt=Is(),Be=Is(),ge;function de(V,X,G){Dt(V);const Y=Be.list();return Y.length?Y.forEach(_e=>_e(V,X,G)):console.error(V),Promise.reject(V)}function vt(){return ge&&c.value!==An?Promise.resolve():new Promise((V,X)=>{Rt.add([V,X])})}function Dt(V){return ge||(ge=!V,at(),Rt.list().forEach(([X,G])=>V?G(V):X()),Rt.reset()),V}function St(V,X,G,Y){const{scrollBehavior:_e}=t;if(!Vr||!_e)return Promise.resolve();const be=!G&&aE(ah(V.fullPath,0))||(Y||!G)&&history.state&&history.state.scroll||null;return dd().then(()=>_e(V,X,be)).then(g=>g&&iE(g)).catch(g=>de(g,V,X))}const ke=V=>s.go(V);let Ne;const yn=new Set,zt={currentRoute:c,listening:!0,addRoute:I,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:j,options:t,push:Z,replace:le,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Be.add,isReady:vt,install(V){const X=this;V.component("RouterLink",NE),V.component("RouterView",ME),V.config.globalProperties.$router=X,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Br(c)}),Vr&&!Ne&&c.value===An&&(Ne=!0,Z(s.location).catch(_e=>{}));const G={};for(const _e in An)Object.defineProperty(G,_e,{get:()=>c.value[_e],enumerable:!0});V.provide(qo,X),V.provide(np,id(G)),V.provide(ul,c);const Y=V.unmount;yn.add(V),V.unmount=function(){yn.delete(V),yn.size<1&&(h=An,E&&E(),E=null,c.value=An,Ne=!1,ge=!1),Y()}}};function ht(V){return V.reduce((X,G)=>X.then(()=>w(G)),Promise.resolve())}return zt}function FE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Gr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>Gr(h,c))||s.push(c))}return[n,r,s]}function rp(){return Xt(qo)}const UE={};function BE(t,e){return null}const jE=ec(UE,[["render",BE]]),$E={class:"about"},HE=ie("h1",null,"About Our Library",-1),qE=ie("p",null,"Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.",-1),KE=[HE,qE],zE={__name:"AboutView",setup(t){return(e,n)=>(dt(),At("div",$E,KE))}};var wh={};/**
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
 */const sp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},WE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,I=h&63;c||(I=64,a||(_=64)),r.push(n[d],n[p],n[_],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new GE;const _=i<<2|l>>4;if(r.push(_),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QE=function(t){const e=sp(t);return ip.encodeByteArray(e,!0)},uo=function(t){return QE(t).replace(/\./g,"")},op=function(t){try{return ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XE=()=>JE().__FIREBASE_DEFAULTS__,YE=()=>{if(typeof process>"u"||typeof wh>"u")return;const t=wh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&op(t[1]);return e&&JSON.parse(e)},Ko=()=>{try{return XE()||YE()||ZE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=Ko())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ew=t=>{const e=ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lp=()=>{var t;return(t=Ko())===null||t===void 0?void 0:t.config},cp=t=>{var e;return(e=Ko())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[uo(JSON.stringify(n)),uo(JSON.stringify(a)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function sw(){var t;const e=(t=Ko())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ow(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aw(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lw(){return!sw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cw(){try{return typeof indexedDB=="object"}catch{return!1}}function uw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const hw="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hw,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?fw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new _n(s,l,r)}}function fw(t,e){return t.replace(dw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dw=/\{\$([^}]+)}/g;function pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Th(i)&&Th(a)){if(!ho(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Th(t){return t!==null&&typeof t=="object"}/**
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
 */function ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mw(t,e){const n=new gw(t,e);return n.subscribe.bind(n)}class gw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_w(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Va),s.error===void 0&&(s.error=Va),s.complete===void 0&&(s.complete=Va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _w(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Va(){}/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class yw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ew(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vw(t){return t===ir?void 0:t}function Ew(t){return t.instantiationMode==="EAGER"}/**
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
 */class ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Tw={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Iw=pe.INFO,Aw={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},bw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Aw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Iw,this._logHandler=bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Rw=(t,e)=>e.some(n=>t instanceof n);let Ih,Ah;function Sw(){return Ih||(Ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pw(){return Ah||(Ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,hl=new WeakMap,hp=new WeakMap,Ma=new WeakMap,rc=new WeakMap;function Cw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Un(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&up.set(n,t)}).catch(()=>{}),rc.set(e,t),e}function Ow(t){if(hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});hl.set(t,e)}let fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kw(t){fl=t(fl)}function Nw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(La(this),e,...n);return hp.set(r,e.sort?e.sort():[e]),Un(r)}:Pw().includes(t)?function(...e){return t.apply(La(this),e),Un(up.get(this))}:function(...e){return Un(t.apply(La(this),e))}}function Dw(t){return typeof t=="function"?Nw(t):(t instanceof IDBTransaction&&Ow(t),Rw(t,Sw())?new Proxy(t,fl):t)}function Un(t){if(t instanceof IDBRequest)return Cw(t);if(Ma.has(t))return Ma.get(t);const e=Dw(t);return e!==t&&(Ma.set(t,e),rc.set(e,t)),e}const La=t=>rc.get(t);function xw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Un(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Un(a.result),c.oldVersion,c.newVersion,Un(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Vw=["get","getKey","getAll","getAllKeys","count"],Mw=["put","add","delete","clear"],Fa=new Map;function bh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Mw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Fa.set(e,i),i}kw(t=>({...t,get:(e,n,r)=>bh(e,n)||t.get(e,n,r),has:(e,n)=>!!bh(e,n)||t.has(e,n)}));/**
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
 */class Lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",Rh="0.10.10";/**
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
 */const pn=new nc("@firebase/app"),Uw="@firebase/app-compat",Bw="@firebase/analytics-compat",jw="@firebase/analytics",$w="@firebase/app-check-compat",Hw="@firebase/app-check",qw="@firebase/auth",Kw="@firebase/auth-compat",zw="@firebase/database",Ww="@firebase/database-compat",Gw="@firebase/functions",Qw="@firebase/functions-compat",Jw="@firebase/installations",Xw="@firebase/installations-compat",Yw="@firebase/messaging",Zw="@firebase/messaging-compat",eT="@firebase/performance",tT="@firebase/performance-compat",nT="@firebase/remote-config",rT="@firebase/remote-config-compat",sT="@firebase/storage",iT="@firebase/storage-compat",oT="@firebase/firestore",aT="@firebase/vertexai-preview",lT="@firebase/firestore-compat",cT="firebase",uT="10.13.1";/**
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
 */const pl="[DEFAULT]",hT={[dl]:"fire-core",[Uw]:"fire-core-compat",[jw]:"fire-analytics",[Bw]:"fire-analytics-compat",[Hw]:"fire-app-check",[$w]:"fire-app-check-compat",[qw]:"fire-auth",[Kw]:"fire-auth-compat",[zw]:"fire-rtdb",[Ww]:"fire-rtdb-compat",[Gw]:"fire-fn",[Qw]:"fire-fn-compat",[Jw]:"fire-iid",[Xw]:"fire-iid-compat",[Yw]:"fire-fcm",[Zw]:"fire-fcm-compat",[eT]:"fire-perf",[tT]:"fire-perf-compat",[nT]:"fire-rc",[rT]:"fire-rc-compat",[sT]:"fire-gcs",[iT]:"fire-gcs-compat",[oT]:"fire-fst",[lT]:"fire-fst-compat",[aT]:"fire-vertex","fire-js":"fire-js",[cT]:"fire-js-all"};/**
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
 */const fo=new Map,fT=new Map,ml=new Map;function Sh(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jr(t){const e=t.name;if(ml.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of fo.values())Sh(n,t);for(const n of fT.values())Sh(n,t);return!0}function sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
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
 */const dT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new oi("app","Firebase",dT);/**
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
 */class pT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=uT;function fp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(n||(n=lp()),!n)throw Bn.create("no-options");const i=fo.get(s);if(i){if(ho(n,i.options)&&ho(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const a=new ww(s);for(const c of ml.values())a.addComponent(c);const l=new pT(n,r,a);return fo.set(s,l),l}function dp(t=pl){const e=fo.get(t);if(!e&&t===pl&&lp())return fp();if(!e)throw Bn.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let s=(r=hT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(l.join(" "));return}Jr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mT="firebase-heartbeat-database",gT=1,Qs="firebase-heartbeat-store";let Ua=null;function pp(){return Ua||(Ua=xw(mT,gT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function _T(t){try{const n=(await pp()).transaction(Qs),r=await n.objectStore(Qs).get(mp(t));return await n.done,r}catch(e){if(e instanceof _n)pn.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function Ph(t,e){try{const r=(await pp()).transaction(Qs,"readwrite");await r.objectStore(Qs).put(e,mp(t)),await r.done}catch(n){if(n instanceof _n)pn.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function mp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yT=1024,vT=30*24*60*60*1e3;class ET{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ch();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=vT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ch(),{heartbeatsToSend:r,unsentEntries:s}=wT(this._heartbeatsCache.heartbeats),i=uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pn.warn(n),""}}}function Ch(){return new Date().toISOString().substring(0,10)}function wT(t,e=yT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Oh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Oh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cw()?uw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Oh(t){return uo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IT(t){Jr(new yr("platform-logger",e=>new Lw(e),"PRIVATE")),Jr(new yr("heartbeat",e=>new ET(e),"PRIVATE")),jn(dl,Rh,t),jn(dl,Rh,"esm2017"),jn("fire-js","")}IT("");function ic(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AT=gp,_p=new oi("auth","Firebase",gp());/**
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
 */const po=new nc("@firebase/auth");function bT(t,...e){po.logLevel<=pe.WARN&&po.warn(`Auth (${ns}): ${t}`,...e)}function Xi(t,...e){po.logLevel<=pe.ERROR&&po.error(`Auth (${ns}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw oc(t,...e)}function Yt(t,...e){return oc(t,...e)}function yp(t,e,n){const r=Object.assign(Object.assign({},AT()),{[e]:n});return new oi("auth","Firebase",r).create(e,{appName:t.name})}function hn(t){return yp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _p.create(t,...e)}function oe(t,e,...n){if(!t)throw oc(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xi(e),new Error(e)}function mn(t,e){t||an(e)}/**
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
 */function gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RT(){return kh()==="http:"||kh()==="https:"}function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ST(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RT()||iw()||"connection"in navigator)?navigator.onLine:!0}function PT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class li{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=rw()||ow()}get(){return ST()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ac(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OT=new li(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,s={}){return Ep(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=ai(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vp.fetch()(wp(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ep(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CT),e);try{const s=new NT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Fi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fi(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Fi(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Fi(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yp(t,d,h);qt(t,d)}}catch(s){if(s instanceof _n)throw s;qt(t,"network-request-failed",{message:String(s)})}}async function ci(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ac(t.config,s):`${t.config.apiScheme}://${s}`}function kT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),OT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yt(t,e,r);return s.customData._tokenResponse=n,s}function Nh(t){return t!==void 0&&t.enterprise!==void 0}class DT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xT(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
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
 */async function VT(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function Tp(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MT(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),s=lc(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fs(Ba(s.auth_time)),issuedAtTime:Fs(Ba(s.iat)),expirationTime:Fs(Ba(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ba(t){return Number(t)*1e3}function lc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xi("JWT malformed, contained fewer than 3 sections"),null;try{const s=op(n);return s?JSON.parse(s):(Xi("Failed to decode base64 JWT payload"),null)}catch(s){return Xi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dh(t){const e=lc(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&LT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Js(t,Tp(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ip(i.providerUserInfo):[],l=BT(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function UT(t){const e=Nt(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ip(t){return t.map(e=>{var{providerId:n}=e,r=ic(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jT(t,e){const n=await Ep(t,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=wp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",vp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $T(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Dh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new $r;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function bn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ic(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MT(this,e)}reload(){return UT(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Js(this,VT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:Z,isAnonymous:le,providerData:J,stsTokenManager:T}=n;oe(L&&T,e,"internal-error");const y=$r.fromJSON(this.name,T);oe(typeof L=="string",e,"internal-error"),bn(p,e.name),bn(_,e.name),oe(typeof Z=="boolean",e,"internal-error"),oe(typeof le=="boolean",e,"internal-error"),bn(I,e.name),bn(R,e.name),bn(k,e.name),bn(O,e.name),bn(j,e.name),bn(F,e.name);const w=new ln({uid:L,auth:e,email:_,emailVerified:Z,displayName:p,isAnonymous:le,photoURL:R,phoneNumber:I,tenantId:k,stsTokenManager:y,createdAt:j,lastLoginAt:F});return J&&Array.isArray(J)&&(w.providerData=J.map(A=>Object.assign({},A))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new $r;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ip(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new $r;l.updateFromIdToken(r);const c=new ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const xh=new Map;function cn(t){mn(t instanceof Function,"Expected a class definition");let e=xh.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xh.set(t,e),e)}/**
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
 */class Ap{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ap.type="NONE";const Vh=Ap;/**
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
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hr(cn(Vh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||cn(Vh);const a=Yi(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){const p=ln._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Hr(i,e,r))}}/**
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
 */function Mh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Op(e))return"Blackberry";if(kp(e))return"Webos";if(Rp(e))return"Safari";if((e.includes("chrome/")||Sp(e))&&!e.includes("edge/"))return"Chrome";if(Cp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bp(t=ot()){return/firefox\//i.test(t)}function Rp(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sp(t=ot()){return/crios\//i.test(t)}function Pp(t=ot()){return/iemobile/i.test(t)}function Cp(t=ot()){return/android/i.test(t)}function Op(t=ot()){return/blackberry/i.test(t)}function kp(t=ot()){return/webos/i.test(t)}function cc(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HT(t=ot()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qT(){return aw()&&document.documentMode===10}function Np(t=ot()){return cc(t)||Cp(t)||kp(t)||Op(t)||/windows phone/i.test(t)||Pp(t)}/**
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
 */function Dp(t,e=[]){let n;switch(t){case"Browser":n=Mh(ot());break;case"Worker":n=`${Mh(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
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
 */class KT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zT(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
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
 */const WT=6;class GT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:WT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class QT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lh(this),this.idTokenSubscription=new Lh(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tp(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(hn(this));const n=e?Nt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zT(this),n=new GT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $T(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rr(t){return Nt(t)}class Lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=mw(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JT(t){zo=t}function xp(t){return zo.loadJS(t)}function XT(){return zo.recaptchaEnterpriseScript}function YT(){return zo.gapiScript}function ZT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eI="recaptcha-enterprise",tI="NO_RECAPTCHA";class nI{constructor(e){this.type=eI,this.auth=Rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{xT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new DT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Nh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(tI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&Nh(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=XT();c.length!==0&&(c+=l),xp(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Fh(t,e,n,r=!1){const s=new nI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function yl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Fh(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Fh(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
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
 */function rI(t,e){const n=sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ho(i,e??{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function sI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iI(t,e,n){const r=Rr(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vp(e),{host:a,port:l}=oI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),aI()}function Vp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oI(t){const e=Vp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Uh(a)}}}function Uh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function lI(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cI(t,e){return ci(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}/**
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
 */async function uI(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function hI(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
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
 */class Xs extends uc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,n,"signInWithPassword",cI);case"emailLink":return uI(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,r,"signUpPassword",lI);case"emailLink":return hI(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qr(t,e){return ci(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
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
 */const fI="http://localhost";class vr extends uc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ic(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:fI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ai(n)}return e}}/**
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
 */function dI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pI(t){const e=Ps(Cs(t)).link,n=e?Ps(Cs(e)).deep_link_id:null,r=Ps(Cs(t)).deep_link_id;return(r?Ps(Cs(r)).link:null)||r||n||e||t}class hc{constructor(e){var n,r,s,i,a,l;const c=Ps(Cs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=dI((s=c.mode)!==null&&s!==void 0?s:null);oe(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=pI(e);try{return new hc(n)}catch{return null}}}/**
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
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,n){return Xs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hc.parseLink(n);return oe(r,"argument-error"),Xs._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends Mp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends ui{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Dn extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
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
 */class xn extends ui{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
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
 */class Vn extends ui{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */async function mI(t,e){return ci(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
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
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),a=Bh(r);return new Er({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bh(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class go extends _n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new go(e,n,r,s)}}function Lp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,r):i})}async function gI(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
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
 */async function _I(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(hn(r));const s="reauthenticate";try{const i=await Js(t,Lp(r,s,e,t),n);oe(i.idToken,r,"internal-error");const a=lc(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(t.uid===l,r,"user-mismatch"),Er._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function Fp(t,e,n=!1){if(Jt(t.app))return Promise.reject(hn(t));const r="signIn",s=await Lp(t,r,e),i=await Er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yI(t,e){return Fp(Rr(t),e)}/**
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
 */async function Up(t){const e=Rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vI(t,e,n){if(Jt(t.app))return Promise.reject(hn(t));const r=Rr(t),a=await yl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Up(t),c}),l=await Er._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function EI(t,e,n){return Jt(t.app)?Promise.reject(hn(t)):yI(Nt(t),rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Up(t),r})}function wI(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function TI(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}const _o="__sak";/**
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
 */class Bp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const II=1e3,AI=10;class jp extends Bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);qT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jp.type="LOCAL";const bI=jp;/**
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
 */class $p extends Bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$p.type="SESSION";const Hp=$p;/**
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
 */function RI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await RI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wo.receivers=[];/**
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
 */function fc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=fc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Zt(){return window}function PI(t){Zt().location.href=t}/**
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
 */function qp(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function CI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kI(){return qp()?self:null}/**
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
 */const Kp="firebaseLocalStorageDb",NI=1,yo="firebaseLocalStorage",zp="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Go(t,e){return t.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function DI(){const t=indexedDB.deleteDatabase(Kp);return new hi(t).toPromise()}function vl(){const t=indexedDB.open(Kp,NI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yo,{keyPath:zp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yo)?e(r):(r.close(),await DI(),e(await vl()))})})}async function jh(t,e,n){const r=Go(t,!0).put({[zp]:e,value:n});return new hi(r).toPromise()}async function xI(t,e){const n=Go(t,!1).get(e),r=await new hi(n).toPromise();return r===void 0?null:r.value}function $h(t,e){const n=Go(t,!0).delete(e);return new hi(n).toPromise()}const VI=800,MI=3;class Wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wo._getInstance(kI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CI(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vl();return await jh(e,_o,"1"),await $h(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$h(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Go(s,!1).getAll();return new hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wp.type="LOCAL";const LI=Wp;new li(3e4,6e4);/**
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
 */function FI(t,e){return e?cn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dc extends uc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UI(t){return Fp(t.auth,new dc(t),t.bypassAuthState)}function BI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),_I(n,new dc(t),t.bypassAuthState)}async function jI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),gI(n,new dc(t),t.bypassAuthState)}/**
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
 */class Gp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return jI;case"reauthViaPopup":case"reauthViaRedirect":return BI;default:qt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $I=new li(2e3,1e4);class Lr extends Gp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$I.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const HI="pendingRedirect",Zi=new Map;class qI extends Gp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zi.get(this.auth._key());if(!e){try{const r=await KI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zi.set(this.auth._key(),e)}return this.bypassAuthState||Zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KI(t,e){const n=GI(e),r=WI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zI(t,e){Zi.set(t._key(),e)}function WI(t){return cn(t._redirectPersistence)}function GI(t){return Yi(HI,t.config.apiKey,t.name)}async function QI(t,e,n=!1){if(Jt(t.app))return Promise.reject(hn(t));const r=Rr(t),s=FI(r,e),a=await new qI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const JI=10*60*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hh(e))}saveEventToCache(e){this.cachedEventUids.add(Hh(e)),this.lastProcessedEventTime=Date.now()}}function Hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qp(t);default:return!1}}/**
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
 */async function ZI(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
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
 */const eA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tA=/^https?/;async function nA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZI(t);for(const n of e)try{if(rA(n))return}catch{}qt(t,"unauthorized-domain")}function rA(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!tA.test(n))return!1;if(eA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const sA=new li(3e4,6e4);function qh(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iA(t){return new Promise((e,n)=>{var r,s,i;function a(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),n(Yt(t,"network-request-failed"))},timeout:sA.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)a();else{const l=ZT("iframefcb");return Zt()[l]=()=>{gapi.load?a():n(Yt(t,"network-request-failed"))},xp(`${YT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw eo=null,e})}let eo=null;function oA(t){return eo=eo||iA(t),eo}/**
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
 */const aA=new li(5e3,15e3),lA="__/auth/iframe",cA="emulator/auth/iframe",uA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fA(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ac(e,cA):`https://${t.config.authDomain}/${lA}`,r={apiKey:e.apiKey,appName:t.name,v:ns},s=hA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ai(r).slice(1)}`}async function dA(t){const e=await oA(t),n=Zt().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:fA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Yt(t,"network-request-failed"),l=Zt().setTimeout(()=>{i(a)},aA.get());function c(){Zt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const pA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mA=500,gA=600,_A="_blank",yA="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vA(t,e,n,r=mA,s=gA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},pA),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ot().toLowerCase();n&&(l=Sp(h)?_A:n),bp(h)&&(e=e||yA,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[I,R])=>`${_}${I}=${R},`,"");if(HT(h)&&l!=="_self")return EA(e||"",l),new Kh(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new Kh(p)}function EA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wA="__/auth/handler",TA="emulator/auth/handler",IA=encodeURIComponent("fac");async function zh(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:s};if(e instanceof Mp){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",pw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof ui){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${IA}=${encodeURIComponent(c)}`:"";return`${AA(t)}?${ai(l).slice(1)}${h}`}function AA({config:t}){return t.emulator?ac(t,TA):`https://${t.authDomain}/${wA}`}/**
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
 */const ja="webStorageSupport";class bA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hp,this._completeRedirectFn=QI,this._overrideRedirectResult=zI}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await zh(e,n,r,gl(),s);return vA(e,a,fc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zh(e,n,r,gl(),s);return PI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dA(e),r=new XI(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ja,{type:ja},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ja];a!==void 0&&n(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Np()||Rp()||cc()}}const RA=bA;var Wh="@firebase/auth",Gh="1.7.8";/**
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
 */class SA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CA(t){Jr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dp(t)},h=new QT(r,s,i,c);return sI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jr(new yr("auth-internal",e=>{const n=Rr(e.getProvider("auth").getImmediate());return(r=>new SA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Wh,Gh,PA(t)),jn(Wh,Gh,"esm2017")}/**
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
 */const OA=5*60,kA=cp("authIdTokenMaxAge")||OA;let Qh=null;const NA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kA)return;const s=n==null?void 0:n.token;Qh!==s&&(Qh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jp(t=dp()){const e=sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rI(t,{popupRedirectResolver:RA,persistence:[LI,bI,Hp]}),r=cp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=NA(i.toString());TI(n,a,()=>a(n.currentUser)),wI(n,l=>a(l))}}const s=ap("auth");return s&&iI(n,`http://${s}`),n}function DA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",DA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CA("Browser");const xA=ie("h1",null,"Sign in",-1),VA=ie("button",null,"Register an account",-1),MA={__name:"FirebaseSigninView",setup(t){const e=$t(""),n=$t(""),r=rp(),s=Jp(),i=()=>{EI(s,e.value,n.value).then(a=>{console.log("Firebase Register Successful!"),r.push("/"),console.log(a.currentUser)}).catch(a=>{console.log(a.code)})};return(a,l)=>{const c=Jl("router-link");return dt(),At(Ot,null,[xA,ie("p",null,[mr(ie("input",{type:"text",placeholder:"Email","onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h)},null,512),[[_r,e.value]])]),ie("p",null,[mr(ie("input",{type:"password",placeholder:"Password","onUpdate:modelValue":l[1]||(l[1]=h=>n.value=h)},null,512),[[_r,n.value]])]),ie("p",null,[ie("button",{onClick:i},"Sign in via Firebase")]),ie("p",null,[Me(c,{to:"/FireRegister"},{default:Pn(()=>[VA]),_:1})])],64)}}},LA=ie("h1",null,"Create an Account",-1),FA={__name:"FirebaseRegisterView",setup(t){const e=$t(""),n=$t(""),r=rp(),s=Jp(),i=()=>{vI(s,e.value,n.value).then(a=>{console.log("Firebase Register Successful!"),r.push("/FireLogin"),console.log(a.currentUser)}).catch(a=>{console.log(a.code)})};return(a,l)=>(dt(),At(Ot,null,[LA,ie("p",null,[mr(ie("input",{type:"text",placeholder:"Email","onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c)},null,512),[[_r,e.value]])]),ie("p",null,[mr(ie("input",{type:"password",placeholder:"Password","onUpdate:modelValue":l[1]||(l[1]=c=>n.value=c)},null,512),[[_r,n.value]])]),ie("p",null,[ie("button",{onClick:i},"Save to Firebase")])],64))}};var UA="firebase",BA="10.13.1";/**
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
 */jn(UA,BA,"app");var Jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function w(){}w.prototype=y.prototype,T.D=y.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(A,b,S){for(var E=Array(arguments.length-2),at=2;at<arguments.length;at++)E[at-2]=arguments[at];return y.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=T.g[0],w=T.g[1],b=T.g[2];var S=T.g[3],E=y+(S^w&(b^S))+A[0]+3614090360&4294967295;y=w+(E<<7&4294967295|E>>>25),E=S+(b^y&(w^b))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(w^S&(y^w))+A[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(y^b&(S^y))+A[3]+3250441966&4294967295,w=b+(E<<22&4294967295|E>>>10),E=y+(S^w&(b^S))+A[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=S+(b^y&(w^b))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(w^S&(y^w))+A[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(y^b&(S^y))+A[7]+4249261313&4294967295,w=b+(E<<22&4294967295|E>>>10),E=y+(S^w&(b^S))+A[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=S+(b^y&(w^b))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(w^S&(y^w))+A[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(y^b&(S^y))+A[11]+2304563134&4294967295,w=b+(E<<22&4294967295|E>>>10),E=y+(S^w&(b^S))+A[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=S+(b^y&(w^b))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(w^S&(y^w))+A[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(y^b&(S^y))+A[15]+1236535329&4294967295,w=b+(E<<22&4294967295|E>>>10),E=y+(b^S&(w^b))+A[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(y^w))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^w&(S^y))+A[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(b^S))+A[0]+3921069994&4294967295,w=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(w^b))+A[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(y^w))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^w&(S^y))+A[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(b^S))+A[4]+3889429448&4294967295,w=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(w^b))+A[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(y^w))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^w&(S^y))+A[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(b^S))+A[8]+1163531501&4294967295,w=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(w^b))+A[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(y^w))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^w&(S^y))+A[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(b^S))+A[12]+2368359562&4294967295,w=b+(E<<20&4294967295|E>>>12),E=y+(w^b^S)+A[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^b)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^w)+A[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^y)+A[14]+4259657740&4294967295,w=b+(E<<23&4294967295|E>>>9),E=y+(w^b^S)+A[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^b)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^w)+A[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^y)+A[10]+3200236656&4294967295,w=b+(E<<23&4294967295|E>>>9),E=y+(w^b^S)+A[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^b)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^w)+A[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^y)+A[6]+76029189&4294967295,w=b+(E<<23&4294967295|E>>>9),E=y+(w^b^S)+A[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^b)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^w)+A[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^y)+A[2]+3299628645&4294967295,w=b+(E<<23&4294967295|E>>>9),E=y+(b^(w|~S))+A[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~b))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~w))+A[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~y))+A[5]+4237533241&4294967295,w=b+(E<<21&4294967295|E>>>11),E=y+(b^(w|~S))+A[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~b))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~w))+A[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~y))+A[1]+2240044497&4294967295,w=b+(E<<21&4294967295|E>>>11),E=y+(b^(w|~S))+A[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~b))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~w))+A[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~y))+A[13]+1309151649&4294967295,w=b+(E<<21&4294967295|E>>>11),E=y+(b^(w|~S))+A[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~b))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~w))+A[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var w=y-this.blockSize,A=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=w;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<y;)if(A[b++]=T.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<y;)if(A[b++]=T[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var w=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=w&255,w/=256;for(this.u(T),T=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)T[w++]=this.g[y]>>>A&255;return T};function i(T,y){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=y(T)}function a(T,y){this.h=y;for(var w=[],A=!0,b=T.length-1;0<=b;b--){var S=T[b]|0;A&&S==y||(w[b]=S,A=!1)}this.g=w}var l={};function c(T){return-128<=T&&128>T?i(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return O(h(-T));for(var y=[],w=1,A=0;T>=w;A++)y[A]=T/w|0,w*=4294967296;return new a(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return O(d(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),A=p,b=0;b<T.length;b+=8){var S=Math.min(8,T.length-b),E=parseInt(T.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(w),A=A.add(h(E)))}return A}var p=c(0),_=c(1),I=c(16777216);t=a.prototype,t.m=function(){if(k(this))return-O(this).m();for(var T=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);T+=(0<=A?A:4294967296+A)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(k(this))return"-"+O(this).toString(T);for(var y=h(Math.pow(T,6)),w=this,A="";;){var b=Z(w,y).g;w=j(w,b.j(y));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=b,R(w))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=j(this,T),k(T)?-1:R(T)?0:1};function O(T){for(var y=T.g.length,w=[],A=0;A<y;A++)w[A]=~T.g[A];return new a(w,~T.h).add(_)}t.abs=function(){return k(this)?O(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],A=0,b=0;b<=y;b++){var S=A+(this.i(b)&65535)+(T.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=E>>>16,S&=65535,E&=65535,w[b]=E<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function j(T,y){return T.add(O(y))}t.j=function(T){if(R(this)||R(T))return p;if(k(this))return k(T)?O(this).j(O(T)):O(O(this).j(T));if(k(T))return O(this.j(O(T)));if(0>this.l(I)&&0>T.l(I))return h(this.m()*T.m());for(var y=this.g.length+T.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<T.g.length;b++){var S=this.i(A)>>>16,E=this.i(A)&65535,at=T.i(b)>>>16,Rt=T.i(b)&65535;w[2*A+2*b]+=E*Rt,F(w,2*A+2*b),w[2*A+2*b+1]+=S*Rt,F(w,2*A+2*b+1),w[2*A+2*b+1]+=E*at,F(w,2*A+2*b+1),w[2*A+2*b+2]+=S*at,F(w,2*A+2*b+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new a(w,0)};function F(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function L(T,y){this.g=T,this.h=y}function Z(T,y){if(R(y))throw Error("division by zero");if(R(T))return new L(p,p);if(k(T))return y=Z(O(T),y),new L(O(y.g),O(y.h));if(k(y))return y=Z(T,O(y)),new L(O(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var w=_,A=y;0>=A.l(T);)w=le(w),A=le(A);var b=J(w,1),S=J(A,1);for(A=J(A,2),w=J(w,2);!R(A);){var E=S.add(A);0>=E.l(T)&&(b=b.add(w),S=E),A=J(A,1),w=J(w,1)}return y=j(T,b.j(y)),new L(b,y)}for(b=p;0<=T.l(y);){for(w=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(w),E=S.j(y);k(E)||0<E.l(T);)w-=A,S=h(w),E=S.j(y);R(S)&&(S=_),b=b.add(S),T=j(T,E)}return new L(b,T)}t.A=function(T){return Z(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&T.i(A);return new a(w,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|T.i(A);return new a(w,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^T.i(A);return new a(w,this.h^T.h)};function le(T){for(var y=T.g.length+1,w=[],A=0;A<y;A++)w[A]=T.i(A)<<1|T.i(A-1)>>>31;return new a(w,T.h)}function J(T,y){var w=y>>5;y%=32;for(var A=T.g.length-w,b=[],S=0;S<A;S++)b[S]=0<y?T.i(S+w)>>>y|T.i(S+w+1)<<32-y:T.i(S+w);return new a(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Xp=a}).apply(typeof Jh<"u"?Jh:typeof self<"u"?self:typeof window<"u"?window:{});var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yp,Zp,Os,em,to,El,tm,nm,rm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ui=="object"&&Ui];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in f))break e;f=f[P]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,m=!1,P={next:function(){if(!m&&f<o.length){var N=f++;return{value:u(N,o[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function I(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function R(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,P,N){for(var K=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)K[Re-2]=arguments[Re];return u.prototype[P].apply(m,K)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function O(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=o.length||0,N=m.length||0;o.length=P+N;for(let K=0;K<N;K++)o[P+K]=m[K]}else o.push(m)}}class j{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Z(o){return Z[" "](o),o}Z[" "]=function(){};var le=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function J(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function T(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)o[f]=m[f];for(let N=0;N<w.length;N++)f=w[N],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=vt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class at{constructor(){this.h=this.g=null}add(u,f){const m=Rt.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Rt=new j(()=>new Be,o=>o.reset());class Be{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,de=!1,vt=new at,Dt=()=>{const o=l.Promise.resolve(void 0);ge=()=>{o.then(St)}};var St=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Rt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}de=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var yn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function zt(o,u){if(Ne.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(le){e:{try{Z(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ht[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&zt.aa.h.call(this)}}R(zt,Ne);var ht={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),X=0;function G(o,u,f,m,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=P,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _e(o){this.src=o,this.g={},this.h=0}_e.prototype.add=function(o,u,f,m,P){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var K=g(o,u,m,P);return-1<K?(u=o[K],f||(u.fa=!1)):(u=new G(u,this.src,N,!!m,P),u.fa=f,o.push(u)),u};function be(o,u){var f=u.type;if(f in o.g){var m=o.g[f],P=Array.prototype.indexOf.call(m,u,void 0),N;(N=0<=P)&&Array.prototype.splice.call(m,P,1),N&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function g(o,u,f,m){for(var P=0;P<o.length;++P){var N=o[P];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==m)return P}return-1}var v="closure_lm_"+(1e6*Math.random()|0),C={};function M(o,u,f,m,P){if(Array.isArray(u)){for(var N=0;N<u.length;N++)M(o,u[N],f,m,P);return null}return f=te(f),o&&o[V]?o.K(u,f,h(m)?!!m.capture:!!m,P):x(o,u,f,!1,m,P)}function x(o,u,f,m,P,N){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Re=Q(o);if(Re||(o[v]=Re=new _e(o)),f=Re.add(u,f,m,K,N),f.proxy)return f;if(m=$(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)yn||(P=K),P===void 0&&(P=!1),o.addEventListener(u.toString(),m,P);else if(o.attachEvent)o.attachEvent(z(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=U;return o}function W(o,u,f,m,P){if(Array.isArray(u))for(var N=0;N<u.length;N++)W(o,u[N],f,m,P);else m=h(m)?!!m.capture:!!m,f=te(f),o&&o[V]?(o=o.i,u=String(u).toString(),u in o.g&&(N=o.g[u],f=g(N,f,m,P),-1<f&&(Y(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=g(u,f,m,P)),(f=-1<o?u[o]:null)&&q(f))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[V])be(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(z(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=Q(u))?(be(f,o),f.h==0&&(f.src=null,u[v]=null)):Y(o)}}}function z(o){return o in C?C[o]:C[o]="on"+o}function U(o,u){if(o.da)o=!0;else{u=new zt(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&q(o),o=f.call(m,u)}return o}function Q(o){return o=o[v],o instanceof _e?o:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[ne]||(o[ne]=function(u){return o.handleEvent(u)}),o[ne])}function ee(){ke.call(this),this.i=new _e(this),this.M=this,this.F=null}R(ee,ke),ee.prototype[V]=!0,ee.prototype.removeEventListener=function(o,u,f,m){W(this,o,u,f,m)};function se(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Ne(u,o);else if(u instanceof Ne)u.target=u.target||o;else{var P=u;u=new Ne(m,o),A(u,P)}if(P=!0,f)for(var N=f.length-1;0<=N;N--){var K=u.g=f[N];P=Te(K,m,!0,u)&&P}if(K=u.g=o,P=Te(K,m,!0,u)&&P,P=Te(K,m,!1,u)&&P,f)for(N=0;N<f.length;N++)K=u.g=f[N],P=Te(K,m,!1,u)&&P}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)Y(f[m]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},ee.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function Te(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,N=0;N<u.length;++N){var K=u[N];if(K&&!K.da&&K.capture==f){var Re=K.listener,We=K.ha||K.src;K.fa&&be(o.i,K),P=Re.call(We,m)!==!1&&P}}return P&&!m.defaultPrevented}function ve(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ue(o){o.g=ve(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Et extends ke{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(o){ke.call(this),this.h=o,this.g={}}R(Pt,ke);var ls=[];function vn(o){J(o.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},o),o.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),vn(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pr=l.JSON.stringify,lt=l.JSON.parse,Ct=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Cr(){}Cr.prototype.h=null;function Vc(o){return o.h||(o.h=o.i())}function Mc(){}var cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ca(){Ne.call(this,"d")}R(ca,Ne);function ua(){Ne.call(this,"c")}R(ua,Ne);var Yn={},Lc=null;function yi(){return Lc=Lc||new ee}Yn.La="serverreachability";function Fc(o){Ne.call(this,Yn.La,o)}R(Fc,Ne);function us(o){const u=yi();se(u,new Fc(u))}Yn.STAT_EVENT="statevent";function Uc(o,u){Ne.call(this,Yn.STAT_EVENT,o),this.stat=u}R(Uc,Ne);function ct(o){const u=yi();se(u,new Uc(u,o))}Yn.Ma="timingevent";function Bc(o,u){Ne.call(this,Yn.Ma,o),this.size=u}R(Bc,Ne);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Rg(o,u,f,m,P,N){o.info(function(){if(o.g)if(N)for(var K="",Re=N.split("&"),We=0;We<Re.length;We++){var we=Re[We].split("=");if(1<we.length){var Xe=we[0];we=we[1];var Ye=Xe.split("_");K=2<=Ye.length&&Ye[1]=="type"?K+(Xe+"="+we+"&"):K+(Xe+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+f+`
`+K})}function Sg(o,u,f,m,P,N,K){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+f+`
`+N+" "+K})}function Or(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cg(o,f)+(m?" "+m:"")})}function Pg(o,u){o.info(function(){return"TIMEOUT: "+u})}fs.prototype.info=function(){};function Cg(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Pr(f)}catch{return u}}var vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ha;function Ei(){}R(Ei,Cr),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},ha=new Ei;function En(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var Hc={},fa={};function da(o,u,f){o.L=1,o.v=Ai(nn(u)),o.m=f,o.P=!0,qc(o,null)}function qc(o,u){o.F=Date.now(),wi(o),o.A=nn(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),su(f.i,"t",m),o.C=0,f=o.j.J,o.h=new $c,o.g=Tu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Et(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(ls[0]=P.toString()),P=ls);for(var N=0;N<P.length;N++){var K=M(f,P[N],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),us(),Rg(o.i,o.u,o.A,o.l,o.R,o.m)}En.prototype.ca=function(o){o=o.target;const u=this.M;u&&rn(o)==3?u.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const Ye=rn(this.g);var u=this.g.Ba();const Dr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||hu(this.g)))){this.J||Ye!=4||u==7||(u==8||0>=Dr?us(3):us(2)),pa(this);var f=this.g.Z();this.X=f;t:if(Kc(this)){var m=hu(this.g);o="";var P=m.length,N=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),ds(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(N&&u==P-1)});m.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,Sg(this.i,this.u,this.A,this.l,this.R,Ye,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,We=this.g;if((Re=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Re)){var we=Re;break t}}we=null}if(f=we)Or(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ma(this,f);else{this.o=!1,this.s=3,ct(12),Zn(this),ds(this);break e}}if(this.P){f=!0;let xt;for(;!this.J&&this.C<K.length;)if(xt=Og(this,K),xt==fa){Ye==4&&(this.s=4,ct(14),f=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Hc){this.s=4,ct(15),Or(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Or(this.i,this.l,xt,null),ma(this,xt);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||K.length!=0||this.h.h||(this.s=1,ct(16),f=!1),this.o=this.o&&f,!f)Or(this.i,this.l,K,"[Invalid Chunked Response]"),Zn(this),ds(this);else if(0<K.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),wa(Xe),Xe.M=!0,ct(11))}}else Or(this.i,this.l,K,null),ma(this,K);Ye==4&&Zn(this),this.o&&!this.J&&(Ye==4?yu(this.j,this):(this.o=!1,wi(this)))}else Wg(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Zn(this),ds(this)}}}catch{}finally{}};function Kc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Og(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?fa:(f=Number(u.substring(f,m)),isNaN(f)?Hc:(m+=1,m+f>u.length?fa:(u=u.slice(m,m+f),o.C=m+f,u)))}En.prototype.cancel=function(){this.J=!0,Zn(this)};function wi(o){o.S=Date.now()+o.I,zc(o,o.I)}function zc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hs(_(o.ba,o),u)}function pa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}En.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Pg(this.i,this.A),this.L!=2&&(us(),ct(17)),Zn(this),this.s=2,ds(this)):zc(this,this.S-o)};function ds(o){o.j.G==0||o.J||yu(o.j,o)}function Zn(o){pa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ma(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ga(f.h,o))){if(!o.K&&ga(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ci(f),Si(f);else break e;Ea(f),ct(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=hs(_(f.Za,f),6e3));if(1>=Qc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else tr(f,11)}else if((o.K||f.g==o)&&Ci(f),!F(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let we=P[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const Xe=we[3];Xe!=null&&(f.la=Xe,f.j.info("VER="+f.la));const Ye=we[4];Ye!=null&&(f.Aa=Ye,f.j.info("SVER="+f.Aa));const Dr=we[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(m=1.5*Dr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const xt=o.g;if(xt){const ki=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var N=m.h;N.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(_a(N,N.h),N.h=null))}if(m.D){const Ta=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ta&&(m.ya=Ta,Ce(m.I,m.D,Ta))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var K=o;if(m.qa=wu(m,m.J?m.ia:null,m.W),K.K){Jc(m.h,K);var Re=K,We=m.L;We&&(Re.I=We),Re.B&&(pa(Re),wi(Re)),m.g=K}else gu(m);0<f.i.length&&Pi(f)}else we[0]!="stop"&&we[0]!="close"||tr(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?tr(f,7):va(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}us(4)}catch{}}var kg=class{constructor(o,u){this.g=o,this.map=u}};function Wc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qc(o){return o.h?1:o.g?o.g.size:0}function ga(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function _a(o,u){o.g?o.g.add(u):o.h=u}function Jc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function Ng(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function Dg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function Yc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Dg(o),m=Ng(o),P=m.length,N=0;N<P;N++)u.call(void 0,m[N],f&&f[N],o)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xg(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),P=null;if(0<=m){var N=o[f].substring(0,m);P=o[f].substring(m+1)}else N=o[f];u(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,Ti(this,o.j),this.o=o.o,this.g=o.g,Ii(this,o.s),this.l=o.l;var u=o.i,f=new gs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),eu(this,f),this.m=o.m}else o&&(u=String(o).match(Zc))?(this.h=!1,Ti(this,u[1]||"",!0),this.o=ps(u[2]||""),this.g=ps(u[3]||"",!0),Ii(this,u[4]),this.l=ps(u[5]||"",!0),eu(this,u[6]||"",!0),this.m=ps(u[7]||"")):(this.h=!1,this.i=new gs(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ms(u,tu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ms(u,tu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ms(f,f.charAt(0)=="/"?Lg:Mg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ms(f,Ug)),o.join("")};function nn(o){return new er(o)}function Ti(o,u,f){o.j=f?ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ii(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function eu(o,u,f){u instanceof gs?(o.i=u,Bg(o.i,o.h)):(f||(u=ms(u,Fg)),o.i=new gs(u,o.h))}function Ce(o,u,f){o.i.set(u,f)}function Ai(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ms(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Vg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Vg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var tu=/[#\/\?@]/g,Mg=/[#\?:]/g,Lg=/[#\?]/g,Fg=/[#\?@]/g,Ug=/#/g;function gs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wn(o){o.g||(o.g=new Map,o.h=0,o.i&&xg(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=gs.prototype,t.add=function(o,u){wn(this),this.i=null,o=kr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function nu(o,u){wn(o),u=kr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ru(o,u){return wn(o),u=kr(o,u),o.g.has(u)}t.forEach=function(o,u){wn(this),this.g.forEach(function(f,m){f.forEach(function(P){o.call(u,P,m,this)},this)},this)},t.na=function(){wn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const P=o[m];for(let N=0;N<P.length;N++)f.push(u[m])}return f},t.V=function(o){wn(this);let u=[];if(typeof o=="string")ru(this,o)&&(u=u.concat(this.g.get(kr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return wn(this),this.i=null,o=kr(this,o),ru(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function su(o,u,f){nu(o,u),0<f.length&&(o.i=null,o.g.set(kr(o,u),k(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const N=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var P=N;K[m]!==""&&(P+="="+encodeURIComponent(String(K[m]))),o.push(P)}}return this.i=o.join("&")};function kr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Bg(o,u){u&&!o.j&&(wn(o),o.i=null,o.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(nu(this,m),su(this,P,f))},o)),o.j=u}function jg(o,u){const f=new fs;if(l.Image){const m=new Image;m.onload=I(Tn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=I(Tn,f,"TestLoadImage: error",!1,u,m),m.onabort=I(Tn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=I(Tn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function $g(o,u){const f=new fs,m=new AbortController,P=setTimeout(()=>{m.abort(),Tn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Tn(f,"TestPingServer: ok",!0,u):Tn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Tn(f,"TestPingServer: error",!1,u)})}function Tn(o,u,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function Hg(){this.g=new Ct}function qg(o,u,f){const m=f||"";try{Yc(o,function(P,N){let K=P;h(P)&&(K=Pr(P)),u.push(m+N+"="+encodeURIComponent(K))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function _s(o){this.l=o.Ub||null,this.j=o.eb||!1}R(_s,Cr),_s.prototype.g=function(){return new bi(this.l,this.j)},_s.prototype.i=function(o){return function(){return o}}({});function bi(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(bi,ee),t=bi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,vs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;iu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function iu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ys(this):vs(this),this.readyState==3&&iu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ys(this))},t.Qa=function(o){this.g&&(this.response=o,ys(this))},t.ga=function(){this.g&&ys(this)};function ys(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ou(o){let u="";return J(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function ya(o,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ou(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ce(o,u,f))}function Ve(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ve,ee);var Kg=/^https?$/i,zg=["POST","PUT"];t=Ve.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ha.g(),this.v=this.o?Vc(this.o):Vc(ha),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(N){au(this,N);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(zg,u,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of f)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uu(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){au(this,N)}};function au(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,lu(o),Ri(o)}function lu(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),Ri(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cu(this):this.bb())},t.bb=function(){cu(this)};function cu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rn(o)!=4||o.Z()!=2)){if(o.u&&rn(o)==4)ve(o.Ea,0,o);else if(se(o,"readystatechange"),rn(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=K===0){var P=String(o.D).match(Zc)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!Kg.test(P?P.toLowerCase():"")}f=m}if(f)se(o,"complete"),se(o,"success");else{o.m=6;try{var N=2<rn(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",lu(o)}}finally{Ri(o)}}}}function Ri(o,u){if(o.g){uu(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||se(o,"ready");try{f.onreadystatechange=m}catch{}}}function uu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function rn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),lt(u)}};function hu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wg(o){const u={};o=(o.g&&2<=rn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(F(o[m]))continue;var f=b(o[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[P]||[];u[P]=N,N.push(f)}T(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function fu(o){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,o),this.cb=Es("retryDelaySeedMs",1e4,o),this.Wa=Es("forwardChannelMaxRetries",2,o),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Da=new Hg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,m){ct(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=wu(this,null,this.W),Pi(this)};function va(o){if(du(o),o.G==3){var u=o.U++,f=nn(o.I);if(Ce(f,"SID",o.K),Ce(f,"RID",u),Ce(f,"TYPE","terminate"),ws(o,f),u=new En(o,o.j,u),u.L=2,u.v=Ai(nn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Tu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),wi(u)}Eu(o)}function Si(o){o.g&&(wa(o),o.g.cancel(),o.g=null)}function du(o){Si(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Pi(o){if(!Gc(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||Dt(),de||(ge(),de=!0),vt.add(u,o),o.B=0}}function Gg(o,u){return Qc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hs(_(o.Ga,o,u),vu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new En(this,this.j,o);let N=this.o;if(this.S&&(N?(N=y(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=mu(this,P,u),f=nn(this.I),Ce(f,"RID",o),Ce(f,"CVER",22),this.D&&Ce(f,"X-HTTP-Session-Id",this.D),ws(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(ou(N)))+"&"+u:this.m&&ya(f,this.m,N)),_a(this.h,P),this.Ua&&Ce(f,"TYPE","init"),this.P?(Ce(f,"$req",u),Ce(f,"SID","null"),P.T=!0,da(P,f,null)):da(P,f,u),this.G=2}}else this.G==3&&(o?pu(this,o):this.i.length==0||Gc(this.h)||pu(this))};function pu(o,u){var f;u?f=u.l:f=o.U++;const m=nn(o.I);Ce(m,"SID",o.K),Ce(m,"RID",f),Ce(m,"AID",o.T),ws(o,m),o.m&&o.o&&ya(m,o.m,o.o),f=new En(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=mu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),_a(o.h,f),da(f,m,u)}function ws(o,u){o.H&&J(o.H,function(f,m){Ce(u,m,f)}),o.l&&Yc({},function(f,m){Ce(u,m,f)})}function mu(o,u,f){f=Math.min(o.i.length,f);var m=o.l?_(o.l.Na,o.l,o):null;e:{var P=o.i;let N=-1;for(;;){const K=["count="+f];N==-1?0<f?(N=P[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Re=!0;for(let We=0;We<f;We++){let we=P[We].g;const Xe=P[We].map;if(we-=N,0>we)N=Math.max(0,P[We].g-100),Re=!1;else try{qg(Xe,K,"req"+we+"_")}catch{m&&m(Xe)}}if(Re){m=K.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,m}function gu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||Dt(),de||(ge(),de=!0),vt.add(u,o),o.v=0}}function Ea(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hs(_(o.Fa,o),vu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,_u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hs(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Si(this),_u(this))};function wa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function _u(o){o.g=new En(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=nn(o.qa);Ce(u,"RID","rpc"),Ce(u,"SID",o.K),Ce(u,"AID",o.T),Ce(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(u,"TO",o.ja),Ce(u,"TYPE","xmlhttp"),ws(o,u),o.m&&o.o&&ya(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ai(nn(u)),f.m=null,f.P=!0,qc(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Si(this),Ea(this),ct(19))};function Ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function yu(o,u){var f=null;if(o.g==u){Ci(o),wa(o),o.g=null;var m=2}else if(ga(o.h,u))f=u.D,Jc(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;m=yi(),se(m,new Bc(m,f)),Pi(o)}else gu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&Gg(o,u)||m==2&&Ea(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function vu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),m=o.Xa;const P=!m;m=new er(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ti(m,"https"),Ai(m),P?jg(m.toString(),f):$g(m.toString(),f)}else ct(2);o.G=0,o.l&&o.l.sa(u),Eu(o),du(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Eu(o){if(o.G=0,o.ka=[],o.l){const u=Xc(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function wu(o,u,f){var m=f instanceof er?nn(f):new er(f);if(m.g!="")u&&(m.g=u+"."+m.g),Ii(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var N=new er(null);m&&Ti(N,m),u&&(N.g=u),P&&Ii(N,P),f&&(N.l=f),m=N}return f=o.D,u=o.ya,f&&u&&Ce(m,f,u),Ce(m,"VER",o.la),ws(o,m),m}function Tu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ve(new _s({eb:f})):new Ve(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}t=Iu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Oi(){}Oi.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){ee.call(this),this.g=new fu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}R(wt,ee),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){va(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Pr(o),o=f);u.i.push(new kg(u.Ya++,o)),u.G==3&&Pi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,va(this.g),delete this.g,wt.aa.N.call(this)};function Au(o){ca.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(Au,ca);function bu(){ua.call(this),this.status=1}R(bu,ua);function Nr(o){this.g=o}R(Nr,Iu),Nr.prototype.ua=function(){se(this.g,"a")},Nr.prototype.ta=function(o){se(this.g,new Au(o))},Nr.prototype.sa=function(o){se(this.g,new bu)},Nr.prototype.ra=function(){se(this.g,"b")},Oi.prototype.createWebChannel=Oi.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,rm=function(){return new Oi},nm=function(){return yi()},tm=Yn,El={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,to=vi,jc.COMPLETE="complete",em=jc,Mc.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Os=Mc,Zp=_s,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,Yp=Ve}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});const Xh="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let ss="10.13.1";/**
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
 */const wr=new nc("@firebase/firestore");function As(){return wr.logLevel}function re(t,...e){if(wr.logLevel<=pe.DEBUG){const n=e.map(pc);wr.debug(`Firestore (${ss}): ${t}`,...n)}}function Tr(t,...e){if(wr.logLevel<=pe.ERROR){const n=e.map(pc);wr.error(`Firestore (${ss}): ${t}`,...n)}}function vo(t,...e){if(wr.logLevel<=pe.WARN){const n=e.map(pc);wr.warn(`Firestore (${ss}): ${t}`,...n)}}function pc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: `+t;throw Tr(e),new Error(e)}function $e(t,e){t||me()}function Pe(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class $A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HA{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string"),new sm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new et(e)}}class qA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new qA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.R=n.token,new zA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function GA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class im{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=GA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function Xr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class De{constructor(e){this.timestamp=e}static fromTimestamp(e){return new De(e)}static min(){return new De(new Ke(0,0))}static max(){return new De(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ys{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ys.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ys?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Ys{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const QA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Ys{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return QA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ae(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ae(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ae(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Le.fromString(e))}static fromName(e){return new fe(Le.fromString(e).popFirst(5))}static empty(){return new fe(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Le(e.slice()))}}function JA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=De.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new qn(s,fe.empty(),e)}function XA(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(De.min(),fe.empty(),-1)}static max(){return new qn(De.max(),fe.empty(),-1)}}function YA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */const ZA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function om(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==ZA)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function t0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class am{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}am.oe=-1;function mc(t){return t==null}function Eo(t){return t===0&&1/t==-1/0}function n0(t){return typeof t=="number"&&Number.isInteger(t)&&!Eo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Yh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class yt{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zh(this.data.getIterator())}getIteratorFrom(e){return new Zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new st(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class r0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new r0("Invalid base64 string: "+i):i}}(e);return new en(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const s0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if($e(!!t),typeof t=="string"){let e=0;const n=s0.exec(t);if($e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zs(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
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
 */function gc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cm(t){const e=t.mapValue.fields.__previous_value__;return gc(e)?cm(e):e}function wo(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class i0{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class To{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new To("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gc(t)?4:a0(t)?9007199254740991:o0(t)?10:11:me()}function tn(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wo(t).isEqual(wo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ir(s.timestampValue),l=Ir(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zs(s.bytesValue).isEqual(Zs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Qe(s.doubleValue),l=Qe(i.doubleValue);return a===l?Eo(a)===Eo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Xr(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Yh(a)!==Yh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!tn(a[c],l[c])))return!1;return!0}(t,e);default:return me()}}function ei(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Zr(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Qe(i.integerValue||i.doubleValue),c=Qe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(wo(t),wo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Zs(i),c=Zs(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Se(l[h],c[h]);if(d!==0)return d}return Se(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Se(Qe(i.latitude),Qe(a.latitude));return l!==0?l:Se(Qe(i.longitude),Qe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},_=a.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(c=_.value)===null||c===void 0?void 0:c.arrayValue,k=Se(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:tf(I,R)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===ji.mapValue&&a===ji.mapValue)return 0;if(i===ji.mapValue)return 1;if(a===ji.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const _=Se(c[p],d[p]);if(_!==0)return _;const I=Zr(l[c[p]],h[d[p]]);if(I!==0)return I}return Se(c.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Ir(t),r=Ir(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function tf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Zr(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function es(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wl(n.fields[a])}`;return s+"}"}(t.mapValue):me()}function Tl(t){return!!t&&"integerValue"in t}function _c(t){return!!t&&"arrayValue"in t}function no(t){return!!t&&"mapValue"in t}function o0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function a0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!no(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Us(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());no(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];no(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Us(this.value))}}function um(t){const e=[];return fi(t.fields,(n,r)=>{const s=new Je([n]);if(no(r)){const i=um(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ut(e)}/**
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
 */class Mt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Mt(e,0,De.min(),De.min(),De.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,De.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,De.min(),De.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,De.min(),De.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Io{constructor(e,n){this.position=e,this.inclusive=n}}function nf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(a.referenceValue),n.key):r=Zr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ao{constructor(e,n="asc"){this.field=e,this.dir=n}}function l0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hm{}class qe extends hm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new u0(e,n,r):n==="array-contains"?new d0(e,r):n==="in"?new p0(e,r):n==="not-in"?new m0(e,r):n==="array-contains-any"?new g0(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new h0(e,r):new f0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zr(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends hm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kn(e,n)}matches(e){return fm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fm(t){return t.op==="and"}function dm(t){return c0(t)&&fm(t)}function c0(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function Il(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+es(t.value);if(dm(t))return t.filters.map(e=>Il(e)).join(",");{const e=t.filters.map(n=>Il(n)).join(",");return`${t.op}(${e})`}}function pm(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof Kn?function(r,s){return s instanceof Kn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&pm(a,s.filters[l]),!0):!1}(t,e):void me()}function mm(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(mm).join(" ,")+"}"}(t):"Filter"}class u0 extends qe{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class h0 extends qe{constructor(e,n){super(e,"in",n),this.keys=gm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class f0 extends qe{constructor(e,n){super(e,"not-in",n),this.keys=gm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class d0 extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _c(n)&&ei(n.arrayValue,this.value)}}class p0 extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ei(this.value.arrayValue,n)}}class m0 extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ei(this.value.arrayValue,n)}}class g0 extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_c(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ei(this.value.arrayValue,r))}}/**
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
 */class _0{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function sf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new _0(t,e,n,r,s,i,a)}function yc(t){const e=Pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Il(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=n}return e.ue}function vc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!l0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rf(t.startAt,e.startAt)&&rf(t.endAt,e.endAt)}/**
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
 */class Jo{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function y0(t,e,n,r,s,i,a,l){return new Jo(t,e,n,r,s,i,a,l)}function v0(t){return new Jo(t)}function of(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function E0(t){return t.collectionGroup!==null}function Bs(t){const e=Pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new st(Je.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ao(i,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new Ao(Je.keyField(),r))}return e.ce}function fr(t){const e=Pe(t);return e.le||(e.le=w0(e,Bs(t))),e.le}function w0(t,e){if(t.limitType==="F")return sf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ao(s.field,i)});const n=t.endAt?new Io(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Io(t.startAt.position,t.startAt.inclusive):null;return sf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Al(t,e,n){return new Jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _m(t,e){return vc(fr(t),fr(e))&&t.limitType===e.limitType}function ym(t){return`${yc(fr(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mm(s)).join(", ")}]`),mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(fr(t))}; limitType=${t.limitType})`}function Ec(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=nf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Bs(r),s)||r.endAt&&!function(a,l,c){const h=nf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Bs(r),s))}(t,e)}function T0(t){return(e,n)=>{let r=!1;for(const s of Bs(t)){const i=I0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function I0(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Zr(c,h):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
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
 */const A0=new yt(fe.comparator);function bo(){return A0}const vm=new yt(fe.comparator);function $i(...t){let e=vm;for(const n of t)e=e.insert(n.key,n);return e}function Em(t){let e=vm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ar(){return js()}function wm(){return js()}function js(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const b0=new yt(fe.comparator),R0=new st(fe.comparator);function tt(...t){let e=R0;for(const n of t)e=e.add(n);return e}const S0=new st(Se);function P0(){return S0}/**
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
 */function wc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eo(e)?"-0":e}}function Tm(t){return{integerValue:""+t}}function C0(t,e){return n0(e)?Tm(e):wc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xo{constructor(){this._=void 0}}function O0(t,e,n){return t instanceof Ro?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gc(i)&&(i=cm(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof ti?Am(t,e):t instanceof ni?bm(t,e):function(s,i){const a=Im(s,i),l=af(a)+af(s.Pe);return Tl(a)&&Tl(s.Pe)?Tm(l):wc(s.serializer,l)}(t,e)}function k0(t,e,n){return t instanceof ti?Am(t,e):t instanceof ni?bm(t,e):n}function Im(t,e){return t instanceof So?function(r){return Tl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ro extends Xo{}class ti extends Xo{constructor(e){super(),this.elements=e}}function Am(t,e){const n=Rm(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ni extends Xo{constructor(e){super(),this.elements=e}}function bm(t,e){let n=Rm(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class So extends Xo{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function af(t){return Qe(t.integerValue||t.doubleValue)}function Rm(t){return _c(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function N0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ti&&s instanceof ti||r instanceof ni&&s instanceof ni?Xr(r.elements,s.elements,tn):r instanceof So&&s instanceof So?tn(r.Pe,s.Pe):r instanceof Ro&&s instanceof Ro}(t.transform,e.transform)}class D0{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yo{}function Sm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cm(t.key,fn.none()):new di(t.key,t.data,fn.none());{const n=t.data,r=Ft.empty();let s=new st(Je.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Sr(t.key,r,new Ut(s.toArray()),fn.none())}}function x0(t,e,n){t instanceof di?function(s,i,a){const l=s.value.clone(),c=cf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,a){if(!ro(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=cf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Pm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function $s(t,e,n,r){return t instanceof di?function(i,a,l,c){if(!ro(i.precondition,a))return l;const h=i.value.clone(),d=uf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,a,l,c){if(!ro(i.precondition,a))return l;const h=uf(i.fieldTransforms,c,a),d=a.data;return d.setAll(Pm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return ro(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function V0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Im(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function lf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xr(r,s,(i,a)=>N0(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class di extends Yo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends Yo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cf(t,e,n){const r=new Map;$e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,k0(a,l,n[s]))}return r}function uf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,O0(i,a,e))}return r}class Cm extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M0 extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class L0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&x0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Sm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(De.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),tt())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(n,r)=>lf(n,r))&&Xr(this.baseMutations,e.baseMutations,(n,r)=>lf(n,r))}}class Tc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){$e(e.mutations.length===r.length);let s=function(){return b0}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Tc(e,n,r,s)}}/**
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
 */class F0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var je,ye;function U0(t){switch(t){default:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function B0(t){if(t===void 0)return Tr("GRPC error has no .code"),H.UNKNOWN;switch(t){case je.OK:return H.OK;case je.CANCELLED:return H.CANCELLED;case je.UNKNOWN:return H.UNKNOWN;case je.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case je.INTERNAL:return H.INTERNAL;case je.UNAVAILABLE:return H.UNAVAILABLE;case je.UNAUTHENTICATED:return H.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case je.NOT_FOUND:return H.NOT_FOUND;case je.ALREADY_EXISTS:return H.ALREADY_EXISTS;case je.PERMISSION_DENIED:return H.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case je.ABORTED:return H.ABORTED;case je.OUT_OF_RANGE:return H.OUT_OF_RANGE;case je.UNIMPLEMENTED:return H.UNIMPLEMENTED;case je.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(ye=je||(je={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Xp([4294967295,4294967295],0);class j0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function H0(t,e){return bl(t,e.toTimestamp())}function Kr(t){return $e(!!t),De.fromTimestamp(function(n){const r=Ir(n);return new Ke(r.seconds,r.nanos)}(t))}function Om(t,e){return Rl(t,e).canonicalString()}function Rl(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q0(t){const e=Le.fromString(t);return $e(Y0(e)),e}function Sl(t,e){return Om(t.databaseId,e.path)}function K0(t){const e=q0(t);return e.length===4?Le.emptyPath():W0(e)}function z0(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W0(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hf(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function G0(t,e){let n;if(e instanceof di)n={update:hf(t,e.key,e.value)};else if(e instanceof Cm)n={delete:Sl(t,e.key)};else if(e instanceof Sr)n={update:hf(t,e.key,e.data),updateMask:X0(e.fieldMask)};else{if(!(e instanceof M0))return me();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ro)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ti)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ni)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof So)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:H0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function Q0(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Kr(s.updateTime):Kr(i);return a.isEqual(De.min())&&(a=Kr(i)),new D0(a,s.transformResults||[])}(n,e))):[]}function J0(t){let e=K0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){$e(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const _=km(p);return _ instanceof Kn&&dm(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(_=>function(R){return new Ao(Mr(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,mc(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(p){const _=!!p.before,I=p.values||[];return new Io(I,_)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const _=!p.before,I=p.values||[];return new Io(I,_)}(n.endAt)),y0(e,s,a,i,l,"F",c,h)}function km(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Mr(n.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>km(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function Mr(t){return Je.fromServerFormat(t.fieldPath)}function X0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Z0{constructor(e){this.ct=e}}function eb(t){const e=J0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Al(e,e.limit,"L"):e}/**
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
 */class tb{constructor(){this.un=new nb}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(qn.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Le.comparator)).toArray()}}/**
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
 */class ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ts(0)}static kn(){return new ts(-1)}}/**
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
 */class rb{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class sb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ib{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$s(r.mutation,s,Ut.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,tt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=tt()){const s=ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=$i();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,tt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=bo();const a=js(),l=function(){return js()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),$s(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):a.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new sb(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let s=new yt((a,l)=>a-l),i=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ut.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||tt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=wm();d.forEach(_=>{if(!i.has(_)){const I=Sm(n.get(_),r.get(_));I!==null&&p.set(_,I),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return B.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):E0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(ar());let l=-1,c=i;return a.next(h=>B.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{c=c.insert(d,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,tt())).next(d=>({batchId:l,changes:Em(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=$i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=$i();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const h=function(p,_){return new Jo(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Mt.newInvalidDocument(d)))});let l=$i();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&$s(d.mutation,h,Ut.empty(),Ke.now()),Ec(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class ob{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Kr(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:eb(s.bundledQuery),readTime:Kr(s.readTime)}}(n)),B.resolve()}}/**
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
 */class ab{constructor(){this.overlays=new yt(fe.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ar();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=ar(),i=n.length+1,a=new fe(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new yt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=ar(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new F0(n,r));let i=this.Ir.get(n);i===void 0&&(i=tt(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class lb{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Ic{constructor(){this.Tr=new st(He.Er),this.dr=new st(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new fe(new Le([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new fe(new Le([])),r=new He(n,e),s=new He(n,e+1);let i=tt();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return fe.comparator(e.key,n.key)||Se(e.wr,n.wr)}static Ar(e,n){return Se(e.wr,n.wr)||fe.comparator(e.key,n.key)}}/**
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
 */class cb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(He.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new L0(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new He(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(a)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(Se);return n.forEach(s=>{const i=new He(s,0),a=new He(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const a=new He(new fe(i),0);let l=new st(Se);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){$e(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ub{constructor(e){this.Mr=e,this.docs=function(){return new yt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=bo();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bo();const a=n.path,l=new fe(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||YA(XA(d),r)<=0||(s.has(d.key)||Ec(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hb(this)}getSize(e){return B.resolve(this.size)}}class hb extends rb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class fb{constructor(e){this.persistence=e,this.Nr=new is(n=>yc(n),vc),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ic,this.targetCount=0,this.kr=ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
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
 */class db{constructor(e,n){this.qr={},this.overlays={},this.Qr=new am(0),this.Kr=!1,this.Kr=!0,this.$r=new lb,this.referenceDelegate=e(this),this.Ur=new fb(this),this.indexManager=new tb,this.remoteDocumentCache=function(s){return new ub(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Z0(n),this.Gr=new ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ab,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new cb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new pb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class pb extends e0{constructor(e){super(),this.currentSequenceNumber=e}}class Ac{constructor(e){this.persistence=e,this.Jr=new Ic,this.Yr=null}static Zr(e){return new Ac(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=fe.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,De.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class bc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=tt(),s=tt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bc(e,n.fromCache,r,s)}}/**
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
 */class mb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return lw()?8:t0(ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new mb;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(As()<=pe.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(As()<=pe.DEBUG&&re("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(As()<=pe.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fr(n))):B.resolve())}Yi(e,n){if(of(n))return B.resolve(null);let r=fr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Al(n,null,"F"),r=fr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=tt(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,a,c.readTime)?this.Yi(e,Al(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return of(n)||s.isEqual(De.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?B.resolve(null):(As()<=pe.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(n)),this.rs(e,a,n,JA(s,-1)).next(l=>l))})}ts(e,n){let r=new st(T0(e));return n.forEach((s,i)=>{Ec(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return As()<=pe.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",bs(n)),this.Ji.getDocumentsMatchingQuery(e,n,qn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class _b{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new yt(Se),this._s=new is(i=>yc(i),vc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ib(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function yb(t,e,n,r){return new _b(t,e,n,r)}async function Nm(t,e){const n=Pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=tt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function vb(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,_=p.keys();let I=B.resolve();return _.forEach(R=>{I=I.next(()=>d.getEntry(c,R)).next(k=>{const O=h.docVersions.get(R);$e(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=tt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Eb(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function wb(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class ff{constructor(){this.activeTargetIds=P0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tb{constructor(){this.so=new ff,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ff,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ib{_o(e){}shutdown(){}}/**
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
 */class df{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hi=null;function $a(){return Hi===null?Hi=function(){return 268435456+Math.round(2147483648*Math.random())}():Hi++,"0x"+Hi.toString(16)}/**
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
 */const Ab={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ze="WebChannelConnection";class Rb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=$a(),c=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,c,h,s).then(d=>(re("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw vo("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=Ab[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=$a();return new Promise((a,l)=>{const c=new Yp;c.setWithCredentials(!0),c.listenOnce(em.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case to.NO_ERROR:const d=c.getResponseJson();re(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case to.TIMEOUT:re(Ze,`RPC '${e}' ${i} timed out`),l(new ae(H.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const p=c.getStatus();if(re(Ze,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const R=function(O){const j=O.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(j)>=0?j:H.UNKNOWN}(I.status);l(new ae(R,I.message))}else l(new ae(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ae(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{re(Ze,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);re(Ze,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=$a(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=rm(),l=nm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Zp({})),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");re(Ze,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let _=!1,I=!1;const R=new bb({Io:O=>{I?re(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(_||(re(Ze,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),re(Ze,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),k=(O,j,F)=>{O.listen(j,L=>{try{F(L)}catch(Z){setTimeout(()=>{throw Z},0)}})};return k(p,Os.EventType.OPEN,()=>{I||(re(Ze,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),k(p,Os.EventType.CLOSE,()=>{I||(I=!0,re(Ze,`RPC '${e}' stream ${s} transport closed`),R.So())}),k(p,Os.EventType.ERROR,O=>{I||(I=!0,vo(Ze,`RPC '${e}' stream ${s} transport errored:`,O),R.So(new ae(H.UNAVAILABLE,"The operation could not be completed")))}),k(p,Os.EventType.MESSAGE,O=>{var j;if(!I){const F=O.data[0];$e(!!F);const L=F,Z=L.error||((j=L[0])===null||j===void 0?void 0:j.error);if(Z){re(Ze,`RPC '${e}' stream ${s} received error:`,Z);const le=Z.status;let J=function(w){const A=je[w];if(A!==void 0)return B0(A)}(le),T=Z.message;J===void 0&&(J=H.INTERNAL,T="Unknown error status: "+le+" with message "+Z.message),I=!0,R.So(new ae(J,T)),p.close()}else re(Ze,`RPC '${e}' stream ${s} received:`,F),R.bo(F)}}),k(l,tm.STAT_EVENT,O=>{O.stat===El.PROXY?re(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===El.NOPROXY&&re(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Ha(){return typeof document<"u"?document:null}/**
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
 */function Zo(t){return new j0(t,!0)}/**
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
 */class Dm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sb{constructor(e,n,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Dm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ae(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pb extends Sb{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return $e(!!e.streamToken),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){$e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Q0(e.writeResults,e.commitTime),r=Kr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=z0(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>G0(this.serializer,r))};this.a_(n)}}/**
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
 */class Cb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Rl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae(H.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Rl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ae(H.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ob{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tr(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class kb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{mi(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Pe(c);h.L_.add(4),await pi(h),h.q_.set("Unknown"),h.L_.delete(4),await ea(h)}(this))})}),this.q_=new Ob(r,s)}}async function ea(t){if(mi(t))for(const e of t.B_)await e(!0)}async function pi(t){for(const e of t.B_)await e(!1)}function mi(t){return Pe(t).L_.size===0}async function xm(t,e,n){if(!Qo(e))throw e;t.L_.add(1),await pi(t),t.q_.set("Offline"),n||(n=()=>Eb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ea(t)})}function Vm(t,e){return e().catch(n=>xm(t,n,e))}async function ta(t){const e=Pe(t),n=zn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Nb(e);)try{const s=await wb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Db(e,s)}catch(s){await xm(e,s)}Mm(e)&&Lm(e)}function Nb(t){return mi(t)&&t.O_.length<10}function Db(t,e){t.O_.push(e);const n=zn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Mm(t){return mi(t)&&!zn(t).n_()&&t.O_.length>0}function Lm(t){zn(t).start()}async function xb(t){zn(t).p_()}async function Vb(t){const e=zn(t);for(const n of t.O_)e.m_(n.mutations)}async function Mb(t,e,n){const r=t.O_.shift(),s=Tc.from(r,e,n);await Vm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ta(t)}async function Lb(t,e){e&&zn(t).V_&&await async function(r,s){if(function(a){return U0(a)&&a!==H.ABORTED}(s.code)){const i=r.O_.shift();zn(r).s_(),await Vm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ta(r)}}(t,e),Mm(t)&&Lm(t)}async function pf(t,e){const n=Pe(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.L_.add(3),await pi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ea(n)}async function Fb(t,e){const n=Pe(t);e?(n.L_.delete(2),await ea(n)):e||(n.L_.add(2),await pi(n),n.q_.set("Unknown"))}function zn(t){return t.U_||(t.U_=function(n,r,s){const i=Pe(n);return i.w_(),new Pb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xb.bind(null,t),mo:Lb.bind(null,t),f_:Vb.bind(null,t),g_:Mb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ta(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Rc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Rc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fm(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),Qo(t))return new ae(H.UNAVAILABLE,`${e}: ${t}`);throw t}class Ub{constructor(){this.queries=mf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Pe(n),i=s.queries;s.queries=mf(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new ae(H.ABORTED,"Firestore shutting down"))}}function mf(){return new is(t=>ym(t),_m)}function Bb(t){t.Y_.forEach(e=>{e.next()})}var gf,_f;(_f=gf||(gf={})).ea="default",_f.Cache="cache";class jb{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new is(l=>ym(l),_m),this.Ma=new Map,this.xa=new Set,this.Oa=new yt(fe.comparator),this.Na=new Map,this.La=new Ic,this.Ba={},this.ka=new Map,this.qa=ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $b(t,e,n){const r=zb(t);try{const s=await function(a,l){const c=Pe(a),h=Ke.now(),d=l.reduce((I,R)=>I.add(R.key),tt());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=bo(),k=tt();return c.cs.getEntries(I,d).next(O=>{R=O,R.forEach((j,F)=>{F.isValidDocument()||(k=k.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,R)).next(O=>{p=O;const j=[];for(const F of l){const L=V0(F,p.get(F.key).overlayedDocument);L!=null&&j.push(new Sr(F.key,L,um(L.value.mapValue),fn.exists(!0)))}return c.mutationQueue.addMutationBatch(I,h,j,l)}).next(O=>{_=O;const j=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(I,O.batchId,j)})}).then(()=>({batchId:_.batchId,changes:Em(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new yt(Se)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await na(r,s.changes),await ta(r.remoteStore)}catch(s){const i=Fm(s,"Failed to persist write");n.reject(i)}}function yf(t,e,n){const r=Pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Pe(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const _ of p.j_)_.Z_(l)&&(h=!0)}),h&&Bb(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hb(t,e){const n=Pe(t),r=e.batch.batchId;try{const s=await vb(n.localStore,e);Bm(n,r,null),Um(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await na(n,s)}catch(s){await om(s)}}async function qb(t,e,n){const r=Pe(t);try{const s=await function(a,l){const c=Pe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>($e(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Bm(r,e,n),Um(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await na(r,s)}catch(s){await om(s)}}function Um(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Bm(t,e,n){const r=Pe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}async function na(t,e,n){const r=Pe(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=bc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const d=Pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(h,_=>B.forEach(_.$i,I=>d.persistence.referenceDelegate.addReference(p,_.targetId,I)).next(()=>B.forEach(_.Ui,I=>d.persistence.referenceDelegate.removeReference(p,_.targetId,I)))))}catch(p){if(!Qo(p))throw p;re("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const I=d.os.get(_),R=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(_,k)}}}(r.localStore,i))}async function Kb(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await Nm(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ae(H.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await na(n,r.hs)}}function zb(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qb.bind(null,e),e}class vf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yb(this.persistence,new gb,e.initialUser,this.serializer)}createPersistence(e){return new db(Ac.Zr,this.serializer)}createSharedClientState(e){return new Tb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kb.bind(null,this.syncEngine),await Fb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ub}()}createDatastore(e){const n=Zo(e.databaseInfo.databaseId),r=function(i){return new Rb(i)}(e.databaseInfo);return function(i,a,l,c){return new Cb(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new kb(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>yf(this.syncEngine,n,0),function(){return df.D()?new df:new Ib}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new jb(s,i,a,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Pe(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await pi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class Gb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=im.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{re("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(re("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qa(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Nm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ef(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jb(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>pf(e.remoteStore,s)),t._onlineComponents=e}function Qb(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Jb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await qa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Qb(n))throw n;vo("Error using user provided cache. Falling back to memory cache: "+n),await qa(t,new vf)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await qa(t,new vf);return t._offlineComponents}async function Xb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await Ef(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await Ef(t,new Wb))),t._onlineComponents}function Yb(t){return Xb(t).then(e=>e.syncEngine)}/**
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
 */function jm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wf=new Map;/**
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
 */function $m(t,e,n){if(!n)throw new ae(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zb(t,e,n,r){if(e===!0&&r===!0)throw new ae(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tf(t){if(!fe.isDocumentKey(t))throw new ae(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function If(t){if(fe.isDocumentKey(t))throw new ae(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Hm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sc(t);throw new ae(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Af{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ae(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ae(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jA;switch(r.type){case"firstParty":return new KA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wf.get(n);r&&(re("ComponentProvider","Removing Datastore"),wf.delete(n),r.terminate())}(this),Promise.resolve()}}function eR(t,e,n,r={}){var s;const i=(t=Hm(t,ra))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=et.MOCK_USER;else{l=nw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ae(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(h)}t._authCredentials=new $A(new sm(l,c))}}/**
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
 */class Pc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pc(this.firestore,e,this._query)}}class dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class $n extends Pc{constructor(e,n,r){super(e,n,v0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new fe(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function tR(t,e,...n){if(t=Nt(t),$m("collection","path",e),t instanceof ra){const r=Le.fromString(e,...n);return If(r),new $n(t,null,r)}{if(!(t instanceof dn||t instanceof $n))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return If(r),new $n(t.firestore,null,r)}}function nR(t,e,...n){if(t=Nt(t),arguments.length===1&&(e=im.newId()),$m("doc","path",e),t instanceof ra){const r=Le.fromString(e,...n);return Tf(r),new dn(t,null,new fe(r))}{if(!(t instanceof dn||t instanceof $n))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Tf(r),new dn(t.firestore,t instanceof $n?t.converter:null,new fe(r))}}/**
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
 */class rR{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Dm(this,"async_queue_retry"),this.Eu=()=>{const n=Ha();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Ha();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Ha();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new hr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Qo(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Tr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Rc.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&me()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class qm extends ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new rR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Km(this),this._firestoreClient.terminate()}}function sR(t,e){const n=dp(),r="(default)",s=sc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ew("firestore");i&&eR(s,...i)}return s}function iR(t){return t._firestoreClient||Km(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Km(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new i0(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,jm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Gb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ri(en.fromBase64String(e))}catch(n){throw new ae(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ri(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wm{constructor(e){this._methodName=e}}/**
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
 */class Gm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Qm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const oR=/^__.*__$/;class aR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new di(e,this.data,n,this.fieldTransforms)}}function Jm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Cc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Po(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Jm(this.wu)&&oR.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class lR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zo(e)}Nu(e,n,r,s=!1){return new Cc({wu:e,methodName:n,Ou:r,path:Je.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cR(t){const e=t._freezeSettings(),n=Zo(t._databaseId);return new lR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uR(t,e,n,r,s,i={}){const a=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);eg("Data must be an object, but it was:",a,r);const l=Ym(r,a);let c,h;if(i.merge)c=new Ut(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=hR(e,p,n);if(!a.contains(_))throw new ae(H.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);pR(d,_)||d.push(_)}c=new Ut(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new aR(new Ft(l),c,h)}function Xm(t,e){if(Zm(t=Nt(t)))return eg("Unsupported field value:",e,t),Ym(t,e);if(t instanceof Wm)return function(r,s){if(!Jm(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Xm(l,s.Fu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return C0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:bl(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bl(s.serializer,i)}}if(r instanceof Gm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ri)return{bytesValue:$0(s.serializer,r._byteString)};if(r instanceof dn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Om(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qm)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Mu("VectorValues must only contain numeric values.");return wc(l.serializer,c)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Sc(r)}`)}(t,e)}function Ym(t,e){const n={};return lm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(r,s)=>{const i=Xm(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Zm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Gm||t instanceof ri||t instanceof dn||t instanceof Wm||t instanceof Qm)}function eg(t,e,n){if(!Zm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Sc(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function hR(t,e,n){if((e=Nt(e))instanceof zm)return e._internalPath;if(typeof e=="string")return dR(t,e);throw Po("Field path arguments must be of type string or ",t,!1,void 0,n)}const fR=new RegExp("[~\\*/\\[\\]]");function dR(t,e,n){if(e.search(fR)>=0)throw Po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zm(...e.split("."))._internalPath}catch{throw Po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Po(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ae(H.INVALID_ARGUMENT,l+t+c)}function pR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function mR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function gR(t,e){const n=Hm(t.firestore,qm),r=nR(t),s=mR(t.converter,e);return _R(n,[uR(cR(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function _R(t,e){return function(r,s){const i=new hr;return r.asyncQueue.enqueueAndForget(async()=>$b(await Yb(r),s,i)),i.promise}(iR(t),e)}(function(e,n=!0){(function(s){ss=s})(ns),Jr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new qm(new HA(r.getProvider("auth-internal")),new WA(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ae(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new To(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),jn(Xh,"4.7.1",e),jn(Xh,"4.7.1","esm2017")})();const yR={apiKey:"AIzaSyBNwEBsHNOzAKUjMH8JAeFnB92Oxj79nnk",authDomain:"fit5032-3347b.firebaseapp.com",projectId:"fit5032-3347b",storageBucket:"fit5032-3347b.appspot.com",messagingSenderId:"618078822194",appId:"1:618078822194:web:f03c894b5d0ec0a1a9012b"};fp(yR);const vR=sR(),ER=ie("h1",null,"Add Book",-1),wR=ie("label",{for:"isbn"},"ISBN: ",-1),TR=ie("label",{for:"name"},"Name: ",-1),IR=ie("button",{type:"submit"},"Add Book",-1),AR={__name:"AddBookView",setup(t){const e=$t(""),n=$t(""),r=async()=>{try{const s=Number(e.value);if(isNaN(s)){alert("ISBN must be a valid number");return}await gR(tR(vR,"books"),{isbn:s,name:n.value})}catch(s){console.log("Error adding book: "+s)}};return(s,i)=>(dt(),At("div",null,[ER,ie("form",{onSubmit:dv(r,["prevent"])},[ie("div",null,[wR,mr(ie("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),id:"isbn",required:""},null,512),[[_r,e.value]])]),ie("div",null,[TR,mr(ie("input",{type:"text","onUpdate:modelValue":i[1]||(i[1]=a=>n.value=a),id:"name",required:""},null,512),[[_r,n.value]])]),IR],32)]))}};function tg(t,e){return function(){return t.apply(e,arguments)}}const{toString:bR}=Object.prototype,{getPrototypeOf:Oc}=Object,sa=(t=>e=>{const n=bR.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Kt=t=>(t=t.toLowerCase(),e=>sa(e)===t),ia=t=>e=>typeof e===t,{isArray:os}=Array,si=ia("undefined");function RR(t){return t!==null&&!si(t)&&t.constructor!==null&&!si(t.constructor)&&bt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ng=Kt("ArrayBuffer");function SR(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ng(t.buffer),e}const PR=ia("string"),bt=ia("function"),rg=ia("number"),oa=t=>t!==null&&typeof t=="object",CR=t=>t===!0||t===!1,so=t=>{if(sa(t)!=="object")return!1;const e=Oc(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},OR=Kt("Date"),kR=Kt("File"),NR=Kt("Blob"),DR=Kt("FileList"),xR=t=>oa(t)&&bt(t.pipe),VR=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bt(t.append)&&((e=sa(t))==="formdata"||e==="object"&&bt(t.toString)&&t.toString()==="[object FormData]"))},MR=Kt("URLSearchParams"),[LR,FR,UR,BR]=["ReadableStream","Request","Response","Headers"].map(Kt),jR=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),os(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),a=i.length;let l;for(r=0;r<a;r++)l=i[r],e.call(null,t[l],l,t)}}function sg(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ig=t=>!si(t)&&t!==lr;function Pl(){const{caseless:t}=ig(this)&&this||{},e={},n=(r,s)=>{const i=t&&sg(e,s)||s;so(e[i])&&so(r)?e[i]=Pl(e[i],r):so(r)?e[i]=Pl({},r):os(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&gi(arguments[r],n);return e}const $R=(t,e,n,{allOwnKeys:r}={})=>(gi(e,(s,i)=>{n&&bt(s)?t[i]=tg(s,n):t[i]=s},{allOwnKeys:r}),t),HR=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),qR=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},KR=(t,e,n,r)=>{let s,i,a;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)a=s[i],(!r||r(a,t,e))&&!l[a]&&(e[a]=t[a],l[a]=!0);t=n!==!1&&Oc(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},zR=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},WR=t=>{if(!t)return null;if(os(t))return t;let e=t.length;if(!rg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},GR=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Oc(Uint8Array)),QR=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},JR=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},XR=Kt("HTMLFormElement"),YR=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),bf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ZR=Kt("RegExp"),og=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};gi(n,(s,i)=>{let a;(a=e(s,i,t))!==!1&&(r[i]=a||s)}),Object.defineProperties(t,r)},eS=t=>{og(t,(e,n)=>{if(bt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(bt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},tS=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return os(t)?r(t):r(String(t).split(e)),n},nS=()=>{},rS=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Ka="abcdefghijklmnopqrstuvwxyz",Rf="0123456789",ag={DIGIT:Rf,ALPHA:Ka,ALPHA_DIGIT:Ka+Ka.toUpperCase()+Rf},sS=(t=16,e=ag.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function iS(t){return!!(t&&bt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const oS=t=>{const e=new Array(10),n=(r,s)=>{if(oa(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=os(r)?[]:{};return gi(r,(a,l)=>{const c=n(a,s+1);!si(c)&&(i[l]=c)}),e[s]=void 0,i}}return r};return n(t,0)},aS=Kt("AsyncFunction"),lS=t=>t&&(oa(t)||bt(t))&&bt(t.then)&&bt(t.catch),lg=((t,e)=>t?setImmediate:e?((n,r)=>(lr.addEventListener("message",({source:s,data:i})=>{s===lr&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),lr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",bt(lr.postMessage)),cS=typeof queueMicrotask<"u"?queueMicrotask.bind(lr):typeof process<"u"&&process.nextTick||lg,D={isArray:os,isArrayBuffer:ng,isBuffer:RR,isFormData:VR,isArrayBufferView:SR,isString:PR,isNumber:rg,isBoolean:CR,isObject:oa,isPlainObject:so,isReadableStream:LR,isRequest:FR,isResponse:UR,isHeaders:BR,isUndefined:si,isDate:OR,isFile:kR,isBlob:NR,isRegExp:ZR,isFunction:bt,isStream:xR,isURLSearchParams:MR,isTypedArray:GR,isFileList:DR,forEach:gi,merge:Pl,extend:$R,trim:jR,stripBOM:HR,inherits:qR,toFlatObject:KR,kindOf:sa,kindOfTest:Kt,endsWith:zR,toArray:WR,forEachEntry:QR,matchAll:JR,isHTMLForm:XR,hasOwnProperty:bf,hasOwnProp:bf,reduceDescriptors:og,freezeMethods:eS,toObjectSet:tS,toCamelCase:YR,noop:nS,toFiniteNumber:rS,findKey:sg,global:lr,isContextDefined:ig,ALPHABET:ag,generateString:sS,isSpecCompliantForm:iS,toJSONObject:oS,isAsyncFn:aS,isThenable:lS,setImmediate:lg,asap:cS};function he(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}D.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const cg=he.prototype,ug={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ug[t]={value:t}});Object.defineProperties(he,ug);Object.defineProperty(cg,"isAxiosError",{value:!0});he.from=(t,e,n,r,s,i)=>{const a=Object.create(cg);return D.toFlatObject(t,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),he.call(a,t.message,e,n,r,s),a.cause=t,a.name=t.name,i&&Object.assign(a,i),a};const uS=null;function Cl(t){return D.isPlainObject(t)||D.isArray(t)}function hg(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function Sf(t,e,n){return t?t.concat(e).map(function(s,i){return s=hg(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function hS(t){return D.isArray(t)&&!t.some(Cl)}const fS=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function aa(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,O){return!D.isUndefined(O[k])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(s))throw new TypeError("visitor must be a function");function h(R){if(R===null)return"";if(D.isDate(R))return R.toISOString();if(!c&&D.isBlob(R))throw new he("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(R)||D.isTypedArray(R)?c&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function d(R,k,O){let j=R;if(R&&!O&&typeof R=="object"){if(D.endsWith(k,"{}"))k=r?k:k.slice(0,-2),R=JSON.stringify(R);else if(D.isArray(R)&&hS(R)||(D.isFileList(R)||D.endsWith(k,"[]"))&&(j=D.toArray(R)))return k=hg(k),j.forEach(function(L,Z){!(D.isUndefined(L)||L===null)&&e.append(a===!0?Sf([k],Z,i):a===null?k:k+"[]",h(L))}),!1}return Cl(R)?!0:(e.append(Sf(O,k,i),h(R)),!1)}const p=[],_=Object.assign(fS,{defaultVisitor:d,convertValue:h,isVisitable:Cl});function I(R,k){if(!D.isUndefined(R)){if(p.indexOf(R)!==-1)throw Error("Circular reference detected in "+k.join("."));p.push(R),D.forEach(R,function(j,F){(!(D.isUndefined(j)||j===null)&&s.call(e,j,D.isString(F)?F.trim():F,k,_))===!0&&I(j,k?k.concat(F):[F])}),p.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return I(t),e}function Pf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function kc(t,e){this._pairs=[],t&&aa(t,this,e)}const fg=kc.prototype;fg.append=function(e,n){this._pairs.push([e,n])};fg.toString=function(e){const n=e?function(r){return e.call(this,r,Pf)}:Pf;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function dS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function dg(t,e,n){if(!e)return t;const r=n&&n.encode||dS,s=n&&n.serialize;let i;if(s?i=s(e,n):i=D.isURLSearchParams(e)?e.toString():new kc(e,n).toString(r),i){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Cf{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(r){r!==null&&e(r)})}}const pg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pS=typeof URLSearchParams<"u"?URLSearchParams:kc,mS=typeof FormData<"u"?FormData:null,gS=typeof Blob<"u"?Blob:null,_S={isBrowser:!0,classes:{URLSearchParams:pS,FormData:mS,Blob:gS},protocols:["http","https","file","blob","url","data"]},Nc=typeof window<"u"&&typeof document<"u",Ol=typeof navigator=="object"&&navigator||void 0,yS=Nc&&(!Ol||["ReactNative","NativeScript","NS"].indexOf(Ol.product)<0),vS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ES=Nc&&window.location.href||"http://localhost",wS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nc,hasStandardBrowserEnv:yS,hasStandardBrowserWebWorkerEnv:vS,navigator:Ol,origin:ES},Symbol.toStringTag,{value:"Module"})),pt={...wS,..._S};function TS(t,e){return aa(t,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return pt.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function IS(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function AS(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function mg(t){function e(n,r,s,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=i>=n.length;return a=!a&&D.isArray(s)?s.length:a,c?(D.hasOwnProp(s,a)?s[a]=[s[a],r]:s[a]=r,!l):((!s[a]||!D.isObject(s[a]))&&(s[a]=[]),e(n,r,s[a],i)&&D.isArray(s[a])&&(s[a]=AS(s[a])),!l)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(r,s)=>{e(IS(r),s,n,0)}),n}return null}function bS(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const _i={transitional:pg,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=D.isObject(e);if(i&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return s?JSON.stringify(mg(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return TS(e,this.formSerializer).toString();if((l=D.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return aa(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),bS(e)):e}],transformResponse:[function(e){const n=this.transitional||_i.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(r&&!this.responseType||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(a)throw l.name==="SyntaxError"?he.from(l,he.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{_i.headers[t]={}});const RS=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),SS=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!n||e[n]&&RS[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Of=Symbol("internals");function Rs(t){return t&&String(t).trim().toLowerCase()}function io(t){return t===!1||t==null?t:D.isArray(t)?t.map(io):String(t)}function PS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const CS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function za(t,e,n,r,s){if(D.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!D.isString(e)){if(D.isString(r))return e.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(e)}}function OS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function kS(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,a){return this[r].call(this,e,s,i,a)},configurable:!0})})}class mt{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(l,c,h){const d=Rs(c);if(!d)throw new Error("header name must be a non-empty string");const p=D.findKey(s,d);(!p||s[p]===void 0||h===!0||h===void 0&&s[p]!==!1)&&(s[p||c]=io(l))}const a=(l,c)=>D.forEach(l,(h,d)=>i(h,d,c));if(D.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(D.isString(e)&&(e=e.trim())&&!CS(e))a(SS(e),n);else if(D.isHeaders(e))for(const[l,c]of e.entries())i(c,l,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Rs(e),e){const r=D.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return PS(s);if(D.isFunction(n))return n.call(this,s,r);if(D.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Rs(e),e){const r=D.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||za(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(a){if(a=Rs(a),a){const l=D.findKey(r,a);l&&(!n||za(r,r[l],l,n))&&(delete r[l],s=!0)}}return D.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||za(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return D.forEach(this,(s,i)=>{const a=D.findKey(r,i);if(a){n[a]=io(s),delete n[i];return}const l=e?OS(i):String(i).trim();l!==i&&delete n[i],n[l]=io(s),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Of]=this[Of]={accessors:{}}).accessors,s=this.prototype;function i(a){const l=Rs(a);r[l]||(kS(s,a),r[l]=!0)}return D.isArray(e)?e.forEach(i):i(e),this}}mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(mt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});D.freezeMethods(mt);function Wa(t,e){const n=this||_i,r=e||n,s=mt.from(r.headers);let i=r.data;return D.forEach(t,function(l){i=l.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function gg(t){return!!(t&&t.__CANCEL__)}function as(t,e,n){he.call(this,t??"canceled",he.ERR_CANCELED,e,n),this.name="CanceledError"}D.inherits(as,he,{__CANCEL__:!0});function _g(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new he("Request failed with status code "+n.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function NS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function DS(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,a;return e=e!==void 0?e:1e3,function(c){const h=Date.now(),d=r[i];a||(a=h),n[s]=c,r[s]=h;let p=i,_=0;for(;p!==s;)_+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),h-a<e)return;const I=d&&h-d;return I?Math.round(_*1e3/I):void 0}}function xS(t,e){let n=0,r=1e3/e,s,i;const a=(h,d=Date.now())=>{n=d,s=null,i&&(clearTimeout(i),i=null),t.apply(null,h)};return[(...h)=>{const d=Date.now(),p=d-n;p>=r?a(h,d):(s=h,i||(i=setTimeout(()=>{i=null,a(s)},r-p)))},()=>s&&a(s)]}const Co=(t,e,n=3)=>{let r=0;const s=DS(50,250);return xS(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=a-r,h=s(c),d=a<=l;r=a;const p={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:h||void 0,estimated:h&&l&&d?(l-a)/h:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},kf=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Nf=t=>(...e)=>D.asap(()=>t(...e)),VS=pt.hasStandardBrowserEnv?function(){const e=pt.navigator&&/(msie|trident)/i.test(pt.navigator.userAgent),n=document.createElement("a");let r;function s(i){let a=i;return e&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(a){const l=D.isString(a)?s(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),MS=pt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const a=[t+"="+encodeURIComponent(e)];D.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),D.isString(r)&&a.push("path="+r),D.isString(s)&&a.push("domain="+s),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function LS(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function FS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function yg(t,e){return t&&!LS(e)?FS(t,e):e}const Df=t=>t instanceof mt?{...t}:t;function Ar(t,e){e=e||{};const n={};function r(h,d,p){return D.isPlainObject(h)&&D.isPlainObject(d)?D.merge.call({caseless:p},h,d):D.isPlainObject(d)?D.merge({},d):D.isArray(d)?d.slice():d}function s(h,d,p){if(D.isUndefined(d)){if(!D.isUndefined(h))return r(void 0,h,p)}else return r(h,d,p)}function i(h,d){if(!D.isUndefined(d))return r(void 0,d)}function a(h,d){if(D.isUndefined(d)){if(!D.isUndefined(h))return r(void 0,h)}else return r(void 0,d)}function l(h,d,p){if(p in e)return r(h,d);if(p in t)return r(void 0,h)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(h,d)=>s(Df(h),Df(d),!0)};return D.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=c[d]||s,_=p(t[d],e[d],d);D.isUndefined(_)&&p!==l||(n[d]=_)}),n}const vg=t=>{const e=Ar({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:l}=e;e.headers=a=mt.from(a),e.url=dg(yg(e.baseURL,e.url),t.params,t.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(D.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[h,...d]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];a.setContentType([h||"multipart/form-data",...d].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&D.isFunction(r)&&(r=r(e)),r||r!==!1&&VS(e.url))){const h=s&&i&&MS.read(i);h&&a.set(s,h)}return e},US=typeof XMLHttpRequest<"u",BS=US&&function(t){return new Promise(function(n,r){const s=vg(t);let i=s.data;const a=mt.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:h}=s,d,p,_,I,R;function k(){I&&I(),R&&R(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let O=new XMLHttpRequest;O.open(s.method.toUpperCase(),s.url,!0),O.timeout=s.timeout;function j(){if(!O)return;const L=mt.from("getAllResponseHeaders"in O&&O.getAllResponseHeaders()),le={data:!l||l==="text"||l==="json"?O.responseText:O.response,status:O.status,statusText:O.statusText,headers:L,config:t,request:O};_g(function(T){n(T),k()},function(T){r(T),k()},le),O=null}"onloadend"in O?O.onloadend=j:O.onreadystatechange=function(){!O||O.readyState!==4||O.status===0&&!(O.responseURL&&O.responseURL.indexOf("file:")===0)||setTimeout(j)},O.onabort=function(){O&&(r(new he("Request aborted",he.ECONNABORTED,t,O)),O=null)},O.onerror=function(){r(new he("Network Error",he.ERR_NETWORK,t,O)),O=null},O.ontimeout=function(){let Z=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const le=s.transitional||pg;s.timeoutErrorMessage&&(Z=s.timeoutErrorMessage),r(new he(Z,le.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,t,O)),O=null},i===void 0&&a.setContentType(null),"setRequestHeader"in O&&D.forEach(a.toJSON(),function(Z,le){O.setRequestHeader(le,Z)}),D.isUndefined(s.withCredentials)||(O.withCredentials=!!s.withCredentials),l&&l!=="json"&&(O.responseType=s.responseType),h&&([_,R]=Co(h,!0),O.addEventListener("progress",_)),c&&O.upload&&([p,I]=Co(c),O.upload.addEventListener("progress",p),O.upload.addEventListener("loadend",I)),(s.cancelToken||s.signal)&&(d=L=>{O&&(r(!L||L.type?new as(null,t,O):L),O.abort(),O=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const F=NS(s.url);if(F&&pt.protocols.indexOf(F)===-1){r(new he("Unsupported protocol "+F+":",he.ERR_BAD_REQUEST,t));return}O.send(i||null)})},jS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(h){if(!s){s=!0,l();const d=h instanceof Error?h:this.reason;r.abort(d instanceof he?d:new as(d instanceof Error?d.message:d))}};let a=e&&setTimeout(()=>{a=null,i(new he(`timeout ${e} of ms exceeded`,he.ETIMEDOUT))},e);const l=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(h=>{h.unsubscribe?h.unsubscribe(i):h.removeEventListener("abort",i)}),t=null)};t.forEach(h=>h.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>D.asap(l),c}},$S=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},HS=async function*(t,e){for await(const n of qS(t))yield*$S(n,e)},qS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},xf=(t,e,n,r)=>{const s=HS(t,e);let i=0,a,l=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:h,value:d}=await s.next();if(h){l(),c.close();return}let p=d.byteLength;if(n){let _=i+=p;n(_)}c.enqueue(new Uint8Array(d))}catch(h){throw l(h),h}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},la=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Eg=la&&typeof ReadableStream=="function",KS=la&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),wg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},zS=Eg&&wg(()=>{let t=!1;const e=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Vf=64*1024,kl=Eg&&wg(()=>D.isReadableStream(new Response("").body)),Oo={stream:kl&&(t=>t.body)};la&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Oo[e]&&(Oo[e]=D.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new he(`Response type '${e}' is not supported`,he.ERR_NOT_SUPPORT,r)})})})(new Response);const WS=async t=>{if(t==null)return 0;if(D.isBlob(t))return t.size;if(D.isSpecCompliantForm(t))return(await new Request(pt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(D.isArrayBufferView(t)||D.isArrayBuffer(t))return t.byteLength;if(D.isURLSearchParams(t)&&(t=t+""),D.isString(t))return(await KS(t)).byteLength},GS=async(t,e)=>{const n=D.toFiniteNumber(t.getContentLength());return n??WS(e)},QS=la&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:c,responseType:h,headers:d,withCredentials:p="same-origin",fetchOptions:_}=vg(t);h=h?(h+"").toLowerCase():"text";let I=jS([s,i&&i.toAbortSignal()],a),R;const k=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let O;try{if(c&&zS&&n!=="get"&&n!=="head"&&(O=await GS(d,r))!==0){let le=new Request(e,{method:"POST",body:r,duplex:"half"}),J;if(D.isFormData(r)&&(J=le.headers.get("content-type"))&&d.setContentType(J),le.body){const[T,y]=kf(O,Co(Nf(c)));r=xf(le.body,Vf,T,y)}}D.isString(p)||(p=p?"include":"omit");const j="credentials"in Request.prototype;R=new Request(e,{..._,signal:I,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:j?p:void 0});let F=await fetch(R);const L=kl&&(h==="stream"||h==="response");if(kl&&(l||L&&k)){const le={};["status","statusText","headers"].forEach(w=>{le[w]=F[w]});const J=D.toFiniteNumber(F.headers.get("content-length")),[T,y]=l&&kf(J,Co(Nf(l),!0))||[];F=new Response(xf(F.body,Vf,T,()=>{y&&y(),k&&k()}),le)}h=h||"text";let Z=await Oo[D.findKey(Oo,h)||"text"](F,t);return!L&&k&&k(),await new Promise((le,J)=>{_g(le,J,{data:Z,headers:mt.from(F.headers),status:F.status,statusText:F.statusText,config:t,request:R})})}catch(j){throw k&&k(),j&&j.name==="TypeError"&&/fetch/i.test(j.message)?Object.assign(new he("Network Error",he.ERR_NETWORK,t,R),{cause:j.cause||j}):he.from(j,j&&j.code,t,R)}}),Nl={http:uS,xhr:BS,fetch:QS};D.forEach(Nl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Mf=t=>`- ${t}`,JS=t=>D.isFunction(t)||t===null||t===!1,Tg={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let a;if(r=n,!JS(n)&&(r=Nl[(a=String(n)).toLowerCase()],r===void 0))throw new he(`Unknown adapter '${a}'`);if(r)break;s[a||"#"+i]=r}if(!r){const i=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?i.length>1?`since :
`+i.map(Mf).join(`
`):" "+Mf(i[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Nl};function Ga(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new as(null,t)}function Lf(t){return Ga(t),t.headers=mt.from(t.headers),t.data=Wa.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tg.getAdapter(t.adapter||_i.adapter)(t).then(function(r){return Ga(t),r.data=Wa.call(t,t.transformResponse,r),r.headers=mt.from(r.headers),r},function(r){return gg(r)||(Ga(t),r&&r.response&&(r.response.data=Wa.call(t,t.transformResponse,r.response),r.response.headers=mt.from(r.response.headers))),Promise.reject(r)})}const Ig="1.7.7",Dc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Dc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ff={};Dc.transitional=function(e,n,r){function s(i,a){return"[Axios v"+Ig+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(e===!1)throw new he(s(a," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!Ff[a]&&(Ff[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,a,l):!0}};function XS(t,e,n){if(typeof t!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],a=e[i];if(a){const l=t[i],c=l===void 0||a(l,i,t);if(c!==!0)throw new he("option "+i+" must be "+c,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+i,he.ERR_BAD_OPTION)}}const Dl={assertOptions:XS,validators:Dc},Rn=Dl.validators;class dr{constructor(e){this.defaults=e,this.interceptors={request:new Cf,response:new Cf}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ar(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Dl.assertOptions(r,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean)},!1),s!=null&&(D.isFunction(s)?n.paramsSerializer={serialize:s}:Dl.assertOptions(s,{encode:Rn.function,serialize:Rn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&D.merge(i.common,i[n.method]);i&&D.forEach(["delete","get","head","post","put","patch","common"],R=>{delete i[R]}),n.headers=mt.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(c=c&&k.synchronous,l.unshift(k.fulfilled,k.rejected))});const h=[];this.interceptors.response.forEach(function(k){h.push(k.fulfilled,k.rejected)});let d,p=0,_;if(!c){const R=[Lf.bind(this),void 0];for(R.unshift.apply(R,l),R.push.apply(R,h),_=R.length,d=Promise.resolve(n);p<_;)d=d.then(R[p++],R[p++]);return d}_=l.length;let I=n;for(p=0;p<_;){const R=l[p++],k=l[p++];try{I=R(I)}catch(O){k.call(this,O);break}}try{d=Lf.call(this,I)}catch(R){return Promise.reject(R)}for(p=0,_=h.length;p<_;)d=d.then(h[p++],h[p++]);return d}getUri(e){e=Ar(this.defaults,e);const n=yg(e.baseURL,e.url);return dg(n,e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(e){dr.prototype[e]=function(n,r){return this.request(Ar(r||{},{method:e,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(e){function n(r){return function(i,a,l){return this.request(Ar(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}dr.prototype[e]=n(),dr.prototype[e+"Form"]=n(!0)});class xc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(s);return a.cancel=function(){r.unsubscribe(i)},a},e(function(i,a,l){r.reason||(r.reason=new as(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new xc(function(s){e=s}),cancel:e}}}function YS(t){return function(n){return t.apply(null,n)}}function ZS(t){return D.isObject(t)&&t.isAxiosError===!0}const xl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xl).forEach(([t,e])=>{xl[e]=t});function Ag(t){const e=new dr(t),n=tg(dr.prototype.request,e);return D.extend(n,dr.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Ag(Ar(t,s))},n}const Fe=Ag(_i);Fe.Axios=dr;Fe.CanceledError=as;Fe.CancelToken=xc;Fe.isCancel=gg;Fe.VERSION=Ig;Fe.toFormData=aa;Fe.AxiosError=he;Fe.Cancel=Fe.CanceledError;Fe.all=function(e){return Promise.all(e)};Fe.spread=YS;Fe.isAxiosError=ZS;Fe.mergeConfig=Ar;Fe.AxiosHeaders=mt;Fe.formToJSON=t=>mg(D.isHTMLForm(t)?new FormData(t):t);Fe.getAdapter=Tg.getAdapter;Fe.HttpStatusCode=xl;Fe.default=Fe;const eP={id:"app"},tP=ie("h1",null,"Book Counter",-1),nP={key:0},rP={key:1},sP={__name:"GetBookCountView",setup(t){const e=$t(null),n=$t(null),r=async()=>{try{const s=await Fe.get("https://countbooks-kc5ola4uga-uc.a.run.app");e.value=s.data.count,n.value=null}catch(s){console.error("Error fetching book count:",s),s.value=s,e.value=null}};return(s,i)=>(dt(),At("div",eP,[tP,ie("button",{onClick:r},"Get Book Count"),e.value!==null?(dt(),At("p",nP,"Total number of books: "+Mn(e.value),1)):lo("",!0),n.value?(dt(),At("p",rP,Mn(n.value),1)):lo("",!0)]))}},iP="2919b8ada89fead5a3bceb9c9201c1f3",oP={name:"App",data(){return{city:"",weatherData:null,hourlyForecast:[],dailyForecast:[]}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp-273):null},iconUrl(){return this.weatherData?`https://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:null}},mounted(){this.fetchCurrentLocationWeather()},methods:{async fetchCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(async t=>{const{latitude:e,longitude:n}=t.coords,r=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=${iP}`;await this.fetchWeatherData(r)})},async fetchWeatherData(t){try{const e=await Fe.get(t);this.weatherData=e.data}catch(e){console.error("Error fetching weather data:",e)}}}},aP={class:"container"},lP=ie("div",{class:"header"},[ie("h1",null,"WEATHER APP")],-1),cP={class:"search-bar"},uP={key:0},hP=["src"];function fP(t,e,n,r,s,i){return dt(),At(Ot,null,[ie("div",aP,[lP,ie("div",cP,[mr(ie("input",{type:"text",placeholder:"Enter city name",class:"search-input","onUpdate:modelValue":e[0]||(e[0]=a=>s.city=a)},null,512),[[_r,s.city]]),ie("button",{onClick:e[1]||(e[1]=(...a)=>t.searchByCity&&t.searchByCity(...a)),class:"search-button"},"Search")])]),ie("main",null,[s.weatherData?(dt(),At("div",uP,[ie("h2",null,Mn(s.weatherData.name)+", "+Mn(s.weatherData.sys.country),1),ie("div",null,[ie("img",{src:i.iconUrl,alt:"Weather Icon"},null,8,hP),ie("p",null,Mn(i.temperature)+" °C",1)]),ie("span",null,Mn(s.weatherData.weather[0].description),1)])):lo("",!0)])],64)}const dP=ec(oP,[["render",fP]]),pP={__name:"CountBookAPI",setup(t){const e=$t(null),n=$t(null);return(async()=>{try{const s=await Fe.get("https://countbooks-kc5ola4uga-uc.a.run.app");e.value=s.data,n.value=null}catch(s){console.error("Error fetching book count:",s),s.value=s,e.value=null}})(),(s,i)=>(dt(),At("pre",null,Mn(e.value),1))}},mP=[{path:"/",name:"Home",component:jE},{path:"/about",name:"About",component:zE},{path:"/FireLogin",name:"FireLogin",component:MA},{path:"/FireRegister",name:"FireRegister",component:FA},{path:"/addbook",name:"Addbook",component:AR},{path:"/GetBookCount",name:"GetBookCount",component:sP},{path:"/WeatherCheck",name:"WeatherCheck",component:dP},{path:"/CountBookAPI",name:"CountBookAPI",component:pP}],gP=LE({history:hE(),routes:mP}),bg=gv(xv);bg.use(gP);bg.mount("#app");
