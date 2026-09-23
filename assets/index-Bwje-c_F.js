var Ow=Object.defineProperty;var kw=(n,e,t)=>e in n?Ow(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qe=(n,e,t)=>kw(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function I_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sf={exports:{}},Pa={},Mf={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function Bw(){if(Y0)return yt;Y0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function m(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,ae,Se){this.props=N,this.context=ae,this.refs=T,this.updater=Se||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,ae){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ae,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function P(N,ae,Se){this.props=N,this.context=ae,this.refs=T,this.updater=Se||x}var F=P.prototype=new y;F.constructor=P,M(F,S.prototype),F.isPureReactComponent=!0;var C=Array.isArray,R=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(N,ae,Se){var ke,Be={},He=null,oe=null;if(ae!=null)for(ke in ae.ref!==void 0&&(oe=ae.ref),ae.key!==void 0&&(He=""+ae.key),ae)R.call(ae,ke)&&!O.hasOwnProperty(ke)&&(Be[ke]=ae[ke]);var fe=arguments.length-2;if(fe===1)Be.children=Se;else if(1<fe){for(var Ee=Array(fe),Je=0;Je<fe;Je++)Ee[Je]=arguments[Je+2];Be.children=Ee}if(N&&N.defaultProps)for(ke in fe=N.defaultProps,fe)Be[ke]===void 0&&(Be[ke]=fe[ke]);return{$$typeof:n,type:N,key:He,ref:oe,props:Be,_owner:L.current}}function D(N,ae){return{$$typeof:n,type:N.type,key:ae,ref:N.ref,props:N.props,_owner:N._owner}}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function G(N){var ae={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Se){return ae[Se]})}var $=/\/+/g;function ie(N,ae){return typeof N=="object"&&N!==null&&N.key!=null?G(""+N.key):ae.toString(36)}function H(N,ae,Se,ke,Be){var He=typeof N;(He==="undefined"||He==="boolean")&&(N=null);var oe=!1;if(N===null)oe=!0;else switch(He){case"string":case"number":oe=!0;break;case"object":switch(N.$$typeof){case n:case e:oe=!0}}if(oe)return oe=N,Be=Be(oe),N=ke===""?"."+ie(oe,0):ke,C(Be)?(Se="",N!=null&&(Se=N.replace($,"$&/")+"/"),H(Be,ae,Se,"",function(Je){return Je})):Be!=null&&(B(Be)&&(Be=D(Be,Se+(!Be.key||oe&&oe.key===Be.key?"":(""+Be.key).replace($,"$&/")+"/")+N)),ae.push(Be)),1;if(oe=0,ke=ke===""?".":ke+":",C(N))for(var fe=0;fe<N.length;fe++){He=N[fe];var Ee=ke+ie(He,fe);oe+=H(He,ae,Se,Ee,Be)}else if(Ee=m(N),typeof Ee=="function")for(N=Ee.call(N),fe=0;!(He=N.next()).done;)He=He.value,Ee=ke+ie(He,fe++),oe+=H(He,ae,Se,Ee,Be);else if(He==="object")throw ae=String(N),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return oe}function ee(N,ae,Se){if(N==null)return N;var ke=[],Be=0;return H(N,ke,"","",function(He){return ae.call(Se,He,Be++)}),ke}function he(N){if(N._status===-1){var ae=N._result;ae=ae(),ae.then(function(Se){(N._status===0||N._status===-1)&&(N._status=1,N._result=Se)},function(Se){(N._status===0||N._status===-1)&&(N._status=2,N._result=Se)}),N._status===-1&&(N._status=0,N._result=ae)}if(N._status===1)return N._result.default;throw N._result}var J={current:null},Z={transition:null},Q={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:Z,ReactCurrentOwner:L};function K(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:ee,forEach:function(N,ae,Se){ee(N,function(){ae.apply(this,arguments)},Se)},count:function(N){var ae=0;return ee(N,function(){ae++}),ae},toArray:function(N){return ee(N,function(ae){return ae})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},yt.Component=S,yt.Fragment=t,yt.Profiler=o,yt.PureComponent=P,yt.StrictMode=i,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,yt.act=K,yt.cloneElement=function(N,ae,Se){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ke=M({},N.props),Be=N.key,He=N.ref,oe=N._owner;if(ae!=null){if(ae.ref!==void 0&&(He=ae.ref,oe=L.current),ae.key!==void 0&&(Be=""+ae.key),N.type&&N.type.defaultProps)var fe=N.type.defaultProps;for(Ee in ae)R.call(ae,Ee)&&!O.hasOwnProperty(Ee)&&(ke[Ee]=ae[Ee]===void 0&&fe!==void 0?fe[Ee]:ae[Ee])}var Ee=arguments.length-2;if(Ee===1)ke.children=Se;else if(1<Ee){fe=Array(Ee);for(var Je=0;Je<Ee;Je++)fe[Je]=arguments[Je+2];ke.children=fe}return{$$typeof:n,type:N.type,key:Be,ref:He,props:ke,_owner:oe}},yt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},yt.createElement=E,yt.createFactory=function(N){var ae=E.bind(null,N);return ae.type=N,ae},yt.createRef=function(){return{current:null}},yt.forwardRef=function(N){return{$$typeof:u,render:N}},yt.isValidElement=B,yt.lazy=function(N){return{$$typeof:p,_payload:{_status:-1,_result:N},_init:he}},yt.memo=function(N,ae){return{$$typeof:h,type:N,compare:ae===void 0?null:ae}},yt.startTransition=function(N){var ae=Z.transition;Z.transition={};try{N()}finally{Z.transition=ae}},yt.unstable_act=K,yt.useCallback=function(N,ae){return J.current.useCallback(N,ae)},yt.useContext=function(N){return J.current.useContext(N)},yt.useDebugValue=function(){},yt.useDeferredValue=function(N){return J.current.useDeferredValue(N)},yt.useEffect=function(N,ae){return J.current.useEffect(N,ae)},yt.useId=function(){return J.current.useId()},yt.useImperativeHandle=function(N,ae,Se){return J.current.useImperativeHandle(N,ae,Se)},yt.useInsertionEffect=function(N,ae){return J.current.useInsertionEffect(N,ae)},yt.useLayoutEffect=function(N,ae){return J.current.useLayoutEffect(N,ae)},yt.useMemo=function(N,ae){return J.current.useMemo(N,ae)},yt.useReducer=function(N,ae,Se){return J.current.useReducer(N,ae,Se)},yt.useRef=function(N){return J.current.useRef(N)},yt.useState=function(N){return J.current.useState(N)},yt.useSyncExternalStore=function(N,ae,Se){return J.current.useSyncExternalStore(N,ae,Se)},yt.useTransition=function(){return J.current.useTransition()},yt.version="18.3.1",yt}var q0;function Cp(){return q0||(q0=1,Mf.exports=Bw()),Mf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function zw(){if($0)return Pa;$0=1;var n=Cp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},m=null,x=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:m,ref:x,props:v,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=c,Pa.jsxs=c,Pa}var K0;function Vw(){return K0||(K0=1,Sf.exports=zw()),Sf.exports}var I=Vw(),_e=Cp();const Jr=I_(_e);var wc={},wf={exports:{}},Jn={},Ef={exports:{}},Tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function Hw(){return Z0||(Z0=1,(function(n){function e(Z,Q){var K=Z.length;Z.push(Q);e:for(;0<K;){var N=K-1>>>1,ae=Z[N];if(0<o(ae,Q))Z[N]=Q,Z[K]=ae,K=N;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var Q=Z[0],K=Z.pop();if(K!==Q){Z[0]=K;e:for(var N=0,ae=Z.length,Se=ae>>>1;N<Se;){var ke=2*(N+1)-1,Be=Z[ke],He=ke+1,oe=Z[He];if(0>o(Be,K))He<ae&&0>o(oe,Be)?(Z[N]=oe,Z[He]=K,N=He):(Z[N]=Be,Z[ke]=K,N=ke);else if(He<ae&&0>o(oe,K))Z[N]=oe,Z[He]=K,N=He;else break e}}return Q}function o(Z,Q){var K=Z.sortIndex-Q.sortIndex;return K!==0?K:Z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,m=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Z){for(var Q=t(h);Q!==null;){if(Q.callback===null)i(h);else if(Q.startTime<=Z)i(h),Q.sortIndex=Q.expirationTime,e(d,Q);else break;Q=t(h)}}function C(Z){if(T=!1,F(Z),!M)if(t(d)!==null)M=!0,he(R);else{var Q=t(h);Q!==null&&J(C,Q.startTime-Z)}}function R(Z,Q){M=!1,T&&(T=!1,y(E),E=-1),x=!0;var K=m;try{for(F(Q),v=t(d);v!==null&&(!(v.expirationTime>Q)||Z&&!G());){var N=v.callback;if(typeof N=="function"){v.callback=null,m=v.priorityLevel;var ae=N(v.expirationTime<=Q);Q=n.unstable_now(),typeof ae=="function"?v.callback=ae:v===t(d)&&i(d),F(Q)}else i(d);v=t(d)}if(v!==null)var Se=!0;else{var ke=t(h);ke!==null&&J(C,ke.startTime-Q),Se=!1}return Se}finally{v=null,m=K,x=!1}}var L=!1,O=null,E=-1,D=5,B=-1;function G(){return!(n.unstable_now()-B<D)}function $(){if(O!==null){var Z=n.unstable_now();B=Z;var Q=!0;try{Q=O(!0,Z)}finally{Q?ie():(L=!1,O=null)}}else L=!1}var ie;if(typeof P=="function")ie=function(){P($)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ee=H.port2;H.port1.onmessage=$,ie=function(){ee.postMessage(null)}}else ie=function(){S($,0)};function he(Z){O=Z,L||(L=!0,ie())}function J(Z,Q){E=S(function(){Z(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,he(R))},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(Z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var K=m;m=Q;try{return Z()}finally{m=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,Q){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var K=m;m=Z;try{return Q()}finally{m=K}},n.unstable_scheduleCallback=function(Z,Q,K){var N=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?N+K:N):K=N,Z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=K+ae,Z={id:p++,callback:Q,priorityLevel:Z,startTime:K,expirationTime:ae,sortIndex:-1},K>N?(Z.sortIndex=K,e(h,Z),t(d)===null&&Z===t(h)&&(T?(y(E),E=-1):T=!0,J(C,K-N))):(Z.sortIndex=ae,e(d,Z),M||x||(M=!0,he(R))),Z},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(Z){var Q=m;return function(){var K=m;m=Q;try{return Z.apply(this,arguments)}finally{m=K}}}})(Tf)),Tf}var Q0;function Gw(){return Q0||(Q0=1,Ef.exports=Hw()),Ef.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function Ww(){if(J0)return Jn;J0=1;var n=Cp(),e=Gw();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function m(r){return d.call(v,r)?!0:d.call(p,r)?!1:h.test(r)?v[r]=!0:(p[r]=!0,!1)}function x(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,l,f){if(s===null||typeof s>"u"||x(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(r,s,l,f,g,_,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=_,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new T(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];S[s]=new T(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new T(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new T(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new T(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new T(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new T(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new T(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new T(r,5,!1,r.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(y,P);S[s]=new T(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(y,P);S[s]=new T(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(y,P);S[s]=new T(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new T(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new T(r,1,!1,r.toLowerCase(),null,!0,!0)});function F(r,s,l,f){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,f)&&(l=null),f||g===null?m(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):g.mustUseProperty?r[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,f=g.attributeNamespace,l===null?r.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),G=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),Z=Symbol.iterator;function Q(r){return r===null||typeof r!="object"?null:(r=Z&&r[Z]||r["@@iterator"],typeof r=="function"?r:null)}var K=Object.assign,N;function ae(r){if(N===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+r}var Se=!1;function ke(r,s){if(!r||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var f=de}Reflect.construct(r,[],s)}else{try{s.call()}catch(de){f=de}r.call(s.prototype)}else{try{throw Error()}catch(de){f=de}r()}}catch(de){if(de&&f&&typeof de.stack=="string"){for(var g=de.stack.split(`
`),_=f.stack.split(`
`),b=g.length-1,k=_.length-1;1<=b&&0<=k&&g[b]!==_[k];)k--;for(;1<=b&&0<=k;b--,k--)if(g[b]!==_[k]){if(b!==1||k!==1)do if(b--,k--,0>k||g[b]!==_[k]){var V=`
`+g[b].replace(" at new "," at ");return r.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",r.displayName)),V}while(1<=b&&0<=k);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?ae(r):""}function Be(r){switch(r.tag){case 5:return ae(r.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return r=ke(r.type,!1),r;case 11:return r=ke(r.type.render,!1),r;case 1:return r=ke(r.type,!0),r;default:return""}}function He(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case O:return"Fragment";case L:return"Portal";case D:return"Profiler";case E:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case G:return(r.displayName||"Context")+".Consumer";case B:return(r._context.displayName||"Context")+".Provider";case $:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ee:return s=r.displayName||null,s!==null?s:He(r.type)||"Memo";case he:s=r._payload,r=r._init;try{return He(r(s))}catch{}}return null}function oe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return He(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ee(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(r){var s=Ee(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,_=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return g.call(this)},set:function(b){f=""+b,_.call(this,b)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(b){f=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ne(r){r._valueTracker||(r._valueTracker=Je(r))}function dt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=Ee(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function zt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function lt(r,s){var l=s.checked;return K({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function vt(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=fe(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function At(r,s){s=s.checked,s!=null&&F(r,"checked",s,!1)}function mt(r,s){At(r,s);var l=fe(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Wt(r,s.type,l):s.hasOwnProperty("defaultValue")&&Wt(r,s.type,fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function It(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Wt(r,s,l){(s!=="number"||zt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var nn=Array.isArray;function Rt(r,s,l,f){if(r=r.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<r.length;l++)g=s.hasOwnProperty("$"+r[l].value),r[l].selected!==g&&(r[l].selected=g),g&&f&&(r[l].defaultSelected=!0)}else{for(l=""+fe(l),s=null,g=0;g<r.length;g++){if(r[g].value===l){r[g].selected=!0,f&&(r[g].defaultSelected=!0);return}s!==null||r[g].disabled||(s=r[g])}s!==null&&(s.selected=!0)}}function Bt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Y(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(nn(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:fe(l)}}function rn(r,s){var l=fe(s.value),f=fe(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Mt(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function U(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?U(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var z,te=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,g){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,g)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(z=z||document.createElement("div"),z.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=z.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ce(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(ve).forEach(function(r){be.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ve[s]=ve[r]})});function pe(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ve.hasOwnProperty(r)&&ve[r]?(""+s).trim():s+"px"}function me(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=pe(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,g):r[l]=g}}var Ae=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(r,s){if(s){if(Ae[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Ke(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var nt=null,at=null,W=null;function Re(r){if(r=ma(r)){if(typeof nt!="function")throw Error(t(280));var s=r.stateNode;s&&(s=kl(s),nt(r.stateNode,r.type,s))}}function ge(r){at?W?W.push(r):W=[r]:at=r}function Pe(){if(at){var r=at,s=W;if(W=at=null,Re(r),s)for(r=0;r<s.length;r++)Re(s[r])}}function Oe(r,s){return r(s)}function xe(){}var et=!1;function Ye(r,s,l){if(et)return r(s,l);et=!0;try{return Oe(r,s,l)}finally{et=!1,(at!==null||W!==null)&&(xe(),Pe())}}function Pt(r,s){var l=r.stateNode;if(l===null)return null;var f=kl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var bt=!1;if(u)try{var An={};Object.defineProperty(An,"passive",{get:function(){bt=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{bt=!1}function hi(r,s,l,f,g,_,b,k,V){var de=Array.prototype.slice.call(arguments,3);try{s.apply(l,de)}catch(Me){this.onError(Me)}}var ss=!1,Vs=null,os=!1,as=null,Gu={onError:function(r){ss=!0,Vs=r}};function yl(r,s,l,f,g,_,b,k,V){ss=!1,Vs=null,hi.apply(Gu,arguments)}function Sl(r,s,l,f,g,_,b,k,V){if(yl.apply(this,arguments),ss){if(ss){var de=Vs;ss=!1,Vs=null}else throw Error(t(198));os||(os=!0,as=de)}}function Hn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Hs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function qo(r){if(Hn(r)!==r)throw Error(t(188))}function Ml(r){var s=r.alternate;if(!s){if(s=Hn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var g=l.return;if(g===null)break;var _=g.alternate;if(_===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===l)return qo(g),r;if(_===f)return qo(g),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=_;else{for(var b=!1,k=g.child;k;){if(k===l){b=!0,l=g,f=_;break}if(k===f){b=!0,f=g,l=_;break}k=k.sibling}if(!b){for(k=_.child;k;){if(k===l){b=!0,l=_,f=g;break}if(k===f){b=!0,f=_,l=g;break}k=k.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function ls(r){return r=Ml(r),r!==null?$o(r):null}function $o(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=$o(r);if(s!==null)return s;r=r.sibling}return null}var cs=e.unstable_scheduleCallback,Ko=e.unstable_cancelCallback,wl=e.unstable_shouldYield,Wu=e.unstable_requestPaint,Zt=e.unstable_now,Xu=e.unstable_getCurrentPriorityLevel,Zo=e.unstable_ImmediatePriority,Qo=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,X=e.unstable_LowPriority,ue=e.unstable_IdlePriority,re=null,ne=null;function Ue(r){if(ne&&typeof ne.onCommitFiberRoot=="function")try{ne.onCommitFiberRoot(re,r,void 0,(r.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Ze,Ie=Math.log,Xe=Math.LN2;function Ze(r){return r>>>=0,r===0?32:31-(Ie(r)/Xe|0)|0}var ft=64,gt=4194304;function Ge(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function wt(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,g=r.suspendedLanes,_=r.pingedLanes,b=l&268435455;if(b!==0){var k=b&~g;k!==0?f=Ge(k):(_&=b,_!==0&&(f=Ge(_)))}else b=l&~g,b!==0?f=Ge(b):_!==0&&(f=Ge(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,_=s&-s,g>=_||g===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-De(s),g=1<<l,f|=r[l],s&=~g;return f}function sn(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,g=r.expirationTimes,_=r.pendingLanes;0<_;){var b=31-De(_),k=1<<b,V=g[b];V===-1?((k&l)===0||(k&f)!==0)&&(g[b]=sn(k,s)):V<=s&&(r.expiredLanes|=k),_&=~k}}function Ut(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function pn(){var r=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),r}function ze(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ln(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-De(s),r[s]=l}function Et(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var g=31-De(l),_=1<<g;s[g]=0,f[g]=-1,r[g]=-1,l&=~_}}function Dn(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-De(l),g=1<<f;g&s|r[f]&s&&(r[f]|=s),l&=~g}}var xt=0;function bi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var nr,Lt,qt,Ai,Ft,pi=!1,Ci=[],Ri=null,Er=null,Tr=null,Jo=new Map,ea=new Map,br=[],sM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(r,s){switch(r){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Jo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(s.pointerId)}}function ta(r,s,l,f,g,_){return r===null||r.nativeEvent!==_?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[g]},s!==null&&(s=ma(s),s!==null&&Lt(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),r)}function oM(r,s,l,f,g){switch(s){case"focusin":return Ri=ta(Ri,r,s,l,f,g),!0;case"dragenter":return Er=ta(Er,r,s,l,f,g),!0;case"mouseover":return Tr=ta(Tr,r,s,l,f,g),!0;case"pointerover":var _=g.pointerId;return Jo.set(_,ta(Jo.get(_)||null,r,s,l,f,g)),!0;case"gotpointercapture":return _=g.pointerId,ea.set(_,ta(ea.get(_)||null,r,s,l,f,g)),!0}return!1}function Lm(r){var s=us(r.target);if(s!==null){var l=Hn(s);if(l!==null){if(s=l.tag,s===13){if(s=Hs(l),s!==null){r.blockedOn=s,Ft(r.priority,function(){qt(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function El(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Yu(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);Ce=f,l.target.dispatchEvent(f),Ce=null}else return s=ma(l),s!==null&&Lt(s),r.blockedOn=l,!1;s.shift()}return!0}function Dm(r,s,l){El(r)&&l.delete(s)}function aM(){pi=!1,Ri!==null&&El(Ri)&&(Ri=null),Er!==null&&El(Er)&&(Er=null),Tr!==null&&El(Tr)&&(Tr=null),Jo.forEach(Dm),ea.forEach(Dm)}function na(r,s){r.blockedOn===s&&(r.blockedOn=null,pi||(pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,aM)))}function ia(r){function s(g){return na(g,r)}if(0<Ci.length){na(Ci[0],r);for(var l=1;l<Ci.length;l++){var f=Ci[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Ri!==null&&na(Ri,r),Er!==null&&na(Er,r),Tr!==null&&na(Tr,r),Jo.forEach(s),ea.forEach(s),l=0;l<br.length;l++)f=br[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)Lm(l),l.blockedOn===null&&br.shift()}var Gs=C.ReactCurrentBatchConfig,Tl=!0;function lM(r,s,l,f){var g=xt,_=Gs.transition;Gs.transition=null;try{xt=1,ju(r,s,l,f)}finally{xt=g,Gs.transition=_}}function cM(r,s,l,f){var g=xt,_=Gs.transition;Gs.transition=null;try{xt=4,ju(r,s,l,f)}finally{xt=g,Gs.transition=_}}function ju(r,s,l,f){if(Tl){var g=Yu(r,s,l,f);if(g===null)ud(r,s,f,bl,l),Pm(r,f);else if(oM(g,r,s,l,f))f.stopPropagation();else if(Pm(r,f),s&4&&-1<sM.indexOf(r)){for(;g!==null;){var _=ma(g);if(_!==null&&nr(_),_=Yu(r,s,l,f),_===null&&ud(r,s,f,bl,l),_===g)break;g=_}g!==null&&f.stopPropagation()}else ud(r,s,f,null,l)}}var bl=null;function Yu(r,s,l,f){if(bl=null,r=Ke(f),r=us(r),r!==null)if(s=Hn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Hs(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return bl=r,null}function Nm(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xu()){case Zo:return 1;case Qo:return 4;case A:case X:return 16;case ue:return 536870912;default:return 16}default:return 16}}var Ar=null,qu=null,Al=null;function Im(){if(Al)return Al;var r,s=qu,l=s.length,f,g="value"in Ar?Ar.value:Ar.textContent,_=g.length;for(r=0;r<l&&s[r]===g[r];r++);var b=l-r;for(f=1;f<=b&&s[l-f]===g[_-f];f++);return Al=g.slice(r,1<f?1-f:void 0)}function Cl(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Rl(){return!0}function Um(){return!1}function ri(r){function s(l,f,g,_,b){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(l=r[k],this[k]=l?l(_):_[k]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Rl:Um,this.isPropagationStopped=Um,this}return K(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),s}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=ri(Ws),ra=K({},Ws,{view:0,detail:0}),uM=ri(ra),Ku,Zu,sa,Pl=K({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==sa&&(sa&&r.type==="mousemove"?(Ku=r.screenX-sa.screenX,Zu=r.screenY-sa.screenY):Zu=Ku=0,sa=r),Ku)},movementY:function(r){return"movementY"in r?r.movementY:Zu}}),Fm=ri(Pl),dM=K({},Pl,{dataTransfer:0}),fM=ri(dM),hM=K({},ra,{relatedTarget:0}),Qu=ri(hM),pM=K({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),mM=ri(pM),gM=K({},Ws,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),vM=ri(gM),xM=K({},Ws,{data:0}),Om=ri(xM),_M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=SM[r])?!!s[r]:!1}function Ju(){return MM}var wM=K({},ra,{key:function(r){if(r.key){var s=_M[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Cl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?yM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(r){return r.type==="keypress"?Cl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Cl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),EM=ri(wM),TM=K({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=ri(TM),bM=K({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),AM=ri(bM),CM=K({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),RM=ri(CM),PM=K({},Pl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),LM=ri(PM),DM=[9,13,27,32],ed=u&&"CompositionEvent"in window,oa=null;u&&"documentMode"in document&&(oa=document.documentMode);var NM=u&&"TextEvent"in window&&!oa,Bm=u&&(!ed||oa&&8<oa&&11>=oa),zm=" ",Vm=!1;function Hm(r,s){switch(r){case"keyup":return DM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Xs=!1;function IM(r,s){switch(r){case"compositionend":return Gm(s);case"keypress":return s.which!==32?null:(Vm=!0,zm);case"textInput":return r=s.data,r===zm&&Vm?null:r;default:return null}}function UM(r,s){if(Xs)return r==="compositionend"||!ed&&Hm(r,s)?(r=Im(),Al=qu=Ar=null,Xs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Bm&&s.locale!=="ko"?null:s.data;default:return null}}var FM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!FM[r.type]:s==="textarea"}function Xm(r,s,l,f){ge(f),s=Ul(s,"onChange"),0<s.length&&(l=new $u("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var aa=null,la=null;function OM(r){cg(r,0)}function Ll(r){var s=Ks(r);if(dt(s))return r}function kM(r,s){if(r==="change")return s}var jm=!1;if(u){var td;if(u){var nd="oninput"in document;if(!nd){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),nd=typeof Ym.oninput=="function"}td=nd}else td=!1;jm=td&&(!document.documentMode||9<document.documentMode)}function qm(){aa&&(aa.detachEvent("onpropertychange",$m),la=aa=null)}function $m(r){if(r.propertyName==="value"&&Ll(la)){var s=[];Xm(s,la,r,Ke(r)),Ye(OM,s)}}function BM(r,s,l){r==="focusin"?(qm(),aa=s,la=l,aa.attachEvent("onpropertychange",$m)):r==="focusout"&&qm()}function zM(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ll(la)}function VM(r,s){if(r==="click")return Ll(s)}function HM(r,s){if(r==="input"||r==="change")return Ll(s)}function GM(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Pi=typeof Object.is=="function"?Object.is:GM;function ca(r,s){if(Pi(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!d.call(s,g)||!Pi(r[g],s[g]))return!1}return!0}function Km(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Zm(r,s){var l=Km(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Km(l)}}function Qm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Qm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Jm(){for(var r=window,s=zt();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=zt(r.document)}return s}function id(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function WM(r){var s=Jm(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Qm(l.ownerDocument.documentElement,l)){if(f!==null&&id(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var g=l.textContent.length,_=Math.min(f.start,g);f=f.end===void 0?_:Math.min(f.end,g),!r.extend&&_>f&&(g=f,f=_,_=g),g=Zm(l,_);var b=Zm(l,f);g&&b&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==b.node||r.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),r.removeAllRanges(),_>f?(r.addRange(s),r.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var XM=u&&"documentMode"in document&&11>=document.documentMode,js=null,rd=null,ua=null,sd=!1;function eg(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;sd||js==null||js!==zt(f)||(f=js,"selectionStart"in f&&id(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ua&&ca(ua,f)||(ua=f,f=Ul(rd,"onSelect"),0<f.length&&(s=new $u("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=js)))}function Dl(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var Ys={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},od={},tg={};u&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Nl(r){if(od[r])return od[r];if(!Ys[r])return r;var s=Ys[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in tg)return od[r]=s[l];return r}var ng=Nl("animationend"),ig=Nl("animationiteration"),rg=Nl("animationstart"),sg=Nl("transitionend"),og=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(r,s){og.set(r,s),a(s,[r])}for(var ad=0;ad<ag.length;ad++){var ld=ag[ad],jM=ld.toLowerCase(),YM=ld[0].toUpperCase()+ld.slice(1);Cr(jM,"on"+YM)}Cr(ng,"onAnimationEnd"),Cr(ig,"onAnimationIteration"),Cr(rg,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(sg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qM=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function lg(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,Sl(f,s,void 0,r),r.currentTarget=null}function cg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],g=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var b=f.length-1;0<=b;b--){var k=f[b],V=k.instance,de=k.currentTarget;if(k=k.listener,V!==_&&g.isPropagationStopped())break e;lg(g,k,de),_=V}else for(b=0;b<f.length;b++){if(k=f[b],V=k.instance,de=k.currentTarget,k=k.listener,V!==_&&g.isPropagationStopped())break e;lg(g,k,de),_=V}}}if(os)throw r=as,os=!1,as=null,r}function Xt(r,s){var l=s[gd];l===void 0&&(l=s[gd]=new Set);var f=r+"__bubble";l.has(f)||(ug(s,r,2,!1),l.add(f))}function cd(r,s,l){var f=0;s&&(f|=4),ug(l,r,f,s)}var Il="_reactListening"+Math.random().toString(36).slice(2);function fa(r){if(!r[Il]){r[Il]=!0,i.forEach(function(l){l!=="selectionchange"&&(qM.has(l)||cd(l,!1,r),cd(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Il]||(s[Il]=!0,cd("selectionchange",!1,s))}}function ug(r,s,l,f){switch(Nm(s)){case 1:var g=lM;break;case 4:g=cM;break;default:g=ju}l=g.bind(null,s,l,r),g=void 0,!bt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?r.addEventListener(s,l,{capture:!0,passive:g}):r.addEventListener(s,l,!0):g!==void 0?r.addEventListener(s,l,{passive:g}):r.addEventListener(s,l,!1)}function ud(r,s,l,f,g){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var b=f.tag;if(b===3||b===4){var k=f.stateNode.containerInfo;if(k===g||k.nodeType===8&&k.parentNode===g)break;if(b===4)for(b=f.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;b=b.return}for(;k!==null;){if(b=us(k),b===null)return;if(V=b.tag,V===5||V===6){f=_=b;continue e}k=k.parentNode}}f=f.return}Ye(function(){var de=_,Me=Ke(l),we=[];e:{var ye=og.get(r);if(ye!==void 0){var Ve=$u,je=r;switch(r){case"keypress":if(Cl(l)===0)break e;case"keydown":case"keyup":Ve=EM;break;case"focusin":je="focus",Ve=Qu;break;case"focusout":je="blur",Ve=Qu;break;case"beforeblur":case"afterblur":Ve=Qu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=fM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=AM;break;case ng:case ig:case rg:Ve=mM;break;case sg:Ve=RM;break;case"scroll":Ve=uM;break;case"wheel":Ve=LM;break;case"copy":case"cut":case"paste":Ve=vM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=km}var qe=(s&4)!==0,cn=!qe&&r==="scroll",se=qe?ye!==null?ye+"Capture":null:ye;qe=[];for(var q=de,le;q!==null;){le=q;var Te=le.stateNode;if(le.tag===5&&Te!==null&&(le=Te,se!==null&&(Te=Pt(q,se),Te!=null&&qe.push(ha(q,Te,le)))),cn)break;q=q.return}0<qe.length&&(ye=new Ve(ye,je,null,l,Me),we.push({event:ye,listeners:qe}))}}if((s&7)===0){e:{if(ye=r==="mouseover"||r==="pointerover",Ve=r==="mouseout"||r==="pointerout",ye&&l!==Ce&&(je=l.relatedTarget||l.fromElement)&&(us(je)||je[ir]))break e;if((Ve||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ve?(je=l.relatedTarget||l.toElement,Ve=de,je=je?us(je):null,je!==null&&(cn=Hn(je),je!==cn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ve=null,je=de),Ve!==je)){if(qe=Fm,Te="onMouseLeave",se="onMouseEnter",q="mouse",(r==="pointerout"||r==="pointerover")&&(qe=km,Te="onPointerLeave",se="onPointerEnter",q="pointer"),cn=Ve==null?ye:Ks(Ve),le=je==null?ye:Ks(je),ye=new qe(Te,q+"leave",Ve,l,Me),ye.target=cn,ye.relatedTarget=le,Te=null,us(Me)===de&&(qe=new qe(se,q+"enter",je,l,Me),qe.target=le,qe.relatedTarget=cn,Te=qe),cn=Te,Ve&&je)t:{for(qe=Ve,se=je,q=0,le=qe;le;le=qs(le))q++;for(le=0,Te=se;Te;Te=qs(Te))le++;for(;0<q-le;)qe=qs(qe),q--;for(;0<le-q;)se=qs(se),le--;for(;q--;){if(qe===se||se!==null&&qe===se.alternate)break t;qe=qs(qe),se=qs(se)}qe=null}else qe=null;Ve!==null&&dg(we,ye,Ve,qe,!1),je!==null&&cn!==null&&dg(we,cn,je,qe,!0)}}e:{if(ye=de?Ks(de):window,Ve=ye.nodeName&&ye.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ye.type==="file")var tt=kM;else if(Wm(ye))if(jm)tt=HM;else{tt=zM;var it=BM}else(Ve=ye.nodeName)&&Ve.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(tt=VM);if(tt&&(tt=tt(r,de))){Xm(we,tt,l,Me);break e}it&&it(r,ye,de),r==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&Wt(ye,"number",ye.value)}switch(it=de?Ks(de):window,r){case"focusin":(Wm(it)||it.contentEditable==="true")&&(js=it,rd=de,ua=null);break;case"focusout":ua=rd=js=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,eg(we,l,Me);break;case"selectionchange":if(XM)break;case"keydown":case"keyup":eg(we,l,Me)}var rt;if(ed)e:{switch(r){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Xs?Hm(r,l)&&(ct="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Bm&&l.locale!=="ko"&&(Xs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Xs&&(rt=Im()):(Ar=Me,qu="value"in Ar?Ar.value:Ar.textContent,Xs=!0)),it=Ul(de,ct),0<it.length&&(ct=new Om(ct,r,null,l,Me),we.push({event:ct,listeners:it}),rt?ct.data=rt:(rt=Gm(l),rt!==null&&(ct.data=rt)))),(rt=NM?IM(r,l):UM(r,l))&&(de=Ul(de,"onBeforeInput"),0<de.length&&(Me=new Om("onBeforeInput","beforeinput",null,l,Me),we.push({event:Me,listeners:de}),Me.data=rt))}cg(we,s)})}function ha(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Ul(r,s){for(var l=s+"Capture",f=[];r!==null;){var g=r,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=Pt(r,l),_!=null&&f.unshift(ha(r,_,g)),_=Pt(r,s),_!=null&&f.push(ha(r,_,g))),r=r.return}return f}function qs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function dg(r,s,l,f,g){for(var _=s._reactName,b=[];l!==null&&l!==f;){var k=l,V=k.alternate,de=k.stateNode;if(V!==null&&V===f)break;k.tag===5&&de!==null&&(k=de,g?(V=Pt(l,_),V!=null&&b.unshift(ha(l,V,k))):g||(V=Pt(l,_),V!=null&&b.push(ha(l,V,k)))),l=l.return}b.length!==0&&r.push({event:s,listeners:b})}var $M=/\r\n?/g,KM=/\u0000|\uFFFD/g;function fg(r){return(typeof r=="string"?r:""+r).replace($M,`
`).replace(KM,"")}function Fl(r,s,l){if(s=fg(s),fg(r)!==s&&l)throw Error(t(425))}function Ol(){}var dd=null,fd=null;function hd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,ZM=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(r){return hg.resolve(null).then(r).catch(JM)}:pd;function JM(r){setTimeout(function(){throw r})}function md(r,s){var l=s,f=0;do{var g=l.nextSibling;if(r.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){r.removeChild(g),ia(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);ia(s)}function Rr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function pg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Hi="__reactFiber$"+$s,pa="__reactProps$"+$s,ir="__reactContainer$"+$s,gd="__reactEvents$"+$s,ew="__reactListeners$"+$s,tw="__reactHandles$"+$s;function us(r){var s=r[Hi];if(s)return s;for(var l=r.parentNode;l;){if(s=l[ir]||l[Hi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=pg(r);r!==null;){if(l=r[Hi])return l;r=pg(r)}return s}r=l,l=r.parentNode}return null}function ma(r){return r=r[Hi]||r[ir],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Ks(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function kl(r){return r[pa]||null}var vd=[],Zs=-1;function Pr(r){return{current:r}}function jt(r){0>Zs||(r.current=vd[Zs],vd[Zs]=null,Zs--)}function Ht(r,s){Zs++,vd[Zs]=r.current,r.current=s}var Lr={},Nn=Pr(Lr),qn=Pr(!1),ds=Lr;function Qs(r,s){var l=r.type.contextTypes;if(!l)return Lr;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in l)g[_]=s[_];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=g),g}function $n(r){return r=r.childContextTypes,r!=null}function Bl(){jt(qn),jt(Nn)}function mg(r,s,l){if(Nn.current!==Lr)throw Error(t(168));Ht(Nn,s),Ht(qn,l)}function gg(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,oe(r)||"Unknown",g));return K({},l,f)}function zl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Lr,ds=Nn.current,Ht(Nn,r),Ht(qn,qn.current),!0}function vg(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=gg(r,s,ds),f.__reactInternalMemoizedMergedChildContext=r,jt(qn),jt(Nn),Ht(Nn,r)):jt(qn),Ht(qn,l)}var rr=null,Vl=!1,xd=!1;function xg(r){rr===null?rr=[r]:rr.push(r)}function nw(r){Vl=!0,xg(r)}function Dr(){if(!xd&&rr!==null){xd=!0;var r=0,s=xt;try{var l=rr;for(xt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}rr=null,Vl=!1}catch(g){throw rr!==null&&(rr=rr.slice(r+1)),cs(Zo,Dr),g}finally{xt=s,xd=!1}}return null}var Js=[],eo=0,Hl=null,Gl=0,mi=[],gi=0,fs=null,sr=1,or="";function hs(r,s){Js[eo++]=Gl,Js[eo++]=Hl,Hl=r,Gl=s}function _g(r,s,l){mi[gi++]=sr,mi[gi++]=or,mi[gi++]=fs,fs=r;var f=sr;r=or;var g=32-De(f)-1;f&=~(1<<g),l+=1;var _=32-De(s)+g;if(30<_){var b=g-g%5;_=(f&(1<<b)-1).toString(32),f>>=b,g-=b,sr=1<<32-De(s)+g|l<<g|f,or=_+r}else sr=1<<_|l<<g|f,or=r}function _d(r){r.return!==null&&(hs(r,1),_g(r,1,0))}function yd(r){for(;r===Hl;)Hl=Js[--eo],Js[eo]=null,Gl=Js[--eo],Js[eo]=null;for(;r===fs;)fs=mi[--gi],mi[gi]=null,or=mi[--gi],mi[gi]=null,sr=mi[--gi],mi[gi]=null}var si=null,oi=null,$t=!1,Li=null;function yg(r,s){var l=yi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Sg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,si=r,oi=Rr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,si=r,oi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=fs!==null?{id:sr,overflow:or}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=yi(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,si=r,oi=null,!0):!1;default:return!1}}function Sd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Md(r){if($t){var s=oi;if(s){var l=s;if(!Sg(r,s)){if(Sd(r))throw Error(t(418));s=Rr(l.nextSibling);var f=si;s&&Sg(r,s)?yg(f,l):(r.flags=r.flags&-4097|2,$t=!1,si=r)}}else{if(Sd(r))throw Error(t(418));r.flags=r.flags&-4097|2,$t=!1,si=r}}}function Mg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;si=r}function Wl(r){if(r!==si)return!1;if(!$t)return Mg(r),$t=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!hd(r.type,r.memoizedProps)),s&&(s=oi)){if(Sd(r))throw wg(),Error(t(418));for(;s;)yg(r,s),s=Rr(s.nextSibling)}if(Mg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){oi=Rr(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}oi=null}}else oi=si?Rr(r.stateNode.nextSibling):null;return!0}function wg(){for(var r=oi;r;)r=Rr(r.nextSibling)}function to(){oi=si=null,$t=!1}function wd(r){Li===null?Li=[r]:Li.push(r)}var iw=C.ReactCurrentBatchConfig;function ga(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var g=f,_=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(b){var k=g.refs;b===null?delete k[_]:k[_]=b},s._stringRef=_,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Xl(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Eg(r){var s=r._init;return s(r._payload)}function Tg(r){function s(se,q){if(r){var le=se.deletions;le===null?(se.deletions=[q],se.flags|=16):le.push(q)}}function l(se,q){if(!r)return null;for(;q!==null;)s(se,q),q=q.sibling;return null}function f(se,q){for(se=new Map;q!==null;)q.key!==null?se.set(q.key,q):se.set(q.index,q),q=q.sibling;return se}function g(se,q){return se=zr(se,q),se.index=0,se.sibling=null,se}function _(se,q,le){return se.index=le,r?(le=se.alternate,le!==null?(le=le.index,le<q?(se.flags|=2,q):le):(se.flags|=2,q)):(se.flags|=1048576,q)}function b(se){return r&&se.alternate===null&&(se.flags|=2),se}function k(se,q,le,Te){return q===null||q.tag!==6?(q=mf(le,se.mode,Te),q.return=se,q):(q=g(q,le),q.return=se,q)}function V(se,q,le,Te){var tt=le.type;return tt===O?Me(se,q,le.props.children,Te,le.key):q!==null&&(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===he&&Eg(tt)===q.type)?(Te=g(q,le.props),Te.ref=ga(se,q,le),Te.return=se,Te):(Te=mc(le.type,le.key,le.props,null,se.mode,Te),Te.ref=ga(se,q,le),Te.return=se,Te)}function de(se,q,le,Te){return q===null||q.tag!==4||q.stateNode.containerInfo!==le.containerInfo||q.stateNode.implementation!==le.implementation?(q=gf(le,se.mode,Te),q.return=se,q):(q=g(q,le.children||[]),q.return=se,q)}function Me(se,q,le,Te,tt){return q===null||q.tag!==7?(q=Ss(le,se.mode,Te,tt),q.return=se,q):(q=g(q,le),q.return=se,q)}function we(se,q,le){if(typeof q=="string"&&q!==""||typeof q=="number")return q=mf(""+q,se.mode,le),q.return=se,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case R:return le=mc(q.type,q.key,q.props,null,se.mode,le),le.ref=ga(se,null,q),le.return=se,le;case L:return q=gf(q,se.mode,le),q.return=se,q;case he:var Te=q._init;return we(se,Te(q._payload),le)}if(nn(q)||Q(q))return q=Ss(q,se.mode,le,null),q.return=se,q;Xl(se,q)}return null}function ye(se,q,le,Te){var tt=q!==null?q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return tt!==null?null:k(se,q,""+le,Te);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case R:return le.key===tt?V(se,q,le,Te):null;case L:return le.key===tt?de(se,q,le,Te):null;case he:return tt=le._init,ye(se,q,tt(le._payload),Te)}if(nn(le)||Q(le))return tt!==null?null:Me(se,q,le,Te,null);Xl(se,le)}return null}function Ve(se,q,le,Te,tt){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return se=se.get(le)||null,k(q,se,""+Te,tt);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case R:return se=se.get(Te.key===null?le:Te.key)||null,V(q,se,Te,tt);case L:return se=se.get(Te.key===null?le:Te.key)||null,de(q,se,Te,tt);case he:var it=Te._init;return Ve(se,q,le,it(Te._payload),tt)}if(nn(Te)||Q(Te))return se=se.get(le)||null,Me(q,se,Te,tt,null);Xl(q,Te)}return null}function je(se,q,le,Te){for(var tt=null,it=null,rt=q,ct=q=0,Mn=null;rt!==null&&ct<le.length;ct++){rt.index>ct?(Mn=rt,rt=null):Mn=rt.sibling;var Dt=ye(se,rt,le[ct],Te);if(Dt===null){rt===null&&(rt=Mn);break}r&&rt&&Dt.alternate===null&&s(se,rt),q=_(Dt,q,ct),it===null?tt=Dt:it.sibling=Dt,it=Dt,rt=Mn}if(ct===le.length)return l(se,rt),$t&&hs(se,ct),tt;if(rt===null){for(;ct<le.length;ct++)rt=we(se,le[ct],Te),rt!==null&&(q=_(rt,q,ct),it===null?tt=rt:it.sibling=rt,it=rt);return $t&&hs(se,ct),tt}for(rt=f(se,rt);ct<le.length;ct++)Mn=Ve(rt,se,ct,le[ct],Te),Mn!==null&&(r&&Mn.alternate!==null&&rt.delete(Mn.key===null?ct:Mn.key),q=_(Mn,q,ct),it===null?tt=Mn:it.sibling=Mn,it=Mn);return r&&rt.forEach(function(Vr){return s(se,Vr)}),$t&&hs(se,ct),tt}function qe(se,q,le,Te){var tt=Q(le);if(typeof tt!="function")throw Error(t(150));if(le=tt.call(le),le==null)throw Error(t(151));for(var it=tt=null,rt=q,ct=q=0,Mn=null,Dt=le.next();rt!==null&&!Dt.done;ct++,Dt=le.next()){rt.index>ct?(Mn=rt,rt=null):Mn=rt.sibling;var Vr=ye(se,rt,Dt.value,Te);if(Vr===null){rt===null&&(rt=Mn);break}r&&rt&&Vr.alternate===null&&s(se,rt),q=_(Vr,q,ct),it===null?tt=Vr:it.sibling=Vr,it=Vr,rt=Mn}if(Dt.done)return l(se,rt),$t&&hs(se,ct),tt;if(rt===null){for(;!Dt.done;ct++,Dt=le.next())Dt=we(se,Dt.value,Te),Dt!==null&&(q=_(Dt,q,ct),it===null?tt=Dt:it.sibling=Dt,it=Dt);return $t&&hs(se,ct),tt}for(rt=f(se,rt);!Dt.done;ct++,Dt=le.next())Dt=Ve(rt,se,ct,Dt.value,Te),Dt!==null&&(r&&Dt.alternate!==null&&rt.delete(Dt.key===null?ct:Dt.key),q=_(Dt,q,ct),it===null?tt=Dt:it.sibling=Dt,it=Dt);return r&&rt.forEach(function(Fw){return s(se,Fw)}),$t&&hs(se,ct),tt}function cn(se,q,le,Te){if(typeof le=="object"&&le!==null&&le.type===O&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case R:e:{for(var tt=le.key,it=q;it!==null;){if(it.key===tt){if(tt=le.type,tt===O){if(it.tag===7){l(se,it.sibling),q=g(it,le.props.children),q.return=se,se=q;break e}}else if(it.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===he&&Eg(tt)===it.type){l(se,it.sibling),q=g(it,le.props),q.ref=ga(se,it,le),q.return=se,se=q;break e}l(se,it);break}else s(se,it);it=it.sibling}le.type===O?(q=Ss(le.props.children,se.mode,Te,le.key),q.return=se,se=q):(Te=mc(le.type,le.key,le.props,null,se.mode,Te),Te.ref=ga(se,q,le),Te.return=se,se=Te)}return b(se);case L:e:{for(it=le.key;q!==null;){if(q.key===it)if(q.tag===4&&q.stateNode.containerInfo===le.containerInfo&&q.stateNode.implementation===le.implementation){l(se,q.sibling),q=g(q,le.children||[]),q.return=se,se=q;break e}else{l(se,q);break}else s(se,q);q=q.sibling}q=gf(le,se.mode,Te),q.return=se,se=q}return b(se);case he:return it=le._init,cn(se,q,it(le._payload),Te)}if(nn(le))return je(se,q,le,Te);if(Q(le))return qe(se,q,le,Te);Xl(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,q!==null&&q.tag===6?(l(se,q.sibling),q=g(q,le),q.return=se,se=q):(l(se,q),q=mf(le,se.mode,Te),q.return=se,se=q),b(se)):l(se,q)}return cn}var no=Tg(!0),bg=Tg(!1),jl=Pr(null),Yl=null,io=null,Ed=null;function Td(){Ed=io=Yl=null}function bd(r){var s=jl.current;jt(jl),r._currentValue=s}function Ad(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function ro(r,s){Yl=r,Ed=io=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Kn=!0),r.firstContext=null)}function vi(r){var s=r._currentValue;if(Ed!==r)if(r={context:r,memoizedValue:s,next:null},io===null){if(Yl===null)throw Error(t(308));io=r,Yl.dependencies={lanes:0,firstContext:r}}else io=io.next=r;return s}var ps=null;function Cd(r){ps===null?ps=[r]:ps.push(r)}function Ag(r,s,l,f){var g=s.interleaved;return g===null?(l.next=l,Cd(s)):(l.next=g.next,g.next=l),s.interleaved=l,ar(r,f)}function ar(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Nr=!1;function Rd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function lr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ir(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Ct&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,ar(r,l)}return g=f.interleaved,g===null?(s.next=s,Cd(f)):(s.next=g.next,g.next=s),f.interleaved=s,ar(r,l)}function ql(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Dn(r,l)}}function Rg(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?g=_=b:_=_.next=b,l=l.next}while(l!==null);_===null?g=_=s:_=_.next=s}else g=_=s;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function $l(r,s,l,f){var g=r.updateQueue;Nr=!1;var _=g.firstBaseUpdate,b=g.lastBaseUpdate,k=g.shared.pending;if(k!==null){g.shared.pending=null;var V=k,de=V.next;V.next=null,b===null?_=de:b.next=de,b=V;var Me=r.alternate;Me!==null&&(Me=Me.updateQueue,k=Me.lastBaseUpdate,k!==b&&(k===null?Me.firstBaseUpdate=de:k.next=de,Me.lastBaseUpdate=V))}if(_!==null){var we=g.baseState;b=0,Me=de=V=null,k=_;do{var ye=k.lane,Ve=k.eventTime;if((f&ye)===ye){Me!==null&&(Me=Me.next={eventTime:Ve,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var je=r,qe=k;switch(ye=s,Ve=l,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){we=je.call(Ve,we,ye);break e}we=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,ye=typeof je=="function"?je.call(Ve,we,ye):je,ye==null)break e;we=K({},we,ye);break e;case 2:Nr=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,ye=g.effects,ye===null?g.effects=[k]:ye.push(k))}else Ve={eventTime:Ve,lane:ye,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Me===null?(de=Me=Ve,V=we):Me=Me.next=Ve,b|=ye;if(k=k.next,k===null){if(k=g.shared.pending,k===null)break;ye=k,k=ye.next,ye.next=null,g.lastBaseUpdate=ye,g.shared.pending=null}}while(!0);if(Me===null&&(V=we),g.baseState=V,g.firstBaseUpdate=de,g.lastBaseUpdate=Me,s=g.shared.interleaved,s!==null){g=s;do b|=g.lane,g=g.next;while(g!==s)}else _===null&&(g.shared.lanes=0);vs|=b,r.lanes=b,r.memoizedState=we}}function Pg(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var va={},Gi=Pr(va),xa=Pr(va),_a=Pr(va);function ms(r){if(r===va)throw Error(t(174));return r}function Pd(r,s){switch(Ht(_a,s),Ht(xa,r),Ht(Gi,va),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=w(s,r)}jt(Gi),Ht(Gi,s)}function so(){jt(Gi),jt(xa),jt(_a)}function Lg(r){ms(_a.current);var s=ms(Gi.current),l=w(s,r.type);s!==l&&(Ht(xa,r),Ht(Gi,l))}function Ld(r){xa.current===r&&(jt(Gi),jt(xa))}var Qt=Pr(0);function Kl(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Dd=[];function Nd(){for(var r=0;r<Dd.length;r++)Dd[r]._workInProgressVersionPrimary=null;Dd.length=0}var Zl=C.ReactCurrentDispatcher,Id=C.ReactCurrentBatchConfig,gs=0,Jt=null,mn=null,yn=null,Ql=!1,ya=!1,Sa=0,rw=0;function In(){throw Error(t(321))}function Ud(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Pi(r[l],s[l]))return!1;return!0}function Fd(r,s,l,f,g,_){if(gs=_,Jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Zl.current=r===null||r.memoizedState===null?lw:cw,r=l(f,g),ya){_=0;do{if(ya=!1,Sa=0,25<=_)throw Error(t(301));_+=1,yn=mn=null,s.updateQueue=null,Zl.current=uw,r=l(f,g)}while(ya)}if(Zl.current=tc,s=mn!==null&&mn.next!==null,gs=0,yn=mn=Jt=null,Ql=!1,s)throw Error(t(300));return r}function Od(){var r=Sa!==0;return Sa=0,r}function Wi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Jt.memoizedState=yn=r:yn=yn.next=r,yn}function xi(){if(mn===null){var r=Jt.alternate;r=r!==null?r.memoizedState:null}else r=mn.next;var s=yn===null?Jt.memoizedState:yn.next;if(s!==null)yn=s,mn=r;else{if(r===null)throw Error(t(310));mn=r,r={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?Jt.memoizedState=yn=r:yn=yn.next=r}return yn}function Ma(r,s){return typeof s=="function"?s(r):s}function kd(r){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=mn,g=f.baseQueue,_=l.pending;if(_!==null){if(g!==null){var b=g.next;g.next=_.next,_.next=b}f.baseQueue=g=_,l.pending=null}if(g!==null){_=g.next,f=f.baseState;var k=b=null,V=null,de=_;do{var Me=de.lane;if((gs&Me)===Me)V!==null&&(V=V.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),f=de.hasEagerState?de.eagerState:r(f,de.action);else{var we={lane:Me,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};V===null?(k=V=we,b=f):V=V.next=we,Jt.lanes|=Me,vs|=Me}de=de.next}while(de!==null&&de!==_);V===null?b=f:V.next=k,Pi(f,s.memoizedState)||(Kn=!0),s.memoizedState=f,s.baseState=b,s.baseQueue=V,l.lastRenderedState=f}if(r=l.interleaved,r!==null){g=r;do _=g.lane,Jt.lanes|=_,vs|=_,g=g.next;while(g!==r)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Bd(r){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,g=l.pending,_=s.memoizedState;if(g!==null){l.pending=null;var b=g=g.next;do _=r(_,b.action),b=b.next;while(b!==g);Pi(_,s.memoizedState)||(Kn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function Dg(){}function Ng(r,s){var l=Jt,f=xi(),g=s(),_=!Pi(f.memoizedState,g);if(_&&(f.memoizedState=g,Kn=!0),f=f.queue,zd(Fg.bind(null,l,f,r),[r]),f.getSnapshot!==s||_||yn!==null&&yn.memoizedState.tag&1){if(l.flags|=2048,wa(9,Ug.bind(null,l,f,g,s),void 0,null),Sn===null)throw Error(t(349));(gs&30)!==0||Ig(l,s,g)}return g}function Ig(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function Ug(r,s,l,f){s.value=l,s.getSnapshot=f,Og(s)&&kg(r)}function Fg(r,s,l){return l(function(){Og(s)&&kg(r)})}function Og(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Pi(r,l)}catch{return!0}}function kg(r){var s=ar(r,1);s!==null&&Ui(s,r,1,-1)}function Bg(r){var s=Wi();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:r},s.queue=r,r=r.dispatch=aw.bind(null,Jt,r),[s.memoizedState,r]}function wa(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function zg(){return xi().memoizedState}function Jl(r,s,l,f){var g=Wi();Jt.flags|=r,g.memoizedState=wa(1|s,l,void 0,f===void 0?null:f)}function ec(r,s,l,f){var g=xi();f=f===void 0?null:f;var _=void 0;if(mn!==null){var b=mn.memoizedState;if(_=b.destroy,f!==null&&Ud(f,b.deps)){g.memoizedState=wa(s,l,_,f);return}}Jt.flags|=r,g.memoizedState=wa(1|s,l,_,f)}function Vg(r,s){return Jl(8390656,8,r,s)}function zd(r,s){return ec(2048,8,r,s)}function Hg(r,s){return ec(4,2,r,s)}function Gg(r,s){return ec(4,4,r,s)}function Wg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Xg(r,s,l){return l=l!=null?l.concat([r]):null,ec(4,4,Wg.bind(null,s,r),l)}function Vd(){}function jg(r,s){var l=xi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ud(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function Yg(r,s){var l=xi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ud(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function qg(r,s,l){return(gs&21)===0?(r.baseState&&(r.baseState=!1,Kn=!0),r.memoizedState=l):(Pi(l,s)||(l=pn(),Jt.lanes|=l,vs|=l,r.baseState=!0),s)}function sw(r,s){var l=xt;xt=l!==0&&4>l?l:4,r(!0);var f=Id.transition;Id.transition={};try{r(!1),s()}finally{xt=l,Id.transition=f}}function $g(){return xi().memoizedState}function ow(r,s,l){var f=kr(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Kg(r))Zg(s,l);else if(l=Ag(r,s,l,f),l!==null){var g=Wn();Ui(l,r,f,g),Qg(l,s,f)}}function aw(r,s,l){var f=kr(r),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Kg(r))Zg(s,g);else{var _=r.alternate;if(r.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var b=s.lastRenderedState,k=_(b,l);if(g.hasEagerState=!0,g.eagerState=k,Pi(k,b)){var V=s.interleaved;V===null?(g.next=g,Cd(s)):(g.next=V.next,V.next=g),s.interleaved=g;return}}catch{}finally{}l=Ag(r,s,g,f),l!==null&&(g=Wn(),Ui(l,r,f,g),Qg(l,s,f))}}function Kg(r){var s=r.alternate;return r===Jt||s!==null&&s===Jt}function Zg(r,s){ya=Ql=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Qg(r,s,l){if((l&4194240)!==0){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Dn(r,l)}}var tc={readContext:vi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},lw={readContext:vi,useCallback:function(r,s){return Wi().memoizedState=[r,s===void 0?null:s],r},useContext:vi,useEffect:Vg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Jl(4194308,4,Wg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Jl(4194308,4,r,s)},useInsertionEffect:function(r,s){return Jl(4,2,r,s)},useMemo:function(r,s){var l=Wi();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=Wi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=ow.bind(null,Jt,r),[f.memoizedState,r]},useRef:function(r){var s=Wi();return r={current:r},s.memoizedState=r},useState:Bg,useDebugValue:Vd,useDeferredValue:function(r){return Wi().memoizedState=r},useTransition:function(){var r=Bg(!1),s=r[0];return r=sw.bind(null,r[1]),Wi().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=Jt,g=Wi();if($t){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Sn===null)throw Error(t(349));(gs&30)!==0||Ig(f,s,l)}g.memoizedState=l;var _={value:l,getSnapshot:s};return g.queue=_,Vg(Fg.bind(null,f,_,r),[r]),f.flags|=2048,wa(9,Ug.bind(null,f,_,l,s),void 0,null),l},useId:function(){var r=Wi(),s=Sn.identifierPrefix;if($t){var l=or,f=sr;l=(f&~(1<<32-De(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Sa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=rw++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},cw={readContext:vi,useCallback:jg,useContext:vi,useEffect:zd,useImperativeHandle:Xg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:Yg,useReducer:kd,useRef:zg,useState:function(){return kd(Ma)},useDebugValue:Vd,useDeferredValue:function(r){var s=xi();return qg(s,mn.memoizedState,r)},useTransition:function(){var r=kd(Ma)[0],s=xi().memoizedState;return[r,s]},useMutableSource:Dg,useSyncExternalStore:Ng,useId:$g,unstable_isNewReconciler:!1},uw={readContext:vi,useCallback:jg,useContext:vi,useEffect:zd,useImperativeHandle:Xg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:Yg,useReducer:Bd,useRef:zg,useState:function(){return Bd(Ma)},useDebugValue:Vd,useDeferredValue:function(r){var s=xi();return mn===null?s.memoizedState=r:qg(s,mn.memoizedState,r)},useTransition:function(){var r=Bd(Ma)[0],s=xi().memoizedState;return[r,s]},useMutableSource:Dg,useSyncExternalStore:Ng,useId:$g,unstable_isNewReconciler:!1};function Di(r,s){if(r&&r.defaultProps){s=K({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Hd(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:K({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var nc={isMounted:function(r){return(r=r._reactInternals)?Hn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=Wn(),g=kr(r),_=lr(f,g);_.payload=s,l!=null&&(_.callback=l),s=Ir(r,_,g),s!==null&&(Ui(s,r,g,f),ql(s,r,g))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=Wn(),g=kr(r),_=lr(f,g);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Ir(r,_,g),s!==null&&(Ui(s,r,g,f),ql(s,r,g))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Wn(),f=kr(r),g=lr(l,f);g.tag=2,s!=null&&(g.callback=s),s=Ir(r,g,f),s!==null&&(Ui(s,r,f,l),ql(s,r,f))}};function Jg(r,s,l,f,g,_,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,_,b):s.prototype&&s.prototype.isPureReactComponent?!ca(l,f)||!ca(g,_):!0}function e0(r,s,l){var f=!1,g=Lr,_=s.contextType;return typeof _=="object"&&_!==null?_=vi(_):(g=$n(s)?ds:Nn.current,f=s.contextTypes,_=(f=f!=null)?Qs(r,g):Lr),s=new s(l,_),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=nc,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=_),s}function t0(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&nc.enqueueReplaceState(s,s.state,null)}function Gd(r,s,l,f){var g=r.stateNode;g.props=l,g.state=r.memoizedState,g.refs={},Rd(r);var _=s.contextType;typeof _=="object"&&_!==null?g.context=vi(_):(_=$n(s)?ds:Nn.current,g.context=Qs(r,_)),g.state=r.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Hd(r,s,_,l),g.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&nc.enqueueReplaceState(g,g.state,null),$l(r,l,g,f),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function oo(r,s){try{var l="",f=s;do l+=Be(f),f=f.return;while(f);var g=l}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:r,source:s,stack:g,digest:null}}function Wd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function Xd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var dw=typeof WeakMap=="function"?WeakMap:Map;function n0(r,s,l){l=lr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){cc||(cc=!0,af=f),Xd(r,s)},l}function i0(r,s,l){l=lr(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;l.payload=function(){return f(g)},l.callback=function(){Xd(r,s)}}var _=r.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Xd(r,s),typeof f!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function r0(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new dw;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(l)||(g.add(l),r=Tw.bind(null,r,s,l),s.then(r,r))}function s0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function o0(r,s,l,f,g){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=lr(-1,1),s.tag=2,Ir(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var fw=C.ReactCurrentOwner,Kn=!1;function Gn(r,s,l,f){s.child=r===null?bg(s,null,l,f):no(s,r.child,l,f)}function a0(r,s,l,f,g){l=l.render;var _=s.ref;return ro(s,g),f=Fd(r,s,l,f,_,g),l=Od(),r!==null&&!Kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,cr(r,s,g)):($t&&l&&_d(s),s.flags|=1,Gn(r,s,f,g),s.child)}function l0(r,s,l,f,g){if(r===null){var _=l.type;return typeof _=="function"&&!pf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,c0(r,s,_,f,g)):(r=mc(l.type,null,f,s,s.mode,g),r.ref=s.ref,r.return=s,s.child=r)}if(_=r.child,(r.lanes&g)===0){var b=_.memoizedProps;if(l=l.compare,l=l!==null?l:ca,l(b,f)&&r.ref===s.ref)return cr(r,s,g)}return s.flags|=1,r=zr(_,f),r.ref=s.ref,r.return=s,s.child=r}function c0(r,s,l,f,g){if(r!==null){var _=r.memoizedProps;if(ca(_,f)&&r.ref===s.ref)if(Kn=!1,s.pendingProps=f=_,(r.lanes&g)!==0)(r.flags&131072)!==0&&(Kn=!0);else return s.lanes=r.lanes,cr(r,s,g)}return jd(r,s,l,f,g)}function u0(r,s,l){var f=s.pendingProps,g=f.children,_=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(lo,ai),ai|=l;else{if((l&1073741824)===0)return r=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ht(lo,ai),ai|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Ht(lo,ai),ai|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Ht(lo,ai),ai|=f;return Gn(r,s,g,l),s.child}function d0(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function jd(r,s,l,f,g){var _=$n(l)?ds:Nn.current;return _=Qs(s,_),ro(s,g),l=Fd(r,s,l,f,_,g),f=Od(),r!==null&&!Kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,cr(r,s,g)):($t&&f&&_d(s),s.flags|=1,Gn(r,s,l,g),s.child)}function f0(r,s,l,f,g){if($n(l)){var _=!0;zl(s)}else _=!1;if(ro(s,g),s.stateNode===null)rc(r,s),e0(s,l,f),Gd(s,l,f,g),f=!0;else if(r===null){var b=s.stateNode,k=s.memoizedProps;b.props=k;var V=b.context,de=l.contextType;typeof de=="object"&&de!==null?de=vi(de):(de=$n(l)?ds:Nn.current,de=Qs(s,de));var Me=l.getDerivedStateFromProps,we=typeof Me=="function"||typeof b.getSnapshotBeforeUpdate=="function";we||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==f||V!==de)&&t0(s,b,f,de),Nr=!1;var ye=s.memoizedState;b.state=ye,$l(s,f,b,g),V=s.memoizedState,k!==f||ye!==V||qn.current||Nr?(typeof Me=="function"&&(Hd(s,l,Me,f),V=s.memoizedState),(k=Nr||Jg(s,l,k,f,ye,V,de))?(we||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=V),b.props=f,b.state=V,b.context=de,f=k):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{b=s.stateNode,Cg(r,s),k=s.memoizedProps,de=s.type===s.elementType?k:Di(s.type,k),b.props=de,we=s.pendingProps,ye=b.context,V=l.contextType,typeof V=="object"&&V!==null?V=vi(V):(V=$n(l)?ds:Nn.current,V=Qs(s,V));var Ve=l.getDerivedStateFromProps;(Me=typeof Ve=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==we||ye!==V)&&t0(s,b,f,V),Nr=!1,ye=s.memoizedState,b.state=ye,$l(s,f,b,g);var je=s.memoizedState;k!==we||ye!==je||qn.current||Nr?(typeof Ve=="function"&&(Hd(s,l,Ve,f),je=s.memoizedState),(de=Nr||Jg(s,l,de,f,ye,je,V)||!1)?(Me||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(f,je,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(f,je,V)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===r.memoizedProps&&ye===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&ye===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=je),b.props=f,b.state=je,b.context=V,f=de):(typeof b.componentDidUpdate!="function"||k===r.memoizedProps&&ye===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&ye===r.memoizedState||(s.flags|=1024),f=!1)}return Yd(r,s,l,f,_,g)}function Yd(r,s,l,f,g,_){d0(r,s);var b=(s.flags&128)!==0;if(!f&&!b)return g&&vg(s,l,!1),cr(r,s,_);f=s.stateNode,fw.current=s;var k=b&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&b?(s.child=no(s,r.child,null,_),s.child=no(s,null,k,_)):Gn(r,s,k,_),s.memoizedState=f.state,g&&vg(s,l,!0),s.child}function h0(r){var s=r.stateNode;s.pendingContext?mg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&mg(r,s.context,!1),Pd(r,s.containerInfo)}function p0(r,s,l,f,g){return to(),wd(g),s.flags|=256,Gn(r,s,l,f),s.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function $d(r){return{baseLanes:r,cachePool:null,transitions:null}}function m0(r,s,l){var f=s.pendingProps,g=Qt.current,_=!1,b=(s.flags&128)!==0,k;if((k=b)||(k=r!==null&&r.memoizedState===null?!1:(g&2)!==0),k?(_=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),Ht(Qt,g&1),r===null)return Md(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=f.children,r=f.fallback,_?(f=s.mode,_=s.child,b={mode:"hidden",children:b},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=gc(b,f,0,null),r=Ss(r,f,l,null),_.return=s,r.return=s,_.sibling=r,s.child=_,s.child.memoizedState=$d(l),s.memoizedState=qd,r):Kd(s,b));if(g=r.memoizedState,g!==null&&(k=g.dehydrated,k!==null))return hw(r,s,b,f,k,g,l);if(_){_=f.fallback,b=s.mode,g=r.child,k=g.sibling;var V={mode:"hidden",children:f.children};return(b&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=V,s.deletions=null):(f=zr(g,V),f.subtreeFlags=g.subtreeFlags&14680064),k!==null?_=zr(k,_):(_=Ss(_,b,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,b=r.child.memoizedState,b=b===null?$d(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=r.childLanes&~l,s.memoizedState=qd,f}return _=r.child,r=_.sibling,f=zr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function Kd(r,s){return s=gc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function ic(r,s,l,f){return f!==null&&wd(f),no(s,r.child,null,l),r=Kd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function hw(r,s,l,f,g,_,b){if(l)return s.flags&256?(s.flags&=-257,f=Wd(Error(t(422))),ic(r,s,b,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(_=f.fallback,g=s.mode,f=gc({mode:"visible",children:f.children},g,0,null),_=Ss(_,g,b,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&no(s,r.child,null,b),s.child.memoizedState=$d(b),s.memoizedState=qd,_);if((s.mode&1)===0)return ic(r,s,b,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var k=f.dgst;return f=k,_=Error(t(419)),f=Wd(_,f,void 0),ic(r,s,b,f)}if(k=(b&r.childLanes)!==0,Kn||k){if(f=Sn,f!==null){switch(b&-b){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|b))!==0?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,ar(r,g),Ui(f,r,g,-1))}return hf(),f=Wd(Error(t(421))),ic(r,s,b,f)}return g.data==="$?"?(s.flags|=128,s.child=r.child,s=bw.bind(null,r),g._reactRetry=s,null):(r=_.treeContext,oi=Rr(g.nextSibling),si=s,$t=!0,Li=null,r!==null&&(mi[gi++]=sr,mi[gi++]=or,mi[gi++]=fs,sr=r.id,or=r.overflow,fs=s),s=Kd(s,f.children),s.flags|=4096,s)}function g0(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),Ad(r.return,s,l)}function Zd(r,s,l,f,g){var _=r.memoizedState;_===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=g)}function v0(r,s,l){var f=s.pendingProps,g=f.revealOrder,_=f.tail;if(Gn(r,s,f.children,l),f=Qt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&g0(r,l,s);else if(r.tag===19)g0(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Ht(Qt,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)r=l.alternate,r!==null&&Kl(r)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),Zd(s,!1,g,l,_);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(r=g.alternate,r!==null&&Kl(r)===null){s.child=g;break}r=g.sibling,g.sibling=l,l=g,g=r}Zd(s,!0,l,null,_);break;case"together":Zd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function rc(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function cr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),vs|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=zr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=zr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function pw(r,s,l){switch(s.tag){case 3:h0(s),to();break;case 5:Lg(s);break;case 1:$n(s.type)&&zl(s);break;case 4:Pd(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Ht(jl,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ht(Qt,Qt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?m0(r,s,l):(Ht(Qt,Qt.current&1),r=cr(r,s,l),r!==null?r.sibling:null);Ht(Qt,Qt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(r.flags&128)!==0){if(f)return v0(r,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Ht(Qt,Qt.current),f)break;return null;case 22:case 23:return s.lanes=0,u0(r,s,l)}return cr(r,s,l)}var x0,Qd,_0,y0;x0=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Qd=function(){},_0=function(r,s,l,f){var g=r.memoizedProps;if(g!==f){r=s.stateNode,ms(Gi.current);var _=null;switch(l){case"input":g=lt(r,g),f=lt(r,f),_=[];break;case"select":g=K({},g,{value:void 0}),f=K({},f,{value:void 0}),_=[];break;case"textarea":g=Bt(r,g),f=Bt(r,f),_=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Ol)}$e(l,f);var b;l=null;for(de in g)if(!f.hasOwnProperty(de)&&g.hasOwnProperty(de)&&g[de]!=null)if(de==="style"){var k=g[de];for(b in k)k.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?_||(_=[]):(_=_||[]).push(de,null));for(de in f){var V=f[de];if(k=g!=null?g[de]:void 0,f.hasOwnProperty(de)&&V!==k&&(V!=null||k!=null))if(de==="style")if(k){for(b in k)!k.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in V)V.hasOwnProperty(b)&&k[b]!==V[b]&&(l||(l={}),l[b]=V[b])}else l||(_||(_=[]),_.push(de,l)),l=V;else de==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(_=_||[]).push(de,V)):de==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(de,""+V):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(V!=null&&de==="onScroll"&&Xt("scroll",r),_||k===V||(_=[])):(_=_||[]).push(de,V))}l&&(_=_||[]).push("style",l);var de=_;(s.updateQueue=de)&&(s.flags|=4)}},y0=function(r,s,l,f){l!==f&&(s.flags|=4)};function Ea(r,s){if(!$t)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Un(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var g=r.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function mw(r,s,l){var f=s.pendingProps;switch(yd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(s),null;case 1:return $n(s.type)&&Bl(),Un(s),null;case 3:return f=s.stateNode,so(),jt(qn),jt(Nn),Nd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Wl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Li!==null&&(uf(Li),Li=null))),Qd(r,s),Un(s),null;case 5:Ld(s);var g=ms(_a.current);if(l=s.type,r!==null&&s.stateNode!=null)_0(r,s,l,f,g),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Un(s),null}if(r=ms(Gi.current),Wl(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[Hi]=s,f[pa]=_,r=(s.mode&1)!==0,l){case"dialog":Xt("cancel",f),Xt("close",f);break;case"iframe":case"object":case"embed":Xt("load",f);break;case"video":case"audio":for(g=0;g<da.length;g++)Xt(da[g],f);break;case"source":Xt("error",f);break;case"img":case"image":case"link":Xt("error",f),Xt("load",f);break;case"details":Xt("toggle",f);break;case"input":vt(f,_),Xt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Xt("invalid",f);break;case"textarea":Y(f,_),Xt("invalid",f)}$e(l,_),g=null;for(var b in _)if(_.hasOwnProperty(b)){var k=_[b];b==="children"?typeof k=="string"?f.textContent!==k&&(_.suppressHydrationWarning!==!0&&Fl(f.textContent,k,r),g=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(_.suppressHydrationWarning!==!0&&Fl(f.textContent,k,r),g=["children",""+k]):o.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&Xt("scroll",f)}switch(l){case"input":Ne(f),It(f,_,!0);break;case"textarea":Ne(f),Mt(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Ol)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{b=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=U(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=b.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=b.createElement(l,{is:f.is}):(r=b.createElement(l),l==="select"&&(b=r,f.multiple?b.multiple=!0:f.size&&(b.size=f.size))):r=b.createElementNS(r,l),r[Hi]=s,r[pa]=f,x0(r,s,!1,!1),s.stateNode=r;e:{switch(b=Le(l,f),l){case"dialog":Xt("cancel",r),Xt("close",r),g=f;break;case"iframe":case"object":case"embed":Xt("load",r),g=f;break;case"video":case"audio":for(g=0;g<da.length;g++)Xt(da[g],r);g=f;break;case"source":Xt("error",r),g=f;break;case"img":case"image":case"link":Xt("error",r),Xt("load",r),g=f;break;case"details":Xt("toggle",r),g=f;break;case"input":vt(r,f),g=lt(r,f),Xt("invalid",r);break;case"option":g=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},g=K({},f,{value:void 0}),Xt("invalid",r);break;case"textarea":Y(r,f),g=Bt(r,f),Xt("invalid",r);break;default:g=f}$e(l,g),k=g;for(_ in k)if(k.hasOwnProperty(_)){var V=k[_];_==="style"?me(r,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&te(r,V)):_==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&ce(r,V):typeof V=="number"&&ce(r,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?V!=null&&_==="onScroll"&&Xt("scroll",r):V!=null&&F(r,_,V,b))}switch(l){case"input":Ne(r),It(r,f,!1);break;case"textarea":Ne(r),Mt(r);break;case"option":f.value!=null&&r.setAttribute("value",""+fe(f.value));break;case"select":r.multiple=!!f.multiple,_=f.value,_!=null?Rt(r,!!f.multiple,_,!1):f.defaultValue!=null&&Rt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Ol)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Un(s),null;case 6:if(r&&s.stateNode!=null)y0(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=ms(_a.current),ms(Gi.current),Wl(s)){if(f=s.stateNode,l=s.memoizedProps,f[Hi]=s,(_=f.nodeValue!==l)&&(r=si,r!==null))switch(r.tag){case 3:Fl(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Fl(f.nodeValue,l,(r.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Hi]=s,s.stateNode=f}return Un(s),null;case 13:if(jt(Qt),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if($t&&oi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)wg(),to(),s.flags|=98560,_=!1;else if(_=Wl(s),f!==null&&f.dehydrated!==null){if(r===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Hi]=s}else to(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Un(s),_=!1}else Li!==null&&(uf(Li),Li=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Qt.current&1)!==0?gn===0&&(gn=3):hf())),s.updateQueue!==null&&(s.flags|=4),Un(s),null);case 4:return so(),Qd(r,s),r===null&&fa(s.stateNode.containerInfo),Un(s),null;case 10:return bd(s.type._context),Un(s),null;case 17:return $n(s.type)&&Bl(),Un(s),null;case 19:if(jt(Qt),_=s.memoizedState,_===null)return Un(s),null;if(f=(s.flags&128)!==0,b=_.rendering,b===null)if(f)Ea(_,!1);else{if(gn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(b=Kl(r),b!==null){for(s.flags|=128,Ea(_,!1),f=b.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,r=f,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=r,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,r=b.dependencies,_.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ht(Qt,Qt.current&1|2),s.child}r=r.sibling}_.tail!==null&&Zt()>co&&(s.flags|=128,f=!0,Ea(_,!1),s.lanes=4194304)}else{if(!f)if(r=Kl(b),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ea(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!$t)return Un(s),null}else 2*Zt()-_.renderingStartTime>co&&l!==1073741824&&(s.flags|=128,f=!0,Ea(_,!1),s.lanes=4194304);_.isBackwards?(b.sibling=s.child,s.child=b):(l=_.last,l!==null?l.sibling=b:s.child=b,_.last=b)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Zt(),s.sibling=null,l=Qt.current,Ht(Qt,f?l&1|2:l&1),s):(Un(s),null);case 22:case 23:return ff(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ai&1073741824)!==0&&(Un(s),s.subtreeFlags&6&&(s.flags|=8192)):Un(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function gw(r,s){switch(yd(s),s.tag){case 1:return $n(s.type)&&Bl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return so(),jt(qn),jt(Nn),Nd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Ld(s),null;case 13:if(jt(Qt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));to()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return jt(Qt),null;case 4:return so(),null;case 10:return bd(s.type._context),null;case 22:case 23:return ff(),null;case 24:return null;default:return null}}var sc=!1,Fn=!1,vw=typeof WeakSet=="function"?WeakSet:Set,We=null;function ao(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){on(r,s,f)}else l.current=null}function Jd(r,s,l){try{l()}catch(f){on(r,s,f)}}var S0=!1;function xw(r,s){if(dd=Tl,r=Jm(),id(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var b=0,k=-1,V=-1,de=0,Me=0,we=r,ye=null;t:for(;;){for(var Ve;we!==l||g!==0&&we.nodeType!==3||(k=b+g),we!==_||f!==0&&we.nodeType!==3||(V=b+f),we.nodeType===3&&(b+=we.nodeValue.length),(Ve=we.firstChild)!==null;)ye=we,we=Ve;for(;;){if(we===r)break t;if(ye===l&&++de===g&&(k=b),ye===_&&++Me===f&&(V=b),(Ve=we.nextSibling)!==null)break;we=ye,ye=we.parentNode}we=Ve}l=k===-1||V===-1?null:{start:k,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(fd={focusedElem:r,selectionRange:l},Tl=!1,We=s;We!==null;)if(s=We,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,We=r;else for(;We!==null;){s=We;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,cn=je.memoizedState,se=s.stateNode,q=se.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Di(s.type,qe),cn);se.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var le=s.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){on(s,s.return,Te)}if(r=s.sibling,r!==null){r.return=s.return,We=r;break}We=s.return}return je=S0,S0=!1,je}function Ta(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&r)===r){var _=g.destroy;g.destroy=void 0,_!==void 0&&Jd(s,l,_)}g=g.next}while(g!==f)}}function oc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function ef(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function M0(r){var s=r.alternate;s!==null&&(r.alternate=null,M0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Hi],delete s[pa],delete s[gd],delete s[ew],delete s[tw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function w0(r){return r.tag===5||r.tag===3||r.tag===4}function E0(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||w0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function tf(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Ol));else if(f!==4&&(r=r.child,r!==null))for(tf(r,s,l),r=r.sibling;r!==null;)tf(r,s,l),r=r.sibling}function nf(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(nf(r,s,l),r=r.sibling;r!==null;)nf(r,s,l),r=r.sibling}var Cn=null,Ni=!1;function Ur(r,s,l){for(l=l.child;l!==null;)T0(r,s,l),l=l.sibling}function T0(r,s,l){if(ne&&typeof ne.onCommitFiberUnmount=="function")try{ne.onCommitFiberUnmount(re,l)}catch{}switch(l.tag){case 5:Fn||ao(l,s);case 6:var f=Cn,g=Ni;Cn=null,Ur(r,s,l),Cn=f,Ni=g,Cn!==null&&(Ni?(r=Cn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Cn.removeChild(l.stateNode));break;case 18:Cn!==null&&(Ni?(r=Cn,l=l.stateNode,r.nodeType===8?md(r.parentNode,l):r.nodeType===1&&md(r,l),ia(r)):md(Cn,l.stateNode));break;case 4:f=Cn,g=Ni,Cn=l.stateNode.containerInfo,Ni=!0,Ur(r,s,l),Cn=f,Ni=g;break;case 0:case 11:case 14:case 15:if(!Fn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var _=g,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&Jd(l,s,b),g=g.next}while(g!==f)}Ur(r,s,l);break;case 1:if(!Fn&&(ao(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(k){on(l,s,k)}Ur(r,s,l);break;case 21:Ur(r,s,l);break;case 22:l.mode&1?(Fn=(f=Fn)||l.memoizedState!==null,Ur(r,s,l),Fn=f):Ur(r,s,l);break;default:Ur(r,s,l)}}function b0(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new vw),s.forEach(function(f){var g=Aw.bind(null,r,f);l.has(f)||(l.add(f),f.then(g,g))})}}function Ii(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var _=r,b=s,k=b;e:for(;k!==null;){switch(k.tag){case 5:Cn=k.stateNode,Ni=!1;break e;case 3:Cn=k.stateNode.containerInfo,Ni=!0;break e;case 4:Cn=k.stateNode.containerInfo,Ni=!0;break e}k=k.return}if(Cn===null)throw Error(t(160));T0(_,b,g),Cn=null,Ni=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(de){on(g,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)A0(s,r),s=s.sibling}function A0(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ii(s,r),Xi(r),f&4){try{Ta(3,r,r.return),oc(3,r)}catch(qe){on(r,r.return,qe)}try{Ta(5,r,r.return)}catch(qe){on(r,r.return,qe)}}break;case 1:Ii(s,r),Xi(r),f&512&&l!==null&&ao(l,l.return);break;case 5:if(Ii(s,r),Xi(r),f&512&&l!==null&&ao(l,l.return),r.flags&32){var g=r.stateNode;try{ce(g,"")}catch(qe){on(r,r.return,qe)}}if(f&4&&(g=r.stateNode,g!=null)){var _=r.memoizedProps,b=l!==null?l.memoizedProps:_,k=r.type,V=r.updateQueue;if(r.updateQueue=null,V!==null)try{k==="input"&&_.type==="radio"&&_.name!=null&&At(g,_),Le(k,b);var de=Le(k,_);for(b=0;b<V.length;b+=2){var Me=V[b],we=V[b+1];Me==="style"?me(g,we):Me==="dangerouslySetInnerHTML"?te(g,we):Me==="children"?ce(g,we):F(g,Me,we,de)}switch(k){case"input":mt(g,_);break;case"textarea":rn(g,_);break;case"select":var ye=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var Ve=_.value;Ve!=null?Rt(g,!!_.multiple,Ve,!1):ye!==!!_.multiple&&(_.defaultValue!=null?Rt(g,!!_.multiple,_.defaultValue,!0):Rt(g,!!_.multiple,_.multiple?[]:"",!1))}g[pa]=_}catch(qe){on(r,r.return,qe)}}break;case 6:if(Ii(s,r),Xi(r),f&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,_=r.memoizedProps;try{g.nodeValue=_}catch(qe){on(r,r.return,qe)}}break;case 3:if(Ii(s,r),Xi(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ia(s.containerInfo)}catch(qe){on(r,r.return,qe)}break;case 4:Ii(s,r),Xi(r);break;case 13:Ii(s,r),Xi(r),g=r.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(of=Zt())),f&4&&b0(r);break;case 22:if(Me=l!==null&&l.memoizedState!==null,r.mode&1?(Fn=(de=Fn)||Me,Ii(s,r),Fn=de):Ii(s,r),Xi(r),f&8192){if(de=r.memoizedState!==null,(r.stateNode.isHidden=de)&&!Me&&(r.mode&1)!==0)for(We=r,Me=r.child;Me!==null;){for(we=We=Me;We!==null;){switch(ye=We,Ve=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ta(4,ye,ye.return);break;case 1:ao(ye,ye.return);var je=ye.stateNode;if(typeof je.componentWillUnmount=="function"){f=ye,l=ye.return;try{s=f,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){on(f,l,qe)}}break;case 5:ao(ye,ye.return);break;case 22:if(ye.memoizedState!==null){P0(we);continue}}Ve!==null?(Ve.return=ye,We=Ve):P0(we)}Me=Me.sibling}e:for(Me=null,we=r;;){if(we.tag===5){if(Me===null){Me=we;try{g=we.stateNode,de?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(k=we.stateNode,V=we.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=pe("display",b))}catch(qe){on(r,r.return,qe)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=de?"":we.memoizedProps}catch(qe){on(r,r.return,qe)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===r)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===r)break e;for(;we.sibling===null;){if(we.return===null||we.return===r)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ii(s,r),Xi(r),f&4&&b0(r);break;case 21:break;default:Ii(s,r),Xi(r)}}function Xi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(w0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(ce(g,""),f.flags&=-33);var _=E0(r);nf(r,_,g);break;case 3:case 4:var b=f.stateNode.containerInfo,k=E0(r);tf(r,k,b);break;default:throw Error(t(161))}}catch(V){on(r,r.return,V)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function _w(r,s,l){We=r,C0(r)}function C0(r,s,l){for(var f=(r.mode&1)!==0;We!==null;){var g=We,_=g.child;if(g.tag===22&&f){var b=g.memoizedState!==null||sc;if(!b){var k=g.alternate,V=k!==null&&k.memoizedState!==null||Fn;k=sc;var de=Fn;if(sc=b,(Fn=V)&&!de)for(We=g;We!==null;)b=We,V=b.child,b.tag===22&&b.memoizedState!==null?L0(g):V!==null?(V.return=b,We=V):L0(g);for(;_!==null;)We=_,C0(_),_=_.sibling;We=g,sc=k,Fn=de}R0(r)}else(g.subtreeFlags&8772)!==0&&_!==null?(_.return=g,We=_):R0(r)}}function R0(r){for(;We!==null;){var s=We;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Fn||oc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Fn)if(l===null)f.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Di(s.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Pg(s,_,f);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Pg(s,b,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var Me=de.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&ia(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Fn||s.flags&512&&ef(s)}catch(ye){on(s,s.return,ye)}}if(s===r){We=null;break}if(l=s.sibling,l!==null){l.return=s.return,We=l;break}We=s.return}}function P0(r){for(;We!==null;){var s=We;if(s===r){We=null;break}var l=s.sibling;if(l!==null){l.return=s.return,We=l;break}We=s.return}}function L0(r){for(;We!==null;){var s=We;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{oc(4,s)}catch(V){on(s,l,V)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(V){on(s,g,V)}}var _=s.return;try{ef(s)}catch(V){on(s,_,V)}break;case 5:var b=s.return;try{ef(s)}catch(V){on(s,b,V)}}}catch(V){on(s,s.return,V)}if(s===r){We=null;break}var k=s.sibling;if(k!==null){k.return=s.return,We=k;break}We=s.return}}var yw=Math.ceil,ac=C.ReactCurrentDispatcher,rf=C.ReactCurrentOwner,_i=C.ReactCurrentBatchConfig,Ct=0,Sn=null,fn=null,Rn=0,ai=0,lo=Pr(0),gn=0,ba=null,vs=0,lc=0,sf=0,Aa=null,Zn=null,of=0,co=1/0,ur=null,cc=!1,af=null,Fr=null,uc=!1,Or=null,dc=0,Ca=0,lf=null,fc=-1,hc=0;function Wn(){return(Ct&6)!==0?Zt():fc!==-1?fc:fc=Zt()}function kr(r){return(r.mode&1)===0?1:(Ct&2)!==0&&Rn!==0?Rn&-Rn:iw.transition!==null?(hc===0&&(hc=pn()),hc):(r=xt,r!==0||(r=window.event,r=r===void 0?16:Nm(r.type)),r)}function Ui(r,s,l,f){if(50<Ca)throw Ca=0,lf=null,Error(t(185));ln(r,l,f),((Ct&2)===0||r!==Sn)&&(r===Sn&&((Ct&2)===0&&(lc|=l),gn===4&&Br(r,Rn)),Qn(r,f),l===1&&Ct===0&&(s.mode&1)===0&&(co=Zt()+500,Vl&&Dr()))}function Qn(r,s){var l=r.callbackNode;Vt(r,s);var f=wt(r,r===Sn?Rn:0);if(f===0)l!==null&&Ko(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&Ko(l),s===1)r.tag===0?nw(N0.bind(null,r)):xg(N0.bind(null,r)),QM(function(){(Ct&6)===0&&Dr()}),l=null;else{switch(bi(f)){case 1:l=Zo;break;case 4:l=Qo;break;case 16:l=A;break;case 536870912:l=ue;break;default:l=A}l=V0(l,D0.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function D0(r,s){if(fc=-1,hc=0,(Ct&6)!==0)throw Error(t(327));var l=r.callbackNode;if(uo()&&r.callbackNode!==l)return null;var f=wt(r,r===Sn?Rn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||s)s=pc(r,f);else{s=f;var g=Ct;Ct|=2;var _=U0();(Sn!==r||Rn!==s)&&(ur=null,co=Zt()+500,_s(r,s));do try{ww();break}catch(k){I0(r,k)}while(!0);Td(),ac.current=_,Ct=g,fn!==null?s=0:(Sn=null,Rn=0,s=gn)}if(s!==0){if(s===2&&(g=Ut(r),g!==0&&(f=g,s=cf(r,g))),s===1)throw l=ba,_s(r,0),Br(r,f),Qn(r,Zt()),l;if(s===6)Br(r,f);else{if(g=r.current.alternate,(f&30)===0&&!Sw(g)&&(s=pc(r,f),s===2&&(_=Ut(r),_!==0&&(f=_,s=cf(r,_))),s===1))throw l=ba,_s(r,0),Br(r,f),Qn(r,Zt()),l;switch(r.finishedWork=g,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ys(r,Zn,ur);break;case 3:if(Br(r,f),(f&130023424)===f&&(s=of+500-Zt(),10<s)){if(wt(r,0)!==0)break;if(g=r.suspendedLanes,(g&f)!==f){Wn(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=pd(ys.bind(null,r,Zn,ur),s);break}ys(r,Zn,ur);break;case 4:if(Br(r,f),(f&4194240)===f)break;for(s=r.eventTimes,g=-1;0<f;){var b=31-De(f);_=1<<b,b=s[b],b>g&&(g=b),f&=~_}if(f=g,f=Zt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*yw(f/1960))-f,10<f){r.timeoutHandle=pd(ys.bind(null,r,Zn,ur),f);break}ys(r,Zn,ur);break;case 5:ys(r,Zn,ur);break;default:throw Error(t(329))}}}return Qn(r,Zt()),r.callbackNode===l?D0.bind(null,r):null}function cf(r,s){var l=Aa;return r.current.memoizedState.isDehydrated&&(_s(r,s).flags|=256),r=pc(r,s),r!==2&&(s=Zn,Zn=l,s!==null&&uf(s)),r}function uf(r){Zn===null?Zn=r:Zn.push.apply(Zn,r)}function Sw(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],_=g.getSnapshot;g=g.value;try{if(!Pi(_(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Br(r,s){for(s&=~sf,s&=~lc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-De(s),f=1<<l;r[l]=-1,s&=~f}}function N0(r){if((Ct&6)!==0)throw Error(t(327));uo();var s=wt(r,0);if((s&1)===0)return Qn(r,Zt()),null;var l=pc(r,s);if(r.tag!==0&&l===2){var f=Ut(r);f!==0&&(s=f,l=cf(r,f))}if(l===1)throw l=ba,_s(r,0),Br(r,s),Qn(r,Zt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ys(r,Zn,ur),Qn(r,Zt()),null}function df(r,s){var l=Ct;Ct|=1;try{return r(s)}finally{Ct=l,Ct===0&&(co=Zt()+500,Vl&&Dr())}}function xs(r){Or!==null&&Or.tag===0&&(Ct&6)===0&&uo();var s=Ct;Ct|=1;var l=_i.transition,f=xt;try{if(_i.transition=null,xt=1,r)return r()}finally{xt=f,_i.transition=l,Ct=s,(Ct&6)===0&&Dr()}}function ff(){ai=lo.current,jt(lo)}function _s(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,ZM(l)),fn!==null)for(l=fn.return;l!==null;){var f=l;switch(yd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Bl();break;case 3:so(),jt(qn),jt(Nn),Nd();break;case 5:Ld(f);break;case 4:so();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:bd(f.type._context);break;case 22:case 23:ff()}l=l.return}if(Sn=r,fn=r=zr(r.current,null),Rn=ai=s,gn=0,ba=null,sf=lc=vs=0,Zn=Aa=null,ps!==null){for(s=0;s<ps.length;s++)if(l=ps[s],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,_=l.pending;if(_!==null){var b=_.next;_.next=g,f.next=b}l.pending=f}ps=null}return r}function I0(r,s){do{var l=fn;try{if(Td(),Zl.current=tc,Ql){for(var f=Jt.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Ql=!1}if(gs=0,yn=mn=Jt=null,ya=!1,Sa=0,rf.current=null,l===null||l.return===null){gn=1,ba=s,fn=null;break}e:{var _=r,b=l.return,k=l,V=s;if(s=Rn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=V,Me=k,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ve=s0(b);if(Ve!==null){Ve.flags&=-257,o0(Ve,b,k,_,s),Ve.mode&1&&r0(_,de,s),s=Ve,V=de;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(V),s.updateQueue=qe}else je.add(V);break e}else{if((s&1)===0){r0(_,de,s),hf();break e}V=Error(t(426))}}else if($t&&k.mode&1){var cn=s0(b);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),o0(cn,b,k,_,s),wd(oo(V,k));break e}}_=V=oo(V,k),gn!==4&&(gn=2),Aa===null?Aa=[_]:Aa.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var se=n0(_,V,s);Rg(_,se);break e;case 1:k=V;var q=_.type,le=_.stateNode;if((_.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Fr===null||!Fr.has(le)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=i0(_,k,s);Rg(_,Te);break e}}_=_.return}while(_!==null)}O0(l)}catch(tt){s=tt,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function U0(){var r=ac.current;return ac.current=tc,r===null?tc:r}function hf(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(vs&268435455)===0&&(lc&268435455)===0||Br(Sn,Rn)}function pc(r,s){var l=Ct;Ct|=2;var f=U0();(Sn!==r||Rn!==s)&&(ur=null,_s(r,s));do try{Mw();break}catch(g){I0(r,g)}while(!0);if(Td(),Ct=l,ac.current=f,fn!==null)throw Error(t(261));return Sn=null,Rn=0,gn}function Mw(){for(;fn!==null;)F0(fn)}function ww(){for(;fn!==null&&!wl();)F0(fn)}function F0(r){var s=z0(r.alternate,r,ai);r.memoizedProps=r.pendingProps,s===null?O0(r):fn=s,rf.current=null}function O0(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=mw(l,s,ai),l!==null){fn=l;return}}else{if(l=gw(l,s),l!==null){l.flags&=32767,fn=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gn=6,fn=null;return}}if(s=s.sibling,s!==null){fn=s;return}fn=s=r}while(s!==null);gn===0&&(gn=5)}function ys(r,s,l){var f=xt,g=_i.transition;try{_i.transition=null,xt=1,Ew(r,s,l,f)}finally{_i.transition=g,xt=f}return null}function Ew(r,s,l,f){do uo();while(Or!==null);if((Ct&6)!==0)throw Error(t(327));l=r.finishedWork;var g=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var _=l.lanes|l.childLanes;if(Et(r,_),r===Sn&&(fn=Sn=null,Rn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||uc||(uc=!0,V0(A,function(){return uo(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=_i.transition,_i.transition=null;var b=xt;xt=1;var k=Ct;Ct|=4,rf.current=null,xw(r,l),A0(l,r),WM(fd),Tl=!!dd,fd=dd=null,r.current=l,_w(l),Wu(),Ct=k,xt=b,_i.transition=_}else r.current=l;if(uc&&(uc=!1,Or=r,dc=g),_=r.pendingLanes,_===0&&(Fr=null),Ue(l.stateNode),Qn(r,Zt()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)g=s[l],f(g.value,{componentStack:g.stack,digest:g.digest});if(cc)throw cc=!1,r=af,af=null,r;return(dc&1)!==0&&r.tag!==0&&uo(),_=r.pendingLanes,(_&1)!==0?r===lf?Ca++:(Ca=0,lf=r):Ca=0,Dr(),null}function uo(){if(Or!==null){var r=bi(dc),s=_i.transition,l=xt;try{if(_i.transition=null,xt=16>r?16:r,Or===null)var f=!1;else{if(r=Or,Or=null,dc=0,(Ct&6)!==0)throw Error(t(331));var g=Ct;for(Ct|=4,We=r.current;We!==null;){var _=We,b=_.child;if((We.flags&16)!==0){var k=_.deletions;if(k!==null){for(var V=0;V<k.length;V++){var de=k[V];for(We=de;We!==null;){var Me=We;switch(Me.tag){case 0:case 11:case 15:Ta(8,Me,_)}var we=Me.child;if(we!==null)we.return=Me,We=we;else for(;We!==null;){Me=We;var ye=Me.sibling,Ve=Me.return;if(M0(Me),Me===de){We=null;break}if(ye!==null){ye.return=Ve,We=ye;break}We=Ve}}}var je=_.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var cn=qe.sibling;qe.sibling=null,qe=cn}while(qe!==null)}}We=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,We=b;else e:for(;We!==null;){if(_=We,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ta(9,_,_.return)}var se=_.sibling;if(se!==null){se.return=_.return,We=se;break e}We=_.return}}var q=r.current;for(We=q;We!==null;){b=We;var le=b.child;if((b.subtreeFlags&2064)!==0&&le!==null)le.return=b,We=le;else e:for(b=q;We!==null;){if(k=We,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:oc(9,k)}}catch(tt){on(k,k.return,tt)}if(k===b){We=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,We=Te;break e}We=k.return}}if(Ct=g,Dr(),ne&&typeof ne.onPostCommitFiberRoot=="function")try{ne.onPostCommitFiberRoot(re,r)}catch{}f=!0}return f}finally{xt=l,_i.transition=s}}return!1}function k0(r,s,l){s=oo(l,s),s=n0(r,s,1),r=Ir(r,s,1),s=Wn(),r!==null&&(ln(r,1,s),Qn(r,s))}function on(r,s,l){if(r.tag===3)k0(r,r,l);else for(;s!==null;){if(s.tag===3){k0(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Fr===null||!Fr.has(f))){r=oo(l,r),r=i0(s,r,1),s=Ir(s,r,1),r=Wn(),s!==null&&(ln(s,1,r),Qn(s,r));break}}s=s.return}}function Tw(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=Wn(),r.pingedLanes|=r.suspendedLanes&l,Sn===r&&(Rn&l)===l&&(gn===4||gn===3&&(Rn&130023424)===Rn&&500>Zt()-of?_s(r,0):sf|=l),Qn(r,s)}function B0(r,s){s===0&&((r.mode&1)===0?s=1:(s=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var l=Wn();r=ar(r,s),r!==null&&(ln(r,s,l),Qn(r,l))}function bw(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),B0(r,l)}function Aw(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,g=r.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),B0(r,l)}var z0;z0=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||qn.current)Kn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return Kn=!1,pw(r,s,l);Kn=(r.flags&131072)!==0}else Kn=!1,$t&&(s.flags&1048576)!==0&&_g(s,Gl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;rc(r,s),r=s.pendingProps;var g=Qs(s,Nn.current);ro(s,l),g=Fd(null,s,f,r,g,l);var _=Od();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,$n(f)?(_=!0,zl(s)):_=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Rd(s),g.updater=nc,s.stateNode=g,g._reactInternals=s,Gd(s,f,r,l),s=Yd(null,s,f,!0,_,l)):(s.tag=0,$t&&_&&_d(s),Gn(null,s,g,l),s=s.child),s;case 16:f=s.elementType;e:{switch(rc(r,s),r=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=Rw(f),r=Di(f,r),g){case 0:s=jd(null,s,f,r,l);break e;case 1:s=f0(null,s,f,r,l);break e;case 11:s=a0(null,s,f,r,l);break e;case 14:s=l0(null,s,f,Di(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),jd(r,s,f,g,l);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),f0(r,s,f,g,l);case 3:e:{if(h0(s),r===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,g=_.element,Cg(r,s),$l(s,f,null,l);var b=s.memoizedState;if(f=b.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){g=oo(Error(t(423)),s),s=p0(r,s,f,l,g);break e}else if(f!==g){g=oo(Error(t(424)),s),s=p0(r,s,f,l,g);break e}else for(oi=Rr(s.stateNode.containerInfo.firstChild),si=s,$t=!0,Li=null,l=bg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(to(),f===g){s=cr(r,s,l);break e}Gn(r,s,f,l)}s=s.child}return s;case 5:return Lg(s),r===null&&Md(s),f=s.type,g=s.pendingProps,_=r!==null?r.memoizedProps:null,b=g.children,hd(f,g)?b=null:_!==null&&hd(f,_)&&(s.flags|=32),d0(r,s),Gn(r,s,b,l),s.child;case 6:return r===null&&Md(s),null;case 13:return m0(r,s,l);case 4:return Pd(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=no(s,null,f,l):Gn(r,s,f,l),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),a0(r,s,f,g,l);case 7:return Gn(r,s,s.pendingProps,l),s.child;case 8:return Gn(r,s,s.pendingProps.children,l),s.child;case 12:return Gn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,_=s.memoizedProps,b=g.value,Ht(jl,f._currentValue),f._currentValue=b,_!==null)if(Pi(_.value,b)){if(_.children===g.children&&!qn.current){s=cr(r,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var k=_.dependencies;if(k!==null){b=_.child;for(var V=k.firstContext;V!==null;){if(V.context===f){if(_.tag===1){V=lr(-1,l&-l),V.tag=2;var de=_.updateQueue;if(de!==null){de=de.shared;var Me=de.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),de.pending=V}}_.lanes|=l,V=_.alternate,V!==null&&(V.lanes|=l),Ad(_.return,l,s),k.lanes|=l;break}V=V.next}}else if(_.tag===10)b=_.type===s.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=l,k=b.alternate,k!==null&&(k.lanes|=l),Ad(b,l,s),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===s){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Gn(r,s,g.children,l),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,ro(s,l),g=vi(g),f=f(g),s.flags|=1,Gn(r,s,f,l),s.child;case 14:return f=s.type,g=Di(f,s.pendingProps),g=Di(f.type,g),l0(r,s,f,g,l);case 15:return c0(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),rc(r,s),s.tag=1,$n(f)?(r=!0,zl(s)):r=!1,ro(s,l),e0(s,f,g),Gd(s,f,g,l),Yd(null,s,f,!0,r,l);case 19:return v0(r,s,l);case 22:return u0(r,s,l)}throw Error(t(156,s.tag))};function V0(r,s){return cs(r,s)}function Cw(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(r,s,l,f){return new Cw(r,s,l,f)}function pf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Rw(r){if(typeof r=="function")return pf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===$)return 11;if(r===ee)return 14}return 2}function zr(r,s){var l=r.alternate;return l===null?(l=yi(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function mc(r,s,l,f,g,_){var b=2;if(f=r,typeof r=="function")pf(r)&&(b=1);else if(typeof r=="string")b=5;else e:switch(r){case O:return Ss(l.children,g,_,s);case E:b=8,g|=8;break;case D:return r=yi(12,l,s,g|2),r.elementType=D,r.lanes=_,r;case ie:return r=yi(13,l,s,g),r.elementType=ie,r.lanes=_,r;case H:return r=yi(19,l,s,g),r.elementType=H,r.lanes=_,r;case J:return gc(l,g,_,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case B:b=10;break e;case G:b=9;break e;case $:b=11;break e;case ee:b=14;break e;case he:b=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=yi(b,l,s,g),s.elementType=r,s.type=f,s.lanes=_,s}function Ss(r,s,l,f){return r=yi(7,r,f,s),r.lanes=l,r}function gc(r,s,l,f){return r=yi(22,r,f,s),r.elementType=J,r.lanes=l,r.stateNode={isHidden:!1},r}function mf(r,s,l){return r=yi(6,r,null,s),r.lanes=l,r}function gf(r,s,l){return s=yi(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Pw(r,s,l,f,g){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ze(0),this.expirationTimes=ze(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function vf(r,s,l,f,g,_,b,k,V){return r=new Pw(r,s,l,k,V),s===1?(s=1,_===!0&&(s|=8)):s=0,_=yi(3,null,null,s),r.current=_,_.stateNode=r,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(_),r}function Lw(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function H0(r){if(!r)return Lr;r=r._reactInternals;e:{if(Hn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if($n(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if($n(l))return gg(r,l,s)}return s}function G0(r,s,l,f,g,_,b,k,V){return r=vf(l,f,!0,r,g,_,b,k,V),r.context=H0(null),l=r.current,f=Wn(),g=kr(l),_=lr(f,g),_.callback=s??null,Ir(l,_,g),r.current.lanes=g,ln(r,g,f),Qn(r,f),r}function vc(r,s,l,f){var g=s.current,_=Wn(),b=kr(g);return l=H0(l),s.context===null?s.context=l:s.pendingContext=l,s=lr(_,b),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=Ir(g,s,b),r!==null&&(Ui(r,g,b,_),ql(r,g,b)),b}function xc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function W0(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function xf(r,s){W0(r,s),(r=r.alternate)&&W0(r,s)}function Dw(){return null}var X0=typeof reportError=="function"?reportError:function(r){console.error(r)};function _f(r){this._internalRoot=r}_c.prototype.render=_f.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));vc(r,s,null,null)},_c.prototype.unmount=_f.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;xs(function(){vc(null,r,null,null)}),s[ir]=null}};function _c(r){this._internalRoot=r}_c.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ai();r={blockedOn:null,target:r,priority:s};for(var l=0;l<br.length&&s!==0&&s<br[l].priority;l++);br.splice(l,0,r),l===0&&Lm(r)}};function yf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function yc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function j0(){}function Nw(r,s,l,f,g){if(g){if(typeof f=="function"){var _=f;f=function(){var de=xc(b);_.call(de)}}var b=G0(s,f,r,0,null,!1,!1,"",j0);return r._reactRootContainer=b,r[ir]=b.current,fa(r.nodeType===8?r.parentNode:r),xs(),b}for(;g=r.lastChild;)r.removeChild(g);if(typeof f=="function"){var k=f;f=function(){var de=xc(V);k.call(de)}}var V=vf(r,0,!1,null,null,!1,!1,"",j0);return r._reactRootContainer=V,r[ir]=V.current,fa(r.nodeType===8?r.parentNode:r),xs(function(){vc(s,V,l,f)}),V}function Sc(r,s,l,f,g){var _=l._reactRootContainer;if(_){var b=_;if(typeof g=="function"){var k=g;g=function(){var V=xc(b);k.call(V)}}vc(s,b,r,g)}else b=Nw(l,s,r,g,f);return xc(b)}nr=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ge(s.pendingLanes);l!==0&&(Dn(s,l|1),Qn(s,Zt()),(Ct&6)===0&&(co=Zt()+500,Dr()))}break;case 13:xs(function(){var f=ar(r,1);if(f!==null){var g=Wn();Ui(f,r,1,g)}}),xf(r,1)}},Lt=function(r){if(r.tag===13){var s=ar(r,134217728);if(s!==null){var l=Wn();Ui(s,r,134217728,l)}xf(r,134217728)}},qt=function(r){if(r.tag===13){var s=kr(r),l=ar(r,s);if(l!==null){var f=Wn();Ui(l,r,s,f)}xf(r,s)}},Ai=function(){return xt},Ft=function(r,s){var l=xt;try{return xt=r,s()}finally{xt=l}},nt=function(r,s,l){switch(s){case"input":if(mt(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var g=kl(f);if(!g)throw Error(t(90));dt(f),mt(f,g)}}}break;case"textarea":rn(r,l);break;case"select":s=l.value,s!=null&&Rt(r,!!l.multiple,s,!1)}},Oe=df,xe=xs;var Iw={usingClientEntryPoint:!1,Events:[ma,Ks,kl,ge,Pe,df]},Ra={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uw={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ls(r),r===null?null:r.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||Dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{re=Mc.inject(Uw),ne=Mc}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iw,Jn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(s))throw Error(t(200));return Lw(r,s,null,l)},Jn.createRoot=function(r,s){if(!yf(r))throw Error(t(299));var l=!1,f="",g=X0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=vf(r,1,!1,null,null,l,!1,f,g),r[ir]=s.current,fa(r.nodeType===8?r.parentNode:r),new _f(s)},Jn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ls(s),r=r===null?null:r.stateNode,r},Jn.flushSync=function(r){return xs(r)},Jn.hydrate=function(r,s,l){if(!yc(s))throw Error(t(200));return Sc(null,r,s,!0,l)},Jn.hydrateRoot=function(r,s,l){if(!yf(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,_="",b=X0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=G0(s,null,r,1,l??null,g,!1,_,b),r[ir]=s.current,fa(r),f)for(r=0;r<f.length;r++)l=f[r],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new _c(s)},Jn.render=function(r,s,l){if(!yc(s))throw Error(t(200));return Sc(null,r,s,!1,l)},Jn.unmountComponentAtNode=function(r){if(!yc(r))throw Error(t(40));return r._reactRootContainer?(xs(function(){Sc(null,null,r,!1,function(){r._reactRootContainer=null,r[ir]=null})}),!0):!1},Jn.unstable_batchedUpdates=df,Jn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!yc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Sc(r,s,l,!1,f)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var ev;function Xw(){if(ev)return wf.exports;ev=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),wf.exports=Ww(),wf.exports}var tv;function jw(){if(tv)return wc;tv=1;var n=Xw();return wc.createRoot=n.createRoot,wc.hydrateRoot=n.hydrateRoot,wc}var Yw=jw();const qw=I_(Yw);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="186",$w=0,nv=1,Kw=2,eu=1,Zw=2,Ba=3,Us=0,ni=1,gr=2,Zi=0,ja=1,es=2,iv=3,rv=4,Qw=5,bo=100,Jw=101,e1=102,t1=103,n1=104,i1=200,r1=201,s1=202,o1=203,U_=204,F_=205,a1=206,l1=207,c1=208,u1=209,d1=210,f1=211,h1=212,p1=213,m1=214,yh=0,Sh=1,Mh=2,tl=3,wh=4,Eh=5,Th=6,bh=7,O_=0,g1=1,v1=2,Qi=0,k_=1,B_=2,z_=3,Pp=4,V_=5,H_=6,G_=7,W_=300,Fs=301,Fo=302,bf=303,Af=304,Ru=306,Ah=1e3,vr=1001,Ch=1002,Pn=1003,x1=1004,Ec=1005,zn=1006,Cf=1007,Ps=1008,ui=1009,X_=1010,j_=1011,nl=1012,Lp=1013,tr=1014,$i=1015,ii=1016,Dp=1017,Np=1018,il=1020,Y_=35902,q_=35899,$_=1021,K_=1022,Vi=1023,Mr=1026,Ls=1027,Z_=1028,Ip=1029,Os=1030,Up=1031,Fp=1033,tu=33776,nu=33777,iu=33778,ru=33779,Rh=35840,Ph=35841,Lh=35842,Dh=35843,Nh=36196,Ih=37492,Uh=37496,Fh=37488,Oh=37489,uu=37490,kh=37491,Bh=37808,zh=37809,Vh=37810,Hh=37811,Gh=37812,Wh=37813,Xh=37814,jh=37815,Yh=37816,qh=37817,$h=37818,Kh=37819,Zh=37820,Qh=37821,Jh=36492,ep=36494,tp=36495,np=36283,ip=36284,du=36285,rp=36286,_1=3200,sp=0,y1=1,Zr="",ei="srgb",fu="srgb-linear",hu="linear",Ot="srgb",Rf=7680,S1=519,M1=512,w1=513,E1=514,Op=515,T1=516,b1=517,kp=518,A1=519,C1=35044,sv="300 es",Ki=2e3,rl=2001;function R1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function P1(){const n=pu("canvas");return n.style.display="block",n}const ov={};function av(...n){const e="THREE."+n.shift();console.log(e,...n)}function Q_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=Q_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Nt(...n){n=Q_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Io(...n){const e=n.join(" ");e in ov||(ov[e]=!0,st(...n))}function L1(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const D1={[yh]:Sh,[Mh]:Th,[wh]:bh,[tl]:Eh,[Sh]:yh,[Th]:Mh,[bh]:wh,[Eh]:tl};class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lv=1234567;const Ya=Math.PI/180,sl=180/Math.PI;function Go(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function Bp(n,e){return(n%e+e)%e}function N1(n,e,t,i,o){return i+(n-e)*(o-i)/(t-e)}function I1(n,e,t){return n!==e?(t-n)/(e-n):0}function qa(n,e,t){return(1-t)*n+t*e}function U1(n,e,t,i){return qa(n,e,1-Math.exp(-t*i))}function F1(n,e=1){return e-Math.abs(Bp(n,e*2)-e)}function O1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function k1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function B1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function z1(n,e){return n+Math.random()*(e-n)}function V1(n){return n*(.5-Math.random())}function H1(n){n!==void 0&&(lv=n);let e=lv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function G1(n){return n*Ya}function W1(n){return n*sl}function X1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function j1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Y1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function q1(n,e,t,i,o){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),h=a((e+i)/2),p=c((e+i)/2),v=a((e-i)/2),m=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(o){case"XYX":n.set(u*p,d*v,d*m,u*h);break;case"YZY":n.set(d*m,u*p,d*v,u*h);break;case"ZXZ":n.set(d*v,d*m,u*p,u*h);break;case"XZX":n.set(u*p,d*M,d*x,u*h);break;case"YXY":n.set(d*x,u*p,d*M,u*h);break;case"ZYZ":n.set(d*M,d*x,u*p,u*h);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ao(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $a={DEG2RAD:Ya,RAD2DEG:sl,generateUUID:Go,clamp:St,euclideanModulo:Bp,mapLinear:N1,inverseLerp:I1,lerp:qa,damp:U1,pingpong:F1,smoothstep:O1,smootherstep:k1,randInt:B1,randFloat:z1,randFloatSpread:V1,seededRandom:H1,degToRad:G1,radToDeg:W1,isPowerOfTwo:X1,ceilPowerOfTwo:j1,floorPowerOfTwo:Y1,setQuaternionFromProperEuler:q1,normalize:Xn,denormalize:Ao},Tm=class Tm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tm.prototype.isVector2=!0;let ut=Tm;class Wo{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let d=i[o+0],h=i[o+1],p=i[o+2],v=i[o+3],m=a[c+0],x=a[c+1],M=a[c+2],T=a[c+3];if(v!==T||d!==m||h!==x||p!==M){let S=d*m+h*x+p*M+v*T;S<0&&(m=-m,x=-x,M=-M,T=-T,S=-S);let y=1-u;if(S<.9995){const P=Math.acos(S),F=Math.sin(P);y=Math.sin(y*P)/F,u=Math.sin(u*P)/F,d=d*y+m*u,h=h*y+x*u,p=p*y+M*u,v=v*y+T*u}else{d=d*y+m*u,h=h*y+x*u,p=p*y+M*u,v=v*y+T*u;const P=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=P,h*=P,p*=P,v*=P}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],d=i[o+1],h=i[o+2],p=i[o+3],v=a[c],m=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+p*v+d*x-h*m,e[t+1]=d*M+p*m+h*v-u*x,e[t+2]=h*M+p*x+u*m-d*v,e[t+3]=p*M-u*v-d*m-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(o/2),v=u(a/2),m=d(i/2),x=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=m*p*v+h*x*M,this._y=h*x*v-m*p*M,this._z=h*p*M+m*x*v,this._w=h*p*v-m*x*M;break;case"YXZ":this._x=m*p*v+h*x*M,this._y=h*x*v-m*p*M,this._z=h*p*M-m*x*v,this._w=h*p*v+m*x*M;break;case"ZXY":this._x=m*p*v-h*x*M,this._y=h*x*v+m*p*M,this._z=h*p*M+m*x*v,this._w=h*p*v-m*x*M;break;case"ZYX":this._x=m*p*v-h*x*M,this._y=h*x*v+m*p*M,this._z=h*p*M-m*x*v,this._w=h*p*v+m*x*M;break;case"YZX":this._x=m*p*v+h*x*M,this._y=h*x*v+m*p*M,this._z=h*p*M-m*x*v,this._w=h*p*v-m*x*M;break;case"XZY":this._x=m*p*v-h*x*M,this._y=h*x*v-m*p*M,this._z=h*p*M+m*x*v,this._w=h*p*v+m*x*M;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],m=i+u+v;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(p-d)*x,this._y=(a-h)*x,this._z=(c-o)*x}else if(i>u&&i>v){const x=2*Math.sqrt(1+i-u-v);this._w=(p-d)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+h)/x}else if(u>v){const x=2*Math.sqrt(1+u-i-v);this._w=(a-h)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+v-i-u);this._w=(c-o)/x,this._x=(a+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-i*h,this._z=a*p+c*h+i*d-o*u,this._w=c*p-i*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bm=class bm{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),v=2*(a*i-c*t);return this.x=t+d*h+c*v-u*p,this.y=i+d*p+u*h-a*v,this.z=o+d*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-i*d,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bm.prototype.isVector3=!0;let j=bm;const Pf=new j,cv=new Wo,Am=class Am{constructor(e,t,i,o,a,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h)}set(e,t,i,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],v=i[7],m=i[2],x=i[5],M=i[8],T=o[0],S=o[3],y=o[6],P=o[1],F=o[4],C=o[7],R=o[2],L=o[5],O=o[8];return a[0]=c*T+u*P+d*R,a[3]=c*S+u*F+d*L,a[6]=c*y+u*C+d*O,a[1]=h*T+p*P+v*R,a[4]=h*S+p*F+v*L,a[7]=h*y+p*C+v*O,a[2]=m*T+x*P+M*R,a[5]=m*S+x*F+M*L,a[8]=m*y+x*C+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,m=u*d-p*a,x=h*a-c*d,M=t*v+i*m+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-p*i)*T,e[2]=(u*i-o*c)*T,e[3]=m*T,e[4]=(p*t-o*d)*T,e[5]=(o*a-u*t)*T,e[6]=x*T,e[7]=(i*d-h*t)*T,e[8]=(c*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return Io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lf.makeScale(e,t)),this}rotate(e){return Io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lf.makeRotation(-e)),this}translate(e,t){return Io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Am.prototype.isMatrix3=!0;let ht=Am;const Lf=new ht,uv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $1(){const n={enabled:!0,workingColorSpace:fu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ot&&(o.r=xr(o.r),o.g=xr(o.g),o.b=xr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ot&&(o.r=Uo(o.r),o.g=Uo(o.g),o.b=Uo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Zr?hu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fu]:{primaries:e,whitePoint:i,transfer:hu,toXYZ:uv,fromXYZ:dv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:uv,fromXYZ:dv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Tt=$1();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fo;class K1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fo===void 0&&(fo=pu("canvas")),fo.width=e.width,fo.height=e.height;const o=fo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=fo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=xr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z1=0;class zp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Df(o[c].image)):a.push(Df(o[c]))}else a=Df(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Df(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Q1=0;const Nf=new j;class Vn extends ks{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=vr,o=vr,a=zn,c=Ps,u=Vi,d=ui,h=Vn.DEFAULT_ANISOTROPY,p=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Go(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nf).x}get height(){return this.source.getSize(Nf).y}get depth(){return this.source.getSize(Nf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=W_;Vn.DEFAULT_ANISOTROPY=1;const Cm=class Cm{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],m=d[1],x=d[5],M=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(p-m)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+m)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,C=(x+1)/2,R=(y+1)/2,L=(p+m)/4,O=(v+T)/4,E=(M+S)/4;return F>C&&F>R?F<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(F),o=L/i,a=O/i):C>R?C<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(C),i=L/o,a=E/o):R<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(R),i=O/a,o=E/a),this.set(i,o,a,t),this}let P=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(m-p)*(m-p));return Math.abs(P)<.001&&(P=1),this.x=(S-M)/P,this.y=(v-T)/P,this.z=(m-p)/P,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cm.prototype.isVector4=!0;let en=Cm;class J1 extends ks{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new Vn(o),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new zp(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends J1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class J_ extends Vn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eE extends Vn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Cu=class Cu{constructor(e,t,i,o,a,c,u,d,h,p,v,m,x,M,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h,p,v,m,x,M,T,S)}set(e,t,i,o,a,c,u,d,h,p,v,m,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=o,y[1]=a,y[5]=c,y[9]=u,y[13]=d,y[2]=h,y[6]=p,y[10]=v,y[14]=m,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,o=1/ho.setFromMatrixColumn(e,0).length(),a=1/ho.setFromMatrixColumn(e,1).length(),c=1/ho.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=c*p,x=c*v,M=u*p,T=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=x+M*h,t[5]=m-T*h,t[9]=-u*d,t[2]=T-m*h,t[6]=M+x*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*p,x=d*v,M=h*p,T=h*v;t[0]=m+T*u,t[4]=M*u-x,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=x*u-M,t[6]=T+m*u,t[10]=c*d}else if(e.order==="ZXY"){const m=d*p,x=d*v,M=h*p,T=h*v;t[0]=m-T*u,t[4]=-c*v,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*p,t[9]=T-m*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const m=c*p,x=c*v,M=u*p,T=u*v;t[0]=d*p,t[4]=M*h-x,t[8]=m*h+T,t[1]=d*v,t[5]=T*h+m,t[9]=x*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,x=c*h,M=u*d,T=u*h;t[0]=d*p,t[4]=T-m*v,t[8]=M*v+x,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=x*v+M,t[10]=m-T*v}else if(e.order==="XZY"){const m=c*d,x=c*h,M=u*d,T=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=m*v+T,t[5]=c*p,t[9]=x*v-M,t[2]=M*v-x,t[6]=u*p,t[10]=T*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tE,e,nE)}lookAt(e,t,i){const o=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Hr.crossVectors(i,li),Hr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Hr.crossVectors(i,li)),Hr.normalize(),Tc.crossVectors(li,Hr),o[0]=Hr.x,o[4]=Tc.x,o[8]=li.x,o[1]=Hr.y,o[5]=Tc.y,o[9]=li.y,o[2]=Hr.z,o[6]=Tc.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],v=i[5],m=i[9],x=i[13],M=i[2],T=i[6],S=i[10],y=i[14],P=i[3],F=i[7],C=i[11],R=i[15],L=o[0],O=o[4],E=o[8],D=o[12],B=o[1],G=o[5],$=o[9],ie=o[13],H=o[2],ee=o[6],he=o[10],J=o[14],Z=o[3],Q=o[7],K=o[11],N=o[15];return a[0]=c*L+u*B+d*H+h*Z,a[4]=c*O+u*G+d*ee+h*Q,a[8]=c*E+u*$+d*he+h*K,a[12]=c*D+u*ie+d*J+h*N,a[1]=p*L+v*B+m*H+x*Z,a[5]=p*O+v*G+m*ee+x*Q,a[9]=p*E+v*$+m*he+x*K,a[13]=p*D+v*ie+m*J+x*N,a[2]=M*L+T*B+S*H+y*Z,a[6]=M*O+T*G+S*ee+y*Q,a[10]=M*E+T*$+S*he+y*K,a[14]=M*D+T*ie+S*J+y*N,a[3]=P*L+F*B+C*H+R*Z,a[7]=P*O+F*G+C*ee+R*Q,a[11]=P*E+F*$+C*he+R*K,a[15]=P*D+F*ie+C*J+R*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],m=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15],P=d*x-h*m,F=u*x-h*v,C=u*m-d*v,R=c*x-h*p,L=c*m-d*p,O=c*v-u*p;return t*(T*P-S*F+y*C)-i*(M*P-S*R+y*L)+o*(M*F-T*R+y*O)-a*(M*C-T*L+S*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[1],c=e[5],u=e[9],d=e[2],h=e[6],p=e[10];return t*(c*p-u*h)-i*(a*p-u*d)+o*(a*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],m=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],P=t*u-i*c,F=t*d-o*c,C=t*h-a*c,R=i*d-o*u,L=i*h-a*u,O=o*h-a*d,E=p*T-v*M,D=p*S-m*M,B=p*y-x*M,G=v*S-m*T,$=v*y-x*T,ie=m*y-x*S,H=P*ie-F*$+C*G+R*B-L*D+O*E;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/H;return e[0]=(u*ie-d*$+h*G)*ee,e[1]=(o*$-i*ie-a*G)*ee,e[2]=(T*O-S*L+y*R)*ee,e[3]=(m*L-v*O-x*R)*ee,e[4]=(d*B-c*ie-h*D)*ee,e[5]=(t*ie-o*B+a*D)*ee,e[6]=(S*C-M*O-y*F)*ee,e[7]=(p*O-m*C+x*F)*ee,e[8]=(c*$-u*B+h*E)*ee,e[9]=(i*B-t*$-a*E)*ee,e[10]=(M*L-T*C+y*P)*ee,e[11]=(v*C-p*L-x*P)*ee,e[12]=(u*D-c*G-d*E)*ee,e[13]=(t*G-i*D+o*E)*ee,e[14]=(T*F-M*R-S*P)*ee,e[15]=(p*R-v*F+m*P)*ee,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+i,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,v=u+u,m=a*h,x=a*p,M=a*v,T=c*p,S=c*v,y=u*v,P=d*h,F=d*p,C=d*v,R=i.x,L=i.y,O=i.z;return o[0]=(1-(T+y))*R,o[1]=(x+C)*R,o[2]=(M-F)*R,o[3]=0,o[4]=(x-C)*L,o[5]=(1-(m+y))*L,o[6]=(S+P)*L,o[7]=0,o[8]=(M+F)*O,o[9]=(S-P)*O,o[10]=(1-(m+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let c=ho.set(o[0],o[1],o[2]).length();const u=ho.set(o[4],o[5],o[6]).length(),d=ho.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Fi.copy(this);const h=1/c,p=1/u,v=1/d;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=p,Fi.elements[5]*=p,Fi.elements[6]*=p,Fi.elements[8]*=v,Fi.elements[9]*=v,Fi.elements[10]*=v,t.setFromRotationMatrix(Fi),i.x=c,i.y=u,i.z=d,this}makePerspective(e,t,i,o,a,c,u=Ki,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(i-o),m=(t+e)/(t-e),x=(i+o)/(i-o);let M,T;if(d)M=a/(c-a),T=c*a/(c-a);else if(u===Ki)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(u===rl)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Ki,d=!1){const h=this.elements,p=2/(t-e),v=2/(i-o),m=-(t+e)/(t-e),x=-(i+o)/(i-o);let M,T;if(d)M=1/(c-a),T=c/(c-a);else if(u===Ki)M=-2/(c-a),T=-(c+a)/(c-a);else if(u===rl)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Cu.prototype.isMatrix4=!0;let Yt=Cu;const ho=new j,Fi=new Yt,tE=new j(0,0,0),nE=new j(1,1,1),Hr=new j,Tc=new j,li=new j,fv=new Yt,hv=new Wo;class ts{constructor(e=0,t=0,i=0,o=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],v=o[2],m=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class ey{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iE=0;const pv=new j,po=new Wo,dr=new Yt,bc=new j,La=new j,rE=new j,sE=new Wo,mv=new j(1,0,0),gv=new j(0,1,0),vv=new j(0,0,1),xv={type:"added"},oE={type:"removed"},mo={type:"childadded",child:null},If={type:"childremoved",child:null};class bn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new j,t=new ts,i=new Wo,o=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ht}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,t){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bc.copy(e):bc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(La,bc,this.up):dr.lookAt(bc,La,this.up),this.quaternion.setFromRotationMatrix(dr),o&&(dr.extractRotation(o.matrixWorld),po.setFromRotationMatrix(dr),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xv),mo.child=e,this.dispatchEvent(mo),mo.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oE),If.child=e,this.dispatchEvent(If),If.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xv),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,rE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,sE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),m=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new j(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ds extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aE={type:"move"};class Uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=p.position.distanceTo(v.position),x=.02,M=.005;h.inputState.pinching&&m>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(aE)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Ff(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=Tt.workingColorSpace){if(e=Bp(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Ff(c,a,e+1/3),this.g=Ff(c,a,e),this.b=Ff(c,a,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ei){function i(a){a!==void 0&&parseFloat(a)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const i=ty[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(kn.copy(this),e),Math.round(St(kn.r*255,0,255))*65536+Math.round(St(kn.g*255,0,255))*256+Math.round(St(kn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(kn.copy(this),t);const i=kn.r,o=kn.g,a=kn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case i:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-i)/v+2;break;case a:d=(i-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=ei){Tt.workingToColorSpace(kn.copy(this),e);const t=kn.r,i=kn.g,o=kn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(Ac);const i=qa(Gr.h,Ac.h,t),o=qa(Gr.s,Ac.s,t),a=qa(Gr.l,Ac.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new pt;pt.NAMES=ty;class lE extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new j,fr=new j,Of=new j,hr=new j,go=new j,vo=new j,_v=new j,kf=new j,Bf=new j,zf=new j,Vf=new en,Hf=new en,Gf=new en;class zi{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Oi.subVectors(e,t),o.cross(Oi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Oi.subVectors(o,t),fr.subVectors(i,t),Of.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(fr),d=Oi.dot(Of),h=fr.dot(fr),p=fr.dot(Of),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const m=1/v,x=(h*d-u*p)*m,M=(c*p-u*d)*m;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,i,o,a,c,u,d){return this.getBarycoord(e,t,i,o,hr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,hr.x),d.addScaledVector(c,hr.y),d.addScaledVector(u,hr.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return Vf.setScalar(0),Hf.setScalar(0),Gf.setScalar(0),Vf.fromBufferAttribute(e,t),Hf.fromBufferAttribute(e,i),Gf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Vf,a.x),c.addScaledVector(Hf,a.y),c.addScaledVector(Gf,a.z),c}static isFrontFacing(e,t,i,o){return Oi.subVectors(i,t),fr.subVectors(e,t),Oi.cross(fr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Oi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;go.subVectors(o,i),vo.subVectors(a,i),kf.subVectors(e,i);const d=go.dot(kf),h=vo.dot(kf);if(d<=0&&h<=0)return t.copy(i);Bf.subVectors(e,o);const p=go.dot(Bf),v=vo.dot(Bf);if(p>=0&&v<=p)return t.copy(o);const m=d*v-p*h;if(m<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(go,c);zf.subVectors(e,a);const x=go.dot(zf),M=vo.dot(zf);if(M>=0&&x<=M)return t.copy(a);const T=x*h-d*M;if(T<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(vo,u);const S=p*M-x*v;if(S<=0&&v-p>=0&&x-M>=0)return _v.subVectors(a,o),u=(v-p)/(v-p+(x-M)),t.copy(o).addScaledVector(_v,u);const y=1/(S+T+m);return c=T*y,u=m*y,t.copy(i).addScaledVector(go,c).addScaledVector(vo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class dl{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ki):ki.fromBufferAttribute(a,c),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cc.copy(i.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),Rc.subVectors(this.max,Da),xo.subVectors(e.a,Da),_o.subVectors(e.b,Da),yo.subVectors(e.c,Da),Wr.subVectors(_o,xo),Xr.subVectors(yo,_o),Ms.subVectors(xo,yo);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-Ms.z,Ms.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,Ms.z,0,-Ms.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-Ms.y,Ms.x,0];return!Wf(t,xo,_o,yo,Rc)||(t=[1,0,0,0,1,0,0,0,1],!Wf(t,xo,_o,yo,Rc))?!1:(Pc.crossVectors(Wr,Xr),t=[Pc.x,Pc.y,Pc.z],Wf(t,xo,_o,yo,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new j,new j,new j,new j,new j,new j,new j,new j],ki=new j,Cc=new dl,xo=new j,_o=new j,yo=new j,Wr=new j,Xr=new j,Ms=new j,Da=new j,Rc=new j,Pc=new j,ws=new j;function Wf(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){ws.fromArray(n,a);const u=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),d=e.dot(ws),h=t.dot(ws),p=i.dot(ws);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const hn=new j,Lc=new ut;let cE=0;class _r extends ks{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=C1,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lc.fromBufferAttribute(this,t),Lc.applyMatrix3(e),this.setXY(t,Lc.x,Lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),o=Xn(o,this.array),a=Xn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ny extends _r{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class iy extends _r{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends _r{constructor(e,t,i){super(new Float32Array(e),t,i)}}const uE=new dl,Na=new j,Xf=new j;class fl{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Na,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Xf)),this.expandByPoint(Na.copy(e.center).sub(Xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let dE=0;const Si=new Yt,jf=new bn,So=new j,ci=new dl,Ia=new dl,wn=new j;class vn extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R1(e)?iy:ny)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ht().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,i){return Si.makeTranslation(e,t,i),this.applyMatrix4(Si),this}scale(e,t,i){return Si.makeScale(e,t,i),this.applyMatrix4(Si),this}lookAt(e){return jf.lookAt(e),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ia.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(ci.min,Ia.min),ci.expandByPoint(wn),wn.addVectors(ci.max,Ia.max),ci.expandByPoint(wn)):(ci.expandByPoint(Ia.min),ci.expandByPoint(Ia.max))}ci.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)wn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(wn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)wn.fromBufferAttribute(u,h),d&&(So.fromBufferAttribute(e,h),wn.add(So)),o=Math.max(o,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new _r(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let E=0;E<i.count;E++)u[E]=new j,d[E]=new j;const h=new j,p=new j,v=new j,m=new ut,x=new ut,M=new ut,T=new j,S=new j;function y(E,D,B){h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,D),v.fromBufferAttribute(i,B),m.fromBufferAttribute(a,E),x.fromBufferAttribute(a,D),M.fromBufferAttribute(a,B),p.sub(h),v.sub(h),x.sub(m),M.sub(m);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(G),S.copy(v).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(G),u[E].add(T),u[D].add(T),u[B].add(T),d[E].add(S),d[D].add(S),d[B].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let E=0,D=P.length;E<D;++E){const B=P[E],G=B.start,$=B.count;for(let ie=G,H=G+$;ie<H;ie+=3)y(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const F=new j,C=new j,R=new j,L=new j;function O(E){R.fromBufferAttribute(o,E),L.copy(R);const D=u[E];F.copy(D),F.sub(R.multiplyScalar(R.dot(D))).normalize(),C.crossVectors(L,D);const G=C.dot(d[E])<0?-1:1;c.setXYZW(E,F.x,F.y,F.z,G)}for(let E=0,D=P.length;E<D;++E){const B=P[E],G=B.start,$=B.count;for(let ie=G,H=G+$;ie<H;ie+=3)O(e.getX(ie+0)),O(e.getX(ie+1)),O(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _r(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const o=new j,a=new j,c=new j,u=new j,d=new j,h=new j,p=new j,v=new j;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),T=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),u.add(p),d.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,x=t.count;m<x;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,m=new h.constructor(d.length*p);let x=0,M=0;for(let T=0,S=d.length;T<S;T++){u.isInterleavedBufferAttribute?x=d[T]*u.data.stride+u.offset:x=d[T]*p;for(let y=0;y<p;y++)m[M++]=h[x++]}return new _r(m,p,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const m=h[p],x=e(m,i);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,m=h.length;v<m;v++){const x=h[v];p.push(x.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let m=0,x=v.length;m<x;m++)p.push(v[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yf=new j,fE=new j,hE=new ht;class Kr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Yf.subVectors(i,t).cross(fE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(Yf),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hE.getNormalMatrix(e),o=this.coplanarPoint(Yf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let pE=0;class Ti extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=ja,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=U_,this.blendDst=F_,this.blendEquation=bo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rf,this.stencilZFail=Rf,this.stencilZPass=Rf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector2&&i&&i.isVector2||o&&o.isEuler&&i&&i.isEuler||o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Kr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ut().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr=new j,qf=new j,Dc=new j,Nc=new j;class Vp{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){qf.copy(e).add(t).multiplyScalar(.5),Dc.copy(t).sub(e).normalize(),Nc.copy(this.origin).sub(qf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Dc),u=Nc.dot(this.direction),d=-Nc.dot(Dc),h=Nc.lengthSq(),p=Math.abs(1-c*c);let v,m,x,M;if(p>0)if(v=c*d-u,m=c*u-d,M=a*p,v>=0)if(m>=-M)if(m<=M){const T=1/p;v*=T,m*=T,x=v*(v+c*m+2*u)+m*(c*v+m+2*d)+h}else m=a,v=Math.max(0,-(c*m+u)),x=-v*v+m*(m+2*d)+h;else m=-a,v=Math.max(0,-(c*m+u)),x=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-c*a+u)),m=v>0?-a:Math.min(Math.max(-a,-d),a),x=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-a,-d),a),x=m*(m+2*d)+h):(v=Math.max(0,-(c*a+u)),m=v>0?a:Math.min(Math.max(-a,-d),a),x=-v*v+m*(m+2*d)+h);else m=c>0?-a:a,v=Math.max(0,-(c*m+u)),x=-v*v+m*(m+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(qf).addScaledVector(Dc,m),x}intersectSphere(e,t){if(e.radius<0)return null;mr.subVectors(e.center,this.origin);const i=mr.dot(this.direction),o=mr.dot(mr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(u=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,i,o,a){const c=this.origin,u=this.direction,d=u.x,h=u.y,p=u.z,v=e.x-c.x,m=e.y-c.y,x=e.z-c.z,M=t.x-c.x,T=t.y-c.y,S=t.z-c.z,y=i.x-c.x,P=i.y-c.y,F=i.z-c.z,C=Math.abs(d),R=Math.abs(h),L=Math.abs(p);let O,E,D,B,G,$,ie,H,ee,he,J,Z;if(C>=R&&C>=L?(D=d,$=v,ee=M,Z=y,d>=0?(O=h,E=p,B=m,G=x,ie=T,H=S,he=P,J=F):(O=p,E=h,B=x,G=m,ie=S,H=T,he=F,J=P)):R>=L?(D=h,$=m,ee=T,Z=P,h>=0?(O=p,E=d,B=x,G=v,ie=S,H=M,he=F,J=y):(O=d,E=p,B=v,G=x,ie=M,H=S,he=y,J=F)):(D=p,$=x,ee=S,Z=F,p>=0?(O=d,E=h,B=v,G=m,ie=M,H=T,he=y,J=P):(O=h,E=d,B=m,G=v,ie=T,H=M,he=P,J=y)),D===0)return null;const Q=O/D,K=E/D,N=1/D,ae=B-Q*$,Se=G-K*$,ke=ie-Q*ee,Be=H-K*ee,He=he-Q*Z,oe=J-K*Z,fe=He*Be-oe*ke,Ee=ae*oe-Se*He,Je=ke*Se-Be*ae;if(o){if(fe<0||Ee<0||Je<0)return null}else if((fe<0||Ee<0||Je<0)&&(fe>0||Ee>0||Je>0))return null;const Ne=fe+Ee+Je;if(Ne===0)return null;const dt=N*(fe*$+Ee*ee+Je*Z);return(Ne>0?dt<0:dt>0)?null:this.at(dt/Ne,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pu extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=O_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yv=new Yt,Es=new Vp,Ic=new fl,Sv=new j,Uc=new j,Fc=new j,Oc=new j,$f=new j,kc=new j,Mv=new j,Bc=new j;class ti extends bn{constructor(e=new vn,t=new Pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){kc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],v=a[d];p!==0&&($f.fromBufferAttribute(v,e),c?kc.addScaledVector($f,p):kc.addScaledVector($f.sub(t),p))}t.add(kc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ic.copy(i.boundingSphere),Ic.applyMatrix4(a),Es.copy(e.ray).recast(e.near),!(Ic.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Ic,Sv)===null||Es.origin.distanceToSquared(Sv)>(e.far-e.near)**2))&&(yv.copy(a).invert(),Es.copy(e.ray).applyMatrix4(yv),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,m=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],y=c[S.materialIndex],P=Math.max(S.start,x.start),F=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let C=P,R=F;C<R;C+=3){const L=u.getX(C),O=u.getX(C+1),E=u.getX(C+2);o=zc(this,y,e,i,h,p,v,L,O,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const P=u.getX(S),F=u.getX(S+1),C=u.getX(S+2);o=zc(this,c,e,i,h,p,v,P,F,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],y=c[S.materialIndex],P=Math.max(S.start,x.start),F=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=P,R=F;C<R;C+=3){const L=C,O=C+1,E=C+2;o=zc(this,y,e,i,h,p,v,L,O,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const P=S,F=S+1,C=S+2;o=zc(this,c,e,i,h,p,v,P,F,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function mE(n,e,t,i,o,a,c,u){let d;if(e.side===ni?d=i.intersectTriangle(c,a,o,!0,u):d=i.intersectTriangle(o,a,c,e.side===Us,u),d===null)return null;Bc.copy(u),Bc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Bc);return h<t.near||h>t.far?null:{distance:h,point:Bc.clone(),object:n}}function zc(n,e,t,i,o,a,c,u,d,h){n.getVertexPosition(u,Uc),n.getVertexPosition(d,Fc),n.getVertexPosition(h,Oc);const p=mE(n,e,t,i,Uc,Fc,Oc,Mv);if(p){const v=new j;zi.getBarycoord(Mv,Uc,Fc,Oc,v),o&&(p.uv=zi.getInterpolatedAttribute(o,u,d,h,v,new ut)),a&&(p.uv1=zi.getInterpolatedAttribute(a,u,d,h,v,new ut)),c&&(p.normal=zi.getInterpolatedAttribute(c,u,d,h,v,new j),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:h,normal:new j,materialIndex:0};zi.getNormal(Uc,Fc,Oc,m.normal),p.face=m,p.barycoord=v}return p}class gE extends Vn{constructor(e=null,t=1,i=1,o,a,c,u,d,h=Pn,p=Pn,v,m){super(null,c,u,d,h,p,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=new fl,vE=new ut(.5,.5),Vc=new j;class Hp{constructor(e=new Kr,t=new Kr,i=new Kr,o=new Kr,a=new Kr,c=new Kr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],m=a[6],x=a[7],M=a[8],T=a[9],S=a[10],y=a[11],P=a[12],F=a[13],C=a[14],R=a[15];if(o[0].setComponents(h-c,x-p,y-M,R-P).normalize(),o[1].setComponents(h+c,x+p,y+M,R+P).normalize(),o[2].setComponents(h+u,x+v,y+T,R+F).normalize(),o[3].setComponents(h-u,x-v,y-T,R-F).normalize(),i)o[4].setComponents(d,m,S,C).normalize(),o[5].setComponents(h-d,x-m,y-S,R-C).normalize();else if(o[4].setComponents(h-d,x-m,y-S,R-C).normalize(),t===Ki)o[5].setComponents(h+d,x+m,y+S,R+C).normalize();else if(t===rl)o[5].setComponents(d,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=vE.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Vc.x=o.normal.x>0?e.max.x:e.min.x,Vc.y=o.normal.y>0?e.max.y:e.min.y,Vc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ry extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new j,gu=new j,wv=new Yt,Ua=new Vp,Hc=new fl,Kf=new j,Ev=new j;class xE extends bn{constructor(e=new vn,t=new ry){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)mu.fromBufferAttribute(t,o-1),gu.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Kt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(o),Hc.radius+=a,e.ray.intersectsSphere(Hc)===!1)return;wv.copy(o).invert(),Ua.copy(e.ray).applyMatrix4(wv);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=h){const y=p.getX(T),P=p.getX(T+1),F=Gc(this,e,Ua,d,y,P,T);F&&t.push(F)}if(this.isLineLoop){const T=p.getX(M-1),S=p.getX(x),y=Gc(this,e,Ua,d,T,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=h){const y=Gc(this,e,Ua,d,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=Gc(this,e,Ua,d,M-1,x,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Gc(n,e,t,i,o,a,c){const u=n.geometry.attributes.position;if(mu.fromBufferAttribute(u,o),gu.fromBufferAttribute(u,a),t.distanceSqToSegment(mu,gu,Kf,Ev)>i)return;Kf.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Kf);if(!(h<e.near||h>e.far))return{distance:h,point:Ev.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}const Tv=new j,bv=new j;class sy extends xE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)Tv.fromBufferAttribute(t,o),bv.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Tv.distanceTo(bv);e.setAttribute("lineDistance",new Kt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ka extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Av=new Yt,op=new Vp,Wc=new fl,Xc=new j;class za extends bn{constructor(e=new vn,t=new Ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wc.copy(i.boundingSphere),Wc.applyMatrix4(o),Wc.radius+=a,e.ray.intersectsSphere(Wc)===!1)return;Av.copy(o).invert(),op.copy(e.ray).applyMatrix4(Av);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,v=i.attributes.position;if(h!==null){const m=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let M=m,T=x;M<T;M++){const S=h.getX(M);Xc.fromBufferAttribute(v,S),Cv(Xc,S,d,o,e,t,this)}}else{const m=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let M=m,T=x;M<T;M++)Xc.fromBufferAttribute(v,M),Cv(Xc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Cv(n,e,t,i,o,a,c){const u=op.distanceSqToPoint(n);if(u<t){const d=new j;op.closestPointToPoint(n,d),d.applyMatrix4(i);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class oy extends Vn{constructor(e=[],t=Fs,i,o,a,c,u,d,h,p){super(e,t,i,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _E extends Vn{constructor(e,t,i,o,a,c,u,d,h){super(e,t,i,o,a,c,u,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ol extends Vn{constructor(e,t,i=tr,o,a,c,u=Pn,d=Pn,h,p=Mr,v=1){if(p!==Mr&&p!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,c,u,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class yE extends ol{constructor(e,t=tr,i=Fs,o,a,c=Pn,u=Pn,d,h=Mr){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,i,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ay extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hl extends vn{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],v=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(v,2));function M(T,S,y,P,F,C,R,L,O,E,D){const B=C/O,G=R/E,$=C/2,ie=R/2,H=L/2,ee=O+1,he=E+1;let J=0,Z=0;const Q=new j;for(let K=0;K<he;K++){const N=K*G-ie;for(let ae=0;ae<ee;ae++){const Se=ae*B-$;Q[T]=Se*P,Q[S]=N*F,Q[y]=H,h.push(Q.x,Q.y,Q.z),Q[T]=0,Q[S]=0,Q[y]=L>0?1:-1,p.push(Q.x,Q.y,Q.z),v.push(ae/O),v.push(1-K/E),J+=1}}for(let K=0;K<E;K++)for(let N=0;N<O;N++){const ae=m+N+ee*K,Se=m+N+ee*(K+1),ke=m+(N+1)+ee*(K+1),Be=m+(N+1)+ee*K;d.push(ae,Se,Be),d.push(Se,ke,Be),Z+=6}u.addGroup(x,Z,D),x+=Z,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gp extends vn{constructor(e=1,t=1,i=1,o=32,a=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d};const h=this;o=Math.floor(o),a=Math.floor(a);const p=[],v=[],m=[],x=[];let M=0;const T=[],S=i/2;let y=0;P(),c===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(p),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(m,3)),this.setAttribute("uv",new Kt(x,2));function P(){const C=new j,R=new j;let L=0;const O=(t-e)/i;for(let E=0;E<=a;E++){const D=[],B=E/a,G=B*(t-e)+e;for(let $=0;$<=o;$++){const ie=$/o,H=ie*d+u,ee=Math.sin(H),he=Math.cos(H);R.x=G*ee,R.y=-B*i+S,R.z=G*he,v.push(R.x,R.y,R.z),C.set(ee,O,he).normalize(),m.push(C.x,C.y,C.z),x.push(ie,1-B),D.push(M++)}T.push(D)}for(let E=0;E<o;E++)for(let D=0;D<a;D++){const B=T[D][E],G=T[D+1][E],$=T[D+1][E+1],ie=T[D][E+1];(e>0||D!==0)&&(p.push(B,G,ie),L+=3),(t>0||D!==a-1)&&(p.push(G,$,ie),L+=3)}h.addGroup(y,L,0),y+=L}function F(C){const R=M,L=new ut,O=new j;let E=0;const D=C===!0?e:t,B=C===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,S*B,0),m.push(0,B,0),x.push(.5,.5),M++;const G=M;for(let $=0;$<=o;$++){const H=$/o*d+u,ee=Math.cos(H),he=Math.sin(H);O.x=D*he,O.y=S*B,O.z=D*ee,v.push(O.x,O.y,O.z),m.push(0,B,0),L.x=ee*.5+.5,L.y=he*.5*B+.5,x.push(L.x,L.y),M++}for(let $=0;$<o;$++){const ie=R+$,H=G+$;C===!0?p.push(H,H+1,ie):p.push(H+1,H,ie),E+=3}h.addGroup(y,E,C===!0?1:2),y+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class SE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(o),t.push(a),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let o=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,d=a-1,h;for(;u<=d;)if(o=Math.floor(u+(d-u)/2),h=i[o]-c,h<0)u=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,i[o]===c)return o/(a-1);const p=i[o],m=i[o+1]-p,x=(c-p)/m;return(o+x)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),u=this.getPoint(a),d=t||(c.isVector2?new ut:new j);return d.copy(u).sub(c).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new j,o=[],a=[],c=[],u=new j,d=new Yt;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new j)}a[0]=new j,c[0]=new j;let h=Number.MAX_VALUE;const p=Math.abs(o[0].x),v=Math.abs(o[0].y),m=Math.abs(o[0].z);p<=h&&(h=p,i.set(1,0,0)),v<=h&&(h=v,i.set(0,1,0)),m<=h&&i.set(0,0,1),u.crossVectors(o[0],i).normalize(),a[0].crossVectors(o[0],u),c[0].crossVectors(o[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),u.crossVectors(o[x-1],o[x]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(St(o[x-1].dot(o[x]),-1,1));a[x].applyMatrix4(d.makeRotationAxis(u,M))}c[x].crossVectors(o[x],a[x])}if(t===!0){let x=Math.acos(St(a[0].dot(a[e]),-1,1));x/=e,o[0].dot(u.crossVectors(a[0],a[e]))>0&&(x=-x);for(let M=1;M<=e;M++)a[M].applyMatrix4(d.makeRotationAxis(o[M],x*M)),c[M].crossVectors(o[M],a[M])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Wp(){let n=0,e=0,t=0,i=0;function o(a,c,u,d){n=a,e=u,t=-3*a+3*c-2*u-d,i=2*a-2*c+u+d}return{initCatmullRom:function(a,c,u,d,h){o(c,u,h*(u-a),h*(d-c))},initNonuniformCatmullRom:function(a,c,u,d,h,p,v){let m=(c-a)/h-(u-a)/(h+p)+(u-c)/p,x=(u-c)/p-(d-c)/(p+v)+(d-u)/v;m*=p,x*=p,o(c,u,m,x)},calc:function(a){const c=a*a,u=c*a;return n+e*a+t*c+i*u}}}const Rv=new j,Pv=new j,Zf=new Wp,Qf=new Wp,Jf=new Wp;class Lv extends SE{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new j){const i=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),d=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:d===0&&u===a-1&&(u=a-2,d=1);let h,p;this.closed||u>0?h=o[(u-1)%a]:(Pv.subVectors(o[0],o[1]).add(o[0]),h=Pv);const v=o[u%a],m=o[(u+1)%a];if(this.closed||u+2<a?p=o[(u+2)%a]:(Rv.subVectors(o[a-1],o[a-2]).add(o[a-1]),p=Rv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(m),x),S=Math.pow(m.distanceToSquared(p),x);T<1e-4&&(T=1),M<1e-4&&(M=T),S<1e-4&&(S=T),Zf.initNonuniformCatmullRom(h.x,v.x,m.x,p.x,M,T,S),Qf.initNonuniformCatmullRom(h.y,v.y,m.y,p.y,M,T,S),Jf.initNonuniformCatmullRom(h.z,v.z,m.z,p.z,M,T,S)}else this.curveType==="catmullrom"&&(Zf.initCatmullRom(h.x,v.x,m.x,p.x,this.tension),Qf.initCatmullRom(h.y,v.y,m.y,p.y,this.tension),Jf.initCatmullRom(h.z,v.z,m.z,p.z,this.tension));return i.set(Zf.calc(d),Qf.calc(d),Jf.calc(d)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new j().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Lu extends vn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(o),h=u+1,p=d+1,v=e/u,m=t/d,x=[],M=[],T=[],S=[];for(let y=0;y<p;y++){const P=y*m-c;for(let F=0;F<h;F++){const C=F*v-a;M.push(C,-P,0),T.push(0,0,1),S.push(F/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let P=0;P<u;P++){const F=P+h*y,C=P+h*(y+1),R=P+1+h*(y+1),L=P+1+h*y;x.push(F,C,L),x.push(C,R,L)}this.setIndex(x),this.setAttribute("position",new Kt(M,3)),this.setAttribute("normal",new Kt(T,3)),this.setAttribute("uv",new Kt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.width,e.height,e.widthSegments,e.heightSegments)}}class vu extends vn{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let h=0;const p=[],v=new j,m=new j,x=[],M=[],T=[],S=[];for(let y=0;y<=i;y++){const P=[],F=y/i,C=c+F*u,R=e*Math.cos(C),L=Math.sqrt(e*e-R*R);let O=0;y===0&&c===0?O=.5/t:y===i&&d===Math.PI&&(O=-.5/t);for(let E=0;E<=t;E++){const D=E/t,B=o+D*a;v.x=-L*Math.cos(B),v.y=R,v.z=L*Math.sin(B),M.push(v.x,v.y,v.z),m.copy(v).normalize(),T.push(m.x,m.y,m.z),S.push(D+O,1-F),P.push(h++)}p.push(P)}for(let y=0;y<i;y++)for(let P=0;P<t;P++){const F=p[y][P+1],C=p[y][P],R=p[y+1][P],L=p[y+1][P+1];(y!==0||c>0)&&x.push(F,C,L),(y!==i-1||d<Math.PI)&&x.push(C,R,L)}this.setIndex(x),this.setAttribute("position",new Kt(M,3)),this.setAttribute("normal",new Kt(T,3)),this.setAttribute("uv",new Kt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Oo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];if(Dv(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(Dv(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function jn(n){const e={};for(let t=0;t<n.length;t++){const i=Oo(n[t]);for(const o in i)e[o]=i[o]}return e}function Dv(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ME(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ly(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const xu={clone:Oo,merge:jn};var wE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wE,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=ME(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const o=e.uniforms[i];switch(this.uniforms[i]={},o.type){case"t":this.uniforms[i].value=t[o.value]||null;break;case"c":this.uniforms[i].value=new pt().setHex(o.value);break;case"v2":this.uniforms[i].value=new ut().fromArray(o.value);break;case"v3":this.uniforms[i].value=new j().fromArray(o.value);break;case"v4":this.uniforms[i].value=new en().fromArray(o.value);break;case"m3":this.uniforms[i].value=new ht().fromArray(o.value);break;case"m4":this.uniforms[i].value=new Yt().fromArray(o.value);break;default:this.uniforms[i].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class TE extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bE extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sp,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AE extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CE extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cy extends bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const eh=new Yt,Nv=new j,Iv=new j;class RE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hp,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Nv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nv),Iv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iv),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,o){eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(eh,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,c=o?o.z/a.x:1,u=o?o.w/a.y:1,d=o?o.x/a.x:0,h=o?o.y/a.y:0;e.coordinateSystem===rl||e.reversedDepth?t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,.5,.5,0,0,0,1),t.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jc=new j,Yc=new Wo,ji=new j;class uy extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jc,Yc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Yc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(jc,Yc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Yc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new j,Uv=new ut,Fv=new ut;class Ei extends uy{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,Uv,Fv),t.subVectors(Fv,Uv)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/h,o*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Du extends uy{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class PE extends RE{constructor(){super(new Du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LE extends cy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new PE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class DE extends cy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mo=-90,wo=1;class NE extends bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ei(Mo,wo,e,t);o.layers=this.layers,this.add(o);const a=new Ei(Mo,wo,e,t);a.layers=this.layers,this.add(a);const c=new Ei(Mo,wo,e,t);c.layers=this.layers,this.add(c);const u=new Ei(Mo,wo,e,t);u.layers=this.layers,this.add(u);const d=new Ei(Mo,wo,e,t);d.layers=this.layers,this.add(d);const h=new Ei(Mo,wo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class IE extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class UE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=FE.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function FE(){this._document.hidden===!1&&this.reset()}class OE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Rm=class Rm{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};Rm.prototype.isMatrix2=!0;let Ov=Rm;function kv(n,e,t,i){const o=kE(i);switch(t){case $_:return n*e;case Z_:return n*e/o.components*o.byteLength;case Ip:return n*e/o.components*o.byteLength;case Os:return n*e*2/o.components*o.byteLength;case Up:return n*e*2/o.components*o.byteLength;case K_:return n*e*3/o.components*o.byteLength;case Vi:return n*e*4/o.components*o.byteLength;case Fp:return n*e*4/o.components*o.byteLength;case tu:case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case iu:case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Dh:return Math.max(n,16)*Math.max(e,8)/4;case Rh:case Lh:return Math.max(n,8)*Math.max(e,8)/2;case Nh:case Ih:case Fh:case Oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uh:case uu:case kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jh:case ep:case tp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(n/4)*Math.ceil(e/4)*8;case du:case rp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kE(n){switch(n){case ui:case X_:return{byteLength:1,components:1};case nl:case j_:case ii:return{byteLength:2,components:1};case Dp:case Np:return{byteLength:2,components:4};case tr:case Lp:case $i:return{byteLength:4,components:1};case Y_:case q_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dy(){let n=null,e=!1,t=null,i=null;function o(a,c){i=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function BE(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<v.length;x++){const M=v[m],T=v[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++m,v[m]=T)}v.length=m+1;for(let x=0,M=v.length;x<M;x++){const T=v[x];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var zE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gT="gl_FragColor = linearToOutputTexel( gl_FragColor );",vT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,DT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,NT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ab=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ub=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:zE,alphahash_pars_fragment:VE,alphamap_fragment:HE,alphamap_pars_fragment:GE,alphatest_fragment:WE,alphatest_pars_fragment:XE,aomap_fragment:jE,aomap_pars_fragment:YE,batching_pars_vertex:qE,batching_vertex:$E,begin_vertex:KE,beginnormal_vertex:ZE,bsdfs:QE,iridescence_fragment:JE,bumpmap_pars_fragment:eT,clipping_planes_fragment:tT,clipping_planes_pars_fragment:nT,clipping_planes_pars_vertex:iT,clipping_planes_vertex:rT,color_fragment:sT,color_pars_fragment:oT,color_pars_vertex:aT,color_vertex:lT,common:cT,cube_uv_reflection_fragment:uT,defaultnormal_vertex:dT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:pT,emissivemap_pars_fragment:mT,colorspace_fragment:gT,colorspace_pars_fragment:vT,envmap_fragment:xT,envmap_common_pars_fragment:_T,envmap_pars_fragment:yT,envmap_pars_vertex:ST,envmap_physical_pars_fragment:DT,envmap_vertex:MT,fog_vertex:wT,fog_pars_vertex:ET,fog_fragment:TT,fog_pars_fragment:bT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:CT,lights_lambert_fragment:RT,lights_lambert_pars_fragment:PT,lights_pars_begin:LT,lights_toon_fragment:NT,lights_toon_pars_fragment:IT,lights_phong_fragment:UT,lights_phong_pars_fragment:FT,lights_physical_fragment:OT,lights_physical_pars_fragment:kT,lights_fragment_begin:BT,lights_fragment_maps:zT,lights_fragment_end:VT,lightprobes_pars_fragment:HT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:WT,logdepthbuf_pars_vertex:XT,logdepthbuf_vertex:jT,map_fragment:YT,map_pars_fragment:qT,map_particle_fragment:$T,map_particle_pars_fragment:KT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:QT,morphinstance_vertex:JT,morphcolor_vertex:eb,morphnormal_vertex:tb,morphtarget_pars_vertex:nb,morphtarget_vertex:ib,normal_fragment_begin:rb,normal_fragment_maps:sb,normal_pars_fragment:ob,normal_pars_vertex:ab,normal_vertex:lb,normalmap_pars_fragment:cb,clearcoat_normal_fragment_begin:ub,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:fb,iridescence_pars_fragment:hb,opaque_fragment:pb,packing:mb,premultiplied_alpha_fragment:gb,project_vertex:vb,dithering_fragment:xb,dithering_pars_fragment:_b,roughnessmap_fragment:yb,roughnessmap_pars_fragment:Sb,shadowmap_pars_fragment:Mb,shadowmap_pars_vertex:wb,shadowmap_vertex:Eb,shadowmask_pars_fragment:Tb,skinbase_vertex:bb,skinning_pars_vertex:Ab,skinning_vertex:Cb,skinnormal_vertex:Rb,specularmap_fragment:Pb,specularmap_pars_fragment:Lb,tonemapping_fragment:Db,tonemapping_pars_fragment:Nb,transmission_fragment:Ib,transmission_pars_fragment:Ub,uv_pars_fragment:Fb,uv_pars_vertex:Ob,uv_vertex:kb,worldpos_vertex:Bb,background_vert:zb,background_frag:Vb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Wb,cube_frag:Xb,depth_vert:jb,depth_frag:Yb,distance_vert:qb,distance_frag:$b,equirect_vert:Kb,equirect_frag:Zb,linedashed_vert:Qb,linedashed_frag:Jb,meshbasic_vert:eA,meshbasic_frag:tA,meshlambert_vert:nA,meshlambert_frag:iA,meshmatcap_vert:rA,meshmatcap_frag:sA,meshnormal_vert:oA,meshnormal_frag:aA,meshphong_vert:lA,meshphong_frag:cA,meshphysical_vert:uA,meshphysical_frag:dA,meshtoon_vert:fA,meshtoon_frag:hA,points_vert:pA,points_frag:mA,shadow_vert:gA,shadow_frag:vA,sprite_vert:xA,sprite_frag:_A},Fe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},qi={basic:{uniforms:jn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:jn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:jn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:jn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:jn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:jn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:jn([Fe.points,Fe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:jn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:jn([Fe.common,Fe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:jn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:jn([Fe.sprite,Fe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:jn([Fe.common,Fe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:jn([Fe.lights,Fe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};qi.physical={uniforms:jn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const qc={r:0,b:0,g:0},yA=new Yt,fy=new ht;fy.set(-1,0,0,0,1,0,0,0,1);function SA(n,e,t,i,o,a){const c=new pt(0);let u=o===!0?0:1,d,h,p=null,v=0,m=null;function x(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const C=P.backgroundBlurriness>0;F=e.get(F,C)}return F}function M(P){let F=!1;const C=x(P);C===null?S(c,u):C&&C.isColor&&(S(C,1),F=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(P,F){const C=x(F);C&&(C.isCubeTexture||C.mapping===Ru)?(h===void 0&&(h=new ti(new hl(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Oo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yA.makeRotationFromEuler(F.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(fy),h.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Ot,(p!==C||v!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=C,v=C.version,m=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new ti(new Lu(2,2),new Ln({name:"BackgroundMaterial",uniforms:Oo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||v!==C.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=C,v=C.version,m=n.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function S(P,F){P.getRGB(qc,ly(n)),t.buffers.color.setClear(qc.r,qc.g,qc.b,F,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,F=1){c.set(P),u=F,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,S(c,u)},render:M,addToRenderList:T,dispose:y}}function MA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=m(null);let a=o,c=!1;function u(G,$,ie,H,ee){let he=!1;const J=v(G,H,ie,$);a!==J&&(a=J,h(a.object)),he=x(G,H,ie,ee),he&&M(G,H,ie,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(G,$,ie,H),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function d(){return n.createVertexArray()}function h(G){return n.bindVertexArray(G)}function p(G){return n.deleteVertexArray(G)}function v(G,$,ie,H){const ee=H.wireframe===!0;let he=i[$.id];he===void 0&&(he={},i[$.id]=he);const J=G.isInstancedMesh===!0?G.id:0;let Z=he[J];Z===void 0&&(Z={},he[J]=Z);let Q=Z[ie.id];Q===void 0&&(Q={},Z[ie.id]=Q);let K=Q[ee];return K===void 0&&(K=m(d()),Q[ee]=K),K}function m(G){const $=[],ie=[],H=[];for(let ee=0;ee<t;ee++)$[ee]=0,ie[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ie,attributeDivisors:H,object:G,attributes:{},index:null}}function x(G,$,ie,H){const ee=a.attributes,he=$.attributes;let J=0;const Z=ie.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const N=ee[Q];let ae=he[Q];if(ae===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(ae=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(ae=G.instanceColor)),N===void 0||N.attribute!==ae||ae&&N.data!==ae.data)return!0;J++}return a.attributesNum!==J||a.index!==H}function M(G,$,ie,H){const ee={},he=$.attributes;let J=0;const Z=ie.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let N=he[Q];N===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(N=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(N=G.instanceColor));const ae={};ae.attribute=N,N&&N.data&&(ae.data=N.data),ee[Q]=ae,J++}a.attributes=ee,a.attributesNum=J,a.index=H}function T(){const G=a.newAttributes;for(let $=0,ie=G.length;$<ie;$++)G[$]=0}function S(G){y(G,0)}function y(G,$){const ie=a.newAttributes,H=a.enabledAttributes,ee=a.attributeDivisors;ie[G]=1,H[G]===0&&(n.enableVertexAttribArray(G),H[G]=1),ee[G]!==$&&(n.vertexAttribDivisor(G,$),ee[G]=$)}function P(){const G=a.newAttributes,$=a.enabledAttributes;for(let ie=0,H=$.length;ie<H;ie++)$[ie]!==G[ie]&&(n.disableVertexAttribArray(ie),$[ie]=0)}function F(G,$,ie,H,ee,he,J){J===!0?n.vertexAttribIPointer(G,$,ie,ee,he):n.vertexAttribPointer(G,$,ie,H,ee,he)}function C(G,$,ie,H){T();const ee=H.attributes,he=ie.getAttributes(),J=$.defaultAttributeValues;for(const Z in he){const Q=he[Z];if(Q.location>=0){let K=ee[Z];if(K===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),K!==void 0){const N=K.normalized,ae=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const ke=Se.buffer,Be=Se.type,He=Se.bytesPerElement,oe=Be===n.INT||Be===n.UNSIGNED_INT||K.gpuType===Lp;if(K.isInterleavedBufferAttribute){const fe=K.data,Ee=fe.stride,Je=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Q.locationSize;Ne++)y(Q.location+Ne,fe.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<Q.locationSize;Ne++)S(Q.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Ne=0;Ne<Q.locationSize;Ne++)F(Q.location+Ne,ae/Q.locationSize,Be,N,Ee*He,(Je+ae/Q.locationSize*Ne)*He,oe)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<Q.locationSize;fe++)y(Q.location+fe,K.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<Q.locationSize;fe++)S(Q.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let fe=0;fe<Q.locationSize;fe++)F(Q.location+fe,ae/Q.locationSize,Be,N,ae*He,ae/Q.locationSize*fe*He,oe)}}else if(J!==void 0){const N=J[Z];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(Q.location,N);break;case 3:n.vertexAttrib3fv(Q.location,N);break;case 4:n.vertexAttrib4fv(Q.location,N);break;default:n.vertexAttrib1fv(Q.location,N)}}}}P()}function R(){D();for(const G in i){const $=i[G];for(const ie in $){const H=$[ie];for(const ee in H){const he=H[ee];for(const J in he)p(he[J].object),delete he[J];delete H[ee]}}delete i[G]}}function L(G){if(i[G.id]===void 0)return;const $=i[G.id];for(const ie in $){const H=$[ie];for(const ee in H){const he=H[ee];for(const J in he)p(he[J].object),delete he[J];delete H[ee]}}delete i[G.id]}function O(G){for(const $ in i){const ie=i[$];for(const H in ie){const ee=ie[H];if(ee[G.id]===void 0)continue;const he=ee[G.id];for(const J in he)p(he[J].object),delete he[J];delete ee[G.id]}}}function E(G){for(const $ in i){const ie=i[$],H=G.isInstancedMesh===!0?G.id:0,ee=ie[H];if(ee!==void 0){for(const he in ee){const J=ee[he];for(const Z in J)p(J[Z].object),delete J[Z];delete ee[he]}delete ie[H],Object.keys(ie).length===0&&delete i[$]}}}function D(){B(),c=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:D,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:P}}function wA(n,e,t){let i;function o(d){i=d}function a(d,h){n.drawArrays(i,d,h),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawArraysInstanced(i,d,h,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,p);let m=0;for(let x=0;x<p;x++)m+=h[x];t.update(m,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function EA(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Vi&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const E=O===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ui&&O!==$i&&!E&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(st("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:C,maxSamples:R,samples:L}}function TA(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Kr,u=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const x=v.length!==0||m||i!==0||o;return o=m,i=v.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=p(v,m,0)},this.setState=function(v,m,x){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,y=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?p(null):h();else{const P=a?0:i,F=P*4;let C=y.clippingState||null;d.value=C,C=p(M,m,F,x);for(let R=0;R!==F;++R)C[R]=t[R];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,m,x,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const y=x+T*4,P=m.matrixWorldInverse;u.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let F=0,C=x;F!==T;++F,C+=4)c.copy(v[F]).applyMatrix4(P,u),c.normal.toArray(S,C),S[C+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}const Co=4,bA=6,AA=20,CA=256,Fa=new Du,Bv=new pt;let th=null,nh=0,ih=0,rh=!1;const RA=new j,bs=new j;class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=RA}=a;th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,ih),this._renderer.xr.enabled=rh,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ii,format:Vi,colorSpace:fu,depthBuffer:!1},o=Vv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vv(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PA(a)),this._blurMaterial=DA(a,e,t),this._ggxMaterial=LA(a,e,t)}return o}_compileMaterial(e){const t=new ti(new vn,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,o,a){const d=new Ei(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,x=v.toneMapping;v.getClearColor(Bv),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new hl,new Pu({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let y=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,y=!0):(S.color.copy(Bv),y=!0);for(let F=0;F<6;F++){const C=F%3;C===0?(d.up.set(0,h[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[F],a.y,a.z)):C===1?(d.up.set(0,0,h[F]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[F],a.z)):(d.up.set(0,h[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[F]));const R=this._cubeSize;Eo(o,C*R,F>2?R:0,R,R),v.setRenderTarget(o),y&&v.render(T,d),v.render(e,d)}v.toneMapping=x,v.autoClear=m,e.background=P}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Fs||e.mapping===Fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Eo(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),m=h*1.25,x=v*m,{_lodMax:M}=this,T=this._sizeLods[i],S=3*T*(i>M-Co?i-M+Co:0),y=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=M-t,Eo(a,S,y,3*T,2*T),o.setRenderTarget(a),o.render(u,Fa),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-i,Eo(e,S,y,3*T,2*T),o.setRenderTarget(e),o.render(u,Fa)}_blur(e,t,i,o){const a=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,c),this._blurPass(a,e,i,i,c)}_blurPass(e,t,i,o,a){const c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[o];d.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-i;const p=this._sizeLods[o],v=3*p*(o>this._lodMax-Co?o-this._lodMax+Co:0),m=4*(this._cubeSize-p);Eo(t,v,m,3*p,2*p),c.setRenderTarget(t),c.render(d,Fa)}}function PA(n){const e=[],t=[];let i=n;const o=n-Co+1+bA;for(let a=0;a<o;a++){const c=Math.pow(2,i);e.push(c);const u=1/(c-2),d=-u,h=1+u,p=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,m=6,x=3,M=new Float32Array(x*m*v),T=new Float32Array(x*m*v);for(let y=0;y<v;y++){const P=y%3*2/3-1,F=y>2?0:-1,C=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];M.set(C,x*m*y);for(let R=0;R<m;R++){const L=p[R*2]*2-1,O=p[R*2+1]*2-1;y===0?bs.set(1,O,L):y===1?bs.set(-L,1,-O):y===2?bs.set(-L,O,1):y===3?bs.set(-1,O,-L):y===4?bs.set(-L,-1,O):bs.set(L,O,-1),bs.toArray(T,(y*m+R)*x)}}const S=new vn;S.setAttribute("position",new _r(M,x)),S.setAttribute("outputDirection",new _r(T,x)),t.push(new ti(S,null)),i>Co&&i--}return{lodMeshes:t,sizeLods:e}}function Vv(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function LA(n,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function DA(n,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:AA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Hv(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Gv(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Nu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hy extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new oy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new hl(5,5,5),a=new Ln({name:"CubemapFromEquirect",uniforms:Oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:Zi});a.uniforms.tEquirect.value=t;const c=new ti(o,a),u=t.minFilter;return t.minFilter===Ps&&(t.minFilter=zn),new NE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function NA(n){let e=new WeakMap,t=new WeakMap,i=null;function o(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){const x=m.mapping;if(x===bf||x===Af)if(e.has(m)){const M=e.get(m).texture;return u(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const T=new hy(M.height);return T.fromEquirectangularTexture(n,m),e.set(m,T),m.addEventListener("dispose",h),u(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,M=x===bf||x===Af,T=x===Fs||x===Fo;if(M||T){let S=t.get(m);const y=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return i===null&&(i=new zv(n)),S=M?i.fromEquirectangular(m,S):i.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const P=m.image;return M&&P&&P.height>0||T&&P&&d(P)?(i===null&&(i=new zv(n)),S=M?i.fromEquirectangular(m):i.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",p),S.texture):null}}}return m}function u(m,x){return x===bf?m.mapping=Fs:x===Af&&(m.mapping=Fo),m}function d(m){let x=0;const M=6;for(let T=0;T<M;T++)m[T]!==void 0&&x++;return x===M}function h(m){const x=m.target;x.removeEventListener("dispose",h);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function p(m){const x=m.target;x.removeEventListener("dispose",p);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:v}}function IA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Io("WebGLRenderer: "+i+" extension not supported."),o}}}function UA(n,e,t,i){const o={},a=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const x=a.get(m);x&&(e.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const x in m)e.update(m[x],n.ARRAY_BUFFER)}function h(v){const m=[],x=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(x!==null){const P=x.array;T=x.version;for(let F=0,C=P.length;F<C;F+=3){const R=P[F+0],L=P[F+1],O=P[F+2];m.push(R,L,L,O,O,R)}}else{const P=M.array;T=M.version;for(let F=0,C=P.length/3-1;F<C;F+=3){const R=F+0,L=F+1,O=F+2;m.push(R,L,L,O,O,R)}}const S=new(M.count>=65535?iy:ny)(m,1);S.version=T;const y=a.get(v);y&&e.remove(y),a.set(v,S)}function p(v){const m=a.get(v);if(m){const x=v.index;x!==null&&m.version<x.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function FA(n,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,m){n.drawElements(i,m,a,v*c),t.update(m,i,1)}function h(v,m,x){x!==0&&(n.drawElementsInstanced(i,m,a,v*c,x),t.update(m,i,x))}function p(v,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,v,0,x);let T=0;for(let S=0;S<x;S++)T+=m[S];t.update(T,i,1)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function OA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function kA(n,e,t){const i=new WeakMap,o=new en;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==v){let B=function(){E.dispose(),i.delete(u),u.removeEventListener("dispose",B)};var x=B;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let R=u.attributes.position.count*C,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const O=new Float32Array(R*L*4*v),E=new J_(O,R,L,v);E.type=$i,E.needsUpdate=!0;const D=C*4;for(let G=0;G<v;G++){const $=y[G],ie=P[G],H=F[G],ee=R*L*4*G;for(let he=0;he<$.count;he++){const J=he*D;M===!0&&(o.fromBufferAttribute($,he),O[ee+J+0]=o.x,O[ee+J+1]=o.y,O[ee+J+2]=o.z,O[ee+J+3]=0),T===!0&&(o.fromBufferAttribute(ie,he),O[ee+J+4]=o.x,O[ee+J+5]=o.y,O[ee+J+6]=o.z,O[ee+J+7]=0),S===!0&&(o.fromBufferAttribute(H,he),O[ee+J+8]=o.x,O[ee+J+9]=o.y,O[ee+J+10]=o.z,O[ee+J+11]=H.itemSize===4?o.w:1)}}m={count:v,texture:E,size:new ut(R,L)},i.set(u,m),u.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function BA(n,e,t,i,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return m}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const zA={[k_]:"LINEAR_TONE_MAPPING",[B_]:"REINHARD_TONE_MAPPING",[z_]:"CINEON_TONE_MAPPING",[Pp]:"ACES_FILMIC_TONE_MAPPING",[H_]:"AGX_TONE_MAPPING",[G_]:"NEUTRAL_TONE_MAPPING",[V_]:"CUSTOM_TONE_MAPPING"};function VA(n,e,t,i,o,a){const c=new Yn(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,d=null;const h=new vn;h.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const p=new TE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new ti(h,p),m=new Du(-1,1,1,-1,0,1);let x=null,M=null,T=!1,S,y=null,P=[],F=!1;this.setSize=function(C,R){c.setSize(C,R),u!==null&&u.setSize(C,R),d!==null&&d.setSize(C,R);for(let L=0;L<P.length;L++){const O=P[L];O.setSize&&O.setSize(C,R)}},this.setEffects=function(C){P=C,F=P.length>0&&P[0].isRenderPass===!0;const R=c.width,L=c.height;P.length>0&&u===null&&(u=new Yn(R,L,{type:ii,depthBuffer:!1,stencilBuffer:!1}),d=new Yn(R,L,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<P.length;O++){const E=P[O];E.setSize&&E.setSize(R,L)}},this.begin=function(C,R){if(T||C.toneMapping===Qi&&P.length===0)return!1;if(y=R,R!==null){const L=R.width,O=R.height;(c.width!==L||c.height!==O)&&this.setSize(L,O)}return F===!1&&C.setRenderTarget(c),S=C.toneMapping,C.toneMapping=Qi,!0},this.hasRenderPass=function(){return F},this.end=function(C,R){C.toneMapping=S,T=!0;let L=c,O=u;for(let E=0;E<P.length;E++){const D=P[E];D.enabled!==!1&&(D.render(C,O,L,R),D.needsSwap!==!1&&(L=O,O=O===u?d:u))}if(x!==C.outputColorSpace||M!==C.toneMapping){x=C.outputColorSpace,M=C.toneMapping,p.defines={},Tt.getTransfer(x)===Ot&&(p.defines.SRGB_TRANSFER="");const E=zA[M];E&&(p.defines[E]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(y),C.render(v,m),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),h.dispose(),p.dispose()}}const py=new Vn,ap=new ol(1,1),my=new J_,gy=new eE,vy=new oy,Wv=[],Xv=[],jv=new Float32Array(16),Yv=new Float32Array(9),qv=new Float32Array(4);function Xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=Wv[o];if(a===void 0&&(a=new Float32Array(o),Wv[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Iu(n,e){let t=Xv[e];t===void 0&&(t=new Int32Array(e),Xv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function XA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function jA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;qv.set(i),n.uniformMatrix2fv(this.addr,!1,qv),_n(t,i)}}function YA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;Yv.set(i),n.uniformMatrix3fv(this.addr,!1,Yv),_n(t,i)}}function qA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;jv.set(i),n.uniformMatrix4fv(this.addr,!1,jv),_n(t,i)}}function $A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function QA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function JA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function tC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function nC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function iC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(ap.compareFunction=t.isReversedDepthBuffer()?kp:Op,a=ap):a=py,t.setTexture2D(e||a,o)}function rC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||gy,o)}function sC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||vy,o)}function oC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||my,o)}function aC(n){switch(n){case 5126:return HA;case 35664:return GA;case 35665:return WA;case 35666:return XA;case 35674:return jA;case 35675:return YA;case 35676:return qA;case 5124:case 35670:return $A;case 35667:case 35671:return KA;case 35668:case 35672:return ZA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return eC;case 36295:return tC;case 36296:return nC;case 35678:case 36198:case 36298:case 36306:case 35682:return iC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return oC}}function lC(n,e){n.uniform1fv(this.addr,e)}function cC(n,e){const t=Xo(e,this.size,2);n.uniform2fv(this.addr,t)}function uC(n,e){const t=Xo(e,this.size,3);n.uniform3fv(this.addr,t)}function dC(n,e){const t=Xo(e,this.size,4);n.uniform4fv(this.addr,t)}function fC(n,e){const t=Xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hC(n,e){const t=Xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pC(n,e){const t=Xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mC(n,e){n.uniform1iv(this.addr,e)}function gC(n,e){n.uniform2iv(this.addr,e)}function vC(n,e){n.uniform3iv(this.addr,e)}function xC(n,e){n.uniform4iv(this.addr,e)}function _C(n,e){n.uniform1uiv(this.addr,e)}function yC(n,e){n.uniform2uiv(this.addr,e)}function SC(n,e){n.uniform3uiv(this.addr,e)}function MC(n,e){n.uniform4uiv(this.addr,e)}function wC(n,e,t){const i=this.cache,o=e.length,a=Iu(t,o);xn(i,a)||(n.uniform1iv(this.addr,a),_n(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=ap:c=py;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function EC(n,e,t){const i=this.cache,o=e.length,a=Iu(t,o);xn(i,a)||(n.uniform1iv(this.addr,a),_n(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||gy,a[c])}function TC(n,e,t){const i=this.cache,o=e.length,a=Iu(t,o);xn(i,a)||(n.uniform1iv(this.addr,a),_n(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||vy,a[c])}function bC(n,e,t){const i=this.cache,o=e.length,a=Iu(t,o);xn(i,a)||(n.uniform1iv(this.addr,a),_n(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||my,a[c])}function AC(n){switch(n){case 5126:return lC;case 35664:return cC;case 35665:return uC;case 35666:return dC;case 35674:return fC;case 35675:return hC;case 35676:return pC;case 5124:case 35670:return mC;case 35667:case 35671:return gC;case 35668:case 35672:return vC;case 35669:case 35673:return xC;case 5125:return _C;case 36294:return yC;case 36295:return SC;case 36296:return MC;case 35678:case 36198:case 36298:case 36306:case 35682:return wC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return bC}}class CC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aC(t.type)}}class RC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AC(t.type)}}class PC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function $v(n,e){n.seq.push(e),n.map[e.id]=e}function LC(n,e,t){const i=n.name,o=i.length;for(sh.lastIndex=0;;){const a=sh.exec(i),c=sh.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){$v(t,h===void 0?new CC(u,n,e):new RC(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new PC(u),$v(t,v)),t=v}}}class su{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);LC(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function Kv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const DC=37297;let NC=0;function IC(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Zv=new ht;function UC(n){Tt._getMatrix(Zv,Tt.workingColorSpace,n);const e=`mat3( ${Zv.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case hu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+IC(n.getShaderSource(e),u)}else return a}function FC(n,e){const t=UC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OC={[k_]:"Linear",[B_]:"Reinhard",[z_]:"Cineon",[Pp]:"ACESFilmic",[H_]:"AgX",[G_]:"Neutral",[V_]:"Custom"};function kC(n,e){const t=OC[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $c=new j;function BC(){Tt.getLuminanceCoefficients($c);const n=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function VC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Va(n){return n!==""}function Jv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GC=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(n){return n.replace(GC,XC)}const WC=new Map;function XC(n,e){let t=_t[e];if(t===void 0){const i=WC.get(e);if(i!==void 0)t=_t[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lp(t)}const jC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(n){return n.replace(jC,YC)}function YC(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function nx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qC={[eu]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function $C(n){return qC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KC={[Fs]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function ZC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":KC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const QC={[Fo]:"ENVMAP_MODE_REFRACTION"};function JC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":QC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eR={[O_]:"ENVMAP_BLENDING_MULTIPLY",[g1]:"ENVMAP_BLENDING_MIX",[v1]:"ENVMAP_BLENDING_ADD"};function tR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":eR[n.combine]||"ENVMAP_BLENDING_NONE"}function nR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function iR(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=$C(t),h=ZC(t),p=JC(t),v=tR(t),m=nR(t),x=zC(t),M=VC(a),T=o.createProgram();let S,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Va).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Va).join(`
`),y.length>0&&(y+=`
`)):(S=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),y=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Qi?kC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,FC("linearToOutputTexel",t.outputColorSpace),BC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),c=lp(c),c=Jv(c,t),c=ex(c,t),u=lp(u),u=Jv(u,t),u=ex(u,t),c=tx(c),u=tx(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=P+S+c,C=P+y+u,R=Kv(o,o.VERTEX_SHADER,F),L=Kv(o,o.FRAGMENT_SHADER,C);o.attachShader(T,R),o.attachShader(T,L),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(G){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(T)||"",ie=o.getShaderInfoLog(R)||"",H=o.getShaderInfoLog(L)||"",ee=$.trim(),he=ie.trim(),J=H.trim();let Z=!0,Q=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,R,L);else{const K=Qv(o,R,"vertex"),N=Qv(o,L,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ee+`
`+K+`
`+N)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(he===""||J==="")&&(Q=!1);Q&&(G.diagnostics={runnable:Z,programLog:ee,vertexShader:{log:he,prefix:S},fragmentShader:{log:J,prefix:y}})}o.deleteShader(R),o.deleteShader(L),E=new su(o,T),D=HC(o,T)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(T,DC)),B},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=R,this.fragmentShader=L,this}let rR=0;class sR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oR(e),t.set(e,i)),i}}class oR{constructor(e){this.id=rR++,this.code=e,this.usedTimes=0}}function aR(n){return n===Os||n===uu||n===du}function lR(n,e,t,i,o,a){const c=new ey,u=new sR,d=new Set,h=[],p=new Map,v=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function T(E,D,B,G,$,ie){const H=G.fog,ee=$.geometry,he=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Z=e.get(E.envMap||he,J),Q=Z&&Z.mapping===Ru?Z.image.height:null,K=x[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&st("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const N=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ae=N!==void 0?N.length:0;let Se=0;ee.morphAttributes.position!==void 0&&(Se=1),ee.morphAttributes.normal!==void 0&&(Se=2),ee.morphAttributes.color!==void 0&&(Se=3);let ke,Be,He,oe;if(K){const Pt=qi[K];ke=Pt.vertexShader,Be=Pt.fragmentShader}else{ke=E.vertexShader,Be=E.fragmentShader;const Pt=u.getVertexShaderStage(E),bt=u.getFragmentShaderStage(E);u.update(E,Pt,bt),He=Pt.id,oe=bt.id}const fe=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Je=$.isInstancedMesh===!0,Ne=$.isBatchedMesh===!0,dt=!!E.map,zt=!!E.matcap,lt=!!Z,vt=!!E.aoMap,At=!!E.lightMap,mt=!!E.bumpMap&&E.wireframe===!1,It=!!E.normalMap,Wt=!!E.displacementMap,nn=!!E.emissiveMap,Rt=!!E.metalnessMap,Bt=!!E.roughnessMap,Y=E.anisotropy>0,rn=E.clearcoat>0,Mt=E.dispersion>0,U=E.retroreflectivity>0,w=E.iridescence>0,z=E.sheen>0,te=E.transmission>0,ce=Y&&!!E.anisotropyMap,ve=rn&&!!E.clearcoatMap,be=rn&&!!E.clearcoatNormalMap,pe=rn&&!!E.clearcoatRoughnessMap,me=w&&!!E.iridescenceMap,Ae=w&&!!E.iridescenceThicknessMap,$e=z&&!!E.sheenColorMap,Le=z&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Ke=!!E.specularColorMap,nt=!!E.specularIntensityMap,at=te&&!!E.transmissionMap,W=te&&!!E.thicknessMap,Re=!!E.gradientMap,ge=!!E.alphaMap,Pe=E.alphaTest>0,Oe=!!E.alphaHash,xe=!!E.extensions;let et=Qi;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(et=n.toneMapping);const Ye={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:ke,fragmentShader:Be,defines:E.defines,customVertexShaderID:He,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&$._colorsTexture!==null,instancing:Je,instancingColor:Je&&$.instanceColor!==null,instancingMorph:Je&&$.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:zt,envMap:lt,envMapMode:lt&&Z.mapping,envMapCubeUVHeight:Q,aoMap:vt,lightMap:At,bumpMap:mt,normalMap:It,displacementMap:Wt,emissiveMap:nn,normalMapObjectSpace:It&&E.normalMapType===y1,normalMapTangentSpace:It&&E.normalMapType===sp,packedNormalMap:It&&E.normalMapType===sp&&aR(E.normalMap.format),metalnessMap:Rt,roughnessMap:Bt,anisotropy:Y,anisotropyMap:ce,clearcoat:rn,clearcoatMap:ve,clearcoatNormalMap:be,clearcoatRoughnessMap:pe,dispersion:Mt,retroreflection:U,iridescence:w,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:z,sheenColorMap:$e,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:Ke,specularIntensityMap:nt,transmission:te,transmissionMap:at,thicknessMap:W,gradientMap:Re,opaque:E.transparent===!1&&E.blending===ja&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Pe,alphaHash:Oe,combine:E.combine,mapUv:dt&&M(E.map.channel),aoMapUv:vt&&M(E.aoMap.channel),lightMapUv:At&&M(E.lightMap.channel),bumpMapUv:mt&&M(E.bumpMap.channel),normalMapUv:It&&M(E.normalMap.channel),displacementMapUv:Wt&&M(E.displacementMap.channel),emissiveMapUv:nn&&M(E.emissiveMap.channel),metalnessMapUv:Rt&&M(E.metalnessMap.channel),roughnessMapUv:Bt&&M(E.roughnessMap.channel),anisotropyMapUv:ce&&M(E.anisotropyMap.channel),clearcoatMapUv:ve&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&M(E.sheenRoughnessMap.channel),specularMapUv:Ce&&M(E.specularMap.channel),specularColorMapUv:Ke&&M(E.specularColorMap.channel),specularIntensityMapUv:nt&&M(E.specularIntensityMap.channel),transmissionMapUv:at&&M(E.transmissionMap.channel),thicknessMapUv:W&&M(E.thicknessMap.channel),alphaMapUv:ge&&M(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(It||Y),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ee.attributes.uv&&(dt||ge),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&It===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ee,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Se,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:nn&&E.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gr,flipSided:E.side===ni,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=d.has(1),Ye.vertexUv2s=d.has(2),Ye.vertexUv3s=d.has(3),d.clear(),Ye}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)D.push(B),D.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(y(D,E),P(D,E),D.push(n.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function y(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function P(E,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.retroreflection&&c.enable(24),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),D.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function F(E){const D=x[E.type];let B;if(D){const G=qi[D];B=xu.clone(G.uniforms)}else B=E.uniforms;return B}function C(E,D){let B=p.get(D);return B!==void 0?++B.usedTimes:(B=new iR(n,D,E,o),h.push(B),p.set(D,B)),B}function R(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function L(E){u.remove(E)}function O(){u.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:F,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:O}}function cR(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function uR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rx(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function u(m,x,M,T,S,y){let P=n[e];return P===void 0?(P={id:m.id,object:m,geometry:x,material:M,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:S,group:y},n[e]=P):(P.id=m.id,P.object=m,P.geometry=x,P.material=M,P.materialVariant=c(m),P.groupOrder=T,P.renderOrder=m.renderOrder,P.z=S,P.group=y),e++,P}function d(m,x,M,T,S,y,P){P.reversedDepth===!0&&(S=-S);const F=u(m,x,M,T,S,y);M.transmission>0?i.push(F):M.transparent===!0?o.push(F):t.push(F)}function h(m,x,M,T,S,y){const P=u(m,x,M,T,S,y);M.transmission>0?i.unshift(P):M.transparent===!0?o.unshift(P):t.unshift(P)}function p(m,x){t.length>1&&t.sort(m||uR),i.length>1&&i.sort(x||ix),o.length>1&&o.sort(x||ix)}function v(){for(let m=e,x=n.length;m<x;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function dR(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new rx,n.set(i,[c])):o>=a.length?(c=new rx,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function fR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new j,color:new pt};break;case"SpotLight":t={position:new j,direction:new j,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function hR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pR=0;function mR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gR(n){const e=new fR,t=hR(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new j);const o=new j,a=new Yt,c=new Yt;function u(h){let p=0,v=0,m=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,P=0,F=0,C=0,R=0,L=0,O=0,E=0,D=0,B=0;h.sort(mR);for(let $=0,ie=h.length;$<ie;$++){const H=h[$],ee=H.color,he=H.intensity,J=H.distance;let Z=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Os?Z=H.shadow.map.texture:Z=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)p+=ee.r*he,v+=ee.g*he,m+=ee.b*he;else if(H.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(H.sh.coefficients[Q],he);B++}else if(H.isSunLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[M]=N,i.sunShadowMap[M]=Z;const ae=K.getViewportCount();for(let Se=0;Se<ae;Se++)i.sunShadowMatrix[T+Se]=K.getMatrix(Se),i.sunShadowCascade[T+Se]=K._cascadeData[Se];T+=ae,M++}i.sun[x]=Q,x++}else if(H.isDirectionalLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[S]=N,i.directionalShadowMap[S]=Z,i.directionalShadowMatrix[S]=H.shadow.matrix,R++}i.directional[S]=Q,S++}else if(H.isSpotLight){const Q=e.get(H);Q.position.setFromMatrixPosition(H.matrixWorld),Q.color.copy(ee).multiplyScalar(he),Q.distance=J,Q.coneCos=Math.cos(H.angle),Q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Q.decay=H.decay,i.spot[P]=Q;const K=H.shadow;if(H.map&&(i.spotLightMap[E]=H.map,E++,K.updateMatrices(H),H.castShadow&&D++),i.spotLightMatrix[P]=K.matrix,H.castShadow){const N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[P]=N,i.spotShadowMap[P]=Z,O++}P++}else if(H.isRectAreaLight){const Q=e.get(H);Q.color.copy(ee).multiplyScalar(he),Q.halfWidth.set(H.width*.5,0,0),Q.halfHeight.set(0,H.height*.5,0),i.rectArea[F]=Q,F++}else if(H.isPointLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),Q.distance=H.distance,Q.decay=H.decay,H.castShadow){const K=H.shadow,N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[y]=N,i.pointShadowMap[y]=Z,i.pointShadowMatrix[y]=H.shadow.matrix,L++}i.point[y]=Q,y++}else if(H.isHemisphereLight){const Q=e.get(H);Q.skyColor.copy(H.color).multiplyScalar(he),Q.groundColor.copy(H.groundColor).multiplyScalar(he),i.hemi[C]=Q,C++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=v,i.ambient[2]=m;const G=i.hash;(G.sunLength!==x||G.directionalLength!==S||G.pointLength!==y||G.spotLength!==P||G.rectAreaLength!==F||G.hemiLength!==C||G.numSunShadows!==M||G.numDirectionalShadows!==R||G.numPointShadows!==L||G.numSpotShadows!==O||G.numSpotMaps!==E||G.numLightProbes!==B)&&(i.sun.length=x,i.directional.length=S,i.spot.length=P,i.rectArea.length=F,i.point.length=y,i.hemi.length=C,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=T,i.sunShadowCascade.length=T,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.pointShadowMatrix.length=L,i.spotShadow.length=O,i.spotShadowMap.length=O,i.spotLightMatrix.length=O+E-D,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,G.sunLength=x,G.directionalLength=S,G.pointLength=y,G.spotLength=P,G.rectAreaLength=F,G.hemiLength=C,G.numSunShadows=M,G.numDirectionalShadows=R,G.numPointShadows=L,G.numSpotShadows=O,G.numSpotMaps=E,G.numLightProbes=B,i.version=pR++)}function d(h,p){let v=0,m=0,x=0,M=0,T=0,S=0;const y=p.matrixWorldInverse;for(let P=0,F=h.length;P<F;P++){const C=h[P];if(C.isSunLight){const R=i.sun[v];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),v++}else if(C.isDirectionalLight){const R=i.directional[m];R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),m++}else if(C.isSpotLight){const R=i.spot[M];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(C.isRectAreaLight){const R=i.rectArea[T];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),c.identity(),a.copy(C.matrixWorld),a.premultiply(y),c.extractRotation(a),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(C.isPointLight){const R=i.point[x];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),x++}else if(C.isHemisphereLight){const R=i.hemi[S];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),S++}}}return{setup:u,setupView:d,state:i}}function sx(n){const e=new gR(n),t=[],i=[],o=[];function a(m){v.camera=m,t.length=0,i.length=0,o.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function vR(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new sx(n),e.set(o,[u])):a>=c.length?(u=new sx(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const xR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_R=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yR=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],SR=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],ox=new Yt,Oa=new j,oh=new j;function MR(n,e,t){let i=new Hp;const o=new ut,a=new ut,c=new en,u=new AE,d=new CE,h={},p=t.maxTextureSize,v={[Us]:ni,[ni]:Us,[gr]:gr},m=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:xR,fragmentShader:_R}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new vn;M.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ti(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let y=this.type;this.render=function(L,O,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===Zw&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eu);const D=n.getRenderTarget(),B=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Zi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=y!==this.type;ie&&O.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(ee=>ee.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,ee=L.length;H<ee;H++){const he=L[H],J=he.shadow;if(J===void 0){st("WebGLShadowMap:",he,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const Z=J.getFrameExtents();o.multiply(Z),a.copy(J.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/Z.x),o.x=a.x*Z.x,J.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/Z.y),o.y=a.y*Z.y,J.mapSize.y=a.y));const Q=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Q,J.map===null||ie===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ba){if(he.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Yn(o.x,o.y,{format:Os,type:ii,minFilter:zn,magFilter:zn,generateMipmaps:!1}),J.map.texture.name=he.name+".shadowMap",J.map.depthTexture=new ol(o.x,o.y,$i),J.map.depthTexture.name=he.name+".shadowMapDepth",J.map.depthTexture.format=Mr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Pn,J.map.depthTexture.magFilter=Pn}else he.isPointLight?(J.map=new hy(o.x),J.map.depthTexture=new yE(o.x,tr)):(J.map=new Yn(o.x,o.y),J.map.depthTexture=new ol(o.x,o.y,tr)),J.map.depthTexture.name=he.name+".shadowMap",J.map.depthTexture.format=Mr,this.type===eu?(J.map.depthTexture.compareFunction=Q?kp:Op,J.map.depthTexture.minFilter=zn,J.map.depthTexture.magFilter=zn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Pn,J.map.depthTexture.magFilter=Pn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==o.x||J.map.height!==o.y)&&J.map.setSize(o.x,o.y);const K=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();he.isPointLight!==!0&&J.updateMatrices(he,E);for(let N=0;N<K;N++){const ae=J.getCamera(N);if(he.isPointLight){const Se=J.camera,ke=J.matrix,Be=he.distance||Se.far;Be!==Se.far&&(Se.far=Be,Se.updateProjectionMatrix()),Oa.setFromMatrixPosition(he.matrixWorld),Se.position.copy(Oa),oh.copy(Se.position),oh.add(yR[N]),Se.up.copy(SR[N]),Se.lookAt(oh),Se.updateMatrixWorld(),ke.makeTranslation(-Oa.x,-Oa.y,-Oa.z),ox.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ox,Se.coordinateSystem,Se.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,N),n.clear();else{N===0&&(n.setRenderTarget(J.map),n.clear());const Se=J.getViewport(N);c.set(a.x*Se.x,a.y*Se.y,a.x*Se.z,a.y*Se.w),$.viewport(c)}i=J.getFrustum(N),C(O,E,ae,he,this.type)}J.isPointLightShadow!==!0&&this.type===Ba&&P(J,E),J.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(D,B,G)};function P(L,O){const E=e.update(T);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null?L.mapPass=new Yn(o.x,o.y,{format:Os,type:ii}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value.set(L.map.width,L.map.height),m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(O,null,E,m,T,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value.set(L.map.width,L.map.height),x.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(O,null,E,x,T,null)}function F(L,O,E,D){let B=null;const G=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)B=G;else if(B=E.isPointLight===!0?d:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=B.uuid,ie=O.uuid;let H=h[$];H===void 0&&(H={},h[$]=H);let ee=H[ie];ee===void 0&&(ee=B.clone(),H[ie]=ee,O.addEventListener("dispose",R)),B=ee}if(B.visible=O.visible,B.wireframe=O.wireframe,D===Ba?B.side=O.shadowSide!==null?O.shadowSide:O.side:B.side=O.shadowSide!==null?O.shadowSide:v[O.side],B.alphaMap=O.alphaMap,B.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,B.map=O.map,B.clipShadows=O.clipShadows,B.clippingPlanes=O.clippingPlanes,B.clipIntersection=O.clipIntersection,B.displacementMap=O.displacementMap,B.displacementScale=O.displacementScale,B.displacementBias=O.displacementBias,B.wireframeLinewidth=O.wireframeLinewidth,B.linewidth=O.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const $=n.properties.get(B);$.light=E}return B}function C(L,O,E,D,B){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===Ba)&&(!L.frustumCulled||L.intersectsFrustum(i))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const ie=e.update(L),H=L.material;if(Array.isArray(H)){const ee=ie.groups;for(let he=0,J=ee.length;he<J;he++){const Z=ee[he],Q=H[Z.materialIndex];if(Q&&Q.visible){const K=F(L,Q,D,B);L.onBeforeShadow(n,L,O,E,ie,K,Z),n.renderBufferDirect(E,null,ie,K,L,Z),L.onAfterShadow(n,L,O,E,ie,K,Z)}}}else if(H.visible){const ee=F(L,H,D,B);L.onBeforeShadow(n,L,O,E,ie,ee,null),n.renderBufferDirect(E,null,ie,ee,L,null),L.onAfterShadow(n,L,O,E,ie,ee,null)}}const $=L.children;for(let ie=0,H=$.length;ie<H;ie++)C($[ie],O,E,D,B)}function R(L){L.target.removeEventListener("dispose",R);for(const E in h){const D=h[E],B=L.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function wR(n,e){function t(){let W=!1;const Re=new en;let ge=null;const Pe=new en(0,0,0,0);return{setMask:function(Oe){ge!==Oe&&!W&&(n.colorMask(Oe,Oe,Oe,Oe),ge=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,xe,et,Ye,Pt){Pt===!0&&(Oe*=Ye,xe*=Ye,et*=Ye),Re.set(Oe,xe,et,Ye),Pe.equals(Re)===!1&&(n.clearColor(Oe,xe,et,Ye),Pe.copy(Re))},reset:function(){W=!1,ge=null,Pe.set(-1,0,0,0)}}}function i(){let W=!1,Re=!1,ge=null,Pe=null,Oe=null;return{setReversed:function(xe){if(Re!==xe){const et=e.get("EXT_clip_control");xe?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const Ye=Oe;Oe=null,this.setClear(Ye)}},getReversed:function(){return Re},setTest:function(xe){xe?fe(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(xe){ge!==xe&&!W&&(n.depthMask(xe),ge=xe)},setFunc:function(xe){if(Re&&(xe=D1[xe]),Pe!==xe){switch(xe){case yh:n.depthFunc(n.NEVER);break;case Sh:n.depthFunc(n.ALWAYS);break;case Mh:n.depthFunc(n.LESS);break;case tl:n.depthFunc(n.LEQUAL);break;case wh:n.depthFunc(n.EQUAL);break;case Eh:n.depthFunc(n.GEQUAL);break;case Th:n.depthFunc(n.GREATER);break;case bh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Oe!==xe&&(Oe=xe,Re&&(xe=1-xe),n.clearDepth(xe))},reset:function(){W=!1,ge=null,Pe=null,Oe=null,Re=!1}}}function o(){let W=!1,Re=null,ge=null,Pe=null,Oe=null,xe=null,et=null,Ye=null,Pt=null;return{setTest:function(bt){W||(bt?fe(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(bt){Re!==bt&&!W&&(n.stencilMask(bt),Re=bt)},setFunc:function(bt,An,hi){(ge!==bt||Pe!==An||Oe!==hi)&&(n.stencilFunc(bt,An,hi),ge=bt,Pe=An,Oe=hi)},setOp:function(bt,An,hi){(xe!==bt||et!==An||Ye!==hi)&&(n.stencilOp(bt,An,hi),xe=bt,et=An,Ye=hi)},setLocked:function(bt){W=bt},setClear:function(bt){Pt!==bt&&(n.clearStencil(bt),Pt=bt)},reset:function(){W=!1,Re=null,ge=null,Pe=null,Oe=null,xe=null,et=null,Ye=null,Pt=null}}}const a=new t,c=new i,u=new o,d=new WeakMap,h=new WeakMap;let p={},v={},m={},x=new WeakMap,M=[],T=null,S=!1,y=null,P=null,F=null,C=null,R=null,L=null,O=null,E=new pt(0,0,0),D=0,B=!1,G=null,$=null,ie=null,H=null,ee=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Z=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=Z>=2);let K=null,N={};const ae=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),ke=new en().fromArray(ae),Be=new en().fromArray(Se);function He(W,Re,ge,Pe){const Oe=new Uint8Array(4),xe=n.createTexture();n.bindTexture(W,xe),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<ge;et++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(Re+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return xe}const oe={};oe[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(n.DEPTH_TEST),c.setFunc(tl),mt(!1),It(nv),fe(n.CULL_FACE),vt(Zi);function fe(W){p[W]!==!0&&(n.enable(W),p[W]=!0)}function Ee(W){p[W]!==!1&&(n.disable(W),p[W]=!1)}function Je(W,Re){return m[W]!==Re?(n.bindFramebuffer(W,Re),m[W]=Re,W===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Re),W===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ne(W,Re){let ge=M,Pe=!1;if(W){ge=x.get(Re),ge===void 0&&(ge=[],x.set(Re,ge));const Oe=W.textures;if(ge.length!==Oe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,et=Oe.length;xe<et;xe++)ge[xe]=n.COLOR_ATTACHMENT0+xe;ge.length=Oe.length,Pe=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ge)}function dt(W){return T!==W?(n.useProgram(W),T=W,!0):!1}const zt={[bo]:n.FUNC_ADD,[Jw]:n.FUNC_SUBTRACT,[e1]:n.FUNC_REVERSE_SUBTRACT};zt[t1]=n.MIN,zt[n1]=n.MAX;const lt={[i1]:n.ZERO,[r1]:n.ONE,[s1]:n.SRC_COLOR,[U_]:n.SRC_ALPHA,[d1]:n.SRC_ALPHA_SATURATE,[c1]:n.DST_COLOR,[a1]:n.DST_ALPHA,[o1]:n.ONE_MINUS_SRC_COLOR,[F_]:n.ONE_MINUS_SRC_ALPHA,[u1]:n.ONE_MINUS_DST_COLOR,[l1]:n.ONE_MINUS_DST_ALPHA,[f1]:n.CONSTANT_COLOR,[h1]:n.ONE_MINUS_CONSTANT_COLOR,[p1]:n.CONSTANT_ALPHA,[m1]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(W,Re,ge,Pe,Oe,xe,et,Ye,Pt,bt){if(W===Zi){S===!0&&(Ee(n.BLEND),S=!1);return}if(S===!1&&(fe(n.BLEND),S=!0),W!==Qw){if(W!==y||bt!==B){if((P!==bo||R!==bo)&&(n.blendEquation(n.FUNC_ADD),P=bo,R=bo),bt)switch(W){case ja:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case es:n.blendFunc(n.ONE,n.ONE);break;case iv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case ja:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case iv:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rv:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}F=null,C=null,L=null,O=null,E.set(0,0,0),D=0,y=W,B=bt}return}Oe=Oe||Re,xe=xe||ge,et=et||Pe,(Re!==P||Oe!==R)&&(n.blendEquationSeparate(zt[Re],zt[Oe]),P=Re,R=Oe),(ge!==F||Pe!==C||xe!==L||et!==O)&&(n.blendFuncSeparate(lt[ge],lt[Pe],lt[xe],lt[et]),F=ge,C=Pe,L=xe,O=et),(Ye.equals(E)===!1||Pt!==D)&&(n.blendColor(Ye.r,Ye.g,Ye.b,Pt),E.copy(Ye),D=Pt),y=W,B=!1}function At(W,Re){W.side===gr?Ee(n.CULL_FACE):fe(n.CULL_FACE);let ge=W.side===ni;Re&&(ge=!ge),mt(ge),W.blending===ja&&W.transparent===!1?vt(Zi):vt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Pe=W.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){G!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),G=W)}function It(W){W!==$w?(fe(n.CULL_FACE),W!==$&&(W===nv?n.cullFace(n.BACK):W===Kw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),$=W}function Wt(W){W!==ie&&(J&&n.lineWidth(W),ie=W)}function nn(W,Re,ge){W?(fe(n.POLYGON_OFFSET_FILL),(H!==Re||ee!==ge)&&(H=Re,ee=ge,c.getReversed()&&(Re=-Re),n.polygonOffset(Re,ge))):Ee(n.POLYGON_OFFSET_FILL)}function Rt(W){W?fe(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Bt(W){W===void 0&&(W=n.TEXTURE0+he-1),K!==W&&(n.activeTexture(W),K=W)}function Y(W,Re,ge){ge===void 0&&(K===null?ge=n.TEXTURE0+he-1:ge=K);let Pe=N[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},N[ge]=Pe),(Pe.type!==W||Pe.texture!==Re)&&(K!==ge&&(n.activeTexture(ge),K=ge),n.bindTexture(W,Re||oe[W]),Pe.type=W,Pe.texture=Re)}function rn(){const W=N[K];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Mt(){try{n.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function w(){try{n.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function z(){try{n.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function te(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ve(){try{n.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function be(){try{n.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function pe(){try{n.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function me(){try{n.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ae(W){return v[W]!==void 0?v[W]:n.getParameter(W)}function $e(W,Re){v[W]!==Re&&(n.pixelStorei(W,Re),v[W]=Re)}function Le(W){ke.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ke.copy(W))}function Ce(W){Be.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Be.copy(W))}function Ke(W,Re){let ge=h.get(Re);ge===void 0&&(ge=new WeakMap,h.set(Re,ge));let Pe=ge.get(W);Pe===void 0&&(Pe=n.getUniformBlockIndex(Re,W.name),ge.set(W,Pe))}function nt(W,Re){const Pe=h.get(Re).get(W);d.get(Re)!==Pe&&(n.uniformBlockBinding(Re,Pe,W.__bindingPointIndex),d.set(Re,Pe))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},v={},K=null,N={},m={},x=new WeakMap,M=[],T=null,S=!1,y=null,P=null,F=null,C=null,R=null,L=null,O=null,E=new pt(0,0,0),D=0,B=!1,G=null,$=null,ie=null,H=null,ee=null,ke.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:fe,disable:Ee,bindFramebuffer:Je,drawBuffers:Ne,useProgram:dt,setBlending:vt,setMaterial:At,setFlipSided:mt,setCullFace:It,setLineWidth:Wt,setPolygonOffset:nn,setScissorTest:Rt,activeTexture:Bt,bindTexture:Y,unbindTexture:rn,compressedTexImage2D:Mt,compressedTexImage3D:U,texImage2D:pe,texImage3D:me,pixelStorei:$e,getParameter:Ae,updateUBOMapping:Ke,uniformBlockBinding:nt,texStorage2D:ve,texStorage3D:be,texSubImage2D:w,texSubImage3D:z,compressedTexSubImage2D:te,compressedTexSubImage3D:ce,scissor:Le,viewport:Ce,reset:at}}function ER(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ut,p=new WeakMap,v=new Set;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,w){return M?new OffscreenCanvas(U,w):pu("canvas")}function S(U,w,z){let te=1;const ce=Mt(U);if((ce.width>z||ce.height>z)&&(te=z/Math.max(ce.width,ce.height)),te<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ve=Math.floor(te*ce.width),be=Math.floor(te*ce.height);m===void 0&&(m=T(ve,be));const pe=w?T(ve,be):m;return pe.width=ve,pe.height=be,pe.getContext("2d").drawImage(U,0,0,ve,be),st("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ve+"x"+be+")."),pe}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),U;return U}function y(U){return U.generateMipmaps}function P(U){n.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(U,w,z,te,ce,ve=!1){if(U!==null){if(n[U]!==void 0)return n[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let be;te&&(be=e.get("EXT_texture_norm16"),be||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(z===n.FLOAT&&(pe=n.R32F),z===n.HALF_FLOAT&&(pe=n.R16F),z===n.UNSIGNED_BYTE&&(pe=n.R8),z===n.UNSIGNED_SHORT&&be&&(pe=be.R16_EXT),z===n.SHORT&&be&&(pe=be.R16_SNORM_EXT)),w===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(pe=n.R8UI),z===n.UNSIGNED_SHORT&&(pe=n.R16UI),z===n.UNSIGNED_INT&&(pe=n.R32UI),z===n.BYTE&&(pe=n.R8I),z===n.SHORT&&(pe=n.R16I),z===n.INT&&(pe=n.R32I)),w===n.RG&&(z===n.FLOAT&&(pe=n.RG32F),z===n.HALF_FLOAT&&(pe=n.RG16F),z===n.UNSIGNED_BYTE&&(pe=n.RG8),z===n.UNSIGNED_SHORT&&be&&(pe=be.RG16_EXT),z===n.SHORT&&be&&(pe=be.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(pe=n.RG8UI),z===n.UNSIGNED_SHORT&&(pe=n.RG16UI),z===n.UNSIGNED_INT&&(pe=n.RG32UI),z===n.BYTE&&(pe=n.RG8I),z===n.SHORT&&(pe=n.RG16I),z===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),z===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),z===n.UNSIGNED_INT&&(pe=n.RGB32UI),z===n.BYTE&&(pe=n.RGB8I),z===n.SHORT&&(pe=n.RGB16I),z===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),z===n.UNSIGNED_INT&&(pe=n.RGBA32UI),z===n.BYTE&&(pe=n.RGBA8I),z===n.SHORT&&(pe=n.RGBA16I),z===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(z===n.UNSIGNED_SHORT&&be&&(pe=be.RGB16_EXT),z===n.SHORT&&be&&(pe=be.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const me=ve?hu:Tt.getTransfer(ce);z===n.FLOAT&&(pe=n.RGBA32F),z===n.HALF_FLOAT&&(pe=n.RGBA16F),z===n.UNSIGNED_BYTE&&(pe=me===Ot?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&be&&(pe=be.RGBA16_EXT),z===n.SHORT&&be&&(pe=be.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(U,w){let z;return U?w===null||w===tr||w===il?z=n.DEPTH24_STENCIL8:w===$i?z=n.DEPTH32F_STENCIL8:w===nl&&(z=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===tr||w===il?z=n.DEPTH_COMPONENT24:w===$i?z=n.DEPTH_COMPONENT32F:w===nl&&(z=n.DEPTH_COMPONENT16),z}function L(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Pn&&U.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function O(U){const w=U.target;w.removeEventListener("dispose",O),D(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&v.delete(w)}function E(U){const w=U.target;w.removeEventListener("dispose",E),G(w)}function D(U){const w=i.get(U);if(w.__webglInit===void 0)return;const z=U.source,te=x.get(z);if(te){const ce=te[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&B(U),Object.keys(te).length===0&&x.delete(z)}i.remove(U)}function B(U){const w=i.get(U);n.deleteTexture(w.__webglTexture);const z=U.source,te=x.get(z);delete te[w.__cacheKey],c.memory.textures--}function G(U){const w=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let ce=0;ce<w.__webglFramebuffer[te].length;ce++)n.deleteFramebuffer(w.__webglFramebuffer[te][ce]);else n.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)n.deleteFramebuffer(w.__webglFramebuffer[te]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=U.textures;for(let te=0,ce=z.length;te<ce;te++){const ve=i.get(z[te]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),c.memory.textures--),i.remove(z[te])}i.remove(U)}let $=0;function ie(){$=0}function H(){return $}function ee(U){$=U}function he(){const U=$;return U>=o.maxTextures&&st("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,U}function J(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function Z(U,w){const z=i.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&z.__version!==U.version){const te=U.image;if(te===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(z,U,w);return}}else U.isExternalTexture&&(z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+w)}function Q(U,w){const z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&z.__version!==U.version){Ee(z,U,w);return}else U.isExternalTexture&&(z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+w)}function K(U,w){const z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&z.__version!==U.version){Ee(z,U,w);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+w)}function N(U,w){const z=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&z.__version!==U.version){Je(z,U,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+w)}const ae={[Ah]:n.REPEAT,[vr]:n.CLAMP_TO_EDGE,[Ch]:n.MIRRORED_REPEAT},Se={[Pn]:n.NEAREST,[x1]:n.NEAREST_MIPMAP_NEAREST,[Ec]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Cf]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},ke={[M1]:n.NEVER,[A1]:n.ALWAYS,[w1]:n.LESS,[Op]:n.LEQUAL,[E1]:n.EQUAL,[kp]:n.GEQUAL,[T1]:n.GREATER,[b1]:n.NOTEQUAL};function Be(U,w){if(w.type===$i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===Cf||w.magFilter===Ec||w.magFilter===Ps||w.minFilter===zn||w.minFilter===Cf||w.minFilter===Ec||w.minFilter===Ps)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,ae[w.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,ae[w.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,ae[w.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Se[w.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,ke[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pn||w.minFilter!==Ec&&w.minFilter!==Ps||w.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function He(U,w){let z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",O));const te=w.source;let ce=x.get(te);ce===void 0&&(ce={},x.set(te,ce));const ve=J(w);if(ve!==U.__cacheKey){ce[ve]===void 0&&(ce[ve]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,z=!0),ce[ve].usedTimes++;const be=ce[U.__cacheKey];be!==void 0&&(ce[U.__cacheKey].usedTimes--,be.usedTimes===0&&B(w)),U.__cacheKey=ve,U.__webglTexture=ce[ve].texture}return z}function oe(U,w,z){return Math.floor(Math.floor(U/z)/w)}function fe(U,w,z,te){const ve=U.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,z,te,w.data);else{ve.sort(($e,Le)=>$e.start-Le.start);let be=0;for(let $e=1;$e<ve.length;$e++){const Le=ve[be],Ce=ve[$e],Ke=Le.start+Le.count,nt=oe(Ce.start,w.width,4),at=oe(Le.start,w.width,4);Ce.start<=Ke+1&&nt===at&&oe(Ce.start+Ce.count-1,w.width,4)===nt?Le.count=Math.max(Le.count,Ce.start+Ce.count-Le.start):(++be,ve[be]=Ce)}ve.length=be+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let $e=0,Le=ve.length;$e<Le;$e++){const Ce=ve[$e],Ke=Math.floor(Ce.start/4),nt=Math.ceil(Ce.count/4),at=Ke%w.width,W=Math.floor(Ke/w.width),Re=nt,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,at),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,at,W,Re,ge,z,te,w.data)}U.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Ee(U,w,z){let te=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=n.TEXTURE_3D);const ce=He(U,w),ve=w.source;t.bindTexture(te,U.__webglTexture,n.TEXTURE0+z);const be=i.get(ve);if(ve.version!==be.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ge=Tt.getPrimaries(Tt.workingColorSpace),Pe=w.colorSpace===Zr?null:Tt.getPrimaries(w.colorSpace),Oe=w.colorSpace===Zr||ge===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let me=S(w.image,!1,o.maxTextureSize);me=rn(w,me);const Ae=a.convert(w.format,w.colorSpace),$e=a.convert(w.type);let Le=C(w.internalFormat,Ae,$e,w.normalized,w.colorSpace,w.isVideoTexture);Be(te,w);let Ce;const Ke=w.mipmaps,nt=w.isVideoTexture!==!0,at=be.__version===void 0||ce===!0,W=ve.dataReady,Re=L(w,me);if(w.isDepthTexture)Le=R(w.format===Ls,w.type),at&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Le,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Le,me.width,me.height,0,Ae,$e,null));else if(w.isDataTexture)if(Ke.length>0){nt&&at&&t.texStorage2D(n.TEXTURE_2D,Re,Le,Ke[0].width,Ke[0].height);for(let ge=0,Pe=Ke.length;ge<Pe;ge++)Ce=Ke[ge],nt?W&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ae,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ae,$e,Ce.data);w.generateMipmaps=!1}else nt?(at&&t.texStorage2D(n.TEXTURE_2D,Re,Le,me.width,me.height),W&&fe(w,me,Ae,$e)):t.texImage2D(n.TEXTURE_2D,0,Le,me.width,me.height,0,Ae,$e,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Le,Ke[0].width,Ke[0].height,me.depth);for(let ge=0,Pe=Ke.length;ge<Pe;ge++)if(Ce=Ke[ge],w.format!==Vi)if(Ae!==null)if(nt){if(W)if(w.layerUpdates.size>0){const Oe=kv(Ce.width,Ce.height,w.format,w.type);for(const xe of w.layerUpdates){const et=Ce.data.subarray(xe*Oe/Ce.data.BYTES_PER_ELEMENT,(xe+1)*Oe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,xe,Ce.width,Ce.height,1,Ae,et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,me.depth,Ae,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,me.depth,0,Ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,me.depth,Ae,$e,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,me.depth,0,Ae,$e,Ce.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{nt&&at&&t.texStorage2D(n.TEXTURE_2D,Re,Le,Ke[0].width,Ke[0].height);for(let ge=0,Pe=Ke.length;ge<Pe;ge++)Ce=Ke[ge],w.format!==Vi?Ae!==null?nt?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ae,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ae,$e,Ce.data)}else if(w.isDataArrayTexture)if(nt){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Le,me.width,me.height,me.depth),W)if(w.layerUpdates.size>0){const ge=kv(me.width,me.height,w.format,w.type);for(const Pe of w.layerUpdates){const Oe=me.data.subarray(Pe*ge/me.data.BYTES_PER_ELEMENT,(Pe+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,me.width,me.height,1,Ae,$e,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ae,$e,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Ae,$e,me.data);else if(w.isData3DTexture)nt?(at&&t.texStorage3D(n.TEXTURE_3D,Re,Le,me.width,me.height,me.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ae,$e,me.data)):t.texImage3D(n.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Ae,$e,me.data);else if(w.isFramebufferTexture){if(at)if(nt)t.texStorage2D(n.TEXTURE_2D,Re,Le,me.width,me.height);else{let ge=me.width,Pe=me.height;for(let Oe=0;Oe<Re;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,Le,ge,Pe,0,Ae,$e,null),ge>>=1,Pe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),v.add(w),ge.onpaint=Pe=>{const Oe=Pe.changedElements;for(const xe of v)Oe.includes(xe.image)&&(xe.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const Oe=n.RGBA,xe=n.RGBA,et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Oe,xe,et,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(nt&&at){const ge=Mt(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Re,Le,ge.width,ge.height)}for(let ge=0,Pe=Ke.length;ge<Pe;ge++)Ce=Ke[ge],nt?W&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ae,$e,Ce):t.texImage2D(n.TEXTURE_2D,ge,Le,Ae,$e,Ce);w.generateMipmaps=!1}else if(nt){if(at){const ge=Mt(me);t.texStorage2D(n.TEXTURE_2D,Re,Le,ge.width,ge.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,$e,me)}else t.texImage2D(n.TEXTURE_2D,0,Le,Ae,$e,me);y(w)&&P(te),be.__version=ve.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Je(U,w,z){if(w.image.length!==6)return;const te=He(U,w),ce=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+z);const ve=i.get(ce);if(ce.version!==ve.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const be=Tt.getPrimaries(Tt.workingColorSpace),pe=w.colorSpace===Zr?null:Tt.getPrimaries(w.colorSpace),me=w.colorSpace===Zr||be===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,$e=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let xe=0;xe<6;xe++)!Ae&&!$e?Le[xe]=S(w.image[xe],!0,o.maxCubemapSize):Le[xe]=$e?w.image[xe].image:w.image[xe],Le[xe]=rn(w,Le[xe]);const Ce=Le[0],Ke=a.convert(w.format,w.colorSpace),nt=a.convert(w.type),at=C(w.internalFormat,Ke,nt,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,Re=ve.__version===void 0||te===!0,ge=ce.dataReady;let Pe=L(w,Ce);Be(n.TEXTURE_CUBE_MAP,w);let Oe;if(Ae){W&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,at,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){Oe=Le[xe].mipmaps;for(let et=0;et<Oe.length;et++){const Ye=Oe[et];w.format!==Vi?Ke!==null?W?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,Ye.width,Ye.height,Ke,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,at,Ye.width,Ye.height,0,Ye.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,Ye.width,Ye.height,Ke,nt,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,at,Ye.width,Ye.height,0,Ke,nt,Ye.data)}}}else{if(Oe=w.mipmaps,W&&Re){Oe.length>0&&Pe++;const xe=Mt(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if($e){W?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Le[xe].width,Le[xe].height,Ke,nt,Le[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Le[xe].width,Le[xe].height,0,Ke,nt,Le[xe].data);for(let et=0;et<Oe.length;et++){const Pt=Oe[et].image[xe].image;W?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Pt.width,Pt.height,Ke,nt,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,at,Pt.width,Pt.height,0,Ke,nt,Pt.data)}}else{W?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ke,nt,Le[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Ke,nt,Le[xe]);for(let et=0;et<Oe.length;et++){const Ye=Oe[et];W?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Ke,nt,Ye.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,at,Ke,nt,Ye.image[xe])}}}y(w)&&P(n.TEXTURE_CUBE_MAP),ve.__version=ce.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Ne(U,w,z,te,ce,ve){const be=a.convert(z.format,z.colorSpace),pe=a.convert(z.type),me=C(z.internalFormat,be,pe,z.normalized,z.colorSpace),Ae=i.get(w),$e=i.get(z);if($e.__renderTarget=w,!Ae.__hasExternalTextures){const Le=Math.max(1,w.width>>ve),Ce=Math.max(1,w.height>>ve);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ve,me,Le,Ce,w.depth,0,be,pe,null):t.texImage2D(ce,ve,me,Le,Ce,0,be,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Bt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ce,$e.__webglTexture,0,Rt(w)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ce,$e.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(U,w,z){if(n.bindRenderbuffer(n.RENDERBUFFER,U),w.depthBuffer){const te=w.depthTexture,ce=te&&te.isDepthTexture?te.type:null,ve=R(w.stencilBuffer,ce),be=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(w),ve,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(w),ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,U)}else{const te=w.textures;for(let ce=0;ce<te.length;ce++){const ve=te[ce],be=a.convert(ve.format,ve.colorSpace),pe=a.convert(ve.type),me=C(ve.internalFormat,be,pe,ve.normalized,ve.colorSpace);Bt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(w),me,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(w),me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(U,w,z){const te=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(w.depthTexture);if(ce.__renderTarget=w,(!ce.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Be(n.TEXTURE_CUBE_MAP,w.depthTexture);const Ae=a.convert(w.depthTexture.format),$e=a.convert(w.depthTexture.type);let Le;w.depthTexture.format===Mr?Le=n.DEPTH_COMPONENT24:w.depthTexture.format===Ls&&(Le=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,w.width,w.height,0,Ae,$e,null)}}else Z(w.depthTexture,0);const ve=ce.__webglTexture,be=Rt(w),pe=te?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,me=w.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Mr)Bt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,pe,ve,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,me,pe,ve,0);else if(w.depthTexture.format===Ls)Bt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,pe,ve,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,me,pe,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(U){const w=i.get(U),z=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const te=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){const ce=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",ce)};te.addEventListener("dispose",ce),w.__depthDisposeCallback=ce}w.__boundDepthTexture=te}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(z)for(let te=0;te<6;te++)zt(w.__webglFramebuffer[te],U,te);else{const te=U.texture.mipmaps;te&&te.length>0?zt(w.__webglFramebuffer[0],U,0):zt(w.__webglFramebuffer,U,0)}else if(z){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=n.createRenderbuffer(),dt(w.__webglDepthbuffer[te],U,!1);else{const ce=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ve)}}else{const te=U.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),dt(w.__webglDepthbuffer,U,!1);else{const ce=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(U,w,z){const te=i.get(U);w!==void 0&&Ne(te.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&lt(U)}function At(U){const w=U.texture,z=i.get(U),te=i.get(w);U.addEventListener("dispose",E);const ce=U.textures,ve=U.isWebGLCubeRenderTarget===!0,be=ce.length>1;if(be||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=w.version,c.memory.textures++),ve){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let me=0;me<w.mipmaps.length;me++)z.__webglFramebuffer[pe][me]=n.createFramebuffer()}else z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)z.__webglFramebuffer[pe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(be)for(let pe=0,me=ce.length;pe<me;pe++){const Ae=i.get(ce[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),c.memory.textures++)}if(U.samples>0&&Bt(U)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ce.length;pe++){const me=ce[pe];z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Ae=a.convert(me.format,me.colorSpace),$e=a.convert(me.type),Le=C(me.internalFormat,Ae,$e,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),Ce=Rt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Le,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Be(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Ne(z.__webglFramebuffer[pe][me],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Ne(z.__webglFramebuffer[pe],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(w)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let pe=0,me=ce.length;pe<me;pe++){const Ae=ce[pe],$e=i.get(Ae);let Le=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,$e.__webglTexture),Be(Le,Ae),Ne(z.__webglFramebuffer,U,Ae,n.COLOR_ATTACHMENT0+pe,Le,0),y(Ae)&&P(Le)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),Be(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Ne(z.__webglFramebuffer[me],U,w,n.COLOR_ATTACHMENT0,pe,me);else Ne(z.__webglFramebuffer,U,w,n.COLOR_ATTACHMENT0,pe,0);y(w)&&P(pe),t.unbindTexture()}U.depthBuffer&&lt(U)}function mt(U){const w=U.textures;for(let z=0,te=w.length;z<te;z++){const ce=w[z];if(y(ce)){const ve=F(U),be=i.get(ce).__webglTexture;t.bindTexture(ve,be),P(ve),t.unbindTexture()}}}const It=[],Wt=[];function nn(U){if(U.samples>0){if(Bt(U)===!1){const w=U.textures,z=U.width,te=U.height;let ce=n.COLOR_BUFFER_BIT;const ve=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(U),pe=w.length>1;if(pe)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ae]);const $e=i.get(w[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,z,te,0,0,z,te,ce,n.NEAREST),d===!0&&(It.length=0,Wt.length=0,It.push(n.COLOR_ATTACHMENT0+Ae),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(It.push(ve),Wt.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ae]);const $e=i.get(w[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&d){const w=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Rt(U){return Math.min(o.maxSamples,U.samples)}function Bt(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Y(U){const w=c.render.frame;p.get(U)!==w&&(p.set(U,w),U.update())}function rn(U,w){const z=U.colorSpace,te=U.format,ce=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||z!==fu&&z!==Zr&&(Tt.getTransfer(z)===Ot?(te!==Vi||ce!==ui)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",z)),w}function Mt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=he,this.resetTextureUnits=ie,this.getTextureUnits=H,this.setTextureUnits=ee,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=N,this.rebindTextures=vt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function TR(n,e){function t(i,o=Zr){let a;const c=Tt.getTransfer(o);if(i===ui)return n.UNSIGNED_BYTE;if(i===Dp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Np)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Y_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===q_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===X_)return n.BYTE;if(i===j_)return n.SHORT;if(i===nl)return n.UNSIGNED_SHORT;if(i===Lp)return n.INT;if(i===tr)return n.UNSIGNED_INT;if(i===$i)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===$_)return n.ALPHA;if(i===K_)return n.RGB;if(i===Vi)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===Z_)return n.RED;if(i===Ip)return n.RED_INTEGER;if(i===Os)return n.RG;if(i===Up)return n.RG_INTEGER;if(i===Fp)return n.RGBA_INTEGER;if(i===tu||i===nu||i===iu||i===ru)if(c===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===tu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===tu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===iu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rh||i===Ph||i===Lh||i===Dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Rh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nh||i===Ih||i===Uh||i===Fh||i===Oh||i===uu||i===kh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Nh||i===Ih)return c===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Uh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fh)return a.COMPRESSED_R11_EAC;if(i===Oh)return a.COMPRESSED_SIGNED_R11_EAC;if(i===uu)return a.COMPRESSED_RG11_EAC;if(i===kh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===qh||i===$h||i===Kh||i===Zh||i===Qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Bh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$h)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jh||i===ep||i===tp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Jh)return c===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ep)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===np||i===ip||i===du||i===rp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===np)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ip)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===du)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===il?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const bR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ay(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:bR,fragmentShader:AR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new Lu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RR extends ks{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,m=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",S=new CR,y={},P=t.getContextAttributes();let F=null,C=null;const R=[],L=[],O=new ut;let E=null,D=null;const B=new Ei;B.viewport=new en;const G=new Ei;G.viewport=new en;const $=[B,G],ie=new IE;let H=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let fe=R[oe];return fe===void 0&&(fe=new Uf,R[oe]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(oe){let fe=R[oe];return fe===void 0&&(fe=new Uf,R[oe]=fe),fe.getGripSpace()},this.getHand=function(oe){let fe=R[oe];return fe===void 0&&(fe=new Uf,R[oe]=fe),fe.getHandSpace()};function he(oe){const fe=L.indexOf(oe.inputSource);if(fe===-1)return;const Ee=R[fe];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,h||c),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function J(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<R.length;oe++){const fe=L[oe];fe!==null&&(L[oe]=null,R[oe].disconnect(fe))}H=null,ee=null,S.reset();for(const oe in y)delete y[oe];if(e.setRenderTarget(F),x=null,m=null,v=null,o=null,C=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),D!==null){const oe=D.camera;oe.fov=D.fov,oe.zoom=D.zoom,oe.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",J),o.addEventListener("inputsourceschange",Z),P.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Je=null,Ne=null;P.depth&&(Ne=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=P.stencil?Ls:Mr,Je=P.stencil?il:tr);const dt={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(dt),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Yn(m.textureWidth,m.textureHeight,{format:Vi,type:ui,depthTexture:new ol(m.textureWidth,m.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Yn(x.framebufferWidth,x.framebufferHeight,{format:Vi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),He.setContext(o),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(oe){for(let fe=0;fe<oe.removed.length;fe++){const Ee=oe.removed[fe],Je=L.indexOf(Ee);Je>=0&&(L[Je]=null,R[Je].disconnect(Ee))}for(let fe=0;fe<oe.added.length;fe++){const Ee=oe.added[fe];let Je=L.indexOf(Ee);if(Je===-1){for(let dt=0;dt<R.length;dt++)if(dt>=L.length){L.push(Ee),Je=dt;break}else if(L[dt]===null){L[dt]=Ee,Je=dt;break}if(Je===-1)break}const Ne=R[Je];Ne&&Ne.connect(Ee)}}const Q=new j,K=new j;function N(oe,fe,Ee){Q.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);const Je=Q.distanceTo(K),Ne=fe.projectionMatrix.elements,dt=Ee.projectionMatrix.elements,zt=Ne[14]/(Ne[10]-1),lt=Ne[14]/(Ne[10]+1),vt=(Ne[9]+1)/Ne[5],At=(Ne[9]-1)/Ne[5],mt=(Ne[8]-1)/Ne[0],It=(dt[8]+1)/dt[0],Wt=zt*mt,nn=zt*It,Rt=Je/(-mt+It),Bt=Rt*-mt;if(fe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Bt),oe.translateZ(Rt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ne[10]===-1)oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Y=zt+Rt,rn=lt+Rt,Mt=Wt-Bt,U=nn+(Je-Bt),w=vt*lt/rn*Y,z=At*lt/rn*Y;oe.projectionMatrix.makePerspective(Mt,U,w,z,Y,rn),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ae(oe,fe){fe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(fe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let fe=oe.near,Ee=oe.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),ie.near=G.near=B.near=fe,ie.far=G.far=B.far=Ee,(H!==ie.near||ee!==ie.far)&&(o.updateRenderState({depthNear:ie.near,depthFar:ie.far}),H=ie.near,ee=ie.far),ie.layers.mask=oe.layers.mask|6,B.layers.mask=ie.layers.mask&-5,G.layers.mask=ie.layers.mask&-3;const Je=oe.parent,Ne=ie.cameras;ae(ie,Je);for(let dt=0;dt<Ne.length;dt++)ae(Ne[dt],Je);Ne.length===2?N(ie,B,G):ie.projectionMatrix.copy(B.projectionMatrix),D===null&&oe.isPerspectiveCamera&&(D={camera:oe,fov:oe.fov,zoom:oe.zoom}),Se(oe,ie,Je)};function Se(oe,fe,Ee){Ee===null?oe.matrix.copy(fe.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(fe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=sl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(m===null&&x===null))return d},this.setFoveation=function(oe){d=oe,m!==null&&(m.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ie)},this.getCameraTexture=function(oe){return y[oe]};let ke=null;function Be(oe,fe){if(p=fe.getViewerPose(h||c),M=fe,p!==null){const Ee=p.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let Je=!1;Ee.length!==ie.cameras.length&&(ie.cameras.length=0,Je=!0);for(let lt=0;lt<Ee.length;lt++){const vt=Ee[lt];let At=null;if(x!==null)At=x.getViewport(vt);else{const It=v.getViewSubImage(m,vt);At=It.viewport,lt===0&&(e.setRenderTargetTextures(C,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(C))}let mt=$[lt];mt===void 0&&(mt=new Ei,mt.layers.enable(lt),mt.viewport=new en,$[lt]=mt),mt.matrix.fromArray(vt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(vt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(At.x,At.y,At.width,At.height),lt===0&&(ie.matrix.copy(mt.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Je===!0&&ie.cameras.push(mt)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=i.getBinding();const lt=v.getDepthInformation(Ee[0]);lt&&lt.isValid&&lt.texture&&S.init(lt,o.renderState)}if(Ne&&Ne.includes("camera-access")&&T){e.state.unbindTexture(),v=i.getBinding();for(let lt=0;lt<Ee.length;lt++){const vt=Ee[lt].camera;if(vt){let At=y[vt];At||(At=new ay,y[vt]=At);const mt=v.getCameraImage(vt);At.sourceTexture=mt}}}}for(let Ee=0;Ee<R.length;Ee++){const Je=L[Ee],Ne=R[Ee];Je!==null&&Ne!==void 0&&Ne.update(Je,fe,h||c)}ke&&ke(oe,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const He=new dy;He.setAnimationLoop(Be),this.setAnimationLoop=function(oe){ke=oe},this.dispose=function(){}}}const PR=new Yt,xy=new ht;xy.set(-1,0,0,0,1,0,0,0,1);function LR(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,ly(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,P,F,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?a(S,y):y.isMeshLambertMaterial?(a(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(S,y),v(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(S,y),m(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),T(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,P,F):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ni&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ni&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=e.get(y),F=P.envMap,C=P.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(C)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(xy),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,P,F){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=F*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function m(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ni&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const P=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function DR(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,R){const L=R.program;i.uniformBlockBinding(C,L)}function h(C,R){let L=o[C.id];L===void 0&&(S(C),L=p(C),o[C.id]=L,C.addEventListener("dispose",P));const O=R.program;i.updateUBOMapping(C,O);const E=e.render.frame;a[C.id]!==E&&(m(C),a[C.id]=E)}function p(C){const R=v();C.__bindingPointIndex=R;const L=n.createBuffer(),O=C.__size,E=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,O,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,L),L}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const R=o[C.id],L=C.uniforms,O=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let E=0,D=L.length;E<D;E++){const B=L[E];if(Array.isArray(B))for(let G=0,$=B.length;G<$;G++)x(B[G],E,G,O);else x(B,E,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(C,R,L,O){if(T(C,R,L,O)===!0){const E=C.__offset,D=C.value;if(Array.isArray(D)){let B=0;for(let G=0;G<D.length;G++){const $=D[G],ie=y($);M($,C.__data,B),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(B+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(D,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,C.__data)}}function M(C,R,L){typeof C=="number"||typeof C=="boolean"?R[0]=C:C.isMatrix3?(R[0]=C.elements[0],R[1]=C.elements[1],R[2]=C.elements[2],R[3]=0,R[4]=C.elements[3],R[5]=C.elements[4],R[6]=C.elements[5],R[7]=0,R[8]=C.elements[6],R[9]=C.elements[7],R[10]=C.elements[8],R[11]=0):ArrayBuffer.isView(C)?R.set(new C.constructor(C.buffer,C.byteOffset,R.length)):C.toArray(R,L)}function T(C,R,L,O){const E=C.value,D=R+"_"+L;if(O[D]===void 0)return typeof E=="number"||typeof E=="boolean"?O[D]=E:ArrayBuffer.isView(E)?O[D]=E.slice():O[D]=E.clone(),!0;{const B=O[D];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return O[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(C){const R=C.uniforms;let L=0;const O=16;for(let D=0,B=R.length;D<B;D++){const G=Array.isArray(R[D])?R[D]:[R[D]];for(let $=0,ie=G.length;$<ie;$++){const H=G[$],ee=Array.isArray(H.value)?H.value:[H.value];for(let he=0,J=ee.length;he<J;he++){const Z=ee[he],Q=y(Z),K=L%O,N=K%Q.boundary,ae=K+N;L+=N,ae!==0&&O-ae<Q.storage&&(L+=O-ae),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=L,L+=Q.storage}}}const E=L%O;return E>0&&(L+=O-E),C.__size=L,C.__cache={},this}function y(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(R.boundary=16,R.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),R}function P(C){const R=C.target;R.removeEventListener("dispose",P);const L=c.indexOf(R.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(o[R.id]),delete o[R.id],delete a[R.id]}function F(){for(const C in o)n.deleteBuffer(o[C]);c=[],o={},a={}}return{bind:d,update:h,dispose:F}}const NR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function IR(){return Yi===null&&(Yi=new gE(NR,16,16,Os,ii),Yi.name="DFG_LUT",Yi.minFilter=zn,Yi.magFilter=zn,Yi.wrapS=vr,Yi.wrapT=vr,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class UR{constructor(e={}){const{canvas:t=P1(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:x=ui}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const T=x,S=new Set([Fp,Up,Ip]),y=new Set([ui,tr,nl,il,Dp,Np]),P=new Uint32Array(4),F=new Int32Array(4),C=new j;let R=null,L=null;const O=[],E=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let G=!1,$=null,ie=null,H=null,ee=null;this._outputColorSpace=ei;let he=0,J=0,Z=null,Q=-1,K=null;const N=new en,ae=new en;let Se=null;const ke=new pt(0);let Be=0,He=t.width,oe=t.height,fe=1,Ee=null,Je=null;const Ne=new en(0,0,He,oe),dt=new en(0,0,He,oe);let zt=!1;const lt=new Hp;let vt=!1,At=!1;const mt=new Yt,It=new j,Wt=new en,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Bt(){return Z===null?fe:1}let Y=i;function rn(A,X){return t.getContext(A,X)}let Mt,U,w,z,te,ce,ve,be,pe,me,Ae,$e,Le,Ce,Ke,nt,at,W,Re,ge,Pe,Oe,xe;try{const A={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rp}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",An,!1),Y===null){const X="webgl2";if(Y=rn(X,A),Y===null)throw rn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(A){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",An,!1),Nt("WebGLRenderer: "+A.message),A}function et(){Mt=new IA(Y),Mt.init(),Pe=new TR(Y,Mt),U=new EA(Y,Mt,e,Pe),w=new wR(Y,Mt),U.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),ie=Y.createFramebuffer(),H=Y.createFramebuffer(),ee=Y.createFramebuffer(),z=new OA(Y),te=new cR,ce=new ER(Y,Mt,w,te,U,Pe,z),ve=new NA(B),be=new BE(Y),Oe=new MA(Y,be),pe=new UA(Y,be,z,Oe),me=new BA(Y,pe,be,Oe,z),W=new kA(Y,U,ce),Ke=new TA(te),Ae=new lR(B,ve,Mt,U,Oe,Ke),$e=new LR(B,te),Le=new dR,Ce=new vR(Mt),at=new SA(B,ve,w,me,M,d),nt=new MR(B,me,U),xe=new DR(Y,z,U,w),Re=new wA(Y,Mt,z),ge=new FA(Y,Mt,z),z.programs=Ae.programs,B.capabilities=U,B.extensions=Mt,B.properties=te,B.renderLists=Le,B.shadowMap=nt,B.state=w,B.info=z}T!==ui&&(D=new VA(T,t.width,t.height,u,o,a));const Ye=new RR(B,Y);this.xr=Ye,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(He,oe,!1))},this.getSize=function(A){return A.set(He,oe)},this.setSize=function(A,X,ue=!0){if(Ye.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,oe=X,t.width=Math.floor(A*fe),t.height=Math.floor(X*fe),ue===!0&&(t.style.width=A+"px",t.style.height=X+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(He*fe,oe*fe).floor()},this.setDrawingBufferSize=function(A,X,ue){He=A,oe=X,fe=ue,t.width=Math.floor(A*ue),t.height=Math.floor(X*ue),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(T===ui){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,X,ue,re){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,X,ue,re),w.viewport(N.copy(Ne).multiplyScalar(fe).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,X,ue,re){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,X,ue,re),w.scissor(ae.copy(dt).multiplyScalar(fe).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(A){w.setScissorTest(zt=A)},this.setOpaqueSort=function(A){Ee=A},this.setTransparentSort=function(A){Je=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ue=!0){let re=0;if(A){let ne=!1;if(Z!==null){const Ue=Z.texture.format;ne=S.has(Ue)}if(ne){const Ue=Z.texture.type,De=y.has(Ue),Ie=at.getClearColor(),Xe=at.getClearAlpha(),Ze=Ie.r,ft=Ie.g,gt=Ie.b;De?(P[0]=Ze,P[1]=ft,P[2]=gt,P[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,P)):(F[0]=Ze,F[1]=ft,F[2]=gt,F[3]=Xe,Y.clearBufferiv(Y.COLOR,0,F))}else re|=Y.COLOR_BUFFER_BIT}X&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",An,!1),at.dispose(),Le.dispose(),Ce.dispose(),te.dispose(),ve.dispose(),me.dispose(),Oe.dispose(),xe.dispose(),Ae.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",yl),Ye.removeEventListener("sessionend",Sl),Hn.stop()};function Pt(A){A.preventDefault(),av("WebGLRenderer: Context Lost."),G=!0}function bt(){av("WebGLRenderer: Context Restored."),G=!1;const A=z.autoReset,X=nt.enabled,ue=nt.autoUpdate,re=nt.needsUpdate,ne=nt.type;et(),z.autoReset=A,nt.enabled=X,nt.autoUpdate=ue,nt.needsUpdate=re,nt.type=ne}function An(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hi(A){const X=A.target;X.removeEventListener("dispose",hi),ss(X)}function ss(A){Vs(A),te.remove(A)}function Vs(A){const X=te.get(A).programs;X!==void 0&&(X.forEach(function(ue){Ae.releaseProgram(ue)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ue,re,ne,Ue){X===null&&(X=nn);const De=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ie=Zt(A,X,ue,re,ne);w.setMaterial(re,De);let Xe=ue.index,Ze=1;if(re.wireframe===!0){if(Xe=pe.getWireframeAttribute(ue),Xe===void 0)return;Ze=2}const ft=ue.drawRange,gt=ue.attributes.position;let Ge=ft.start*Ze,wt=(ft.start+ft.count)*Ze;Ue!==null&&(Ge=Math.max(Ge,Ue.start*Ze),wt=Math.min(wt,(Ue.start+Ue.count)*Ze)),Xe!==null?(Ge=Math.max(Ge,0),wt=Math.min(wt,Xe.count)):gt!=null&&(Ge=Math.max(Ge,0),wt=Math.min(wt,gt.count));const sn=wt-Ge;if(sn<0||sn===1/0)return;Oe.setup(ne,re,Ie,ue,Xe);let Vt,Ut=Re;if(Xe!==null&&(Vt=be.get(Xe),Ut=ge,Ut.setIndex(Vt)),ne.isMesh)re.wireframe===!0?(w.setLineWidth(re.wireframeLinewidth*Bt()),Ut.setMode(Y.LINES)):Ut.setMode(Y.TRIANGLES);else if(ne.isLine){let pn=re.linewidth;pn===void 0&&(pn=1),w.setLineWidth(pn*Bt()),ne.isLineSegments?Ut.setMode(Y.LINES):ne.isLineLoop?Ut.setMode(Y.LINE_LOOP):Ut.setMode(Y.LINE_STRIP)}else ne.isPoints?Ut.setMode(Y.POINTS):ne.isSprite&&Ut.setMode(Y.TRIANGLES);if(ne.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const pn=ne._multiDrawStarts,ze=ne._multiDrawCounts,ln=ne._multiDrawCount,Et=Xe?be.get(Xe).bytesPerElement:1,Dn=te.get(re).currentProgram.getUniforms();for(let xt=0;xt<ln;xt++)Dn.setValue(Y,"_gl_DrawID",xt),Ut.render(pn[xt]/Et,ze[xt])}else if(ne.isInstancedMesh)Ut.renderInstances(Ge,sn,ne.count);else if(ue.isInstancedBufferGeometry){const pn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ze=Math.min(ue.instanceCount,pn);Ut.renderInstances(Ge,sn,ze)}else Ut.render(Ge,sn)};function os(A,X,ue,re){$!==null&&A.isNodeMaterial&&$.setObject(re,A),vt===!0&&Ke.setState(A,ue,!1),A.transparent===!0&&A.side===gr&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,cs(A,X,re),A.side=Us,A.needsUpdate=!0,cs(A,X,re),A.side=gr):cs(A,X,re)}this.compile=function(A,X,ue=null){ue===null&&(ue=A),$!==null&&$.renderStart(A,X,ue),L=Ce.get(ue),L.init(X),E.push(L),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),A!==ue&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights(),$!==null&&$.updateLights(L.state.lightsArray),At=this.localClippingEnabled,vt=Ke.init(this.clippingPlanes,At),vt===!0&&Ke.setGlobalState(this.clippingPlanes,X),$!==null&&nt.render(L.state.shadowsArray,ue,X);const re=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ue=ne.material;if(Ue)if(Array.isArray(Ue))for(let De=0;De<Ue.length;De++){const Ie=Ue[De];os(Ie,ue,X,ne),re.add(Ie)}else os(Ue,ue,X,ne),re.add(Ue)}),L=E.pop(),$!==null&&$.renderEnd(),re},this.compileAsync=function(A,X,ue=null){const re=this.compile(A,X,ue);return new Promise(ne=>{function Ue(){if(re.forEach(function(De){const Xe=te.get(De).currentProgram;(Xe===void 0||Xe.isReady())&&re.delete(De)}),re.size===0){ne(A);return}setTimeout(Ue,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let as=null;function Gu(A){as&&as(A)}function yl(){Hn.stop()}function Sl(){Hn.start()}const Hn=new dy;Hn.setAnimationLoop(Gu),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(A){as=A,Ye.setAnimationLoop(A),A===null?Hn.stop():Hn.start()},Ye.addEventListener("sessionstart",yl),Ye.addEventListener("sessionend",Sl),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;$!==null&&$.renderStart(A,X);const ue=Ye.enabled===!0&&Ye.isPresenting===!0,re=D!==null&&(Z===null||ue)&&D.begin(B,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(X),X=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,X,Z),L=Ce.get(A,E.length),L.init(X),L.state.textureUnits=ce.getTextureUnits(),E.push(L),mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),lt.setFromProjectionMatrix(mt,Ki,X.reversedDepth),At=this.localClippingEnabled,vt=Ke.init(this.clippingPlanes,At),R=Le.get(A,O.length),R.init(),O.push(R),Ye.enabled===!0&&Ye.isPresenting===!0){const De=B.xr.getDepthSensingMesh();De!==null&&Hs(De,X,-1/0,B.sortObjects)}Hs(A,X,0,B.sortObjects),R.finish(),$!==null&&$.updateLights(L.state.lightsArray),B.sortObjects===!0&&R.sort(Ee,Je),Rt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Rt&&at.addToRenderList(R,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ke.beginShadows();const ne=L.state.shadowsArray;if(nt.render(ne,A,X),vt===!0&&Ke.endShadows(),(re&&D.hasRenderPass())===!1){const De=R.opaque,Ie=R.transmissive;if(L.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Ie.length>0)for(let Ze=0,ft=Xe.length;Ze<ft;Ze++){const gt=Xe[Ze];Ml(De,Ie,A,gt)}Rt&&at.render(A);for(let Ze=0,ft=Xe.length;Ze<ft;Ze++){const gt=Xe[Ze];qo(R,A,gt,gt.viewport)}}else Ie.length>0&&Ml(De,Ie,A,X),Rt&&at.render(A),qo(R,A,X)}Z!==null&&J===0&&(ce.updateMultisampleRenderTarget(Z),ce.updateRenderTargetMipmap(Z)),re&&D.end(B),A.isScene===!0&&A.onAfterRender(B,A,X),Oe.resetDefaultState(),Q=-1,K=null,E.pop(),E.length>0?(L=E[E.length-1],ce.setTextureUnits(L.state.textureUnits),vt===!0&&Ke.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?R=O[O.length-1]:R=null,$!==null&&$.renderEnd()};function Hs(A,X,ue,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(lt)){re&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const De=me.update(A),Ie=A.material;Ie.visible&&R.push(A,De,Ie,ue,Wt.z,null,X)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(lt))){const De=me.update(A),Ie=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Wt.copy(De.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(Ie)){const Xe=De.groups;for(let Ze=0,ft=Xe.length;Ze<ft;Ze++){const gt=Xe[Ze],Ge=Ie[gt.materialIndex];Ge&&Ge.visible&&R.push(A,De,Ge,ue,Wt.z,gt,X)}}else Ie.visible&&R.push(A,De,Ie,ue,Wt.z,null,X)}}const Ue=A.children;for(let De=0,Ie=Ue.length;De<Ie;De++)Hs(Ue[De],X,ue,re)}function qo(A,X,ue,re){const{opaque:ne,transmissive:Ue,transparent:De}=A;L.setupLightsView(ue),vt===!0&&Ke.setGlobalState(B.clippingPlanes,ue),re&&w.viewport(N.copy(re)),ne.length>0&&ls(ne,X,ue),Ue.length>0&&ls(Ue,X,ue),De.length>0&&ls(De,X,ue),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Ml(A,X,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[re.id]===void 0){const Ge=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[re.id]=new Yn(1,1,{generateMipmaps:!0,type:Ge?ii:ui,minFilter:Ps,samples:Math.max(4,U.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[re.id],De=re.viewport||N;Ue.setSize(De.z*B.transmissionResolutionScale,De.w*B.transmissionResolutionScale);const Ie=B.getRenderTarget(),Xe=B.getActiveCubeFace(),Ze=B.getActiveMipmapLevel();B.setRenderTarget(Ue),B.getClearColor(ke),Be=B.getClearAlpha(),Be<1&&B.setClearColor(16777215,.5),B.clear(),Rt&&at.render(ue);const ft=B.toneMapping;B.toneMapping=Qi;const gt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),L.setupLightsView(re),vt===!0&&Ke.setGlobalState(B.clippingPlanes,re),ls(A,ue,re),ce.updateMultisampleRenderTarget(Ue),ce.updateRenderTargetMipmap(Ue),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let wt=0,sn=X.length;wt<sn;wt++){const Vt=X[wt],{object:Ut,geometry:pn,material:ze,group:ln}=Vt;if(ze.side===gr&&Ut.layers.test(re.layers)){const Et=ze.side;ze.side=ni,ze.needsUpdate=!0,$o(Ut,ue,re,pn,ze,ln),ze.side=Et,ze.needsUpdate=!0,Ge=!0}}Ge===!0&&(ce.updateMultisampleRenderTarget(Ue),ce.updateRenderTargetMipmap(Ue))}B.setRenderTarget(Ie,Xe,Ze),B.setClearColor(ke,Be),gt!==void 0&&(re.viewport=gt),B.toneMapping=ft}function ls(A,X,ue){const re=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Ue=A.length;ne<Ue;ne++){const De=A[ne],{object:Ie,geometry:Xe,group:Ze}=De;let ft=De.material;ft.allowOverride===!0&&re!==null&&(ft=re),Ie.layers.test(ue.layers)&&$o(Ie,X,ue,Xe,ft,Ze)}}function $o(A,X,ue,re,ne,Ue){$!==null&&ne.isNodeMaterial&&$.setObject(A,ne),A.onBeforeRender(B,X,ue,re,ne,Ue),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(B,X,ue,re,A,Ue),ne.transparent===!0&&ne.side===gr&&ne.forceSinglePass===!1?(ne.side=ni,ne.needsUpdate=!0,B.renderBufferDirect(ue,X,re,ne,A,Ue),ne.side=Us,ne.needsUpdate=!0,B.renderBufferDirect(ue,X,re,ne,A,Ue),ne.side=gr):B.renderBufferDirect(ue,X,re,ne,A,Ue),A.onAfterRender(B,X,ue,re,ne,Ue)}function cs(A,X,ue){X.isScene!==!0&&(X=nn);const re=te.get(A),ne=L.state.lights,Ue=L.state.shadowsArray,De=ne.state.version,Ie=Ae.getParameters(A,ne.state,Ue,X,ue,L.state.lightProbeGridArray),Xe=Ae.getProgramCacheKey(Ie);let Ze=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=ve.get(A.envMap||re.environment,ft),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",hi),Ze=new Map,re.programs=Ze);let gt=Ze.get(Xe);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===De)return wl(A,Ie),gt}else Ie.uniforms=Ae.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,ue,Ie),A.onBeforeCompile(Ie,B),gt=Ae.acquireProgram(Ie,Xe),Ze.set(Xe,gt),re.uniforms=Ie.uniforms;const Ge=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Ke.uniform),wl(A,Ie),re.needsLights=Zo(A),re.lightsStateVersion=De,re.needsLights&&(Ge.ambientLightColor.value=ne.state.ambient,Ge.lightProbe.value=ne.state.probe,Ge.sunLights.value=ne.state.sun,Ge.sunLightShadows.value=ne.state.sunShadow,Ge.directionalLights.value=ne.state.directional,Ge.directionalLightShadows.value=ne.state.directionalShadow,Ge.spotLights.value=ne.state.spot,Ge.spotLightShadows.value=ne.state.spotShadow,Ge.rectAreaLights.value=ne.state.rectArea,Ge.ltc_1.value=ne.state.rectAreaLTC1,Ge.ltc_2.value=ne.state.rectAreaLTC2,Ge.pointLights.value=ne.state.point,Ge.pointLightShadows.value=ne.state.pointShadow,Ge.hemisphereLights.value=ne.state.hemi,Ge.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ge.sunShadowCascade.value=ne.state.sunShadowCascade,Ge.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ne.state.spotLightMatrix,Ge.spotLightMap.value=ne.state.spotLightMap,Ge.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.lightProbeGrid=L.state.lightProbeGridArray.length>0,re.currentProgram=gt,re.uniformsList=null,gt}function Ko(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=su.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function wl(A,X){const ue=te.get(A);ue.outputColorSpace=X.outputColorSpace,ue.batching=X.batching,ue.batchingColor=X.batchingColor,ue.instancing=X.instancing,ue.instancingColor=X.instancingColor,ue.instancingMorph=X.instancingMorph,ue.skinning=X.skinning,ue.morphTargets=X.morphTargets,ue.morphNormals=X.morphNormals,ue.morphColors=X.morphColors,ue.morphTargetsCount=X.morphTargetsCount,ue.numClippingPlanes=X.numClippingPlanes,ue.numIntersection=X.numClipIntersection,ue.vertexAlphas=X.vertexAlphas,ue.vertexTangents=X.vertexTangents,ue.toneMapping=X.toneMapping}function Wu(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let ue=0,re=A.length;ue<re;ue++){const ne=A[ue];if(ne.texture!==null&&ne.boundingBox.containsPoint(C))return ne}return null}function Zt(A,X,ue,re,ne){X.isScene!==!0&&(X=nn),ce.resetTextureUnits();const Ue=X.fog,De=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,Ie=Z===null?B.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Tt.workingColorSpace,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ze=ve.get(re.envMap||De,Xe),ft=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,gt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ge=!!ue.morphAttributes.position,wt=!!ue.morphAttributes.normal,sn=!!ue.morphAttributes.color;let Vt=Qi;re.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Vt=B.toneMapping);const Ut=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,pn=Ut!==void 0?Ut.length:0,ze=te.get(re),ln=L.state.lights;if(vt===!0&&(At===!0||A!==K)){const Ft=A===K&&re.id===Q;Ke.setState(re,A,Ft)}let Et=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ln.state.version||ze.outputColorSpace!==Ie||ne.isBatchedMesh&&ze.batching===!1||!ne.isBatchedMesh&&ze.batching===!0||ne.isBatchedMesh&&ze.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&ze.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&ze.instancing===!1||!ne.isInstancedMesh&&ze.instancing===!0||ne.isSkinnedMesh&&ze.skinning===!1||!ne.isSkinnedMesh&&ze.skinning===!0||ne.isInstancedMesh&&ze.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ze.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ze.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ze.instancingMorph===!1&&ne.morphTexture!==null||ze.envMap!==Ze||re.fog===!0&&ze.fog!==Ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ke.numPlanes||ze.numIntersection!==Ke.numIntersection)||ze.vertexAlphas!==ft||ze.vertexTangents!==gt||ze.morphTargets!==Ge||ze.morphNormals!==wt||ze.morphColors!==sn||ze.toneMapping!==Vt||ze.morphTargetsCount!==pn||!!ze.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,ze.__version=re.version);let Dn=ze.currentProgram;Et===!0&&(Dn=cs(re,X,ne),$&&re.isNodeMaterial&&$.onUpdateProgram(re,Dn,ze));let xt=!1,bi=!1,nr=!1;const Lt=Dn.getUniforms(),qt=ze.uniforms;if(w.useProgram(Dn.program)&&(xt=!0,bi=!0,nr=!0),re.id!==Q&&(Q=re.id,bi=!0),ze.needsLights){const Ft=Wu(L.state.lightProbeGridArray,ne);ze.lightProbeGrid!==Ft&&(ze.lightProbeGrid=Ft,bi=!0)}if(xt||K!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(Y,"projectionMatrix",A.projectionMatrix),Lt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const pi=Lt.map.cameraPosition;pi!==void 0&&pi.setValue(Y,It.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Lt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,bi=!0,nr=!0)}if(ze.needsLights&&(ln.state.sunShadowMap.length>0&&Lt.setValue(Y,"sunShadowMap",ln.state.sunShadowMap,ce),ln.state.directionalShadowMap.length>0&&Lt.setValue(Y,"directionalShadowMap",ln.state.directionalShadowMap,ce),ln.state.spotShadowMap.length>0&&Lt.setValue(Y,"spotShadowMap",ln.state.spotShadowMap,ce),ln.state.pointShadowMap.length>0&&Lt.setValue(Y,"pointShadowMap",ln.state.pointShadowMap,ce)),ne.isSkinnedMesh){Lt.setOptional(Y,ne,"bindMatrix"),Lt.setOptional(Y,ne,"bindMatrixInverse");const Ft=ne.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Lt.setValue(Y,"boneTexture",Ft.boneTexture,ce))}ne.isBatchedMesh&&(Lt.setOptional(Y,ne,"batchingTexture"),Lt.setValue(Y,"batchingTexture",ne._matricesTexture,ce),Lt.setOptional(Y,ne,"batchingIdTexture"),Lt.setValue(Y,"batchingIdTexture",ne._indirectTexture,ce),Lt.setOptional(Y,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Lt.setValue(Y,"batchingColorTexture",ne._colorsTexture,ce));const Ai=ue.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&W.update(ne,ue,Dn),(bi||ze.receiveShadow!==ne.receiveShadow)&&(ze.receiveShadow=ne.receiveShadow,Lt.setValue(Y,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(qt.envMapIntensity.value=X.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=IR()),bi){if(Lt.setValue(Y,"toneMappingExposure",B.toneMappingExposure),ze.needsLights&&Xu(qt,nr),Ue&&re.fog===!0&&$e.refreshFogUniforms(qt,Ue),$e.refreshMaterialUniforms(qt,re,fe,oe,L.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Ft=ze.lightProbeGrid;qt.probesSH.value=Ft.texture,qt.probesMin.value.copy(Ft.boundingBox.min),qt.probesMax.value.copy(Ft.boundingBox.max),qt.probesResolution.value.copy(Ft.resolution)}su.upload(Y,Ko(ze),qt,ce)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(su.upload(Y,Ko(ze),qt,ce),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(Y,"center",ne.center),Lt.setValue(Y,"modelViewMatrix",ne.modelViewMatrix),Lt.setValue(Y,"normalMatrix",ne.normalMatrix),Lt.setValue(Y,"modelMatrix",ne.matrixWorld),re.uniformsGroups!==void 0){const Ft=re.uniformsGroups;for(let pi=0,Ci=Ft.length;pi<Ci;pi++){const Ri=Ft[pi];xe.update(Ri,Dn),xe.bind(Ri,Dn)}}return Dn}function Xu(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Zo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,X,ue){const re=te.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=X,te.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ue=te.get(A);ue.__webglFramebuffer=X,ue.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ue=0){Z=A,he=X,J=ue;let re=null,ne=!1,Ue=!1;if(A){const Ie=te.get(A);if(Ie.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(Y.FRAMEBUFFER,Ie.__webglFramebuffer),N.copy(A.viewport),ae.copy(A.scissor),Se=A.scissorTest,w.viewport(N),w.scissor(ae),w.setScissorTest(Se),Q=-1;return}else if(Ie.__webglFramebuffer===void 0)ce.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ce.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ft=A.depthTexture;if(Ie.__boundDepthTexture!==ft){if(ft!==null&&te.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const Ze=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?re=Ze[X][ue]:re=Ze[X],ne=!0):A.samples>0&&ce.useMultisampledRTT(A)===!1?re=te.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?re=Ze[ue]:re=Ze,N.copy(A.viewport),ae.copy(A.scissor),Se=A.scissorTest}else N.copy(Ne).multiplyScalar(fe).floor(),ae.copy(dt).multiplyScalar(fe).floor(),Se=zt;if(ue!==0&&(re=ie),w.bindFramebuffer(Y.FRAMEBUFFER,re)&&w.drawBuffers(A,re),w.viewport(N),w.scissor(ae),w.setScissorTest(Se),ne){const Ie=te.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie.__webglTexture,ue)}else if(Ue){const Ie=X;for(let Xe=0;Xe<A.textures.length;Xe++){const Ze=te.get(A.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,ue,Ie)}}else if(A!==null&&ue!==0){const Ie=te.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ie.__webglTexture,ue)}Q=-1};function Qo(A){const X=te.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=U.textureFormatReadable(A.format),X.__typeReadable=U.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,ue,re,ne,Ue,De,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe){w.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const Ze=A.textures[Ie],ft=Ze.format,gt=Ze.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie);const Ge=Qo(Ze);if(Ge.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&ue>=0&&ue<=A.height-ne&&Y.readPixels(X,ue,re,ne,Pe.convert(ft),Pe.convert(gt),Ue)}finally{const Ze=Z!==null?te.get(Z).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,ue,re,ne,Ue,De,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe)if(X>=0&&X<=A.width-re&&ue>=0&&ue<=A.height-ne){w.bindFramebuffer(Y.FRAMEBUFFER,Xe);const Ze=A.textures[Ie],ft=Ze.format,gt=Ze.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie);const Ge=Qo(Ze);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,wt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ue.byteLength,Y.STREAM_READ),Y.readPixels(X,ue,re,ne,Pe.convert(ft),Pe.convert(gt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const sn=Z!==null?te.get(Z).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,sn);const Vt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await L1(Y,Vt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,wt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ue),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(wt),Y.deleteSync(Vt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ue=0){const re=Math.pow(2,-ue),ne=Math.floor(A.image.width*re),Ue=Math.floor(A.image.height*re),De=X!==null?X.x:0,Ie=X!==null?X.y:0;ce.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ue,0,0,De,Ie,ne,Ue),w.unbindTexture()},this.copyTextureToTexture=function(A,X,ue=null,re=null,ne=0,Ue=0){let De,Ie,Xe,Ze,ft,gt,Ge,wt,sn;const Vt=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if(ue!==null)De=ue.max.x-ue.min.x,Ie=ue.max.y-ue.min.y,Xe=ue.isBox3?ue.max.z-ue.min.z:1,Ze=ue.min.x,ft=ue.min.y,gt=ue.isBox3?ue.min.z:0;else{const qt=Math.pow(2,-ne);De=Math.floor(Vt.width*qt),Ie=Math.floor(Vt.height*qt),A.isDataArrayTexture?Xe=Vt.depth:A.isData3DTexture?Xe=Math.floor(Vt.depth*qt):Xe=1,Ze=0,ft=0,gt=0}re!==null?(Ge=re.x,wt=re.y,sn=re.z):(Ge=0,wt=0,sn=0);const Ut=Pe.convert(X.format),pn=Pe.convert(X.type);let ze;X.isData3DTexture?(ce.setTexture3D(X,0),ze=Y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ce.setTexture2DArray(X,0),ze=Y.TEXTURE_2D_ARRAY):(ce.setTexture2D(X,0),ze=Y.TEXTURE_2D),w.activeTexture(Y.TEXTURE0),w.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment);const ln=w.getParameter(Y.UNPACK_ROW_LENGTH),Et=w.getParameter(Y.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter(Y.UNPACK_SKIP_PIXELS),xt=w.getParameter(Y.UNPACK_SKIP_ROWS),bi=w.getParameter(Y.UNPACK_SKIP_IMAGES);w.pixelStorei(Y.UNPACK_ROW_LENGTH,Vt.width),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Vt.height),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ze),w.pixelStorei(Y.UNPACK_SKIP_ROWS,ft),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,gt);const nr=A.isDataArrayTexture||A.isData3DTexture,Lt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const qt=te.get(A),Ai=te.get(X),Ft=te.get(qt.__renderTarget),pi=te.get(Ai.__renderTarget);w.bindFramebuffer(Y.READ_FRAMEBUFFER,Ft.__webglFramebuffer),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ci=0;Ci<Xe;Ci++)nr&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,te.get(A).__webglTexture,ne,gt+Ci),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,te.get(X).__webglTexture,Ue,sn+Ci)),Y.blitFramebuffer(Ze,ft,De,Ie,Ge,wt,De,Ie,Y.DEPTH_BUFFER_BIT,Y.NEAREST);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||te.has(A)){const qt=te.get(A),Ai=te.get(X);w.bindFramebuffer(Y.READ_FRAMEBUFFER,H),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ee);for(let Ft=0;Ft<Xe;Ft++)nr?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,qt.__webglTexture,ne,gt+Ft):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,qt.__webglTexture,ne),Lt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ai.__webglTexture,Ue,sn+Ft):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ai.__webglTexture,Ue),ne!==0?Y.blitFramebuffer(Ze,ft,De,Ie,Ge,wt,De,Ie,Y.COLOR_BUFFER_BIT,Y.NEAREST):Lt?Y.copyTexSubImage3D(ze,Ue,Ge,wt,sn+Ft,Ze,ft,De,Ie):Y.copyTexSubImage2D(ze,Ue,Ge,wt,Ze,ft,De,Ie);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(ze,Ue,Ge,wt,sn,De,Ie,Xe,Ut,pn,Vt.data):X.isCompressedArrayTexture?Y.compressedTexSubImage3D(ze,Ue,Ge,wt,sn,De,Ie,Xe,Ut,Vt.data):Y.texSubImage3D(ze,Ue,Ge,wt,sn,De,Ie,Xe,Ut,pn,Vt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ue,Ge,wt,De,Ie,Ut,pn,Vt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ue,Ge,wt,Vt.width,Vt.height,Ut,Vt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ue,Ge,wt,De,Ie,Ut,pn,Vt);w.pixelStorei(Y.UNPACK_ROW_LENGTH,ln),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Et),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei(Y.UNPACK_SKIP_ROWS,xt),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,bi),Ue===0&&X.generateMipmaps&&Y.generateMipmap(ze),w.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ce.setTextureCube(A,0):A.isData3DTexture?ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ce.setTexture2DArray(A,0):ce.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){he=0,J=0,Z=null,w.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const ou={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class pl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FR=new Du(-1,1,1,-1,0,1);class OR extends vn{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const kR=new OR;class _y{constructor(e){this._mesh=new ti(kR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,FR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class BR extends pl{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xu.clone(e.uniforms),this.material=new Ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new _y(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ax extends pl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class zR extends pl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class VR{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ut);this._width=i.width,this._height=i.height,t=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new BR(ou),this.copyPass.material.blending=Zi,this.timer=new UE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,a=this.passes.length;o<a;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}ax!==void 0&&(c instanceof ax?i=!0:c instanceof zR&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HR extends pl{constructor(e,t,i=null,o=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pt}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=o}}const GR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ko extends pl{constructor(e,t=1,i,o){super(),this.strength=t,this.radius=i,this.threshold=o,this.resolution=e!==void 0?new ut(e.x,e.y):new ut(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Yn(a,c,{type:ii,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const v=new Yn(a,c,{type:ii,depthBuffer:!1});v.texture.name="UnrealBloomPass.h"+p,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const m=new Yn(a,c,{type:ii,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),c=Math.round(c/2)}const u=GR;this.highPassUniforms=xu.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ln({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ut(1/a,1/c),a=Math.round(a/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xu.clone(ou.uniforms),this.blendMaterial=new Ln({uniforms:this.copyUniforms,vertexShader:ou.vertexShader,fragmentShader:ou.fragmentShader,premultipliedAlpha:!0,blending:es,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new Pu,this._fsQuad=new _y(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(i,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,o),this.renderTargetsVertical[a].setSize(i,o),this.separableBlurMaterials[a].uniforms.invSize.value=new ut(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(e,t,i,o,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[d].uniforms.direction.value=ko.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=ko.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let c=0;c<e;c++)t.push(.39894*Math.exp(-.5*c*c/(i*i))/i);const o=[],a=[];for(let c=1;c<e;c+=2){const u=t[c],d=c+1<e?t[c+1]:0,h=u+d;o.push((c*u+(c+1)*d)/h),a.push(h)}return new Ln({defines:{KERNEL_PAIRS:o.length},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:o},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ko.BlurDirectionX=new ut(1,0);ko.BlurDirectionY=new ut(0,1);const Xp=_e.createContext({});function Uu(n){const e=_e.useRef(null);return e.current===null&&(e.current=n()),e.current}const Fu=_e.createContext(null),ml=_e.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class WR extends _e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function XR({children:n,isPresent:e}){const t=_e.useId(),i=_e.useRef(null),o=_e.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=_e.useContext(ml);return _e.useInsertionEffect(()=>{const{width:c,height:u,top:d,left:h}=o.current;if(e||!i.current||!c||!u)return;i.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),I.jsx(WR,{isPresent:e,childRef:i,sizeRef:o,children:_e.cloneElement(n,{ref:i})})}const jR=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:c})=>{const u=Uu(YR),d=_e.useId(),h=_e.useCallback(v=>{u.set(v,!0);for(const m of u.values())if(!m)return;i&&i()},[u,i]),p=_e.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:v=>(u.set(v,!1),()=>u.delete(v))}),a?[Math.random(),h]:[t,h]);return _e.useMemo(()=>{u.forEach((v,m)=>u.set(m,!1))},[t]),_e.useEffect(()=>{!t&&!u.size&&i&&i()},[t]),c==="popLayout"&&(n=I.jsx(XR,{isPresent:t,children:n})),I.jsx(Fu.Provider,{value:p,children:n})};function YR(){return new Map}function yy(n=!0){const e=_e.useContext(Fu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=_e.useId();_e.useEffect(()=>{n&&o(a)},[n]);const c=_e.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const Kc=n=>n.key||"";function lx(n){const e=[];return _e.Children.forEach(n,t=>{_e.isValidElement(t)&&e.push(t)}),e}const jp=typeof window<"u",Yp=jp?_e.useLayoutEffect:_e.useEffect,qR=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1})=>{const[u,d]=yy(c),h=_e.useMemo(()=>lx(n),[n]),p=c&&!u?[]:h.map(Kc),v=_e.useRef(!0),m=_e.useRef(h),x=Uu(()=>new Map),[M,T]=_e.useState(h),[S,y]=_e.useState(h);Yp(()=>{v.current=!1,m.current=h;for(let C=0;C<S.length;C++){const R=Kc(S[C]);p.includes(R)?x.delete(R):x.get(R)!==!0&&x.set(R,!1)}},[S,p.length,p.join("-")]);const P=[];if(h!==M){let C=[...h];for(let R=0;R<S.length;R++){const L=S[R],O=Kc(L);p.includes(O)||(C.splice(R,0,L),P.push(L))}a==="wait"&&P.length&&(C=P),y(lx(C)),T(h);return}const{forceRender:F}=_e.useContext(Xp);return I.jsx(I.Fragment,{children:S.map(C=>{const R=Kc(C),L=c&&!u?!1:h===S||p.includes(R),O=()=>{if(x.has(R))x.set(R,!0);else return;let E=!0;x.forEach(D=>{D||(E=!1)}),E&&(F==null||F(),y(m.current),c&&(d==null||d()),i&&i())};return I.jsx(jR,{isPresent:L,initial:!v.current||t?void 0:!1,custom:L?void 0:e,presenceAffectsLayout:o,mode:a,onExitComplete:L?void 0:O,children:C},R)})})},di=n=>n;let Sy=di;function qp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Bo=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},yr=n=>n*1e3,Sr=n=>n/1e3,$R={useManualTiming:!1};function KR(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,p=!1,v=!1)=>{const x=v&&i?e:t;return p&&a.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,i){o=!0;return}i=!0,[e,t]=[t,e],e.forEach(u),e.clear(),i=!1,o&&(o=!1,d.process(h))}};return d}const Zc=["read","resolveKeyframes","update","preRender","render","postRender"],ZR=40;function My(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Zc.reduce((y,P)=>(y[P]=KR(a),y),{}),{read:u,resolveKeyframes:d,update:h,preRender:p,render:v,postRender:m}=c,x=()=>{const y=performance.now();t=!1,o.delta=i?1e3/60:Math.max(Math.min(y-o.timestamp,ZR),1),o.timestamp=y,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),v.process(o),m.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(x))},M=()=>{t=!0,i=!0,o.isProcessing||n(x)};return{schedule:Zc.reduce((y,P)=>{const F=c[P];return y[P]=(C,R=!1,L=!1)=>(t||M(),F.schedule(C,R,L)),y},{}),cancel:y=>{for(let P=0;P<Zc.length;P++)c[Zc[P]].cancel(y)},state:o,steps:c}}const{schedule:Gt,cancel:ns,state:En,steps:ah}=My(typeof requestAnimationFrame<"u"?requestAnimationFrame:di,!0),wy=_e.createContext({strict:!1}),cx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zo={};for(const n in cx)zo[n]={isEnabled:e=>cx[n].some(t=>!!e[t])};function QR(n){for(const e in n)zo[e]={...zo[e],...n[e]}}const JR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _u(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||JR.has(n)}let Ey=n=>!_u(n);function eP(n){n&&(Ey=e=>e.startsWith("on")?!_u(e):n(e))}try{eP(require("@emotion/is-prop-valid").default)}catch{}function tP(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||(Ey(o)||t===!0&&_u(o)||!e&&!_u(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}function nP(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Ou=_e.createContext({});function al(n){return typeof n=="string"||Array.isArray(n)}function ku(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const $p=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Kp=["initial",...$p];function Bu(n){return ku(n.animate)||Kp.some(e=>al(n[e]))}function Ty(n){return!!(Bu(n)||n.variants)}function iP(n,e){if(Bu(n)){const{initial:t,animate:i}=n;return{initial:t===!1||al(t)?t:void 0,animate:al(i)?i:void 0}}return n.inherit!==!1?e:{}}function rP(n){const{initial:e,animate:t}=iP(n,_e.useContext(Ou));return _e.useMemo(()=>({initial:e,animate:t}),[ux(e),ux(t)])}function ux(n){return Array.isArray(n)?n.join(" "):n}const sP=Symbol.for("motionComponentSymbol");function Ro(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function oP(n,e,t){return _e.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):Ro(t)&&(t.current=i))},[e])}const Zp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),aP="framerAppearId",by="data-"+Zp(aP),{schedule:Qp}=My(queueMicrotask,!1),Ay=_e.createContext({});function lP(n,e,t,i,o){var a,c;const{visualElement:u}=_e.useContext(Ou),d=_e.useContext(wy),h=_e.useContext(Fu),p=_e.useContext(ml).reducedMotion,v=_e.useRef(null);i=i||d.renderer,!v.current&&i&&(v.current=i(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const m=v.current,x=_e.useContext(Ay);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&cP(v.current,t,o,x);const M=_e.useRef(!1);_e.useInsertionEffect(()=>{m&&M.current&&m.update(t,h)});const T=t[by],S=_e.useRef(!!T&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,T))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,T)));return Yp(()=>{m&&(M.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),Qp.render(m.render),S.current&&m.animationState&&m.animationState.animateChanges())}),_e.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,T)}),S.current=!1))}),m}function cP(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Cy(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Ro(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,layoutScroll:d,layoutRoot:h})}function Cy(n){if(n)return n.options.allowProjection!==!1?n.projection:Cy(n.parent)}function uP({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:o}){var a,c;n&&QR(n);function u(h,p){let v;const m={..._e.useContext(ml),...h,layoutId:dP(h)},{isStatic:x}=m,M=rP(h),T=i(h,x);if(!x&&jp){fP();const S=hP(m);v=S.MeasureLayout,M.visualElement=lP(o,T,m,e,S.ProjectionNode)}return I.jsxs(Ou.Provider,{value:M,children:[v&&M.visualElement?I.jsx(v,{visualElement:M.visualElement,...m}):null,t(o,h,oP(T,M.visualElement,p),T,x,M.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${(c=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&c!==void 0?c:""})`}`;const d=_e.forwardRef(u);return d[sP]=o,d}function dP({layoutId:n}){const e=_e.useContext(Xp).id;return e&&n!==void 0?e+"-"+n:n}function fP(n,e){_e.useContext(wy).strict}function hP(n){const{drag:e,layout:t}=zo;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const pP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jp(n){return typeof n!="string"||n.includes("-")?!1:!!(pP.indexOf(n)>-1||/[A-Z]/u.test(n))}function dx(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function em(n,e,t,i){if(typeof e=="function"){const[o,a]=dx(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=dx(i);e=e(t!==void 0?t:n.custom,o,a)}return e}const cp=n=>Array.isArray(n),mP=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),gP=n=>cp(n)?n[n.length-1]||0:n,Tn=n=>!!(n&&n.getVelocity);function au(n){const e=Tn(n)?n.get():n;return mP(e)?e.toValue():e}function vP({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},i,o,a){const c={latestValues:xP(i,o,a,n),renderState:e()};return t&&(c.onMount=u=>t({props:i,current:u,...c}),c.onUpdate=u=>t(u)),c}const Ry=n=>(e,t)=>{const i=_e.useContext(Ou),o=_e.useContext(Fu),a=()=>vP(n,e,i,o);return t?a():Uu(a)};function xP(n,e,t,i){const o={},a=i(n,{});for(const m in a)o[m]=au(a[m]);let{initial:c,animate:u}=n;const d=Bu(n),h=Ty(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!ku(v)){const m=Array.isArray(v)?v:[v];for(let x=0;x<m.length;x++){const M=em(n,m[x]);if(M){const{transitionEnd:T,transition:S,...y}=M;for(const P in y){let F=y[P];if(Array.isArray(F)){const C=p?F.length-1:0;F=F[C]}F!==null&&(o[P]=F)}for(const P in T)o[P]=T[P]}}}return o}const jo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Bs=new Set(jo),Py=n=>e=>typeof e=="string"&&e.startsWith(n),Ly=Py("--"),_P=Py("var(--"),tm=n=>_P(n)?yP.test(n.split("/*")[0].trim()):!1,yP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Dy=(n,e)=>e&&typeof n=="number"?e.transform(n):n,wr=(n,e,t)=>t>e?e:t<n?n:t,Yo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ll={...Yo,transform:n=>wr(0,1,n)},Qc={...Yo,default:1},gl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),$r=gl("deg"),Ji=gl("%"),ot=gl("px"),SP=gl("vh"),MP=gl("vw"),fx={...Ji,parse:n=>Ji.parse(n)/100,transform:n=>Ji.transform(n*100)},wP={borderWidth:ot,borderTopWidth:ot,borderRightWidth:ot,borderBottomWidth:ot,borderLeftWidth:ot,borderRadius:ot,radius:ot,borderTopLeftRadius:ot,borderTopRightRadius:ot,borderBottomRightRadius:ot,borderBottomLeftRadius:ot,width:ot,maxWidth:ot,height:ot,maxHeight:ot,top:ot,right:ot,bottom:ot,left:ot,padding:ot,paddingTop:ot,paddingRight:ot,paddingBottom:ot,paddingLeft:ot,margin:ot,marginTop:ot,marginRight:ot,marginBottom:ot,marginLeft:ot,backgroundPositionX:ot,backgroundPositionY:ot},EP={rotate:$r,rotateX:$r,rotateY:$r,rotateZ:$r,scale:Qc,scaleX:Qc,scaleY:Qc,scaleZ:Qc,skew:$r,skewX:$r,skewY:$r,distance:ot,translateX:ot,translateY:ot,translateZ:ot,x:ot,y:ot,z:ot,perspective:ot,transformPerspective:ot,opacity:ll,originX:fx,originY:fx,originZ:ot},hx={...Yo,transform:Math.round},nm={...wP,...EP,zIndex:hx,size:ot,fillOpacity:ll,strokeOpacity:ll,numOctaves:hx},TP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bP=jo.length;function AP(n,e,t){let i="",o=!0;for(let a=0;a<bP;a++){const c=jo[a],u=n[c];if(u===void 0)continue;let d=!0;if(typeof u=="number"?d=u===(c.startsWith("scale")?1:0):d=parseFloat(u)===0,!d||t){const h=Dy(u,nm[c]);if(!d){o=!1;const p=TP[c]||c;i+=`${p}(${h}) `}t&&(e[c]=h)}}return i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function im(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(Bs.has(d)){c=!0;continue}else if(Ly(d)){o[d]=h;continue}else{const p=Dy(h,nm[d]);d.startsWith("origin")?(u=!0,a[d]=p):i[d]=p}}if(e.transform||(c||t?i.transform=AP(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${d} ${h} ${p}`}}const CP={offset:"stroke-dashoffset",array:"stroke-dasharray"},RP={offset:"strokeDashoffset",array:"strokeDasharray"};function PP(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?CP:RP;n[a.offset]=ot.transform(-i);const c=ot.transform(e),u=ot.transform(t);n[a.array]=`${c} ${u}`}function px(n,e,t){return typeof n=="string"?n:ot.transform(e+t*n)}function LP(n,e,t){const i=px(e,n.x,n.width),o=px(t,n.y,n.height);return`${i} ${o}`}function rm(n,{attrX:e,attrY:t,attrScale:i,originX:o,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,v){if(im(n,h,v),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:x,dimensions:M}=n;m.transform&&(M&&(x.transform=m.transform),delete m.transform),M&&(o!==void 0||a!==void 0||x.transform)&&(x.transformOrigin=LP(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),i!==void 0&&(m.scale=i),c!==void 0&&PP(m,c,u,d,!1)}const sm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ny=()=>({...sm(),attrs:{}}),om=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Iy(n,{style:e,vars:t},i,o){Object.assign(n.style,e,o&&o.getProjectionStyles(i));for(const a in t)n.style.setProperty(a,t[a])}const Uy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Fy(n,e,t,i){Iy(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(Uy.has(o)?o:Zp(o),e.attrs[o])}const yu={};function DP(n){Object.assign(yu,n)}function Oy(n,{layout:e,layoutId:t}){return Bs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!yu[n]||n==="opacity")}function am(n,e,t){var i;const{style:o}=n,a={};for(const c in o)(Tn(o[c])||e.style&&Tn(e.style[c])||Oy(c,n)||((i=t==null?void 0:t.getValue(c))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(a[c]=o[c]);return a}function ky(n,e,t){const i=am(n,e,t);for(const o in n)if(Tn(n[o])||Tn(e[o])){const a=jo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}function NP(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const mx=["x","y","width","height","cx","cy","r"],IP={useVisualState:Ry({scrapeMotionValuesFromProps:ky,createRenderState:Ny,onUpdate:({props:n,prevProps:e,current:t,renderState:i,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const u in o)if(Bs.has(u)){a=!0;break}}if(!a)return;let c=!e;if(e)for(let u=0;u<mx.length;u++){const d=mx[u];n[d]!==e[d]&&(c=!0)}c&&Gt.read(()=>{NP(t,i),Gt.render(()=>{rm(i,o,om(t.tagName),n.transformTemplate),Fy(t,i)})})}})},UP={useVisualState:Ry({scrapeMotionValuesFromProps:am,createRenderState:sm})};function By(n,e,t){for(const i in e)!Tn(e[i])&&!Oy(i,t)&&(n[i]=e[i])}function FP({transformTemplate:n},e){return _e.useMemo(()=>{const t=sm();return im(t,e,n),Object.assign({},t.vars,t.style)},[e])}function OP(n,e){const t=n.style||{},i={};return By(i,t,n),Object.assign(i,FP(n,e)),i}function kP(n,e){const t={},i=OP(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}function BP(n,e,t,i){const o=_e.useMemo(()=>{const a=Ny();return rm(a,e,om(i),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};By(a,n.style,n),o.style={...a,...o.style}}return o}function zP(n=!1){return(t,i,o,{latestValues:a},c)=>{const d=(Jp(t)?BP:kP)(i,a,c,t),h=tP(i,typeof t=="string",n),p=t!==_e.Fragment?{...h,...d,ref:o}:{},{children:v}=i,m=_e.useMemo(()=>Tn(v)?v.get():v,[v]);return _e.createElement(t,{...p,children:m})}}function VP(n,e){return function(i,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...Jp(i)?IP:UP,preloadedFeatures:n,useRender:zP(o),createVisualElement:e,Component:i};return uP(c)}}function zy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function zu(n,e,t){const i=n.getProps();return em(i,e,t!==void 0?t:i.custom,n)}const HP=qp(()=>window.ScrollTimeline!==void 0);class GP{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(o=>{if(HP()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{i.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class WP extends GP{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function lm(n,e){return n?n[e]||n.default||n:void 0}const up=2e4;function Vy(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<up;)e+=t,i=n.next(e);return e>=up?1/0:e}function cm(n){return typeof n=="function"}function gx(n,e){n.timeline=e,n.onfinish=null}const um=n=>Array.isArray(n)&&typeof n[0]=="number",XP={linearEasing:void 0};function jP(n,e){const t=qp(n);return()=>{var i;return(i=XP[e])!==null&&i!==void 0?i:t()}}const Su=jP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Hy=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=n(Bo(0,o-1,a))+", ";return`linear(${i.substring(0,i.length-2)})`};function Gy(n){return!!(typeof n=="function"&&Su()||!n||typeof n=="string"&&(n in dp||Su())||um(n)||Array.isArray(n)&&n.every(Gy))}const Ha=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,dp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ha([0,.65,.55,1]),circOut:Ha([.55,0,1,.45]),backIn:Ha([.31,.01,.66,-.59]),backOut:Ha([.33,1.53,.69,.99])};function Wy(n,e){if(n)return typeof n=="function"&&Su()?Hy(n,e):um(n)?Ha(n):Array.isArray(n)?n.map(t=>Wy(t,e)||dp.easeOut):dp[n]}const Bi={x:!1,y:!1};function Xy(){return Bi.x||Bi.y}function YP(n,e,t){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(i=void 0)!==null&&i!==void 0?i:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function jy(n,e){const t=YP(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function vx(n){return e=>{e.pointerType==="touch"||Xy()||n(e)}}function qP(n,e,t={}){const[i,o,a]=jy(n,t),c=vx(u=>{const{target:d}=u,h=e(u);if(typeof h!="function"||!d)return;const p=vx(v=>{h(v),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,o)});return i.forEach(u=>{u.addEventListener("pointerenter",c,o)}),a}const Yy=(n,e)=>e?n===e?!0:Yy(n,e.parentElement):!1,dm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,$P=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function KP(n){return $P.has(n.tagName)||n.tabIndex!==-1}const Ga=new WeakSet;function xx(n){return e=>{e.key==="Enter"&&n(e)}}function lh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ZP=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=xx(()=>{if(Ga.has(t))return;lh(t,"down");const o=xx(()=>{lh(t,"up")}),a=()=>lh(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function _x(n){return dm(n)&&!Xy()}function QP(n,e,t={}){const[i,o,a]=jy(n,t),c=u=>{const d=u.currentTarget;if(!_x(u)||Ga.has(d))return;Ga.add(d);const h=e(u),p=(x,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),!(!_x(x)||!Ga.has(d))&&(Ga.delete(d),typeof h=="function"&&h(x,{success:M}))},v=x=>{p(x,t.useGlobalTarget||Yy(d,x.target))},m=x=>{p(x,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return i.forEach(u=>{!KP(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),u.addEventListener("focus",h=>ZP(h,o),o)}),a}function JP(n){return n==="x"||n==="y"?Bi[n]?null:(Bi[n]=!0,()=>{Bi[n]=!1}):Bi.x||Bi.y?null:(Bi.x=Bi.y=!0,()=>{Bi.x=Bi.y=!1})}const qy=new Set(["width","height","top","left","right","bottom",...jo]);let lu;function e2(){lu=void 0}const er={now:()=>(lu===void 0&&er.set(En.isProcessing||$R.useManualTiming?En.timestamp:performance.now()),lu),set:n=>{lu=n,queueMicrotask(e2)}};function fm(n,e){n.indexOf(e)===-1&&n.push(e)}function hm(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class pm{constructor(){this.subscriptions=[]}add(e){return fm(this.subscriptions,e),()=>hm(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $y(n,e){return e?n*(1e3/e):0}const yx=30,t2=n=>!isNaN(parseFloat(n));class n2{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,o=!0)=>{const a=er.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=er.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=t2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new pm);const i=this.events[e].add(t);return e==="change"?()=>{i(),Gt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=er.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>yx)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,yx);return $y(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vo(n,e){return new n2(n,e)}function i2(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Vo(t))}function r2(n,e){const t=zu(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=gP(a[c]);i2(n,c,u)}}function s2(n){return!!(Tn(n)&&n.add)}function fp(n,e){const t=n.getValue("willChange");if(s2(t))return t.add(e)}function Ky(n){return n.props[by]}const Zy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,o2=1e-7,a2=12;function l2(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=Zy(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>o2&&++u<a2);return c}function vl(n,e,t,i){if(n===e&&t===i)return di;const o=a=>l2(a,0,1,n,t);return a=>a===0||a===1?a:Zy(o(a),e,i)}const Qy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Jy=n=>e=>1-n(1-e),eS=vl(.33,1.53,.69,.99),mm=Jy(eS),tS=Qy(mm),nS=n=>(n*=2)<1?.5*mm(n):.5*(2-Math.pow(2,-10*(n-1))),gm=n=>1-Math.sin(Math.acos(n)),iS=Jy(gm),rS=Qy(gm),sS=n=>/^0[^.\s]+$/u.test(n);function c2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||sS(n):!0}const Za=n=>Math.round(n*1e5)/1e5,vm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function u2(n){return n==null}const d2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xm=(n,e)=>t=>!!(typeof t=="string"&&d2.test(t)&&t.startsWith(n)||e&&!u2(t)&&Object.prototype.hasOwnProperty.call(t,e)),oS=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(vm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},f2=n=>wr(0,255,n),ch={...Yo,transform:n=>Math.round(f2(n))},Ns={test:xm("rgb","red"),parse:oS("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+ch.transform(n)+", "+ch.transform(e)+", "+ch.transform(t)+", "+Za(ll.transform(i))+")"};function h2(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const hp={test:xm("#"),parse:h2,transform:Ns.transform},Po={test:xm("hsl","hue"),parse:oS("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Ji.transform(Za(e))+", "+Ji.transform(Za(t))+", "+Za(ll.transform(i))+")"},Bn={test:n=>Ns.test(n)||hp.test(n)||Po.test(n),parse:n=>Ns.test(n)?Ns.parse(n):Po.test(n)?Po.parse(n):hp.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ns.transform(n):Po.transform(n)},p2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function m2(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(vm))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(p2))===null||t===void 0?void 0:t.length)||0)>0}const aS="number",lS="color",g2="var",v2="var(",Sx="${}",x2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function cl(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(x2,d=>(Bn.test(d)?(i.color.push(a),o.push(lS),t.push(Bn.parse(d))):d.startsWith(v2)?(i.var.push(a),o.push(g2),t.push(d)):(i.number.push(a),o.push(aS),t.push(parseFloat(d))),++a,Sx)).split(Sx);return{values:t,split:u,indexes:i,types:o}}function cS(n){return cl(n).values}function uS(n){const{split:e,types:t}=cl(n),i=e.length;return o=>{let a="";for(let c=0;c<i;c++)if(a+=e[c],o[c]!==void 0){const u=t[c];u===aS?a+=Za(o[c]):u===lS?a+=Bn.transform(o[c]):a+=o[c]}return a}}const _2=n=>typeof n=="number"?0:n;function y2(n){const e=cS(n);return uS(n)(e.map(_2))}const is={test:m2,parse:cS,createTransformer:uS,getAnimatableNone:y2},S2=new Set(["brightness","contrast","saturate","opacity"]);function M2(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(vm)||[];if(!i)return n;const o=t.replace(i,"");let a=S2.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const w2=/\b([a-z-]*)\(.*?\)/gu,pp={...is,getAnimatableNone:n=>{const e=n.match(w2);return e?e.map(M2).join(" "):n}},E2={...nm,color:Bn,backgroundColor:Bn,outlineColor:Bn,fill:Bn,stroke:Bn,borderColor:Bn,borderTopColor:Bn,borderRightColor:Bn,borderBottomColor:Bn,borderLeftColor:Bn,filter:pp,WebkitFilter:pp},_m=n=>E2[n];function dS(n,e){let t=_m(n);return t!==pp&&(t=is),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const T2=new Set(["auto","none","0"]);function b2(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!T2.has(a)&&cl(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=dS(t,o)}const Mx=n=>n===Yo||n===ot,wx=(n,e)=>parseFloat(n.split(", ")[e]),Ex=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/u);if(o)return wx(o[1],e);{const a=i.match(/^matrix\((.+)\)$/u);return a?wx(a[1],n):0}},A2=new Set(["x","y","z"]),C2=jo.filter(n=>!A2.has(n));function R2(n){const e=[];return C2.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const Ho={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Ex(4,13),y:Ex(5,14)};Ho.translateX=Ho.x;Ho.translateY=Ho.y;const Is=new Set;let mp=!1,gp=!1;function fS(){if(gp){const n=Array.from(Is).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=R2(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))===null||u===void 0||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}gp=!1,mp=!1,Is.forEach(n=>n.complete()),Is.clear()}function hS(){Is.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(gp=!0)})}function P2(){hS(),fS()}class ym{constructor(e,t,i,o,a,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Is.add(this),mp||(mp=!0,Gt.read(hS),Gt.resolveKeyframes(fS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(i&&t){const d=i.readValue(t,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Is.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Is.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const pS=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),L2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function D2(n){const e=L2.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function mS(n,e,t=1){const[i,o]=D2(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return pS(c)?parseFloat(c):c}return tm(o)?mS(o,e,t+1):o}const gS=n=>e=>e.test(n),N2={test:n=>n==="auto",parse:n=>n},vS=[Yo,ot,Ji,$r,MP,SP,N2],Tx=n=>vS.find(gS(n));class xS extends ym{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),tm(h))){const p=mS(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!qy.has(i)||e.length!==2)return;const[o,a]=e,c=Tx(o),u=Tx(a);if(c!==u)if(Mx(c)&&Mx(u))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)c2(e[o])&&i.push(o);i.length&&b2(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ho[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(i);a&&a.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=Ho[i](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const bx=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(is.test(n)||n==="0")&&!n.startsWith("url("));function I2(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function U2(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=bx(o,e),u=bx(a,e);return!c||!u?!1:I2(n)||(t==="spring"||cm(t))&&i}const F2=n=>n!==null;function Vu(n,{repeat:e,repeatType:t="loop"},i){const o=n.filter(F2),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||i===void 0?o[a]:i}const O2=40;class _S{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=er.now(),this.options={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>O2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&P2(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=er.now(),this.hasAttemptedResolve=!0;const{name:i,type:o,velocity:a,delay:c,onComplete:u,onUpdate:d,isGenerator:h}=this.options;if(!h&&!U2(e,i,o,a))if(c)this.options.duration=0;else{d&&d(Vu(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const tn=(n,e,t)=>n+(e-n)*t;function uh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function k2({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=uh(d,u,n+1/3),a=uh(d,u,n),c=uh(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function Mu(n,e){return t=>t>0?e:n}const dh=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},B2=[hp,Ns,Po],z2=n=>B2.find(e=>e.test(n));function Ax(n){const e=z2(n);if(!e)return!1;let t=e.parse(n);return e===Po&&(t=k2(t)),t}const Cx=(n,e)=>{const t=Ax(n),i=Ax(e);if(!t||!i)return Mu(n,e);const o={...t};return a=>(o.red=dh(t.red,i.red,a),o.green=dh(t.green,i.green,a),o.blue=dh(t.blue,i.blue,a),o.alpha=tn(t.alpha,i.alpha,a),Ns.transform(o))},V2=(n,e)=>t=>e(n(t)),xl=(...n)=>n.reduce(V2),vp=new Set(["none","hidden"]);function H2(n,e){return vp.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function G2(n,e){return t=>tn(n,e,t)}function Sm(n){return typeof n=="number"?G2:typeof n=="string"?tm(n)?Mu:Bn.test(n)?Cx:j2:Array.isArray(n)?yS:typeof n=="object"?Bn.test(n)?Cx:W2:Mu}function yS(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>Sm(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function W2(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Sm(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function X2(n,e){var t;const i=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const c=e.types[a],u=n.indexes[c][o[c]],d=(t=n.values[u])!==null&&t!==void 0?t:0;i[a]=d,o[c]++}return i}const j2=(n,e)=>{const t=is.createTransformer(e),i=cl(n),o=cl(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?vp.has(n)&&!o.values.length||vp.has(e)&&!i.values.length?H2(n,e):xl(yS(X2(i,o),o.values),t):Mu(n,e)};function SS(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?tn(n,e,t):Sm(n)(n,e)}const Y2=5;function MS(n,e,t){const i=Math.max(e-Y2,0);return $y(t-n(i),e-i)}const an={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},fh=.001;function q2({duration:n=an.duration,bounce:e=an.bounce,velocity:t=an.velocity,mass:i=an.mass}){let o,a,c=1-e;c=wr(an.minDamping,an.maxDamping,c),n=wr(an.minDuration,an.maxDuration,Sr(n)),c<1?(o=h=>{const p=h*c,v=p*n,m=p-t,x=xp(h,c),M=Math.exp(-v);return fh-m/x*M},a=h=>{const v=h*c*n,m=v*t+t,x=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),T=xp(Math.pow(h,2),c);return(-o(h)+fh>0?-1:1)*((m-x)*M)/T}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-fh+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,d=K2(o,a,u);if(n=yr(n),isNaN(d))return{stiffness:an.stiffness,damping:an.damping,duration:n};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:n}}}const $2=12;function K2(n,e,t){let i=t;for(let o=1;o<$2;o++)i=i-n(i)/e(i);return i}function xp(n,e){return n*Math.sqrt(1-e*e)}const Z2=["duration","bounce"],Q2=["stiffness","damping","mass"];function Rx(n,e){return e.some(t=>n[t]!==void 0)}function J2(n){let e={velocity:an.velocity,stiffness:an.stiffness,damping:an.damping,mass:an.mass,isResolvedFromDuration:!1,...n};if(!Rx(n,Q2)&&Rx(n,Z2))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*wr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:an.mass,stiffness:o,damping:a}}else{const t=q2(n);e={...e,...t,mass:an.mass},e.isResolvedFromDuration=!0}return e}function wS(n=an.visualDuration,e=an.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:m,isResolvedFromDuration:x}=J2({...t,velocity:-Sr(t.velocity||0)}),M=m||0,T=h/(2*Math.sqrt(d*p)),S=c-a,y=Sr(Math.sqrt(d/p)),P=Math.abs(S)<5;i||(i=P?an.restSpeed.granular:an.restSpeed.default),o||(o=P?an.restDelta.granular:an.restDelta.default);let F;if(T<1){const R=xp(y,T);F=L=>{const O=Math.exp(-T*y*L);return c-O*((M+T*y*S)/R*Math.sin(R*L)+S*Math.cos(R*L))}}else if(T===1)F=R=>c-Math.exp(-y*R)*(S+(M+y*S)*R);else{const R=y*Math.sqrt(T*T-1);F=L=>{const O=Math.exp(-T*y*L),E=Math.min(R*L,300);return c-O*((M+T*y*S)*Math.sinh(E)+R*S*Math.cosh(E))/R}}const C={calculatedDuration:x&&v||null,next:R=>{const L=F(R);if(x)u.done=R>=v;else{let O=0;T<1&&(O=R===0?yr(M):MS(F,R,L));const E=Math.abs(O)<=i,D=Math.abs(c-L)<=o;u.done=E&&D}return u.value=u.done?c:L,u},toString:()=>{const R=Math.min(Vy(C),up),L=Hy(O=>C.next(R*O).value,R,30);return R+"ms "+L}};return C}function Px({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],m={done:!1,value:v},x=E=>u!==void 0&&E<u||d!==void 0&&E>d,M=E=>u===void 0?d:d===void 0||Math.abs(u-E)<Math.abs(d-E)?u:d;let T=t*e;const S=v+T,y=c===void 0?S:c(S);y!==S&&(T=y-v);const P=E=>-T*Math.exp(-E/i),F=E=>y+P(E),C=E=>{const D=P(E),B=F(E);m.done=Math.abs(D)<=h,m.value=m.done?y:B};let R,L;const O=E=>{x(m.value)&&(R=E,L=wS({keyframes:[m.value,M(m.value)],velocity:MS(F,E,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return O(0),{calculatedDuration:null,next:E=>{let D=!1;return!L&&R===void 0&&(D=!0,C(E),O(E)),R!==void 0&&E>=R?L.next(E-R):(!D&&C(E),m)}}}const e3=vl(.42,0,1,1),t3=vl(0,0,.58,1),ES=vl(.42,0,.58,1),n3=n=>Array.isArray(n)&&typeof n[0]!="number",i3={linear:di,easeIn:e3,easeInOut:ES,easeOut:t3,circIn:gm,circInOut:rS,circOut:iS,backIn:mm,backInOut:tS,backOut:eS,anticipate:nS},Lx=n=>{if(um(n)){Sy(n.length===4);const[e,t,i,o]=n;return vl(e,t,i,o)}else if(typeof n=="string")return i3[n];return n};function r3(n,e,t){const i=[],o=t||SS,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||di:e;u=xl(d,u)}i.push(u)}return i}function s3(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(Sy(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=r3(e,i,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const m=Bo(n[v],n[v+1],p);return u[v](m)};return t?p=>h(wr(n[0],n[a-1],p)):h}function o3(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=Bo(0,e,i);n.push(tn(t,1,o))}}function a3(n){const e=[0];return o3(e,n.length-1),e}function l3(n,e){return n.map(t=>t*e)}function c3(n,e){return n.map(()=>e||ES).splice(0,n.length-1)}function wu({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=n3(i)?i.map(Lx):Lx(i),a={done:!1,value:e[0]},c=l3(t&&t.length===e.length?t:a3(e),n),u=s3(c,e,{ease:Array.isArray(o)?o:c3(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const u3=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Gt.update(e,!0),stop:()=>ns(e),now:()=>En.isProcessing?En.timestamp:er.now()}},d3={decay:Px,inertia:Px,tween:wu,keyframes:wu,spring:wS},f3=n=>n/100;class Hu extends _S{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:i,element:o,keyframes:a}=this.options,c=(o==null?void 0:o.KeyframeResolver)||ym,u=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new c(a,u,t,i,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=this.options,u=cm(t)?t:d3[t]||wu;let d,h;u!==wu&&typeof e[0]!="number"&&(d=xl(f3,SS(e[0],e[1])),e=[0,100]);const p=u({...this.options,keyframes:e});a==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=Vy(p));const{calculatedDuration:v}=p,m=v+o,x=m*(i+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:m,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:c,mapPercentToKeyframes:u,keyframes:d,calculatedDuration:h,totalDuration:p,resolvedDuration:v}=i;if(this.startTime===null)return a.next(0);const{delay:m,repeat:x,repeatType:M,repeatDelay:T,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-m*(this.speed>=0?1:-1),P=this.speed>=0?y<0:y>p;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let F=this.currentTime,C=a;if(x){const E=Math.min(this.currentTime,p)/v;let D=Math.floor(E),B=E%1;!B&&E>=1&&(B=1),B===1&&D--,D=Math.min(D,x+1),!!(D%2)&&(M==="reverse"?(B=1-B,T&&(B-=T/v)):M==="mirror"&&(C=c)),F=wr(0,1,B)*v}const R=P?{done:!1,value:d[0]}:C.next(F);u&&(R.value=u(R.value));let{done:L}=R;!P&&h!==null&&(L=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return O&&o!==void 0&&(R.value=Vu(d,this.options,o)),S&&S(R.value),O&&this.finish(),R}get duration(){const{resolved:e}=this;return e?Sr(e.calculatedDuration):0}get time(){return Sr(this.currentTime)}set time(e){e=yr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Sr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=u3,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function h3(n){return new Hu(n)}const p3=new Set(["opacity","clipPath","filter","transform"]);function m3(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const p=Wy(u,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:i,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"})}const g3=qp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Eu=10,v3=2e4;function x3(n){return cm(n.type)||n.type==="spring"||!Gy(n.ease)}function _3(n,e){const t=new Hu({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const o=[];let a=0;for(;!i.done&&a<v3;)i=t.sample(a),o.push(i.value),a+=Eu;return{times:void 0,keyframes:o,duration:a-Eu,ease:"linear"}}const TS={anticipate:nS,backInOut:tS,circInOut:rS};function y3(n){return n in TS}class Dx extends _S{constructor(e){super(e);const{name:t,motionValue:i,element:o,keyframes:a}=this.options;this.resolver=new xS(a,(c,u)=>this.onKeyframesResolved(c,u),t,i,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:i=300,times:o,ease:a,type:c,motionValue:u,name:d,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof a=="string"&&Su()&&y3(a)&&(a=TS[a]),x3(this.options)){const{onComplete:v,onUpdate:m,motionValue:x,element:M,...T}=this.options,S=_3(e,T);e=S.keyframes,e.length===1&&(e[1]=e[0]),i=S.duration,o=S.times,a=S.ease,c="keyframes"}const p=m3(u.owner.current,d,e,{...this.options,duration:i,times:o,ease:a});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(gx(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:v}=this.options;u.set(Vu(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:c,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Sr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Sr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=yr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return di;const{animation:i}=t;gx(i,e)}return di}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:o,type:a,ease:c,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:v,element:m,...x}=this.options,M=new Hu({...x,keyframes:i,duration:o,type:a,ease:c,times:u,isGenerator:!0}),T=yr(this.time);h.setWithVelocity(M.sample(T-Eu).value,M.sample(T).value,Eu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:o,repeatType:a,damping:c,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return g3()&&i&&p3.has(i)&&!d&&!h&&!o&&a!=="mirror"&&c!==0&&u!=="inertia"}}const S3={type:"spring",stiffness:500,damping:25,restSpeed:10},M3=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),w3={type:"keyframes",duration:.8},E3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},T3=(n,{keyframes:e})=>e.length>2?w3:Bs.has(n)?n.startsWith("scale")?M3(e[1]):S3:E3;function b3({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Mm=(n,e,t,i={},o,a)=>c=>{const u=lm(i,n)||{},d=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-yr(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:m=>{e.set(m),u.onUpdate&&u.onUpdate(m)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};b3(u)||(p={...p,...T3(n,p)}),p.duration&&(p.duration=yr(p.duration)),p.repeatDelay&&(p.repeatDelay=yr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(v=!0)),v&&!a&&e.get()!==void 0){const m=Vu(p.keyframes,u);if(m!==void 0)return Gt.update(()=>{p.onUpdate(m),p.onComplete()}),new WP([])}return!a&&Dx.supports(p)?new Dx(p):new Hu(p)};function A3({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function bS(n,e,{delay:t=0,transitionOverride:i,type:o}={}){var a;let{transition:c=n.getDefaultTransition(),transitionEnd:u,...d}=e;i&&(c=i);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const m=n.getValue(v,(a=n.latestValues[v])!==null&&a!==void 0?a:null),x=d[v];if(x===void 0||p&&A3(p,v))continue;const M={delay:t,...lm(c||{},v)};let T=!1;if(window.MotionHandoffAnimation){const y=Ky(n);if(y){const P=window.MotionHandoffAnimation(y,v,Gt);P!==null&&(M.startTime=P,T=!0)}}fp(n,v),m.start(Mm(v,m,x,n.shouldReduceMotion&&qy.has(v)?{type:!1}:M,n,T));const S=m.animation;S&&h.push(S)}return u&&Promise.all(h).then(()=>{Gt.update(()=>{u&&r2(n,u)})}),h}function _p(n,e,t={}){var i;const o=zu(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const c=o?()=>Promise.all(bS(n,o,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:m}=a;return C3(n,e,p+h,v,m,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,p]=d==="beforeChildren"?[c,u]:[u,c];return h().then(()=>p())}else return Promise.all([c(),u(t.delay)])}function C3(n,e,t=0,i=0,o=1,a){const c=[],u=(n.variantChildren.size-1)*i,d=o===1?(h=0)=>h*i:(h=0)=>u-h*i;return Array.from(n.variantChildren).sort(R3).forEach((h,p)=>{h.notify("AnimationStart",e),c.push(_p(h,e,{...a,delay:t+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function R3(n,e){return n.sortNodePosition(e)}function P3(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>_p(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=_p(n,e,t);else{const o=typeof e=="function"?zu(n,e,t.custom):e;i=Promise.all(bS(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const L3=Kp.length;function AS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?AS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<L3;t++){const i=Kp[t],o=n.props[i];(al(o)||o===!1)&&(e[i]=o)}return e}const D3=[...$p].reverse(),N3=$p.length;function I3(n){return e=>Promise.all(e.map(({animation:t,options:i})=>P3(n,t,i)))}function U3(n){let e=I3(n),t=Nx(),i=!0;const o=d=>(h,p)=>{var v;const m=zu(n,p,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(m){const{transition:x,transitionEnd:M,...T}=m;h={...h,...T,...M}}return h};function a(d){e=d(n)}function c(d){const{props:h}=n,p=AS(n.parent)||{},v=[],m=new Set;let x={},M=1/0;for(let S=0;S<N3;S++){const y=D3[S],P=t[y],F=h[y]!==void 0?h[y]:p[y],C=al(F),R=y===d?P.isActive:null;R===!1&&(M=S);let L=F===p[y]&&F!==h[y]&&C;if(L&&i&&n.manuallyAnimateOnMount&&(L=!1),P.protectedKeys={...x},!P.isActive&&R===null||!F&&!P.prevProp||ku(F)||typeof F=="boolean")continue;const O=F3(P.prevProp,F);let E=O||y===d&&P.isActive&&!L&&C||S>M&&C,D=!1;const B=Array.isArray(F)?F:[F];let G=B.reduce(o(y),{});R===!1&&(G={});const{prevResolvedValues:$={}}=P,ie={...$,...G},H=J=>{E=!0,m.has(J)&&(D=!0,m.delete(J)),P.needsAnimating[J]=!0;const Z=n.getValue(J);Z&&(Z.liveStyle=!1)};for(const J in ie){const Z=G[J],Q=$[J];if(x.hasOwnProperty(J))continue;let K=!1;cp(Z)&&cp(Q)?K=!zy(Z,Q):K=Z!==Q,K?Z!=null?H(J):m.add(J):Z!==void 0&&m.has(J)?H(J):P.protectedKeys[J]=!0}P.prevProp=F,P.prevResolvedValues=G,P.isActive&&(x={...x,...G}),i&&n.blockInitialAnimation&&(E=!1),E&&(!(L&&O)||D)&&v.push(...B.map(J=>({animation:J,options:{type:y}})))}if(m.size){const S={};m.forEach(y=>{const P=n.getBaseTarget(y),F=n.getValue(y);F&&(F.liveStyle=!0),S[y]=P??null}),v.push({animation:S})}let T=!!v.length;return i&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),i=!1,T?e(v):Promise.resolve()}function u(d,h){var p;if(t[d].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(m=>{var x;return(x=m.animationState)===null||x===void 0?void 0:x.setActive(d,h)}),t[d].isActive=h;const v=c(d);for(const m in t)t[m].protectedKeys={};return v}return{animateChanges:c,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=Nx(),i=!0}}}function F3(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!zy(e,n):!1}function As(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nx(){return{animate:As(!0),whileInView:As(),whileHover:As(),whileTap:As(),whileDrag:As(),whileFocus:As(),exit:As()}}class rs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class O3 extends rs{constructor(e){super(e),e.animationState||(e.animationState=U3(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ku(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let k3=0;class B3 extends rs{constructor(){super(...arguments),this.id=k3++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const z3={animation:{Feature:O3},exit:{Feature:B3}};function ul(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function _l(n){return{point:{x:n.pageX,y:n.pageY}}}const V3=n=>e=>dm(e)&&n(e,_l(e));function Qa(n,e,t,i){return ul(n,e,V3(t),i)}const Ix=(n,e)=>Math.abs(n-e);function H3(n,e){const t=Ix(n.x,e.x),i=Ix(n.y,e.y);return Math.sqrt(t**2+i**2)}class CS{constructor(e,t,{transformPagePoint:i,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=ph(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,x=H3(v.offset,{x:0,y:0})>=3;if(!m&&!x)return;const{point:M}=v,{timestamp:T}=En;this.history.push({...M,timestamp:T});const{onStart:S,onMove:y}=this.handlers;m||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,v)},this.handlePointerMove=(v,m)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=hh(m,this.transformPagePoint),Gt.update(this.updatePoint,!0)},this.handlePointerUp=(v,m)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=ph(v.type==="pointercancel"?this.lastMoveEventInfo:hh(m,this.transformPagePoint),this.history);this.startEvent&&x&&x(v,S),M&&M(v,S)},!dm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.contextWindow=o||window;const c=_l(e),u=hh(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=En;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,ph(u,this.history)),this.removeListeners=xl(Qa(this.contextWindow,"pointermove",this.handlePointerMove),Qa(this.contextWindow,"pointerup",this.handlePointerUp),Qa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ns(this.updatePoint)}}function hh(n,e){return e?{point:e(n.point)}:n}function Ux(n,e){return{x:n.x-e.x,y:n.y-e.y}}function ph({point:n},e){return{point:n,delta:Ux(n,RS(e)),offset:Ux(n,G3(e)),velocity:W3(e,.1)}}function G3(n){return n[0]}function RS(n){return n[n.length-1]}function W3(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=RS(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>yr(e)));)t--;if(!i)return{x:0,y:0};const a=Sr(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const PS=1e-4,X3=1-PS,j3=1+PS,LS=.01,Y3=0-LS,q3=0+LS;function fi(n){return n.max-n.min}function $3(n,e,t){return Math.abs(n-e)<=t}function Fx(n,e,t,i=.5){n.origin=i,n.originPoint=tn(e.min,e.max,n.origin),n.scale=fi(t)/fi(e),n.translate=tn(t.min,t.max,n.origin)-n.originPoint,(n.scale>=X3&&n.scale<=j3||isNaN(n.scale))&&(n.scale=1),(n.translate>=Y3&&n.translate<=q3||isNaN(n.translate))&&(n.translate=0)}function Ja(n,e,t,i){Fx(n.x,e.x,t.x,i?i.originX:void 0),Fx(n.y,e.y,t.y,i?i.originY:void 0)}function Ox(n,e,t){n.min=t.min+e.min,n.max=n.min+fi(e)}function K3(n,e,t){Ox(n.x,e.x,t.x),Ox(n.y,e.y,t.y)}function kx(n,e,t){n.min=e.min-t.min,n.max=n.min+fi(e)}function el(n,e,t){kx(n.x,e.x,t.x),kx(n.y,e.y,t.y)}function Z3(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?tn(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?tn(t,n,i.max):Math.min(n,t)),n}function Bx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function Q3(n,{top:e,left:t,bottom:i,right:o}){return{x:Bx(n.x,t,o),y:Bx(n.y,e,i)}}function zx(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function J3(n,e){return{x:zx(n.x,e.x),y:zx(n.y,e.y)}}function eL(n,e){let t=.5;const i=fi(n),o=fi(e);return o>i?t=Bo(e.min,e.max-i,n.min):i>o&&(t=Bo(n.min,n.max-o,e.min)),wr(0,1,t)}function tL(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const yp=.35;function nL(n=yp){return n===!1?n=0:n===!0&&(n=yp),{x:Vx(n,"left","right"),y:Vx(n,"top","bottom")}}function Vx(n,e,t){return{min:Hx(n,e),max:Hx(n,t)}}function Hx(n,e){return typeof n=="number"?n:n[e]||0}const Gx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Lo=()=>({x:Gx(),y:Gx()}),Wx=()=>({min:0,max:0}),un=()=>({x:Wx(),y:Wx()});function wi(n){return[n("x"),n("y")]}function DS({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function iL({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function rL(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function mh(n){return n===void 0||n===1}function Sp({scale:n,scaleX:e,scaleY:t}){return!mh(n)||!mh(e)||!mh(t)}function Cs(n){return Sp(n)||NS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function NS(n){return Xx(n.x)||Xx(n.y)}function Xx(n){return n&&n!=="0%"}function Tu(n,e,t){const i=n-t,o=e*i;return t+o}function jx(n,e,t,i,o){return o!==void 0&&(n=Tu(n,o,i)),Tu(n,t,i)+e}function Mp(n,e=0,t=1,i,o){n.min=jx(n.min,e,t,i,o),n.max=jx(n.max,e,t,i,o)}function IS(n,{x:e,y:t}){Mp(n.x,e.translate,e.scale,e.originPoint),Mp(n.y,t.translate,t.scale,t.originPoint)}const Yx=.999999999999,qx=1.0000000000001;function sL(n,e,t,i=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&No(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,IS(n,c)),i&&Cs(a.latestValues)&&No(n,a.latestValues))}e.x<qx&&e.x>Yx&&(e.x=1),e.y<qx&&e.y>Yx&&(e.y=1)}function Do(n,e){n.min=n.min+e,n.max=n.max+e}function $x(n,e,t,i,o=.5){const a=tn(n.min,n.max,o);Mp(n,e,t,a,i)}function No(n,e){$x(n.x,e.x,e.scaleX,e.scale,e.originX),$x(n.y,e.y,e.scaleY,e.scale,e.originY)}function US(n,e){return DS(rL(n.getBoundingClientRect(),e))}function oL(n,e,t){const i=US(n,t),{scroll:o}=e;return o&&(Do(i.x,o.offset.x),Do(i.y,o.offset.y)),i}const FS=({current:n})=>n?n.ownerDocument.defaultView:null,aL=new WeakMap;class lL{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=un(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(_l(p).point)},a=(p,v)=>{const{drag:m,dragPropagation:x,onDragStart:M}=this.getProps();if(m&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=JP(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wi(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Ji.test(y)){const{projection:P}=this.visualElement;if(P&&P.layout){const F=P.layout.layoutBox[S];F&&(y=fi(F)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&Gt.postRender(()=>M(p,v)),fp(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},c=(p,v)=>{const{dragPropagation:m,dragDirectionLock:x,onDirectionLock:M,onDrag:T}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:S}=v;if(x&&this.currentDirection===null){this.currentDirection=cL(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),T&&T(p,v)},u=(p,v)=>this.stop(p,v),d=()=>wi(p=>{var v;return this.getAnimationState(p)==="paused"&&((v=this.getAxisMotionValue(p).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new CS(e,{onSessionStart:o,onStart:a,onMove:c,onSessionEnd:u,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:FS(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Gt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!Jc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=Z3(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Ro(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=Q3(o.layoutBox,t):this.constraints=!1,this.elastic=nL(i),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&wi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=tL(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ro(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=oL(i,o.root,this.visualElement.getTransformPagePoint());let c=J3(o.layout.layoutBox,a);if(t){const u=t(iL(c));this.hasMutatedConstraints=!!u,u&&(c=DS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=wi(p=>{if(!Jc(p,t,this.currentDirection))return;let v=d&&d[p]||{};c&&(v={min:0,max:0});const m=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:i?e[p]:0,bounceStiffness:m,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return fp(this.visualElement,e),i.start(Mm(e,i,0,t,this.visualElement,!1))}stopAnimation(){wi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){wi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),o=i[t];return o||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){wi(t=>{const{drag:i}=this.getProps();if(!Jc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];a.set(e[t]-tn(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Ro(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};wi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=eL({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),wi(c=>{if(!Jc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(tn(d,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;aL.set(this.visualElement,this);const e=this.visualElement.current,t=Qa(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),i=()=>{const{dragConstraints:d}=this.getProps();Ro(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Gt.read(i);const c=ul(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(wi(p=>{const v=this.getAxisMotionValue(p);v&&(this.originPoint[p]+=d[p].translate,v.set(v.get()+d[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=yp,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function Jc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function cL(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class uL extends rs{constructor(e){super(e),this.removeGroupControls=di,this.removeListeners=di,this.controls=new lL(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||di}unmount(){this.removeGroupControls(),this.removeListeners()}}const Kx=n=>(e,t)=>{n&&Gt.postRender(()=>n(e,t))};class dL extends rs{constructor(){super(...arguments),this.removePointerDownListener=di}onPointerDown(e){this.session=new CS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:FS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Kx(e),onStart:Kx(t),onMove:i,onEnd:(a,c)=>{delete this.session,o&&Gt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Qa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ka={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ot.test(n))n=parseFloat(n);else return n;const t=Zx(n,e.target.x),i=Zx(n,e.target.y);return`${t}% ${i}%`}},fL={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=is.parse(n);if(o.length>5)return i;const a=is.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=tn(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};class hL extends _e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;DP(pL),a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,c=i.projection;return c&&(c.isPresent=a,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Gt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Qp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function OS(n){const[e,t]=yy(),i=_e.useContext(Xp);return I.jsx(hL,{...n,layoutGroup:i,switchLayoutGroup:_e.useContext(Ay),isPresent:e,safeToRemove:t})}const pL={borderRadius:{...ka,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ka,borderTopRightRadius:ka,borderBottomLeftRadius:ka,borderBottomRightRadius:ka,boxShadow:fL};function mL(n,e,t){const i=Tn(n)?n:Vo(n);return i.start(Mm("",i,e,t)),i.animation}function gL(n){return n instanceof SVGElement&&n.tagName!=="svg"}const vL=(n,e)=>n.depth-e.depth;class xL{constructor(){this.children=[],this.isDirty=!1}add(e){fm(this.children,e),this.isDirty=!0}remove(e){hm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(vL),this.isDirty=!1,this.children.forEach(e)}}function _L(n,e){const t=er.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(ns(i),n(a-e))};return Gt.read(i,!0),()=>ns(i)}const kS=["TopLeft","TopRight","BottomLeft","BottomRight"],yL=kS.length,Qx=n=>typeof n=="string"?parseFloat(n):n,Jx=n=>typeof n=="number"||ot.test(n);function SL(n,e,t,i,o,a){o?(n.opacity=tn(0,t.opacity!==void 0?t.opacity:1,ML(i)),n.opacityExit=tn(e.opacity!==void 0?e.opacity:1,0,wL(i))):a&&(n.opacity=tn(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let c=0;c<yL;c++){const u=`border${kS[c]}Radius`;let d=e_(e,u),h=e_(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Jx(d)===Jx(h)?(n[u]=Math.max(tn(Qx(d),Qx(h),i),0),(Ji.test(h)||Ji.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=tn(e.rotate||0,t.rotate||0,i))}function e_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const ML=BS(0,.5,iS),wL=BS(.5,.95,di);function BS(n,e,t){return i=>i<n?0:i>e?1:t(Bo(n,e,i))}function t_(n,e){n.min=e.min,n.max=e.max}function Mi(n,e){t_(n.x,e.x),t_(n.y,e.y)}function n_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function i_(n,e,t,i,o){return n-=e,n=Tu(n,1/t,i),o!==void 0&&(n=Tu(n,1/o,i)),n}function EL(n,e=0,t=1,i=.5,o,a=n,c=n){if(Ji.test(e)&&(e=parseFloat(e),e=tn(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=tn(a.min,a.max,i);n===a&&(u-=e),n.min=i_(n.min,e,t,u,o),n.max=i_(n.max,e,t,u,o)}function r_(n,e,[t,i,o],a,c){EL(n,e[t],e[i],e[o],e.scale,a,c)}const TL=["x","scaleX","originX"],bL=["y","scaleY","originY"];function s_(n,e,t,i){r_(n.x,e,TL,t?t.x:void 0,i?i.x:void 0),r_(n.y,e,bL,t?t.y:void 0,i?i.y:void 0)}function o_(n){return n.translate===0&&n.scale===1}function zS(n){return o_(n.x)&&o_(n.y)}function a_(n,e){return n.min===e.min&&n.max===e.max}function AL(n,e){return a_(n.x,e.x)&&a_(n.y,e.y)}function l_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function VS(n,e){return l_(n.x,e.x)&&l_(n.y,e.y)}function c_(n){return fi(n.x)/fi(n.y)}function u_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class CL{constructor(){this.members=[]}add(e){fm(this.members,e),e.scheduleRender()}remove(e){if(hm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let i;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function RL(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:v,rotateY:m,skewX:x,skewY:M}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),v&&(i+=`rotateX(${v}deg) `),m&&(i+=`rotateY(${m}deg) `),x&&(i+=`skewX(${x}deg) `),M&&(i+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(i+=`scale(${u}, ${d})`),i||"none"}const Rs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Wa=typeof window<"u"&&window.MotionDebug!==void 0,gh=["","X","Y","Z"],PL={visibility:"hidden"},d_=1e3;let LL=0;function vh(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function HS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Ky(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Gt,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&HS(i)}function GS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=LL++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wa&&(Rs.totalNodes=Rs.resolvedTargetDeltas=Rs.recalculatedProjection=0),this.nodes.forEach(IL),this.nodes.forEach(BL),this.nodes.forEach(zL),this.nodes.forEach(UL),Wa&&window.MotionDebug.record(Rs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new xL)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new pm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=gL(c),this.instance=c;const{layoutId:d,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const m=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=_L(m,250),cu.hasAnimatedSinceResize&&(cu.hasAnimatedSinceResize=!1,this.nodes.forEach(h_))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeTargetChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||XL,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=p.getProps(),P=!this.targetLayout||!VS(this.targetLayout,M)||x,F=!m&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||F||m&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,F);const C={...lm(T,"layout"),onPlay:S,onComplete:y};(p.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else m||h_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ns(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(VL),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&HS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(f_);return}this.isUpdating||this.nodes.forEach(OL),this.isUpdating=!1,this.nodes.forEach(kL),this.nodes.forEach(DL),this.nodes.forEach(NL),this.clearAllSnapshots();const u=er.now();En.delta=wr(0,1e3/60,u-En.timestamp),En.timestamp=u,En.isProcessing=!0,ah.update.process(En),ah.preRender.process(En),ah.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(FL),this.sharedNodes.forEach(HL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=un(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!zS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&(u||Cs(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),jL(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:u}=this.options;if(!u)return un();const d=u.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(YL))){const{scroll:p}=this.root;p&&(Do(d.x,p.offset.x),Do(d.y,p.offset.y))}return d}removeElementScroll(c){var u;const d=un();if(Mi(d,c),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return d;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:m}=p;p!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&Mi(d,c),Do(d.x,v.offset.x),Do(d.y,v.offset.y))}return d}applyTransform(c,u=!1){const d=un();Mi(d,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&No(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Cs(p.latestValues)&&No(d,p.latestValues)}return Cs(this.latestValues)&&No(d,this.latestValues),d}removeTransform(c){const u=un();Mi(u,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Cs(h.latestValues))continue;Sp(h.latestValues)&&h.updateSnapshot();const p=un(),v=h.measurePageBox();Mi(p,v),s_(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Cs(this.latestValues)&&s_(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var u;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=En.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=un(),this.relativeTargetOrigin=un(),el(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=un(),this.targetWithTransforms=un()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),K3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Mi(this.target,this.layout.layoutBox),IS(this.target,this.targetDelta)):Mi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=un(),this.relativeTargetOrigin=un(),el(this.relativeTargetOrigin,this.target,x.target),Mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wa&&Rs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sp(this.parent.latestValues)||NS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===En.timestamp&&(h=!1),h)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;Mi(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,x=this.treeScale.y;sL(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=un());const{target:M}=u;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(n_(this.prevProjectionDelta.x,this.projectionDelta.x),n_(this.prevProjectionDelta.y,this.projectionDelta.y)),Ja(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==x||!u_(this.projectionDelta.x,this.prevProjectionDelta.x)||!u_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Wa&&Rs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Lo(),this.projectionDelta=Lo(),this.projectionDeltaWithTransform=Lo()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},v=Lo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const m=un(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=x!==M,S=this.getStack(),y=!S||S.members.length<=1,P=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(WL));this.animationProgress=0;let F;this.mixTargetDelta=C=>{const R=C/1e3;p_(v.x,c.x,R),p_(v.y,c.y,R),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(el(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),GL(this.relativeTarget,this.relativeTargetOrigin,m,R),F&&AL(this.relativeTarget,F)&&(this.isProjectionDirty=!1),F||(F=un()),Mi(F,this.relativeTarget)),T&&(this.animationValues=p,SL(p,h,this.latestValues,R,P,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ns(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Gt.update(()=>{cu.hasAnimatedSinceResize=!0,this.currentAnimation=mL(0,d_,{...c,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(d_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&WS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||un();const v=fi(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const m=fi(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+m}Mi(u,d),No(u,p),Ja(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new CL),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&vh("z",c,h,this.animationValues);for(let p=0;p<gh.length;p++)vh(`rotate${gh[p]}`,c,h,this.animationValues),vh(`skew${gh[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){var u,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return PL;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=au(c==null?void 0:c.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=au(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Cs(this.latestValues)&&(T.transform=p?p({},""):"none",this.hasProjected=!1),T}const m=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=RL(this.projectionDeltaWithTransform,this.treeScale,m),p&&(h.transform=p(m,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(u=m.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:h.opacity=v===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const T in yu){if(m[T]===void 0)continue;const{correct:S,applyTo:y}=yu[T],P=h.transform==="none"?m[T]:S(m[T],v);if(y){const F=y.length;for(let C=0;C<F;C++)h[y[C]]=P}else h[T]=P}return this.options.layoutId&&(h.pointerEvents=v===this?au(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(f_),this.root.sharedNodes.clear()}}}function DL(n){n.updateLayout()}function NL(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=t.source!==n.layout.source;a==="size"?wi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],x=fi(m);m.min=i[v].min,m.max=m.min+x}):WS(a,t.layoutBox,i)&&wi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],x=fi(i[v]);m.max=m.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+x)});const u=Lo();Ja(u,i,t.layoutBox);const d=Lo();c?Ja(d,n.applyTransform(o,!0),t.measuredBox):Ja(d,i,t.layoutBox);const h=!zS(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:x}=v;if(m&&x){const M=un();el(M,t.layoutBox,m.layoutBox);const T=un();el(T,i,x.layoutBox),VS(M,T)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function IL(n){Wa&&Rs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function UL(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function FL(n){n.clearSnapshot()}function f_(n){n.clearMeasurements()}function OL(n){n.isLayoutDirty=!1}function kL(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function h_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function BL(n){n.resolveTargetDelta()}function zL(n){n.calcProjection()}function VL(n){n.resetSkewAndRotation()}function HL(n){n.removeLeadSnapshot()}function p_(n,e,t){n.translate=tn(e.translate,0,t),n.scale=tn(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function m_(n,e,t,i){n.min=tn(e.min,t.min,i),n.max=tn(e.max,t.max,i)}function GL(n,e,t,i){m_(n.x,e.x,t.x,i),m_(n.y,e.y,t.y,i)}function WL(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const XL={duration:.45,ease:[.4,0,.1,1]},g_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),v_=g_("applewebkit/")&&!g_("chrome/")?Math.round:di;function x_(n){n.min=v_(n.min),n.max=v_(n.max)}function jL(n){x_(n.x),x_(n.y)}function WS(n,e,t){return n==="position"||n==="preserve-aspect"&&!$3(c_(e),c_(t),.2)}function YL(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const qL=GS({attachResizeListener:(n,e)=>ul(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),xh={current:void 0},XS=GS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!xh.current){const n=new qL({});n.mount(window),n.setOptions({layoutScroll:!0}),xh.current=n}return xh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),$L={pan:{Feature:dL},drag:{Feature:uL,ProjectionNode:XS,MeasureLayout:OS}};function __(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&Gt.postRender(()=>a(e,_l(e)))}class KL extends rs{mount(){const{current:e}=this.node;e&&(this.unmount=qP(e,t=>(__(this.node,t,"Start"),i=>__(this.node,i,"End"))))}unmount(){}}class ZL extends rs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xl(ul(this.node.current,"focus",()=>this.onFocus()),ul(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function y_(n,e,t){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&Gt.postRender(()=>a(e,_l(e)))}class QL extends rs{mount(){const{current:e}=this.node;e&&(this.unmount=QP(e,t=>(y_(this.node,t,"Start"),(i,{success:o})=>y_(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const wp=new WeakMap,_h=new WeakMap,JL=n=>{const e=wp.get(n.target);e&&e(n)},eD=n=>{n.forEach(JL)};function tD({root:n,...e}){const t=n||document;_h.has(t)||_h.set(t,{});const i=_h.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(eD,{root:n,...e})),i[o]}function nD(n,e,t){const i=tD(e);return wp.set(n,t),i.observe(n),()=>{wp.delete(n),i.unobserve(n)}}const iD={some:0,all:1};class rD extends rs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:iD[o]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:v}=this.node.getProps(),m=h?p:v;m&&m(d)};return nD(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(sD(e,t))&&this.startObserver()}unmount(){}}function sD({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const oD={inView:{Feature:rD},tap:{Feature:QL},focus:{Feature:ZL},hover:{Feature:KL}},aD={layout:{ProjectionNode:XS,MeasureLayout:OS}},Ep={current:null},jS={current:!1};function lD(){if(jS.current=!0,!!jp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ep.current=n.matches;n.addListener(e),e()}else Ep.current=!1}const cD=[...vS,Bn,is],uD=n=>cD.find(gS(n)),S_=new WeakMap;function dD(n,e,t){for(const i in e){const o=e[i],a=t[i];if(Tn(o))n.addValue(i,o);else if(Tn(a))n.addValue(i,Vo(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,Vo(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const M_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class fD{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ym,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=er.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Gt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:p}=c;this.onUpdate=p,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=Bu(t),this.isVariantNode=Ty(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in m){const M=m[x];d[x]!==void 0&&Tn(M)&&M.set(d[x],!1)}}mount(e){this.current=e,S_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),jS.current||lD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ep.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){S_.delete(this.current),this.projection&&this.projection.unmount(),ns(this.notifyUpdate),ns(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Bs.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Gt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in zo){const t=zo[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):un()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<M_.length;i++){const o=M_[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=dD(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Vo(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(pS(o)||sS(o))?o=parseFloat(o):!uD(o)&&is.test(t)&&(o=dS(e,t)),this.setBaseTarget(e,Tn(o)?o.get():o)),Tn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=em(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Tn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new pm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class YS extends fD{constructor(){super(...arguments),this.KeyframeResolver=xS}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Tn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function hD(n){return window.getComputedStyle(n)}class pD extends YS{constructor(){super(...arguments),this.type="html",this.renderInstance=Iy}readValueFromInstance(e,t){if(Bs.has(t)){const i=_m(t);return i&&i.default||0}else{const i=hD(e),o=(Ly(t)?i.getPropertyValue(t):i[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return US(e,t)}build(e,t,i){im(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return am(e,t,i)}}class mD extends YS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=un}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Bs.has(t)){const i=_m(t);return i&&i.default||0}return t=Uy.has(t)?t:Zp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return ky(e,t,i)}build(e,t,i){rm(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,o){Fy(e,t,i,o)}mount(e){this.isSVGTag=om(e.tagName),super.mount(e)}}const gD=(n,e)=>Jp(n)?new mD(e):new pD(e,{allowProjection:n!==_e.Fragment}),vD=VP({...z3,...oD,...$L,...aD},gD),kt=nP(vD);function Tp(n){const e=Uu(()=>Vo(n)),{isStatic:t}=_e.useContext(ml);if(t){const[,i]=_e.useState(n);_e.useEffect(()=>e.on("change",i),[])}return e}function w_(n){return typeof n=="number"?n:parseFloat(n)}function E_(n,e={}){const{isStatic:t}=_e.useContext(ml),i=_e.useRef(null),o=Tp(Tn(n)?w_(n.get()):n),a=_e.useRef(o.get()),c=_e.useRef(()=>{}),u=()=>{const h=i.current;h&&h.time===0&&h.sample(En.delta),d(),i.current=h3({keyframes:[o.get(),a.current],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:c.current})},d=()=>{i.current&&i.current.stop()};return _e.useInsertionEffect(()=>o.attach((h,p)=>t?p(h):(a.current=h,c.current=p,Gt.update(u),o.get()),d),[JSON.stringify(e)]),Yp(()=>{if(Tn(n))return n.on("change",h=>o.set(w_(h)))},[o]),o}function xD(){const[n,e]=_e.useState(!1),[t,i]=_e.useState(!1),[o,a]=_e.useState(!1),c=Tp(-100),u=Tp(-100),d=E_(c,{stiffness:500,damping:35,mass:.3}),h=E_(u,{stiffness:500,damping:35,mass:.3});return _e.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const p='a, button, input, textarea, select, [role="button"]',v=S=>{c.set(S.clientX),u.set(S.clientY),e(!0)},m=S=>{const y=S.target;i(!!y.closest(p))},x=()=>a(!0),M=()=>a(!1),T=()=>e(!1);return window.addEventListener("mousemove",v),window.addEventListener("mouseover",m),window.addEventListener("mousedown",x),window.addEventListener("mouseup",M),window.addEventListener("mouseleave",T),()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mouseover",m),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",M),window.removeEventListener("mouseleave",T)}},[c,u]),typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches?null:I.jsxs("div",{className:"pointer-events-none fixed inset-0 z-[9999] overflow-hidden",children:[I.jsx(kt.div,{className:"absolute left-0 top-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-[2px]",style:{width:48,height:48,x:d,y:h,translateX:"-50%",translateY:"-50%"},animate:{scale:o?.8:t?1.6:1,opacity:n?1:0},transition:{type:"spring",stiffness:350,damping:25}}),I.jsx(kt.div,{className:"absolute left-0 top-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]",style:{width:6,height:6,x:c,y:u,translateX:"-50%",translateY:"-50%"},animate:{scale:o?.5:t?0:1,opacity:n?1:0},transition:{duration:.15}})]})}var T_="1.3.26";function qS(n,e,t){return Math.max(n,Math.min(e,t))}function _D(n,e,t){return(1-t)*n+t*e}function yD(n,e,t,i){return _D(n,e,1-Math.exp(-t*i))}function SD(n,e){return(n%e+e)%e}var MD=class{constructor(){Qe(this,"isRunning",!1);Qe(this,"value",0);Qe(this,"from",0);Qe(this,"to",0);Qe(this,"currentTime",0);Qe(this,"lerp");Qe(this,"duration");Qe(this,"easing");Qe(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=qS(0,this.currentTime/this.duration,1);e=i>=1;const o=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=yD(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:o,onStart:a,onUpdate:c}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function wD(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var ED=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Qe(this,"width",0);Qe(this,"height",0);Qe(this,"scrollHeight",0);Qe(this,"scrollWidth",0);Qe(this,"debouncedResize");Qe(this,"wrapperResizeObserver");Qe(this,"contentResizeObserver");Qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=wD(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$S=class{constructor(){Qe(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let o=0,a=t.length;o<a;o++)(i=t[o])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const TD=100/6,Yr={passive:!1};function b_(n,e){return n===1?TD:n===2?e:1}var bD=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Qe(this,"touchStart",{x:0,y:0});Qe(this,"lastDelta",{x:0,y:0});Qe(this,"window",{width:0,height:0});Qe(this,"emitter",new $S);Qe(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Qe(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:o},this.emitter.emit("scroll",{deltaX:i,deltaY:o,event:n})});Qe(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Qe(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const o=b_(i,this.window.width),a=b_(i,this.window.height);e*=o,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Yr),this.element.addEventListener("touchstart",this.onTouchStart,Yr),this.element.addEventListener("touchmove",this.onTouchMove,Yr),this.element.addEventListener("touchend",this.onTouchEnd,Yr)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Yr),this.element.removeEventListener("touchstart",this.onTouchStart,Yr),this.element.removeEventListener("touchmove",this.onTouchMove,Yr),this.element.removeEventListener("touchend",this.onTouchEnd,Yr)}};const A_=n=>Math.min(1,1.001-2**(-10*n));var AD=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:u,easing:d,lerp:h=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:m=v==="horizontal"?"both":"vertical",touchMultiplier:x=1,wheelMultiplier:M=1,autoResize:T=!0,prevent:S,virtualScroll:y,overscroll:P=!0,autoRaf:F=!1,anchors:C=!1,autoToggle:R=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:O=!1,naiveDimensions:E=O,stopInertiaOnNavigate:D=!1,respectReducedMotion:B=!0}={}){Qe(this,"_isScrolling",!1);Qe(this,"_isStopped",!1);Qe(this,"_isLocked",!1);Qe(this,"_preventNextNativeScrollEvent",!1);Qe(this,"_resetVelocityTimeout",null);Qe(this,"_rafId",null);Qe(this,"_isDraggingSelection",!1);Qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Qe(this,"isTouching");Qe(this,"isIos");Qe(this,"time",0);Qe(this,"userData",{});Qe(this,"lastVelocity",0);Qe(this,"velocity",0);Qe(this,"direction",0);Qe(this,"options");Qe(this,"targetScroll");Qe(this,"animatedScroll");Qe(this,"animate",new MD);Qe(this,"emitter",new $S);Qe(this,"dimensions");Qe(this,"virtualScroll");Qe(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Qe(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Qe(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(o=>t.host===o.host&&t.pathname===o.pathname&&o.hash);if(i){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(i.hash);this.scrollTo(a,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Qe(this,"onPointerDown",n=>{n.button===1&&this.reset()});Qe(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const o=i.type.includes("touch"),a=i.type.includes("wheel");if(o&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const c=e===0&&t===0;if(this.options.syncTouch&&o&&i.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(c||u)return;let d=i.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const h=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(d.find(M=>{var T,S,y,P,F;return M instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(M))||((T=M.hasAttribute)==null?void 0:T.call(M,"data-lenis-prevent"))||p==="vertical"&&((S=M.hasAttribute)==null?void 0:S.call(M,"data-lenis-prevent-vertical"))||p==="horizontal"&&((y=M.hasAttribute)==null?void 0:y.call(M,"data-lenis-prevent-horizontal"))||o&&((P=M.hasAttribute)==null?void 0:P.call(M,"data-lenis-prevent-touch"))||a&&((F=M.hasAttribute)==null?void 0:F.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let v=t;this.options.gestureOrientation==="both"?v=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const m=o&&this.options.syncTouch,x=o&&i.type==="touchend";x&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...m?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Qe(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=T_,window.lenis||(window.lenis={}),window.lenis.version=T_,v==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof u=="number"&&typeof d!="function"?d=A_:typeof d=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:c,duration:u,easing:d,lerp:h,infinite:p,gestureOrientation:m,orientation:v,touchMultiplier:x,wheelMultiplier:M,autoResize:T,prevent:S,virtualScroll:y,overscroll:P,autoRaf:F,anchors:C,autoToggle:R,allowNestedScroll:L,naiveDimensions:E,stopInertiaOnNavigate:D,respectReducedMotion:B},this.dimensions=new ED(n,e,{autoResize:T}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new bD(t,{touchMultiplier:x,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const o=i[0],a=i[i.length-1],c=40,u=Math.hypot(t.clientX-o.left,t.clientY-o.top)<=c,d=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=c;return u||d}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:o=!0,lerp:a=o?this.options.lerp:void 0,duration:c=o?this.options.duration:void 0,easing:u=o?this.options.easing:void 0,onStart:d,onComplete:h,force:p=!1,userData:v}={}){if(this.prefersReducedMotion&&(o?t=!0:(a=1,c=void 0,u=void 0)),(this.isStopped||this.isLocked)&&!p)return;let m=n,x=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let M=null;if(typeof m=="string"?(M=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),M||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(M=m),M){if(this.options.wrapper!==window){const C=this.rootElement.getBoundingClientRect();x-=this.isHorizontal?C.left:C.top}const T=M.getBoundingClientRect(),S=getComputedStyle(M),y=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),P=getComputedStyle(this.rootElement),F=this.isHorizontal?Number.parseFloat(P.scrollPaddingLeft):Number.parseFloat(P.scrollPaddingTop);m=(this.isHorizontal?T.left:T.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(F)?0:F)}}if(typeof m=="number"){if(m+=x,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const M=m-this.animatedScroll;M>this.limit/2?m-=this.limit:M<-this.limit/2&&(m+=this.limit)}}else m=qS(0,m,this.limit);if(m===this.targetScroll){d==null||d(this),h==null||h(this);return}if(this.userData=v??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=m),typeof c=="number"&&typeof u!="function"?u=A_:typeof u=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,m,{duration:c,easing:u,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(M,T)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),o&&(this.targetScroll=M),T||this.emit(),T&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const o=n._lenis;let a,c,u,d,h,p,v,m,x,M;if(i-(o.time??0)>2e3){o.time=Date.now();const L=window.getComputedStyle(n);if(o.computedStyle=L,a=["auto","overlay","scroll"].includes(L.overflowX),c=["auto","overlay","scroll"].includes(L.overflowY),h=["auto"].includes(L.overscrollBehaviorX),p=["auto"].includes(L.overscrollBehaviorY),o.hasOverflowX=a,o.hasOverflowY=c,!(a||c))return!1;v=n.scrollWidth,m=n.scrollHeight,x=n.clientWidth,M=n.clientHeight,u=v>x,d=m>M,o.isScrollableX=u,o.isScrollableY=d,o.scrollWidth=v,o.scrollHeight=m,o.clientWidth=x,o.clientHeight=M,o.hasOverscrollBehaviorX=h,o.hasOverscrollBehaviorY=p}else u=o.isScrollableX,d=o.isScrollableY,a=o.hasOverflowX,c=o.hasOverflowY,v=o.scrollWidth,m=o.scrollHeight,x=o.clientWidth,M=o.clientHeight,h=o.hasOverscrollBehaviorX,p=o.hasOverscrollBehaviorY;if(!(a&&u||c&&d))return!1;const T=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let S,y,P,F,C,R;if(T==="horizontal")S=Math.round(n.scrollLeft),y=v-x,P=e,F=a,C=u,R=h;else if(T==="vertical")S=Math.round(n.scrollTop),y=m-M,P=t,F=c,C=d,R=p;else return!1;return!R&&(S>=y||S<=0)?!0:(P>0?S<y:S>0)&&F&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?SD(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}},CD=class{constructor(n){Qe(this,"listeners",[]);this.state=n}set(n){this.state=n;for(const e of this.listeners)e(this.state)}subscribe(n){return this.listeners=[...this.listeners,n],()=>{this.listeners=this.listeners.filter(e=>e!==n)}}get(){return this.state}};const RD=_e.createContext(null),C_=new CD(null),PD=_e.forwardRef(({children:n,root:e=!1,options:t={},autoRaf:i=!0,className:o="",...a},c)=>{const u=_e.useRef(null),d=_e.useRef(null),[h,p]=_e.useState(void 0);_e.useImperativeHandle(c,()=>({wrapper:u.current,content:d.current,lenis:h}),[h]),_e.useEffect(()=>{const M=new AD({...t,...u.current&&d.current&&{wrapper:u.current,content:d.current},autoRaf:(t==null?void 0:t.autoRaf)??i});return p(M),()=>{M.destroy(),p(void 0)}},[i,JSON.stringify({...t,wrapper:null,content:null})]);const v=_e.useRef([]),m=_e.useCallback((M,T)=>{v.current.push({callback:M,priority:T}),v.current.sort((S,y)=>S.priority-y.priority)},[]),x=_e.useCallback(M=>{v.current=v.current.filter(T=>T.callback!==M)},[]);return _e.useEffect(()=>{if(e&&h)return C_.set({lenis:h,addCallback:m,removeCallback:x}),()=>C_.set(null)},[e,h,m,x]),_e.useEffect(()=>{if(!h)return;const M=T=>{for(const{callback:S}of v.current)S(T)};return h.on("scroll",M),()=>{h.off("scroll",M)}},[h]),n?I.jsx(RD.Provider,{value:{lenis:h,addCallback:m,removeCallback:x},children:e&&e!=="asChild"?n:I.jsx("div",{ref:u,className:`${o} ${(h==null?void 0:h.className)??""}`.trim(),...a,children:I.jsx("div",{ref:d,children:n})})}):null});function LD({children:n}){return _e.useEffect(()=>{const e=new Audio("/assets/interstellar.mp3");e.loop=!0,e.volume=.35,e.preload="auto";const t=()=>{e.paused&&e.play().catch(()=>{})};return window.addEventListener("click",t,{once:!0}),window.addEventListener("scroll",t,{once:!0}),()=>{e.pause(),e.currentTime=0,e.src="",window.removeEventListener("click",t),window.removeEventListener("scroll",t)}},[]),I.jsx(PD,{root:!0,options:{lerp:.08,smoothWheel:!0,infinite:!1},children:I.jsx("div",{className:"relative w-full bg-transparent text-white",children:I.jsx("div",{className:"relative z-20 w-full bg-transparent",children:n})})})}var KS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R_=Jr.createContext&&Jr.createContext(KS),DD=["attr","size","title"];function ND(n,e){if(n==null)return{};var t,i,o=ID(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function ID(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function bu(){return bu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},bu.apply(null,arguments)}function P_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function Au(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?P_(Object(t),!0).forEach(function(i){UD(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):P_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function UD(n,e,t){return(e=FD(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function FD(n){var e=OD(n,"string");return typeof e=="symbol"?e:e+""}function OD(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ZS(n){return n&&n.map((e,t)=>Jr.createElement(e.tag,Au({key:t},e.attr),ZS(e.child)))}function dn(n){return e=>Jr.createElement(kD,bu({attr:Au({},n.attr)},e),ZS(n.child))}function kD(n){var e=t=>{var{attr:i,size:o,title:a}=n,c=ND(n,DD),u=o||t.size||"1em",d;return t.className&&(d=t.className),n.className&&(d=(d?d+" ":"")+n.className),Jr.createElement("svg",bu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:d,style:Au(Au({color:n.color||t.color},t.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&Jr.createElement("title",null,a),n.children)};return R_!==void 0?Jr.createElement(R_.Consumer,null,t=>e(t)):e(KS)}function wm(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(n)}function QS(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(n)}function BD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"23 7 16 12 23 17 23 7"},child:[]},{tag:"rect",attr:{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"},child:[]}]})(n)}function zD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(n)}function JS(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"},child:[]}]})(n)}function L_(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(n)}function eM(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(n)}function VD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(n)}function tM(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(n)}function HD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(n)}function GD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(n)}function nM(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(n)}function WD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(n)}function iM(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(n)}function Em(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(n)}function XD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(n)}function jD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(n)}function YD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(n)}function qD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(n)}function $D(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(n)}function KD(n){return dn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(n)}const ZD=["AI/ML Engineer","Full-Stack Developer","AI Architect"],QD=[{label:"LinkedIn",href:"https://www.linkedin.com/in/himanshsharmaa"},{label:"GitHub",href:"https://github.com/himanshsharmaa"},{label:"Instagram",href:"https://www.instagram.com/himanshsharmaa"},{label:"X",href:"https://x.com/himanshsharmaa_"}],JD=[{label:"Years Experience",value:"3+"},{label:"Projects Built",value:"5+"},{label:"Certifications",value:"5"}],Qr={whatsapp:"https://wa.me/917678609018?text=Hi%20Himansh%2C%20I%20came%20from%20your%20developer%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",linkedin:"https://www.linkedin.com/in/himanshsharmaa",github:"https://github.com/himanshsharmaa",email:"himanshsharma046@gmail.com"},bp=[{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Timeline",href:"#timeline"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Testimonials",href:"#testimonials"},{label:"Contact",href:"#contact"}];function eN({activeSection:n,mobileMenuOpen:e,onToggleMobileMenu:t,onNavigate:i}){return I.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 bg-black/100 backdrop-blur-2xl border-b border-white/10",children:[I.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",children:[I.jsxs("a",{href:"#intro",onClick:o=>i(o,"#intro"),className:"group inline-flex items-center gap-3 text-sm font-bold tracking-[0.28em] text-white",children:[I.jsx("span",{className:"font-['Inter'] inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.05] text-gray-200 shadow-[0_0_40px_rgba(255,255,255,0.12)] transition group-hover:border-white/30 group-hover:bg-white/10",children:"HS"}),I.jsx("span",{className:"font-['Inter'] hidden text-gray-300 sm:inline",children:"HIMANSH SHARMA"})]}),I.jsx("nav",{className:"hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 backdrop-blur-md lg:flex",children:bp.map(o=>{const a=n===o.href.slice(1);return I.jsxs("a",{href:o.href,onClick:c=>i(c,o.href),className:`relative rounded-full px-4 py-2 text-sm font-medium transition ${a?"text-white":"text-gray-300 hover:text-white"}`,children:[a?I.jsx(kt.span,{layoutId:"nav-pill",className:"absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20",transition:{type:"spring",stiffness:500,damping:40}}):null,I.jsx("span",{className:"font-['Inter'] relative z-10",children:o.label})]},o.href)})}),I.jsx("button",{type:"button",onClick:t,className:"font-['Inter'] inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white lg:hidden","aria-label":"Toggle navigation","aria-expanded":e,children:e?I.jsx(QS,{className:"h-5 w-5"}):I.jsx(HD,{className:"h-5 w-5"})})]}),I.jsx(kt.div,{initial:!1,animate:e?{height:"auto",opacity:1}:{height:0,opacity:0},transition:{duration:.28,ease:"easeOut"},className:"overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl lg:hidden",children:I.jsx("div",{className:"mx-auto max-w-7xl px-4 py-4 sm:px-6",children:I.jsx("div",{className:"grid gap-2 rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md",children:bp.map(o=>{const a=n===o.href.slice(1);return I.jsx("a",{href:o.href,onClick:c=>i(c,o.href),className:`font-['Inter'] rounded-2xl px-4 py-3 text-sm font-medium transition ${a?"bg-white/10 text-white ring-1 ring-white/20":"text-gray-300 hover:bg-white/10 hover:text-white"}`,children:o.label},o.href)})})})})]})}const Ap=[{title:"Aura",subtitle:"Desktop Companion AI",problem:"Most desktop assistants feel mechanical and forgetful, which breaks trust and reduces daily use.",description:"Aura is a human-like AI companion that interacts naturally through voice, adapts to emotions, and evolves with the user. Powered by Whisper, Llama 2, Edge-TTS, and DeepFace for real-time speech recognition and expressive responses.",impact:"An experimental product with a strong personality and a clear AI product direction.",stack:["Python","Whisper","Llama 2","Edge-TTS","DeepFace","TensorFlow"],image:"/aura-preview.svg",githubUrl:"https://github.com/himanshsharmaa",demoUrl:null},{title:"Examify",subtitle:"Online Examination Portal",problem:"Educational teams needed a single place to manage classes, exams, and results without bouncing between tools.",description:"Built to emulate key features of Google Classroom, it offers seamless login, class joining via code, exam management, result processing, and user roles (RBAC).",impact:"Built to feel like a practical classroom operating system rather than a feature dump. Automated workflows drove a 70% increase in administrative efficiency.",stack:["PHP","MySQL","JavaScript","Tailwind CSS"],image:"/images/project/Examify.png",githubUrl:"https://github.com/himanshsharmaa/Examify?tab=readme-ov-file#-examify",demoUrl:"https://github.com/himanshsharmaa/Examify?tab=readme-ov-file#-examify"},{title:"Keplor",subtitle:"AI SaaS",problem:"Early-stage software companies need a crisp identity, quick launch velocity, and a path toward scalable AI products.",description:"Keplor is an AI SaaS company concept focused on intelligent, scalable, cloud-native software for creators, learners, and businesses.",impact:"A founder project that shows product thinking beyond code delivery.",stack:["React","Next.js","Tailwind CSS","Shadcn UI","Framer Motion","Vercel"],image:"/images/project/keplor.png",githubUrl:"https://github.com/himanshsharmaa/Keplor?tab=readme-ov-file#-keplor",demoUrl:"https://keplor.tech/"},{title:"DOT SHIP",subtitle:"Logistics Management Platform",problem:"Logistics platforms require flexible schema design and rapid data retrieval for real-time tracking.",description:"Built a comprehensive logistics platform facilitating real-time tracking and database management using MongoDB.",impact:"Delivered a robust architecture for real-time logistics tracking and management.",stack:["PHP","MongoDB","HTML5","CSS3","JavaScript"],image:"/images/project/project-image.png",githubUrl:"https://github.com/himanshsharmaa/DotShip",demoUrl:null}],rM=[{title:"Frontend",items:["React","Tailwind CSS","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","jQuery"]},{title:"Backend",items:["Python","Node.js","PHP","Express.js","REST APIs"]},{title:"Databases",items:["MySQL","MongoDB","SQLite"]},{title:"AI / ML",items:["TensorFlow","Keras","OpenCV","NumPy","Pandas","Scikit-learn","CNN","NLP","Computer Vision","YOLOv8","RAG","LLMs"]},{title:"Tools",items:["Git","GitHub","VS Code","Postman","Figma","Linux","JSON","AWS","IBM Cloud"]}],Xa=[{id:"experience",label:"Experience",items:[{year:"Feb 2026 - Jul 2026",title:"AI Software Intern",company:"ASTRA AI",description:"Selected to contribute to AI-driven software solutions. Engineered object detection pipelines, fine-tuning YOLOv8 models to identify traffic vulnerabilities. Optimized inference speed by 20%."},{year:"Aug 2025 - Dec 2025",title:"Open-Source Contributor",company:"GirlScript Summer of Code",description:"Contributed to open-source projects."},{year:"Jul 2025 - Aug 2025",title:"AI & Cloud Intern",company:"IBM / Edunet Foundation",description:"Selected for the prestigious AICTE IBM AI and Cloud Internship. Architected an AI conversational agent using the IBM Granite foundation model, reducing simulated query resolution time by 35%."},{year:"May 2025 - May 2026",title:"Media Team Co-Head",company:"GeeksforGeeks IKGPTU",description:"Directed digital PR campaigns and produced high-retention motion graphics, scaling organic social media engagement by 45%. Contributed to community events and workshops."},{year:"2024 - Present",title:"Founder",company:"Keplor Tech",description:"Leading product direction and execution for AI-first software solutions focused on practical user outcomes."},{year:"2023",title:"Freelance Dev",company:"Self-Employed",description:"Built and deployed billing and student management systems using Python, HTML, CSS, JavaScript, PHP, and SQL."}]},{id:"education",label:"Education",items:[{year:"Jul 2024 - Dec 2027",title:"B.Tech, Computer Science",company:"I. K. Gujral Punjab Technical University (IKGPTU)",description:"Grade: 7.5. Focusing on AI, Machine Learning, and software development."},{year:"Oct 2021 - Jul 2024",title:"Diploma, Computer Engineering",company:"Government Polytechnic Nilokheri",description:"Grade: 7. Led a team project on Web Platform Development."}]},{id:"certifications",label:"Certifications",items:[{year:"Jul 2025",title:"Artificial Intelligence",company:"IBM / Edunet Foundation",description:""},{year:"Jul 2025",title:"Cloud Computing",company:"IBM / Edunet Foundation",description:""},{year:"Dec 2024",title:"AWS Educate Machine Learning Foundations",company:"Amazon Web Services (AWS)",description:""},{year:"Dec 2024",title:"AWS APAC - Solutions Architecture Job Simulation",company:"Amazon Web Services (AWS)",description:""},{year:"Aug 2023",title:"Programming in C and Python",company:"Delhi Institute of Computer Sciences - DICS",description:""}]}],tN=["What services does Himansh offer?","Show me featured projects","What is his tech stack?","How can I contact him?"];function qr(n,e){const t=n.toLowerCase().replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),i=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=(a,c)=>{const u=Array.from({length:a.length+1},(d,h)=>[h]);for(let d=0;d<=c.length;d++)u[0][d]=d;for(let d=1;d<=a.length;d++)for(let h=1;h<=c.length;h++){const p=a[d-1]===c[h-1]?0:1;u[d][h]=Math.min(u[d-1][h]+1,u[d][h-1]+1,u[d-1][h-1]+p)}return u[a.length][c.length]};return e.some(a=>{const c=a.toLowerCase().trim();return c?c.includes(" ")?t.includes(c):new RegExp(`\\b${i(c)}\\b`).test(t)?!0:t.split(" ").some(d=>o(d,c)<=1):!1})}function nN(){const n=Xa.find(e=>e.id==="experience");return n?n.items.slice(0,2):[]}function iN(n){const e=n.toLowerCase().trim(),t=e.replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),i=t?t.split(" ").length:0;if(!e)return{text:"Ask me anything about Himansh: projects, skills, experience, or how to work together."};if(i<=4&&qr(t,["hello","hi","hey"]))return{text:"Hi! I am Himansh's portfolio assistant. I can help you explore projects, skills, experience, and contact options."};if(qr(e,["service","hire","work with","collaboration","freelance"]))return{text:"Himansh works on full-stack product development, AI-powered features, and end-to-end web applications for startups and teams.",actions:[{label:"View Projects",href:"#projects",external:!1},{label:"Contact Himansh",href:"#contact",external:!1}]};if(qr(e,["project","portfolio","case study"]))return{text:`Here are featured projects:
${Ap.slice(0,3).map(c=>`- ${c.title}: ${c.subtitle}`).join(`
`)}`,actions:[{label:"Go To Projects",href:"#projects",external:!1},{label:"GitHub Profile",href:Qr.github,external:!0}]};const o=Ap.find(a=>qr(a.title,[e]));if(o)return{text:`**${o.title}**
${o.description}

Stack: ${o.stack.join(", ")}`,actions:[{label:"View Demo",href:o.demoUrl??"#",external:!0},{label:"GitHub",href:o.githubUrl,external:!0}]};if(qr(e,["skill","stack","technology","tech"]))return{text:`Core stack overview:
${rM.slice(0,3).map(c=>`${c.title}: ${c.items.slice(0,4).join(", ")}`).join(`
`)}`,actions:[{label:"Open Skills",href:"#skills",external:!1}]};if(qr(e,["experience","journey","education","timeline","background"])){const a=nN().map(c=>`- ${c.year}: ${c.title} at ${c.company}`).join(`
`);return{text:a?`Quick background highlights:
${a}`:"You can find work and education details in the Experience section.",actions:[{label:"View Experience",href:"#experience",external:!1}]}}return qr(e,["resume","cv"])?{text:"You can view or download Himansh's latest resume here.",actions:[{label:"Open Resume",href:"/Resume.pdf",external:!0}]}:qr(e,["contact","email","whatsapp","linkedin","reach"])?{text:`Best ways to reach Himansh:
- WhatsApp for quick discussion
- LinkedIn for professional outreach
- Email: ${Qr.email}`,actions:[{label:"WhatsApp",href:Qr.whatsapp,external:!0},{label:"LinkedIn",href:Qr.linkedin,external:!0},{label:"Contact Section",href:"#contact",external:!1}]}:{text:'I can help with projects, skills, experience, resume, and contact details. Try asking: "What services does he offer?"'}}function rN(){const[n,e]=_e.useState(!1),[t,i]=_e.useState(""),[o,a]=_e.useState(!1),[c,u]=_e.useState([{id:1,role:"assistant",text:"Hi, I am Himansh's portfolio assistant. Ask me anything about his work, skills, or availability."}]),d=_e.useRef(null),h=_e.useMemo(()=>tN,[]);_e.useEffect(()=>{var v;n&&((v=d.current)==null||v.scrollIntoView({behavior:"smooth",block:"end"}))},[c,n]);const p=v=>{const m=v.trim();if(!m||o)return;const x={id:Date.now(),role:"user",text:m};u(T=>[...T,x]),i(""),a(!0);const M=iN(m);window.setTimeout(()=>{u(T=>[...T,{id:Date.now()+1,role:"assistant",text:M.text,actions:M.actions}]),a(!1)},420)};return I.jsxs("div",{className:"fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6",children:[n?I.jsxs("div",{className:"glass-card w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10",children:[I.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3",children:[I.jsxs("div",{children:[I.jsx("p",{className:"font-['Inter'] text-sm font-semibold text-white",children:"Portfolio Assistant"}),I.jsx("p",{className:"font-['Inter'] text-xs text-gray-300",children:"Replies on behalf of Himansh"})]}),I.jsx("button",{type:"button",onClick:()=>e(!1),className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-white/30 hover:text-white","aria-label":"Close assistant",children:I.jsx(QS,{className:"h-4 w-4"})})]}),I.jsxs("div",{className:"max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4",children:[c.map(v=>{var m;return I.jsxs("div",{children:[I.jsx("div",{className:`w-fit max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${v.role==="assistant"?"border border-white/10 bg-white/5 text-gray-300":"ml-auto bg-white/10 text-white"}`,children:v.text}),v.role==="assistant"&&((m=v.actions)!=null&&m.length)?I.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:v.actions.map(x=>I.jsx("a",{href:x.href,target:x.external?"_blank":void 0,rel:x.external?"noreferrer":void 0,className:"rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:x.label},`${v.id}-${x.label}`))}):null]},v.id)}),o?I.jsx("p",{className:"font-['Inter'] text-xs text-gray-400",children:"Assistant is typing..."}):null,I.jsx("div",{ref:d})]}),I.jsxs("div",{className:"border-t border-white/10 px-4 py-3",children:[I.jsx("div",{className:"mb-3 flex flex-wrap gap-2",children:h.map(v=>I.jsx("button",{type:"button",onClick:()=>p(v),className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:v},v))}),I.jsxs("form",{onSubmit:v=>{v.preventDefault(),p(t)},className:"flex items-center gap-2",children:[I.jsx("input",{value:t,onChange:v=>i(v.target.value),placeholder:"Ask about projects, skills, or contact",className:"input-focus w-full box-border rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5 font-['Inter'] text-sm text-white placeholder:text-gray-400","aria-label":"Type your message"}),I.jsx("button",{type:"submit",className:"font-['Inter'] inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20","aria-label":"Send message",children:I.jsx(eM,{className:"h-4 w-4"})})]})]})]}):null,I.jsx("button",{type:"button",onClick:()=>e(v=>!v),className:"mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition hover:bg-white/20","aria-label":"Open portfolio assistant",children:I.jsx(tM,{className:"h-6 w-6"})})]})}function sN(n){const[e,t]=_e.useState(n[0]);return _e.useEffect(()=>{const i=n.map(a=>document.getElementById(a)).filter(Boolean);if(!i.length)return;const o=new IntersectionObserver(a=>{var u;const c=a.filter(d=>d.isIntersecting).sort((d,h)=>h.intersectionRatio-d.intersectionRatio)[0];(u=c==null?void 0:c.target)!=null&&u.id&&t(c.target.id)},{rootMargin:"-35% 0px -50% 0px",threshold:[.12,.2,.35,.5]});return i.forEach(a=>o.observe(a)),()=>o.disconnect()},[n]),e}function zs({eyebrow:n,title:e,description:t}){return I.jsxs(kt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"mb-12 flex max-w-3xl flex-col items-start bg-transparent text-left",children:[n?I.jsx("p",{className:"mb-4 font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-gray-400 drop-shadow-lg md:text-xs",children:n}):null,I.jsx("h2",{className:"mb-6 font-['EB_Garamond'] tracking-tight text-4xl font-semibold text-white drop-shadow-xl md:text-5xl",children:e}),t?I.jsx("p",{className:"max-w-2xl font-['Inter'] text-base font-medium text-gray-300 drop-shadow-xl md:text-lg",children:t}):null]})}const oN=[{icon:L_,title:"Founded Keplor: Leading innovative software solutions with a product-first mindset.",text:""},{icon:wm,title:"Built Examify: An online examination portal with classroom-style workflows.",text:""},{icon:L_,title:"AI Projects & Internships: Working across CNN, NLP, RAG, and voice-driven systems, including roles at ASTRA AI and IBM.",text:""}],aN=[["Frontend",["React","Tailwind CSS","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","jQuery"]],["Backend",["Python","Node.js","PHP","Express.js","REST APIs"]],["Databases",["MySQL","MongoDB","SQLite"]],["AI / ML",["TensorFlow","Keras","OpenCV","NumPy","Pandas","Scikit-learn","CNN","NLP","Computer Vision","YOLOv8","RAG","LLMs"]],["Tools",["Git","GitHub","VS Code","Postman","Figma","Linux","JSON","AWS","IBM Cloud"]]];function lN(){return I.jsx("section",{id:"about",className:"w-full flex flex-col items-center justify-center bg-transparent py-20",children:I.jsxs("div",{className:"mx-auto w-full max-w-6xl px-4 sm:px-6 flex flex-col items-start",children:[I.jsx(zs,{eyebrow:"About",title:"Full-Stack & AI Developer building practical digital products",description:"Builder mindset, AI curiosity, and a strong focus on practical products that are reliable, fast, and easy to use."}),I.jsxs("div",{className:"mt-12 w-full flex flex-col gap-8",children:[I.jsxs(kt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1]},className:"flex flex-col w-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-10",children:[I.jsxs("div",{className:"mb-8",children:[I.jsx("p",{className:"font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 drop-shadow-lg",children:"Developer mindset"}),I.jsx("p",{className:"font-['Inter'] mt-4 text-base leading-relaxed text-gray-300 drop-shadow-lg max-w-4xl",children:"I like building tools that solve specific problems, then shaping them until they feel simple, fast, and trustworthy. My work spans frontend, backend, and AI experiments—deploying ML pipelines, optimizing YOLOv8 models, integrating LLMs, and crafting high-retention media. The common thread is the same: practical products with strong identity."})]}),I.jsx("div",{className:"grid w-full gap-4 sm:grid-cols-3 pt-8 border-t border-white/10",children:JD.map(n=>I.jsxs("div",{className:"flex flex-col bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-left",children:[I.jsx("p",{className:"font-['EB_Garamond'] text-3xl font-medium text-white",children:n.value}),I.jsx("p",{className:"font-['Inter'] mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]",children:n.label})]},n.label))})]}),I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch",children:[I.jsxs(kt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8",children:[I.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[I.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gray-200",children:I.jsx(wm,{className:"h-4 w-4"})}),I.jsx("h3",{className:"font-['EB_Garamond'] text-2xl font-medium text-white",children:"Tech Stack"})]}),I.jsx("div",{className:"flex-grow space-y-6",children:aN.map(([n,e])=>I.jsxs("div",{children:[I.jsx("p",{className:"font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-gray-400",children:n}),I.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1.5",children:e.map((t,i)=>I.jsx("span",{className:"font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300",children:t},`${n}-${t}-${i}`))})]},n))}),I.jsx("div",{className:"mt-8 pt-6 border-t border-white/10",children:I.jsxs("a",{href:"/Resume.pdf",target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex w-full justify-center items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20",children:[I.jsx(XD,{className:"h-4 w-4"}),"Download Resume"]})})]}),I.jsxs(kt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.2},className:"flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8",children:[I.jsx("h3",{className:"font-['EB_Garamond'] text-2xl font-medium text-white mb-6",children:"Key Achievements"}),I.jsx("div",{className:"space-y-4 flex-grow",children:oN.map(n=>{const e=n.icon;return I.jsxs("div",{className:"flex flex-row bg-white/5 border border-white/10 rounded-xl p-5 gap-4",children:[I.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gray-200",children:I.jsx(e,{className:"h-4 w-4"})}),I.jsx("div",{className:"flex items-center",children:I.jsx("h4",{className:"font-['Inter'] text-sm font-medium text-gray-200 leading-relaxed",children:n.title})})]},n.title)})})]})]})]})]})})}const D_={name:"",email:"",message:""};function cN(){const[n,e]=_e.useState(D_),[t,i]=_e.useState("idle"),[o,a]=_e.useState(""),c=d=>{const{name:h,value:p}=d.target;e(v=>({...v,[h]:p}))},u=async d=>{d.preventDefault(),i("sending"),a("");try{if(!(await fetch("https://formspree.io/f/xwpbardz",{method:"POST",headers:{Accept:"application/json"},body:new FormData(d.currentTarget)})).ok)throw new Error("Request failed");e(D_),i("success"),a("Thank you! Your message has been sent.")}catch{i("error"),a("There was an error sending your message. Please try again.")}};return I.jsx("section",{id:"contact",className:"w-full flex flex-col items-center justify-center bg-transparent py-20 pb-40",children:I.jsxs("div",{className:"mx-auto w-full max-w-5xl bg-transparent py-24 pb-40",children:[I.jsx(zs,{eyebrow:"CONTACT",title:"Let's build something together",description:"Share your idea, timeline, or requirements. I usually respond quickly through WhatsApp, LinkedIn, or email."}),I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-start mt-12",children:[I.jsxs(kt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all w-full text-left p-6 md:p-8",children:[I.jsxs("div",{className:"flex items-center justify-start gap-4 mb-6",children:[I.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gray-200 ring-1 ring-white/10",children:I.jsx(tM,{className:"h-5 w-5"})}),I.jsxs("div",{children:[I.jsx("p",{className:"font-['Inter'] text-xs font-semibold uppercase tracking-[0.24em] text-gray-400",children:"Fast response"}),I.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white drop-shadow-lg mt-1",children:"WhatsApp, LinkedIn, or email"})]})]}),I.jsx("p",{className:"font-['Inter'] text-sm leading-relaxed text-gray-400 drop-shadow-lg mb-8",children:"If you have a product idea, a freelance brief, or a collaboration in mind, the quickest route is WhatsApp. I also keep LinkedIn and email open for formal outreach."}),I.jsxs("div",{className:"mt-auto space-y-3 flex-grow",children:[I.jsxs("a",{href:Qr.whatsapp,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10",children:[I.jsxs("span",{className:"font-['Inter'] text-sm font-medium text-white flex items-center gap-3",children:[I.jsx(wm,{className:"h-4 w-4"})," WhatsApp Me"]}),I.jsx("span",{className:"font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400",children:"Direct"})]}),I.jsxs("a",{href:Qr.linkedin,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10",children:[I.jsxs("span",{className:"font-['Inter'] text-sm font-medium text-white flex items-center gap-3",children:[I.jsx(zD,{className:"h-4 w-4"})," LinkedIn Profile"]}),I.jsx("span",{className:"font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400",children:"Network"})]}),I.jsxs("a",{href:`mailto:${Qr.email}`,className:"flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10",children:[I.jsxs("span",{className:"font-['Inter'] text-sm font-medium text-white flex items-center gap-3",children:[I.jsx(GD,{className:"h-4 w-4"})," ",Qr.email]}),I.jsx("span",{className:"font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400",children:"Email"})]})]})]}),I.jsxs(kt.form,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},onSubmit:u,className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all w-full text-left p-6 md:p-8",children:[I.jsx("input",{type:"hidden",name:"_subject",value:"New message from Himansh Sharma portfolio"}),I.jsxs("div",{className:"flex items-center justify-start gap-4 mb-8",children:[I.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gray-200 ring-1 ring-white/10",children:I.jsx(eM,{className:"h-5 w-5"})}),I.jsxs("div",{children:[I.jsx("p",{className:"font-['Inter'] text-xs font-semibold uppercase tracking-[0.24em] text-gray-400",children:"Contact form"}),I.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white drop-shadow-lg mt-1",children:"Send project details"})]})]}),I.jsxs("div",{className:"grid gap-5 sm:grid-cols-2 w-full",children:[I.jsxs("label",{className:"flex flex-col space-y-2 w-full",children:[I.jsx("span",{className:"font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Name"}),I.jsx("input",{type:"text",name:"name",value:n.name,onChange:c,required:!0,placeholder:"Your name",className:"w-full box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"})]}),I.jsxs("label",{className:"flex flex-col space-y-2 w-full",children:[I.jsx("span",{className:"font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Email"}),I.jsx("input",{type:"email",name:"email",value:n.email,onChange:c,required:!0,placeholder:"Your email",className:"w-full box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"})]})]}),I.jsxs("label",{className:"flex flex-col space-y-2 w-full mt-5 flex-grow",children:[I.jsx("span",{className:"font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Message"}),I.jsx("textarea",{name:"message",value:n.message,onChange:c,required:!0,rows:5,placeholder:"Tell me about the project, timeline, or idea.",className:"w-full h-full min-h-[140px] box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"})]}),I.jsx("button",{type:"submit",disabled:t==="sending",className:"font-['Inter'] mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-70",children:t==="sending"?"Sending...":"Send Message"}),o&&I.jsxs("p",{className:"font-['Inter'] mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-400",children:[t==="success"&&I.jsx(YD,{className:"h-4 w-4 text-green-400"}),o]})]})]})]})})}function uN(){return I.jsx("footer",{className:"bg-transparent border-t border-white/5 py-8",children:I.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8",children:[I.jsxs("div",{children:[I.jsxs("p",{className:"font-['Inter'] text-sm text-gray-300 drop-shadow-lg",children:["Designed & built by ",I.jsx("a",{href:"https://www.linkedin.com/in/himanshsharmaa",className:"font-semibold text-gray-300 transition hover:text-white",children:"Himansh Sharma"})]}),I.jsx("p",{className:"font-['Inter'] mt-1 text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-lg",children:"Engineering intelligent systems and scalable web products."})]}),I.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[[["LinkedIn","https://www.linkedin.com/in/himanshsharmaa",nM],["GitHub","https://github.com/himanshsharmaa",Em],["Instagram","https://www.instagram.com/himanshsharmaa",iM],["X","https://x.com/himanshsharmaa_",JS]].map(([n,e,t])=>I.jsx("a",{href:e,target:"_blank",rel:"noreferrer","aria-label":n,className:"font-['Inter'] inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:I.jsx(t,{className:"h-4 w-4"})},n)),I.jsxs("a",{href:"#intro",className:"font-['Inter'] inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:["Back to top",I.jsx(qD,{className:"h-4 w-4"})]})]})]})})}const dN={hidden:{},visible:{transition:{staggerChildren:.15,delayChildren:.2}}},To={hidden:{opacity:0,y:25,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:1.2,ease:[.16,1,.3,1]}}};function fN({roles:n}){const[e,t]=_e.useState(0),[i,o]=_e.useState(0),[a,c]=_e.useState(!1);return _e.useEffect(()=>{if(!n||n.length===0)return;const u=n[e],d=window.setTimeout(()=>{a?i>0?o(h=>h-1):(c(!1),t(h=>(h+1)%n.length)):i<u.length?o(h=>h+1):c(!0)},a?45:i===u.length?1600:75);return()=>window.clearTimeout(d)},[i,a,e,n]),!n||n.length===0?null:I.jsxs("span",{className:"inline-flex items-center text-white drop-shadow-xl",children:[n[e].slice(0,i),I.jsx("span",{className:"ml-1 inline-block h-[0.85em] w-[3px] bg-white animate-pulse","aria-hidden":"true"})]})}function hN({onNavigate:n}){return I.jsx("section",{id:"intro",className:"section-shell pointer-events-none relative flex min-h-screen w-full flex-col items-start justify-center bg-transparent px-4 sm:px-6 py-28 text-left",children:I.jsx("div",{className:"w-full max-w-7xl mx-auto",children:I.jsxs(kt.div,{initial:"hidden",animate:"visible",variants:dN,className:"relative z-10 flex max-w-4xl flex-col items-start text-left mt-16",children:[I.jsx(kt.div,{variants:To,className:"pointer-events-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg backdrop-blur-xl transition-all hover:bg-white/5",children:"Available for freelance and product collaborations"}),I.jsxs(kt.h1,{variants:To,className:"font-['EB_Garamond'] text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white drop-shadow-xl leading-[1.1]",children:[I.jsx("span",{className:"block overflow-hidden pb-1",children:I.jsx(kt.span,{initial:{y:"110%",filter:"blur(8px)"},animate:{y:"0%",filter:"blur(0px)"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.15},className:"block text-white",children:"I'm Himansh Sharma, an"})}),I.jsx("span",{className:"block overflow-hidden pb-2 min-h-[1.2em]",children:I.jsx(kt.span,{initial:{y:"110%",filter:"blur(8px)"},animate:{y:"0%",filter:"blur(0px)"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.3},className:"block text-white",children:I.jsx(fN,{roles:ZD})})})]}),I.jsx(kt.p,{variants:To,className:"pointer-events-auto mt-6 max-w-2xl font-['EB_Garamond'] text-lg md:text-xl font-normal tracking-wide text-gray-300 drop-shadow-lg leading-relaxed",children:"I build practical digital products with a founder mindset, combining full-stack engineering, AI experimentation, and a careful eye for polished user experience."}),I.jsxs(kt.div,{variants:To,className:"pointer-events-auto mt-8 flex flex-wrap justify-start gap-4",children:[I.jsxs("a",{href:"#projects",onClick:e=>n(e,"#projects"),className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 font-['Inter'] text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10",children:["View Projects",I.jsx(KD,{className:"h-4 w-4"})]}),I.jsx("a",{href:"/Resume.pdf",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 font-['Inter'] text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10",children:"Download Resume"})]}),I.jsx(kt.div,{variants:To,className:"pointer-events-auto mt-8 flex flex-wrap items-center justify-start gap-3",children:QD.map(e=>{const i={LinkedIn:nM,GitHub:Em,Instagram:iM}[e.label]||JS;return I.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer","aria-label":e.label,className:"inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-gray-300 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10 hover:text-white",children:I.jsx(i,{className:"h-4 w-4"})},e.label)})}),I.jsx(kt.div,{variants:To,className:"pointer-events-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full",children:[["Full-stack Products",""],["AI-first Experiments",""],["Founder Mindset",""]].map(([e,t])=>I.jsxs("div",{className:"flex flex-col h-full cursor-pointer rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-left backdrop-blur-xl shadow-2xl transition-all hover:bg-white/5 hover:border-white/20",children:[I.jsx("p",{className:"font-['Inter'] text-sm font-semibold text-white drop-shadow-lg flex-grow",children:e}),t&&I.jsx("p",{className:"mt-2 font-['Inter'] text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-lg",children:t})]},e))})]})})})}function pN({project:n,index:e}){const t=n.tech??n.stack,i=n.liveUrl??n.demoUrl;return I.jsxs(kt.article,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,delay:.1+e*.08,ease:[.16,1,.3,1]},whileHover:{y:-6},className:"group flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/25 overflow-hidden text-left",children:[I.jsxs("div",{className:"relative overflow-hidden border-b border-white/10",children:[I.jsx("div",{className:"absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10"}),I.jsx("img",{src:n.image,alt:n.title,loading:"lazy",className:"h-36 md:h-44 w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"})]}),I.jsxs("div",{className:"flex-grow flex flex-col p-6 space-y-4",children:[I.jsxs("div",{children:[I.jsx("span",{className:"font-['Inter'] text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block",children:n.subtitle}),I.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-3xl font-medium text-white drop-shadow-xl",children:n.title})]}),I.jsxs("div",{className:"space-y-3 flex-grow font-['Inter'] text-sm text-gray-300 leading-relaxed",children:[I.jsxs("p",{children:[I.jsx("span",{className:"text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5",children:"Problem"}),n.problem]}),I.jsxs("p",{children:[I.jsx("span",{className:"text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5",children:"Solution"}),n.description||n.problem]}),I.jsxs("p",{children:[I.jsx("span",{className:"text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5",children:"Impact"}),n.impact]})]}),I.jsx("div",{className:"flex flex-wrap items-center justify-start gap-1.5 pt-2",children:t.map((o,a)=>I.jsx("span",{className:"font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300 transition-all",children:o},`${o}-${a}`))}),I.jsxs("div",{className:"flex items-center gap-4 pt-4 border-t border-white/10 mt-2",children:[i?I.jsxs("a",{href:i,target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-gray-300 transition-colors",children:["Live Demo ",I.jsx($D,{className:"h-3 w-3"})]}):I.jsx("span",{className:"font-['Inter'] text-xs font-semibold text-gray-500",children:"Demo coming soon"}),n.githubUrl&&I.jsxs("a",{href:n.githubUrl,target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors",children:["GitHub ",I.jsx(Em,{className:"h-3 w-3"})]})]})]})]})}const mN={hidden:{},visible:{transition:{staggerChildren:.14}}};function gN(){return I.jsx("section",{id:"projects",className:"w-full flex flex-col items-start justify-center bg-transparent py-20",children:I.jsxs(kt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-15% 0px -15% 0px"},variants:mN,className:"w-full bg-transparent py-24",children:[I.jsx(zs,{eyebrow:"PROJECTS",title:"Selected projects",description:"Each project outlines the problem, solution, and outcome to show practical thinking and execution."}),I.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch",children:Ap.map((n,e)=>I.jsx(pN,{project:n,index:e},n.title))})]})})}const vN=[{title:"AI & Computer Vision Models",description:"End-to-end machine learning integrations. From real-time object detection pipelines to deep natural language processing and RAG systems.",features:["YOLOv8","DistilBERT","LLMs","OpenCV"],icon:jD},{title:"Full-Stack Product Engineering",description:"Scalable, production-ready web architectures. Seamlessly connecting high-performance Python/Node backends with dynamic databases.",features:["FastAPI","React","MongoDB","REST APIs"],icon:WD},{title:"Cinematic 3D Frontends",description:"Immersive WebGL experiences that bridge the gap between standard UI and digital art. Hardware-accelerated and highly optimized.",features:["Three.js","Framer Motion","WebGL","Shaders"],icon:VD},{title:"Digital Media & Content",description:"High-retention social media content production. Combining AI-generated assets with advanced motion graphics and cinematic editing.",features:["Retention Editing","Motion Graphics","AI Generation"],icon:BD}];function xN(){return I.jsx("section",{id:"services",className:"w-full flex flex-col items-center justify-center bg-transparent py-20",children:I.jsxs("div",{className:"mx-auto w-full max-w-6xl px-4 sm:px-6 flex flex-col items-start",children:[I.jsx(zs,{eyebrow:"Services",title:"What I Can Build For You",description:"From complex AI pipelines to immersive 3D frontends and engaging digital media."}),I.jsx("div",{className:"mt-12 flex flex-col gap-6 w-full",children:vN.map((n,e)=>{const t=n.icon;return I.jsxs(kt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:e*.1},className:"flex flex-col md:flex-row w-full items-start md:items-center gap-6 md:gap-8 bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8",children:[I.jsx("div",{className:"flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-200",children:I.jsx(t,{className:"h-7 w-7"})}),I.jsxs("div",{className:"flex-grow",children:[I.jsx("h3",{className:"font-['EB_Garamond'] text-2xl font-medium text-white mb-2",children:n.title}),I.jsx("p",{className:"font-['Inter'] text-sm leading-relaxed text-gray-400 max-w-2xl",children:n.description})]}),I.jsx("div",{className:"flex flex-wrap md:justify-end gap-2 shrink-0 md:w-64 pt-4 md:pt-0 border-t border-white/10 md:border-none w-full md:w-auto",children:n.features.map((i,o)=>I.jsx("span",{className:"font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300",children:i},o))})]},n.title)})})]})})}const _N={hidden:{opacity:0,y:30,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1}}},yN={hidden:{},visible:{transition:{staggerChildren:.12}}};function SN(){return I.jsx("section",{id:"skills",className:"w-full flex flex-col items-center justify-center bg-transparent py-20 text-center",children:I.jsxs(kt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-15% 0px -15% 0px"},variants:yN,className:"w-full bg-transparent py-24",children:[I.jsx(zs,{eyebrow:"SKILLS",title:"Core skills and tools",description:"Frontend, backend, databases, AI/ML, and developer tooling used across production and experimental projects."}),I.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full text-left",children:rM.map(n=>I.jsxs(kt.div,{variants:_N,whileHover:{y:-4},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 p-6 md:p-8 text-left",children:[I.jsx("p",{className:"font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg md:text-xs",children:n.title}),I.jsx("div",{className:"mt-4 flex-grow flex flex-wrap gap-2 items-center justify-start",children:n.items.map(e=>I.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-light text-gray-300 drop-shadow-lg transition-all hover:bg-white/10",children:e},e))})]},n.title))})]})})}const MN=[{quote:"Himansh brought a level of technical precision and creative vision that completely transformed our platform's digital presence.",name:"Alex Sterling",role:"Project Manager, Tech Startup"},{quote:"Exceptional problem solver. The computer vision pipeline he integrated saved us countless hours of manual data processing.",name:"Dr. Sarah Chen",role:"Lead Engineer, AI Solutions"}];function wN(){return I.jsx("section",{id:"testimonials",className:"w-full flex flex-col items-center justify-center bg-transparent py-20",children:I.jsxs("div",{className:"mx-auto w-full max-w-6xl px-4 sm:px-6 flex flex-col items-start",children:[I.jsx(zs,{eyebrow:"Testimonials",title:"Client Feedback",description:"What people say about working with me across AI, engineering, and design."}),I.jsx("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start",children:MN.map((n,e)=>I.jsxs(kt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:e*.2},className:`relative flex flex-col bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-8 md:p-10 ${e===1?"md:mt-16":""}`,children:[I.jsx("div",{className:"absolute top-6 right-8 font-['EB_Garamond'] text-8xl text-white/5 select-none pointer-events-none leading-none",children:'"'}),I.jsx("p",{className:"relative z-10 font-['EB_Garamond'] text-2xl leading-relaxed text-gray-300 italic mb-10",children:n.quote}),I.jsxs("div",{className:"relative z-10 flex flex-col bg-white/5 border border-white/10 rounded-xl px-5 py-4 mt-auto",children:[I.jsx("p",{className:"font-['Inter'] text-sm font-medium text-white",children:n.name}),I.jsx("p",{className:"font-['Inter'] mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]",children:n.role})]})]},e))})]})})}const EN={hidden:{opacity:0,x:-20,filter:"blur(8px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.8,ease:[.16,1,.3,1]}}},TN={hidden:{},visible:{transition:{staggerChildren:.12}}};function bN(){const[n,e]=_e.useState(Xa[0].id),t=_e.useMemo(()=>Xa.find(i=>i.id===n)??Xa[0],[n]);return I.jsx("section",{id:"experience",className:"w-full flex flex-col items-center justify-center bg-transparent py-20",children:I.jsxs("div",{className:"mx-auto w-full max-w-6xl px-4 sm:px-6",children:[I.jsx(zs,{eyebrow:"EXPERIENCE",title:"Work, education, and certifications",description:"A concise timeline of hands-on roles, academic milestones, and certifications that shaped my product and engineering approach."}),I.jsx(kt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-10 mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-950/85 p-1.5 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)]",children:Xa.map(i=>I.jsx("button",{type:"button",onClick:()=>e(i.id),className:`font-['Inter'] rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${i.id===n?"bg-white text-black shadow-md":"text-gray-400 hover:text-white hover:bg-white/10"}`,children:i.label},i.id))}),I.jsx("div",{className:"mt-12 w-full max-w-5xl mx-auto pl-2 sm:pl-0",children:I.jsx(qR,{mode:"wait",children:I.jsx(kt.div,{initial:"hidden",animate:"visible",exit:{opacity:0,transition:{duration:.2}},variants:TN,className:"flex flex-col gap-8 border-l border-white/15 ml-2 md:ml-4",children:t.items.map((i,o)=>I.jsxs(kt.article,{variants:EN,className:"relative pl-6 md:pl-10 group",children:[I.jsx("span",{className:"absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-500 ring-4 ring-[#09090b] group-hover:bg-white transition-colors duration-300"}),I.jsxs("div",{className:"flex flex-col h-full w-full rounded-2xl border border-white/10 bg-zinc-950/85 p-5 md:p-7 text-left backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/25",children:[I.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/10 pb-3",children:[I.jsx("span",{className:"font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400",children:i.year}),I.jsx("span",{className:"font-['Inter'] text-[11px] font-medium text-gray-300",children:i.company})]}),I.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white mb-3",children:i.title}),I.jsx("p",{className:"font-['Inter'] text-sm leading-relaxed text-gray-300 flex-grow",children:i.description})]})]},`${t.id}-${i.year}-${i.title}-${o}`))},t.id)})})]})})}const AN=`
varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vLocalPosition;

void main() {
  vNormal = normalize(
    normalMatrix * normal
  );

  vLocalPosition = position;

  vec4 worldPosition =
    modelMatrix *
    vec4(position, 1.0);

  vWorldPosition =
    worldPosition.xyz;

  gl_Position =
    projectionMatrix *
    viewMatrix *
    worldPosition;
}
`,CN=`
uniform float uTime;
uniform vec3 uCameraPosition;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vLocalPosition;

float hash31(vec3 p) {
  p = fract(p * 0.1031);

  p += dot(
    p,
    p.yzx + 33.33
  );

  return fract(
    (p.x + p.y) * p.z
  );
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);

  f =
    f *
    f *
    (3.0 - 2.0 * f);

  float n000 =
    hash31(
      i +
      vec3(0.0, 0.0, 0.0)
    );

  float n100 =
    hash31(
      i +
      vec3(1.0, 0.0, 0.0)
    );

  float n010 =
    hash31(
      i +
      vec3(0.0, 1.0, 0.0)
    );

  float n110 =
    hash31(
      i +
      vec3(1.0, 1.0, 0.0)
    );

  float n001 =
    hash31(
      i +
      vec3(0.0, 0.0, 1.0)
    );

  float n101 =
    hash31(
      i +
      vec3(1.0, 0.0, 1.0)
    );

  float n011 =
    hash31(
      i +
      vec3(0.0, 1.0, 1.0)
    );

  float n111 =
    hash31(
      i +
      vec3(1.0, 1.0, 1.0)
    );

  float x00 =
    mix(
      n000,
      n100,
      f.x
    );

  float x10 =
    mix(
      n010,
      n110,
      f.x
    );

  float x01 =
    mix(
      n001,
      n101,
      f.x
    );

  float x11 =
    mix(
      n011,
      n111,
      f.x
    );

  float y0 =
    mix(
      x00,
      x10,
      f.y
    );

  float y1 =
    mix(
      x01,
      x11,
      f.y
    );

  return mix(
    y0,
    y1,
    f.z
  );
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;

  for (
    int i = 0;
    i < 4;
    i++
  ) {
    value +=
      noise3(p) *
      amplitude;

    p *= 2.02;
    amplitude *= 0.5;
  }

  return value;
}

void main() {
  vec3 normal =
    normalize(vNormal);

  vec3 viewDirection =
    normalize(
      uCameraPosition -
      vWorldPosition
    );

  float facing =
    max(
      dot(
        normal,
        viewDirection
      ),
      0.0
    );

  float fresnel =
    pow(
      1.0 - facing,
      5.0
    );

  vec3 noisePosition =
    vLocalPosition *
    2.6;

  noisePosition +=
    vec3(
      uTime * 0.028,
      -uTime * 0.018,
      uTime * 0.024
    );

  float largeNoise =
    fbm(
      noisePosition
    );

  float detailNoise =
    noise3(
      noisePosition *
      2.75 +
      11.7
    );

  float surfaceNoise =
    mix(
      largeNoise,
      detailNoise,
      0.32
    );

  vec3 coreColor =
    vec3(
      0.001,
      0.002,
      0.004
    );

  vec3 edgeColor =
    vec3(
      0.012,
      0.055,
      0.075
    );

  vec3 cyanColor =
    vec3(
      0.035,
      0.22,
      0.32
    );

  vec3 surfaceColor =
    mix(
      coreColor,
      edgeColor,
      surfaceNoise *
      0.18
    );

  surfaceColor +=
    cyanColor *
    fresnel *
    fresnel *
    0.18;

  surfaceColor +=
    cyanColor *
    smoothstep(
      0.48,
      0.9,
      surfaceNoise
    ) *
    fresnel *
    0.055;

  surfaceColor *=
    mix(
      0.68,
      1.0,
      fresnel
    );

  gl_FragColor =
    vec4(
      surfaceColor,
      0.985
    );
}
`,RN=[{type:"moon",position:[-30,16,-58],radius:1.25,rotationSpeed:.003},{type:"mars",position:[32,-14,-83],radius:1.5,rotationSpeed:.0022},{type:"jupiter",position:[-47,26,-122],radius:3.6,rotationSpeed:.0017},{type:"saturn",position:[54,9,-160],radius:3.2,rotationSpeed:.0015}],PN=[{position:[-34,20,-52],scale:1.2},{position:[35,22,-65],scale:1.45},{position:[-43,-20,-75],scale:1.3},{position:[44,-25,-91],scale:1.5},{position:[-55,18,-112],scale:1.65},{position:[54,31,-128],scale:1.3},{position:[-67,-31,-148],scale:1.75},{position:[66,-37,-166],scale:1.5},{position:[-79,33,-185],scale:1.85},{position:[78,29,-205],scale:1.6}],N_=[{points:[[-2,-1],[-1.1,.3],[-.15,-.15],[.9,.35],[1.8,1.2],[1.2,-1.1],[.3,-.65]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[6,2]]},{points:[[-1.8,1],[-.7,1.5],[.2,.8],[1.2,1.25],[1.75,.1],[.8,-.7],[-.3,-.35]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]},{points:[[-1.9,.9],[-.8,1.15],[.2,.55],[1.15,.75],[1.8,-.2],[.5,-.7],[-.8,-.5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]},{points:[[-1.8,1.2],[-.9,.4],[0,1.1],[1,.3],[1.7,1],[.9,-.8],[-.2,-1.1],[-1.3,-.45]],lines:[[0,1],[1,2],[2,3],[3,4],[3,5],[5,6],[6,7],[7,1]]},{points:[[-1.8,-.9],[-1.1,.5],[-.3,1.2],[.7,1.7],[1.4,.65],[1.8,-.7],[.65,-1.25],[-.6,-1.45]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[2,6]]},{points:[[-1.7,1],[0,1.8],[1.7,1],[.6,-1.25],[-.7,-1.25]],lines:[[0,1],[1,2],[2,3],[3,4],[4,0],[0,2]]}];function LN(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(Math.PI*2*e)}function DN(n,e=256){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");if(!i)throw new Error("Unable to create planet texture canvas.");const o=i.createImageData(e,e),a=o.data;for(let u=0;u<e;u+=1){const d=u/e;for(let h=0;h<e;h+=1){const p=h/e,v=(u*e+h)*4,m=Math.sin(p*41+n.length)*.5+Math.sin(d*73+p*11)*.3+Math.sin((p+d)*125)*.2;let x=0,M=0,T=0;if(n==="moon"){const S=125+m*38;x=S,M=S,T=S+4,Math.sin(p*190)*Math.sin(d*150)*Math.sin((p+d)*71)>.78&&(x-=34,M-=34,T-=30)}if(n==="mars"&&(x=150+m*38,M=57+m*18,T=40+m*12,Math.sin(p*25+Math.sin(d*19))*Math.sin(d*41)>.48&&(x-=36,M-=17,T-=10),(d<.08||d>.92)&&(x+=35,M+=28,T+=24)),n==="jupiter"){const S=Math.sin(d*Math.PI*26),y=m*.18;S>.45?(x=183+y*45,M=147+y*35,T=116+y*28):(x=112+y*35,M=88+y*28,T=78+y*22);const P=p-.68,F=d-.63;P*P/.02+F*F/.008<1&&(x=188,M=91,T=66)}n==="saturn"&&(Math.sin(d*Math.PI*18)>.25?(x=195+m*22,M=169+m*20,T=130+m*15):(x=135+m*20,M=120+m*18,T=96+m*15)),a[v]=$a.clamp(x,0,255),a[v+1]=$a.clamp(M,0,255),a[v+2]=$a.clamp(T,0,255),a[v+3]=255}}i.putImageData(o,0,0);const c=new _E(t);return c.colorSpace=ei,c.anisotropy=4,c}function NN(n){const e=N_[n%N_.length],t=new Ds,i=e.points.map(([v,m])=>new j(v*3.2,m*3.2,0)),o=new vn().setFromPoints(i),a=new Ka({color:14742270,size:.052,transparent:!0,opacity:.34,blending:es,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),c=new za(o,a);t.add(c);const u=[];e.lines.forEach(([v,m])=>{const x=i[v],M=i[m];u.push(x.x,x.y,x.z,M.x,M.y,M.z)});const d=new vn;d.setAttribute("position",new Kt(u,3));const h=new ry({color:12248829,transparent:!0,opacity:.12,blending:es,depthWrite:!1,depthTest:!0}),p=new sy(d,h);return t.add(p),t}function IN(){const n=_e.useRef(null),[e,t]=_e.useState(!1),i=sN(bp);_e.useEffect(()=>{const a=n.current;if(!a)return;let c=0,u=!1;const d=new lE,h=new Ei(50,window.innerWidth/Math.max(window.innerHeight,1),.1,600),p=new UR({canvas:a,alpha:!0,antialias:!0,powerPreference:"high-performance"}),v=window.innerWidth<768,m=Math.min(window.devicePixelRatio,v?1:1.5);p.setPixelRatio(m),p.setSize(window.innerWidth,window.innerHeight,!1),p.setClearColor(0,0),p.outputColorSpace=ei,p.toneMapping=Pp,p.toneMappingExposure=.95;const x=new VR(p);x.setPixelRatio(m),x.setSize(window.innerWidth,window.innerHeight);const M=new HR(d,h);x.addPass(M);const T=new ko(new ut(window.innerWidth,window.innerHeight),.72,.42,.72);x.addPass(T);const S=new DE(14412542,.14);d.add(S);const y=new LE(16777215,1.65);y.position.set(-40,30,25),d.add(y);const P=new Lv([new j(0,1.5,12),new j(6,4,3),new j(5,-1,1),new j(-6,-2,-1),new j(3,1,-4),new j(-3,3,-5),new j(0,1.5,-7)]),F=new Lv([new j(0,1.5,-9),new j(.5,1.8,-9),new j(.2,1.5,-9),new j(-.5,1.2,-9),new j(.3,1.5,-9),new j(-.2,1.7,-9),new j(0,1.5,-9)]),C=new j,R=new j;let L=0,O=0,E=0,D=0;const B=6e3,G=new Float32Array(B*3);for(let w=0;w<B;w+=1){const z=w*3;G[z]=(Math.random()-.5)*150,G[z+1]=(Math.random()-.5)*150,G[z+2]=-Math.random()*190}const $=new vn;$.setAttribute("position",new Kt(G,3));const ie=new Ka({color:16777215,size:.08,transparent:!0,opacity:.75,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),H=new za($,ie);d.add(H);const ee=1600,he=new Float32Array(ee*3);for(let w=0;w<ee;w+=1){const z=w*3;he[z]=(Math.random()-.5)*90,he[z+1]=(Math.random()-.5)*55,he[z+2]=-15-Math.random()*95}const J=new vn;J.setAttribute("position",new Kt(he,3));const Z=new Ka({color:6809849,size:.018,transparent:!0,opacity:.11,blending:es,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),Q=new za(J,Z);d.add(Q);const K=new Ds;PN.forEach((w,z)=>{const te=NN(z);te.position.set(w.position[0],w.position[1],w.position[2]),te.scale.setScalar(w.scale),te.rotation.set((Math.random()-.5)*.16,(Math.random()-.5)*.12,(Math.random()-.5)*.18),K.add(te)}),d.add(K);const N=new j(0,1.5,-9),ae=new vu(1.5,64,64),Se=new Ln({vertexShader:AN,fragmentShader:CN,uniforms:{uTime:{value:0},uCameraPosition:{value:new j}},transparent:!1,depthWrite:!0,depthTest:!0}),ke=new ti(ae,Se);ke.position.copy(N),d.add(ke);const Be=5e3,He=new Float32Array(Be*3),oe=new Float32Array(Be*3),fe=new pt(15792639),Ee=new pt(3718648),Je=new pt(16007006),Ne=new pt;for(let w=0;w<Be;w+=1){const z=w*3,te=Math.pow(Math.random(),.72),ce=2.65+te*5.35,ve=Math.random()*Math.PI*2,be=.12+(1-te)*.24;He[z]=Math.cos(ve)*ce,He[z+1]=LN()*be,He[z+2]=Math.sin(ve)*ce;const pe=$a.clamp((ce-2.65)/5.35,0,1);pe<.38?Ne.lerpColors(fe,Ee,pe/.38):Ne.lerpColors(Ee,Je,(pe-.38)/.62);const me=.88+Math.random()*.22;oe[z]=Ne.r*me,oe[z+1]=Ne.g*me,oe[z+2]=Ne.b*me}const dt=new vn;dt.setAttribute("position",new Kt(He,3)),dt.setAttribute("color",new Kt(oe,3));const zt=new Ka({size:.05,transparent:!0,opacity:.92,vertexColors:!0,blending:es,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),lt=new za(dt,zt);lt.position.copy(N),lt.rotation.x=Math.PI*.32,d.add(lt);const vt=new Ds,At=[],mt=[];RN.forEach(w=>{const z=DN(w.type);mt.push(z);const te=new vu(w.radius,48,48),ce=new bE({map:z,roughness:w.type==="jupiter"?.82:.95,metalness:0,emissive:new pt(329224),emissiveIntensity:.035}),ve=new ti(te,ce);ve.position.set(w.position[0],w.position[1],w.position[2]),ve.rotation.set(Math.random()*.35,Math.random()*Math.PI,Math.random()*.25),vt.add(ve),At.push({mesh:ve,rotationSpeed:w.rotationSpeed})}),d.add(vt);const It=[],Wt=new Gp(.004,.012,1.25,6),nn=new Pu({color:14742270,transparent:!0,opacity:.22,blending:es,depthWrite:!1,depthTest:!0});for(let w=0;w<2;w+=1){const z=new ti(Wt,nn.clone());z.visible=!1,d.add(z),It.push({mesh:z,velocity:new j,life:0,maxLife:1,active:!1,nextSpawn:5+Math.random()*16})}const Rt=w=>{const z=Math.random()>.5?1:-1;w.mesh.position.set(z*(20+Math.random()*26),8+(Math.random()-.5)*15,-28-Math.random()*75);const te=new j(-.72*z,-.16,-1).normalize(),ce=.045+Math.random()*.018;w.velocity.copy(te).multiplyScalar(ce),w.mesh.quaternion.setFromUnitVectors(new j(0,1,0),te),w.life=0,w.maxLife=.7+Math.random()*.55,w.active=!0,w.mesh.visible=!0},Bt=()=>{L=window.scrollY||window.pageYOffset||0},Y=w=>{E=w.clientX/Math.max(window.innerWidth,1)-.5,D=.5-w.clientY/Math.max(window.innerHeight,1)},rn=()=>{const w=window.innerWidth,z=Math.max(window.innerHeight,1);h.aspect=w/z,h.updateProjectionMatrix(),p.setSize(w,z,!1),x.setSize(w,z);const te=window.innerWidth<768,ce=Math.min(window.devicePixelRatio,te?1:1.5);p.setPixelRatio(ce),x.setPixelRatio(ce)};window.addEventListener("scroll",Bt,{passive:!0}),window.addEventListener("mousemove",Y,{passive:!0}),window.addEventListener("resize",rn),Bt();const Mt=new OE,U=()=>{if(u)return;c=window.requestAnimationFrame(U);const w=Math.min(Mt.getDelta(),.05),z=Mt.elapsedTime;O+=(L-O)*.015;const te=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),ce=$a.clamp(O/te,0,.99);P.getPointAt(ce,C),F.getPointAt(ce,R),h.position.set(C.x+E*.4,C.y+D*.4,C.z),h.lookAt(R),H.rotation.y+=w*.006,H.rotation.x+=w*45e-5,Q.rotation.y+=w*.0025,K.position.y=Math.sin(z*.08)*.05,At.forEach(({mesh:ve,rotationSpeed:be})=>{ve.rotation.y+=be*w*60,ve.rotation.x+=be*w*3}),vt.position.y=Math.sin(z*.12)*.045,vt.position.x=Math.cos(z*.09)*.035,ke.position.copy(N),ke.position.y+=Math.sin(z*.4)*.08,ke.rotation.y=z*.045,Se.uniforms.uTime.value=z,Se.uniforms.uCameraPosition.value.copy(h.position),lt.position.copy(ke.position),lt.rotation.z=z*.05+O*8e-4,It.forEach(ve=>{if(!ve.active){ve.nextSpawn-=w,ve.nextSpawn<=0&&Rt(ve);return}const be=ve.velocity.clone().multiplyScalar(w*60);ve.mesh.position.add(be),ve.life+=w;const pe=ve.life/ve.maxLife,me=Math.sin(Math.PI*pe),Ae=ve.mesh.material;Ae.opacity=.22*me,ve.life>=ve.maxLife&&(ve.active=!1,ve.mesh.visible=!1,ve.nextSpawn=8+Math.random()*15)}),x.render()};return U(),()=>{u=!0,window.cancelAnimationFrame(c),window.removeEventListener("scroll",Bt),window.removeEventListener("mousemove",Y),window.removeEventListener("resize",rn),$.dispose(),ie.dispose(),J.dispose(),Z.dispose(),dt.dispose(),zt.dispose(),ae.dispose(),Se.dispose(),Wt.dispose(),It.forEach(w=>{const z=w.mesh.material;z instanceof Ti&&z.dispose()}),K.traverse(w=>{w instanceof ti&&(w.geometry.dispose(),w.material instanceof Ti&&w.material.dispose()),w instanceof za&&(w.geometry.dispose(),w.material instanceof Ti&&w.material.dispose()),w instanceof sy&&(w.geometry.dispose(),w.material instanceof Ti&&w.material.dispose())}),At.forEach(({mesh:w})=>{w.geometry.dispose(),w.material instanceof Ti&&w.material.dispose(),w.removeFromParent()}),mt.forEach(w=>{w.dispose()}),x.dispose(),p.dispose()}},[]);const o=(a,c)=>{a.preventDefault(),t(!1);const u=c.startsWith("#")?c.slice(1):c;if(u==="home"||u===""){window.scrollTo({top:0,behavior:"smooth"});return}const d=document.getElementById(u);d&&d.scrollIntoView({behavior:"smooth",block:"start"})};return I.jsxs("div",{className:"relative isolate min-h-screen w-full bg-transparent",children:[I.jsx(xD,{}),I.jsx("div",{className:`
          fixed inset-0
          z-0
          h-full w-full
          bg-[url('/space-bg.jpeg')]
          bg-cover
          bg-[position:center_center]
          bg-no-repeat
        `}),I.jsx("canvas",{ref:n,className:`
          fixed inset-0
          z-[1]
          h-full w-full
          pointer-events-none
        `}),I.jsx("div",{className:`
          fixed inset-0
          z-[2]
          pointer-events-none
          bg-black/50
        `}),I.jsx("div",{className:"fixed inset-0 z-[3] pointer-events-none",style:{background:`
            radial-gradient(
              circle at center,
              transparent 0%,
              rgba(0, 0, 0, 0.4) 40%,
              rgba(0, 0, 0, 0.85) 100%
            )
          `}}),I.jsx("div",{className:"relative z-20",children:I.jsx(LD,{children:I.jsxs(kt.div,{initial:{clipPath:"inset(50% 0 50% 0)"},animate:{clipPath:"inset(0% 0 0% 0)"},transition:{duration:2.2,ease:[.77,0,.175,1],delay:.1},className:"relative overflow-hidden",children:[I.jsx(eN,{activeSection:i,mobileMenuOpen:e,onToggleMobileMenu:()=>t(a=>!a),onNavigate:o}),I.jsxs("main",{className:`
                relative z-20
                mx-auto
                flex w-full
                max-w-[1200px]
                flex-col
                px-6
                md:px-12
                divide-y
                divide-white/[0.06]
              `,children:[I.jsx(hN,{onNavigate:o}),I.jsx(lN,{}),I.jsx(xN,{}),I.jsx(bN,{}),I.jsx(SN,{}),I.jsx(gN,{}),I.jsx(wN,{}),I.jsx(cN,{})]}),I.jsx(uN,{}),I.jsx(rN,{})]})})})]})}qw.createRoot(document.getElementById("root")).render(I.jsx(Jr.StrictMode,{children:I.jsx(IN,{})}));
