var Hw=Object.defineProperty;var Gw=(n,e,t)=>e in n?Hw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var et=(n,e,t)=>Gw(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function O_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bd={exports:{}},Pa={},Ad={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function Ww(){if(K0)return St;K0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function m(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(I,re,ye){this.props=I,this.context=re,this.refs=T,this.updater=ye||x}S.prototype.isReactComponent={},S.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function y(){}y.prototype=S.prototype;function P(I,re,ye){this.props=I,this.context=re,this.refs=T,this.updater=ye||x}var U=P.prototype=new y;U.constructor=P,M(U,S.prototype),U.isPureReactComponent=!0;var C=Array.isArray,R=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(I,re,ye){var ze,Ue={},We=null,ae=null;if(re!=null)for(ze in re.ref!==void 0&&(ae=re.ref),re.key!==void 0&&(We=""+re.key),re)R.call(re,ze)&&!F.hasOwnProperty(ze)&&(Ue[ze]=re[ze]);var fe=arguments.length-2;if(fe===1)Ue.children=ye;else if(1<fe){for(var Te=Array(fe),qe=0;qe<fe;qe++)Te[qe]=arguments[qe+2];Ue.children=Te}if(I&&I.defaultProps)for(ze in fe=I.defaultProps,fe)Ue[ze]===void 0&&(Ue[ze]=fe[ze]);return{$$typeof:n,type:I,key:We,ref:ae,props:Ue,_owner:L.current}}function N(I,re){return{$$typeof:n,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function H(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ye){return re[ye]})}var j=/\/+/g;function te(I,re){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):re.toString(36)}function V(I,re,ye,ze,Ue){var We=typeof I;(We==="undefined"||We==="boolean")&&(I=null);var ae=!1;if(I===null)ae=!0;else switch(We){case"string":case"number":ae=!0;break;case"object":switch(I.$$typeof){case n:case e:ae=!0}}if(ae)return ae=I,Ue=Ue(ae),I=ze===""?"."+te(ae,0):ze,C(Ue)?(ye="",I!=null&&(ye=I.replace(j,"$&/")+"/"),V(Ue,re,ye,"",function(qe){return qe})):Ue!=null&&(B(Ue)&&(Ue=N(Ue,ye+(!Ue.key||ae&&ae.key===Ue.key?"":(""+Ue.key).replace(j,"$&/")+"/")+I)),re.push(Ue)),1;if(ae=0,ze=ze===""?".":ze+":",C(I))for(var fe=0;fe<I.length;fe++){We=I[fe];var Te=ze+te(We,fe);ae+=V(We,re,ye,Te,Ue)}else if(Te=m(I),typeof Te=="function")for(I=Te.call(I),fe=0;!(We=I.next()).done;)We=We.value,Te=ze+te(We,fe++),ae+=V(We,re,ye,Te,Ue);else if(We==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ae}function ne(I,re,ye){if(I==null)return I;var ze=[],Ue=0;return V(I,ze,"","",function(We){return re.call(ye,We,Ue++)}),ze}function he(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(ye){(I._status===0||I._status===-1)&&(I._status=1,I._result=ye)},function(ye){(I._status===0||I._status===-1)&&(I._status=2,I._result=ye)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var J={current:null},q={transition:null},K={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function Q(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:ne,forEach:function(I,re,ye){ne(I,function(){re.apply(this,arguments)},ye)},count:function(I){var re=0;return ne(I,function(){re++}),re},toArray:function(I){return ne(I,function(re){return re})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},St.Component=S,St.Fragment=t,St.Profiler=o,St.PureComponent=P,St.StrictMode=i,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,St.act=Q,St.cloneElement=function(I,re,ye){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ze=M({},I.props),Ue=I.key,We=I.ref,ae=I._owner;if(re!=null){if(re.ref!==void 0&&(We=re.ref,ae=L.current),re.key!==void 0&&(Ue=""+re.key),I.type&&I.type.defaultProps)var fe=I.type.defaultProps;for(Te in re)R.call(re,Te)&&!F.hasOwnProperty(Te)&&(ze[Te]=re[Te]===void 0&&fe!==void 0?fe[Te]:re[Te])}var Te=arguments.length-2;if(Te===1)ze.children=ye;else if(1<Te){fe=Array(Te);for(var qe=0;qe<Te;qe++)fe[qe]=arguments[qe+2];ze.children=fe}return{$$typeof:n,type:I.type,key:Ue,ref:We,props:ze,_owner:ae}},St.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},St.createElement=E,St.createFactory=function(I){var re=E.bind(null,I);return re.type=I,re},St.createRef=function(){return{current:null}},St.forwardRef=function(I){return{$$typeof:u,render:I}},St.isValidElement=B,St.lazy=function(I){return{$$typeof:p,_payload:{_status:-1,_result:I},_init:he}},St.memo=function(I,re){return{$$typeof:h,type:I,compare:re===void 0?null:re}},St.startTransition=function(I){var re=q.transition;q.transition={};try{I()}finally{q.transition=re}},St.unstable_act=Q,St.useCallback=function(I,re){return J.current.useCallback(I,re)},St.useContext=function(I){return J.current.useContext(I)},St.useDebugValue=function(){},St.useDeferredValue=function(I){return J.current.useDeferredValue(I)},St.useEffect=function(I,re){return J.current.useEffect(I,re)},St.useId=function(){return J.current.useId()},St.useImperativeHandle=function(I,re,ye){return J.current.useImperativeHandle(I,re,ye)},St.useInsertionEffect=function(I,re){return J.current.useInsertionEffect(I,re)},St.useLayoutEffect=function(I,re){return J.current.useLayoutEffect(I,re)},St.useMemo=function(I,re){return J.current.useMemo(I,re)},St.useReducer=function(I,re,ye){return J.current.useReducer(I,re,ye)},St.useRef=function(I){return J.current.useRef(I)},St.useState=function(I){return J.current.useState(I)},St.useSyncExternalStore=function(I,re,ye){return J.current.useSyncExternalStore(I,re,ye)},St.useTransition=function(){return J.current.useTransition()},St.version="18.3.1",St}var Z0;function Dp(){return Z0||(Z0=1,Ad.exports=Ww()),Ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function Xw(){if(Q0)return Pa;Q0=1;var n=Dp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,v={},m=null,x=null;h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(x=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(v[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)v[p]===void 0&&(v[p]=f[p]);return{$$typeof:e,type:u,key:m,ref:x,props:v,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=c,Pa.jsxs=c,Pa}var J0;function jw(){return J0||(J0=1,bd.exports=Xw()),bd.exports}var O=jw(),xe=Dp();const ts=O_(xe);var bc={},Cd={exports:{}},Jn={},Rd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function Yw(){return ev||(ev=1,(function(n){function e(q,K){var Q=q.length;q.push(K);e:for(;0<Q;){var I=Q-1>>>1,re=q[I];if(0<o(re,K))q[I]=K,q[Q]=re,Q=I;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var K=q[0],Q=q.pop();if(Q!==K){q[0]=Q;e:for(var I=0,re=q.length,ye=re>>>1;I<ye;){var ze=2*(I+1)-1,Ue=q[ze],We=ze+1,ae=q[We];if(0>o(Ue,Q))We<re&&0>o(ae,Ue)?(q[I]=ae,q[We]=Q,I=We):(q[I]=Ue,q[ze]=Q,I=ze);else if(We<re&&0>o(ae,Q))q[I]=ae,q[We]=Q,I=We;else break e}}return K}function o(q,K){var Q=q.sortIndex-K.sortIndex;return Q!==0?Q:q.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,v=null,m=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(q){for(var K=t(h);K!==null;){if(K.callback===null)i(h);else if(K.startTime<=q)i(h),K.sortIndex=K.expirationTime,e(f,K);else break;K=t(h)}}function C(q){if(T=!1,U(q),!M)if(t(f)!==null)M=!0,he(R);else{var K=t(h);K!==null&&J(C,K.startTime-q)}}function R(q,K){M=!1,T&&(T=!1,y(E),E=-1),x=!0;var Q=m;try{for(U(K),v=t(f);v!==null&&(!(v.expirationTime>K)||q&&!H());){var I=v.callback;if(typeof I=="function"){v.callback=null,m=v.priorityLevel;var re=I(v.expirationTime<=K);K=n.unstable_now(),typeof re=="function"?v.callback=re:v===t(f)&&i(f),U(K)}else i(f);v=t(f)}if(v!==null)var ye=!0;else{var ze=t(h);ze!==null&&J(C,ze.startTime-K),ye=!1}return ye}finally{v=null,m=Q,x=!1}}var L=!1,F=null,E=-1,N=5,B=-1;function H(){return!(n.unstable_now()-B<N)}function j(){if(F!==null){var q=n.unstable_now();B=q;var K=!0;try{K=F(!0,q)}finally{K?te():(L=!1,F=null)}}else L=!1}var te;if(typeof P=="function")te=function(){P(j)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ne=V.port2;V.port1.onmessage=j,te=function(){ne.postMessage(null)}}else te=function(){S(j,0)};function he(q){F=q,L||(L=!0,te())}function J(q,K){E=S(function(){q(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,he(R))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(q){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Q=m;m=K;try{return q()}finally{m=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,K){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Q=m;m=q;try{return K()}finally{m=Q}},n.unstable_scheduleCallback=function(q,K,Q){var I=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?I+Q:I):Q=I,q){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,q={id:p++,callback:K,priorityLevel:q,startTime:Q,expirationTime:re,sortIndex:-1},Q>I?(q.sortIndex=Q,e(h,q),t(f)===null&&q===t(h)&&(T?(y(E),E=-1):T=!0,J(C,Q-I))):(q.sortIndex=re,e(f,q),M||x||(M=!0,he(R))),q},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(q){var K=m;return function(){var Q=m;m=K;try{return q.apply(this,arguments)}finally{m=Q}}}})(Pd)),Pd}var tv;function qw(){return tv||(tv=1,Rd.exports=Yw()),Rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function $w(){if(nv)return Jn;nv=1;var n=Dp(),e=qw();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function m(r){return f.call(v,r)?!0:f.call(p,r)?!1:h.test(r)?v[r]=!0:(p[r]=!0,!1)}function x(r,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,l,d){if(s===null||typeof s>"u"||x(r,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(r,s,l,d,g,_,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=_,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new T(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];S[s]=new T(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new T(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new T(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new T(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new T(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new T(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new T(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new T(r,5,!1,r.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(y,P);S[s]=new T(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(y,P);S[s]=new T(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(y,P);S[s]=new T(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new T(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new T(r,1,!1,r.toLowerCase(),null,!0,!0)});function U(r,s,l,d){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,d)&&(l=null),d||g===null?m(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):g.mustUseProperty?r[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,d=g.attributeNamespace,l===null?r.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?r.setAttributeNS(d,s,l):r.setAttribute(s,l))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),q=Symbol.iterator;function K(r){return r===null||typeof r!="object"?null:(r=q&&r[q]||r["@@iterator"],typeof r=="function"?r:null)}var Q=Object.assign,I;function re(r){if(I===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);I=s&&s[1]||""}return`
`+I+r}var ye=!1;function ze(r,s){if(!r||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var d=ue}Reflect.construct(r,[],s)}else{try{s.call()}catch(ue){d=ue}r.call(s.prototype)}else{try{throw Error()}catch(ue){d=ue}r()}}catch(ue){if(ue&&d&&typeof ue.stack=="string"){for(var g=ue.stack.split(`
`),_=d.stack.split(`
`),b=g.length-1,k=_.length-1;1<=b&&0<=k&&g[b]!==_[k];)k--;for(;1<=b&&0<=k;b--,k--)if(g[b]!==_[k]){if(b!==1||k!==1)do if(b--,k--,0>k||g[b]!==_[k]){var z=`
`+g[b].replace(" at new "," at ");return r.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",r.displayName)),z}while(1<=b&&0<=k);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?re(r):""}function Ue(r){switch(r.tag){case 5:return re(r.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return r=ze(r.type,!1),r;case 11:return r=ze(r.type.render,!1),r;case 1:return r=ze(r.type,!0),r;default:return""}}function We(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case L:return"Portal";case N:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case V:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case H:return(r.displayName||"Context")+".Consumer";case B:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ne:return s=r.displayName||null,s!==null?s:We(r.type)||"Memo";case he:s=r._payload,r=r._init;try{return We(r(s))}catch{}}return null}function ae(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return We(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Te(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function qe(r){var s=Te(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,_=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return g.call(this)},set:function(b){d=""+b,_.call(this,b)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(b){d=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function ke(r){r._valueTracker||(r._valueTracker=qe(r))}function ct(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return r&&(d=Te(r)?r.checked?"true":"false":r.value),r=d,r!==l?(s.setValue(r),!0):!1}function Ut(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function dt(r,s){var l=s.checked;return Q({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function yt(r,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=fe(s.value!=null?s.value:l),r._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function At(r,s){s=s.checked,s!=null&&U(r,"checked",s,!1)}function gt(r,s){At(r,s);var l=fe(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Yt(r,s.type,l):s.hasOwnProperty("defaultValue")&&Yt(r,s.type,fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ft(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Yt(r,s,l){(s!=="number"||Ut(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var qt=Array.isArray;function Ct(r,s,l,d){if(r=r.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<r.length;l++)g=s.hasOwnProperty("$"+r[l].value),r[l].selected!==g&&(r[l].selected=g),g&&d&&(r[l].defaultSelected=!0)}else{for(l=""+fe(l),s=null,g=0;g<r.length;g++){if(r[g].value===l){r[g].selected=!0,d&&(r[g].defaultSelected=!0);return}s!==null||r[g].disabled||(s=r[g])}s!==null&&(s.selected=!0)}}function zt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function X(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(qt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:fe(l)}}function rn(r,s){var l=fe(s.value),d=fe(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),d!=null&&(r.defaultValue=""+d)}function _e(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function D(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?D(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Z,ee=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,g){MSApp.execUnsafeLocalFunction(function(){return r(s,l,d,g)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Z.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function de(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(r){Ae.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),we[s]=we[r]})});function pe(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||we.hasOwnProperty(r)&&we[r]?(""+s).trim():s+"px"}function ge(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=pe(l,s[l],d);l==="float"&&(l="cssFloat"),d?r.setProperty(l,g):r[l]=g}}var Le=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(r,s){if(s){if(Le[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function De(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Qe(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var it=null,lt=null,G=null;function Re(r){if(r=ma(r)){if(typeof it!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Vl(s),it(r.stateNode,r.type,s))}}function me(r){lt?G?G.push(r):G=[r]:lt=r}function Pe(){if(lt){var r=lt,s=G;if(G=lt=null,Re(r),s)for(r=0;r<s.length;r++)Re(s[r])}}function Be(r,s){return r(s)}function ve(){}var tt=!1;function $e(r,s,l){if(tt)return r(s,l);tt=!0;try{return Be(r,s,l)}finally{tt=!1,(lt!==null||G!==null)&&(ve(),Pe())}}function Pt(r,s){var l=r.stateNode;if(l===null)return null;var d=Vl(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var bt=!1;if(u)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){bt=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{bt=!1}function hi(r,s,l,d,g,_,b,k,z){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(Me){this.onError(Me)}}var os=!1,Vs=null,as=!1,ls=null,qu={onError:function(r){os=!0,Vs=r}};function wl(r,s,l,d,g,_,b,k,z){os=!1,Vs=null,hi.apply(qu,arguments)}function El(r,s,l,d,g,_,b,k,z){if(wl.apply(this,arguments),os){if(os){var ue=Vs;os=!1,Vs=null}else throw Error(t(198));as||(as=!0,ls=ue)}}function Hn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Hs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function qo(r){if(Hn(r)!==r)throw Error(t(188))}function Tl(r){var s=r.alternate;if(!s){if(s=Hn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,d=s;;){var g=l.return;if(g===null)break;var _=g.alternate;if(_===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===l)return qo(g),r;if(_===d)return qo(g),s;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=_;else{for(var b=!1,k=g.child;k;){if(k===l){b=!0,l=g,d=_;break}if(k===d){b=!0,d=g,l=_;break}k=k.sibling}if(!b){for(k=_.child;k;){if(k===l){b=!0,l=_,d=g;break}if(k===d){b=!0,d=_,l=g;break}k=k.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function cs(r){return r=Tl(r),r!==null?$o(r):null}function $o(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=$o(r);if(s!==null)return s;r=r.sibling}return null}var us=e.unstable_scheduleCallback,Ko=e.unstable_cancelCallback,bl=e.unstable_shouldYield,$u=e.unstable_requestPaint,Qt=e.unstable_now,Ku=e.unstable_getCurrentPriorityLevel,Zo=e.unstable_ImmediatePriority,Qo=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,W=e.unstable_LowPriority,ce=e.unstable_IdlePriority,se=null,ie=null;function Fe(r){if(ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(se,r,void 0,(r.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Je,Ie=Math.log,je=Math.LN2;function Je(r){return r>>>=0,r===0?32:31-(Ie(r)/je|0)|0}var ht=64,vt=4194304;function Ge(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function wt(r,s){var l=r.pendingLanes;if(l===0)return 0;var d=0,g=r.suspendedLanes,_=r.pingedLanes,b=l&268435455;if(b!==0){var k=b&~g;k!==0?d=Ge(k):(_&=b,_!==0&&(d=Ge(_)))}else b=l&~g,b!==0?d=Ge(b):_!==0&&(d=Ge(_));if(d===0)return 0;if(s!==0&&s!==d&&(s&g)===0&&(g=d&-d,_=s&-s,g>=_||g===16&&(_&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)l=31-Ne(s),g=1<<l,d|=r[l],s&=~g;return d}function sn(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(r,s){for(var l=r.suspendedLanes,d=r.pingedLanes,g=r.expirationTimes,_=r.pendingLanes;0<_;){var b=31-Ne(_),k=1<<b,z=g[b];z===-1?((k&l)===0||(k&d)!==0)&&(g[b]=sn(k,s)):z<=s&&(r.expiredLanes|=k),_&=~k}}function It(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function hn(){var r=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),r}function Ve(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ln(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ne(s),r[s]=l}function Et(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<l;){var g=31-Ne(l),_=1<<g;s[g]=0,d[g]=-1,r[g]=-1,l&=~_}}function Dn(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var d=31-Ne(l),g=1<<d;g&s|r[d]&s&&(r[d]|=s),l&=~g}}var xt=0;function bi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var nr,Lt,$t,Ai,Ot,pi=!1,Ci=[],Ri=null,Tr=null,br=null,Jo=new Map,ea=new Map,Ar=[],uM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nm(r,s){switch(r){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Jo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(s.pointerId)}}function ta(r,s,l,d,g,_){return r===null||r.nativeEvent!==_?(r={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[g]},s!==null&&(s=ma(s),s!==null&&Lt(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),r)}function fM(r,s,l,d,g){switch(s){case"focusin":return Ri=ta(Ri,r,s,l,d,g),!0;case"dragenter":return Tr=ta(Tr,r,s,l,d,g),!0;case"mouseover":return br=ta(br,r,s,l,d,g),!0;case"pointerover":var _=g.pointerId;return Jo.set(_,ta(Jo.get(_)||null,r,s,l,d,g)),!0;case"gotpointercapture":return _=g.pointerId,ea.set(_,ta(ea.get(_)||null,r,s,l,d,g)),!0}return!1}function Im(r){var s=fs(r.target);if(s!==null){var l=Hn(s);if(l!==null){if(s=l.tag,s===13){if(s=Hs(l),s!==null){r.blockedOn=s,Ot(r.priority,function(){$t(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Al(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Qu(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var d=new l.constructor(l.type,l);Ce=d,l.target.dispatchEvent(d),Ce=null}else return s=ma(l),s!==null&&Lt(s),r.blockedOn=l,!1;s.shift()}return!0}function Um(r,s,l){Al(r)&&l.delete(s)}function dM(){pi=!1,Ri!==null&&Al(Ri)&&(Ri=null),Tr!==null&&Al(Tr)&&(Tr=null),br!==null&&Al(br)&&(br=null),Jo.forEach(Um),ea.forEach(Um)}function na(r,s){r.blockedOn===s&&(r.blockedOn=null,pi||(pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dM)))}function ia(r){function s(g){return na(g,r)}if(0<Ci.length){na(Ci[0],r);for(var l=1;l<Ci.length;l++){var d=Ci[l];d.blockedOn===r&&(d.blockedOn=null)}}for(Ri!==null&&na(Ri,r),Tr!==null&&na(Tr,r),br!==null&&na(br,r),Jo.forEach(s),ea.forEach(s),l=0;l<Ar.length;l++)d=Ar[l],d.blockedOn===r&&(d.blockedOn=null);for(;0<Ar.length&&(l=Ar[0],l.blockedOn===null);)Im(l),l.blockedOn===null&&Ar.shift()}var Gs=C.ReactCurrentBatchConfig,Cl=!0;function hM(r,s,l,d){var g=xt,_=Gs.transition;Gs.transition=null;try{xt=1,Zu(r,s,l,d)}finally{xt=g,Gs.transition=_}}function pM(r,s,l,d){var g=xt,_=Gs.transition;Gs.transition=null;try{xt=4,Zu(r,s,l,d)}finally{xt=g,Gs.transition=_}}function Zu(r,s,l,d){if(Cl){var g=Qu(r,s,l,d);if(g===null)gf(r,s,d,Rl,l),Nm(r,d);else if(fM(g,r,s,l,d))d.stopPropagation();else if(Nm(r,d),s&4&&-1<uM.indexOf(r)){for(;g!==null;){var _=ma(g);if(_!==null&&nr(_),_=Qu(r,s,l,d),_===null&&gf(r,s,d,Rl,l),_===g)break;g=_}g!==null&&d.stopPropagation()}else gf(r,s,d,null,l)}}var Rl=null;function Qu(r,s,l,d){if(Rl=null,r=Qe(d),r=fs(r),r!==null)if(s=Hn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Hs(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Rl=r,null}function Fm(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ku()){case Zo:return 1;case Qo:return 4;case A:case W:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Cr=null,Ju=null,Pl=null;function Om(){if(Pl)return Pl;var r,s=Ju,l=s.length,d,g="value"in Cr?Cr.value:Cr.textContent,_=g.length;for(r=0;r<l&&s[r]===g[r];r++);var b=l-r;for(d=1;d<=b&&s[l-d]===g[_-d];d++);return Pl=g.slice(r,1<d?1-d:void 0)}function Ll(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Dl(){return!0}function km(){return!1}function ri(r){function s(l,d,g,_,b){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(l=r[k],this[k]=l?l(_):_[k]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Dl:km,this.isPropagationStopped=km,this}return Q(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),s}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=ri(Ws),ra=Q({},Ws,{view:0,detail:0}),mM=ri(ra),tf,nf,sa,Nl=Q({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==sa&&(sa&&r.type==="mousemove"?(tf=r.screenX-sa.screenX,nf=r.screenY-sa.screenY):nf=tf=0,sa=r),tf)},movementY:function(r){return"movementY"in r?r.movementY:nf}}),Bm=ri(Nl),gM=Q({},Nl,{dataTransfer:0}),vM=ri(gM),xM=Q({},ra,{relatedTarget:0}),rf=ri(xM),_M=Q({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),yM=ri(_M),SM=Q({},Ws,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),MM=ri(SM),wM=Q({},Ws,{data:0}),zm=ri(wM),EM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=bM[r])?!!s[r]:!1}function sf(){return AM}var CM=Q({},ra,{key:function(r){if(r.key){var s=EM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ll(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?TM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(r){return r.type==="keypress"?Ll(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ll(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),RM=ri(CM),PM=Q({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=ri(PM),LM=Q({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),DM=ri(LM),NM=Q({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=ri(NM),UM=Q({},Nl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),FM=ri(UM),OM=[9,13,27,32],of=u&&"CompositionEvent"in window,oa=null;u&&"documentMode"in document&&(oa=document.documentMode);var kM=u&&"TextEvent"in window&&!oa,Hm=u&&(!of||oa&&8<oa&&11>=oa),Gm=" ",Wm=!1;function Xm(r,s){switch(r){case"keyup":return OM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Xs=!1;function BM(r,s){switch(r){case"compositionend":return jm(s);case"keypress":return s.which!==32?null:(Wm=!0,Gm);case"textInput":return r=s.data,r===Gm&&Wm?null:r;default:return null}}function zM(r,s){if(Xs)return r==="compositionend"||!of&&Xm(r,s)?(r=Om(),Pl=Ju=Cr=null,Xs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Hm&&s.locale!=="ko"?null:s.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!VM[r.type]:s==="textarea"}function qm(r,s,l,d){me(d),s=kl(s,"onChange"),0<s.length&&(l=new ef("onChange","change",null,l,d),r.push({event:l,listeners:s}))}var aa=null,la=null;function HM(r){dg(r,0)}function Il(r){var s=Ks(r);if(ct(s))return r}function GM(r,s){if(r==="change")return s}var $m=!1;if(u){var af;if(u){var lf="oninput"in document;if(!lf){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),lf=typeof Km.oninput=="function"}af=lf}else af=!1;$m=af&&(!document.documentMode||9<document.documentMode)}function Zm(){aa&&(aa.detachEvent("onpropertychange",Qm),la=aa=null)}function Qm(r){if(r.propertyName==="value"&&Il(la)){var s=[];qm(s,la,r,Qe(r)),$e(HM,s)}}function WM(r,s,l){r==="focusin"?(Zm(),aa=s,la=l,aa.attachEvent("onpropertychange",Qm)):r==="focusout"&&Zm()}function XM(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Il(la)}function jM(r,s){if(r==="click")return Il(s)}function YM(r,s){if(r==="input"||r==="change")return Il(s)}function qM(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Pi=typeof Object.is=="function"?Object.is:qM;function ca(r,s){if(Pi(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(s,g)||!Pi(r[g],s[g]))return!1}return!0}function Jm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function eg(r,s){var l=Jm(r);r=0;for(var d;l;){if(l.nodeType===3){if(d=r+l.textContent.length,r<=s&&d>=s)return{node:l,offset:s-r};r=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Jm(l)}}function tg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?tg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function ng(){for(var r=window,s=Ut();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Ut(r.document)}return s}function cf(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function $M(r){var s=ng(),l=r.focusedElem,d=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&tg(l.ownerDocument.documentElement,l)){if(d!==null&&cf(l)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var g=l.textContent.length,_=Math.min(d.start,g);d=d.end===void 0?_:Math.min(d.end,g),!r.extend&&_>d&&(g=d,d=_,_=g),g=eg(l,_);var b=eg(l,d);g&&b&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==b.node||r.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),r.removeAllRanges(),_>d?(r.addRange(s),r.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var KM=u&&"documentMode"in document&&11>=document.documentMode,js=null,uf=null,ua=null,ff=!1;function ig(r,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ff||js==null||js!==Ut(d)||(d=js,"selectionStart"in d&&cf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ua&&ca(ua,d)||(ua=d,d=kl(uf,"onSelect"),0<d.length&&(s=new ef("onSelect","select",null,s,l),r.push({event:s,listeners:d}),s.target=js)))}function Ul(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var Ys={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},df={},rg={};u&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Fl(r){if(df[r])return df[r];if(!Ys[r])return r;var s=Ys[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in rg)return df[r]=s[l];return r}var sg=Fl("animationend"),og=Fl("animationiteration"),ag=Fl("animationstart"),lg=Fl("transitionend"),cg=new Map,ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(r,s){cg.set(r,s),a(s,[r])}for(var hf=0;hf<ug.length;hf++){var pf=ug[hf],ZM=pf.toLowerCase(),QM=pf[0].toUpperCase()+pf.slice(1);Rr(ZM,"on"+QM)}Rr(sg,"onAnimationEnd"),Rr(og,"onAnimationIteration"),Rr(ag,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(lg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JM=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function fg(r,s,l){var d=r.type||"unknown-event";r.currentTarget=l,El(d,s,void 0,r),r.currentTarget=null}function dg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var d=r[l],g=d.event;d=d.listeners;e:{var _=void 0;if(s)for(var b=d.length-1;0<=b;b--){var k=d[b],z=k.instance,ue=k.currentTarget;if(k=k.listener,z!==_&&g.isPropagationStopped())break e;fg(g,k,ue),_=z}else for(b=0;b<d.length;b++){if(k=d[b],z=k.instance,ue=k.currentTarget,k=k.listener,z!==_&&g.isPropagationStopped())break e;fg(g,k,ue),_=z}}}if(as)throw r=ls,as=!1,ls=null,r}function Wt(r,s){var l=s[Mf];l===void 0&&(l=s[Mf]=new Set);var d=r+"__bubble";l.has(d)||(hg(s,r,2,!1),l.add(d))}function mf(r,s,l){var d=0;s&&(d|=4),hg(l,r,d,s)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function da(r){if(!r[Ol]){r[Ol]=!0,i.forEach(function(l){l!=="selectionchange"&&(JM.has(l)||mf(l,!1,r),mf(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ol]||(s[Ol]=!0,mf("selectionchange",!1,s))}}function hg(r,s,l,d){switch(Fm(s)){case 1:var g=hM;break;case 4:g=pM;break;default:g=Zu}l=g.bind(null,s,l,r),g=void 0,!bt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),d?g!==void 0?r.addEventListener(s,l,{capture:!0,passive:g}):r.addEventListener(s,l,!0):g!==void 0?r.addEventListener(s,l,{passive:g}):r.addEventListener(s,l,!1)}function gf(r,s,l,d,g){var _=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var b=d.tag;if(b===3||b===4){var k=d.stateNode.containerInfo;if(k===g||k.nodeType===8&&k.parentNode===g)break;if(b===4)for(b=d.return;b!==null;){var z=b.tag;if((z===3||z===4)&&(z=b.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;b=b.return}for(;k!==null;){if(b=fs(k),b===null)return;if(z=b.tag,z===5||z===6){d=_=b;continue e}k=k.parentNode}}d=d.return}$e(function(){var ue=_,Me=Qe(l),Ee=[];e:{var Se=cg.get(r);if(Se!==void 0){var He=ef,Ye=r;switch(r){case"keypress":if(Ll(l)===0)break e;case"keydown":case"keyup":He=RM;break;case"focusin":Ye="focus",He=rf;break;case"focusout":Ye="blur",He=rf;break;case"beforeblur":case"afterblur":He=rf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=vM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=DM;break;case sg:case og:case ag:He=yM;break;case lg:He=IM;break;case"scroll":He=mM;break;case"wheel":He=FM;break;case"copy":case"cut":case"paste":He=MM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Vm}var Ke=(s&4)!==0,cn=!Ke&&r==="scroll",oe=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var $=ue,le;$!==null;){le=$;var be=le.stateNode;if(le.tag===5&&be!==null&&(le=be,oe!==null&&(be=Pt($,oe),be!=null&&Ke.push(ha($,be,le)))),cn)break;$=$.return}0<Ke.length&&(Se=new He(Se,Ye,null,l,Me),Ee.push({event:Se,listeners:Ke}))}}if((s&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",He=r==="mouseout"||r==="pointerout",Se&&l!==Ce&&(Ye=l.relatedTarget||l.fromElement)&&(fs(Ye)||Ye[ir]))break e;if((He||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(Ye=l.relatedTarget||l.toElement,He=ue,Ye=Ye?fs(Ye):null,Ye!==null&&(cn=Hn(Ye),Ye!==cn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=ue),He!==Ye)){if(Ke=Bm,be="onMouseLeave",oe="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(Ke=Vm,be="onPointerLeave",oe="onPointerEnter",$="pointer"),cn=He==null?Se:Ks(He),le=Ye==null?Se:Ks(Ye),Se=new Ke(be,$+"leave",He,l,Me),Se.target=cn,Se.relatedTarget=le,be=null,fs(Me)===ue&&(Ke=new Ke(oe,$+"enter",Ye,l,Me),Ke.target=le,Ke.relatedTarget=cn,be=Ke),cn=be,He&&Ye)t:{for(Ke=He,oe=Ye,$=0,le=Ke;le;le=qs(le))$++;for(le=0,be=oe;be;be=qs(be))le++;for(;0<$-le;)Ke=qs(Ke),$--;for(;0<le-$;)oe=qs(oe),le--;for(;$--;){if(Ke===oe||oe!==null&&Ke===oe.alternate)break t;Ke=qs(Ke),oe=qs(oe)}Ke=null}else Ke=null;He!==null&&pg(Ee,Se,He,Ke,!1),Ye!==null&&cn!==null&&pg(Ee,cn,Ye,Ke,!0)}}e:{if(Se=ue?Ks(ue):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var nt=GM;else if(Ym(Se))if($m)nt=YM;else{nt=XM;var rt=WM}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(nt=jM);if(nt&&(nt=nt(r,ue))){qm(Ee,nt,l,Me);break e}rt&&rt(r,Se,ue),r==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&Yt(Se,"number",Se.value)}switch(rt=ue?Ks(ue):window,r){case"focusin":(Ym(rt)||rt.contentEditable==="true")&&(js=rt,uf=ue,ua=null);break;case"focusout":ua=uf=js=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,ig(Ee,l,Me);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":ig(Ee,l,Me)}var st;if(of)e:{switch(r){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Xs?Xm(r,l)&&(ut="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(Hm&&l.locale!=="ko"&&(Xs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Xs&&(st=Om()):(Cr=Me,Ju="value"in Cr?Cr.value:Cr.textContent,Xs=!0)),rt=kl(ue,ut),0<rt.length&&(ut=new zm(ut,r,null,l,Me),Ee.push({event:ut,listeners:rt}),st?ut.data=st:(st=jm(l),st!==null&&(ut.data=st)))),(st=kM?BM(r,l):zM(r,l))&&(ue=kl(ue,"onBeforeInput"),0<ue.length&&(Me=new zm("onBeforeInput","beforeinput",null,l,Me),Ee.push({event:Me,listeners:ue}),Me.data=st))}dg(Ee,s)})}function ha(r,s,l){return{instance:r,listener:s,currentTarget:l}}function kl(r,s){for(var l=s+"Capture",d=[];r!==null;){var g=r,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=Pt(r,l),_!=null&&d.unshift(ha(r,_,g)),_=Pt(r,s),_!=null&&d.push(ha(r,_,g))),r=r.return}return d}function qs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function pg(r,s,l,d,g){for(var _=s._reactName,b=[];l!==null&&l!==d;){var k=l,z=k.alternate,ue=k.stateNode;if(z!==null&&z===d)break;k.tag===5&&ue!==null&&(k=ue,g?(z=Pt(l,_),z!=null&&b.unshift(ha(l,z,k))):g||(z=Pt(l,_),z!=null&&b.push(ha(l,z,k)))),l=l.return}b.length!==0&&r.push({event:s,listeners:b})}var ew=/\r\n?/g,tw=/\u0000|\uFFFD/g;function mg(r){return(typeof r=="string"?r:""+r).replace(ew,`
`).replace(tw,"")}function Bl(r,s,l){if(s=mg(s),mg(r)!==s&&l)throw Error(t(425))}function zl(){}var vf=null,xf=null;function _f(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,iw=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(r){return gg.resolve(null).then(r).catch(rw)}:yf;function rw(r){setTimeout(function(){throw r})}function Sf(r,s){var l=s,d=0;do{var g=l.nextSibling;if(r.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){r.removeChild(g),ia(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);ia(s)}function Pr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function vg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Hi="__reactFiber$"+$s,pa="__reactProps$"+$s,ir="__reactContainer$"+$s,Mf="__reactEvents$"+$s,sw="__reactListeners$"+$s,ow="__reactHandles$"+$s;function fs(r){var s=r[Hi];if(s)return s;for(var l=r.parentNode;l;){if(s=l[ir]||l[Hi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=vg(r);r!==null;){if(l=r[Hi])return l;r=vg(r)}return s}r=l,l=r.parentNode}return null}function ma(r){return r=r[Hi]||r[ir],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Ks(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Vl(r){return r[pa]||null}var wf=[],Zs=-1;function Lr(r){return{current:r}}function Xt(r){0>Zs||(r.current=wf[Zs],wf[Zs]=null,Zs--)}function Gt(r,s){Zs++,wf[Zs]=r.current,r.current=s}var Dr={},Nn=Lr(Dr),qn=Lr(!1),ds=Dr;function Qs(r,s){var l=r.type.contextTypes;if(!l)return Dr;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in l)g[_]=s[_];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=g),g}function $n(r){return r=r.childContextTypes,r!=null}function Hl(){Xt(qn),Xt(Nn)}function xg(r,s,l){if(Nn.current!==Dr)throw Error(t(168));Gt(Nn,s),Gt(qn,l)}function _g(r,s,l){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in s))throw Error(t(108,ae(r)||"Unknown",g));return Q({},l,d)}function Gl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Dr,ds=Nn.current,Gt(Nn,r),Gt(qn,qn.current),!0}function yg(r,s,l){var d=r.stateNode;if(!d)throw Error(t(169));l?(r=_g(r,s,ds),d.__reactInternalMemoizedMergedChildContext=r,Xt(qn),Xt(Nn),Gt(Nn,r)):Xt(qn),Gt(qn,l)}var rr=null,Wl=!1,Ef=!1;function Sg(r){rr===null?rr=[r]:rr.push(r)}function aw(r){Wl=!0,Sg(r)}function Nr(){if(!Ef&&rr!==null){Ef=!0;var r=0,s=xt;try{var l=rr;for(xt=1;r<l.length;r++){var d=l[r];do d=d(!0);while(d!==null)}rr=null,Wl=!1}catch(g){throw rr!==null&&(rr=rr.slice(r+1)),us(Zo,Nr),g}finally{xt=s,Ef=!1}}return null}var Js=[],eo=0,Xl=null,jl=0,mi=[],gi=0,hs=null,sr=1,or="";function ps(r,s){Js[eo++]=jl,Js[eo++]=Xl,Xl=r,jl=s}function Mg(r,s,l){mi[gi++]=sr,mi[gi++]=or,mi[gi++]=hs,hs=r;var d=sr;r=or;var g=32-Ne(d)-1;d&=~(1<<g),l+=1;var _=32-Ne(s)+g;if(30<_){var b=g-g%5;_=(d&(1<<b)-1).toString(32),d>>=b,g-=b,sr=1<<32-Ne(s)+g|l<<g|d,or=_+r}else sr=1<<_|l<<g|d,or=r}function Tf(r){r.return!==null&&(ps(r,1),Mg(r,1,0))}function bf(r){for(;r===Xl;)Xl=Js[--eo],Js[eo]=null,jl=Js[--eo],Js[eo]=null;for(;r===hs;)hs=mi[--gi],mi[gi]=null,or=mi[--gi],mi[gi]=null,sr=mi[--gi],mi[gi]=null}var si=null,oi=null,Kt=!1,Li=null;function wg(r,s){var l=yi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Eg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,si=r,oi=Pr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,si=r,oi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=hs!==null?{id:sr,overflow:or}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=yi(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,si=r,oi=null,!0):!1;default:return!1}}function Af(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Cf(r){if(Kt){var s=oi;if(s){var l=s;if(!Eg(r,s)){if(Af(r))throw Error(t(418));s=Pr(l.nextSibling);var d=si;s&&Eg(r,s)?wg(d,l):(r.flags=r.flags&-4097|2,Kt=!1,si=r)}}else{if(Af(r))throw Error(t(418));r.flags=r.flags&-4097|2,Kt=!1,si=r}}}function Tg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;si=r}function Yl(r){if(r!==si)return!1;if(!Kt)return Tg(r),Kt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!_f(r.type,r.memoizedProps)),s&&(s=oi)){if(Af(r))throw bg(),Error(t(418));for(;s;)wg(r,s),s=Pr(s.nextSibling)}if(Tg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){oi=Pr(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}oi=null}}else oi=si?Pr(r.stateNode.nextSibling):null;return!0}function bg(){for(var r=oi;r;)r=Pr(r.nextSibling)}function to(){oi=si=null,Kt=!1}function Rf(r){Li===null?Li=[r]:Li.push(r)}var lw=C.ReactCurrentBatchConfig;function ga(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,r));var g=d,_=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(b){var k=g.refs;b===null?delete k[_]:k[_]=b},s._stringRef=_,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function ql(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Ag(r){var s=r._init;return s(r._payload)}function Cg(r){function s(oe,$){if(r){var le=oe.deletions;le===null?(oe.deletions=[$],oe.flags|=16):le.push($)}}function l(oe,$){if(!r)return null;for(;$!==null;)s(oe,$),$=$.sibling;return null}function d(oe,$){for(oe=new Map;$!==null;)$.key!==null?oe.set($.key,$):oe.set($.index,$),$=$.sibling;return oe}function g(oe,$){return oe=Vr(oe,$),oe.index=0,oe.sibling=null,oe}function _(oe,$,le){return oe.index=le,r?(le=oe.alternate,le!==null?(le=le.index,le<$?(oe.flags|=2,$):le):(oe.flags|=2,$)):(oe.flags|=1048576,$)}function b(oe){return r&&oe.alternate===null&&(oe.flags|=2),oe}function k(oe,$,le,be){return $===null||$.tag!==6?($=yd(le,oe.mode,be),$.return=oe,$):($=g($,le),$.return=oe,$)}function z(oe,$,le,be){var nt=le.type;return nt===F?Me(oe,$,le.props.children,be,le.key):$!==null&&($.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===he&&Ag(nt)===$.type)?(be=g($,le.props),be.ref=ga(oe,$,le),be.return=oe,be):(be=xc(le.type,le.key,le.props,null,oe.mode,be),be.ref=ga(oe,$,le),be.return=oe,be)}function ue(oe,$,le,be){return $===null||$.tag!==4||$.stateNode.containerInfo!==le.containerInfo||$.stateNode.implementation!==le.implementation?($=Sd(le,oe.mode,be),$.return=oe,$):($=g($,le.children||[]),$.return=oe,$)}function Me(oe,$,le,be,nt){return $===null||$.tag!==7?($=Ms(le,oe.mode,be,nt),$.return=oe,$):($=g($,le),$.return=oe,$)}function Ee(oe,$,le){if(typeof $=="string"&&$!==""||typeof $=="number")return $=yd(""+$,oe.mode,le),$.return=oe,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return le=xc($.type,$.key,$.props,null,oe.mode,le),le.ref=ga(oe,null,$),le.return=oe,le;case L:return $=Sd($,oe.mode,le),$.return=oe,$;case he:var be=$._init;return Ee(oe,be($._payload),le)}if(qt($)||K($))return $=Ms($,oe.mode,le,null),$.return=oe,$;ql(oe,$)}return null}function Se(oe,$,le,be){var nt=$!==null?$.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return nt!==null?null:k(oe,$,""+le,be);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case R:return le.key===nt?z(oe,$,le,be):null;case L:return le.key===nt?ue(oe,$,le,be):null;case he:return nt=le._init,Se(oe,$,nt(le._payload),be)}if(qt(le)||K(le))return nt!==null?null:Me(oe,$,le,be,null);ql(oe,le)}return null}function He(oe,$,le,be,nt){if(typeof be=="string"&&be!==""||typeof be=="number")return oe=oe.get(le)||null,k($,oe,""+be,nt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case R:return oe=oe.get(be.key===null?le:be.key)||null,z($,oe,be,nt);case L:return oe=oe.get(be.key===null?le:be.key)||null,ue($,oe,be,nt);case he:var rt=be._init;return He(oe,$,le,rt(be._payload),nt)}if(qt(be)||K(be))return oe=oe.get(le)||null,Me($,oe,be,nt,null);ql($,be)}return null}function Ye(oe,$,le,be){for(var nt=null,rt=null,st=$,ut=$=0,Sn=null;st!==null&&ut<le.length;ut++){st.index>ut?(Sn=st,st=null):Sn=st.sibling;var Dt=Se(oe,st,le[ut],be);if(Dt===null){st===null&&(st=Sn);break}r&&st&&Dt.alternate===null&&s(oe,st),$=_(Dt,$,ut),rt===null?nt=Dt:rt.sibling=Dt,rt=Dt,st=Sn}if(ut===le.length)return l(oe,st),Kt&&ps(oe,ut),nt;if(st===null){for(;ut<le.length;ut++)st=Ee(oe,le[ut],be),st!==null&&($=_(st,$,ut),rt===null?nt=st:rt.sibling=st,rt=st);return Kt&&ps(oe,ut),nt}for(st=d(oe,st);ut<le.length;ut++)Sn=He(st,oe,ut,le[ut],be),Sn!==null&&(r&&Sn.alternate!==null&&st.delete(Sn.key===null?ut:Sn.key),$=_(Sn,$,ut),rt===null?nt=Sn:rt.sibling=Sn,rt=Sn);return r&&st.forEach(function(Hr){return s(oe,Hr)}),Kt&&ps(oe,ut),nt}function Ke(oe,$,le,be){var nt=K(le);if(typeof nt!="function")throw Error(t(150));if(le=nt.call(le),le==null)throw Error(t(151));for(var rt=nt=null,st=$,ut=$=0,Sn=null,Dt=le.next();st!==null&&!Dt.done;ut++,Dt=le.next()){st.index>ut?(Sn=st,st=null):Sn=st.sibling;var Hr=Se(oe,st,Dt.value,be);if(Hr===null){st===null&&(st=Sn);break}r&&st&&Hr.alternate===null&&s(oe,st),$=_(Hr,$,ut),rt===null?nt=Hr:rt.sibling=Hr,rt=Hr,st=Sn}if(Dt.done)return l(oe,st),Kt&&ps(oe,ut),nt;if(st===null){for(;!Dt.done;ut++,Dt=le.next())Dt=Ee(oe,Dt.value,be),Dt!==null&&($=_(Dt,$,ut),rt===null?nt=Dt:rt.sibling=Dt,rt=Dt);return Kt&&ps(oe,ut),nt}for(st=d(oe,st);!Dt.done;ut++,Dt=le.next())Dt=He(st,oe,ut,Dt.value,be),Dt!==null&&(r&&Dt.alternate!==null&&st.delete(Dt.key===null?ut:Dt.key),$=_(Dt,$,ut),rt===null?nt=Dt:rt.sibling=Dt,rt=Dt);return r&&st.forEach(function(Vw){return s(oe,Vw)}),Kt&&ps(oe,ut),nt}function cn(oe,$,le,be){if(typeof le=="object"&&le!==null&&le.type===F&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case R:e:{for(var nt=le.key,rt=$;rt!==null;){if(rt.key===nt){if(nt=le.type,nt===F){if(rt.tag===7){l(oe,rt.sibling),$=g(rt,le.props.children),$.return=oe,oe=$;break e}}else if(rt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===he&&Ag(nt)===rt.type){l(oe,rt.sibling),$=g(rt,le.props),$.ref=ga(oe,rt,le),$.return=oe,oe=$;break e}l(oe,rt);break}else s(oe,rt);rt=rt.sibling}le.type===F?($=Ms(le.props.children,oe.mode,be,le.key),$.return=oe,oe=$):(be=xc(le.type,le.key,le.props,null,oe.mode,be),be.ref=ga(oe,$,le),be.return=oe,oe=be)}return b(oe);case L:e:{for(rt=le.key;$!==null;){if($.key===rt)if($.tag===4&&$.stateNode.containerInfo===le.containerInfo&&$.stateNode.implementation===le.implementation){l(oe,$.sibling),$=g($,le.children||[]),$.return=oe,oe=$;break e}else{l(oe,$);break}else s(oe,$);$=$.sibling}$=Sd(le,oe.mode,be),$.return=oe,oe=$}return b(oe);case he:return rt=le._init,cn(oe,$,rt(le._payload),be)}if(qt(le))return Ye(oe,$,le,be);if(K(le))return Ke(oe,$,le,be);ql(oe,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,$!==null&&$.tag===6?(l(oe,$.sibling),$=g($,le),$.return=oe,oe=$):(l(oe,$),$=yd(le,oe.mode,be),$.return=oe,oe=$),b(oe)):l(oe,$)}return cn}var no=Cg(!0),Rg=Cg(!1),$l=Lr(null),Kl=null,io=null,Pf=null;function Lf(){Pf=io=Kl=null}function Df(r){var s=$l.current;Xt($l),r._currentValue=s}function Nf(r,s,l){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===l)break;r=r.return}}function ro(r,s){Kl=r,Pf=io=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Kn=!0),r.firstContext=null)}function vi(r){var s=r._currentValue;if(Pf!==r)if(r={context:r,memoizedValue:s,next:null},io===null){if(Kl===null)throw Error(t(308));io=r,Kl.dependencies={lanes:0,firstContext:r}}else io=io.next=r;return s}var ms=null;function If(r){ms===null?ms=[r]:ms.push(r)}function Pg(r,s,l,d){var g=s.interleaved;return g===null?(l.next=l,If(s)):(l.next=g.next,g.next=l),s.interleaved=l,ar(r,d)}function ar(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Ir=!1;function Uf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function lr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ur(r,s,l){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Rt&2)!==0){var g=d.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s,ar(r,l)}return g=d.interleaved,g===null?(s.next=s,If(d)):(s.next=g.next,g.next=s),d.interleaved=s,ar(r,l)}function Zl(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,Dn(r,l)}}function Dg(r,s){var l=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?g=_=b:_=_.next=b,l=l.next}while(l!==null);_===null?g=_=s:_=_.next=s}else g=_=s;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:d.shared,effects:d.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Ql(r,s,l,d){var g=r.updateQueue;Ir=!1;var _=g.firstBaseUpdate,b=g.lastBaseUpdate,k=g.shared.pending;if(k!==null){g.shared.pending=null;var z=k,ue=z.next;z.next=null,b===null?_=ue:b.next=ue,b=z;var Me=r.alternate;Me!==null&&(Me=Me.updateQueue,k=Me.lastBaseUpdate,k!==b&&(k===null?Me.firstBaseUpdate=ue:k.next=ue,Me.lastBaseUpdate=z))}if(_!==null){var Ee=g.baseState;b=0,Me=ue=z=null,k=_;do{var Se=k.lane,He=k.eventTime;if((d&Se)===Se){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ye=r,Ke=k;switch(Se=s,He=l,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Ee=Ye.call(He,Ee,Se);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,Se=typeof Ye=="function"?Ye.call(He,Ee,Se):Ye,Se==null)break e;Ee=Q({},Ee,Se);break e;case 2:Ir=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,Se=g.effects,Se===null?g.effects=[k]:Se.push(k))}else He={eventTime:He,lane:Se,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Me===null?(ue=Me=He,z=Ee):Me=Me.next=He,b|=Se;if(k=k.next,k===null){if(k=g.shared.pending,k===null)break;Se=k,k=Se.next,Se.next=null,g.lastBaseUpdate=Se,g.shared.pending=null}}while(!0);if(Me===null&&(z=Ee),g.baseState=z,g.firstBaseUpdate=ue,g.lastBaseUpdate=Me,s=g.shared.interleaved,s!==null){g=s;do b|=g.lane,g=g.next;while(g!==s)}else _===null&&(g.shared.lanes=0);xs|=b,r.lanes=b,r.memoizedState=Ee}}function Ng(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var va={},Gi=Lr(va),xa=Lr(va),_a=Lr(va);function gs(r){if(r===va)throw Error(t(174));return r}function Ff(r,s){switch(Gt(_a,s),Gt(xa,r),Gt(Gi,va),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=w(s,r)}Xt(Gi),Gt(Gi,s)}function so(){Xt(Gi),Xt(xa),Xt(_a)}function Ig(r){gs(_a.current);var s=gs(Gi.current),l=w(s,r.type);s!==l&&(Gt(xa,r),Gt(Gi,l))}function Of(r){xa.current===r&&(Xt(Gi),Xt(xa))}var Jt=Lr(0);function Jl(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var kf=[];function Bf(){for(var r=0;r<kf.length;r++)kf[r]._workInProgressVersionPrimary=null;kf.length=0}var ec=C.ReactCurrentDispatcher,zf=C.ReactCurrentBatchConfig,vs=0,en=null,pn=null,_n=null,tc=!1,ya=!1,Sa=0,cw=0;function In(){throw Error(t(321))}function Vf(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Pi(r[l],s[l]))return!1;return!0}function Hf(r,s,l,d,g,_){if(vs=_,en=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ec.current=r===null||r.memoizedState===null?hw:pw,r=l(d,g),ya){_=0;do{if(ya=!1,Sa=0,25<=_)throw Error(t(301));_+=1,_n=pn=null,s.updateQueue=null,ec.current=mw,r=l(d,g)}while(ya)}if(ec.current=rc,s=pn!==null&&pn.next!==null,vs=0,_n=pn=en=null,tc=!1,s)throw Error(t(300));return r}function Gf(){var r=Sa!==0;return Sa=0,r}function Wi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?en.memoizedState=_n=r:_n=_n.next=r,_n}function xi(){if(pn===null){var r=en.alternate;r=r!==null?r.memoizedState:null}else r=pn.next;var s=_n===null?en.memoizedState:_n.next;if(s!==null)_n=s,pn=r;else{if(r===null)throw Error(t(310));pn=r,r={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},_n===null?en.memoizedState=_n=r:_n=_n.next=r}return _n}function Ma(r,s){return typeof s=="function"?s(r):s}function Wf(r){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=pn,g=d.baseQueue,_=l.pending;if(_!==null){if(g!==null){var b=g.next;g.next=_.next,_.next=b}d.baseQueue=g=_,l.pending=null}if(g!==null){_=g.next,d=d.baseState;var k=b=null,z=null,ue=_;do{var Me=ue.lane;if((vs&Me)===Me)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),d=ue.hasEagerState?ue.eagerState:r(d,ue.action);else{var Ee={lane:Me,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(k=z=Ee,b=d):z=z.next=Ee,en.lanes|=Me,xs|=Me}ue=ue.next}while(ue!==null&&ue!==_);z===null?b=d:z.next=k,Pi(d,s.memoizedState)||(Kn=!0),s.memoizedState=d,s.baseState=b,s.baseQueue=z,l.lastRenderedState=d}if(r=l.interleaved,r!==null){g=r;do _=g.lane,en.lanes|=_,xs|=_,g=g.next;while(g!==r)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Xf(r){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=l.dispatch,g=l.pending,_=s.memoizedState;if(g!==null){l.pending=null;var b=g=g.next;do _=r(_,b.action),b=b.next;while(b!==g);Pi(_,s.memoizedState)||(Kn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,d]}function Ug(){}function Fg(r,s){var l=en,d=xi(),g=s(),_=!Pi(d.memoizedState,g);if(_&&(d.memoizedState=g,Kn=!0),d=d.queue,jf(Bg.bind(null,l,d,r),[r]),d.getSnapshot!==s||_||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,wa(9,kg.bind(null,l,d,g,s),void 0,null),yn===null)throw Error(t(349));(vs&30)!==0||Og(l,s,g)}return g}function Og(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function kg(r,s,l,d){s.value=l,s.getSnapshot=d,zg(s)&&Vg(r)}function Bg(r,s,l){return l(function(){zg(s)&&Vg(r)})}function zg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Pi(r,l)}catch{return!0}}function Vg(r){var s=ar(r,1);s!==null&&Ui(s,r,1,-1)}function Hg(r){var s=Wi();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:r},s.queue=r,r=r.dispatch=dw.bind(null,en,r),[s.memoizedState,r]}function wa(r,s,l,d){return r={tag:r,create:s,destroy:l,deps:d,next:null},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(d=l.next,l.next=r,r.next=d,s.lastEffect=r)),r}function Gg(){return xi().memoizedState}function nc(r,s,l,d){var g=Wi();en.flags|=r,g.memoizedState=wa(1|s,l,void 0,d===void 0?null:d)}function ic(r,s,l,d){var g=xi();d=d===void 0?null:d;var _=void 0;if(pn!==null){var b=pn.memoizedState;if(_=b.destroy,d!==null&&Vf(d,b.deps)){g.memoizedState=wa(s,l,_,d);return}}en.flags|=r,g.memoizedState=wa(1|s,l,_,d)}function Wg(r,s){return nc(8390656,8,r,s)}function jf(r,s){return ic(2048,8,r,s)}function Xg(r,s){return ic(4,2,r,s)}function jg(r,s){return ic(4,4,r,s)}function Yg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function qg(r,s,l){return l=l!=null?l.concat([r]):null,ic(4,4,Yg.bind(null,s,r),l)}function Yf(){}function $g(r,s){var l=xi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Vf(s,d[1])?d[0]:(l.memoizedState=[r,s],r)}function Kg(r,s){var l=xi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Vf(s,d[1])?d[0]:(r=r(),l.memoizedState=[r,s],r)}function Zg(r,s,l){return(vs&21)===0?(r.baseState&&(r.baseState=!1,Kn=!0),r.memoizedState=l):(Pi(l,s)||(l=hn(),en.lanes|=l,xs|=l,r.baseState=!0),s)}function uw(r,s){var l=xt;xt=l!==0&&4>l?l:4,r(!0);var d=zf.transition;zf.transition={};try{r(!1),s()}finally{xt=l,zf.transition=d}}function Qg(){return xi().memoizedState}function fw(r,s,l){var d=Br(r);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Jg(r))e0(s,l);else if(l=Pg(r,s,l,d),l!==null){var g=Wn();Ui(l,r,d,g),t0(l,s,d)}}function dw(r,s,l){var d=Br(r),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Jg(r))e0(s,g);else{var _=r.alternate;if(r.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var b=s.lastRenderedState,k=_(b,l);if(g.hasEagerState=!0,g.eagerState=k,Pi(k,b)){var z=s.interleaved;z===null?(g.next=g,If(s)):(g.next=z.next,z.next=g),s.interleaved=g;return}}catch{}finally{}l=Pg(r,s,g,d),l!==null&&(g=Wn(),Ui(l,r,d,g),t0(l,s,d))}}function Jg(r){var s=r.alternate;return r===en||s!==null&&s===en}function e0(r,s){ya=tc=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function t0(r,s,l){if((l&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,Dn(r,l)}}var rc={readContext:vi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},hw={readContext:vi,useCallback:function(r,s){return Wi().memoizedState=[r,s===void 0?null:s],r},useContext:vi,useEffect:Wg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,nc(4194308,4,Yg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return nc(4194308,4,r,s)},useInsertionEffect:function(r,s){return nc(4,2,r,s)},useMemo:function(r,s){var l=Wi();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var d=Wi();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=fw.bind(null,en,r),[d.memoizedState,r]},useRef:function(r){var s=Wi();return r={current:r},s.memoizedState=r},useState:Hg,useDebugValue:Yf,useDeferredValue:function(r){return Wi().memoizedState=r},useTransition:function(){var r=Hg(!1),s=r[0];return r=uw.bind(null,r[1]),Wi().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var d=en,g=Wi();if(Kt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),yn===null)throw Error(t(349));(vs&30)!==0||Og(d,s,l)}g.memoizedState=l;var _={value:l,getSnapshot:s};return g.queue=_,Wg(Bg.bind(null,d,_,r),[r]),d.flags|=2048,wa(9,kg.bind(null,d,_,l,s),void 0,null),l},useId:function(){var r=Wi(),s=yn.identifierPrefix;if(Kt){var l=or,d=sr;l=(d&~(1<<32-Ne(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=Sa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=cw++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},pw={readContext:vi,useCallback:$g,useContext:vi,useEffect:jf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:jg,useMemo:Kg,useReducer:Wf,useRef:Gg,useState:function(){return Wf(Ma)},useDebugValue:Yf,useDeferredValue:function(r){var s=xi();return Zg(s,pn.memoizedState,r)},useTransition:function(){var r=Wf(Ma)[0],s=xi().memoizedState;return[r,s]},useMutableSource:Ug,useSyncExternalStore:Fg,useId:Qg,unstable_isNewReconciler:!1},mw={readContext:vi,useCallback:$g,useContext:vi,useEffect:jf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:jg,useMemo:Kg,useReducer:Xf,useRef:Gg,useState:function(){return Xf(Ma)},useDebugValue:Yf,useDeferredValue:function(r){var s=xi();return pn===null?s.memoizedState=r:Zg(s,pn.memoizedState,r)},useTransition:function(){var r=Xf(Ma)[0],s=xi().memoizedState;return[r,s]},useMutableSource:Ug,useSyncExternalStore:Fg,useId:Qg,unstable_isNewReconciler:!1};function Di(r,s){if(r&&r.defaultProps){s=Q({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function qf(r,s,l,d){s=r.memoizedState,l=l(d,s),l=l==null?s:Q({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var sc={isMounted:function(r){return(r=r._reactInternals)?Hn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var d=Wn(),g=Br(r),_=lr(d,g);_.payload=s,l!=null&&(_.callback=l),s=Ur(r,_,g),s!==null&&(Ui(s,r,g,d),Zl(s,r,g))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var d=Wn(),g=Br(r),_=lr(d,g);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Ur(r,_,g),s!==null&&(Ui(s,r,g,d),Zl(s,r,g))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Wn(),d=Br(r),g=lr(l,d);g.tag=2,s!=null&&(g.callback=s),s=Ur(r,g,d),s!==null&&(Ui(s,r,d,l),Zl(s,r,d))}};function n0(r,s,l,d,g,_,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,_,b):s.prototype&&s.prototype.isPureReactComponent?!ca(l,d)||!ca(g,_):!0}function i0(r,s,l){var d=!1,g=Dr,_=s.contextType;return typeof _=="object"&&_!==null?_=vi(_):(g=$n(s)?ds:Nn.current,d=s.contextTypes,_=(d=d!=null)?Qs(r,g):Dr),s=new s(l,_),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=sc,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=_),s}function r0(r,s,l,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==r&&sc.enqueueReplaceState(s,s.state,null)}function $f(r,s,l,d){var g=r.stateNode;g.props=l,g.state=r.memoizedState,g.refs={},Uf(r);var _=s.contextType;typeof _=="object"&&_!==null?g.context=vi(_):(_=$n(s)?ds:Nn.current,g.context=Qs(r,_)),g.state=r.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(qf(r,s,_,l),g.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&sc.enqueueReplaceState(g,g.state,null),Ql(r,l,g,d),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function oo(r,s){try{var l="",d=s;do l+=Ue(d),d=d.return;while(d);var g=l}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:r,source:s,stack:g,digest:null}}function Kf(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function Zf(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var gw=typeof WeakMap=="function"?WeakMap:Map;function s0(r,s,l){l=lr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){dc||(dc=!0,dd=d),Zf(r,s)},l}function o0(r,s,l){l=lr(-1,l),l.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var g=s.value;l.payload=function(){return d(g)},l.callback=function(){Zf(r,s)}}var _=r.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Zf(r,s),typeof d!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function a0(r,s,l){var d=r.pingCache;if(d===null){d=r.pingCache=new gw;var g=new Set;d.set(s,g)}else g=d.get(s),g===void 0&&(g=new Set,d.set(s,g));g.has(l)||(g.add(l),r=Pw.bind(null,r,s,l),s.then(r,r))}function l0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function c0(r,s,l,d,g){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=lr(-1,1),s.tag=2,Ur(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var vw=C.ReactCurrentOwner,Kn=!1;function Gn(r,s,l,d){s.child=r===null?Rg(s,null,l,d):no(s,r.child,l,d)}function u0(r,s,l,d,g){l=l.render;var _=s.ref;return ro(s,g),d=Hf(r,s,l,d,_,g),l=Gf(),r!==null&&!Kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,cr(r,s,g)):(Kt&&l&&Tf(s),s.flags|=1,Gn(r,s,d,g),s.child)}function f0(r,s,l,d,g){if(r===null){var _=l.type;return typeof _=="function"&&!_d(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,d0(r,s,_,d,g)):(r=xc(l.type,null,d,s,s.mode,g),r.ref=s.ref,r.return=s,s.child=r)}if(_=r.child,(r.lanes&g)===0){var b=_.memoizedProps;if(l=l.compare,l=l!==null?l:ca,l(b,d)&&r.ref===s.ref)return cr(r,s,g)}return s.flags|=1,r=Vr(_,d),r.ref=s.ref,r.return=s,s.child=r}function d0(r,s,l,d,g){if(r!==null){var _=r.memoizedProps;if(ca(_,d)&&r.ref===s.ref)if(Kn=!1,s.pendingProps=d=_,(r.lanes&g)!==0)(r.flags&131072)!==0&&(Kn=!0);else return s.lanes=r.lanes,cr(r,s,g)}return Qf(r,s,l,d,g)}function h0(r,s,l){var d=s.pendingProps,g=d.children,_=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(lo,ai),ai|=l;else{if((l&1073741824)===0)return r=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Gt(lo,ai),ai|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Gt(lo,ai),ai|=d}else _!==null?(d=_.baseLanes|l,s.memoizedState=null):d=l,Gt(lo,ai),ai|=d;return Gn(r,s,g,l),s.child}function p0(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Qf(r,s,l,d,g){var _=$n(l)?ds:Nn.current;return _=Qs(s,_),ro(s,g),l=Hf(r,s,l,d,_,g),d=Gf(),r!==null&&!Kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,cr(r,s,g)):(Kt&&d&&Tf(s),s.flags|=1,Gn(r,s,l,g),s.child)}function m0(r,s,l,d,g){if($n(l)){var _=!0;Gl(s)}else _=!1;if(ro(s,g),s.stateNode===null)ac(r,s),i0(s,l,d),$f(s,l,d,g),d=!0;else if(r===null){var b=s.stateNode,k=s.memoizedProps;b.props=k;var z=b.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=vi(ue):(ue=$n(l)?ds:Nn.current,ue=Qs(s,ue));var Me=l.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ee||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==d||z!==ue)&&r0(s,b,d,ue),Ir=!1;var Se=s.memoizedState;b.state=Se,Ql(s,d,b,g),z=s.memoizedState,k!==d||Se!==z||qn.current||Ir?(typeof Me=="function"&&(qf(s,l,Me,d),z=s.memoizedState),(k=Ir||n0(s,l,k,d,Se,z,ue))?(Ee||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=z),b.props=d,b.state=z,b.context=ue,d=k):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{b=s.stateNode,Lg(r,s),k=s.memoizedProps,ue=s.type===s.elementType?k:Di(s.type,k),b.props=ue,Ee=s.pendingProps,Se=b.context,z=l.contextType,typeof z=="object"&&z!==null?z=vi(z):(z=$n(l)?ds:Nn.current,z=Qs(s,z));var He=l.getDerivedStateFromProps;(Me=typeof He=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==Ee||Se!==z)&&r0(s,b,d,z),Ir=!1,Se=s.memoizedState,b.state=Se,Ql(s,d,b,g);var Ye=s.memoizedState;k!==Ee||Se!==Ye||qn.current||Ir?(typeof He=="function"&&(qf(s,l,He,d),Ye=s.memoizedState),(ue=Ir||n0(s,l,ue,d,Se,Ye,z)||!1)?(Me||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,Ye,z),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,Ye,z)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===r.memoizedProps&&Se===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&Se===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Ye),b.props=d,b.state=Ye,b.context=z,d=ue):(typeof b.componentDidUpdate!="function"||k===r.memoizedProps&&Se===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&Se===r.memoizedState||(s.flags|=1024),d=!1)}return Jf(r,s,l,d,_,g)}function Jf(r,s,l,d,g,_){p0(r,s);var b=(s.flags&128)!==0;if(!d&&!b)return g&&yg(s,l,!1),cr(r,s,_);d=s.stateNode,vw.current=s;var k=b&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&b?(s.child=no(s,r.child,null,_),s.child=no(s,null,k,_)):Gn(r,s,k,_),s.memoizedState=d.state,g&&yg(s,l,!0),s.child}function g0(r){var s=r.stateNode;s.pendingContext?xg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&xg(r,s.context,!1),Ff(r,s.containerInfo)}function v0(r,s,l,d,g){return to(),Rf(g),s.flags|=256,Gn(r,s,l,d),s.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(r){return{baseLanes:r,cachePool:null,transitions:null}}function x0(r,s,l){var d=s.pendingProps,g=Jt.current,_=!1,b=(s.flags&128)!==0,k;if((k=b)||(k=r!==null&&r.memoizedState===null?!1:(g&2)!==0),k?(_=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),Gt(Jt,g&1),r===null)return Cf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=d.children,r=d.fallback,_?(d=s.mode,_=s.child,b={mode:"hidden",children:b},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=_c(b,d,0,null),r=Ms(r,d,l,null),_.return=s,r.return=s,_.sibling=r,s.child=_,s.child.memoizedState=td(l),s.memoizedState=ed,r):nd(s,b));if(g=r.memoizedState,g!==null&&(k=g.dehydrated,k!==null))return xw(r,s,b,d,k,g,l);if(_){_=d.fallback,b=s.mode,g=r.child,k=g.sibling;var z={mode:"hidden",children:d.children};return(b&1)===0&&s.child!==g?(d=s.child,d.childLanes=0,d.pendingProps=z,s.deletions=null):(d=Vr(g,z),d.subtreeFlags=g.subtreeFlags&14680064),k!==null?_=Vr(k,_):(_=Ms(_,b,l,null),_.flags|=2),_.return=s,d.return=s,d.sibling=_,s.child=d,d=_,_=s.child,b=r.child.memoizedState,b=b===null?td(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=r.childLanes&~l,s.memoizedState=ed,d}return _=r.child,r=_.sibling,d=Vr(_,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=d,s.memoizedState=null,d}function nd(r,s){return s=_c({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function oc(r,s,l,d){return d!==null&&Rf(d),no(s,r.child,null,l),r=nd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function xw(r,s,l,d,g,_,b){if(l)return s.flags&256?(s.flags&=-257,d=Kf(Error(t(422))),oc(r,s,b,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(_=d.fallback,g=s.mode,d=_c({mode:"visible",children:d.children},g,0,null),_=Ms(_,g,b,null),_.flags|=2,d.return=s,_.return=s,d.sibling=_,s.child=d,(s.mode&1)!==0&&no(s,r.child,null,b),s.child.memoizedState=td(b),s.memoizedState=ed,_);if((s.mode&1)===0)return oc(r,s,b,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var k=d.dgst;return d=k,_=Error(t(419)),d=Kf(_,d,void 0),oc(r,s,b,d)}if(k=(b&r.childLanes)!==0,Kn||k){if(d=yn,d!==null){switch(b&-b){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|b))!==0?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,ar(r,g),Ui(d,r,g,-1))}return xd(),d=Kf(Error(t(421))),oc(r,s,b,d)}return g.data==="$?"?(s.flags|=128,s.child=r.child,s=Lw.bind(null,r),g._reactRetry=s,null):(r=_.treeContext,oi=Pr(g.nextSibling),si=s,Kt=!0,Li=null,r!==null&&(mi[gi++]=sr,mi[gi++]=or,mi[gi++]=hs,sr=r.id,or=r.overflow,hs=s),s=nd(s,d.children),s.flags|=4096,s)}function _0(r,s,l){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),Nf(r.return,s,l)}function id(r,s,l,d,g){var _=r.memoizedState;_===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=g)}function y0(r,s,l){var d=s.pendingProps,g=d.revealOrder,_=d.tail;if(Gn(r,s,d.children,l),d=Jt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&_0(r,l,s);else if(r.tag===19)_0(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Gt(Jt,d),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)r=l.alternate,r!==null&&Jl(r)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),id(s,!1,g,l,_);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(r=g.alternate,r!==null&&Jl(r)===null){s.child=g;break}r=g.sibling,g.sibling=l,l=g,g=r}id(s,!0,l,null,_);break;case"together":id(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ac(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function cr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),xs|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Vr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Vr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function _w(r,s,l){switch(s.tag){case 3:g0(s),to();break;case 5:Ig(s);break;case 1:$n(s.type)&&Gl(s);break;case 4:Ff(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,g=s.memoizedProps.value;Gt($l,d._currentValue),d._currentValue=g;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Gt(Jt,Jt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?x0(r,s,l):(Gt(Jt,Jt.current&1),r=cr(r,s,l),r!==null?r.sibling:null);Gt(Jt,Jt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(r.flags&128)!==0){if(d)return y0(r,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Gt(Jt,Jt.current),d)break;return null;case 22:case 23:return s.lanes=0,h0(r,s,l)}return cr(r,s,l)}var S0,rd,M0,w0;S0=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rd=function(){},M0=function(r,s,l,d){var g=r.memoizedProps;if(g!==d){r=s.stateNode,gs(Gi.current);var _=null;switch(l){case"input":g=dt(r,g),d=dt(r,d),_=[];break;case"select":g=Q({},g,{value:void 0}),d=Q({},d,{value:void 0}),_=[];break;case"textarea":g=zt(r,g),d=zt(r,d),_=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=zl)}Ze(l,d);var b;l=null;for(ue in g)if(!d.hasOwnProperty(ue)&&g.hasOwnProperty(ue)&&g[ue]!=null)if(ue==="style"){var k=g[ue];for(b in k)k.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?_||(_=[]):(_=_||[]).push(ue,null));for(ue in d){var z=d[ue];if(k=g!=null?g[ue]:void 0,d.hasOwnProperty(ue)&&z!==k&&(z!=null||k!=null))if(ue==="style")if(k){for(b in k)!k.hasOwnProperty(b)||z&&z.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in z)z.hasOwnProperty(b)&&k[b]!==z[b]&&(l||(l={}),l[b]=z[b])}else l||(_||(_=[]),_.push(ue,l)),l=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,k=k?k.__html:void 0,z!=null&&k!==z&&(_=_||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Wt("scroll",r),_||k===z||(_=[])):(_=_||[]).push(ue,z))}l&&(_=_||[]).push("style",l);var ue=_;(s.updateQueue=ue)&&(s.flags|=4)}},w0=function(r,s,l,d){l!==d&&(s.flags|=4)};function Ea(r,s){if(!Kt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Un(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,d=0;if(s)for(var g=r.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=d,r.childLanes=l,s}function yw(r,s,l){var d=s.pendingProps;switch(bf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(s),null;case 1:return $n(s.type)&&Hl(),Un(s),null;case 3:return d=s.stateNode,so(),Xt(qn),Xt(Nn),Bf(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Yl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Li!==null&&(md(Li),Li=null))),rd(r,s),Un(s),null;case 5:Of(s);var g=gs(_a.current);if(l=s.type,r!==null&&s.stateNode!=null)M0(r,s,l,d,g),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Un(s),null}if(r=gs(Gi.current),Yl(s)){d=s.stateNode,l=s.type;var _=s.memoizedProps;switch(d[Hi]=s,d[pa]=_,r=(s.mode&1)!==0,l){case"dialog":Wt("cancel",d),Wt("close",d);break;case"iframe":case"object":case"embed":Wt("load",d);break;case"video":case"audio":for(g=0;g<fa.length;g++)Wt(fa[g],d);break;case"source":Wt("error",d);break;case"img":case"image":case"link":Wt("error",d),Wt("load",d);break;case"details":Wt("toggle",d);break;case"input":yt(d,_),Wt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Wt("invalid",d);break;case"textarea":X(d,_),Wt("invalid",d)}Ze(l,_),g=null;for(var b in _)if(_.hasOwnProperty(b)){var k=_[b];b==="children"?typeof k=="string"?d.textContent!==k&&(_.suppressHydrationWarning!==!0&&Bl(d.textContent,k,r),g=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(_.suppressHydrationWarning!==!0&&Bl(d.textContent,k,r),g=["children",""+k]):o.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&Wt("scroll",d)}switch(l){case"input":ke(d),Ft(d,_,!0);break;case"textarea":ke(d),_e(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=zl)}d=g,s.updateQueue=d,d!==null&&(s.flags|=4)}else{b=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=D(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=b.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=b.createElement(l,{is:d.is}):(r=b.createElement(l),l==="select"&&(b=r,d.multiple?b.multiple=!0:d.size&&(b.size=d.size))):r=b.createElementNS(r,l),r[Hi]=s,r[pa]=d,S0(r,s,!1,!1),s.stateNode=r;e:{switch(b=De(l,d),l){case"dialog":Wt("cancel",r),Wt("close",r),g=d;break;case"iframe":case"object":case"embed":Wt("load",r),g=d;break;case"video":case"audio":for(g=0;g<fa.length;g++)Wt(fa[g],r);g=d;break;case"source":Wt("error",r),g=d;break;case"img":case"image":case"link":Wt("error",r),Wt("load",r),g=d;break;case"details":Wt("toggle",r),g=d;break;case"input":yt(r,d),g=dt(r,d),Wt("invalid",r);break;case"option":g=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},g=Q({},d,{value:void 0}),Wt("invalid",r);break;case"textarea":X(r,d),g=zt(r,d),Wt("invalid",r);break;default:g=d}Ze(l,g),k=g;for(_ in k)if(k.hasOwnProperty(_)){var z=k[_];_==="style"?ge(r,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ee(r,z)):_==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&de(r,z):typeof z=="number"&&de(r,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Wt("scroll",r):z!=null&&U(r,_,z,b))}switch(l){case"input":ke(r),Ft(r,d,!1);break;case"textarea":ke(r),_e(r);break;case"option":d.value!=null&&r.setAttribute("value",""+fe(d.value));break;case"select":r.multiple=!!d.multiple,_=d.value,_!=null?Ct(r,!!d.multiple,_,!1):d.defaultValue!=null&&Ct(r,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=zl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Un(s),null;case 6:if(r&&s.stateNode!=null)w0(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=gs(_a.current),gs(Gi.current),Yl(s)){if(d=s.stateNode,l=s.memoizedProps,d[Hi]=s,(_=d.nodeValue!==l)&&(r=si,r!==null))switch(r.tag){case 3:Bl(d.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Bl(d.nodeValue,l,(r.mode&1)!==0)}_&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Hi]=s,s.stateNode=d}return Un(s),null;case 13:if(Xt(Jt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Kt&&oi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)bg(),to(),s.flags|=98560,_=!1;else if(_=Yl(s),d!==null&&d.dehydrated!==null){if(r===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Hi]=s}else to(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Un(s),_=!1}else Li!==null&&(md(Li),Li=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Jt.current&1)!==0?mn===0&&(mn=3):xd())),s.updateQueue!==null&&(s.flags|=4),Un(s),null);case 4:return so(),rd(r,s),r===null&&da(s.stateNode.containerInfo),Un(s),null;case 10:return Df(s.type._context),Un(s),null;case 17:return $n(s.type)&&Hl(),Un(s),null;case 19:if(Xt(Jt),_=s.memoizedState,_===null)return Un(s),null;if(d=(s.flags&128)!==0,b=_.rendering,b===null)if(d)Ea(_,!1);else{if(mn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(b=Jl(r),b!==null){for(s.flags|=128,Ea(_,!1),d=b.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)_=l,r=d,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=r,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,r=b.dependencies,_.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Gt(Jt,Jt.current&1|2),s.child}r=r.sibling}_.tail!==null&&Qt()>co&&(s.flags|=128,d=!0,Ea(_,!1),s.lanes=4194304)}else{if(!d)if(r=Jl(b),r!==null){if(s.flags|=128,d=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ea(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!Kt)return Un(s),null}else 2*Qt()-_.renderingStartTime>co&&l!==1073741824&&(s.flags|=128,d=!0,Ea(_,!1),s.lanes=4194304);_.isBackwards?(b.sibling=s.child,s.child=b):(l=_.last,l!==null?l.sibling=b:s.child=b,_.last=b)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Qt(),s.sibling=null,l=Jt.current,Gt(Jt,d?l&1|2:l&1),s):(Un(s),null);case 22:case 23:return vd(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(ai&1073741824)!==0&&(Un(s),s.subtreeFlags&6&&(s.flags|=8192)):Un(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Sw(r,s){switch(bf(s),s.tag){case 1:return $n(s.type)&&Hl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return so(),Xt(qn),Xt(Nn),Bf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Of(s),null;case 13:if(Xt(Jt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));to()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xt(Jt),null;case 4:return so(),null;case 10:return Df(s.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var lc=!1,Fn=!1,Mw=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function ao(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){on(r,s,d)}else l.current=null}function sd(r,s,l){try{l()}catch(d){on(r,s,d)}}var E0=!1;function ww(r,s){if(vf=Cl,r=ng(),cf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var b=0,k=-1,z=-1,ue=0,Me=0,Ee=r,Se=null;t:for(;;){for(var He;Ee!==l||g!==0&&Ee.nodeType!==3||(k=b+g),Ee!==_||d!==0&&Ee.nodeType!==3||(z=b+d),Ee.nodeType===3&&(b+=Ee.nodeValue.length),(He=Ee.firstChild)!==null;)Se=Ee,Ee=He;for(;;){if(Ee===r)break t;if(Se===l&&++ue===g&&(k=b),Se===_&&++Me===d&&(z=b),(He=Ee.nextSibling)!==null)break;Ee=Se,Se=Ee.parentNode}Ee=He}l=k===-1||z===-1?null:{start:k,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(xf={focusedElem:r,selectionRange:l},Cl=!1,Xe=s;Xe!==null;)if(s=Xe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,Xe=r;else for(;Xe!==null;){s=Xe;try{var Ye=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,cn=Ye.memoizedState,oe=s.stateNode,$=oe.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:Di(s.type,Ke),cn);oe.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var le=s.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){on(s,s.return,be)}if(r=s.sibling,r!==null){r.return=s.return,Xe=r;break}Xe=s.return}return Ye=E0,E0=!1,Ye}function Ta(r,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&r)===r){var _=g.destroy;g.destroy=void 0,_!==void 0&&sd(s,l,_)}g=g.next}while(g!==d)}}function cc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function od(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function T0(r){var s=r.alternate;s!==null&&(r.alternate=null,T0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Hi],delete s[pa],delete s[Mf],delete s[sw],delete s[ow])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function b0(r){return r.tag===5||r.tag===3||r.tag===4}function A0(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||b0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ad(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=zl));else if(d!==4&&(r=r.child,r!==null))for(ad(r,s,l),r=r.sibling;r!==null;)ad(r,s,l),r=r.sibling}function ld(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(ld(r,s,l),r=r.sibling;r!==null;)ld(r,s,l),r=r.sibling}var An=null,Ni=!1;function Fr(r,s,l){for(l=l.child;l!==null;)C0(r,s,l),l=l.sibling}function C0(r,s,l){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(se,l)}catch{}switch(l.tag){case 5:Fn||ao(l,s);case 6:var d=An,g=Ni;An=null,Fr(r,s,l),An=d,Ni=g,An!==null&&(Ni?(r=An,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):An.removeChild(l.stateNode));break;case 18:An!==null&&(Ni?(r=An,l=l.stateNode,r.nodeType===8?Sf(r.parentNode,l):r.nodeType===1&&Sf(r,l),ia(r)):Sf(An,l.stateNode));break;case 4:d=An,g=Ni,An=l.stateNode.containerInfo,Ni=!0,Fr(r,s,l),An=d,Ni=g;break;case 0:case 11:case 14:case 15:if(!Fn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var _=g,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&sd(l,s,b),g=g.next}while(g!==d)}Fr(r,s,l);break;case 1:if(!Fn&&(ao(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(k){on(l,s,k)}Fr(r,s,l);break;case 21:Fr(r,s,l);break;case 22:l.mode&1?(Fn=(d=Fn)||l.memoizedState!==null,Fr(r,s,l),Fn=d):Fr(r,s,l);break;default:Fr(r,s,l)}}function R0(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new Mw),s.forEach(function(d){var g=Dw.bind(null,r,d);l.has(d)||(l.add(d),d.then(g,g))})}}function Ii(r,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var _=r,b=s,k=b;e:for(;k!==null;){switch(k.tag){case 5:An=k.stateNode,Ni=!1;break e;case 3:An=k.stateNode.containerInfo,Ni=!0;break e;case 4:An=k.stateNode.containerInfo,Ni=!0;break e}k=k.return}if(An===null)throw Error(t(160));C0(_,b,g),An=null,Ni=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(ue){on(g,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)P0(s,r),s=s.sibling}function P0(r,s){var l=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ii(s,r),Xi(r),d&4){try{Ta(3,r,r.return),cc(3,r)}catch(Ke){on(r,r.return,Ke)}try{Ta(5,r,r.return)}catch(Ke){on(r,r.return,Ke)}}break;case 1:Ii(s,r),Xi(r),d&512&&l!==null&&ao(l,l.return);break;case 5:if(Ii(s,r),Xi(r),d&512&&l!==null&&ao(l,l.return),r.flags&32){var g=r.stateNode;try{de(g,"")}catch(Ke){on(r,r.return,Ke)}}if(d&4&&(g=r.stateNode,g!=null)){var _=r.memoizedProps,b=l!==null?l.memoizedProps:_,k=r.type,z=r.updateQueue;if(r.updateQueue=null,z!==null)try{k==="input"&&_.type==="radio"&&_.name!=null&&At(g,_),De(k,b);var ue=De(k,_);for(b=0;b<z.length;b+=2){var Me=z[b],Ee=z[b+1];Me==="style"?ge(g,Ee):Me==="dangerouslySetInnerHTML"?ee(g,Ee):Me==="children"?de(g,Ee):U(g,Me,Ee,ue)}switch(k){case"input":gt(g,_);break;case"textarea":rn(g,_);break;case"select":var Se=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?Ct(g,!!_.multiple,He,!1):Se!==!!_.multiple&&(_.defaultValue!=null?Ct(g,!!_.multiple,_.defaultValue,!0):Ct(g,!!_.multiple,_.multiple?[]:"",!1))}g[pa]=_}catch(Ke){on(r,r.return,Ke)}}break;case 6:if(Ii(s,r),Xi(r),d&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,_=r.memoizedProps;try{g.nodeValue=_}catch(Ke){on(r,r.return,Ke)}}break;case 3:if(Ii(s,r),Xi(r),d&4&&l!==null&&l.memoizedState.isDehydrated)try{ia(s.containerInfo)}catch(Ke){on(r,r.return,Ke)}break;case 4:Ii(s,r),Xi(r);break;case 13:Ii(s,r),Xi(r),g=r.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(fd=Qt())),d&4&&R0(r);break;case 22:if(Me=l!==null&&l.memoizedState!==null,r.mode&1?(Fn=(ue=Fn)||Me,Ii(s,r),Fn=ue):Ii(s,r),Xi(r),d&8192){if(ue=r.memoizedState!==null,(r.stateNode.isHidden=ue)&&!Me&&(r.mode&1)!==0)for(Xe=r,Me=r.child;Me!==null;){for(Ee=Xe=Me;Xe!==null;){switch(Se=Xe,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ta(4,Se,Se.return);break;case 1:ao(Se,Se.return);var Ye=Se.stateNode;if(typeof Ye.componentWillUnmount=="function"){d=Se,l=Se.return;try{s=d,Ye.props=s.memoizedProps,Ye.state=s.memoizedState,Ye.componentWillUnmount()}catch(Ke){on(d,l,Ke)}}break;case 5:ao(Se,Se.return);break;case 22:if(Se.memoizedState!==null){N0(Ee);continue}}He!==null?(He.return=Se,Xe=He):N0(Ee)}Me=Me.sibling}e:for(Me=null,Ee=r;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{g=Ee.stateNode,ue?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(k=Ee.stateNode,z=Ee.memoizedProps.style,b=z!=null&&z.hasOwnProperty("display")?z.display:null,k.style.display=pe("display",b))}catch(Ke){on(r,r.return,Ke)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=ue?"":Ee.memoizedProps}catch(Ke){on(r,r.return,Ke)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===r)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===r)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===r)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ii(s,r),Xi(r),d&4&&R0(r);break;case 21:break;default:Ii(s,r),Xi(r)}}function Xi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(b0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(de(g,""),d.flags&=-33);var _=A0(r);ld(r,_,g);break;case 3:case 4:var b=d.stateNode.containerInfo,k=A0(r);ad(r,k,b);break;default:throw Error(t(161))}}catch(z){on(r,r.return,z)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Ew(r,s,l){Xe=r,L0(r)}function L0(r,s,l){for(var d=(r.mode&1)!==0;Xe!==null;){var g=Xe,_=g.child;if(g.tag===22&&d){var b=g.memoizedState!==null||lc;if(!b){var k=g.alternate,z=k!==null&&k.memoizedState!==null||Fn;k=lc;var ue=Fn;if(lc=b,(Fn=z)&&!ue)for(Xe=g;Xe!==null;)b=Xe,z=b.child,b.tag===22&&b.memoizedState!==null?I0(g):z!==null?(z.return=b,Xe=z):I0(g);for(;_!==null;)Xe=_,L0(_),_=_.sibling;Xe=g,lc=k,Fn=ue}D0(r)}else(g.subtreeFlags&8772)!==0&&_!==null?(_.return=g,Xe=_):D0(r)}}function D0(r){for(;Xe!==null;){var s=Xe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Fn||cc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Fn)if(l===null)d.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Di(s.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Ng(s,_,d);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Ng(s,b,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var Me=ue.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&ia(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Fn||s.flags&512&&od(s)}catch(Se){on(s,s.return,Se)}}if(s===r){Xe=null;break}if(l=s.sibling,l!==null){l.return=s.return,Xe=l;break}Xe=s.return}}function N0(r){for(;Xe!==null;){var s=Xe;if(s===r){Xe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Xe=l;break}Xe=s.return}}function I0(r){for(;Xe!==null;){var s=Xe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{cc(4,s)}catch(z){on(s,l,z)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var g=s.return;try{d.componentDidMount()}catch(z){on(s,g,z)}}var _=s.return;try{od(s)}catch(z){on(s,_,z)}break;case 5:var b=s.return;try{od(s)}catch(z){on(s,b,z)}}}catch(z){on(s,s.return,z)}if(s===r){Xe=null;break}var k=s.sibling;if(k!==null){k.return=s.return,Xe=k;break}Xe=s.return}}var Tw=Math.ceil,uc=C.ReactCurrentDispatcher,cd=C.ReactCurrentOwner,_i=C.ReactCurrentBatchConfig,Rt=0,yn=null,fn=null,Cn=0,ai=0,lo=Lr(0),mn=0,ba=null,xs=0,fc=0,ud=0,Aa=null,Zn=null,fd=0,co=1/0,ur=null,dc=!1,dd=null,Or=null,hc=!1,kr=null,pc=0,Ca=0,hd=null,mc=-1,gc=0;function Wn(){return(Rt&6)!==0?Qt():mc!==-1?mc:mc=Qt()}function Br(r){return(r.mode&1)===0?1:(Rt&2)!==0&&Cn!==0?Cn&-Cn:lw.transition!==null?(gc===0&&(gc=hn()),gc):(r=xt,r!==0||(r=window.event,r=r===void 0?16:Fm(r.type)),r)}function Ui(r,s,l,d){if(50<Ca)throw Ca=0,hd=null,Error(t(185));ln(r,l,d),((Rt&2)===0||r!==yn)&&(r===yn&&((Rt&2)===0&&(fc|=l),mn===4&&zr(r,Cn)),Qn(r,d),l===1&&Rt===0&&(s.mode&1)===0&&(co=Qt()+500,Wl&&Nr()))}function Qn(r,s){var l=r.callbackNode;Vt(r,s);var d=wt(r,r===yn?Cn:0);if(d===0)l!==null&&Ko(l),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(l!=null&&Ko(l),s===1)r.tag===0?aw(F0.bind(null,r)):Sg(F0.bind(null,r)),iw(function(){(Rt&6)===0&&Nr()}),l=null;else{switch(bi(d)){case 1:l=Zo;break;case 4:l=Qo;break;case 16:l=A;break;case 536870912:l=ce;break;default:l=A}l=W0(l,U0.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function U0(r,s){if(mc=-1,gc=0,(Rt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(uo()&&r.callbackNode!==l)return null;var d=wt(r,r===yn?Cn:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=vc(r,d);else{s=d;var g=Rt;Rt|=2;var _=k0();(yn!==r||Cn!==s)&&(ur=null,co=Qt()+500,ys(r,s));do try{Cw();break}catch(k){O0(r,k)}while(!0);Lf(),uc.current=_,Rt=g,fn!==null?s=0:(yn=null,Cn=0,s=mn)}if(s!==0){if(s===2&&(g=It(r),g!==0&&(d=g,s=pd(r,g))),s===1)throw l=ba,ys(r,0),zr(r,d),Qn(r,Qt()),l;if(s===6)zr(r,d);else{if(g=r.current.alternate,(d&30)===0&&!bw(g)&&(s=vc(r,d),s===2&&(_=It(r),_!==0&&(d=_,s=pd(r,_))),s===1))throw l=ba,ys(r,0),zr(r,d),Qn(r,Qt()),l;switch(r.finishedWork=g,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Ss(r,Zn,ur);break;case 3:if(zr(r,d),(d&130023424)===d&&(s=fd+500-Qt(),10<s)){if(wt(r,0)!==0)break;if(g=r.suspendedLanes,(g&d)!==d){Wn(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=yf(Ss.bind(null,r,Zn,ur),s);break}Ss(r,Zn,ur);break;case 4:if(zr(r,d),(d&4194240)===d)break;for(s=r.eventTimes,g=-1;0<d;){var b=31-Ne(d);_=1<<b,b=s[b],b>g&&(g=b),d&=~_}if(d=g,d=Qt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Tw(d/1960))-d,10<d){r.timeoutHandle=yf(Ss.bind(null,r,Zn,ur),d);break}Ss(r,Zn,ur);break;case 5:Ss(r,Zn,ur);break;default:throw Error(t(329))}}}return Qn(r,Qt()),r.callbackNode===l?U0.bind(null,r):null}function pd(r,s){var l=Aa;return r.current.memoizedState.isDehydrated&&(ys(r,s).flags|=256),r=vc(r,s),r!==2&&(s=Zn,Zn=l,s!==null&&md(s)),r}function md(r){Zn===null?Zn=r:Zn.push.apply(Zn,r)}function bw(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],_=g.getSnapshot;g=g.value;try{if(!Pi(_(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function zr(r,s){for(s&=~ud,s&=~fc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Ne(s),d=1<<l;r[l]=-1,s&=~d}}function F0(r){if((Rt&6)!==0)throw Error(t(327));uo();var s=wt(r,0);if((s&1)===0)return Qn(r,Qt()),null;var l=vc(r,s);if(r.tag!==0&&l===2){var d=It(r);d!==0&&(s=d,l=pd(r,d))}if(l===1)throw l=ba,ys(r,0),zr(r,s),Qn(r,Qt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ss(r,Zn,ur),Qn(r,Qt()),null}function gd(r,s){var l=Rt;Rt|=1;try{return r(s)}finally{Rt=l,Rt===0&&(co=Qt()+500,Wl&&Nr())}}function _s(r){kr!==null&&kr.tag===0&&(Rt&6)===0&&uo();var s=Rt;Rt|=1;var l=_i.transition,d=xt;try{if(_i.transition=null,xt=1,r)return r()}finally{xt=d,_i.transition=l,Rt=s,(Rt&6)===0&&Nr()}}function vd(){ai=lo.current,Xt(lo)}function ys(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,nw(l)),fn!==null)for(l=fn.return;l!==null;){var d=l;switch(bf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Hl();break;case 3:so(),Xt(qn),Xt(Nn),Bf();break;case 5:Of(d);break;case 4:so();break;case 13:Xt(Jt);break;case 19:Xt(Jt);break;case 10:Df(d.type._context);break;case 22:case 23:vd()}l=l.return}if(yn=r,fn=r=Vr(r.current,null),Cn=ai=s,mn=0,ba=null,ud=fc=xs=0,Zn=Aa=null,ms!==null){for(s=0;s<ms.length;s++)if(l=ms[s],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,_=l.pending;if(_!==null){var b=_.next;_.next=g,d.next=b}l.pending=d}ms=null}return r}function O0(r,s){do{var l=fn;try{if(Lf(),ec.current=rc,tc){for(var d=en.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}tc=!1}if(vs=0,_n=pn=en=null,ya=!1,Sa=0,cd.current=null,l===null||l.return===null){mn=1,ba=s,fn=null;break}e:{var _=r,b=l.return,k=l,z=s;if(s=Cn,k.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,Me=k,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=l0(b);if(He!==null){He.flags&=-257,c0(He,b,k,_,s),He.mode&1&&a0(_,ue,s),s=He,z=ue;var Ye=s.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(z),s.updateQueue=Ke}else Ye.add(z);break e}else{if((s&1)===0){a0(_,ue,s),xd();break e}z=Error(t(426))}}else if(Kt&&k.mode&1){var cn=l0(b);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),c0(cn,b,k,_,s),Rf(oo(z,k));break e}}_=z=oo(z,k),mn!==4&&(mn=2),Aa===null?Aa=[_]:Aa.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var oe=s0(_,z,s);Dg(_,oe);break e;case 1:k=z;var $=_.type,le=_.stateNode;if((_.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Or===null||!Or.has(le)))){_.flags|=65536,s&=-s,_.lanes|=s;var be=o0(_,k,s);Dg(_,be);break e}}_=_.return}while(_!==null)}z0(l)}catch(nt){s=nt,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function k0(){var r=uc.current;return uc.current=rc,r===null?rc:r}function xd(){(mn===0||mn===3||mn===2)&&(mn=4),yn===null||(xs&268435455)===0&&(fc&268435455)===0||zr(yn,Cn)}function vc(r,s){var l=Rt;Rt|=2;var d=k0();(yn!==r||Cn!==s)&&(ur=null,ys(r,s));do try{Aw();break}catch(g){O0(r,g)}while(!0);if(Lf(),Rt=l,uc.current=d,fn!==null)throw Error(t(261));return yn=null,Cn=0,mn}function Aw(){for(;fn!==null;)B0(fn)}function Cw(){for(;fn!==null&&!bl();)B0(fn)}function B0(r){var s=G0(r.alternate,r,ai);r.memoizedProps=r.pendingProps,s===null?z0(r):fn=s,cd.current=null}function z0(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=yw(l,s,ai),l!==null){fn=l;return}}else{if(l=Sw(l,s),l!==null){l.flags&=32767,fn=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mn=6,fn=null;return}}if(s=s.sibling,s!==null){fn=s;return}fn=s=r}while(s!==null);mn===0&&(mn=5)}function Ss(r,s,l){var d=xt,g=_i.transition;try{_i.transition=null,xt=1,Rw(r,s,l,d)}finally{_i.transition=g,xt=d}return null}function Rw(r,s,l,d){do uo();while(kr!==null);if((Rt&6)!==0)throw Error(t(327));l=r.finishedWork;var g=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var _=l.lanes|l.childLanes;if(Et(r,_),r===yn&&(fn=yn=null,Cn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||hc||(hc=!0,W0(A,function(){return uo(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=_i.transition,_i.transition=null;var b=xt;xt=1;var k=Rt;Rt|=4,cd.current=null,ww(r,l),P0(l,r),$M(xf),Cl=!!vf,xf=vf=null,r.current=l,Ew(l),$u(),Rt=k,xt=b,_i.transition=_}else r.current=l;if(hc&&(hc=!1,kr=r,pc=g),_=r.pendingLanes,_===0&&(Or=null),Fe(l.stateNode),Qn(r,Qt()),s!==null)for(d=r.onRecoverableError,l=0;l<s.length;l++)g=s[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(dc)throw dc=!1,r=dd,dd=null,r;return(pc&1)!==0&&r.tag!==0&&uo(),_=r.pendingLanes,(_&1)!==0?r===hd?Ca++:(Ca=0,hd=r):Ca=0,Nr(),null}function uo(){if(kr!==null){var r=bi(pc),s=_i.transition,l=xt;try{if(_i.transition=null,xt=16>r?16:r,kr===null)var d=!1;else{if(r=kr,kr=null,pc=0,(Rt&6)!==0)throw Error(t(331));var g=Rt;for(Rt|=4,Xe=r.current;Xe!==null;){var _=Xe,b=_.child;if((Xe.flags&16)!==0){var k=_.deletions;if(k!==null){for(var z=0;z<k.length;z++){var ue=k[z];for(Xe=ue;Xe!==null;){var Me=Xe;switch(Me.tag){case 0:case 11:case 15:Ta(8,Me,_)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,Xe=Ee;else for(;Xe!==null;){Me=Xe;var Se=Me.sibling,He=Me.return;if(T0(Me),Me===ue){Xe=null;break}if(Se!==null){Se.return=He,Xe=Se;break}Xe=He}}}var Ye=_.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var cn=Ke.sibling;Ke.sibling=null,Ke=cn}while(Ke!==null)}}Xe=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,Xe=b;else e:for(;Xe!==null;){if(_=Xe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ta(9,_,_.return)}var oe=_.sibling;if(oe!==null){oe.return=_.return,Xe=oe;break e}Xe=_.return}}var $=r.current;for(Xe=$;Xe!==null;){b=Xe;var le=b.child;if((b.subtreeFlags&2064)!==0&&le!==null)le.return=b,Xe=le;else e:for(b=$;Xe!==null;){if(k=Xe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:cc(9,k)}}catch(nt){on(k,k.return,nt)}if(k===b){Xe=null;break e}var be=k.sibling;if(be!==null){be.return=k.return,Xe=be;break e}Xe=k.return}}if(Rt=g,Nr(),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(se,r)}catch{}d=!0}return d}finally{xt=l,_i.transition=s}}return!1}function V0(r,s,l){s=oo(l,s),s=s0(r,s,1),r=Ur(r,s,1),s=Wn(),r!==null&&(ln(r,1,s),Qn(r,s))}function on(r,s,l){if(r.tag===3)V0(r,r,l);else for(;s!==null;){if(s.tag===3){V0(s,r,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Or===null||!Or.has(d))){r=oo(l,r),r=o0(s,r,1),s=Ur(s,r,1),r=Wn(),s!==null&&(ln(s,1,r),Qn(s,r));break}}s=s.return}}function Pw(r,s,l){var d=r.pingCache;d!==null&&d.delete(s),s=Wn(),r.pingedLanes|=r.suspendedLanes&l,yn===r&&(Cn&l)===l&&(mn===4||mn===3&&(Cn&130023424)===Cn&&500>Qt()-fd?ys(r,0):ud|=l),Qn(r,s)}function H0(r,s){s===0&&((r.mode&1)===0?s=1:(s=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var l=Wn();r=ar(r,s),r!==null&&(ln(r,s,l),Qn(r,l))}function Lw(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),H0(r,l)}function Dw(r,s){var l=0;switch(r.tag){case 13:var d=r.stateNode,g=r.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),H0(r,l)}var G0;G0=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||qn.current)Kn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return Kn=!1,_w(r,s,l);Kn=(r.flags&131072)!==0}else Kn=!1,Kt&&(s.flags&1048576)!==0&&Mg(s,jl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;ac(r,s),r=s.pendingProps;var g=Qs(s,Nn.current);ro(s,l),g=Hf(null,s,d,r,g,l);var _=Gf();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,$n(d)?(_=!0,Gl(s)):_=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Uf(s),g.updater=sc,s.stateNode=g,g._reactInternals=s,$f(s,d,r,l),s=Jf(null,s,d,!0,_,l)):(s.tag=0,Kt&&_&&Tf(s),Gn(null,s,g,l),s=s.child),s;case 16:d=s.elementType;e:{switch(ac(r,s),r=s.pendingProps,g=d._init,d=g(d._payload),s.type=d,g=s.tag=Iw(d),r=Di(d,r),g){case 0:s=Qf(null,s,d,r,l);break e;case 1:s=m0(null,s,d,r,l);break e;case 11:s=u0(null,s,d,r,l);break e;case 14:s=f0(null,s,d,Di(d.type,r),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Di(d,g),Qf(r,s,d,g,l);case 1:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Di(d,g),m0(r,s,d,g,l);case 3:e:{if(g0(s),r===null)throw Error(t(387));d=s.pendingProps,_=s.memoizedState,g=_.element,Lg(r,s),Ql(s,d,null,l);var b=s.memoizedState;if(d=b.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){g=oo(Error(t(423)),s),s=v0(r,s,d,l,g);break e}else if(d!==g){g=oo(Error(t(424)),s),s=v0(r,s,d,l,g);break e}else for(oi=Pr(s.stateNode.containerInfo.firstChild),si=s,Kt=!0,Li=null,l=Rg(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(to(),d===g){s=cr(r,s,l);break e}Gn(r,s,d,l)}s=s.child}return s;case 5:return Ig(s),r===null&&Cf(s),d=s.type,g=s.pendingProps,_=r!==null?r.memoizedProps:null,b=g.children,_f(d,g)?b=null:_!==null&&_f(d,_)&&(s.flags|=32),p0(r,s),Gn(r,s,b,l),s.child;case 6:return r===null&&Cf(s),null;case 13:return x0(r,s,l);case 4:return Ff(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=no(s,null,d,l):Gn(r,s,d,l),s.child;case 11:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Di(d,g),u0(r,s,d,g,l);case 7:return Gn(r,s,s.pendingProps,l),s.child;case 8:return Gn(r,s,s.pendingProps.children,l),s.child;case 12:return Gn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,g=s.pendingProps,_=s.memoizedProps,b=g.value,Gt($l,d._currentValue),d._currentValue=b,_!==null)if(Pi(_.value,b)){if(_.children===g.children&&!qn.current){s=cr(r,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var k=_.dependencies;if(k!==null){b=_.child;for(var z=k.firstContext;z!==null;){if(z.context===d){if(_.tag===1){z=lr(-1,l&-l),z.tag=2;var ue=_.updateQueue;if(ue!==null){ue=ue.shared;var Me=ue.pending;Me===null?z.next=z:(z.next=Me.next,Me.next=z),ue.pending=z}}_.lanes|=l,z=_.alternate,z!==null&&(z.lanes|=l),Nf(_.return,l,s),k.lanes|=l;break}z=z.next}}else if(_.tag===10)b=_.type===s.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=l,k=b.alternate,k!==null&&(k.lanes|=l),Nf(b,l,s),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===s){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Gn(r,s,g.children,l),s=s.child}return s;case 9:return g=s.type,d=s.pendingProps.children,ro(s,l),g=vi(g),d=d(g),s.flags|=1,Gn(r,s,d,l),s.child;case 14:return d=s.type,g=Di(d,s.pendingProps),g=Di(d.type,g),f0(r,s,d,g,l);case 15:return d0(r,s,s.type,s.pendingProps,l);case 17:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Di(d,g),ac(r,s),s.tag=1,$n(d)?(r=!0,Gl(s)):r=!1,ro(s,l),i0(s,d,g),$f(s,d,g,l),Jf(null,s,d,!0,r,l);case 19:return y0(r,s,l);case 22:return h0(r,s,l)}throw Error(t(156,s.tag))};function W0(r,s){return us(r,s)}function Nw(r,s,l,d){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(r,s,l,d){return new Nw(r,s,l,d)}function _d(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Iw(r){if(typeof r=="function")return _d(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===ne)return 14}return 2}function Vr(r,s){var l=r.alternate;return l===null?(l=yi(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function xc(r,s,l,d,g,_){var b=2;if(d=r,typeof r=="function")_d(r)&&(b=1);else if(typeof r=="string")b=5;else e:switch(r){case F:return Ms(l.children,g,_,s);case E:b=8,g|=8;break;case N:return r=yi(12,l,s,g|2),r.elementType=N,r.lanes=_,r;case te:return r=yi(13,l,s,g),r.elementType=te,r.lanes=_,r;case V:return r=yi(19,l,s,g),r.elementType=V,r.lanes=_,r;case J:return _c(l,g,_,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case B:b=10;break e;case H:b=9;break e;case j:b=11;break e;case ne:b=14;break e;case he:b=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=yi(b,l,s,g),s.elementType=r,s.type=d,s.lanes=_,s}function Ms(r,s,l,d){return r=yi(7,r,d,s),r.lanes=l,r}function _c(r,s,l,d){return r=yi(22,r,d,s),r.elementType=J,r.lanes=l,r.stateNode={isHidden:!1},r}function yd(r,s,l){return r=yi(6,r,null,s),r.lanes=l,r}function Sd(r,s,l){return s=yi(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Uw(r,s,l,d,g){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Md(r,s,l,d,g,_,b,k,z){return r=new Uw(r,s,l,k,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=yi(3,null,null,s),r.current=_,_.stateNode=r,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(_),r}function Fw(r,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:r,containerInfo:s,implementation:l}}function X0(r){if(!r)return Dr;r=r._reactInternals;e:{if(Hn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if($n(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if($n(l))return _g(r,l,s)}return s}function j0(r,s,l,d,g,_,b,k,z){return r=Md(l,d,!0,r,g,_,b,k,z),r.context=X0(null),l=r.current,d=Wn(),g=Br(l),_=lr(d,g),_.callback=s??null,Ur(l,_,g),r.current.lanes=g,ln(r,g,d),Qn(r,d),r}function yc(r,s,l,d){var g=s.current,_=Wn(),b=Br(g);return l=X0(l),s.context===null?s.context=l:s.pendingContext=l,s=lr(_,b),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=Ur(g,s,b),r!==null&&(Ui(r,g,b,_),Zl(r,g,b)),b}function Sc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Y0(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function wd(r,s){Y0(r,s),(r=r.alternate)&&Y0(r,s)}function Ow(){return null}var q0=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ed(r){this._internalRoot=r}Mc.prototype.render=Ed.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));yc(r,s,null,null)},Mc.prototype.unmount=Ed.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;_s(function(){yc(null,r,null,null)}),s[ir]=null}};function Mc(r){this._internalRoot=r}Mc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ai();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Ar.length&&s!==0&&s<Ar[l].priority;l++);Ar.splice(l,0,r),l===0&&Im(r)}};function Td(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function wc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function $0(){}function kw(r,s,l,d,g){if(g){if(typeof d=="function"){var _=d;d=function(){var ue=Sc(b);_.call(ue)}}var b=j0(s,d,r,0,null,!1,!1,"",$0);return r._reactRootContainer=b,r[ir]=b.current,da(r.nodeType===8?r.parentNode:r),_s(),b}for(;g=r.lastChild;)r.removeChild(g);if(typeof d=="function"){var k=d;d=function(){var ue=Sc(z);k.call(ue)}}var z=Md(r,0,!1,null,null,!1,!1,"",$0);return r._reactRootContainer=z,r[ir]=z.current,da(r.nodeType===8?r.parentNode:r),_s(function(){yc(s,z,l,d)}),z}function Ec(r,s,l,d,g){var _=l._reactRootContainer;if(_){var b=_;if(typeof g=="function"){var k=g;g=function(){var z=Sc(b);k.call(z)}}yc(s,b,r,g)}else b=kw(l,s,r,g,d);return Sc(b)}nr=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ge(s.pendingLanes);l!==0&&(Dn(s,l|1),Qn(s,Qt()),(Rt&6)===0&&(co=Qt()+500,Nr()))}break;case 13:_s(function(){var d=ar(r,1);if(d!==null){var g=Wn();Ui(d,r,1,g)}}),wd(r,1)}},Lt=function(r){if(r.tag===13){var s=ar(r,134217728);if(s!==null){var l=Wn();Ui(s,r,134217728,l)}wd(r,134217728)}},$t=function(r){if(r.tag===13){var s=Br(r),l=ar(r,s);if(l!==null){var d=Wn();Ui(l,r,s,d)}wd(r,s)}},Ai=function(){return xt},Ot=function(r,s){var l=xt;try{return xt=r,s()}finally{xt=l}},it=function(r,s,l){switch(s){case"input":if(gt(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==r&&d.form===r.form){var g=Vl(d);if(!g)throw Error(t(90));ct(d),gt(d,g)}}}break;case"textarea":rn(r,l);break;case"select":s=l.value,s!=null&&Ct(r,!!l.multiple,s,!1)}},Be=gd,ve=_s;var Bw={usingClientEntryPoint:!1,Events:[ma,Ks,Vl,me,Pe,gd]},Ra={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zw={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=cs(r),r===null?null:r.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||Ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{se=Tc.inject(zw),ie=Tc}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bw,Jn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Td(s))throw Error(t(200));return Fw(r,s,null,l)},Jn.createRoot=function(r,s){if(!Td(r))throw Error(t(299));var l=!1,d="",g=q0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Md(r,1,!1,null,null,l,!1,d,g),r[ir]=s.current,da(r.nodeType===8?r.parentNode:r),new Ed(s)},Jn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=cs(s),r=r===null?null:r.stateNode,r},Jn.flushSync=function(r){return _s(r)},Jn.hydrate=function(r,s,l){if(!wc(s))throw Error(t(200));return Ec(null,r,s,!0,l)},Jn.hydrateRoot=function(r,s,l){if(!Td(r))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,_="",b=q0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=j0(s,null,r,1,l??null,g,!1,_,b),r[ir]=s.current,da(r),d)for(r=0;r<d.length;r++)l=d[r],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new Mc(s)},Jn.render=function(r,s,l){if(!wc(s))throw Error(t(200));return Ec(null,r,s,!1,l)},Jn.unmountComponentAtNode=function(r){if(!wc(r))throw Error(t(40));return r._reactRootContainer?(_s(function(){Ec(null,null,r,!1,function(){r._reactRootContainer=null,r[ir]=null})}),!0):!1},Jn.unstable_batchedUpdates=gd,Jn.unstable_renderSubtreeIntoContainer=function(r,s,l,d){if(!wc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ec(r,s,l,!1,d)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var iv;function Kw(){if(iv)return Cd.exports;iv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Cd.exports=$w(),Cd.exports}var rv;function Zw(){if(rv)return bc;rv=1;var n=Kw();return bc.createRoot=n.createRoot,bc.hydrateRoot=n.hydrateRoot,bc}var Qw=Zw();const Jw=O_(Qw);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="186",e1=0,sv=1,t1=2,su=1,n1=2,Ba=3,Fs=0,ni=1,gr=2,Zi=0,ja=1,ns=2,ov=3,av=4,i1=5,bo=100,r1=101,s1=102,o1=103,a1=104,l1=200,c1=201,u1=202,f1=203,k_=204,B_=205,d1=206,h1=207,p1=208,m1=209,g1=210,v1=211,x1=212,_1=213,y1=214,Th=0,bh=1,Ah=2,nl=3,Ch=4,Rh=5,Ph=6,Lh=7,z_=0,S1=1,M1=2,Qi=0,V_=1,H_=2,G_=3,Ip=4,W_=5,X_=6,j_=7,Y_=300,Os=301,Fo=302,Ld=303,Dd=304,Iu=306,Dh=1e3,vr=1001,Nh=1002,Rn=1003,w1=1004,Ac=1005,zn=1006,Nd=1007,Ls=1008,ui=1009,q_=1010,$_=1011,il=1012,Up=1013,tr=1014,$i=1015,ii=1016,Fp=1017,Op=1018,rl=1020,K_=35902,Z_=35899,Q_=1021,J_=1022,Vi=1023,Mr=1026,Ds=1027,ey=1028,kp=1029,ks=1030,Bp=1031,zp=1033,ou=33776,au=33777,lu=33778,cu=33779,Ih=35840,Uh=35841,Fh=35842,Oh=35843,kh=36196,Bh=37492,zh=37496,Vh=37488,Hh=37489,mu=37490,Gh=37491,Wh=37808,Xh=37809,jh=37810,Yh=37811,qh=37812,$h=37813,Kh=37814,Zh=37815,Qh=37816,Jh=37817,ep=37818,tp=37819,np=37820,ip=37821,rp=36492,sp=36494,op=36495,ap=36283,lp=36284,gu=36285,cp=36286,E1=3200,up=0,T1=1,Jr="",ei="srgb",vu="srgb-linear",xu="linear",kt="srgb",Id=7680,b1=519,A1=512,C1=513,R1=514,Vp=515,P1=516,L1=517,Hp=518,D1=519,N1=35044,lv="300 es",Ki=2e3,sl=2001;function I1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _u(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U1(){const n=_u("canvas");return n.style.display="block",n}const cv={};function uv(...n){const e="THREE."+n.shift();console.log(e,...n)}function ty(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=ty(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Nt(...n){n=ty(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Io(...n){const e=n.join(" ");e in cv||(cv[e]=!0,ot(...n))}function F1(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const O1={[Th]:bh,[Ah]:Ph,[Ch]:Lh,[nl]:Rh,[bh]:Th,[Ph]:Ah,[Lh]:Ch,[Rh]:nl};class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fv=1234567;const Ya=Math.PI/180,ol=180/Math.PI;function Go(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Gp(n,e){return(n%e+e)%e}function k1(n,e,t,i,o){return i+(n-e)*(o-i)/(t-e)}function B1(n,e,t){return n!==e?(t-n)/(e-n):0}function qa(n,e,t){return(1-t)*n+t*e}function z1(n,e,t,i){return qa(n,e,1-Math.exp(-t*i))}function V1(n,e=1){return e-Math.abs(Gp(n,e*2)-e)}function H1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function G1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function W1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function X1(n,e){return n+Math.random()*(e-n)}function j1(n){return n*(.5-Math.random())}function Y1(n){n!==void 0&&(fv=n);let e=fv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q1(n){return n*Ya}function $1(n){return n*ol}function K1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Z1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Q1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function J1(n,e,t,i,o){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+i)/2),p=c((e+i)/2),v=a((e-i)/2),m=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(o){case"XYX":n.set(u*p,f*v,f*m,u*h);break;case"YZY":n.set(f*m,u*p,f*v,u*h);break;case"ZXZ":n.set(f*v,f*m,u*p,u*h);break;case"XZX":n.set(u*p,f*M,f*x,u*h);break;case"YXY":n.set(f*x,u*p,f*M,u*h);break;case"ZYZ":n.set(f*M,f*x,u*p,u*h);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ao(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $a={DEG2RAD:Ya,RAD2DEG:ol,generateUUID:Go,clamp:Mt,euclideanModulo:Gp,mapLinear:k1,inverseLerp:B1,lerp:qa,damp:z1,pingpong:V1,smoothstep:H1,smootherstep:G1,randInt:W1,randFloat:X1,randFloatSpread:j1,seededRandom:Y1,degToRad:q1,radToDeg:$1,isPowerOfTwo:K1,ceilPowerOfTwo:Z1,floorPowerOfTwo:Q1,setQuaternionFromProperEuler:J1,normalize:Xn,denormalize:Ao},Cm=class Cm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cm.prototype.isVector2=!0;let ft=Cm;class Wo{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let f=i[o+0],h=i[o+1],p=i[o+2],v=i[o+3],m=a[c+0],x=a[c+1],M=a[c+2],T=a[c+3];if(v!==T||f!==m||h!==x||p!==M){let S=f*m+h*x+p*M+v*T;S<0&&(m=-m,x=-x,M=-M,T=-T,S=-S);let y=1-u;if(S<.9995){const P=Math.acos(S),U=Math.sin(P);y=Math.sin(y*P)/U,u=Math.sin(u*P)/U,f=f*y+m*u,h=h*y+x*u,p=p*y+M*u,v=v*y+T*u}else{f=f*y+m*u,h=h*y+x*u,p=p*y+M*u,v=v*y+T*u;const P=1/Math.sqrt(f*f+h*h+p*p+v*v);f*=P,h*=P,p*=P,v*=P}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],f=i[o+1],h=i[o+2],p=i[o+3],v=a[c],m=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+p*v+f*x-h*m,e[t+1]=f*M+p*m+h*v-u*x,e[t+2]=h*M+p*x+u*m-f*v,e[t+3]=p*M-u*v-f*m-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(o/2),v=u(a/2),m=f(i/2),x=f(o/2),M=f(a/2);switch(c){case"XYZ":this._x=m*p*v+h*x*M,this._y=h*x*v-m*p*M,this._z=h*p*M+m*x*v,this._w=h*p*v-m*x*M;break;case"YXZ":this._x=m*p*v+h*x*M,this._y=h*x*v-m*p*M,this._z=h*p*M-m*x*v,this._w=h*p*v+m*x*M;break;case"ZXY":this._x=m*p*v-h*x*M,this._y=h*x*v+m*p*M,this._z=h*p*M+m*x*v,this._w=h*p*v-m*x*M;break;case"ZYX":this._x=m*p*v-h*x*M,this._y=h*x*v+m*p*M,this._z=h*p*M-m*x*v,this._w=h*p*v+m*x*M;break;case"YZX":this._x=m*p*v+h*x*M,this._y=h*x*v+m*p*M,this._z=h*p*M-m*x*v,this._w=h*p*v-m*x*M;break;case"XZY":this._x=m*p*v-h*x*M,this._y=h*x*v-m*p*M,this._z=h*p*M+m*x*v,this._w=h*p*v+m*x*M;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],v=t[10],m=i+u+v;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-h)*x,this._z=(c-o)*x}else if(i>u&&i>v){const x=2*Math.sqrt(1+i-u-v);this._w=(p-f)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+h)/x}else if(u>v){const x=2*Math.sqrt(1+u-i-v);this._w=(a-h)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+v-i-u);this._w=(c-o)/x,this._x=(a+h)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*f,this._y=o*p+c*f+a*u-i*h,this._z=a*p+c*h+i*f-o*u,this._w=c*p-i*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,o=-o,a=-a,c=-c,u=-u);let f=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rm=class Rm{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),v=2*(a*i-c*t);return this.x=t+f*h+c*v-u*p,this.y=i+f*p+u*h-a*v,this.z=o+f*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-i*f,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rm.prototype.isVector3=!0;let Y=Rm;const Ud=new Y,dv=new Wo,Pm=class Pm{constructor(e,t,i,o,a,c,u,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h)}set(e,t,i,o,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],v=i[7],m=i[2],x=i[5],M=i[8],T=o[0],S=o[3],y=o[6],P=o[1],U=o[4],C=o[7],R=o[2],L=o[5],F=o[8];return a[0]=c*T+u*P+f*R,a[3]=c*S+u*U+f*L,a[6]=c*y+u*C+f*F,a[1]=h*T+p*P+v*R,a[4]=h*S+p*U+v*L,a[7]=h*y+p*C+v*F,a[2]=m*T+x*P+M*R,a[5]=m*S+x*U+M*L,a[8]=m*y+x*C+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],v=p*c-u*h,m=u*f-p*a,x=h*a-c*f,M=t*v+i*m+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-p*i)*T,e[2]=(u*i-o*c)*T,e[3]=m*T,e[4]=(p*t-o*f)*T,e[5]=(o*a-u*t)*T,e[6]=x*T,e[7]=(i*f-h*t)*T,e[8]=(c*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return Io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fd.makeScale(e,t)),this}rotate(e){return Io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fd.makeRotation(-e)),this}translate(e,t){return Io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pm.prototype.isMatrix3=!0;let pt=Pm;const Fd=new pt,hv=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pv=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eE(){const n={enabled:!0,workingColorSpace:vu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(o.r=xr(o.r),o.g=xr(o.g),o.b=xr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=Uo(o.r),o.g=Uo(o.g),o.b=Uo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?xu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vu]:{primaries:e,whitePoint:i,transfer:xu,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Tt=eE();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fo;class tE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fo===void 0&&(fo=_u("canvas")),fo.width=e.width,fo.height=e.height;const o=fo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=fo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_u("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=xr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nE=0;class Wp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Od(o[c].image)):a.push(Od(o[c]))}else a=Od(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Od(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let iE=0;const kd=new Y;class Vn extends Bs{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=vr,o=vr,a=zn,c=Ls,u=Vi,f=ui,h=Vn.DEFAULT_ANISOTROPY,p=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Go(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Y_;Vn.DEFAULT_ANISOTROPY=1;const Lm=class Lm{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,h=f[0],p=f[4],v=f[8],m=f[1],x=f[5],M=f[9],T=f[2],S=f[6],y=f[10];if(Math.abs(p-m)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+m)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(h+1)/2,C=(x+1)/2,R=(y+1)/2,L=(p+m)/4,F=(v+T)/4,E=(M+S)/4;return U>C&&U>R?U<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(U),o=L/i,a=F/i):C>R?C<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(C),i=L/o,a=E/o):R<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(R),i=F/a,o=E/a),this.set(i,o,a,t),this}let P=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(m-p)*(m-p));return Math.abs(P)<.001&&(P=1),this.x=(S-M)/P,this.y=(v-T)/P,this.z=(m-p)/P,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lm.prototype.isVector4=!0;let tn=Lm;class rE extends Bs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new Vn(o),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Wp(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends rE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ny extends Vn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sE extends Vn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nu=class Nu{constructor(e,t,i,o,a,c,u,f,h,p,v,m,x,M,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h,p,v,m,x,M,T,S)}set(e,t,i,o,a,c,u,f,h,p,v,m,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=o,y[1]=a,y[5]=c,y[9]=u,y[13]=f,y[2]=h,y[6]=p,y[10]=v,y[14]=m,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,o=1/ho.setFromMatrixColumn(e,0).length(),a=1/ho.setFromMatrixColumn(e,1).length(),c=1/ho.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=c*p,x=c*v,M=u*p,T=u*v;t[0]=f*p,t[4]=-f*v,t[8]=h,t[1]=x+M*h,t[5]=m-T*h,t[9]=-u*f,t[2]=T-m*h,t[6]=M+x*h,t[10]=c*f}else if(e.order==="YXZ"){const m=f*p,x=f*v,M=h*p,T=h*v;t[0]=m+T*u,t[4]=M*u-x,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=x*u-M,t[6]=T+m*u,t[10]=c*f}else if(e.order==="ZXY"){const m=f*p,x=f*v,M=h*p,T=h*v;t[0]=m-T*u,t[4]=-c*v,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*p,t[9]=T-m*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const m=c*p,x=c*v,M=u*p,T=u*v;t[0]=f*p,t[4]=M*h-x,t[8]=m*h+T,t[1]=f*v,t[5]=T*h+m,t[9]=x*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const m=c*f,x=c*h,M=u*f,T=u*h;t[0]=f*p,t[4]=T-m*v,t[8]=M*v+x,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=x*v+M,t[10]=m-T*v}else if(e.order==="XZY"){const m=c*f,x=c*h,M=u*f,T=u*h;t[0]=f*p,t[4]=-v,t[8]=h*p,t[1]=m*v+T,t[5]=c*p,t[9]=x*v-M,t[2]=M*v-x,t[6]=u*p,t[10]=T*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,aE)}lookAt(e,t,i){const o=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Gr.crossVectors(i,li),Gr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Gr.crossVectors(i,li)),Gr.normalize(),Cc.crossVectors(li,Gr),o[0]=Gr.x,o[4]=Cc.x,o[8]=li.x,o[1]=Gr.y,o[5]=Cc.y,o[9]=li.y,o[2]=Gr.z,o[6]=Cc.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],v=i[5],m=i[9],x=i[13],M=i[2],T=i[6],S=i[10],y=i[14],P=i[3],U=i[7],C=i[11],R=i[15],L=o[0],F=o[4],E=o[8],N=o[12],B=o[1],H=o[5],j=o[9],te=o[13],V=o[2],ne=o[6],he=o[10],J=o[14],q=o[3],K=o[7],Q=o[11],I=o[15];return a[0]=c*L+u*B+f*V+h*q,a[4]=c*F+u*H+f*ne+h*K,a[8]=c*E+u*j+f*he+h*Q,a[12]=c*N+u*te+f*J+h*I,a[1]=p*L+v*B+m*V+x*q,a[5]=p*F+v*H+m*ne+x*K,a[9]=p*E+v*j+m*he+x*Q,a[13]=p*N+v*te+m*J+x*I,a[2]=M*L+T*B+S*V+y*q,a[6]=M*F+T*H+S*ne+y*K,a[10]=M*E+T*j+S*he+y*Q,a[14]=M*N+T*te+S*J+y*I,a[3]=P*L+U*B+C*V+R*q,a[7]=P*F+U*H+C*ne+R*K,a[11]=P*E+U*j+C*he+R*Q,a[15]=P*N+U*te+C*J+R*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],v=e[6],m=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15],P=f*x-h*m,U=u*x-h*v,C=u*m-f*v,R=c*x-h*p,L=c*m-f*p,F=c*v-u*p;return t*(T*P-S*U+y*C)-i*(M*P-S*R+y*L)+o*(M*U-T*R+y*F)-a*(M*C-T*L+S*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[1],c=e[5],u=e[9],f=e[2],h=e[6],p=e[10];return t*(c*p-u*h)-i*(a*p-u*f)+o*(a*h-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],v=e[9],m=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],P=t*u-i*c,U=t*f-o*c,C=t*h-a*c,R=i*f-o*u,L=i*h-a*u,F=o*h-a*f,E=p*T-v*M,N=p*S-m*M,B=p*y-x*M,H=v*S-m*T,j=v*y-x*T,te=m*y-x*S,V=P*te-U*j+C*H+R*B-L*N+F*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/V;return e[0]=(u*te-f*j+h*H)*ne,e[1]=(o*j-i*te-a*H)*ne,e[2]=(T*F-S*L+y*R)*ne,e[3]=(m*L-v*F-x*R)*ne,e[4]=(f*B-c*te-h*N)*ne,e[5]=(t*te-o*B+a*N)*ne,e[6]=(S*C-M*F-y*U)*ne,e[7]=(p*F-m*C+x*U)*ne,e[8]=(c*j-u*B+h*E)*ne,e[9]=(i*B-t*j-a*E)*ne,e[10]=(M*L-T*C+y*P)*ne,e[11]=(v*C-p*L-x*P)*ne,e[12]=(u*N-c*H-f*E)*ne,e[13]=(t*H-i*N+o*E)*ne,e[14]=(T*U-M*R-S*P)*ne,e[15]=(p*R-v*U+m*P)*ne,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+i,p*f-o*c,0,h*f-o*u,p*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,v=u+u,m=a*h,x=a*p,M=a*v,T=c*p,S=c*v,y=u*v,P=f*h,U=f*p,C=f*v,R=i.x,L=i.y,F=i.z;return o[0]=(1-(T+y))*R,o[1]=(x+C)*R,o[2]=(M-U)*R,o[3]=0,o[4]=(x-C)*L,o[5]=(1-(m+y))*L,o[6]=(S+P)*L,o[7]=0,o[8]=(M+U)*F,o[9]=(S-P)*F,o[10]=(1-(m+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let c=ho.set(o[0],o[1],o[2]).length();const u=ho.set(o[4],o[5],o[6]).length(),f=ho.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Fi.copy(this);const h=1/c,p=1/u,v=1/f;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=p,Fi.elements[5]*=p,Fi.elements[6]*=p,Fi.elements[8]*=v,Fi.elements[9]*=v,Fi.elements[10]*=v,t.setFromRotationMatrix(Fi),i.x=c,i.y=u,i.z=f,this}makePerspective(e,t,i,o,a,c,u=Ki,f=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(i-o),m=(t+e)/(t-e),x=(i+o)/(i-o);let M,T;if(f)M=a/(c-a),T=c*a/(c-a);else if(u===Ki)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(u===sl)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Ki,f=!1){const h=this.elements,p=2/(t-e),v=2/(i-o),m=-(t+e)/(t-e),x=-(i+o)/(i-o);let M,T;if(f)M=1/(c-a),T=c/(c-a);else if(u===Ki)M=-2/(c-a),T=-(c+a)/(c-a);else if(u===sl)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Nu.prototype.isMatrix4=!0;let jt=Nu;const ho=new Y,Fi=new jt,oE=new Y(0,0,0),aE=new Y(1,1,1),Gr=new Y,Cc=new Y,li=new Y,mv=new jt,gv=new Wo;class is{constructor(e=0,t=0,i=0,o=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],v=o[2],m=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gv.setFromEuler(this),this.setFromQuaternion(gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class iy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lE=0;const vv=new Y,po=new Wo,fr=new jt,Rc=new Y,La=new Y,cE=new Y,uE=new Wo,xv=new Y(1,0,0),_v=new Y(0,1,0),yv=new Y(0,0,1),Sv={type:"added"},fE={type:"removed"},mo={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Tn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new Y,t=new is,i=new Wo,o=new Y(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new pt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(_v,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,t){return vv.copy(e).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(_v,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rc.copy(e):Rc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(La,Rc,this.up):fr.lookAt(Rc,La,this.up),this.quaternion.setFromRotationMatrix(fr),o&&(fr.extractRotation(o.matrixWorld),po.setFromRotationMatrix(fr),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sv),mo.child=e,this.dispatchEvent(mo),mo.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fE),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sv),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,uE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const v=f[h];a(e.shapes,v)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),m=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tn.DEFAULT_UP=new Y(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ns extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=p.position.distanceTo(v.position),x=.02,M=.005;h.inputState.pinching&&m>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ry={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Vd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=Tt.workingColorSpace){if(e=Gp(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Vd(c,a,e+1/3),this.g=Vd(c,a,e),this.b=Vd(c,a,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ei){function i(a){a!==void 0&&parseFloat(a)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const i=ry[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(kn.copy(this),e),Math.round(Mt(kn.r*255,0,255))*65536+Math.round(Mt(kn.g*255,0,255))*256+Math.round(Mt(kn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(kn.copy(this),t);const i=kn.r,o=kn.g,a=kn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case i:f=(o-a)/v+(o<a?6:0);break;case o:f=(a-i)/v+2;break;case a:f=(i-o)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=ei){Tt.workingToColorSpace(kn.copy(this),e);const t=kn.r,i=kn.g,o=kn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Pc);const i=qa(Wr.h,Pc.h,t),o=qa(Wr.s,Pc.s,t),a=qa(Wr.l,Pc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new mt;mt.NAMES=ry;class hE extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new Y,dr=new Y,Hd=new Y,hr=new Y,go=new Y,vo=new Y,Mv=new Y,Gd=new Y,Wd=new Y,Xd=new Y,jd=new tn,Yd=new tn,qd=new tn;class zi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Oi.subVectors(e,t),o.cross(Oi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Oi.subVectors(o,t),dr.subVectors(i,t),Hd.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(dr),f=Oi.dot(Hd),h=dr.dot(dr),p=dr.dot(Hd),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const m=1/v,x=(h*f-u*p)*m,M=(c*p-u*f)*m;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,i,o,a,c,u,f){return this.getBarycoord(e,t,i,o,hr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,hr.x),f.addScaledVector(c,hr.y),f.addScaledVector(u,hr.z),f)}static getInterpolatedAttribute(e,t,i,o,a,c){return jd.setScalar(0),Yd.setScalar(0),qd.setScalar(0),jd.fromBufferAttribute(e,t),Yd.fromBufferAttribute(e,i),qd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(jd,a.x),c.addScaledVector(Yd,a.y),c.addScaledVector(qd,a.z),c}static isFrontFacing(e,t,i,o){return Oi.subVectors(i,t),dr.subVectors(e,t),Oi.cross(dr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Oi.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;go.subVectors(o,i),vo.subVectors(a,i),Gd.subVectors(e,i);const f=go.dot(Gd),h=vo.dot(Gd);if(f<=0&&h<=0)return t.copy(i);Wd.subVectors(e,o);const p=go.dot(Wd),v=vo.dot(Wd);if(p>=0&&v<=p)return t.copy(o);const m=f*v-p*h;if(m<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(go,c);Xd.subVectors(e,a);const x=go.dot(Xd),M=vo.dot(Xd);if(M>=0&&x<=M)return t.copy(a);const T=x*h-f*M;if(T<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(vo,u);const S=p*M-x*v;if(S<=0&&v-p>=0&&x-M>=0)return Mv.subVectors(a,o),u=(v-p)/(v-p+(x-M)),t.copy(o).addScaledVector(Mv,u);const y=1/(S+T+m);return c=T*y,u=m*y,t.copy(i).addScaledVector(go,c).addScaledVector(vo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class dl{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ki):ki.fromBufferAttribute(a,c),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lc.copy(i.boundingBox)),Lc.applyMatrix4(e.matrixWorld),this.union(Lc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),Dc.subVectors(this.max,Da),xo.subVectors(e.a,Da),_o.subVectors(e.b,Da),yo.subVectors(e.c,Da),Xr.subVectors(_o,xo),jr.subVectors(yo,_o),ws.subVectors(xo,yo);let t=[0,-Xr.z,Xr.y,0,-jr.z,jr.y,0,-ws.z,ws.y,Xr.z,0,-Xr.x,jr.z,0,-jr.x,ws.z,0,-ws.x,-Xr.y,Xr.x,0,-jr.y,jr.x,0,-ws.y,ws.x,0];return!$d(t,xo,_o,yo,Dc)||(t=[1,0,0,0,1,0,0,0,1],!$d(t,xo,_o,yo,Dc))?!1:(Nc.crossVectors(Xr,jr),t=[Nc.x,Nc.y,Nc.z],$d(t,xo,_o,yo,Dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ki=new Y,Lc=new dl,xo=new Y,_o=new Y,yo=new Y,Xr=new Y,jr=new Y,ws=new Y,Da=new Y,Dc=new Y,Nc=new Y,Es=new Y;function $d(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){Es.fromArray(n,a);const u=o.x*Math.abs(Es.x)+o.y*Math.abs(Es.y)+o.z*Math.abs(Es.z),f=e.dot(Es),h=t.dot(Es),p=i.dot(Es);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const dn=new Y,Ic=new ft;let pE=0;class _r extends Bs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=N1,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),o=Xn(o,this.array),a=Xn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class sy extends _r{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oy extends _r{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends _r{constructor(e,t,i){super(new Float32Array(e),t,i)}}const mE=new dl,Na=new Y,Kd=new Y;class hl{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Na,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Kd)),this.expandByPoint(Na.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gE=0;const Si=new jt,Zd=new Tn,So=new Y,ci=new dl,Ia=new dl,Mn=new Y;class gn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I1(e)?oy:sy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,i){return Si.makeTranslation(e,t,i),this.applyMatrix4(Si),this}scale(e,t,i){return Si.makeScale(e,t,i),this.applyMatrix4(Si),this}lookAt(e){return Zd.lookAt(e),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ia.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(ci.min,Ia.min),ci.expandByPoint(Mn),Mn.addVectors(ci.max,Ia.max),ci.expandByPoint(Mn)):(ci.expandByPoint(Ia.min),ci.expandByPoint(Ia.max))}ci.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)Mn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(Mn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Mn.fromBufferAttribute(u,h),f&&(So.fromBufferAttribute(e,h),Mn.add(So)),o=Math.max(o,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new _r(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],f=[];for(let E=0;E<i.count;E++)u[E]=new Y,f[E]=new Y;const h=new Y,p=new Y,v=new Y,m=new ft,x=new ft,M=new ft,T=new Y,S=new Y;function y(E,N,B){h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,N),v.fromBufferAttribute(i,B),m.fromBufferAttribute(a,E),x.fromBufferAttribute(a,N),M.fromBufferAttribute(a,B),p.sub(h),v.sub(h),x.sub(m),M.sub(m);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(H),S.copy(v).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(H),u[E].add(T),u[N].add(T),u[B].add(T),f[E].add(S),f[N].add(S),f[B].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let E=0,N=P.length;E<N;++E){const B=P[E],H=B.start,j=B.count;for(let te=H,V=H+j;te<V;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const U=new Y,C=new Y,R=new Y,L=new Y;function F(E){R.fromBufferAttribute(o,E),L.copy(R);const N=u[E];U.copy(N),U.sub(R.multiplyScalar(R.dot(N))).normalize(),C.crossVectors(L,N);const H=C.dot(f[E])<0?-1:1;c.setXYZW(E,U.x,U.y,U.z,H)}for(let E=0,N=P.length;E<N;++E){const B=P[E],H=B.start,j=B.count;for(let te=H,V=H+j;te<V;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _r(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const o=new Y,a=new Y,c=new Y,u=new Y,f=new Y,h=new Y,p=new Y,v=new Y;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),T=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),u.add(p),f.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,x=t.count;m<x;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,v=u.normalized,m=new h.constructor(f.length*p);let x=0,M=0;for(let T=0,S=f.length;T<S;T++){u.isInterleavedBufferAttribute?x=f[T]*u.data.stride+u.offset:x=f[T]*p;for(let y=0;y<p;y++)m[M++]=h[x++]}return new _r(m,p,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,i=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const m=h[p],x=e(m,i);f.push(x)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let v=0,m=h.length;v<m;v++){const x=h[v];p.push(x.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let m=0,x=v.length;m<x;m++)p.push(v[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new Y,vE=new Y,xE=new pt;class Zr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Qd.subVectors(i,t).cross(vE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(Qd),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xE.getNormalMatrix(e),o=this.coplanarPoint(Qd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _E=0;class Ti extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=ja,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=k_,this.blendDst=B_,this.blendEquation=bo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Id,this.stencilZFail=Id,this.stencilZPass=Id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector2&&i&&i.isVector2||o&&o.isEuler&&i&&i.isEuler||o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Zr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr=new Y,Jd=new Y,Uc=new Y,Fc=new Y;class Xp{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Jd.copy(e).add(t).multiplyScalar(.5),Uc.copy(t).sub(e).normalize(),Fc.copy(this.origin).sub(Jd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Uc),u=Fc.dot(this.direction),f=-Fc.dot(Uc),h=Fc.lengthSq(),p=Math.abs(1-c*c);let v,m,x,M;if(p>0)if(v=c*f-u,m=c*u-f,M=a*p,v>=0)if(m>=-M)if(m<=M){const T=1/p;v*=T,m*=T,x=v*(v+c*m+2*u)+m*(c*v+m+2*f)+h}else m=a,v=Math.max(0,-(c*m+u)),x=-v*v+m*(m+2*f)+h;else m=-a,v=Math.max(0,-(c*m+u)),x=-v*v+m*(m+2*f)+h;else m<=-M?(v=Math.max(0,-(-c*a+u)),m=v>0?-a:Math.min(Math.max(-a,-f),a),x=-v*v+m*(m+2*f)+h):m<=M?(v=0,m=Math.min(Math.max(-a,-f),a),x=m*(m+2*f)+h):(v=Math.max(0,-(c*a+u)),m=v>0?a:Math.min(Math.max(-a,-f),a),x=-v*v+m*(m+2*f)+h);else m=c>0?-a:a,v=Math.max(0,-(c*m+u)),x=-v*v+m*(m+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Jd).addScaledVector(Uc,m),x}intersectSphere(e,t){if(e.radius<0)return null;mr.subVectors(e.center,this.origin);const i=mr.dot(this.direction),o=mr.dot(mr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-m.z)*v,f=(e.max.z-m.z)*v):(u=(e.max.z-m.z)*v,f=(e.min.z-m.z)*v),i>f||u>o)||((u>i||i!==i)&&(i=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,i,o,a){const c=this.origin,u=this.direction,f=u.x,h=u.y,p=u.z,v=e.x-c.x,m=e.y-c.y,x=e.z-c.z,M=t.x-c.x,T=t.y-c.y,S=t.z-c.z,y=i.x-c.x,P=i.y-c.y,U=i.z-c.z,C=Math.abs(f),R=Math.abs(h),L=Math.abs(p);let F,E,N,B,H,j,te,V,ne,he,J,q;if(C>=R&&C>=L?(N=f,j=v,ne=M,q=y,f>=0?(F=h,E=p,B=m,H=x,te=T,V=S,he=P,J=U):(F=p,E=h,B=x,H=m,te=S,V=T,he=U,J=P)):R>=L?(N=h,j=m,ne=T,q=P,h>=0?(F=p,E=f,B=x,H=v,te=S,V=M,he=U,J=y):(F=f,E=p,B=v,H=x,te=M,V=S,he=y,J=U)):(N=p,j=x,ne=S,q=U,p>=0?(F=f,E=h,B=v,H=m,te=M,V=T,he=y,J=P):(F=h,E=f,B=m,H=v,te=T,V=M,he=P,J=y)),N===0)return null;const K=F/N,Q=E/N,I=1/N,re=B-K*j,ye=H-Q*j,ze=te-K*ne,Ue=V-Q*ne,We=he-K*q,ae=J-Q*q,fe=We*Ue-ae*ze,Te=re*ae-ye*We,qe=ze*ye-Ue*re;if(o){if(fe<0||Te<0||qe<0)return null}else if((fe<0||Te<0||qe<0)&&(fe>0||Te>0||qe>0))return null;const ke=fe+Te+qe;if(ke===0)return null;const ct=I*(fe*j+Te*ne+qe*q);return(ke>0?ct<0:ct>0)?null:this.at(ct/ke,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uu extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wv=new jt,Ts=new Xp,Oc=new hl,Ev=new Y,kc=new Y,Bc=new Y,zc=new Y,eh=new Y,Vc=new Y,Tv=new Y,Hc=new Y;class ti extends Tn{constructor(e=new gn,t=new Uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Vc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],v=a[f];p!==0&&(eh.fromBufferAttribute(v,e),c?Vc.addScaledVector(eh,p):Vc.addScaledVector(eh.sub(t),p))}t.add(Vc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(a),Ts.copy(e.ray).recast(e.near),!(Oc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Oc,Ev)===null||Ts.origin.distanceToSquared(Ev)>(e.far-e.near)**2))&&(wv.copy(a).invert(),Ts.copy(e.ray).applyMatrix4(wv),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,m=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],y=c[S.materialIndex],P=Math.max(S.start,x.start),U=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let C=P,R=U;C<R;C+=3){const L=u.getX(C),F=u.getX(C+1),E=u.getX(C+2);o=Gc(this,y,e,i,h,p,v,L,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const P=u.getX(S),U=u.getX(S+1),C=u.getX(S+2);o=Gc(this,c,e,i,h,p,v,P,U,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],y=c[S.materialIndex],P=Math.max(S.start,x.start),U=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=P,R=U;C<R;C+=3){const L=C,F=C+1,E=C+2;o=Gc(this,y,e,i,h,p,v,L,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const P=S,U=S+1,C=S+2;o=Gc(this,c,e,i,h,p,v,P,U,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function yE(n,e,t,i,o,a,c,u){let f;if(e.side===ni?f=i.intersectTriangle(c,a,o,!0,u):f=i.intersectTriangle(o,a,c,e.side===Fs,u),f===null)return null;Hc.copy(u),Hc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Hc);return h<t.near||h>t.far?null:{distance:h,point:Hc.clone(),object:n}}function Gc(n,e,t,i,o,a,c,u,f,h){n.getVertexPosition(u,kc),n.getVertexPosition(f,Bc),n.getVertexPosition(h,zc);const p=yE(n,e,t,i,kc,Bc,zc,Tv);if(p){const v=new Y;zi.getBarycoord(Tv,kc,Bc,zc,v),o&&(p.uv=zi.getInterpolatedAttribute(o,u,f,h,v,new ft)),a&&(p.uv1=zi.getInterpolatedAttribute(a,u,f,h,v,new ft)),c&&(p.normal=zi.getInterpolatedAttribute(c,u,f,h,v,new Y),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:f,c:h,normal:new Y,materialIndex:0};zi.getNormal(kc,Bc,zc,m.normal),p.face=m,p.barycoord=v}return p}class SE extends Vn{constructor(e=null,t=1,i=1,o,a,c,u,f,h=Rn,p=Rn,v,m){super(null,c,u,f,h,p,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bs=new hl,ME=new ft(.5,.5),Wc=new Y;class jp{constructor(e=new Zr,t=new Zr,i=new Zr,o=new Zr,a=new Zr,c=new Zr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],p=a[4],v=a[5],m=a[6],x=a[7],M=a[8],T=a[9],S=a[10],y=a[11],P=a[12],U=a[13],C=a[14],R=a[15];if(o[0].setComponents(h-c,x-p,y-M,R-P).normalize(),o[1].setComponents(h+c,x+p,y+M,R+P).normalize(),o[2].setComponents(h+u,x+v,y+T,R+U).normalize(),o[3].setComponents(h-u,x-v,y-T,R-U).normalize(),i)o[4].setComponents(f,m,S,C).normalize(),o[5].setComponents(h-f,x-m,y-S,R-C).normalize();else if(o[4].setComponents(h-f,x-m,y-S,R-C).normalize(),t===Ki)o[5].setComponents(h+f,x+m,y+S,R+C).normalize();else if(t===sl)o[5].setComponents(f,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const t=ME.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Wc.x=o.normal.x>0?e.max.x:e.min.x,Wc.y=o.normal.y>0?e.max.y:e.min.y,Wc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ay extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yu=new Y,Su=new Y,bv=new jt,Ua=new Xp,Xc=new hl,th=new Y,Av=new Y;class wE extends Tn{constructor(e=new gn,t=new ay){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)yu.fromBufferAttribute(t,o-1),Su.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=yu.distanceTo(Su);e.setAttribute("lineDistance",new Zt(i,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(o),Xc.radius+=a,e.ray.intersectsSphere(Xc)===!1)return;bv.copy(o).invert(),Ua.copy(e.ray).applyMatrix4(bv);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=h){const y=p.getX(T),P=p.getX(T+1),U=jc(this,e,Ua,f,y,P,T);U&&t.push(U)}if(this.isLineLoop){const T=p.getX(M-1),S=p.getX(x),y=jc(this,e,Ua,f,T,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=h){const y=jc(this,e,Ua,f,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=jc(this,e,Ua,f,M-1,x,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function jc(n,e,t,i,o,a,c){const u=n.geometry.attributes.position;if(yu.fromBufferAttribute(u,o),Su.fromBufferAttribute(u,a),t.distanceSqToSegment(yu,Su,th,Av)>i)return;th.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(th);if(!(h<e.near||h>e.far))return{distance:h,point:Av.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}const Cv=new Y,Rv=new Y;class ly extends wE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)Cv.fromBufferAttribute(t,o),Rv.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Cv.distanceTo(Rv);e.setAttribute("lineDistance",new Zt(i,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ka extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pv=new jt,fp=new Xp,Yc=new hl,qc=new Y;class za extends Tn{constructor(e=new gn,t=new Ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yc.copy(i.boundingSphere),Yc.applyMatrix4(o),Yc.radius+=a,e.ray.intersectsSphere(Yc)===!1)return;Pv.copy(o).invert(),fp.copy(e.ray).applyMatrix4(Pv);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,v=i.attributes.position;if(h!==null){const m=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let M=m,T=x;M<T;M++){const S=h.getX(M);qc.fromBufferAttribute(v,S),Lv(qc,S,f,o,e,t,this)}}else{const m=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let M=m,T=x;M<T;M++)qc.fromBufferAttribute(v,M),Lv(qc,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Lv(n,e,t,i,o,a,c){const u=fp.distanceSqToPoint(n);if(u<t){const f=new Y;fp.closestPointToPoint(n,f),f.applyMatrix4(i);const h=o.ray.origin.distanceTo(f);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class cy extends Vn{constructor(e=[],t=Os,i,o,a,c,u,f,h,p){super(e,t,i,o,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EE extends Vn{constructor(e,t,i,o,a,c,u,f,h){super(e,t,i,o,a,c,u,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class al extends Vn{constructor(e,t,i=tr,o,a,c,u=Rn,f=Rn,h,p=Mr,v=1){if(p!==Mr&&p!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,c,u,f,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class TE extends al{constructor(e,t=tr,i=Os,o,a,c=Rn,u=Rn,f,h=Mr){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,i,o,a,c,u,f,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uy extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends gn{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],v=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(v,2));function M(T,S,y,P,U,C,R,L,F,E,N){const B=C/F,H=R/E,j=C/2,te=R/2,V=L/2,ne=F+1,he=E+1;let J=0,q=0;const K=new Y;for(let Q=0;Q<he;Q++){const I=Q*H-te;for(let re=0;re<ne;re++){const ye=re*B-j;K[T]=ye*P,K[S]=I*U,K[y]=V,h.push(K.x,K.y,K.z),K[T]=0,K[S]=0,K[y]=L>0?1:-1,p.push(K.x,K.y,K.z),v.push(re/F),v.push(1-Q/E),J+=1}}for(let Q=0;Q<E;Q++)for(let I=0;I<F;I++){const re=m+I+ne*Q,ye=m+I+ne*(Q+1),ze=m+(I+1)+ne*(Q+1),Ue=m+(I+1)+ne*Q;f.push(re,ye,Ue),f.push(ye,ze,Ue),q+=6}u.addGroup(x,q,N),x+=q,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yp extends gn{constructor(e=1,t=1,i=1,o=32,a=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:f};const h=this;o=Math.floor(o),a=Math.floor(a);const p=[],v=[],m=[],x=[];let M=0;const T=[],S=i/2;let y=0;P(),c===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(p),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(x,2));function P(){const C=new Y,R=new Y;let L=0;const F=(t-e)/i;for(let E=0;E<=a;E++){const N=[],B=E/a,H=B*(t-e)+e;for(let j=0;j<=o;j++){const te=j/o,V=te*f+u,ne=Math.sin(V),he=Math.cos(V);R.x=H*ne,R.y=-B*i+S,R.z=H*he,v.push(R.x,R.y,R.z),C.set(ne,F,he).normalize(),m.push(C.x,C.y,C.z),x.push(te,1-B),N.push(M++)}T.push(N)}for(let E=0;E<o;E++)for(let N=0;N<a;N++){const B=T[N][E],H=T[N+1][E],j=T[N+1][E+1],te=T[N][E+1];(e>0||N!==0)&&(p.push(B,H,te),L+=3),(t>0||N!==a-1)&&(p.push(H,j,te),L+=3)}h.addGroup(y,L,0),y+=L}function U(C){const R=M,L=new ft,F=new Y;let E=0;const N=C===!0?e:t,B=C===!0?1:-1;for(let j=1;j<=o;j++)v.push(0,S*B,0),m.push(0,B,0),x.push(.5,.5),M++;const H=M;for(let j=0;j<=o;j++){const V=j/o*f+u,ne=Math.cos(V),he=Math.sin(V);F.x=N*he,F.y=S*B,F.z=N*ne,v.push(F.x,F.y,F.z),m.push(0,B,0),L.x=ne*.5+.5,L.y=he*.5*B+.5,x.push(L.x,L.y),M++}for(let j=0;j<o;j++){const te=R+j,V=H+j;C===!0?p.push(V,V+1,te):p.push(V+1,V,te),E+=3}h.addGroup(y,E,C===!0?1:2),y+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(o),t.push(a),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let o=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,f=a-1,h;for(;u<=f;)if(o=Math.floor(u+(f-u)/2),h=i[o]-c,h<0)u=o+1;else if(h>0)f=o-1;else{f=o;break}if(o=f,i[o]===c)return o/(a-1);const p=i[o],m=i[o+1]-p,x=(c-p)/m;return(o+x)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),u=this.getPoint(a),f=t||(c.isVector2?new ft:new Y);return f.copy(u).sub(c).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new Y,o=[],a=[],c=[],u=new Y,f=new jt;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new Y)}a[0]=new Y,c[0]=new Y;let h=Number.MAX_VALUE;const p=Math.abs(o[0].x),v=Math.abs(o[0].y),m=Math.abs(o[0].z);p<=h&&(h=p,i.set(1,0,0)),v<=h&&(h=v,i.set(0,1,0)),m<=h&&i.set(0,0,1),u.crossVectors(o[0],i).normalize(),a[0].crossVectors(o[0],u),c[0].crossVectors(o[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),u.crossVectors(o[x-1],o[x]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(Mt(o[x-1].dot(o[x]),-1,1));a[x].applyMatrix4(f.makeRotationAxis(u,M))}c[x].crossVectors(o[x],a[x])}if(t===!0){let x=Math.acos(Mt(a[0].dot(a[e]),-1,1));x/=e,o[0].dot(u.crossVectors(a[0],a[e]))>0&&(x=-x);for(let M=1;M<=e;M++)a[M].applyMatrix4(f.makeRotationAxis(o[M],x*M)),c[M].crossVectors(o[M],a[M])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function qp(){let n=0,e=0,t=0,i=0;function o(a,c,u,f){n=a,e=u,t=-3*a+3*c-2*u-f,i=2*a-2*c+u+f}return{initCatmullRom:function(a,c,u,f,h){o(c,u,h*(u-a),h*(f-c))},initNonuniformCatmullRom:function(a,c,u,f,h,p,v){let m=(c-a)/h-(u-a)/(h+p)+(u-c)/p,x=(u-c)/p-(f-c)/(p+v)+(f-u)/v;m*=p,x*=p,o(c,u,m,x)},calc:function(a){const c=a*a,u=c*a;return n+e*a+t*c+i*u}}}const Dv=new Y,Nv=new Y,nh=new qp,ih=new qp,rh=new qp;class Iv extends bE{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new Y){const i=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),f=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:f===0&&u===a-1&&(u=a-2,f=1);let h,p;this.closed||u>0?h=o[(u-1)%a]:(Nv.subVectors(o[0],o[1]).add(o[0]),h=Nv);const v=o[u%a],m=o[(u+1)%a];if(this.closed||u+2<a?p=o[(u+2)%a]:(Dv.subVectors(o[a-1],o[a-2]).add(o[a-1]),p=Dv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(m),x),S=Math.pow(m.distanceToSquared(p),x);T<1e-4&&(T=1),M<1e-4&&(M=T),S<1e-4&&(S=T),nh.initNonuniformCatmullRom(h.x,v.x,m.x,p.x,M,T,S),ih.initNonuniformCatmullRom(h.y,v.y,m.y,p.y,M,T,S),rh.initNonuniformCatmullRom(h.z,v.z,m.z,p.z,M,T,S)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(h.x,v.x,m.x,p.x,this.tension),ih.initCatmullRom(h.y,v.y,m.y,p.y,this.tension),rh.initCatmullRom(h.z,v.z,m.z,p.z,this.tension));return i.set(nh.calc(f),ih.calc(f),rh.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new Y().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Fu extends gn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(o),h=u+1,p=f+1,v=e/u,m=t/f,x=[],M=[],T=[],S=[];for(let y=0;y<p;y++){const P=y*m-c;for(let U=0;U<h;U++){const C=U*v-a;M.push(C,-P,0),T.push(0,0,1),S.push(U/u),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let P=0;P<u;P++){const U=P+h*y,C=P+h*(y+1),R=P+1+h*(y+1),L=P+1+h*y;x.push(U,C,L),x.push(C,R,L)}this.setIndex(x),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(T,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mu extends gn{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(c+u,Math.PI);let h=0;const p=[],v=new Y,m=new Y,x=[],M=[],T=[],S=[];for(let y=0;y<=i;y++){const P=[],U=y/i,C=c+U*u,R=e*Math.cos(C),L=Math.sqrt(e*e-R*R);let F=0;y===0&&c===0?F=.5/t:y===i&&f===Math.PI&&(F=-.5/t);for(let E=0;E<=t;E++){const N=E/t,B=o+N*a;v.x=-L*Math.cos(B),v.y=R,v.z=L*Math.sin(B),M.push(v.x,v.y,v.z),m.copy(v).normalize(),T.push(m.x,m.y,m.z),S.push(N+F,1-U),P.push(h++)}p.push(P)}for(let y=0;y<i;y++)for(let P=0;P<t;P++){const U=p[y][P+1],C=p[y][P],R=p[y+1][P],L=p[y+1][P+1];(y!==0||c>0)&&x.push(U,C,L),(y!==i-1||f<Math.PI)&&x.push(C,R,L)}this.setIndex(x),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(T,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Oo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];if(Uv(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(Uv(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function jn(n){const e={};for(let t=0;t<n.length;t++){const i=Oo(n[t]);for(const o in i)e[o]=i[o]}return e}function Uv(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function AE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const wu={clone:Oo,merge:jn};var CE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CE,this.fragmentShader=RE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=AE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const o=e.uniforms[i];switch(this.uniforms[i]={},o.type){case"t":this.uniforms[i].value=t[o.value]||null;break;case"c":this.uniforms[i].value=new mt().setHex(o.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(o.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(o.value);break;case"v4":this.uniforms[i].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[i].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[i].value=new jt().fromArray(o.value);break;default:this.uniforms[i].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class PE extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class LE extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DE extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dy extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const sh=new jt,Fv=new Y,Ov=new Y;class IE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Fv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fv),Ov.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ov),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,o){sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(sh,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,c=o?o.z/a.x:1,u=o?o.w/a.y:1,f=o?o.x/a.x:0,h=o?o.y/a.y:0;e.coordinateSystem===sl||e.reversedDepth?t.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+h,0,0,.5,.5,0,0,0,1),t.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $c=new Y,Kc=new Wo,ji=new Y;class hy extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($c,Kc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,Kc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose($c,Kc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,Kc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new Y,kv=new ft,Bv=new ft;class Ei extends hy{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,kv,Bv),t.subVectors(Bv,kv)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ou extends hy{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class UE extends IE{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FE extends dy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new UE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class OE extends dy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mo=-90,wo=1;class kE extends Tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ei(Mo,wo,e,t);o.layers=this.layers,this.add(o);const a=new Ei(Mo,wo,e,t);a.layers=this.layers,this.add(a);const c=new Ei(Mo,wo,e,t);c.layers=this.layers,this.add(c);const u=new Ei(Mo,wo,e,t);u.layers=this.layers,this.add(u);const f=new Ei(Mo,wo,e,t);f.layers=this.layers,this.add(f);const h=new Ei(Mo,wo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class BE extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=VE.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function VE(){this._document.hidden===!1&&this.reset()}class HE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Dm=class Dm{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};Dm.prototype.isMatrix2=!0;let zv=Dm;function Vv(n,e,t,i){const o=GE(i);switch(t){case Q_:return n*e;case ey:return n*e/o.components*o.byteLength;case kp:return n*e/o.components*o.byteLength;case ks:return n*e*2/o.components*o.byteLength;case Bp:return n*e*2/o.components*o.byteLength;case J_:return n*e*3/o.components*o.byteLength;case Vi:return n*e*4/o.components*o.byteLength;case zp:return n*e*4/o.components*o.byteLength;case ou:case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lu:case cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Oh:return Math.max(n,16)*Math.max(e,8)/4;case Ih:case Fh:return Math.max(n,8)*Math.max(e,8)/2;case kh:case Bh:case Vh:case Hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zh:case mu:case Gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $h:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case np:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ip:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rp:case sp:case op:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ap:case lp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gu:case cp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GE(n){switch(n){case ui:case q_:return{byteLength:1,components:1};case il:case $_:case ii:return{byteLength:2,components:1};case Fp:case Op:return{byteLength:2,components:4};case tr:case Up:case $i:return{byteLength:4,components:1};case K_:case Z_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function py(){let n=null,e=!1,t=null,i=null;function o(a,c){i=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function WE(n){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,f,h){const p=f.array,v=f.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<v.length;x++){const M=v[m],T=v[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++m,v[m]=T)}v.length=m+1;for(let x=0,M=v.length;x<M;x++){const T=v[x];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:c}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
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
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
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
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
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
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rT=`#ifdef USE_IRIDESCENCE
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
#endif`,sT=`#ifdef USE_BUMPMAP
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
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pT=`#define PI 3.141592653589793
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
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gT=`vec3 transformedNormal = objectNormal;
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
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",MT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,CT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
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
}`,NT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,OT=`#ifdef USE_ENVMAP
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
#endif`,kT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
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
#endif`,GT=`uniform sampler2D dfgLUT;
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
}`,WT=`
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
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
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tb=`#if defined( USE_POINTS_UV )
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
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
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
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jb=`uniform sampler2D t2D;
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
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
}`,Qb=`#if DEPTH_PACKING == 3200
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
}`,Jb=`#define DISTANCE
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
}`,eA=`#define DISTANCE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`uniform float scale;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,aA=`#define LAMBERT
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define MATCAP
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
}`,uA=`#define MATCAP
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
}`,fA=`#define NORMAL
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
}`,dA=`#define NORMAL
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
}`,hA=`#define PHONG
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
}`,pA=`#define PHONG
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
}`,mA=`#define STANDARD
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
}`,gA=`#define STANDARD
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
}`,vA=`#define TOON
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
}`,xA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,MA=`uniform vec3 color;
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
}`,wA=`uniform float rotation;
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
}`,EA=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:XE,alphahash_pars_fragment:jE,alphamap_fragment:YE,alphamap_pars_fragment:qE,alphatest_fragment:$E,alphatest_pars_fragment:KE,aomap_fragment:ZE,aomap_pars_fragment:QE,batching_pars_vertex:JE,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:rT,bumpmap_pars_fragment:sT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:fT,color_pars_vertex:dT,color_vertex:hT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:vT,displacementmap_vertex:xT,emissivemap_fragment:_T,emissivemap_pars_fragment:yT,colorspace_fragment:ST,colorspace_pars_fragment:MT,envmap_fragment:wT,envmap_common_pars_fragment:ET,envmap_pars_fragment:TT,envmap_pars_vertex:bT,envmap_physical_pars_fragment:OT,envmap_vertex:AT,fog_vertex:CT,fog_pars_vertex:RT,fog_fragment:PT,fog_pars_fragment:LT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:NT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:UT,lights_pars_begin:FT,lights_toon_fragment:kT,lights_toon_pars_fragment:BT,lights_phong_fragment:zT,lights_phong_pars_fragment:VT,lights_physical_fragment:HT,lights_physical_pars_fragment:GT,lights_fragment_begin:WT,lights_fragment_maps:XT,lights_fragment_end:jT,lightprobes_pars_fragment:YT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:$T,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:ZT,map_fragment:QT,map_pars_fragment:JT,map_particle_fragment:eb,map_particle_pars_fragment:tb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:ab,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:fb,normal_pars_vertex:db,normal_vertex:hb,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:vb,iridescence_pars_fragment:xb,opaque_fragment:_b,packing:yb,premultiplied_alpha_fragment:Sb,project_vertex:Mb,dithering_fragment:wb,dithering_pars_fragment:Eb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Cb,shadowmap_vertex:Rb,shadowmask_pars_fragment:Pb,skinbase_vertex:Lb,skinning_pars_vertex:Db,skinning_vertex:Nb,skinnormal_vertex:Ib,specularmap_fragment:Ub,specularmap_pars_fragment:Fb,tonemapping_fragment:Ob,tonemapping_pars_fragment:kb,transmission_fragment:Bb,transmission_pars_fragment:zb,uv_pars_fragment:Vb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Wb,background_vert:Xb,background_frag:jb,backgroundCube_vert:Yb,backgroundCube_frag:qb,cube_vert:$b,cube_frag:Kb,depth_vert:Zb,depth_frag:Qb,distance_vert:Jb,distance_frag:eA,equirect_vert:tA,equirect_frag:nA,linedashed_vert:iA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:aA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:uA,meshnormal_vert:fA,meshnormal_frag:dA,meshphong_vert:hA,meshphong_frag:pA,meshphysical_vert:mA,meshphysical_frag:gA,meshtoon_vert:vA,meshtoon_frag:xA,points_vert:_A,points_frag:yA,shadow_vert:SA,shadow_frag:MA,sprite_vert:wA,sprite_frag:EA},Oe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},qi={basic:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:jn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:jn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:jn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:jn([Oe.points,Oe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:jn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:jn([Oe.common,Oe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:jn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:jn([Oe.sprite,Oe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:jn([Oe.common,Oe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:jn([Oe.lights,Oe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};qi.physical={uniforms:jn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Zc={r:0,b:0,g:0},TA=new jt,my=new pt;my.set(-1,0,0,0,1,0,0,0,1);function bA(n,e,t,i,o,a){const c=new mt(0);let u=o===!0?0:1,f,h,p=null,v=0,m=null;function x(P){let U=P.isScene===!0?P.background:null;if(U&&U.isTexture){const C=P.backgroundBlurriness>0;U=e.get(U,C)}return U}function M(P){let U=!1;const C=x(P);C===null?S(c,u):C&&C.isColor&&(S(C,1),U=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(P,U){const C=x(U);C&&(C.isCubeTexture||C.mapping===Iu)?(h===void 0&&(h=new ti(new pl(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Oo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(TA.makeRotationFromEuler(U.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(my),h.material.toneMapped=Tt.getTransfer(C.colorSpace)!==kt,(p!==C||v!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=C,v=C.version,m=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new ti(new Fu(2,2),new Pn({name:"BackgroundMaterial",uniforms:Oo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,f.material.toneMapped=Tt.getTransfer(C.colorSpace)!==kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||v!==C.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=C,v=C.version,m=n.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function S(P,U){P.getRGB(Zc,fy(n)),t.buffers.color.setClear(Zc.r,Zc.g,Zc.b,U,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,U=1){c.set(P),u=U,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,S(c,u)},render:M,addToRenderList:T,dispose:y}}function AA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=m(null);let a=o,c=!1;function u(H,j,te,V,ne){let he=!1;const J=v(H,V,te,j);a!==J&&(a=J,h(a.object)),he=x(H,V,te,ne),he&&M(H,V,te,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(H,j,te,V),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function f(){return n.createVertexArray()}function h(H){return n.bindVertexArray(H)}function p(H){return n.deleteVertexArray(H)}function v(H,j,te,V){const ne=V.wireframe===!0;let he=i[j.id];he===void 0&&(he={},i[j.id]=he);const J=H.isInstancedMesh===!0?H.id:0;let q=he[J];q===void 0&&(q={},he[J]=q);let K=q[te.id];K===void 0&&(K={},q[te.id]=K);let Q=K[ne];return Q===void 0&&(Q=m(f()),K[ne]=Q),Q}function m(H){const j=[],te=[],V=[];for(let ne=0;ne<t;ne++)j[ne]=0,te[ne]=0,V[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:V,object:H,attributes:{},index:null}}function x(H,j,te,V){const ne=a.attributes,he=j.attributes;let J=0;const q=te.getAttributes();for(const K in q)if(q[K].location>=0){const I=ne[K];let re=he[K];if(re===void 0&&(K==="instanceMatrix"&&H.instanceMatrix&&(re=H.instanceMatrix),K==="instanceColor"&&H.instanceColor&&(re=H.instanceColor)),I===void 0||I.attribute!==re||re&&I.data!==re.data)return!0;J++}return a.attributesNum!==J||a.index!==V}function M(H,j,te,V){const ne={},he=j.attributes;let J=0;const q=te.getAttributes();for(const K in q)if(q[K].location>=0){let I=he[K];I===void 0&&(K==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),K==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const re={};re.attribute=I,I&&I.data&&(re.data=I.data),ne[K]=re,J++}a.attributes=ne,a.attributesNum=J,a.index=V}function T(){const H=a.newAttributes;for(let j=0,te=H.length;j<te;j++)H[j]=0}function S(H){y(H,0)}function y(H,j){const te=a.newAttributes,V=a.enabledAttributes,ne=a.attributeDivisors;te[H]=1,V[H]===0&&(n.enableVertexAttribArray(H),V[H]=1),ne[H]!==j&&(n.vertexAttribDivisor(H,j),ne[H]=j)}function P(){const H=a.newAttributes,j=a.enabledAttributes;for(let te=0,V=j.length;te<V;te++)j[te]!==H[te]&&(n.disableVertexAttribArray(te),j[te]=0)}function U(H,j,te,V,ne,he,J){J===!0?n.vertexAttribIPointer(H,j,te,ne,he):n.vertexAttribPointer(H,j,te,V,ne,he)}function C(H,j,te,V){T();const ne=V.attributes,he=te.getAttributes(),J=j.defaultAttributeValues;for(const q in he){const K=he[q];if(K.location>=0){let Q=ne[q];if(Q===void 0&&(q==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),q==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),Q!==void 0){const I=Q.normalized,re=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;const ze=ye.buffer,Ue=ye.type,We=ye.bytesPerElement,ae=Ue===n.INT||Ue===n.UNSIGNED_INT||Q.gpuType===Up;if(Q.isInterleavedBufferAttribute){const fe=Q.data,Te=fe.stride,qe=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<K.locationSize;ke++)y(K.location+ke,fe.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<K.locationSize;ke++)S(K.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ke=0;ke<K.locationSize;ke++)U(K.location+ke,re/K.locationSize,Ue,I,Te*We,(qe+re/K.locationSize*ke)*We,ae)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<K.locationSize;fe++)y(K.location+fe,Q.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<K.locationSize;fe++)S(K.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let fe=0;fe<K.locationSize;fe++)U(K.location+fe,re/K.locationSize,Ue,I,re*We,re/K.locationSize*fe*We,ae)}}else if(J!==void 0){const I=J[q];if(I!==void 0)switch(I.length){case 2:n.vertexAttrib2fv(K.location,I);break;case 3:n.vertexAttrib3fv(K.location,I);break;case 4:n.vertexAttrib4fv(K.location,I);break;default:n.vertexAttrib1fv(K.location,I)}}}}P()}function R(){N();for(const H in i){const j=i[H];for(const te in j){const V=j[te];for(const ne in V){const he=V[ne];for(const J in he)p(he[J].object),delete he[J];delete V[ne]}}delete i[H]}}function L(H){if(i[H.id]===void 0)return;const j=i[H.id];for(const te in j){const V=j[te];for(const ne in V){const he=V[ne];for(const J in he)p(he[J].object),delete he[J];delete V[ne]}}delete i[H.id]}function F(H){for(const j in i){const te=i[j];for(const V in te){const ne=te[V];if(ne[H.id]===void 0)continue;const he=ne[H.id];for(const J in he)p(he[J].object),delete he[J];delete ne[H.id]}}}function E(H){for(const j in i){const te=i[j],V=H.isInstancedMesh===!0?H.id:0,ne=te[V];if(ne!==void 0){for(const he in ne){const J=ne[he];for(const q in J)p(J[q].object),delete J[q];delete ne[he]}delete te[V],Object.keys(te).length===0&&delete i[j]}}}function N(){B(),c=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:N,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:P}}function CA(n,e,t){let i;function o(f){i=f}function a(f,h){n.drawArrays(i,f,h),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawArraysInstanced(i,f,h,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,p);let m=0;for(let x=0;x<p;x++)m+=h[x];t.update(m,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function RA(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Vi&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const E=F===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ui&&F!==$i&&!E&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(ot("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:C,maxSamples:R,samples:L}}function PA(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Zr,u=new pt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const x=v.length!==0||m||i!==0||o;return o=m,i=v.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=p(v,m,0)},this.setState=function(v,m,x){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,y=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?p(null):h();else{const P=a?0:i,U=P*4;let C=y.clippingState||null;f.value=C,C=p(M,m,U,x);for(let R=0;R!==U;++R)C[R]=t[R];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,m,x,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const y=x+T*4,P=m.matrixWorldInverse;u.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,C=x;U!==T;++U,C+=4)c.copy(v[U]).applyMatrix4(P,u),c.normal.toArray(S,C),S[C+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}const Co=4,LA=6,DA=20,NA=256,Fa=new Ou,Hv=new mt;let oh=null,ah=0,lh=0,ch=!1;const IA=new Y,As=new Y;class Gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=IA}=a;oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,ah,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ii,format:Vi,colorSpace:vu,depthBuffer:!1},o=Wv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=UA(a)),this._blurMaterial=OA(a,e,t),this._ggxMaterial=FA(a,e,t)}return o}_compileMaterial(e){const t=new ti(new gn,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,o,a){const f=new Ei(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,x=v.toneMapping;v.getClearColor(Hv),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new pl,new Uu({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let y=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,y=!0):(S.color.copy(Hv),y=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(f.up.set(0,h[U],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[U],a.y,a.z)):C===1?(f.up.set(0,0,h[U]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[U],a.z)):(f.up.set(0,h[U],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[U]));const R=this._cubeSize;Eo(o,C*R,U>2?R:0,R,R),v.setRenderTarget(o),y&&v.render(T,f),v.render(e,f)}v.toneMapping=x,v.autoClear=m,e.background=P}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Os||e.mapping===Fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xv());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Eo(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),m=h*1.25,x=v*m,{_lodMax:M}=this,T=this._sizeLods[i],S=3*T*(i>M-Co?i-M+Co:0),y=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=x,f.mipInt.value=M-t,Eo(a,S,y,3*T,2*T),o.setRenderTarget(a),o.render(u,Fa),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-i,Eo(e,S,y,3*T,2*T),o.setRenderTarget(e),o.render(u,Fa)}_blur(e,t,i,o){const a=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,c),this._blurPass(a,e,i,i,c)}_blurPass(e,t,i,o,a){const c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[o];f.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-i;const p=this._sizeLods[o],v=3*p*(o>this._lodMax-Co?o-this._lodMax+Co:0),m=4*(this._cubeSize-p);Eo(t,v,m,3*p,2*p),c.setRenderTarget(t),c.render(f,Fa)}}function UA(n){const e=[],t=[];let i=n;const o=n-Co+1+LA;for(let a=0;a<o;a++){const c=Math.pow(2,i);e.push(c);const u=1/(c-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,m=6,x=3,M=new Float32Array(x*m*v),T=new Float32Array(x*m*v);for(let y=0;y<v;y++){const P=y%3*2/3-1,U=y>2?0:-1,C=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];M.set(C,x*m*y);for(let R=0;R<m;R++){const L=p[R*2]*2-1,F=p[R*2+1]*2-1;y===0?As.set(1,F,L):y===1?As.set(-L,1,-F):y===2?As.set(-L,F,1):y===3?As.set(-1,F,-L):y===4?As.set(-L,-1,F):As.set(L,F,-1),As.toArray(T,(y*m+R)*x)}}const S=new gn;S.setAttribute("position",new _r(M,x)),S.setAttribute("outputDirection",new _r(T,x)),t.push(new ti(S,null)),i>Co&&i--}return{lodMeshes:t,sizeLods:e}}function Wv(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function FA(n,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function OA(n,e,t){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:DA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Xv(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function jv(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gy extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new cy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new pl(5,5,5),a=new Pn({name:"CubemapFromEquirect",uniforms:Oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:Zi});a.uniforms.tEquirect.value=t;const c=new ti(o,a),u=t.minFilter;return t.minFilter===Ls&&(t.minFilter=zn),new kE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function kA(n){let e=new WeakMap,t=new WeakMap,i=null;function o(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){const x=m.mapping;if(x===Ld||x===Dd)if(e.has(m)){const M=e.get(m).texture;return u(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const T=new gy(M.height);return T.fromEquirectangularTexture(n,m),e.set(m,T),m.addEventListener("dispose",h),u(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,M=x===Ld||x===Dd,T=x===Os||x===Fo;if(M||T){let S=t.get(m);const y=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return i===null&&(i=new Gv(n)),S=M?i.fromEquirectangular(m,S):i.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const P=m.image;return M&&P&&P.height>0||T&&P&&f(P)?(i===null&&(i=new Gv(n)),S=M?i.fromEquirectangular(m):i.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",p),S.texture):null}}}return m}function u(m,x){return x===Ld?m.mapping=Os:x===Dd&&(m.mapping=Fo),m}function f(m){let x=0;const M=6;for(let T=0;T<M;T++)m[T]!==void 0&&x++;return x===M}function h(m){const x=m.target;x.removeEventListener("dispose",h);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function p(m){const x=m.target;x.removeEventListener("dispose",p);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:v}}function BA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Io("WebGLRenderer: "+i+" extension not supported."),o}}}function zA(n,e,t,i){const o={},a=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const x=a.get(m);x&&(e.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function f(v){const m=v.attributes;for(const x in m)e.update(m[x],n.ARRAY_BUFFER)}function h(v){const m=[],x=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(x!==null){const P=x.array;T=x.version;for(let U=0,C=P.length;U<C;U+=3){const R=P[U+0],L=P[U+1],F=P[U+2];m.push(R,L,L,F,F,R)}}else{const P=M.array;T=M.version;for(let U=0,C=P.length/3-1;U<C;U+=3){const R=U+0,L=U+1,F=U+2;m.push(R,L,L,F,F,R)}}const S=new(M.count>=65535?oy:sy)(m,1);S.version=T;const y=a.get(v);y&&e.remove(y),a.set(v,S)}function p(v){const m=a.get(v);if(m){const x=v.index;x!==null&&m.version<x.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:f,getWireframeAttribute:p}}function VA(n,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function f(v,m){n.drawElements(i,m,a,v*c),t.update(m,i,1)}function h(v,m,x){x!==0&&(n.drawElementsInstanced(i,m,a,v*c,x),t.update(m,i,x))}function p(v,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,v,0,x);let T=0;for(let S=0;S<x;S++)T+=m[S];t.update(T,i,1)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function HA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function GA(n,e,t){const i=new WeakMap,o=new tn;function a(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==v){let B=function(){E.dispose(),i.delete(u),u.removeEventListener("dispose",B)};var x=B;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let R=u.attributes.position.count*C,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const F=new Float32Array(R*L*4*v),E=new ny(F,R,L,v);E.type=$i,E.needsUpdate=!0;const N=C*4;for(let H=0;H<v;H++){const j=y[H],te=P[H],V=U[H],ne=R*L*4*H;for(let he=0;he<j.count;he++){const J=he*N;M===!0&&(o.fromBufferAttribute(j,he),F[ne+J+0]=o.x,F[ne+J+1]=o.y,F[ne+J+2]=o.z,F[ne+J+3]=0),T===!0&&(o.fromBufferAttribute(te,he),F[ne+J+4]=o.x,F[ne+J+5]=o.y,F[ne+J+6]=o.z,F[ne+J+7]=0),S===!0&&(o.fromBufferAttribute(V,he),F[ne+J+8]=o.x,F[ne+J+9]=o.y,F[ne+J+10]=o.z,F[ne+J+11]=V.itemSize===4?o.w:1)}}m={count:v,texture:E,size:new ft(R,L)},i.set(u,m),u.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function WA(n,e,t,i,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return m}function u(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const XA={[V_]:"LINEAR_TONE_MAPPING",[H_]:"REINHARD_TONE_MAPPING",[G_]:"CINEON_TONE_MAPPING",[Ip]:"ACES_FILMIC_TONE_MAPPING",[X_]:"AGX_TONE_MAPPING",[j_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function jA(n,e,t,i,o,a){const c=new Yn(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,f=null;const h=new gn;h.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const p=new PE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new ti(h,p),m=new Ou(-1,1,1,-1,0,1);let x=null,M=null,T=!1,S,y=null,P=[],U=!1;this.setSize=function(C,R){c.setSize(C,R),u!==null&&u.setSize(C,R),f!==null&&f.setSize(C,R);for(let L=0;L<P.length;L++){const F=P[L];F.setSize&&F.setSize(C,R)}},this.setEffects=function(C){P=C,U=P.length>0&&P[0].isRenderPass===!0;const R=c.width,L=c.height;P.length>0&&u===null&&(u=new Yn(R,L,{type:ii,depthBuffer:!1,stencilBuffer:!1}),f=new Yn(R,L,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<P.length;F++){const E=P[F];E.setSize&&E.setSize(R,L)}},this.begin=function(C,R){if(T||C.toneMapping===Qi&&P.length===0)return!1;if(y=R,R!==null){const L=R.width,F=R.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return U===!1&&C.setRenderTarget(c),S=C.toneMapping,C.toneMapping=Qi,!0},this.hasRenderPass=function(){return U},this.end=function(C,R){C.toneMapping=S,T=!0;let L=c,F=u;for(let E=0;E<P.length;E++){const N=P[E];N.enabled!==!1&&(N.render(C,F,L,R),N.needsSwap!==!1&&(L=F,F=F===u?f:u))}if(x!==C.outputColorSpace||M!==C.toneMapping){x=C.outputColorSpace,M=C.toneMapping,p.defines={},Tt.getTransfer(x)===kt&&(p.defines.SRGB_TRANSFER="");const E=XA[M];E&&(p.defines[E]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(y),C.render(v,m),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),h.dispose(),p.dispose()}}const vy=new Vn,dp=new al(1,1),xy=new ny,_y=new sE,yy=new cy,Yv=[],qv=[],$v=new Float32Array(16),Kv=new Float32Array(9),Zv=new Float32Array(4);function Xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=Yv[o];if(a===void 0&&(a=new Float32Array(o),Yv[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bu(n,e){let t=qv[e];t===void 0&&(t=new Int32Array(e),qv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),xn(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),xn(t,e)}}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),xn(t,e)}}function ZA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;Zv.set(i),n.uniformMatrix2fv(this.addr,!1,Zv),xn(t,i)}}function QA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;Kv.set(i),n.uniformMatrix3fv(this.addr,!1,Kv),xn(t,i)}}function JA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;$v.set(i),n.uniformMatrix4fv(this.addr,!1,$v),xn(t,i)}}function eC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),xn(t,e)}}function nC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),xn(t,e)}}function iC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),xn(t,e)}}function rC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),xn(t,e)}}function oC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),xn(t,e)}}function aC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),xn(t,e)}}function lC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(dp.compareFunction=t.isReversedDepthBuffer()?Hp:Vp,a=dp):a=vy,t.setTexture2D(e||a,o)}function cC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||_y,o)}function uC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||yy,o)}function fC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||xy,o)}function dC(n){switch(n){case 5126:return YA;case 35664:return qA;case 35665:return $A;case 35666:return KA;case 35674:return ZA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return eC;case 35667:case 35671:return tC;case 35668:case 35672:return nC;case 35669:case 35673:return iC;case 5125:return rC;case 36294:return sC;case 36295:return oC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return lC;case 35679:case 36299:case 36307:return cC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return fC}}function hC(n,e){n.uniform1fv(this.addr,e)}function pC(n,e){const t=Xo(e,this.size,2);n.uniform2fv(this.addr,t)}function mC(n,e){const t=Xo(e,this.size,3);n.uniform3fv(this.addr,t)}function gC(n,e){const t=Xo(e,this.size,4);n.uniform4fv(this.addr,t)}function vC(n,e){const t=Xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xC(n,e){const t=Xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _C(n,e){const t=Xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yC(n,e){n.uniform1iv(this.addr,e)}function SC(n,e){n.uniform2iv(this.addr,e)}function MC(n,e){n.uniform3iv(this.addr,e)}function wC(n,e){n.uniform4iv(this.addr,e)}function EC(n,e){n.uniform1uiv(this.addr,e)}function TC(n,e){n.uniform2uiv(this.addr,e)}function bC(n,e){n.uniform3uiv(this.addr,e)}function AC(n,e){n.uniform4uiv(this.addr,e)}function CC(n,e,t){const i=this.cache,o=e.length,a=Bu(t,o);vn(i,a)||(n.uniform1iv(this.addr,a),xn(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=dp:c=vy;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function RC(n,e,t){const i=this.cache,o=e.length,a=Bu(t,o);vn(i,a)||(n.uniform1iv(this.addr,a),xn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||_y,a[c])}function PC(n,e,t){const i=this.cache,o=e.length,a=Bu(t,o);vn(i,a)||(n.uniform1iv(this.addr,a),xn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||yy,a[c])}function LC(n,e,t){const i=this.cache,o=e.length,a=Bu(t,o);vn(i,a)||(n.uniform1iv(this.addr,a),xn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||xy,a[c])}function DC(n){switch(n){case 5126:return hC;case 35664:return pC;case 35665:return mC;case 35666:return gC;case 35674:return vC;case 35675:return xC;case 35676:return _C;case 5124:case 35670:return yC;case 35667:case 35671:return SC;case 35668:case 35672:return MC;case 35669:case 35673:return wC;case 5125:return EC;case 36294:return TC;case 36295:return bC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return CC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return PC;case 36289:case 36303:case 36311:case 36292:return LC}}class NC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dC(t.type)}}class IC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DC(t.type)}}class UC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function Qv(n,e){n.seq.push(e),n.map[e.id]=e}function FC(n,e,t){const i=n.name,o=i.length;for(uh.lastIndex=0;;){const a=uh.exec(i),c=uh.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){Qv(t,h===void 0?new NC(u,n,e):new IC(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new UC(u),Qv(t,v)),t=v}}}class uu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),f=e.getUniformLocation(t,u.name);FC(u,f,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function Jv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OC=37297;let kC=0;function BC(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const ex=new pt;function zC(n){Tt._getMatrix(ex,Tt.workingColorSpace,n);const e=`mat3( ${ex.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case xu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function tx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+BC(n.getShaderSource(e),u)}else return a}function VC(n,e){const t=zC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const HC={[V_]:"Linear",[H_]:"Reinhard",[G_]:"Cineon",[Ip]:"ACESFilmic",[X_]:"AgX",[j_]:"Neutral",[W_]:"Custom"};function GC(n,e){const t=HC[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qc=new Y;function WC(){Tt.getLuminanceCoefficients(Qc);const n=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function jC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Va(n){return n!==""}function nx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ix(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qC=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(n){return n.replace(qC,KC)}const $C=new Map;function KC(n,e){let t=_t[e];if(t===void 0){const i=$C.get(e);if(i!==void 0)t=_t[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return hp(t)}const ZC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rx(n){return n.replace(ZC,QC)}function QC(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function sx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const JC={[su]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function eR(n){return JC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tR={[Os]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE_UV"};function nR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":tR[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const iR={[Fo]:"ENVMAP_MODE_REFRACTION"};function rR(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sR={[z_]:"ENVMAP_BLENDING_MULTIPLY",[S1]:"ENVMAP_BLENDING_MIX",[M1]:"ENVMAP_BLENDING_ADD"};function oR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sR[n.combine]||"ENVMAP_BLENDING_NONE"}function aR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lR(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=eR(t),h=nR(t),p=rR(t),v=oR(t),m=aR(t),x=XC(t),M=jC(a),T=o.createProgram();let S,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Va).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Va).join(`
`),y.length>0&&(y+=`
`)):(S=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),y=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Qi?GC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,VC("linearToOutputTexel",t.outputColorSpace),WC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),c=hp(c),c=nx(c,t),c=ix(c,t),u=hp(u),u=nx(u,t),u=ix(u,t),c=rx(c),u=rx(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=P+S+c,C=P+y+u,R=Jv(o,o.VERTEX_SHADER,U),L=Jv(o,o.FRAGMENT_SHADER,C);o.attachShader(T,R),o.attachShader(T,L),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(H){if(n.debug.checkShaderErrors){const j=o.getProgramInfoLog(T)||"",te=o.getShaderInfoLog(R)||"",V=o.getShaderInfoLog(L)||"",ne=j.trim(),he=te.trim(),J=V.trim();let q=!0,K=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,R,L);else{const Q=tx(o,R,"vertex"),I=tx(o,L,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ne+`
`+Q+`
`+I)}else ne!==""?ot("WebGLProgram: Program Info Log:",ne):(he===""||J==="")&&(K=!1);K&&(H.diagnostics={runnable:q,programLog:ne,vertexShader:{log:he,prefix:S},fragmentShader:{log:J,prefix:y}})}o.deleteShader(R),o.deleteShader(L),E=new uu(o,T),N=YC(o,T)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(T,OC)),B},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=R,this.fragmentShader=L,this}let cR=0;class uR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fR(e),t.set(e,i)),i}}class fR{constructor(e){this.id=cR++,this.code=e,this.usedTimes=0}}function dR(n){return n===ks||n===mu||n===gu}function hR(n,e,t,i,o,a){const c=new iy,u=new uR,f=new Set,h=[],p=new Map,v=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return f.add(E),E===0?"uv":`uv${E}`}function T(E,N,B,H,j,te){const V=H.fog,ne=j.geometry,he=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||he,J),K=q&&q.mapping===Iu?q.image.height:null,Q=x[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const I=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,re=I!==void 0?I.length:0;let ye=0;ne.morphAttributes.position!==void 0&&(ye=1),ne.morphAttributes.normal!==void 0&&(ye=2),ne.morphAttributes.color!==void 0&&(ye=3);let ze,Ue,We,ae;if(Q){const Pt=qi[Q];ze=Pt.vertexShader,Ue=Pt.fragmentShader}else{ze=E.vertexShader,Ue=E.fragmentShader;const Pt=u.getVertexShaderStage(E),bt=u.getFragmentShaderStage(E);u.update(E,Pt,bt),We=Pt.id,ae=bt.id}const fe=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),qe=j.isInstancedMesh===!0,ke=j.isBatchedMesh===!0,ct=!!E.map,Ut=!!E.matcap,dt=!!q,yt=!!E.aoMap,At=!!E.lightMap,gt=!!E.bumpMap&&E.wireframe===!1,Ft=!!E.normalMap,Yt=!!E.displacementMap,qt=!!E.emissiveMap,Ct=!!E.metalnessMap,zt=!!E.roughnessMap,X=E.anisotropy>0,rn=E.clearcoat>0,_e=E.dispersion>0,D=E.retroreflectivity>0,w=E.iridescence>0,Z=E.sheen>0,ee=E.transmission>0,de=X&&!!E.anisotropyMap,we=rn&&!!E.clearcoatMap,Ae=rn&&!!E.clearcoatNormalMap,pe=rn&&!!E.clearcoatRoughnessMap,ge=w&&!!E.iridescenceMap,Le=w&&!!E.iridescenceThicknessMap,Ze=Z&&!!E.sheenColorMap,De=Z&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Qe=!!E.specularColorMap,it=!!E.specularIntensityMap,lt=ee&&!!E.transmissionMap,G=ee&&!!E.thicknessMap,Re=!!E.gradientMap,me=!!E.alphaMap,Pe=E.alphaTest>0,Be=!!E.alphaHash,ve=!!E.extensions;let tt=Qi;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(tt=n.toneMapping);const $e={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:Ue,defines:E.defines,customVertexShaderID:We,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ke,batchingColor:ke&&j._colorsTexture!==null,instancing:qe,instancingColor:qe&&j.instanceColor!==null,instancingMorph:qe&&j.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:Ut,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:K,aoMap:yt,lightMap:At,bumpMap:gt,normalMap:Ft,displacementMap:Yt,emissiveMap:qt,normalMapObjectSpace:Ft&&E.normalMapType===T1,normalMapTangentSpace:Ft&&E.normalMapType===up,packedNormalMap:Ft&&E.normalMapType===up&&dR(E.normalMap.format),metalnessMap:Ct,roughnessMap:zt,anisotropy:X,anisotropyMap:de,clearcoat:rn,clearcoatMap:we,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:_e,retroreflection:D,iridescence:w,iridescenceMap:ge,iridescenceThicknessMap:Le,sheen:Z,sheenColorMap:Ze,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:Qe,specularIntensityMap:it,transmission:ee,transmissionMap:lt,thicknessMap:G,gradientMap:Re,opaque:E.transparent===!1&&E.blending===ja&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Pe,alphaHash:Be,combine:E.combine,mapUv:ct&&M(E.map.channel),aoMapUv:yt&&M(E.aoMap.channel),lightMapUv:At&&M(E.lightMap.channel),bumpMapUv:gt&&M(E.bumpMap.channel),normalMapUv:Ft&&M(E.normalMap.channel),displacementMapUv:Yt&&M(E.displacementMap.channel),emissiveMapUv:qt&&M(E.emissiveMap.channel),metalnessMapUv:Ct&&M(E.metalnessMap.channel),roughnessMapUv:zt&&M(E.roughnessMap.channel),anisotropyMapUv:de&&M(E.anisotropyMap.channel),clearcoatMapUv:we&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&M(E.sheenRoughnessMap.channel),specularMapUv:Ce&&M(E.specularMap.channel),specularColorMapUv:Qe&&M(E.specularColorMap.channel),specularIntensityMapUv:it&&M(E.specularIntensityMap.channel),transmissionMapUv:lt&&M(E.transmissionMap.channel),thicknessMapUv:G&&M(E.thicknessMap.channel),alphaMapUv:me&&M(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ft||X),vertexNormals:!!ne.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ne.attributes.uv&&(ct||me),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ne.attributes.normal===void 0&&Ft===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:qt&&E.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gr,flipSided:E.side===ni,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=f.has(1),$e.vertexUv2s=f.has(2),$e.vertexUv3s=f.has(3),f.clear(),$e}function S(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)N.push(B),N.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(y(N,E),P(N,E),N.push(n.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function y(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numSunLights),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numSunLightShadows),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function P(E,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.retroreflection&&c.enable(24),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function U(E){const N=x[E.type];let B;if(N){const H=qi[N];B=wu.clone(H.uniforms)}else B=E.uniforms;return B}function C(E,N){let B=p.get(N);return B!==void 0?++B.usedTimes:(B=new lR(n,N,E,o),h.push(B),p.set(N,B)),B}function R(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function L(E){u.remove(E)}function F(){u.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:U,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:F}}function pR(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,f){n.get(c)[u]=f}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function mR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ax(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function u(m,x,M,T,S,y){let P=n[e];return P===void 0?(P={id:m.id,object:m,geometry:x,material:M,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:S,group:y},n[e]=P):(P.id=m.id,P.object=m,P.geometry=x,P.material=M,P.materialVariant=c(m),P.groupOrder=T,P.renderOrder=m.renderOrder,P.z=S,P.group=y),e++,P}function f(m,x,M,T,S,y,P){P.reversedDepth===!0&&(S=-S);const U=u(m,x,M,T,S,y);M.transmission>0?i.push(U):M.transparent===!0?o.push(U):t.push(U)}function h(m,x,M,T,S,y){const P=u(m,x,M,T,S,y);M.transmission>0?i.unshift(P):M.transparent===!0?o.unshift(P):t.unshift(P)}function p(m,x){t.length>1&&t.sort(m||mR),i.length>1&&i.sort(x||ox),o.length>1&&o.sort(x||ox)}function v(){for(let m=e,x=n.length;m<x;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:f,unshift:h,finish:v,sort:p}}function gR(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new ax,n.set(i,[c])):o>=a.length?(c=new ax,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function vR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new mt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function xR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _R=0;function yR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SR(n){const e=new vR,t=xR(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const o=new Y,a=new jt,c=new jt;function u(h){let p=0,v=0,m=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,P=0,U=0,C=0,R=0,L=0,F=0,E=0,N=0,B=0;h.sort(yR);for(let j=0,te=h.length;j<te;j++){const V=h[j],ne=V.color,he=V.intensity,J=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ks?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)p+=ne.r*he,v+=ne.g*he,m+=ne.b*he;else if(V.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(V.sh.coefficients[K],he);B++}else if(V.isSunLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,I=t.get(V);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[M]=I,i.sunShadowMap[M]=q;const re=Q.getViewportCount();for(let ye=0;ye<re;ye++)i.sunShadowMatrix[T+ye]=Q.getMatrix(ye),i.sunShadowCascade[T+ye]=Q._cascadeData[ye];T+=re,M++}i.sun[x]=K,x++}else if(V.isDirectionalLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,I=t.get(V);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.directionalShadow[S]=I,i.directionalShadowMap[S]=q,i.directionalShadowMatrix[S]=V.shadow.matrix,R++}i.directional[S]=K,S++}else if(V.isSpotLight){const K=e.get(V);K.position.setFromMatrixPosition(V.matrixWorld),K.color.copy(ne).multiplyScalar(he),K.distance=J,K.coneCos=Math.cos(V.angle),K.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),K.decay=V.decay,i.spot[P]=K;const Q=V.shadow;if(V.map&&(i.spotLightMap[E]=V.map,E++,Q.updateMatrices(V),V.castShadow&&N++),i.spotLightMatrix[P]=Q.matrix,V.castShadow){const I=t.get(V);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.spotShadow[P]=I,i.spotShadowMap[P]=q,F++}P++}else if(V.isRectAreaLight){const K=e.get(V);K.color.copy(ne).multiplyScalar(he),K.halfWidth.set(V.width*.5,0,0),K.halfHeight.set(0,V.height*.5,0),i.rectArea[U]=K,U++}else if(V.isPointLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),K.distance=V.distance,K.decay=V.decay,V.castShadow){const Q=V.shadow,I=t.get(V);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,I.shadowCameraNear=Q.camera.near,I.shadowCameraFar=Q.camera.far,i.pointShadow[y]=I,i.pointShadowMap[y]=q,i.pointShadowMatrix[y]=V.shadow.matrix,L++}i.point[y]=K,y++}else if(V.isHemisphereLight){const K=e.get(V);K.skyColor.copy(V.color).multiplyScalar(he),K.groundColor.copy(V.groundColor).multiplyScalar(he),i.hemi[C]=K,C++}}U>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=v,i.ambient[2]=m;const H=i.hash;(H.sunLength!==x||H.directionalLength!==S||H.pointLength!==y||H.spotLength!==P||H.rectAreaLength!==U||H.hemiLength!==C||H.numSunShadows!==M||H.numDirectionalShadows!==R||H.numPointShadows!==L||H.numSpotShadows!==F||H.numSpotMaps!==E||H.numLightProbes!==B)&&(i.sun.length=x,i.directional.length=S,i.spot.length=P,i.rectArea.length=U,i.point.length=y,i.hemi.length=C,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=T,i.sunShadowCascade.length=T,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.pointShadowMatrix.length=L,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+E-N,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=B,H.sunLength=x,H.directionalLength=S,H.pointLength=y,H.spotLength=P,H.rectAreaLength=U,H.hemiLength=C,H.numSunShadows=M,H.numDirectionalShadows=R,H.numPointShadows=L,H.numSpotShadows=F,H.numSpotMaps=E,H.numLightProbes=B,i.version=_R++)}function f(h,p){let v=0,m=0,x=0,M=0,T=0,S=0;const y=p.matrixWorldInverse;for(let P=0,U=h.length;P<U;P++){const C=h[P];if(C.isSunLight){const R=i.sun[v];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),v++}else if(C.isDirectionalLight){const R=i.directional[m];R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),m++}else if(C.isSpotLight){const R=i.spot[M];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(C.isRectAreaLight){const R=i.rectArea[T];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),c.identity(),a.copy(C.matrixWorld),a.premultiply(y),c.extractRotation(a),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(C.isPointLight){const R=i.point[x];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),x++}else if(C.isHemisphereLight){const R=i.hemi[S];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),S++}}}return{setup:u,setupView:f,state:i}}function lx(n){const e=new SR(n),t=[],i=[],o=[];function a(m){v.camera=m,t.length=0,i.length=0,o.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function f(m){o.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function MR(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new lx(n),e.set(o,[u])):a>=c.length?(u=new lx(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const wR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ER=`uniform sampler2D shadow_pass;
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
}`,TR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],bR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],cx=new jt,Oa=new Y,fh=new Y;function AR(n,e,t){let i=new jp;const o=new ft,a=new ft,c=new tn,u=new DE,f=new NE,h={},p=t.maxTextureSize,v={[Fs]:ni,[ni]:Fs,[gr]:gr},m=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:wR,fragmentShader:ER}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new gn;M.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ti(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let y=this.type;this.render=function(L,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===n1&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=su);const N=n.getRenderTarget(),B=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Zi),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const te=y!==this.type;te&&F.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(ne=>ne.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,ne=L.length;V<ne;V++){const he=L[V],J=he.shadow;if(J===void 0){ot("WebGLShadowMap:",he,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const q=J.getFrameExtents();o.multiply(q),a.copy(J.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/q.x),o.x=a.x*q.x,J.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/q.y),o.y=a.y*q.y,J.mapSize.y=a.y));const K=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=K,J.map===null||te===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ba){if(he.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Yn(o.x,o.y,{format:ks,type:ii,minFilter:zn,magFilter:zn,generateMipmaps:!1}),J.map.texture.name=he.name+".shadowMap",J.map.depthTexture=new al(o.x,o.y,$i),J.map.depthTexture.name=he.name+".shadowMapDepth",J.map.depthTexture.format=Mr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Rn,J.map.depthTexture.magFilter=Rn}else he.isPointLight?(J.map=new gy(o.x),J.map.depthTexture=new TE(o.x,tr)):(J.map=new Yn(o.x,o.y),J.map.depthTexture=new al(o.x,o.y,tr)),J.map.depthTexture.name=he.name+".shadowMap",J.map.depthTexture.format=Mr,this.type===su?(J.map.depthTexture.compareFunction=K?Hp:Vp,J.map.depthTexture.minFilter=zn,J.map.depthTexture.magFilter=zn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Rn,J.map.depthTexture.magFilter=Rn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==o.x||J.map.height!==o.y)&&J.map.setSize(o.x,o.y);const Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();he.isPointLight!==!0&&J.updateMatrices(he,E);for(let I=0;I<Q;I++){const re=J.getCamera(I);if(he.isPointLight){const ye=J.camera,ze=J.matrix,Ue=he.distance||ye.far;Ue!==ye.far&&(ye.far=Ue,ye.updateProjectionMatrix()),Oa.setFromMatrixPosition(he.matrixWorld),ye.position.copy(Oa),fh.copy(ye.position),fh.add(TR[I]),ye.up.copy(bR[I]),ye.lookAt(fh),ye.updateMatrixWorld(),ze.makeTranslation(-Oa.x,-Oa.y,-Oa.z),cx.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),J._frustum.setFromProjectionMatrix(cx,ye.coordinateSystem,ye.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,I),n.clear();else{I===0&&(n.setRenderTarget(J.map),n.clear());const ye=J.getViewport(I);c.set(a.x*ye.x,a.y*ye.y,a.x*ye.z,a.y*ye.w),j.viewport(c)}i=J.getFrustum(I),C(F,E,re,he,this.type)}J.isPointLightShadow!==!0&&this.type===Ba&&P(J,E),J.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(N,B,H)};function P(L,F){const E=e.update(T);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null?L.mapPass=new Yn(o.x,o.y,{format:ks,type:ii}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value.set(L.map.width,L.map.height),m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,E,m,T,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value.set(L.map.width,L.map.height),x.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,E,x,T,null)}function U(L,F,E,N){let B=null;const H=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)B=H;else if(B=E.isPointLight===!0?f:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=B.uuid,te=F.uuid;let V=h[j];V===void 0&&(V={},h[j]=V);let ne=V[te];ne===void 0&&(ne=B.clone(),V[te]=ne,F.addEventListener("dispose",R)),B=ne}if(B.visible=F.visible,B.wireframe=F.wireframe,N===Ba?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:v[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const j=n.properties.get(B);j.light=E}return B}function C(L,F,E,N,B){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===Ba)&&(!L.frustumCulled||L.intersectsFrustum(i))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const te=e.update(L),V=L.material;if(Array.isArray(V)){const ne=te.groups;for(let he=0,J=ne.length;he<J;he++){const q=ne[he],K=V[q.materialIndex];if(K&&K.visible){const Q=U(L,K,N,B);L.onBeforeShadow(n,L,F,E,te,Q,q),n.renderBufferDirect(E,null,te,Q,L,q),L.onAfterShadow(n,L,F,E,te,Q,q)}}}else if(V.visible){const ne=U(L,V,N,B);L.onBeforeShadow(n,L,F,E,te,ne,null),n.renderBufferDirect(E,null,te,ne,L,null),L.onAfterShadow(n,L,F,E,te,ne,null)}}const j=L.children;for(let te=0,V=j.length;te<V;te++)C(j[te],F,E,N,B)}function R(L){L.target.removeEventListener("dispose",R);for(const E in h){const N=h[E],B=L.target.uuid;B in N&&(N[B].dispose(),delete N[B])}}}function CR(n,e){function t(){let G=!1;const Re=new tn;let me=null;const Pe=new tn(0,0,0,0);return{setMask:function(Be){me!==Be&&!G&&(n.colorMask(Be,Be,Be,Be),me=Be)},setLocked:function(Be){G=Be},setClear:function(Be,ve,tt,$e,Pt){Pt===!0&&(Be*=$e,ve*=$e,tt*=$e),Re.set(Be,ve,tt,$e),Pe.equals(Re)===!1&&(n.clearColor(Be,ve,tt,$e),Pe.copy(Re))},reset:function(){G=!1,me=null,Pe.set(-1,0,0,0)}}}function i(){let G=!1,Re=!1,me=null,Pe=null,Be=null;return{setReversed:function(ve){if(Re!==ve){const tt=e.get("EXT_clip_control");ve?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Re=ve;const $e=Be;Be=null,this.setClear($e)}},getReversed:function(){return Re},setTest:function(ve){ve?fe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ve){me!==ve&&!G&&(n.depthMask(ve),me=ve)},setFunc:function(ve){if(Re&&(ve=O1[ve]),Pe!==ve){switch(ve){case Th:n.depthFunc(n.NEVER);break;case bh:n.depthFunc(n.ALWAYS);break;case Ah:n.depthFunc(n.LESS);break;case nl:n.depthFunc(n.LEQUAL);break;case Ch:n.depthFunc(n.EQUAL);break;case Rh:n.depthFunc(n.GEQUAL);break;case Ph:n.depthFunc(n.GREATER);break;case Lh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ve}},setLocked:function(ve){G=ve},setClear:function(ve){Be!==ve&&(Be=ve,Re&&(ve=1-ve),n.clearDepth(ve))},reset:function(){G=!1,me=null,Pe=null,Be=null,Re=!1}}}function o(){let G=!1,Re=null,me=null,Pe=null,Be=null,ve=null,tt=null,$e=null,Pt=null;return{setTest:function(bt){G||(bt?fe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(bt){Re!==bt&&!G&&(n.stencilMask(bt),Re=bt)},setFunc:function(bt,bn,hi){(me!==bt||Pe!==bn||Be!==hi)&&(n.stencilFunc(bt,bn,hi),me=bt,Pe=bn,Be=hi)},setOp:function(bt,bn,hi){(ve!==bt||tt!==bn||$e!==hi)&&(n.stencilOp(bt,bn,hi),ve=bt,tt=bn,$e=hi)},setLocked:function(bt){G=bt},setClear:function(bt){Pt!==bt&&(n.clearStencil(bt),Pt=bt)},reset:function(){G=!1,Re=null,me=null,Pe=null,Be=null,ve=null,tt=null,$e=null,Pt=null}}}const a=new t,c=new i,u=new o,f=new WeakMap,h=new WeakMap;let p={},v={},m={},x=new WeakMap,M=[],T=null,S=!1,y=null,P=null,U=null,C=null,R=null,L=null,F=null,E=new mt(0,0,0),N=0,B=!1,H=null,j=null,te=null,V=null,ne=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=q>=2);let Q=null,I={};const re=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),ze=new tn().fromArray(re),Ue=new tn().fromArray(ye);function We(G,Re,me,Pe){const Be=new Uint8Array(4),ve=n.createTexture();n.bindTexture(G,ve),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<me;tt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Re+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return ve}const ae={};ae[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(n.DEPTH_TEST),c.setFunc(nl),gt(!1),Ft(sv),fe(n.CULL_FACE),yt(Zi);function fe(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function Te(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function qe(G,Re){return m[G]!==Re?(n.bindFramebuffer(G,Re),m[G]=Re,G===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Re),G===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function ke(G,Re){let me=M,Pe=!1;if(G){me=x.get(Re),me===void 0&&(me=[],x.set(Re,me));const Be=G.textures;if(me.length!==Be.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,tt=Be.length;ve<tt;ve++)me[ve]=n.COLOR_ATTACHMENT0+ve;me.length=Be.length,Pe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(me)}function ct(G){return T!==G?(n.useProgram(G),T=G,!0):!1}const Ut={[bo]:n.FUNC_ADD,[r1]:n.FUNC_SUBTRACT,[s1]:n.FUNC_REVERSE_SUBTRACT};Ut[o1]=n.MIN,Ut[a1]=n.MAX;const dt={[l1]:n.ZERO,[c1]:n.ONE,[u1]:n.SRC_COLOR,[k_]:n.SRC_ALPHA,[g1]:n.SRC_ALPHA_SATURATE,[p1]:n.DST_COLOR,[d1]:n.DST_ALPHA,[f1]:n.ONE_MINUS_SRC_COLOR,[B_]:n.ONE_MINUS_SRC_ALPHA,[m1]:n.ONE_MINUS_DST_COLOR,[h1]:n.ONE_MINUS_DST_ALPHA,[v1]:n.CONSTANT_COLOR,[x1]:n.ONE_MINUS_CONSTANT_COLOR,[_1]:n.CONSTANT_ALPHA,[y1]:n.ONE_MINUS_CONSTANT_ALPHA};function yt(G,Re,me,Pe,Be,ve,tt,$e,Pt,bt){if(G===Zi){S===!0&&(Te(n.BLEND),S=!1);return}if(S===!1&&(fe(n.BLEND),S=!0),G!==i1){if(G!==y||bt!==B){if((P!==bo||R!==bo)&&(n.blendEquation(n.FUNC_ADD),P=bo,R=bo),bt)switch(G){case ja:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFunc(n.ONE,n.ONE);break;case ov:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case av:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",G);break}else switch(G){case ja:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ov:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",G);break}U=null,C=null,L=null,F=null,E.set(0,0,0),N=0,y=G,B=bt}return}Be=Be||Re,ve=ve||me,tt=tt||Pe,(Re!==P||Be!==R)&&(n.blendEquationSeparate(Ut[Re],Ut[Be]),P=Re,R=Be),(me!==U||Pe!==C||ve!==L||tt!==F)&&(n.blendFuncSeparate(dt[me],dt[Pe],dt[ve],dt[tt]),U=me,C=Pe,L=ve,F=tt),($e.equals(E)===!1||Pt!==N)&&(n.blendColor($e.r,$e.g,$e.b,Pt),E.copy($e),N=Pt),y=G,B=!1}function At(G,Re){G.side===gr?Te(n.CULL_FACE):fe(n.CULL_FACE);let me=G.side===ni;Re&&(me=!me),gt(me),G.blending===ja&&G.transparent===!1?yt(Zi):yt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Pe=G.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),qt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(G){H!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),H=G)}function Ft(G){G!==e1?(fe(n.CULL_FACE),G!==j&&(G===sv?n.cullFace(n.BACK):G===t1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),j=G}function Yt(G){G!==te&&(J&&n.lineWidth(G),te=G)}function qt(G,Re,me){G?(fe(n.POLYGON_OFFSET_FILL),(V!==Re||ne!==me)&&(V=Re,ne=me,c.getReversed()&&(Re=-Re),n.polygonOffset(Re,me))):Te(n.POLYGON_OFFSET_FILL)}function Ct(G){G?fe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function zt(G){G===void 0&&(G=n.TEXTURE0+he-1),Q!==G&&(n.activeTexture(G),Q=G)}function X(G,Re,me){me===void 0&&(Q===null?me=n.TEXTURE0+he-1:me=Q);let Pe=I[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},I[me]=Pe),(Pe.type!==G||Pe.texture!==Re)&&(Q!==me&&(n.activeTexture(me),Q=me),n.bindTexture(G,Re||ae[G]),Pe.type=G,Pe.texture=Re)}function rn(){const G=I[Q];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{n.compressedTexImage2D(...arguments)}catch(G){Nt("WebGLState:",G)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(G){Nt("WebGLState:",G)}}function w(){try{n.texSubImage2D(...arguments)}catch(G){Nt("WebGLState:",G)}}function Z(){try{n.texSubImage3D(...arguments)}catch(G){Nt("WebGLState:",G)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Nt("WebGLState:",G)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Nt("WebGLState:",G)}}function we(){try{n.texStorage2D(...arguments)}catch(G){Nt("WebGLState:",G)}}function Ae(){try{n.texStorage3D(...arguments)}catch(G){Nt("WebGLState:",G)}}function pe(){try{n.texImage2D(...arguments)}catch(G){Nt("WebGLState:",G)}}function ge(){try{n.texImage3D(...arguments)}catch(G){Nt("WebGLState:",G)}}function Le(G){return v[G]!==void 0?v[G]:n.getParameter(G)}function Ze(G,Re){v[G]!==Re&&(n.pixelStorei(G,Re),v[G]=Re)}function De(G){ze.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ze.copy(G))}function Ce(G){Ue.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ue.copy(G))}function Qe(G,Re){let me=h.get(Re);me===void 0&&(me=new WeakMap,h.set(Re,me));let Pe=me.get(G);Pe===void 0&&(Pe=n.getUniformBlockIndex(Re,G.name),me.set(G,Pe))}function it(G,Re){const Pe=h.get(Re).get(G);f.get(Re)!==Pe&&(n.uniformBlockBinding(Re,Pe,G.__bindingPointIndex),f.set(Re,Pe))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},v={},Q=null,I={},m={},x=new WeakMap,M=[],T=null,S=!1,y=null,P=null,U=null,C=null,R=null,L=null,F=null,E=new mt(0,0,0),N=0,B=!1,H=null,j=null,te=null,V=null,ne=null,ze.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:fe,disable:Te,bindFramebuffer:qe,drawBuffers:ke,useProgram:ct,setBlending:yt,setMaterial:At,setFlipSided:gt,setCullFace:Ft,setLineWidth:Yt,setPolygonOffset:qt,setScissorTest:Ct,activeTexture:zt,bindTexture:X,unbindTexture:rn,compressedTexImage2D:_e,compressedTexImage3D:D,texImage2D:pe,texImage3D:ge,pixelStorei:Ze,getParameter:Le,updateUBOMapping:Qe,uniformBlockBinding:it,texStorage2D:we,texStorage3D:Ae,texSubImage2D:w,texSubImage3D:Z,compressedTexSubImage2D:ee,compressedTexSubImage3D:de,scissor:De,viewport:Ce,reset:lt}}function RR(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,p=new WeakMap,v=new Set;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,w){return M?new OffscreenCanvas(D,w):_u("canvas")}function S(D,w,Z){let ee=1;const de=_e(D);if((de.width>Z||de.height>Z)&&(ee=Z/Math.max(de.width,de.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const we=Math.floor(ee*de.width),Ae=Math.floor(ee*de.height);m===void 0&&(m=T(we,Ae));const pe=w?T(we,Ae):m;return pe.width=we,pe.height=Ae,pe.getContext("2d").drawImage(D,0,0,we,Ae),ot("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+Ae+")."),pe}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),D;return D}function y(D){return D.generateMipmaps}function P(D){n.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(D,w,Z,ee,de,we=!1){if(D!==null){if(n[D]!==void 0)return n[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ae;ee&&(Ae=e.get("EXT_texture_norm16"),Ae||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(Z===n.FLOAT&&(pe=n.R32F),Z===n.HALF_FLOAT&&(pe=n.R16F),Z===n.UNSIGNED_BYTE&&(pe=n.R8),Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.R8UI),Z===n.UNSIGNED_SHORT&&(pe=n.R16UI),Z===n.UNSIGNED_INT&&(pe=n.R32UI),Z===n.BYTE&&(pe=n.R8I),Z===n.SHORT&&(pe=n.R16I),Z===n.INT&&(pe=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(pe=n.RG32F),Z===n.HALF_FLOAT&&(pe=n.RG16F),Z===n.UNSIGNED_BYTE&&(pe=n.RG8),Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RG16UI),Z===n.UNSIGNED_INT&&(pe=n.RG32UI),Z===n.BYTE&&(pe=n.RG8I),Z===n.SHORT&&(pe=n.RG16I),Z===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),Z===n.UNSIGNED_INT&&(pe=n.RGB32UI),Z===n.BYTE&&(pe=n.RGB8I),Z===n.SHORT&&(pe=n.RGB16I),Z===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(pe=n.RGBA32UI),Z===n.BYTE&&(pe=n.RGBA8I),Z===n.SHORT&&(pe=n.RGBA16I),Z===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const ge=we?xu:Tt.getTransfer(de);Z===n.FLOAT&&(pe=n.RGBA32F),Z===n.HALF_FLOAT&&(pe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(pe=ge===kt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(D,w){let Z;return D?w===null||w===tr||w===rl?Z=n.DEPTH24_STENCIL8:w===$i?Z=n.DEPTH32F_STENCIL8:w===il&&(Z=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===tr||w===rl?Z=n.DEPTH_COMPONENT24:w===$i?Z=n.DEPTH_COMPONENT32F:w===il&&(Z=n.DEPTH_COMPONENT16),Z}function L(D,w){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),N(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&v.delete(w)}function E(D){const w=D.target;w.removeEventListener("dispose",E),H(w)}function N(D){const w=i.get(D);if(w.__webglInit===void 0)return;const Z=D.source,ee=x.get(Z);if(ee){const de=ee[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&B(D),Object.keys(ee).length===0&&x.delete(Z)}i.remove(D)}function B(D){const w=i.get(D);n.deleteTexture(w.__webglTexture);const Z=D.source,ee=x.get(Z);delete ee[w.__cacheKey],c.memory.textures--}function H(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let de=0;de<w.__webglFramebuffer[ee].length;de++)n.deleteFramebuffer(w.__webglFramebuffer[ee][de]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let ee=0,de=Z.length;ee<de;ee++){const we=i.get(Z[ee]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),c.memory.textures--),i.remove(Z[ee])}i.remove(D)}let j=0;function te(){j=0}function V(){return j}function ne(D){j=D}function he(){const D=j;return D>=o.maxTextures&&ot("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+o.maxTextures),j+=1,D}function J(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function q(D,w){const Z=i.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const ee=D.image;if(ee===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Z,D,w);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function K(D,w){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){Te(Z,D,w);return}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function Q(D,w){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){Te(Z,D,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function I(D,w){const Z=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Z.__version!==D.version){qe(Z,D,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const re={[Dh]:n.REPEAT,[vr]:n.CLAMP_TO_EDGE,[Nh]:n.MIRRORED_REPEAT},ye={[Rn]:n.NEAREST,[w1]:n.NEAREST_MIPMAP_NEAREST,[Ac]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Nd]:n.LINEAR_MIPMAP_NEAREST,[Ls]:n.LINEAR_MIPMAP_LINEAR},ze={[A1]:n.NEVER,[D1]:n.ALWAYS,[C1]:n.LESS,[Vp]:n.LEQUAL,[R1]:n.EQUAL,[Hp]:n.GEQUAL,[P1]:n.GREATER,[L1]:n.NOTEQUAL};function Ue(D,w){if(w.type===$i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===Nd||w.magFilter===Ac||w.magFilter===Ls||w.minFilter===zn||w.minFilter===Nd||w.minFilter===Ac||w.minFilter===Ls)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,re[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,re[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,re[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ye[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ye[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ze[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==Ac&&w.minFilter!==Ls||w.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function We(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const ee=w.source;let de=x.get(ee);de===void 0&&(de={},x.set(ee,de));const we=J(w);if(we!==D.__cacheKey){de[we]===void 0&&(de[we]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),de[we].usedTimes++;const Ae=de[D.__cacheKey];Ae!==void 0&&(de[D.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(w)),D.__cacheKey=we,D.__webglTexture=de[we].texture}return Z}function ae(D,w,Z){return Math.floor(Math.floor(D/Z)/w)}function fe(D,w,Z,ee){const we=D.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Z,ee,w.data);else{we.sort((Ze,De)=>Ze.start-De.start);let Ae=0;for(let Ze=1;Ze<we.length;Ze++){const De=we[Ae],Ce=we[Ze],Qe=De.start+De.count,it=ae(Ce.start,w.width,4),lt=ae(De.start,w.width,4);Ce.start<=Qe+1&&it===lt&&ae(Ce.start+Ce.count-1,w.width,4)===it?De.count=Math.max(De.count,Ce.start+Ce.count-De.start):(++Ae,we[Ae]=Ce)}we.length=Ae+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Ze=0,De=we.length;Ze<De;Ze++){const Ce=we[Ze],Qe=Math.floor(Ce.start/4),it=Math.ceil(Ce.count/4),lt=Qe%w.width,G=Math.floor(Qe/w.width),Re=it,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,lt,G,Re,me,Z,ee,w.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function Te(D,w,Z){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);const de=We(D,w),we=w.source;t.bindTexture(ee,D.__webglTexture,n.TEXTURE0+Z);const Ae=i.get(we);if(we.version!==Ae.__version||de===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const me=Tt.getPrimaries(Tt.workingColorSpace),Pe=w.colorSpace===Jr?null:Tt.getPrimaries(w.colorSpace),Be=w.colorSpace===Jr||me===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=S(w.image,!1,o.maxTextureSize);ge=rn(w,ge);const Le=a.convert(w.format,w.colorSpace),Ze=a.convert(w.type);let De=C(w.internalFormat,Le,Ze,w.normalized,w.colorSpace,w.isVideoTexture);Ue(ee,w);let Ce;const Qe=w.mipmaps,it=w.isVideoTexture!==!0,lt=Ae.__version===void 0||de===!0,G=we.dataReady,Re=L(w,ge);if(w.isDepthTexture)De=R(w.format===Ds,w.type),lt&&(it?t.texStorage2D(n.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Le,Ze,null));else if(w.isDataTexture)if(Qe.length>0){it&&lt&&t.texStorage2D(n.TEXTURE_2D,Re,De,Qe[0].width,Qe[0].height);for(let me=0,Pe=Qe.length;me<Pe;me++)Ce=Qe[me],it?G&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Le,Ze,Ce.data):t.texImage2D(n.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Le,Ze,Ce.data);w.generateMipmaps=!1}else it?(lt&&t.texStorage2D(n.TEXTURE_2D,Re,De,ge.width,ge.height),G&&fe(w,ge,Le,Ze)):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Le,Ze,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,De,Qe[0].width,Qe[0].height,ge.depth);for(let me=0,Pe=Qe.length;me<Pe;me++)if(Ce=Qe[me],w.format!==Vi)if(Le!==null)if(it){if(G)if(w.layerUpdates.size>0){const Be=Vv(Ce.width,Ce.height,w.format,w.type);for(const ve of w.layerUpdates){const tt=Ce.data.subarray(ve*Be/Ce.data.BYTES_PER_ELEMENT,(ve+1)*Be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,ve,Ce.width,Ce.height,1,Le,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,ge.depth,Le,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,ge.depth,Le,Ze,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,ge.depth,0,Le,Ze,Ce.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{it&&lt&&t.texStorage2D(n.TEXTURE_2D,Re,De,Qe[0].width,Qe[0].height);for(let me=0,Pe=Qe.length;me<Pe;me++)Ce=Qe[me],w.format!==Vi?Le!==null?it?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Le,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Ce.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Le,Ze,Ce.data):t.texImage2D(n.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Le,Ze,Ce.data)}else if(w.isDataArrayTexture)if(it){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,De,ge.width,ge.height,ge.depth),G)if(w.layerUpdates.size>0){const me=Vv(ge.width,ge.height,w.format,w.type);for(const Pe of w.layerUpdates){const Be=ge.data.subarray(Pe*me/ge.data.BYTES_PER_ELEMENT,(Pe+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,Le,Ze,Be)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ze,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Le,Ze,ge.data);else if(w.isData3DTexture)it?(lt&&t.texStorage3D(n.TEXTURE_3D,Re,De,ge.width,ge.height,ge.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ze,ge.data)):t.texImage3D(n.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Le,Ze,ge.data);else if(w.isFramebufferTexture){if(lt)if(it)t.texStorage2D(n.TEXTURE_2D,Re,De,ge.width,ge.height);else{let me=ge.width,Pe=ge.height;for(let Be=0;Be<Re;Be++)t.texImage2D(n.TEXTURE_2D,Be,De,me,Pe,0,Le,Ze,null),me>>=1,Pe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(w),me.onpaint=Pe=>{const Be=Pe.changedElements;for(const ve of v)Be.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Be=n.RGBA,ve=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,ve,tt,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(it&&lt){const me=_e(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Re,De,me.width,me.height)}for(let me=0,Pe=Qe.length;me<Pe;me++)Ce=Qe[me],it?G&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Le,Ze,Ce):t.texImage2D(n.TEXTURE_2D,me,De,Le,Ze,Ce);w.generateMipmaps=!1}else if(it){if(lt){const me=_e(ge);t.texStorage2D(n.TEXTURE_2D,Re,De,me.width,me.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Ze,ge)}else t.texImage2D(n.TEXTURE_2D,0,De,Le,Ze,ge);y(w)&&P(ee),Ae.__version=we.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function qe(D,w,Z){if(w.image.length!==6)return;const ee=We(D,w),de=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Z);const we=i.get(de);if(de.version!==we.__version||ee===!0){t.activeTexture(n.TEXTURE0+Z);const Ae=Tt.getPrimaries(Tt.workingColorSpace),pe=w.colorSpace===Jr?null:Tt.getPrimaries(w.colorSpace),ge=w.colorSpace===Jr||Ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Ze=w.image[0]&&w.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!Le&&!Ze?De[ve]=S(w.image[ve],!0,o.maxCubemapSize):De[ve]=Ze?w.image[ve].image:w.image[ve],De[ve]=rn(w,De[ve]);const Ce=De[0],Qe=a.convert(w.format,w.colorSpace),it=a.convert(w.type),lt=C(w.internalFormat,Qe,it,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,Re=we.__version===void 0||ee===!0,me=de.dataReady;let Pe=L(w,Ce);Ue(n.TEXTURE_CUBE_MAP,w);let Be;if(Le){G&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,lt,Ce.width,Ce.height);for(let ve=0;ve<6;ve++){Be=De[ve].mipmaps;for(let tt=0;tt<Be.length;tt++){const $e=Be[tt];w.format!==Vi?Qe!==null?G?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,0,0,$e.width,$e.height,Qe,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,lt,$e.width,$e.height,0,$e.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,0,0,$e.width,$e.height,Qe,it,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,lt,$e.width,$e.height,0,Qe,it,$e.data)}}}else{if(Be=w.mipmaps,G&&Re){Be.length>0&&Pe++;const ve=_e(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,lt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ze){G?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,Qe,it,De[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,De[ve].width,De[ve].height,0,Qe,it,De[ve].data);for(let tt=0;tt<Be.length;tt++){const Pt=Be[tt].image[ve].image;G?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,0,0,Pt.width,Pt.height,Qe,it,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,lt,Pt.width,Pt.height,0,Qe,it,Pt.data)}}else{G?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Qe,it,De[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Qe,it,De[ve]);for(let tt=0;tt<Be.length;tt++){const $e=Be[tt];G?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,0,0,Qe,it,$e.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,lt,Qe,it,$e.image[ve])}}}y(w)&&P(n.TEXTURE_CUBE_MAP),we.__version=de.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ke(D,w,Z,ee,de,we){const Ae=a.convert(Z.format,Z.colorSpace),pe=a.convert(Z.type),ge=C(Z.internalFormat,Ae,pe,Z.normalized,Z.colorSpace),Le=i.get(w),Ze=i.get(Z);if(Ze.__renderTarget=w,!Le.__hasExternalTextures){const De=Math.max(1,w.width>>we),Ce=Math.max(1,w.height>>we);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,we,ge,De,Ce,w.depth,0,Ae,pe,null):t.texImage2D(de,we,ge,De,Ce,0,Ae,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),zt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,de,Ze.__webglTexture,0,Ct(w)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,de,Ze.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(D,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const ee=w.depthTexture,de=ee&&ee.isDepthTexture?ee.type:null,we=R(w.stencilBuffer,de),Ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;zt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(w),we,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(w),we,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,we,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,D)}else{const ee=w.textures;for(let de=0;de<ee.length;de++){const we=ee[de],Ae=a.convert(we.format,we.colorSpace),pe=a.convert(we.type),ge=C(we.internalFormat,Ae,pe,we.normalized,we.colorSpace);zt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(w),ge,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(w),ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(D,w,Z){const ee=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=i.get(w.depthTexture);if(de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee){if(de.__webglInit===void 0&&(de.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),de.__webglTexture===void 0){de.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,w.depthTexture);const Le=a.convert(w.depthTexture.format),Ze=a.convert(w.depthTexture.type);let De;w.depthTexture.format===Mr?De=n.DEPTH_COMPONENT24:w.depthTexture.format===Ds&&(De=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,De,w.width,w.height,0,Le,Ze,null)}}else q(w.depthTexture,0);const we=de.__webglTexture,Ae=Ct(w),pe=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,ge=w.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Mr)zt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,we,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,we,0);else if(w.depthTexture.format===Ds)zt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,we,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(D){const w=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",de)};ee.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=ee}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let ee=0;ee<6;ee++)Ut(w.__webglFramebuffer[ee],D,ee);else{const ee=D.texture.mipmaps;ee&&ee.length>0?Ut(w.__webglFramebuffer[0],D,0):Ut(w.__webglFramebuffer,D,0)}else if(Z){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),ct(w.__webglDepthbuffer[ee],D,!1);else{const de=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,we)}}else{const ee=D.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ct(w.__webglDepthbuffer,D,!1);else{const de=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(D,w,Z){const ee=i.get(D);w!==void 0&&ke(ee.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&dt(D)}function At(D){const w=D.texture,Z=i.get(D),ee=i.get(w);D.addEventListener("dispose",E);const de=D.textures,we=D.isWebGLCubeRenderTarget===!0,Ae=de.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,c.memory.textures++),we){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)Z.__webglFramebuffer[pe][ge]=n.createFramebuffer()}else Z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let pe=0,ge=de.length;pe<ge;pe++){const Le=i.get(de[pe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),c.memory.textures++)}if(D.samples>0&&zt(D)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const ge=de[pe];Z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const Le=a.convert(ge.format,ge.colorSpace),Ze=a.convert(ge.type),De=C(ge.internalFormat,Le,Ze,ge.normalized,ge.colorSpace,D.isXRRenderTarget===!0),Ce=Ct(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,De,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(Z.__webglFramebuffer[pe][ge],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ke(Z.__webglFramebuffer[pe],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(w)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ge=de.length;pe<ge;pe++){const Le=de[pe],Ze=i.get(Le);let De=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ze.__webglTexture),Ue(De,Le),ke(Z.__webglFramebuffer,D,Le,n.COLOR_ATTACHMENT0+pe,De,0),y(Le)&&P(De)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),Ue(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(Z.__webglFramebuffer[ge],D,w,n.COLOR_ATTACHMENT0,pe,ge);else ke(Z.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,pe,0);y(w)&&P(pe),t.unbindTexture()}D.depthBuffer&&dt(D)}function gt(D){const w=D.textures;for(let Z=0,ee=w.length;Z<ee;Z++){const de=w[Z];if(y(de)){const we=U(D),Ae=i.get(de).__webglTexture;t.bindTexture(we,Ae),P(we),t.unbindTexture()}}}const Ft=[],Yt=[];function qt(D){if(D.samples>0){if(zt(D)===!1){const w=D.textures,Z=D.width,ee=D.height;let de=n.COLOR_BUFFER_BIT;const we=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(D),pe=w.length>1;if(pe)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ge=D.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Le]);const Ze=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,de,n.NEAREST),f===!0&&(Ft.length=0,Yt.length=0,Ft.push(n.COLOR_ATTACHMENT0+Le),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Ft.push(we),Yt.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Le]);const Ze=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&f){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ct(D){return Math.min(o.maxSamples,D.samples)}function zt(D){const w=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(D){const w=c.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function rn(D,w){const Z=D.colorSpace,ee=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==vu&&Z!==Jr&&(Tt.getTransfer(Z)===kt?(ee!==Vi||de!==ui)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",Z)),w}function _e(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=he,this.resetTextureUnits=te,this.getTextureUnits=V,this.setTextureUnits=ne,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=I,this.rebindTextures=yt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function PR(n,e){function t(i,o=Jr){let a;const c=Tt.getTransfer(o);if(i===ui)return n.UNSIGNED_BYTE;if(i===Fp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Op)return n.UNSIGNED_SHORT_5_5_5_1;if(i===K_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Z_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===q_)return n.BYTE;if(i===$_)return n.SHORT;if(i===il)return n.UNSIGNED_SHORT;if(i===Up)return n.INT;if(i===tr)return n.UNSIGNED_INT;if(i===$i)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===Q_)return n.ALPHA;if(i===J_)return n.RGB;if(i===Vi)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===ey)return n.RED;if(i===kp)return n.RED_INTEGER;if(i===ks)return n.RG;if(i===Bp)return n.RG_INTEGER;if(i===zp)return n.RGBA_INTEGER;if(i===ou||i===au||i===lu||i===cu)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ou)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ou)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===au)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ih||i===Uh||i===Fh||i===Oh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ih)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===mu||i===Gh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===kh||i===Bh)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vh)return a.COMPRESSED_R11_EAC;if(i===Hh)return a.COMPRESSED_SIGNED_R11_EAC;if(i===mu)return a.COMPRESSED_RG11_EAC;if(i===Gh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wh||i===Xh||i===jh||i===Yh||i===qh||i===$h||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Wh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$h)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ep)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tp)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===np)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ip)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rp||i===sp||i===op)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===rp)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===op)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ap||i===lp||i===gu||i===cp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ap)return a.COMPRESSED_RED_RGTC1_EXT;if(i===lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const LR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DR=`
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

}`;class NR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new uy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pn({vertexShader:LR,fragmentShader:DR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new Fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IR extends Bs{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,v=null,m=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",S=new NR,y={},P=t.getContextAttributes();let U=null,C=null;const R=[],L=[],F=new ft;let E=null,N=null;const B=new Ei;B.viewport=new tn;const H=new Ei;H.viewport=new tn;const j=[B,H],te=new BE;let V=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=R[ae];return fe===void 0&&(fe=new zd,R[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=R[ae];return fe===void 0&&(fe=new zd,R[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=R[ae];return fe===void 0&&(fe=new zd,R[ae]=fe),fe.getHandSpace()};function he(ae){const fe=L.indexOf(ae.inputSource);if(fe===-1)return;const Te=R[fe];Te!==void 0&&(Te.update(ae.inputSource,ae.frame,h||c),Te.dispatchEvent({type:ae.type,data:ae.inputSource}))}function J(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",q);for(let ae=0;ae<R.length;ae++){const fe=L[ae];fe!==null&&(L[ae]=null,R[ae].disconnect(fe))}V=null,ne=null,S.reset();for(const ae in y)delete y[ae];if(e.setRenderTarget(U),x=null,m=null,v=null,o=null,C=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),N!==null){const ae=N.camera;ae.fov=N.fov,ae.zoom=N.zoom,ae.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){u=ae,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",J),o.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,qe=null,ke=null;P.depth&&(ke=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=P.stencil?Ds:Mr,qe=P.stencil?rl:tr);const ct={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(ct),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Yn(m.textureWidth,m.textureHeight,{format:Vi,type:ui,depthTexture:new al(m.textureWidth,m.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Te={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,Te),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Yn(x.framebufferWidth,x.framebufferHeight,{format:Vi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),We.setContext(o),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(ae){for(let fe=0;fe<ae.removed.length;fe++){const Te=ae.removed[fe],qe=L.indexOf(Te);qe>=0&&(L[qe]=null,R[qe].disconnect(Te))}for(let fe=0;fe<ae.added.length;fe++){const Te=ae.added[fe];let qe=L.indexOf(Te);if(qe===-1){for(let ct=0;ct<R.length;ct++)if(ct>=L.length){L.push(Te),qe=ct;break}else if(L[ct]===null){L[ct]=Te,qe=ct;break}if(qe===-1)break}const ke=R[qe];ke&&ke.connect(Te)}}const K=new Y,Q=new Y;function I(ae,fe,Te){K.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(Te.matrixWorld);const qe=K.distanceTo(Q),ke=fe.projectionMatrix.elements,ct=Te.projectionMatrix.elements,Ut=ke[14]/(ke[10]-1),dt=ke[14]/(ke[10]+1),yt=(ke[9]+1)/ke[5],At=(ke[9]-1)/ke[5],gt=(ke[8]-1)/ke[0],Ft=(ct[8]+1)/ct[0],Yt=Ut*gt,qt=Ut*Ft,Ct=qe/(-gt+Ft),zt=Ct*-gt;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(zt),ae.translateZ(Ct),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ke[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const X=Ut+Ct,rn=dt+Ct,_e=Yt-zt,D=qt+(qe-zt),w=yt*dt/rn*X,Z=At*dt/rn*X;ae.projectionMatrix.makePerspective(_e,D,w,Z,X,rn),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function re(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let fe=ae.near,Te=ae.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Te=S.depthFar)),te.near=H.near=B.near=fe,te.far=H.far=B.far=Te,(V!==te.near||ne!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),V=te.near,ne=te.far),te.layers.mask=ae.layers.mask|6,B.layers.mask=te.layers.mask&-5,H.layers.mask=te.layers.mask&-3;const qe=ae.parent,ke=te.cameras;re(te,qe);for(let ct=0;ct<ke.length;ct++)re(ke[ct],qe);ke.length===2?I(te,B,H):te.projectionMatrix.copy(B.projectionMatrix),N===null&&ae.isPerspectiveCamera&&(N={camera:ae,fov:ae.fov,zoom:ae.zoom}),ye(ae,te,qe)};function ye(ae,fe,Te){Te===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(Te.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ol*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(m===null&&x===null))return f},this.setFoveation=function(ae){f=ae,m!==null&&(m.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(te)},this.getCameraTexture=function(ae){return y[ae]};let ze=null;function Ue(ae,fe){if(p=fe.getViewerPose(h||c),M=fe,p!==null){const Te=p.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let qe=!1;Te.length!==te.cameras.length&&(te.cameras.length=0,qe=!0);for(let dt=0;dt<Te.length;dt++){const yt=Te[dt];let At=null;if(x!==null)At=x.getViewport(yt);else{const Ft=v.getViewSubImage(m,yt);At=Ft.viewport,dt===0&&(e.setRenderTargetTextures(C,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(C))}let gt=j[dt];gt===void 0&&(gt=new Ei,gt.layers.enable(dt),gt.viewport=new tn,j[dt]=gt),gt.matrix.fromArray(yt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(yt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(At.x,At.y,At.width,At.height),dt===0&&(te.matrix.copy(gt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),qe===!0&&te.cameras.push(gt)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=i.getBinding();const dt=v.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(ke&&ke.includes("camera-access")&&T){e.state.unbindTexture(),v=i.getBinding();for(let dt=0;dt<Te.length;dt++){const yt=Te[dt].camera;if(yt){let At=y[yt];At||(At=new uy,y[yt]=At);const gt=v.getCameraImage(yt);At.sourceTexture=gt}}}}for(let Te=0;Te<R.length;Te++){const qe=L[Te],ke=R[Te];qe!==null&&ke!==void 0&&ke.update(qe,fe,h||c)}ze&&ze(ae,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const We=new py;We.setAnimationLoop(Ue),this.setAnimationLoop=function(ae){ze=ae},this.dispose=function(){}}}const UR=new jt,Sy=new pt;Sy.set(-1,0,0,0,1,0,0,0,1);function FR(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,fy(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,P,U,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?a(S,y):y.isMeshLambertMaterial?(a(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(S,y),v(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(S,y),m(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),T(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?f(S,y,P,U):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ni&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ni&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=e.get(y),U=P.envMap,C=P.envMapRotation;U&&(S.envMap.value=U,S.envMapRotation.value.setFromMatrix4(UR.makeRotationFromEuler(C)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Sy),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,P,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=U*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function m(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ni&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const P=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function OR(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(C,R){const L=R.program;i.uniformBlockBinding(C,L)}function h(C,R){let L=o[C.id];L===void 0&&(S(C),L=p(C),o[C.id]=L,C.addEventListener("dispose",P));const F=R.program;i.updateUBOMapping(C,F);const E=e.render.frame;a[C.id]!==E&&(m(C),a[C.id]=E)}function p(C){const R=v();C.__bindingPointIndex=R;const L=n.createBuffer(),F=C.__size,E=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,F,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,L),L}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const R=o[C.id],L=C.uniforms,F=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let E=0,N=L.length;E<N;E++){const B=L[E];if(Array.isArray(B))for(let H=0,j=B.length;H<j;H++)x(B[H],E,H,F);else x(B,E,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(C,R,L,F){if(T(C,R,L,F)===!0){const E=C.__offset,N=C.value;if(Array.isArray(N)){let B=0;for(let H=0;H<N.length;H++){const j=N[H],te=y(j);M(j,C.__data,B),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,C.__data)}}function M(C,R,L){typeof C=="number"||typeof C=="boolean"?R[0]=C:C.isMatrix3?(R[0]=C.elements[0],R[1]=C.elements[1],R[2]=C.elements[2],R[3]=0,R[4]=C.elements[3],R[5]=C.elements[4],R[6]=C.elements[5],R[7]=0,R[8]=C.elements[6],R[9]=C.elements[7],R[10]=C.elements[8],R[11]=0):ArrayBuffer.isView(C)?R.set(new C.constructor(C.buffer,C.byteOffset,R.length)):C.toArray(R,L)}function T(C,R,L,F){const E=C.value,N=R+"_"+L;if(F[N]===void 0)return typeof E=="number"||typeof E=="boolean"?F[N]=E:ArrayBuffer.isView(E)?F[N]=E.slice():F[N]=E.clone(),!0;{const B=F[N];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return F[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(C){const R=C.uniforms;let L=0;const F=16;for(let N=0,B=R.length;N<B;N++){const H=Array.isArray(R[N])?R[N]:[R[N]];for(let j=0,te=H.length;j<te;j++){const V=H[j],ne=Array.isArray(V.value)?V.value:[V.value];for(let he=0,J=ne.length;he<J;he++){const q=ne[he],K=y(q),Q=L%F,I=Q%K.boundary,re=Q+I;L+=I,re!==0&&F-re<K.storage&&(L+=F-re),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=L,L+=K.storage}}}const E=L%F;return E>0&&(L+=F-E),C.__size=L,C.__cache={},this}function y(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(R.boundary=16,R.storage=C.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",C),R}function P(C){const R=C.target;R.removeEventListener("dispose",P);const L=c.indexOf(R.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(o[R.id]),delete o[R.id],delete a[R.id]}function U(){for(const C in o)n.deleteBuffer(o[C]);c=[],o={},a={}}return{bind:f,update:h,dispose:U}}const kR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function BR(){return Yi===null&&(Yi=new SE(kR,16,16,ks,ii),Yi.name="DFG_LUT",Yi.minFilter=zn,Yi.magFilter=zn,Yi.wrapS=vr,Yi.wrapT=vr,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class zR{constructor(e={}){const{canvas:t=U1(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:x=ui}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const T=x,S=new Set([zp,Bp,kp]),y=new Set([ui,tr,il,rl,Fp,Op]),P=new Uint32Array(4),U=new Int32Array(4),C=new Y;let R=null,L=null;const F=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let H=!1,j=null,te=null,V=null,ne=null;this._outputColorSpace=ei;let he=0,J=0,q=null,K=-1,Q=null;const I=new tn,re=new tn;let ye=null;const ze=new mt(0);let Ue=0,We=t.width,ae=t.height,fe=1,Te=null,qe=null;const ke=new tn(0,0,We,ae),ct=new tn(0,0,We,ae);let Ut=!1;const dt=new jp;let yt=!1,At=!1;const gt=new jt,Ft=new Y,Yt=new tn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function zt(){return q===null?fe:1}let X=i;function rn(A,W){return t.getContext(A,W)}let _e,D,w,Z,ee,de,we,Ae,pe,ge,Le,Ze,De,Ce,Qe,it,lt,G,Re,me,Pe,Be,ve;try{const A={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Np}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",bn,!1),X===null){const W="webgl2";if(X=rn(W,A),X===null)throw rn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(A){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),Nt("WebGLRenderer: "+A.message),A}function tt(){_e=new BA(X),_e.init(),Pe=new PR(X,_e),D=new RA(X,_e,e,Pe),w=new CR(X,_e),D.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),te=X.createFramebuffer(),V=X.createFramebuffer(),ne=X.createFramebuffer(),Z=new HA(X),ee=new pR,de=new RR(X,_e,w,ee,D,Pe,Z),we=new kA(B),Ae=new WE(X),Be=new AA(X,Ae),pe=new zA(X,Ae,Z,Be),ge=new WA(X,pe,Ae,Be,Z),G=new GA(X,D,de),Qe=new PA(ee),Le=new hR(B,we,_e,D,Be,Qe),Ze=new FR(B,ee),De=new gR,Ce=new MR(_e),lt=new bA(B,we,w,ge,M,f),it=new AR(B,ge,D),ve=new OR(X,Z,D,w),Re=new CA(X,_e,Z),me=new VA(X,_e,Z),Z.programs=Le.programs,B.capabilities=D,B.extensions=_e,B.properties=ee,B.renderLists=De,B.shadowMap=it,B.state=w,B.info=Z}T!==ui&&(N=new jA(T,t.width,t.height,u,o,a));const $e=new IR(B,X);this.xr=$e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(We,ae,!1))},this.getSize=function(A){return A.set(We,ae)},this.setSize=function(A,W,ce=!0){if($e.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}We=A,ae=W,t.width=Math.floor(A*fe),t.height=Math.floor(W*fe),ce===!0&&(t.style.width=A+"px",t.style.height=W+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(We*fe,ae*fe).floor()},this.setDrawingBufferSize=function(A,W,ce){We=A,ae=W,fe=ce,t.width=Math.floor(A*ce),t.height=Math.floor(W*ce),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(T===ui){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,W,ce,se){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,W,ce,se),w.viewport(I.copy(ke).multiplyScalar(fe).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,W,ce,se){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,W,ce,se),w.scissor(re.copy(ct).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){w.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){qe=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ce=!0){let se=0;if(A){let ie=!1;if(q!==null){const Fe=q.texture.format;ie=S.has(Fe)}if(ie){const Fe=q.texture.type,Ne=y.has(Fe),Ie=lt.getClearColor(),je=lt.getClearAlpha(),Je=Ie.r,ht=Ie.g,vt=Ie.b;Ne?(P[0]=Je,P[1]=ht,P[2]=vt,P[3]=je,X.clearBufferuiv(X.COLOR,0,P)):(U[0]=Je,U[1]=ht,U[2]=vt,U[3]=je,X.clearBufferiv(X.COLOR,0,U))}else se|=X.COLOR_BUFFER_BIT}W&&(se|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),lt.dispose(),De.dispose(),Ce.dispose(),ee.dispose(),we.dispose(),ge.dispose(),Be.dispose(),ve.dispose(),Le.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",wl),$e.removeEventListener("sessionend",El),Hn.stop()};function Pt(A){A.preventDefault(),uv("WebGLRenderer: Context Lost."),H=!0}function bt(){uv("WebGLRenderer: Context Restored."),H=!1;const A=Z.autoReset,W=it.enabled,ce=it.autoUpdate,se=it.needsUpdate,ie=it.type;tt(),Z.autoReset=A,it.enabled=W,it.autoUpdate=ce,it.needsUpdate=se,it.type=ie}function bn(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hi(A){const W=A.target;W.removeEventListener("dispose",hi),os(W)}function os(A){Vs(A),ee.remove(A)}function Vs(A){const W=ee.get(A).programs;W!==void 0&&(W.forEach(function(ce){Le.releaseProgram(ce)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ce,se,ie,Fe){W===null&&(W=qt);const Ne=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ie=Qt(A,W,ce,se,ie);w.setMaterial(se,Ne);let je=ce.index,Je=1;if(se.wireframe===!0){if(je=pe.getWireframeAttribute(ce),je===void 0)return;Je=2}const ht=ce.drawRange,vt=ce.attributes.position;let Ge=ht.start*Je,wt=(ht.start+ht.count)*Je;Fe!==null&&(Ge=Math.max(Ge,Fe.start*Je),wt=Math.min(wt,(Fe.start+Fe.count)*Je)),je!==null?(Ge=Math.max(Ge,0),wt=Math.min(wt,je.count)):vt!=null&&(Ge=Math.max(Ge,0),wt=Math.min(wt,vt.count));const sn=wt-Ge;if(sn<0||sn===1/0)return;Be.setup(ie,se,Ie,ce,je);let Vt,It=Re;if(je!==null&&(Vt=Ae.get(je),It=me,It.setIndex(Vt)),ie.isMesh)se.wireframe===!0?(w.setLineWidth(se.wireframeLinewidth*zt()),It.setMode(X.LINES)):It.setMode(X.TRIANGLES);else if(ie.isLine){let hn=se.linewidth;hn===void 0&&(hn=1),w.setLineWidth(hn*zt()),ie.isLineSegments?It.setMode(X.LINES):ie.isLineLoop?It.setMode(X.LINE_LOOP):It.setMode(X.LINE_STRIP)}else ie.isPoints?It.setMode(X.POINTS):ie.isSprite&&It.setMode(X.TRIANGLES);if(ie.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))It.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const hn=ie._multiDrawStarts,Ve=ie._multiDrawCounts,ln=ie._multiDrawCount,Et=je?Ae.get(je).bytesPerElement:1,Dn=ee.get(se).currentProgram.getUniforms();for(let xt=0;xt<ln;xt++)Dn.setValue(X,"_gl_DrawID",xt),It.render(hn[xt]/Et,Ve[xt])}else if(ie.isInstancedMesh)It.renderInstances(Ge,sn,ie.count);else if(ce.isInstancedBufferGeometry){const hn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ve=Math.min(ce.instanceCount,hn);It.renderInstances(Ge,sn,Ve)}else It.render(Ge,sn)};function as(A,W,ce,se){j!==null&&A.isNodeMaterial&&j.setObject(se,A),yt===!0&&Qe.setState(A,ce,!1),A.transparent===!0&&A.side===gr&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,us(A,W,se),A.side=Fs,A.needsUpdate=!0,us(A,W,se),A.side=gr):us(A,W,se)}this.compile=function(A,W,ce=null){ce===null&&(ce=A),j!==null&&j.renderStart(A,W,ce),L=Ce.get(ce),L.init(W),E.push(L),ce.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),A!==ce&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights(),j!==null&&j.updateLights(L.state.lightsArray),At=this.localClippingEnabled,yt=Qe.init(this.clippingPlanes,At),yt===!0&&Qe.setGlobalState(this.clippingPlanes,W),j!==null&&it.render(L.state.shadowsArray,ce,W);const se=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Fe=ie.material;if(Fe)if(Array.isArray(Fe))for(let Ne=0;Ne<Fe.length;Ne++){const Ie=Fe[Ne];as(Ie,ce,W,ie),se.add(Ie)}else as(Fe,ce,W,ie),se.add(Fe)}),L=E.pop(),j!==null&&j.renderEnd(),se},this.compileAsync=function(A,W,ce=null){const se=this.compile(A,W,ce);return new Promise(ie=>{function Fe(){if(se.forEach(function(Ne){const je=ee.get(Ne).currentProgram;(je===void 0||je.isReady())&&se.delete(Ne)}),se.size===0){ie(A);return}setTimeout(Fe,10)}_e.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ls=null;function qu(A){ls&&ls(A)}function wl(){Hn.stop()}function El(){Hn.start()}const Hn=new py;Hn.setAnimationLoop(qu),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(A){ls=A,$e.setAnimationLoop(A),A===null?Hn.stop():Hn.start()},$e.addEventListener("sessionstart",wl),$e.addEventListener("sessionend",El),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;j!==null&&j.renderStart(A,W);const ce=$e.enabled===!0&&$e.isPresenting===!0,se=N!==null&&(q===null||ce)&&N.begin(B,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(W),W=$e.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,W,q),L=Ce.get(A,E.length),L.init(W),L.state.textureUnits=de.getTextureUnits(),E.push(L),gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),dt.setFromProjectionMatrix(gt,Ki,W.reversedDepth),At=this.localClippingEnabled,yt=Qe.init(this.clippingPlanes,At),R=De.get(A,F.length),R.init(),F.push(R),$e.enabled===!0&&$e.isPresenting===!0){const Ne=B.xr.getDepthSensingMesh();Ne!==null&&Hs(Ne,W,-1/0,B.sortObjects)}Hs(A,W,0,B.sortObjects),R.finish(),j!==null&&j.updateLights(L.state.lightsArray),B.sortObjects===!0&&R.sort(Te,qe),Ct=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Ct&&lt.addToRenderList(R,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&Qe.beginShadows();const ie=L.state.shadowsArray;if(it.render(ie,A,W),yt===!0&&Qe.endShadows(),(se&&N.hasRenderPass())===!1){const Ne=R.opaque,Ie=R.transmissive;if(L.setupLights(),W.isArrayCamera){const je=W.cameras;if(Ie.length>0)for(let Je=0,ht=je.length;Je<ht;Je++){const vt=je[Je];Tl(Ne,Ie,A,vt)}Ct&&lt.render(A);for(let Je=0,ht=je.length;Je<ht;Je++){const vt=je[Je];qo(R,A,vt,vt.viewport)}}else Ie.length>0&&Tl(Ne,Ie,A,W),Ct&&lt.render(A),qo(R,A,W)}q!==null&&J===0&&(de.updateMultisampleRenderTarget(q),de.updateRenderTargetMipmap(q)),se&&N.end(B),A.isScene===!0&&A.onAfterRender(B,A,W),Be.resetDefaultState(),K=-1,Q=null,E.pop(),E.length>0?(L=E[E.length-1],de.setTextureUnits(L.state.textureUnits),yt===!0&&Qe.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?R=F[F.length-1]:R=null,j!==null&&j.renderEnd()};function Hs(A,W,ce,se){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(dt)){se&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const Ne=ge.update(A),Ie=A.material;Ie.visible&&R.push(A,Ne,Ie,ce,Yt.z,null,W)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(dt))){const Ne=ge.update(A),Ie=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Yt.copy(Ne.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(Ie)){const je=Ne.groups;for(let Je=0,ht=je.length;Je<ht;Je++){const vt=je[Je],Ge=Ie[vt.materialIndex];Ge&&Ge.visible&&R.push(A,Ne,Ge,ce,Yt.z,vt,W)}}else Ie.visible&&R.push(A,Ne,Ie,ce,Yt.z,null,W)}}const Fe=A.children;for(let Ne=0,Ie=Fe.length;Ne<Ie;Ne++)Hs(Fe[Ne],W,ce,se)}function qo(A,W,ce,se){const{opaque:ie,transmissive:Fe,transparent:Ne}=A;L.setupLightsView(ce),yt===!0&&Qe.setGlobalState(B.clippingPlanes,ce),se&&w.viewport(I.copy(se)),ie.length>0&&cs(ie,W,ce),Fe.length>0&&cs(Fe,W,ce),Ne.length>0&&cs(Ne,W,ce),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Tl(A,W,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[se.id]===void 0){const Ge=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[se.id]=new Yn(1,1,{generateMipmaps:!0,type:Ge?ii:ui,minFilter:Ls,samples:Math.max(4,D.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[se.id],Ne=se.viewport||I;Fe.setSize(Ne.z*B.transmissionResolutionScale,Ne.w*B.transmissionResolutionScale);const Ie=B.getRenderTarget(),je=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(Fe),B.getClearColor(ze),Ue=B.getClearAlpha(),Ue<1&&B.setClearColor(16777215,.5),B.clear(),Ct&&lt.render(ce);const ht=B.toneMapping;B.toneMapping=Qi;const vt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),yt===!0&&Qe.setGlobalState(B.clippingPlanes,se),cs(A,ce,se),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let wt=0,sn=W.length;wt<sn;wt++){const Vt=W[wt],{object:It,geometry:hn,material:Ve,group:ln}=Vt;if(Ve.side===gr&&It.layers.test(se.layers)){const Et=Ve.side;Ve.side=ni,Ve.needsUpdate=!0,$o(It,ce,se,hn,Ve,ln),Ve.side=Et,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}B.setRenderTarget(Ie,je,Je),B.setClearColor(ze,Ue),vt!==void 0&&(se.viewport=vt),B.toneMapping=ht}function cs(A,W,ce){const se=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Fe=A.length;ie<Fe;ie++){const Ne=A[ie],{object:Ie,geometry:je,group:Je}=Ne;let ht=Ne.material;ht.allowOverride===!0&&se!==null&&(ht=se),Ie.layers.test(ce.layers)&&$o(Ie,W,ce,je,ht,Je)}}function $o(A,W,ce,se,ie,Fe){j!==null&&ie.isNodeMaterial&&j.setObject(A,ie),A.onBeforeRender(B,W,ce,se,ie,Fe),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(B,W,ce,se,A,Fe),ie.transparent===!0&&ie.side===gr&&ie.forceSinglePass===!1?(ie.side=ni,ie.needsUpdate=!0,B.renderBufferDirect(ce,W,se,ie,A,Fe),ie.side=Fs,ie.needsUpdate=!0,B.renderBufferDirect(ce,W,se,ie,A,Fe),ie.side=gr):B.renderBufferDirect(ce,W,se,ie,A,Fe),A.onAfterRender(B,W,ce,se,ie,Fe)}function us(A,W,ce){W.isScene!==!0&&(W=qt);const se=ee.get(A),ie=L.state.lights,Fe=L.state.shadowsArray,Ne=ie.state.version,Ie=Le.getParameters(A,ie.state,Fe,W,ce,L.state.lightProbeGridArray),je=Le.getProgramCacheKey(Ie);let Je=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,se.fog=W.fog;const ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=we.get(A.envMap||se.environment,ht),se.envMapRotation=se.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",hi),Je=new Map,se.programs=Je);let vt=Je.get(je);if(vt!==void 0){if(se.currentProgram===vt&&se.lightsStateVersion===Ne)return bl(A,Ie),vt}else Ie.uniforms=Le.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,ce,Ie),A.onBeforeCompile(Ie,B),vt=Le.acquireProgram(Ie,je),Je.set(je,vt),se.uniforms=Ie.uniforms;const Ge=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Qe.uniform),bl(A,Ie),se.needsLights=Zo(A),se.lightsStateVersion=Ne,se.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.sunLights.value=ie.state.sun,Ge.sunLightShadows.value=ie.state.sunShadow,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ge.sunShadowCascade.value=ie.state.sunShadowCascade,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ie.state.spotLightMatrix,Ge.spotLightMap.value=ie.state.spotLightMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.lightProbeGrid=L.state.lightProbeGridArray.length>0,se.currentProgram=vt,se.uniformsList=null,vt}function Ko(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=uu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function bl(A,W){const ce=ee.get(A);ce.outputColorSpace=W.outputColorSpace,ce.batching=W.batching,ce.batchingColor=W.batchingColor,ce.instancing=W.instancing,ce.instancingColor=W.instancingColor,ce.instancingMorph=W.instancingMorph,ce.skinning=W.skinning,ce.morphTargets=W.morphTargets,ce.morphNormals=W.morphNormals,ce.morphColors=W.morphColors,ce.morphTargetsCount=W.morphTargetsCount,ce.numClippingPlanes=W.numClippingPlanes,ce.numIntersection=W.numClipIntersection,ce.vertexAlphas=W.vertexAlphas,ce.vertexTangents=W.vertexTangents,ce.toneMapping=W.toneMapping}function $u(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let ce=0,se=A.length;ce<se;ce++){const ie=A[ce];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function Qt(A,W,ce,se,ie){W.isScene!==!0&&(W=qt),de.resetTextureUnits();const Fe=W.fog,Ne=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?W.environment:null,Ie=q===null?B.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Tt.workingColorSpace,je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Je=we.get(se.envMap||Ne,je),ht=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,vt=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ge=!!ce.morphAttributes.position,wt=!!ce.morphAttributes.normal,sn=!!ce.morphAttributes.color;let Vt=Qi;se.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Vt=B.toneMapping);const It=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,hn=It!==void 0?It.length:0,Ve=ee.get(se),ln=L.state.lights;if(yt===!0&&(At===!0||A!==Q)){const Ot=A===Q&&se.id===K;Qe.setState(se,A,Ot)}let Et=!1;se.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ln.state.version||Ve.outputColorSpace!==Ie||ie.isBatchedMesh&&Ve.batching===!1||!ie.isBatchedMesh&&Ve.batching===!0||ie.isBatchedMesh&&Ve.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ve.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ve.instancing===!1||!ie.isInstancedMesh&&Ve.instancing===!0||ie.isSkinnedMesh&&Ve.skinning===!1||!ie.isSkinnedMesh&&Ve.skinning===!0||ie.isInstancedMesh&&Ve.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ve.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ve.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ve.instancingMorph===!1&&ie.morphTexture!==null||Ve.envMap!==Je||se.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Qe.numPlanes||Ve.numIntersection!==Qe.numIntersection)||Ve.vertexAlphas!==ht||Ve.vertexTangents!==vt||Ve.morphTargets!==Ge||Ve.morphNormals!==wt||Ve.morphColors!==sn||Ve.toneMapping!==Vt||Ve.morphTargetsCount!==hn||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ve.__version=se.version);let Dn=Ve.currentProgram;Et===!0&&(Dn=us(se,W,ie),j&&se.isNodeMaterial&&j.onUpdateProgram(se,Dn,Ve));let xt=!1,bi=!1,nr=!1;const Lt=Dn.getUniforms(),$t=Ve.uniforms;if(w.useProgram(Dn.program)&&(xt=!0,bi=!0,nr=!0),se.id!==K&&(K=se.id,bi=!0),Ve.needsLights){const Ot=$u(L.state.lightProbeGridArray,ie);Ve.lightProbeGrid!==Ot&&(Ve.lightProbeGrid=Ot,bi=!0)}if(xt||Q!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(X,"projectionMatrix",A.projectionMatrix),Lt.setValue(X,"viewMatrix",A.matrixWorldInverse);const pi=Lt.map.cameraPosition;pi!==void 0&&pi.setValue(X,Ft.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,bi=!0,nr=!0)}if(Ve.needsLights&&(ln.state.sunShadowMap.length>0&&Lt.setValue(X,"sunShadowMap",ln.state.sunShadowMap,de),ln.state.directionalShadowMap.length>0&&Lt.setValue(X,"directionalShadowMap",ln.state.directionalShadowMap,de),ln.state.spotShadowMap.length>0&&Lt.setValue(X,"spotShadowMap",ln.state.spotShadowMap,de),ln.state.pointShadowMap.length>0&&Lt.setValue(X,"pointShadowMap",ln.state.pointShadowMap,de)),ie.isSkinnedMesh){Lt.setOptional(X,ie,"bindMatrix"),Lt.setOptional(X,ie,"bindMatrixInverse");const Ot=ie.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Lt.setValue(X,"boneTexture",Ot.boneTexture,de))}ie.isBatchedMesh&&(Lt.setOptional(X,ie,"batchingTexture"),Lt.setValue(X,"batchingTexture",ie._matricesTexture,de),Lt.setOptional(X,ie,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",ie._indirectTexture,de),Lt.setOptional(X,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",ie._colorsTexture,de));const Ai=ce.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&G.update(ie,ce,Dn),(bi||Ve.receiveShadow!==ie.receiveShadow)&&(Ve.receiveShadow=ie.receiveShadow,Lt.setValue(X,"receiveShadow",ie.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&W.environment!==null&&($t.envMapIntensity.value=W.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=BR()),bi){if(Lt.setValue(X,"toneMappingExposure",B.toneMappingExposure),Ve.needsLights&&Ku($t,nr),Fe&&se.fog===!0&&Ze.refreshFogUniforms($t,Fe),Ze.refreshMaterialUniforms($t,se,fe,ae,L.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ot=Ve.lightProbeGrid;$t.probesSH.value=Ot.texture,$t.probesMin.value.copy(Ot.boundingBox.min),$t.probesMax.value.copy(Ot.boundingBox.max),$t.probesResolution.value.copy(Ot.resolution)}uu.upload(X,Ko(Ve),$t,de)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(uu.upload(X,Ko(Ve),$t,de),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Lt.setValue(X,"center",ie.center),Lt.setValue(X,"modelViewMatrix",ie.modelViewMatrix),Lt.setValue(X,"normalMatrix",ie.normalMatrix),Lt.setValue(X,"modelMatrix",ie.matrixWorld),se.uniformsGroups!==void 0){const Ot=se.uniformsGroups;for(let pi=0,Ci=Ot.length;pi<Ci;pi++){const Ri=Ot[pi];ve.update(Ri,Dn),ve.bind(Ri,Dn)}}return Dn}function Ku(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Zo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,W,ce){const se=ee.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=W,ee.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ce=ee.get(A);ce.__webglFramebuffer=W,ce.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ce=0){q=A,he=W,J=ce;let se=null,ie=!1,Fe=!1;if(A){const Ie=ee.get(A);if(Ie.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,Ie.__webglFramebuffer),I.copy(A.viewport),re.copy(A.scissor),ye=A.scissorTest,w.viewport(I),w.scissor(re),w.setScissorTest(ye),K=-1;return}else if(Ie.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Ie.__hasExternalTextures)de.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ht=A.depthTexture;if(Ie.__boundDepthTexture!==ht){if(ht!==null&&ee.has(ht)&&(A.width!==ht.image.width||A.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const Je=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?se=Je[W][ce]:se=Je[W],ie=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?se=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?se=Je[ce]:se=Je,I.copy(A.viewport),re.copy(A.scissor),ye=A.scissorTest}else I.copy(ke).multiplyScalar(fe).floor(),re.copy(ct).multiplyScalar(fe).floor(),ye=Ut;if(ce!==0&&(se=te),w.bindFramebuffer(X.FRAMEBUFFER,se)&&w.drawBuffers(A,se),w.viewport(I),w.scissor(re),w.setScissorTest(ye),ie){const Ie=ee.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,ce)}else if(Fe){const Ie=W;for(let je=0;je<A.textures.length;je++){const Je=ee.get(A.textures[je]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+je,Je.__webglTexture,ce,Ie)}}else if(A!==null&&ce!==0){const Ie=ee.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ie.__webglTexture,ce)}K=-1};function Qo(A){const W=ee.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=D.textureFormatReadable(A.format),W.__typeReadable=D.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,ce,se,ie,Fe,Ne,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(je=je[Ne]),je){w.bindFramebuffer(X.FRAMEBUFFER,je);try{const Je=A.textures[Ie],ht=Je.format,vt=Je.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie);const Ge=Qo(Je);if(Ge.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-se&&ce>=0&&ce<=A.height-ie&&X.readPixels(W,ce,se,ie,Pe.convert(ht),Pe.convert(vt),Fe)}finally{const Je=q!==null?ee.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,W,ce,se,ie,Fe,Ne,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(je=je[Ne]),je)if(W>=0&&W<=A.width-se&&ce>=0&&ce<=A.height-ie){w.bindFramebuffer(X.FRAMEBUFFER,je);const Je=A.textures[Ie],ht=Je.format,vt=Je.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie);const Ge=Qo(Je);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.bufferData(X.PIXEL_PACK_BUFFER,Fe.byteLength,X.STREAM_READ),X.readPixels(W,ce,se,ie,Pe.convert(ht),Pe.convert(vt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const sn=q!==null?ee.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,sn);const Vt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await F1(X,Vt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Fe),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(wt),X.deleteSync(Vt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ce=0){const se=Math.pow(2,-ce),ie=Math.floor(A.image.width*se),Fe=Math.floor(A.image.height*se),Ne=W!==null?W.x:0,Ie=W!==null?W.y:0;de.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,Ne,Ie,ie,Fe),w.unbindTexture()},this.copyTextureToTexture=function(A,W,ce=null,se=null,ie=0,Fe=0){let Ne,Ie,je,Je,ht,vt,Ge,wt,sn;const Vt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ce!==null)Ne=ce.max.x-ce.min.x,Ie=ce.max.y-ce.min.y,je=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,ht=ce.min.y,vt=ce.isBox3?ce.min.z:0;else{const $t=Math.pow(2,-ie);Ne=Math.floor(Vt.width*$t),Ie=Math.floor(Vt.height*$t),A.isDataArrayTexture?je=Vt.depth:A.isData3DTexture?je=Math.floor(Vt.depth*$t):je=1,Je=0,ht=0,vt=0}se!==null?(Ge=se.x,wt=se.y,sn=se.z):(Ge=0,wt=0,sn=0);const It=Pe.convert(W.format),hn=Pe.convert(W.type);let Ve;W.isData3DTexture?(de.setTexture3D(W,0),Ve=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(de.setTexture2DArray(W,0),Ve=X.TEXTURE_2D_ARRAY):(de.setTexture2D(W,0),Ve=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const ln=w.getParameter(X.UNPACK_ROW_LENGTH),Et=w.getParameter(X.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter(X.UNPACK_SKIP_PIXELS),xt=w.getParameter(X.UNPACK_SKIP_ROWS),bi=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Vt.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Vt.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(X.UNPACK_SKIP_ROWS,ht),w.pixelStorei(X.UNPACK_SKIP_IMAGES,vt);const nr=A.isDataArrayTexture||A.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const $t=ee.get(A),Ai=ee.get(W),Ot=ee.get($t.__renderTarget),pi=ee.get(Ai.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,Ot.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ci=0;Ci<je;Ci++)nr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,ie,vt+Ci),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ee.get(W).__webglTexture,Fe,sn+Ci)),X.blitFramebuffer(Je,ht,Ne,Ie,Ge,wt,Ne,Ie,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||ee.has(A)){const $t=ee.get(A),Ai=ee.get(W);w.bindFramebuffer(X.READ_FRAMEBUFFER,V),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,ne);for(let Ot=0;Ot<je;Ot++)nr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$t.__webglTexture,ie,vt+Ot):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$t.__webglTexture,ie),Lt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ai.__webglTexture,Fe,sn+Ot):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ai.__webglTexture,Fe),ie!==0?X.blitFramebuffer(Je,ht,Ne,Ie,Ge,wt,Ne,Ie,X.COLOR_BUFFER_BIT,X.NEAREST):Lt?X.copyTexSubImage3D(Ve,Fe,Ge,wt,sn+Ot,Je,ht,Ne,Ie):X.copyTexSubImage2D(Ve,Fe,Ge,wt,Je,ht,Ne,Ie);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ve,Fe,Ge,wt,sn,Ne,Ie,je,It,hn,Vt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Ve,Fe,Ge,wt,sn,Ne,Ie,je,It,Vt.data):X.texSubImage3D(Ve,Fe,Ge,wt,sn,Ne,Ie,je,It,hn,Vt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Fe,Ge,wt,Ne,Ie,It,hn,Vt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Fe,Ge,wt,Vt.width,Vt.height,It,Vt.data):X.texSubImage2D(X.TEXTURE_2D,Fe,Ge,wt,Ne,Ie,It,hn,Vt);w.pixelStorei(X.UNPACK_ROW_LENGTH,ln),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei(X.UNPACK_SKIP_ROWS,xt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,bi),Fe===0&&W.generateMipmaps&&X.generateMipmap(Ve),w.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){he=0,J=0,q=null,w.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const fu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ml{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const VR=new Ou(-1,1,1,-1,0,1);class HR extends gn{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const GR=new HR;class My{constructor(e){this._mesh=new ti(GR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class WR extends ml{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wu.clone(e.uniforms),this.material=new Pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new My(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ux extends ml{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class XR extends ml{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class jR{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ft);this._width=i.width,this._height=i.height,t=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new WR(fu),this.copyPass.material.blending=Zi,this.timer=new zE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,a=this.passes.length;o<a;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}ux!==void 0&&(c instanceof ux?i=!0:c instanceof XR&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class YR extends ml{constructor(e,t,i=null,o=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new mt}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=o}}const qR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ko extends ml{constructor(e,t=1,i,o){super(),this.strength=t,this.radius=i,this.threshold=o,this.resolution=e!==void 0?new ft(e.x,e.y):new ft(256,256),this.clearColor=new mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Yn(a,c,{type:ii,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const v=new Yn(a,c,{type:ii,depthBuffer:!1});v.texture.name="UnrealBloomPass.h"+p,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const m=new Yn(a,c,{type:ii,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),c=Math.round(c/2)}const u=qR;this.highPassUniforms=wu.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pn({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const f=[6,10,14,18,22];a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ft(1/a,1/c),a=Math.round(a/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wu.clone(fu.uniforms),this.blendMaterial=new Pn({uniforms:this.copyUniforms,vertexShader:fu.vertexShader,fragmentShader:fu.fragmentShader,premultipliedAlpha:!0,blending:ns,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new mt,this._oldClearAlpha=1,this._basic=new Uu,this._fsQuad=new My(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(i,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,o),this.renderTargetsVertical[a].setSize(i,o),this.separableBlurMaterials[a].uniforms.invSize.value=new ft(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(e,t,i,o,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[f].uniforms.direction.value=ko.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=ko.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let c=0;c<e;c++)t.push(.39894*Math.exp(-.5*c*c/(i*i))/i);const o=[],a=[];for(let c=1;c<e;c+=2){const u=t[c],f=c+1<e?t[c+1]:0,h=u+f;o.push((c*u+(c+1)*f)/h),a.push(h)}return new Pn({defines:{KERNEL_PAIRS:o.length},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:o},gaussianWeights:{value:a}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ko.BlurDirectionX=new ft(1,0);ko.BlurDirectionY=new ft(0,1);const $p=xe.createContext({});function gl(n){const e=xe.useRef(null);return e.current===null&&(e.current=n()),e.current}const zu=xe.createContext(null),vl=xe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class $R extends xe.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function KR({children:n,isPresent:e}){const t=xe.useId(),i=xe.useRef(null),o=xe.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=xe.useContext(vl);return xe.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:h}=o.current;if(e||!i.current||!c||!u)return;i.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),O.jsx($R,{isPresent:e,childRef:i,sizeRef:o,children:xe.cloneElement(n,{ref:i})})}const ZR=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:c})=>{const u=gl(QR),f=xe.useId(),h=xe.useCallback(v=>{u.set(v,!0);for(const m of u.values())if(!m)return;i&&i()},[u,i]),p=xe.useMemo(()=>({id:f,initial:e,isPresent:t,custom:o,onExitComplete:h,register:v=>(u.set(v,!1),()=>u.delete(v))}),a?[Math.random(),h]:[t,h]);return xe.useMemo(()=>{u.forEach((v,m)=>u.set(m,!1))},[t]),xe.useEffect(()=>{!t&&!u.size&&i&&i()},[t]),c==="popLayout"&&(n=O.jsx(KR,{isPresent:t,children:n})),O.jsx(zu.Provider,{value:p,children:n})};function QR(){return new Map}function wy(n=!0){const e=xe.useContext(zu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=xe.useId();xe.useEffect(()=>{n&&o(a)},[n]);const c=xe.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const Jc=n=>n.key||"";function fx(n){const e=[];return xe.Children.forEach(n,t=>{xe.isValidElement(t)&&e.push(t)}),e}const Kp=typeof window<"u",Vu=Kp?xe.useLayoutEffect:xe.useEffect,JR=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1})=>{const[u,f]=wy(c),h=xe.useMemo(()=>fx(n),[n]),p=c&&!u?[]:h.map(Jc),v=xe.useRef(!0),m=xe.useRef(h),x=gl(()=>new Map),[M,T]=xe.useState(h),[S,y]=xe.useState(h);Vu(()=>{v.current=!1,m.current=h;for(let C=0;C<S.length;C++){const R=Jc(S[C]);p.includes(R)?x.delete(R):x.get(R)!==!0&&x.set(R,!1)}},[S,p.length,p.join("-")]);const P=[];if(h!==M){let C=[...h];for(let R=0;R<S.length;R++){const L=S[R],F=Jc(L);p.includes(F)||(C.splice(R,0,L),P.push(L))}a==="wait"&&P.length&&(C=P),y(fx(C)),T(h);return}const{forceRender:U}=xe.useContext($p);return O.jsx(O.Fragment,{children:S.map(C=>{const R=Jc(C),L=c&&!u?!1:h===S||p.includes(R),F=()=>{if(x.has(R))x.set(R,!0);else return;let E=!0;x.forEach(N=>{N||(E=!1)}),E&&(U==null||U(),y(m.current),c&&(f==null||f()),i&&i())};return O.jsx(ZR,{isPresent:L,initial:!v.current||t?void 0:!1,custom:L?void 0:e,presenceAffectsLayout:o,mode:a,onExitComplete:L?void 0:F,children:C},R)})})},fi=n=>n;let Ey=fi;function Zp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Bo=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},yr=n=>n*1e3,Sr=n=>n/1e3,eP={useManualTiming:!1};function tP(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(f.schedule(h),n()),h(c)}const f={schedule:(h,p=!1,v=!1)=>{const x=v&&i?e:t;return p&&a.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,i){o=!0;return}i=!0,[e,t]=[t,e],e.forEach(u),e.clear(),i=!1,o&&(o=!1,f.process(h))}};return f}const eu=["read","resolveKeyframes","update","preRender","render","postRender"],nP=40;function Ty(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=eu.reduce((y,P)=>(y[P]=tP(a),y),{}),{read:u,resolveKeyframes:f,update:h,preRender:p,render:v,postRender:m}=c,x=()=>{const y=performance.now();t=!1,o.delta=i?1e3/60:Math.max(Math.min(y-o.timestamp,nP),1),o.timestamp=y,o.isProcessing=!0,u.process(o),f.process(o),h.process(o),p.process(o),v.process(o),m.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(x))},M=()=>{t=!0,i=!0,o.isProcessing||n(x)};return{schedule:eu.reduce((y,P)=>{const U=c[P];return y[P]=(C,R=!1,L=!1)=>(t||M(),U.schedule(C,R,L)),y},{}),cancel:y=>{for(let P=0;P<eu.length;P++)c[eu[P]].cancel(y)},state:o,steps:c}}const{schedule:Ht,cancel:wr,state:wn,steps:dh}=Ty(typeof requestAnimationFrame<"u"?requestAnimationFrame:fi,!0),by=xe.createContext({strict:!1}),dx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zo={};for(const n in dx)zo[n]={isEnabled:e=>dx[n].some(t=>!!e[t])};function iP(n){for(const e in n)zo[e]={...zo[e],...n[e]}}const rP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Eu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||rP.has(n)}let Ay=n=>!Eu(n);function sP(n){n&&(Ay=e=>e.startsWith("on")?!Eu(e):n(e))}try{sP(require("@emotion/is-prop-valid").default)}catch{}function oP(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||(Ay(o)||t===!0&&Eu(o)||!e&&!Eu(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}function aP(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Hu=xe.createContext({});function ll(n){return typeof n=="string"||Array.isArray(n)}function Gu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Qp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jp=["initial",...Qp];function Wu(n){return Gu(n.animate)||Jp.some(e=>ll(n[e]))}function Cy(n){return!!(Wu(n)||n.variants)}function lP(n,e){if(Wu(n)){const{initial:t,animate:i}=n;return{initial:t===!1||ll(t)?t:void 0,animate:ll(i)?i:void 0}}return n.inherit!==!1?e:{}}function cP(n){const{initial:e,animate:t}=lP(n,xe.useContext(Hu));return xe.useMemo(()=>({initial:e,animate:t}),[hx(e),hx(t)])}function hx(n){return Array.isArray(n)?n.join(" "):n}const uP=Symbol.for("motionComponentSymbol");function Ro(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function fP(n,e,t){return xe.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):Ro(t)&&(t.current=i))},[e])}const em=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),dP="framerAppearId",Ry="data-"+em(dP),{schedule:tm}=Ty(queueMicrotask,!1),Py=xe.createContext({});function hP(n,e,t,i,o){var a,c;const{visualElement:u}=xe.useContext(Hu),f=xe.useContext(by),h=xe.useContext(zu),p=xe.useContext(vl).reducedMotion,v=xe.useRef(null);i=i||f.renderer,!v.current&&i&&(v.current=i(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const m=v.current,x=xe.useContext(Py);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&pP(v.current,t,o,x);const M=xe.useRef(!1);xe.useInsertionEffect(()=>{m&&M.current&&m.update(t,h)});const T=t[Ry],S=xe.useRef(!!T&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,T))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,T)));return Vu(()=>{m&&(M.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),tm.render(m.render),S.current&&m.animationState&&m.animationState.animateChanges())}),xe.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,T)}),S.current=!1))}),m}function pP(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:f,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Ly(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Ro(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,layoutScroll:f,layoutRoot:h})}function Ly(n){if(n)return n.options.allowProjection!==!1?n.projection:Ly(n.parent)}function mP({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:o}){var a,c;n&&iP(n);function u(h,p){let v;const m={...xe.useContext(vl),...h,layoutId:gP(h)},{isStatic:x}=m,M=cP(h),T=i(h,x);if(!x&&Kp){vP();const S=xP(m);v=S.MeasureLayout,M.visualElement=hP(o,T,m,e,S.ProjectionNode)}return O.jsxs(Hu.Provider,{value:M,children:[v&&M.visualElement?O.jsx(v,{visualElement:M.visualElement,...m}):null,t(o,h,fP(T,M.visualElement,p),T,x,M.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${(c=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&c!==void 0?c:""})`}`;const f=xe.forwardRef(u);return f[uP]=o,f}function gP({layoutId:n}){const e=xe.useContext($p).id;return e&&n!==void 0?e+"-"+n:n}function vP(n,e){xe.useContext(by).strict}function xP(n){const{drag:e,layout:t}=zo;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const _P=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function nm(n){return typeof n!="string"||n.includes("-")?!1:!!(_P.indexOf(n)>-1||/[A-Z]/u.test(n))}function px(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function im(n,e,t,i){if(typeof e=="function"){const[o,a]=px(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=px(i);e=e(t!==void 0?t:n.custom,o,a)}return e}const pp=n=>Array.isArray(n),yP=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),SP=n=>pp(n)?n[n.length-1]||0:n,En=n=>!!(n&&n.getVelocity);function du(n){const e=En(n)?n.get():n;return yP(e)?e.toValue():e}function MP({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},i,o,a){const c={latestValues:wP(i,o,a,n),renderState:e()};return t&&(c.onMount=u=>t({props:i,current:u,...c}),c.onUpdate=u=>t(u)),c}const Dy=n=>(e,t)=>{const i=xe.useContext(Hu),o=xe.useContext(zu),a=()=>MP(n,e,i,o);return t?a():gl(a)};function wP(n,e,t,i){const o={},a=i(n,{});for(const m in a)o[m]=du(a[m]);let{initial:c,animate:u}=n;const f=Wu(n),h=Cy(n);e&&h&&!f&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!Gu(v)){const m=Array.isArray(v)?v:[v];for(let x=0;x<m.length;x++){const M=im(n,m[x]);if(M){const{transitionEnd:T,transition:S,...y}=M;for(const P in y){let U=y[P];if(Array.isArray(U)){const C=p?U.length-1:0;U=U[C]}U!==null&&(o[P]=U)}for(const P in T)o[P]=T[P]}}}return o}const jo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zs=new Set(jo),Ny=n=>e=>typeof e=="string"&&e.startsWith(n),Iy=Ny("--"),EP=Ny("var(--"),rm=n=>EP(n)?TP.test(n.split("/*")[0].trim()):!1,TP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Uy=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Er=(n,e,t)=>t>e?e:t<n?n:t,Yo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},cl={...Yo,transform:n=>Er(0,1,n)},tu={...Yo,default:1},xl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Kr=xl("deg"),Ji=xl("%"),at=xl("px"),bP=xl("vh"),AP=xl("vw"),mx={...Ji,parse:n=>Ji.parse(n)/100,transform:n=>Ji.transform(n*100)},CP={borderWidth:at,borderTopWidth:at,borderRightWidth:at,borderBottomWidth:at,borderLeftWidth:at,borderRadius:at,radius:at,borderTopLeftRadius:at,borderTopRightRadius:at,borderBottomRightRadius:at,borderBottomLeftRadius:at,width:at,maxWidth:at,height:at,maxHeight:at,top:at,right:at,bottom:at,left:at,padding:at,paddingTop:at,paddingRight:at,paddingBottom:at,paddingLeft:at,margin:at,marginTop:at,marginRight:at,marginBottom:at,marginLeft:at,backgroundPositionX:at,backgroundPositionY:at},RP={rotate:Kr,rotateX:Kr,rotateY:Kr,rotateZ:Kr,scale:tu,scaleX:tu,scaleY:tu,scaleZ:tu,skew:Kr,skewX:Kr,skewY:Kr,distance:at,translateX:at,translateY:at,translateZ:at,x:at,y:at,z:at,perspective:at,transformPerspective:at,opacity:cl,originX:mx,originY:mx,originZ:at},gx={...Yo,transform:Math.round},sm={...CP,...RP,zIndex:gx,size:at,fillOpacity:cl,strokeOpacity:cl,numOctaves:gx},PP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LP=jo.length;function DP(n,e,t){let i="",o=!0;for(let a=0;a<LP;a++){const c=jo[a],u=n[c];if(u===void 0)continue;let f=!0;if(typeof u=="number"?f=u===(c.startsWith("scale")?1:0):f=parseFloat(u)===0,!f||t){const h=Uy(u,sm[c]);if(!f){o=!1;const p=PP[c]||c;i+=`${p}(${h}) `}t&&(e[c]=h)}}return i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function om(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const f in e){const h=e[f];if(zs.has(f)){c=!0;continue}else if(Iy(f)){o[f]=h;continue}else{const p=Uy(h,sm[f]);f.startsWith("origin")?(u=!0,a[f]=p):i[f]=p}}if(e.transform||(c||t?i.transform=DP(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${f} ${h} ${p}`}}const NP={offset:"stroke-dashoffset",array:"stroke-dasharray"},IP={offset:"strokeDashoffset",array:"strokeDasharray"};function UP(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?NP:IP;n[a.offset]=at.transform(-i);const c=at.transform(e),u=at.transform(t);n[a.array]=`${c} ${u}`}function vx(n,e,t){return typeof n=="string"?n:at.transform(e+t*n)}function FP(n,e,t){const i=vx(e,n.x,n.width),o=vx(t,n.y,n.height);return`${i} ${o}`}function am(n,{attrX:e,attrY:t,attrScale:i,originX:o,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:f=0,...h},p,v){if(om(n,h,v),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:x,dimensions:M}=n;m.transform&&(M&&(x.transform=m.transform),delete m.transform),M&&(o!==void 0||a!==void 0||x.transform)&&(x.transformOrigin=FP(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),i!==void 0&&(m.scale=i),c!==void 0&&UP(m,c,u,f,!1)}const lm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Fy=()=>({...lm(),attrs:{}}),cm=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Oy(n,{style:e,vars:t},i,o){Object.assign(n.style,e,o&&o.getProjectionStyles(i));for(const a in t)n.style.setProperty(a,t[a])}const ky=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function By(n,e,t,i){Oy(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(ky.has(o)?o:em(o),e.attrs[o])}const Tu={};function OP(n){Object.assign(Tu,n)}function zy(n,{layout:e,layoutId:t}){return zs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Tu[n]||n==="opacity")}function um(n,e,t){var i;const{style:o}=n,a={};for(const c in o)(En(o[c])||e.style&&En(e.style[c])||zy(c,n)||((i=t==null?void 0:t.getValue(c))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(a[c]=o[c]);return a}function Vy(n,e,t){const i=um(n,e,t);for(const o in n)if(En(n[o])||En(e[o])){const a=jo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}function kP(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const xx=["x","y","width","height","cx","cy","r"],BP={useVisualState:Dy({scrapeMotionValuesFromProps:Vy,createRenderState:Fy,onUpdate:({props:n,prevProps:e,current:t,renderState:i,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const u in o)if(zs.has(u)){a=!0;break}}if(!a)return;let c=!e;if(e)for(let u=0;u<xx.length;u++){const f=xx[u];n[f]!==e[f]&&(c=!0)}c&&Ht.read(()=>{kP(t,i),Ht.render(()=>{am(i,o,cm(t.tagName),n.transformTemplate),By(t,i)})})}})},zP={useVisualState:Dy({scrapeMotionValuesFromProps:um,createRenderState:lm})};function Hy(n,e,t){for(const i in e)!En(e[i])&&!zy(i,t)&&(n[i]=e[i])}function VP({transformTemplate:n},e){return xe.useMemo(()=>{const t=lm();return om(t,e,n),Object.assign({},t.vars,t.style)},[e])}function HP(n,e){const t=n.style||{},i={};return Hy(i,t,n),Object.assign(i,VP(n,e)),i}function GP(n,e){const t={},i=HP(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}function WP(n,e,t,i){const o=xe.useMemo(()=>{const a=Fy();return am(a,e,cm(i),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};Hy(a,n.style,n),o.style={...a,...o.style}}return o}function XP(n=!1){return(t,i,o,{latestValues:a},c)=>{const f=(nm(t)?WP:GP)(i,a,c,t),h=oP(i,typeof t=="string",n),p=t!==xe.Fragment?{...h,...f,ref:o}:{},{children:v}=i,m=xe.useMemo(()=>En(v)?v.get():v,[v]);return xe.createElement(t,{...p,children:m})}}function jP(n,e){return function(i,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...nm(i)?BP:zP,preloadedFeatures:n,useRender:XP(o),createVisualElement:e,Component:i};return mP(c)}}function Gy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function Xu(n,e,t){const i=n.getProps();return im(i,e,t!==void 0?t:i.custom,n)}const YP=Zp(()=>window.ScrollTimeline!==void 0);class qP{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(o=>{if(YP()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{i.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class $P extends qP{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function fm(n,e){return n?n[e]||n.default||n:void 0}const mp=2e4;function Wy(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<mp;)e+=t,i=n.next(e);return e>=mp?1/0:e}function dm(n){return typeof n=="function"}function _x(n,e){n.timeline=e,n.onfinish=null}const hm=n=>Array.isArray(n)&&typeof n[0]=="number",KP={linearEasing:void 0};function ZP(n,e){const t=Zp(n);return()=>{var i;return(i=KP[e])!==null&&i!==void 0?i:t()}}const bu=ZP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xy=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=n(Bo(0,o-1,a))+", ";return`linear(${i.substring(0,i.length-2)})`};function jy(n){return!!(typeof n=="function"&&bu()||!n||typeof n=="string"&&(n in gp||bu())||hm(n)||Array.isArray(n)&&n.every(jy))}const Ha=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,gp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ha([0,.65,.55,1]),circOut:Ha([.55,0,1,.45]),backIn:Ha([.31,.01,.66,-.59]),backOut:Ha([.33,1.53,.69,.99])};function Yy(n,e){if(n)return typeof n=="function"&&bu()?Xy(n,e):hm(n)?Ha(n):Array.isArray(n)?n.map(t=>Yy(t,e)||gp.easeOut):gp[n]}const Bi={x:!1,y:!1};function qy(){return Bi.x||Bi.y}function QP(n,e,t){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(i=void 0)!==null&&i!==void 0?i:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function $y(n,e){const t=QP(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function yx(n){return e=>{e.pointerType==="touch"||qy()||n(e)}}function JP(n,e,t={}){const[i,o,a]=$y(n,t),c=yx(u=>{const{target:f}=u,h=e(u);if(typeof h!="function"||!f)return;const p=yx(v=>{h(v),f.removeEventListener("pointerleave",p)});f.addEventListener("pointerleave",p,o)});return i.forEach(u=>{u.addEventListener("pointerenter",c,o)}),a}const Ky=(n,e)=>e?n===e?!0:Ky(n,e.parentElement):!1,pm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,e2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function t2(n){return e2.has(n.tagName)||n.tabIndex!==-1}const Ga=new WeakSet;function Sx(n){return e=>{e.key==="Enter"&&n(e)}}function hh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const n2=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=Sx(()=>{if(Ga.has(t))return;hh(t,"down");const o=Sx(()=>{hh(t,"up")}),a=()=>hh(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function Mx(n){return pm(n)&&!qy()}function i2(n,e,t={}){const[i,o,a]=$y(n,t),c=u=>{const f=u.currentTarget;if(!Mx(u)||Ga.has(f))return;Ga.add(f);const h=e(u),p=(x,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),!(!Mx(x)||!Ga.has(f))&&(Ga.delete(f),typeof h=="function"&&h(x,{success:M}))},v=x=>{p(x,t.useGlobalTarget||Ky(f,x.target))},m=x=>{p(x,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return i.forEach(u=>{!t2(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),u.addEventListener("focus",h=>n2(h,o),o)}),a}function r2(n){return n==="x"||n==="y"?Bi[n]?null:(Bi[n]=!0,()=>{Bi[n]=!1}):Bi.x||Bi.y?null:(Bi.x=Bi.y=!0,()=>{Bi.x=Bi.y=!1})}const Zy=new Set(["width","height","top","left","right","bottom",...jo]);let hu;function s2(){hu=void 0}const er={now:()=>(hu===void 0&&er.set(wn.isProcessing||eP.useManualTiming?wn.timestamp:performance.now()),hu),set:n=>{hu=n,queueMicrotask(s2)}};function mm(n,e){n.indexOf(e)===-1&&n.push(e)}function gm(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class vm{constructor(){this.subscriptions=[]}add(e){return mm(this.subscriptions,e),()=>gm(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Qy(n,e){return e?n*(1e3/e):0}const wx=30,o2=n=>!isNaN(parseFloat(n)),Za={current:void 0};class a2{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,o=!0)=>{const a=er.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=er.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=o2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new vm);const i=this.events[e].add(t);return e==="change"?()=>{i(),Ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Za.current&&Za.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=er.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>wx)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,wx);return Qy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vo(n,e){return new a2(n,e)}function l2(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Vo(t))}function c2(n,e){const t=Xu(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=SP(a[c]);l2(n,c,u)}}function u2(n){return!!(En(n)&&n.add)}function vp(n,e){const t=n.getValue("willChange");if(u2(t))return t.add(e)}function Jy(n){return n.props[Ry]}const eS=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,f2=1e-7,d2=12;function h2(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=eS(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>f2&&++u<d2);return c}function _l(n,e,t,i){if(n===e&&t===i)return fi;const o=a=>h2(a,0,1,n,t);return a=>a===0||a===1?a:eS(o(a),e,i)}const tS=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,nS=n=>e=>1-n(1-e),iS=_l(.33,1.53,.69,.99),xm=nS(iS),rS=tS(xm),sS=n=>(n*=2)<1?.5*xm(n):.5*(2-Math.pow(2,-10*(n-1))),_m=n=>1-Math.sin(Math.acos(n)),oS=nS(_m),aS=tS(_m),lS=n=>/^0[^.\s]+$/u.test(n);function p2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||lS(n):!0}const Qa=n=>Math.round(n*1e5)/1e5,ym=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function m2(n){return n==null}const g2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sm=(n,e)=>t=>!!(typeof t=="string"&&g2.test(t)&&t.startsWith(n)||e&&!m2(t)&&Object.prototype.hasOwnProperty.call(t,e)),cS=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(ym);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},v2=n=>Er(0,255,n),ph={...Yo,transform:n=>Math.round(v2(n))},Is={test:Sm("rgb","red"),parse:cS("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+ph.transform(n)+", "+ph.transform(e)+", "+ph.transform(t)+", "+Qa(cl.transform(i))+")"};function x2(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const xp={test:Sm("#"),parse:x2,transform:Is.transform},Po={test:Sm("hsl","hue"),parse:cS("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Ji.transform(Qa(e))+", "+Ji.transform(Qa(t))+", "+Qa(cl.transform(i))+")"},Bn={test:n=>Is.test(n)||xp.test(n)||Po.test(n),parse:n=>Is.test(n)?Is.parse(n):Po.test(n)?Po.parse(n):xp.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Is.transform(n):Po.transform(n)},_2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function y2(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(ym))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(_2))===null||t===void 0?void 0:t.length)||0)>0}const uS="number",fS="color",S2="var",M2="var(",Ex="${}",w2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ul(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(w2,f=>(Bn.test(f)?(i.color.push(a),o.push(fS),t.push(Bn.parse(f))):f.startsWith(M2)?(i.var.push(a),o.push(S2),t.push(f)):(i.number.push(a),o.push(uS),t.push(parseFloat(f))),++a,Ex)).split(Ex);return{values:t,split:u,indexes:i,types:o}}function dS(n){return ul(n).values}function hS(n){const{split:e,types:t}=ul(n),i=e.length;return o=>{let a="";for(let c=0;c<i;c++)if(a+=e[c],o[c]!==void 0){const u=t[c];u===uS?a+=Qa(o[c]):u===fS?a+=Bn.transform(o[c]):a+=o[c]}return a}}const E2=n=>typeof n=="number"?0:n;function T2(n){const e=dS(n);return hS(n)(e.map(E2))}const rs={test:y2,parse:dS,createTransformer:hS,getAnimatableNone:T2},b2=new Set(["brightness","contrast","saturate","opacity"]);function A2(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(ym)||[];if(!i)return n;const o=t.replace(i,"");let a=b2.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const C2=/\b([a-z-]*)\(.*?\)/gu,_p={...rs,getAnimatableNone:n=>{const e=n.match(C2);return e?e.map(A2).join(" "):n}},R2={...sm,color:Bn,backgroundColor:Bn,outlineColor:Bn,fill:Bn,stroke:Bn,borderColor:Bn,borderTopColor:Bn,borderRightColor:Bn,borderBottomColor:Bn,borderLeftColor:Bn,filter:_p,WebkitFilter:_p},Mm=n=>R2[n];function pS(n,e){let t=Mm(n);return t!==_p&&(t=rs),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const P2=new Set(["auto","none","0"]);function L2(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!P2.has(a)&&ul(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=pS(t,o)}const Tx=n=>n===Yo||n===at,bx=(n,e)=>parseFloat(n.split(", ")[e]),Ax=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/u);if(o)return bx(o[1],e);{const a=i.match(/^matrix\((.+)\)$/u);return a?bx(a[1],n):0}},D2=new Set(["x","y","z"]),N2=jo.filter(n=>!D2.has(n));function I2(n){const e=[];return N2.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const Ho={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Ax(4,13),y:Ax(5,14)};Ho.translateX=Ho.x;Ho.translateY=Ho.y;const Us=new Set;let yp=!1,Sp=!1;function mS(){if(Sp){const n=Array.from(Us).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=I2(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))===null||u===void 0||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Sp=!1,yp=!1,Us.forEach(n=>n.complete()),Us.clear()}function gS(){Us.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Sp=!0)})}function U2(){gS(),mS()}class wm{constructor(e,t,i,o,a,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Us.add(this),yp||(yp=!0,Ht.read(gS),Ht.resolveKeyframes(mS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(i&&t){const f=i.readValue(t,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Us.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Us.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vS=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),F2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function O2(n){const e=F2.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function xS(n,e,t=1){const[i,o]=O2(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return vS(c)?parseFloat(c):c}return rm(o)?xS(o,e,t+1):o}const _S=n=>e=>e.test(n),k2={test:n=>n==="auto",parse:n=>n},yS=[Yo,at,Ji,Kr,AP,bP,k2],Cx=n=>yS.find(_S(n));class SS extends wm{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),rm(h))){const p=xS(h,t.current);p!==void 0&&(e[f]=p),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Zy.has(i)||e.length!==2)return;const[o,a]=e,c=Cx(o),u=Cx(a);if(c!==u)if(Tx(c)&&Tx(u))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)p2(e[o])&&i.push(o);i.length&&L2(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ho[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(i);a&&a.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=Ho[i](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Rx=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(rs.test(n)||n==="0")&&!n.startsWith("url("));function B2(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function z2(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=Rx(o,e),u=Rx(a,e);return!c||!u?!1:B2(n)||(t==="spring"||dm(t))&&i}const V2=n=>n!==null;function ju(n,{repeat:e,repeatType:t="loop"},i){const o=n.filter(V2),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||i===void 0?o[a]:i}const H2=40;class MS{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=er.now(),this.options={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>H2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&U2(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=er.now(),this.hasAttemptedResolve=!0;const{name:i,type:o,velocity:a,delay:c,onComplete:u,onUpdate:f,isGenerator:h}=this.options;if(!h&&!z2(e,i,o,a))if(c)this.options.duration=0;else{f&&f(ju(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const nn=(n,e,t)=>n+(e-n)*t;function mh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function G2({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,f=2*t-u;o=mh(f,u,n+1/3),a=mh(f,u,n),c=mh(f,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function Au(n,e){return t=>t>0?e:n}const gh=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},W2=[xp,Is,Po],X2=n=>W2.find(e=>e.test(n));function Px(n){const e=X2(n);if(!e)return!1;let t=e.parse(n);return e===Po&&(t=G2(t)),t}const Lx=(n,e)=>{const t=Px(n),i=Px(e);if(!t||!i)return Au(n,e);const o={...t};return a=>(o.red=gh(t.red,i.red,a),o.green=gh(t.green,i.green,a),o.blue=gh(t.blue,i.blue,a),o.alpha=nn(t.alpha,i.alpha,a),Is.transform(o))},j2=(n,e)=>t=>e(n(t)),yl=(...n)=>n.reduce(j2),Mp=new Set(["none","hidden"]);function Y2(n,e){return Mp.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function q2(n,e){return t=>nn(n,e,t)}function Em(n){return typeof n=="number"?q2:typeof n=="string"?rm(n)?Au:Bn.test(n)?Lx:Z2:Array.isArray(n)?wS:typeof n=="object"?Bn.test(n)?Lx:$2:Au}function wS(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>Em(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function $2(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Em(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function K2(n,e){var t;const i=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const c=e.types[a],u=n.indexes[c][o[c]],f=(t=n.values[u])!==null&&t!==void 0?t:0;i[a]=f,o[c]++}return i}const Z2=(n,e)=>{const t=rs.createTransformer(e),i=ul(n),o=ul(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Mp.has(n)&&!o.values.length||Mp.has(e)&&!i.values.length?Y2(n,e):yl(wS(K2(i,o),o.values),t):Au(n,e)};function ES(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?nn(n,e,t):Em(n)(n,e)}const Q2=5;function TS(n,e,t){const i=Math.max(e-Q2,0);return Qy(t-n(i),e-i)}const an={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},vh=.001;function J2({duration:n=an.duration,bounce:e=an.bounce,velocity:t=an.velocity,mass:i=an.mass}){let o,a,c=1-e;c=Er(an.minDamping,an.maxDamping,c),n=Er(an.minDuration,an.maxDuration,Sr(n)),c<1?(o=h=>{const p=h*c,v=p*n,m=p-t,x=wp(h,c),M=Math.exp(-v);return vh-m/x*M},a=h=>{const v=h*c*n,m=v*t+t,x=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),T=wp(Math.pow(h,2),c);return(-o(h)+vh>0?-1:1)*((m-x)*M)/T}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-vh+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,f=t3(o,a,u);if(n=yr(n),isNaN(f))return{stiffness:an.stiffness,damping:an.damping,duration:n};{const h=Math.pow(f,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:n}}}const e3=12;function t3(n,e,t){let i=t;for(let o=1;o<e3;o++)i=i-n(i)/e(i);return i}function wp(n,e){return n*Math.sqrt(1-e*e)}const n3=["duration","bounce"],i3=["stiffness","damping","mass"];function Dx(n,e){return e.some(t=>n[t]!==void 0)}function r3(n){let e={velocity:an.velocity,stiffness:an.stiffness,damping:an.damping,mass:an.mass,isResolvedFromDuration:!1,...n};if(!Dx(n,i3)&&Dx(n,n3))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*Er(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:an.mass,stiffness:o,damping:a}}else{const t=J2(n);e={...e,...t,mass:an.mass},e.isResolvedFromDuration=!0}return e}function bS(n=an.visualDuration,e=an.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:f,damping:h,mass:p,duration:v,velocity:m,isResolvedFromDuration:x}=r3({...t,velocity:-Sr(t.velocity||0)}),M=m||0,T=h/(2*Math.sqrt(f*p)),S=c-a,y=Sr(Math.sqrt(f/p)),P=Math.abs(S)<5;i||(i=P?an.restSpeed.granular:an.restSpeed.default),o||(o=P?an.restDelta.granular:an.restDelta.default);let U;if(T<1){const R=wp(y,T);U=L=>{const F=Math.exp(-T*y*L);return c-F*((M+T*y*S)/R*Math.sin(R*L)+S*Math.cos(R*L))}}else if(T===1)U=R=>c-Math.exp(-y*R)*(S+(M+y*S)*R);else{const R=y*Math.sqrt(T*T-1);U=L=>{const F=Math.exp(-T*y*L),E=Math.min(R*L,300);return c-F*((M+T*y*S)*Math.sinh(E)+R*S*Math.cosh(E))/R}}const C={calculatedDuration:x&&v||null,next:R=>{const L=U(R);if(x)u.done=R>=v;else{let F=0;T<1&&(F=R===0?yr(M):TS(U,R,L));const E=Math.abs(F)<=i,N=Math.abs(c-L)<=o;u.done=E&&N}return u.value=u.done?c:L,u},toString:()=>{const R=Math.min(Wy(C),mp),L=Xy(F=>C.next(R*F).value,R,30);return R+"ms "+L}};return C}function Nx({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:f,restDelta:h=.5,restSpeed:p}){const v=n[0],m={done:!1,value:v},x=E=>u!==void 0&&E<u||f!==void 0&&E>f,M=E=>u===void 0?f:f===void 0||Math.abs(u-E)<Math.abs(f-E)?u:f;let T=t*e;const S=v+T,y=c===void 0?S:c(S);y!==S&&(T=y-v);const P=E=>-T*Math.exp(-E/i),U=E=>y+P(E),C=E=>{const N=P(E),B=U(E);m.done=Math.abs(N)<=h,m.value=m.done?y:B};let R,L;const F=E=>{x(m.value)&&(R=E,L=bS({keyframes:[m.value,M(m.value)],velocity:TS(U,E,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:E=>{let N=!1;return!L&&R===void 0&&(N=!0,C(E),F(E)),R!==void 0&&E>=R?L.next(E-R):(!N&&C(E),m)}}}const s3=_l(.42,0,1,1),o3=_l(0,0,.58,1),AS=_l(.42,0,.58,1),a3=n=>Array.isArray(n)&&typeof n[0]!="number",l3={linear:fi,easeIn:s3,easeInOut:AS,easeOut:o3,circIn:_m,circInOut:aS,circOut:oS,backIn:xm,backInOut:rS,backOut:iS,anticipate:sS},Ix=n=>{if(hm(n)){Ey(n.length===4);const[e,t,i,o]=n;return _l(e,t,i,o)}else if(typeof n=="string")return l3[n];return n};function c3(n,e,t){const i=[],o=t||ES,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const f=Array.isArray(e)?e[c]||fi:e;u=yl(f,u)}i.push(u)}return i}function CS(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(Ey(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=c3(e,i,o),f=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(f>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const m=Bo(n[v],n[v+1],p);return u[v](m)};return t?p=>h(Er(n[0],n[a-1],p)):h}function u3(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=Bo(0,e,i);n.push(nn(t,1,o))}}function f3(n){const e=[0];return u3(e,n.length-1),e}function d3(n,e){return n.map(t=>t*e)}function h3(n,e){return n.map(()=>e||AS).splice(0,n.length-1)}function Cu({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=a3(i)?i.map(Ix):Ix(i),a={done:!1,value:e[0]},c=d3(t&&t.length===e.length?t:f3(e),n),u=CS(c,e,{ease:Array.isArray(o)?o:h3(e,o)});return{calculatedDuration:n,next:f=>(a.value=u(f),a.done=f>=n,a)}}const p3=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Ht.update(e,!0),stop:()=>wr(e),now:()=>wn.isProcessing?wn.timestamp:er.now()}},m3={decay:Nx,inertia:Nx,tween:Cu,keyframes:Cu,spring:bS},g3=n=>n/100;class Yu extends MS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:t,motionValue:i,element:o,keyframes:a}=this.options,c=(o==null?void 0:o.KeyframeResolver)||wm,u=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new c(a,u,t,i,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=this.options,u=dm(t)?t:m3[t]||Cu;let f,h;u!==Cu&&typeof e[0]!="number"&&(f=yl(g3,ES(e[0],e[1])),e=[0,100]);const p=u({...this.options,keyframes:e});a==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=Wy(p));const{calculatedDuration:v}=p,m=v+o,x=m*(i+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:v,resolvedDuration:m,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:c,mapPercentToKeyframes:u,keyframes:f,calculatedDuration:h,totalDuration:p,resolvedDuration:v}=i;if(this.startTime===null)return a.next(0);const{delay:m,repeat:x,repeatType:M,repeatDelay:T,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-m*(this.speed>=0?1:-1),P=this.speed>=0?y<0:y>p;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let U=this.currentTime,C=a;if(x){const E=Math.min(this.currentTime,p)/v;let N=Math.floor(E),B=E%1;!B&&E>=1&&(B=1),B===1&&N--,N=Math.min(N,x+1),!!(N%2)&&(M==="reverse"?(B=1-B,T&&(B-=T/v)):M==="mirror"&&(C=c)),U=Er(0,1,B)*v}const R=P?{done:!1,value:f[0]}:C.next(U);u&&(R.value=u(R.value));let{done:L}=R;!P&&h!==null&&(L=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&o!==void 0&&(R.value=ju(f,this.options,o)),S&&S(R.value),F&&this.finish(),R}get duration(){const{resolved:e}=this;return e?Sr(e.calculatedDuration):0}get time(){return Sr(this.currentTime)}set time(e){e=yr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Sr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=p3,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function v3(n){return new Yu(n)}const x3=new Set(["opacity","clipPath","filter","transform"]);function _3(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeInOut",times:f}={}){const h={[e]:t};f&&(h.offset=f);const p=Yy(u,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:i,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"})}const y3=Zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ru=10,S3=2e4;function M3(n){return dm(n.type)||n.type==="spring"||!jy(n.ease)}function w3(n,e){const t=new Yu({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const o=[];let a=0;for(;!i.done&&a<S3;)i=t.sample(a),o.push(i.value),a+=Ru;return{times:void 0,keyframes:o,duration:a-Ru,ease:"linear"}}const RS={anticipate:sS,backInOut:rS,circInOut:aS};function E3(n){return n in RS}class Ux extends MS{constructor(e){super(e);const{name:t,motionValue:i,element:o,keyframes:a}=this.options;this.resolver=new SS(a,(c,u)=>this.onKeyframesResolved(c,u),t,i,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:i=300,times:o,ease:a,type:c,motionValue:u,name:f,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof a=="string"&&bu()&&E3(a)&&(a=RS[a]),M3(this.options)){const{onComplete:v,onUpdate:m,motionValue:x,element:M,...T}=this.options,S=w3(e,T);e=S.keyframes,e.length===1&&(e[1]=e[0]),i=S.duration,o=S.times,a=S.ease,c="keyframes"}const p=_3(u.owner.current,f,e,{...this.options,duration:i,times:o,ease:a});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(_x(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:v}=this.options;u.set(ju(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:c,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Sr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Sr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=yr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return fi;const{animation:i}=t;_x(i,e)}return fi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:o,type:a,ease:c,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:v,element:m,...x}=this.options,M=new Yu({...x,keyframes:i,duration:o,type:a,ease:c,times:u,isGenerator:!0}),T=yr(this.time);h.setWithVelocity(M.sample(T-Ru).value,M.sample(T).value,Ru)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:o,repeatType:a,damping:c,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return y3()&&i&&x3.has(i)&&!f&&!h&&!o&&a!=="mirror"&&c!==0&&u!=="inertia"}}const T3={type:"spring",stiffness:500,damping:25,restSpeed:10},b3=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),A3={type:"keyframes",duration:.8},C3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R3=(n,{keyframes:e})=>e.length>2?A3:zs.has(n)?n.startsWith("scale")?b3(e[1]):T3:C3;function P3({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:f,elapsed:h,...p}){return!!Object.keys(p).length}const Tm=(n,e,t,i={},o,a)=>c=>{const u=fm(i,n)||{},f=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-yr(f);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:m=>{e.set(m),u.onUpdate&&u.onUpdate(m)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};P3(u)||(p={...p,...R3(n,p)}),p.duration&&(p.duration=yr(p.duration)),p.repeatDelay&&(p.repeatDelay=yr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(v=!0)),v&&!a&&e.get()!==void 0){const m=ju(p.keyframes,u);if(m!==void 0)return Ht.update(()=>{p.onUpdate(m),p.onComplete()}),new $P([])}return!a&&Ux.supports(p)?new Ux(p):new Yu(p)};function L3({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function PS(n,e,{delay:t=0,transitionOverride:i,type:o}={}){var a;let{transition:c=n.getDefaultTransition(),transitionEnd:u,...f}=e;i&&(c=i);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const v in f){const m=n.getValue(v,(a=n.latestValues[v])!==null&&a!==void 0?a:null),x=f[v];if(x===void 0||p&&L3(p,v))continue;const M={delay:t,...fm(c||{},v)};let T=!1;if(window.MotionHandoffAnimation){const y=Jy(n);if(y){const P=window.MotionHandoffAnimation(y,v,Ht);P!==null&&(M.startTime=P,T=!0)}}vp(n,v),m.start(Tm(v,m,x,n.shouldReduceMotion&&Zy.has(v)?{type:!1}:M,n,T));const S=m.animation;S&&h.push(S)}return u&&Promise.all(h).then(()=>{Ht.update(()=>{u&&c2(n,u)})}),h}function Ep(n,e,t={}){var i;const o=Xu(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const c=o?()=>Promise.all(PS(n,o,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:m}=a;return D3(n,e,p+h,v,m,t)}:()=>Promise.resolve(),{when:f}=a;if(f){const[h,p]=f==="beforeChildren"?[c,u]:[u,c];return h().then(()=>p())}else return Promise.all([c(),u(t.delay)])}function D3(n,e,t=0,i=0,o=1,a){const c=[],u=(n.variantChildren.size-1)*i,f=o===1?(h=0)=>h*i:(h=0)=>u-h*i;return Array.from(n.variantChildren).sort(N3).forEach((h,p)=>{h.notify("AnimationStart",e),c.push(Ep(h,e,{...a,delay:t+f(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function N3(n,e){return n.sortNodePosition(e)}function I3(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>Ep(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=Ep(n,e,t);else{const o=typeof e=="function"?Xu(n,e,t.custom):e;i=Promise.all(PS(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const U3=Jp.length;function LS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?LS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<U3;t++){const i=Jp[t],o=n.props[i];(ll(o)||o===!1)&&(e[i]=o)}return e}const F3=[...Qp].reverse(),O3=Qp.length;function k3(n){return e=>Promise.all(e.map(({animation:t,options:i})=>I3(n,t,i)))}function B3(n){let e=k3(n),t=Fx(),i=!0;const o=f=>(h,p)=>{var v;const m=Xu(n,p,f==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(m){const{transition:x,transitionEnd:M,...T}=m;h={...h,...T,...M}}return h};function a(f){e=f(n)}function c(f){const{props:h}=n,p=LS(n.parent)||{},v=[],m=new Set;let x={},M=1/0;for(let S=0;S<O3;S++){const y=F3[S],P=t[y],U=h[y]!==void 0?h[y]:p[y],C=ll(U),R=y===f?P.isActive:null;R===!1&&(M=S);let L=U===p[y]&&U!==h[y]&&C;if(L&&i&&n.manuallyAnimateOnMount&&(L=!1),P.protectedKeys={...x},!P.isActive&&R===null||!U&&!P.prevProp||Gu(U)||typeof U=="boolean")continue;const F=z3(P.prevProp,U);let E=F||y===f&&P.isActive&&!L&&C||S>M&&C,N=!1;const B=Array.isArray(U)?U:[U];let H=B.reduce(o(y),{});R===!1&&(H={});const{prevResolvedValues:j={}}=P,te={...j,...H},V=J=>{E=!0,m.has(J)&&(N=!0,m.delete(J)),P.needsAnimating[J]=!0;const q=n.getValue(J);q&&(q.liveStyle=!1)};for(const J in te){const q=H[J],K=j[J];if(x.hasOwnProperty(J))continue;let Q=!1;pp(q)&&pp(K)?Q=!Gy(q,K):Q=q!==K,Q?q!=null?V(J):m.add(J):q!==void 0&&m.has(J)?V(J):P.protectedKeys[J]=!0}P.prevProp=U,P.prevResolvedValues=H,P.isActive&&(x={...x,...H}),i&&n.blockInitialAnimation&&(E=!1),E&&(!(L&&F)||N)&&v.push(...B.map(J=>({animation:J,options:{type:y}})))}if(m.size){const S={};m.forEach(y=>{const P=n.getBaseTarget(y),U=n.getValue(y);U&&(U.liveStyle=!0),S[y]=P??null}),v.push({animation:S})}let T=!!v.length;return i&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),i=!1,T?e(v):Promise.resolve()}function u(f,h){var p;if(t[f].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(m=>{var x;return(x=m.animationState)===null||x===void 0?void 0:x.setActive(f,h)}),t[f].isActive=h;const v=c(f);for(const m in t)t[m].protectedKeys={};return v}return{animateChanges:c,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=Fx(),i=!0}}}function z3(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Gy(e,n):!1}function Cs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fx(){return{animate:Cs(!0),whileInView:Cs(),whileHover:Cs(),whileTap:Cs(),whileDrag:Cs(),whileFocus:Cs(),exit:Cs()}}class ss{constructor(e){this.isMounted=!1,this.node=e}update(){}}class V3 extends ss{constructor(e){super(e),e.animationState||(e.animationState=B3(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Gu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let H3=0;class G3 extends ss{constructor(){super(...arguments),this.id=H3++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const W3={animation:{Feature:V3},exit:{Feature:G3}};function fl(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function Sl(n){return{point:{x:n.pageX,y:n.pageY}}}const X3=n=>e=>pm(e)&&n(e,Sl(e));function Ja(n,e,t,i){return fl(n,e,X3(t),i)}const Ox=(n,e)=>Math.abs(n-e);function j3(n,e){const t=Ox(n.x,e.x),i=Ox(n.y,e.y);return Math.sqrt(t**2+i**2)}class DS{constructor(e,t,{transformPagePoint:i,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=_h(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,x=j3(v.offset,{x:0,y:0})>=3;if(!m&&!x)return;const{point:M}=v,{timestamp:T}=wn;this.history.push({...M,timestamp:T});const{onStart:S,onMove:y}=this.handlers;m||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,v)},this.handlePointerMove=(v,m)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=xh(m,this.transformPagePoint),Ht.update(this.updatePoint,!0)},this.handlePointerUp=(v,m)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=_h(v.type==="pointercancel"?this.lastMoveEventInfo:xh(m,this.transformPagePoint),this.history);this.startEvent&&x&&x(v,S),M&&M(v,S)},!pm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.contextWindow=o||window;const c=Sl(e),u=xh(c,this.transformPagePoint),{point:f}=u,{timestamp:h}=wn;this.history=[{...f,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,_h(u,this.history)),this.removeListeners=yl(Ja(this.contextWindow,"pointermove",this.handlePointerMove),Ja(this.contextWindow,"pointerup",this.handlePointerUp),Ja(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),wr(this.updatePoint)}}function xh(n,e){return e?{point:e(n.point)}:n}function kx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function _h({point:n},e){return{point:n,delta:kx(n,NS(e)),offset:kx(n,Y3(e)),velocity:q3(e,.1)}}function Y3(n){return n[0]}function NS(n){return n[n.length-1]}function q3(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=NS(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>yr(e)));)t--;if(!i)return{x:0,y:0};const a=Sr(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const IS=1e-4,$3=1-IS,K3=1+IS,US=.01,Z3=0-US,Q3=0+US;function di(n){return n.max-n.min}function J3(n,e,t){return Math.abs(n-e)<=t}function Bx(n,e,t,i=.5){n.origin=i,n.originPoint=nn(e.min,e.max,n.origin),n.scale=di(t)/di(e),n.translate=nn(t.min,t.max,n.origin)-n.originPoint,(n.scale>=$3&&n.scale<=K3||isNaN(n.scale))&&(n.scale=1),(n.translate>=Z3&&n.translate<=Q3||isNaN(n.translate))&&(n.translate=0)}function el(n,e,t,i){Bx(n.x,e.x,t.x,i?i.originX:void 0),Bx(n.y,e.y,t.y,i?i.originY:void 0)}function zx(n,e,t){n.min=t.min+e.min,n.max=n.min+di(e)}function eL(n,e,t){zx(n.x,e.x,t.x),zx(n.y,e.y,t.y)}function Vx(n,e,t){n.min=e.min-t.min,n.max=n.min+di(e)}function tl(n,e,t){Vx(n.x,e.x,t.x),Vx(n.y,e.y,t.y)}function tL(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?nn(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?nn(t,n,i.max):Math.min(n,t)),n}function Hx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function nL(n,{top:e,left:t,bottom:i,right:o}){return{x:Hx(n.x,t,o),y:Hx(n.y,e,i)}}function Gx(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function iL(n,e){return{x:Gx(n.x,e.x),y:Gx(n.y,e.y)}}function rL(n,e){let t=.5;const i=di(n),o=di(e);return o>i?t=Bo(e.min,e.max-i,n.min):i>o&&(t=Bo(n.min,n.max-o,e.min)),Er(0,1,t)}function sL(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Tp=.35;function oL(n=Tp){return n===!1?n=0:n===!0&&(n=Tp),{x:Wx(n,"left","right"),y:Wx(n,"top","bottom")}}function Wx(n,e,t){return{min:Xx(n,e),max:Xx(n,t)}}function Xx(n,e){return typeof n=="number"?n:n[e]||0}const jx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Lo=()=>({x:jx(),y:jx()}),Yx=()=>({min:0,max:0}),un=()=>({x:Yx(),y:Yx()});function wi(n){return[n("x"),n("y")]}function FS({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function aL({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function lL(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function yh(n){return n===void 0||n===1}function bp({scale:n,scaleX:e,scaleY:t}){return!yh(n)||!yh(e)||!yh(t)}function Rs(n){return bp(n)||OS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function OS(n){return qx(n.x)||qx(n.y)}function qx(n){return n&&n!=="0%"}function Pu(n,e,t){const i=n-t,o=e*i;return t+o}function $x(n,e,t,i,o){return o!==void 0&&(n=Pu(n,o,i)),Pu(n,t,i)+e}function Ap(n,e=0,t=1,i,o){n.min=$x(n.min,e,t,i,o),n.max=$x(n.max,e,t,i,o)}function kS(n,{x:e,y:t}){Ap(n.x,e.translate,e.scale,e.originPoint),Ap(n.y,t.translate,t.scale,t.originPoint)}const Kx=.999999999999,Zx=1.0000000000001;function cL(n,e,t,i=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:f}=a.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&No(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,kS(n,c)),i&&Rs(a.latestValues)&&No(n,a.latestValues))}e.x<Zx&&e.x>Kx&&(e.x=1),e.y<Zx&&e.y>Kx&&(e.y=1)}function Do(n,e){n.min=n.min+e,n.max=n.max+e}function Qx(n,e,t,i,o=.5){const a=nn(n.min,n.max,o);Ap(n,e,t,a,i)}function No(n,e){Qx(n.x,e.x,e.scaleX,e.scale,e.originX),Qx(n.y,e.y,e.scaleY,e.scale,e.originY)}function BS(n,e){return FS(lL(n.getBoundingClientRect(),e))}function uL(n,e,t){const i=BS(n,t),{scroll:o}=e;return o&&(Do(i.x,o.offset.x),Do(i.y,o.offset.y)),i}const zS=({current:n})=>n?n.ownerDocument.defaultView:null,fL=new WeakMap;class dL{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=un(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Sl(p).point)},a=(p,v)=>{const{drag:m,dragPropagation:x,onDragStart:M}=this.getProps();if(m&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=r2(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wi(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Ji.test(y)){const{projection:P}=this.visualElement;if(P&&P.layout){const U=P.layout.layoutBox[S];U&&(y=di(U)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&Ht.postRender(()=>M(p,v)),vp(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},c=(p,v)=>{const{dragPropagation:m,dragDirectionLock:x,onDirectionLock:M,onDrag:T}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:S}=v;if(x&&this.currentDirection===null){this.currentDirection=hL(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),T&&T(p,v)},u=(p,v)=>this.stop(p,v),f=()=>wi(p=>{var v;return this.getAnimationState(p)==="paused"&&((v=this.getAxisMotionValue(p).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new DS(e,{onSessionStart:o,onStart:a,onMove:c,onSessionEnd:u,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:zS(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Ht.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!nu(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=tL(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Ro(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=nL(o.layoutBox,t):this.constraints=!1,this.elastic=oL(i),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&wi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=sL(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ro(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=uL(i,o.root,this.visualElement.getTransformPagePoint());let c=iL(o.layout.layoutBox,a);if(t){const u=t(aL(c));this.hasMutatedConstraints=!!u,u&&(c=FS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},h=wi(p=>{if(!nu(p,t,this.currentDirection))return;let v=f&&f[p]||{};c&&(v={min:0,max:0});const m=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:i?e[p]:0,bounceStiffness:m,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return vp(this.visualElement,e),i.start(Tm(e,i,0,t,this.visualElement,!1))}stopAnimation(){wi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){wi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),o=i[t];return o||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){wi(t=>{const{drag:i}=this.getProps();if(!nu(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];a.set(e[t]-nn(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Ro(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};wi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const f=u.get();o[c]=rL({min:f,max:f},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),wi(c=>{if(!nu(c,e,null))return;const u=this.getAxisMotionValue(c),{min:f,max:h}=this.constraints[c];u.set(nn(f,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;fL.set(this.visualElement,this);const e=this.visualElement.current,t=Ja(e,"pointerdown",f=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();Ro(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ht.read(i);const c=fl(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(wi(p=>{const v=this.getAxisMotionValue(p);v&&(this.originPoint[p]+=f[p].translate,v.set(v.get()+f[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Tp,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function nu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function hL(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class pL extends ss{constructor(e){super(e),this.removeGroupControls=fi,this.removeListeners=fi,this.controls=new dL(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fi}unmount(){this.removeGroupControls(),this.removeListeners()}}const Jx=n=>(e,t)=>{n&&Ht.postRender(()=>n(e,t))};class mL extends ss{constructor(){super(...arguments),this.removePointerDownListener=fi}onPointerDown(e){this.session=new DS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:zS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Jx(e),onStart:Jx(t),onMove:i,onEnd:(a,c)=>{delete this.session,o&&Ht.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Ja(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const pu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function e_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ka={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(at.test(n))n=parseFloat(n);else return n;const t=e_(n,e.target.x),i=e_(n,e.target.y);return`${t}% ${i}%`}},gL={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=rs.parse(n);if(o.length>5)return i;const a=rs.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,f=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=f;const h=nn(u,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};class vL extends xe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;OP(xL),a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),pu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,c=i.projection;return c&&(c.isPresent=a,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Ht.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),tm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function VS(n){const[e,t]=wy(),i=xe.useContext($p);return O.jsx(vL,{...n,layoutGroup:i,switchLayoutGroup:xe.useContext(Py),isPresent:e,safeToRemove:t})}const xL={borderRadius:{...ka,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ka,borderTopRightRadius:ka,borderBottomLeftRadius:ka,borderBottomRightRadius:ka,boxShadow:gL};function _L(n,e,t){const i=En(n)?n:Vo(n);return i.start(Tm("",i,e,t)),i.animation}function yL(n){return n instanceof SVGElement&&n.tagName!=="svg"}const SL=(n,e)=>n.depth-e.depth;class ML{constructor(){this.children=[],this.isDirty=!1}add(e){mm(this.children,e),this.isDirty=!0}remove(e){gm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(SL),this.isDirty=!1,this.children.forEach(e)}}function wL(n,e){const t=er.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(wr(i),n(a-e))};return Ht.read(i,!0),()=>wr(i)}const HS=["TopLeft","TopRight","BottomLeft","BottomRight"],EL=HS.length,t_=n=>typeof n=="string"?parseFloat(n):n,n_=n=>typeof n=="number"||at.test(n);function TL(n,e,t,i,o,a){o?(n.opacity=nn(0,t.opacity!==void 0?t.opacity:1,bL(i)),n.opacityExit=nn(e.opacity!==void 0?e.opacity:1,0,AL(i))):a&&(n.opacity=nn(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let c=0;c<EL;c++){const u=`border${HS[c]}Radius`;let f=i_(e,u),h=i_(t,u);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||n_(f)===n_(h)?(n[u]=Math.max(nn(t_(f),t_(h),i),0),(Ji.test(h)||Ji.test(f))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=nn(e.rotate||0,t.rotate||0,i))}function i_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const bL=GS(0,.5,oS),AL=GS(.5,.95,fi);function GS(n,e,t){return i=>i<n?0:i>e?1:t(Bo(n,e,i))}function r_(n,e){n.min=e.min,n.max=e.max}function Mi(n,e){r_(n.x,e.x),r_(n.y,e.y)}function s_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function o_(n,e,t,i,o){return n-=e,n=Pu(n,1/t,i),o!==void 0&&(n=Pu(n,1/o,i)),n}function CL(n,e=0,t=1,i=.5,o,a=n,c=n){if(Ji.test(e)&&(e=parseFloat(e),e=nn(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=nn(a.min,a.max,i);n===a&&(u-=e),n.min=o_(n.min,e,t,u,o),n.max=o_(n.max,e,t,u,o)}function a_(n,e,[t,i,o],a,c){CL(n,e[t],e[i],e[o],e.scale,a,c)}const RL=["x","scaleX","originX"],PL=["y","scaleY","originY"];function l_(n,e,t,i){a_(n.x,e,RL,t?t.x:void 0,i?i.x:void 0),a_(n.y,e,PL,t?t.y:void 0,i?i.y:void 0)}function c_(n){return n.translate===0&&n.scale===1}function WS(n){return c_(n.x)&&c_(n.y)}function u_(n,e){return n.min===e.min&&n.max===e.max}function LL(n,e){return u_(n.x,e.x)&&u_(n.y,e.y)}function f_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function XS(n,e){return f_(n.x,e.x)&&f_(n.y,e.y)}function d_(n){return di(n.x)/di(n.y)}function h_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class DL{constructor(){this.members=[]}add(e){mm(this.members,e),e.scheduleRender()}remove(e){if(gm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let i;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function NL(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:v,rotateY:m,skewX:x,skewY:M}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),v&&(i+=`rotateX(${v}deg) `),m&&(i+=`rotateY(${m}deg) `),x&&(i+=`skewX(${x}deg) `),M&&(i+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,f=n.y.scale*e.y;return(u!==1||f!==1)&&(i+=`scale(${u}, ${f})`),i||"none"}const Ps={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Wa=typeof window<"u"&&window.MotionDebug!==void 0,Sh=["","X","Y","Z"],IL={visibility:"hidden"},p_=1e3;let UL=0;function Mh(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function jS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Jy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ht,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&jS(i)}function YS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=UL++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wa&&(Ps.totalNodes=Ps.resolvedTargetDeltas=Ps.recalculatedProjection=0),this.nodes.forEach(kL),this.nodes.forEach(GL),this.nodes.forEach(WL),this.nodes.forEach(BL),Wa&&window.MotionDebug.record(Ps)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new ML)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new vm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const f=this.eventHandlers.get(c);f&&f.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=yL(c),this.instance=c;const{layoutId:f,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||f)&&(this.isLayoutDirty=!0),n){let v;const m=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=wL(m,250),pu.hasAnimatedSinceResize&&(pu.hasAnimatedSinceResize=!1,this.nodes.forEach(g_))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeTargetChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||$L,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=p.getProps(),P=!this.targetLayout||!XS(this.targetLayout,M)||x,U=!m&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||U||m&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,U);const C={...fm(T,"layout"),onPlay:S,onComplete:y};(p.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else m||g_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,wr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(XL),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(m_);return}this.isUpdating||this.nodes.forEach(VL),this.isUpdating=!1,this.nodes.forEach(HL),this.nodes.forEach(FL),this.nodes.forEach(OL),this.clearAllSnapshots();const u=er.now();wn.delta=Er(0,1e3/60,u-wn.timestamp),wn.timestamp=u,wn.isProcessing=!0,dh.update.process(wn),dh.preRender.process(wn),dh.render.process(wn),wn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,tm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(zL),this.sharedNodes.forEach(jL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=un(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!WS(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&(u||Rs(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return c&&(f=this.removeTransform(f)),KL(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:u}=this.options;if(!u)return un();const f=u.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(ZL))){const{scroll:p}=this.root;p&&(Do(f.x,p.offset.x),Do(f.y,p.offset.y))}return f}removeElementScroll(c){var u;const f=un();if(Mi(f,c),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return f;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:m}=p;p!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&Mi(f,c),Do(f.x,v.offset.x),Do(f.y,v.offset.y))}return f}applyTransform(c,u=!1){const f=un();Mi(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&No(f,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Rs(p.latestValues)&&No(f,p.latestValues)}return Rs(this.latestValues)&&No(f,this.latestValues),f}removeTransform(c){const u=un();Mi(u,c);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!Rs(h.latestValues))continue;bp(h.latestValues)&&h.updateSnapshot();const p=un(),v=h.measurePageBox();Mi(p,v),l_(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Rs(this.latestValues)&&l_(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var u;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=wn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=un(),this.relativeTargetOrigin=un(),tl(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=un(),this.targetWithTransforms=un()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Mi(this.target,this.layout.layoutBox),kS(this.target,this.targetDelta)):Mi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=un(),this.relativeTargetOrigin=un(),tl(this.relativeTargetOrigin,this.target,x.target),Mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wa&&Ps.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||bp(this.parent.latestValues)||OS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===wn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;Mi(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,x=this.treeScale.y;cL(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=un());const{target:M}=u;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(s_(this.prevProjectionDelta.x,this.projectionDelta.x),s_(this.prevProjectionDelta.y,this.projectionDelta.y)),el(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==x||!h_(this.projectionDelta.x,this.prevProjectionDelta.x)||!h_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Wa&&Ps.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Lo(),this.projectionDelta=Lo(),this.projectionDeltaWithTransform=Lo()}setAnimationOrigin(c,u=!1){const f=this.snapshot,h=f?f.latestValues:{},p={...this.latestValues},v=Lo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const m=un(),x=f?f.source:void 0,M=this.layout?this.layout.source:void 0,T=x!==M,S=this.getStack(),y=!S||S.members.length<=1,P=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(qL));this.animationProgress=0;let U;this.mixTargetDelta=C=>{const R=C/1e3;v_(v.x,c.x,R),v_(v.y,c.y,R),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(tl(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),YL(this.relativeTarget,this.relativeTargetOrigin,m,R),U&&LL(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=un()),Mi(U,this.relativeTarget)),T&&(this.animationValues=p,TL(p,h,this.latestValues,R,P,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(wr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ht.update(()=>{pu.hasAnimatedSinceResize=!0,this.currentAnimation=_L(0,p_,{...c,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(p_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:f,layout:h,latestValues:p}=c;if(!(!u||!f||!h)){if(this!==c&&this.layout&&h&&qS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||un();const v=di(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+v;const m=di(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+m}Mi(u,f),No(u,p),el(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new DL),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const h={};f.z&&Mh("z",c,h,this.animationValues);for(let p=0;p<Sh.length;p++)Mh(`rotate${Sh[p]}`,c,h,this.animationValues),Mh(`skew${Sh[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){var u,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return IL;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=du(c==null?void 0:c.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=du(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Rs(this.latestValues)&&(T.transform=p?p({},""):"none",this.hasProjected=!1),T}const m=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=NL(this.projectionDeltaWithTransform,this.treeScale,m),p&&(h.transform=p(m,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(f=(u=m.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:h.opacity=v===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const T in Tu){if(m[T]===void 0)continue;const{correct:S,applyTo:y}=Tu[T],P=h.transform==="none"?m[T]:S(m[T],v);if(y){const U=y.length;for(let C=0;C<U;C++)h[y[C]]=P}else h[T]=P}return this.options.layoutId&&(h.pointerEvents=v===this?du(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(m_),this.root.sharedNodes.clear()}}}function FL(n){n.updateLayout()}function OL(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=t.source!==n.layout.source;a==="size"?wi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],x=di(m);m.min=i[v].min,m.max=m.min+x}):qS(a,t.layoutBox,i)&&wi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],x=di(i[v]);m.max=m.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+x)});const u=Lo();el(u,i,t.layoutBox);const f=Lo();c?el(f,n.applyTransform(o,!0),t.measuredBox):el(f,i,t.layoutBox);const h=!WS(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:x}=v;if(m&&x){const M=un();tl(M,t.layoutBox,m.layoutBox);const T=un();tl(T,i,x.layoutBox),XS(M,T)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function kL(n){Wa&&Ps.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function BL(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function zL(n){n.clearSnapshot()}function m_(n){n.clearMeasurements()}function VL(n){n.isLayoutDirty=!1}function HL(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function g_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function GL(n){n.resolveTargetDelta()}function WL(n){n.calcProjection()}function XL(n){n.resetSkewAndRotation()}function jL(n){n.removeLeadSnapshot()}function v_(n,e,t){n.translate=nn(e.translate,0,t),n.scale=nn(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function x_(n,e,t,i){n.min=nn(e.min,t.min,i),n.max=nn(e.max,t.max,i)}function YL(n,e,t,i){x_(n.x,e.x,t.x,i),x_(n.y,e.y,t.y,i)}function qL(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const $L={duration:.45,ease:[.4,0,.1,1]},__=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),y_=__("applewebkit/")&&!__("chrome/")?Math.round:fi;function S_(n){n.min=y_(n.min),n.max=y_(n.max)}function KL(n){S_(n.x),S_(n.y)}function qS(n,e,t){return n==="position"||n==="preserve-aspect"&&!J3(d_(e),d_(t),.2)}function ZL(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const QL=YS({attachResizeListener:(n,e)=>fl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wh={current:void 0},$S=YS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!wh.current){const n=new QL({});n.mount(window),n.setOptions({layoutScroll:!0}),wh.current=n}return wh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),JL={pan:{Feature:mL},drag:{Feature:pL,ProjectionNode:$S,MeasureLayout:VS}};function M_(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&Ht.postRender(()=>a(e,Sl(e)))}class eD extends ss{mount(){const{current:e}=this.node;e&&(this.unmount=JP(e,t=>(M_(this.node,t,"Start"),i=>M_(this.node,i,"End"))))}unmount(){}}class tD extends ss{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=yl(fl(this.node.current,"focus",()=>this.onFocus()),fl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function w_(n,e,t){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&Ht.postRender(()=>a(e,Sl(e)))}class nD extends ss{mount(){const{current:e}=this.node;e&&(this.unmount=i2(e,t=>(w_(this.node,t,"Start"),(i,{success:o})=>w_(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Cp=new WeakMap,Eh=new WeakMap,iD=n=>{const e=Cp.get(n.target);e&&e(n)},rD=n=>{n.forEach(iD)};function sD({root:n,...e}){const t=n||document;Eh.has(t)||Eh.set(t,{});const i=Eh.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(rD,{root:n,...e})),i[o]}function oD(n,e,t){const i=sD(e);return Cp.set(n,t),i.observe(n),()=>{Cp.delete(n),i.unobserve(n)}}const aD={some:0,all:1};class lD extends ss{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:aD[o]},u=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:v}=this.node.getProps(),m=h?p:v;m&&m(f)};return oD(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(cD(e,t))&&this.startObserver()}unmount(){}}function cD({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const uD={inView:{Feature:lD},tap:{Feature:nD},focus:{Feature:tD},hover:{Feature:eD}},fD={layout:{ProjectionNode:$S,MeasureLayout:VS}},Rp={current:null},KS={current:!1};function dD(){if(KS.current=!0,!!Kp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Rp.current=n.matches;n.addListener(e),e()}else Rp.current=!1}const hD=[...yS,Bn,rs],pD=n=>hD.find(_S(n)),E_=new WeakMap;function mD(n,e,t){for(const i in e){const o=e[i],a=t[i];if(En(o))n.addValue(i,o);else if(En(a))n.addValue(i,Vo(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,Vo(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const T_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class gD{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=er.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Ht.render(this.render,!1,!0))};const{latestValues:f,renderState:h,onUpdate:p}=c;this.onUpdate=p,this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=Wu(t),this.isVariantNode=Cy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in m){const M=m[x];f[x]!==void 0&&En(M)&&M.set(f[x],!1)}}mount(e){this.current=e,E_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),KS.current||dD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Rp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){E_.delete(this.current),this.projection&&this.projection.unmount(),wr(this.notifyUpdate),wr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=zs.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ht.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in zo){const t=zo[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):un()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<T_.length;i++){const o=T_[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=mD(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Vo(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(vS(o)||lS(o))?o=parseFloat(o):!pD(o)&&rs.test(t)&&(o=pS(e,t)),this.setBaseTarget(e,En(o)?o.get():o)),En(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=im(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!En(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new vm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class ZS extends gD{constructor(){super(...arguments),this.KeyframeResolver=SS}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;En(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function vD(n){return window.getComputedStyle(n)}class xD extends ZS{constructor(){super(...arguments),this.type="html",this.renderInstance=Oy}readValueFromInstance(e,t){if(zs.has(t)){const i=Mm(t);return i&&i.default||0}else{const i=vD(e),o=(Iy(t)?i.getPropertyValue(t):i[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return BS(e,t)}build(e,t,i){om(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return um(e,t,i)}}class _D extends ZS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=un}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zs.has(t)){const i=Mm(t);return i&&i.default||0}return t=ky.has(t)?t:em(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return Vy(e,t,i)}build(e,t,i){am(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,o){By(e,t,i,o)}mount(e){this.isSVGTag=cm(e.tagName),super.mount(e)}}const yD=(n,e)=>nm(n)?new _D(e):new xD(e,{allowProjection:n!==xe.Fragment}),SD=jP({...W3,...uD,...JL,...fD},yD),Bt=aP(SD);function Qr(n){const e=gl(()=>Vo(n)),{isStatic:t}=xe.useContext(vl);if(t){const[,i]=xe.useState(n);xe.useEffect(()=>e.on("change",i),[])}return e}function QS(n,e){const t=Qr(e()),i=()=>t.set(e());return i(),Vu(()=>{const o=()=>Ht.preRender(i,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),wr(i)}}),t}function b_(n){return typeof n=="number"?n:parseFloat(n)}function iu(n,e={}){const{isStatic:t}=xe.useContext(vl),i=xe.useRef(null),o=Qr(En(n)?b_(n.get()):n),a=xe.useRef(o.get()),c=xe.useRef(()=>{}),u=()=>{const h=i.current;h&&h.time===0&&h.sample(wn.delta),f(),i.current=v3({keyframes:[o.get(),a.current],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:c.current})},f=()=>{i.current&&i.current.stop()};return xe.useInsertionEffect(()=>o.attach((h,p)=>t?p(h):(a.current=h,c.current=p,Ht.update(u),o.get()),f),[JSON.stringify(e)]),Vu(()=>{if(En(n))return n.on("change",h=>o.set(b_(h)))},[o]),o}const MD=n=>n&&typeof n=="object"&&n.mix,wD=n=>MD(n)?n.mix:void 0;function ED(...n){const e=!Array.isArray(n[0]),t=e?0:-1,i=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=CS(o,a,{mixer:wD(a[0]),...c});return e?u(i):u}function TD(n){Za.current=[],n();const e=QS(Za.current,n);return Za.current=void 0,e}function ru(n,e,t,i){if(typeof n=="function")return TD(n);const o=typeof e=="function"?e:ED(e,t,i);return Array.isArray(n)?A_(n,o):A_([n],([a])=>o(a))}function A_(n,e){const t=gl(()=>[]);return QS(n,()=>{t.length=0;const i=n.length;for(let o=0;o<i;o++)t[o]=n[o].get();return e(t)})}function bD(){const[n,e]=xe.useState(!1),[t,i]=xe.useState(!1),[o,a]=xe.useState(!1),c=Qr(-100),u=Qr(-100),f=iu(c,{stiffness:750,damping:38,mass:.18}),h=iu(u,{stiffness:750,damping:38,mass:.18}),p=Qr(0),v=Qr(0),m=iu(p,{stiffness:520,damping:31,mass:.22}),x=iu(v,{stiffness:520,damping:31,mass:.22}),M=ru([f,m],([C,R])=>Number(C)+Number(R)),T=ru([h,x],([C,R])=>Number(C)+Number(R)),S=Qr(0),y=Qr(0),P=ru(S,[-40,0,40],[-7,0,7]),U=ru(y,[-40,0,40],[5,0,-5]);return xe.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const C='a, button, input, textarea, select, [role="button"]';let R=-100,L=-100;const F=j=>{const te=j.clientX,V=j.clientY;c.set(te),u.set(V);const ne=te-R,he=V-L;S.set(Math.max(-40,Math.min(40,ne))),y.set(Math.max(-40,Math.min(40,he))),R=te,L=V,e(!0);const J=j.target instanceof Element?j.target.closest(C):null;if(J instanceof HTMLElement){const q=J.getBoundingClientRect(),K=q.left+q.width/2,Q=q.top+q.height/2,I=K-te,re=Q-V,ye=Math.sqrt(I*I+re*re),ze=Math.max(90,Math.min(180,Math.max(q.width,q.height)*2));if(ye<ze){const Ue=Math.max(0,1-ye/ze);p.set(I*.18*Ue),v.set(re*.18*Ue)}else p.set(0),v.set(0)}else p.set(0),v.set(0)},E=j=>{const te=j.target instanceof Element?j.target.closest(C):null;i(te instanceof Element)},N=()=>{a(!0)},B=()=>{a(!1)},H=()=>{e(!1),i(!1),a(!1),p.set(0),v.set(0)};return window.addEventListener("mousemove",F),window.addEventListener("mouseover",E),window.addEventListener("mousedown",N),window.addEventListener("mouseup",B),window.addEventListener("mouseleave",H),()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseover",E),window.removeEventListener("mousedown",N),window.removeEventListener("mouseup",B),window.removeEventListener("mouseleave",H)}},[c,u,S,y,p,v]),typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches?null:O.jsxs("div",{className:"pointer-events-none fixed inset-0 z-[9999] overflow-hidden",children:[O.jsx(Bt.div,{className:"absolute left-0 top-0 rounded-full",style:{width:64,height:64,x:M,y:T,translateX:"-50%",translateY:"-50%",rotate:P,skewY:U,backdropFilter:"blur(5px) contrast(160%) brightness(1.2)",WebkitBackdropFilter:"blur(5px) contrast(160%) brightness(1.2)",boxShadow:"inset 0 0 20px rgba(0, 0, 0, 0.95), 0 0 15px rgba(0, 0, 0, 0.5)",background:"rgba(0, 0, 0, 0.15)"},animate:{scale:o?.72:t?1.48:1,opacity:n?1:0},transition:{scale:{type:"spring",stiffness:420,damping:24},opacity:{duration:.15}}}),O.jsx(Bt.div,{className:"absolute left-0 top-0 rounded-full",style:{width:6,height:6,x:c,y:u,translateX:"-50%",translateY:"-50%",background:"rgba(255,255,255,0.95)",boxShadow:"0 0 10px rgba(255,255,255,0.55)"},animate:{scale:o?.55:t?1.35:1,opacity:n?1:0},transition:{scale:{type:"spring",stiffness:500,damping:25},opacity:{duration:.1}}}),O.jsx(Bt.div,{className:"absolute left-0 top-0 rounded-full border border-white/20",style:{width:82,height:82,x:M,y:T,translateX:"-50%",translateY:"-50%"},animate:{scale:t?1:.65,opacity:t&&n?.5:0},transition:{scale:{type:"spring",stiffness:350,damping:22},opacity:{duration:.18}}})]})}var C_="1.3.26";function JS(n,e,t){return Math.max(n,Math.min(e,t))}function AD(n,e,t){return(1-t)*n+t*e}function CD(n,e,t,i){return AD(n,e,1-Math.exp(-t*i))}function RD(n,e){return(n%e+e)%e}var PD=class{constructor(){et(this,"isRunning",!1);et(this,"value",0);et(this,"from",0);et(this,"to",0);et(this,"currentTime",0);et(this,"lerp");et(this,"duration");et(this,"easing");et(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=JS(0,this.currentTime/this.duration,1);e=i>=1;const o=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=CD(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:o,onStart:a,onUpdate:c}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function LD(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var DD=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){et(this,"width",0);et(this,"height",0);et(this,"scrollHeight",0);et(this,"scrollWidth",0);et(this,"debouncedResize");et(this,"wrapperResizeObserver");et(this,"contentResizeObserver");et(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});et(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});et(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=LD(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},eM=class{constructor(){et(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let o=0,a=t.length;o<a;o++)(i=t[o])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const ND=100/6,qr={passive:!1};function R_(n,e){return n===1?ND:n===2?e:1}var ID=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){et(this,"touchStart",{x:0,y:0});et(this,"lastDelta",{x:0,y:0});et(this,"window",{width:0,height:0});et(this,"emitter",new eM);et(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});et(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:o},this.emitter.emit("scroll",{deltaX:i,deltaY:o,event:n})});et(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});et(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const o=R_(i,this.window.width),a=R_(i,this.window.height);e*=o,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});et(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,qr),this.element.addEventListener("touchstart",this.onTouchStart,qr),this.element.addEventListener("touchmove",this.onTouchMove,qr),this.element.addEventListener("touchend",this.onTouchEnd,qr)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,qr),this.element.removeEventListener("touchstart",this.onTouchStart,qr),this.element.removeEventListener("touchmove",this.onTouchMove,qr),this.element.removeEventListener("touchend",this.onTouchEnd,qr)}};const P_=n=>Math.min(1,1.001-2**(-10*n));var UD=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:u,easing:f,lerp:h=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:m=v==="horizontal"?"both":"vertical",touchMultiplier:x=1,wheelMultiplier:M=1,autoResize:T=!0,prevent:S,virtualScroll:y,overscroll:P=!0,autoRaf:U=!1,anchors:C=!1,autoToggle:R=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:F=!1,naiveDimensions:E=F,stopInertiaOnNavigate:N=!1,respectReducedMotion:B=!0}={}){et(this,"_isScrolling",!1);et(this,"_isStopped",!1);et(this,"_isLocked",!1);et(this,"_preventNextNativeScrollEvent",!1);et(this,"_resetVelocityTimeout",null);et(this,"_rafId",null);et(this,"_isDraggingSelection",!1);et(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));et(this,"isTouching");et(this,"isIos");et(this,"time",0);et(this,"userData",{});et(this,"lastVelocity",0);et(this,"velocity",0);et(this,"direction",0);et(this,"options");et(this,"targetScroll");et(this,"animatedScroll");et(this,"animate",new PD);et(this,"emitter",new eM);et(this,"dimensions");et(this,"virtualScroll");et(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});et(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});et(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});et(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(o=>t.host===o.host&&t.pathname===o.pathname&&o.hash);if(i){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(i.hash);this.scrollTo(a,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});et(this,"onPointerDown",n=>{n.button===1&&this.reset()});et(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const o=i.type.includes("touch"),a=i.type.includes("wheel");if(o&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const c=e===0&&t===0;if(this.options.syncTouch&&o&&i.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(c||u)return;let f=i.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const h=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(f.find(M=>{var T,S,y,P,U;return M instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(M))||((T=M.hasAttribute)==null?void 0:T.call(M,"data-lenis-prevent"))||p==="vertical"&&((S=M.hasAttribute)==null?void 0:S.call(M,"data-lenis-prevent-vertical"))||p==="horizontal"&&((y=M.hasAttribute)==null?void 0:y.call(M,"data-lenis-prevent-horizontal"))||o&&((P=M.hasAttribute)==null?void 0:P.call(M,"data-lenis-prevent-touch"))||a&&((U=M.hasAttribute)==null?void 0:U.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let v=t;this.options.gestureOrientation==="both"?v=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const m=o&&this.options.syncTouch,x=o&&i.type==="touchend";x&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...m?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});et(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});et(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=C_,window.lenis||(window.lenis={}),window.lenis.version=C_,v==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof u=="number"&&typeof f!="function"?f=P_:typeof f=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:c,duration:u,easing:f,lerp:h,infinite:p,gestureOrientation:m,orientation:v,touchMultiplier:x,wheelMultiplier:M,autoResize:T,prevent:S,virtualScroll:y,overscroll:P,autoRaf:U,anchors:C,autoToggle:R,allowNestedScroll:L,naiveDimensions:E,stopInertiaOnNavigate:N,respectReducedMotion:B},this.dimensions=new DD(n,e,{autoResize:T}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new ID(t,{touchMultiplier:x,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const o=i[0],a=i[i.length-1],c=40,u=Math.hypot(t.clientX-o.left,t.clientY-o.top)<=c,f=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=c;return u||f}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:o=!0,lerp:a=o?this.options.lerp:void 0,duration:c=o?this.options.duration:void 0,easing:u=o?this.options.easing:void 0,onStart:f,onComplete:h,force:p=!1,userData:v}={}){if(this.prefersReducedMotion&&(o?t=!0:(a=1,c=void 0,u=void 0)),(this.isStopped||this.isLocked)&&!p)return;let m=n,x=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let M=null;if(typeof m=="string"?(M=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),M||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(M=m),M){if(this.options.wrapper!==window){const C=this.rootElement.getBoundingClientRect();x-=this.isHorizontal?C.left:C.top}const T=M.getBoundingClientRect(),S=getComputedStyle(M),y=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),P=getComputedStyle(this.rootElement),U=this.isHorizontal?Number.parseFloat(P.scrollPaddingLeft):Number.parseFloat(P.scrollPaddingTop);m=(this.isHorizontal?T.left:T.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(U)?0:U)}}if(typeof m=="number"){if(m+=x,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const M=m-this.animatedScroll;M>this.limit/2?m-=this.limit:M<-this.limit/2&&(m+=this.limit)}}else m=JS(0,m,this.limit);if(m===this.targetScroll){f==null||f(this),h==null||h(this);return}if(this.userData=v??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=m),typeof c=="number"&&typeof u!="function"?u=P_:typeof u=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,m,{duration:c,easing:u,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(M,T)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),o&&(this.targetScroll=M),T||this.emit(),T&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const o=n._lenis;let a,c,u,f,h,p,v,m,x,M;if(i-(o.time??0)>2e3){o.time=Date.now();const L=window.getComputedStyle(n);if(o.computedStyle=L,a=["auto","overlay","scroll"].includes(L.overflowX),c=["auto","overlay","scroll"].includes(L.overflowY),h=["auto"].includes(L.overscrollBehaviorX),p=["auto"].includes(L.overscrollBehaviorY),o.hasOverflowX=a,o.hasOverflowY=c,!(a||c))return!1;v=n.scrollWidth,m=n.scrollHeight,x=n.clientWidth,M=n.clientHeight,u=v>x,f=m>M,o.isScrollableX=u,o.isScrollableY=f,o.scrollWidth=v,o.scrollHeight=m,o.clientWidth=x,o.clientHeight=M,o.hasOverscrollBehaviorX=h,o.hasOverscrollBehaviorY=p}else u=o.isScrollableX,f=o.isScrollableY,a=o.hasOverflowX,c=o.hasOverflowY,v=o.scrollWidth,m=o.scrollHeight,x=o.clientWidth,M=o.clientHeight,h=o.hasOverscrollBehaviorX,p=o.hasOverscrollBehaviorY;if(!(a&&u||c&&f))return!1;const T=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let S,y,P,U,C,R;if(T==="horizontal")S=Math.round(n.scrollLeft),y=v-x,P=e,U=a,C=u,R=h;else if(T==="vertical")S=Math.round(n.scrollTop),y=m-M,P=t,U=c,C=f,R=p;else return!1;return!R&&(S>=y||S<=0)?!0:(P>0?S<y:S>0)&&U&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?RD(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}},FD=class{constructor(n){et(this,"listeners",[]);this.state=n}set(n){this.state=n;for(const e of this.listeners)e(this.state)}subscribe(n){return this.listeners=[...this.listeners,n],()=>{this.listeners=this.listeners.filter(e=>e!==n)}}get(){return this.state}};const OD=xe.createContext(null),L_=new FD(null),kD=xe.forwardRef(({children:n,root:e=!1,options:t={},autoRaf:i=!0,className:o="",...a},c)=>{const u=xe.useRef(null),f=xe.useRef(null),[h,p]=xe.useState(void 0);xe.useImperativeHandle(c,()=>({wrapper:u.current,content:f.current,lenis:h}),[h]),xe.useEffect(()=>{const M=new UD({...t,...u.current&&f.current&&{wrapper:u.current,content:f.current},autoRaf:(t==null?void 0:t.autoRaf)??i});return p(M),()=>{M.destroy(),p(void 0)}},[i,JSON.stringify({...t,wrapper:null,content:null})]);const v=xe.useRef([]),m=xe.useCallback((M,T)=>{v.current.push({callback:M,priority:T}),v.current.sort((S,y)=>S.priority-y.priority)},[]),x=xe.useCallback(M=>{v.current=v.current.filter(T=>T.callback!==M)},[]);return xe.useEffect(()=>{if(e&&h)return L_.set({lenis:h,addCallback:m,removeCallback:x}),()=>L_.set(null)},[e,h,m,x]),xe.useEffect(()=>{if(!h)return;const M=T=>{for(const{callback:S}of v.current)S(T)};return h.on("scroll",M),()=>{h.off("scroll",M)}},[h]),n?O.jsx(OD.Provider,{value:{lenis:h,addCallback:m,removeCallback:x},children:e&&e!=="asChild"?n:O.jsx("div",{ref:u,className:`${o} ${(h==null?void 0:h.className)??""}`.trim(),...a,children:O.jsx("div",{ref:f,children:n})})}):null});function BD({children:n}){return xe.useEffect(()=>{const e=new Audio("/assets/interstellar.mp3");e.loop=!0,e.volume=.35,e.preload="auto";const t=()=>{e.paused&&e.play().catch(()=>{})};return window.addEventListener("click",t,{once:!0}),window.addEventListener("scroll",t,{once:!0}),()=>{e.pause(),e.currentTime=0,e.src="",window.removeEventListener("click",t),window.removeEventListener("scroll",t)}},[]),O.jsx(kD,{root:!0,options:{lerp:.08,smoothWheel:!0,infinite:!1},children:O.jsx("div",{className:"relative w-full bg-transparent text-white",children:O.jsx("div",{className:"relative z-20 w-full bg-transparent",children:n})})})}var tM={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D_=ts.createContext&&ts.createContext(tM),zD=["attr","size","title"];function VD(n,e){if(n==null)return{};var t,i,o=HD(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function HD(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function Lu(){return Lu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Lu.apply(null,arguments)}function N_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function Du(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?N_(Object(t),!0).forEach(function(i){GD(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function GD(n,e,t){return(e=WD(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function WD(n){var e=XD(n,"string");return typeof e=="symbol"?e:e+""}function XD(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function nM(n){return n&&n.map((e,t)=>ts.createElement(e.tag,Du({key:t},e.attr),nM(e.child)))}function Ln(n){return e=>ts.createElement(jD,Lu({attr:Du({},n.attr)},e),nM(n.child))}function jD(n){var e=t=>{var{attr:i,size:o,title:a}=n,c=VD(n,zD),u=o||t.size||"1em",f;return t.className&&(f=t.className),n.className&&(f=(f?f+" ":"")+n.className),ts.createElement("svg",Lu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:f,style:Du(Du({color:n.color||t.color},t.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&ts.createElement("title",null,a),n.children)};return D_!==void 0?ts.createElement(D_.Consumer,null,t=>e(t)):e(tM)}function bm(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(n)}function iM(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(n)}function YD(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(n)}function rM(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"},child:[]}]})(n)}function I_(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(n)}function sM(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(n)}function oM(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(n)}function qD(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(n)}function $D(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(n)}function aM(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(n)}function lM(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(n)}function Am(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(n)}function KD(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(n)}function ZD(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(n)}function QD(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(n)}function JD(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(n)}function eN(n){return Ln({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(n)}const tN=["AI/ML Engineer","Full-Stack Developer","AI Architect"],nN=[{label:"LinkedIn",href:"https://www.linkedin.com/in/himanshsharmaa"},{label:"GitHub",href:"https://github.com/himanshsharmaa"},{label:"Instagram",href:"https://www.instagram.com/himanshsharmaa"},{label:"X",href:"https://x.com/himanshsharmaa_"}],iN=[{label:"Years Experience",value:"3+"},{label:"Projects Built",value:"5+"},{label:"Certifications",value:"5"}],es={whatsapp:"https://wa.me/917678609018?text=Hi%20Himansh%2C%20I%20came%20from%20your%20developer%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",linkedin:"https://www.linkedin.com/in/himanshsharmaa",github:"https://github.com/himanshsharmaa",email:"himanshsharma046@gmail.com"},Pp=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];function rN({activeSection:n,mobileMenuOpen:e,onToggleMobileMenu:t,onNavigate:i}){return O.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 bg-black/100 backdrop-blur-2xl border-b border-white/10",children:[O.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",children:[O.jsxs("a",{href:"#intro",onClick:o=>i(o,"#intro"),className:"group inline-flex items-center gap-3 text-sm font-bold tracking-[0.28em] text-white",children:[O.jsx("span",{className:"font-['Inter'] inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.05] text-gray-200 shadow-[0_0_40px_rgba(255,255,255,0.12)] transition group-hover:border-white/30 group-hover:bg-white/10",children:"HS"}),O.jsx("span",{className:"font-['Inter'] hidden text-gray-300 sm:inline",children:"HIMANSH SHARMA"})]}),O.jsx("nav",{className:"hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 backdrop-blur-md lg:flex",children:Pp.map(o=>{const a=n===o.href.slice(1);return O.jsxs("a",{href:o.href,onClick:c=>i(c,o.href),className:`relative rounded-full px-4 py-2 text-sm font-medium transition ${a?"text-white":"text-gray-300 hover:text-white"}`,children:[a?O.jsx(Bt.span,{layoutId:"nav-pill",className:"absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20",transition:{type:"spring",stiffness:500,damping:40}}):null,O.jsx("span",{className:"font-['Inter'] relative z-10",children:o.label})]},o.href)})}),O.jsx("button",{type:"button",onClick:t,className:"font-['Inter'] inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white lg:hidden","aria-label":"Toggle navigation","aria-expanded":e,children:e?O.jsx(iM,{className:"h-5 w-5"}):O.jsx(qD,{className:"h-5 w-5"})})]}),O.jsx(Bt.div,{initial:!1,animate:e?{height:"auto",opacity:1}:{height:0,opacity:0},transition:{duration:.28,ease:"easeOut"},className:"overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl lg:hidden",children:O.jsx("div",{className:"mx-auto max-w-7xl px-4 py-4 sm:px-6",children:O.jsx("div",{className:"grid gap-2 rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md",children:Pp.map(o=>{const a=n===o.href.slice(1);return O.jsx("a",{href:o.href,onClick:c=>i(c,o.href),className:`font-['Inter'] rounded-2xl px-4 py-3 text-sm font-medium transition ${a?"bg-white/10 text-white ring-1 ring-white/20":"text-gray-300 hover:bg-white/10 hover:text-white"}`,children:o.label},o.href)})})})})]})}const Lp=[{title:"Aura",subtitle:"Desktop Companion AI",problem:"Most desktop assistants feel mechanical and forgetful, which breaks trust and reduces daily use.",description:"Aura is a human-like AI companion that interacts naturally through voice, adapts to emotions, and evolves with the user. Powered by Whisper, Llama 2, Edge-TTS, and DeepFace for real-time speech recognition and expressive responses.",impact:"An experimental product with a strong personality and a clear AI product direction.",stack:["Python","Whisper","Llama 2","Edge-TTS","DeepFace","TensorFlow"],image:"/aura-preview.svg",githubUrl:"https://github.com/himanshsharmaa",demoUrl:null},{title:"Examify",subtitle:"Online Examination Portal",problem:"Educational teams needed a single place to manage classes, exams, and results without bouncing between tools.",description:"Built to emulate key features of Google Classroom, it offers seamless login, class joining via code, exam management, result processing, and user roles (RBAC).",impact:"Built to feel like a practical classroom operating system rather than a feature dump. Automated workflows drove a 70% increase in administrative efficiency.",stack:["PHP","MySQL","JavaScript","Tailwind CSS"],image:"/images/project/Examify.png",githubUrl:"https://github.com/himanshsharmaa/Examify?tab=readme-ov-file#-examify",demoUrl:"https://github.com/himanshsharmaa/Examify?tab=readme-ov-file#-examify"},{title:"Keplor",subtitle:"AI SaaS",problem:"Early-stage software companies need a crisp identity, quick launch velocity, and a path toward scalable AI products.",description:"Keplor is an AI SaaS company concept focused on intelligent, scalable, cloud-native software for creators, learners, and businesses.",impact:"A founder project that shows product thinking beyond code delivery.",stack:["React","Next.js","Tailwind CSS","Shadcn UI","Framer Motion","Vercel"],image:"/images/project/keplor.png",githubUrl:"https://github.com/himanshsharmaa/Keplor?tab=readme-ov-file#-keplor",demoUrl:"https://keplor.tech/"},{title:"DOT SHIP",subtitle:"Logistics Management Platform",problem:"Logistics platforms require flexible schema design and rapid data retrieval for real-time tracking.",description:"Built a comprehensive logistics platform facilitating real-time tracking and database management using MongoDB.",impact:"Delivered a robust architecture for real-time logistics tracking and management.",stack:["PHP","MongoDB","HTML5","CSS3","JavaScript"],image:"/images/project/project-image.png",githubUrl:"https://github.com/himanshsharmaa/DotShip",demoUrl:null}],cM=[{title:"Frontend",items:["React","Tailwind CSS","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","jQuery"]},{title:"Backend",items:["Python","Node.js","PHP","Express.js","REST APIs"]},{title:"Databases",items:["MySQL","MongoDB","SQLite"]},{title:"AI / ML",items:["TensorFlow","Keras","OpenCV","NumPy","Pandas","Scikit-learn","CNN","NLP","Computer Vision","YOLOv8","RAG","LLMs"]},{title:"Tools",items:["Git","GitHub","VS Code","Postman","Figma","Linux","JSON","AWS","IBM Cloud"]}],Xa=[{id:"experience",label:"Experience",items:[{year:"Feb 2026 - Jul 2026",title:"AI Software Intern",company:"ASTRA AI",description:"Selected to contribute to AI-driven software solutions. Engineered object detection pipelines, fine-tuning YOLOv8 models to identify traffic vulnerabilities. Optimized inference speed by 20%."},{year:"Aug 2025 - Dec 2025",title:"Contributor",company:"GirlScript Summer of Code",description:"Contributed to open-source projects."},{year:"Jul 2025 - Aug 2025",title:"AI & Cloud Intern",company:"IBM / Edunet Foundation",description:"Selected for the prestigious AICTE IBM AI and Cloud Internship. Architected an AI conversational agent using the IBM Granite foundation model, reducing simulated query resolution time by 35%."},{year:"May 2025 - May 2026",title:"Media Team Co-Head",company:"GeeksforGeeks IKGPTU",description:"Directed digital PR campaigns and produced high-retention motion graphics, scaling organic social media engagement by 45%. Contributed to community events and workshops."},{year:"2024 - Present",title:"Founder",company:"Keplor",description:"Leading product direction and execution for AI-first software solutions focused on practical user outcomes."},{year:"2023",title:"Freelance Dev",company:"Self-Employed",description:"Built and deployed billing and student management systems using Python, HTML, CSS, JavaScript, PHP, and SQL."}]},{id:"education",label:"Education",items:[{year:"Jul 2024 - Dec 2027",title:"B.Tech, Computer Science",company:"I. K. Gujral Punjab Technical University (IKGPTU)",description:"Grade: 7.5. Focusing on AI, Machine Learning, and software development."},{year:"Oct 2021 - Jul 2024",title:"Diploma, Computer Engineering",company:"Government Polytechnic Nilokheri",description:"Grade: 8. Led a team project on Web Platform Development."}]},{id:"certifications",label:"Certifications",items:[{year:"Jul 2025",title:"Artificial Intelligence",company:"IBM",description:""},{year:"Jul 2025",title:"Cloud Computing",company:"IBM",description:""},{year:"Dec 2024",title:"AWS Educate Machine Learning Foundations",company:"Amazon Web Services (AWS)",description:""},{year:"Dec 2024",title:"AWS APAC - Solutions Architecture Job Simulation",company:"Amazon Web Services (AWS)",description:""},{year:"Aug 2023",title:"Programming in C and Python",company:"Delhi Institute of Computer Sciences - DICS",description:""}]}],sN=["What services does Himansh offer?","Show me featured projects","What is his tech stack?","How can I contact him?"];function $r(n,e){const t=n.toLowerCase().replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),i=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=(a,c)=>{const u=Array.from({length:a.length+1},(f,h)=>[h]);for(let f=0;f<=c.length;f++)u[0][f]=f;for(let f=1;f<=a.length;f++)for(let h=1;h<=c.length;h++){const p=a[f-1]===c[h-1]?0:1;u[f][h]=Math.min(u[f-1][h]+1,u[f][h-1]+1,u[f-1][h-1]+p)}return u[a.length][c.length]};return e.some(a=>{const c=a.toLowerCase().trim();return c?c.includes(" ")?t.includes(c):new RegExp(`\\b${i(c)}\\b`).test(t)?!0:t.split(" ").some(f=>o(f,c)<=1):!1})}function oN(){const n=Xa.find(e=>e.id==="experience");return n?n.items.slice(0,2):[]}function aN(n){const e=n.toLowerCase().trim(),t=e.replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),i=t?t.split(" ").length:0;if(!e)return{text:"Ask me anything about Himansh: projects, skills, experience, or how to work together."};if(i<=4&&$r(t,["hello","hi","hey"]))return{text:"Hi! I am Himansh's portfolio assistant. I can help you explore projects, skills, experience, and contact options."};if($r(e,["service","hire","work with","collaboration","freelance"]))return{text:"Himansh works on full-stack product development, AI-powered features, and end-to-end web applications for startups and teams.",actions:[{label:"View Projects",href:"#projects",external:!1},{label:"Contact Himansh",href:"#contact",external:!1}]};if($r(e,["project","portfolio","case study"]))return{text:`Here are featured projects:
${Lp.slice(0,3).map(c=>`- ${c.title}: ${c.subtitle}`).join(`
`)}`,actions:[{label:"Go To Projects",href:"#projects",external:!1},{label:"GitHub Profile",href:es.github,external:!0}]};const o=Lp.find(a=>$r(a.title,[e]));if(o)return{text:`**${o.title}**
${o.description}

Stack: ${o.stack.join(", ")}`,actions:[{label:"View Demo",href:o.demoUrl??"#",external:!0},{label:"GitHub",href:o.githubUrl,external:!0}]};if($r(e,["skill","stack","technology","tech"]))return{text:`Core stack overview:
${cM.slice(0,3).map(c=>`${c.title}: ${c.items.slice(0,4).join(", ")}`).join(`
`)}`,actions:[{label:"Open Skills",href:"#skills",external:!1}]};if($r(e,["experience","journey","education","timeline","background"])){const a=oN().map(c=>`- ${c.year}: ${c.title} at ${c.company}`).join(`
`);return{text:a?`Quick background highlights:
${a}`:"You can find work and education details in the Experience section.",actions:[{label:"View Experience",href:"#experience",external:!1}]}}return $r(e,["resume","cv"])?{text:"You can view or download Himansh's latest resume here.",actions:[{label:"Open Resume",href:"/Resume.pdf",external:!0}]}:$r(e,["contact","email","whatsapp","linkedin","reach"])?{text:`Best ways to reach Himansh:
- WhatsApp for quick discussion
- LinkedIn for professional outreach
- Email: ${es.email}`,actions:[{label:"WhatsApp",href:es.whatsapp,external:!0},{label:"LinkedIn",href:es.linkedin,external:!0},{label:"Contact Section",href:"#contact",external:!1}]}:{text:'I can help with projects, skills, experience, resume, and contact details. Try asking: "What services does he offer?"'}}function lN(){const[n,e]=xe.useState(!1),[t,i]=xe.useState(""),[o,a]=xe.useState(!1),[c,u]=xe.useState([{id:1,role:"assistant",text:"Hi, I am Himansh's portfolio assistant. Ask me anything about his work, skills, or availability."}]),f=xe.useRef(null),h=xe.useMemo(()=>sN,[]);xe.useEffect(()=>{var v;n&&((v=f.current)==null||v.scrollIntoView({behavior:"smooth",block:"end"}))},[c,n]);const p=v=>{const m=v.trim();if(!m||o)return;const x={id:Date.now(),role:"user",text:m};u(T=>[...T,x]),i(""),a(!0);const M=aN(m);window.setTimeout(()=>{u(T=>[...T,{id:Date.now()+1,role:"assistant",text:M.text,actions:M.actions}]),a(!1)},420)};return O.jsxs("div",{className:"fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6",children:[n?O.jsxs("div",{className:"glass-card w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10",children:[O.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold text-white",children:"Portfolio Assistant"}),O.jsx("p",{className:"font-['Inter'] text-xs text-gray-300",children:"Replies on behalf of Himansh"})]}),O.jsx("button",{type:"button",onClick:()=>e(!1),className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-white/30 hover:text-white","aria-label":"Close assistant",children:O.jsx(iM,{className:"h-4 w-4"})})]}),O.jsxs("div",{className:"max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4",children:[c.map(v=>{var m;return O.jsxs("div",{children:[O.jsx("div",{className:`w-fit max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${v.role==="assistant"?"border border-white/10 bg-white/5 text-gray-300":"ml-auto bg-white/10 text-white"}`,children:v.text}),v.role==="assistant"&&((m=v.actions)!=null&&m.length)?O.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:v.actions.map(x=>O.jsx("a",{href:x.href,target:x.external?"_blank":void 0,rel:x.external?"noreferrer":void 0,className:"rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:x.label},`${v.id}-${x.label}`))}):null]},v.id)}),o?O.jsx("p",{className:"font-['Inter'] text-xs text-gray-400",children:"Assistant is typing..."}):null,O.jsx("div",{ref:f})]}),O.jsxs("div",{className:"border-t border-white/10 px-4 py-3",children:[O.jsx("div",{className:"mb-3 flex flex-wrap gap-2",children:h.map(v=>O.jsx("button",{type:"button",onClick:()=>p(v),className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:v},v))}),O.jsxs("form",{onSubmit:v=>{v.preventDefault(),p(t)},className:"flex items-center gap-2",children:[O.jsx("input",{value:t,onChange:v=>i(v.target.value),placeholder:"Ask about projects, skills, or contact",className:"input-focus w-full box-border rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5 font-['Inter'] text-sm text-white placeholder:text-gray-400","aria-label":"Type your message"}),O.jsx("button",{type:"submit",className:"font-['Inter'] inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20","aria-label":"Send message",children:O.jsx(sM,{className:"h-4 w-4"})})]})]})]}):null,O.jsx("button",{type:"button",onClick:()=>e(v=>!v),className:"mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition hover:bg-white/20","aria-label":"Open portfolio assistant",children:O.jsx(oM,{className:"h-6 w-6"})})]})}function cN(n){const[e,t]=xe.useState(n[0]);return xe.useEffect(()=>{const i=n.map(a=>document.getElementById(a)).filter(Boolean);if(!i.length)return;const o=new IntersectionObserver(a=>{var u;const c=a.filter(f=>f.isIntersecting).sort((f,h)=>h.intersectionRatio-f.intersectionRatio)[0];(u=c==null?void 0:c.target)!=null&&u.id&&t(c.target.id)},{rootMargin:"-35% 0px -50% 0px",threshold:[.12,.2,.35,.5]});return i.forEach(a=>o.observe(a)),()=>o.disconnect()},[n]),e}function Ml({eyebrow:n,title:e,description:t}){return O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"mb-12 flex max-w-3xl flex-col items-start bg-transparent text-left",children:[n?O.jsx("p",{className:"mb-4 font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-gray-400 drop-shadow-lg md:text-xs",children:n}):null,O.jsx("h2",{className:"mb-6 font-['EB_Garamond'] tracking-tight text-4xl font-semibold text-white drop-shadow-xl md:text-5xl",children:e}),t?O.jsx("p",{className:"max-w-2xl font-['Inter'] text-base font-medium text-gray-300 drop-shadow-xl md:text-lg",children:t}):null]})}const uN=[{icon:I_,title:"Founded Keplor: Leading innovative software solutions with a product-first mindset.",text:""},{icon:bm,title:"Built Examify: An online examination portal with classroom-style workflows.",text:""},{icon:I_,title:"AI Projects & Internships: Working across CNN, NLP, RAG, and voice-driven systems, including roles at ASTRA AI and IBM.",text:""}],fN=[["Frontend",["React","Tailwind CSS","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","jQuery"]],["Backend",["Python","Node.js","PHP","Express.js","REST APIs"]],["Databases",["MySQL","MongoDB","SQLite"]],["AI / ML",["TensorFlow","Keras","OpenCV","NumPy","Pandas","Scikit-learn","CNN","NLP","Computer Vision","YOLOv8","RAG","LLMs"]],["Tools",["Git","GitHub","VS Code","Postman","Figma","Linux","JSON","AWS","IBM Cloud"]]];function dN(){return O.jsx("section",{id:"about",className:"w-full flex flex-col items-center justify-center bg-transparent py-20",children:O.jsxs("div",{className:"mx-auto w-full max-w-6xl px-4 sm:px-6 flex flex-col items-start",children:[O.jsx(Ml,{eyebrow:"About",title:"Full-Stack & AI Developer building practical digital products",description:"Builder mindset, AI curiosity, and a strong focus on practical products that are reliable, fast, and easy to use."}),O.jsxs("div",{className:"mt-12 w-full flex flex-col gap-8",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1]},className:"flex flex-col w-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-10",children:[O.jsxs("div",{className:"mb-8",children:[O.jsx("p",{className:"font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 drop-shadow-lg",children:"Developer mindset"}),O.jsx("p",{className:"font-['Inter'] mt-4 text-base leading-relaxed text-gray-300 drop-shadow-lg max-w-4xl",children:"I like building tools that solve specific problems, then shaping them until they feel simple, fast, and trustworthy. My work spans frontend, backend, and AI experiments—deploying ML pipelines, optimizing YOLOv8 models, integrating LLMs, and crafting high-retention media. The common thread is the same: practical products with strong identity."})]}),O.jsx("div",{className:"grid w-full gap-4 sm:grid-cols-3 pt-8 border-t border-white/10",children:iN.map(n=>O.jsxs("div",{className:"flex flex-col bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-left",children:[O.jsx("p",{className:"font-['EB_Garamond'] text-3xl font-medium text-white",children:n.value}),O.jsx("p",{className:"font-['Inter'] mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]",children:n.label})]},n.label))})]}),O.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8",children:[O.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[O.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gray-200",children:O.jsx(bm,{className:"h-4 w-4"})}),O.jsx("h3",{className:"font-['EB_Garamond'] text-2xl font-medium text-white",children:"Tech Stack"})]}),O.jsx("div",{className:"flex-grow space-y-6",children:fN.map(([n,e])=>O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-gray-400",children:n}),O.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1.5",children:e.map((t,i)=>O.jsx("span",{className:"font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300",children:t},`${n}-${t}-${i}`))})]},n))}),O.jsx("div",{className:"mt-8 pt-6 border-t border-white/10",children:O.jsxs("a",{href:"/Resume.pdf",target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex w-full justify-center items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20",children:[O.jsx(KD,{className:"h-4 w-4"}),"Download Resume"]})})]}),O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.2},className:"flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8",children:[O.jsx("h3",{className:"font-['EB_Garamond'] text-2xl font-medium text-white mb-6",children:"Key Achievements"}),O.jsx("div",{className:"space-y-4 flex-grow",children:uN.map(n=>{const e=n.icon;return O.jsxs("div",{className:"flex flex-row bg-white/5 border border-white/10 rounded-xl p-5 gap-4",children:[O.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gray-200",children:O.jsx(e,{className:"h-4 w-4"})}),O.jsx("div",{className:"flex items-center",children:O.jsx("h4",{className:"font-['Inter'] text-sm font-medium text-gray-200 leading-relaxed",children:n.title})})]},n.title)})})]})]})]})]})})}const U_={name:"",email:"",message:""};function hN(){const[n,e]=xe.useState(U_),[t,i]=xe.useState("idle"),[o,a]=xe.useState(""),c=f=>{const{name:h,value:p}=f.target;e(v=>({...v,[h]:p}))},u=async f=>{f.preventDefault(),i("sending"),a("");try{if(!(await fetch("https://formspree.io/f/xwpbardz",{method:"POST",headers:{Accept:"application/json"},body:new FormData(f.currentTarget)})).ok)throw new Error("Request failed");e(U_),i("success"),a("Thank you! Your message has been sent.")}catch{i("error"),a("There was an error sending your message. Please try again.")}};return O.jsx("section",{id:"contact",className:"w-full flex flex-col items-center justify-center bg-transparent py-20 pb-40",children:O.jsxs("div",{className:"mx-auto w-full max-w-5xl bg-transparent py-24 pb-40",children:[O.jsx(Ml,{eyebrow:"CONTACT",title:"Let's build something together",description:"Share your idea, timeline, or requirements. I usually respond quickly through WhatsApp, LinkedIn, or email."}),O.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-start mt-12",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all w-full text-left p-6 md:p-8",children:[O.jsxs("div",{className:"flex items-center justify-start gap-4 mb-6",children:[O.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gray-200 ring-1 ring-white/10",children:O.jsx(oM,{className:"h-5 w-5"})}),O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-xs font-semibold uppercase tracking-[0.24em] text-gray-400",children:"Fast response"}),O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white drop-shadow-lg mt-1",children:"WhatsApp, LinkedIn, or email"})]})]}),O.jsx("p",{className:"font-['Inter'] text-sm leading-relaxed text-gray-400 drop-shadow-lg mb-8",children:"If you have a product idea, a freelance brief, or a collaboration in mind, the quickest route is WhatsApp. I also keep LinkedIn and email open for formal outreach."}),O.jsxs("div",{className:"mt-auto space-y-3 flex-grow",children:[O.jsxs("a",{href:es.whatsapp,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10",children:[O.jsxs("span",{className:"font-['Inter'] text-sm font-medium text-white flex items-center gap-3",children:[O.jsx(bm,{className:"h-4 w-4"})," WhatsApp Me"]}),O.jsx("span",{className:"font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400",children:"Direct"})]}),O.jsxs("a",{href:es.linkedin,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10",children:[O.jsxs("span",{className:"font-['Inter'] text-sm font-medium text-white flex items-center gap-3",children:[O.jsx(YD,{className:"h-4 w-4"})," LinkedIn Profile"]}),O.jsx("span",{className:"font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400",children:"Network"})]}),O.jsxs("a",{href:`mailto:${es.email}`,className:"flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10",children:[O.jsxs("span",{className:"font-['Inter'] text-sm font-medium text-white flex items-center gap-3",children:[O.jsx($D,{className:"h-4 w-4"})," ",es.email]}),O.jsx("span",{className:"font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400",children:"Email"})]})]})]}),O.jsxs(Bt.form,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},onSubmit:u,className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all w-full text-left p-6 md:p-8",children:[O.jsx("input",{type:"hidden",name:"_subject",value:"New message from Himansh Sharma portfolio"}),O.jsxs("div",{className:"flex items-center justify-start gap-4 mb-8",children:[O.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gray-200 ring-1 ring-white/10",children:O.jsx(sM,{className:"h-5 w-5"})}),O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-xs font-semibold uppercase tracking-[0.24em] text-gray-400",children:"Contact form"}),O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white drop-shadow-lg mt-1",children:"Send project details"})]})]}),O.jsxs("div",{className:"grid gap-5 sm:grid-cols-2 w-full",children:[O.jsxs("label",{className:"flex flex-col space-y-2 w-full",children:[O.jsx("span",{className:"font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Name"}),O.jsx("input",{type:"text",name:"name",value:n.name,onChange:c,required:!0,placeholder:"Your name",className:"w-full box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"})]}),O.jsxs("label",{className:"flex flex-col space-y-2 w-full",children:[O.jsx("span",{className:"font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Email"}),O.jsx("input",{type:"email",name:"email",value:n.email,onChange:c,required:!0,placeholder:"Your email",className:"w-full box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"})]})]}),O.jsxs("label",{className:"flex flex-col space-y-2 w-full mt-5 flex-grow",children:[O.jsx("span",{className:"font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Message"}),O.jsx("textarea",{name:"message",value:n.message,onChange:c,required:!0,rows:5,placeholder:"Tell me about the project, timeline, or idea.",className:"w-full h-full min-h-[140px] box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"})]}),O.jsx("button",{type:"submit",disabled:t==="sending",className:"font-['Inter'] mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-70",children:t==="sending"?"Sending...":"Send Message"}),o&&O.jsxs("p",{className:"font-['Inter'] mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-400",children:[t==="success"&&O.jsx(ZD,{className:"h-4 w-4 text-green-400"}),o]})]})]})]})})}function pN(){return O.jsx("footer",{className:"bg-transparent border-t border-white/5 py-8",children:O.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8",children:[O.jsxs("div",{children:[O.jsxs("p",{className:"font-['Inter'] text-sm text-gray-300 drop-shadow-lg",children:["Designed & built by ",O.jsx("a",{href:"https://www.linkedin.com/in/himanshsharmaa",className:"font-semibold text-gray-300 transition hover:text-white",children:"Himansh Sharma"})]}),O.jsx("p",{className:"font-['Inter'] mt-1 text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-lg",children:"Engineering intelligent systems and scalable web products."})]}),O.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[[["LinkedIn","https://www.linkedin.com/in/himanshsharmaa",aM],["GitHub","https://github.com/himanshsharmaa",Am],["Instagram","https://www.instagram.com/himanshsharmaa",lM],["X","https://x.com/himanshsharmaa_",rM]].map(([n,e,t])=>O.jsx("a",{href:e,target:"_blank",rel:"noreferrer","aria-label":n,className:"font-['Inter'] inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:O.jsx(t,{className:"h-4 w-4"})},n)),O.jsxs("a",{href:"#intro",className:"font-['Inter'] inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:["Back to top",O.jsx(QD,{className:"h-4 w-4"})]})]})]})})}const mN={hidden:{},visible:{transition:{staggerChildren:.15,delayChildren:.2}}},To={hidden:{opacity:0,y:25,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:1.2,ease:[.16,1,.3,1]}}};function gN({roles:n}){const[e,t]=xe.useState(0),[i,o]=xe.useState(0),[a,c]=xe.useState(!1);return xe.useEffect(()=>{if(!n||n.length===0)return;const u=n[e],f=window.setTimeout(()=>{a?i>0?o(h=>h-1):(c(!1),t(h=>(h+1)%n.length)):i<u.length?o(h=>h+1):c(!0)},a?45:i===u.length?1600:75);return()=>window.clearTimeout(f)},[i,a,e,n]),!n||n.length===0?null:O.jsxs("span",{className:"inline-flex items-center text-white drop-shadow-xl",children:[n[e].slice(0,i),O.jsx("span",{className:"ml-1 inline-block h-[0.85em] w-[3px] bg-white animate-pulse","aria-hidden":"true"})]})}function vN({onNavigate:n}){return O.jsx("section",{id:"intro",className:"section-shell pointer-events-none relative flex min-h-screen w-full flex-col items-start justify-center bg-transparent px-4 sm:px-6 py-28 text-left",children:O.jsx("div",{className:"w-full max-w-7xl mx-auto",children:O.jsxs(Bt.div,{initial:"hidden",animate:"visible",variants:mN,className:"relative z-10 flex max-w-4xl flex-col items-start text-left mt-16",children:[O.jsx(Bt.div,{variants:To,className:"pointer-events-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg backdrop-blur-xl transition-all hover:bg-white/5",children:"Available for freelance and product collaborations"}),O.jsxs(Bt.h1,{variants:To,className:"font-['EB_Garamond'] text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white drop-shadow-xl leading-[1.1]",children:[O.jsx("span",{className:"block overflow-hidden pb-1",children:O.jsx(Bt.span,{initial:{y:"110%",filter:"blur(8px)"},animate:{y:"0%",filter:"blur(0px)"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.15},className:"block text-white",children:"I'm Himansh Sharma, an"})}),O.jsx("span",{className:"block overflow-hidden pb-2 min-h-[1.2em]",children:O.jsx(Bt.span,{initial:{y:"110%",filter:"blur(8px)"},animate:{y:"0%",filter:"blur(0px)"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.3},className:"block text-white",children:O.jsx(gN,{roles:tN})})})]}),O.jsx(Bt.p,{variants:To,className:"pointer-events-auto mt-6 max-w-2xl font-['EB_Garamond'] text-lg md:text-xl font-normal tracking-wide text-gray-300 drop-shadow-lg leading-relaxed",children:"I build practical digital products with a founder mindset, combining full-stack engineering, AI experimentation, and a careful eye for polished user experience."}),O.jsxs(Bt.div,{variants:To,className:"pointer-events-auto mt-8 flex flex-wrap justify-start gap-4",children:[O.jsxs("a",{href:"#projects",onClick:e=>n(e,"#projects"),className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 font-['Inter'] text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10",children:["View Projects",O.jsx(eN,{className:"h-4 w-4"})]}),O.jsx("a",{href:"/Resume.pdf",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 font-['Inter'] text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10",children:"Download Resume"})]}),O.jsx(Bt.div,{variants:To,className:"pointer-events-auto mt-8 flex flex-wrap items-center justify-start gap-3",children:nN.map(e=>{const i={LinkedIn:aM,GitHub:Am,Instagram:lM}[e.label]||rM;return O.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer","aria-label":e.label,className:"inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-gray-300 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10 hover:text-white",children:O.jsx(i,{className:"h-4 w-4"})},e.label)})}),O.jsx(Bt.div,{variants:To,className:"pointer-events-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full",children:[["Full-stack Products",""],["AI-first Experiments",""],["Founder Mindset",""]].map(([e,t])=>O.jsxs("div",{className:"flex flex-col h-full cursor-pointer rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-left backdrop-blur-xl shadow-2xl transition-all hover:bg-white/5 hover:border-white/20",children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold text-white drop-shadow-lg flex-grow",children:e}),t&&O.jsx("p",{className:"mt-2 font-['Inter'] text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-lg",children:t})]},e))})]})})})}function xN({project:n,index:e}){const t=n.tech??n.stack,i=n.liveUrl??n.demoUrl;return O.jsxs(Bt.article,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,delay:.1+e*.08,ease:[.16,1,.3,1]},whileHover:{y:-6},className:"group flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/25 overflow-hidden text-left",children:[O.jsxs("div",{className:"relative overflow-hidden border-b border-white/10",children:[O.jsx("div",{className:"absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10"}),O.jsx("img",{src:n.image,alt:n.title,loading:"lazy",className:"h-36 md:h-44 w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"})]}),O.jsxs("div",{className:"flex-grow flex flex-col p-6 space-y-4",children:[O.jsxs("div",{children:[O.jsx("span",{className:"font-['Inter'] text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block",children:n.subtitle}),O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-3xl font-medium text-white drop-shadow-xl",children:n.title})]}),O.jsxs("div",{className:"space-y-3 flex-grow font-['Inter'] text-sm text-gray-300 leading-relaxed",children:[O.jsxs("p",{children:[O.jsx("span",{className:"text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5",children:"Problem"}),n.problem]}),O.jsxs("p",{children:[O.jsx("span",{className:"text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5",children:"Solution"}),n.description||n.problem]}),O.jsxs("p",{children:[O.jsx("span",{className:"text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5",children:"Impact"}),n.impact]})]}),O.jsx("div",{className:"flex flex-wrap items-center justify-start gap-1.5 pt-2",children:t.map((o,a)=>O.jsx("span",{className:"font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300 transition-all",children:o},`${o}-${a}`))}),O.jsxs("div",{className:"flex items-center gap-4 pt-4 border-t border-white/10 mt-2",children:[i?O.jsxs("a",{href:i,target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-gray-300 transition-colors",children:["Live Demo ",O.jsx(JD,{className:"h-3 w-3"})]}):O.jsx("span",{className:"font-['Inter'] text-xs font-semibold text-gray-500",children:"Demo coming soon"}),n.githubUrl&&O.jsxs("a",{href:n.githubUrl,target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors",children:["GitHub ",O.jsx(Am,{className:"h-3 w-3"})]})]})]})]})}const _N={hidden:{},visible:{transition:{staggerChildren:.14}}};function yN(){return O.jsx("section",{id:"projects",className:"w-full flex flex-col items-start justify-center bg-transparent py-20",children:O.jsxs(Bt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-15% 0px -15% 0px"},variants:_N,className:"w-full bg-transparent py-24",children:[O.jsx(Ml,{eyebrow:"PROJECTS",title:"Selected projects",description:"Each project outlines the problem, solution, and outcome to show practical thinking and execution."}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch",children:Lp.map((n,e)=>O.jsx(xN,{project:n,index:e},n.title))})]})})}const SN={hidden:{opacity:0,y:30,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1}}},MN={hidden:{},visible:{transition:{staggerChildren:.12}}};function wN(){return O.jsx("section",{id:"skills",className:"w-full flex flex-col items-center justify-center bg-transparent py-20 text-center",children:O.jsxs(Bt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-15% 0px -15% 0px"},variants:MN,className:"w-full bg-transparent py-24",children:[O.jsx(Ml,{eyebrow:"SKILLS",title:"Core skills and tools",description:"Frontend, backend, databases, AI/ML, and developer tooling used across production and experimental projects."}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full text-left",children:cM.map(n=>O.jsxs(Bt.div,{variants:SN,whileHover:{y:-4},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 p-6 md:p-8 text-left",children:[O.jsx("p",{className:"font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg md:text-xs",children:n.title}),O.jsx("div",{className:"mt-4 flex-grow flex flex-wrap gap-2 items-center justify-start",children:n.items.map(e=>O.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-light text-gray-300 drop-shadow-lg transition-all hover:bg-white/10",children:e},e))})]},n.title))})]})})}const EN={hidden:{opacity:0,x:-20,filter:"blur(8px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.8,ease:[.16,1,.3,1]}}},TN={hidden:{},visible:{transition:{staggerChildren:.12}}};function bN(){const[n,e]=xe.useState(Xa[0].id),t=xe.useMemo(()=>Xa.find(i=>i.id===n)??Xa[0],[n]);return O.jsx("section",{id:"experience",className:"w-full flex flex-col items-center justify-center bg-transparent py-20",children:O.jsxs("div",{className:"mx-auto w-full max-w-6xl px-4 sm:px-6",children:[O.jsx(Ml,{eyebrow:"EXPERIENCE",title:"Work, education, and certifications",description:"A concise timeline of hands-on roles, academic milestones, and certifications that shaped my product and engineering approach."}),O.jsx(Bt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-10 mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-950/85 p-1.5 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)]",children:Xa.map(i=>O.jsx("button",{type:"button",onClick:()=>e(i.id),className:`font-['Inter'] rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${i.id===n?"bg-white text-black shadow-md":"text-gray-400 hover:text-white hover:bg-white/10"}`,children:i.label},i.id))}),O.jsx("div",{className:"mt-12 w-full max-w-5xl mx-auto pl-2 sm:pl-0",children:O.jsx(JR,{mode:"wait",children:O.jsx(Bt.div,{initial:"hidden",animate:"visible",exit:{opacity:0,transition:{duration:.2}},variants:TN,className:"flex flex-col gap-8 border-l border-white/15 ml-2 md:ml-4",children:t.items.map((i,o)=>O.jsxs(Bt.article,{variants:EN,className:"relative pl-6 md:pl-10 group",children:[O.jsx("span",{className:"absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-500 ring-4 ring-[#09090b] group-hover:bg-white transition-colors duration-300"}),O.jsxs("div",{className:"flex flex-col h-full w-full rounded-2xl border border-white/10 bg-zinc-950/85 p-5 md:p-7 text-left backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/25",children:[O.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/10 pb-3",children:[O.jsx("span",{className:"font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400",children:i.year}),O.jsx("span",{className:"font-['Inter'] text-[11px] font-medium text-gray-300",children:i.company})]}),O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white mb-3",children:i.title}),O.jsx("p",{className:"font-['Inter'] text-sm leading-relaxed text-gray-300 flex-grow",children:i.description})]})]},`${t.id}-${i.year}-${i.title}-${o}`))},t.id)})})]})})}const AN=`
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
`,RN=[{type:"moon",position:[-30,16,-58],radius:1.25,rotationSpeed:.003},{type:"mars",position:[32,-14,-83],radius:1.5,rotationSpeed:.0022},{type:"jupiter",position:[-47,26,-122],radius:3.6,rotationSpeed:.0017},{type:"saturn",position:[54,9,-160],radius:3.2,rotationSpeed:.0015}],PN=[{position:[-34,20,-52],scale:1.2},{position:[35,22,-65],scale:1.45},{position:[-43,-20,-75],scale:1.3},{position:[44,-25,-91],scale:1.5},{position:[-55,18,-112],scale:1.65},{position:[54,31,-128],scale:1.3},{position:[-67,-31,-148],scale:1.75},{position:[66,-37,-166],scale:1.5},{position:[-79,33,-185],scale:1.85},{position:[78,29,-205],scale:1.6}],F_=[{points:[[-2,-1],[-1.1,.3],[-.15,-.15],[.9,.35],[1.8,1.2],[1.2,-1.1],[.3,-.65]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[6,2]]},{points:[[-1.8,1],[-.7,1.5],[.2,.8],[1.2,1.25],[1.75,.1],[.8,-.7],[-.3,-.35]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]},{points:[[-1.9,.9],[-.8,1.15],[.2,.55],[1.15,.75],[1.8,-.2],[.5,-.7],[-.8,-.5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]},{points:[[-1.8,1.2],[-.9,.4],[0,1.1],[1,.3],[1.7,1],[.9,-.8],[-.2,-1.1],[-1.3,-.45]],lines:[[0,1],[1,2],[2,3],[3,4],[3,5],[5,6],[6,7],[7,1]]},{points:[[-1.8,-.9],[-1.1,.5],[-.3,1.2],[.7,1.7],[1.4,.65],[1.8,-.7],[.65,-1.25],[-.6,-1.45]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[2,6]]},{points:[[-1.7,1],[0,1.8],[1.7,1],[.6,-1.25],[-.7,-1.25]],lines:[[0,1],[1,2],[2,3],[3,4],[4,0],[0,2]]}];function LN(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(Math.PI*2*e)}function DN(n,e=512){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");if(!i)throw new Error("Unable to create planet texture canvas.");const o=i.createImageData(e,e),a=o.data;for(let u=0;u<e;u+=1){const f=u/e;for(let h=0;h<e;h+=1){const p=h/e,v=(u*e+h)*4,m=Math.sin(p*41+n.length)*.5+Math.sin(f*73+p*11)*.3+Math.sin((p+f)*125)*.2;let x=0,M=0,T=0;if(n==="moon"){const S=125+m*38;x=S,M=S,T=S+4,Math.sin(p*190)*Math.sin(f*150)*Math.sin((p+f)*71)>.78&&(x-=34,M-=34,T-=30)}if(n==="mars"&&(x=150+m*38,M=57+m*18,T=40+m*12,Math.sin(p*25+Math.sin(f*19))*Math.sin(f*41)>.48&&(x-=36,M-=17,T-=10),(f<.08||f>.92)&&(x+=35,M+=28,T+=24)),n==="jupiter"){const S=Math.sin(f*Math.PI*26),y=m*.18;S>.45?(x=183+y*45,M=147+y*35,T=116+y*28):(x=112+y*35,M=88+y*28,T=78+y*22);const P=p-.68,U=f-.63;P*P/.02+U*U/.008<1&&(x=188,M=91,T=66)}n==="saturn"&&(Math.sin(f*Math.PI*18)>.25?(x=195+m*22,M=169+m*20,T=130+m*15):(x=135+m*20,M=120+m*18,T=96+m*15)),a[v]=$a.clamp(x,0,255),a[v+1]=$a.clamp(M,0,255),a[v+2]=$a.clamp(T,0,255),a[v+3]=255}}i.putImageData(o,0,0);const c=new EE(t);return c.colorSpace=ei,c.anisotropy=4,c}function NN(n){const e=F_[n%F_.length],t=new Ns,i=e.points.map(([v,m])=>new Y(v*3.2,m*3.2,0)),o=new gn().setFromPoints(i),a=new Ka({color:14742270,size:.052,transparent:!0,opacity:.34,blending:ns,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),c=new za(o,a);t.add(c);const u=[];e.lines.forEach(([v,m])=>{const x=i[v],M=i[m];u.push(x.x,x.y,x.z,M.x,M.y,M.z)});const f=new gn;f.setAttribute("position",new Zt(u,3));const h=new ay({color:12248829,transparent:!0,opacity:.12,blending:ns,depthWrite:!1,depthTest:!0}),p=new ly(f,h);return t.add(p),t}function IN(){const n=xe.useRef(null),[e,t]=xe.useState(!1),i=cN(Pp);xe.useEffect(()=>{const a=n.current;if(!a)return;let c=0,u=!1;const f=new hE,h=new Ei(50,window.innerWidth/Math.max(window.innerHeight,1),.1,600),p=new zR({canvas:a,alpha:!0,antialias:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(window.innerWidth,window.innerHeight,!1),p.setClearColor(0,0),p.outputColorSpace=ei,p.toneMapping=Ip,p.toneMappingExposure=1.15;const v=new jR(p);v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(window.innerWidth,window.innerHeight);const m=new YR(f,h);v.addPass(m);const x=new ko(new ft(window.innerWidth,window.innerHeight),.72,.42,.72);v.addPass(x);const M=new OE(14412542,.14);f.add(M);const T=new FE(16777215,1.65);T.position.set(-40,30,25),f.add(T);const S=new Iv([new Y(0,1.5,12),new Y(6,4,3),new Y(-6,-2,-1),new Y(3,1,-4),new Y(0,1.5,-7)]),y=new Iv([new Y(0,1.5,-9),new Y(.5,1.8,-9),new Y(-.5,1.2,-9),new Y(0,1.5,-9),new Y(0,1.5,-9)]),P=new Y,U=new Y;let C=0,R=0,L=0,F=0;const E=6e3,N=new Float32Array(E*3);for(let _e=0;_e<E;_e+=1){const D=_e*3;N[D]=(Math.random()-.5)*150,N[D+1]=(Math.random()-.5)*150,N[D+2]=-Math.random()*190}const B=new gn;B.setAttribute("position",new Zt(N,3));const H=new Ka({color:16777215,size:.08,transparent:!0,opacity:.75,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),j=new za(B,H);f.add(j);const te=1600,V=new Float32Array(te*3);for(let _e=0;_e<te;_e+=1){const D=_e*3;V[D]=(Math.random()-.5)*90,V[D+1]=(Math.random()-.5)*55,V[D+2]=-15-Math.random()*95}const ne=new gn;ne.setAttribute("position",new Zt(V,3));const he=new Ka({color:6809849,size:.018,transparent:!0,opacity:.11,blending:ns,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),J=new za(ne,he);f.add(J);const q=new Ns;PN.forEach((_e,D)=>{const w=NN(D);w.position.set(_e.position[0],_e.position[1],_e.position[2]),w.scale.setScalar(_e.scale),w.rotation.set((Math.random()-.5)*.16,(Math.random()-.5)*.12,(Math.random()-.5)*.18),q.add(w)}),f.add(q);const K=new Y(0,1.5,-9),Q=new Mu(1.5,128,128),I=new Pn({vertexShader:AN,fragmentShader:CN,uniforms:{uTime:{value:0},uCameraPosition:{value:new Y}},transparent:!1,depthWrite:!0,depthTest:!0}),re=new ti(Q,I);re.position.copy(K),f.add(re);const ye=9e3,ze=new Float32Array(ye*3),Ue=new Float32Array(ye*3),We=new mt(15792639),ae=new mt(3718648),fe=new mt(16007006),Te=new mt;for(let _e=0;_e<ye;_e+=1){const D=_e*3,w=Math.pow(Math.random(),.72),Z=2.65+w*5.35,ee=Math.random()*Math.PI*2,de=.12+(1-w)*.24;ze[D]=Math.cos(ee)*Z,ze[D+1]=LN()*de,ze[D+2]=Math.sin(ee)*Z;const we=$a.clamp((Z-2.65)/5.35,0,1);we<.38?Te.lerpColors(We,ae,we/.38):Te.lerpColors(ae,fe,(we-.38)/.62);const Ae=.88+Math.random()*.22;Ue[D]=Te.r*Ae,Ue[D+1]=Te.g*Ae,Ue[D+2]=Te.b*Ae}const qe=new gn;qe.setAttribute("position",new Zt(ze,3)),qe.setAttribute("color",new Zt(Ue,3));const ke=new Ka({size:.05,transparent:!0,opacity:.92,vertexColors:!0,blending:ns,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),ct=new za(qe,ke);ct.position.copy(K),ct.rotation.x=Math.PI*.32,f.add(ct);const Ut=new Ns,dt=[],yt=[];RN.forEach(_e=>{const D=DN(_e.type);yt.push(D);const w=new Mu(_e.radius,96,96),Z=new LE({map:D,roughness:_e.type==="jupiter"?.82:.95,metalness:0,emissive:new mt(329224),emissiveIntensity:.035}),ee=new ti(w,Z);ee.position.set(_e.position[0],_e.position[1],_e.position[2]),ee.rotation.set(Math.random()*.35,Math.random()*Math.PI,Math.random()*.25),Ut.add(ee),dt.push({mesh:ee,rotationSpeed:_e.rotationSpeed})}),f.add(Ut);const At=[],gt=new Yp(.004,.012,1.25,6),Ft=new Uu({color:14742270,transparent:!0,opacity:.22,blending:ns,depthWrite:!1,depthTest:!0});for(let _e=0;_e<2;_e+=1){const D=new ti(gt,Ft.clone());D.visible=!1,f.add(D),At.push({mesh:D,velocity:new Y,life:0,maxLife:1,active:!1,nextSpawn:5+Math.random()*16})}const Yt=_e=>{const D=Math.random()>.5?1:-1;_e.mesh.position.set(D*(20+Math.random()*26),8+(Math.random()-.5)*15,-28-Math.random()*75);const w=new Y(-.72*D,-.16,-1).normalize(),Z=.045+Math.random()*.018;_e.velocity.copy(w).multiplyScalar(Z),_e.mesh.quaternion.setFromUnitVectors(new Y(0,1,0),w),_e.life=0,_e.maxLife=.7+Math.random()*.55,_e.active=!0,_e.mesh.visible=!0},qt=()=>{C=window.scrollY||window.pageYOffset||0},Ct=_e=>{L=_e.clientX/Math.max(window.innerWidth,1)-.5,F=.5-_e.clientY/Math.max(window.innerHeight,1)},zt=()=>{const _e=window.innerWidth,D=Math.max(window.innerHeight,1);h.aspect=_e/D,h.updateProjectionMatrix(),p.setSize(_e,D,!1),v.setSize(_e,D);const w=Math.min(window.devicePixelRatio,2);p.setPixelRatio(w),v.setPixelRatio(w)};window.addEventListener("scroll",qt,{passive:!0}),window.addEventListener("mousemove",Ct,{passive:!0}),window.addEventListener("resize",zt),qt();const X=new HE,rn=()=>{if(u)return;c=window.requestAnimationFrame(rn);const _e=Math.min(X.getDelta(),.05),D=X.elapsedTime;R+=(C-R)*.015;const w=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),Z=$a.clamp(R/w,0,.99);S.getPointAt(Z,P),y.getPointAt(Z,U),h.position.set(P.x+L*.4,P.y+F*.4,P.z),h.lookAt(U),j.rotation.y+=_e*.006,j.rotation.x+=_e*45e-5,J.rotation.y+=_e*.0025,q.position.y=Math.sin(D*.08)*.05,dt.forEach(({mesh:ee,rotationSpeed:de})=>{ee.rotation.y+=de*_e*60,ee.rotation.x+=de*_e*3}),Ut.position.y=Math.sin(D*.12)*.045,Ut.position.x=Math.cos(D*.09)*.035,re.position.copy(K),re.position.y+=Math.sin(D*.4)*.08,re.rotation.y=D*.045,I.uniforms.uTime.value=D,I.uniforms.uCameraPosition.value.copy(h.position),ct.position.copy(re.position),ct.rotation.z=D*.05+R*8e-4,At.forEach(ee=>{if(!ee.active){ee.nextSpawn-=_e,ee.nextSpawn<=0&&Yt(ee);return}const de=ee.velocity.clone().multiplyScalar(_e*60);ee.mesh.position.add(de),ee.life+=_e;const we=ee.life/ee.maxLife,Ae=Math.sin(Math.PI*we),pe=ee.mesh.material;pe.opacity=.22*Ae,ee.life>=ee.maxLife&&(ee.active=!1,ee.mesh.visible=!1,ee.nextSpawn=8+Math.random()*15)}),v.render()};return rn(),()=>{u=!0,window.cancelAnimationFrame(c),window.removeEventListener("scroll",qt),window.removeEventListener("mousemove",Ct),window.removeEventListener("resize",zt),B.dispose(),H.dispose(),ne.dispose(),he.dispose(),qe.dispose(),ke.dispose(),Q.dispose(),I.dispose(),gt.dispose(),At.forEach(_e=>{const D=_e.mesh.material;D instanceof Ti&&D.dispose()}),q.traverse(_e=>{_e instanceof ti&&(_e.geometry.dispose(),_e.material instanceof Ti&&_e.material.dispose()),_e instanceof za&&(_e.geometry.dispose(),_e.material instanceof Ti&&_e.material.dispose()),_e instanceof ly&&(_e.geometry.dispose(),_e.material instanceof Ti&&_e.material.dispose())}),dt.forEach(({mesh:_e})=>{_e.geometry.dispose(),_e.material instanceof Ti&&_e.material.dispose(),_e.removeFromParent()}),yt.forEach(_e=>{_e.dispose()}),v.dispose(),p.dispose()}},[]);const o=(a,c)=>{a.preventDefault(),t(!1);const u=c.startsWith("#")?c.slice(1):c;if(u==="home"||u===""){window.scrollTo({top:0,behavior:"smooth"});return}const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth",block:"start"})};return O.jsxs("div",{className:"relative isolate min-h-screen w-full bg-transparent",children:[O.jsx(bD,{}),O.jsx("div",{className:`
          fixed inset-0
          z-0
          h-full w-full
          bg-[url('/space-bg.jpeg')]
          bg-cover
          bg-[position:center_center]
          bg-no-repeat
        `}),O.jsx("canvas",{ref:n,className:`
          fixed inset-0
          z-[1]
          h-full w-full
          pointer-events-none
        `}),O.jsx("div",{className:`
          fixed inset-0
          z-[2]
          pointer-events-none
          bg-slate-950/32
        `}),O.jsx("div",{className:"fixed inset-0 z-[3] pointer-events-none",style:{background:`
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.018) 0%,
              rgba(100, 100, 100, 0.008) 35%,
              rgba(0, 0, 0, 0.28) 100%
            )
          `}}),O.jsx("div",{className:"relative z-20",children:O.jsx(BD,{children:O.jsxs(Bt.div,{initial:{clipPath:"inset(50% 0 50% 0)"},animate:{clipPath:"inset(0% 0 0% 0)"},transition:{duration:2.2,ease:[.77,0,.175,1],delay:.1},className:"relative overflow-hidden",children:[O.jsx(rN,{activeSection:i,mobileMenuOpen:e,onToggleMobileMenu:()=>t(a=>!a),onNavigate:o}),O.jsxs("main",{className:`
                relative z-20
                mx-auto
                flex w-full
                max-w-[1200px]
                flex-col
                px-6
                md:px-12
                divide-y
                divide-white/[0.06]
              `,children:[O.jsx(vN,{onNavigate:o}),O.jsx(dN,{}),O.jsx(bN,{}),O.jsx(wN,{}),O.jsx(yN,{}),O.jsx(hN,{})]}),O.jsx(pN,{}),O.jsx(lN,{})]})})})]})}Jw.createRoot(document.getElementById("root")).render(O.jsx(ts.StrictMode,{children:O.jsx(IN,{})}));
