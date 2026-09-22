var nw=Object.defineProperty;var iw=(n,e,t)=>e in n?nw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qe=(n,e,t)=>iw(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Qx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qd={exports:{}},Ma={},Jd={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function rw(){if(y0)return vt;y0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,se,Se){this.props=N,this.context=se,this.refs=T,this.updater=Se||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,se){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,se,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=S.prototype;function P(N,se,Se){this.props=N,this.context=se,this.refs=T,this.updater=Se||y}var U=P.prototype=new _;U.constructor=P,M(U,S.prototype),U.isPureReactComponent=!0;var C=Array.isArray,R=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(N,se,Se){var Ge,ze={},We=null,ae=null;if(se!=null)for(Ge in se.ref!==void 0&&(ae=se.ref),se.key!==void 0&&(We=""+se.key),se)R.call(se,Ge)&&!F.hasOwnProperty(Ge)&&(ze[Ge]=se[Ge]);var de=arguments.length-2;if(de===1)ze.children=Se;else if(1<de){for(var Ee=Array(de),tt=0;tt<de;tt++)Ee[tt]=arguments[tt+2];ze.children=Ee}if(N&&N.defaultProps)for(Ge in de=N.defaultProps,de)ze[Ge]===void 0&&(ze[Ge]=de[Ge]);return{$$typeof:n,type:N,key:We,ref:ae,props:ze,_owner:L.current}}function D(N,se){return{$$typeof:n,type:N.type,key:se,ref:N.ref,props:N.props,_owner:N._owner}}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function j(N){var se={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Se){return se[Se]})}var J=/\/+/g;function ie(N,se){return typeof N=="object"&&N!==null&&N.key!=null?j(""+N.key):se.toString(36)}function z(N,se,Se,Ge,ze){var We=typeof N;(We==="undefined"||We==="boolean")&&(N=null);var ae=!1;if(N===null)ae=!0;else switch(We){case"string":case"number":ae=!0;break;case"object":switch(N.$$typeof){case n:case e:ae=!0}}if(ae)return ae=N,ze=ze(ae),N=Ge===""?"."+ie(ae,0):Ge,C(ze)?(Se="",N!=null&&(Se=N.replace(J,"$&/")+"/"),z(ze,se,Se,"",function(tt){return tt})):ze!=null&&(B(ze)&&(ze=D(ze,Se+(!ze.key||ae&&ae.key===ze.key?"":(""+ze.key).replace(J,"$&/")+"/")+N)),se.push(ze)),1;if(ae=0,Ge=Ge===""?".":Ge+":",C(N))for(var de=0;de<N.length;de++){We=N[de];var Ee=Ge+ie(We,de);ae+=z(We,se,Se,Ee,ze)}else if(Ee=m(N),typeof Ee=="function")for(N=Ee.call(N),de=0;!(We=N.next()).done;)We=We.value,Ee=Ge+ie(We,de++),ae+=z(We,se,Se,Ee,ze);else if(We==="object")throw se=String(N),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ae}function ee(N,se,Se){if(N==null)return N;var Ge=[],ze=0;return z(N,Ge,"","",function(We){return se.call(Se,We,ze++)}),Ge}function he(N){if(N._status===-1){var se=N._result;se=se(),se.then(function(Se){(N._status===0||N._status===-1)&&(N._status=1,N._result=Se)},function(Se){(N._status===0||N._status===-1)&&(N._status=2,N._result=Se)}),N._status===-1&&(N._status=0,N._result=se)}if(N._status===1)return N._result.default;throw N._result}var K={current:null},Y={transition:null},q={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Y,ReactCurrentOwner:L};function $(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ee,forEach:function(N,se,Se){ee(N,function(){se.apply(this,arguments)},Se)},count:function(N){var se=0;return ee(N,function(){se++}),se},toArray:function(N){return ee(N,function(se){return se})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},vt.Component=S,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=P,vt.StrictMode=r,vt.Suspense=f,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,vt.act=$,vt.cloneElement=function(N,se,Se){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Ge=M({},N.props),ze=N.key,We=N.ref,ae=N._owner;if(se!=null){if(se.ref!==void 0&&(We=se.ref,ae=L.current),se.key!==void 0&&(ze=""+se.key),N.type&&N.type.defaultProps)var de=N.type.defaultProps;for(Ee in se)R.call(se,Ee)&&!F.hasOwnProperty(Ee)&&(Ge[Ee]=se[Ee]===void 0&&de!==void 0?de[Ee]:se[Ee])}var Ee=arguments.length-2;if(Ee===1)Ge.children=Se;else if(1<Ee){de=Array(Ee);for(var tt=0;tt<Ee;tt++)de[tt]=arguments[tt+2];Ge.children=de}return{$$typeof:n,type:N.type,key:ze,ref:We,props:Ge,_owner:ae}},vt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},vt.createElement=E,vt.createFactory=function(N){var se=E.bind(null,N);return se.type=N,se},vt.createRef=function(){return{current:null}},vt.forwardRef=function(N){return{$$typeof:d,render:N}},vt.isValidElement=B,vt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:he}},vt.memo=function(N,se){return{$$typeof:h,type:N,compare:se===void 0?null:se}},vt.startTransition=function(N){var se=Y.transition;Y.transition={};try{N()}finally{Y.transition=se}},vt.unstable_act=$,vt.useCallback=function(N,se){return K.current.useCallback(N,se)},vt.useContext=function(N){return K.current.useContext(N)},vt.useDebugValue=function(){},vt.useDeferredValue=function(N){return K.current.useDeferredValue(N)},vt.useEffect=function(N,se){return K.current.useEffect(N,se)},vt.useId=function(){return K.current.useId()},vt.useImperativeHandle=function(N,se,Se){return K.current.useImperativeHandle(N,se,Se)},vt.useInsertionEffect=function(N,se){return K.current.useInsertionEffect(N,se)},vt.useLayoutEffect=function(N,se){return K.current.useLayoutEffect(N,se)},vt.useMemo=function(N,se){return K.current.useMemo(N,se)},vt.useReducer=function(N,se,Se){return K.current.useReducer(N,se,Se)},vt.useRef=function(N){return K.current.useRef(N)},vt.useState=function(N){return K.current.useState(N)},vt.useSyncExternalStore=function(N,se,Se){return K.current.useSyncExternalStore(N,se,Se)},vt.useTransition=function(){return K.current.useTransition()},vt.version="18.3.1",vt}var S0;function ip(){return S0||(S0=1,Jd.exports=rw()),Jd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function sw(){if(M0)return Ma;M0=1;var n=ip(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,h){var g,v={},m=null,y=null;h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(y=f.ref);for(g in f)r.call(f,g)&&!l.hasOwnProperty(g)&&(v[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)v[g]===void 0&&(v[g]=f[g]);return{$$typeof:e,type:d,key:m,ref:y,props:v,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=c,Ma.jsxs=c,Ma}var w0;function ow(){return w0||(w0=1,Qd.exports=sw()),Qd.exports}var O=ow(),ye=ip();const Qr=Qx(ye);var cc={},ef={exports:{}},Yn={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function aw(){return E0||(E0=1,(function(n){function e(Y,q){var $=Y.length;Y.push(q);e:for(;0<$;){var N=$-1>>>1,se=Y[N];if(0<o(se,q))Y[N]=q,Y[$]=se,$=N;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var q=Y[0],$=Y.pop();if($!==q){Y[0]=$;e:for(var N=0,se=Y.length,Se=se>>>1;N<Se;){var Ge=2*(N+1)-1,ze=Y[Ge],We=Ge+1,ae=Y[We];if(0>o(ze,$))We<se&&0>o(ae,ze)?(Y[N]=ae,Y[We]=$,N=We):(Y[N]=ze,Y[Ge]=$,N=Ge);else if(We<se&&0>o(ae,$))Y[N]=ae,Y[We]=$,N=We;else break e}}return q}function o(Y,q){var $=Y.sortIndex-q.sortIndex;return $!==0?$:Y.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var f=[],h=[],g=1,v=null,m=3,y=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(Y){for(var q=t(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=Y)r(h),q.sortIndex=q.expirationTime,e(f,q);else break;q=t(h)}}function C(Y){if(T=!1,U(Y),!M)if(t(f)!==null)M=!0,he(R);else{var q=t(h);q!==null&&K(C,q.startTime-Y)}}function R(Y,q){M=!1,T&&(T=!1,_(E),E=-1),y=!0;var $=m;try{for(U(q),v=t(f);v!==null&&(!(v.expirationTime>q)||Y&&!j());){var N=v.callback;if(typeof N=="function"){v.callback=null,m=v.priorityLevel;var se=N(v.expirationTime<=q);q=n.unstable_now(),typeof se=="function"?v.callback=se:v===t(f)&&r(f),U(q)}else r(f);v=t(f)}if(v!==null)var Se=!0;else{var Ge=t(h);Ge!==null&&K(C,Ge.startTime-q),Se=!1}return Se}finally{v=null,m=$,y=!1}}var L=!1,F=null,E=-1,D=5,B=-1;function j(){return!(n.unstable_now()-B<D)}function J(){if(F!==null){var Y=n.unstable_now();B=Y;var q=!0;try{q=F(!0,Y)}finally{q?ie():(L=!1,F=null)}}else L=!1}var ie;if(typeof P=="function")ie=function(){P(J)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,ee=z.port2;z.port1.onmessage=J,ie=function(){ee.postMessage(null)}}else ie=function(){S(J,0)};function he(Y){F=Y,L||(L=!0,ie())}function K(Y,q){E=S(function(){Y(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,he(R))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(Y){switch(m){case 1:case 2:case 3:var q=3;break;default:q=m}var $=m;m=q;try{return Y()}finally{m=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var $=m;m=Y;try{return q()}finally{m=$}},n.unstable_scheduleCallback=function(Y,q,$){var N=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?N+$:N):$=N,Y){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=$+se,Y={id:g++,callback:q,priorityLevel:Y,startTime:$,expirationTime:se,sortIndex:-1},$>N?(Y.sortIndex=$,e(h,Y),t(f)===null&&Y===t(h)&&(T?(_(E),E=-1):T=!0,K(C,$-N))):(Y.sortIndex=se,e(f,Y),M||y||(M=!0,he(R))),Y},n.unstable_shouldYield=j,n.unstable_wrapCallback=function(Y){var q=m;return function(){var $=m;m=q;try{return Y.apply(this,arguments)}finally{m=$}}}})(nf)),nf}var T0;function lw(){return T0||(T0=1,tf.exports=aw()),tf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function cw(){if(b0)return Yn;b0=1;var n=ip(),e=lw();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(i){return f.call(v,i)?!0:f.call(g,i)?!1:h.test(i)?v[i]=!0:(g[i]=!0,!1)}function y(i,s,a,u){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,u){if(s===null||typeof s>"u"||y(i,s,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,u,p,x,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function P(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(_,P);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(_,P);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(_,P);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function U(i,s,a,u){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,u)&&(a=null),u||p===null?m(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,u=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?i.setAttributeNS(u,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),j=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Y=Symbol.iterator;function q(i){return i===null||typeof i!="object"?null:(i=Y&&i[Y]||i["@@iterator"],typeof i=="function"?i:null)}var $=Object.assign,N;function se(i){if(N===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+i}var Se=!1;function Ge(i,s){if(!i||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var u=ue}Reflect.construct(i,[],s)}else{try{s.call()}catch(ue){u=ue}i.call(s.prototype)}else{try{throw Error()}catch(ue){u=ue}i()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var p=ue.stack.split(`
`),x=u.stack.split(`
`),b=p.length-1,k=x.length-1;1<=b&&0<=k&&p[b]!==x[k];)k--;for(;1<=b&&0<=k;b--,k--)if(p[b]!==x[k]){if(b!==1||k!==1)do if(b--,k--,0>k||p[b]!==x[k]){var V=`
`+p[b].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=b&&0<=k);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?se(i):""}function ze(i){switch(i.tag){case 5:return se(i.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return i=Ge(i.type,!1),i;case 11:return i=Ge(i.type.render,!1),i;case 1:return i=Ge(i.type,!0),i;default:return""}}function We(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case L:return"Portal";case D:return"Profiler";case E:return"StrictMode";case ie:return"Suspense";case z:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case j:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case J:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ee:return s=i.displayName||null,s!==null?s:We(i.type)||"Memo";case he:s=i._payload,i=i._init;try{return We(i(s))}catch{}}return null}function ae(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return We(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function de(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ee(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tt(i){var s=Ee(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(b){u=""+b,x.call(this,b)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Oe(i){i._valueTracker||(i._valueTracker=tt(i))}function ft(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),u="";return i&&(u=Ee(i)?i.checked?"true":"false":i.value),i=u,i!==a?(s.setValue(i),!0):!1}function Wt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ht(i,s){var a=s.checked;return $({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function xt(i,s){var a=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;a=de(s.value!=null?s.value:a),i._wrapperState={initialChecked:u,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function It(i,s){s=s.checked,s!=null&&U(i,"checked",s,!1)}function pt(i,s){It(i,s);var a=de(s.value),u=s.type;if(a!=null)u==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Qt(i,s.type,a):s.hasOwnProperty("defaultValue")&&Qt(i,s.type,de(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ot(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Qt(i,s,a){(s!=="number"||Wt(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var ln=Array.isArray;function Nt(i,s,a,u){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&u&&(i[a].defaultSelected=!0)}else{for(a=""+de(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,u&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Xt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function W(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ln(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:de(a)}}function dn(i,s){var a=de(s.value),u=de(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),u!=null&&(i.defaultValue=""+u)}function Tt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function I(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?I(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Z,oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,u,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,u,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Z.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function fe(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){Ae.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),we[s]=we[i]})});function pe(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||we.hasOwnProperty(i)&&we[i]?(""+s).trim():s+"px"}function ge(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=pe(a,s[a],u);a==="float"&&(a="cssFloat"),u?i.setProperty(a,p):i[a]=p}}var Pe=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(i,s){if(s){if(Pe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function Ke(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var nt=null,ot=null,H=null;function Ce(i){if(i=aa(i)){if(typeof nt!="function")throw Error(t(280));var s=i.stateNode;s&&(s=El(s),nt(i.stateNode,i.type,s))}}function me(i){ot?H?H.push(i):H=[i]:ot=i}function Re(){if(ot){var i=ot,s=H;if(H=ot=null,Ce(i),s)for(i=0;i<s.length;i++)Ce(s[i])}}function Fe(i,s){return i(s)}function ve(){}var Je=!1;function Ye(i,s,a){if(Je)return i(s,a);Je=!0;try{return Fe(i,s,a)}finally{Je=!1,(ot!==null||H!==null)&&(ve(),Re())}}function bt(i,s){var a=i.stateNode;if(a===null)return null;var u=El(a);if(u===null)return null;a=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var wt=!1;if(d)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){wt=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{wt=!1}function oi(i,s,a,u,p,x,b,k,V){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(a,ue)}catch(_e){this.onError(_e)}}var ns=!1,Os=null,is=!1,rs=null,Su={onError:function(i){ns=!0,Os=i}};function ol(i,s,a,u,p,x,b,k,V){ns=!1,Os=null,oi.apply(Su,arguments)}function al(i,s,a,u,p,x,b,k,V){if(ol.apply(this,arguments),ns){if(ns){var ue=Os;ns=!1,Os=null}else throw Error(t(198));is||(is=!0,rs=ue)}}function On(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function ks(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Vo(i){if(On(i)!==i)throw Error(t(188))}function ll(i){var s=i.alternate;if(!s){if(s=On(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,u=s;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return Vo(p),i;if(x===u)return Vo(p),s;x=x.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=x;else{for(var b=!1,k=p.child;k;){if(k===a){b=!0,a=p,u=x;break}if(k===u){b=!0,u=p,a=x;break}k=k.sibling}if(!b){for(k=x.child;k;){if(k===a){b=!0,a=x,u=p;break}if(k===u){b=!0,u=x,a=p;break}k=k.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function ss(i){return i=ll(i),i!==null?zo(i):null}function zo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=zo(i);if(s!==null)return s;i=i.sibling}return null}var os=e.unstable_scheduleCallback,Ho=e.unstable_cancelCallback,cl=e.unstable_shouldYield,Mu=e.unstable_requestPaint,qt=e.unstable_now,wu=e.unstable_getCurrentPriorityLevel,Go=e.unstable_ImmediatePriority,Wo=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,G=e.unstable_LowPriority,ce=e.unstable_IdlePriority,te=null,Q=null;function Ie(i){if(Q&&typeof Q.onCommitFiberRoot=="function")try{Q.onCommitFiberRoot(te,i,void 0,(i.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Ze,Ne=Math.log,Xe=Math.LN2;function Ze(i){return i>>>=0,i===0?32:31-(Ne(i)/Xe|0)|0}var ct=64,dt=4194304;function Ve(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function _t(i,s){var a=i.pendingLanes;if(a===0)return 0;var u=0,p=i.suspendedLanes,x=i.pingedLanes,b=a&268435455;if(b!==0){var k=b&~p;k!==0?u=Ve(k):(x&=b,x!==0&&(u=Ve(x)))}else b=a&~p,b!==0?u=Ve(b):x!==0&&(u=Ve(x));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,x=s&-s,p>=x||p===16&&(x&4194240)!==0))return s;if((u&4)!==0&&(u|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)a=31-De(s),p=1<<a,u|=i[a],s&=~p;return u}function Jt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(i,s){for(var a=i.suspendedLanes,u=i.pingedLanes,p=i.expirationTimes,x=i.pendingLanes;0<x;){var b=31-De(x),k=1<<b,V=p[b];V===-1?((k&a)===0||(k&u)!==0)&&(p[b]=Jt(k,s)):V<=s&&(i.expiredLanes|=k),x&=~k}}function Pt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function fn(){var i=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),i}function ke(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function rn(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-De(s),i[s]=a}function yt(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-De(a),x=1<<p;s[p]=0,u[p]=-1,i[p]=-1,a&=~x}}function An(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var u=31-De(a),p=1<<u;p&s|i[u]&s&&(i[u]|=s),a&=~p}}var mt=0;function Si(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var tr,At,jt,Mi,Ut,ai=!1,wi=[],Ei=null,wr=null,Er=null,Xo=new Map,jo=new Map,Tr=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function im(i,s){switch(i){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Xo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(s.pointerId)}}function Yo(i,s,a,u,p,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:a,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},s!==null&&(s=aa(s),s!==null&&At(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function TS(i,s,a,u,p){switch(s){case"focusin":return Ei=Yo(Ei,i,s,a,u,p),!0;case"dragenter":return wr=Yo(wr,i,s,a,u,p),!0;case"mouseover":return Er=Yo(Er,i,s,a,u,p),!0;case"pointerover":var x=p.pointerId;return Xo.set(x,Yo(Xo.get(x)||null,i,s,a,u,p)),!0;case"gotpointercapture":return x=p.pointerId,jo.set(x,Yo(jo.get(x)||null,i,s,a,u,p)),!0}return!1}function rm(i){var s=as(i.target);if(s!==null){var a=On(s);if(a!==null){if(s=a.tag,s===13){if(s=ks(a),s!==null){i.blockedOn=s,Ut(i.priority,function(){jt(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ul(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=Tu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var u=new a.constructor(a.type,a);be=u,a.target.dispatchEvent(u),be=null}else return s=aa(a),s!==null&&At(s),i.blockedOn=a,!1;s.shift()}return!0}function sm(i,s,a){ul(i)&&a.delete(s)}function bS(){ai=!1,Ei!==null&&ul(Ei)&&(Ei=null),wr!==null&&ul(wr)&&(wr=null),Er!==null&&ul(Er)&&(Er=null),Xo.forEach(sm),jo.forEach(sm)}function qo(i,s){i.blockedOn===s&&(i.blockedOn=null,ai||(ai=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bS)))}function $o(i){function s(p){return qo(p,i)}if(0<wi.length){qo(wi[0],i);for(var a=1;a<wi.length;a++){var u=wi[a];u.blockedOn===i&&(u.blockedOn=null)}}for(Ei!==null&&qo(Ei,i),wr!==null&&qo(wr,i),Er!==null&&qo(Er,i),Xo.forEach(s),jo.forEach(s),a=0;a<Tr.length;a++)u=Tr[a],u.blockedOn===i&&(u.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)rm(a),a.blockedOn===null&&Tr.shift()}var Bs=C.ReactCurrentBatchConfig,dl=!0;function AS(i,s,a,u){var p=mt,x=Bs.transition;Bs.transition=null;try{mt=1,Eu(i,s,a,u)}finally{mt=p,Bs.transition=x}}function CS(i,s,a,u){var p=mt,x=Bs.transition;Bs.transition=null;try{mt=4,Eu(i,s,a,u)}finally{mt=p,Bs.transition=x}}function Eu(i,s,a,u){if(dl){var p=Tu(i,s,a,u);if(p===null)Hu(i,s,u,fl,a),im(i,u);else if(TS(p,i,s,a,u))u.stopPropagation();else if(im(i,u),s&4&&-1<ES.indexOf(i)){for(;p!==null;){var x=aa(p);if(x!==null&&tr(x),x=Tu(i,s,a,u),x===null&&Hu(i,s,u,fl,a),x===p)break;p=x}p!==null&&u.stopPropagation()}else Hu(i,s,u,null,a)}}var fl=null;function Tu(i,s,a,u){if(fl=null,i=Ke(u),i=as(i),i!==null)if(s=On(i),s===null)i=null;else if(a=s.tag,a===13){if(i=ks(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return fl=i,null}function om(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case Go:return 1;case Wo:return 4;case A:case G:return 16;case ce:return 536870912;default:return 16}default:return 16}}var br=null,bu=null,hl=null;function am(){if(hl)return hl;var i,s=bu,a=s.length,u,p="value"in br?br.value:br.textContent,x=p.length;for(i=0;i<a&&s[i]===p[i];i++);var b=a-i;for(u=1;u<=b&&s[a-u]===p[x-u];u++);return hl=p.slice(i,1<u?1-u:void 0)}function pl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ml(){return!0}function lm(){return!1}function Zn(i){function s(a,u,p,x,b){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(a=i[k],this[k]=a?a(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?ml:lm,this.isPropagationStopped=lm,this}return $(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),s}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Zn(Vs),Ko=$({},Vs,{view:0,detail:0}),RS=Zn(Ko),Cu,Ru,Zo,gl=$({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Zo&&(Zo&&i.type==="mousemove"?(Cu=i.screenX-Zo.screenX,Ru=i.screenY-Zo.screenY):Ru=Cu=0,Zo=i),Cu)},movementY:function(i){return"movementY"in i?i.movementY:Ru}}),cm=Zn(gl),PS=$({},gl,{dataTransfer:0}),LS=Zn(PS),DS=$({},Ko,{relatedTarget:0}),Pu=Zn(DS),NS=$({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=Zn(NS),US=$({},Vs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),FS=Zn(US),OS=$({},Vs,{data:0}),um=Zn(OS),kS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=VS[i])?!!s[i]:!1}function Lu(){return zS}var HS=$({},Ko,{key:function(i){if(i.key){var s=kS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=pl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?BS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(i){return i.type==="keypress"?pl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?pl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),GS=Zn(HS),WS=$({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Zn(WS),XS=$({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),jS=Zn(XS),YS=$({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),qS=Zn(YS),$S=$({},gl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Zn($S),ZS=[9,13,27,32],Du=d&&"CompositionEvent"in window,Qo=null;d&&"documentMode"in document&&(Qo=document.documentMode);var QS=d&&"TextEvent"in window&&!Qo,fm=d&&(!Du||Qo&&8<Qo&&11>=Qo),hm=" ",pm=!1;function mm(i,s){switch(i){case"keyup":return ZS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var zs=!1;function JS(i,s){switch(i){case"compositionend":return gm(s);case"keypress":return s.which!==32?null:(pm=!0,hm);case"textInput":return i=s.data,i===hm&&pm?null:i;default:return null}}function eM(i,s){if(zs)return i==="compositionend"||!Du&&mm(i,s)?(i=am(),hl=bu=br=null,zs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return fm&&s.locale!=="ko"?null:s.data;default:return null}}var tM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!tM[i.type]:s==="textarea"}function xm(i,s,a,u){me(u),s=Sl(s,"onChange"),0<s.length&&(a=new Au("onChange","change",null,a,u),i.push({event:a,listeners:s}))}var Jo=null,ea=null;function nM(i){Fm(i,0)}function vl(i){var s=js(i);if(ft(s))return i}function iM(i,s){if(i==="change")return s}var _m=!1;if(d){var Nu;if(d){var Iu="oninput"in document;if(!Iu){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),Iu=typeof ym.oninput=="function"}Nu=Iu}else Nu=!1;_m=Nu&&(!document.documentMode||9<document.documentMode)}function Sm(){Jo&&(Jo.detachEvent("onpropertychange",Mm),ea=Jo=null)}function Mm(i){if(i.propertyName==="value"&&vl(ea)){var s=[];xm(s,ea,i,Ke(i)),Ye(nM,s)}}function rM(i,s,a){i==="focusin"?(Sm(),Jo=s,ea=a,Jo.attachEvent("onpropertychange",Mm)):i==="focusout"&&Sm()}function sM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return vl(ea)}function oM(i,s){if(i==="click")return vl(s)}function aM(i,s){if(i==="input"||i==="change")return vl(s)}function lM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ti=typeof Object.is=="function"?Object.is:lM;function ta(i,s){if(Ti(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),u=Object.keys(s);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!f.call(s,p)||!Ti(i[p],s[p]))return!1}return!0}function wm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Em(i,s){var a=wm(i);i=0;for(var u;a;){if(a.nodeType===3){if(u=i+a.textContent.length,i<=s&&u>=s)return{node:a,offset:s-i};i=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wm(a)}}function Tm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Tm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function bm(){for(var i=window,s=Wt();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=Wt(i.document)}return s}function Uu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function cM(i){var s=bm(),a=i.focusedElem,u=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&Tm(a.ownerDocument.documentElement,a)){if(u!==null&&Uu(a)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!i.extend&&x>u&&(p=u,u=x,x=p),p=Em(a,x);var b=Em(a,u);p&&b&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),x>u?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var uM=d&&"documentMode"in document&&11>=document.documentMode,Hs=null,Fu=null,na=null,Ou=!1;function Am(i,s,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||Hs==null||Hs!==Wt(u)||(u=Hs,"selectionStart"in u&&Uu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),na&&ta(na,u)||(na=u,u=Sl(Fu,"onSelect"),0<u.length&&(s=new Au("onSelect","select",null,s,a),i.push({event:s,listeners:u}),s.target=Hs)))}function xl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Gs={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},ku={},Cm={};d&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function _l(i){if(ku[i])return ku[i];if(!Gs[i])return i;var s=Gs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Cm)return ku[i]=s[a];return i}var Rm=_l("animationend"),Pm=_l("animationiteration"),Lm=_l("animationstart"),Dm=_l("transitionend"),Nm=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(i,s){Nm.set(i,s),l(s,[i])}for(var Bu=0;Bu<Im.length;Bu++){var Vu=Im[Bu],dM=Vu.toLowerCase(),fM=Vu[0].toUpperCase()+Vu.slice(1);Ar(dM,"on"+fM)}Ar(Rm,"onAnimationEnd"),Ar(Pm,"onAnimationIteration"),Ar(Lm,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Dm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Um(i,s,a){var u=i.type||"unknown-event";i.currentTarget=a,al(u,s,void 0,i),i.currentTarget=null}function Fm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var u=i[a],p=u.event;u=u.listeners;e:{var x=void 0;if(s)for(var b=u.length-1;0<=b;b--){var k=u[b],V=k.instance,ue=k.currentTarget;if(k=k.listener,V!==x&&p.isPropagationStopped())break e;Um(p,k,ue),x=V}else for(b=0;b<u.length;b++){if(k=u[b],V=k.instance,ue=k.currentTarget,k=k.listener,V!==x&&p.isPropagationStopped())break e;Um(p,k,ue),x=V}}}if(is)throw i=rs,is=!1,rs=null,i}function zt(i,s){var a=s[qu];a===void 0&&(a=s[qu]=new Set);var u=i+"__bubble";a.has(u)||(Om(s,i,2,!1),a.add(u))}function zu(i,s,a){var u=0;s&&(u|=4),Om(a,i,u,s)}var yl="_reactListening"+Math.random().toString(36).slice(2);function ra(i){if(!i[yl]){i[yl]=!0,r.forEach(function(a){a!=="selectionchange"&&(hM.has(a)||zu(a,!1,i),zu(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[yl]||(s[yl]=!0,zu("selectionchange",!1,s))}}function Om(i,s,a,u){switch(om(s)){case 1:var p=AS;break;case 4:p=CS;break;default:p=Eu}a=p.bind(null,s,a,i),p=void 0,!wt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function Hu(i,s,a,u,p){var x=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var k=u.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;b=b.return}for(;k!==null;){if(b=as(k),b===null)return;if(V=b.tag,V===5||V===6){u=x=b;continue e}k=k.parentNode}}u=u.return}Ye(function(){var ue=x,_e=Ke(a),Me=[];e:{var xe=Nm.get(i);if(xe!==void 0){var Be=Au,je=i;switch(i){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":Be=GS;break;case"focusin":je="focus",Be=Pu;break;case"focusout":je="blur",Be=Pu;break;case"beforeblur":case"afterblur":Be=Pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=LS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=jS;break;case Rm:case Pm:case Lm:Be=IS;break;case Dm:Be=qS;break;case"scroll":Be=RS;break;case"wheel":Be=KS;break;case"copy":case"cut":case"paste":Be=FS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=dm}var qe=(s&4)!==0,sn=!qe&&i==="scroll",ne=qe?xe!==null?xe+"Capture":null:xe;qe=[];for(var X=ue,re;X!==null;){re=X;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,ne!==null&&(Te=bt(X,ne),Te!=null&&qe.push(sa(X,Te,re)))),sn)break;X=X.return}0<qe.length&&(xe=new Be(xe,je,null,a,_e),Me.push({event:xe,listeners:qe}))}}if((s&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",Be=i==="mouseout"||i==="pointerout",xe&&a!==be&&(je=a.relatedTarget||a.fromElement)&&(as(je)||je[nr]))break e;if((Be||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,Be?(je=a.relatedTarget||a.toElement,Be=ue,je=je?as(je):null,je!==null&&(sn=On(je),je!==sn||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=ue),Be!==je)){if(qe=cm,Te="onMouseLeave",ne="onMouseEnter",X="mouse",(i==="pointerout"||i==="pointerover")&&(qe=dm,Te="onPointerLeave",ne="onPointerEnter",X="pointer"),sn=Be==null?xe:js(Be),re=je==null?xe:js(je),xe=new qe(Te,X+"leave",Be,a,_e),xe.target=sn,xe.relatedTarget=re,Te=null,as(_e)===ue&&(qe=new qe(ne,X+"enter",je,a,_e),qe.target=re,qe.relatedTarget=sn,Te=qe),sn=Te,Be&&je)t:{for(qe=Be,ne=je,X=0,re=qe;re;re=Ws(re))X++;for(re=0,Te=ne;Te;Te=Ws(Te))re++;for(;0<X-re;)qe=Ws(qe),X--;for(;0<re-X;)ne=Ws(ne),re--;for(;X--;){if(qe===ne||ne!==null&&qe===ne.alternate)break t;qe=Ws(qe),ne=Ws(ne)}qe=null}else qe=null;Be!==null&&km(Me,xe,Be,qe,!1),je!==null&&sn!==null&&km(Me,sn,je,qe,!0)}}e:{if(xe=ue?js(ue):window,Be=xe.nodeName&&xe.nodeName.toLowerCase(),Be==="select"||Be==="input"&&xe.type==="file")var et=iM;else if(vm(xe))if(_m)et=aM;else{et=sM;var it=rM}else(Be=xe.nodeName)&&Be.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(et=oM);if(et&&(et=et(i,ue))){xm(Me,et,a,_e);break e}it&&it(i,xe,ue),i==="focusout"&&(it=xe._wrapperState)&&it.controlled&&xe.type==="number"&&Qt(xe,"number",xe.value)}switch(it=ue?js(ue):window,i){case"focusin":(vm(it)||it.contentEditable==="true")&&(Hs=it,Fu=ue,na=null);break;case"focusout":na=Fu=Hs=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Am(Me,a,_e);break;case"selectionchange":if(uM)break;case"keydown":case"keyup":Am(Me,a,_e)}var rt;if(Du)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else zs?mm(i,a)&&(at="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(fm&&a.locale!=="ko"&&(zs||at!=="onCompositionStart"?at==="onCompositionEnd"&&zs&&(rt=am()):(br=_e,bu="value"in br?br.value:br.textContent,zs=!0)),it=Sl(ue,at),0<it.length&&(at=new um(at,i,null,a,_e),Me.push({event:at,listeners:it}),rt?at.data=rt:(rt=gm(a),rt!==null&&(at.data=rt)))),(rt=QS?JS(i,a):eM(i,a))&&(ue=Sl(ue,"onBeforeInput"),0<ue.length&&(_e=new um("onBeforeInput","beforeinput",null,a,_e),Me.push({event:_e,listeners:ue}),_e.data=rt))}Fm(Me,s)})}function sa(i,s,a){return{instance:i,listener:s,currentTarget:a}}function Sl(i,s){for(var a=s+"Capture",u=[];i!==null;){var p=i,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=bt(i,a),x!=null&&u.unshift(sa(i,x,p)),x=bt(i,s),x!=null&&u.push(sa(i,x,p))),i=i.return}return u}function Ws(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function km(i,s,a,u,p){for(var x=s._reactName,b=[];a!==null&&a!==u;){var k=a,V=k.alternate,ue=k.stateNode;if(V!==null&&V===u)break;k.tag===5&&ue!==null&&(k=ue,p?(V=bt(a,x),V!=null&&b.unshift(sa(a,V,k))):p||(V=bt(a,x),V!=null&&b.push(sa(a,V,k)))),a=a.return}b.length!==0&&i.push({event:s,listeners:b})}var pM=/\r\n?/g,mM=/\u0000|\uFFFD/g;function Bm(i){return(typeof i=="string"?i:""+i).replace(pM,`
`).replace(mM,"")}function Ml(i,s,a){if(s=Bm(s),Bm(i)!==s&&a)throw Error(t(425))}function wl(){}var Gu=null,Wu=null;function Xu(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,gM=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,vM=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(i){return Vm.resolve(null).then(i).catch(xM)}:ju;function xM(i){setTimeout(function(){throw i})}function Yu(i,s){var a=s,u=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){i.removeChild(p),$o(s);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);$o(s)}function Cr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function zm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Xs,oa="__reactProps$"+Xs,nr="__reactContainer$"+Xs,qu="__reactEvents$"+Xs,_M="__reactListeners$"+Xs,yM="__reactHandles$"+Xs;function as(i){var s=i[Bi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[nr]||a[Bi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=zm(i);i!==null;){if(a=i[Bi])return a;i=zm(i)}return s}i=a,a=i.parentNode}return null}function aa(i){return i=i[Bi]||i[nr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function El(i){return i[oa]||null}var $u=[],Ys=-1;function Rr(i){return{current:i}}function Ht(i){0>Ys||(i.current=$u[Ys],$u[Ys]=null,Ys--)}function Vt(i,s){Ys++,$u[Ys]=i.current,i.current=s}var Pr={},Cn=Rr(Pr),Hn=Rr(!1),ls=Pr;function qs(i,s){var a=i.type.contextTypes;if(!a)return Pr;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=s[x];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(i){return i=i.childContextTypes,i!=null}function Tl(){Ht(Hn),Ht(Cn)}function Hm(i,s,a){if(Cn.current!==Pr)throw Error(t(168));Vt(Cn,s),Vt(Hn,a)}function Gm(i,s,a){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,ae(i)||"Unknown",p));return $({},a,u)}function bl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Pr,ls=Cn.current,Vt(Cn,i),Vt(Hn,Hn.current),!0}function Wm(i,s,a){var u=i.stateNode;if(!u)throw Error(t(169));a?(i=Gm(i,s,ls),u.__reactInternalMemoizedMergedChildContext=i,Ht(Hn),Ht(Cn),Vt(Cn,i)):Ht(Hn),Vt(Hn,a)}var ir=null,Al=!1,Ku=!1;function Xm(i){ir===null?ir=[i]:ir.push(i)}function SM(i){Al=!0,Xm(i)}function Lr(){if(!Ku&&ir!==null){Ku=!0;var i=0,s=mt;try{var a=ir;for(mt=1;i<a.length;i++){var u=a[i];do u=u(!0);while(u!==null)}ir=null,Al=!1}catch(p){throw ir!==null&&(ir=ir.slice(i+1)),os(Go,Lr),p}finally{mt=s,Ku=!1}}return null}var $s=[],Ks=0,Cl=null,Rl=0,li=[],ci=0,cs=null,rr=1,sr="";function us(i,s){$s[Ks++]=Rl,$s[Ks++]=Cl,Cl=i,Rl=s}function jm(i,s,a){li[ci++]=rr,li[ci++]=sr,li[ci++]=cs,cs=i;var u=rr;i=sr;var p=32-De(u)-1;u&=~(1<<p),a+=1;var x=32-De(s)+p;if(30<x){var b=p-p%5;x=(u&(1<<b)-1).toString(32),u>>=b,p-=b,rr=1<<32-De(s)+p|a<<p|u,sr=x+i}else rr=1<<x|a<<p|u,sr=i}function Zu(i){i.return!==null&&(us(i,1),jm(i,1,0))}function Qu(i){for(;i===Cl;)Cl=$s[--Ks],$s[Ks]=null,Rl=$s[--Ks],$s[Ks]=null;for(;i===cs;)cs=li[--ci],li[ci]=null,sr=li[--ci],li[ci]=null,rr=li[--ci],li[ci]=null}var Qn=null,Jn=null,Yt=!1,bi=null;function Ym(i,s){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function qm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=Cr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=cs!==null?{id:rr,overflow:sr}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Qn=i,Jn=null,!0):!1;default:return!1}}function Ju(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ed(i){if(Yt){var s=Jn;if(s){var a=s;if(!qm(i,s)){if(Ju(i))throw Error(t(418));s=Cr(a.nextSibling);var u=Qn;s&&qm(i,s)?Ym(u,a):(i.flags=i.flags&-4097|2,Yt=!1,Qn=i)}}else{if(Ju(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,Qn=i}}}function $m(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qn=i}function Pl(i){if(i!==Qn)return!1;if(!Yt)return $m(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Xu(i.type,i.memoizedProps)),s&&(s=Jn)){if(Ju(i))throw Km(),Error(t(418));for(;s;)Ym(i,s),s=Cr(s.nextSibling)}if($m(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Jn=Cr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Jn=null}}else Jn=Qn?Cr(i.stateNode.nextSibling):null;return!0}function Km(){for(var i=Jn;i;)i=Cr(i.nextSibling)}function Zs(){Jn=Qn=null,Yt=!1}function td(i){bi===null?bi=[i]:bi.push(i)}var MM=C.ReactCurrentBatchConfig;function la(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,i));var p=u,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(b){var k=p.refs;b===null?delete k[x]:k[x]=b},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Ll(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Zm(i){var s=i._init;return s(i._payload)}function Qm(i){function s(ne,X){if(i){var re=ne.deletions;re===null?(ne.deletions=[X],ne.flags|=16):re.push(X)}}function a(ne,X){if(!i)return null;for(;X!==null;)s(ne,X),X=X.sibling;return null}function u(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function p(ne,X){return ne=Br(ne,X),ne.index=0,ne.sibling=null,ne}function x(ne,X,re){return ne.index=re,i?(re=ne.alternate,re!==null?(re=re.index,re<X?(ne.flags|=2,X):re):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function b(ne){return i&&ne.alternate===null&&(ne.flags|=2),ne}function k(ne,X,re,Te){return X===null||X.tag!==6?(X=jd(re,ne.mode,Te),X.return=ne,X):(X=p(X,re),X.return=ne,X)}function V(ne,X,re,Te){var et=re.type;return et===F?_e(ne,X,re.props.children,Te,re.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===he&&Zm(et)===X.type)?(Te=p(X,re.props),Te.ref=la(ne,X,re),Te.return=ne,Te):(Te=tc(re.type,re.key,re.props,null,ne.mode,Te),Te.ref=la(ne,X,re),Te.return=ne,Te)}function ue(ne,X,re,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=Yd(re,ne.mode,Te),X.return=ne,X):(X=p(X,re.children||[]),X.return=ne,X)}function _e(ne,X,re,Te,et){return X===null||X.tag!==7?(X=xs(re,ne.mode,Te,et),X.return=ne,X):(X=p(X,re),X.return=ne,X)}function Me(ne,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=jd(""+X,ne.mode,re),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case R:return re=tc(X.type,X.key,X.props,null,ne.mode,re),re.ref=la(ne,null,X),re.return=ne,re;case L:return X=Yd(X,ne.mode,re),X.return=ne,X;case he:var Te=X._init;return Me(ne,Te(X._payload),re)}if(ln(X)||q(X))return X=xs(X,ne.mode,re,null),X.return=ne,X;Ll(ne,X)}return null}function xe(ne,X,re,Te){var et=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return et!==null?null:k(ne,X,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case R:return re.key===et?V(ne,X,re,Te):null;case L:return re.key===et?ue(ne,X,re,Te):null;case he:return et=re._init,xe(ne,X,et(re._payload),Te)}if(ln(re)||q(re))return et!==null?null:_e(ne,X,re,Te,null);Ll(ne,re)}return null}function Be(ne,X,re,Te,et){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ne=ne.get(re)||null,k(X,ne,""+Te,et);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case R:return ne=ne.get(Te.key===null?re:Te.key)||null,V(X,ne,Te,et);case L:return ne=ne.get(Te.key===null?re:Te.key)||null,ue(X,ne,Te,et);case he:var it=Te._init;return Be(ne,X,re,it(Te._payload),et)}if(ln(Te)||q(Te))return ne=ne.get(re)||null,_e(X,ne,Te,et,null);Ll(X,Te)}return null}function je(ne,X,re,Te){for(var et=null,it=null,rt=X,at=X=0,_n=null;rt!==null&&at<re.length;at++){rt.index>at?(_n=rt,rt=null):_n=rt.sibling;var Ct=xe(ne,rt,re[at],Te);if(Ct===null){rt===null&&(rt=_n);break}i&&rt&&Ct.alternate===null&&s(ne,rt),X=x(Ct,X,at),it===null?et=Ct:it.sibling=Ct,it=Ct,rt=_n}if(at===re.length)return a(ne,rt),Yt&&us(ne,at),et;if(rt===null){for(;at<re.length;at++)rt=Me(ne,re[at],Te),rt!==null&&(X=x(rt,X,at),it===null?et=rt:it.sibling=rt,it=rt);return Yt&&us(ne,at),et}for(rt=u(ne,rt);at<re.length;at++)_n=Be(rt,ne,at,re[at],Te),_n!==null&&(i&&_n.alternate!==null&&rt.delete(_n.key===null?at:_n.key),X=x(_n,X,at),it===null?et=_n:it.sibling=_n,it=_n);return i&&rt.forEach(function(Vr){return s(ne,Vr)}),Yt&&us(ne,at),et}function qe(ne,X,re,Te){var et=q(re);if(typeof et!="function")throw Error(t(150));if(re=et.call(re),re==null)throw Error(t(151));for(var it=et=null,rt=X,at=X=0,_n=null,Ct=re.next();rt!==null&&!Ct.done;at++,Ct=re.next()){rt.index>at?(_n=rt,rt=null):_n=rt.sibling;var Vr=xe(ne,rt,Ct.value,Te);if(Vr===null){rt===null&&(rt=_n);break}i&&rt&&Vr.alternate===null&&s(ne,rt),X=x(Vr,X,at),it===null?et=Vr:it.sibling=Vr,it=Vr,rt=_n}if(Ct.done)return a(ne,rt),Yt&&us(ne,at),et;if(rt===null){for(;!Ct.done;at++,Ct=re.next())Ct=Me(ne,Ct.value,Te),Ct!==null&&(X=x(Ct,X,at),it===null?et=Ct:it.sibling=Ct,it=Ct);return Yt&&us(ne,at),et}for(rt=u(ne,rt);!Ct.done;at++,Ct=re.next())Ct=Be(rt,ne,at,Ct.value,Te),Ct!==null&&(i&&Ct.alternate!==null&&rt.delete(Ct.key===null?at:Ct.key),X=x(Ct,X,at),it===null?et=Ct:it.sibling=Ct,it=Ct);return i&&rt.forEach(function(tw){return s(ne,tw)}),Yt&&us(ne,at),et}function sn(ne,X,re,Te){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case R:e:{for(var et=re.key,it=X;it!==null;){if(it.key===et){if(et=re.type,et===F){if(it.tag===7){a(ne,it.sibling),X=p(it,re.props.children),X.return=ne,ne=X;break e}}else if(it.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===he&&Zm(et)===it.type){a(ne,it.sibling),X=p(it,re.props),X.ref=la(ne,it,re),X.return=ne,ne=X;break e}a(ne,it);break}else s(ne,it);it=it.sibling}re.type===F?(X=xs(re.props.children,ne.mode,Te,re.key),X.return=ne,ne=X):(Te=tc(re.type,re.key,re.props,null,ne.mode,Te),Te.ref=la(ne,X,re),Te.return=ne,ne=Te)}return b(ne);case L:e:{for(it=re.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){a(ne,X.sibling),X=p(X,re.children||[]),X.return=ne,ne=X;break e}else{a(ne,X);break}else s(ne,X);X=X.sibling}X=Yd(re,ne.mode,Te),X.return=ne,ne=X}return b(ne);case he:return it=re._init,sn(ne,X,it(re._payload),Te)}if(ln(re))return je(ne,X,re,Te);if(q(re))return qe(ne,X,re,Te);Ll(ne,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(a(ne,X.sibling),X=p(X,re),X.return=ne,ne=X):(a(ne,X),X=jd(re,ne.mode,Te),X.return=ne,ne=X),b(ne)):a(ne,X)}return sn}var Qs=Qm(!0),Jm=Qm(!1),Dl=Rr(null),Nl=null,Js=null,nd=null;function id(){nd=Js=Nl=null}function rd(i){var s=Dl.current;Ht(Dl),i._currentValue=s}function sd(i,s,a){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===a)break;i=i.return}}function eo(i,s){Nl=i,nd=Js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Wn=!0),i.firstContext=null)}function ui(i){var s=i._currentValue;if(nd!==i)if(i={context:i,memoizedValue:s,next:null},Js===null){if(Nl===null)throw Error(t(308));Js=i,Nl.dependencies={lanes:0,firstContext:i}}else Js=Js.next=i;return s}var ds=null;function od(i){ds===null?ds=[i]:ds.push(i)}function eg(i,s,a,u){var p=s.interleaved;return p===null?(a.next=a,od(s)):(a.next=p.next,p.next=a),s.interleaved=a,or(i,u)}function or(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Dr=!1;function ad(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ar(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Nr(i,s,a){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,or(i,a)}return p=u.interleaved,p===null?(s.next=s,od(u)):(s.next=p.next,p.next=s),u.interleaved=s,or(i,a)}function Il(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,a|=u,s.lanes=a,An(i,a)}}function ng(i,s){var a=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=b:x=x.next=b,a=a.next}while(a!==null);x===null?p=x=s:x=x.next=s}else p=x=s;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Ul(i,s,a,u){var p=i.updateQueue;Dr=!1;var x=p.firstBaseUpdate,b=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var V=k,ue=V.next;V.next=null,b===null?x=ue:b.next=ue,b=V;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,k=_e.lastBaseUpdate,k!==b&&(k===null?_e.firstBaseUpdate=ue:k.next=ue,_e.lastBaseUpdate=V))}if(x!==null){var Me=p.baseState;b=0,_e=ue=V=null,k=x;do{var xe=k.lane,Be=k.eventTime;if((u&xe)===xe){_e!==null&&(_e=_e.next={eventTime:Be,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var je=i,qe=k;switch(xe=s,Be=a,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Me=je.call(Be,Me,xe);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,xe=typeof je=="function"?je.call(Be,Me,xe):je,xe==null)break e;Me=$({},Me,xe);break e;case 2:Dr=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,xe=p.effects,xe===null?p.effects=[k]:xe.push(k))}else Be={eventTime:Be,lane:xe,tag:k.tag,payload:k.payload,callback:k.callback,next:null},_e===null?(ue=_e=Be,V=Me):_e=_e.next=Be,b|=xe;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;xe=k,k=xe.next,xe.next=null,p.lastBaseUpdate=xe,p.shared.pending=null}}while(!0);if(_e===null&&(V=Me),p.baseState=V,p.firstBaseUpdate=ue,p.lastBaseUpdate=_e,s=p.shared.interleaved,s!==null){p=s;do b|=p.lane,p=p.next;while(p!==s)}else x===null&&(p.shared.lanes=0);ps|=b,i.lanes=b,i.memoizedState=Me}}function ig(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ca={},Vi=Rr(ca),ua=Rr(ca),da=Rr(ca);function fs(i){if(i===ca)throw Error(t(174));return i}function ld(i,s){switch(Vt(da,s),Vt(ua,i),Vt(Vi,ca),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=w(s,i)}Ht(Vi),Vt(Vi,s)}function to(){Ht(Vi),Ht(ua),Ht(da)}function rg(i){fs(da.current);var s=fs(Vi.current),a=w(s,i.type);s!==a&&(Vt(ua,i),Vt(Vi,a))}function cd(i){ua.current===i&&(Ht(Vi),Ht(ua))}var $t=Rr(0);function Fl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ud=[];function dd(){for(var i=0;i<ud.length;i++)ud[i]._workInProgressVersionPrimary=null;ud.length=0}var Ol=C.ReactCurrentDispatcher,fd=C.ReactCurrentBatchConfig,hs=0,Kt=null,hn=null,vn=null,kl=!1,fa=!1,ha=0,wM=0;function Rn(){throw Error(t(321))}function hd(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!Ti(i[a],s[a]))return!1;return!0}function pd(i,s,a,u,p,x){if(hs=x,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ol.current=i===null||i.memoizedState===null?AM:CM,i=a(u,p),fa){x=0;do{if(fa=!1,ha=0,25<=x)throw Error(t(301));x+=1,vn=hn=null,s.updateQueue=null,Ol.current=RM,i=a(u,p)}while(fa)}if(Ol.current=zl,s=hn!==null&&hn.next!==null,hs=0,vn=hn=Kt=null,kl=!1,s)throw Error(t(300));return i}function md(){var i=ha!==0;return ha=0,i}function zi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Kt.memoizedState=vn=i:vn=vn.next=i,vn}function di(){if(hn===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=hn.next;var s=vn===null?Kt.memoizedState:vn.next;if(s!==null)vn=s,hn=i;else{if(i===null)throw Error(t(310));hn=i,i={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},vn===null?Kt.memoizedState=vn=i:vn=vn.next=i}return vn}function pa(i,s){return typeof s=="function"?s(i):s}function gd(i){var s=di(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var u=hn,p=u.baseQueue,x=a.pending;if(x!==null){if(p!==null){var b=p.next;p.next=x.next,x.next=b}u.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,u=u.baseState;var k=b=null,V=null,ue=x;do{var _e=ue.lane;if((hs&_e)===_e)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:i(u,ue.action);else{var Me={lane:_e,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(k=V=Me,b=u):V=V.next=Me,Kt.lanes|=_e,ps|=_e}ue=ue.next}while(ue!==null&&ue!==x);V===null?b=u:V.next=k,Ti(u,s.memoizedState)||(Wn=!0),s.memoizedState=u,s.baseState=b,s.baseQueue=V,a.lastRenderedState=u}if(i=a.interleaved,i!==null){p=i;do x=p.lane,Kt.lanes|=x,ps|=x,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function vd(i){var s=di(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var u=a.dispatch,p=a.pending,x=s.memoizedState;if(p!==null){a.pending=null;var b=p=p.next;do x=i(x,b.action),b=b.next;while(b!==p);Ti(x,s.memoizedState)||(Wn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),a.lastRenderedState=x}return[x,u]}function sg(){}function og(i,s){var a=Kt,u=di(),p=s(),x=!Ti(u.memoizedState,p);if(x&&(u.memoizedState=p,Wn=!0),u=u.queue,xd(cg.bind(null,a,u,i),[i]),u.getSnapshot!==s||x||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,ma(9,lg.bind(null,a,u,p,s),void 0,null),xn===null)throw Error(t(349));(hs&30)!==0||ag(a,s,p)}return p}function ag(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function lg(i,s,a,u){s.value=a,s.getSnapshot=u,ug(s)&&dg(i)}function cg(i,s,a){return a(function(){ug(s)&&dg(i)})}function ug(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!Ti(i,a)}catch{return!0}}function dg(i){var s=or(i,1);s!==null&&Pi(s,i,1,-1)}function fg(i){var s=zi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:i},s.queue=i,i=i.dispatch=bM.bind(null,Kt,i),[s.memoizedState,i]}function ma(i,s,a,u){return i={tag:i,create:s,destroy:a,deps:u,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(u=a.next,a.next=i,i.next=u,s.lastEffect=i)),i}function hg(){return di().memoizedState}function Bl(i,s,a,u){var p=zi();Kt.flags|=i,p.memoizedState=ma(1|s,a,void 0,u===void 0?null:u)}function Vl(i,s,a,u){var p=di();u=u===void 0?null:u;var x=void 0;if(hn!==null){var b=hn.memoizedState;if(x=b.destroy,u!==null&&hd(u,b.deps)){p.memoizedState=ma(s,a,x,u);return}}Kt.flags|=i,p.memoizedState=ma(1|s,a,x,u)}function pg(i,s){return Bl(8390656,8,i,s)}function xd(i,s){return Vl(2048,8,i,s)}function mg(i,s){return Vl(4,2,i,s)}function gg(i,s){return Vl(4,4,i,s)}function vg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function xg(i,s,a){return a=a!=null?a.concat([i]):null,Vl(4,4,vg.bind(null,s,i),a)}function _d(){}function _g(i,s){var a=di();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&hd(s,u[1])?u[0]:(a.memoizedState=[i,s],i)}function yg(i,s){var a=di();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&hd(s,u[1])?u[0]:(i=i(),a.memoizedState=[i,s],i)}function Sg(i,s,a){return(hs&21)===0?(i.baseState&&(i.baseState=!1,Wn=!0),i.memoizedState=a):(Ti(a,s)||(a=fn(),Kt.lanes|=a,ps|=a,i.baseState=!0),s)}function EM(i,s){var a=mt;mt=a!==0&&4>a?a:4,i(!0);var u=fd.transition;fd.transition={};try{i(!1),s()}finally{mt=a,fd.transition=u}}function Mg(){return di().memoizedState}function TM(i,s,a){var u=Or(i);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},wg(i))Eg(s,a);else if(a=eg(i,s,a,u),a!==null){var p=Bn();Pi(a,i,u,p),Tg(a,s,u)}}function bM(i,s,a){var u=Or(i),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(wg(i))Eg(s,p);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var b=s.lastRenderedState,k=x(b,a);if(p.hasEagerState=!0,p.eagerState=k,Ti(k,b)){var V=s.interleaved;V===null?(p.next=p,od(s)):(p.next=V.next,V.next=p),s.interleaved=p;return}}catch{}finally{}a=eg(i,s,p,u),a!==null&&(p=Bn(),Pi(a,i,u,p),Tg(a,s,u))}}function wg(i){var s=i.alternate;return i===Kt||s!==null&&s===Kt}function Eg(i,s){fa=kl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function Tg(i,s,a){if((a&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,a|=u,s.lanes=a,An(i,a)}}var zl={readContext:ui,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},AM={readContext:ui,useCallback:function(i,s){return zi().memoizedState=[i,s===void 0?null:s],i},useContext:ui,useEffect:pg,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Bl(4194308,4,vg.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Bl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Bl(4,2,i,s)},useMemo:function(i,s){var a=zi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var u=zi();return s=a!==void 0?a(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=TM.bind(null,Kt,i),[u.memoizedState,i]},useRef:function(i){var s=zi();return i={current:i},s.memoizedState=i},useState:fg,useDebugValue:_d,useDeferredValue:function(i){return zi().memoizedState=i},useTransition:function(){var i=fg(!1),s=i[0];return i=EM.bind(null,i[1]),zi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var u=Kt,p=zi();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),xn===null)throw Error(t(349));(hs&30)!==0||ag(u,s,a)}p.memoizedState=a;var x={value:a,getSnapshot:s};return p.queue=x,pg(cg.bind(null,u,x,i),[i]),u.flags|=2048,ma(9,lg.bind(null,u,x,a,s),void 0,null),a},useId:function(){var i=zi(),s=xn.identifierPrefix;if(Yt){var a=sr,u=rr;a=(u&~(1<<32-De(u)-1)).toString(32)+a,s=":"+s+"R"+a,a=ha++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=wM++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},CM={readContext:ui,useCallback:_g,useContext:ui,useEffect:xd,useImperativeHandle:xg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:gd,useRef:hg,useState:function(){return gd(pa)},useDebugValue:_d,useDeferredValue:function(i){var s=di();return Sg(s,hn.memoizedState,i)},useTransition:function(){var i=gd(pa)[0],s=di().memoizedState;return[i,s]},useMutableSource:sg,useSyncExternalStore:og,useId:Mg,unstable_isNewReconciler:!1},RM={readContext:ui,useCallback:_g,useContext:ui,useEffect:xd,useImperativeHandle:xg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:vd,useRef:hg,useState:function(){return vd(pa)},useDebugValue:_d,useDeferredValue:function(i){var s=di();return hn===null?s.memoizedState=i:Sg(s,hn.memoizedState,i)},useTransition:function(){var i=vd(pa)[0],s=di().memoizedState;return[i,s]},useMutableSource:sg,useSyncExternalStore:og,useId:Mg,unstable_isNewReconciler:!1};function Ai(i,s){if(i&&i.defaultProps){s=$({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function yd(i,s,a,u){s=i.memoizedState,a=a(u,s),a=a==null?s:$({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Hl={isMounted:function(i){return(i=i._reactInternals)?On(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var u=Bn(),p=Or(i),x=ar(u,p);x.payload=s,a!=null&&(x.callback=a),s=Nr(i,x,p),s!==null&&(Pi(s,i,p,u),Il(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var u=Bn(),p=Or(i),x=ar(u,p);x.tag=1,x.payload=s,a!=null&&(x.callback=a),s=Nr(i,x,p),s!==null&&(Pi(s,i,p,u),Il(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Bn(),u=Or(i),p=ar(a,u);p.tag=2,s!=null&&(p.callback=s),s=Nr(i,p,u),s!==null&&(Pi(s,i,u,a),Il(s,i,u))}};function bg(i,s,a,u,p,x,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,x,b):s.prototype&&s.prototype.isPureReactComponent?!ta(a,u)||!ta(p,x):!0}function Ag(i,s,a){var u=!1,p=Pr,x=s.contextType;return typeof x=="object"&&x!==null?x=ui(x):(p=Gn(s)?ls:Cn.current,u=s.contextTypes,x=(u=u!=null)?qs(i,p):Pr),s=new s(a,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Hl,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=x),s}function Cg(i,s,a,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,u),s.state!==i&&Hl.enqueueReplaceState(s,s.state,null)}function Sd(i,s,a,u){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},ad(i);var x=s.contextType;typeof x=="object"&&x!==null?p.context=ui(x):(x=Gn(s)?ls:Cn.current,p.context=qs(i,x)),p.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(yd(i,s,x,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Hl.enqueueReplaceState(p,p.state,null),Ul(i,a,p,u),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function no(i,s){try{var a="",u=s;do a+=ze(u),u=u.return;while(u);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:p,digest:null}}function Md(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function wd(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var PM=typeof WeakMap=="function"?WeakMap:Map;function Rg(i,s,a){a=ar(-1,a),a.tag=3,a.payload={element:null};var u=s.value;return a.callback=function(){$l||($l=!0,kd=u),wd(i,s)},a}function Pg(i,s,a){a=ar(-1,a),a.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;a.payload=function(){return u(p)},a.callback=function(){wd(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){wd(i,s),typeof u!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),a}function Lg(i,s,a){var u=i.pingCache;if(u===null){u=i.pingCache=new PM;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(a)||(p.add(a),i=WM.bind(null,i,s,a),s.then(i,i))}function Dg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Ng(i,s,a,u,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=ar(-1,1),s.tag=2,Nr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var LM=C.ReactCurrentOwner,Wn=!1;function kn(i,s,a,u){s.child=i===null?Jm(s,null,a,u):Qs(s,i.child,a,u)}function Ig(i,s,a,u,p){a=a.render;var x=s.ref;return eo(s,p),u=pd(i,s,a,u,x,p),a=md(),i!==null&&!Wn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,lr(i,s,p)):(Yt&&a&&Zu(s),s.flags|=1,kn(i,s,u,p),s.child)}function Ug(i,s,a,u,p){if(i===null){var x=a.type;return typeof x=="function"&&!Xd(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=x,Fg(i,s,x,u,p)):(i=tc(a.type,null,u,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&p)===0){var b=x.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(b,u)&&i.ref===s.ref)return lr(i,s,p)}return s.flags|=1,i=Br(x,u),i.ref=s.ref,i.return=s,s.child=i}function Fg(i,s,a,u,p){if(i!==null){var x=i.memoizedProps;if(ta(x,u)&&i.ref===s.ref)if(Wn=!1,s.pendingProps=u=x,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Wn=!0);else return s.lanes=i.lanes,lr(i,s,p)}return Ed(i,s,a,u,p)}function Og(i,s,a){var u=s.pendingProps,p=u.children,x=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(ro,ei),ei|=a;else{if((a&1073741824)===0)return i=x!==null?x.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Vt(ro,ei),ei|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:a,Vt(ro,ei),ei|=u}else x!==null?(u=x.baseLanes|a,s.memoizedState=null):u=a,Vt(ro,ei),ei|=u;return kn(i,s,p,a),s.child}function kg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Ed(i,s,a,u,p){var x=Gn(a)?ls:Cn.current;return x=qs(s,x),eo(s,p),a=pd(i,s,a,u,x,p),u=md(),i!==null&&!Wn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,lr(i,s,p)):(Yt&&u&&Zu(s),s.flags|=1,kn(i,s,a,p),s.child)}function Bg(i,s,a,u,p){if(Gn(a)){var x=!0;bl(s)}else x=!1;if(eo(s,p),s.stateNode===null)Wl(i,s),Ag(s,a,u),Sd(s,a,u,p),u=!0;else if(i===null){var b=s.stateNode,k=s.memoizedProps;b.props=k;var V=b.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ui(ue):(ue=Gn(a)?ls:Cn.current,ue=qs(s,ue));var _e=a.getDerivedStateFromProps,Me=typeof _e=="function"||typeof b.getSnapshotBeforeUpdate=="function";Me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==u||V!==ue)&&Cg(s,b,u,ue),Dr=!1;var xe=s.memoizedState;b.state=xe,Ul(s,u,b,p),V=s.memoizedState,k!==u||xe!==V||Hn.current||Dr?(typeof _e=="function"&&(yd(s,a,_e,u),V=s.memoizedState),(k=Dr||bg(s,a,k,u,xe,V,ue))?(Me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=V),b.props=u,b.state=V,b.context=ue,u=k):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{b=s.stateNode,tg(i,s),k=s.memoizedProps,ue=s.type===s.elementType?k:Ai(s.type,k),b.props=ue,Me=s.pendingProps,xe=b.context,V=a.contextType,typeof V=="object"&&V!==null?V=ui(V):(V=Gn(a)?ls:Cn.current,V=qs(s,V));var Be=a.getDerivedStateFromProps;(_e=typeof Be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==Me||xe!==V)&&Cg(s,b,u,V),Dr=!1,xe=s.memoizedState,b.state=xe,Ul(s,u,b,p);var je=s.memoizedState;k!==Me||xe!==je||Hn.current||Dr?(typeof Be=="function"&&(yd(s,a,Be,u),je=s.memoizedState),(ue=Dr||bg(s,a,ue,u,xe,je,V)||!1)?(_e||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,je,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,je,V)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=je),b.props=u,b.state=je,b.context=V,u=ue):(typeof b.componentDidUpdate!="function"||k===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),u=!1)}return Td(i,s,a,u,x,p)}function Td(i,s,a,u,p,x){kg(i,s);var b=(s.flags&128)!==0;if(!u&&!b)return p&&Wm(s,a,!1),lr(i,s,x);u=s.stateNode,LM.current=s;var k=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&b?(s.child=Qs(s,i.child,null,x),s.child=Qs(s,null,k,x)):kn(i,s,k,x),s.memoizedState=u.state,p&&Wm(s,a,!0),s.child}function Vg(i){var s=i.stateNode;s.pendingContext?Hm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Hm(i,s.context,!1),ld(i,s.containerInfo)}function zg(i,s,a,u,p){return Zs(),td(p),s.flags|=256,kn(i,s,a,u),s.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Ad(i){return{baseLanes:i,cachePool:null,transitions:null}}function Hg(i,s,a){var u=s.pendingProps,p=$t.current,x=!1,b=(s.flags&128)!==0,k;if((k=b)||(k=i!==null&&i.memoizedState===null?!1:(p&2)!==0),k?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Vt($t,p&1),i===null)return ed(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=u.children,i=u.fallback,x?(u=s.mode,x=s.child,b={mode:"hidden",children:b},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=nc(b,u,0,null),i=xs(i,u,a,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Ad(a),s.memoizedState=bd,i):Cd(s,b));if(p=i.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return DM(i,s,b,u,k,p,a);if(x){x=u.fallback,b=s.mode,p=i.child,k=p.sibling;var V={mode:"hidden",children:u.children};return(b&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=V,s.deletions=null):(u=Br(p,V),u.subtreeFlags=p.subtreeFlags&14680064),k!==null?x=Br(k,x):(x=xs(x,b,a,null),x.flags|=2),x.return=s,u.return=s,u.sibling=x,s.child=u,u=x,x=s.child,b=i.child.memoizedState,b=b===null?Ad(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=i.childLanes&~a,s.memoizedState=bd,u}return x=i.child,i=x.sibling,u=Br(x,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=a),u.return=s,u.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=u,s.memoizedState=null,u}function Cd(i,s){return s=nc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Gl(i,s,a,u){return u!==null&&td(u),Qs(s,i.child,null,a),i=Cd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function DM(i,s,a,u,p,x,b){if(a)return s.flags&256?(s.flags&=-257,u=Md(Error(t(422))),Gl(i,s,b,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=u.fallback,p=s.mode,u=nc({mode:"visible",children:u.children},p,0,null),x=xs(x,p,b,null),x.flags|=2,u.return=s,x.return=s,u.sibling=x,s.child=u,(s.mode&1)!==0&&Qs(s,i.child,null,b),s.child.memoizedState=Ad(b),s.memoizedState=bd,x);if((s.mode&1)===0)return Gl(i,s,b,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var k=u.dgst;return u=k,x=Error(t(419)),u=Md(x,u,void 0),Gl(i,s,b,u)}if(k=(b&i.childLanes)!==0,Wn||k){if(u=xn,u!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|b))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,or(i,p),Pi(u,i,p,-1))}return Wd(),u=Md(Error(t(421))),Gl(i,s,b,u)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=XM.bind(null,i),p._reactRetry=s,null):(i=x.treeContext,Jn=Cr(p.nextSibling),Qn=s,Yt=!0,bi=null,i!==null&&(li[ci++]=rr,li[ci++]=sr,li[ci++]=cs,rr=i.id,sr=i.overflow,cs=s),s=Cd(s,u.children),s.flags|=4096,s)}function Gg(i,s,a){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),sd(i.return,s,a)}function Rd(i,s,a,u,p){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=a,x.tailMode=p)}function Wg(i,s,a){var u=s.pendingProps,p=u.revealOrder,x=u.tail;if(kn(i,s,u.children,a),u=$t.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Gg(i,a,s);else if(i.tag===19)Gg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(Vt($t,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Fl(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),Rd(s,!1,p,a,x);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Fl(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}Rd(s,!0,a,null,x);break;case"together":Rd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function lr(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ps|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Br(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Br(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function NM(i,s,a){switch(s.tag){case 3:Vg(s),Zs();break;case 5:rg(s);break;case 1:Gn(s.type)&&bl(s);break;case 4:ld(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;Vt(Dl,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Vt($t,$t.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Hg(i,s,a):(Vt($t,$t.current&1),i=lr(i,s,a),i!==null?i.sibling:null);Vt($t,$t.current&1);break;case 19:if(u=(a&s.childLanes)!==0,(i.flags&128)!==0){if(u)return Wg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Vt($t,$t.current),u)break;return null;case 22:case 23:return s.lanes=0,Og(i,s,a)}return lr(i,s,a)}var Xg,Pd,jg,Yg;Xg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Pd=function(){},jg=function(i,s,a,u){var p=i.memoizedProps;if(p!==u){i=s.stateNode,fs(Vi.current);var x=null;switch(a){case"input":p=ht(i,p),u=ht(i,u),x=[];break;case"select":p=$({},p,{value:void 0}),u=$({},u,{value:void 0}),x=[];break;case"textarea":p=Xt(i,p),u=Xt(i,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=wl)}$e(a,u);var b;a=null;for(ue in p)if(!u.hasOwnProperty(ue)&&p.hasOwnProperty(ue)&&p[ue]!=null)if(ue==="style"){var k=p[ue];for(b in k)k.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?x||(x=[]):(x=x||[]).push(ue,null));for(ue in u){var V=u[ue];if(k=p!=null?p[ue]:void 0,u.hasOwnProperty(ue)&&V!==k&&(V!=null||k!=null))if(ue==="style")if(k){for(b in k)!k.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in V)V.hasOwnProperty(b)&&k[b]!==V[b]&&(a||(a={}),a[b]=V[b])}else a||(x||(x=[]),x.push(ue,a)),a=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(x=x||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&zt("scroll",i),x||k===V||(x=[])):(x=x||[]).push(ue,V))}a&&(x=x||[]).push("style",a);var ue=x;(s.updateQueue=ue)&&(s.flags|=4)}},Yg=function(i,s,a,u){a!==u&&(s.flags|=4)};function ga(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Pn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,u=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=u,i.childLanes=a,s}function IM(i,s,a){var u=s.pendingProps;switch(Qu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(s),null;case 1:return Gn(s.type)&&Tl(),Pn(s),null;case 3:return u=s.stateNode,to(),Ht(Hn),Ht(Cn),dd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(Pl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,bi!==null&&(zd(bi),bi=null))),Pd(i,s),Pn(s),null;case 5:cd(s);var p=fs(da.current);if(a=s.type,i!==null&&s.stateNode!=null)jg(i,s,a,u,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Pn(s),null}if(i=fs(Vi.current),Pl(s)){u=s.stateNode,a=s.type;var x=s.memoizedProps;switch(u[Bi]=s,u[oa]=x,i=(s.mode&1)!==0,a){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(p=0;p<ia.length;p++)zt(ia[p],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":xt(u,x),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},zt("invalid",u);break;case"textarea":W(u,x),zt("invalid",u)}$e(a,x),p=null;for(var b in x)if(x.hasOwnProperty(b)){var k=x[b];b==="children"?typeof k=="string"?u.textContent!==k&&(x.suppressHydrationWarning!==!0&&Ml(u.textContent,k,i),p=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(x.suppressHydrationWarning!==!0&&Ml(u.textContent,k,i),p=["children",""+k]):o.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&zt("scroll",u)}switch(a){case"input":Oe(u),Ot(u,x,!0);break;case"textarea":Oe(u),Tt(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=wl)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=I(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=b.createElement(a,{is:u.is}):(i=b.createElement(a),a==="select"&&(b=i,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):i=b.createElementNS(i,a),i[Bi]=s,i[oa]=u,Xg(i,s,!1,!1),s.stateNode=i;e:{switch(b=Le(a,u),a){case"dialog":zt("cancel",i),zt("close",i),p=u;break;case"iframe":case"object":case"embed":zt("load",i),p=u;break;case"video":case"audio":for(p=0;p<ia.length;p++)zt(ia[p],i);p=u;break;case"source":zt("error",i),p=u;break;case"img":case"image":case"link":zt("error",i),zt("load",i),p=u;break;case"details":zt("toggle",i),p=u;break;case"input":xt(i,u),p=ht(i,u),zt("invalid",i);break;case"option":p=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},p=$({},u,{value:void 0}),zt("invalid",i);break;case"textarea":W(i,u),p=Xt(i,u),zt("invalid",i);break;default:p=u}$e(a,p),k=p;for(x in k)if(k.hasOwnProperty(x)){var V=k[x];x==="style"?ge(i,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&oe(i,V)):x==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&fe(i,V):typeof V=="number"&&fe(i,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&zt("scroll",i):V!=null&&U(i,x,V,b))}switch(a){case"input":Oe(i),Ot(i,u,!1);break;case"textarea":Oe(i),Tt(i);break;case"option":u.value!=null&&i.setAttribute("value",""+de(u.value));break;case"select":i.multiple=!!u.multiple,x=u.value,x!=null?Nt(i,!!u.multiple,x,!1):u.defaultValue!=null&&Nt(i,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=wl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Pn(s),null;case 6:if(i&&s.stateNode!=null)Yg(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(a=fs(da.current),fs(Vi.current),Pl(s)){if(u=s.stateNode,a=s.memoizedProps,u[Bi]=s,(x=u.nodeValue!==a)&&(i=Qn,i!==null))switch(i.tag){case 3:Ml(u.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ml(u.nodeValue,a,(i.mode&1)!==0)}x&&(s.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Bi]=s,s.stateNode=u}return Pn(s),null;case 13:if(Ht($t),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&Jn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Km(),Zs(),s.flags|=98560,x=!1;else if(x=Pl(s),u!==null&&u.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Bi]=s}else Zs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Pn(s),x=!1}else bi!==null&&(zd(bi),bi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||($t.current&1)!==0?pn===0&&(pn=3):Wd())),s.updateQueue!==null&&(s.flags|=4),Pn(s),null);case 4:return to(),Pd(i,s),i===null&&ra(s.stateNode.containerInfo),Pn(s),null;case 10:return rd(s.type._context),Pn(s),null;case 17:return Gn(s.type)&&Tl(),Pn(s),null;case 19:if(Ht($t),x=s.memoizedState,x===null)return Pn(s),null;if(u=(s.flags&128)!==0,b=x.rendering,b===null)if(u)ga(x,!1);else{if(pn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(b=Fl(i),b!==null){for(s.flags|=128,ga(x,!1),u=b.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=a,a=s.child;a!==null;)x=a,i=u,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,i=b.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Vt($t,$t.current&1|2),s.child}i=i.sibling}x.tail!==null&&qt()>so&&(s.flags|=128,u=!0,ga(x,!1),s.lanes=4194304)}else{if(!u)if(i=Fl(b),i!==null){if(s.flags|=128,u=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ga(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!Yt)return Pn(s),null}else 2*qt()-x.renderingStartTime>so&&a!==1073741824&&(s.flags|=128,u=!0,ga(x,!1),s.lanes=4194304);x.isBackwards?(b.sibling=s.child,s.child=b):(a=x.last,a!==null?a.sibling=b:s.child=b,x.last=b)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=qt(),s.sibling=null,a=$t.current,Vt($t,u?a&1|2:a&1),s):(Pn(s),null);case 22:case 23:return Gd(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(ei&1073741824)!==0&&(Pn(s),s.subtreeFlags&6&&(s.flags|=8192)):Pn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function UM(i,s){switch(Qu(s),s.tag){case 1:return Gn(s.type)&&Tl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return to(),Ht(Hn),Ht(Cn),dd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return cd(s),null;case 13:if(Ht($t),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Zs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ht($t),null;case 4:return to(),null;case 10:return rd(s.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Xl=!1,Ln=!1,FM=typeof WeakSet=="function"?WeakSet:Set,He=null;function io(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){en(i,s,u)}else a.current=null}function Ld(i,s,a){try{a()}catch(u){en(i,s,u)}}var qg=!1;function OM(i,s){if(Gu=dl,i=bm(),Uu(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var b=0,k=-1,V=-1,ue=0,_e=0,Me=i,xe=null;t:for(;;){for(var Be;Me!==a||p!==0&&Me.nodeType!==3||(k=b+p),Me!==x||u!==0&&Me.nodeType!==3||(V=b+u),Me.nodeType===3&&(b+=Me.nodeValue.length),(Be=Me.firstChild)!==null;)xe=Me,Me=Be;for(;;){if(Me===i)break t;if(xe===a&&++ue===p&&(k=b),xe===x&&++_e===u&&(V=b),(Be=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Be}a=k===-1||V===-1?null:{start:k,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wu={focusedElem:i,selectionRange:a},dl=!1,He=s;He!==null;)if(s=He,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,He=i;else for(;He!==null;){s=He;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,sn=je.memoizedState,ne=s.stateNode,X=ne.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Ai(s.type,qe),sn);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=s.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){en(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,He=i;break}He=s.return}return je=qg,qg=!1,je}function va(i,s,a){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&i)===i){var x=p.destroy;p.destroy=void 0,x!==void 0&&Ld(s,a,x)}p=p.next}while(p!==u)}}function jl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var u=a.create;a.destroy=u()}a=a.next}while(a!==s)}}function Dd(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function $g(i){var s=i.alternate;s!==null&&(i.alternate=null,$g(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Bi],delete s[oa],delete s[qu],delete s[_M],delete s[yM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Kg(i){return i.tag===5||i.tag===3||i.tag===4}function Zg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Kg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Nd(i,s,a){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=wl));else if(u!==4&&(i=i.child,i!==null))for(Nd(i,s,a),i=i.sibling;i!==null;)Nd(i,s,a),i=i.sibling}function Id(i,s,a){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(Id(i,s,a),i=i.sibling;i!==null;)Id(i,s,a),i=i.sibling}var Mn=null,Ci=!1;function Ir(i,s,a){for(a=a.child;a!==null;)Qg(i,s,a),a=a.sibling}function Qg(i,s,a){if(Q&&typeof Q.onCommitFiberUnmount=="function")try{Q.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:Ln||io(a,s);case 6:var u=Mn,p=Ci;Mn=null,Ir(i,s,a),Mn=u,Ci=p,Mn!==null&&(Ci?(i=Mn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):Mn.removeChild(a.stateNode));break;case 18:Mn!==null&&(Ci?(i=Mn,a=a.stateNode,i.nodeType===8?Yu(i.parentNode,a):i.nodeType===1&&Yu(i,a),$o(i)):Yu(Mn,a.stateNode));break;case 4:u=Mn,p=Ci,Mn=a.stateNode.containerInfo,Ci=!0,Ir(i,s,a),Mn=u,Ci=p;break;case 0:case 11:case 14:case 15:if(!Ln&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&Ld(a,s,b),p=p.next}while(p!==u)}Ir(i,s,a);break;case 1:if(!Ln&&(io(a,s),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(k){en(a,s,k)}Ir(i,s,a);break;case 21:Ir(i,s,a);break;case 22:a.mode&1?(Ln=(u=Ln)||a.memoizedState!==null,Ir(i,s,a),Ln=u):Ir(i,s,a);break;default:Ir(i,s,a)}}function Jg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new FM),s.forEach(function(u){var p=jM.bind(null,i,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Ri(i,s){var a=s.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var x=i,b=s,k=b;e:for(;k!==null;){switch(k.tag){case 5:Mn=k.stateNode,Ci=!1;break e;case 3:Mn=k.stateNode.containerInfo,Ci=!0;break e;case 4:Mn=k.stateNode.containerInfo,Ci=!0;break e}k=k.return}if(Mn===null)throw Error(t(160));Qg(x,b,p),Mn=null,Ci=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(ue){en(p,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)e0(s,i),s=s.sibling}function e0(i,s){var a=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ri(s,i),Hi(i),u&4){try{va(3,i,i.return),jl(3,i)}catch(qe){en(i,i.return,qe)}try{va(5,i,i.return)}catch(qe){en(i,i.return,qe)}}break;case 1:Ri(s,i),Hi(i),u&512&&a!==null&&io(a,a.return);break;case 5:if(Ri(s,i),Hi(i),u&512&&a!==null&&io(a,a.return),i.flags&32){var p=i.stateNode;try{fe(p,"")}catch(qe){en(i,i.return,qe)}}if(u&4&&(p=i.stateNode,p!=null)){var x=i.memoizedProps,b=a!==null?a.memoizedProps:x,k=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{k==="input"&&x.type==="radio"&&x.name!=null&&It(p,x),Le(k,b);var ue=Le(k,x);for(b=0;b<V.length;b+=2){var _e=V[b],Me=V[b+1];_e==="style"?ge(p,Me):_e==="dangerouslySetInnerHTML"?oe(p,Me):_e==="children"?fe(p,Me):U(p,_e,Me,ue)}switch(k){case"input":pt(p,x);break;case"textarea":dn(p,x);break;case"select":var xe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Be=x.value;Be!=null?Nt(p,!!x.multiple,Be,!1):xe!==!!x.multiple&&(x.defaultValue!=null?Nt(p,!!x.multiple,x.defaultValue,!0):Nt(p,!!x.multiple,x.multiple?[]:"",!1))}p[oa]=x}catch(qe){en(i,i.return,qe)}}break;case 6:if(Ri(s,i),Hi(i),u&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,x=i.memoizedProps;try{p.nodeValue=x}catch(qe){en(i,i.return,qe)}}break;case 3:if(Ri(s,i),Hi(i),u&4&&a!==null&&a.memoizedState.isDehydrated)try{$o(s.containerInfo)}catch(qe){en(i,i.return,qe)}break;case 4:Ri(s,i),Hi(i);break;case 13:Ri(s,i),Hi(i),p=i.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Od=qt())),u&4&&Jg(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(Ln=(ue=Ln)||_e,Ri(s,i),Ln=ue):Ri(s,i),Hi(i),u&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!_e&&(i.mode&1)!==0)for(He=i,_e=i.child;_e!==null;){for(Me=He=_e;He!==null;){switch(xe=He,Be=xe.child,xe.tag){case 0:case 11:case 14:case 15:va(4,xe,xe.return);break;case 1:io(xe,xe.return);var je=xe.stateNode;if(typeof je.componentWillUnmount=="function"){u=xe,a=xe.return;try{s=u,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){en(u,a,qe)}}break;case 5:io(xe,xe.return);break;case 22:if(xe.memoizedState!==null){i0(Me);continue}}Be!==null?(Be.return=xe,He=Be):i0(Me)}_e=_e.sibling}e:for(_e=null,Me=i;;){if(Me.tag===5){if(_e===null){_e=Me;try{p=Me.stateNode,ue?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(k=Me.stateNode,V=Me.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=pe("display",b))}catch(qe){en(i,i.return,qe)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(qe){en(i,i.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ri(s,i),Hi(i),u&4&&Jg(i);break;case 21:break;default:Ri(s,i),Hi(i)}}function Hi(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Kg(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(fe(p,""),u.flags&=-33);var x=Zg(i);Id(i,x,p);break;case 3:case 4:var b=u.stateNode.containerInfo,k=Zg(i);Nd(i,k,b);break;default:throw Error(t(161))}}catch(V){en(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function kM(i,s,a){He=i,t0(i)}function t0(i,s,a){for(var u=(i.mode&1)!==0;He!==null;){var p=He,x=p.child;if(p.tag===22&&u){var b=p.memoizedState!==null||Xl;if(!b){var k=p.alternate,V=k!==null&&k.memoizedState!==null||Ln;k=Xl;var ue=Ln;if(Xl=b,(Ln=V)&&!ue)for(He=p;He!==null;)b=He,V=b.child,b.tag===22&&b.memoizedState!==null?r0(p):V!==null?(V.return=b,He=V):r0(p);for(;x!==null;)He=x,t0(x),x=x.sibling;He=p,Xl=k,Ln=ue}n0(i)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,He=x):n0(i)}}function n0(i){for(;He!==null;){var s=He;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ln||jl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Ln)if(a===null)u.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:Ai(s.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&ig(s,x,u);break;case 3:var b=s.updateQueue;if(b!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}ig(s,b,a)}break;case 5:var k=s.stateNode;if(a===null&&s.flags&4){a=k;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var _e=ue.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&$o(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||s.flags&512&&Dd(s)}catch(xe){en(s,s.return,xe)}}if(s===i){He=null;break}if(a=s.sibling,a!==null){a.return=s.return,He=a;break}He=s.return}}function i0(i){for(;He!==null;){var s=He;if(s===i){He=null;break}var a=s.sibling;if(a!==null){a.return=s.return,He=a;break}He=s.return}}function r0(i){for(;He!==null;){var s=He;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{jl(4,s)}catch(V){en(s,a,V)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(V){en(s,p,V)}}var x=s.return;try{Dd(s)}catch(V){en(s,x,V)}break;case 5:var b=s.return;try{Dd(s)}catch(V){en(s,b,V)}}}catch(V){en(s,s.return,V)}if(s===i){He=null;break}var k=s.sibling;if(k!==null){k.return=s.return,He=k;break}He=s.return}}var BM=Math.ceil,Yl=C.ReactCurrentDispatcher,Ud=C.ReactCurrentOwner,fi=C.ReactCurrentBatchConfig,Et=0,xn=null,cn=null,wn=0,ei=0,ro=Rr(0),pn=0,xa=null,ps=0,ql=0,Fd=0,_a=null,Xn=null,Od=0,so=1/0,cr=null,$l=!1,kd=null,Ur=null,Kl=!1,Fr=null,Zl=0,ya=0,Bd=null,Ql=-1,Jl=0;function Bn(){return(Et&6)!==0?qt():Ql!==-1?Ql:Ql=qt()}function Or(i){return(i.mode&1)===0?1:(Et&2)!==0&&wn!==0?wn&-wn:MM.transition!==null?(Jl===0&&(Jl=fn()),Jl):(i=mt,i!==0||(i=window.event,i=i===void 0?16:om(i.type)),i)}function Pi(i,s,a,u){if(50<ya)throw ya=0,Bd=null,Error(t(185));rn(i,a,u),((Et&2)===0||i!==xn)&&(i===xn&&((Et&2)===0&&(ql|=a),pn===4&&kr(i,wn)),jn(i,u),a===1&&Et===0&&(s.mode&1)===0&&(so=qt()+500,Al&&Lr()))}function jn(i,s){var a=i.callbackNode;kt(i,s);var u=_t(i,i===xn?wn:0);if(u===0)a!==null&&Ho(a),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(a!=null&&Ho(a),s===1)i.tag===0?SM(o0.bind(null,i)):Xm(o0.bind(null,i)),vM(function(){(Et&6)===0&&Lr()}),a=null;else{switch(Si(u)){case 1:a=Go;break;case 4:a=Wo;break;case 16:a=A;break;case 536870912:a=ce;break;default:a=A}a=p0(a,s0.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function s0(i,s){if(Ql=-1,Jl=0,(Et&6)!==0)throw Error(t(327));var a=i.callbackNode;if(oo()&&i.callbackNode!==a)return null;var u=_t(i,i===xn?wn:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=ec(i,u);else{s=u;var p=Et;Et|=2;var x=l0();(xn!==i||wn!==s)&&(cr=null,so=qt()+500,gs(i,s));do try{HM();break}catch(k){a0(i,k)}while(!0);id(),Yl.current=x,Et=p,cn!==null?s=0:(xn=null,wn=0,s=pn)}if(s!==0){if(s===2&&(p=Pt(i),p!==0&&(u=p,s=Vd(i,p))),s===1)throw a=xa,gs(i,0),kr(i,u),jn(i,qt()),a;if(s===6)kr(i,u);else{if(p=i.current.alternate,(u&30)===0&&!VM(p)&&(s=ec(i,u),s===2&&(x=Pt(i),x!==0&&(u=x,s=Vd(i,x))),s===1))throw a=xa,gs(i,0),kr(i,u),jn(i,qt()),a;switch(i.finishedWork=p,i.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:vs(i,Xn,cr);break;case 3:if(kr(i,u),(u&130023424)===u&&(s=Od+500-qt(),10<s)){if(_t(i,0)!==0)break;if(p=i.suspendedLanes,(p&u)!==u){Bn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=ju(vs.bind(null,i,Xn,cr),s);break}vs(i,Xn,cr);break;case 4:if(kr(i,u),(u&4194240)===u)break;for(s=i.eventTimes,p=-1;0<u;){var b=31-De(u);x=1<<b,b=s[b],b>p&&(p=b),u&=~x}if(u=p,u=qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*BM(u/1960))-u,10<u){i.timeoutHandle=ju(vs.bind(null,i,Xn,cr),u);break}vs(i,Xn,cr);break;case 5:vs(i,Xn,cr);break;default:throw Error(t(329))}}}return jn(i,qt()),i.callbackNode===a?s0.bind(null,i):null}function Vd(i,s){var a=_a;return i.current.memoizedState.isDehydrated&&(gs(i,s).flags|=256),i=ec(i,s),i!==2&&(s=Xn,Xn=a,s!==null&&zd(s)),i}function zd(i){Xn===null?Xn=i:Xn.push.apply(Xn,i)}function VM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],x=p.getSnapshot;p=p.value;try{if(!Ti(x(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function kr(i,s){for(s&=~Fd,s&=~ql,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-De(s),u=1<<a;i[a]=-1,s&=~u}}function o0(i){if((Et&6)!==0)throw Error(t(327));oo();var s=_t(i,0);if((s&1)===0)return jn(i,qt()),null;var a=ec(i,s);if(i.tag!==0&&a===2){var u=Pt(i);u!==0&&(s=u,a=Vd(i,u))}if(a===1)throw a=xa,gs(i,0),kr(i,s),jn(i,qt()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,vs(i,Xn,cr),jn(i,qt()),null}function Hd(i,s){var a=Et;Et|=1;try{return i(s)}finally{Et=a,Et===0&&(so=qt()+500,Al&&Lr())}}function ms(i){Fr!==null&&Fr.tag===0&&(Et&6)===0&&oo();var s=Et;Et|=1;var a=fi.transition,u=mt;try{if(fi.transition=null,mt=1,i)return i()}finally{mt=u,fi.transition=a,Et=s,(Et&6)===0&&Lr()}}function Gd(){ei=ro.current,Ht(ro)}function gs(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,gM(a)),cn!==null)for(a=cn.return;a!==null;){var u=a;switch(Qu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Tl();break;case 3:to(),Ht(Hn),Ht(Cn),dd();break;case 5:cd(u);break;case 4:to();break;case 13:Ht($t);break;case 19:Ht($t);break;case 10:rd(u.type._context);break;case 22:case 23:Gd()}a=a.return}if(xn=i,cn=i=Br(i.current,null),wn=ei=s,pn=0,xa=null,Fd=ql=ps=0,Xn=_a=null,ds!==null){for(s=0;s<ds.length;s++)if(a=ds[s],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,x=a.pending;if(x!==null){var b=x.next;x.next=p,u.next=b}a.pending=u}ds=null}return i}function a0(i,s){do{var a=cn;try{if(id(),Ol.current=zl,kl){for(var u=Kt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}kl=!1}if(hs=0,vn=hn=Kt=null,fa=!1,ha=0,Ud.current=null,a===null||a.return===null){pn=1,xa=s,cn=null;break}e:{var x=i,b=a.return,k=a,V=s;if(s=wn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,_e=k,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Be=Dg(b);if(Be!==null){Be.flags&=-257,Ng(Be,b,k,x,s),Be.mode&1&&Lg(x,ue,s),s=Be,V=ue;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(V),s.updateQueue=qe}else je.add(V);break e}else{if((s&1)===0){Lg(x,ue,s),Wd();break e}V=Error(t(426))}}else if(Yt&&k.mode&1){var sn=Dg(b);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Ng(sn,b,k,x,s),td(no(V,k));break e}}x=V=no(V,k),pn!==4&&(pn=2),_a===null?_a=[x]:_a.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ne=Rg(x,V,s);ng(x,ne);break e;case 1:k=V;var X=x.type,re=x.stateNode;if((x.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Ur===null||!Ur.has(re)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=Pg(x,k,s);ng(x,Te);break e}}x=x.return}while(x!==null)}u0(a)}catch(et){s=et,cn===a&&a!==null&&(cn=a=a.return);continue}break}while(!0)}function l0(){var i=Yl.current;return Yl.current=zl,i===null?zl:i}function Wd(){(pn===0||pn===3||pn===2)&&(pn=4),xn===null||(ps&268435455)===0&&(ql&268435455)===0||kr(xn,wn)}function ec(i,s){var a=Et;Et|=2;var u=l0();(xn!==i||wn!==s)&&(cr=null,gs(i,s));do try{zM();break}catch(p){a0(i,p)}while(!0);if(id(),Et=a,Yl.current=u,cn!==null)throw Error(t(261));return xn=null,wn=0,pn}function zM(){for(;cn!==null;)c0(cn)}function HM(){for(;cn!==null&&!cl();)c0(cn)}function c0(i){var s=h0(i.alternate,i,ei);i.memoizedProps=i.pendingProps,s===null?u0(i):cn=s,Ud.current=null}function u0(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=IM(a,s,ei),a!==null){cn=a;return}}else{if(a=UM(a,s),a!==null){a.flags&=32767,cn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{pn=6,cn=null;return}}if(s=s.sibling,s!==null){cn=s;return}cn=s=i}while(s!==null);pn===0&&(pn=5)}function vs(i,s,a){var u=mt,p=fi.transition;try{fi.transition=null,mt=1,GM(i,s,a,u)}finally{fi.transition=p,mt=u}return null}function GM(i,s,a,u){do oo();while(Fr!==null);if((Et&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=a.lanes|a.childLanes;if(yt(i,x),i===xn&&(cn=xn=null,wn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Kl||(Kl=!0,p0(A,function(){return oo(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=fi.transition,fi.transition=null;var b=mt;mt=1;var k=Et;Et|=4,Ud.current=null,OM(i,a),e0(a,i),cM(Wu),dl=!!Gu,Wu=Gu=null,i.current=a,kM(a),Mu(),Et=k,mt=b,fi.transition=x}else i.current=a;if(Kl&&(Kl=!1,Fr=i,Zl=p),x=i.pendingLanes,x===0&&(Ur=null),Ie(a.stateNode),jn(i,qt()),s!==null)for(u=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],u(p.value,{componentStack:p.stack,digest:p.digest});if($l)throw $l=!1,i=kd,kd=null,i;return(Zl&1)!==0&&i.tag!==0&&oo(),x=i.pendingLanes,(x&1)!==0?i===Bd?ya++:(ya=0,Bd=i):ya=0,Lr(),null}function oo(){if(Fr!==null){var i=Si(Zl),s=fi.transition,a=mt;try{if(fi.transition=null,mt=16>i?16:i,Fr===null)var u=!1;else{if(i=Fr,Fr=null,Zl=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,He=i.current;He!==null;){var x=He,b=x.child;if((He.flags&16)!==0){var k=x.deletions;if(k!==null){for(var V=0;V<k.length;V++){var ue=k[V];for(He=ue;He!==null;){var _e=He;switch(_e.tag){case 0:case 11:case 15:va(8,_e,x)}var Me=_e.child;if(Me!==null)Me.return=_e,He=Me;else for(;He!==null;){_e=He;var xe=_e.sibling,Be=_e.return;if($g(_e),_e===ue){He=null;break}if(xe!==null){xe.return=Be,He=xe;break}He=Be}}}var je=x.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var sn=qe.sibling;qe.sibling=null,qe=sn}while(qe!==null)}}He=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,He=b;else e:for(;He!==null;){if(x=He,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:va(9,x,x.return)}var ne=x.sibling;if(ne!==null){ne.return=x.return,He=ne;break e}He=x.return}}var X=i.current;for(He=X;He!==null;){b=He;var re=b.child;if((b.subtreeFlags&2064)!==0&&re!==null)re.return=b,He=re;else e:for(b=X;He!==null;){if(k=He,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:jl(9,k)}}catch(et){en(k,k.return,et)}if(k===b){He=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,He=Te;break e}He=k.return}}if(Et=p,Lr(),Q&&typeof Q.onPostCommitFiberRoot=="function")try{Q.onPostCommitFiberRoot(te,i)}catch{}u=!0}return u}finally{mt=a,fi.transition=s}}return!1}function d0(i,s,a){s=no(a,s),s=Rg(i,s,1),i=Nr(i,s,1),s=Bn(),i!==null&&(rn(i,1,s),jn(i,s))}function en(i,s,a){if(i.tag===3)d0(i,i,a);else for(;s!==null;){if(s.tag===3){d0(s,i,a);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ur===null||!Ur.has(u))){i=no(a,i),i=Pg(s,i,1),s=Nr(s,i,1),i=Bn(),s!==null&&(rn(s,1,i),jn(s,i));break}}s=s.return}}function WM(i,s,a){var u=i.pingCache;u!==null&&u.delete(s),s=Bn(),i.pingedLanes|=i.suspendedLanes&a,xn===i&&(wn&a)===a&&(pn===4||pn===3&&(wn&130023424)===wn&&500>qt()-Od?gs(i,0):Fd|=a),jn(i,s)}function f0(i,s){s===0&&((i.mode&1)===0?s=1:(s=dt,dt<<=1,(dt&130023424)===0&&(dt=4194304)));var a=Bn();i=or(i,s),i!==null&&(rn(i,s,a),jn(i,a))}function XM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),f0(i,a)}function jM(i,s){var a=0;switch(i.tag){case 13:var u=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),f0(i,a)}var h0;h0=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Hn.current)Wn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Wn=!1,NM(i,s,a);Wn=(i.flags&131072)!==0}else Wn=!1,Yt&&(s.flags&1048576)!==0&&jm(s,Rl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Wl(i,s),i=s.pendingProps;var p=qs(s,Cn.current);eo(s,a),p=pd(null,s,u,i,p,a);var x=md();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gn(u)?(x=!0,bl(s)):x=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ad(s),p.updater=Hl,s.stateNode=p,p._reactInternals=s,Sd(s,u,i,a),s=Td(null,s,u,!0,x,a)):(s.tag=0,Yt&&x&&Zu(s),kn(null,s,p,a),s=s.child),s;case 16:u=s.elementType;e:{switch(Wl(i,s),i=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=qM(u),i=Ai(u,i),p){case 0:s=Ed(null,s,u,i,a);break e;case 1:s=Bg(null,s,u,i,a);break e;case 11:s=Ig(null,s,u,i,a);break e;case 14:s=Ug(null,s,u,Ai(u.type,i),a);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ai(u,p),Ed(i,s,u,p,a);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ai(u,p),Bg(i,s,u,p,a);case 3:e:{if(Vg(s),i===null)throw Error(t(387));u=s.pendingProps,x=s.memoizedState,p=x.element,tg(i,s),Ul(s,u,null,a);var b=s.memoizedState;if(u=b.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){p=no(Error(t(423)),s),s=zg(i,s,u,a,p);break e}else if(u!==p){p=no(Error(t(424)),s),s=zg(i,s,u,a,p);break e}else for(Jn=Cr(s.stateNode.containerInfo.firstChild),Qn=s,Yt=!0,bi=null,a=Jm(s,null,u,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zs(),u===p){s=lr(i,s,a);break e}kn(i,s,u,a)}s=s.child}return s;case 5:return rg(s),i===null&&ed(s),u=s.type,p=s.pendingProps,x=i!==null?i.memoizedProps:null,b=p.children,Xu(u,p)?b=null:x!==null&&Xu(u,x)&&(s.flags|=32),kg(i,s),kn(i,s,b,a),s.child;case 6:return i===null&&ed(s),null;case 13:return Hg(i,s,a);case 4:return ld(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=Qs(s,null,u,a):kn(i,s,u,a),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ai(u,p),Ig(i,s,u,p,a);case 7:return kn(i,s,s.pendingProps,a),s.child;case 8:return kn(i,s,s.pendingProps.children,a),s.child;case 12:return kn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,x=s.memoizedProps,b=p.value,Vt(Dl,u._currentValue),u._currentValue=b,x!==null)if(Ti(x.value,b)){if(x.children===p.children&&!Hn.current){s=lr(i,s,a);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var k=x.dependencies;if(k!==null){b=x.child;for(var V=k.firstContext;V!==null;){if(V.context===u){if(x.tag===1){V=ar(-1,a&-a),V.tag=2;var ue=x.updateQueue;if(ue!==null){ue=ue.shared;var _e=ue.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),ue.pending=V}}x.lanes|=a,V=x.alternate,V!==null&&(V.lanes|=a),sd(x.return,a,s),k.lanes|=a;break}V=V.next}}else if(x.tag===10)b=x.type===s.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=a,k=b.alternate,k!==null&&(k.lanes|=a),sd(b,a,s),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===s){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}kn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,eo(s,a),p=ui(p),u=u(p),s.flags|=1,kn(i,s,u,a),s.child;case 14:return u=s.type,p=Ai(u,s.pendingProps),p=Ai(u.type,p),Ug(i,s,u,p,a);case 15:return Fg(i,s,s.type,s.pendingProps,a);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ai(u,p),Wl(i,s),s.tag=1,Gn(u)?(i=!0,bl(s)):i=!1,eo(s,a),Ag(s,u,p),Sd(s,u,p,a),Td(null,s,u,!0,i,a);case 19:return Wg(i,s,a);case 22:return Og(i,s,a)}throw Error(t(156,s.tag))};function p0(i,s){return os(i,s)}function YM(i,s,a,u){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(i,s,a,u){return new YM(i,s,a,u)}function Xd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function qM(i){if(typeof i=="function")return Xd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===J)return 11;if(i===ee)return 14}return 2}function Br(i,s){var a=i.alternate;return a===null?(a=hi(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function tc(i,s,a,u,p,x){var b=2;if(u=i,typeof i=="function")Xd(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case F:return xs(a.children,p,x,s);case E:b=8,p|=8;break;case D:return i=hi(12,a,s,p|2),i.elementType=D,i.lanes=x,i;case ie:return i=hi(13,a,s,p),i.elementType=ie,i.lanes=x,i;case z:return i=hi(19,a,s,p),i.elementType=z,i.lanes=x,i;case K:return nc(a,p,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:b=10;break e;case j:b=9;break e;case J:b=11;break e;case ee:b=14;break e;case he:b=16,u=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=hi(b,a,s,p),s.elementType=i,s.type=u,s.lanes=x,s}function xs(i,s,a,u){return i=hi(7,i,u,s),i.lanes=a,i}function nc(i,s,a,u){return i=hi(22,i,u,s),i.elementType=K,i.lanes=a,i.stateNode={isHidden:!1},i}function jd(i,s,a){return i=hi(6,i,null,s),i.lanes=a,i}function Yd(i,s,a){return s=hi(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function $M(i,s,a,u,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ke(0),this.expirationTimes=ke(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function qd(i,s,a,u,p,x,b,k,V){return i=new $M(i,s,a,k,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=hi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(x),i}function KM(i,s,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:i,containerInfo:s,implementation:a}}function m0(i){if(!i)return Pr;i=i._reactInternals;e:{if(On(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Gn(a))return Gm(i,a,s)}return s}function g0(i,s,a,u,p,x,b,k,V){return i=qd(a,u,!0,i,p,x,b,k,V),i.context=m0(null),a=i.current,u=Bn(),p=Or(a),x=ar(u,p),x.callback=s??null,Nr(a,x,p),i.current.lanes=p,rn(i,p,u),jn(i,u),i}function ic(i,s,a,u){var p=s.current,x=Bn(),b=Or(p);return a=m0(a),s.context===null?s.context=a:s.pendingContext=a,s=ar(x,b),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Nr(p,s,b),i!==null&&(Pi(i,p,b,x),Il(i,p,b)),b}function rc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function v0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function $d(i,s){v0(i,s),(i=i.alternate)&&v0(i,s)}function ZM(){return null}var x0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Kd(i){this._internalRoot=i}sc.prototype.render=Kd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));ic(i,s,null,null)},sc.prototype.unmount=Kd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ms(function(){ic(null,i,null,null)}),s[nr]=null}};function sc(i){this._internalRoot=i}sc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Mi();i={blockedOn:null,target:i,priority:s};for(var a=0;a<Tr.length&&s!==0&&s<Tr[a].priority;a++);Tr.splice(a,0,i),a===0&&rm(i)}};function Zd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function oc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function _0(){}function QM(i,s,a,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var ue=rc(b);x.call(ue)}}var b=g0(s,u,i,0,null,!1,!1,"",_0);return i._reactRootContainer=b,i[nr]=b.current,ra(i.nodeType===8?i.parentNode:i),ms(),b}for(;p=i.lastChild;)i.removeChild(p);if(typeof u=="function"){var k=u;u=function(){var ue=rc(V);k.call(ue)}}var V=qd(i,0,!1,null,null,!1,!1,"",_0);return i._reactRootContainer=V,i[nr]=V.current,ra(i.nodeType===8?i.parentNode:i),ms(function(){ic(s,V,a,u)}),V}function ac(i,s,a,u,p){var x=a._reactRootContainer;if(x){var b=x;if(typeof p=="function"){var k=p;p=function(){var V=rc(b);k.call(V)}}ic(s,b,i,p)}else b=QM(a,s,i,p,u);return rc(b)}tr=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ve(s.pendingLanes);a!==0&&(An(s,a|1),jn(s,qt()),(Et&6)===0&&(so=qt()+500,Lr()))}break;case 13:ms(function(){var u=or(i,1);if(u!==null){var p=Bn();Pi(u,i,1,p)}}),$d(i,1)}},At=function(i){if(i.tag===13){var s=or(i,134217728);if(s!==null){var a=Bn();Pi(s,i,134217728,a)}$d(i,134217728)}},jt=function(i){if(i.tag===13){var s=Or(i),a=or(i,s);if(a!==null){var u=Bn();Pi(a,i,s,u)}$d(i,s)}},Mi=function(){return mt},Ut=function(i,s){var a=mt;try{return mt=i,s()}finally{mt=a}},nt=function(i,s,a){switch(s){case"input":if(pt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var u=a[s];if(u!==i&&u.form===i.form){var p=El(u);if(!p)throw Error(t(90));ft(u),pt(u,p)}}}break;case"textarea":dn(i,a);break;case"select":s=a.value,s!=null&&Nt(i,!!a.multiple,s,!1)}},Fe=Hd,ve=ms;var JM={usingClientEntryPoint:!1,Events:[aa,js,El,me,Re,Hd]},Sa={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ew={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ss(i),i===null?null:i.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||ZM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{te=lc.inject(ew),Q=lc}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JM,Yn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(s))throw Error(t(200));return KM(i,s,null,a)},Yn.createRoot=function(i,s){if(!Zd(i))throw Error(t(299));var a=!1,u="",p=x0;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=qd(i,1,!1,null,null,a,!1,u,p),i[nr]=s.current,ra(i.nodeType===8?i.parentNode:i),new Kd(s)},Yn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ss(s),i=i===null?null:i.stateNode,i},Yn.flushSync=function(i){return ms(i)},Yn.hydrate=function(i,s,a){if(!oc(s))throw Error(t(200));return ac(null,i,s,!0,a)},Yn.hydrateRoot=function(i,s,a){if(!Zd(i))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,x="",b=x0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),s=g0(s,null,i,1,a??null,p,!1,x,b),i[nr]=s.current,ra(i),u)for(i=0;i<u.length;i++)a=u[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new sc(s)},Yn.render=function(i,s,a){if(!oc(s))throw Error(t(200));return ac(null,i,s,!1,a)},Yn.unmountComponentAtNode=function(i){if(!oc(i))throw Error(t(40));return i._reactRootContainer?(ms(function(){ac(null,null,i,!1,function(){i._reactRootContainer=null,i[nr]=null})}),!0):!1},Yn.unstable_batchedUpdates=Hd,Yn.unstable_renderSubtreeIntoContainer=function(i,s,a,u){if(!oc(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ac(i,s,a,!1,u)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var A0;function uw(){if(A0)return ef.exports;A0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ef.exports=cw(),ef.exports}var C0;function dw(){if(C0)return cc;C0=1;var n=uw();return cc.createRoot=n.createRoot,cc.hydrateRoot=n.hydrateRoot,cc}var fw=dw();const hw=Qx(fw);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="186",pw=0,R0=1,mw=2,Bc=1,gw=2,La=3,Ls=0,$n=1,mr=2,vr=0,Oa=1,P0=2,L0=3,D0=4,vw=5,Mo=100,xw=101,_w=102,yw=103,Sw=104,Mw=200,ww=201,Ew=202,Tw=203,Jx=204,e_=205,bw=206,Aw=207,Cw=208,Rw=209,Pw=210,Lw=211,Dw=212,Nw=213,Iw=214,$f=0,Kf=1,Zf=2,Ha=3,Qf=4,Jf=5,eh=6,th=7,t_=0,Uw=1,Fw=2,qi=0,n_=1,i_=2,r_=3,s_=4,o_=5,a_=6,l_=7,c_=300,Ds=301,Lo=302,rf=303,sf=304,uu=306,nh=1e3,gr=1001,ih=1002,Tn=1003,Ow=1004,uc=1005,Un=1006,of=1007,As=1008,_i=1009,u_=1010,d_=1011,Ga=1012,sp=1013,Zi=1014,ji=1015,Qi=1016,op=1017,ap=1018,Wa=1020,f_=35902,h_=35899,p_=1021,m_=1022,Fi=1023,Sr=1026,Cs=1027,g_=1028,lp=1029,Ns=1030,cp=1031,up=1033,Vc=33776,zc=33777,Hc=33778,Gc=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,dh=37488,fh=37489,qc=37490,hh=37491,ph=37808,mh=37809,gh=37810,vh=37811,xh=37812,_h=37813,yh=37814,Sh=37815,Mh=37816,wh=37817,Eh=37818,Th=37819,bh=37820,Ah=37821,Ch=36492,Rh=36494,Ph=36495,Lh=36283,Dh=36284,$c=36285,Nh=36286,kw=3200,N0=0,Bw=1,Kr="",vi="srgb",Kc="srgb-linear",Zc="linear",Ft="srgb",af=7680,Vw=519,zw=512,Hw=513,Gw=514,dp=515,Ww=516,Xw=517,fp=518,jw=519,Yw=35044,I0="300 es",Yi=2e3,Qc=2001;function qw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $w(){const n=Jc("canvas");return n.style.display="block",n}const U0={};function F0(...n){const e="THREE."+n.shift();console.log(e,...n)}function v_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function lt(...n){n=v_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Rt(...n){n=v_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ro(...n){const e=n.join(" ");e in U0||(U0[e]=!0,lt(...n))}function Kw(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Zw={[$f]:Kf,[Zf]:eh,[Qf]:th,[Ha]:Jf,[Kf]:$f,[eh]:Zf,[th]:Qf,[Jf]:Ha};class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=Math.PI/180,Ih=180/Math.PI;function Za(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Qw(n,e){return(n%e+e)%e}function cf(n,e,t){return(1-t)*n+t*e}function wa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qp=class Qp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qp.prototype.isVector2=!0;let Dt=Qp;class Fo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,d){let f=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],m=l[c+0],y=l[c+1],M=l[c+2],T=l[c+3];if(v!==T||f!==m||h!==y||g!==M){let S=f*m+h*y+g*M+v*T;S<0&&(m=-m,y=-y,M=-M,T=-T,S=-S);let _=1-d;if(S<.9995){const P=Math.acos(S),U=Math.sin(P);_=Math.sin(_*P)/U,d=Math.sin(d*P)/U,f=f*_+m*d,h=h*_+y*d,g=g*_+M*d,v=v*_+T*d}else{f=f*_+m*d,h=h*_+y*d,g=g*_+M*d,v=v*_+T*d;const P=1/Math.sqrt(f*f+h*h+g*g+v*v);f*=P,h*=P,g*=P,v*=P}}e[t]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,c){const d=r[o],f=r[o+1],h=r[o+2],g=r[o+3],v=l[c],m=l[c+1],y=l[c+2],M=l[c+3];return e[t]=d*M+g*v+f*y-h*m,e[t+1]=f*M+g*m+h*v-d*y,e[t+2]=h*M+g*y+d*m-f*v,e[t+3]=g*M-d*v-f*m-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,h=d(r/2),g=d(o/2),v=d(l/2),m=f(r/2),y=f(o/2),M=f(l/2);switch(c){case"XYZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"YXZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"ZXY":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"ZYX":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"YZX":this._x=m*g*v+h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v-m*y*M;break;case"XZY":this._x=m*g*v-h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v+m*y*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],d=t[5],f=t[9],h=t[2],g=t[6],v=t[10],m=r+d+v;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(g-f)*y,this._y=(l-h)*y,this._z=(c-o)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+h)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(l-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(c-o)/y,this._x=(l+h)/y,this._y=(f+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,d=t._x,f=t._y,h=t._z,g=t._w;return this._x=r*g+c*d+o*h-l*f,this._y=o*g+c*f+l*d-r*h,this._z=l*g+c*h+r*f-o*d,this._w=c*g-r*d-o*f-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,c=-c,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);f=Math.sin(f*h)/g,t=Math.sin(t*h)/g,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jp=class Jp{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(O0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,d=e.z,f=e.w,h=2*(c*o-d*r),g=2*(d*t-l*o),v=2*(l*r-c*t);return this.x=t+f*h+c*v-d*g,this.y=r+f*g+d*h-l*v,this.z=o+f*v+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*c-r*f,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return uf.copy(this).projectOnVector(e),this.sub(uf)}reflect(e){return this.sub(uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jp.prototype.isVector3=!0;let le=Jp;const uf=new le,O0=new Fo,em=class em{constructor(e,t,r,o,l,c,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,h)}set(e,t,r,o,l,c,d,f,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[3],f=r[6],h=r[1],g=r[4],v=r[7],m=r[2],y=r[5],M=r[8],T=o[0],S=o[3],_=o[6],P=o[1],U=o[4],C=o[7],R=o[2],L=o[5],F=o[8];return l[0]=c*T+d*P+f*R,l[3]=c*S+d*U+f*L,l[6]=c*_+d*C+f*F,l[1]=h*T+g*P+v*R,l[4]=h*S+g*U+v*L,l[7]=h*_+g*C+v*F,l[2]=m*T+y*P+M*R,l[5]=m*S+y*U+M*L,l[8]=m*_+y*C+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8];return t*c*g-t*d*h-r*l*g+r*d*f+o*l*h-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8],v=g*c-d*h,m=d*f-g*l,y=h*l-c*f,M=t*v+r*m+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-g*r)*T,e[2]=(d*r-o*c)*T,e[3]=m*T,e[4]=(g*t-o*f)*T,e[5]=(o*l-d*t)*T,e[6]=y*T,e[7]=(r*f-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,d){const f=Math.cos(l),h=Math.sin(l);return this.set(r*f,r*h,-r*(f*c+h*d)+c+e,-o*h,o*f,-o*(-h*c+f*d)+d+t,0,0,1),this}scale(e,t){return Ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(df.makeScale(e,t)),this}rotate(e){return Ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(df.makeRotation(-e)),this}translate(e,t){return Ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};em.prototype.isMatrix3=!0;let ut=em;const df=new ut,k0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jw(){const n={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(o.r=xr(o.r),o.g=xr(o.g),o.b=xr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=Po(o.r),o.g=Po(o.g),o.b=Po(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Kr?Zc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Kc]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:k0,fromXYZ:B0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:k0,fromXYZ:B0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),n}const St=Jw();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ao;class eE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ao===void 0&&(ao=Jc("canvas")),ao.width=e.width,ao.height=e.height;const o=ao.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ao}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=xr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(xr(t[r]/255)*255):t[r]=xr(t[r]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tE=0;class hp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(ff(o[c].image)):l.push(ff(o[c]))}else l=ff(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ff(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let nE=0;const hf=new le;class zn extends Us{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,r=gr,o=gr,l=Un,c=As,d=Fi,f=_i,h=zn.DEFAULT_ANISOTROPY,g=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Za(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hf).x}get height(){return this.source.getSize(hf).y}get depth(){return this.source.getSize(hf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=c_;zn.DEFAULT_ANISOTROPY=1;const tm=class tm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,h=f[0],g=f[4],v=f[8],m=f[1],y=f[5],M=f[9],T=f[2],S=f[6],_=f[10];if(Math.abs(g-m)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(h+1)/2,C=(y+1)/2,R=(_+1)/2,L=(g+m)/4,F=(v+T)/4,E=(M+S)/4;return U>C&&U>R?U<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(U),o=L/r,l=F/r):C>R?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=L/o,l=E/o):R<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(R),r=F/l,o=E/l),this.set(r,o,l,t),this}let P=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(m-g)*(m-g));return Math.abs(P)<.001&&(P=1),this.x=(S-M)/P,this.y=(v-T)/P,this.z=(m-g)/P,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tm.prototype.isVector4=!0;let nn=tm;class iE extends Us{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new zn(o),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new hp(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends iE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class x_ extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rE extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const cu=class cu{constructor(e,t,r,o,l,c,d,f,h,g,v,m,y,M,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,h,g,v,m,y,M,T,S)}set(e,t,r,o,l,c,d,f,h,g,v,m,y,M,T,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=c,_[9]=d,_[13]=f,_[2]=h,_[6]=g,_[10]=v,_[14]=m,_[3]=y,_[7]=M,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/lo.setFromMatrixColumn(e,0).length(),l=1/lo.setFromMatrixColumn(e,1).length(),c=1/lo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),f=Math.cos(o),h=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const m=c*g,y=c*v,M=d*g,T=d*v;t[0]=f*g,t[4]=-f*v,t[8]=h,t[1]=y+M*h,t[5]=m-T*h,t[9]=-d*f,t[2]=T-m*h,t[6]=M+y*h,t[10]=c*f}else if(e.order==="YXZ"){const m=f*g,y=f*v,M=h*g,T=h*v;t[0]=m+T*d,t[4]=M*d-y,t[8]=c*h,t[1]=c*v,t[5]=c*g,t[9]=-d,t[2]=y*d-M,t[6]=T+m*d,t[10]=c*f}else if(e.order==="ZXY"){const m=f*g,y=f*v,M=h*g,T=h*v;t[0]=m-T*d,t[4]=-c*v,t[8]=M+y*d,t[1]=y+M*d,t[5]=c*g,t[9]=T-m*d,t[2]=-c*h,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const m=c*g,y=c*v,M=d*g,T=d*v;t[0]=f*g,t[4]=M*h-y,t[8]=m*h+T,t[1]=f*v,t[5]=T*h+m,t[9]=y*h-M,t[2]=-h,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const m=c*f,y=c*h,M=d*f,T=d*h;t[0]=f*g,t[4]=T-m*v,t[8]=M*v+y,t[1]=v,t[5]=c*g,t[9]=-d*g,t[2]=-h*g,t[6]=y*v+M,t[10]=m-T*v}else if(e.order==="XZY"){const m=c*f,y=c*h,M=d*f,T=d*h;t[0]=f*g,t[4]=-v,t[8]=h*g,t[1]=m*v+T,t[5]=c*g,t[9]=y*v-M,t[2]=M*v-y,t[6]=d*g,t[10]=T*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sE,e,oE)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),zr.crossVectors(r,ti),zr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),zr.crossVectors(r,ti)),zr.normalize(),dc.crossVectors(ti,zr),o[0]=zr.x,o[4]=dc.x,o[8]=ti.x,o[1]=zr.y,o[5]=dc.y,o[9]=ti.y,o[2]=zr.z,o[6]=dc.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[4],f=r[8],h=r[12],g=r[1],v=r[5],m=r[9],y=r[13],M=r[2],T=r[6],S=r[10],_=r[14],P=r[3],U=r[7],C=r[11],R=r[15],L=o[0],F=o[4],E=o[8],D=o[12],B=o[1],j=o[5],J=o[9],ie=o[13],z=o[2],ee=o[6],he=o[10],K=o[14],Y=o[3],q=o[7],$=o[11],N=o[15];return l[0]=c*L+d*B+f*z+h*Y,l[4]=c*F+d*j+f*ee+h*q,l[8]=c*E+d*J+f*he+h*$,l[12]=c*D+d*ie+f*K+h*N,l[1]=g*L+v*B+m*z+y*Y,l[5]=g*F+v*j+m*ee+y*q,l[9]=g*E+v*J+m*he+y*$,l[13]=g*D+v*ie+m*K+y*N,l[2]=M*L+T*B+S*z+_*Y,l[6]=M*F+T*j+S*ee+_*q,l[10]=M*E+T*J+S*he+_*$,l[14]=M*D+T*ie+S*K+_*N,l[3]=P*L+U*B+C*z+R*Y,l[7]=P*F+U*j+C*ee+R*q,l[11]=P*E+U*J+C*he+R*$,l[15]=P*D+U*ie+C*K+R*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],d=e[5],f=e[9],h=e[13],g=e[2],v=e[6],m=e[10],y=e[14],M=e[3],T=e[7],S=e[11],_=e[15],P=f*y-h*m,U=d*y-h*v,C=d*m-f*v,R=c*y-h*g,L=c*m-f*g,F=c*v-d*g;return t*(T*P-S*U+_*C)-r*(M*P-S*R+_*L)+o*(M*U-T*R+_*F)-l*(M*C-T*L+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],c=e[5],d=e[9],f=e[2],h=e[6],g=e[10];return t*(c*g-d*h)-r*(l*g-d*f)+o*(l*h-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8],v=e[9],m=e[10],y=e[11],M=e[12],T=e[13],S=e[14],_=e[15],P=t*d-r*c,U=t*f-o*c,C=t*h-l*c,R=r*f-o*d,L=r*h-l*d,F=o*h-l*f,E=g*T-v*M,D=g*S-m*M,B=g*_-y*M,j=v*S-m*T,J=v*_-y*T,ie=m*_-y*S,z=P*ie-U*J+C*j+R*B-L*D+F*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/z;return e[0]=(d*ie-f*J+h*j)*ee,e[1]=(o*J-r*ie-l*j)*ee,e[2]=(T*F-S*L+_*R)*ee,e[3]=(m*L-v*F-y*R)*ee,e[4]=(f*B-c*ie-h*D)*ee,e[5]=(t*ie-o*B+l*D)*ee,e[6]=(S*C-M*F-_*U)*ee,e[7]=(g*F-m*C+y*U)*ee,e[8]=(c*J-d*B+h*E)*ee,e[9]=(r*B-t*J-l*E)*ee,e[10]=(M*L-T*C+_*P)*ee,e[11]=(v*C-g*L-y*P)*ee,e[12]=(d*D-c*j-f*E)*ee,e[13]=(t*j-r*D+o*E)*ee,e[14]=(T*U-M*R-S*P)*ee,e[15]=(g*R-v*U+m*P)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,d=e.y,f=e.z,h=l*c,g=l*d;return this.set(h*c+r,h*d-o*f,h*f+o*d,0,h*d+o*f,g*d+r,g*f-o*c,0,h*f-o*d,g*f+o*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,h=l+l,g=c+c,v=d+d,m=l*h,y=l*g,M=l*v,T=c*g,S=c*v,_=d*v,P=f*h,U=f*g,C=f*v,R=r.x,L=r.y,F=r.z;return o[0]=(1-(T+_))*R,o[1]=(y+C)*R,o[2]=(M-U)*R,o[3]=0,o[4]=(y-C)*L,o[5]=(1-(m+_))*L,o[6]=(S+P)*L,o[7]=0,o[8]=(M+U)*F,o[9]=(S-P)*F,o[10]=(1-(m+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=lo.set(o[0],o[1],o[2]).length();const d=lo.set(o[4],o[5],o[6]).length(),f=lo.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Li.copy(this);const h=1/c,g=1/d,v=1/f;return Li.elements[0]*=h,Li.elements[1]*=h,Li.elements[2]*=h,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,t.setFromRotationMatrix(Li),r.x=c,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,c,d=Yi,f=!1){const h=this.elements,g=2*l/(t-e),v=2*l/(r-o),m=(t+e)/(t-e),y=(r+o)/(r-o);let M,T;if(f)M=l/(c-l),T=c*l/(c-l);else if(d===Yi)M=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(d===Qc)M=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,d=Yi,f=!1){const h=this.elements,g=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,T;if(f)M=1/(c-l),T=c/(c-l);else if(d===Yi)M=-2/(c-l),T=-(c+l)/(c-l);else if(d===Qc)M=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};cu.prototype.isMatrix4=!0;let an=cu;const lo=new le,Li=new an,sE=new le(0,0,0),oE=new le(1,1,1),zr=new le,dc=new le,ti=new le,V0=new an,z0=new Fo;class Is{constructor(e=0,t=0,r=0,o=Is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],f=o[1],h=o[5],g=o[9],v=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return V0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return z0.setFromEuler(this),this.setFromQuaternion(z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Is.DEFAULT_ORDER="XYZ";class __{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aE=0;const H0=new le,co=new Fo,ur=new an,fc=new le,Ea=new le,lE=new le,cE=new Fo,G0=new le(1,0,0),W0=new le(0,1,0),X0=new le(0,0,1),j0={type:"added"},uE={type:"removed"},uo={type:"childadded",child:null},pf={type:"childremoved",child:null};class Kn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new le,t=new Is,r=new Fo,o=new le(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new ut}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new __,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(W0,e)}rotateZ(e){return this.rotateOnAxis(X0,e)}translateOnAxis(e,t){return H0.copy(e).applyQuaternion(this.quaternion),this.position.add(H0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(W0,e)}translateZ(e){return this.translateOnAxis(X0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fc.copy(e):fc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(Ea,fc,this.up):ur.lookAt(fc,Ea,this.up),this.quaternion.setFromRotationMatrix(ur),o&&(ur.extractRotation(o.matrixWorld),co.setFromRotationMatrix(ur),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j0),uo.child=e,this.dispatchEvent(uo),uo.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uE),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j0),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,lE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,cE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const v=f[h];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),h=c(e.textures),g=c(e.images),v=c(e.shapes),m=c(e.skeletons),y=c(e.animations),M=c(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(d){const f=[];for(const h in d){const g=d[h];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kn.DEFAULT_UP=new le(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hc extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),_=this._getHandJoint(h,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new hc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function gf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=St.workingColorSpace){if(e=Qw(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=gf(c,l,e+1/3),this.g=gf(c,l,e),this.b=gf(c,l,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,t=vi){function r(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const r=y_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return St.workingToColorSpace(Nn.copy(this),e),Math.round(Mt(Nn.r*255,0,255))*65536+Math.round(Mt(Nn.g*255,0,255))*256+Math.round(Mt(Nn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Nn.copy(this),t);const r=Nn.r,o=Nn.g,l=Nn.b,c=Math.max(r,o,l),d=Math.min(r,o,l);let f,h;const g=(d+c)/2;if(d===c)f=0,h=0;else{const v=c-d;switch(h=g<=.5?v/(c+d):v/(2-c-d),c){case r:f=(o-l)/v+(o<l?6:0);break;case o:f=(l-r)/v+2;break;case l:f=(r-o)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=g,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=vi){St.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,r=Nn.g,o=Nn.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(pc);const r=cf(Hr.h,pc.h,t),o=cf(Hr.s,pc.s,t),l=cf(Hr.l,pc.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Lt;Lt.NAMES=y_;class fE extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new le,dr=new le,vf=new le,fr=new le,fo=new le,ho=new le,Y0=new le,xf=new le,_f=new le,yf=new le,Sf=new nn,Mf=new nn,wf=new nn;class Ui{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Di.subVectors(e,t),o.cross(Di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Di.subVectors(o,t),dr.subVectors(r,t),vf.subVectors(e,t);const c=Di.dot(Di),d=Di.dot(dr),f=Di.dot(vf),h=dr.dot(dr),g=dr.dot(vf),v=c*h-d*d;if(v===0)return l.set(0,0,0),null;const m=1/v,y=(h*f-d*g)*m,M=(c*g-d*f)*m;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,r,o,l,c,d,f){return this.getBarycoord(e,t,r,o,fr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,fr.x),f.addScaledVector(c,fr.y),f.addScaledVector(d,fr.z),f)}static getInterpolatedAttribute(e,t,r,o,l,c){return Sf.setScalar(0),Mf.setScalar(0),wf.setScalar(0),Sf.fromBufferAttribute(e,t),Mf.fromBufferAttribute(e,r),wf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Sf,l.x),c.addScaledVector(Mf,l.y),c.addScaledVector(wf,l.z),c}static isFrontFacing(e,t,r,o){return Di.subVectors(r,t),dr.subVectors(e,t),Di.cross(dr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Di.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,d;fo.subVectors(o,r),ho.subVectors(l,r),xf.subVectors(e,r);const f=fo.dot(xf),h=ho.dot(xf);if(f<=0&&h<=0)return t.copy(r);_f.subVectors(e,o);const g=fo.dot(_f),v=ho.dot(_f);if(g>=0&&v<=g)return t.copy(o);const m=f*v-g*h;if(m<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(r).addScaledVector(fo,c);yf.subVectors(e,l);const y=fo.dot(yf),M=ho.dot(yf);if(M>=0&&y<=M)return t.copy(l);const T=y*h-f*M;if(T<=0&&h>=0&&M<=0)return d=h/(h-M),t.copy(r).addScaledVector(ho,d);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return Y0.subVectors(l,o),d=(v-g)/(v-g+(y-M)),t.copy(o).addScaledVector(Y0,d);const _=1/(S+T+m);return c=T*_,d=m*_,t.copy(r).addScaledVector(fo,c).addScaledVector(ho,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qa{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ni):Ni.fromBufferAttribute(l,c),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mc.copy(r.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),gc.subVectors(this.max,Ta),po.subVectors(e.a,Ta),mo.subVectors(e.b,Ta),go.subVectors(e.c,Ta),Gr.subVectors(mo,po),Wr.subVectors(go,mo),_s.subVectors(po,go);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-_s.z,_s.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,_s.z,0,-_s.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-_s.y,_s.x,0];return!Ef(t,po,mo,go,gc)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,po,mo,go,gc))?!1:(vc.crossVectors(Gr,Wr),t=[vc.x,vc.y,vc.z],Ef(t,po,mo,go,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new le,new le,new le,new le,new le,new le,new le,new le],Ni=new le,mc=new Qa,po=new le,mo=new le,go=new le,Gr=new le,Wr=new le,_s=new le,Ta=new le,gc=new le,vc=new le,ys=new le;function Ef(n,e,t,r,o){for(let l=0,c=n.length-3;l<=c;l+=3){ys.fromArray(n,l);const d=o.x*Math.abs(ys.x)+o.y*Math.abs(ys.y)+o.z*Math.abs(ys.z),f=e.dot(ys),h=t.dot(ys),g=r.dot(ys);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>d)return!1}return!0}const un=new le,xc=new Dt;let hE=0;class ki extends Us{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Yw,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)xc.fromBufferAttribute(this,t),xc.applyMatrix3(e),this.setXY(t,xc.x,xc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=wa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array),l=qn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class S_ extends ki{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class M_ extends ki{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class yi extends ki{constructor(e,t,r){super(new Float32Array(e),t,r)}}const pE=new Qa,ba=new le,Tf=new le;class du{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):pE.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const t=ba.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Tf)),this.expandByPoint(ba.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mE=0;const pi=new an,bf=new Kn,vo=new le,ni=new Qa,Aa=new Qa,yn=new le;class ri extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qw(e)?M_:S_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];Aa.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ni.min,Aa.min),ni.expandByPoint(yn),yn.addVectors(ni.max,Aa.max),ni.expandByPoint(yn)):(ni.expandByPoint(Aa.min),ni.expandByPoint(Aa.max))}ni.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)yn.fromBufferAttribute(d,h),f&&(vo.fromBufferAttribute(e,h),yn.add(vo)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new ki(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],f=[];for(let E=0;E<r.count;E++)d[E]=new le,f[E]=new le;const h=new le,g=new le,v=new le,m=new Dt,y=new Dt,M=new Dt,T=new le,S=new le;function _(E,D,B){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,B),m.fromBufferAttribute(l,E),y.fromBufferAttribute(l,D),M.fromBufferAttribute(l,B),g.sub(h),v.sub(h),y.sub(m),M.sub(m);const j=1/(y.x*M.y-M.x*y.y);isFinite(j)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(j),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(j),d[E].add(T),d[D].add(T),d[B].add(T),f[E].add(S),f[D].add(S),f[B].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let E=0,D=P.length;E<D;++E){const B=P[E],j=B.start,J=B.count;for(let ie=j,z=j+J;ie<z;ie+=3)_(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const U=new le,C=new le,R=new le,L=new le;function F(E){R.fromBufferAttribute(o,E),L.copy(R);const D=d[E];U.copy(D),U.sub(R.multiplyScalar(R.dot(D))).normalize(),C.crossVectors(L,D);const j=C.dot(f[E])<0?-1:1;c.setXYZW(E,U.x,U.y,U.z,j)}for(let E=0,D=P.length;E<D;++E){const B=P[E],j=B.start,J=B.count;for(let ie=j,z=j+J;ie<z;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ki(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new le,l=new le,c=new le,d=new le,f=new le,h=new le,g=new le,v=new le;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),T=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),d.add(g),f.add(g),h.add(g),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,f){const h=d.array,g=d.itemSize,v=d.normalized,m=new h.constructor(f.length*g);let y=0,M=0;for(let T=0,S=f.length;T<S;T++){d.isInterleavedBufferAttribute?y=f[T]*d.data.stride+d.offset:y=f[T]*g;for(let _=0;_<g;_++)m[M++]=h[y++]}return new ki(m,g,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],h=e(f,r);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const f=[],h=l[d];for(let g=0,v=h.length;g<v;g++){const m=h[g],y=e(m,r);f.push(y)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let v=0,m=h.length;v<m;v++){const y=h[v];g.push(y.toJSON(e.data))}g.length>0&&(o[f]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],v=l[h];for(let m=0,y=v.length;m<y;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Af=new le,gE=new le,vE=new ut;class $r{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Af.subVectors(r,t).cross(gE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Af),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vE.getNormalMatrix(e),o=this.coplanarPoint(Af).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xE=0;class Ja extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Oa,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jx,this.blendDst=e_,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=af,this.stencilZFail=af,this.stencilZPass=af,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new $r().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Dt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pr=new le,Cf=new le,_c=new le,yc=new le;class w_{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Cf.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),yc.copy(this.origin).sub(Cf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(_c),d=yc.dot(this.direction),f=-yc.dot(_c),h=yc.lengthSq(),g=Math.abs(1-c*c);let v,m,y,M;if(g>0)if(v=c*f-d,m=c*d-f,M=l*g,v>=0)if(m>=-M)if(m<=M){const T=1/g;v*=T,m*=T,y=v*(v+c*m+2*d)+m*(c*v+m+2*f)+h}else m=l,v=Math.max(0,-(c*m+d)),y=-v*v+m*(m+2*f)+h;else m=-l,v=Math.max(0,-(c*m+d)),y=-v*v+m*(m+2*f)+h;else m<=-M?(v=Math.max(0,-(-c*l+d)),m=v>0?-l:Math.min(Math.max(-l,-f),l),y=-v*v+m*(m+2*f)+h):m<=M?(v=0,m=Math.min(Math.max(-l,-f),l),y=m*(m+2*f)+h):(v=Math.max(0,-(c*l+d)),m=v>0?l:Math.min(Math.max(-l,-f),l),y=-v*v+m*(m+2*f)+h);else m=c>0?-l:l,v=Math.max(0,-(c*m+d)),y=-v*v+m*(m+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Cf).addScaledVector(_c,m),y}intersectSphere(e,t){if(e.radius<0)return null;pr.subVectors(e.center,this.origin);const r=pr.dot(this.direction),o=pr.dot(pr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=r-c,f=r+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,d,f;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),v>=0?(d=(e.min.z-m.z)*v,f=(e.max.z-m.z)*v):(d=(e.max.z-m.z)*v,f=(e.min.z-m.z)*v),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,r,o,l){const c=this.origin,d=this.direction,f=d.x,h=d.y,g=d.z,v=e.x-c.x,m=e.y-c.y,y=e.z-c.z,M=t.x-c.x,T=t.y-c.y,S=t.z-c.z,_=r.x-c.x,P=r.y-c.y,U=r.z-c.z,C=Math.abs(f),R=Math.abs(h),L=Math.abs(g);let F,E,D,B,j,J,ie,z,ee,he,K,Y;if(C>=R&&C>=L?(D=f,J=v,ee=M,Y=_,f>=0?(F=h,E=g,B=m,j=y,ie=T,z=S,he=P,K=U):(F=g,E=h,B=y,j=m,ie=S,z=T,he=U,K=P)):R>=L?(D=h,J=m,ee=T,Y=P,h>=0?(F=g,E=f,B=y,j=v,ie=S,z=M,he=U,K=_):(F=f,E=g,B=v,j=y,ie=M,z=S,he=_,K=U)):(D=g,J=y,ee=S,Y=U,g>=0?(F=f,E=h,B=v,j=m,ie=M,z=T,he=_,K=P):(F=h,E=f,B=m,j=v,ie=T,z=M,he=P,K=_)),D===0)return null;const q=F/D,$=E/D,N=1/D,se=B-q*J,Se=j-$*J,Ge=ie-q*ee,ze=z-$*ee,We=he-q*Y,ae=K-$*Y,de=We*ze-ae*Ge,Ee=se*ae-Se*We,tt=Ge*Se-ze*se;if(o){if(de<0||Ee<0||tt<0)return null}else if((de<0||Ee<0||tt<0)&&(de>0||Ee>0||tt>0))return null;const Oe=de+Ee+tt;if(Oe===0)return null;const ft=N*(de*J+Ee*ee+tt*Y);return(Oe>0?ft<0:ft>0)?null:this.at(ft/Oe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pp extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=t_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const q0=new an,Ss=new w_,Sc=new du,$0=new le,Mc=new le,wc=new le,Ec=new le,Rf=new le,Tc=new le,K0=new le,bc=new le;class Ji extends Kn{constructor(e=new ri,t=new pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Tc.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const g=d[f],v=l[f];g!==0&&(Rf.fromBufferAttribute(v,e),c?Tc.addScaledVector(Rf,g):Tc.addScaledVector(Rf.sub(t),g))}t.add(Tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(Sc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Sc,$0)===null||Ss.origin.distanceToSquared($0)>(e.far-e.near)**2))&&(q0.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(q0),!(r.boundingBox!==null&&Ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,m=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],_=c[S.materialIndex],P=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=P,R=U;C<R;C+=3){const L=d.getX(C),F=d.getX(C+1),E=d.getX(C+2);o=Ac(this,_,e,r,h,g,v,L,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=M,_=T;S<_;S+=3){const P=d.getX(S),U=d.getX(S+1),C=d.getX(S+2);o=Ac(this,c,e,r,h,g,v,P,U,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],_=c[S.materialIndex],P=Math.max(S.start,y.start),U=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=P,R=U;C<R;C+=3){const L=C,F=C+1,E=C+2;o=Ac(this,_,e,r,h,g,v,L,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=M,_=T;S<_;S+=3){const P=S,U=S+1,C=S+2;o=Ac(this,c,e,r,h,g,v,P,U,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function _E(n,e,t,r,o,l,c,d){let f;if(e.side===$n?f=r.intersectTriangle(c,l,o,!0,d):f=r.intersectTriangle(o,l,c,e.side===Ls,d),f===null)return null;bc.copy(d),bc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(bc);return h<t.near||h>t.far?null:{distance:h,point:bc.clone(),object:n}}function Ac(n,e,t,r,o,l,c,d,f,h){n.getVertexPosition(d,Mc),n.getVertexPosition(f,wc),n.getVertexPosition(h,Ec);const g=_E(n,e,t,r,Mc,wc,Ec,K0);if(g){const v=new le;Ui.getBarycoord(K0,Mc,wc,Ec,v),o&&(g.uv=Ui.getInterpolatedAttribute(o,d,f,h,v,new Dt)),l&&(g.uv1=Ui.getInterpolatedAttribute(l,d,f,h,v,new Dt)),c&&(g.normal=Ui.getInterpolatedAttribute(c,d,f,h,v,new le),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:d,b:f,c:h,normal:new le,materialIndex:0};Ui.getNormal(Mc,wc,Ec,m.normal),g.face=m,g.barycoord=v}return g}class yE extends zn{constructor(e=null,t=1,r=1,o,l,c,d,f,h=Tn,g=Tn,v,m){super(null,c,d,f,h,g,o,l,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ms=new du,SE=new Dt(.5,.5),Cc=new le;class E_{constructor(e=new $r,t=new $r,r=new $r,o=new $r,l=new $r,c=new $r){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi,r=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],h=l[3],g=l[4],v=l[5],m=l[6],y=l[7],M=l[8],T=l[9],S=l[10],_=l[11],P=l[12],U=l[13],C=l[14],R=l[15];if(o[0].setComponents(h-c,y-g,_-M,R-P).normalize(),o[1].setComponents(h+c,y+g,_+M,R+P).normalize(),o[2].setComponents(h+d,y+v,_+T,R+U).normalize(),o[3].setComponents(h-d,y-v,_-T,R-U).normalize(),r)o[4].setComponents(f,m,S,C).normalize(),o[5].setComponents(h-f,y-m,_-S,R-C).normalize();else if(o[4].setComponents(h-f,y-m,_-S,R-C).normalize(),t===Yi)o[5].setComponents(h+f,y+m,_+S,R+C).normalize();else if(t===Qc)o[5].setComponents(f,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=SE.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Cc.x=o.normal.x>0?e.max.x:e.min.x,Cc.y=o.normal.y>0?e.max.y:e.min.y,Cc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uh extends Ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z0=new an,Fh=new w_,Rc=new du,Pc=new le;class Q0 extends Kn{constructor(e=new ri,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(o),Rc.radius+=l,e.ray.intersectsSphere(Rc)===!1)return;Z0.copy(o).invert(),Fh.copy(e.ray).applyMatrix4(Z0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,h=r.index,v=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=m,T=y;M<T;M++){const S=h.getX(M);Pc.fromBufferAttribute(v,S),J0(Pc,S,f,o,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(v.count,c.start+c.count);for(let M=m,T=y;M<T;M++)Pc.fromBufferAttribute(v,M),J0(Pc,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function J0(n,e,t,r,o,l,c){const d=Fh.distanceSqToPoint(n);if(d<t){const f=new le;Fh.closestPointToPoint(n,f),f.applyMatrix4(r);const h=o.ray.origin.distanceTo(f);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class T_ extends zn{constructor(e=[],t=Ds,r,o,l,c,d,f,h,g){super(e,t,r,o,l,c,d,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xa extends zn{constructor(e,t,r=Zi,o,l,c,d=Tn,f=Tn,h,g=Sr,v=1){if(g!==Sr&&g!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,l,c,d,f,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ME extends Xa{constructor(e,t=Zi,r=Ds,o,l,c=Tn,d=Tn,f,h=Sr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,d,f,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class b_ extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends ri{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],g=[],v=[];let m=0,y=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new yi(h,3)),this.setAttribute("normal",new yi(g,3)),this.setAttribute("uv",new yi(v,2));function M(T,S,_,P,U,C,R,L,F,E,D){const B=C/F,j=R/E,J=C/2,ie=R/2,z=L/2,ee=F+1,he=E+1;let K=0,Y=0;const q=new le;for(let $=0;$<he;$++){const N=$*j-ie;for(let se=0;se<ee;se++){const Se=se*B-J;q[T]=Se*P,q[S]=N*U,q[_]=z,h.push(q.x,q.y,q.z),q[T]=0,q[S]=0,q[_]=L>0?1:-1,g.push(q.x,q.y,q.z),v.push(se/F),v.push(1-$/E),K+=1}}for(let $=0;$<E;$++)for(let N=0;N<F;N++){const se=m+N+ee*$,Se=m+N+ee*($+1),Ge=m+(N+1)+ee*($+1),ze=m+(N+1)+ee*$;f.push(se,Se,ze),f.push(Se,Ge,ze),Y+=6}d.addGroup(y,Y,D),y+=Y,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fu extends ri{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(r),f=Math.floor(o),h=d+1,g=f+1,v=e/d,m=t/f,y=[],M=[],T=[],S=[];for(let _=0;_<g;_++){const P=_*m-c;for(let U=0;U<h;U++){const C=U*v-l;M.push(C,-P,0),T.push(0,0,1),S.push(U/d),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let P=0;P<d;P++){const U=P+h*_,C=P+h*(_+1),R=P+1+h*(_+1),L=P+1+h*_;y.push(U,C,L),y.push(C,R,L)}this.setIndex(y),this.setAttribute("position",new yi(M,3)),this.setAttribute("normal",new yi(T,3)),this.setAttribute("uv",new yi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class mp extends ri{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+d,Math.PI);let h=0;const g=[],v=new le,m=new le,y=[],M=[],T=[],S=[];for(let _=0;_<=r;_++){const P=[],U=_/r,C=c+U*d,R=e*Math.cos(C),L=Math.sqrt(e*e-R*R);let F=0;_===0&&c===0?F=.5/t:_===r&&f===Math.PI&&(F=-.5/t);for(let E=0;E<=t;E++){const D=E/t,B=o+D*l;v.x=-L*Math.cos(B),v.y=R,v.z=L*Math.sin(B),M.push(v.x,v.y,v.z),m.copy(v).normalize(),T.push(m.x,m.y,m.z),S.push(D+F,1-U),P.push(h++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<t;P++){const U=g[_][P+1],C=g[_][P],R=g[_+1][P],L=g[_+1][P+1];(_!==0||c>0)&&y.push(U,C,L),(_!==r-1||f<Math.PI)&&y.push(C,R,L)}this.setIndex(y),this.setAttribute("position",new yi(M,3)),this.setAttribute("normal",new yi(T,3)),this.setAttribute("uv",new yi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Do(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(ev(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(ev(o[0])){const l=[];for(let c=0,d=o.length;c<d;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=Do(n[t]);for(const o in r)e[o]=r[o]}return e}function ev(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function A_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const EE={clone:Do,merge:Vn};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=wE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Dt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new le().fromArray(o.value);break;case"v4":this.uniforms[r].value=new nn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new an().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class AE extends er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CE extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RE extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lc=new le,Dc=new Fo,Gi=new le;class C_ extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Dc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Lc,Dc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new le,tv=new Dt,nv=new Dt;class xi extends C_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ih*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ih*2*Math.atan(Math.tan(lf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,tv,nv),t.subVectors(nv,tv)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*r/h,o*=c.width/f,r*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class R_ extends C_{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xo=-90,_o=1;class PE extends Kn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new xi(xo,_o,e,t);o.layers=this.layers,this.add(o);const l=new xi(xo,_o,e,t);l.layers=this.layers,this.add(l);const c=new xi(xo,_o,e,t);c.layers=this.layers,this.add(c);const d=new xi(xo,_o,e,t);d.layers=this.layers,this.add(d);const f=new xi(xo,_o,e,t);f.layers=this.layers,this.add(f);const h=new xi(xo,_o,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,d,f]=t;for(const h of t)this.remove(h);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class LE extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class DE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const nm=class nm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};nm.prototype.isMatrix2=!0;let iv=nm;function rv(n,e,t,r){const o=NE(r);switch(t){case p_:return n*e;case g_:return n*e/o.components*o.byteLength;case lp:return n*e/o.components*o.byteLength;case Ns:return n*e*2/o.components*o.byteLength;case cp:return n*e*2/o.components*o.byteLength;case m_:return n*e*3/o.components*o.byteLength;case Fi:return n*e*4/o.components*o.byteLength;case up:return n*e*4/o.components*o.byteLength;case Vc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(n,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(n,8)*Math.max(e,8)/2;case lh:case ch:case dh:case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uh:case qc:case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Rh:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lh:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $c:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function NE(n){switch(n){case _i:case u_:return{byteLength:1,components:1};case Ga:case d_:case Qi:return{byteLength:2,components:1};case op:case ap:return{byteLength:2,components:4};case Zi:case sp:case ji:return{byteLength:4,components:1};case f_:case h_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function P_(){let n=null,e=!1,t=null,r=null;function o(l,c){r=n.requestAnimationFrame(o),t(l,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function IE(n){const e=new WeakMap;function t(d,f){const h=d.array,g=d.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,h,g),d.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,f,h){const g=f.array,v=f.updateRanges;if(n.bindBuffer(h,d),v.length===0)n.bufferSubData(h,0,g);else{v.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<v.length;y++){const M=v[m],T=v[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++m,v[m]=T)}v.length=m+1;for(let y=0,M=v.length;y<M;y++){const T=v[y];n.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(n.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,f),h.version=d.version}}return{get:o,remove:l,update:c}}var UE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FE=`#ifdef USE_ALPHAHASH
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
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zE=`#ifdef USE_AOMAP
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
#endif`,HE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GE=`#ifdef USE_BATCHING
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
#endif`,WE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qE=`#ifdef USE_IRIDESCENCE
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
#endif`,$E=`#ifdef USE_BUMPMAP
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
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rT=`#define PI 3.141592653589793
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
} // validated`,sT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oT=`vec3 transformedNormal = objectNormal;
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
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",fT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hT=`#ifdef USE_ENVMAP
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
#endif`,pT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
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
#endif`,gT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ST=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MT=`#ifdef USE_GRADIENTMAP
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
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ET=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,AT=`#ifdef USE_ENVMAP
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
#endif`,CT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DT=`PhysicalMaterial material;
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
#endif`,NT=`uniform sampler2D dfgLUT;
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
}`,IT=`
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
#endif`,UT=`#if defined( RE_IndirectDiffuse )
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
#endif`,FT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XT=`#if defined( USE_POINTS_UV )
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
#endif`,jT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
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
#endif`,QT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
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
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,S1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
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
}`,H1=`#if DEPTH_PACKING == 3200
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
}`,G1=`#define DISTANCE
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
}`,W1=`#define DISTANCE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
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
}`,q1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,K1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,Q1=`#define LAMBERT
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
}`,J1=`#define MATCAP
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
}`,eb=`#define MATCAP
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
}`,tb=`#define NORMAL
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
}`,nb=`#define NORMAL
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
}`,ib=`#define PHONG
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
}`,rb=`#define PHONG
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
}`,sb=`#define STANDARD
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
}`,ob=`#define STANDARD
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
}`,ab=`#define TOON
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
}`,lb=`#define TOON
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
}`,cb=`uniform float size;
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
}`,ub=`uniform vec3 diffuse;
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
}`,db=`#include <common>
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
}`,fb=`uniform vec3 color;
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
}`,hb=`uniform float rotation;
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
}`,pb=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:UE,alphahash_pars_fragment:FE,alphamap_fragment:OE,alphamap_pars_fragment:kE,alphatest_fragment:BE,alphatest_pars_fragment:VE,aomap_fragment:zE,aomap_pars_fragment:HE,batching_pars_vertex:GE,batching_vertex:WE,begin_vertex:XE,beginnormal_vertex:jE,bsdfs:YE,iridescence_fragment:qE,bumpmap_pars_fragment:$E,clipping_planes_fragment:KE,clipping_planes_pars_fragment:ZE,clipping_planes_pars_vertex:QE,clipping_planes_vertex:JE,color_fragment:eT,color_pars_fragment:tT,color_pars_vertex:nT,color_vertex:iT,common:rT,cube_uv_reflection_fragment:sT,defaultnormal_vertex:oT,displacementmap_pars_vertex:aT,displacementmap_vertex:lT,emissivemap_fragment:cT,emissivemap_pars_fragment:uT,colorspace_fragment:dT,colorspace_pars_fragment:fT,envmap_fragment:hT,envmap_common_pars_fragment:pT,envmap_pars_fragment:mT,envmap_pars_vertex:gT,envmap_physical_pars_fragment:AT,envmap_vertex:vT,fog_vertex:xT,fog_pars_vertex:_T,fog_fragment:yT,fog_pars_fragment:ST,gradientmap_pars_fragment:MT,lightmap_pars_fragment:wT,lights_lambert_fragment:ET,lights_lambert_pars_fragment:TT,lights_pars_begin:bT,lights_toon_fragment:CT,lights_toon_pars_fragment:RT,lights_phong_fragment:PT,lights_phong_pars_fragment:LT,lights_physical_fragment:DT,lights_physical_pars_fragment:NT,lights_fragment_begin:IT,lights_fragment_maps:UT,lights_fragment_end:FT,lightprobes_pars_fragment:OT,logdepthbuf_fragment:kT,logdepthbuf_pars_fragment:BT,logdepthbuf_pars_vertex:VT,logdepthbuf_vertex:zT,map_fragment:HT,map_pars_fragment:GT,map_particle_fragment:WT,map_particle_pars_fragment:XT,metalnessmap_fragment:jT,metalnessmap_pars_fragment:YT,morphinstance_vertex:qT,morphcolor_vertex:$T,morphnormal_vertex:KT,morphtarget_pars_vertex:ZT,morphtarget_vertex:QT,normal_fragment_begin:JT,normal_fragment_maps:e1,normal_pars_fragment:t1,normal_pars_vertex:n1,normal_vertex:i1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:l1,opaque_fragment:c1,packing:u1,premultiplied_alpha_fragment:d1,project_vertex:f1,dithering_fragment:h1,dithering_pars_fragment:p1,roughnessmap_fragment:m1,roughnessmap_pars_fragment:g1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:x1,shadowmap_vertex:_1,shadowmask_pars_fragment:y1,skinbase_vertex:S1,skinning_pars_vertex:M1,skinning_vertex:w1,skinnormal_vertex:E1,specularmap_fragment:T1,specularmap_pars_fragment:b1,tonemapping_fragment:A1,tonemapping_pars_fragment:C1,transmission_fragment:R1,transmission_pars_fragment:P1,uv_pars_fragment:L1,uv_pars_vertex:D1,uv_vertex:N1,worldpos_vertex:I1,background_vert:U1,background_frag:F1,backgroundCube_vert:O1,backgroundCube_frag:k1,cube_vert:B1,cube_frag:V1,depth_vert:z1,depth_frag:H1,distance_vert:G1,distance_frag:W1,equirect_vert:X1,equirect_frag:j1,linedashed_vert:Y1,linedashed_frag:q1,meshbasic_vert:$1,meshbasic_frag:K1,meshlambert_vert:Z1,meshlambert_frag:Q1,meshmatcap_vert:J1,meshmatcap_frag:eb,meshnormal_vert:tb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:rb,meshphysical_vert:sb,meshphysical_frag:ob,meshtoon_vert:ab,meshtoon_frag:lb,points_vert:cb,points_frag:ub,shadow_vert:db,shadow_frag:fb,sprite_vert:hb,sprite_frag:pb},Ue={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Vn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Vn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Vn([Ue.points,Ue.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Vn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Vn([Ue.common,Ue.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Vn([Ue.sprite,Ue.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Vn([Ue.common,Ue.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Vn([Ue.lights,Ue.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Nc={r:0,b:0,g:0},mb=new an,L_=new ut;L_.set(-1,0,0,0,1,0,0,0,1);function gb(n,e,t,r,o,l){const c=new Lt(0);let d=o===!0?0:1,f,h,g=null,v=0,m=null;function y(P){let U=P.isScene===!0?P.background:null;if(U&&U.isTexture){const C=P.backgroundBlurriness>0;U=e.get(U,C)}return U}function M(P){let U=!1;const C=y(P);C===null?S(c,d):C&&C.isColor&&(S(C,1),U=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,l):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(n.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(P,U){const C=y(U);C&&(C.isCubeTexture||C.mapping===uu)?(h===void 0&&(h=new Ji(new el(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Do(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mb.makeRotationFromEuler(U.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(L_),h.material.toneMapped=St.getTransfer(C.colorSpace)!==Ft,(g!==C||v!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new Ji(new fu(2,2),new er({name:"BackgroundMaterial",uniforms:Do(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,f.material.toneMapped=St.getTransfer(C.colorSpace)!==Ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function S(P,U){P.getRGB(Nc,A_(n)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,U,l)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,U=1){c.set(P),d=U,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,S(c,d)},render:M,addToRenderList:T,dispose:_}}function vb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function d(j,J,ie,z,ee){let he=!1;const K=v(j,z,ie,J);l!==K&&(l=K,h(l.object)),he=y(j,z,ie,ee),he&&M(j,z,ie,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(j,J,ie,z),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function f(){return n.createVertexArray()}function h(j){return n.bindVertexArray(j)}function g(j){return n.deleteVertexArray(j)}function v(j,J,ie,z){const ee=z.wireframe===!0;let he=r[J.id];he===void 0&&(he={},r[J.id]=he);const K=j.isInstancedMesh===!0?j.id:0;let Y=he[K];Y===void 0&&(Y={},he[K]=Y);let q=Y[ie.id];q===void 0&&(q={},Y[ie.id]=q);let $=q[ee];return $===void 0&&($=m(f()),q[ee]=$),$}function m(j){const J=[],ie=[],z=[];for(let ee=0;ee<t;ee++)J[ee]=0,ie[ee]=0,z[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ie,attributeDivisors:z,object:j,attributes:{},index:null}}function y(j,J,ie,z){const ee=l.attributes,he=J.attributes;let K=0;const Y=ie.getAttributes();for(const q in Y)if(Y[q].location>=0){const N=ee[q];let se=he[q];if(se===void 0&&(q==="instanceMatrix"&&j.instanceMatrix&&(se=j.instanceMatrix),q==="instanceColor"&&j.instanceColor&&(se=j.instanceColor)),N===void 0||N.attribute!==se||se&&N.data!==se.data)return!0;K++}return l.attributesNum!==K||l.index!==z}function M(j,J,ie,z){const ee={},he=J.attributes;let K=0;const Y=ie.getAttributes();for(const q in Y)if(Y[q].location>=0){let N=he[q];N===void 0&&(q==="instanceMatrix"&&j.instanceMatrix&&(N=j.instanceMatrix),q==="instanceColor"&&j.instanceColor&&(N=j.instanceColor));const se={};se.attribute=N,N&&N.data&&(se.data=N.data),ee[q]=se,K++}l.attributes=ee,l.attributesNum=K,l.index=z}function T(){const j=l.newAttributes;for(let J=0,ie=j.length;J<ie;J++)j[J]=0}function S(j){_(j,0)}function _(j,J){const ie=l.newAttributes,z=l.enabledAttributes,ee=l.attributeDivisors;ie[j]=1,z[j]===0&&(n.enableVertexAttribArray(j),z[j]=1),ee[j]!==J&&(n.vertexAttribDivisor(j,J),ee[j]=J)}function P(){const j=l.newAttributes,J=l.enabledAttributes;for(let ie=0,z=J.length;ie<z;ie++)J[ie]!==j[ie]&&(n.disableVertexAttribArray(ie),J[ie]=0)}function U(j,J,ie,z,ee,he,K){K===!0?n.vertexAttribIPointer(j,J,ie,ee,he):n.vertexAttribPointer(j,J,ie,z,ee,he)}function C(j,J,ie,z){T();const ee=z.attributes,he=ie.getAttributes(),K=J.defaultAttributeValues;for(const Y in he){const q=he[Y];if(q.location>=0){let $=ee[Y];if($===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&($=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&($=j.instanceColor)),$!==void 0){const N=$.normalized,se=$.itemSize,Se=e.get($);if(Se===void 0)continue;const Ge=Se.buffer,ze=Se.type,We=Se.bytesPerElement,ae=ze===n.INT||ze===n.UNSIGNED_INT||$.gpuType===sp;if($.isInterleavedBufferAttribute){const de=$.data,Ee=de.stride,tt=$.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<q.locationSize;Oe++)_(q.location+Oe,de.meshPerAttribute);j.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<q.locationSize;Oe++)S(q.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Oe=0;Oe<q.locationSize;Oe++)U(q.location+Oe,se/q.locationSize,ze,N,Ee*We,(tt+se/q.locationSize*Oe)*We,ae)}else{if($.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)_(q.location+de,$.meshPerAttribute);j.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<q.locationSize;de++)S(q.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let de=0;de<q.locationSize;de++)U(q.location+de,se/q.locationSize,ze,N,se*We,se/q.locationSize*de*We,ae)}}else if(K!==void 0){const N=K[Y];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(q.location,N);break;case 3:n.vertexAttrib3fv(q.location,N);break;case 4:n.vertexAttrib4fv(q.location,N);break;default:n.vertexAttrib1fv(q.location,N)}}}}P()}function R(){D();for(const j in r){const J=r[j];for(const ie in J){const z=J[ie];for(const ee in z){const he=z[ee];for(const K in he)g(he[K].object),delete he[K];delete z[ee]}}delete r[j]}}function L(j){if(r[j.id]===void 0)return;const J=r[j.id];for(const ie in J){const z=J[ie];for(const ee in z){const he=z[ee];for(const K in he)g(he[K].object),delete he[K];delete z[ee]}}delete r[j.id]}function F(j){for(const J in r){const ie=r[J];for(const z in ie){const ee=ie[z];if(ee[j.id]===void 0)continue;const he=ee[j.id];for(const K in he)g(he[K].object),delete he[K];delete ee[j.id]}}}function E(j){for(const J in r){const ie=r[J],z=j.isInstancedMesh===!0?j.id:0,ee=ie[z];if(ee!==void 0){for(const he in ee){const K=ee[he];for(const Y in K)g(K[Y].object),delete K[Y];delete ee[he]}delete ie[z],Object.keys(ie).length===0&&delete r[J]}}}function D(){B(),c=!0,l!==o&&(l=o,h(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:D,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:P}}function xb(n,e,t){let r;function o(f){r=f}function l(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function c(f,h,g){g!==0&&(n.drawArraysInstanced(r,f,h,g),t.update(h,r,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function _b(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Fi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const E=F===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==_i&&F!==ji&&!E&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=f(h);g!==h&&(lt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:C,maxSamples:R,samples:L}}function yb(n){const e=this;let t=null,r=0,o=!1,l=!1;const c=new $r,d=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const y=v.length!==0||m||r!==0||o;return o=m,r=v.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,y){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,_=n.get(v);if(!o||M===null||M.length===0||l&&!S)l?g(null):h();else{const P=l?0:r,U=P*4;let C=_.clippingState||null;f.value=C,C=g(M,m,U,y);for(let R=0;R!==U;++R)C[R]=t[R];_.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,m,y,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const _=y+T*4,P=m.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,C=y;U!==T;++U,C+=4)c.copy(v[U]).applyMatrix4(P,d),c.normal.toArray(S,C),S[C+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}const wo=4,Sb=6,Mb=20,wb=256,Ca=new R_,sv=new Lt;let Pf=null,Lf=0,Df=0,Nf=!1;const Eb=new le,ws=new le;class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:d=Eb}=l;Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,Lf,Df),this._renderer.xr.enabled=Nf,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Qi,format:Fi,colorSpace:Kc,depthBuffer:!1},o=av(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tb(l)),this._blurMaterial=Ab(l,e,t),this._ggxMaterial=bb(l,e,t)}return o}_compileMaterial(e){const t=new Ji(new ri,e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,r,o,l){const f=new xi(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(sv),v.toneMapping=qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ji(new el,new pp({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let _=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,_=!0):(S.color.copy(sv),_=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(f.up.set(0,h[U],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[U],l.y,l.z)):C===1?(f.up.set(0,0,h[U]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[U],l.z)):(f.up.set(0,h[U],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[U]));const R=this._cubeSize;yo(o,C*R,U>2?R:0,R,R),v.setRenderTarget(o),_&&v.render(T,f),v.render(e,f)}v.toneMapping=y,v.autoClear=m,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ds||e.mapping===Lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;yo(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,Ca)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=h*1.25,y=v*m,{_lodMax:M}=this,T=this._sizeLods[r],S=3*T*(r>M-wo?r-M+wo:0),_=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=y,f.mipInt.value=M-t,yo(l,S,_,3*T,2*T),o.setRenderTarget(l),o.render(d,Ca),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=M-r,yo(e,S,_,3*T,2*T),o.setRenderTarget(e),o.render(d,Ca)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,c),this._blurPass(l,e,r,r,c)}_blurPass(e,t,r,o,l){const c=this._renderer,d=this._blurMaterial,f=this._lodMeshes[o];f.material=d;const h=d.uniforms;h.envMap.value=e.texture,h.sigma.value=l,h.mipInt.value=this._lodMax-r;const g=this._sizeLods[o],v=3*g*(o>this._lodMax-wo?o-this._lodMax+wo:0),m=4*(this._cubeSize-g);yo(t,v,m,3*g,2*g),c.setRenderTarget(t),c.render(f,Ca)}}function Tb(n){const e=[],t=[];let r=n;const o=n-wo+1+Sb;for(let l=0;l<o;l++){const c=Math.pow(2,r);e.push(c);const d=1/(c-2),f=-d,h=1+d,g=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,m=6,y=3,M=new Float32Array(y*m*v),T=new Float32Array(y*m*v);for(let _=0;_<v;_++){const P=_%3*2/3-1,U=_>2?0:-1,C=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];M.set(C,y*m*_);for(let R=0;R<m;R++){const L=g[R*2]*2-1,F=g[R*2+1]*2-1;_===0?ws.set(1,F,L):_===1?ws.set(-L,1,-F):_===2?ws.set(-L,F,1):_===3?ws.set(-1,F,-L):_===4?ws.set(-L,-1,F):ws.set(L,F,-1),ws.toArray(T,(_*m+R)*y)}}const S=new ri;S.setAttribute("position",new ki(M,y)),S.setAttribute("outputDirection",new ki(T,y)),t.push(new Ji(S,null)),r>wo&&r--}return{lodMeshes:t,sizeLods:e}}function av(n,e,t){const r=new Oi(n,e,t);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function bb(n,e,t){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Ab(n,e,t){return new er({name:"SphericalGaussianBlur",defines:{SAMPLES:Mb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function lv(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function cv(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class D_ extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new T_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new el(5,5,5),l=new er({name:"CubemapFromEquirect",uniforms:Do(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:vr});l.uniforms.tEquirect.value=t;const c=new Ji(o,l),d=t.minFilter;return t.minFilter===As&&(t.minFilter=Un),new PE(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function Cb(n){let e=new WeakMap,t=new WeakMap,r=null;function o(m,y=!1){return m==null?null:y?c(m):l(m)}function l(m){if(m&&m.isTexture){const y=m.mapping;if(y===rf||y===sf)if(e.has(m)){const M=e.get(m).texture;return d(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const T=new D_(M.height);return T.fromEquirectangularTexture(n,m),e.set(m,T),m.addEventListener("dispose",h),d(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,M=y===rf||y===sf,T=y===Ds||y===Lo;if(M||T){let S=t.get(m);const _=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return r===null&&(r=new ov(n)),S=M?r.fromEquirectangular(m,S):r.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const P=m.image;return M&&P&&P.height>0||T&&P&&f(P)?(r===null&&(r=new ov(n)),S=M?r.fromEquirectangular(m):r.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function d(m,y){return y===rf?m.mapping=Ds:y===sf&&(m.mapping=Lo),m}function f(m){let y=0;const M=6;for(let T=0;T<M;T++)m[T]!==void 0&&y++;return y===M}function h(m){const y=m.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function g(m){const y=m.target;y.removeEventListener("dispose",g);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function Rb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ro("WebGLRenderer: "+r+" extension not supported."),o}}}function Pb(n,e,t,r){const o={},l=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function d(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function f(v){const m=v.attributes;for(const y in m)e.update(m[y],n.ARRAY_BUFFER)}function h(v){const m=[],y=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(y!==null){const P=y.array;T=y.version;for(let U=0,C=P.length;U<C;U+=3){const R=P[U+0],L=P[U+1],F=P[U+2];m.push(R,L,L,F,F,R)}}else{const P=M.array;T=M.version;for(let U=0,C=P.length/3-1;U<C;U+=3){const R=U+0,L=U+1,F=U+2;m.push(R,L,L,F,F,R)}}const S=new(M.count>=65535?M_:S_)(m,1);S.version=T;const _=l.get(v);_&&e.remove(_),l.set(v,S)}function g(v){const m=l.get(v);if(m){const y=v.index;y!==null&&m.version<y.version&&h(v)}else h(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:g}}function Lb(n,e,t){let r;function o(v){r=v}let l,c;function d(v){l=v.type,c=v.bytesPerElement}function f(v,m){n.drawElements(r,m,l,v*c),t.update(m,r,1)}function h(v,m,y){y!==0&&(n.drawElementsInstanced(r,m,l,v*c,y),t.update(m,r,y))}function g(v,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,v,0,y);let T=0;for(let S=0;S<y;S++)T+=m[S];t.update(T,r,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=g}function Db(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=d*(l/3);break;case n.LINES:t.lines+=d*(l/2);break;case n.LINE_STRIP:t.lines+=d*(l-1);break;case n.LINE_LOOP:t.lines+=d*l;break;case n.POINTS:t.points+=d*l;break;default:Rt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Nb(n,e,t){const r=new WeakMap,o=new nn;function l(c,d,f){const h=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(d);if(m===void 0||m.count!==v){let B=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",B)};var y=B;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let R=d.attributes.position.count*C,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const F=new Float32Array(R*L*4*v),E=new x_(F,R,L,v);E.type=ji,E.needsUpdate=!0;const D=C*4;for(let j=0;j<v;j++){const J=_[j],ie=P[j],z=U[j],ee=R*L*4*j;for(let he=0;he<J.count;he++){const K=he*D;M===!0&&(o.fromBufferAttribute(J,he),F[ee+K+0]=o.x,F[ee+K+1]=o.y,F[ee+K+2]=o.z,F[ee+K+3]=0),T===!0&&(o.fromBufferAttribute(ie,he),F[ee+K+4]=o.x,F[ee+K+5]=o.y,F[ee+K+6]=o.z,F[ee+K+7]=0),S===!0&&(o.fromBufferAttribute(z,he),F[ee+K+8]=o.x,F[ee+K+9]=o.y,F[ee+K+10]=o.z,F[ee+K+11]=z.itemSize===4?o.w:1)}}m={count:v,texture:E,size:new Dt(R,L)},r.set(d,m),d.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:l}}function Ib(n,e,t,r,o){let l=new WeakMap;function c(h){const g=o.render.frame,v=h.geometry,m=e.get(h,v);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),l.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return m}function d(){l=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}const Ub={[n_]:"LINEAR_TONE_MAPPING",[i_]:"REINHARD_TONE_MAPPING",[r_]:"CINEON_TONE_MAPPING",[s_]:"ACES_FILMIC_TONE_MAPPING",[a_]:"AGX_TONE_MAPPING",[l_]:"NEUTRAL_TONE_MAPPING",[o_]:"CUSTOM_TONE_MAPPING"};function Fb(n,e,t,r,o,l){const c=new Oi(e,t,{type:n,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null;const h=new ri;h.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yi([0,2,0,0,2,0],2));const g=new AE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ji(h,g),m=new R_(-1,1,1,-1,0,1);let y=null,M=null,T=!1,S,_=null,P=[],U=!1;this.setSize=function(C,R){c.setSize(C,R),d!==null&&d.setSize(C,R),f!==null&&f.setSize(C,R);for(let L=0;L<P.length;L++){const F=P[L];F.setSize&&F.setSize(C,R)}},this.setEffects=function(C){P=C,U=P.length>0&&P[0].isRenderPass===!0;const R=c.width,L=c.height;P.length>0&&d===null&&(d=new Oi(R,L,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),f=new Oi(R,L,{type:Qi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<P.length;F++){const E=P[F];E.setSize&&E.setSize(R,L)}},this.begin=function(C,R){if(T||C.toneMapping===qi&&P.length===0)return!1;if(_=R,R!==null){const L=R.width,F=R.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return U===!1&&C.setRenderTarget(c),S=C.toneMapping,C.toneMapping=qi,!0},this.hasRenderPass=function(){return U},this.end=function(C,R){C.toneMapping=S,T=!0;let L=c,F=d;for(let E=0;E<P.length;E++){const D=P[E];D.enabled!==!1&&(D.render(C,F,L,R),D.needsSwap!==!1&&(L=F,F=F===d?f:d))}if(y!==C.outputColorSpace||M!==C.toneMapping){y=C.outputColorSpace,M=C.toneMapping,g.defines={},St.getTransfer(y)===Ft&&(g.defines.SRGB_TRANSFER="");const E=Ub[M];E&&(g.defines[E]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(_),C.render(v,m),_=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),h.dispose(),g.dispose()}}const N_=new zn,Oh=new Xa(1,1),I_=new x_,U_=new rE,F_=new T_,uv=[],dv=[],fv=new Float32Array(16),hv=new Float32Array(9),pv=new Float32Array(4);function Oo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=uv[o];if(l===void 0&&(l=new Float32Array(o),uv[o]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,n[c].toArray(l,d)}return l}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function pu(n,e){let t=dv[e];t===void 0&&(t=new Int32Array(e),dv[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Ob(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function Vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function zb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;pv.set(r),n.uniformMatrix2fv(this.addr,!1,pv),gn(t,r)}}function Hb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;hv.set(r),n.uniformMatrix3fv(this.addr,!1,hv),gn(t,r)}}function Gb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;fv.set(r),n.uniformMatrix4fv(this.addr,!1,fv),gn(t,r)}}function Wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function Qb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(Oh.compareFunction=t.isReversedDepthBuffer()?fp:dp,l=Oh):l=N_,t.setTexture2D(e||l,o)}function Jb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||U_,o)}function eA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||F_,o)}function tA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||I_,o)}function nA(n){switch(n){case 5126:return Ob;case 35664:return kb;case 35665:return Bb;case 35666:return Vb;case 35674:return zb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return jb;case 35669:case 35673:return Yb;case 5125:return qb;case 36294:return $b;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return tA}}function iA(n,e){n.uniform1fv(this.addr,e)}function rA(n,e){const t=Oo(e,this.size,2);n.uniform2fv(this.addr,t)}function sA(n,e){const t=Oo(e,this.size,3);n.uniform3fv(this.addr,t)}function oA(n,e){const t=Oo(e,this.size,4);n.uniform4fv(this.addr,t)}function aA(n,e){const t=Oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lA(n,e){const t=Oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cA(n,e){const t=Oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uA(n,e){n.uniform1iv(this.addr,e)}function dA(n,e){n.uniform2iv(this.addr,e)}function fA(n,e){n.uniform3iv(this.addr,e)}function hA(n,e){n.uniform4iv(this.addr,e)}function pA(n,e){n.uniform1uiv(this.addr,e)}function mA(n,e){n.uniform2uiv(this.addr,e)}function gA(n,e){n.uniform3uiv(this.addr,e)}function vA(n,e){n.uniform4uiv(this.addr,e)}function xA(n,e,t){const r=this.cache,o=e.length,l=pu(t,o);mn(r,l)||(n.uniform1iv(this.addr,l),gn(r,l));let c;this.type===n.SAMPLER_2D_SHADOW?c=Oh:c=N_;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,l[d])}function _A(n,e,t){const r=this.cache,o=e.length,l=pu(t,o);mn(r,l)||(n.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||U_,l[c])}function yA(n,e,t){const r=this.cache,o=e.length,l=pu(t,o);mn(r,l)||(n.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||F_,l[c])}function SA(n,e,t){const r=this.cache,o=e.length,l=pu(t,o);mn(r,l)||(n.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||I_,l[c])}function MA(n){switch(n){case 5126:return iA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return aA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return dA;case 35668:case 35672:return fA;case 35669:case 35673:return hA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return yA;case 36289:case 36303:case 36311:case 36292:return SA}}class wA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=nA(t.type)}}class EA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MA(t.type)}}class TA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const If=/(\w+)(\])?(\[|\.)?/g;function mv(n,e){n.seq.push(e),n.map[e.id]=e}function bA(n,e,t){const r=n.name,o=r.length;for(If.lastIndex=0;;){const l=If.exec(r),c=If.lastIndex;let d=l[1];const f=l[2]==="]",h=l[3];if(f&&(d=d|0),h===void 0||h==="["&&c+2===o){mv(t,h===void 0?new wA(d,n,e):new EA(d,n,e));break}else{let v=t.map[d];v===void 0&&(v=new TA(d),mv(t,v)),t=v}}}class Wc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);bA(d,f,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function gv(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const AA=37297;let CA=0;function RA(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const vv=new ut;function PA(n){St._getMatrix(vv,St.workingColorSpace,n);const e=`mat3( ${vv.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case Zc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xv(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+RA(n.getShaderSource(e),d)}else return l}function LA(n,e){const t=PA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const DA={[n_]:"Linear",[i_]:"Reinhard",[r_]:"Cineon",[s_]:"ACESFilmic",[a_]:"AgX",[l_]:"Neutral",[o_]:"Custom"};function NA(n,e){const t=DA[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new le;function IA(){St.getLuminanceCoefficients(Ic);const n=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function FA(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function OA(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),c=l.name;let d=1;l.type===n.FLOAT_MAT2&&(d=2),l.type===n.FLOAT_MAT3&&(d=3),l.type===n.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:n.getAttribLocation(e,c),locationSize:d}}return t}function Da(n){return n!==""}function _v(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(n){return n.replace(kA,VA)}const BA=new Map;function VA(n,e){let t=gt[e];if(t===void 0){const r=BA.get(e);if(r!==void 0)t=gt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kh(t)}const zA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(n){return n.replace(zA,HA)}function HA(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Mv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const GA={[Bc]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function WA(n){return GA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XA={[Ds]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function jA(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":XA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const YA={[Lo]:"ENVMAP_MODE_REFRACTION"};function qA(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":YA[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $A={[t_]:"ENVMAP_BLENDING_MULTIPLY",[Uw]:"ENVMAP_BLENDING_MIX",[Fw]:"ENVMAP_BLENDING_ADD"};function KA(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$A[n.combine]||"ENVMAP_BLENDING_NONE"}function ZA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function QA(n,e,t,r){const o=n.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=WA(t),h=jA(t),g=qA(t),v=KA(t),m=ZA(t),y=UA(t),M=FA(l),T=o.createProgram();let S,_,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Da).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Da).join(`
`),_.length>0&&(_+=`
`)):(S=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),_=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?gt.tonemapping_pars_fragment:"",t.toneMapping!==qi?NA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,LA("linearToOutputTexel",t.outputColorSpace),IA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),c=kh(c),c=_v(c,t),c=yv(c,t),d=kh(d),d=_v(d,t),d=yv(d,t),c=Sv(c),d=Sv(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===I0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===I0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=P+S+c,C=P+_+d,R=gv(o,o.VERTEX_SHADER,U),L=gv(o,o.FRAGMENT_SHADER,C);o.attachShader(T,R),o.attachShader(T,L),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(j){if(n.debug.checkShaderErrors){const J=o.getProgramInfoLog(T)||"",ie=o.getShaderInfoLog(R)||"",z=o.getShaderInfoLog(L)||"",ee=J.trim(),he=ie.trim(),K=z.trim();let Y=!0,q=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,R,L);else{const $=xv(o,R,"vertex"),N=xv(o,L,"fragment");Rt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ee+`
`+$+`
`+N)}else ee!==""?lt("WebGLProgram: Program Info Log:",ee):(he===""||K==="")&&(q=!1);q&&(j.diagnostics={runnable:Y,programLog:ee,vertexShader:{log:he,prefix:S},fragmentShader:{log:K,prefix:_}})}o.deleteShader(R),o.deleteShader(L),E=new Wc(o,T),D=OA(o,T)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(T,AA)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=R,this.fragmentShader=L,this}let JA=0;class eC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new tC(e),t.set(e,r)),r}}class tC{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function nC(n){return n===Ns||n===qc||n===$c}function iC(n,e,t,r,o,l){const c=new __,d=new eC,f=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return f.add(E),E===0?"uv":`uv${E}`}function T(E,D,B,j,J,ie){const z=j.fog,ee=J.geometry,he=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?j.environment:null,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||he,K),q=Y&&Y.mapping===uu?Y.image.height:null,$=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&lt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const N=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,se=N!==void 0?N.length:0;let Se=0;ee.morphAttributes.position!==void 0&&(Se=1),ee.morphAttributes.normal!==void 0&&(Se=2),ee.morphAttributes.color!==void 0&&(Se=3);let Ge,ze,We,ae;if($){const bt=Xi[$];Ge=bt.vertexShader,ze=bt.fragmentShader}else{Ge=E.vertexShader,ze=E.fragmentShader;const bt=d.getVertexShaderStage(E),wt=d.getFragmentShaderStage(E);d.update(E,bt,wt),We=bt.id,ae=wt.id}const de=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),tt=J.isInstancedMesh===!0,Oe=J.isBatchedMesh===!0,ft=!!E.map,Wt=!!E.matcap,ht=!!Y,xt=!!E.aoMap,It=!!E.lightMap,pt=!!E.bumpMap&&E.wireframe===!1,Ot=!!E.normalMap,Qt=!!E.displacementMap,ln=!!E.emissiveMap,Nt=!!E.metalnessMap,Xt=!!E.roughnessMap,W=E.anisotropy>0,dn=E.clearcoat>0,Tt=E.dispersion>0,I=E.retroreflectivity>0,w=E.iridescence>0,Z=E.sheen>0,oe=E.transmission>0,fe=W&&!!E.anisotropyMap,we=dn&&!!E.clearcoatMap,Ae=dn&&!!E.clearcoatNormalMap,pe=dn&&!!E.clearcoatRoughnessMap,ge=w&&!!E.iridescenceMap,Pe=w&&!!E.iridescenceThicknessMap,$e=Z&&!!E.sheenColorMap,Le=Z&&!!E.sheenRoughnessMap,be=!!E.specularMap,Ke=!!E.specularColorMap,nt=!!E.specularIntensityMap,ot=oe&&!!E.transmissionMap,H=oe&&!!E.thicknessMap,Ce=!!E.gradientMap,me=!!E.alphaMap,Re=E.alphaTest>0,Fe=!!E.alphaHash,ve=!!E.extensions;let Je=qi;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=n.toneMapping);const Ye={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:ze,defines:E.defines,customVertexShaderID:We,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&J._colorsTexture!==null,instancing:tt,instancingColor:tt&&J.instanceColor!==null,instancingMorph:tt&&J.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:Wt,envMap:ht,envMapMode:ht&&Y.mapping,envMapCubeUVHeight:q,aoMap:xt,lightMap:It,bumpMap:pt,normalMap:Ot,displacementMap:Qt,emissiveMap:ln,normalMapObjectSpace:Ot&&E.normalMapType===Bw,normalMapTangentSpace:Ot&&E.normalMapType===N0,packedNormalMap:Ot&&E.normalMapType===N0&&nC(E.normalMap.format),metalnessMap:Nt,roughnessMap:Xt,anisotropy:W,anisotropyMap:fe,clearcoat:dn,clearcoatMap:we,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:Tt,retroreflection:I,iridescence:w,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:Z,sheenColorMap:$e,sheenRoughnessMap:Le,specularMap:be,specularColorMap:Ke,specularIntensityMap:nt,transmission:oe,transmissionMap:ot,thicknessMap:H,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===Oa&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:Fe,combine:E.combine,mapUv:ft&&M(E.map.channel),aoMapUv:xt&&M(E.aoMap.channel),lightMapUv:It&&M(E.lightMap.channel),bumpMapUv:pt&&M(E.bumpMap.channel),normalMapUv:Ot&&M(E.normalMap.channel),displacementMapUv:Qt&&M(E.displacementMap.channel),emissiveMapUv:ln&&M(E.emissiveMap.channel),metalnessMapUv:Nt&&M(E.metalnessMap.channel),roughnessMapUv:Xt&&M(E.roughnessMap.channel),anisotropyMapUv:fe&&M(E.anisotropyMap.channel),clearcoatMapUv:we&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&M(E.sheenRoughnessMap.channel),specularMapUv:be&&M(E.specularMap.channel),specularColorMapUv:Ke&&M(E.specularColorMap.channel),specularIntensityMapUv:nt&&M(E.specularIntensityMap.channel),transmissionMapUv:ot&&M(E.transmissionMap.channel),thicknessMapUv:H&&M(E.thicknessMap.channel),alphaMapUv:me&&M(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ot||W),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ee.attributes.uv&&(ft||me),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&Ot===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ee,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===Ft,decodeVideoTextureEmissive:ln&&E.emissiveMap.isVideoTexture===!0&&St.getTransfer(E.emissiveMap.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mr,flipSided:E.side===$n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=f.has(1),Ye.vertexUv2s=f.has(2),Ye.vertexUv3s=f.has(3),f.clear(),Ye}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)D.push(B),D.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(_(D,E),P(D,E),D.push(n.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function _(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function P(E,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.retroreflection&&c.enable(24),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),D.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function U(E){const D=y[E.type];let B;if(D){const j=Xi[D];B=EE.clone(j.uniforms)}else B=E.uniforms;return B}function C(E,D){let B=g.get(D);return B!==void 0?++B.usedTimes:(B=new QA(n,D,E,o),h.push(B),g.set(D,B)),B}function R(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function L(E){d.remove(E)}function F(){d.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:U,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:F}}function rC(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let d=n.get(c);return d===void 0&&(d={},n.set(c,d)),d}function r(c){n.delete(c)}function o(c,d,f){n.get(c)[d]=f}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function sC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ev(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function d(m,y,M,T,S,_){let P=n[e];return P===void 0?(P={id:m.id,object:m,geometry:y,material:M,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:S,group:_},n[e]=P):(P.id=m.id,P.object=m,P.geometry=y,P.material=M,P.materialVariant=c(m),P.groupOrder=T,P.renderOrder=m.renderOrder,P.z=S,P.group=_),e++,P}function f(m,y,M,T,S,_,P){P.reversedDepth===!0&&(S=-S);const U=d(m,y,M,T,S,_);M.transmission>0?r.push(U):M.transparent===!0?o.push(U):t.push(U)}function h(m,y,M,T,S,_){const P=d(m,y,M,T,S,_);M.transmission>0?r.unshift(P):M.transparent===!0?o.unshift(P):t.unshift(P)}function g(m,y){t.length>1&&t.sort(m||sC),r.length>1&&r.sort(y||wv),o.length>1&&o.sort(y||wv)}function v(){for(let m=e,y=n.length;m<y;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:v,sort:g}}function oC(){let n=new WeakMap;function e(r,o){const l=n.get(r);let c;return l===void 0?(c=new Ev,n.set(r,[c])):o>=l.length?(c=new Ev,l.push(c)):c=l[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function aC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new le,color:new Lt};break;case"SpotLight":t={position:new le,direction:new le,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function lC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cC=0;function uC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dC(n){const e=new aC,t=lC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const o=new le,l=new an,c=new an;function d(h){let g=0,v=0,m=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let y=0,M=0,T=0,S=0,_=0,P=0,U=0,C=0,R=0,L=0,F=0,E=0,D=0,B=0;h.sort(uC);for(let J=0,ie=h.length;J<ie;J++){const z=h[J],ee=z.color,he=z.intensity,K=z.distance;let Y=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ns?Y=z.shadow.map.texture:Y=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=ee.r*he,v+=ee.g*he,m+=ee.b*he;else if(z.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(z.sh.coefficients[q],he);B++}else if(z.isSunLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,N=t.get(z);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[M]=N,r.sunShadowMap[M]=Y;const se=$.getViewportCount();for(let Se=0;Se<se;Se++)r.sunShadowMatrix[T+Se]=$.getMatrix(Se),r.sunShadowCascade[T+Se]=$._cascadeData[Se];T+=se,M++}r.sun[y]=q,y++}else if(z.isDirectionalLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,N=t.get(z);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,r.directionalShadow[S]=N,r.directionalShadowMap[S]=Y,r.directionalShadowMatrix[S]=z.shadow.matrix,R++}r.directional[S]=q,S++}else if(z.isSpotLight){const q=e.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(ee).multiplyScalar(he),q.distance=K,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,r.spot[P]=q;const $=z.shadow;if(z.map&&(r.spotLightMap[E]=z.map,E++,$.updateMatrices(z),z.castShadow&&D++),r.spotLightMatrix[P]=$.matrix,z.castShadow){const N=t.get(z);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,r.spotShadow[P]=N,r.spotShadowMap[P]=Y,F++}P++}else if(z.isRectAreaLight){const q=e.get(z);q.color.copy(ee).multiplyScalar(he),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),r.rectArea[U]=q,U++}else if(z.isPointLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),q.distance=z.distance,q.decay=z.decay,z.castShadow){const $=z.shadow,N=t.get(z);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,N.shadowCameraNear=$.camera.near,N.shadowCameraFar=$.camera.far,r.pointShadow[_]=N,r.pointShadowMap[_]=Y,r.pointShadowMatrix[_]=z.shadow.matrix,L++}r.point[_]=q,_++}else if(z.isHemisphereLight){const q=e.get(z);q.skyColor.copy(z.color).multiplyScalar(he),q.groundColor.copy(z.groundColor).multiplyScalar(he),r.hemi[C]=q,C++}}U>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=m;const j=r.hash;(j.sunLength!==y||j.directionalLength!==S||j.pointLength!==_||j.spotLength!==P||j.rectAreaLength!==U||j.hemiLength!==C||j.numSunShadows!==M||j.numDirectionalShadows!==R||j.numPointShadows!==L||j.numSpotShadows!==F||j.numSpotMaps!==E||j.numLightProbes!==B)&&(r.sun.length=y,r.directional.length=S,r.spot.length=P,r.rectArea.length=U,r.point.length=_,r.hemi.length=C,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.directionalShadowMatrix.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-D,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=B,j.sunLength=y,j.directionalLength=S,j.pointLength=_,j.spotLength=P,j.rectAreaLength=U,j.hemiLength=C,j.numSunShadows=M,j.numDirectionalShadows=R,j.numPointShadows=L,j.numSpotShadows=F,j.numSpotMaps=E,j.numLightProbes=B,r.version=cC++)}function f(h,g){let v=0,m=0,y=0,M=0,T=0,S=0;const _=g.matrixWorldInverse;for(let P=0,U=h.length;P<U;P++){const C=h[P];if(C.isSunLight){const R=r.sun[v];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(_),v++}else if(C.isDirectionalLight){const R=r.directional[m];R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(_),m++}else if(C.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(_),M++}else if(C.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(_),c.identity(),l.copy(C.matrixWorld),l.premultiply(_),c.extractRotation(l),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(C.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(_),y++}else if(C.isHemisphereLight){const R=r.hemi[S];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(_),S++}}}return{setup:d,setupView:f,state:r}}function Tv(n){const e=new dC(n),t=[],r=[],o=[];function l(m){v.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function d(m){r.push(m)}function f(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function fC(n){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Tv(n),e.set(o,[d])):l>=c.length?(d=new Tv(n),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const hC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
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
}`,mC=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],gC=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],bv=new an,Ra=new le,Uf=new le;function vC(n,e,t){let r=new E_;const o=new Dt,l=new Dt,c=new nn,d=new CE,f=new RE,h={},g=t.maxTextureSize,v={[Ls]:$n,[$n]:Ls,[mr]:mr},m=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:hC,fragmentShader:pC}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new ri;M.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ji(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let _=this.type;this.render=function(L,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===gw&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bc);const D=n.getRenderTarget(),B=n.getActiveCubeFace(),j=n.getActiveMipmapLevel(),J=n.state;J.setBlending(vr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ie=_!==this.type;ie&&F.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(ee=>ee.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,ee=L.length;z<ee;z++){const he=L[z],K=he.shadow;if(K===void 0){lt("WebGLShadowMap:",he,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Y=K.getFrameExtents();o.multiply(Y),l.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Y.x),o.x=l.x*Y.x,K.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Y.y),o.y=l.y*Y.y,K.mapSize.y=l.y));const q=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=q,K.map===null||ie===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===La){if(he.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Oi(o.x,o.y,{format:Ns,type:Qi,minFilter:Un,magFilter:Un,generateMipmaps:!1}),K.map.texture.name=he.name+".shadowMap",K.map.depthTexture=new Xa(o.x,o.y,ji),K.map.depthTexture.name=he.name+".shadowMapDepth",K.map.depthTexture.format=Sr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn}else he.isPointLight?(K.map=new D_(o.x),K.map.depthTexture=new ME(o.x,Zi)):(K.map=new Oi(o.x,o.y),K.map.depthTexture=new Xa(o.x,o.y,Zi)),K.map.depthTexture.name=he.name+".shadowMap",K.map.depthTexture.format=Sr,this.type===Bc?(K.map.depthTexture.compareFunction=q?fp:dp,K.map.depthTexture.minFilter=Un,K.map.depthTexture.magFilter=Un):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==o.x||K.map.height!==o.y)&&K.map.setSize(o.x,o.y);const $=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();he.isPointLight!==!0&&K.updateMatrices(he,E);for(let N=0;N<$;N++){const se=K.getCamera(N);if(he.isPointLight){const Se=K.camera,Ge=K.matrix,ze=he.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),Ra.setFromMatrixPosition(he.matrixWorld),Se.position.copy(Ra),Uf.copy(Se.position),Uf.add(mC[N]),Se.up.copy(gC[N]),Se.lookAt(Uf),Se.updateMatrixWorld(),Ge.makeTranslation(-Ra.x,-Ra.y,-Ra.z),bv.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),K._frustum.setFromProjectionMatrix(bv,Se.coordinateSystem,Se.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,N),n.clear();else{N===0&&(n.setRenderTarget(K.map),n.clear());const Se=K.getViewport(N);c.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),J.viewport(c)}r=K.getFrustum(N),C(F,E,se,he,this.type)}K.isPointLightShadow!==!0&&this.type===La&&P(K,E),K.needsUpdate=!1}_=this.type,S.needsUpdate=!1,n.setRenderTarget(D,B,j)};function P(L,F){const E=e.update(T);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null?L.mapPass=new Oi(o.x,o.y,{format:Ns,type:Qi}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value.set(L.map.width,L.map.height),m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,E,m,T,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value.set(L.map.width,L.map.height),y.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,E,y,T,null)}function U(L,F,E,D){let B=null;const j=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)B=j;else if(B=E.isPointLight===!0?f:d,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=B.uuid,ie=F.uuid;let z=h[J];z===void 0&&(z={},h[J]=z);let ee=z[ie];ee===void 0&&(ee=B.clone(),z[ie]=ee,F.addEventListener("dispose",R)),B=ee}if(B.visible=F.visible,B.wireframe=F.wireframe,D===La?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:v[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const J=n.properties.get(B);J.light=E}return B}function C(L,F,E,D,B){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===La)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const ie=e.update(L),z=L.material;if(Array.isArray(z)){const ee=ie.groups;for(let he=0,K=ee.length;he<K;he++){const Y=ee[he],q=z[Y.materialIndex];if(q&&q.visible){const $=U(L,q,D,B);L.onBeforeShadow(n,L,F,E,ie,$,Y),n.renderBufferDirect(E,null,ie,$,L,Y),L.onAfterShadow(n,L,F,E,ie,$,Y)}}}else if(z.visible){const ee=U(L,z,D,B);L.onBeforeShadow(n,L,F,E,ie,ee,null),n.renderBufferDirect(E,null,ie,ee,L,null),L.onAfterShadow(n,L,F,E,ie,ee,null)}}const J=L.children;for(let ie=0,z=J.length;ie<z;ie++)C(J[ie],F,E,D,B)}function R(L){L.target.removeEventListener("dispose",R);for(const E in h){const D=h[E],B=L.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function xC(n,e){function t(){let H=!1;const Ce=new nn;let me=null;const Re=new nn(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!H&&(n.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,ve,Je,Ye,bt){bt===!0&&(Fe*=Ye,ve*=Ye,Je*=Ye),Ce.set(Fe,ve,Je,Ye),Re.equals(Ce)===!1&&(n.clearColor(Fe,ve,Je,Ye),Re.copy(Ce))},reset:function(){H=!1,me=null,Re.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,me=null,Re=null,Fe=null;return{setReversed:function(ve){if(Ce!==ve){const Je=e.get("EXT_clip_control");ve?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ce=ve;const Ye=Fe;Fe=null,this.setClear(Ye)}},getReversed:function(){return Ce},setTest:function(ve){ve?de(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ve){me!==ve&&!H&&(n.depthMask(ve),me=ve)},setFunc:function(ve){if(Ce&&(ve=Zw[ve]),Re!==ve){switch(ve){case $f:n.depthFunc(n.NEVER);break;case Kf:n.depthFunc(n.ALWAYS);break;case Zf:n.depthFunc(n.LESS);break;case Ha:n.depthFunc(n.LEQUAL);break;case Qf:n.depthFunc(n.EQUAL);break;case Jf:n.depthFunc(n.GEQUAL);break;case eh:n.depthFunc(n.GREATER);break;case th:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Fe!==ve&&(Fe=ve,Ce&&(ve=1-ve),n.clearDepth(ve))},reset:function(){H=!1,me=null,Re=null,Fe=null,Ce=!1}}}function o(){let H=!1,Ce=null,me=null,Re=null,Fe=null,ve=null,Je=null,Ye=null,bt=null;return{setTest:function(wt){H||(wt?de(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(wt){Ce!==wt&&!H&&(n.stencilMask(wt),Ce=wt)},setFunc:function(wt,Sn,oi){(me!==wt||Re!==Sn||Fe!==oi)&&(n.stencilFunc(wt,Sn,oi),me=wt,Re=Sn,Fe=oi)},setOp:function(wt,Sn,oi){(ve!==wt||Je!==Sn||Ye!==oi)&&(n.stencilOp(wt,Sn,oi),ve=wt,Je=Sn,Ye=oi)},setLocked:function(wt){H=wt},setClear:function(wt){bt!==wt&&(n.clearStencil(wt),bt=wt)},reset:function(){H=!1,Ce=null,me=null,Re=null,Fe=null,ve=null,Je=null,Ye=null,bt=null}}}const l=new t,c=new r,d=new o,f=new WeakMap,h=new WeakMap;let g={},v={},m={},y=new WeakMap,M=[],T=null,S=!1,_=null,P=null,U=null,C=null,R=null,L=null,F=null,E=new Lt(0,0,0),D=0,B=!1,j=null,J=null,ie=null,z=null,ee=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),K=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),K=Y>=2);let $=null,N={};const se=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ge=new nn().fromArray(se),ze=new nn().fromArray(Se);function We(H,Ce,me,Re){const Fe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(H,ve),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<me;Je++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Ce+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return ve}const ae={};ae[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),de(n.DEPTH_TEST),c.setFunc(Ha),pt(!1),Ot(R0),de(n.CULL_FACE),xt(vr);function de(H){g[H]!==!0&&(n.enable(H),g[H]=!0)}function Ee(H){g[H]!==!1&&(n.disable(H),g[H]=!1)}function tt(H,Ce){return m[H]!==Ce?(n.bindFramebuffer(H,Ce),m[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Oe(H,Ce){let me=M,Re=!1;if(H){me=y.get(Ce),me===void 0&&(me=[],y.set(Ce,me));const Fe=H.textures;if(me.length!==Fe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Je=Fe.length;ve<Je;ve++)me[ve]=n.COLOR_ATTACHMENT0+ve;me.length=Fe.length,Re=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Re=!0);Re&&n.drawBuffers(me)}function ft(H){return T!==H?(n.useProgram(H),T=H,!0):!1}const Wt={[Mo]:n.FUNC_ADD,[xw]:n.FUNC_SUBTRACT,[_w]:n.FUNC_REVERSE_SUBTRACT};Wt[yw]=n.MIN,Wt[Sw]=n.MAX;const ht={[Mw]:n.ZERO,[ww]:n.ONE,[Ew]:n.SRC_COLOR,[Jx]:n.SRC_ALPHA,[Pw]:n.SRC_ALPHA_SATURATE,[Cw]:n.DST_COLOR,[bw]:n.DST_ALPHA,[Tw]:n.ONE_MINUS_SRC_COLOR,[e_]:n.ONE_MINUS_SRC_ALPHA,[Rw]:n.ONE_MINUS_DST_COLOR,[Aw]:n.ONE_MINUS_DST_ALPHA,[Lw]:n.CONSTANT_COLOR,[Dw]:n.ONE_MINUS_CONSTANT_COLOR,[Nw]:n.CONSTANT_ALPHA,[Iw]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(H,Ce,me,Re,Fe,ve,Je,Ye,bt,wt){if(H===vr){S===!0&&(Ee(n.BLEND),S=!1);return}if(S===!1&&(de(n.BLEND),S=!0),H!==vw){if(H!==_||wt!==B){if((P!==Mo||R!==Mo)&&(n.blendEquation(n.FUNC_ADD),P=Mo,R=Mo),wt)switch(H){case Oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case P0:n.blendFunc(n.ONE,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case D0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Rt("WebGLState: Invalid blending: ",H);break}else switch(H){case Oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case P0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case L0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case D0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",H);break}U=null,C=null,L=null,F=null,E.set(0,0,0),D=0,_=H,B=wt}return}Fe=Fe||Ce,ve=ve||me,Je=Je||Re,(Ce!==P||Fe!==R)&&(n.blendEquationSeparate(Wt[Ce],Wt[Fe]),P=Ce,R=Fe),(me!==U||Re!==C||ve!==L||Je!==F)&&(n.blendFuncSeparate(ht[me],ht[Re],ht[ve],ht[Je]),U=me,C=Re,L=ve,F=Je),(Ye.equals(E)===!1||bt!==D)&&(n.blendColor(Ye.r,Ye.g,Ye.b,bt),E.copy(Ye),D=bt),_=H,B=!1}function It(H,Ce){H.side===mr?Ee(n.CULL_FACE):de(n.CULL_FACE);let me=H.side===$n;Ce&&(me=!me),pt(me),H.blending===Oa&&H.transparent===!1?xt(vr):xt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Re=H.stencilWrite;d.setTest(Re),Re&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ln(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){j!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),j=H)}function Ot(H){H!==pw?(de(n.CULL_FACE),H!==J&&(H===R0?n.cullFace(n.BACK):H===mw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),J=H}function Qt(H){H!==ie&&(K&&n.lineWidth(H),ie=H)}function ln(H,Ce,me){H?(de(n.POLYGON_OFFSET_FILL),(z!==Ce||ee!==me)&&(z=Ce,ee=me,c.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,me))):Ee(n.POLYGON_OFFSET_FILL)}function Nt(H){H?de(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Xt(H){H===void 0&&(H=n.TEXTURE0+he-1),$!==H&&(n.activeTexture(H),$=H)}function W(H,Ce,me){me===void 0&&($===null?me=n.TEXTURE0+he-1:me=$);let Re=N[me];Re===void 0&&(Re={type:void 0,texture:void 0},N[me]=Re),(Re.type!==H||Re.texture!==Ce)&&($!==me&&(n.activeTexture(me),$=me),n.bindTexture(H,Ce||ae[H]),Re.type=H,Re.texture=Ce)}function dn(){const H=N[$];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function w(){try{n.texSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Z(){try{n.texSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function we(){try{n.texStorage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Ae(){try{n.texStorage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function pe(){try{n.texImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ge(){try{n.texImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Pe(H){return v[H]!==void 0?v[H]:n.getParameter(H)}function $e(H,Ce){v[H]!==Ce&&(n.pixelStorei(H,Ce),v[H]=Ce)}function Le(H){Ge.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ge.copy(H))}function be(H){ze.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ze.copy(H))}function Ke(H,Ce){let me=h.get(Ce);me===void 0&&(me=new WeakMap,h.set(Ce,me));let Re=me.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(Ce,H.name),me.set(H,Re))}function nt(H,Ce){const Re=h.get(Ce).get(H);f.get(Ce)!==Re&&(n.uniformBlockBinding(Ce,Re,H.__bindingPointIndex),f.set(Ce,Re))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},$=null,N={},m={},y=new WeakMap,M=[],T=null,S=!1,_=null,P=null,U=null,C=null,R=null,L=null,F=null,E=new Lt(0,0,0),D=0,B=!1,j=null,J=null,ie=null,z=null,ee=null,Ge.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:de,disable:Ee,bindFramebuffer:tt,drawBuffers:Oe,useProgram:ft,setBlending:xt,setMaterial:It,setFlipSided:pt,setCullFace:Ot,setLineWidth:Qt,setPolygonOffset:ln,setScissorTest:Nt,activeTexture:Xt,bindTexture:W,unbindTexture:dn,compressedTexImage2D:Tt,compressedTexImage3D:I,texImage2D:pe,texImage3D:ge,pixelStorei:$e,getParameter:Pe,updateUBOMapping:Ke,uniformBlockBinding:nt,texStorage2D:we,texStorage3D:Ae,texSubImage2D:w,texSubImage3D:Z,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:be,reset:ot}}function _C(n,e,t,r,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,g=new WeakMap,v=new Set;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,w){return M?new OffscreenCanvas(I,w):Jc("canvas")}function S(I,w,Z){let oe=1;const fe=Tt(I);if((fe.width>Z||fe.height>Z)&&(oe=Z/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const we=Math.floor(oe*fe.width),Ae=Math.floor(oe*fe.height);m===void 0&&(m=T(we,Ae));const pe=w?T(we,Ae):m;return pe.width=we,pe.height=Ae,pe.getContext("2d").drawImage(I,0,0,we,Ae),lt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+we+"x"+Ae+")."),pe}else return"data"in I&&lt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function _(I){return I.generateMipmaps}function P(I){n.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(I,w,Z,oe,fe,we=!1){if(I!==null){if(n[I]!==void 0)return n[I];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ae;oe&&(Ae=e.get("EXT_texture_norm16"),Ae||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(Z===n.FLOAT&&(pe=n.R32F),Z===n.HALF_FLOAT&&(pe=n.R16F),Z===n.UNSIGNED_BYTE&&(pe=n.R8),Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.R8UI),Z===n.UNSIGNED_SHORT&&(pe=n.R16UI),Z===n.UNSIGNED_INT&&(pe=n.R32UI),Z===n.BYTE&&(pe=n.R8I),Z===n.SHORT&&(pe=n.R16I),Z===n.INT&&(pe=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(pe=n.RG32F),Z===n.HALF_FLOAT&&(pe=n.RG16F),Z===n.UNSIGNED_BYTE&&(pe=n.RG8),Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RG16UI),Z===n.UNSIGNED_INT&&(pe=n.RG32UI),Z===n.BYTE&&(pe=n.RG8I),Z===n.SHORT&&(pe=n.RG16I),Z===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),Z===n.UNSIGNED_INT&&(pe=n.RGB32UI),Z===n.BYTE&&(pe=n.RGB8I),Z===n.SHORT&&(pe=n.RGB16I),Z===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(pe=n.RGBA32UI),Z===n.BYTE&&(pe=n.RGBA8I),Z===n.SHORT&&(pe=n.RGBA16I),Z===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const ge=we?Zc:St.getTransfer(fe);Z===n.FLOAT&&(pe=n.RGBA32F),Z===n.HALF_FLOAT&&(pe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(pe=ge===Ft?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),Z===n.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(I,w){let Z;return I?w===null||w===Zi||w===Wa?Z=n.DEPTH24_STENCIL8:w===ji?Z=n.DEPTH32F_STENCIL8:w===Ga&&(Z=n.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zi||w===Wa?Z=n.DEPTH_COMPONENT24:w===ji?Z=n.DEPTH_COMPONENT32F:w===Ga&&(Z=n.DEPTH_COMPONENT16),Z}function L(I,w){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==Un?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function F(I){const w=I.target;w.removeEventListener("dispose",F),D(w),w.isVideoTexture&&g.delete(w),w.isHTMLTexture&&v.delete(w)}function E(I){const w=I.target;w.removeEventListener("dispose",E),j(w)}function D(I){const w=r.get(I);if(w.__webglInit===void 0)return;const Z=I.source,oe=y.get(Z);if(oe){const fe=oe[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&B(I),Object.keys(oe).length===0&&y.delete(Z)}r.remove(I)}function B(I){const w=r.get(I);n.deleteTexture(w.__webglTexture);const Z=I.source,oe=y.get(Z);delete oe[w.__cacheKey],c.memory.textures--}function j(I){const w=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let fe=0;fe<w.__webglFramebuffer[oe].length;fe++)n.deleteFramebuffer(w.__webglFramebuffer[oe][fe]);else n.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)n.deleteFramebuffer(w.__webglFramebuffer[oe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=I.textures;for(let oe=0,fe=Z.length;oe<fe;oe++){const we=r.get(Z[oe]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),c.memory.textures--),r.remove(Z[oe])}r.remove(I)}let J=0;function ie(){J=0}function z(){return J}function ee(I){J=I}function he(){const I=J;return I>=o.maxTextures&&lt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),J+=1,I}function K(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Y(I,w){const Z=r.get(I);if(I.isVideoTexture&&W(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const oe=I.image;if(oe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Z,I,w);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function q(I,w){const Z=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Ee(Z,I,w);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function $(I,w){const Z=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Ee(Z,I,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function N(I,w){const Z=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){tt(Z,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const se={[nh]:n.REPEAT,[gr]:n.CLAMP_TO_EDGE,[ih]:n.MIRRORED_REPEAT},Se={[Tn]:n.NEAREST,[Ow]:n.NEAREST_MIPMAP_NEAREST,[uc]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[of]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},Ge={[zw]:n.NEVER,[jw]:n.ALWAYS,[Hw]:n.LESS,[dp]:n.LEQUAL,[Gw]:n.EQUAL,[fp]:n.GEQUAL,[Ww]:n.GREATER,[Xw]:n.NOTEQUAL};function ze(I,w){if(w.type===ji&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Un||w.magFilter===of||w.magFilter===uc||w.magFilter===As||w.minFilter===Un||w.minFilter===of||w.minFilter===uc||w.minFilter===As)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,se[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,se[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,se[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Se[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tn||w.minFilter!==uc&&w.minFilter!==As||w.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function We(I,w){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",F));const oe=w.source;let fe=y.get(oe);fe===void 0&&(fe={},y.set(oe,fe));const we=K(w);if(we!==I.__cacheKey){fe[we]===void 0&&(fe[we]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),fe[we].usedTimes++;const Ae=fe[I.__cacheKey];Ae!==void 0&&(fe[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(w)),I.__cacheKey=we,I.__webglTexture=fe[we].texture}return Z}function ae(I,w,Z){return Math.floor(Math.floor(I/Z)/w)}function de(I,w,Z,oe){const we=I.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Z,oe,w.data);else{we.sort(($e,Le)=>$e.start-Le.start);let Ae=0;for(let $e=1;$e<we.length;$e++){const Le=we[Ae],be=we[$e],Ke=Le.start+Le.count,nt=ae(be.start,w.width,4),ot=ae(Le.start,w.width,4);be.start<=Ke+1&&nt===ot&&ae(be.start+be.count-1,w.width,4)===nt?Le.count=Math.max(Le.count,be.start+be.count-Le.start):(++Ae,we[Ae]=be)}we.length=Ae+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let $e=0,Le=we.length;$e<Le;$e++){const be=we[$e],Ke=Math.floor(be.start/4),nt=Math.ceil(be.count/4),ot=Ke%w.width,H=Math.floor(Ke/w.width),Ce=nt,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,ot,H,Ce,me,Z,oe,w.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function Ee(I,w,Z){let oe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=n.TEXTURE_3D);const fe=We(I,w),we=w.source;t.bindTexture(oe,I.__webglTexture,n.TEXTURE0+Z);const Ae=r.get(we);if(we.version!==Ae.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const me=St.getPrimaries(St.workingColorSpace),Re=w.colorSpace===Kr?null:St.getPrimaries(w.colorSpace),Fe=w.colorSpace===Kr||me===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=S(w.image,!1,o.maxTextureSize);ge=dn(w,ge);const Pe=l.convert(w.format,w.colorSpace),$e=l.convert(w.type);let Le=C(w.internalFormat,Pe,$e,w.normalized,w.colorSpace,w.isVideoTexture);ze(oe,w);let be;const Ke=w.mipmaps,nt=w.isVideoTexture!==!0,ot=Ae.__version===void 0||fe===!0,H=we.dataReady,Ce=L(w,ge);if(w.isDepthTexture)Le=R(w.format===Cs,w.type),ot&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Le,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,Pe,$e,null));else if(w.isDataTexture)if(Ke.length>0){nt&&ot&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,Ke[0].width,Ke[0].height);for(let me=0,Re=Ke.length;me<Re;me++)be=Ke[me],nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Pe,$e,be.data):t.texImage2D(n.TEXTURE_2D,me,Le,be.width,be.height,0,Pe,$e,be.data);w.generateMipmaps=!1}else nt?(ot&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,ge.width,ge.height),H&&de(w,ge,Pe,$e)):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,Pe,$e,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Le,Ke[0].width,Ke[0].height,ge.depth);for(let me=0,Re=Ke.length;me<Re;me++)if(be=Ke[me],w.format!==Fi)if(Pe!==null)if(nt){if(H)if(w.layerUpdates.size>0){const Fe=rv(be.width,be.height,w.format,w.type);for(const ve of w.layerUpdates){const Je=be.data.subarray(ve*Fe/be.data.BYTES_PER_ELEMENT,(ve+1)*Fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,ve,be.width,be.height,1,Pe,Je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ge.depth,Pe,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Le,be.width,be.height,ge.depth,0,be.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ge.depth,Pe,$e,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Le,be.width,be.height,ge.depth,0,Pe,$e,be.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{nt&&ot&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,Ke[0].width,Ke[0].height);for(let me=0,Re=Ke.length;me<Re;me++)be=Ke[me],w.format!==Fi?Pe!==null?nt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Le,be.width,be.height,0,be.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Pe,$e,be.data):t.texImage2D(n.TEXTURE_2D,me,Le,be.width,be.height,0,Pe,$e,be.data)}else if(w.isDataArrayTexture)if(nt){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Le,ge.width,ge.height,ge.depth),H)if(w.layerUpdates.size>0){const me=rv(ge.width,ge.height,w.format,w.type);for(const Re of w.layerUpdates){const Fe=ge.data.subarray(Re*me/ge.data.BYTES_PER_ELEMENT,(Re+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,ge.width,ge.height,1,Pe,$e,Fe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,$e,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,Pe,$e,ge.data);else if(w.isData3DTexture)nt?(ot&&t.texStorage3D(n.TEXTURE_3D,Ce,Le,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,$e,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,Pe,$e,ge.data);else if(w.isFramebufferTexture){if(ot)if(nt)t.texStorage2D(n.TEXTURE_2D,Ce,Le,ge.width,ge.height);else{let me=ge.width,Re=ge.height;for(let Fe=0;Fe<Ce;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Le,me,Re,0,Pe,$e,null),me>>=1,Re>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(w),me.onpaint=Re=>{const Fe=Re.changedElements;for(const ve of v)Fe.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Fe=n.RGBA,ve=n.RGBA,Je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Fe,ve,Je,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(nt&&ot){const me=Tt(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Le,me.width,me.height)}for(let me=0,Re=Ke.length;me<Re;me++)be=Ke[me],nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Pe,$e,be):t.texImage2D(n.TEXTURE_2D,me,Le,Pe,$e,be);w.generateMipmaps=!1}else if(nt){if(ot){const me=Tt(ge);t.texStorage2D(n.TEXTURE_2D,Ce,Le,me.width,me.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,$e,ge)}else t.texImage2D(n.TEXTURE_2D,0,Le,Pe,$e,ge);_(w)&&P(oe),Ae.__version=we.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function tt(I,w,Z){if(w.image.length!==6)return;const oe=We(I,w),fe=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);const we=r.get(fe);if(fe.version!==we.__version||oe===!0){t.activeTexture(n.TEXTURE0+Z);const Ae=St.getPrimaries(St.workingColorSpace),pe=w.colorSpace===Kr?null:St.getPrimaries(w.colorSpace),ge=w.colorSpace===Kr||Ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,$e=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let ve=0;ve<6;ve++)!Pe&&!$e?Le[ve]=S(w.image[ve],!0,o.maxCubemapSize):Le[ve]=$e?w.image[ve].image:w.image[ve],Le[ve]=dn(w,Le[ve]);const be=Le[0],Ke=l.convert(w.format,w.colorSpace),nt=l.convert(w.type),ot=C(w.internalFormat,Ke,nt,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,Ce=we.__version===void 0||oe===!0,me=fe.dataReady;let Re=L(w,be);ze(n.TEXTURE_CUBE_MAP,w);let Fe;if(Pe){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ot,be.width,be.height);for(let ve=0;ve<6;ve++){Fe=Le[ve].mipmaps;for(let Je=0;Je<Fe.length;Je++){const Ye=Fe[Je];w.format!==Fi?Ke!==null?H?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,0,0,Ye.width,Ye.height,Ke,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,ot,Ye.width,Ye.height,0,Ye.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,0,0,Ye.width,Ye.height,Ke,nt,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,ot,Ye.width,Ye.height,0,Ke,nt,Ye.data)}}}else{if(Fe=w.mipmaps,H&&Ce){Fe.length>0&&Re++;const ve=Tt(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ot,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if($e){H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Le[ve].width,Le[ve].height,Ke,nt,Le[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Le[ve].width,Le[ve].height,0,Ke,nt,Le[ve].data);for(let Je=0;Je<Fe.length;Je++){const bt=Fe[Je].image[ve].image;H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,0,0,bt.width,bt.height,Ke,nt,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,ot,bt.width,bt.height,0,Ke,nt,bt.data)}}else{H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,nt,Le[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Ke,nt,Le[ve]);for(let Je=0;Je<Fe.length;Je++){const Ye=Fe[Je];H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,0,0,Ke,nt,Ye.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,ot,Ke,nt,Ye.image[ve])}}}_(w)&&P(n.TEXTURE_CUBE_MAP),we.__version=fe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Oe(I,w,Z,oe,fe,we){const Ae=l.convert(Z.format,Z.colorSpace),pe=l.convert(Z.type),ge=C(Z.internalFormat,Ae,pe,Z.normalized,Z.colorSpace),Pe=r.get(w),$e=r.get(Z);if($e.__renderTarget=w,!Pe.__hasExternalTextures){const Le=Math.max(1,w.width>>we),be=Math.max(1,w.height>>we);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,we,ge,Le,be,w.depth,0,Ae,pe,null):t.texImage2D(fe,we,ge,Le,be,0,Ae,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Xt(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,fe,$e.__webglTexture,0,Nt(w)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,fe,$e.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(I,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const oe=w.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,we=R(w.stencilBuffer,fe),Ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),we,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),we,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,we,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,I)}else{const oe=w.textures;for(let fe=0;fe<oe.length;fe++){const we=oe[fe],Ae=l.convert(we.format,we.colorSpace),pe=l.convert(we.type),ge=C(we.internalFormat,Ae,pe,we.normalized,we.colorSpace);Xt(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),ge,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(I,w,Z){const oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(w.depthTexture);if(fe.__renderTarget=w,(!fe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),fe.__webglTexture===void 0){fe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),ze(n.TEXTURE_CUBE_MAP,w.depthTexture);const Pe=l.convert(w.depthTexture.format),$e=l.convert(w.depthTexture.type);let Le;w.depthTexture.format===Sr?Le=n.DEPTH_COMPONENT24:w.depthTexture.format===Cs&&(Le=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,w.width,w.height,0,Pe,$e,null)}}else Y(w.depthTexture,0);const we=fe.__webglTexture,Ae=Nt(w),pe=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,ge=w.depthTexture.format===Cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Sr)Xt(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,we,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,we,0);else if(w.depthTexture.format===Cs)Xt(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,we,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(I){const w=r.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const oe=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=oe}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let oe=0;oe<6;oe++)Wt(w.__webglFramebuffer[oe],I,oe);else{const oe=I.texture.mipmaps;oe&&oe.length>0?Wt(w.__webglFramebuffer[0],I,0):Wt(w.__webglFramebuffer,I,0)}else if(Z){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=n.createRenderbuffer(),ft(w.__webglDepthbuffer[oe],I,!1);else{const fe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,we)}}else{const oe=I.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ft(w.__webglDepthbuffer,I,!1);else{const fe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(I,w,Z){const oe=r.get(I);w!==void 0&&Oe(oe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ht(I)}function It(I){const w=I.texture,Z=r.get(I),oe=r.get(w);I.addEventListener("dispose",E);const fe=I.textures,we=I.isWebGLCubeRenderTarget===!0,Ae=fe.length>1;if(Ae||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=w.version,c.memory.textures++),we){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)Z.__webglFramebuffer[pe][ge]=n.createFramebuffer()}else Z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let pe=0,ge=fe.length;pe<ge;pe++){const Pe=r.get(fe[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),c.memory.textures++)}if(I.samples>0&&Xt(I)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<fe.length;pe++){const ge=fe[pe];Z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const Pe=l.convert(ge.format,ge.colorSpace),$e=l.convert(ge.type),Le=C(ge.internalFormat,Pe,$e,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),be=Nt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Le,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),ze(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Oe(Z.__webglFramebuffer[pe][ge],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Oe(Z.__webglFramebuffer[pe],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(w)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ge=fe.length;pe<ge;pe++){const Pe=fe[pe],$e=r.get(Pe);let Le=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,$e.__webglTexture),ze(Le,Pe),Oe(Z.__webglFramebuffer,I,Pe,n.COLOR_ATTACHMENT0+pe,Le,0),_(Pe)&&P(Le)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),ze(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Oe(Z.__webglFramebuffer[ge],I,w,n.COLOR_ATTACHMENT0,pe,ge);else Oe(Z.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,pe,0);_(w)&&P(pe),t.unbindTexture()}I.depthBuffer&&ht(I)}function pt(I){const w=I.textures;for(let Z=0,oe=w.length;Z<oe;Z++){const fe=w[Z];if(_(fe)){const we=U(I),Ae=r.get(fe).__webglTexture;t.bindTexture(we,Ae),P(we),t.unbindTexture()}}}const Ot=[],Qt=[];function ln(I){if(I.samples>0){if(Xt(I)===!1){const w=I.textures,Z=I.width,oe=I.height;let fe=n.COLOR_BUFFER_BIT;const we=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=r.get(I),pe=w.length>1;if(pe)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ge=I.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);const $e=r.get(w[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,fe,n.NEAREST),f===!0&&(Ot.length=0,Qt.length=0,Ot.push(n.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ot.push(we),Qt.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);const $e=r.get(w[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&f){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Nt(I){return Math.min(o.maxSamples,I.samples)}function Xt(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function W(I){const w=c.render.frame;g.get(I)!==w&&(g.set(I,w),I.update())}function dn(I,w){const Z=I.colorSpace,oe=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Kc&&Z!==Kr&&(St.getTransfer(Z)===Ft?(oe!==Fi||fe!==_i)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",Z)),w}function Tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=he,this.resetTextureUnits=ie,this.getTextureUnits=z,this.setTextureUnits=ee,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=N,this.rebindTextures=xt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yC(n,e){function t(r,o=Kr){let l;const c=St.getTransfer(o);if(r===_i)return n.UNSIGNED_BYTE;if(r===op)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ap)return n.UNSIGNED_SHORT_5_5_5_1;if(r===f_)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===h_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===u_)return n.BYTE;if(r===d_)return n.SHORT;if(r===Ga)return n.UNSIGNED_SHORT;if(r===sp)return n.INT;if(r===Zi)return n.UNSIGNED_INT;if(r===ji)return n.FLOAT;if(r===Qi)return n.HALF_FLOAT;if(r===p_)return n.ALPHA;if(r===m_)return n.RGB;if(r===Fi)return n.RGBA;if(r===Sr)return n.DEPTH_COMPONENT;if(r===Cs)return n.DEPTH_STENCIL;if(r===g_)return n.RED;if(r===lp)return n.RED_INTEGER;if(r===Ns)return n.RG;if(r===cp)return n.RG_INTEGER;if(r===up)return n.RGBA_INTEGER;if(r===Vc||r===zc||r===Hc||r===Gc)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===sh||r===oh||r===ah)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh||r===dh||r===fh||r===qc||r===hh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===lh||r===ch)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===uh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===dh)return l.COMPRESSED_R11_EAC;if(r===fh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===qc)return l.COMPRESSED_RG11_EAC;if(r===hh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ph||r===mh||r===gh||r===vh||r===xh||r===_h||r===yh||r===Sh||r===Mh||r===wh||r===Eh||r===Th||r===bh||r===Ah)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ph)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Th)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bh)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ah)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ch||r===Rh||r===Ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ch)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lh||r===Dh||r===$c||r===Nh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Lh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Dh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$c)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wa?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const SC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
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

}`;class wC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new b_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new er({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ji(new fu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EC extends Us{constructor(e,t){super();const r=this;let o=null,l=1,c=null,d="local-floor",f=1,h=null,g=null,v=null,m=null,y=null,M=null;const T=typeof XRWebGLBinding<"u",S=new wC,_={},P=t.getContextAttributes();let U=null,C=null;const R=[],L=[],F=new Dt;let E=null,D=null;const B=new xi;B.viewport=new nn;const j=new xi;j.viewport=new nn;const J=[B,j],ie=new LE;let z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let de=R[ae];return de===void 0&&(de=new mf,R[ae]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ae){let de=R[ae];return de===void 0&&(de=new mf,R[ae]=de),de.getGripSpace()},this.getHand=function(ae){let de=R[ae];return de===void 0&&(de=new mf,R[ae]=de),de.getHandSpace()};function he(ae){const de=L.indexOf(ae.inputSource);if(de===-1)return;const Ee=R[de];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,h||c),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function K(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",Y);for(let ae=0;ae<R.length;ae++){const de=L[ae];de!==null&&(L[ae]=null,R[ae].disconnect(de))}z=null,ee=null,S.reset();for(const ae in _)delete _[ae];if(e.setRenderTarget(U),y=null,m=null,v=null,o=null,C=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),D!==null){const ae=D.camera;ae.fov=D.fov,ae.zoom=D.zoom,ae.updateProjectionMatrix(),D=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",K),o.addEventListener("inputsourceschange",Y),P.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,tt=null,Oe=null;P.depth&&(Oe=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=P.stencil?Cs:Sr,tt=P.stencil?Wa:Zi);const ft={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};v=this.getBinding(),m=v.createProjectionLayer(ft),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Oi(m.textureWidth,m.textureHeight,{format:Fi,type:_i,depthTexture:new Xa(m.textureWidth,m.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Oi(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(d),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ae){for(let de=0;de<ae.removed.length;de++){const Ee=ae.removed[de],tt=L.indexOf(Ee);tt>=0&&(L[tt]=null,R[tt].disconnect(Ee))}for(let de=0;de<ae.added.length;de++){const Ee=ae.added[de];let tt=L.indexOf(Ee);if(tt===-1){for(let ft=0;ft<R.length;ft++)if(ft>=L.length){L.push(Ee),tt=ft;break}else if(L[ft]===null){L[ft]=Ee,tt=ft;break}if(tt===-1)break}const Oe=R[tt];Oe&&Oe.connect(Ee)}}const q=new le,$=new le;function N(ae,de,Ee){q.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(Ee.matrixWorld);const tt=q.distanceTo($),Oe=de.projectionMatrix.elements,ft=Ee.projectionMatrix.elements,Wt=Oe[14]/(Oe[10]-1),ht=Oe[14]/(Oe[10]+1),xt=(Oe[9]+1)/Oe[5],It=(Oe[9]-1)/Oe[5],pt=(Oe[8]-1)/Oe[0],Ot=(ft[8]+1)/ft[0],Qt=Wt*pt,ln=Wt*Ot,Nt=tt/(-pt+Ot),Xt=Nt*-pt;if(de.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Xt),ae.translateZ(Nt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Oe[10]===-1)ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const W=Wt+Nt,dn=ht+Nt,Tt=Qt-Xt,I=ln+(tt-Xt),w=xt*ht/dn*W,Z=It*ht/dn*W;ae.projectionMatrix.makePerspective(Tt,I,w,Z,W,dn),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function se(ae,de){de===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(de.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let de=ae.near,Ee=ae.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),ie.near=j.near=B.near=de,ie.far=j.far=B.far=Ee,(z!==ie.near||ee!==ie.far)&&(o.updateRenderState({depthNear:ie.near,depthFar:ie.far}),z=ie.near,ee=ie.far),ie.layers.mask=ae.layers.mask|6,B.layers.mask=ie.layers.mask&-5,j.layers.mask=ie.layers.mask&-3;const tt=ae.parent,Oe=ie.cameras;se(ie,tt);for(let ft=0;ft<Oe.length;ft++)se(Oe[ft],tt);Oe.length===2?N(ie,B,j):ie.projectionMatrix.copy(B.projectionMatrix),D===null&&ae.isPerspectiveCamera&&(D={camera:ae,fov:ae.fov,zoom:ae.zoom}),Se(ae,ie,tt)};function Se(ae,de,Ee){Ee===null?ae.matrix.copy(de.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(de.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ih*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(m===null&&y===null))return f},this.setFoveation=function(ae){f=ae,m!==null&&(m.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ie)},this.getCameraTexture=function(ae){return _[ae]};let Ge=null;function ze(ae,de){if(g=de.getViewerPose(h||c),M=de,g!==null){const Ee=g.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let tt=!1;Ee.length!==ie.cameras.length&&(ie.cameras.length=0,tt=!0);for(let ht=0;ht<Ee.length;ht++){const xt=Ee[ht];let It=null;if(y!==null)It=y.getViewport(xt);else{const Ot=v.getViewSubImage(m,xt);It=Ot.viewport,ht===0&&(e.setRenderTargetTextures(C,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(C))}let pt=J[ht];pt===void 0&&(pt=new xi,pt.layers.enable(ht),pt.viewport=new nn,J[ht]=pt),pt.matrix.fromArray(xt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(xt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(It.x,It.y,It.width,It.height),ht===0&&(ie.matrix.copy(pt.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),tt===!0&&ie.cameras.push(pt)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const ht=v.getDepthInformation(Ee[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,o.renderState)}if(Oe&&Oe.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let ht=0;ht<Ee.length;ht++){const xt=Ee[ht].camera;if(xt){let It=_[xt];It||(It=new b_,_[xt]=It);const pt=v.getCameraImage(xt);It.sourceTexture=pt}}}}for(let Ee=0;Ee<R.length;Ee++){const tt=L[Ee],Oe=R[Ee];tt!==null&&Oe!==void 0&&Oe.update(tt,de,h||c)}Ge&&Ge(ae,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const We=new P_;We.setAnimationLoop(ze),this.setAnimationLoop=function(ae){Ge=ae},this.dispose=function(){}}}const TC=new an,O_=new ut;O_.set(-1,0,0,0,1,0,0,0,1);function bC(n,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,A_(n)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,P,U,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(S,_):_.isMeshLambertMaterial?(l(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(S,_),v(S,_)):_.isMeshPhongMaterial?(l(S,_),g(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(S,_),m(S,_),_.isMeshPhysicalMaterial&&y(S,_,C)):_.isMeshMatcapMaterial?(l(S,_),M(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),T(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?f(S,_,P,U):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===$n&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===$n&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=e.get(_),U=P.envMap,C=P.envMapRotation;U&&(S.envMap.value=U,S.envMapRotation.value.setFromMatrix4(TC.makeRotationFromEuler(C)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(O_),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,P,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=U*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function m(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.retroreflectivity>0&&(S.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const P=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function AC(n,e,t,r){let o={},l={},c=[];const d=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(C,R){const L=R.program;r.uniformBlockBinding(C,L)}function h(C,R){let L=o[C.id];L===void 0&&(S(C),L=g(C),o[C.id]=L,C.addEventListener("dispose",P));const F=R.program;r.updateUBOMapping(C,F);const E=e.render.frame;l[C.id]!==E&&(m(C),l[C.id]=E)}function g(C){const R=v();C.__bindingPointIndex=R;const L=n.createBuffer(),F=C.__size,E=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,F,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,L),L}function v(){for(let C=0;C<d;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const R=o[C.id],L=C.uniforms,F=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let E=0,D=L.length;E<D;E++){const B=L[E];if(Array.isArray(B))for(let j=0,J=B.length;j<J;j++)y(B[j],E,j,F);else y(B,E,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(C,R,L,F){if(T(C,R,L,F)===!0){const E=C.__offset,D=C.value;if(Array.isArray(D)){let B=0;for(let j=0;j<D.length;j++){const J=D[j],ie=_(J);M(J,C.__data,B),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(B+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(D,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,C.__data)}}function M(C,R,L){typeof C=="number"||typeof C=="boolean"?R[0]=C:C.isMatrix3?(R[0]=C.elements[0],R[1]=C.elements[1],R[2]=C.elements[2],R[3]=0,R[4]=C.elements[3],R[5]=C.elements[4],R[6]=C.elements[5],R[7]=0,R[8]=C.elements[6],R[9]=C.elements[7],R[10]=C.elements[8],R[11]=0):ArrayBuffer.isView(C)?R.set(new C.constructor(C.buffer,C.byteOffset,R.length)):C.toArray(R,L)}function T(C,R,L,F){const E=C.value,D=R+"_"+L;if(F[D]===void 0)return typeof E=="number"||typeof E=="boolean"?F[D]=E:ArrayBuffer.isView(E)?F[D]=E.slice():F[D]=E.clone(),!0;{const B=F[D];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return F[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(C){const R=C.uniforms;let L=0;const F=16;for(let D=0,B=R.length;D<B;D++){const j=Array.isArray(R[D])?R[D]:[R[D]];for(let J=0,ie=j.length;J<ie;J++){const z=j[J],ee=Array.isArray(z.value)?z.value:[z.value];for(let he=0,K=ee.length;he<K;he++){const Y=ee[he],q=_(Y),$=L%F,N=$%q.boundary,se=$+N;L+=N,se!==0&&F-se<q.storage&&(L+=F-se),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=L,L+=q.storage}}}const E=L%F;return E>0&&(L+=F-E),C.__size=L,C.__cache={},this}function _(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(R.boundary=16,R.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),R}function P(C){const R=C.target;R.removeEventListener("dispose",P);const L=c.indexOf(R.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function U(){for(const C in o)n.deleteBuffer(o[C]);c=[],o={},l={}}return{bind:f,update:h,dispose:U}}const CC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function RC(){return Wi===null&&(Wi=new yE(CC,16,16,Ns,Qi),Wi.name="DFG_LUT",Wi.minFilter=Un,Wi.magFilter=Un,Wi.wrapS=gr,Wi.wrapT=gr,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class PC{constructor(e={}){const{canvas:t=$w(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=_i}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const T=y,S=new Set([up,cp,lp]),_=new Set([_i,Zi,Ga,Wa,op,ap]),P=new Uint32Array(4),U=new Int32Array(4),C=new le;let R=null,L=null;const F=[],E=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let j=!1,J=null,ie=null,z=null,ee=null;this._outputColorSpace=vi;let he=0,K=0,Y=null,q=-1,$=null;const N=new nn,se=new nn;let Se=null;const Ge=new Lt(0);let ze=0,We=t.width,ae=t.height,de=1,Ee=null,tt=null;const Oe=new nn(0,0,We,ae),ft=new nn(0,0,We,ae);let Wt=!1;const ht=new E_;let xt=!1,It=!1;const pt=new an,Ot=new le,Qt=new nn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Xt(){return Y===null?de:1}let W=r;function dn(A,G){return t.getContext(A,G)}let Tt,I,w,Z,oe,fe,we,Ae,pe,ge,Pe,$e,Le,be,Ke,nt,ot,H,Ce,me,Re,Fe,ve;try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rp}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),W===null){const G="webgl2";if(W=dn(G,A),W===null)throw dn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(A){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Rt("WebGLRenderer: "+A.message),A}function Je(){Tt=new Rb(W),Tt.init(),Re=new yC(W,Tt),I=new _b(W,Tt,e,Re),w=new xC(W,Tt),I.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),ie=W.createFramebuffer(),z=W.createFramebuffer(),ee=W.createFramebuffer(),Z=new Db(W),oe=new rC,fe=new _C(W,Tt,w,oe,I,Re,Z),we=new Cb(B),Ae=new IE(W),Fe=new vb(W,Ae),pe=new Pb(W,Ae,Z,Fe),ge=new Ib(W,pe,Ae,Fe,Z),H=new Nb(W,I,fe),Ke=new yb(oe),Pe=new iC(B,we,Tt,I,Fe,Ke),$e=new bC(B,oe),Le=new oC,be=new fC(Tt),ot=new gb(B,we,w,ge,M,f),nt=new vC(B,ge,I),ve=new AC(W,Z,I,w),Ce=new xb(W,Tt,Z),me=new Lb(W,Tt,Z),Z.programs=Pe.programs,B.capabilities=I,B.extensions=Tt,B.properties=oe,B.renderLists=Le,B.shadowMap=nt,B.state=w,B.info=Z}T!==_i&&(D=new Fb(T,t.width,t.height,d,o,l));const Ye=new EC(B,W);this.xr=Ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(We,ae,!1))},this.getSize=function(A){return A.set(We,ae)},this.setSize=function(A,G,ce=!0){if(Ye.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}We=A,ae=G,t.width=Math.floor(A*de),t.height=Math.floor(G*de),ce===!0&&(t.style.width=A+"px",t.style.height=G+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(We*de,ae*de).floor()},this.setDrawingBufferSize=function(A,G,ce){We=A,ae=G,de=ce,t.width=Math.floor(A*ce),t.height=Math.floor(G*ce),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(T===_i){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,G,ce,te){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,G,ce,te),w.viewport(N.copy(Oe).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,G,ce,te){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,G,ce,te),w.scissor(se.copy(ft).multiplyScalar(de).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(A){w.setScissorTest(Wt=A)},this.setOpaqueSort=function(A){Ee=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,ce=!0){let te=0;if(A){let Q=!1;if(Y!==null){const Ie=Y.texture.format;Q=S.has(Ie)}if(Q){const Ie=Y.texture.type,De=_.has(Ie),Ne=ot.getClearColor(),Xe=ot.getClearAlpha(),Ze=Ne.r,ct=Ne.g,dt=Ne.b;De?(P[0]=Ze,P[1]=ct,P[2]=dt,P[3]=Xe,W.clearBufferuiv(W.COLOR,0,P)):(U[0]=Ze,U[1]=ct,U[2]=dt,U[3]=Xe,W.clearBufferiv(W.COLOR,0,U))}else te|=W.COLOR_BUFFER_BIT}G&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),ot.dispose(),Le.dispose(),be.dispose(),oe.dispose(),we.dispose(),ge.dispose(),Fe.dispose(),ve.dispose(),Pe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",ol),Ye.removeEventListener("sessionend",al),On.stop()};function bt(A){A.preventDefault(),F0("WebGLRenderer: Context Lost."),j=!0}function wt(){F0("WebGLRenderer: Context Restored."),j=!1;const A=Z.autoReset,G=nt.enabled,ce=nt.autoUpdate,te=nt.needsUpdate,Q=nt.type;Je(),Z.autoReset=A,nt.enabled=G,nt.autoUpdate=ce,nt.needsUpdate=te,nt.type=Q}function Sn(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oi(A){const G=A.target;G.removeEventListener("dispose",oi),ns(G)}function ns(A){Os(A),oe.remove(A)}function Os(A){const G=oe.get(A).programs;G!==void 0&&(G.forEach(function(ce){Pe.releaseProgram(ce)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ce,te,Q,Ie){G===null&&(G=ln);const De=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ne=qt(A,G,ce,te,Q);w.setMaterial(te,De);let Xe=ce.index,Ze=1;if(te.wireframe===!0){if(Xe=pe.getWireframeAttribute(ce),Xe===void 0)return;Ze=2}const ct=ce.drawRange,dt=ce.attributes.position;let Ve=ct.start*Ze,_t=(ct.start+ct.count)*Ze;Ie!==null&&(Ve=Math.max(Ve,Ie.start*Ze),_t=Math.min(_t,(Ie.start+Ie.count)*Ze)),Xe!==null?(Ve=Math.max(Ve,0),_t=Math.min(_t,Xe.count)):dt!=null&&(Ve=Math.max(Ve,0),_t=Math.min(_t,dt.count));const Jt=_t-Ve;if(Jt<0||Jt===1/0)return;Fe.setup(Q,te,Ne,ce,Xe);let kt,Pt=Ce;if(Xe!==null&&(kt=Ae.get(Xe),Pt=me,Pt.setIndex(kt)),Q.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*Xt()),Pt.setMode(W.LINES)):Pt.setMode(W.TRIANGLES);else if(Q.isLine){let fn=te.linewidth;fn===void 0&&(fn=1),w.setLineWidth(fn*Xt()),Q.isLineSegments?Pt.setMode(W.LINES):Q.isLineLoop?Pt.setMode(W.LINE_LOOP):Pt.setMode(W.LINE_STRIP)}else Q.isPoints?Pt.setMode(W.POINTS):Q.isSprite&&Pt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const fn=Q._multiDrawStarts,ke=Q._multiDrawCounts,rn=Q._multiDrawCount,yt=Xe?Ae.get(Xe).bytesPerElement:1,An=oe.get(te).currentProgram.getUniforms();for(let mt=0;mt<rn;mt++)An.setValue(W,"_gl_DrawID",mt),Pt.render(fn[mt]/yt,ke[mt])}else if(Q.isInstancedMesh)Pt.renderInstances(Ve,Jt,Q.count);else if(ce.isInstancedBufferGeometry){const fn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ke=Math.min(ce.instanceCount,fn);Pt.renderInstances(Ve,Jt,ke)}else Pt.render(Ve,Jt)};function is(A,G,ce,te){J!==null&&A.isNodeMaterial&&J.setObject(te,A),xt===!0&&Ke.setState(A,ce,!1),A.transparent===!0&&A.side===mr&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,os(A,G,te),A.side=Ls,A.needsUpdate=!0,os(A,G,te),A.side=mr):os(A,G,te)}this.compile=function(A,G,ce=null){ce===null&&(ce=A),J!==null&&J.renderStart(A,G,ce),L=be.get(ce),L.init(G),E.push(L),ce.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),A!==ce&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),L.setupLights(),J!==null&&J.updateLights(L.state.lightsArray),It=this.localClippingEnabled,xt=Ke.init(this.clippingPlanes,It),xt===!0&&Ke.setGlobalState(this.clippingPlanes,G),J!==null&&nt.render(L.state.shadowsArray,ce,G);const te=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let De=0;De<Ie.length;De++){const Ne=Ie[De];is(Ne,ce,G,Q),te.add(Ne)}else is(Ie,ce,G,Q),te.add(Ie)}),L=E.pop(),J!==null&&J.renderEnd(),te},this.compileAsync=function(A,G,ce=null){const te=this.compile(A,G,ce);return new Promise(Q=>{function Ie(){if(te.forEach(function(De){const Xe=oe.get(De).currentProgram;(Xe===void 0||Xe.isReady())&&te.delete(De)}),te.size===0){Q(A);return}setTimeout(Ie,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let rs=null;function Su(A){rs&&rs(A)}function ol(){On.stop()}function al(){On.start()}const On=new P_;On.setAnimationLoop(Su),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){rs=A,Ye.setAnimationLoop(A),A===null?On.stop():On.start()},Ye.addEventListener("sessionstart",ol),Ye.addEventListener("sessionend",al),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;J!==null&&J.renderStart(A,G);const ce=Ye.enabled===!0&&Ye.isPresenting===!0,te=D!==null&&(Y===null||ce)&&D.begin(B,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(G),G=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,G,Y),L=be.get(A,E.length),L.init(G),L.state.textureUnits=fe.getTextureUnits(),E.push(L),pt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ht.setFromProjectionMatrix(pt,Yi,G.reversedDepth),It=this.localClippingEnabled,xt=Ke.init(this.clippingPlanes,It),R=Le.get(A,F.length),R.init(),F.push(R),Ye.enabled===!0&&Ye.isPresenting===!0){const De=B.xr.getDepthSensingMesh();De!==null&&ks(De,G,-1/0,B.sortObjects)}ks(A,G,0,B.sortObjects),R.finish(),J!==null&&J.updateLights(L.state.lightsArray),B.sortObjects===!0&&R.sort(Ee,tt),Nt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Nt&&ot.addToRenderList(R,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Ke.beginShadows();const Q=L.state.shadowsArray;if(nt.render(Q,A,G),xt===!0&&Ke.endShadows(),(te&&D.hasRenderPass())===!1){const De=R.opaque,Ne=R.transmissive;if(L.setupLights(),G.isArrayCamera){const Xe=G.cameras;if(Ne.length>0)for(let Ze=0,ct=Xe.length;Ze<ct;Ze++){const dt=Xe[Ze];ll(De,Ne,A,dt)}Nt&&ot.render(A);for(let Ze=0,ct=Xe.length;Ze<ct;Ze++){const dt=Xe[Ze];Vo(R,A,dt,dt.viewport)}}else Ne.length>0&&ll(De,Ne,A,G),Nt&&ot.render(A),Vo(R,A,G)}Y!==null&&K===0&&(fe.updateMultisampleRenderTarget(Y),fe.updateRenderTargetMipmap(Y)),te&&D.end(B),A.isScene===!0&&A.onAfterRender(B,A,G),Fe.resetDefaultState(),q=-1,$=null,E.pop(),E.length>0?(L=E[E.length-1],fe.setTextureUnits(L.state.textureUnits),xt===!0&&Ke.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?R=F[F.length-1]:R=null,J!==null&&J.renderEnd()};function ks(A,G,ce,te){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ht)){te&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const De=ge.update(A),Ne=A.material;Ne.visible&&R.push(A,De,Ne,ce,Qt.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ht))){const De=ge.update(A),Ne=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Qt.copy(De.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(Ne)){const Xe=De.groups;for(let Ze=0,ct=Xe.length;Ze<ct;Ze++){const dt=Xe[Ze],Ve=Ne[dt.materialIndex];Ve&&Ve.visible&&R.push(A,De,Ve,ce,Qt.z,dt,G)}}else Ne.visible&&R.push(A,De,Ne,ce,Qt.z,null,G)}}const Ie=A.children;for(let De=0,Ne=Ie.length;De<Ne;De++)ks(Ie[De],G,ce,te)}function Vo(A,G,ce,te){const{opaque:Q,transmissive:Ie,transparent:De}=A;L.setupLightsView(ce),xt===!0&&Ke.setGlobalState(B.clippingPlanes,ce),te&&w.viewport(N.copy(te)),Q.length>0&&ss(Q,G,ce),Ie.length>0&&ss(Ie,G,ce),De.length>0&&ss(De,G,ce),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function ll(A,G,ce,te){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const Ve=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new Oi(1,1,{generateMipmaps:!0,type:Ve?Qi:_i,minFilter:As,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[te.id],De=te.viewport||N;Ie.setSize(De.z*B.transmissionResolutionScale,De.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),Xe=B.getActiveCubeFace(),Ze=B.getActiveMipmapLevel();B.setRenderTarget(Ie),B.getClearColor(Ge),ze=B.getClearAlpha(),ze<1&&B.setClearColor(16777215,.5),B.clear(),Nt&&ot.render(ce);const ct=B.toneMapping;B.toneMapping=qi;const dt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),xt===!0&&Ke.setGlobalState(B.clippingPlanes,te),ss(A,ce,te),fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let _t=0,Jt=G.length;_t<Jt;_t++){const kt=G[_t],{object:Pt,geometry:fn,material:ke,group:rn}=kt;if(ke.side===mr&&Pt.layers.test(te.layers)){const yt=ke.side;ke.side=$n,ke.needsUpdate=!0,zo(Pt,ce,te,fn,ke,rn),ke.side=yt,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie))}B.setRenderTarget(Ne,Xe,Ze),B.setClearColor(Ge,ze),dt!==void 0&&(te.viewport=dt),B.toneMapping=ct}function ss(A,G,ce){const te=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Ie=A.length;Q<Ie;Q++){const De=A[Q],{object:Ne,geometry:Xe,group:Ze}=De;let ct=De.material;ct.allowOverride===!0&&te!==null&&(ct=te),Ne.layers.test(ce.layers)&&zo(Ne,G,ce,Xe,ct,Ze)}}function zo(A,G,ce,te,Q,Ie){J!==null&&Q.isNodeMaterial&&J.setObject(A,Q),A.onBeforeRender(B,G,ce,te,Q,Ie),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(B,G,ce,te,A,Ie),Q.transparent===!0&&Q.side===mr&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,B.renderBufferDirect(ce,G,te,Q,A,Ie),Q.side=Ls,Q.needsUpdate=!0,B.renderBufferDirect(ce,G,te,Q,A,Ie),Q.side=mr):B.renderBufferDirect(ce,G,te,Q,A,Ie),A.onAfterRender(B,G,ce,te,Q,Ie)}function os(A,G,ce){G.isScene!==!0&&(G=ln);const te=oe.get(A),Q=L.state.lights,Ie=L.state.shadowsArray,De=Q.state.version,Ne=Pe.getParameters(A,Q.state,Ie,G,ce,L.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ne);let Ze=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,te.fog=G.fog;const ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=we.get(A.envMap||te.environment,ct),te.envMapRotation=te.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",oi),Ze=new Map,te.programs=Ze);let dt=Ze.get(Xe);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===De)return cl(A,Ne),dt}else Ne.uniforms=Pe.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,ce,Ne),A.onBeforeCompile(Ne,B),dt=Pe.acquireProgram(Ne,Xe),Ze.set(Xe,dt),te.uniforms=Ne.uniforms;const Ve=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Ke.uniform),cl(A,Ne),te.needsLights=Go(A),te.lightsStateVersion=De,te.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.sunLights.value=Q.state.sun,Ve.sunLightShadows.value=Q.state.sunShadow,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ve.sunShadowCascade.value=Q.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=dt,te.uniformsList=null,dt}function Ho(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function cl(A,G){const ce=oe.get(A);ce.outputColorSpace=G.outputColorSpace,ce.batching=G.batching,ce.batchingColor=G.batchingColor,ce.instancing=G.instancing,ce.instancingColor=G.instancingColor,ce.instancingMorph=G.instancingMorph,ce.skinning=G.skinning,ce.morphTargets=G.morphTargets,ce.morphNormals=G.morphNormals,ce.morphColors=G.morphColors,ce.morphTargetsCount=G.morphTargetsCount,ce.numClippingPlanes=G.numClippingPlanes,ce.numIntersection=G.numClipIntersection,ce.vertexAlphas=G.vertexAlphas,ce.vertexTangents=G.vertexTangents,ce.toneMapping=G.toneMapping}function Mu(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let ce=0,te=A.length;ce<te;ce++){const Q=A[ce];if(Q.texture!==null&&Q.boundingBox.containsPoint(C))return Q}return null}function qt(A,G,ce,te,Q){G.isScene!==!0&&(G=ln),fe.resetTextureUnits();const Ie=G.fog,De=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?G.environment:null,Ne=Y===null?B.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:St.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=we.get(te.envMap||De,Xe),ct=te.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color;let kt=qi;te.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(kt=B.toneMapping);const Pt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,fn=Pt!==void 0?Pt.length:0,ke=oe.get(te),rn=L.state.lights;if(xt===!0&&(It===!0||A!==$)){const Ut=A===$&&te.id===q;Ke.setState(te,A,Ut)}let yt=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==rn.state.version||ke.outputColorSpace!==Ne||Q.isBatchedMesh&&ke.batching===!1||!Q.isBatchedMesh&&ke.batching===!0||Q.isBatchedMesh&&ke.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&ke.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&ke.instancing===!1||!Q.isInstancedMesh&&ke.instancing===!0||Q.isSkinnedMesh&&ke.skinning===!1||!Q.isSkinnedMesh&&ke.skinning===!0||Q.isInstancedMesh&&ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ke.instancingMorph===!1&&Q.morphTexture!==null||ke.envMap!==Ze||te.fog===!0&&ke.fog!==Ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ke.numPlanes||ke.numIntersection!==Ke.numIntersection)||ke.vertexAlphas!==ct||ke.vertexTangents!==dt||ke.morphTargets!==Ve||ke.morphNormals!==_t||ke.morphColors!==Jt||ke.toneMapping!==kt||ke.morphTargetsCount!==fn||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,ke.__version=te.version);let An=ke.currentProgram;yt===!0&&(An=os(te,G,Q),J&&te.isNodeMaterial&&J.onUpdateProgram(te,An,ke));let mt=!1,Si=!1,tr=!1;const At=An.getUniforms(),jt=ke.uniforms;if(w.useProgram(An.program)&&(mt=!0,Si=!0,tr=!0),te.id!==q&&(q=te.id,Si=!0),ke.needsLights){const Ut=Mu(L.state.lightProbeGridArray,Q);ke.lightProbeGrid!==Ut&&(ke.lightProbeGrid=Ut,Si=!0)}if(mt||$!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(W,"projectionMatrix",A.projectionMatrix),At.setValue(W,"viewMatrix",A.matrixWorldInverse);const ai=At.map.cameraPosition;ai!==void 0&&ai.setValue(W,Ot.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&At.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,Si=!0,tr=!0)}if(ke.needsLights&&(rn.state.sunShadowMap.length>0&&At.setValue(W,"sunShadowMap",rn.state.sunShadowMap,fe),rn.state.directionalShadowMap.length>0&&At.setValue(W,"directionalShadowMap",rn.state.directionalShadowMap,fe),rn.state.spotShadowMap.length>0&&At.setValue(W,"spotShadowMap",rn.state.spotShadowMap,fe),rn.state.pointShadowMap.length>0&&At.setValue(W,"pointShadowMap",rn.state.pointShadowMap,fe)),Q.isSkinnedMesh){At.setOptional(W,Q,"bindMatrix"),At.setOptional(W,Q,"bindMatrixInverse");const Ut=Q.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),At.setValue(W,"boneTexture",Ut.boneTexture,fe))}Q.isBatchedMesh&&(At.setOptional(W,Q,"batchingTexture"),At.setValue(W,"batchingTexture",Q._matricesTexture,fe),At.setOptional(W,Q,"batchingIdTexture"),At.setValue(W,"batchingIdTexture",Q._indirectTexture,fe),At.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&At.setValue(W,"batchingColorTexture",Q._colorsTexture,fe));const Mi=ce.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&H.update(Q,ce,An),(Si||ke.receiveShadow!==Q.receiveShadow)&&(ke.receiveShadow=Q.receiveShadow,At.setValue(W,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&G.environment!==null&&(jt.envMapIntensity.value=G.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=RC()),Si){if(At.setValue(W,"toneMappingExposure",B.toneMappingExposure),ke.needsLights&&wu(jt,tr),Ie&&te.fog===!0&&$e.refreshFogUniforms(jt,Ie),$e.refreshMaterialUniforms(jt,te,de,ae,L.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Ut=ke.lightProbeGrid;jt.probesSH.value=Ut.texture,jt.probesMin.value.copy(Ut.boundingBox.min),jt.probesMax.value.copy(Ut.boundingBox.max),jt.probesResolution.value.copy(Ut.resolution)}Wc.upload(W,Ho(ke),jt,fe)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Wc.upload(W,Ho(ke),jt,fe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(W,"center",Q.center),At.setValue(W,"modelViewMatrix",Q.modelViewMatrix),At.setValue(W,"normalMatrix",Q.normalMatrix),At.setValue(W,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const Ut=te.uniformsGroups;for(let ai=0,wi=Ut.length;ai<wi;ai++){const Ei=Ut[ai];ve.update(Ei,An),ve.bind(Ei,An)}}return An}function wu(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Go(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,G,ce){const te=oe.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=G,oe.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ce,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const ce=oe.get(A);ce.__webglFramebuffer=G,ce.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,ce=0){Y=A,he=G,K=ce;let te=null,Q=!1,Ie=!1;if(A){const Ne=oe.get(A);if(Ne.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(W.FRAMEBUFFER,Ne.__webglFramebuffer),N.copy(A.viewport),se.copy(A.scissor),Se=A.scissorTest,w.viewport(N),w.scissor(se),w.setScissorTest(Se),q=-1;return}else if(Ne.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Ne.__hasExternalTextures)fe.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ct=A.depthTexture;if(Ne.__boundDepthTexture!==ct){if(ct!==null&&oe.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Ze=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?te=Ze[G][ce]:te=Ze[G],Q=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?te=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[ce]:te=Ze,N.copy(A.viewport),se.copy(A.scissor),Se=A.scissorTest}else N.copy(Oe).multiplyScalar(de).floor(),se.copy(ft).multiplyScalar(de).floor(),Se=Wt;if(ce!==0&&(te=ie),w.bindFramebuffer(W.FRAMEBUFFER,te)&&w.drawBuffers(A,te),w.viewport(N),w.scissor(se),w.setScissorTest(Se),Q){const Ne=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,ce)}else if(Ie){const Ne=G;for(let Xe=0;Xe<A.textures.length;Xe++){const Ze=oe.get(A.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,ce,Ne)}}else if(A!==null&&ce!==0){const Ne=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ne.__webglTexture,ce)}q=-1};function Wo(A){const G=oe.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=I.textureFormatReadable(A.format),G.__typeReadable=I.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,ce,te,Q,Ie,De,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe){w.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const Ze=A.textures[Ne],ct=Ze.format,dt=Ze.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne);const Ve=Wo(Ze);if(Ve.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-te&&ce>=0&&ce<=A.height-Q&&W.readPixels(G,ce,te,Q,Re.convert(ct),Re.convert(dt),Ie)}finally{const Ze=Y!==null?oe.get(Y).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,G,ce,te,Q,Ie,De,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe)if(G>=0&&G<=A.width-te&&ce>=0&&ce<=A.height-Q){w.bindFramebuffer(W.FRAMEBUFFER,Xe);const Ze=A.textures[Ne],ct=Ze.format,dt=Ze.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne);const Ve=Wo(Ze);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,_t),W.bufferData(W.PIXEL_PACK_BUFFER,Ie.byteLength,W.STREAM_READ),W.readPixels(G,ce,te,Q,Re.convert(ct),Re.convert(dt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Jt=Y!==null?oe.get(Y).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,Jt);const kt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Kw(W,kt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,_t),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ie),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(_t),W.deleteSync(kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,ce=0){const te=Math.pow(2,-ce),Q=Math.floor(A.image.width*te),Ie=Math.floor(A.image.height*te),De=G!==null?G.x:0,Ne=G!==null?G.y:0;fe.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,De,Ne,Q,Ie),w.unbindTexture()},this.copyTextureToTexture=function(A,G,ce=null,te=null,Q=0,Ie=0){let De,Ne,Xe,Ze,ct,dt,Ve,_t,Jt;const kt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(ce!==null)De=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,ct=ce.min.y,dt=ce.isBox3?ce.min.z:0;else{const jt=Math.pow(2,-Q);De=Math.floor(kt.width*jt),Ne=Math.floor(kt.height*jt),A.isDataArrayTexture?Xe=kt.depth:A.isData3DTexture?Xe=Math.floor(kt.depth*jt):Xe=1,Ze=0,ct=0,dt=0}te!==null?(Ve=te.x,_t=te.y,Jt=te.z):(Ve=0,_t=0,Jt=0);const Pt=Re.convert(G.format),fn=Re.convert(G.type);let ke;G.isData3DTexture?(fe.setTexture3D(G,0),ke=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(fe.setTexture2DArray(G,0),ke=W.TEXTURE_2D_ARRAY):(fe.setTexture2D(G,0),ke=W.TEXTURE_2D),w.activeTexture(W.TEXTURE0),w.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const rn=w.getParameter(W.UNPACK_ROW_LENGTH),yt=w.getParameter(W.UNPACK_IMAGE_HEIGHT),An=w.getParameter(W.UNPACK_SKIP_PIXELS),mt=w.getParameter(W.UNPACK_SKIP_ROWS),Si=w.getParameter(W.UNPACK_SKIP_IMAGES);w.pixelStorei(W.UNPACK_ROW_LENGTH,kt.width),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,kt.height),w.pixelStorei(W.UNPACK_SKIP_PIXELS,Ze),w.pixelStorei(W.UNPACK_SKIP_ROWS,ct),w.pixelStorei(W.UNPACK_SKIP_IMAGES,dt);const tr=A.isDataArrayTexture||A.isData3DTexture,At=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const jt=oe.get(A),Mi=oe.get(G),Ut=oe.get(jt.__renderTarget),ai=oe.get(Mi.__renderTarget);w.bindFramebuffer(W.READ_FRAMEBUFFER,Ut.__webglFramebuffer),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let wi=0;wi<Xe;wi++)tr&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,Q,dt+wi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(G).__webglTexture,Ie,Jt+wi)),W.blitFramebuffer(Ze,ct,De,Ne,Ve,_t,De,Ne,W.DEPTH_BUFFER_BIT,W.NEAREST);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||oe.has(A)){const jt=oe.get(A),Mi=oe.get(G);w.bindFramebuffer(W.READ_FRAMEBUFFER,z),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,ee);for(let Ut=0;Ut<Xe;Ut++)tr?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jt.__webglTexture,Q,dt+Ut):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jt.__webglTexture,Q),At?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Mi.__webglTexture,Ie,Jt+Ut):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Mi.__webglTexture,Ie),Q!==0?W.blitFramebuffer(Ze,ct,De,Ne,Ve,_t,De,Ne,W.COLOR_BUFFER_BIT,W.NEAREST):At?W.copyTexSubImage3D(ke,Ie,Ve,_t,Jt+Ut,Ze,ct,De,Ne):W.copyTexSubImage2D(ke,Ie,Ve,_t,Ze,ct,De,Ne);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(ke,Ie,Ve,_t,Jt,De,Ne,Xe,Pt,fn,kt.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(ke,Ie,Ve,_t,Jt,De,Ne,Xe,Pt,kt.data):W.texSubImage3D(ke,Ie,Ve,_t,Jt,De,Ne,Xe,Pt,fn,kt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ie,Ve,_t,De,Ne,Pt,fn,kt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ie,Ve,_t,kt.width,kt.height,Pt,kt.data):W.texSubImage2D(W.TEXTURE_2D,Ie,Ve,_t,De,Ne,Pt,fn,kt);w.pixelStorei(W.UNPACK_ROW_LENGTH,rn),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt),w.pixelStorei(W.UNPACK_SKIP_PIXELS,An),w.pixelStorei(W.UNPACK_SKIP_ROWS,mt),w.pixelStorei(W.UNPACK_SKIP_IMAGES,Si),Ie===0&&G.generateMipmaps&&W.generateMipmap(ke),w.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){he=0,K=0,Y=null,w.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const gp=ye.createContext({});function vp(n){const e=ye.useRef(null);return e.current===null&&(e.current=n()),e.current}const mu=ye.createContext(null),xp=ye.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class LC extends ye.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function DC({children:n,isPresent:e}){const t=ye.useId(),r=ye.useRef(null),o=ye.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=ye.useContext(xp);return ye.useInsertionEffect(()=>{const{width:c,height:d,top:f,left:h}=o.current;if(e||!r.current||!c||!d)return;r.current.dataset.motionPopId=t;const g=document.createElement("style");return l&&(g.nonce=l),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[e]),O.jsx(LC,{isPresent:e,childRef:r,sizeRef:o,children:ye.cloneElement(n,{ref:r})})}const NC=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:c})=>{const d=vp(IC),f=ye.useId(),h=ye.useCallback(v=>{d.set(v,!0);for(const m of d.values())if(!m)return;r&&r()},[d,r]),g=ye.useMemo(()=>({id:f,initial:e,isPresent:t,custom:o,onExitComplete:h,register:v=>(d.set(v,!1),()=>d.delete(v))}),l?[Math.random(),h]:[t,h]);return ye.useMemo(()=>{d.forEach((v,m)=>d.set(m,!1))},[t]),ye.useEffect(()=>{!t&&!d.size&&r&&r()},[t]),c==="popLayout"&&(n=O.jsx(DC,{isPresent:t,children:n})),O.jsx(mu.Provider,{value:g,children:n})};function IC(){return new Map}function k_(n=!0){const e=ye.useContext(mu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=ye.useId();ye.useEffect(()=>{n&&o(l)},[n]);const c=ye.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,c]:[!0]}const Uc=n=>n.key||"";function Av(n){const e=[];return ye.Children.forEach(n,t=>{ye.isValidElement(t)&&e.push(t)}),e}const _p=typeof window<"u",B_=_p?ye.useLayoutEffect:ye.useEffect,UC=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:c=!1})=>{const[d,f]=k_(c),h=ye.useMemo(()=>Av(n),[n]),g=c&&!d?[]:h.map(Uc),v=ye.useRef(!0),m=ye.useRef(h),y=vp(()=>new Map),[M,T]=ye.useState(h),[S,_]=ye.useState(h);B_(()=>{v.current=!1,m.current=h;for(let C=0;C<S.length;C++){const R=Uc(S[C]);g.includes(R)?y.delete(R):y.get(R)!==!0&&y.set(R,!1)}},[S,g.length,g.join("-")]);const P=[];if(h!==M){let C=[...h];for(let R=0;R<S.length;R++){const L=S[R],F=Uc(L);g.includes(F)||(C.splice(R,0,L),P.push(L))}l==="wait"&&P.length&&(C=P),_(Av(C)),T(h);return}const{forceRender:U}=ye.useContext(gp);return O.jsx(O.Fragment,{children:S.map(C=>{const R=Uc(C),L=c&&!d?!1:h===S||g.includes(R),F=()=>{if(y.has(R))y.set(R,!0);else return;let E=!0;y.forEach(D=>{D||(E=!1)}),E&&(U==null||U(),_(m.current),c&&(f==null||f()),r&&r())};return O.jsx(NC,{isPresent:L,initial:!v.current||t?void 0:!1,custom:L?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:L?void 0:F,children:C},R)})})},ii=n=>n;let V_=ii;function yp(n){let e;return()=>(e===void 0&&(e=n()),e)}const No=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},_r=n=>n*1e3,yr=n=>n/1e3,FC={useManualTiming:!1};function OC(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(h){l.has(h)&&(f.schedule(h),n()),h(c)}const f={schedule:(h,g=!1,v=!1)=>{const y=v&&r?e:t;return g&&l.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(d),e.clear(),r=!1,o&&(o=!1,f.process(h))}};return f}const Fc=["read","resolveKeyframes","update","preRender","render","postRender"],kC=40;function z_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,c=Fc.reduce((_,P)=>(_[P]=OC(l),_),{}),{read:d,resolveKeyframes:f,update:h,preRender:g,render:v,postRender:m}=c,y=()=>{const _=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(_-o.timestamp,kC),1),o.timestamp=_,o.isProcessing=!0,d.process(o),f.process(o),h.process(o),g.process(o),v.process(o),m.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:Fc.reduce((_,P)=>{const U=c[P];return _[P]=(C,R=!1,L=!1)=>(t||M(),U.schedule(C,R,L)),_},{}),cancel:_=>{for(let P=0;P<Fc.length;P++)c[Fc[P]].cancel(_)},state:o,steps:c}}const{schedule:Gt,cancel:Jr,state:En,steps:Ff}=z_(typeof requestAnimationFrame<"u"?requestAnimationFrame:ii,!0),H_=ye.createContext({strict:!1}),Cv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Io={};for(const n in Cv)Io[n]={isEnabled:e=>Cv[n].some(t=>!!e[t])};function BC(n){for(const e in n)Io[e]={...Io[e],...n[e]}}const VC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function eu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||VC.has(n)}let G_=n=>!eu(n);function zC(n){n&&(G_=e=>e.startsWith("on")?!eu(e):n(e))}try{zC(require("@emotion/is-prop-valid").default)}catch{}function HC(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(G_(o)||t===!0&&eu(o)||!e&&!eu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function GC(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const gu=ye.createContext({});function ja(n){return typeof n=="string"||Array.isArray(n)}function vu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Sp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Mp=["initial",...Sp];function xu(n){return vu(n.animate)||Mp.some(e=>ja(n[e]))}function W_(n){return!!(xu(n)||n.variants)}function WC(n,e){if(xu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||ja(t)?t:void 0,animate:ja(r)?r:void 0}}return n.inherit!==!1?e:{}}function XC(n){const{initial:e,animate:t}=WC(n,ye.useContext(gu));return ye.useMemo(()=>({initial:e,animate:t}),[Rv(e),Rv(t)])}function Rv(n){return Array.isArray(n)?n.join(" "):n}const jC=Symbol.for("motionComponentSymbol");function Eo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function YC(n,e,t){return ye.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Eo(t)&&(t.current=r))},[e])}const wp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),qC="framerAppearId",X_="data-"+wp(qC),{schedule:Ep}=z_(queueMicrotask,!1),j_=ye.createContext({});function $C(n,e,t,r,o){var l,c;const{visualElement:d}=ye.useContext(gu),f=ye.useContext(H_),h=ye.useContext(mu),g=ye.useContext(xp).reducedMotion,v=ye.useRef(null);r=r||f.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:d,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g}));const m=v.current,y=ye.useContext(j_);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&KC(v.current,t,o,y);const M=ye.useRef(!1);ye.useInsertionEffect(()=>{m&&M.current&&m.update(t,h)});const T=t[X_],S=ye.useRef(!!T&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,T))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,T)));return B_(()=>{m&&(M.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),Ep.render(m.render),S.current&&m.animationState&&m.animationState.animateChanges())}),ye.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window,T)}),S.current=!1))}),m}function KC(n,e,t,r){const{layoutId:o,layout:l,drag:c,dragConstraints:d,layoutScroll:f,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Y_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!c||d&&Eo(d),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:f,layoutRoot:h})}function Y_(n){if(n)return n.options.allowProjection!==!1?n.projection:Y_(n.parent)}function ZC({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,c;n&&BC(n);function d(h,g){let v;const m={...ye.useContext(xp),...h,layoutId:QC(h)},{isStatic:y}=m,M=XC(h),T=r(h,y);if(!y&&_p){JC();const S=eR(m);v=S.MeasureLayout,M.visualElement=$C(o,T,m,e,S.ProjectionNode)}return O.jsxs(gu.Provider,{value:M,children:[v&&M.visualElement?O.jsx(v,{visualElement:M.visualElement,...m}):null,t(o,h,YC(T,M.visualElement,g),T,y,M.visualElement)]})}d.displayName=`motion.${typeof o=="string"?o:`create(${(c=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&c!==void 0?c:""})`}`;const f=ye.forwardRef(d);return f[jC]=o,f}function QC({layoutId:n}){const e=ye.useContext(gp).id;return e&&n!==void 0?e+"-"+n:n}function JC(n,e){ye.useContext(H_).strict}function eR(n){const{drag:e,layout:t}=Io;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const tR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Tp(n){return typeof n!="string"||n.includes("-")?!1:!!(tR.indexOf(n)>-1||/[A-Z]/u.test(n))}function Pv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function bp(n,e,t,r){if(typeof e=="function"){const[o,l]=Pv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=Pv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Bh=n=>Array.isArray(n),nR=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),iR=n=>Bh(n)?n[n.length-1]||0:n,Fn=n=>!!(n&&n.getVelocity);function Xc(n){const e=Fn(n)?n.get():n;return nR(e)?e.toValue():e}function rR({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const c={latestValues:sR(r,o,l,n),renderState:e()};return t&&(c.onMount=d=>t({props:r,current:d,...c}),c.onUpdate=d=>t(d)),c}const q_=n=>(e,t)=>{const r=ye.useContext(gu),o=ye.useContext(mu),l=()=>rR(n,e,r,o);return t?l():vp(l)};function sR(n,e,t,r){const o={},l=r(n,{});for(const m in l)o[m]=Xc(l[m]);let{initial:c,animate:d}=n;const f=xu(n),h=W_(n);e&&h&&!f&&n.inherit!==!1&&(c===void 0&&(c=e.initial),d===void 0&&(d=e.animate));let g=t?t.initial===!1:!1;g=g||c===!1;const v=g?d:c;if(v&&typeof v!="boolean"&&!vu(v)){const m=Array.isArray(v)?v:[v];for(let y=0;y<m.length;y++){const M=bp(n,m[y]);if(M){const{transitionEnd:T,transition:S,..._}=M;for(const P in _){let U=_[P];if(Array.isArray(U)){const C=g?U.length-1:0;U=U[C]}U!==null&&(o[P]=U)}for(const P in T)o[P]=T[P]}}}return o}const ko=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fs=new Set(ko),$_=n=>e=>typeof e=="string"&&e.startsWith(n),K_=$_("--"),oR=$_("var(--"),Ap=n=>oR(n)?aR.test(n.split("/*")[0].trim()):!1,aR=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Z_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Mr=(n,e,t)=>t>e?e:t<n?n:t,Bo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ya={...Bo,transform:n=>Mr(0,1,n)},Oc={...Bo,default:1},tl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),qr=tl("deg"),$i=tl("%"),st=tl("px"),lR=tl("vh"),cR=tl("vw"),Lv={...$i,parse:n=>$i.parse(n)/100,transform:n=>$i.transform(n*100)},uR={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st},dR={rotate:qr,rotateX:qr,rotateY:qr,rotateZ:qr,scale:Oc,scaleX:Oc,scaleY:Oc,scaleZ:Oc,skew:qr,skewX:qr,skewY:qr,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:Ya,originX:Lv,originY:Lv,originZ:st},Dv={...Bo,transform:Math.round},Cp={...uR,...dR,zIndex:Dv,size:st,fillOpacity:Ya,strokeOpacity:Ya,numOctaves:Dv},fR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hR=ko.length;function pR(n,e,t){let r="",o=!0;for(let l=0;l<hR;l++){const c=ko[l],d=n[c];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(c.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||t){const h=Z_(d,Cp[c]);if(!f){o=!1;const g=fR[c]||c;r+=`${g}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Rp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let c=!1,d=!1;for(const f in e){const h=e[f];if(Fs.has(f)){c=!0;continue}else if(K_(f)){o[f]=h;continue}else{const g=Z_(h,Cp[f]);f.startsWith("origin")?(d=!0,l[f]=g):r[f]=g}}if(e.transform||(c||t?r.transform=pR(e,n.transform,t):r.transform&&(r.transform="none")),d){const{originX:f="50%",originY:h="50%",originZ:g=0}=l;r.transformOrigin=`${f} ${h} ${g}`}}const mR={offset:"stroke-dashoffset",array:"stroke-dasharray"},gR={offset:"strokeDashoffset",array:"strokeDasharray"};function vR(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?mR:gR;n[l.offset]=st.transform(-r);const c=st.transform(e),d=st.transform(t);n[l.array]=`${c} ${d}`}function Nv(n,e,t){return typeof n=="string"?n:st.transform(e+t*n)}function xR(n,e,t){const r=Nv(e,n.x,n.width),o=Nv(t,n.y,n.height);return`${r} ${o}`}function Pp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...h},g,v){if(Rp(n,h,v),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:y,dimensions:M}=n;m.transform&&(M&&(y.transform=m.transform),delete m.transform),M&&(o!==void 0||l!==void 0||y.transform)&&(y.transformOrigin=xR(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),r!==void 0&&(m.scale=r),c!==void 0&&vR(m,c,d,f,!1)}const Lp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Q_=()=>({...Lp(),attrs:{}}),Dp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function J_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const ey=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ty(n,e,t,r){J_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(ey.has(o)?o:wp(o),e.attrs[o])}const tu={};function _R(n){Object.assign(tu,n)}function ny(n,{layout:e,layoutId:t}){return Fs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!tu[n]||n==="opacity")}function Np(n,e,t){var r;const{style:o}=n,l={};for(const c in o)(Fn(o[c])||e.style&&Fn(e.style[c])||ny(c,n)||((r=t==null?void 0:t.getValue(c))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[c]=o[c]);return l}function iy(n,e,t){const r=Np(n,e,t);for(const o in n)if(Fn(n[o])||Fn(e[o])){const l=ko.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function yR(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Iv=["x","y","width","height","cx","cy","r"],SR={useVisualState:q_({scrapeMotionValuesFromProps:iy,createRenderState:Q_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const d in o)if(Fs.has(d)){l=!0;break}}if(!l)return;let c=!e;if(e)for(let d=0;d<Iv.length;d++){const f=Iv[d];n[f]!==e[f]&&(c=!0)}c&&Gt.read(()=>{yR(t,r),Gt.render(()=>{Pp(r,o,Dp(t.tagName),n.transformTemplate),ty(t,r)})})}})},MR={useVisualState:q_({scrapeMotionValuesFromProps:Np,createRenderState:Lp})};function ry(n,e,t){for(const r in e)!Fn(e[r])&&!ny(r,t)&&(n[r]=e[r])}function wR({transformTemplate:n},e){return ye.useMemo(()=>{const t=Lp();return Rp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function ER(n,e){const t=n.style||{},r={};return ry(r,t,n),Object.assign(r,wR(n,e)),r}function TR(n,e){const t={},r=ER(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function bR(n,e,t,r){const o=ye.useMemo(()=>{const l=Q_();return Pp(l,e,Dp(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};ry(l,n.style,n),o.style={...l,...o.style}}return o}function AR(n=!1){return(t,r,o,{latestValues:l},c)=>{const f=(Tp(t)?bR:TR)(r,l,c,t),h=HC(r,typeof t=="string",n),g=t!==ye.Fragment?{...h,...f,ref:o}:{},{children:v}=r,m=ye.useMemo(()=>Fn(v)?v.get():v,[v]);return ye.createElement(t,{...g,children:m})}}function CR(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...Tp(r)?SR:MR,preloadedFeatures:n,useRender:AR(o),createVisualElement:e,Component:r};return ZC(c)}}function sy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function _u(n,e,t){const r=n.getProps();return bp(r,e,t!==void 0?t:r.custom,n)}const RR=yp(()=>window.ScrollTimeline!==void 0);class PR{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(RR()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class LR extends PR{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Ip(n,e){return n?n[e]||n.default||n:void 0}const Vh=2e4;function oy(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Vh;)e+=t,r=n.next(e);return e>=Vh?1/0:e}function Up(n){return typeof n=="function"}function Uv(n,e){n.timeline=e,n.onfinish=null}const Fp=n=>Array.isArray(n)&&typeof n[0]=="number",DR={linearEasing:void 0};function NR(n,e){const t=yp(n);return()=>{var r;return(r=DR[e])!==null&&r!==void 0?r:t()}}const nu=NR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ay=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(No(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function ly(n){return!!(typeof n=="function"&&nu()||!n||typeof n=="string"&&(n in zh||nu())||Fp(n)||Array.isArray(n)&&n.every(ly))}const Na=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,zh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Na([0,.65,.55,1]),circOut:Na([.55,0,1,.45]),backIn:Na([.31,.01,.66,-.59]),backOut:Na([.33,1.53,.69,.99])};function cy(n,e){if(n)return typeof n=="function"&&nu()?ay(n,e):Fp(n)?Na(n):Array.isArray(n)?n.map(t=>cy(t,e)||zh.easeOut):zh[n]}const Ii={x:!1,y:!1};function uy(){return Ii.x||Ii.y}function IR(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function dy(n,e){const t=IR(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Fv(n){return e=>{e.pointerType==="touch"||uy()||n(e)}}function UR(n,e,t={}){const[r,o,l]=dy(n,t),c=Fv(d=>{const{target:f}=d,h=e(d);if(typeof h!="function"||!f)return;const g=Fv(v=>{h(v),f.removeEventListener("pointerleave",g)});f.addEventListener("pointerleave",g,o)});return r.forEach(d=>{d.addEventListener("pointerenter",c,o)}),l}const fy=(n,e)=>e?n===e?!0:fy(n,e.parentElement):!1,Op=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,FR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function OR(n){return FR.has(n.tagName)||n.tabIndex!==-1}const Ia=new WeakSet;function Ov(n){return e=>{e.key==="Enter"&&n(e)}}function Of(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const kR=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Ov(()=>{if(Ia.has(t))return;Of(t,"down");const o=Ov(()=>{Of(t,"up")}),l=()=>Of(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function kv(n){return Op(n)&&!uy()}function BR(n,e,t={}){const[r,o,l]=dy(n,t),c=d=>{const f=d.currentTarget;if(!kv(d)||Ia.has(f))return;Ia.add(f);const h=e(d),g=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),!(!kv(y)||!Ia.has(f))&&(Ia.delete(f),typeof h=="function"&&h(y,{success:M}))},v=y=>{g(y,t.useGlobalTarget||fy(f,y.target))},m=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return r.forEach(d=>{!OR(d)&&d.getAttribute("tabindex")===null&&(d.tabIndex=0),(t.useGlobalTarget?window:d).addEventListener("pointerdown",c,o),d.addEventListener("focus",h=>kR(h,o),o)}),l}function VR(n){return n==="x"||n==="y"?Ii[n]?null:(Ii[n]=!0,()=>{Ii[n]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}const hy=new Set(["width","height","top","left","right","bottom",...ko]);let jc;function zR(){jc=void 0}const Ki={now:()=>(jc===void 0&&Ki.set(En.isProcessing||FC.useManualTiming?En.timestamp:performance.now()),jc),set:n=>{jc=n,queueMicrotask(zR)}};function kp(n,e){n.indexOf(e)===-1&&n.push(e)}function Bp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Vp{constructor(){this.subscriptions=[]}add(e){return kp(this.subscriptions,e),()=>Bp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const c=this.subscriptions[l];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function py(n,e){return e?n*(1e3/e):0}const Bv=30,HR=n=>!isNaN(parseFloat(n));class GR{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ki.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ki.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=HR(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Vp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Gt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ki.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Bv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Bv);return py(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function qa(n,e){return new GR(n,e)}function WR(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,qa(t))}function XR(n,e){const t=_u(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const c in l){const d=iR(l[c]);WR(n,c,d)}}function jR(n){return!!(Fn(n)&&n.add)}function Hh(n,e){const t=n.getValue("willChange");if(jR(t))return t.add(e)}function my(n){return n.props[X_]}const gy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,YR=1e-7,qR=12;function $R(n,e,t,r,o){let l,c,d=0;do c=e+(t-e)/2,l=gy(c,r,o)-n,l>0?t=c:e=c;while(Math.abs(l)>YR&&++d<qR);return c}function nl(n,e,t,r){if(n===e&&t===r)return ii;const o=l=>$R(l,0,1,n,t);return l=>l===0||l===1?l:gy(o(l),e,r)}const vy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,xy=n=>e=>1-n(1-e),_y=nl(.33,1.53,.69,.99),zp=xy(_y),yy=vy(zp),Sy=n=>(n*=2)<1?.5*zp(n):.5*(2-Math.pow(2,-10*(n-1))),Hp=n=>1-Math.sin(Math.acos(n)),My=xy(Hp),wy=vy(Hp),Ey=n=>/^0[^.\s]+$/u.test(n);function KR(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ey(n):!0}const ka=n=>Math.round(n*1e5)/1e5,Gp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZR(n){return n==null}const QR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wp=(n,e)=>t=>!!(typeof t=="string"&&QR.test(t)&&t.startsWith(n)||e&&!ZR(t)&&Object.prototype.hasOwnProperty.call(t,e)),Ty=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,c,d]=r.match(Gp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},JR=n=>Mr(0,255,n),kf={...Bo,transform:n=>Math.round(JR(n))},Rs={test:Wp("rgb","red"),parse:Ty("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+kf.transform(n)+", "+kf.transform(e)+", "+kf.transform(t)+", "+ka(Ya.transform(r))+")"};function eP(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Gh={test:Wp("#"),parse:eP,transform:Rs.transform},To={test:Wp("hsl","hue"),parse:Ty("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+$i.transform(ka(e))+", "+$i.transform(ka(t))+", "+ka(Ya.transform(r))+")"},In={test:n=>Rs.test(n)||Gh.test(n)||To.test(n),parse:n=>Rs.test(n)?Rs.parse(n):To.test(n)?To.parse(n):Gh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Rs.transform(n):To.transform(n)},tP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nP(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Gp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(tP))===null||t===void 0?void 0:t.length)||0)>0}const by="number",Ay="color",iP="var",rP="var(",Vv="${}",sP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $a(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const d=e.replace(sP,f=>(In.test(f)?(r.color.push(l),o.push(Ay),t.push(In.parse(f))):f.startsWith(rP)?(r.var.push(l),o.push(iP),t.push(f)):(r.number.push(l),o.push(by),t.push(parseFloat(f))),++l,Vv)).split(Vv);return{values:t,split:d,indexes:r,types:o}}function Cy(n){return $a(n).values}function Ry(n){const{split:e,types:t}=$a(n),r=e.length;return o=>{let l="";for(let c=0;c<r;c++)if(l+=e[c],o[c]!==void 0){const d=t[c];d===by?l+=ka(o[c]):d===Ay?l+=In.transform(o[c]):l+=o[c]}return l}}const oP=n=>typeof n=="number"?0:n;function aP(n){const e=Cy(n);return Ry(n)(e.map(oP))}const es={test:nP,parse:Cy,createTransformer:Ry,getAnimatableNone:aP},lP=new Set(["brightness","contrast","saturate","opacity"]);function cP(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Gp)||[];if(!r)return n;const o=t.replace(r,"");let l=lP.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const uP=/\b([a-z-]*)\(.*?\)/gu,Wh={...es,getAnimatableNone:n=>{const e=n.match(uP);return e?e.map(cP).join(" "):n}},dP={...Cp,color:In,backgroundColor:In,outlineColor:In,fill:In,stroke:In,borderColor:In,borderTopColor:In,borderRightColor:In,borderBottomColor:In,borderLeftColor:In,filter:Wh,WebkitFilter:Wh},Xp=n=>dP[n];function Py(n,e){let t=Xp(n);return t!==Wh&&(t=es),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const fP=new Set(["auto","none","0"]);function hP(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!fP.has(l)&&$a(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Py(t,o)}const zv=n=>n===Bo||n===st,Hv=(n,e)=>parseFloat(n.split(", ")[e]),Gv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return Hv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?Hv(l[1],n):0}},pP=new Set(["x","y","z"]),mP=ko.filter(n=>!pP.has(n));function gP(n){const e=[];return mP.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Uo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Gv(4,13),y:Gv(5,14)};Uo.translateX=Uo.x;Uo.translateY=Uo.y;const Ps=new Set;let Xh=!1,jh=!1;function Ly(){if(jh){const n=Array.from(Ps).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=gP(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,c])=>{var d;(d=r.getValue(l))===null||d===void 0||d.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}jh=!1,Xh=!1,Ps.forEach(n=>n.complete()),Ps.clear()}function Dy(){Ps.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(jh=!0)})}function vP(){Dy(),Ly()}class jp{constructor(e,t,r,o,l,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ps.add(this),Xh||(Xh=!0,Gt.read(Dy),Gt.resolveKeyframes(Ly))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const c=o==null?void 0:o.get(),d=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&t){const f=r.readValue(t,d);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=d),o&&c===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ps.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ps.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ny=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),xP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _P(n){const e=xP.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Iy(n,e,t=1){const[r,o]=_P(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const c=l.trim();return Ny(c)?parseFloat(c):c}return Ap(o)?Iy(o,e,t+1):o}const Uy=n=>e=>e.test(n),yP={test:n=>n==="auto",parse:n=>n},Fy=[Bo,st,$i,qr,cR,lR,yP],Wv=n=>Fy.find(Uy(n));class Oy extends jp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),Ap(h))){const g=Iy(h,t.current);g!==void 0&&(e[f]=g),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!hy.has(r)||e.length!==2)return;const[o,l]=e,c=Wv(o),d=Wv(l);if(c!==d)if(zv(c)&&zv(d))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)KR(e[o])&&r.push(o);r.length&&hP(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Uo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const c=o.length-1,d=o[c];o[c]=Uo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Xv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(es.test(n)||n==="0")&&!n.startsWith("url("));function SP(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function MP(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],c=Xv(o,e),d=Xv(l,e);return!c||!d?!1:SP(n)||(t==="spring"||Up(t))&&r}const wP=n=>n!==null;function yu(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(wP),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const EP=40;class ky{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:c="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ki.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:c,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>EP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&vP(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ki.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:c,onComplete:d,onUpdate:f,isGenerator:h}=this.options;if(!h&&!MP(e,r,o,l))if(c)this.options.duration=0;else{f&&f(yu(e,this.options,t)),d&&d(),this.resolveFinishedPromise();return}const g=this.initPlayback(e,t);g!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...g},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Zt=(n,e,t)=>n+(e-n)*t;function Bf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function TP({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,c=0;if(!e)o=l=c=t;else{const d=t<.5?t*(1+e):t+e-t*e,f=2*t-d;o=Bf(f,d,n+1/3),l=Bf(f,d,n),c=Bf(f,d,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:r}}function iu(n,e){return t=>t>0?e:n}const Vf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},bP=[Gh,Rs,To],AP=n=>bP.find(e=>e.test(n));function jv(n){const e=AP(n);if(!e)return!1;let t=e.parse(n);return e===To&&(t=TP(t)),t}const Yv=(n,e)=>{const t=jv(n),r=jv(e);if(!t||!r)return iu(n,e);const o={...t};return l=>(o.red=Vf(t.red,r.red,l),o.green=Vf(t.green,r.green,l),o.blue=Vf(t.blue,r.blue,l),o.alpha=Zt(t.alpha,r.alpha,l),Rs.transform(o))},CP=(n,e)=>t=>e(n(t)),il=(...n)=>n.reduce(CP),Yh=new Set(["none","hidden"]);function RP(n,e){return Yh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function PP(n,e){return t=>Zt(n,e,t)}function Yp(n){return typeof n=="number"?PP:typeof n=="string"?Ap(n)?iu:In.test(n)?Yv:NP:Array.isArray(n)?By:typeof n=="object"?In.test(n)?Yv:LP:iu}function By(n,e){const t=[...n],r=t.length,o=n.map((l,c)=>Yp(l)(l,e[c]));return l=>{for(let c=0;c<r;c++)t[c]=o[c](l);return t}}function LP(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Yp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function DP(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const c=e.types[l],d=n.indexes[c][o[c]],f=(t=n.values[d])!==null&&t!==void 0?t:0;r[l]=f,o[c]++}return r}const NP=(n,e)=>{const t=es.createTransformer(e),r=$a(n),o=$a(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Yh.has(n)&&!o.values.length||Yh.has(e)&&!r.values.length?RP(n,e):il(By(DP(r,o),o.values),t):iu(n,e)};function Vy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Zt(n,e,t):Yp(n)(n,e)}const IP=5;function zy(n,e,t){const r=Math.max(e-IP,0);return py(t-n(r),e-r)}const tn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zf=.001;function UP({duration:n=tn.duration,bounce:e=tn.bounce,velocity:t=tn.velocity,mass:r=tn.mass}){let o,l,c=1-e;c=Mr(tn.minDamping,tn.maxDamping,c),n=Mr(tn.minDuration,tn.maxDuration,yr(n)),c<1?(o=h=>{const g=h*c,v=g*n,m=g-t,y=qh(h,c),M=Math.exp(-v);return zf-m/y*M},l=h=>{const v=h*c*n,m=v*t+t,y=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),T=qh(Math.pow(h,2),c);return(-o(h)+zf>0?-1:1)*((m-y)*M)/T}):(o=h=>{const g=Math.exp(-h*n),v=(h-t)*n+1;return-zf+g*v},l=h=>{const g=Math.exp(-h*n),v=(t-h)*(n*n);return g*v});const d=5/n,f=OP(o,l,d);if(n=_r(n),isNaN(f))return{stiffness:tn.stiffness,damping:tn.damping,duration:n};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const FP=12;function OP(n,e,t){let r=t;for(let o=1;o<FP;o++)r=r-n(r)/e(r);return r}function qh(n,e){return n*Math.sqrt(1-e*e)}const kP=["duration","bounce"],BP=["stiffness","damping","mass"];function qv(n,e){return e.some(t=>n[t]!==void 0)}function VP(n){let e={velocity:tn.velocity,stiffness:tn.stiffness,damping:tn.damping,mass:tn.mass,isResolvedFromDuration:!1,...n};if(!qv(n,BP)&&qv(n,kP))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*Mr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:tn.mass,stiffness:o,damping:l}}else{const t=UP(n);e={...e,...t,mass:tn.mass},e.isResolvedFromDuration=!0}return e}function Hy(n=tn.visualDuration,e=tn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:h,mass:g,duration:v,velocity:m,isResolvedFromDuration:y}=VP({...t,velocity:-yr(t.velocity||0)}),M=m||0,T=h/(2*Math.sqrt(f*g)),S=c-l,_=yr(Math.sqrt(f/g)),P=Math.abs(S)<5;r||(r=P?tn.restSpeed.granular:tn.restSpeed.default),o||(o=P?tn.restDelta.granular:tn.restDelta.default);let U;if(T<1){const R=qh(_,T);U=L=>{const F=Math.exp(-T*_*L);return c-F*((M+T*_*S)/R*Math.sin(R*L)+S*Math.cos(R*L))}}else if(T===1)U=R=>c-Math.exp(-_*R)*(S+(M+_*S)*R);else{const R=_*Math.sqrt(T*T-1);U=L=>{const F=Math.exp(-T*_*L),E=Math.min(R*L,300);return c-F*((M+T*_*S)*Math.sinh(E)+R*S*Math.cosh(E))/R}}const C={calculatedDuration:y&&v||null,next:R=>{const L=U(R);if(y)d.done=R>=v;else{let F=0;T<1&&(F=R===0?_r(M):zy(U,R,L));const E=Math.abs(F)<=r,D=Math.abs(c-L)<=o;d.done=E&&D}return d.value=d.done?c:L,d},toString:()=>{const R=Math.min(oy(C),Vh),L=ay(F=>C.next(R*F).value,R,30);return R+"ms "+L}};return C}function $v({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:c,min:d,max:f,restDelta:h=.5,restSpeed:g}){const v=n[0],m={done:!1,value:v},y=E=>d!==void 0&&E<d||f!==void 0&&E>f,M=E=>d===void 0?f:f===void 0||Math.abs(d-E)<Math.abs(f-E)?d:f;let T=t*e;const S=v+T,_=c===void 0?S:c(S);_!==S&&(T=_-v);const P=E=>-T*Math.exp(-E/r),U=E=>_+P(E),C=E=>{const D=P(E),B=U(E);m.done=Math.abs(D)<=h,m.value=m.done?_:B};let R,L;const F=E=>{y(m.value)&&(R=E,L=Hy({keyframes:[m.value,M(m.value)],velocity:zy(U,E,m.value),damping:o,stiffness:l,restDelta:h,restSpeed:g}))};return F(0),{calculatedDuration:null,next:E=>{let D=!1;return!L&&R===void 0&&(D=!0,C(E),F(E)),R!==void 0&&E>=R?L.next(E-R):(!D&&C(E),m)}}}const zP=nl(.42,0,1,1),HP=nl(0,0,.58,1),Gy=nl(.42,0,.58,1),GP=n=>Array.isArray(n)&&typeof n[0]!="number",WP={linear:ii,easeIn:zP,easeInOut:Gy,easeOut:HP,circIn:Hp,circInOut:wy,circOut:My,backIn:zp,backInOut:yy,backOut:_y,anticipate:Sy},Kv=n=>{if(Fp(n)){V_(n.length===4);const[e,t,r,o]=n;return nl(e,t,r,o)}else if(typeof n=="string")return WP[n];return n};function XP(n,e,t){const r=[],o=t||Vy,l=n.length-1;for(let c=0;c<l;c++){let d=o(n[c],n[c+1]);if(e){const f=Array.isArray(e)?e[c]||ii:e;d=il(f,d)}r.push(d)}return r}function jP(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(V_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const d=XP(e,r,o),f=d.length,h=g=>{if(c&&g<n[0])return e[0];let v=0;if(f>1)for(;v<n.length-2&&!(g<n[v+1]);v++);const m=No(n[v],n[v+1],g);return d[v](m)};return t?g=>h(Mr(n[0],n[l-1],g)):h}function YP(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=No(0,e,r);n.push(Zt(t,1,o))}}function qP(n){const e=[0];return YP(e,n.length-1),e}function $P(n,e){return n.map(t=>t*e)}function KP(n,e){return n.map(()=>e||Gy).splice(0,n.length-1)}function ru({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=GP(r)?r.map(Kv):Kv(r),l={done:!1,value:e[0]},c=$P(t&&t.length===e.length?t:qP(e),n),d=jP(c,e,{ease:Array.isArray(o)?o:KP(e,o)});return{calculatedDuration:n,next:f=>(l.value=d(f),l.done=f>=n,l)}}const ZP=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Gt.update(e,!0),stop:()=>Jr(e),now:()=>En.isProcessing?En.timestamp:Ki.now()}},QP={decay:$v,inertia:$v,tween:ru,keyframes:ru,spring:Hy},JP=n=>n/100;class qp extends ky{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,c=(o==null?void 0:o.KeyframeResolver)||jp,d=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new c(l,d,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:c=0}=this.options,d=Up(t)?t:QP[t]||ru;let f,h;d!==ru&&typeof e[0]!="number"&&(f=il(JP,Vy(e[0],e[1])),e=[0,100]);const g=d({...this.options,keyframes:e});l==="mirror"&&(h=d({...this.options,keyframes:[...e].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=oy(g));const{calculatedDuration:v}=g,m=v+o,y=m*(r+1)-o;return{generator:g,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:v,resolvedDuration:m,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:c,mapPercentToKeyframes:d,keyframes:f,calculatedDuration:h,totalDuration:g,resolvedDuration:v}=r;if(this.startTime===null)return l.next(0);const{delay:m,repeat:y,repeatType:M,repeatDelay:T,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-g/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const _=this.currentTime-m*(this.speed>=0?1:-1),P=this.speed>=0?_<0:_>g;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let U=this.currentTime,C=l;if(y){const E=Math.min(this.currentTime,g)/v;let D=Math.floor(E),B=E%1;!B&&E>=1&&(B=1),B===1&&D--,D=Math.min(D,y+1),!!(D%2)&&(M==="reverse"?(B=1-B,T&&(B-=T/v)):M==="mirror"&&(C=c)),U=Mr(0,1,B)*v}const R=P?{done:!1,value:f[0]}:C.next(U);d&&(R.value=d(R.value));let{done:L}=R;!P&&h!==null&&(L=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&o!==void 0&&(R.value=yu(f,this.options,o)),S&&S(R.value),F&&this.finish(),R}get duration(){const{resolved:e}=this;return e?yr(e.calculatedDuration):0}get time(){return yr(this.currentTime)}set time(e){e=_r(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=yr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=ZP,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const e2=new Set(["opacity","clipPath","filter","transform"]);function t2(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:c="loop",ease:d="easeInOut",times:f}={}){const h={[e]:t};f&&(h.offset=f);const g=cy(d,o);return Array.isArray(g)&&(h.easing=g),n.animate(h,{delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"})}const n2=yp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),su=10,i2=2e4;function r2(n){return Up(n.type)||n.type==="spring"||!ly(n.ease)}function s2(n,e){const t=new qp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<i2;)r=t.sample(l),o.push(r.value),l+=su;return{times:void 0,keyframes:o,duration:l-su,ease:"linear"}}const Wy={anticipate:Sy,backInOut:yy,circInOut:wy};function o2(n){return n in Wy}class Zv extends ky{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new Oy(l,(c,d)=>this.onKeyframesResolved(c,d),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:c,motionValue:d,name:f,startTime:h}=this.options;if(!d.owner||!d.owner.current)return!1;if(typeof l=="string"&&nu()&&o2(l)&&(l=Wy[l]),r2(this.options)){const{onComplete:v,onUpdate:m,motionValue:y,element:M,...T}=this.options,S=s2(e,T);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,c="keyframes"}const g=t2(d.owner.current,f,e,{...this.options,duration:r,times:o,ease:l});return g.startTime=h??this.calcStartTime(),this.pendingTimeline?(Uv(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;d.set(yu(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:r,times:o,type:c,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return yr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return yr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=_r(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return ii;const{animation:r}=t;Uv(r,e)}return ii}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:c,times:d}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:g,onComplete:v,element:m,...y}=this.options,M=new qp({...y,keyframes:r,duration:o,type:l,ease:c,times:d,isGenerator:!0}),T=_r(this.time);h.setWithVelocity(M.sample(T-su).value,M.sample(T).value,su)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:c,type:d}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return n2()&&r&&e2.has(r)&&!f&&!h&&!o&&l!=="mirror"&&c!==0&&d!=="inertia"}}const a2={type:"spring",stiffness:500,damping:25,restSpeed:10},l2=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),c2={type:"keyframes",duration:.8},u2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},d2=(n,{keyframes:e})=>e.length>2?c2:Fs.has(n)?n.startsWith("scale")?l2(e[1]):a2:u2;function f2({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:c,repeatDelay:d,from:f,elapsed:h,...g}){return!!Object.keys(g).length}const $p=(n,e,t,r={},o,l)=>c=>{const d=Ip(r,n)||{},f=d.delay||r.delay||0;let{elapsed:h=0}=r;h=h-_r(f);let g={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-h,onUpdate:m=>{e.set(m),d.onUpdate&&d.onUpdate(m)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:n,motionValue:e,element:l?void 0:o};f2(d)||(g={...g,...d2(n,g)}),g.duration&&(g.duration=_r(g.duration)),g.repeatDelay&&(g.repeatDelay=_r(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(v=!0)),v&&!l&&e.get()!==void 0){const m=yu(g.keyframes,d);if(m!==void 0)return Gt.update(()=>{g.onUpdate(m),g.onComplete()}),new LR([])}return!l&&Zv.supports(g)?new Zv(g):new qp(g)};function h2({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Xy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:c=n.getDefaultTransition(),transitionEnd:d,...f}=e;r&&(c=r);const h=[],g=o&&n.animationState&&n.animationState.getState()[o];for(const v in f){const m=n.getValue(v,(l=n.latestValues[v])!==null&&l!==void 0?l:null),y=f[v];if(y===void 0||g&&h2(g,v))continue;const M={delay:t,...Ip(c||{},v)};let T=!1;if(window.MotionHandoffAnimation){const _=my(n);if(_){const P=window.MotionHandoffAnimation(_,v,Gt);P!==null&&(M.startTime=P,T=!0)}}Hh(n,v),m.start($p(v,m,y,n.shouldReduceMotion&&hy.has(v)?{type:!1}:M,n,T));const S=m.animation;S&&h.push(S)}return d&&Promise.all(h).then(()=>{Gt.update(()=>{d&&XR(n,d)})}),h}function $h(n,e,t={}){var r;const o=_u(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const c=o?()=>Promise.all(Xy(n,o,t)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:m}=l;return p2(n,e,g+h,v,m,t)}:()=>Promise.resolve(),{when:f}=l;if(f){const[h,g]=f==="beforeChildren"?[c,d]:[d,c];return h().then(()=>g())}else return Promise.all([c(),d(t.delay)])}function p2(n,e,t=0,r=0,o=1,l){const c=[],d=(n.variantChildren.size-1)*r,f=o===1?(h=0)=>h*r:(h=0)=>d-h*r;return Array.from(n.variantChildren).sort(m2).forEach((h,g)=>{h.notify("AnimationStart",e),c.push($h(h,e,{...l,delay:t+f(g)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function m2(n,e){return n.sortNodePosition(e)}function g2(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>$h(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=$h(n,e,t);else{const o=typeof e=="function"?_u(n,e,t.custom):e;r=Promise.all(Xy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const v2=Mp.length;function jy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?jy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<v2;t++){const r=Mp[t],o=n.props[r];(ja(o)||o===!1)&&(e[r]=o)}return e}const x2=[...Sp].reverse(),_2=Sp.length;function y2(n){return e=>Promise.all(e.map(({animation:t,options:r})=>g2(n,t,r)))}function S2(n){let e=y2(n),t=Qv(),r=!0;const o=f=>(h,g)=>{var v;const m=_u(n,g,f==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(m){const{transition:y,transitionEnd:M,...T}=m;h={...h,...T,...M}}return h};function l(f){e=f(n)}function c(f){const{props:h}=n,g=jy(n.parent)||{},v=[],m=new Set;let y={},M=1/0;for(let S=0;S<_2;S++){const _=x2[S],P=t[_],U=h[_]!==void 0?h[_]:g[_],C=ja(U),R=_===f?P.isActive:null;R===!1&&(M=S);let L=U===g[_]&&U!==h[_]&&C;if(L&&r&&n.manuallyAnimateOnMount&&(L=!1),P.protectedKeys={...y},!P.isActive&&R===null||!U&&!P.prevProp||vu(U)||typeof U=="boolean")continue;const F=M2(P.prevProp,U);let E=F||_===f&&P.isActive&&!L&&C||S>M&&C,D=!1;const B=Array.isArray(U)?U:[U];let j=B.reduce(o(_),{});R===!1&&(j={});const{prevResolvedValues:J={}}=P,ie={...J,...j},z=K=>{E=!0,m.has(K)&&(D=!0,m.delete(K)),P.needsAnimating[K]=!0;const Y=n.getValue(K);Y&&(Y.liveStyle=!1)};for(const K in ie){const Y=j[K],q=J[K];if(y.hasOwnProperty(K))continue;let $=!1;Bh(Y)&&Bh(q)?$=!sy(Y,q):$=Y!==q,$?Y!=null?z(K):m.add(K):Y!==void 0&&m.has(K)?z(K):P.protectedKeys[K]=!0}P.prevProp=U,P.prevResolvedValues=j,P.isActive&&(y={...y,...j}),r&&n.blockInitialAnimation&&(E=!1),E&&(!(L&&F)||D)&&v.push(...B.map(K=>({animation:K,options:{type:_}})))}if(m.size){const S={};m.forEach(_=>{const P=n.getBaseTarget(_),U=n.getValue(_);U&&(U.liveStyle=!0),S[_]=P??null}),v.push({animation:S})}let T=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(v):Promise.resolve()}function d(f,h){var g;if(t[f].isActive===h)return Promise.resolve();(g=n.variantChildren)===null||g===void 0||g.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(f,h)}),t[f].isActive=h;const v=c(f);for(const m in t)t[m].protectedKeys={};return v}return{animateChanges:c,setActive:d,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Qv(),r=!0}}}function M2(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!sy(e,n):!1}function Es(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Qv(){return{animate:Es(!0),whileInView:Es(),whileHover:Es(),whileTap:Es(),whileDrag:Es(),whileFocus:Es(),exit:Es()}}class ts{constructor(e){this.isMounted=!1,this.node=e}update(){}}class w2 extends ts{constructor(e){super(e),e.animationState||(e.animationState=S2(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();vu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let E2=0;class T2 extends ts{constructor(){super(...arguments),this.id=E2++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const b2={animation:{Feature:w2},exit:{Feature:T2}};function Ka(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function rl(n){return{point:{x:n.pageX,y:n.pageY}}}const A2=n=>e=>Op(e)&&n(e,rl(e));function Ba(n,e,t,r){return Ka(n,e,A2(t),r)}const Jv=(n,e)=>Math.abs(n-e);function C2(n,e){const t=Jv(n.x,e.x),r=Jv(n.y,e.y);return Math.sqrt(t**2+r**2)}class Yy{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Gf(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=C2(v.offset,{x:0,y:0})>=3;if(!m&&!y)return;const{point:M}=v,{timestamp:T}=En;this.history.push({...M,timestamp:T});const{onStart:S,onMove:_}=this.handlers;m||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,v)},this.handlePointerMove=(v,m)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Hf(m,this.transformPagePoint),Gt.update(this.updatePoint,!0)},this.handlePointerUp=(v,m)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Gf(v.type==="pointercancel"?this.lastMoveEventInfo:Hf(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!Op(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const c=rl(e),d=Hf(c,this.transformPagePoint),{point:f}=d,{timestamp:h}=En;this.history=[{...f,timestamp:h}];const{onSessionStart:g}=t;g&&g(e,Gf(d,this.history)),this.removeListeners=il(Ba(this.contextWindow,"pointermove",this.handlePointerMove),Ba(this.contextWindow,"pointerup",this.handlePointerUp),Ba(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Jr(this.updatePoint)}}function Hf(n,e){return e?{point:e(n.point)}:n}function ex(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Gf({point:n},e){return{point:n,delta:ex(n,qy(e)),offset:ex(n,R2(e)),velocity:P2(e,.1)}}function R2(n){return n[0]}function qy(n){return n[n.length-1]}function P2(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=qy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>_r(e)));)t--;if(!r)return{x:0,y:0};const l=yr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const c={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const $y=1e-4,L2=1-$y,D2=1+$y,Ky=.01,N2=0-Ky,I2=0+Ky;function si(n){return n.max-n.min}function U2(n,e,t){return Math.abs(n-e)<=t}function tx(n,e,t,r=.5){n.origin=r,n.originPoint=Zt(e.min,e.max,n.origin),n.scale=si(t)/si(e),n.translate=Zt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=L2&&n.scale<=D2||isNaN(n.scale))&&(n.scale=1),(n.translate>=N2&&n.translate<=I2||isNaN(n.translate))&&(n.translate=0)}function Va(n,e,t,r){tx(n.x,e.x,t.x,r?r.originX:void 0),tx(n.y,e.y,t.y,r?r.originY:void 0)}function nx(n,e,t){n.min=t.min+e.min,n.max=n.min+si(e)}function F2(n,e,t){nx(n.x,e.x,t.x),nx(n.y,e.y,t.y)}function ix(n,e,t){n.min=e.min-t.min,n.max=n.min+si(e)}function za(n,e,t){ix(n.x,e.x,t.x),ix(n.y,e.y,t.y)}function O2(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Zt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Zt(t,n,r.max):Math.min(n,t)),n}function rx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function k2(n,{top:e,left:t,bottom:r,right:o}){return{x:rx(n.x,t,o),y:rx(n.y,e,r)}}function sx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function B2(n,e){return{x:sx(n.x,e.x),y:sx(n.y,e.y)}}function V2(n,e){let t=.5;const r=si(n),o=si(e);return o>r?t=No(e.min,e.max-r,n.min):r>o&&(t=No(n.min,n.max-o,e.min)),Mr(0,1,t)}function z2(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Kh=.35;function H2(n=Kh){return n===!1?n=0:n===!0&&(n=Kh),{x:ox(n,"left","right"),y:ox(n,"top","bottom")}}function ox(n,e,t){return{min:ax(n,e),max:ax(n,t)}}function ax(n,e){return typeof n=="number"?n:n[e]||0}const lx=()=>({translate:0,scale:1,origin:0,originPoint:0}),bo=()=>({x:lx(),y:lx()}),cx=()=>({min:0,max:0}),on=()=>({x:cx(),y:cx()});function gi(n){return[n("x"),n("y")]}function Zy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function G2({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function W2(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Wf(n){return n===void 0||n===1}function Zh({scale:n,scaleX:e,scaleY:t}){return!Wf(n)||!Wf(e)||!Wf(t)}function Ts(n){return Zh(n)||Qy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Qy(n){return ux(n.x)||ux(n.y)}function ux(n){return n&&n!=="0%"}function ou(n,e,t){const r=n-t,o=e*r;return t+o}function dx(n,e,t,r,o){return o!==void 0&&(n=ou(n,o,r)),ou(n,t,r)+e}function Qh(n,e=0,t=1,r,o){n.min=dx(n.min,e,t,r,o),n.max=dx(n.max,e,t,r,o)}function Jy(n,{x:e,y:t}){Qh(n.x,e.translate,e.scale,e.originPoint),Qh(n.y,t.translate,t.scale,t.originPoint)}const fx=.999999999999,hx=1.0000000000001;function X2(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,c;for(let d=0;d<o;d++){l=t[d],c=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Co(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Jy(n,c)),r&&Ts(l.latestValues)&&Co(n,l.latestValues))}e.x<hx&&e.x>fx&&(e.x=1),e.y<hx&&e.y>fx&&(e.y=1)}function Ao(n,e){n.min=n.min+e,n.max=n.max+e}function px(n,e,t,r,o=.5){const l=Zt(n.min,n.max,o);Qh(n,e,t,l,r)}function Co(n,e){px(n.x,e.x,e.scaleX,e.scale,e.originX),px(n.y,e.y,e.scaleY,e.scale,e.originY)}function eS(n,e){return Zy(W2(n.getBoundingClientRect(),e))}function j2(n,e,t){const r=eS(n,t),{scroll:o}=e;return o&&(Ao(r.x,o.offset.x),Ao(r.y,o.offset.y)),r}const tS=({current:n})=>n?n.ownerDocument.defaultView:null,Y2=new WeakMap;class q2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=on(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(rl(g).point)},l=(g,v)=>{const{drag:m,dragPropagation:y,onDragStart:M}=this.getProps();if(m&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=VR(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gi(S=>{let _=this.getAxisMotionValue(S).get()||0;if($i.test(_)){const{projection:P}=this.visualElement;if(P&&P.layout){const U=P.layout.layoutBox[S];U&&(_=si(U)*(parseFloat(_)/100))}}this.originPoint[S]=_}),M&&Gt.postRender(()=>M(g,v)),Hh(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},c=(g,v)=>{const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:M,onDrag:T}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=$2(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),T&&T(g,v)},d=(g,v)=>this.stop(g,v),f=()=>gi(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Yy(e,{onSessionStart:o,onStart:l,onMove:c,onSessionEnd:d,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:tS(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Gt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!kc(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=O2(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&Eo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=k2(o.layoutBox,t):this.constraints=!1,this.elastic=H2(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&gi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=z2(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Eo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=j2(r,o.root,this.visualElement.getTransformPagePoint());let c=B2(o.layout.layoutBox,l);if(t){const d=t(G2(c));this.hasMutatedConstraints=!!d,d&&(c=Zy(d))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},h=gi(g=>{if(!kc(g,t,this.currentDirection))return;let v=f&&f[g]||{};c&&(v={min:0,max:0});const m=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[g]:0,bounceStiffness:m,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(g,M)});return Promise.all(h).then(d)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Hh(this.visualElement,e),r.start($p(e,r,0,t,this.visualElement,!1))}stopAnimation(){gi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){gi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){gi(t=>{const{drag:r}=this.getProps();if(!kc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:d}=o.layout.layoutBox[t];l.set(e[t]-Zt(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Eo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};gi(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const f=d.get();o[c]=V2({min:f,max:f},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),gi(c=>{if(!kc(c,e,null))return;const d=this.getAxisMotionValue(c),{min:f,max:h}=this.constraints[c];d.set(Zt(f,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;Y2.set(this.visualElement,this);const e=this.visualElement.current,t=Ba(e,"pointerdown",f=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();Eo(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Gt.read(r);const c=Ka(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(gi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=f[g].translate,v.set(v.get()+f[g].translate))}),this.visualElement.render())}));return()=>{c(),t(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:c=Kh,dragMomentum:d=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:c,dragMomentum:d}}}function kc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function $2(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class K2 extends ts{constructor(e){super(e),this.removeGroupControls=ii,this.removeListeners=ii,this.controls=new q2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ii}unmount(){this.removeGroupControls(),this.removeListeners()}}const mx=n=>(e,t)=>{n&&Gt.postRender(()=>n(e,t))};class Z2 extends ts{constructor(){super(...arguments),this.removePointerDownListener=ii}onPointerDown(e){this.session=new Yy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:mx(e),onStart:mx(t),onMove:r,onEnd:(l,c)=>{delete this.session,o&&Gt.postRender(()=>o(l,c))}}}mount(){this.removePointerDownListener=Ba(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Yc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function gx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Pa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const t=gx(n,e.target.x),r=gx(n,e.target.y);return`${t}% ${r}%`}},Q2={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=es.parse(n);if(o.length>5)return r;const l=es.createTransformer(n),c=typeof o[0]!="number"?1:0,d=t.x.scale*e.x,f=t.y.scale*e.y;o[0+c]/=d,o[1+c]/=f;const h=Zt(d,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),l(o)}};class J2 extends ye.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;_R(e3),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Yc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,c=r.projection;return c&&(c.isPresent=l,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||Gt.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ep.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nS(n){const[e,t]=k_(),r=ye.useContext(gp);return O.jsx(J2,{...n,layoutGroup:r,switchLayoutGroup:ye.useContext(j_),isPresent:e,safeToRemove:t})}const e3={borderRadius:{...Pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pa,borderTopRightRadius:Pa,borderBottomLeftRadius:Pa,borderBottomRightRadius:Pa,boxShadow:Q2};function t3(n,e,t){const r=Fn(n)?n:qa(n);return r.start($p("",r,e,t)),r.animation}function n3(n){return n instanceof SVGElement&&n.tagName!=="svg"}const i3=(n,e)=>n.depth-e.depth;class r3{constructor(){this.children=[],this.isDirty=!1}add(e){kp(this.children,e),this.isDirty=!0}remove(e){Bp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(i3),this.isDirty=!1,this.children.forEach(e)}}function s3(n,e){const t=Ki.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Jr(r),n(l-e))};return Gt.read(r,!0),()=>Jr(r)}const iS=["TopLeft","TopRight","BottomLeft","BottomRight"],o3=iS.length,vx=n=>typeof n=="string"?parseFloat(n):n,xx=n=>typeof n=="number"||st.test(n);function a3(n,e,t,r,o,l){o?(n.opacity=Zt(0,t.opacity!==void 0?t.opacity:1,l3(r)),n.opacityExit=Zt(e.opacity!==void 0?e.opacity:1,0,c3(r))):l&&(n.opacity=Zt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let c=0;c<o3;c++){const d=`border${iS[c]}Radius`;let f=_x(e,d),h=_x(t,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||xx(f)===xx(h)?(n[d]=Math.max(Zt(vx(f),vx(h),r),0),($i.test(h)||$i.test(f))&&(n[d]+="%")):n[d]=h}(e.rotate||t.rotate)&&(n.rotate=Zt(e.rotate||0,t.rotate||0,r))}function _x(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const l3=rS(0,.5,My),c3=rS(.5,.95,ii);function rS(n,e,t){return r=>r<n?0:r>e?1:t(No(n,e,r))}function yx(n,e){n.min=e.min,n.max=e.max}function mi(n,e){yx(n.x,e.x),yx(n.y,e.y)}function Sx(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Mx(n,e,t,r,o){return n-=e,n=ou(n,1/t,r),o!==void 0&&(n=ou(n,1/o,r)),n}function u3(n,e=0,t=1,r=.5,o,l=n,c=n){if($i.test(e)&&(e=parseFloat(e),e=Zt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let d=Zt(l.min,l.max,r);n===l&&(d-=e),n.min=Mx(n.min,e,t,d,o),n.max=Mx(n.max,e,t,d,o)}function wx(n,e,[t,r,o],l,c){u3(n,e[t],e[r],e[o],e.scale,l,c)}const d3=["x","scaleX","originX"],f3=["y","scaleY","originY"];function Ex(n,e,t,r){wx(n.x,e,d3,t?t.x:void 0,r?r.x:void 0),wx(n.y,e,f3,t?t.y:void 0,r?r.y:void 0)}function Tx(n){return n.translate===0&&n.scale===1}function sS(n){return Tx(n.x)&&Tx(n.y)}function bx(n,e){return n.min===e.min&&n.max===e.max}function h3(n,e){return bx(n.x,e.x)&&bx(n.y,e.y)}function Ax(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function oS(n,e){return Ax(n.x,e.x)&&Ax(n.y,e.y)}function Cx(n){return si(n.x)/si(n.y)}function Rx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class p3{constructor(){this.members=[]}add(e){kp(this.members,e),e.scheduleRender()}remove(e){if(Bp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function m3(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||l||c)&&(r=`translate3d(${o}px, ${l}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:g,rotateX:v,rotateY:m,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),g&&(r+=`rotate(${g}deg) `),v&&(r+=`rotateX(${v}deg) `),m&&(r+=`rotateY(${m}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const d=n.x.scale*e.x,f=n.y.scale*e.y;return(d!==1||f!==1)&&(r+=`scale(${d}, ${f})`),r||"none"}const bs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ua=typeof window<"u"&&window.MotionDebug!==void 0,Xf=["","X","Y","Z"],g3={visibility:"hidden"},Px=1e3;let v3=0;function jf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function aS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=my(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Gt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&aS(r)}function lS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},d=e==null?void 0:e()){this.id=v3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ua&&(bs.totalNodes=bs.resolvedTargetDeltas=bs.recalculatedProjection=0),this.nodes.forEach(y3),this.nodes.forEach(T3),this.nodes.forEach(b3),this.nodes.forEach(S3),Ua&&window.MotionDebug.record(bs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new r3)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Vp),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const f=this.eventHandlers.get(c);f&&f.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=n3(c),this.instance=c;const{layoutId:f,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(h||f)&&(this.isLayoutDirty=!0),n){let v;const m=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=s3(m,250),Yc.hasAnimatedSinceResize&&(Yc.hasAnimatedSinceResize=!1,this.nodes.forEach(Dx))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||g.getDefaultTransition()||L3,{onLayoutAnimationStart:S,onLayoutAnimationComplete:_}=g.getProps(),P=!this.targetLayout||!oS(this.targetLayout,M)||y,U=!m&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||U||m&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,U);const C={...Ip(T,"layout"),onPlay:S,onComplete:_};(g.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else m||Dx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Jr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(A3),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&aS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lx);return}this.isUpdating||this.nodes.forEach(w3),this.isUpdating=!1,this.nodes.forEach(E3),this.nodes.forEach(x3),this.nodes.forEach(_3),this.clearAllSnapshots();const d=Ki.now();En.delta=Mr(0,1e3/60,d-En.timestamp),En.timestamp=d,En.isProcessing=!0,Ff.update.process(En),Ff.preRender.process(En),Ff.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ep.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(M3),this.sharedNodes.forEach(C3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=on(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!sS(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;c&&(d||Ts(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return c&&(f=this.removeTransform(f)),D3(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:d}=this.options;if(!d)return on();const f=d.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(N3))){const{scroll:g}=this.root;g&&(Ao(f.x,g.offset.x),Ao(f.y,g.offset.y))}return f}removeElementScroll(c){var d;const f=on();if(mi(f,c),!((d=this.scroll)===null||d===void 0)&&d.wasRoot)return f;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:v,options:m}=g;g!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&mi(f,c),Ao(f.x,v.offset.x),Ao(f.y,v.offset.y))}return f}applyTransform(c,d=!1){const f=on();mi(f,c);for(let h=0;h<this.path.length;h++){const g=this.path[h];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Co(f,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ts(g.latestValues)&&Co(f,g.latestValues)}return Ts(this.latestValues)&&Co(f,this.latestValues),f}removeTransform(c){const d=on();mi(d,c);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!Ts(h.latestValues))continue;Zh(h.latestValues)&&h.updateSnapshot();const g=on(),v=h.measurePageBox();mi(g,v),Ex(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Ts(this.latestValues)&&Ex(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var d;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=En.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),za(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=on(),this.targetWithTransforms=on()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),F2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):mi(this.target,this.layout.layoutBox),Jy(this.target,this.targetDelta)):mi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),za(this.relativeTargetOrigin,this.target,y.target),mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ua&&bs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zh(this.parent.latestValues)||Qy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const d=this.getLead(),f=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===En.timestamp&&(h=!1),h)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;mi(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,y=this.treeScale.y;X2(this.layoutCorrected,this.treeScale,this.path,f),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=on());const{target:M}=d;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sx(this.prevProjectionDelta.x,this.projectionDelta.x),Sx(this.prevProjectionDelta.y,this.projectionDelta.y)),Va(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==y||!Rx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Rx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ua&&bs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)===null||d===void 0||d.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=bo(),this.projectionDelta=bo(),this.projectionDeltaWithTransform=bo()}setAnimationOrigin(c,d=!1){const f=this.snapshot,h=f?f.latestValues:{},g={...this.latestValues},v=bo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const m=on(),y=f?f.source:void 0,M=this.layout?this.layout.source:void 0,T=y!==M,S=this.getStack(),_=!S||S.members.length<=1,P=!!(T&&!_&&this.options.crossfade===!0&&!this.path.some(P3));this.animationProgress=0;let U;this.mixTargetDelta=C=>{const R=C/1e3;Nx(v.x,c.x,R),Nx(v.y,c.y,R),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(za(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),R3(this.relativeTarget,this.relativeTargetOrigin,m,R),U&&h3(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=on()),mi(U,this.relativeTarget)),T&&(this.animationValues=g,a3(g,h,this.latestValues,R,P,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Jr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Gt.update(()=>{Yc.hasAnimatedSinceResize=!0,this.currentAnimation=t3(0,Px,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Px),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:f,layout:h,latestValues:g}=c;if(!(!d||!f||!h)){if(this!==c&&this.layout&&h&&cS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||on();const v=si(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+v;const m=si(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+m}mi(d,f),Co(d,g),Va(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new p3),this.sharedNodes.get(c).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:d}=this.options;return d?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:d}=this.options;return d?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const h={};f.z&&jf("z",c,h,this.animationValues);for(let g=0;g<Xf.length;g++)jf(`rotate${Xf[g]}`,c,h,this.animationValues),jf(`skew${Xf[g]}`,c,h,this.animationValues);c.render();for(const g in h)c.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);c.scheduleRender()}getProjectionStyles(c){var d,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return g3;const h={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Xc(c==null?void 0:c.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Xc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Ts(this.latestValues)&&(T.transform=g?g({},""):"none",this.hasProjected=!1),T}const m=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=m3(this.projectionDeltaWithTransform,this.treeScale,m),g&&(h.transform=g(m,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(f=(d=m.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:h.opacity=v===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const T in tu){if(m[T]===void 0)continue;const{correct:S,applyTo:_}=tu[T],P=h.transform==="none"?m[T]:S(m[T],v);if(_){const U=_.length;for(let C=0;C<U;C++)h[_[C]]=P}else h[T]=P}return this.options.layoutId&&(h.pointerEvents=v===this?Xc(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(Lx),this.root.sharedNodes.clear()}}}function x3(n){n.updateLayout()}function _3(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,c=t.source!==n.layout.source;l==="size"?gi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],y=si(m);m.min=r[v].min,m.max=m.min+y}):cS(l,t.layoutBox,r)&&gi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],y=si(r[v]);m.max=m.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const d=bo();Va(d,r,t.layoutBox);const f=bo();c?Va(f,n.applyTransform(o,!0),t.measuredBox):Va(f,r,t.layoutBox);const h=!sS(d);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:y}=v;if(m&&y){const M=on();za(M,t.layoutBox,m.layoutBox);const T=on();za(T,r,y.layoutBox),oS(M,T)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:f,layoutDelta:d,hasLayoutChanged:h,hasRelativeTargetChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function y3(n){Ua&&bs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function S3(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function M3(n){n.clearSnapshot()}function Lx(n){n.clearMeasurements()}function w3(n){n.isLayoutDirty=!1}function E3(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Dx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function T3(n){n.resolveTargetDelta()}function b3(n){n.calcProjection()}function A3(n){n.resetSkewAndRotation()}function C3(n){n.removeLeadSnapshot()}function Nx(n,e,t){n.translate=Zt(e.translate,0,t),n.scale=Zt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Ix(n,e,t,r){n.min=Zt(e.min,t.min,r),n.max=Zt(e.max,t.max,r)}function R3(n,e,t,r){Ix(n.x,e.x,t.x,r),Ix(n.y,e.y,t.y,r)}function P3(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const L3={duration:.45,ease:[.4,0,.1,1]},Ux=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Fx=Ux("applewebkit/")&&!Ux("chrome/")?Math.round:ii;function Ox(n){n.min=Fx(n.min),n.max=Fx(n.max)}function D3(n){Ox(n.x),Ox(n.y)}function cS(n,e,t){return n==="position"||n==="preserve-aspect"&&!U2(Cx(e),Cx(t),.2)}function N3(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const I3=lS({attachResizeListener:(n,e)=>Ka(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yf={current:void 0},uS=lS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Yf.current){const n=new I3({});n.mount(window),n.setOptions({layoutScroll:!0}),Yf.current=n}return Yf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),U3={pan:{Feature:Z2},drag:{Feature:K2,ProjectionNode:uS,MeasureLayout:nS}};function kx(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Gt.postRender(()=>l(e,rl(e)))}class F3 extends ts{mount(){const{current:e}=this.node;e&&(this.unmount=UR(e,t=>(kx(this.node,t,"Start"),r=>kx(this.node,r,"End"))))}unmount(){}}class O3 extends ts{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=il(Ka(this.node.current,"focus",()=>this.onFocus()),Ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Bx(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Gt.postRender(()=>l(e,rl(e)))}class k3 extends ts{mount(){const{current:e}=this.node;e&&(this.unmount=BR(e,t=>(Bx(this.node,t,"Start"),(r,{success:o})=>Bx(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Jh=new WeakMap,qf=new WeakMap,B3=n=>{const e=Jh.get(n.target);e&&e(n)},V3=n=>{n.forEach(B3)};function z3({root:n,...e}){const t=n||document;qf.has(t)||qf.set(t,{});const r=qf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(V3,{root:n,...e})),r[o]}function H3(n,e,t){const r=z3(e);return Jh.set(n,t),r.observe(n),()=>{Jh.delete(n),r.unobserve(n)}}const G3={some:0,all:1};class W3 extends ts{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:G3[o]},d=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),m=h?g:v;m&&m(f)};return H3(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(X3(e,t))&&this.startObserver()}unmount(){}}function X3({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const j3={inView:{Feature:W3},tap:{Feature:k3},focus:{Feature:O3},hover:{Feature:F3}},Y3={layout:{ProjectionNode:uS,MeasureLayout:nS}},ep={current:null},dS={current:!1};function q3(){if(dS.current=!0,!!_p)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>ep.current=n.matches;n.addListener(e),e()}else ep.current=!1}const $3=[...Fy,In,es],K3=n=>$3.find(Uy(n)),Vx=new WeakMap;function Z3(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Fn(o))n.addValue(r,o);else if(Fn(l))n.addValue(r,qa(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,qa(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const zx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Q3{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Ki.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Gt.render(this.render,!1,!0))};const{latestValues:f,renderState:h,onUpdate:g}=c;this.onUpdate=g,this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=xu(t),this.isVariantNode=W_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in m){const M=m[y];f[y]!==void 0&&Fn(M)&&M.set(f[y],!1)}}mount(e){this.current=e,Vx.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),dS.current||q3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ep.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Vx.delete(this.current),this.projection&&this.projection.unmount(),Jr(this.notifyUpdate),Jr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Fs.has(e),o=t.on("change",d=>{this.latestValues[e]=d,this.props.onUpdate&&Gt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Io){const t=Io[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):on()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<zx.length;r++){const o=zx[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,c=e[l];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=Z3(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=qa(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Ny(o)||Ey(o))?o=parseFloat(o):!K3(o)&&es.test(t)&&(o=Py(e,t)),this.setBaseTarget(e,Fn(o)?o.get():o)),Fn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const c=bp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Fn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Vp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class fS extends Q3{constructor(){super(...arguments),this.KeyframeResolver=Oy}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Fn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function J3(n){return window.getComputedStyle(n)}class eL extends fS{constructor(){super(...arguments),this.type="html",this.renderInstance=J_}readValueFromInstance(e,t){if(Fs.has(t)){const r=Xp(t);return r&&r.default||0}else{const r=J3(e),o=(K_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return eS(e,t)}build(e,t,r){Rp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Np(e,t,r)}}class tL extends fS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=on}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Fs.has(t)){const r=Xp(t);return r&&r.default||0}return t=ey.has(t)?t:wp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return iy(e,t,r)}build(e,t,r){Pp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){ty(e,t,r,o)}mount(e){this.isSVGTag=Dp(e.tagName),super.mount(e)}}const nL=(n,e)=>Tp(n)?new tL(e):new eL(e,{allowProjection:n!==ye.Fragment}),iL=CR({...b2,...j3,...U3,...Y3},nL),Bt=GC(iL);var Hx="1.3.26";function hS(n,e,t){return Math.max(n,Math.min(e,t))}function rL(n,e,t){return(1-t)*n+t*e}function sL(n,e,t,r){return rL(n,e,1-Math.exp(-t*r))}function oL(n,e){return(n%e+e)%e}var aL=class{constructor(){Qe(this,"isRunning",!1);Qe(this,"value",0);Qe(this,"from",0);Qe(this,"to",0);Qe(this,"currentTime",0);Qe(this,"lerp");Qe(this,"duration");Qe(this,"easing");Qe(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const r=hS(0,this.currentTime/this.duration,1);e=r>=1;const o=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=sL(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:r,easing:o,onStart:l,onUpdate:c}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,l==null||l(),this.onUpdate=c}};function lL(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,r)},e)}}var cL=class{constructor(n,e,{autoResize:t=!0,debounce:r=250}={}){Qe(this,"width",0);Qe(this,"height",0);Qe(this,"scrollHeight",0);Qe(this,"scrollWidth",0);Qe(this,"debouncedResize");Qe(this,"wrapperResizeObserver");Qe(this,"contentResizeObserver");Qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=lL(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},pS=class{constructor(){Qe(this,"events",{})}emit(n,...e){var r;const t=this.events[n]||[];for(let o=0,l=t.length;o<l;o++)(r=t[o])==null||r.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(r=>e!==r)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}};const uL=100/6,jr={passive:!1};function Gx(n,e){return n===1?uL:n===2?e:1}var dL=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Qe(this,"touchStart",{x:0,y:0});Qe(this,"lastDelta",{x:0,y:0});Qe(this,"window",{width:0,height:0});Qe(this,"emitter",new pS);Qe(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Qe(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,r=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:o},this.emitter.emit("scroll",{deltaX:r,deltaY:o,event:n})});Qe(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Qe(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:r}=n;const o=Gx(r,this.window.width),l=Gx(r,this.window.height);e*=o,t*=l,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,jr),this.element.addEventListener("touchstart",this.onTouchStart,jr),this.element.addEventListener("touchmove",this.onTouchMove,jr),this.element.addEventListener("touchend",this.onTouchEnd,jr)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,jr),this.element.removeEventListener("touchstart",this.onTouchStart,jr),this.element.removeEventListener("touchmove",this.onTouchMove,jr),this.element.removeEventListener("touchend",this.onTouchEnd,jr)}};const Wx=n=>Math.min(1,1.001-2**(-10*n));var fL=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:l=.075,touchInertiaExponent:c=1.7,duration:d,easing:f,lerp:h=.1,infinite:g=!1,orientation:v="vertical",gestureOrientation:m=v==="horizontal"?"both":"vertical",touchMultiplier:y=1,wheelMultiplier:M=1,autoResize:T=!0,prevent:S,virtualScroll:_,overscroll:P=!0,autoRaf:U=!1,anchors:C=!1,autoToggle:R=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:F=!1,naiveDimensions:E=F,stopInertiaOnNavigate:D=!1,respectReducedMotion:B=!0}={}){Qe(this,"_isScrolling",!1);Qe(this,"_isStopped",!1);Qe(this,"_isLocked",!1);Qe(this,"_preventNextNativeScrollEvent",!1);Qe(this,"_resetVelocityTimeout",null);Qe(this,"_rafId",null);Qe(this,"_isDraggingSelection",!1);Qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Qe(this,"isTouching");Qe(this,"isIos");Qe(this,"time",0);Qe(this,"userData",{});Qe(this,"lastVelocity",0);Qe(this,"velocity",0);Qe(this,"direction",0);Qe(this,"options");Qe(this,"targetScroll");Qe(this,"animatedScroll");Qe(this,"animate",new aL);Qe(this,"emitter",new pS);Qe(this,"dimensions");Qe(this,"virtualScroll");Qe(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Qe(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Qe(this,"onClick",n=>{const e=n.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),t=new URL(window.location.href);if(this.options.anchors){const r=e.find(o=>t.host===o.host&&t.pathname===o.pathname&&o.hash);if(r){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=decodeURIComponent(r.hash);this.scrollTo(l,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(r=>t.host===r.host&&t.pathname!==r.pathname)){this.reset();return}});Qe(this,"onPointerDown",n=>{n.button===1&&this.reset()});Qe(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:r}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const o=r.type.includes("touch"),l=r.type.includes("wheel");if(o&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const c=e===0&&t===0;if(this.options.syncTouch&&o&&r.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(c||d)return;let f=r.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const h=this.options.prevent,g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(f.find(M=>{var T,S,_,P,U;return M instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(M))||((T=M.hasAttribute)==null?void 0:T.call(M,"data-lenis-prevent"))||g==="vertical"&&((S=M.hasAttribute)==null?void 0:S.call(M,"data-lenis-prevent-vertical"))||g==="horizontal"&&((_=M.hasAttribute)==null?void 0:_.call(M,"data-lenis-prevent-horizontal"))||o&&((P=M.hasAttribute)==null?void 0:P.call(M,"data-lenis-prevent-touch"))||l&&((U=M.hasAttribute)==null?void 0:U.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&l)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let v=t;this.options.gestureOrientation==="both"?v=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const m=o&&this.options.syncTouch,y=o&&r.type==="touchend";y&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...m?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Qe(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Hx,window.lenis||(window.lenis={}),window.lenis.version=Hx,v==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof d=="number"&&typeof f!="function"?f=Wx:typeof f=="function"&&typeof d!="number"&&(d=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:r,syncTouch:o,syncTouchLerp:l,touchInertiaExponent:c,duration:d,easing:f,lerp:h,infinite:g,gestureOrientation:m,orientation:v,touchMultiplier:y,wheelMultiplier:M,autoResize:T,prevent:S,virtualScroll:_,overscroll:P,autoRaf:U,anchors:C,autoToggle:R,allowNestedScroll:L,naiveDimensions:E,stopInertiaOnNavigate:D,respectReducedMotion:B},this.dimensions=new cL(n,e,{autoResize:T}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new dL(t,{touchMultiplier:y,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const o=r[0],l=r[r.length-1],c=40,d=Math.hypot(t.clientX-o.left,t.clientY-o.top)<=c,f=Math.hypot(t.clientX-l.right,t.clientY-l.bottom)<=c;return d||f}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:r=!1,programmatic:o=!0,lerp:l=o?this.options.lerp:void 0,duration:c=o?this.options.duration:void 0,easing:d=o?this.options.easing:void 0,onStart:f,onComplete:h,force:g=!1,userData:v}={}){if(this.prefersReducedMotion&&(o?t=!0:(l=1,c=void 0,d=void 0)),(this.isStopped||this.isLocked)&&!g)return;let m=n,y=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let M=null;if(typeof m=="string"?(M=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),M||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(M=m),M){if(this.options.wrapper!==window){const C=this.rootElement.getBoundingClientRect();y-=this.isHorizontal?C.left:C.top}const T=M.getBoundingClientRect(),S=getComputedStyle(M),_=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),P=getComputedStyle(this.rootElement),U=this.isHorizontal?Number.parseFloat(P.scrollPaddingLeft):Number.parseFloat(P.scrollPaddingTop);m=(this.isHorizontal?T.left:T.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(U)?0:U)}}if(typeof m=="number"){if(m+=y,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const M=m-this.animatedScroll;M>this.limit/2?m-=this.limit:M<-this.limit/2&&(m+=this.limit)}}else m=hS(0,m,this.limit);if(m===this.targetScroll){f==null||f(this),h==null||h(this);return}if(this.userData=v??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=m),typeof c=="number"&&typeof d!="function"?d=Wx:typeof d=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,m,{duration:c,easing:d,lerp:l,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(M,T)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),o&&(this.targetScroll=M),T||this.emit(),T&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const r=Date.now();n._lenis||(n._lenis={});const o=n._lenis;let l,c,d,f,h,g,v,m,y,M;if(r-(o.time??0)>2e3){o.time=Date.now();const L=window.getComputedStyle(n);if(o.computedStyle=L,l=["auto","overlay","scroll"].includes(L.overflowX),c=["auto","overlay","scroll"].includes(L.overflowY),h=["auto"].includes(L.overscrollBehaviorX),g=["auto"].includes(L.overscrollBehaviorY),o.hasOverflowX=l,o.hasOverflowY=c,!(l||c))return!1;v=n.scrollWidth,m=n.scrollHeight,y=n.clientWidth,M=n.clientHeight,d=v>y,f=m>M,o.isScrollableX=d,o.isScrollableY=f,o.scrollWidth=v,o.scrollHeight=m,o.clientWidth=y,o.clientHeight=M,o.hasOverscrollBehaviorX=h,o.hasOverscrollBehaviorY=g}else d=o.isScrollableX,f=o.isScrollableY,l=o.hasOverflowX,c=o.hasOverflowY,v=o.scrollWidth,m=o.scrollHeight,y=o.clientWidth,M=o.clientHeight,h=o.hasOverscrollBehaviorX,g=o.hasOverscrollBehaviorY;if(!(l&&d||c&&f))return!1;const T=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let S,_,P,U,C,R;if(T==="horizontal")S=Math.round(n.scrollLeft),_=v-y,P=e,U=l,C=d,R=h;else if(T==="vertical")S=Math.round(n.scrollTop),_=m-M,P=t,U=c,C=f,R=g;else return!1;return!R&&(S>=_||S<=0)?!0:(P>0?S<_:S>0)&&U&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?oL(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}},hL=class{constructor(n){Qe(this,"listeners",[]);this.state=n}set(n){this.state=n;for(const e of this.listeners)e(this.state)}subscribe(n){return this.listeners=[...this.listeners,n],()=>{this.listeners=this.listeners.filter(e=>e!==n)}}get(){return this.state}};const pL=ye.createContext(null),Xx=new hL(null),mL=ye.forwardRef(({children:n,root:e=!1,options:t={},autoRaf:r=!0,className:o="",...l},c)=>{const d=ye.useRef(null),f=ye.useRef(null),[h,g]=ye.useState(void 0);ye.useImperativeHandle(c,()=>({wrapper:d.current,content:f.current,lenis:h}),[h]),ye.useEffect(()=>{const M=new fL({...t,...d.current&&f.current&&{wrapper:d.current,content:f.current},autoRaf:(t==null?void 0:t.autoRaf)??r});return g(M),()=>{M.destroy(),g(void 0)}},[r,JSON.stringify({...t,wrapper:null,content:null})]);const v=ye.useRef([]),m=ye.useCallback((M,T)=>{v.current.push({callback:M,priority:T}),v.current.sort((S,_)=>S.priority-_.priority)},[]),y=ye.useCallback(M=>{v.current=v.current.filter(T=>T.callback!==M)},[]);return ye.useEffect(()=>{if(e&&h)return Xx.set({lenis:h,addCallback:m,removeCallback:y}),()=>Xx.set(null)},[e,h,m,y]),ye.useEffect(()=>{if(!h)return;const M=T=>{for(const{callback:S}of v.current)S(T)};return h.on("scroll",M),()=>{h.off("scroll",M)}},[h]),n?O.jsx(pL.Provider,{value:{lenis:h,addCallback:m,removeCallback:y},children:e&&e!=="asChild"?n:O.jsx("div",{ref:d,className:`${o} ${(h==null?void 0:h.className)??""}`.trim(),...l,children:O.jsx("div",{ref:f,children:n})})}):null});function gL({children:n}){return ye.useEffect(()=>{const e=new Audio("/assets/interstellar.mp3");e.loop=!0,e.volume=.35;const t=()=>{e.paused&&e.play().catch(()=>{})};return window.addEventListener("click",t,{once:!0}),window.addEventListener("scroll",t,{once:!0}),()=>{e.pause(),window.removeEventListener("click",t),window.removeEventListener("scroll",t)}},[]),O.jsx(mL,{root:!0,options:{lerp:.08,smoothWheel:!0,infinite:!1},children:O.jsx("div",{className:"relative w-full bg-transparent text-white",children:O.jsx("div",{className:"relative z-20 w-full bg-transparent",children:n})})})}var mS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jx=Qr.createContext&&Qr.createContext(mS),vL=["attr","size","title"];function xL(n,e){if(n==null)return{};var t,r,o=_L(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function _L(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}function au(){return au=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},au.apply(null,arguments)}function Yx(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function lu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Yx(Object(t),!0).forEach(function(r){yL(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Yx(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function yL(n,e,t){return(e=SL(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function SL(n){var e=ML(n,"string");return typeof e=="symbol"?e:e+""}function ML(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function gS(n){return n&&n.map((e,t)=>Qr.createElement(e.tag,lu({key:t},e.attr),gS(e.child)))}function bn(n){return e=>Qr.createElement(wL,au({attr:lu({},n.attr)},e),gS(n.child))}function wL(n){var e=t=>{var{attr:r,size:o,title:l}=n,c=xL(n,vL),d=o||t.size||"1em",f;return t.className&&(f=t.className),n.className&&(f=(f?f+" ":"")+n.className),Qr.createElement("svg",au({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:f,style:lu(lu({color:n.color||t.color},t.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&Qr.createElement("title",null,l),n.children)};return jx!==void 0?Qr.createElement(jx.Consumer,null,t=>e(t)):e(mS)}function Kp(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(n)}function vS(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(n)}function EL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(n)}function xS(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"},child:[]}]})(n)}function qx(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(n)}function _S(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(n)}function yS(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(n)}function TL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(n)}function bL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(n)}function SS(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(n)}function MS(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(n)}function Zp(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(n)}function AL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(n)}function CL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(n)}function RL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(n)}function PL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(n)}function LL(n){return bn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(n)}const DL=["AI/ML Engineer","Full-Stack Developer","AI Architect"],NL=[{label:"LinkedIn",href:"https://www.linkedin.com/in/himanshsharmaa"},{label:"GitHub",href:"https://github.com/himanshsharmaa"},{label:"Instagram",href:"https://www.instagram.com/himanshsharmaa"},{label:"X",href:"https://x.com/himanshsharmaa_"}],IL=[{label:"Years Experience",value:"3+"},{label:"Projects Built",value:"5+"},{label:"Certifications",value:"5"}],Zr={whatsapp:"https://wa.me/917678609018?text=Hi%20Himansh%2C%20I%20came%20from%20your%20developer%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",linkedin:"https://www.linkedin.com/in/himanshsharmaa",github:"https://github.com/himanshsharmaa",email:"himanshsharma046@gmail.com"},tp=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];function UL({activeSection:n,mobileMenuOpen:e,onToggleMobileMenu:t,onNavigate:r}){return O.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 bg-black/100 backdrop-blur-2xl border-b border-white/10",children:[O.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",children:[O.jsxs("a",{href:"#intro",onClick:o=>r(o,"#intro"),className:"group inline-flex items-center gap-3 text-sm font-bold tracking-[0.28em] text-white",children:[O.jsx("span",{className:"font-['Inter'] inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.05] text-gray-200 shadow-[0_0_40px_rgba(255,255,255,0.12)] transition group-hover:border-white/30 group-hover:bg-white/10",children:"HS"}),O.jsx("span",{className:"font-['Inter'] hidden text-gray-300 sm:inline",children:"HIMANSH SHARMA"})]}),O.jsx("nav",{className:"hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 backdrop-blur-md lg:flex",children:tp.map(o=>{const l=n===o.href.slice(1);return O.jsxs("a",{href:o.href,onClick:c=>r(c,o.href),className:`relative rounded-full px-4 py-2 text-sm font-medium transition ${l?"text-white":"text-gray-300 hover:text-white"}`,children:[l?O.jsx(Bt.span,{layoutId:"nav-pill",className:"absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20",transition:{type:"spring",stiffness:500,damping:40}}):null,O.jsx("span",{className:"font-['Inter'] relative z-10",children:o.label})]},o.href)})}),O.jsx("button",{type:"button",onClick:t,className:"font-['Inter'] inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white lg:hidden","aria-label":"Toggle navigation","aria-expanded":e,children:e?O.jsx(vS,{className:"h-5 w-5"}):O.jsx(TL,{className:"h-5 w-5"})})]}),O.jsx(Bt.div,{initial:!1,animate:e?{height:"auto",opacity:1}:{height:0,opacity:0},transition:{duration:.28,ease:"easeOut"},className:"overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl lg:hidden",children:O.jsx("div",{className:"mx-auto max-w-7xl px-4 py-4 sm:px-6",children:O.jsx("div",{className:"grid gap-2 rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md",children:tp.map(o=>{const l=n===o.href.slice(1);return O.jsx("a",{href:o.href,onClick:c=>r(c,o.href),className:`font-['Inter'] rounded-2xl px-4 py-3 text-sm font-medium transition ${l?"bg-white/10 text-white ring-1 ring-white/20":"text-gray-300 hover:bg-white/10 hover:text-white"}`,children:o.label},o.href)})})})})]})}const np=[{title:"Aura",subtitle:"Desktop Companion AI",problem:"Most desktop assistants feel mechanical and forgetful, which breaks trust and reduces daily use.",description:"Aura is a human-like AI companion that interacts naturally through voice, adapts to emotions, and evolves with the user. Powered by Whisper, Llama 2, Edge-TTS, and DeepFace for real-time speech recognition and expressive responses.",impact:"An experimental product with a strong personality and a clear AI product direction.",stack:["Python","Whisper","Llama 2","Edge-TTS","DeepFace","TensorFlow"],image:"/aura-preview.svg",githubUrl:"https://github.com/himanshsharmaa",demoUrl:null},{title:"Examify",subtitle:"Online Examination Portal",problem:"Educational teams needed a single place to manage classes, exams, and results without bouncing between tools.",description:"Built to emulate key features of Google Classroom, it offers seamless login, class joining via code, exam management, result processing, and user roles (RBAC).",impact:"Built to feel like a practical classroom operating system rather than a feature dump. Automated workflows drove a 70% increase in administrative efficiency.",stack:["PHP","MySQL","JavaScript","Tailwind CSS"],image:"/images/project/Examify.png",githubUrl:"https://github.com/himanshsharmaa/Examify?tab=readme-ov-file#-examify",demoUrl:"https://github.com/himanshsharmaa/Examify?tab=readme-ov-file#-examify"},{title:"Keplor",subtitle:"AI SaaS",problem:"Early-stage software companies need a crisp identity, quick launch velocity, and a path toward scalable AI products.",description:"Keplor is an AI SaaS company concept focused on intelligent, scalable, cloud-native software for creators, learners, and businesses.",impact:"A founder project that shows product thinking beyond code delivery.",stack:["React","Next.js","Tailwind CSS","Shadcn UI","Framer Motion","Vercel"],image:"/keplor.png"},{title:"DOT SHIP",subtitle:"Logistics Management Platform",problem:"Logistics platforms require flexible schema design and rapid data retrieval for real-time tracking.",description:"Built a comprehensive logistics platform facilitating real-time tracking and database management using MongoDB.",impact:"Delivered a robust architecture for real-time logistics tracking and management.",stack:["PHP","MongoDB","HTML5","CSS3","JavaScript"],image:"/images/project/project-image.png",githubUrl:"https://github.com/himanshsharmaa",demoUrl:null}],wS=[{title:"Frontend",items:["React","Tailwind CSS","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","jQuery"]},{title:"Backend",items:["Python","Node.js","PHP","Express.js","REST APIs"]},{title:"Databases",items:["MySQL","MongoDB","SQLite"]},{title:"AI / ML",items:["TensorFlow","Keras","OpenCV","NumPy","Pandas","Scikit-learn","CNN","NLP","Computer Vision","YOLOv8","RAG","LLMs"]},{title:"Tools",items:["Git","GitHub","VS Code","Postman","Figma","Linux","JSON","AWS","IBM Cloud"]}],Fa=[{id:"experience",label:"Experience",items:[{year:"Feb 2026 - Jul 2026",title:"AI Software Intern",company:"ASTRA AI",description:"Selected to contribute to AI-driven software solutions. Engineered object detection pipelines, fine-tuning YOLOv8 models to identify traffic vulnerabilities. Optimized inference speed by 20%."},{year:"Aug 2025 - Dec 2025",title:"Contributor",company:"GirlScript Summer of Code",description:"Contributed to open-source projects."},{year:"Jul 2025 - Aug 2025",title:"AI & Cloud Intern",company:"IBM / Edunet Foundation",description:"Selected for the prestigious AICTE IBM AI and Cloud Internship. Architected an AI conversational agent using the IBM Granite foundation model, reducing simulated query resolution time by 35%."},{year:"May 2025 - May 2026",title:"Media Team Co-Head",company:"GeeksforGeeks IKGPTU",description:"Directed digital PR campaigns and produced high-retention motion graphics, scaling organic social media engagement by 45%. Contributed to community events and workshops."},{year:"2024 - Present",title:"Founder",company:"Keplor",description:"Leading product direction and execution for AI-first software solutions focused on practical user outcomes."},{year:"2023",title:"Freelance Dev",company:"Self-Employed",description:"Built and deployed billing and student management systems using Python, HTML, CSS, JavaScript, PHP, and SQL."}]},{id:"education",label:"Education",items:[{year:"Jul 2024 - Dec 2027",title:"B.Tech, Computer Science",company:"I. K. Gujral Punjab Technical University (IKGPTU)",description:"Grade: 7.5. Focusing on AI, Machine Learning, and software development."},{year:"Oct 2021 - Jul 2024",title:"Diploma, Computer Engineering",company:"Government Polytechnic Nilokheri",description:"Grade: 8. Led a team project on Web Platform Development."}]},{id:"certifications",label:"Certifications",items:[{year:"Jul 2025",title:"Artificial Intelligence",company:"IBM",description:""},{year:"Jul 2025",title:"Cloud Computing",company:"IBM",description:""},{year:"Dec 2024",title:"AWS Educate Machine Learning Foundations",company:"Amazon Web Services (AWS)",description:""},{year:"Dec 2024",title:"AWS APAC - Solutions Architecture Job Simulation",company:"Amazon Web Services (AWS)",description:""},{year:"Aug 2023",title:"Programming in C and Python",company:"Delhi Institute of Computer Sciences - DICS",description:""}]}],FL=["What services does Himansh offer?","Show me featured projects","What is his tech stack?","How can I contact him?"];function Yr(n,e){const t=n.toLowerCase().replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),r=l=>l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=(l,c)=>{const d=Array.from({length:l.length+1},(f,h)=>[h]);for(let f=0;f<=c.length;f++)d[0][f]=f;for(let f=1;f<=l.length;f++)for(let h=1;h<=c.length;h++){const g=l[f-1]===c[h-1]?0:1;d[f][h]=Math.min(d[f-1][h]+1,d[f][h-1]+1,d[f-1][h-1]+g)}return d[l.length][c.length]};return e.some(l=>{const c=l.toLowerCase().trim();return c?c.includes(" ")?t.includes(c):new RegExp(`\\b${r(c)}\\b`).test(t)?!0:t.split(" ").some(f=>o(f,c)<=1):!1})}function OL(){const n=Fa.find(e=>e.id==="experience");return n?n.items.slice(0,2):[]}function kL(n){const e=n.toLowerCase().trim(),t=e.replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),r=t?t.split(" ").length:0;if(!e)return{text:"Ask me anything about Himansh: projects, skills, experience, or how to work together."};if(r<=4&&Yr(t,["hello","hi","hey"]))return{text:"Hi! I am Himansh's portfolio assistant. I can help you explore projects, skills, experience, and contact options."};if(Yr(e,["service","hire","work with","collaboration","freelance"]))return{text:"Himansh works on full-stack product development, AI-powered features, and end-to-end web applications for startups and teams.",actions:[{label:"View Projects",href:"#projects",external:!1},{label:"Contact Himansh",href:"#contact",external:!1}]};if(Yr(e,["project","portfolio","case study"]))return{text:`Here are featured projects:
${np.slice(0,3).map(c=>`- ${c.title}: ${c.subtitle}`).join(`
`)}`,actions:[{label:"Go To Projects",href:"#projects",external:!1},{label:"GitHub Profile",href:Zr.github,external:!0}]};const o=np.find(l=>Yr(l.title,[e]));if(o)return{text:`**${o.title}**
${o.description}

Stack: ${o.stack.join(", ")}`,actions:[{label:"View Demo",href:o.demoUrl??"#",external:!0},{label:"GitHub",href:o.githubUrl,external:!0}]};if(Yr(e,["skill","stack","technology","tech"]))return{text:`Core stack overview:
${wS.slice(0,3).map(c=>`${c.title}: ${c.items.slice(0,4).join(", ")}`).join(`
`)}`,actions:[{label:"Open Skills",href:"#skills",external:!1}]};if(Yr(e,["experience","journey","education","timeline","background"])){const l=OL().map(c=>`- ${c.year}: ${c.title} at ${c.company}`).join(`
`);return{text:l?`Quick background highlights:
${l}`:"You can find work and education details in the Experience section.",actions:[{label:"View Experience",href:"#experience",external:!1}]}}return Yr(e,["resume","cv"])?{text:"You can view or download Himansh's latest resume here.",actions:[{label:"Open Resume",href:"/Resume.pdf",external:!0}]}:Yr(e,["contact","email","whatsapp","linkedin","reach"])?{text:`Best ways to reach Himansh:
- WhatsApp for quick discussion
- LinkedIn for professional outreach
- Email: ${Zr.email}`,actions:[{label:"WhatsApp",href:Zr.whatsapp,external:!0},{label:"LinkedIn",href:Zr.linkedin,external:!0},{label:"Contact Section",href:"#contact",external:!1}]}:{text:'I can help with projects, skills, experience, resume, and contact details. Try asking: "What services does he offer?"'}}function BL(){const[n,e]=ye.useState(!1),[t,r]=ye.useState(""),[o,l]=ye.useState(!1),[c,d]=ye.useState([{id:1,role:"assistant",text:"Hi, I am Himansh's portfolio assistant. Ask me anything about his work, skills, or availability."}]),f=ye.useRef(null),h=ye.useMemo(()=>FL,[]);ye.useEffect(()=>{var v;n&&((v=f.current)==null||v.scrollIntoView({behavior:"smooth",block:"end"}))},[c,n]);const g=v=>{const m=v.trim();if(!m||o)return;const y={id:Date.now(),role:"user",text:m};d(T=>[...T,y]),r(""),l(!0);const M=kL(m);window.setTimeout(()=>{d(T=>[...T,{id:Date.now()+1,role:"assistant",text:M.text,actions:M.actions}]),l(!1)},420)};return O.jsxs("div",{className:"fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6",children:[n?O.jsxs("div",{className:"glass-card w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10",children:[O.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold text-white",children:"Portfolio Assistant"}),O.jsx("p",{className:"font-['Inter'] text-xs text-gray-300",children:"Replies on behalf of Himansh"})]}),O.jsx("button",{type:"button",onClick:()=>e(!1),className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-white/30 hover:text-white","aria-label":"Close assistant",children:O.jsx(vS,{className:"h-4 w-4"})})]}),O.jsxs("div",{className:"max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4",children:[c.map(v=>{var m;return O.jsxs("div",{children:[O.jsx("div",{className:`w-fit max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${v.role==="assistant"?"border border-white/10 bg-white/5 text-gray-300":"ml-auto bg-white/10 text-white"}`,children:v.text}),v.role==="assistant"&&((m=v.actions)!=null&&m.length)?O.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:v.actions.map(y=>O.jsx("a",{href:y.href,target:y.external?"_blank":void 0,rel:y.external?"noreferrer":void 0,className:"rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:y.label},`${v.id}-${y.label}`))}):null]},v.id)}),o?O.jsx("p",{className:"font-['Inter'] text-xs text-gray-400",children:"Assistant is typing..."}):null,O.jsx("div",{ref:f})]}),O.jsxs("div",{className:"border-t border-white/10 px-4 py-3",children:[O.jsx("div",{className:"mb-3 flex flex-wrap gap-2",children:h.map(v=>O.jsx("button",{type:"button",onClick:()=>g(v),className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:v},v))}),O.jsxs("form",{onSubmit:v=>{v.preventDefault(),g(t)},className:"flex items-center gap-2",children:[O.jsx("input",{value:t,onChange:v=>r(v.target.value),placeholder:"Ask about projects, skills, or contact",className:"input-focus w-full box-border rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5 font-['Inter'] text-sm text-white placeholder:text-gray-400","aria-label":"Type your message"}),O.jsx("button",{type:"submit",className:"font-['Inter'] inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20","aria-label":"Send message",children:O.jsx(_S,{className:"h-4 w-4"})})]})]})]}):null,O.jsx("button",{type:"button",onClick:()=>e(v=>!v),className:"mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition hover:bg-white/20","aria-label":"Open portfolio assistant",children:O.jsx(yS,{className:"h-6 w-6"})})]})}function VL(n){const[e,t]=ye.useState(n[0]);return ye.useEffect(()=>{const r=n.map(l=>document.getElementById(l)).filter(Boolean);if(!r.length)return;const o=new IntersectionObserver(l=>{var d;const c=l.filter(f=>f.isIntersecting).sort((f,h)=>h.intersectionRatio-f.intersectionRatio)[0];(d=c==null?void 0:c.target)!=null&&d.id&&t(c.target.id)},{rootMargin:"-35% 0px -50% 0px",threshold:[.12,.2,.35,.5]});return r.forEach(l=>o.observe(l)),()=>o.disconnect()},[n]),e}function sl({eyebrow:n,title:e,description:t}){return O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"mb-12 flex max-w-3xl flex-col items-start bg-transparent text-left",children:[n?O.jsx("p",{className:"mb-4 font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-gray-400 drop-shadow-lg md:text-xs",children:n}):null,O.jsx("h2",{className:"mb-6 font-['EB_Garamond'] tracking-tight text-4xl font-semibold text-white drop-shadow-xl md:text-5xl",children:e}),t?O.jsx("p",{className:"max-w-2xl font-['Inter'] text-base font-medium text-gray-300 drop-shadow-xl md:text-lg",children:t}):null]})}const zL=[{icon:qx,title:"Founded Keplor: Leading innovative software solutions with a product-first mindset.",text:""},{icon:Kp,title:"Built Examify: An online examination portal with classroom-style workflows.",text:""},{icon:qx,title:"AI Projects & Internships: Working across CNN, NLP, RAG, and voice-driven systems, including roles at ASTRA AI and IBM.",text:""}],HL=[["Frontend",["React","Tailwind CSS","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","jQuery"]],["Backend",["Python","Node.js","PHP","Express.js","REST APIs"]],["Databases",["MySQL","MongoDB","SQLite"]],["AI / ML",["TensorFlow","Keras","OpenCV","NumPy","Pandas","Scikit-learn","CNN","NLP","Computer Vision","YOLOv8","RAG","LLMs"]],["Tools",["Git","GitHub","VS Code","Postman","Figma","Linux","JSON","AWS","IBM Cloud"]]];function GL(){return O.jsx("section",{id:"about",className:"w-full flex flex-col items-start justify-center bg-transparent py-20",children:O.jsxs("div",{className:"w-full flex flex-col items-start",children:[O.jsx(sl,{eyebrow:"About",title:"Full-Stack & AI Developer building practical digital products",description:"Builder mindset, AI curiosity, and a strong focus on practical products that are reliable, fast, and easy to use."}),O.jsx(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1]},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 w-full max-w-2xl text-left p-6 md:p-8",children:O.jsxs("div",{className:"flex flex-col items-start gap-8",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold uppercase tracking-[0.28em] text-gray-400 drop-shadow-lg",children:"Developer mindset"}),O.jsx("p",{className:"font-['Inter'] mt-4 text-base leading-8 text-gray-400 drop-shadow-lg sm:text-lg",children:"Developer mindset: I like building tools that solve specific problems, then shaping them until they feel simple, fast, and trustworthy. My work spans frontend, backend, and AI experiments—deploying ML pipelines, optimizing YOLOv8 models, integrating LLMs, and crafting high-retention media. The common thread is the same: practical products with strong identity."})]}),O.jsx("div",{className:"grid w-full gap-3 sm:grid-cols-3",children:IL.map(n=>O.jsxs("div",{className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 px-5 py-4 text-left",children:[O.jsx("p",{className:"font-['Inter'] text-3xl font-black tracking-tight text-white drop-shadow-lg",children:n.value}),O.jsx("p",{className:"font-['Inter'] mt-1 text-sm text-gray-400 drop-shadow-md",children:n.label})]},n.label))})]})}),O.jsxs("div",{className:"mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1]},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 p-6 md:p-8",children:[O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gray-200 ring-1 ring-white/20",children:O.jsx(Kp,{className:"h-5 w-5"})}),O.jsxs("div",{children:[O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-xl font-bold text-white drop-shadow-lg",children:"Tech Stack"}),O.jsx("p",{className:"font-['Inter'] text-sm text-gray-300 drop-shadow-lg",children:"Core technologies I use to design, build, and ship products."})]})]}),O.jsx("div",{className:"mt-6 space-y-6",children:HL.map(([n,e])=>O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold uppercase tracking-[0.24em] text-gray-400",children:n}),O.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:Array.isArray(e)?e.map((t,r)=>O.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition hover:bg-white/10",children:t},`${n}-${t}-${r}`)):O.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition hover:bg-white/10",children:e})})]},n))}),O.jsx("div",{className:"mt-8",children:O.jsxs("a",{href:"/Resume.pdf",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20",children:[O.jsx(AL,{className:"h-4 w-4"}),"Download Resume"]})})]}),O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1]},className:"flex flex-col h-fit bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 p-6 md:p-8 md:col-start-2",children:[O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-xl font-bold text-white drop-shadow-xl",children:"Key Achievements"}),O.jsx("div",{className:"mt-6 space-y-4",children:zL.map(n=>{const e=n.icon;return O.jsxs("div",{className:"flex flex-row h-fit bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 !p-4 gap-4",children:[O.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gray-200 ring-1 ring-white/20",children:O.jsx(e,{className:"h-5 w-5"})}),O.jsxs("div",{children:[O.jsx("h4",{className:"font-['EB_Garamond'] tracking-tight text-base font-semibold text-white",children:n.title}),O.jsx("p",{className:"font-['Inter'] mt-1 text-sm leading-7 text-gray-300 drop-shadow-lg",children:n.text})]})]},n.title)})})]})]})]})})}const $x={name:"",email:"",message:""};function WL(){const[n,e]=ye.useState($x),[t,r]=ye.useState("idle"),[o,l]=ye.useState(""),c=f=>{const{name:h,value:g}=f.target;e(v=>({...v,[h]:g}))},d=async f=>{f.preventDefault(),r("sending"),l("");try{if(!(await fetch("https://formspree.io/f/xwpbardz",{method:"POST",headers:{Accept:"application/json"},body:new FormData(f.currentTarget)})).ok)throw new Error("Request failed");e($x),r("success"),l("Thank you! Your message has been sent.")}catch{r("error"),l("There was an error sending your message. Please try again.")}};return O.jsx("section",{id:"contact",className:"w-full flex flex-col items-center justify-center bg-transparent py-20 pb-40",children:O.jsxs("div",{className:"mx-auto w-full max-w-5xl bg-transparent py-24 pb-40 overflow-hidden",children:[O.jsx(sl,{eyebrow:"CONTACT",title:"Let's build something together",description:"Share your idea, timeline, or requirements. I usually respond quickly through WhatsApp, LinkedIn, or email."}),O.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-start",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 w-full text-left p-6 md:p-8 overflow-hidden",children:[O.jsxs("div",{className:"flex items-center justify-center gap-3",children:[O.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gray-200 ring-1 ring-white/20",children:O.jsx(yS,{className:"h-5 w-5"})}),O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold uppercase tracking-[0.24em] text-gray-400",children:"Fast response"}),O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-xl font-bold text-white drop-shadow-lg",children:"WhatsApp, LinkedIn, or email"})]})]}),O.jsx("p",{className:"font-['Inter'] mt-5 text-base leading-8 text-gray-400 drop-shadow-lg",children:"If you have a product idea, a freelance brief, or a collaboration in mind, the quickest route is WhatsApp. I also keep LinkedIn and email open for formal outreach."}),O.jsxs("div",{className:"mt-6 space-y-3",children:[O.jsxs("a",{href:Zr.whatsapp,target:"_blank",rel:"noreferrer",className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 !flex-row items-center justify-between !p-4 text-sm font-semibold text-white drop-shadow-lg",children:[O.jsxs("span",{className:"font-['Inter'] inline-flex items-center gap-3",children:[O.jsx(Kp,{className:"h-4 w-4"})," WhatsApp Me"]}),O.jsx("span",{className:"font-['Inter'] text-xs uppercase tracking-[0.24em]",children:"Direct"})]}),O.jsxs("a",{href:Zr.linkedin,target:"_blank",rel:"noreferrer",className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 !flex-row items-center justify-between !p-4 text-sm font-semibold text-white drop-shadow-lg",children:[O.jsxs("span",{className:"font-['Inter'] inline-flex items-center gap-3",children:[O.jsx(EL,{className:"h-4 w-4"})," LinkedIn Profile"]}),O.jsx("span",{className:"font-['Inter'] text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-md",children:"Network"})]}),O.jsxs("a",{href:`mailto:${Zr.email}`,className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 !flex-row items-center justify-between !p-4 text-sm font-semibold text-white drop-shadow-lg",children:[O.jsxs("span",{className:"font-['Inter'] inline-flex items-center gap-3",children:[O.jsx(bL,{className:"h-4 w-4"})," ",Zr.email]}),O.jsx("span",{className:"font-['Inter'] text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-md",children:"Email"})]})]})]}),O.jsxs(Bt.form,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1},onSubmit:d,className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 w-full text-left p-6 md:p-8 lg:col-start-2 overflow-hidden",children:[O.jsx("input",{type:"hidden",name:"_subject",value:"New message from Himansh Sharma portfolio"}),O.jsxs("div",{className:"mb-6 flex items-center justify-center gap-3",children:[O.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gray-200 ring-1 ring-white/20",children:O.jsx(_S,{className:"h-5 w-5"})}),O.jsxs("div",{children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold uppercase tracking-[0.24em] text-gray-400",children:"Contact form"}),O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-xl font-bold text-white drop-shadow-lg",children:"Send project details"})]})]}),O.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[O.jsxs("label",{className:"space-y-2",children:[O.jsx("span",{className:"font-['Inter'] text-sm font-medium text-gray-300 drop-shadow-lg",children:"Name"}),O.jsx("input",{type:"text",name:"name",value:n.name,onChange:c,required:!0,placeholder:"Your name",className:"input-focus w-full box-border rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-500"})]}),O.jsxs("label",{className:"space-y-2",children:[O.jsx("span",{className:"font-['Inter'] text-sm font-medium text-gray-300 drop-shadow-lg",children:"Email"}),O.jsx("input",{type:"email",name:"email",value:n.email,onChange:c,required:!0,placeholder:"Your email",className:"input-focus w-full box-border rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-500"})]})]}),O.jsxs("label",{className:"mt-4 block space-y-2",children:[O.jsx("span",{className:"font-['Inter'] text-sm font-medium text-gray-300 drop-shadow-lg",children:"Message"}),O.jsx("textarea",{name:"message",value:n.message,onChange:c,required:!0,rows:6,placeholder:"Tell me about the project, timeline, or idea.",className:"input-focus w-full box-border rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-500"})]}),O.jsx("button",{type:"submit",disabled:t==="sending",className:"font-['Inter'] mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-70",children:t==="sending"?"Sending...":"Send Message"}),o?O.jsxs("p",{className:"font-['Inter'] mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-400 drop-shadow-md",children:[t==="success"?O.jsx(CL,{className:"h-4 w-4"}):null,o]}):null]})]})]})})}function XL(){return O.jsx("footer",{className:"bg-transparent border-t border-white/5 py-8",children:O.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8",children:[O.jsxs("div",{children:[O.jsxs("p",{className:"font-['Inter'] text-sm text-gray-300 drop-shadow-lg",children:["Designed & built by ",O.jsx("a",{href:"https://www.linkedin.com/in/himanshsharmaa",className:"font-semibold text-gray-300 transition hover:text-white",children:"Himansh Sharma"})]}),O.jsx("p",{className:"font-['Inter'] mt-1 text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-lg",children:"Engineering intelligent systems and scalable web products."})]}),O.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[[["LinkedIn","https://www.linkedin.com/in/himanshsharmaa",SS],["GitHub","https://github.com/himanshsharmaa",Zp],["Instagram","https://www.instagram.com/himanshsharmaa",MS],["X","https://x.com/himanshsharmaa_",xS]].map(([n,e,t])=>O.jsx("a",{href:e,target:"_blank",rel:"noreferrer","aria-label":n,className:"font-['Inter'] inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:O.jsx(t,{className:"h-4 w-4"})},n)),O.jsxs("a",{href:"#intro",className:"font-['Inter'] inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white",children:["Back to top",O.jsx(RL,{className:"h-4 w-4"})]})]})]})})}const jL={hidden:{},visible:{transition:{staggerChildren:.15,delayChildren:.2}}},So={hidden:{opacity:0,y:25,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:1.2,ease:[.16,1,.3,1]}}};function YL({roles:n}){const[e,t]=ye.useState(0),[r,o]=ye.useState(0),[l,c]=ye.useState(!1);return ye.useEffect(()=>{if(!n||n.length===0)return;const d=n[e],f=window.setTimeout(()=>{l?r>0?o(h=>h-1):(c(!1),t(h=>(h+1)%n.length)):r<d.length?o(h=>h+1):c(!0)},l?45:r===d.length?1600:75);return()=>window.clearTimeout(f)},[r,l,e,n]),!n||n.length===0?null:O.jsxs("span",{className:"font-['Inter'] inline-flex items-center text-white drop-shadow-xl",children:[n[e].slice(0,r),O.jsx("span",{className:"font-['Inter'] ml-1 inline-block h-[0.85em] w-[3px] bg-white animate-pulse","aria-hidden":"true"})]})}function qL({onNavigate:n}){return O.jsx("section",{id:"intro",className:"section-shell pointer-events-none relative flex min-h-screen w-full flex-col items-start justify-center bg-transparent px-4 sm:px-6 py-28 text-left",children:O.jsx("div",{className:"w-full max-w-7xl mx-auto",children:O.jsxs(Bt.div,{initial:"hidden",animate:"visible",variants:jL,className:"relative z-10 flex max-w-4xl flex-col items-start text-left mt-16",children:[O.jsx(Bt.div,{variants:So,className:"pointer-events-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg backdrop-blur-xl transition-all hover:bg-white/5",children:"Available for freelance and product collaborations"}),O.jsxs(Bt.h1,{variants:So,className:"font-['EB_Garamond'] text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white drop-shadow-xl leading-[1.1]",children:[O.jsx("span",{className:"block overflow-hidden pb-1",children:O.jsx(Bt.span,{initial:{y:"110%",filter:"blur(8px)"},animate:{y:"0%",filter:"blur(0px)"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.15},className:"block text-white",children:"I'm Himansh Sharma, an"})}),O.jsx("span",{className:"block overflow-hidden pb-2 min-h-[1.2em]",children:O.jsx(Bt.span,{initial:{y:"110%",filter:"blur(8px)"},animate:{y:"0%",filter:"blur(0px)"},transition:{duration:1.4,ease:[.16,1,.3,1],delay:.3},className:"block text-white",children:O.jsx(YL,{roles:DL})})})]}),O.jsx(Bt.p,{variants:So,className:"pointer-events-auto mt-6 max-w-2xl font-['Inter'] text-lg md:text-xl font-normal tracking-wide text-gray-300 drop-shadow-lg leading-relaxed",children:"I build practical digital products with a founder mindset, combining full-stack engineering, AI experimentation, and a careful eye for polished user experience."}),O.jsxs(Bt.div,{variants:So,className:"pointer-events-auto mt-8 flex flex-wrap justify-start gap-4",children:[O.jsxs("a",{href:"#projects",onClick:e=>n(e,"#projects"),className:"font-['Inter'] inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10",children:["View Projects",O.jsx(LL,{className:"h-4 w-4"})]}),O.jsx("a",{href:"/Resume.pdf",target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10",children:"Download Resume"})]}),O.jsx(Bt.div,{variants:So,className:"pointer-events-auto mt-8 flex flex-wrap items-center justify-start gap-3",children:NL.map(e=>{const r={LinkedIn:SS,GitHub:Zp,Instagram:MS}[e.label]||xS;return O.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer","aria-label":e.label,className:"inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-gray-300 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10 hover:text-white",children:O.jsx(r,{className:"h-4 w-4"})},e.label)})}),O.jsx(Bt.div,{variants:So,className:"pointer-events-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full",children:[["Full-stack Products",""],["AI-first Experiments",""],["Founder Mindset",""]].map(([e,t])=>O.jsxs("div",{className:"flex flex-col h-full cursor-pointer rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-left backdrop-blur-xl shadow-2xl transition-all hover:bg-white/5 hover:border-white/20",children:[O.jsx("p",{className:"font-['Inter'] text-sm font-semibold text-white drop-shadow-lg flex-grow",children:e}),t&&O.jsx("p",{className:"mt-2 font-['Inter'] text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-lg",children:t})]},e))})]})})})}function $L({project:n,index:e}){const t=n.tech??n.stack,r=n.liveUrl??n.demoUrl;return O.jsxs(Bt.article,{initial:{opacity:0,y:30,filter:"blur(12px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-15% 0px -15% 0px"},transition:{duration:1.4,delay:.1+e*.08,ease:[.16,1,.3,1]},whileHover:{y:-6},className:"group flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 max-h-[52rem] overflow-hidden text-left",children:[O.jsx("div",{className:"relative overflow-hidden border-b border-white/5 bg-transparent",children:O.jsx("img",{src:n.image,alt:n.title,loading:"lazy",className:"h-48 md:h-56 w-full object-cover rounded-t-xl object-center transition duration-500 group-hover:scale-[1.03]"})}),O.jsxs("div",{className:"flex-grow flex flex-col space-y-5 overflow-auto p-6 md:p-8",children:[O.jsxs("div",{className:"space-y-2",children:[O.jsxs("div",{className:"flex flex-wrap items-center justify-start gap-3",children:[O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-4xl font-semibold text-white drop-shadow-xl md:text-5xl",children:n.title}),O.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gray-300",children:n.subtitle})]}),O.jsx("p",{className:"font-['Inter'] text-sm font-medium uppercase tracking-[0.28em] text-gray-400 drop-shadow-lg",children:"Problem"}),O.jsx("p",{className:"font-['Inter'] text-sm leading-7 text-gray-400 drop-shadow-lg",children:n.problem})]}),O.jsx("p",{className:"font-['Inter'] text-base leading-7 text-gray-400 drop-shadow-lg",children:n.description}),O.jsxs("div",{className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 !p-4",children:[O.jsx("p",{className:"font-['Inter'] text-sm font-medium uppercase tracking-[0.28em] text-gray-400 drop-shadow-lg",children:"Impact"}),O.jsx("p",{className:"font-['Inter'] mt-2 text-sm leading-7 text-gray-400 drop-shadow-lg",children:n.impact})]}),O.jsx("div",{className:"flex flex-wrap items-center justify-start gap-2",children:t.map((o,l)=>O.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-400 drop-shadow-lg backdrop-blur-md shadow-2xl transition-all hover:bg-white/10",children:o},`${o}-${l}`))}),O.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2",children:[r?O.jsxs("a",{href:r,target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20",children:["Live Demo",O.jsx(PL,{className:"h-4 w-4"})]}):O.jsx("span",{className:"font-['Inter'] inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm font-semibold text-gray-400",children:"Live Demo coming soon"}),n.githubUrl?O.jsxs("a",{href:n.githubUrl,target:"_blank",rel:"noreferrer",className:"font-['Inter'] inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10",children:["GitHub",O.jsx(Zp,{className:"h-4 w-4"})]}):null]})]})]})}const KL={hidden:{},visible:{transition:{staggerChildren:.14}}};function ZL(){return O.jsx("section",{id:"projects",className:"w-full flex flex-col items-start justify-center bg-transparent py-20",children:O.jsxs(Bt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-15% 0px -15% 0px"},variants:KL,className:"w-full bg-transparent py-24",children:[O.jsx(sl,{eyebrow:"PROJECTS",title:"Selected projects",description:"Each project outlines the problem, solution, and outcome to show practical thinking and execution."}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch",children:np.map((n,e)=>O.jsx($L,{project:n,index:e},n.title))})]})})}const QL={hidden:{opacity:0,y:30,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1}}},JL={hidden:{},visible:{transition:{staggerChildren:.12}}};function eD(){return O.jsx("section",{id:"skills",className:"w-full flex flex-col items-center justify-center bg-transparent py-20 text-center",children:O.jsxs(Bt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-15% 0px -15% 0px"},variants:JL,className:"w-full bg-transparent py-24",children:[O.jsx(sl,{eyebrow:"SKILLS",title:"Core skills and tools",description:"Frontend, backend, databases, AI/ML, and developer tooling used across production and experimental projects."}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full text-left",children:wS.map(n=>O.jsxs(Bt.div,{variants:QL,whileHover:{y:-4},className:"flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 p-6 md:p-8 text-left",children:[O.jsx("p",{className:"font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg md:text-xs",children:n.title}),O.jsx("div",{className:"mt-4 flex-grow flex flex-wrap gap-2 items-center justify-start",children:n.items.map(e=>O.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-light text-gray-300 drop-shadow-lg transition-all hover:bg-white/10",children:e},e))})]},n.title))})]})})}const Kx={hidden:{opacity:0,y:30,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:1.4,ease:[.16,1,.3,1],delay:.1}}},Zx={hidden:{},visible:{transition:{staggerChildren:.12}}};function tD(){const[n,e]=ye.useState(Fa[0].id),t=ye.useMemo(()=>Fa.find(r=>r.id===n)??Fa[0],[n]);return O.jsx("section",{id:"experience",className:"w-full flex flex-col items-start justify-center bg-transparent py-20",children:O.jsxs(Bt.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-15% 0px -15% 0px"},variants:Zx,className:"w-full bg-transparent py-24",children:[O.jsx(sl,{eyebrow:"EXPERIENCE",title:"Work, education, and certifications",description:"A concise timeline of hands-on roles, academic milestones, and certifications that shaped my product and engineering approach."}),O.jsx(Bt.div,{variants:Kx,className:"mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-2xl transition-all hover:bg-white/10",children:Fa.map(r=>O.jsx("button",{type:"button",onClick:()=>e(r.id),className:`font-['Inter'] rounded-full px-4 py-2 text-sm font-semibold transition ${r.id===n?"bg-white/10 text-white":"text-gray-300 hover:bg-white/10 hover:text-white"}`,children:r.label},r.id))}),O.jsx("div",{className:"mt-10 w-full max-w-3xl mx-auto flex flex-col gap-6",children:O.jsx(UC,{mode:"wait",children:O.jsx(Bt.div,{initial:"hidden",animate:"visible",variants:Zx,className:"flex flex-col gap-6",children:t.items.map(r=>O.jsxs(Bt.article,{variants:Kx,className:"relative flex flex-col h-full w-full rounded-2xl border border-white/10 bg-black/40 p-6 text-left backdrop-blur-xl shadow-2xl transition-all hover:bg-white/5",children:[O.jsxs("div",{className:"flex flex-wrap items-center justify-start gap-3",children:[O.jsx("span",{className:"font-['Inter'] rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.24em] text-gray-300",children:r.year}),O.jsxs("div",{children:[O.jsx("h3",{className:"font-['EB_Garamond'] tracking-tight text-2xl font-semibold text-white drop-shadow-xl",children:r.title}),O.jsx("p",{className:"font-['Inter'] text-sm text-gray-400 drop-shadow-lg",children:r.company})]})]}),O.jsx("p",{className:"font-['Inter'] mt-4 max-w-2xl flex-grow text-base font-medium leading-7 text-gray-300 drop-shadow-xl",children:r.description})]},`${t.id}-${r.year}-${r.title}`))},t.id)})})]})})}function nD(){const[n,e]=ye.useState(!1),[t,r]=ye.useState({x:0,y:0,active:!1,scale:1}),o=ye.useRef(null),l=ye.useMemo(()=>["intro",...tp.map(f=>f.href.slice(1))],[]),c=VL(l);ye.useEffect(()=>{if(!o.current)return;const f=new fE;f.background=null;const h=new xi(75,window.innerWidth/window.innerHeight,.1,1e3),g=new PC({canvas:o.current,antialias:!0,alpha:!0});g.setSize(window.innerWidth,window.innerHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2));const v=new ri,m=4e3,y=new Float32Array(m*3);for(let z=0;z<m*3;z++)y[z]=(Math.random()-.5)*100;v.setAttribute("position",new ki(y,3));const M=new Uh({color:16777215,size:.08,transparent:!0,opacity:.75}),T=new Q0(v,M);f.add(T);const S=new mp(2.2,64,64),_=new pp({color:0}),P=new Ji(S,_);P.position.set(0,1.5,-9),f.add(P);const U=new ri,C=3500,R=new Float32Array(C*3);for(let z=0;z<C;z++){const ee=2.8+Math.random()*4.5,he=Math.random()*Math.PI*2;R[z*3]=Math.cos(he)*ee,R[z*3+1]=(Math.random()-.5)*.15,R[z*3+2]=Math.sin(he)*ee}U.setAttribute("position",new ki(R,3));const L=new Uh({color:13948120,size:.045,transparent:!0,opacity:.85}),F=new Q0(U,L);F.rotation.x=Math.PI*.28,P.add(F),h.position.z=5;let E=0,D=0;const B=z=>{E=z.clientX/window.innerWidth*2-1,D=-(z.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",B);const j=new DE,J=()=>{requestAnimationFrame(J);const z=j.getElapsedTime();T.rotation.y=z*.015,T.rotation.x=z*.008,F.rotation.z=z*.12,P.position.y=1.5+Math.sin(z*.4)*.15,h.position.x+=(E*.4-h.position.x)*.05,h.position.y+=(D*.4-h.position.y)*.05,g.render(f,h)};J();const ie=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ie),()=>{window.removeEventListener("mousemove",B),window.removeEventListener("resize",ie),g.dispose()}},[]),ye.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]),ye.useEffect(()=>{const f='a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]',h=v=>{const m=v.target instanceof Element?v.target:null;r({x:v.clientX,y:v.clientY,active:!0,scale:m!=null&&m.closest(f)?1.4:1})},g=()=>{r(v=>({...v,active:!1}))};return window.addEventListener("pointermove",h,{passive:!0}),window.addEventListener("pointerleave",g),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerleave",g)}},[]);const d=(f,h)=>{f.preventDefault(),e(!1);const g=document.querySelector(h);g&&g.scrollIntoView({behavior:"smooth",block:"start"})};return O.jsxs("div",{className:"relative min-h-screen w-full bg-transparent",children:[O.jsx("div",{className:"fixed inset-0 w-full h-full -z-30 bg-[url('/space-bg.jpeg')] bg-cover bg-[position:center_center] bg-no-repeat"}),O.jsx("canvas",{ref:o,className:"fixed inset-0 w-full h-full -z-25 pointer-events-none"}),O.jsx("div",{className:"fixed inset-0 bg-black/60 pointer-events-none -z-10"}),O.jsx("div",{className:"fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"}),O.jsx("div",{className:"fixed inset-0 bg-black/50 -z-10 pointer-events-none",style:{maskImage:"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",WebkitMaskImage:"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)"}}),O.jsx("div",{className:"relative z-20",children:O.jsx(gL,{children:O.jsxs(Bt.div,{initial:{clipPath:"inset(50% 0 50% 0)"},animate:{clipPath:"inset(0% 0 0% 0)"},transition:{duration:2.2,ease:[.77,0,.175,1],delay:.1},className:"relative overflow-hidden",children:[O.jsx(Bt.div,{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-50 h-80 w-80 rounded-full bg-white/5 blur-3xl mix-blend-difference",animate:t.active?{opacity:1,x:t.x-160,y:t.y-160,scale:t.scale}:{opacity:0},transition:{type:"spring",stiffness:130,damping:24,mass:.2}}),O.jsx(UL,{activeSection:c,mobileMenuOpen:n,onToggleMobileMenu:()=>e(f=>!f),onNavigate:d}),O.jsxs("main",{className:"relative z-20 w-full max-w-[1600px] mx-auto px-8 md:px-12 flex flex-col",children:[O.jsx(qL,{onNavigate:d}),O.jsx(GL,{}),O.jsx(tD,{}),O.jsx(eD,{}),O.jsx(ZL,{}),O.jsx(WL,{})]}),O.jsx(XL,{}),O.jsx(BL,{})]})})})]})}hw.createRoot(document.getElementById("root")).render(O.jsx(Qr.StrictMode,{children:O.jsx(nD,{})}));
