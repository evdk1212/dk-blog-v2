(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return p},G6:function(){return b},L:function(){return u},LL:function(){return T},Sg:function(){return y},ZB:function(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let r in n)n.hasOwnProperty(r)&&"__proto__"!==r&&(t[r]=e(t[r],n[r]));return t}},ZR:function(){return _},aH:function(){return g},eu:function(){return E},hl:function(){return I},jU:function(){return w},m9:function(){return k},ne:function(){return C},r3:function(){return x},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],a=n[s];if(D(r)&&D(a)){if(!e(r,a))return!1}else if(r!==a)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},z$:function(){return v}});var r=n(3454);/**
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
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[n++],a=e[n++],o=e[n++],l=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,h=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),r.push(n[u],n[h],n[c],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length,a=s?n[e.charAt(t)]:0;++t;let l=t<e.length,u=l?n[e.charAt(t)]:64;++t;let h=t<e.length,c=h?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==u||null==c)throw new o;let d=i<<2|a>>4;if(r.push(d),64!==u){let e=a<<4&240|u>>2;if(r.push(e),64!==c){let e=u<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return a.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},c=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&h(e[1]);return t&&JSON.parse(t)},m=()=>{try{return c()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=()=>{var e;return null===(e=m())||void 0===e?void 0:e.config};/**
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
 */class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
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
 */function y(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
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
 */function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){return"object"==typeof self&&self.self===self}function b(){return!function(){var e;let t=null===(e=m())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}function E(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(S,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`,o=new _(r,a,n);return o}}let S=/\{\$([^}]+)}/g;/**
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
 */function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e){return null!==e&&"object"==typeof e}function C(e,t){let n=new A(e,t);return n.subscribe.bind(n)}class A{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=N),void 0===r.error&&(r.error=N),void 0===r.complete&&(r.complete=N);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N(){}/**
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
 */function k(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6394)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,i=n(7273).Z,s=r(n(7294)),a=n(4532),o=n(3353),l=n(1410),u=n(9064),h=n(370),c=n(9955),d=n(4224),f=n(508),m=n(1516),g=n(4266);let p=new Set;function y(e,t,n,r,i){if(i||o.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,s=t+"%"+n+"%"+i;if(p.has(s))return;p.add(s)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:l.formatUrl(e)}let w=s.default.forwardRef(function(e,t){let n,r;let{href:l,as:p,children:w,prefetch:b,passHref:I,replace:E,shallow:_,scroll:T,locale:S,onClick:x,onMouseEnter:D,onTouchStart:C,legacyBehavior:A=!1}=e,N=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=w,A&&("string"==typeof n||"number"==typeof n)&&(n=s.default.createElement("a",null,n));let k=!1!==b,R=s.default.useContext(c.RouterContext),O=s.default.useContext(d.AppRouterContext),L=null!=R?R:O,M=!R,{href:P,as:F}=s.default.useMemo(()=>{if(!R){let e=v(l);return{href:e,as:p?v(p):e}}let[e,t]=a.resolveHref(R,l,!0);return{href:e,as:p?a.resolveHref(R,p):t||e}},[R,l,p]),V=s.default.useRef(P),B=s.default.useRef(F);A&&(r=s.default.Children.only(n));let U=A?r&&"object"==typeof r&&r.ref:t,[q,j,z]=f.useIntersection({rootMargin:"200px"}),$=s.default.useCallback(e=>{(B.current!==F||V.current!==P)&&(z(),B.current=F,V.current=P),q(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[F,U,P,z,q]);s.default.useEffect(()=>{L&&j&&k&&y(L,P,F,{locale:S},M)},[F,P,j,S,k,null==R?void 0:R.locale,L,M]);let K={ref:$,onClick(e){A||"function"!=typeof x||x(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,i,a,l,u,h,c){let{nodeName:d}=e.currentTarget,f="A"===d.toUpperCase();if(f&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!h&&!o.isLocalURL(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:a,locale:u,scroll:l}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!c})};h?s.default.startTransition(m):m()}(e,L,P,F,E,_,T,S,M,k)},onMouseEnter(e){A||"function"!=typeof D||D(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(k||!M)&&y(L,P,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},M)},onTouchStart(e){A||"function"!=typeof C||C(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(k||!M)&&y(L,P,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},M)}};if(u.isAbsoluteUrl(F))K.href=F;else if(!A||I||"a"===r.type&&!("href"in r.props)){let e=void 0!==S?S:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&m.getDomainLocale(F,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);K.href=t||g.addBasePath(h.addLocale(F,e,null==R?void 0:R.defaultLocale))}return A?s.default.cloneElement(r,K):s.default.createElement("a",Object.assign({},N,K),n)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,u=l||!s,[h,c]=r.useState(!1),d=r.useRef(null),f=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(s){if(u||h)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:i,elements:s}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:s,elements:i},o.push(n),a.set(n,t),t}(n);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),a.delete(r);let e=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!h){let e=i.requestIdleCallback(()=>c(!0));return()=>i.cancelIdleCallback(e)}},[u,n,t,h,d.current]);let m=r.useCallback(()=>{c(!1)},[]);return[f,h,m]};var r=n(7294),i=n(29);let s="function"==typeof IntersectionObserver,a=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8406:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=n(4111),s=n.n(i),a=n(1664),o=n.n(a);let l=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("header",{className:"".concat(s()["header-cus"]," navbar navbar-expand-lg fixed-top   shadow-effect   "),children:(0,r.jsx)("div",{className:"container col-md-5  justify-content-center",children:(0,r.jsx)("div",{className:"site-logo text-white",children:"Deepak"})})})})});t.Z=l},5674:function(e,t,n){"use strict";var r=n(5893),i=n(7294),s=n(991),a=n.n(s),o=n(1481),l=n(1664),u=n.n(l);let h=()=>{let[e,t]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=async()=>{let e=await o.db.collection("categories").get(),n=e.docs.map(e=>({id:e.id,...e.data()}));t(n)};e()},[]),(0,r.jsx)("nav",{className:" ".concat(a()["nav-cus"]," navbar navbar-expand-lg fixed-top"),children:(0,r.jsx)("div",{className:"navbar-collapse justify-content-center",style:{overflowX:"auto"},children:(0,r.jsx)("ul",{className:"".concat(a()["navbar-nav"]," navbar-nav d-flex flex-row"),style:{height:"50px",fontSize:"18px"},children:e.map(e=>(0,r.jsx)("li",{className:"nav-item ml-3",children:(0,r.jsx)(u(),{href:"/category/".concat(e.id),className:"".concat(a()["nav-link"]," nav-link"),children:e.category})},e.id))})})})};t.Z=h},1481:function(e,t,n){"use strict";n.d(t,{db:function(){return i}});var r=n(4866);n(9418),r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyD5kqeM0e5vx40utinqT5pjnUB31t-oBQ4",authDomain:"dk-blog-7fd0a.firebaseapp.com",projectId:"dk-blog-7fd0a",storageBucket:"dk-blog-7fd0a.appspot.com",messagingSenderId:"503359642278",appId:"1:503359642278:web:397bf2e5bd7b46f723f267"});let i=r.Z.firestore()},6394:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893);n(4494),n(7952);var i=n(5674),s=n(8406);let a=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("main",{children:t})]})};function o(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(a,{children:(0,r.jsx)(t,{...n})})}},4494:function(){},7952:function(){},4111:function(e){e.exports={"header-cus":"headerStyle_header-cus__zqmIv","site-logo":"headerStyle_site-logo__JiIkP","header-text-box":"headerStyle_header-text-box__lhYjT","search-icon-color":"headerStyle_search-icon-color__v0u5I","subscribe-icon":"headerStyle_subscribe-icon__UmU4V"}},991:function(e){e.exports={"nav-cus":"navbarStyle_nav-cus__PdJO6","nav-link":"navbarStyle_nav-link__kqrhE","nav-item":"navbarStyle_nav-item__bXBF5"}},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],u=!1,h=-1;function c(){u&&r&&(u=!1,r.length?l=r.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=o(c);u=!0;for(var t=l.length;t;){for(r=l,l=[];++h<t;)r&&r[h].run();h=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},1664:function(e,t,n){e.exports=n(5569)},8180:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4444),i=n(740),s=n(5816),a=n(3333);/**
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
 */class o{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate)))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();let r=this._delegate.container.getProvider(e);return r.isInitialized()||(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)!=="EXPLICIT"||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let l=new r.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),u=/**
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
 */function e(){let t=/**
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
 */function(e){let t={},n={__esModule:!0,initializeApp:function(i,a={}){let o=s.initializeApp(i,a);if((0,r.r3)(t,o.name))return t[o.name];let l=new e(o,n);return t[o.name]=l,l},app:i,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:function(t){let a=t.name,o=a.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){let s=(e=i())=>{if("function"!=typeof e[o])throw l.create("invalid-app-argument",{appName:a});return e[o]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[o]=s,e.prototype[o]=function(...e){let n=this._getService.bind(this,a);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:s}};function i(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,n}(o);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,r.ZB)(t,e)},createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),t}(),h=new a.Yd("@firebase/app-compat");/**
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
 */if((0,r.jU)()&&void 0!==self.firebase){h.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}let c=u;(0,s.registerVersion)("@firebase/app-compat","0.2.7",void 0)},5816:function(e,t,n){"use strict";let r,i;n.r(t),n.d(t,{FirebaseError:function(){return l.ZR},SDK_VERSION:function(){return V},_DEFAULT_ENTRY_NAME:function(){return x},_addComponent:function(){return N},_addOrOverwriteComponent:function(){return k},_apps:function(){return C},_clearComponents:function(){return M},_components:function(){return A},_getProvider:function(){return O},_registerComponent:function(){return R},_removeServiceInstance:function(){return L},deleteApp:function(){return j},getApp:function(){return U},getApps:function(){return q},initializeApp:function(){return B},onLog:function(){return $},registerVersion:function(){return z},setLogLevel:function(){return K}});var s,a=n(740),o=n(3333),l=n(4444);let u=(e,t)=>t.some(t=>e instanceof t),h=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,m=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(p(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),m.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),p(h.get(this))}:function(...e){return p(t.apply(y(this),e))}:function(e,...n){let r=t.call(y(this),e,...n);return d.set(r,e.sort?e.sort():[e]),p(r)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}(t),u(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return n!==e&&(f.set(e,n),m.set(n,e)),n}let y=e=>m.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function I(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(b.get(t))return b.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return b.set(t,s),s}g={...s=g,get:(e,t,n)=>I(e,t)||s.get(e,t,n),has:(e,t)=>!!I(e,t)||s.has(e,t)};/**
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
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let _="@firebase/app",T="0.9.7",S=new o.Yd("@firebase/app"),x="[DEFAULT]",D={[_]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},C=new Map,A=new Map;function N(e,t){try{e.container.addComponent(t)}catch(n){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function k(e,t){e.container.addOrOverwriteComponent(t)}function R(e){let t=e.name;if(A.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(A.set(t,e),C.values()))N(n,e);return!0}function O(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function L(e,t,n=x){O(e,t).clearInstance(n)}function M(){A.clear()}let P=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class F{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})}}/**
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
 */let V="9.19.1";function B(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:x,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw P.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw P.create("no-options");let s=C.get(i);if(s){if((0,l.vZ)(n,s.options)&&(0,l.vZ)(r,s.config))return s;throw P.create("duplicate-app",{appName:i})}let o=new a.H0(i);for(let e of A.values())o.addComponent(e);let u=new F(n,r,o);return C.set(i,u),u}function U(e=x){let t=C.get(e);if(!t&&e===x)return B();if(!t)throw P.create("no-app",{appName:e});return t}function q(){return Array.from(C.values())}async function j(e){let t=e.name;C.has(t)&&(C.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function z(e,t,n){var r;let i=null!==(r=D[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(e.join(" "));return}R(new a.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function $(e,t){if(null!==e&&"function"!=typeof e)throw P.create("invalid-log-argument");(0,o.Am)(e,t)}function K(e){(0,o.Ub)(e)}let G="firebase-heartbeat-store",Q=null;function H(){return Q||(Q=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=p(a);return r&&a.addEventListener("upgradeneeded",e=>{r(p(a.result),e.oldVersion,e.newVersion,p(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(G)}}).catch(e=>{throw P.create("idb-open",{originalErrorMessage:e.message})})),Q}async function W(e){try{let t=await H();return t.transaction(G).objectStore(G).get(X(e))}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=P.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}async function Y(e,t){try{let n=await H(),r=n.transaction(G,"readwrite"),i=r.objectStore(G);return await i.put(t,X(e)),r.done}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=P.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function X(e){return`${e.name}!${e.options.appId}`}class Z{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ee(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=J();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=J(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),et(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),et(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function J(){let e=new Date;return e.toISOString().substring(0,10)}class ee{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await W(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return Y(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return Y(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function et(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}R(new a.wA("platform-logger",e=>new E(e),"PRIVATE")),R(new a.wA("heartbeat",e=>new Z(e),"PRIVATE")),z(_,T,""),z(_,T,"esm2017"),z("fire-js","")},740:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let s="[DEFAULT]";/**
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Am:function(){return d},Ub:function(){return c},Yd:function(){return h},in:function(){return r}});/**
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
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function c(e){s.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let n of s){let i=null;t&&t.level&&(i=a[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...s)=>{let a=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:a,args:s,type:t.name})}}}},4866:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(8180);/**
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
 */r.Z.registerVersion("firebase","9.19.1","app-compat")},9418:function(e,t,n){"use strict";var r,i,s,a,o,l,u,h,c,d=n(8180),f=n(5816),m=n(740),g=n(3333),p=n(4444),y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},v={},w=w||{},b=y||self;function I(){}function E(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function _(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function T(e,t,n){return e.call.apply(e.bind,arguments)}function S(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function x(e,t,n){return(x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?T:S).apply(null,arguments)}function D(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function A(){this.s=this.s,this.o=this.o}A.prototype.s=!1,A.prototype.na=function(){this.s||(this.s=!0,this.M())},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let N=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function k(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function R(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(E(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{b.addEventListener("test",I,t),b.removeEventListener("test",I,t)}catch(e){}return e}();function M(e){return/^[\s\xa0]*$/.test(e)}var P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function F(e,t){return e<t?-1:e>t?1:0}function V(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function B(e){return -1!=V().indexOf(e)}function U(e){return U[" "](e),e}U[" "]=I;var q=B("Opera"),j=B("Trident")||B("MSIE"),z=B("Edge"),$=z||j,K=B("Gecko")&&!(-1!=V().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),G=-1!=V().toLowerCase().indexOf("webkit")&&!B("Edge");function Q(){var e=b.document;return e?e.documentMode:void 0}e:{var H,W="",Y=(H=V(),K?/rv:([^\);]+)(\)|;)/.exec(H):z?/Edge\/([\d\.]+)/.exec(H):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(H):G?/WebKit\/(\S+)/.exec(H):q?/(?:Version)[ \/]?(\S+)/.exec(H):void 0);if(Y&&(W=Y?Y[1]:""),j){var X=Q();if(null!=X&&X>parseFloat(W)){s=String(X);break e}}s=W}var Z={},J=b.document&&j&&(Q()||parseInt(s,10))||void 0;function ee(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(K){e:{try{U(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:et[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.X.h.call(this)}}C(ee,O);var et={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),er=0;function ei(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++er,this.ba=this.ea=!1}function es(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ea(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function eo(e){let t={};for(let n in e)t[n]=e[n];return t}let el="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eu(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<el.length;t++)n=el[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function eh(e){this.src=e,this.g={},this.h=0}function ec(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=N(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(es(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ed(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}eh.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ed(e,t,r,i);return -1<a?(t=e[a],n||(t.ea=!1)):((t=new ei(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var ef="closure_lm_"+(1e6*Math.random()|0),em={};function eg(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=_(i)?!!i.capture:!!i,o=ew(e);if(o||(e[ef]=o=new eh(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return ev.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ey(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ep(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[en])ec(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ey(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ew(t))?(ec(n,e),0==n.h&&(n.src=null,t[ef]=null)):es(e)}}}function ey(e){return e in em?em[e]:em[e]="on"+e}function ev(e,t){if(e.ba)e=!0;else{t=new ee(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&ep(e),e=n.call(r,t)}return e}function ew(e){return(e=e[ef])instanceof eh?e:null}var eb="__closure_events_fn_"+(1e9*Math.random()>>>0);function eI(e){return"function"==typeof e?e:(e[eb]||(e[eb]=function(t){return e.handleEvent(t)}),e[eb])}function eE(){A.call(this),this.i=new eh(this),this.P=this,this.I=null}function e_(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;eu(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=eT(a,r,!0,t)&&i}if(i=eT(a=t.g=e,r,!0,t)&&i,i=eT(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=eT(a=t.g=n[s],r,!1,t)&&i}function eT(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.ea&&ec(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}C(eE,A),eE.prototype[en]=!0,eE.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=_(i)?!!i.capture:!!i,r=eI(r),t&&t[en])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ed(a=t.g[n],r,i,s))&&(es(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ew(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ed(n,r,i,s)),(r=-1<t?n[t]:null)&&ep(r))}(this,e,t,n,r)},eE.prototype.M=function(){if(eE.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)es(n[r]);delete t.g[e],t.h--}}this.I=null},eE.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eE.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var eS=b.JSON.stringify,ex=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eD,e=>e.reset());class eD{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function eC(e,t){var n;o||(n=b.Promise.resolve(void 0),o=function(){n.then(ek)}),eA||(o(),eA=!0),eN.add(e,t)}var eA=!1,eN=new class{constructor(){this.h=this.g=null}add(e,t){let n=ex.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function ek(){let e;for(;e=null,(t=eN).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),n=e;){try{n.h.call(n.g)}catch(e){!function(e){b.setTimeout(()=>{throw e},0)}(e)}var t,n,r=ex;r.j(n),100>r.h&&(r.h++,n.next=r.g,r.g=n)}eA=!1}function eR(e,t){eE.call(this),this.h=e||1,this.g=t||b,this.j=x(this.lb,this),this.l=Date.now()}function eO(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function eL(e,t,n){if("function"==typeof e)n&&(e=x(e,n));else if(e&&"function"==typeof e.handleEvent)e=x(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}C(eR,eE),(c=eR.prototype).ca=!1,c.R=null,c.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),e_(this,"tick"),this.ca&&(eO(this),this.start()))}},c.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){eR.X.M.call(this),eO(this),delete this.g};class eM extends A{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eL(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eP(e){A.call(this),this.h=e,this.g={}}C(eP,A);var eF=[];function eV(e,t,n,r){Array.isArray(n)||(n&&(eF[0]=n.toString()),n=eF);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=eI(r),t&&t[en]?t.O(n,r,_(i)?!!i.capture:!!i,s):eg(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=eI(r),t&&t[en]?t.N(n,r,_(i)?!!i.capture:!!i,s):eg(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eB(e){ea(e.g,function(e,t){this.g.hasOwnProperty(t)&&ep(e)},e),e.g={}}function eU(){this.g=!0}function eq(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return eS(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eP.prototype.M=function(){eP.X.M.call(this),eB(this)},eP.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eU.prototype.Aa=function(){this.g=!1},eU.prototype.info=function(){};var ej={},ez=null;function e$(){return ez=ez||new eE}function eK(e){O.call(this,ej.Pa,e)}function eG(e){let t=e$();e_(t,new eK(t))}function eQ(e,t){O.call(this,ej.STAT_EVENT,e),this.stat=t}function eH(e){let t=e$();e_(t,new eQ(t,e))}function eW(e,t){O.call(this,ej.Qa,e),this.size=t}function eY(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}ej.Pa="serverreachability",C(eK,O),ej.STAT_EVENT="statevent",C(eQ,O),ej.Qa="timingevent",C(eW,O);var eX={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},eZ={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function eJ(){}function e0(e){return e.h||(e.h=e.i())}function e1(){}eJ.prototype.h=null;var e2={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function e4(){O.call(this,"d")}function e3(){O.call(this,"c")}function e6(){}function e5(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new eP(this),this.O=e9,e=$?125:void 0,this.T=new eR(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e8}function e8(){this.i=null,this.g="",this.h=!1}C(e4,O),C(e3,O),C(e6,eJ),e6.prototype.g=function(){return new XMLHttpRequest},e6.prototype.i=function(){return{}},l=new e6;var e9=45e3,e7={},te={};function tt(e,t,n){e.K=1,e.v=tw(tm(t)),e.s=n,e.P=!0,tn(e,null)}function tn(e,t){e.F=Date.now(),ts(e),e.A=tm(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),tR(n.i,"t",r),e.C=0,n=e.l.H,e.h=new e8,e.g=nI(e.l,n?t:null,!e.s),0<e.N&&(e.L=new eM(x(e.La,e,e.g),e.N)),eV(e.S,e.g,"readystatechange",e.ib),t=e.H?eo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),eG(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.U,e.s)}function tr(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function ti(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if((i=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?te:isNaN(n=Number(t.substring(n,r)))?e7:(r+=1)+n>t.length?te:(t=t.substr(r,n),e.C=r+n,t)}(e,n))==te){4==t&&(e.o=4,eH(14),r=!1),eq(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e7){e.o=4,eH(15),eq(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else eq(e.j,e.m,i,null),th(e,i);tr(e)&&i!=te&&i!=e7&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eH(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nf(t),t.K=!0,eH(11))):(eq(e.j,e.m,n,"[Invalid Chunked Response]"),tu(e),tl(e))}function ts(e){e.V=Date.now()+e.O,ta(e,e.O)}function ta(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eY(x(e.gb,e),t)}function to(e){e.B&&(b.clearTimeout(e.B),e.B=null)}function tl(e){0==e.l.G||e.I||np(e.l,e)}function tu(e){to(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,eO(e.T),eB(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function th(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||tB(n.h,e))){if(!e.J&&tB(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)ng(n),ns(n);else break e}nd(n),eH(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=eY(x(n.cb,n),6e3));if(1>=tV(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else nv(n,11)}else if((e.J||n.g==e)&&ng(n),!M(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.I=o[1],n.ka=o[2];let t=o[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));let i=o[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tU(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,tv(r.F,r.D,e))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(r=n).sa=nb(r,r.H?r.ka:null,r.V),e.J){tq(r.h,e);var a=r.J;a&&e.setTimeout(a),e.B&&(to(e),ts(e)),r.g=e}else nc(r);0<n.i.length&&no(n)}else"stop"!=o[0]&&"close"!=o[0]||nv(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nv(n,7):ni(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}}eG(4)}catch(e){}}function tc(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(E(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(E(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(E(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(c=e5.prototype).setTimeout=function(e){this.O=e},c.ib=function(e){e=e.target;let t=this.L;t&&3==t9(e)?t.l():this.La(e)},c.La=function(e){try{if(e==this.g)e:{let h=t9(this.g);var t=this.g.Ea();let c=this.g.aa();if(!(3>h)&&(3!=h||$||this.g&&(this.h.h||this.g.fa()||t7(this.g)))){this.I||4!=h||7==t||(8==t||0>=c?eG(3):eG(2)),to(this);var n=this.g.aa();this.Y=n;t:if(tr(this)){var r=t7(this.g);e="";var i=r.length,s=4==t9(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){tu(this),tl(this);var a="";break t}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(o)){var u=o;break t}}u=null}if(n=u)eq(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,th(this,n);else{this.i=!1,this.o=3,eH(12),tu(this),tl(this);break e}}this.P?(ti(this,h,a),$&&this.i&&3==h&&(eV(this.S,this.T,"tick",this.hb),this.T.start())):(eq(this.j,this.m,a,null),th(this,a)),4==h&&tu(this),this.i&&!this.I&&(4==h?np(this.l,this):(this.i=!1,ts(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,eH(12)):(this.o=0,eH(13)),tu(this),tl(this)}}}catch(e){}finally{}},c.hb=function(){if(this.g){var e=t9(this.g),t=this.g.fa();this.C<t.length&&(to(this),ti(this,e,t),this.i&&4!=e&&ts(this))}},c.cancel=function(){this.I=!0,tu(this)},c.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(eG(),eH(17)),tu(this),this.o=2,tl(this)):ta(this,this.V-e)};var td=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tf){this.h=void 0!==t?t:e.h,tg(this,e.j),this.s=e.s,this.g=e.g,tp(this,e.m),this.l=e.l,t=e.i;var n=new tC;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ty(this,n),this.o=e.o}else e&&(n=String(e).match(td))?(this.h=!!t,tg(this,n[1]||"",!0),this.s=tb(n[2]||""),this.g=tb(n[3]||"",!0),tp(this,n[4]),this.l=tb(n[5]||"",!0),ty(this,n[6]||"",!0),this.o=tb(n[7]||"")):(this.h=!!t,this.i=new tC(null,this.h))}function tm(e){return new tf(e)}function tg(e,t,n){e.j=n?tb(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tp(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ty(e,t,n){var r,i;t instanceof tC?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tA(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tN(this,t),tR(this,n,e))},r)),r.j=i):(n||(t=tI(t,tx)),e.i=new tC(t,e.h))}function tv(e,t,n){e.i.set(t,n)}function tw(e){return tv(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tb(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tI(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tE),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tE(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tf.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tI(t,t_,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tI(t,t_,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tI(n,"/"==n.charAt(0)?tS:tT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tI(n,tD)),e.join("")};var t_=/[#\/\?@]/g,tT=/[#\?:]/g,tS=/[#\?]/g,tx=/[#\?@]/g,tD=/#/g;function tC(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tA(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tN(e,t){tA(e),t=tO(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tk(e,t){return tA(e),t=tO(e,t),e.g.has(t)}function tR(e,t,n){tN(e,t),0<n.length&&(e.i=null,e.g.set(tO(e,t),k(n)),e.h+=n.length)}function tO(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(c=tC.prototype).add=function(e,t){tA(this),this.i=null,e=tO(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},c.forEach=function(e,t){tA(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},c.oa=function(){tA(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},c.W=function(e){tA(this);let t=[];if("string"==typeof e)tk(this,e)&&(t=t.concat(this.g.get(tO(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},c.set=function(e,t){return tA(this),this.i=null,tk(this,e=tO(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};var tL=class{constructor(e,t){this.h=e,this.g=t}};function tM(e){this.l=e||tP,e=b.PerformanceNavigationTiming?0<(e=b.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(b.g&&b.g.Ga&&b.g.Ga()&&b.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tP=10;function tF(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tV(e){return e.h?1:e.g?e.g.size:0}function tB(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tU(e,t){e.g?e.g.add(t):e.h=t}function tq(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tj(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function tz(){}function t$(){this.g=new tz}function tK(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tG(e){this.l=e.ac||null,this.j=e.jb||!1}function tQ(e,t){eE.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=tH,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tM.prototype.cancel=function(){if(this.i=tj(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},tz.prototype.stringify=function(e){return b.JSON.stringify(e,void 0)},tz.prototype.parse=function(e){return b.JSON.parse(e,void 0)},C(tG,eJ),tG.prototype.g=function(){return new tQ(this.l,this.j)},tG.prototype.i=(r={},function(){return r}),C(tQ,eE);var tH=0;function tW(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function tY(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tX(e)}function tX(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(c=tQ.prototype).open=function(e,t){if(this.readyState!=tH)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tX(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||b).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tY(this)),this.readyState=tH},c.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tX(this)),this.g&&(this.readyState=3,tX(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==b.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tW(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},c.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tY(this):tX(this),3==this.readyState&&tW(this)}},c.Va=function(e){this.g&&(this.response=this.responseText=e,tY(this))},c.Ua=function(e){this.g&&(this.response=e,tY(this))},c.ga=function(){this.g&&tY(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tQ.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tZ=b.JSON.parse;function tJ(e){eE.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=t0,this.K=this.L=!1}C(tJ,eE);var t0="",t1=/^https?$/i,t2=["POST","PUT"];function t4(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t3(e),t5(e)}function t3(e){e.D||(e.D=!0,e_(e,"complete"),e_(e,"error"))}function t6(e){if(e.h&&void 0!==w&&(!e.C[1]||4!=t9(e)||2!=e.aa())){if(e.v&&4==t9(e))eL(e.Ha,0,e);else if(e_(e,"readystatechange"),4==t9(e)){e.h=!1;try{let o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break e;default:r=!1}if(!(t=r)){if(n=0===o){var i=String(e.H).match(td)[1]||null;if(!i&&b.self&&b.self.location){var s=b.self.location.protocol;i=s.substr(0,s.length-1)}n=!t1.test(i?i.toLowerCase():"")}t=n}if(t)e_(e,"complete"),e_(e,"success");else{e.m=6;try{var a=2<t9(e)?e.g.statusText:""}catch(e){a=""}e.j=a+" ["+e.aa()+"]",t3(e)}}finally{t5(e)}}}}function t5(e,t){if(e.g){t8(e);let n=e.g,r=e.C[0]?I:null;e.g=null,e.C=null,t||e_(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function t8(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}function t9(e){return e.g?e.g.readyState:0}function t7(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case t0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ne(e){let t="";return ea(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function nt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ne(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tv(e,t,n))}function nn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nr(e){this.Ca=0,this.i=[],this.j=new eU,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=nn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=nn("baseRetryDelayMs",5e3,e),this.bb=nn("retryDelaySeedMs",1e4,e),this.$a=nn("forwardChannelMaxRetries",2,e),this.ta=nn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tM(e&&e.concurrentRequestLimit),this.Fa=new t$,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ni(e){if(na(e),3==e.G){var t=e.U++,n=tm(e.F);tv(n,"SID",e.I),tv(n,"RID",t),tv(n,"TYPE","terminate"),nu(e,n),(t=new e5(e,e.j,t,void 0)).K=2,t.v=tw(tm(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(t.v.toString(),"")),!n&&b.Image&&((new Image).src=t.v,n=!0),n||(t.g=nI(t.l,null),t.g.da(t.v)),t.F=Date.now(),ts(t)}nw(e)}function ns(e){e.g&&(nf(e),e.g.cancel(),e.g=null)}function na(e){ns(e),e.u&&(b.clearTimeout(e.u),e.u=null),ng(e),e.h.cancel(),e.m&&("number"==typeof e.m&&b.clearTimeout(e.m),e.m=null)}function no(e){tF(e.h)||e.m||(e.m=!0,eC(e.Ja,e),e.C=0)}function nl(e,t){var n;n=t?t.m:e.U++;let r=tm(e.F);tv(r,"SID",e.I),tv(r,"RID",n),tv(r,"AID",e.T),nu(e,r),e.o&&e.s&&nt(r,e.o,e.s),n=new e5(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=nh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tU(e.h,n),tt(n,r,t)}function nu(e,t){e.ia&&ea(e.ia,function(e,n){tv(t,n,e)}),e.l&&tc({},function(e,n){tv(t,n,e)})}function nh(e,t,n){n=Math.min(e.i.length,n);var r=e.l?x(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].h,o=i[a].g;if(0>(n-=t))t=Math.max(0,i[a].h-100),s=!1;else try{!function(e,t,n){let r=n||"";try{tc(e,function(e,n){let i=e;_(e)&&(i=eS(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nc(e){e.g||e.u||(e.Z=1,eC(e.Ia,e),e.A=0)}function nd(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=eY(x(e.Ia,e),ny(e,e.A)),e.A++,!0)}function nf(e){null!=e.B&&(b.clearTimeout(e.B),e.B=null)}function nm(e){e.g=new e5(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=tm(e.sa);tv(t,"RID","rpc"),tv(t,"SID",e.I),tv(t,"CI",e.L?"0":"1"),tv(t,"AID",e.T),tv(t,"TYPE","xmlhttp"),nu(e,t),e.o&&e.s&&nt(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=tw(tm(t)),n.s=null,n.P=!0,tn(n,e)}function ng(e){null!=e.v&&(b.clearTimeout(e.v),e.v=null)}function np(e,t){var n=null;if(e.g==t){ng(e),nf(e),e.g=null;var r=2}else{if(!tB(e.h,t))return;n=t.D,tq(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,a=e.C;e_(r=e$(),new eW(r,n)),no(e)}else nc(e)}else if(3==(a=t.o)||0==a&&0<e.pa||!(1==r&&(i=e,s=t,!(tV(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Za?0:i.$a))&&(i.m=eY(x(i.Ja,i,s),ny(i,i.C)),i.C++,!0)))||2==r&&nd(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),a){case 1:nv(e,5);break;case 4:nv(e,10);break;case 3:nv(e,6);break;default:nv(e,2)}}}function ny(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function nv(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=x(e.kb,e);n||(n=new tf("//www.google.com/images/cleardot.gif"),b.location&&"http"==b.location.protocol||tg(n,"https"),tw(n)),function(e,t){let n=new eU;if(b.Image){let r=new Image;r.onload=D(tK,n,r,"TestLoadImage: loaded",!0,t),r.onerror=D(tK,n,r,"TestLoadImage: error",!1,t),r.onabort=D(tK,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=D(tK,n,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eH(2);e.G=0,e.l&&e.l.va(t),nw(e),na(e)}function nw(e){if(e.G=0,e.la=[],e.l){let t=tj(e.h);(0!=t.length||0!=e.i.length)&&(R(e.la,t),R(e.la,e.i),e.h.i.length=0,k(e.i),e.i.length=0),e.l.ua()}}function nb(e,t,n){var r=n instanceof tf?tm(n):new tf(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),tp(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tf(null,void 0);r&&tg(s,r),t&&(s.g=t),i&&tp(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&tv(r,n,t),tv(r,"VER",e.ma),nu(e,r),r}function nI(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tJ(n&&e.Da&&!e.ra?new tG({jb:!0}):e.ra)).Ka(e.H),t}function nE(){}function n_(){if(j&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function nT(e,t){eE.call(this),this.g=new nr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!M(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!M(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nD(this)}function nS(e){e4.call(this);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nx(){e3.call(this),this.status=1}function nD(e){this.g=e}(c=tJ.prototype).Ka=function(e){this.L=e},c.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():l.g(),this.C=this.u?e0(this.u):e0(l),this.g.onreadystatechange=x(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){t4(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,a]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=b.FormData&&e instanceof b.FormData,!(0<=N(t2,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var a,o;t8(this),0<this.B&&((this.K=(a=this.g,j&&(o=Z,Object.prototype.hasOwnProperty.call(o,9)?o[9]:o[9]=function(){let e=0,t=P(String(s)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",a=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==i[0].length&&0==a[0].length)break;e=F(0==i[1].length?0:parseInt(i[1],10),0==a[1].length?0:parseInt(a[1],10))||F(0==i[2].length,0==a[2].length)||F(i[2],a[2]),i=i[3],a=a[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=x(this.qa,this)):this.A=eL(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){t4(this,e)}},c.qa=function(){void 0!==w&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,e_(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,e_(this,"complete"),e_(this,"abort"),t5(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t5(this,!0)),tJ.X.M.call(this)},c.Ha=function(){this.s||(this.F||this.v||this.l?t6(this):this.fb())},c.fb=function(){t6(this)},c.aa=function(){try{return 2<t9(this)?this.g.status:-1}catch(e){return -1}},c.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tZ(t)}},c.Ea=function(){return this.m},c.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(c=nr.prototype).ma=8,c.G=1,c.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new e5(this,this.j,e,void 0),s=this.s;if(this.S&&(s?eu(s=eo(s),this.S):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&"string"==typeof(r=r.g.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=nh(this,i,t),tv(n=tm(this.F),"RID",e),tv(n,"CVER",22),this.D&&tv(n,"X-HTTP-Session-Id",this.D),nu(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(ne(s)))+"&"+t:this.o&&nt(n,this.o,s)),tU(this.h,i),this.Ya&&tv(n,"TYPE","init"),this.O?(tv(n,"$req",t),tv(n,"SID","null"),i.Z=!0,tt(i,n,null)):tt(i,n,t),this.G=2}}else 3==this.G&&(e?nl(this,e):0==this.i.length||tF(this.h)||nl(this))}},c.Ia=function(){if(this.u=null,nm(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=eY(x(this.eb,this),e)}},c.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eH(10),ns(this),nm(this))},c.cb=function(){null!=this.v&&(this.v=null,ns(this),nd(this),eH(19))},c.kb=function(e){e?(this.j.info("Successfully pinged google.com"),eH(2)):(this.j.info("Failed to ping google.com"),eH(1))},(c=nE.prototype).xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Ra=function(){},n_.prototype.g=function(e,t){return new nT(e,t)},C(nT,eE),nT.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;eH(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nb(e,null,e.V),no(e)},nT.prototype.close=function(){ni(this.g)},nT.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=eS(e),e=n);t.i.push(new tL(t.ab++,e)),3==t.G&&no(t)},nT.prototype.M=function(){this.g.l=null,delete this.j,ni(this.g),delete this.g,nT.X.M.call(this)},C(nS,e4),C(nx,e3),C(nD,nE),nD.prototype.xa=function(){e_(this.g,"a")},nD.prototype.wa=function(e){e_(this.g,new nS(e))},nD.prototype.va=function(e){e_(this.g,new nx)},nD.prototype.ua=function(){e_(this.g,"b")},n_.prototype.createWebChannel=n_.prototype.g,nT.prototype.send=nT.prototype.u,nT.prototype.open=nT.prototype.m,nT.prototype.close=nT.prototype.close,eX.NO_ERROR=0,eX.TIMEOUT=8,eX.HTTP_ERROR=6,eZ.COMPLETE="complete",e1.EventType=e2,e2.OPEN="a",e2.CLOSE="b",e2.ERROR="c",e2.MESSAGE="d",eE.prototype.listen=eE.prototype.N,tJ.prototype.listenOnce=tJ.prototype.O,tJ.prototype.getLastError=tJ.prototype.Oa,tJ.prototype.getLastErrorCode=tJ.prototype.Ea,tJ.prototype.getStatus=tJ.prototype.aa,tJ.prototype.getResponseJson=tJ.prototype.Sa,tJ.prototype.getResponseText=tJ.prototype.fa,tJ.prototype.send=tJ.prototype.da,tJ.prototype.setWithCredentials=tJ.prototype.Ka;var nC=v.createWebChannelTransport=function(){return new n_},nA=v.getStatEventTarget=function(){return e$()},nN=v.ErrorCode=eX,nk=v.EventType=eZ,nR=v.Event=ej,nO=v.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nL=v.FetchXmlHttpFactory=tG,nM=v.WebChannel=e1,nP=v.XhrIo=tJ,nF=n(3454);let nV="@firebase/firestore";/**
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
 */class nB{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nB.UNAUTHENTICATED=new nB(null),nB.GOOGLE_CREDENTIALS=new nB("google-credentials-uid"),nB.FIRST_PARTY=new nB("first-party-uid"),nB.MOCK_USER=new nB("mock-user");/**
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
 */let nU="9.19.0",nq=new g.Yd("@firebase/firestore");function nj(){return nq.logLevel}function nz(e,...t){if(nq.logLevel<=g.in.DEBUG){let n=t.map(nG);nq.debug(`Firestore (${nU}): ${e}`,...n)}}function n$(e,...t){if(nq.logLevel<=g.in.ERROR){let n=t.map(nG);nq.error(`Firestore (${nU}): ${e}`,...n)}}function nK(e,...t){if(nq.logLevel<=g.in.WARN){let n=t.map(nG);nq.warn(`Firestore (${nU}): ${e}`,...n)}}function nG(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
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
 */function nQ(e="Unexpected state"){let t=`FIRESTORE (${nU}) INTERNAL ASSERTION FAILED: `+e;throw n$(t),Error(t)}/**
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
 */let nH={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nW extends p.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nY{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class nX{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nZ{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nB.UNAUTHENTICATED))}shutdown(){}}class nJ{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class n0{constructor(e){this.t=e,this.currentUser=nB.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nY;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nY,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{nz("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(nz("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nY)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(nz("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nQ(),new nX(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nQ(),new nB(e)}}class n1{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=nB.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class n2{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new n1(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(nB.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n3{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&nz("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.T;return this.T=e.token,nz("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{nz("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?r(e):nz("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||nQ(),this.T=e.token,new n4(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class n6{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function n5(e,t){return e<t?-1:e>t?1:0}function n8(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */class n9{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new nW(nH.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new nW(nH.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n9.fromMillis(Date.now())}static fromDate(e){return n9.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new n9(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?n5(this.nanoseconds,e.nanoseconds):n5(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class n7{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n7(e)}static min(){return new n7(new n9(0,0))}static max(){return new n7(new n9(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class re{constructor(e,t,n){void 0===t?t=0:t>e.length&&nQ(),void 0===n?n=e.length-t:n>e.length-t&&nQ(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===re.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof re?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rt extends re{construct(e,t,n){return new rt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new nW(nH.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new rt(t)}static emptyPath(){return new rt([])}}let rn=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rr extends re{construct(e,t,n){return new rr(e,t,n)}static isValidIdentifier(e){return rn.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rr(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new nW(nH.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new nW(nH.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new nW(nH.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new nW(nH.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rr(t)}static emptyPath(){return new rr([])}}/**
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
 */class ri{constructor(e){this.path=e}static fromPath(e){return new ri(rt.fromString(e))}static fromName(e){return new ri(rt.fromString(e).popFirst(5))}static empty(){return new ri(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rt.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ri(new rt(e.slice()))}}/**
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
 */class rs{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function ra(e){return e.fields.find(e=>2===e.kind)}function ro(e){return e.fields.filter(e=>2!==e.kind)}rs.UNKNOWN_ID=-1;class rl{constructor(e,t){this.fieldPath=e,this.kind=t}}class ru{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ru(0,rd.min())}}function rh(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=n7.fromTimestamp(1e9===r?new n9(n+1,0):new n9(n,r));return new rd(i,ri.empty(),t)}function rc(e){return new rd(e.readTime,e.key,-1)}class rd{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rd(n7.min(),ri.empty(),-1)}static max(){return new rd(n7.max(),ri.empty(),-1)}}function rf(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ri.comparator(e.documentKey,t.documentKey))?n:n5(e.largestBatchId,t.largestBatchId)}/**
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
 */let rm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rp(e){if(e.code!==nH.FAILED_PRECONDITION||e.message!==rm)throw e;nz("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ry{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nQ(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ry((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ry?t:ry.resolve(t)}catch(e){return ry.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ry.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ry.reject(t)}static resolve(e){return new ry((t,n)=>{t(e)})}static reject(e){return new ry((t,n)=>{n(e)})}static waitFor(e){return new ry((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ry.resolve(!1);for(let n of e)t=t.next(e=>e?ry.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ry((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ry((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
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
 */class rv{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new nY,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new rI(e,t.error)):this.R.resolve()},this.transaction.onerror=t=>{let n=rx(t.target.error);this.R.reject(new rI(e,n))}}static open(e,t,n,r){try{return new rv(t,e.transaction(r,n))}catch(e){throw new rI(t,e)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(nz("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new r_(t)}}class rw{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===rw.S((0,p.z$)())&&n$("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return nz("SimpleDb","Removing database:",e),rT(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,p.hl)())return!1;if(rw.C())return!0;let e=(0,p.z$)(),t=rw.S(e),n=rw.N(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==nF&&"YES"===(null===(e=nF.env)||void 0===e?void 0:e.k)}static O(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(nz("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new rI(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new nW(nH.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new nW(nH.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new rI(e,r))},r.onupgradeneeded=e=>{nz("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.V.M(t,r.transaction,e.oldVersion,this.version).next(()=>{nz("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.$(e);let t=rv.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.P(),e)).catch(e=>(t.abort(e),ry.reject(e))).toPromise();return s.catch(()=>{}),await t.v,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(nz("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class rb{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return rT(this.L.delete())}}class rI extends nW{constructor(e,t){super(nH.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rE(e){return"IndexedDbTransactionError"===e.name}class r_{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(nz("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(nz("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),rT(n)}add(e){return nz("SimpleDb","ADD",this.store.name,e,e),rT(this.store.add(e))}get(e){return rT(this.store.get(e)).next(t=>(void 0===t&&(t=null),nz("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return nz("SimpleDb","DELETE",this.store.name,e),rT(this.store.delete(e))}count(){return nz("SimpleDb","COUNT",this.store.name),rT(this.store.count())}j(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new ry((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new ry((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){nz("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.W(r,t)}X(e){let t=this.cursor({});return new ry((n,r)=>{t.onerror=e=>{let t=rx(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){let n=[];return new ry((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new rb(i),a=t(i.primaryKey,i.value,s);if(a instanceof ry){let e=a.catch(e=>(s.done(),ry.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>ry.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function rT(e){return new ry((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=rx(e.target.error);n(t)}})}let rS=!1;function rx(e){let t=rw.S((0,p.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new nW("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rS||(rS=!0,setTimeout(()=>{throw e},0)),e}}return e}class rD{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){nz("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{nz("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){rE(e)?nz("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await rp(e)}await this.et(6e4)})}}class rC{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){let n=new Set,r=t,i=!0;return ry.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return nz("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.rt(r,n)).next(n=>(nz("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}rt(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=rc(t);rf(r,n)>0&&(n=r)}),new rd(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class rA{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function rN(e){return null==e}function rk(e){return 0===e&&1/e==-1/0}function rR(e){return"number"==typeof e&&Number.isInteger(e)&&!rk(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function rO(e){var t,n;let r="";for(let t=0;t<e.length;t++)r.length>0&&(r+="\x01\x01"),r=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(t),r);return r+"\x01\x01"}function rL(e){let t=e.length;if(t>=2||nQ(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||nQ(),rt.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&nQ(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\x00";break;case"\x11":i+=e.substring(s,t+1);break;default:nQ()}s=t+2}return new rt(r)}rA.ct=-1;/**
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
 */let rM=["userId","batchId"],rP={},rF=["prefixPath","collectionGroup","readTime","documentId"],rV=["prefixPath","collectionGroup","documentId"],rB=["collectionGroup","readTime","prefixPath","documentId"],rU=["canonicalId","targetId"],rq=["targetId","path"],rj=["path","targetId"],rz=["collectionId","parent"],r$=["indexId","uid"],rK=["uid","sequenceNumber"],rG=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],rQ=["indexId","uid","orderedDocumentKey"],rH=["userId","collectionPath","documentId"],rW=["userId","collectionPath","largestBatchId"],rY=["userId","collectionGroup","largestBatchId"],rX=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rZ=[...rX,"documentOverlays"],rJ=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],r0=[...rJ,"indexConfiguration","indexState","indexEntries"];/**
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
 */class r1 extends rg{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function r2(e,t){return rw.O(e.at,t)}/**
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
 */function r4(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function r3(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function r6(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class r5{constructor(e,t){this.comparator=e,this.root=t||r9.EMPTY}insert(e,t){return new r5(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,r9.BLACK,null,null))}remove(e){return new r5(this.comparator,this.root.remove(e,this.comparator).copy(null,null,r9.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new r8(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new r8(this.root,e,this.comparator,!1)}getReverseIterator(){return new r8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new r8(this.root,e,this.comparator,!0)}}class r8{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class r9{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:r9.RED,this.left=null!=r?r:r9.EMPTY,this.right=null!=i?i:r9.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new r9(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return r9.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return r9.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r9.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r9.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nQ();let e=this.left.check();if(e!==this.right.check())throw nQ();return e+(this.isRed()?0:1)}}r9.EMPTY=null,r9.RED=!0,r9.BLACK=!1,r9.EMPTY=new class{constructor(){this.size=0}get key(){throw nQ()}get value(){throw nQ()}get color(){throw nQ()}get left(){throw nQ()}get right(){throw nQ()}copy(e,t,n,r,i){return this}insert(e,t,n){return new r9(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class r7{constructor(e){this.comparator=e,this.data=new r5(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ie(this.data.getIterator())}getIteratorFrom(e){return new ie(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof r7)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new r7(this.comparator);return t.data=e,t}}class ie{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function it(e){return e.hasNext()?e.getNext():void 0}/**
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
 */class ir{constructor(e){this.fields=e,e.sort(rr.comparator)}static empty(){return new ir([])}unionWith(e){let t=new r7(rr.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ir(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return n8(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class ii extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class is{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ii("Invalid base64 string: "+e):e}}(e);return new is(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new is(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return n5(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}is.EMPTY_BYTE_STRING=new is("");let ia=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function io(e){if(e||nQ(),"string"==typeof e){let t=0,n=ia.exec(e);if(n||nQ(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:il(e.seconds),nanos:il(e.nanos)}}function il(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function iu(e){return"string"==typeof e?is.fromBase64String(e):is.fromUint8Array(e)}/**
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
 */function ih(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ic(e){let t=io(e.mapValue.fields.__local_write_time__.timestampValue);return new n9(t.seconds,t.nanos)}/**
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
 */class id{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class im{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new im("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof im&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let ig={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ip={nullValue:"NULL_VALUE"};function iy(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ih(e)?4:iN(e)?9007199254740991:10:nQ()}function iv(e,t){if(e===t)return!0;let n=iy(e);if(n!==iy(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ic(e).isEqual(ic(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=io(e.timestampValue),r=io(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return iu(e.bytesValue).isEqual(iu(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return il(e.geoPointValue.latitude)===il(t.geoPointValue.latitude)&&il(e.geoPointValue.longitude)===il(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return il(e.integerValue)===il(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=il(e.doubleValue),r=il(t.doubleValue);return n===r?rk(n)===rk(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return n8(e.arrayValue.values||[],t.arrayValue.values||[],iv);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(r4(n)!==r4(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!iv(n[e],r[e])))return!1;return!0}(e,t);default:return nQ()}}function iw(e,t){return void 0!==(e.values||[]).find(e=>iv(e,t))}function ib(e,t){if(e===t)return 0;let n=iy(e),r=iy(t);if(n!==r)return n5(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return n5(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=il(e.integerValue||e.doubleValue),r=il(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return iI(e.timestampValue,t.timestampValue);case 4:return iI(ic(e),ic(t));case 5:return n5(e.stringValue,t.stringValue);case 6:return function(e,t){let n=iu(e),r=iu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=n5(n[e],r[e]);if(0!==t)return t}return n5(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=n5(il(e.latitude),il(t.latitude));return 0!==n?n:n5(il(e.longitude),il(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ib(n[e],r[e]);if(t)return t}return n5(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ig.mapValue&&t===ig.mapValue)return 0;if(e===ig.mapValue)return 1;if(t===ig.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=n5(r[e],s[e]);if(0!==t)return t;let a=ib(n[r[e]],i[s[e]]);if(0!==a)return a}return n5(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nQ()}}function iI(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return n5(e,t);let n=io(e),r=io(t),i=n5(n.seconds,r.seconds);return 0!==i?i:n5(n.nanos,r.nanos)}function iE(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=io(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?iu(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ri.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=iE(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${iE(e.fields[i])}`;return n+"}"}(e.mapValue):nQ()}function i_(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function iT(e){return!!e&&"integerValue"in e}function iS(e){return!!e&&"arrayValue"in e}function ix(e){return!!e&&"nullValue"in e}function iD(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function iC(e){return!!e&&"mapValue"in e}function iA(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return r3(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=iA(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=iA(e.arrayValue.values[n]);return t}return Object.assign({},e)}function iN(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ik(e,t){let n=ib(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function iR(e,t){let n=ib(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */class iO{constructor(e){this.value=e}static empty(){return new iO({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!iC(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=iA(t)}setAll(e){let t=rr.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=iA(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());iC(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return iv(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];iC(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(r3(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new iO(iA(this.value))}}/**
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
 */class iL{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new iL(e,0,n7.min(),n7.min(),n7.min(),iO.empty(),0)}static newFoundDocument(e,t,n,r){return new iL(e,1,t,n7.min(),n,r,0)}static newNoDocument(e,t){return new iL(e,2,t,n7.min(),n7.min(),iO.empty(),0)}static newUnknownDocument(e,t){return new iL(e,3,t,n7.min(),n7.min(),iO.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(n7.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=iO.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=iO.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=n7.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof iL&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new iL(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class iM{constructor(e,t){this.position=e,this.inclusive=t}}function iP(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?ri.comparator(ri.fromName(a.referenceValue),n.key):ib(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function iF(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!iv(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class iV{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class iB{}class iU extends iB{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new iQ(e,t,n):"array-contains"===t?new iX(e,n):"in"===t?new iZ(e,n):"not-in"===t?new iJ(e,n):"array-contains-any"===t?new i0(e,n):new iU(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new iH(e,n):new iW(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ib(t,this.value)):null!==t&&iy(this.value)===iy(t)&&this.matchesComparison(ib(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nQ()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class iq extends iB{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new iq(e,t)}matches(e){return ij(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function ij(e){return"and"===e.op}function iz(e){return"or"===e.op}function i$(e){return iK(e)&&ij(e)}function iK(e){for(let t of e.filters)if(t instanceof iq)return!1;return!0}function iG(e,t){let n=e.filters.concat(t);return iq.create(n,e.op)}class iQ extends iU{constructor(e,t,n){super(e,t,n),this.key=ri.fromName(n.referenceValue)}matches(e){let t=ri.comparator(e.key,this.key);return this.matchesComparison(t)}}class iH extends iU{constructor(e,t){super(e,"in",t),this.keys=iY("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class iW extends iU{constructor(e,t){super(e,"not-in",t),this.keys=iY("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function iY(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ri.fromName(e.referenceValue))}class iX extends iU{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return iS(t)&&iw(t.arrayValue,this.value)}}class iZ extends iU{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&iw(this.value.arrayValue,t)}}class iJ extends iU{constructor(e,t){super(e,"not-in",t)}matches(e){if(iw(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!iw(this.value.arrayValue,t)}}class i0 extends iU{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!iS(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>iw(this.value.arrayValue,e))}}/**
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
 */class i1{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ft=null}}function i2(e,t=null,n=[],r=[],i=null,s=null,a=null){return new i1(e,t,n,r,i,s,a)}function i4(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof iU)return t.field.canonicalString()+t.op.toString()+iE(t.value);if(i$(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),rN(t.limit)||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>iE(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>iE(e)).join(",")),t.ft=e}return t.ft}function i3(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof iU?n instanceof iU&&t.op===n.op&&t.field.isEqual(n.field)&&iv(t.value,n.value):t instanceof iq?n instanceof iq&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void nQ()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!iF(e.startAt,t.startAt)&&iF(e.endAt,t.endAt)}function i6(e){return ri.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function i5(e,t){return e.filters.filter(e=>e instanceof iU&&e.field.isEqual(t))}function i8(e,t,n){let r=ip,i=!0;for(let n of i5(e,t)){let e=ip,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?ip:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?i_(im.empty(),ri.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:nQ();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=ip}0>ik({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>ik({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function i9(e,t,n){let r=ig,i=!0;for(let n of i5(e,t)){let e=ig,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?i_(im.empty(),ri.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?ig:nQ(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=ig}iR({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];iR({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class i7{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.dt=null,this.wt=null,this.startAt,this.endAt}}function se(e){return new i7(e)}function st(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function sn(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function sr(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function si(e){return null!==e.collectionGroup}function ss(e){let t=e;if(null===t.dt){t.dt=[];let e=sr(t),n=sn(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new iV(e)),t.dt.push(new iV(rr.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new iV(rr.keyField(),e))}}}return t.dt}function sa(e){let t=e;if(!t.wt){if("F"===t.limitType)t.wt=i2(t.path,t.collectionGroup,ss(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of ss(t)){let t="desc"===n.dir?"asc":"desc";e.push(new iV(n.field,t))}let n=t.endAt?new iM(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new iM(t.startAt.position,t.startAt.inclusive):null;t.wt=i2(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}return t.wt}function so(e,t){t.getFirstInequalityField(),sr(e);let n=e.filters.concat([t]);return new i7(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function sl(e,t,n){return new i7(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function su(e,t){return i3(sa(e),sa(t))&&e.limitType===t.limitType}function sh(e){return`${i4(sa(e))}|lt:${e.limitType}`}function sc(e){var t;let n;return`Query(target=${n=(t=sa(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof iU?`${t.field.canonicalString()} ${t.op} ${iE(t.value)}`:t instanceof iq?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),rN(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>iE(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>iE(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function sd(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ri.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of ss(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=iP(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ss(e),t))&&(!e.endAt||!!function(e,t,n){let r=iP(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ss(e),t))}function sf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function sm(e){return(t,n)=>{let r=!1;for(let i of ss(e)){let e=function(e,t,n){let r=e.field.isKeyField()?ri.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ib(r,i):nQ()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nQ()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
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
 */class sg{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){r3(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return r6(this.inner)}size(){return this.innerSize}}/**
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
 */let sp=new r5(ri.comparator),sy=new r5(ri.comparator);function sv(...e){let t=sy;for(let n of e)t=t.insert(n.key,n);return t}function sw(e){let t=sy;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function sb(){return new sg(e=>e.toString(),(e,t)=>e.isEqual(t))}let sI=new r5(ri.comparator),sE=new r7(ri.comparator);function s_(...e){let t=sE;for(let n of e)t=t.add(n);return t}let sT=new r7(n5);/**
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
 */function sS(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rk(t)?"-0":t}}function sx(e){return{integerValue:""+e}}function sD(e,t){return rR(t)?sx(t):sS(e,t)}/**
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
 */class sC{constructor(){this._=void 0}}function sA(e,t){return e instanceof sM?iT(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class sN extends sC{}class sk extends sC{constructor(e){super(),this.elements=e}}function sR(e,t){let n=sF(t);for(let t of e.elements)n.some(e=>iv(e,t))||n.push(t);return{arrayValue:{values:n}}}class sO extends sC{constructor(e){super(),this.elements=e}}function sL(e,t){let n=sF(t);for(let t of e.elements)n=n.filter(e=>!iv(e,t));return{arrayValue:{values:n}}}class sM extends sC{constructor(e,t){super(),this.serializer=e,this._t=t}}function sP(e){return il(e.integerValue||e.doubleValue)}function sF(e){return iS(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class sV{constructor(e,t){this.field=e,this.transform=t}}class sB{constructor(e,t){this.version=e,this.transformResults=t}}class sU{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sU}static exists(e){return new sU(void 0,e)}static updateTime(e){return new sU(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sq(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class sj{}function sz(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sX(e.key,sU.none()):new sG(e.key,e.data,sU.none());{let n=e.data,r=iO.empty(),i=new r7(rr.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new sQ(e.key,r,new ir(i.toArray()),sU.none())}}function s$(e,t,n,r){return e instanceof sG?function(e,t,n,r){if(!sq(e.precondition,t))return n;let i=e.value.clone(),s=sY(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof sQ?function(e,t,n,r){if(!sq(e.precondition,t))return n;let i=sY(e.fieldTransforms,r,t),s=t.data;return(s.setAll(sH(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):sq(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function sK(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&n8(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof sk&&r instanceof sk||n instanceof sO&&r instanceof sO?n8(n.elements,r.elements,iv):n instanceof sM&&r instanceof sM?iv(n._t,r._t):n instanceof sN&&r instanceof sN)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sG extends sj{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sQ extends sj{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sH(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function sW(e,t,n){var r;let i=new Map;e.length===n.length||nQ();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof sk?sR(o,l):o instanceof sO?sL(o,l):r))}return i}function sY(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof sN?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof sk?sR(e,s):e instanceof sO?sL(e,s):function(e,t){let n=sA(e,t),r=sP(n)+sP(e._t);return iT(n)&&iT(e._t)?sx(r):sS(e.serializer,r)}(e,s))}return r}class sX extends sj{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sZ extends sj{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sJ{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof sG?function(e,t,n){let r=e.value.clone(),i=sW(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof sQ?function(e,t,n){if(!sq(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=sW(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(sH(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=s$(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=s$(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=sb();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=sz(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(n7.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),s_())}isEqual(e){return this.batchId===e.batchId&&n8(this.mutations,e.mutations,(e,t)=>sK(e,t))&&n8(this.baseMutations,e.baseMutations,(e,t)=>sK(e,t))}}class s0{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||nQ();let r=sI,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new s0(e,t,n,r)}}/**
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
 */class s1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class s2{constructor(e){this.count=e}}function s4(e){switch(e){default:return nQ();case nH.CANCELLED:case nH.UNKNOWN:case nH.DEADLINE_EXCEEDED:case nH.RESOURCE_EXHAUSTED:case nH.INTERNAL:case nH.UNAVAILABLE:case nH.UNAUTHENTICATED:return!1;case nH.INVALID_ARGUMENT:case nH.NOT_FOUND:case nH.ALREADY_EXISTS:case nH.PERMISSION_DENIED:case nH.FAILED_PRECONDITION:case nH.ABORTED:case nH.OUT_OF_RANGE:case nH.UNIMPLEMENTED:case nH.DATA_LOSS:return!0}}function s3(e){if(void 0===e)return n$("GRPC error has no .code"),nH.UNKNOWN;switch(e){case u.OK:return nH.OK;case u.CANCELLED:return nH.CANCELLED;case u.UNKNOWN:return nH.UNKNOWN;case u.DEADLINE_EXCEEDED:return nH.DEADLINE_EXCEEDED;case u.RESOURCE_EXHAUSTED:return nH.RESOURCE_EXHAUSTED;case u.INTERNAL:return nH.INTERNAL;case u.UNAVAILABLE:return nH.UNAVAILABLE;case u.UNAUTHENTICATED:return nH.UNAUTHENTICATED;case u.INVALID_ARGUMENT:return nH.INVALID_ARGUMENT;case u.NOT_FOUND:return nH.NOT_FOUND;case u.ALREADY_EXISTS:return nH.ALREADY_EXISTS;case u.PERMISSION_DENIED:return nH.PERMISSION_DENIED;case u.FAILED_PRECONDITION:return nH.FAILED_PRECONDITION;case u.ABORTED:return nH.ABORTED;case u.OUT_OF_RANGE:return nH.OUT_OF_RANGE;case u.UNIMPLEMENTED:return nH.UNIMPLEMENTED;case u.DATA_LOSS:return nH.DATA_LOSS;default:return nQ()}}(h=u||(u={}))[h.OK=0]="OK",h[h.CANCELLED=1]="CANCELLED",h[h.UNKNOWN=2]="UNKNOWN",h[h.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",h[h.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",h[h.NOT_FOUND=5]="NOT_FOUND",h[h.ALREADY_EXISTS=6]="ALREADY_EXISTS",h[h.PERMISSION_DENIED=7]="PERMISSION_DENIED",h[h.UNAUTHENTICATED=16]="UNAUTHENTICATED",h[h.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",h[h.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",h[h.ABORTED=10]="ABORTED",h[h.OUT_OF_RANGE=11]="OUT_OF_RANGE",h[h.UNIMPLEMENTED=12]="UNIMPLEMENTED",h[h.INTERNAL=13]="INTERNAL",h[h.UNAVAILABLE=14]="UNAVAILABLE",h[h.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class s6{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return s5}static getOrCreateInstance(){return null===s5&&(s5=new s6),s5}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let s5=null;/**
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
 */class s8{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,s9.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new s8(n7.min(),r,sT,sp,s_())}}class s9{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new s9(n,t,s_(),s_(),s_())}}/**
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
 */class s7{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class ae{constructor(e,t){this.targetId=e,this.Et=t}}class at{constructor(e,t,n=is.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class an{constructor(){this.At=0,this.Rt=as(),this.vt=is.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=s_(),t=s_(),n=s_();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nQ()}}),new s9(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=as()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ar{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=sp,this.qt=ai(),this.Ut=new r7(n5)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{let n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:nQ()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.Wt(n)&&t(n)})}Jt(e){var t;let n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){let s=i.target;if(i6(s)){if(0===r){let e=new ri(s.path);this.Qt(n,e,iL.newNoDocument(e,n7.min()))}else 1===r||nQ()}else{let i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=s6.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){let t=new Map;this.Bt.forEach((n,r)=>{let i=this.Yt(r);if(i){if(n.current&&i6(i.target)){let t=new ri(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,iL.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}});let n=s_();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));let r=new s8(e,t,this.Ut,this.Lt,n);return this.Lt=sp,this.qt=ai(),this.Ut=new r7(n5),r}Gt(e,t){if(!this.Wt(e))return;let n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;let r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){let t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new an,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new r7(n5),this.qt=this.qt.insert(e,t)),t}Wt(e){let t=null!==this.Yt(e);return t||nz("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new an),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function ai(){return new r5(ri.comparator)}function as(){return new r5(ri.comparator)}/**
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
 */let aa={asc:"ASCENDING",desc:"DESCENDING"},ao={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},al={and:"AND",or:"OR"};class au{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ah(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ac(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ad(e){return e||nQ(),n7.fromTimestamp(function(e){let t=io(e);return new n9(t.seconds,t.nanos)}(e))}function af(e,t){return new rt(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function am(e){let t=rt.fromString(e);return aN(t)||nQ(),t}function ag(e,t){return af(e.databaseId,t.path)}function ap(e,t){let n=am(t);if(n.get(1)!==e.databaseId.projectId)throw new nW(nH.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nW(nH.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ri(ab(n))}function ay(e,t){return af(e.databaseId,t)}function av(e){let t=am(e);return 4===t.length?rt.emptyPath():ab(t)}function aw(e){return new rt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ab(e){return e.length>4&&"documents"===e.get(4)||nQ(),e.popFirst(5)}function aI(e,t,n){return{name:ag(e,t),fields:n.value.mapValue.fields}}function aE(e,t,n){let r=ap(e,t.name),i=ad(t.updateTime),s=t.createTime?ad(t.createTime):n7.min(),a=new iO({mapValue:{fields:t.fields}}),o=iL.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function a_(e,t){var n;let r;if(t instanceof sG)r={update:aI(e,t.key,t.value)};else if(t instanceof sX)r={delete:ag(e,t.key)};else if(t instanceof sQ)r={update:aI(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sZ))return nQ();r={verify:ag(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof sN)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sk)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof sO)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sM)return{fieldPath:t.field.canonicalString(),increment:n._t};throw nQ()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:ah(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:nQ()),r}function aT(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?sU.updateTime(ad(n.updateTime)):void 0!==n.exists?sU.exists(n.exists):sU.none():sU.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||nQ(),n=new sN;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];n=new sk(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];n=new sO(e)}else"increment"in t?n=new sM(e,t.increment):nQ();let r=rr.fromServerFormat(t.fieldPath);return new sV(r,n)})(e,t)):[];if(t.update){t.update.name;let n=ap(e,t.update.name),s=new iO({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new ir(t.map(e=>rr.fromServerFormat(e)))}(t.updateMask);return new sQ(n,s,e,r,i)}return new sG(n,s,r,i)}if(t.delete){let n=ap(e,t.delete);return new sX(n,r)}if(t.verify){let n=ap(e,t.verify);return new sZ(n,r)}return nQ()}function aS(e,t){return{documents:[ay(e,t.path)]}}function ax(e,t){var n,r,i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s.parent=ay(e,a),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=ay(e,a.popLast()),s.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof iU?function(e){if("=="===e.op){if(iD(e.value))return{unaryFilter:{field:aC(e.field),op:"IS_NAN"}};if(ix(e.value))return{unaryFilter:{field:aC(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(iD(e.value))return{unaryFilter:{field:aC(e.field),op:"IS_NOT_NAN"}};if(ix(e.value))return{unaryFilter:{field:aC(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:aC(e.field),op:ao[e.op],value:e.value}}}(t):t instanceof iq?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:al[t.op],filters:n}}}(t):nQ()}(iq.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:aC(e.field),direction:aa[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=(r=t.limit,e.useProto3Json||rN(r)?r:{value:r});return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}function aD(e){var t,n,r,i,s,a,o,l;let u,h=av(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||nQ();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=aA(e.unaryFilter.field);return iU.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=aA(e.unaryFilter.field);return iU.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=aA(e.unaryFilter.field);return iU.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=aA(e.unaryFilter.field);return iU.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nQ()}}(t):void 0!==t.fieldFilter?iU.create(aA(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nQ()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?iq.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return nQ()}}(t.compositeFilter.op)):nQ()}(e);return t instanceof iq&&i$(t)?t.getFilters():[t]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new iV(aA(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=rN(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new iM(n,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new iM(n,t)}(c.endAt)),n=h,r=f,i=g,s=m,a=p,o=y,l=v,new i7(n,r,i,s,a,"F",o,l)}function aC(e){return{fieldPath:e.canonicalString()}}function aA(e){return rr.fromServerFormat(e.fieldPath)}function aN(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class ak{constructor(e,t,n,r,i=n7.min(),s=n7.min(),a=is.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new ak(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ak(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ak(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class aR{constructor(e){this.se=e}}function aO(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:aL(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:ag(i=e.se,t.key),fields:t.data.value.mapValue.fields,updateTime:ah(i,t.version.toTimestamp()),createTime:ah(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:aM(t.version)};else{if(!t.isUnknownDocument())return nQ();r.unknownDocument={path:n.path.toArray(),version:aM(t.version)}}return r}function aL(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function aM(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function aP(e){let t=new n9(e.seconds,e.nanoseconds);return n7.fromTimestamp(t)}function aF(e,t){let n=(t.baseMutations||[]).map(t=>aT(e.se,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>aT(e.se,t)),i=n9.fromMillis(t.localWriteTimeMs);return new sJ(t.batchId,i,n,r)}function aV(e){var t;let n;let r=aP(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?aP(e.lastLimboFreeSnapshotVersion):n7.min();return void 0!==e.query.documents?(1===(t=e.query).documents.length||nQ(),n=sa(se(av(t.documents[0])))):n=sa(aD(e.query)),new ak(n,e.targetId,0,e.lastListenSequenceNumber,r,i,is.fromBase64String(e.resumeToken))}function aB(e,t){let n;let r=aM(t.snapshotVersion),i=aM(t.lastLimboFreeSnapshotVersion);n=i6(t.target)?aS(e.se,t.target):ax(e.se,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:i4(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function aU(e){let t=aD({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?sl(t,t.limit,"L"):t}function aq(e,t){return new s1(t.largestBatchId,aT(e.se,t.overlayMutation))}function aj(e,t){let n=t.path.lastSegment();return[e,rO(t.path.popLast()),n]}function az(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:aM(r.readTime),documentKey:rO(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class a${getBundleMetadata(e,t){return aK(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:aP(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return aK(e).put({bundleId:t.id,createTime:aM(ad(t.createTime)),version:t.version})}getNamedQuery(e,t){return aG(e).get(t).next(e=>{if(e)return{name:e.name,query:aU(e.bundledQuery),readTime:aP(e.readTime)}})}saveNamedQuery(e,t){return aG(e).put({name:t.name,readTime:aM(ad(t.readTime)),bundledQuery:t.bundledQuery})}}function aK(e){return r2(e,"bundles")}function aG(e){return r2(e,"namedQueries")}/**
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
 */class aQ{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){let n=t.uid||"";return new aQ(e,n)}getOverlay(e,t){return aH(e).get(aj(this.userId,t)).next(e=>e?aq(this.serializer,e):null)}getOverlays(e,t){let n=sb();return ry.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new s1(t,i);r.push(this.re(e,s))}),ry.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(rO(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(aH(e).J("collectionPathOverlayIndex",r))}),ry.waitFor(i)}getOverlaysForCollection(e,t,n){let r=sb(),i=rO(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return aH(e).j("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=aq(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=sb(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return aH(e).Z({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=aq(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}re(e,t){return aH(e).put(function(e,t,n){let[r,i,s]=aj(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:a_(e.se,n.mutation)}}(this.serializer,this.userId,t))}}function aH(e){return r2(e,"documentOverlays")}/**
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
 */class aW{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(il(e.integerValue));else if("doubleValue"in e){let n=il(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),rk(n)?t.he(0):t.he(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(iu(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?iN(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):nQ()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){let n=e.fields||{};for(let e of(this.ae(t,55),Object.keys(n)))this.fe(e,t),this.ue(n[e],t)}ge(e,t){let n=e.values||[];for(let e of(this.ae(t,50),n))this.ue(e,t)}_e(e,t){this.ae(t,37),ri.fromName(e).path.forEach(e=>{this.ae(t,60),this.ye(e,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}function aY(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}aW.pe=new aW;class aX{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Te(n.value),n=t.next();this.Ee()}Ae(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Re(n.value),n=t.next();this.ve()}be(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Te(e);else if(e<2048)this.Te(960|e>>>6),this.Te(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Te(480|e>>>12),this.Te(128|63&e>>>6),this.Te(128|63&e);else{let e=t.codePointAt(0);this.Te(240|e>>>18),this.Te(128|63&e>>>12),this.Te(128|63&e>>>6),this.Te(128|63&e)}}this.Ee()}Pe(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Re(e);else if(e<2048)this.Re(960|e>>>6),this.Re(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Re(480|e>>>12),this.Re(128|63&e>>>6),this.Re(128|63&e);else{let e=t.codePointAt(0);this.Re(240|e>>>18),this.Re(128|63&e>>>12),this.Re(128|63&e>>>6),this.Re(128|63&e)}}this.ve()}Ve(e){let t=this.Se(e),n=aY(t);this.De(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Ce(e){let t=this.Se(e),n=aY(t);this.De(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Te(e){let t=255&e;0===t?(this.Ne(0),this.Ne(255)):255===t?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){let t=255&e;0===t?(this.Oe(0),this.Oe(255)):255===t?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class aZ{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class aJ{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class a0{constructor(){this.Me=new aX,this.Fe=new aZ(this.Me),this.Be=new aJ(this.Me)}seed(e){this.Me.seed(e)}Le(e){return 0===e?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
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
 */class a1{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}qe(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new a1(this.indexId,this.documentKey,this.arrayValue,n)}}function a2(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=a4(e.arrayValue,t.arrayValue))?n:0!==(n=a4(e.directionalValue,t.directionalValue))?n:ri.comparator(e.documentKey,t.documentKey)}function a4(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */class a3{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[],e.filters)){let e=t;e.isInequality()?this.Ge=e:this.Ke.push(e)}}Qe(e){e.collectionGroup===this.collectionId||nQ();let t=ra(e);if(void 0!==t&&!this.ze(t))return!1;let n=ro(e),r=0,i=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ge){let e=n[r];if(!this.je(this.Ge,e)||!this.We(this.Ue[i++],e))return!1;++r}for(;r<n.length;++r){let e=n[r];if(i>=this.Ue.length||!this.We(this.Ue[i++],e))return!1}return!0}ze(e){for(let t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function a6(e){return e instanceof iU}function a5(e){return e instanceof iq&&i$(e)}function a8(e){return a6(e)||a5(e)||function(e){if(e instanceof iq&&iz(e)){for(let t of e.getFilters())if(!a6(t)&&!a5(t))return!1;return!0}return!1}(e)}function a9(e,t){return e instanceof iU||e instanceof iq||nQ(),t instanceof iU||t instanceof iq||nQ(),oe(e instanceof iU?t instanceof iU?iq.create([e,t],"and"):a7(e,t):t instanceof iU?a7(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||nQ(),ij(e)&&ij(t))return iG(e,t.getFilters());let n=iz(e)?e:t,r=iz(e)?t:e,i=n.filters.map(e=>a9(e,r));return iq.create(i,"or")}(e,t))}function a7(e,t){if(ij(t))return iG(t,e.getFilters());{let n=t.filters.map(t=>a9(e,t));return iq.create(n,"or")}}function oe(e){if(e instanceof iU||e instanceof iq||nQ(),e instanceof iU)return e;let t=e.getFilters();if(1===t.length)return oe(t[0]);if(iK(e))return e;let n=t.map(e=>oe(e)),r=[];return n.forEach(t=>{t instanceof iU?r.push(t):t instanceof iq&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:iq.create(r,e.op)}/**
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
 */class ot{constructor(){this.He=new on}addToCollectionParentIndex(e,t){return this.He.add(t),ry.resolve()}getCollectionParents(e,t){return ry.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return ry.resolve()}deleteFieldIndex(e,t){return ry.resolve()}getDocumentsMatchingTarget(e,t){return ry.resolve(null)}getIndexType(e,t){return ry.resolve(0)}getFieldIndexes(e,t){return ry.resolve([])}getNextCollectionGroupToUpdate(e){return ry.resolve(null)}getMinOffset(e,t){return ry.resolve(rd.min())}getMinOffsetFromCollectionGroup(e,t){return ry.resolve(rd.min())}updateCollectionGroup(e,t,n){return ry.resolve()}updateIndexEntries(e,t){return ry.resolve()}}class on{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new r7(rt.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new r7(rt.comparator)).toArray()}}/**
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
 */let or=new Uint8Array(0);class oi{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new on,this.Ye=new sg(e=>i4(e),(e,t)=>i3(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});let i={collectionId:n,parent:rO(r)};return os(e).put(i)}return ry.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return os(e).j(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(rL(r.parent))}return n})}addFieldIndex(e,t){let n=oo(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=ol(e);return i.next(e=>{n.put(az(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=oo(e),r=ol(e),i=oa(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=oa(e),r=!0,i=new Map;return ry.forEach(this.Ze(t),t=>this.Xe(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=s_(),r=[];return ry.forEach(i,(i,s)=>{nz("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${i4(t)}`);let a=function(e,t){let n=ra(t);if(void 0===n)return null;for(let t of i5(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of ro(t))for(let t of i5(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of ro(t)){let t=0===i.kind?i8(e,i.fieldPath,e.startAt):i9(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new iM(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of ro(t)){let t=0===i.kind?i9(e,i.fieldPath,e.endAt):i8(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new iM(n,r)}(s,i),h=this.tn(i,s,l),c=this.tn(i,s,u),d=this.en(i,s,o),f=this.nn(i.indexId,a,h,l.inclusive,c,u.inclusive,d);return ry.forEach(f,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{let n=ri.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return ry.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof iU||t instanceof iq||nQ(),t instanceof iU)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=iq.create(n,t.op);return a8(r=oe(r))?r:(r instanceof iq||nQ(),ij(r)||nQ(),r.filters.length>1||nQ(),r.filters.reduce((e,t)=>a9(e,t)))}(/**
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
 */function e(t){var n,r;if(t instanceof iU||t instanceof iq||nQ(),t instanceof iU){if(t instanceof iZ){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>iU.create(t.field,"==",e)))||[];return iq.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return iq.create(i,t.op)}(e));return a8(t)||nQ(),a6(t)||a5(t)?[t]:t.getFilters()})(iq.create(e.filters,"and")).map(t=>i2(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t)),t}nn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let h=0;h<o;++h){let o=t?this.sn(t[h/l]):or,c=this.rn(e,o,n[h%l],r),d=this.on(e,o,i[h%l],s),f=a.map(t=>this.rn(e,o,t,!0));u.push(...this.createRange(c,d,f))}return u}rn(e,t,n,r){let i=new a1(e,ri.empty(),t,n);return r?i:i.qe()}on(e,t,n,r){let i=new a1(e,ri.empty(),t,n);return r?i.qe():i}Xe(e,t){let n=new a3(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.Qe(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.Ze(t);return ry.forEach(r,t=>this.Xe(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new r7(rr.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}un(e,t){let n=new a0;for(let r of ro(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.Le(r.kind);aW.pe.oe(e,i)}return n.$e()}sn(e){let t=new a0;return aW.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){let n=new a0;return aW.pe.oe(i_(this.databaseId,t),n.Le(function(e){let t=ro(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}en(e,t,n){if(null===n)return[];let r=[];r.push(new a0);let i=0;for(let s of ro(e)){let e=n[i++];for(let n of r)if(this.an(t,s.fieldPath)&&iS(e))r=this.hn(r,s,e);else{let t=n.Le(s.kind);aW.pe.oe(e,t)}}return this.ln(r)}tn(e,t,n){return this.en(e,t,n.position)}ln(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}hn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new a0;r.seed(n.$e()),aW.pe.oe(e,r.Le(t.kind)),i.push(r)}return i}an(e,t){return!!e.filters.find(e=>e instanceof iU&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=oo(e),r=ol(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next(e=>{let t=[];return ry.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new ru(t.sequenceNumber,new rd(aP(t.readTime),new ri(rL(t.documentKey)),t.largestBatchId)):ru.empty(),r=e.fields.map(([e,t])=>new rl(rr.fromServerFormat(e),t));return new rs(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:n5(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=oo(e),i=ol(e);return this.fn(e).next(e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>ry.forEach(t,t=>i.put(az(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return ry.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?ry.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),ry.forEach(i,n=>this.dn(e,t,n).next(t=>{let i=this.wn(r,n);return t.isEqual(i)?ry.resolve():this._n(e,r,n,t,i)}))))})}mn(e,t,n,r){return oa(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.cn(n,t.key),documentKey:t.key.path.toArray()})}gn(e,t,n,r){return oa(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.cn(n,t.key),t.key.path.toArray()])}dn(e,t,n){let r=oa(e),i=new r7(a2);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.cn(n,t)])},(e,r)=>{i=i.add(new a1(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}wn(e,t){let n=new r7(a2),r=this.un(t,e);if(null==r)return n;let i=ra(t);if(null!=i){let s=e.data.field(i.fieldPath);if(iS(s))for(let i of s.arrayValue.values||[])n=n.add(new a1(t.indexId,e.key,this.sn(i),r))}else n=n.add(new a1(t.indexId,e.key,or,r));return n}_n(e,t,n,r,i){nz("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=it(s),l=it(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=it(a)):t?(i(o),o=it(s)):(o=it(s),l=it(a))}}(r,i,a2,r=>{s.push(this.mn(e,t,n,r))},r=>{s.push(this.gn(e,t,n,r))}),ry.waitFor(s)}fn(e){let t=1;return ol(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>a2(e,t)).filter((e,t,n)=>!t||0!==a2(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=a2(i,e),s=a2(i,t);if(0===n)r[0]=e.qe();else if(n>0&&s<0)r.push(i),r.push(i.qe());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.yn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,or,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,or,[]];i.push(IDBKeyRange.bound(t,n))}return i}yn(e,t){return a2(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ou)}getMinOffset(e,t){return ry.mapArray(this.Ze(t),t=>this.Xe(e,t).next(e=>e||nQ())).next(ou)}}function os(e){return r2(e,"collectionParents")}function oa(e){return r2(e,"indexEntries")}function oo(e){return r2(e,"indexConfiguration")}function ol(e){return r2(e,"indexState")}function ou(e){0!==e.length||nQ();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>rf(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new rd(t.readTime,t.documentKey,n)}/**
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
 */let oh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class oc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new oc(e,oc.DEFAULT_COLLECTION_PERCENTILE,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function od(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.Z({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||nQ()}));let u=[];for(let e of n.mutations){var h,c;let r=(h=e.key.path,c=n.batchId,[t,rO(h),c]);s.push(i.delete(r)),u.push(e.key)}return ry.waitFor(s).next(()=>u)}function of(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw nQ();t=e.noDocument}return JSON.stringify(t).length}/**
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
 */oc.DEFAULT_COLLECTION_PERCENTILE=10,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oc.DEFAULT=new oc(41943040,oc.DEFAULT_COLLECTION_PERCENTILE,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oc.DISABLED=new oc(-1,0,0);class om{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.pn={}}static ie(e,t,n,r){""!==e.uid||nQ();let i=e.isAuthenticated()?e.uid:"";return new om(i,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return op(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=oy(e),s=op(e);return s.add({}).next(a=>{"number"==typeof a||nQ();let o=new sJ(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>a_(e.se,t)),i=n.mutations.map(t=>a_(e.se,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],h=new r7((e,t)=>n5(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,rO(e.key.path),a];h=h.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,rP))}return h.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.pn[a]=o.keys()}),ry.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return op(e).get(t).next(e=>e?(e.userId===this.userId||nQ(),aF(this.serializer,e)):null)}In(e,t){return this.pn[t]?ry.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.pn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return op(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||nQ(),i=aF(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return op(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return op(e).j("userMutationsIndex",t).next(e=>e.map(e=>aF(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,rO(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return oy(e).Z({range:r},(n,r,s)=>{let[a,o,l]=n,u=rL(o);if(a===this.userId&&t.path.isEqual(u))return op(e).get(l).next(e=>{if(!e)throw nQ();e.userId===this.userId||nQ(),i.push(aF(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new r7(n5),r=[];return t.forEach(t=>{let i=[this.userId,rO(t.path)],s=IDBKeyRange.lowerBound(i),a=oy(e).Z({range:s},(e,r,i)=>{let[s,a,o]=e,l=rL(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),ry.waitFor(r).next(()=>this.Tn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,rO(n)],s=IDBKeyRange.lowerBound(i),a=new r7(n5);return oy(e).Z({range:s},(e,t,i)=>{let[s,o,l]=e,u=rL(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.Tn(e,a))}Tn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(op(e).get(t).next(e=>{if(null===e)throw nQ();e.userId===this.userId||nQ(),n.push(aF(this.serializer,e))}))}),ry.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return od(e.at,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),ry.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ry.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return oy(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=rL(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||nQ()})})}containsKey(e,t){return og(e,this.userId,t)}An(e){return ov(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function og(e,t,n){let r=[t,rO(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return oy(e).Z({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function op(e){return r2(e,"mutations")}function oy(e){return r2(e,"documentMutations")}function ov(e){return r2(e,"mutationQueues")}/**
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
 */class ow{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ow(0)}static bn(){return new ow(-1)}}/**
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
 */class ob{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{let n=new ow(t.highestTargetId);return t.highestTargetId=n.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(e=>n7.fromTimestamp(new n9(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Pn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Vn(e,r)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(n=>(n.targetCount+=1,this.Dn(t,n),this.Vn(e,n))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>oI(e).delete(t.targetId)).next(()=>this.Pn(e)).next(t=>(t.targetCount>0||nQ(),t.targetCount-=1,this.Vn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return oI(e).Z((s,a)=>{let o=aV(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>ry.waitFor(i)).next(()=>r)}forEachTarget(e,t){return oI(e).Z((e,n)=>{let r=aV(n);t(r)})}Pn(e){return oE(e).get("targetGlobalKey").next(e=>(null!==e||nQ(),e))}Vn(e,t){return oE(e).put("targetGlobalKey",t)}Sn(e,t){return oI(e).put(aB(this.serializer,t))}Dn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Pn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=i4(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return oI(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=aV(n);i3(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=o_(e);return t.forEach(t=>{let s=rO(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),ry.waitFor(r)}removeMatchingKeys(e,t,n){let r=o_(e);return ry.forEach(t,t=>{let i=rO(t.path);return ry.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=o_(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=o_(e),i=s_();return r.Z({range:n,Y:!0},(e,t,n)=>{let r=rL(e[1]),s=new ri(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=rO(t.path),r=IDBKeyRange.bound([n],[n+"\x00"],!1,!0),i=0;return o_(e).Z({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}ne(e,t){return oI(e).get(t).next(e=>e?aV(e):null)}}function oI(e){return r2(e,"targets")}function oE(e){return r2(e,"targetGlobal")}function o_(e){return r2(e,"targetDocuments")}/**
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
 */function oT([e,t],[n,r]){let i=n5(e,n);return 0===i?n5(t,r):i}class oS{constructor(e){this.Cn=e,this.buffer=new r7(oT),this.xn=0}Nn(){return++this.xn}kn(e){let t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>oT(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ox{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.On=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}$n(e){nz("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){rE(e)?nz("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await rp(e)}await this.$n(3e5)})}}class oD{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ry.resolve(rA.ct);let n=new oS(t);return this.Mn.forEachTarget(e,e=>n.kn(e.sequenceNumber)).next(()=>this.Mn.Bn(e,e=>n.kn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Mn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(nz("LruGarbageCollector","Garbage collection skipped; disabled"),ry.resolve(oh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(nz("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oh):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let n,r,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(nz("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),nj()<=g.in.DEBUG&&nz("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),ry.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class oC{constructor(e,t){this.db=e,this.garbageCollector=new oD(this,t)}Fn(e){let t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}qn(e){let t=0;return this.Bn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(e,n)=>t(n))}addReference(e,t,n){return oA(e,n)}removeReference(e,t,n){return oA(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return oA(e,t)}Kn(e,t){let n;return n=!1,ov(e).X(r=>og(e,r,t).next(e=>(e&&(n=!0),ry.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Un(e,(s,a)=>{if(a<=t){let t=this.Kn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,n7.min()),o_(e).delete([0,rO(s.path)])))});r.push(t)}}).next(()=>ry.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return oA(e,t)}Un(e,t){let n=o_(e),r,i=rA.ct;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==rA.ct&&t(new ri(rL(r)),i),i=a,r=s):i=rA.ct}).next(()=>{i!==rA.ct&&t(new ri(rL(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function oA(e,t){var n;return o_(e).put((n=e.currentSequenceNumber,{targetId:0,path:rO(t.path),sequenceNumber:n}))}/**
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
 */class oN{constructor(){this.changes=new sg(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,iL.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ry.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ok{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return oL(e).put(n)}removeEntry(e,t,n){return oL(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],aL(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Gn(e,n)))}getEntry(e,t){let n=iL.newInvalidDocument(t);return oL(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(oM(t))},(e,r)=>{n=this.Qn(t,r)}).next(()=>n)}zn(e,t){let n={size:0,document:iL.newInvalidDocument(t)};return oL(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(oM(t))},(e,r)=>{n={document:this.Qn(t,r),size:of(r)}}).next(()=>n)}getEntries(e,t){let n=sp;return this.jn(e,t,(e,t)=>{let r=this.Qn(e,t);n=n.insert(e,r)}).next(()=>n)}Wn(e,t){let n=sp,r=new r5(ri.comparator);return this.jn(e,t,(e,t)=>{let i=this.Qn(e,t);n=n.insert(e,i),r=r.insert(e,of(t))}).next(()=>({documents:n,Hn:r}))}jn(e,t,n){if(t.isEmpty())return ry.resolve();let r=new r7(oF);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(oM(r.first()),oM(r.last())),s=r.getIterator(),a=s.getNext();return oL(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=ri.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>oF(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.G(oM(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){let i=t.path,s=[i.popLast().toArray(),i.lastSegment(),aL(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return oL(e).j(IDBKeyRange.bound(s,a,!0)).next(e=>{let n=sp;for(let i of e){let e=this.Qn(ri.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(sd(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=sp,s=oP(t,n),a=oP(t,rd.max());return oL(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.Qn(ri.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new oR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return oO(e).get("remoteDocumentGlobalKey").next(e=>(e||nQ(),e))}Gn(e,t){return oO(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){let e=function(e,t){let n;if(t.document)n=aE(e.se,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=ri.fromSegments(t.noDocument.path),r=aP(t.noDocument.readTime);n=iL.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return nQ();{let e=ri.fromSegments(t.unknownDocument.path),r=aP(t.unknownDocument.version);n=iL.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new n9(e[0],e[1]);return n7.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(n7.min())))return e}return iL.newInvalidDocument(e)}}class oR extends oN{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new sg(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new r7((e,t)=>n5(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.Yn.get(i);if(t.push(this.Jn.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=aO(this.Jn.serializer,s);r=r.add(i.path.popLast());let l=of(o);n+=l-a.size,t.push(this.Jn.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=aO(this.Jn.serializer,s.convertToNoDocument(n7.min()));t.push(this.Jn.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Jn.updateMetadata(e,n)),ry.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(e=>(this.Yn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:e,Hn:t})=>(t.forEach((t,n)=>{this.Yn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function oO(e){return r2(e,"remoteDocumentGlobal")}function oL(e){return r2(e,"remoteDocumentsV14")}function oM(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function oP(e,t){let n=t.documentKey.path.toArray();return[e,aL(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function oF(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=n5(n[e],r[e]))return i;return(i=n5(n.length,r.length))||(i=n5(n[n.length-2],r[r.length-2]))||n5(n[n.length-1],r[r.length-1])}/**
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
 */class oV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class oB{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&s$(n.mutation,e,ir.empty(),n9.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,s_()).next(()=>t))}getLocalViewOfDocuments(e,t,n=s_()){let r=sb();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=sv();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=sb();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,s_()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=sp,s=sb(),a=sb();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof sQ)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),s$(a.mutation,t,a.mutation.getFieldMask(),n9.now())):s.set(t.key,ir.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new oV(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=sb(),r=new r5((e,t)=>e-t),i=s_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ir.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||s_()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=sb();l.forEach(e=>{if(!i.has(e)){let r=sz(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return ry.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return ri.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):si(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ry.resolve(sb()),a=-1,o=i;return s.next(t=>ry.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ry.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,s_())).next(e=>({batchId:a,changes:sw(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ri(t)).next(e=>{let t=sv();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=sv();return this.indexManager.getCollectionParents(e,r).next(s=>ry.forEach(s,s=>{var a;let o=(a=s.child(r),new i7(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,iL.newInvalidDocument(r)))});let n=sv();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&s$(s.mutation,i,ir.empty(),n9.now()),sd(t,i)&&(n=n.insert(e,i))}),n})}}/**
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
 */class oU{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return ry.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:ad(t.createTime)}),ry.resolve()}getNamedQuery(e,t){return ry.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:t.name,query:aU(t.bundledQuery),readTime:ad(t.readTime)}),ry.resolve()}}/**
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
 */class oq{constructor(){this.overlays=new r5(ri.comparator),this.ts=new Map}getOverlay(e,t){return ry.resolve(this.overlays.get(t))}getOverlays(e,t){let n=sb();return ry.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.re(e,t,r)}),ry.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.ts.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ts.delete(n)),ry.resolve()}getOverlaysForCollection(e,t,n){let r=sb(),i=t.length+1,s=new ri(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ry.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new r5((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=sb(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=sb(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return ry.resolve(a)}re(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new s1(t,n));let i=this.ts.get(t);void 0===i&&(i=s_(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}}/**
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
 */class oj{constructor(){this.es=new r7(oz.ns),this.ss=new r7(oz.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){let n=new oz(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.us(new oz(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}hs(e){let t=new ri(new rt([])),n=new oz(t,e),r=new oz(t,e+1),i=[];return this.ss.forEachInRange([n,r],e=>{this.us(e),i.push(e.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){let t=new ri(new rt([])),n=new oz(t,e),r=new oz(t,e+1),i=s_();return this.ss.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new oz(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class oz{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return ri.comparator(e.key,t.key)||n5(e.ds,t.ds)}static rs(e,t){return n5(e.ds,t.ds)||ri.comparator(e.key,t.key)}}/**
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
 */class o${constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new r7(oz.ns)}checkEmpty(e){return ry.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sJ(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this._s=this._s.add(new oz(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ry.resolve(s)}lookupMutationBatch(e,t){return ry.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ys(t+1),r=n<0?0:n;return ry.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ry.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return ry.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new oz(t,0),r=new oz(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],e=>{let t=this.gs(e.ds);i.push(t)}),ry.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new r7(n5);return t.forEach(e=>{let t=new oz(e,0),r=new oz(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],e=>{n=n.add(e.ds)})}),ry.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;ri.isDocumentKey(i)||(i=i.child(""));let s=new oz(new ri(i),0),a=new r7(n5);return this._s.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.ds)),!0)},s),ry.resolve(this.ps(a))}ps(e){let t=[];return e.forEach(e=>{let n=this.gs(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Is(t.batchId,"removed")||nQ(),this.mutationQueue.shift();let n=this._s;return ry.forEach(t.mutations,r=>{let i=new oz(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=n})}En(e){}containsKey(e,t){let n=new oz(t,0),r=this._s.firstAfterOrEqual(n);return ry.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ry.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){let t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class oK{constructor(e){this.Ts=e,this.docs=new r5(ri.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ry.resolve(n?n.document.mutableCopy():iL.newInvalidDocument(t))}getEntries(e,t){let n=sp;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():iL.newInvalidDocument(e))}),ry.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=sp,s=t.path,a=new ri(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=rf(rc(a),n)||(r.has(a.key)||sd(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ry.resolve(i)}getAllFromCollectionGroup(e,t,n,r){nQ()}Es(e,t){return ry.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new oG(this)}getSize(e){return ry.resolve(this.size)}}class oG extends oN{constructor(e){super(),this.Jn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)}),ry.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class oQ{constructor(e){this.persistence=e,this.As=new sg(e=>i4(e),i3),this.lastRemoteSnapshotVersion=n7.min(),this.highestTargetId=0,this.Rs=0,this.vs=new oj,this.targetCount=0,this.bs=ow.vn()}forEachTarget(e,t){return this.As.forEach((e,n)=>t(n)),ry.resolve()}getLastRemoteSnapshotVersion(e){return ry.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ry.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),ry.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),ry.resolve()}Sn(e){this.As.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.bs=new ow(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,ry.resolve()}updateTargetData(e,t){return this.Sn(t),ry.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,ry.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.As.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ry.waitFor(i).next(()=>r)}getTargetCount(e){return ry.resolve(this.targetCount)}getTargetData(e,t){let n=this.As.get(t)||null;return ry.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),ry.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ry.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),ry.resolve()}getMatchingKeysForTargetId(e,t){let n=this.vs.fs(t);return ry.resolve(n)}containsKey(e,t){return ry.resolve(this.vs.containsKey(t))}}/**
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
 */class oH{constructor(e,t){var n;this.Ps={},this.overlays={},this.Vs=new rA(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new oQ(this),this.indexManager=new ot,this.remoteDocumentCache=(n=e=>this.referenceDelegate.Cs(e),new oK(n)),this.serializer=new aR(t),this.xs=new oU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oq,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new o$(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){nz("MemoryPersistence","Starting transaction:",e);let r=new oW(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next(e=>this.referenceDelegate.ks(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Os(e,t){return ry.or(Object.values(this.Ps).map(n=>()=>n.containsKey(e,t)))}}class oW extends rg{constructor(e){super(),this.currentSequenceNumber=e}}class oY{constructor(e){this.persistence=e,this.$s=new oj,this.Ms=null}static Fs(e){return new oY(e)}get Bs(){if(this.Ms)return this.Ms;throw nQ()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),ry.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),ry.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),ry.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(e=>this.Bs.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Bs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ry.forEach(this.Bs,n=>{let r=ri.fromPath(n);return this.Ls(e,r).next(e=>{e||t.removeEntry(r,n7.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return ry.or([()=>ry.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
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
 */class oX{constructor(e){this.serializer=e}M(e,t,n,r){let i=new rv("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rM,{unique:!0}),e.createObjectStore("documentMutations"),oZ(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=ry.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),oZ(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:n7.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").j().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rM,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return ry.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.qs(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Us(i)))),n<7&&r>=7&&(s=s.next(()=>this.Ks(i))),n<8&&r>=8&&(s=s.next(()=>this.Gs(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.Qs(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:rH});t.createIndex("collectionPathOverlayIndex",rW,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",rY,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:rF});t.createIndex("documentKeyIndex",rV),t.createIndex("collectionGroupIndex",rB)})(e)).next(()=>this.zs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.js(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:r$}).createIndex("sequenceNumberIndex",rK,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:rG}).createIndex("documentKeyIndex",rQ,{unique:!1})})),s}Us(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=of(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}qs(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next(t=>ry.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next(n=>ry.forEach(n,n=>{n.userId===t.userId||nQ();let r=aF(this.serializer,n);return od(e,t.userId,r).next(()=>{})}))}))}Ks(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Z((n,i)=>{let s=new rt(n),a=[0,rO(s)];r.push(t.get(a).next(n=>n?ry.resolve():t.put({targetId:0,path:rO(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>ry.waitFor(r))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:rz});let n=t.store("collectionParents"),r=new on,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:rO(r)})}};return t.store("remoteDocuments").Z({Y:!0},(e,t)=>{let n=new rt(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([e,t,n],r)=>{let s=rL(t);return i(s.popLast())}))}Qs(e){let t=e.store("targets");return t.Z((e,n)=>{let r=aV(n),i=aB(this.serializer,r);return t.put(i)})}zs(e,t){let n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new ri(rt.fromString(n.document.name).popFirst(5)):n.noDocument?ri.fromSegments(n.noDocument.path):n.unknownDocument?ri.fromSegments(n.unknownDocument.path):nQ()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>ry.waitFor(r))}js(e,t){var n;let r=t.store("mutations"),i=(n=this.serializer,new ok(n)),s=new oH(oY.Fs,this.serializer.se);return r.j().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:s_();aF(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),ry.forEach(n,(e,n)=>{let r=new nB(n),a=aQ.ie(this.serializer,r),o=s.getIndexManager(r),l=om.ie(r,this.serializer,o,s.referenceDelegate);return new oB(i,l,a,o).recalculateAndSaveOverlaysForDocumentKeys(new r1(t,rA.ct),e).next()})})}}function oZ(e){e.createObjectStore("targetDocuments",{keyPath:rq}).createIndex("documentTargetsIndex",rj,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",rU,{unique:!0}),e.createObjectStore("targetGlobal")}let oJ="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class o0{constructor(e,t,n,r,i,s,a,o,l,u,h=15){var c;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ws=i,this.window=s,this.document=a,this.Hs=l,this.Js=u,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=e=>Promise.resolve(),!o0.D())throw new nW(nH.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new oC(this,r),this.si=t+"main",this.serializer=new aR(o),this.ii=new rw(this.si,this.Ys,new oX(this.serializer)),this.Ds=new ob(this.referenceDelegate,this.serializer),this.remoteDocumentCache=(c=this.serializer,new ok(c)),this.xs=new a$,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,!1===u&&n$("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new nW(nH.FAILED_PRECONDITION,oJ);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new rA(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>o2(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(e=>{e||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(rE(e))return nz("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return nz("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return o1(e).get("owner").next(e=>ry.resolve(this._i(e)))}mi(e){return o2(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=r2(e,"clientMetadata");return t.j().next(e=>{let n=this.pi(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return ry.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.ri)for(let t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?ry.resolve(!0):o1(e).get("owner").next(t=>{if(null!==t&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new nW(nH.FAILED_PRECONDITION,oJ);return!1}}return!(!this.networkEnabled||!this.inForeground)||o2(e).j().next(e=>void 0===this.pi(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&nz("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new r1(e,rA.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(e=>this.yi(e.updateTimeMs,t)&&!this.Ti(e.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>o2(e).j().next(e=>this.pi(e,18e5).map(e=>e.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return om.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new oi(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return aQ.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,n){var r;let i;nz("IndexedDbPersistence","Starting transaction:",e);let s=15===(r=this.Ys)?r0:14===r?rJ:13===r?rJ:12===r?rZ:11===r?rX:void nQ();return this.ii.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new r1(r,this.Vs?this.Vs.next():rA.ct),"readwrite-primary"===t?this.li(i).next(e=>!!e||this.fi(i)).next(t=>{if(!t)throw n$(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new nW(nH.FAILED_PRECONDITION,rm);return n(i)}).next(e=>this.wi(i).next(()=>e)):this.Pi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Pi(e){return o1(e).get("owner").next(e=>{if(null!==e&&this.yi(e.leaseTimestampMs,5e3)&&!this.Ti(e.ownerId)&&!this._i(e)&&!(this.Js||this.allowTabSynchronization&&e.allowTabSynchronization))throw new nW(nH.FAILED_PRECONDITION,oJ)})}wi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return o1(e).put("owner",t)}static D(){return rw.D()}di(e){let t=o1(e);return t.get("owner").next(e=>this._i(e)?(nz("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):ry.resolve())}yi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(n$(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ui(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground="visible"===this.document.visibilityState)}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ei();let e=/(?:Version|Mobile)\/1[456]/;(0,p.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{let n=null!==(null===(t=this.ri)||void 0===t?void 0:t.getItem(this.Ii(e)));return nz("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return n$("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){n$("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch(e){}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function o1(e){return r2(e,"owner")}function o2(e){return r2(e,"clientMetadata")}function o4(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
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
 */class o3{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}static Di(e,t){let n=s_(),r=s_();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new o3(e,t.fromCache,n,r)}}/**
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
 */class o6{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next(i=>i||this.ki(e,t,r,n)).next(n=>n||this.Oi(e,t))}Ni(e,t){if(st(t))return ry.resolve(null);let n=sa(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=sa(t=sl(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=s_(...r);return this.xi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.$i(t,r);return this.Mi(t,s,i,n.readTime)?this.Ni(e,sl(t,null,"F")):this.Fi(e,s,t,n)}))})))}ki(e,t,n,r){return st(t)||r.isEqual(n7.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next(i=>{let s=this.$i(t,i);return this.Mi(t,s,n,r)?this.Oi(e,t):(nj()<=g.in.DEBUG&&nz("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),sc(t)),this.Fi(e,s,t,rh(r,-1)))})}$i(e,t){let n=new r7(sm(e));return t.forEach((t,r)=>{sd(e,r)&&(n=n.add(r))}),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return nj()<=g.in.DEBUG&&nz("QueryEngine","Using full collection scan to execute query:",sc(t)),this.xi.getDocumentsMatchingQuery(e,t,rd.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class o5{constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new r5(n5),this.qi=new sg(e=>i4(e),i3),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oB(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}async function o8(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Gi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=s_();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Qi:e,removedBatchIds:i,addedBatchIds:s}))})})}function o9(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function o7(e,t,n){let r=s_(),i=s_();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=sp;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(n7.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):nz("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{zi:r,ji:i}})}function le(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Ds.getTargetData(e,t).next(i=>i?(r=i,ry.resolve(r)):n.Ds.allocateTargetId(e).next(i=>(r=new ak(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e})}async function lt(e,t,n){let r=e,i=r.Li.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!rE(e))throw e;nz("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Li=r.Li.remove(t),r.qi.delete(i.target)}function ln(e,t,n){let r=n7.min(),i=s_();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.qi.get(n);return void 0!==r?ry.resolve(e.Li.get(r)):e.Ds.getTargetData(t,n)})(e,s,sa(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ds.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Bi.getDocumentsMatchingQuery(s,t,n?r:n7.min(),n?i:s_())).next(n=>(ls(e,sf(t),n),{documents:n,Wi:i})))}function lr(e,t){let n=e.Ds,r=e.Li.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.ne(e,t).next(e=>e?e.target:null))}function li(e,t){let n=e.Ui.get(t)||n7.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.Ki.getAllFromCollectionGroup(r,t,rh(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(ls(e,t,n),n))}function ls(e,t,n){let r=e.Ui.get(t)||n7.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ui.set(t,r)}async function la(e,t,n,r){let i=s_(),s=sp;for(let e of n){let n=t.Hi(e.metadata.name);e.document&&(i=i.add(n));let r=t.Ji(e);r.setReadTime(t.Yi(e.metadata.readTime)),s=s.insert(n,r)}let a=e.Ki.newChangeBuffer({trackRemovals:!0}),o=await le(e,sa(se(rt.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>o7(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.Ds.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Ds.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.zi,n.ji)).next(()=>n.zi)))}async function lo(e,t,n=s_()){let r=await le(e,sa(aU(t.bundledQuery))),i=e;return i.persistence.runTransaction("Save named query","readwrite",e=>{let s=ad(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.xs.saveNamedQuery(e,t);let a=r.withResumeToken(is.EMPTY_BYTE_STRING,s);return i.Li=i.Li.insert(a.targetId,a),i.Ds.updateTargetData(e,a).next(()=>i.Ds.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Ds.addMatchingKeys(e,n,r.targetId)).next(()=>i.xs.saveNamedQuery(e,t))})}function ll(e,t){return`firestore_clients_${e}_${t}`}function lu(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function lh(e,t){return`firestore_targets_${e}_${t}`}class lc{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new nW(r.error.code,r.error.message)),s?new lc(e,t,r.state,i):(n$("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Xi(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ld{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new nW(n.error.code,n.error.message)),i?new ld(e,n.state,r):(n$("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lf{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=sT;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=rR(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new lf(e,i):(n$("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class lm{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new lm(t.clientId,t.onlineState):(n$("SharedClientState",`Failed to parse online state: ${e}`),null)}}class lg{constructor(){this.activeTargetIds=sT}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lp{constructor(e,t,n,r,i){this.window=e,this.Ws=t,this.persistenceKey=n,this.nr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new r5(n5),this.started=!1,this.ur=[];let s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.cr=ll(this.persistenceKey,this.nr),this.ar=`firestore_sequence_number_${this.persistenceKey}`,this.rr=this.rr.insert(this.nr,new lg),this.hr=RegExp(`^firestore_clients_${s}_([^_]*)$`),this.lr=RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.dr=RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=`firestore_online_state_${this.persistenceKey}`,this._r=`firestore_bundle_loaded_v2_${this.persistenceKey}`,this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.bi();for(let t of e){if(t===this.nr)continue;let e=this.getItem(ll(this.persistenceKey,t));if(e){let n=lf.Zi(t,e);n&&(this.rr=this.rr.insert(n.clientId,n))}}this.mr();let t=this.storage.getItem(this.wr);if(t){let e=this.gr(t);e&&this.yr(e)}for(let e of this.ur)this.ir(e);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,n){this.Ir(e,t,n),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(lh(this.persistenceKey,e));if(n){let r=ld.Zi(e,n);r&&(t=r.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lh(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ar(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Tr(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return nz("SharedClientState","READ",e,t),t}setItem(e,t){nz("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){nz("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){if(e.storageArea===this.storage){if(nz("SharedClientState","EVENT",e.key,e.newValue),e.key===this.cr)return void n$("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.hr.test(e.key)){if(null==e.newValue){let t=this.br(e.key);return this.Pr(t,null)}{let t=this.Vr(e.key,e.newValue);if(t)return this.Pr(t.clientId,t)}}else if(this.lr.test(e.key)){if(null!==e.newValue){let t=this.Sr(e.key,e.newValue);if(t)return this.Dr(t)}}else if(this.dr.test(e.key)){if(null!==e.newValue){let t=this.Cr(e.key,e.newValue);if(t)return this.Nr(t)}}else if(e.key===this.wr){if(null!==e.newValue){let t=this.gr(e.newValue);if(t)return this.yr(t)}}else if(e.key===this.ar){let t=function(e){let t=rA.ct;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||nQ(),t=n}catch(e){n$("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==rA.ct&&this.sequenceNumberHandler(t)}else if(e.key===this._r){let t=this.kr(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Or(e)))}}}else this.ur.push(e)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,n){let r=new lc(this.currentUser,e,t,n),i=lu(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Xi())}Tr(e){let t=lu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){let t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,n){let r=lh(this.persistenceKey,e),i=new ld(e,t,n);this.setItem(r,i.Xi())}vr(e){let t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){let t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){let n=this.br(e);return lf.Zi(n,t)}Sr(e,t){let n=this.lr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return lc.Zi(new nB(i),r,t)}Cr(e,t){let n=this.dr.exec(e),r=Number(n[1]);return ld.Zi(r,t)}gr(e){return lm.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);nz("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){let n=t?this.rr.insert(e,t):this.rr.remove(e),r=this.pr(this.rr),i=this.pr(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.Fr(s,a).then(()=>{this.rr=n})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=sT;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class ly{constructor(){this.Br=new lg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new lg,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lv{qr(e){}shutdown(){}}/**
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
 */class lw{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){for(let e of(nz("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.zr))e(0)}Qr(){for(let e of(nz("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.zr))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let lb=null;function lI(){return null===lb?lb=268435456+Math.round(2147483648*Math.random()):lb++,"0x"+lb.toString(16)}/**
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
 */let lE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class l_{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */let lT="WebChannelConnection";class lS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,r,i){let s=lI(),a=this.ao(e,t);nz("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={};return this.ho(o,r,i),this.lo(e,a,o,n).then(t=>(nz("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw nK("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nU,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ao(e,t){let n=lE[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){let i=lI();return new Promise((s,a)=>{let o=new nP;o.setWithCredentials(!0),o.listenOnce(nk.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nN.NO_ERROR:let t=o.getResponseJson();nz(lT,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case nN.TIMEOUT:nz(lT,`RPC '${e}' ${i} timed out`),a(new nW(nH.DEADLINE_EXCEEDED,"Request time out"));break;case nN.HTTP_ERROR:let n=o.getStatus();if(nz(lT,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(nH).indexOf(t)>=0?t:nH.UNKNOWN}(t.status);a(new nW(e,t.message))}else a(new nW(nH.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new nW(nH.UNAVAILABLE,"Connection failed."));break;default:nQ()}}finally{nz(lT,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);nz(lT,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}wo(e,t,n){let r=lI(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nC(),a=nA(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new nL({})),this.ho(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let l=i.join("");nz(lT,`Creating RPC '${e}' stream ${r}: ${l}`,o);let h=s.createWebChannel(l,o),c=!1,d=!1,f=new l_({Wr:t=>{d?nz(lT,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(nz(lT,`Opening RPC '${e}' stream ${r} transport.`),h.open(),c=!0),nz(lT,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Hr:()=>h.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(h,nM.EventType.OPEN,()=>{d||nz(lT,`RPC '${e}' stream ${r} transport opened.`)}),m(h,nM.EventType.CLOSE,()=>{d||(d=!0,nz(lT,`RPC '${e}' stream ${r} transport closed`),f.so())}),m(h,nM.EventType.ERROR,t=>{d||(d=!0,nK(lT,`RPC '${e}' stream ${r} transport errored:`,t),f.so(new nW(nH.UNAVAILABLE,"The operation could not be completed")))}),m(h,nM.EventType.MESSAGE,t=>{var n;if(!d){let i=t.data[0];i||nQ();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){nz(lT,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=u[e];if(void 0!==t)return s3(t)}(t),i=s.message;void 0===n&&(n=nH.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,f.so(new nW(n,i)),h.close()}else nz(lT,`RPC '${e}' stream ${r} received:`,i),f.io(i)}}),m(a,nR.STAT_EVENT,t=>{t.stat===nO.PROXY?nz(lT,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===nO.NOPROXY&&nz(lT,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}/**
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
 *//**
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
 */function lx(){return"undefined"!=typeof window?window:null}function lD(){return"undefined"!=typeof document?document:null}/**
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
 */function lC(e){return new au(e,!0)}/**
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
 */class lA{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();let t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&nz("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class lN{constructor(e,t,n,r,i,s,a,o){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new lA(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===nH.RESOURCE_EXHAUSTED?(n$(t.toString()),n$("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===nH.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Vo===t&&this.Ko(e,n)},t=>{e(()=>{let e=new nW(nH.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)})})}Ko(e,t){let n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{n(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(e=>{n(()=>this.Go(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return nz("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(nz("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lk extends lN{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nQ(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||nQ(),is.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||nQ(),is.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?nH.UNKNOWN:s3(e.code);return new nW(t,e.message||"")}(l);n=new at(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=ap(e,r.document.name),s=ad(r.document.updateTime),a=r.document.createTime?ad(r.document.createTime):n7.min(),o=new iO({mapValue:{fields:r.document.fields}}),l=iL.newFoundDocument(i,s,a,o),u=r.targetIds||[],h=r.removedTargetIds||[];n=new s7(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=ap(e,r.document),s=r.readTime?ad(r.readTime):n7.min(),a=iL.newNoDocument(i,s),o=r.removedTargetIds||[];n=new s7([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=ap(e,r.document),s=r.removedTargetIds||[];n=new s7([],s,i,null)}else{if(!("filter"in t))return nQ();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,i=new s2(r),s=e.targetId;n=new ae(s,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return n7.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?n7.min():t.readTime?ad(t.readTime):n7.min()}(e);return this.listener.zo(t,n)}jo(e){let t={};t.database=aw(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;return(n=i6(r)?{documents:aS(e,r)}:{query:ax(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ac(e,t.resumeToken):t.snapshotVersion.compareTo(n7.min())>0&&(n.readTime=ah(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return nQ()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){let t={};t.database=aw(this.serializer),t.removeTarget=e,this.Fo(t)}}class lR extends lN{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||nQ(),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||nQ(),t.map(e=>{let t;return(t=e.updateTime?ad(e.updateTime):ad(n)).isEqual(n7.min())&&(t=ad(n)),new sB(t,e.transformResults||[])})):[]),i=ad(e.commitTime);return this.listener.Zo(i,r)}return e.writeResults&&0!==e.writeResults.length&&nQ(),this.Ho=!0,this.listener.Xo()}tu(){let e={};e.database=aw(this.serializer),this.Fo(e)}Yo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>a_(this.serializer,e))};this.Fo(t)}}/**
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
 */class lO extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new nW(nH.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nH.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nW(nH.UNKNOWN,e.toString())})}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nH.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nW(nH.UNKNOWN,e.toString())})}terminate(){this.eu=!0}}class lL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(n$(t),this.ru=!1):nz("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class lM{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(e=>{n.enqueueAndForget(async()=>{l$(this)&&(nz("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.du.add(4),await lF(e),e.mu.set("Unknown"),e.du.delete(4),await lP(e)}(this))})}),this.mu=new lL(n,r)}}async function lP(e){if(l$(e))for(let t of e.wu)await t(!0)}async function lF(e){for(let t of e.wu)await t(!1)}function lV(e,t){e.fu.has(t.targetId)||(e.fu.set(t.targetId,t),lz(e)?lj(e):l6(e).No()&&lU(e,t))}function lB(e,t){let n=l6(e);e.fu.delete(t),n.No()&&lq(e,t),0===e.fu.size&&(n.No()?n.$o():l$(e)&&e.mu.set("Unknown"))}function lU(e,t){e.gu.Ot(t.targetId),l6(e).jo(t)}function lq(e,t){e.gu.Ot(t),l6(e).Wo(t)}function lj(e){e.gu=new ar({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),l6(e).start(),e.mu.ou()}function lz(e){return l$(e)&&!l6(e).xo()&&e.fu.size>0}function l$(e){return 0===e.du.size}async function lK(e){e.fu.forEach((t,n)=>{lU(e,t)})}async function lG(e,t){e.gu=void 0,lz(e)?(e.mu.au(t),lj(e)):e.mu.set("Unknown")}async function lQ(e,t,n){if(e.mu.set("Online"),t instanceof at&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.fu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.fu.delete(r),e.gu.removeTarget(r))}(e,t)}catch(n){nz("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await lH(e,n)}else if(t instanceof s7?e.gu.Kt(t):t instanceof ae?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(n7.min()))try{let t=await o9(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.gu.Xt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(is.EMPTY_BYTE_STRING,n.snapshotVersion)),lq(e,t);let r=new ak(n.target,t,1,n.sequenceNumber);lU(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){nz("RemoteStore","Failed to raise snapshot:",t),await lH(e,t)}}async function lH(e,t,n){if(!rE(t))throw t;e.du.add(1),await lF(e),e.mu.set("Offline"),n||(n=()=>o9(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nz("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await lP(e)})}function lW(e,t){return t().catch(n=>lH(e,n,t))}async function lY(e){let t=l5(e),n=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;l$(e)&&e.lu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.lu.length&&t.$o();break}n=r.batchId,function(e,t){e.lu.push(t);let n=l5(e);n.No()&&n.Jo&&n.Yo(t.mutations)}(e,r)}catch(t){await lH(e,t)}lX(e)&&lZ(e)}function lX(e){return l$(e)&&!l5(e).xo()&&e.lu.length>0}function lZ(e){l5(e).start()}async function lJ(e){l5(e).tu()}async function l0(e){let t=l5(e);for(let n of e.lu)t.Yo(n.mutations)}async function l1(e,t,n){let r=e.lu.shift(),i=s0.from(r,t,n);await lW(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await lY(e)}async function l2(e,t){t&&l5(e).Jo&&await async function(e,t){var n;if(s4(n=t.code)&&n!==nH.ABORTED){let n=e.lu.shift();l5(e).Oo(),await lW(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await lY(e)}}(e,t),lX(e)&&lZ(e)}async function l4(e,t){e.asyncQueue.verifyOperationInProgress(),nz("RemoteStore","RemoteStore received new credentials");let n=l$(e);e.du.add(3),await lF(e),n&&e.mu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.du.delete(3),await lP(e)}async function l3(e,t){t?(e.du.delete(2),await lP(e)):t||(e.du.add(2),await lF(e),e.mu.set("Unknown"))}function l6(e){var t,n,r;return e.yu||(e.yu=(t=e.datastore,n=e.asyncQueue,r={Jr:lK.bind(null,e),Zr:lG.bind(null,e),zo:lQ.bind(null,e)},t.nu(),new lk(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.wu.push(async t=>{t?(e.yu.Oo(),lz(e)?lj(e):e.mu.set("Unknown")):(await e.yu.stop(),e.gu=void 0)})),e.yu}function l5(e){var t,n,r;return e.pu||(e.pu=(t=e.datastore,n=e.asyncQueue,r={Jr:lJ.bind(null,e),Zr:l2.bind(null,e),Xo:l0.bind(null,e),Zo:l1.bind(null,e)},t.nu(),new lR(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.wu.push(async t=>{t?(e.pu.Oo(),await lY(e)):(await e.pu.stop(),e.lu.length>0&&(nz("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
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
 */class l8{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nY,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new l8(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nW(nH.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function l9(e,t){if(n$("AsyncQueue",`${t}: ${e}`),rE(e))return new nW(nH.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class l7{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ri.comparator(t.key,n.key):(e,t)=>ri.comparator(e.key,t.key),this.keyedMap=sv(),this.sortedSet=new r5(this.comparator)}static emptySet(e){return new l7(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof l7)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new l7;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ue{constructor(){this.Iu=new r5(ri.comparator)}track(e){let t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):nQ():this.Iu=this.Iu.insert(t,e)}Tu(){let e=[];return this.Iu.inorderTraversal((t,n)=>{e.push(n)}),e}}class ut{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new ut(e,t,l7.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class un{constructor(){this.Eu=void 0,this.listeners=[]}}class ur{constructor(){this.queries=new sg(e=>sh(e),su),this.onlineState="Unknown",this.Au=new Set}}async function ui(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new un),r)try{i.Eu=await e.onListen(n)}catch(n){let e=l9(n,`Initialization of query '${sc(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Ru(e.onlineState),i.Eu&&t.vu(i.Eu)&&ul(e)}async function us(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function ua(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.vu(r)&&(n=!0);i.Eu=r}}n&&ul(e)}function uo(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function ul(e){e.Au.forEach(e=>{e.next()})}class uu{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new ut(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){return!e.fromCache||(!this.options.xu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;let t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=ut.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class uh{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
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
 */class uc{constructor(e){this.serializer=e}Hi(e){return ap(this.serializer,e)}Ji(e){return e.metadata.exists?aE(this.serializer,e.document,!1):iL.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return ad(e)}}class ud{constructor(e,t,n){this.Ou=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=uf(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;let n=rt.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){let t=new Map,n=new uc(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.Hi(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||s_()).add(e);t.set(n,r)}}return t}async complete(){let e=await la(this.localStore,new uc(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(let e of this.queries)await lo(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function uf(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
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
 */class um{constructor(e){this.key=e}}class ug{constructor(e){this.key=e}}class up{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=s_(),this.mutatedKeys=s_(),this.Ku=sm(e),this.Gu=new l7(this.Ku)}get Qu(){return this.Lu}zu(e,t){let n=t?t.ju:new ue,r=t?t.Gu:this.Gu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=sd(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Wu(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Ku(h,o)>0||l&&0>this.Ku(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:a,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;let i=e.ju.Tu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nQ()}};return n(e)-n(t)})(e.type,t.type)||this.Ku(e.doc,t.doc)),this.Hu(n);let s=t?this.Ju():[],a=0===this.Uu.size&&this.current?1:0,o=a!==this.qu;return(this.qu=a,0!==i.length||o)?{snapshot:new ut(this.query,e.Gu,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new ue,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(e=>this.Lu=this.Lu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Lu=this.Lu.delete(e)),this.current=e.current)}Ju(){if(!this.current)return[];let e=this.Uu;this.Uu=s_(),this.Gu.forEach(e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))});let t=[];return e.forEach(e=>{this.Uu.has(e)||t.push(new ug(e))}),this.Uu.forEach(n=>{e.has(n)||t.push(new um(n))}),t}Xu(e){this.Lu=e.Wi,this.Uu=s_();let t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return ut.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class uy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class uv{constructor(e){this.key=e,this.ec=!1}}class uw{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new sg(e=>sh(e),su),this.ic=new Map,this.rc=new Set,this.oc=new r5(ri.comparator),this.uc=new Map,this.cc=new oj,this.ac={},this.hc=new Map,this.lc=ow.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function ub(e,t){let n,r;let i=uH(e),s=i.sc.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.tc();else{let e=await le(i.localStore,sa(t));i.isPrimaryClient&&lV(i.remoteStore,e);let s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await uI(i,t,n,"current"===s,e.resumeToken)}return r}async function uI(e,t,n,r,i){e.dc=(t,n,r)=>(async function(e,t,n,r){let i=t.view.zu(n);i.Mi&&(i=await ln(e.localStore,t.query,!1).then(({documents:e})=>t.view.zu(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return uL(e,t.targetId,a.Yu),a.snapshot})(e,t,n,r);let s=await ln(e.localStore,t,!0),a=new up(t,s.Wi),o=a.zu(s.documents),l=s9.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);uL(e,n,u.Yu);let h=new uy(t,n,a);return e.sc.set(t,h),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function uE(e,t){let n=e.sc.get(t),r=e.ic.get(n.targetId);if(r.length>1)return e.ic.set(n.targetId,r.filter(e=>!su(e,t))),void e.sc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await lt(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),lB(e.remoteStore,n.targetId),uR(e,n.targetId)}).catch(rp)):(uR(e,n.targetId),await lt(e.localStore,n.targetId,!0))}async function u_(e,t,n){let r=uW(e);try{var i,s;let e;let a=await function(e,t){let n,r;let i=n9.now(),s=t.reduce((e,t)=>e.add(t.key),s_());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=sp,l=s_();return e.Ki.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=sA(r.transform,e||null);null!=i&&(null===n&&(n=iO.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new sQ(e.key,t,function e(t){let n=[];return r3(t.fields,(t,r)=>{let i=new rr([t]);if(iC(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new ir(n)}(t.value.mapValue),sU.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:sw(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),i=r,s=a.batchId,(e=i.ac[i.currentUser.toKey()])||(e=new r5(n5)),e=e.insert(s,n),i.ac[i.currentUser.toKey()]=e,await uP(r,a.changes),await lY(r.remoteStore)}catch(t){let e=l9(t,"Failed to persist write");n.reject(e)}}async function uT(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{let s=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=i.get(o);if(!u)return;a.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Ds.addMatchingKeys(e,s.addedDocuments,o)));let h=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?h=h.withResumeToken(is.EMPTY_BYTE_STRING,n7.min()).withLastLimboFreeSnapshotVersion(n7.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),i=i.insert(o,h),l=h,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(n.Ds.updateTargetData(e,h))});let o=sp,l=s_();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(o7(e,s,t.documentUpdates).next(e=>{o=e.zi,l=e.ji})),!r.isEqual(n7.min())){let t=n.Ds.getLastRemoteSnapshotVersion(e).next(t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return ry.waitFor(a).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,l)).next(()=>o)}).then(e=>(n.Li=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.uc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||nQ(),t.addedDocuments.size>0?r.ec=!0:t.modifiedDocuments.size>0?r.ec||nQ():t.removedDocuments.size>0&&(r.ec||nQ(),r.ec=!1))}),await uP(e,n,t)}catch(e){await rp(e)}}function uS(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.sc.forEach((n,r)=>{let i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.Ru(t)&&(r=!0)}),r&&ul(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ux(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.uc.get(t),s=i&&i.key;if(s){let e=new r5(ri.comparator);e=e.insert(s,iL.newNoDocument(s,n7.min()));let n=s_().add(s),i=new s8(n7.min(),new Map,new r7(n5),e,n);await uT(r,i),r.oc=r.oc.remove(s),r.uc.delete(t),uM(r)}else await lt(r.localStore,t,!1).then(()=>uR(r,t,n)).catch(rp)}async function uD(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=ry.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nQ(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=s_();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});uk(e,r,null),uN(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await uP(e,i)}catch(e){await rp(e)}}async function uC(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||nQ(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});uk(e,t,n),uN(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await uP(e,i)}catch(e){await rp(e)}}async function uA(e,t){var n;l$(e.remoteStore)||nz("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.hc.get(r)||[];i.push(t),e.hc.set(r,i)}catch(n){let e=l9(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function uN(e,t){(e.hc.get(t)||[]).forEach(e=>{e.resolve()}),e.hc.delete(t)}function uk(e,t,n){let r=e,i=r.ac[r.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function uR(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.ic.get(t)))e.sc.delete(r),n&&e.nc.wc(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(t=>{e.cc.containsKey(t)||uO(e,t)})}function uO(e,t){e.rc.delete(t.path.canonicalString());let n=e.oc.get(t);null!==n&&(lB(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),uM(e))}function uL(e,t,n){for(let r of n)r instanceof um?(e.cc.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(nz("SyncEngine","New document in limbo: "+n),e.rc.add(r),uM(e))}(e,r)):r instanceof ug?(nz("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||uO(e,r.key)):nQ()}function uM(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){let t=e.rc.values().next().value;e.rc.delete(t);let n=new ri(rt.fromString(t)),r=e.lc.next();e.uc.set(r,new uv(n)),e.oc=e.oc.insert(n,r),lV(e.remoteStore,new ak(sa(se(n.path)),r,2,rA.ct))}}async function uP(e,t,n){let r=[],i=[],s=[];e.sc.isEmpty()||(e.sc.forEach((a,o)=>{s.push(e.dc(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=o3.Di(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.nc.zo(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>ry.forEach(t,t=>ry.forEach(t.Vi,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>ry.forEach(t.Si,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!rE(e))throw e;nz("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(e.localStore,i))}async function uF(e,t){let n=e;if(!n.currentUser.isEqual(t)){nz("SyncEngine","User change. New user:",t.toKey());let e=await o8(n.localStore,t);n.currentUser=t,n.hc.forEach(e=>{e.forEach(e=>{e.reject(new nW(nH.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await uP(n,e.Qi)}}function uV(e,t){let n=e.uc.get(t);if(n&&n.ec)return s_().add(n.key);{let n=s_(),r=e.ic.get(t);if(!r)return n;for(let t of r){let r=e.sc.get(t);n=n.unionWith(r.view.Qu)}return n}}async function uB(e,t){let n=await ln(e.localStore,t.query,!0),r=t.view.Xu(n);return e.isPrimaryClient&&uL(e,t.targetId,r.Yu),r}async function uU(e,t){return li(e.localStore,t).then(t=>uP(e,t))}async function uq(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.In(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):ry.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await lY(e.remoteStore):"acknowledged"===n||"rejected"===n?(uk(e,t,r||null),uN(e,t),function(e,t){e.mutationQueue.En(t)}(e.localStore,t)):nQ(),await uP(e,i)):nz("SyncEngine","Cannot apply mutation batch with id: "+t)}async function uj(e,t){let n=e;if(uH(n),uW(n),!0===t&&!0!==n.fc){let e=n.sharedClientState.getAllActiveQueryTargets(),t=await uz(n,e.toArray());for(let e of(n.fc=!0,await l3(n.remoteStore,!0),t))lV(n.remoteStore,e)}else if(!1===t&&!1!==n.fc){let e=[],t=Promise.resolve();n.ic.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(uR(n,i),lt(n.localStore,i,!0))),lB(n.remoteStore,i)}),await t,await uz(n,e),function(e){let t=e;t.uc.forEach((e,n)=>{lB(t.remoteStore,n)}),t.cc.ls(),t.uc=new Map,t.oc=new r5(ri.comparator)}(n),n.fc=!1,await l3(n.remoteStore,!1)}}async function uz(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e.ic.get(n);if(s&&0!==s.length)for(let n of(t=await le(e.localStore,sa(s[0])),s)){let t=e.sc.get(n),r=await uB(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await lr(e.localStore,n);t=await le(e.localStore,r),await uI(e,u$(r),n,!1,t.resumeToken)}r.push(t)}return e.nc.zo(i),r}function u$(e){var t,n,r,i,s,a,o;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,s=e.limit,a=e.startAt,o=e.endAt,new i7(t,n,r,i,s,"F",a,o)}function uK(e){return e.localStore.persistence.bi()}async function uG(e,t,n,r){if(e.fc)return void nz("SyncEngine","Ignoring unexpected query state notification.");let i=e.ic.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await li(e.localStore,sf(i[0])),s=s8.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,is.EMPTY_BYTE_STRING);await uP(e,r,s);break}case"rejected":await lt(e.localStore,t,!0),uR(e,t,r);break;default:nQ()}}async function uQ(e,t,n){let r=uH(e);if(r.fc){for(let e of t){if(r.ic.has(e)){nz("SyncEngine","Adding an already active target "+e);continue}let t=await lr(r.localStore,e),n=await le(r.localStore,t);await uI(r,u$(t),n.targetId,!1,n.resumeToken),lV(r.remoteStore,n)}for(let e of n)r.ic.has(e)&&await lt(r.localStore,e,!1).then(()=>{lB(r.remoteStore,e),uR(r,e)}).catch(rp)}}function uH(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=uT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uV.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ux.bind(null,t),t.nc.zo=ua.bind(null,t.eventManager),t.nc.wc=uo.bind(null,t.eventManager),t}function uW(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=uD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uC.bind(null,t),t}class uY{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lC(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new o6,r=e.initialUser,i=this.serializer,new o5(t,n,r,i)}createPersistence(e){return new oH(oY.Fs,this.serializer)}createSharedClientState(e){return new ly}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uX extends uY{constructor(e,t,n){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await uW(this.mc.syncEngine),await lY(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new o6,r=e.initialUser,i=this.serializer,new o5(t,n,r,i)}createGarbageCollectionScheduler(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new ox(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new rC(t,this.persistence);return new rD(e.asyncQueue,n)}createPersistence(e){let t=o4(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?oc.withCacheSize(this.cacheSizeBytes):oc.DEFAULT;return new o0(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,lx(),lD(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new ly}}class uZ extends uX{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.mc.syncEngine;this.sharedClientState instanceof lp&&(this.sharedClientState.syncEngine={$r:uq.bind(null,t),Mr:uG.bind(null,t),Fr:uQ.bind(null,t),bi:uK.bind(null,t),Or:uU.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async e=>{await uj(this.mc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=lx();if(!lp.D(t))throw new nW(nH.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=o4(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new lp(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class uJ{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>uS(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=uF.bind(null,this.syncEngine),await l3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ur}createDatastore(e){var t,n,r;let i=lC(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new lS(t));return n=e.authCredentials,r=e.appCheckCredentials,new lO(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>uS(this.syncEngine,e,0),s=lw.D()?new lw:new lv,new lM(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new uw(e,t,n,r,i,s);return a&&(o.fc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){nz("RemoteStore","RemoteStore shutting down."),e.du.add(5),await lF(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */function u0(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class u1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):n$("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class u2{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new nY,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(e=>{e&&e.ku()?this.metadata.resolve(e.Nu.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.Nu)}`))},e=>this.metadata.reject(e))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){let e=await this.Ac();if(null===e)return null;let t=this.Tc.decode(e),n=Number(t);isNaN(n)&&this.Rc(`length string (${t}) is not valid number`);let r=await this.vc(n);return new uh(JSON.parse(r),e.length+n)}bc(){return this.buffer.findIndex(e=>123===e)}async Ac(){for(;0>this.bc()&&!await this.Pc(););if(0===this.buffer.length)return null;let e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");let t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),Error(`Invalid bundle format: ${e}`)}async Pc(){let e=await this.Ic.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class u4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new nW(nH.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=aw(e.serializer)+"/documents",r={documents:t.map(t=>ag(e.serializer,t))},i=await e.fo("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||nQ(),t.found.name,t.found.updateTime;let n=ap(e,t.found.name),r=ad(t.found.updateTime),i=t.found.createTime?ad(t.found.createTime):n7.min(),s=new iO({mapValue:{fields:t.found.fields}});return iL.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||nQ(),t.readTime||nQ();let n=ap(e,t.missing),r=ad(t.readTime);return iL.newNoDocument(n,r)}(n,t):nQ());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||nQ(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new sX(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=ri.fromPath(t);this.mutations.push(new sZ(n,this.precondition(n)))}),await async function(e,t){let n=aw(e.serializer)+"/documents",r={writes:t.map(t=>a_(e.serializer,t))};await e.co("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw nQ();t=n7.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new nW(nH.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(n7.min())?sU.exists(!1):sU.updateTime(t):sU.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(n7.min()))throw new nW(nH.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return sU.updateTime(t)}return sU.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class u3{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Vc=n.maxAttempts,this.Co=new lA(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{let e=new u4(this.datastore),t=this.Dc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Cc(e)}))}).catch(e=>{this.Cc(e)})})}Dc(e){try{let t=this.updateFunction(e);return!rN(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!s4(t)}return!1}}/**
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
 */class u6{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nB.UNAUTHENTICATED,this.clientId=n6.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{nz("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(nz("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nW(nH.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nY;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=l9(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function u5(e,t){e.asyncQueue.verifyOperationInProgress(),nz("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await o8(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function u8(e,t){e.asyncQueue.verifyOperationInProgress();let n=await u7(e);nz("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>l4(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>l4(t.remoteStore,n)),e._onlineComponents=t}function u9(e){return"FirebaseError"===e.name?e.code===nH.FAILED_PRECONDITION||e.code===nH.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function u7(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){nz("FirestoreClient","Using user provided OfflineComponentProvider");try{await u5(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!u9(t))throw t;nK("Error using user provided cache. Falling back to memory cache: "+t),await u5(e,new uY)}}else nz("FirestoreClient","Using default OfflineComponentProvider"),await u5(e,new uY)}return e._offlineComponents}async function he(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(nz("FirestoreClient","Using user provided OnlineComponentProvider"),await u8(e,e._uninitializedComponentsProvider._online)):(nz("FirestoreClient","Using default OnlineComponentProvider"),await u8(e,new uJ))),e._onlineComponents}function ht(e){return u7(e).then(e=>e.persistence)}function hn(e){return u7(e).then(e=>e.localStore)}function hr(e){return he(e).then(e=>e.remoteStore)}function hi(e){return he(e).then(e=>e.syncEngine)}async function hs(e){let t=await he(e),n=t.eventManager;return n.onListen=ub.bind(null,t.syncEngine),n.onUnlisten=uE.bind(null,t.syncEngine),n}function ha(e,t,n={}){let r=new nY;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new u1({next:s=>{t.enqueueAndForget(()=>us(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new nW(nH.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new nW(nH.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new uu(se(n.path),s,{includeMetadataChanges:!0,xu:!0});return ui(e,a)})(await hs(e),e.asyncQueue,t,n,r)),r.promise}function ho(e,t,n={}){let r=new nY;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new u1({next:n=>{t.enqueueAndForget(()=>us(e,a)),n.fromCache&&"server"===r.source?i.reject(new nW(nH.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new uu(n,s,{includeMetadataChanges:!0,xu:!0});return ui(e,a)})(await hs(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */let hl=new Map;/**
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
 */function hu(e,t,n){if(!n)throw new nW(nH.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hh(e,t,n,r){if(!0===t&&!0===r)throw new nW(nH.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function hc(e){if(!ri.isDocumentKey(e))throw new nW(nH.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hd(e){if(ri.isDocumentKey(e))throw new nW(nH.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function hf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nQ()}function hm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nW(nH.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=hf(e);throw new nW(nH.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function hg(e,t){if(t<=0)throw new nW(nH.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class hp{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new nW(nH.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nW(nH.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class hy{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nW(nH.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nW(nH.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nZ;switch(e.type){case"firstParty":return new n2(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nW(nH.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=hl.get(e);t&&(nz("ComponentProvider","Removing Datastore"),hl.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class hv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hb(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hv(this.firestore,e,this._key)}}class hw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hw(this.firestore,e,this._query)}}class hb extends hw{constructor(e,t,n){super(e,t,se(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new hv(this.firestore,null,new ri(e))}withConverter(e){return new hb(this.firestore,e,this._path)}}function hI(e,t,...n){if(e=(0,p.m9)(e),hu("collection","path",t),e instanceof hy){let r=rt.fromString(t,...n);return hd(r),new hb(e,null,r)}{if(!(e instanceof hv||e instanceof hb))throw new nW(nH.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(rt.fromString(t,...n));return hd(r),new hb(e.firestore,null,r)}}function hE(e,t,...n){if(e=(0,p.m9)(e),1==arguments.length&&(t=n6.A()),hu("doc","path",t),e instanceof hy){let r=rt.fromString(t,...n);return hc(r),new hv(e,null,new ri(r))}{if(!(e instanceof hv||e instanceof hb))throw new nW(nH.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(rt.fromString(t,...n));return hc(r),new hv(e.firestore,e instanceof hb?e.converter:null,new ri(r))}}function h_(e,t){return e=(0,p.m9)(e),t=(0,p.m9)(t),(e instanceof hv||e instanceof hb)&&(t instanceof hv||t instanceof hb)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function hT(e,t){return e=(0,p.m9)(e),t=(0,p.m9)(t),e instanceof hw&&t instanceof hw&&e.firestore===t.firestore&&su(e._query,t._query)&&e.converter===t.converter}/**
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
 */class hS{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new lA(this,"async_queue_retry"),this.qc=()=>{let e=lD();e&&nz("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};let e=lD();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;let t=lD();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});let t=new nY;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!rE(e))throw e;nz("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){let t=this.Nc.then(()=>(this.Fc=!0,e().catch(e=>{let t;this.Mc=e,this.Fc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw n$("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Fc=!1,e))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);let r=l8.createAndSchedule(this,e,t,n,e=>this.Qc(e));return this.$c.push(r),r}Uc(){this.Mc&&nQ()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(let t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{for(let t of(this.$c.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.$c))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){let t=this.$c.indexOf(e);this.$c.splice(t,1)}}function hx(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class hD{constructor(){this._progressObserver={},this._taskCompletionResolver=new nY,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}class hC extends hy{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new hS,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hN(this),this._firestoreClient.terminate()}}function hA(e){return e._firestoreClient||hN(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function hN(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new id(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));e._firestoreClient=new u6(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}function hk(e,t,n){let r=new nY;return e.asyncQueue.enqueue(async()=>{try{await u5(e,n),await u8(e,t),r.resolve()}catch(e){if(!u9(e))throw e;nK("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function hR(e){if(e._initialized||e._terminated)throw new nW(nH.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class hO{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hO(is.fromBase64String(e))}catch(e){throw new nW(nH.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hO(is.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hL{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nW(nH.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hM{constructor(e){this._methodName=e}}/**
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
 */class hP{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nW(nH.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nW(nH.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return n5(this._lat,e._lat)||n5(this._long,e._long)}}/**
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
 */let hF=/^__.*__$/;class hV{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new sQ(e,this.data,this.fieldMask,t,this.fieldTransforms):new sG(e,this.data,t,this.fieldTransforms)}}class hB{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new sQ(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hU(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nQ()}}class hq{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new hq(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return h8(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(hU(this.Yc)&&hF.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class hj{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||lC(e)}ua(e,t,n,r=!1){return new hq({Yc:e,methodName:t,oa:n,path:rr.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hz(e){let t=e._freezeSettings(),n=lC(e._databaseId);return new hj(e._databaseId,!!t.ignoreUndefinedProperties,n)}function h$(e,t,n,r,i,s={}){let a,o;let l=e.ua(s.merge||s.mergeFields?2:0,t,n,i);h4("Data must be an object, but it was:",l,r);let u=h1(r,l);if(s.merge)a=new ir(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=h3(t,r,n);if(!l.contains(i))throw new nW(nH.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);h9(e,i)||e.push(i)}a=new ir(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new hV(new iO(u),a,o)}class hK extends hM{_toFieldTransform(e){if(2!==e.Yc)throw 1===e.Yc?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hK}}function hG(e,t,n){return new hq({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class hQ extends hM{_toFieldTransform(e){return new sV(e.path,new sN)}isEqual(e){return e instanceof hQ}}class hH extends hM{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){let t=hG(this,e,!0),n=this.ca.map(e=>h0(e,t)),r=new sk(n);return new sV(e.path,r)}isEqual(e){return this===e}}class hW extends hM{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){let t=hG(this,e,!0),n=this.ca.map(e=>h0(e,t)),r=new sO(n);return new sV(e.path,r)}isEqual(e){return this===e}}class hY extends hM{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){let t=new sM(e.serializer,sD(e.serializer,this.aa));return new sV(e.path,t)}isEqual(e){return this===e}}function hX(e,t,n,r){let i=e.ua(1,t,n);h4("Data must be an object, but it was:",i,r);let s=[],a=iO.empty();r3(r,(e,r)=>{let o=h5(t,e,n);r=(0,p.m9)(r);let l=i.na(o);if(r instanceof hK)s.push(o);else{let e=h0(r,l);null!=e&&(s.push(o),a.set(o,e))}});let o=new ir(s);return new hB(a,o,i.fieldTransforms)}function hZ(e,t,n,r,i,s){let a=e.ua(1,t,n),o=[h3(t,r,n)],l=[i];if(s.length%2!=0)throw new nW(nH.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(h3(t,s[e])),l.push(s[e+1]);let u=[],h=iO.empty();for(let e=o.length-1;e>=0;--e)if(!h9(u,o[e])){let t=o[e],n=l[e];n=(0,p.m9)(n);let r=a.na(t);if(n instanceof hK)u.push(t);else{let e=h0(n,r);null!=e&&(u.push(t),h.set(t,e))}}let c=new ir(u);return new hB(h,c,a.fieldTransforms)}function hJ(e,t,n,r=!1){return h0(n,e.ua(r?4:3,t))}function h0(e,t){if(h2(e=(0,p.m9)(e)))return h4("Unsupported field value:",t,e),h1(e,t);if(e instanceof hM)return function(e,t){if(!hU(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=h0(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,p.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return sD(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=n9.fromDate(e);return{timestampValue:ah(t.serializer,n)}}if(e instanceof n9){let n=new n9(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ah(t.serializer,n)}}if(e instanceof hP)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hO)return{bytesValue:ac(t.serializer,e._byteString)};if(e instanceof hv){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:af(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${hf(e)}`)}(e,t)}function h1(e,t){let n={};return r6(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):r3(e,(e,r)=>{let i=h0(r,t.Xc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function h2(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof n9||e instanceof hP||e instanceof hO||e instanceof hv||e instanceof hM)}function h4(e,t,n){if(!h2(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=hf(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}}function h3(e,t,n){if((t=(0,p.m9)(t))instanceof hL)return t._internalPath;if("string"==typeof t)return h5(e,t);throw h8("Field path arguments must be of type string or ",e,!1,void 0,n)}let h6=RegExp("[~\\*/\\[\\]]");function h5(e,t,n){if(t.search(h6)>=0)throw h8(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hL(...t.split("."))._internalPath}catch(r){throw h8(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function h8(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new nW(nH.INVALID_ARGUMENT,o+e+l)}function h9(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class h7{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new ce(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ct("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ce extends h7{data(){return super.data()}}function ct(e,t){return"string"==typeof t?h5(e,t):t instanceof hL?t._internalPath:t._delegate._internalPath}/**
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
 */function cn(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new nW(nH.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cr{}class ci extends cr{}function cs(e,t,...n){let r=[];for(let i of(t instanceof cr&&r.push(t),function(e){let t=e.filter(e=>e instanceof co).length,n=e.filter(e=>e instanceof ca).length;if(t>1||t>0&&n>0)throw new nW(nH.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class ca extends ci{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ca(e,t,n)}_apply(e){let t=this._parse(e);return cg(e._query,t),new hw(e.firestore,e.converter,so(e._query,t))}_parse(e){let t=hz(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new nW(nH.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){cm(a,s);let t=[];for(let n of a)t.push(cf(r,e,n));o={arrayValue:{values:t}}}else o=cf(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||cm(a,s),o=hJ(n,t,a,"in"===s||"not-in"===s);return iU.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class co extends cr{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new co(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:iq.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)cg(n,e),n=so(n,e)}(e._query,t),new hw(e.firestore,e.converter,so(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class cl extends ci{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cl(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new nW(nH.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new nW(nH.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new iV(t,n);return function(e,t){if(null===sn(e)){let n=sr(e);null!==n&&cp(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new hw(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new i7(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class cu extends ci{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new cu(e,t,n)}_apply(e){return new hw(e.firestore,e.converter,sl(e._query,this._limit,this._limitType))}}class ch extends ci{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ch(e,t,n)}_apply(e){var t;let n=cd(e,this.type,this._docOrFields,this._inclusive);return new hw(e.firestore,e.converter,(t=e._query,new i7(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)))}}class cc extends ci{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new cc(e,t,n)}_apply(e){var t;let n=cd(e,this.type,this._docOrFields,this._inclusive);return new hw(e.firestore,e.converter,(t=e._query,new i7(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n)))}}function cd(e,t,n,r){if(n[0]=(0,p.m9)(n[0]),n[0]instanceof h7)return function(e,t,n,r,i){if(!r)throw new nW(nH.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of ss(e))if(n.field.isKeyField())s.push(i_(t,r.key));else{let e=r.data.field(n.field);if(ih(e))throw new nW(nH.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new nW(nH.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new iM(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=hz(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new nW(nH.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new nW(nH.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!si(e)&&-1!==l.indexOf("/"))throw new nW(nH.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(rt.fromString(l));if(!ri.isDocumentKey(n))throw new nW(nH.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new ri(n);o.push(i_(t,i))}else{let e=hJ(n,r,l);o.push(e)}}return new iM(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function cf(e,t,n){if("string"==typeof(n=(0,p.m9)(n))){if(""===n)throw new nW(nH.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!si(t)&&-1!==n.indexOf("/"))throw new nW(nH.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(rt.fromString(n));if(!ri.isDocumentKey(r))throw new nW(nH.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i_(e,new ri(r))}if(n instanceof hv)return i_(e,n._key);throw new nW(nH.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hf(n)}.`)}function cm(e,t){if(!Array.isArray(e)||0===e.length)throw new nW(nH.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function cg(e,t){if(t.isInequality()){let n=sr(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new nW(nH.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=sn(e);null!==i&&cp(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new nW(nH.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new nW(nH.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function cp(e,t,n){if(!n.isEqual(t))throw new nW(nH.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class cy{convertValue(e,t="none"){switch(iy(e)){case 0:return null;case 1:return e.booleanValue;case 2:return il(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(iu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw nQ()}}convertObject(e,t){let n={};return r3(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new hP(il(e.latitude),il(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return ih(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ic(e));default:return null}}convertTimestamp(e){let t=io(e);return new n9(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=rt.fromString(e);aN(n)||nQ();let r=new im(n.get(1),n.get(3)),i=new ri(n.popFirst(5));return r.isEqual(t)||n$(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function cv(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class cw extends cy{constructor(e){super(),this.firestore=e}convertBytes(e){return new hO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new hv(this.firestore,null,t)}}/**
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
 */class cb{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cI extends h7{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new cE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(ct("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class cE extends cI{data(e={}){return super.data(e)}}class c_{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new cb(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new cE(this._firestore,this._userDataWriter,n.key,n,new cb(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new nW(nH.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new cE(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cb(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new cE(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cb(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nQ()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cT(e,t){return e instanceof cI&&t instanceof cI?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof c_&&t instanceof c_&&e._firestore===t._firestore&&hT(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}class cS extends cy{constructor(e){super(),this.firestore=e}convertBytes(e){return new hO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new hv(this.firestore,null,t)}}function cx(e,t,n){e=hm(e,hv);let r=hm(e.firestore,hC),i=cv(e.converter,t,n);return cA(r,[h$(hz(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,sU.none())])}function cD(e,t,n,...r){let i;e=hm(e,hv);let s=hm(e.firestore,hC),a=hz(s);return i="string"==typeof(t=(0,p.m9)(t))||t instanceof hL?hZ(a,"updateDoc",e._key,t,n,r):hX(a,"updateDoc",e._key,t),cA(s,[i.toMutation(e._key,sU.exists(!0))])}function cC(e,...t){var n,r,i;let s,a,o;e=(0,p.m9)(e);let l={includeMetadataChanges:!1},u=0;"object"!=typeof t[0]||hx(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges};if(hx(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof hv)a=hm(e.firestore,hC),o=se(e._key.path),s={next:n=>{t[u]&&t[u](cN(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=hm(e,hw);a=hm(n.firestore,hC),o=n._query;let r=new cS(a);s={next:e=>{t[u]&&t[u](new c_(a,r,n,e))},error:t[u+1],complete:t[u+2]},cn(e._query)}return function(e,t,n,r){let i=new u1(r),s=new uu(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>ui(await hs(e),s)),()=>{i.yc(),e.asyncQueue.enqueueAndForget(async()=>us(await hs(e),s))}}(hA(a),o,h,s)}function cA(e,t){return function(e,t){let n=new nY;return e.asyncQueue.enqueueAndForget(async()=>u_(await hi(e),t,n)),n.promise}(hA(e),t)}function cN(e,t,n){let r=n.docs.get(t._key),i=new cS(e);return new cI(e,i,t._key,r,new cb(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */let ck={maxAttempts:5};/**
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
 */class cR{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=hz(e)}set(e,t,n){this._verifyNotCommitted();let r=cO(e,this._firestore),i=cv(r.converter,t,n),s=h$(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,sU.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=cO(e,this._firestore);return i="string"==typeof(t=(0,p.m9)(t))||t instanceof hL?hZ(this._dataReader,"WriteBatch.update",s._key,t,n,r):hX(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,sU.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=cO(e,this._firestore);return this._mutations=this._mutations.concat(new sX(t._key,sU.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new nW(nH.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function cO(e,t){if((e=(0,p.m9)(e)).firestore!==t)throw new nW(nH.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 *//**
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
 */class cL extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=hz(e)}get(e){let t=cO(e,this._firestore),n=new cw(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return nQ();let r=e[0];if(r.isFoundDocument())return new h7(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new h7(this._firestore,n,t._key,null,t.converter);throw nQ()})}set(e,t,n){let r=cO(e,this._firestore),i=cv(r.converter,t,n),s=h$(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=cO(e,this._firestore);return i="string"==typeof(t=(0,p.m9)(t))||t instanceof hL?hZ(this._dataReader,"Transaction.update",s._key,t,n,r):hX(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=cO(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=cO(e,this._firestore),n=new cS(this._firestore);return super.get(e).then(e=>new cI(this._firestore,n,t._key,e._document,new cb(!1,!1),t.converter))}}/**
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
 */function cM(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new nW("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}/**
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
 */function cP(){if("undefined"==typeof Uint8Array)throw new nW("unimplemented","Uint8Arrays are not available in this environment.")}function cF(){if(!("undefined"!=typeof atob))throw new nW("unimplemented","Blobs are unavailable in Firestore in this environment.")}!function(e,t=!0){nU=f.SDK_VERSION,(0,f._registerComponent)(new m.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new hC(new n0(e.getProvider("auth-internal")),new n3(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nW(nH.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new im(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,f.registerVersion)(nV,"3.10.0",void 0),(0,f.registerVersion)(nV,"3.10.0","esm2017")}();class cV{constructor(e){this._delegate=e}static fromBase64String(e){return cF(),new cV(hO.fromBase64String(e))}static fromUint8Array(e){return cP(),new cV(hO.fromUint8Array(e))}toBase64(){return cF(),this._delegate.toBase64()}toUint8Array(){return cP(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function cB(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}/**
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
 */class cU{enableIndexedDbPersistence(e,t){return function(e,t){hR(e=hm(e,hC));let n=hA(e);if(n._uninitializedComponentsProvider)throw new nW(nH.FAILED_PRECONDITION,"SDK cache is already specified.");nK("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new uJ;return hk(n,i,new uX(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return function(e){hR(e=hm(e,hC));let t=hA(e);if(t._uninitializedComponentsProvider)throw new nW(nH.FAILED_PRECONDITION,"SDK cache is already specified.");nK("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new uJ;return hk(t,r,new uZ(r,n.cacheSizeBytes))}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new nW(nH.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new nY;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!rw.D())return Promise.resolve();await rw.delete(e+"main")}(o4(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}(e._delegate)}}class cq{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof im||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){let t=this._delegate._getSettings();e.merge||t.host===e.host||nK("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){!function(e,t,n,r={}){var i;let s=(e=hm(e,hy))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&nK("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=nB.MOCK_USER;else{t=(0,p.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new nW(nH.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new nB(s)}e._authCredentials=new nJ(new nX(t,n))}}(this._delegate,e,t,n)}enableNetwork(){var e;return(e=hA(hm(this._delegate,hC))).asyncQueue.enqueue(async()=>{let t=await ht(e),n=await hr(e);return t.setNetworkEnabled(!0),n.du.delete(0),lP(n)})}disableNetwork(){var e;return(e=hA(hm(this._delegate,hC))).asyncQueue.enqueue(async()=>{let t=await ht(e),n=await hr(e);return t.setNetworkEnabled(!1),async function(e){e.du.add(0),await lF(e),e.mu.set("Offline")}(n)})}enablePersistence(e){let t=!1,n=!1;return e&&hh("synchronizeTabs",t=!!e.synchronizeTabs,"experimentalForceOwningTab",n=!!e.experimentalForceOwningTab),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return function(e){let t=new nY;return e.asyncQueue.enqueueAndForget(async()=>uA(await hi(e),t)),t.promise}(hA(hm(this._delegate,hC)))}onSnapshotsInSync(e){var t;return function(e,t){let n=new u1(t);return e.asyncQueue.enqueueAndForget(async()=>{(await hs(e)).Au.add(n),n.next()}),()=>{n.yc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.Au.delete(t)})(await hs(e),n))}}(hA(hm(this._delegate,hC)),hx(e)?e:{next:e})}get app(){if(!this._appCompat)throw new nW("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new c1(this,hI(this._delegate,e))}catch(e){throw cQ(e,"collection()","Firestore.collection()")}}doc(e){try{return new cG(this,hE(this._delegate,e))}catch(e){throw cQ(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new cZ(this,function(e,t){if(e=hm(e,hy),hu("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new nW(nH.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new hw(e,null,new i7(rt.emptyPath(),t))}(this._delegate,e))}catch(e){throw cQ(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return function(e,t,n){e=hm(e,hC);let r=Object.assign(Object.assign({},ck),void 0);return!function(e){if(e.maxAttempts<1)throw new nW(nH.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new nY;return e.asyncQueue.enqueueAndForget(async()=>{let i=await he(e).then(e=>e.datastore);new u3(e.asyncQueue,i,n,t,r).run()}),r.promise}(hA(e),n=>t(new cL(e,n)),r)}(this._delegate,t=>e(new cz(this,t)))}batch(){return hA(this._delegate),new c$(new cR(this._delegate,e=>cA(this._delegate,e)))}loadBundle(e){return function(e,t){let n=hA(e=hm(e,hC)),r=new hD;return function(e,t,n,r){var i,s;let a=(i=lC(t),s=function(e,t){if(e instanceof Uint8Array)return u0(e,t);if(e instanceof ArrayBuffer)return u0(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?(new TextEncoder).encode(n):n),new u2(s,i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=ad(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.xs.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(uf(i));let s=new ud(i,e.localStore,t.serializer),a=await t._c();for(;a;){let e=await s.$u(a);e&&n._updateProgress(e),a=await t._c()}let o=await s.complete();return await uP(e,o.Bu,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.xs.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.Fu)}catch(e){return nK("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await hi(e),a,r)})}(n,e._databaseId,t,r),r}(this._delegate,e)}namedQuery(e){var t,n;return(n=hA(t=hm(t=this._delegate,hC))).asyncQueue.enqueue(async()=>{var t;return(t=await hn(n)).persistence.runTransaction("Get named query","readonly",n=>t.xs.getNamedQuery(n,e))}).then(e=>e?new hw(t,null,e.query):null).then(e=>e?new cZ(this,e):null)}}class cj extends cy{constructor(e){super(),this.firestore=e}convertBytes(e){return new cV(new hO(e))}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return cG.forKey(t,this.firestore,null)}}class cz{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new cj(e)}get(e){let t=hm(e,hv);return this._delegate.get(t).then(e=>new cY(this._firestore,new cI(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){let r=hm(e,hv);return n?(cM("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){let i=hm(e,hv);return 2==arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){let t=hm(e,hv);return this._delegate.delete(t),this}}class c${constructor(e){this._delegate=e}set(e,t,n){let r=hm(e,hv);return n?(cM("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){let i=hm(e,hv);return 2==arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){let t=hm(e,hv);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class cK{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){let n=new cE(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new cX(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){let n=cK.INSTANCES,r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new cK(e,new cj(e),t),r.set(t,i)),i}}cK.INSTANCES=new WeakMap;class cG{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cj(e)}static forPath(e,t,n){if(e.length%2!=0)throw new nW("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new cG(t,new hv(t._delegate,n,new ri(e)))}static forKey(e,t,n){return new cG(t,new hv(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new c1(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new c1(this.firestore,hI(this._delegate,e))}catch(e){throw cQ(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=(0,p.m9)(e))instanceof hv&&h_(this._delegate,e)}set(e,t){t=cM("DocumentReference.set",t);try{if(t)return cx(this._delegate,e,t);return cx(this._delegate,e)}catch(e){throw cQ(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{if(1==arguments.length)return cD(this._delegate,e);return cD(this._delegate,e,t,...n)}catch(e){throw cQ(e,"updateDoc()","DocumentReference.update()")}}delete(){var e;return cA(hm((e=this._delegate).firestore,hC),[new sX(e._key,sU.none())])}onSnapshot(...e){let t=cH(e),n=cW(e,e=>new cY(this.firestore,new cI(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return cC(this._delegate,t,n)}get(e){return((null==e?void 0:e.source)==="cache"?function(e){e=hm(e,hv);let t=hm(e.firestore,hC),n=hA(t),r=new cS(t);return(function(e,t){let n=new nY;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new nW(nH.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=l9(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await hn(e),t,n)),n.promise})(n,e._key).then(n=>new cI(t,r,e._key,n,new cb(null!==n&&n.hasLocalMutations,!0),e.converter))}(this._delegate):(null==e?void 0:e.source)==="server"?function(e){e=hm(e,hv);let t=hm(e.firestore,hC);return ha(hA(t),e._key,{source:"server"}).then(n=>cN(t,e,n))}(this._delegate):/**
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
 */function(e){e=hm(e,hv);let t=hm(e.firestore,hC);return ha(hA(t),e._key).then(n=>cN(t,e,n))}(this._delegate)).then(e=>new cY(this.firestore,new cI(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new cG(this.firestore,e?this._delegate.withConverter(cK.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function cQ(e,t,n){return e.message=e.message.replace(t,n),e}function cH(e){for(let t of e)if("object"==typeof t&&!cB(t))return t;return{}}function cW(e,t){var n,r;let i;return{next:e=>{i.next&&i.next(t(e))},error:null===(n=(i=cB(e[0])?e[0]:cB(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]}).error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class cY{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new cG(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return cT(this._delegate,e._delegate)}}class cX extends cY{data(e){let t=this._delegate.data(e);return void 0!==t||nQ(),t}}class cZ{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cj(e)}where(e,t,n){try{return new cZ(this.firestore,cs(this._delegate,function(e,t,n){let r=ct("where",e);return ca._create(r,t,n)}(e,t,n)))}catch(e){throw cQ(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new cZ(this.firestore,cs(this._delegate,function(e,t="asc"){let n=ct("orderBy",e);return cl._create(n,t)}(e,t)))}catch(e){throw cQ(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new cZ(this.firestore,cs(this._delegate,(hg("limit",e),cu._create("limit",e,"F"))))}catch(e){throw cQ(e,"limit()","Query.limit()")}}limitToLast(e){try{return new cZ(this.firestore,cs(this._delegate,(hg("limitToLast",e),cu._create("limitToLast",e,"L"))))}catch(e){throw cQ(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new cZ(this.firestore,cs(this._delegate,function(...e){return ch._create("startAt",e,!0)}(...e)))}catch(e){throw cQ(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new cZ(this.firestore,cs(this._delegate,function(...e){return ch._create("startAfter",e,!1)}(...e)))}catch(e){throw cQ(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new cZ(this.firestore,cs(this._delegate,function(...e){return cc._create("endBefore",e,!1)}(...e)))}catch(e){throw cQ(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new cZ(this.firestore,cs(this._delegate,function(...e){return cc._create("endAt",e,!0)}(...e)))}catch(e){throw cQ(e,"endAt()","Query.endAt()")}}isEqual(e){return hT(this._delegate,e._delegate)}get(e){return((null==e?void 0:e.source)==="cache"?function(e){e=hm(e,hw);let t=hm(e.firestore,hC),n=hA(t),r=new cS(t);return(function(e,t){let n=new nY;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await ln(e,t,!0),i=new up(t,r.Wi),s=i.zu(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=l9(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await hn(e),t,n)),n.promise})(n,e._query).then(n=>new c_(t,r,e,n))}(this._delegate):(null==e?void 0:e.source)==="server"?function(e){e=hm(e,hw);let t=hm(e.firestore,hC),n=hA(t),r=new cS(t);return ho(n,e._query,{source:"server"}).then(n=>new c_(t,r,e,n))}(this._delegate):function(e){e=hm(e,hw);let t=hm(e.firestore,hC),n=hA(t),r=new cS(t);return cn(e._query),ho(n,e._query).then(n=>new c_(t,r,e,n))}(this._delegate)).then(e=>new c0(this.firestore,new c_(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){let t=cH(e),n=cW(e,e=>new c0(this.firestore,new c_(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return cC(this._delegate,t,n)}withConverter(e){return new cZ(this.firestore,e?this._delegate.withConverter(cK.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class cJ{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new cX(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class c0{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new cZ(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new cX(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new cJ(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new cX(this._firestore,n))})}isEqual(e){return cT(this._delegate,e._delegate)}}class c1 extends cZ{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){let e=this._delegate.parent;return e?new cG(this.firestore,e):null}doc(e){try{if(void 0===e)return new cG(this.firestore,hE(this._delegate));return new cG(this.firestore,hE(this._delegate,e))}catch(e){throw cQ(e,"doc()","CollectionReference.doc()")}}add(e){return(function(e,t){let n=hm(e.firestore,hC),r=hE(e),i=cv(e.converter,t);return cA(n,[h$(hz(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,sU.exists(!1))]).then(()=>r)})(this._delegate,e).then(e=>new cG(this.firestore,e))}isEqual(e){return h_(this._delegate,e._delegate)}withConverter(e){return new c1(this.firestore,e?this._delegate.withConverter(cK.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}/**
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
 */class c2{constructor(...e){this._delegate=new hL(...e)}static documentId(){return new c2(rr.keyField().canonicalString())}isEqual(e){return(e=(0,p.m9)(e))instanceof hL&&this._delegate._internalPath.isEqual(e._internalPath)}}/**
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
 */class c4{constructor(e){this._delegate=e}static serverTimestamp(){let e=new hQ("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new c4(e)}static delete(){let e=new hK("deleteField");return e._methodName="FieldValue.delete",new c4(e)}static arrayUnion(...e){let t=function(...e){return new hH("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new c4(t)}static arrayRemove(...e){let t=function(...e){return new hW("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new c4(t)}static increment(e){let t=new hY("increment",e);return t._methodName="FieldValue.increment",new c4(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */let c3={Firestore:cq,GeoPoint:hP,Timestamp:n9,Blob:cV,Transaction:cz,WriteBatch:c$,DocumentReference:cG,DocumentSnapshot:cY,Query:cZ,QueryDocumentSnapshot:cX,QuerySnapshot:c0,CollectionReference:c1,FieldPath:c2,FieldValue:c4,setLogLevel:function(e){nq.setLogLevel(e)},CACHE_SIZE_UNLIMITED:-1};!function(e,t){e.INTERNAL.registerComponent(new m.wA("firestore-compat",e=>{let n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},c3)))}(i=d.Z,(e,t)=>new cq(e,t,new cU)),i.registerVersion("@firebase/firestore-compat","0.3.6")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);