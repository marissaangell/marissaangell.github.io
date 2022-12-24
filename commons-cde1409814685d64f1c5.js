(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[351],{191:function(e,t,n){"use strict";n.d(t,{p:function(){return Z}});var r,a=n(885),o=n(4925),i=n(4942),u=n(7294),c=n(5893),l=n(8222),s=n(5307),f=n(4080),m=n(5527),d=n(3128),p=n(4474),v=n(3500),h=n(1937),y=n(9777),g=["defaultOpen"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E,x,S=((x=S||{})[x.Open=0]="Open",x[x.Closed=1]="Closed",x),k=((E=k||{})[E.ToggleDisclosure=0]="ToggleDisclosure",E[E.CloseDisclosure=1]="CloseDisclosure",E[E.SetButtonId=2]="SetButtonId",E[E.SetPanelId=3]="SetPanelId",E[E.LinkPanel=4]="LinkPanel",E[E.UnlinkPanel=5]="UnlinkPanel",E),O=(r={},(0,i.Z)(r,0,(function(e){var t;return w(w({},e),{},{disclosureState:(0,c.E)(e.disclosureState,(t={},(0,i.Z)(t,0,1),(0,i.Z)(t,1,0),t))})})),(0,i.Z)(r,1,(function(e){return 1===e.disclosureState?e:w(w({},e),{},{disclosureState:1})})),(0,i.Z)(r,4,(function(e){return!0===e.linkedPanel?e:w(w({},e),{},{linkedPanel:!0})})),(0,i.Z)(r,5,(function(e){return!1===e.linkedPanel?e:w(w({},e),{},{linkedPanel:!1})})),(0,i.Z)(r,2,(function(e,t){return e.buttonId===t.buttonId?e:w(w({},e),{},{buttonId:t.buttonId})})),(0,i.Z)(r,3,(function(e,t){return e.panelId===t.panelId?e:w(w({},e),{},{panelId:t.panelId})})),r),A=(0,u.createContext)(null);function j(e){var t=(0,u.useContext)(A);if(null===t){var n=new Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return t}A.displayName="DisclosureContext";var P=(0,u.createContext)(null);function N(e){var t=(0,u.useContext)(P);if(null===t){var n=new Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,N),n}return t}P.displayName="DisclosureAPIContext";var T=(0,u.createContext)(null);function U(e,t){return(0,c.E)(t.type,O,e,t)}T.displayName="DisclosurePanelContext";var I=u.Fragment,R=(0,l.yV)((function(e,t){var n,r=e.defaultOpen,m=void 0!==r&&r,d=(0,o.Z)(e,g),v="headlessui-disclosure-button-".concat((0,f.M)()),b="headlessui-disclosure-panel-".concat((0,f.M)()),w=(0,u.useRef)(null),E=(0,s.T)(t,(0,s.h)((function(e){w.current=e}),void 0===e.as||e.as===u.Fragment)),x=(0,u.useRef)(null),S=(0,u.useRef)(null),k=(0,u.useReducer)(U,{disclosureState:m?0:1,linkedPanel:!1,buttonRef:S,panelRef:x,buttonId:v,panelId:b}),O=(0,a.Z)(k,2),j=O[0].disclosureState,N=O[1];(0,u.useEffect)((function(){return N({type:2,buttonId:v})}),[v,N]),(0,u.useEffect)((function(){return N({type:3,panelId:b})}),[b,N]);var T=(0,y.z)((function(e){N({type:1});var t=(0,h.r)(w);if(t){var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(v):t.getElementById(v);null==n||n.focus()}})),R=(0,u.useMemo)((function(){return{close:T}}),[T]),C=(0,u.useMemo)((function(){return{open:0===j,close:T}}),[j,T]),K={ref:E};return u.createElement(A.Provider,{value:k},u.createElement(P.Provider,{value:R},u.createElement(p.up,{value:(0,c.E)(j,(n={},(0,i.Z)(n,0,p.ZM.Open),(0,i.Z)(n,1,p.ZM.Closed),n))},(0,l.sY)({ourProps:K,theirProps:d,slot:C,defaultTag:I,name:"Disclosure"}))))})),C=(0,l.yV)((function(e,t){var n=j("Disclosure.Button"),r=(0,a.Z)(n,2),o=r[0],i=r[1],c=(0,u.useContext)(T),f=null!==c&&c===o.panelId,p=(0,u.useRef)(null),h=(0,s.T)(p,t,f?null:o.buttonRef),g=(0,y.z)((function(e){var t;if(f){if(1===o.disclosureState)return;switch(e.key){case m.R.Space:case m.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=o.buttonRef.current)||t.focus()}}else switch(e.key){case m.R.Space:case m.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}})),b=(0,y.z)((function(e){if(e.key===m.R.Space)e.preventDefault()})),w=(0,y.z)((function(t){var n;(0,d.P)(t.currentTarget)||e.disabled||(f?(i({type:0}),null==(n=o.buttonRef.current)||n.focus()):i({type:0}))})),E=(0,u.useMemo)((function(){return{open:0===o.disclosureState}}),[o]),x=(0,v.f)(e,p),S=e,k=f?{ref:h,type:x,onKeyDown:g,onClick:w}:{ref:h,id:o.buttonId,type:x,"aria-expanded":e.disabled?void 0:0===o.disclosureState,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:g,onKeyUp:b,onClick:w};return(0,l.sY)({ourProps:k,theirProps:S,slot:E,defaultTag:"button",name:"Disclosure.Button"})})),K=l.AN.RenderStrategy|l.AN.Static,M=(0,l.yV)((function(e,t){var n=j("Disclosure.Panel"),r=(0,a.Z)(n,2),o=r[0],i=r[1],c=N("Disclosure.Panel").close,f=(0,s.T)(t,o.panelRef,(function(){o.linkedPanel||i({type:4})})),m=(0,p.oJ)(),d=null!==m?m===p.ZM.Open:0===o.disclosureState;(0,u.useEffect)((function(){return function(){return i({type:5})}}),[i]),(0,u.useEffect)((function(){var t;1===o.disclosureState&&(null==(t=e.unmount)||t)&&i({type:5})}),[o.disclosureState,e.unmount,i]);var v=(0,u.useMemo)((function(){return{open:0===o.disclosureState,close:c}}),[o,c]),h=e,y={ref:f,id:o.panelId};return u.createElement(T.Provider,{value:o.panelId},(0,l.sY)({ourProps:y,theirProps:h,slot:v,defaultTag:"div",features:K,visible:d,name:"Disclosure.Panel"}))})),Z=Object.assign(R,{Button:C,Panel:M})},5527:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});var r,a=((r=a||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},9777:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(7294),a=n(6759),o=function(e){var t=(0,a.E)(e);return r.useCallback((function(){return t.current.apply(t,arguments)}),[t])}},4080:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r,a=n(885),o=n(7294),i=n(260),u=n(1919),c=0;function l(){return++c}var s=null!=(r=o.useId)?r:function(){var e=(0,u.H)(),t=o.useState(e?l:null),n=(0,a.Z)(t,2),r=n[0],c=n[1];return(0,i.e)((function(){null===r&&c(l())}),[r]),null!=r?""+r:void 0}},260:function(e,t,n){"use strict";n.d(t,{e:function(){return a}});var r=n(7294),a="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},6759:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(7294),a=n(260);function o(e){var t=(0,r.useRef)(e);return(0,a.e)((function(){t.current=e}),[e]),t}},3500:function(e,t,n){"use strict";n.d(t,{f:function(){return u}});var r=n(885),a=n(7294),o=n(260);function i(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function u(e,t){var n=(0,a.useState)((function(){return i(e)})),u=(0,r.Z)(n,2),c=u[0],l=u[1];return(0,o.e)((function(){l(i(e))}),[e.type,e.as]),(0,o.e)((function(){c||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")}),[c,t]),c}},1919:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(885),a=n(7294),o={serverHandoffComplete:!1};function i(){var e=(0,a.useState)(o.serverHandoffComplete),t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,a.useEffect)((function(){!0!==n&&i(!0)}),[n]),(0,a.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},5307:function(e,t,n){"use strict";n.d(t,{T:function(){return s},h:function(){return l}});var r=n(4942),a=n(7294),o=n(9777);function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=Symbol();function l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object.assign(e,(0,r.Z)({},c,t))}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(0,a.useRef)(t);(0,a.useEffect)((function(){r.current=t}),[t]);var u=(0,o.z)((function(e){var t,n=i(r.current);try{for(n.s();!(t=n.n()).done;){var a=t.value;null!=a&&("function"==typeof a?a(e):a.current=e)}}catch(o){n.e(o)}finally{n.f()}}));return t.every((function(e){return null==e||(null==e?void 0:e[c])}))?void 0:u}},4474:function(e,t,n){"use strict";n.d(t,{ZM:function(){return i},oJ:function(){return u},up:function(){return c}});var r=n(7294),a=(0,r.createContext)(null);a.displayName="OpenClosedContext";var o,i=((o=i||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o);function u(){return(0,r.useContext)(a)}function c(e){var t=e.value,n=e.children;return r.createElement(a.Provider,{value:t},n)}},3128:function(e,t,n){"use strict";function r(e){for(var t=e.parentElement,n=null;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;var r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;for(var t=e.previousElementSibling;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},5893:function(e,t,n){"use strict";function r(e,t){if(e in t){for(var n=t[e],a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return"function"==typeof n?n.apply(void 0,o):n}var u=new Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map((function(e){return'"'.concat(e,'"')})).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}n.d(t,{E:function(){return r}})},1937:function(e,t,n){"use strict";function r(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}n.d(t,{r:function(){return r}})},8222:function(e,t,n){"use strict";n.d(t,{AN:function(){return h},l4:function(){return y},sY:function(){return g},yV:function(){return E}});var r=n(4942),a=n(4925),o=(n(8559),n(7294)),i=n(5893),u=["static"],c=["unmount"],l=["as","children","refName"];function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,v,h=((v=h||{})[v.None=0]="None",v[v.RenderStrategy=1]="RenderStrategy",v[v.Static=2]="Static",v),y=((p=y||{})[p.Unmount=0]="Unmount",p[p.Hidden=1]="Hidden",p);function g(e){var t=e.ourProps,n=e.theirProps,o=e.slot,l=e.defaultTag,s=e.features,f=e.visible,m=void 0===f||f,p=e.name,v=w(n,t);if(m)return b(v,o,l,p);var h=null!=s?s:0;if(2&h){var y=v.static,g=void 0!==y&&y,E=(0,a.Z)(v,u);if(g)return b(E,o,l,p)}if(1&h){var x,S=v.unmount,k=void 0===S||S,O=(0,a.Z)(v,c);return(0,i.E)(k?0:1,(x={},(0,r.Z)(x,0,(function(){return null})),(0,r.Z)(x,1,(function(){return b(d(d({},O),{},{hidden:!0,style:{display:"none"}}),o,l,p)})),x))}return b(v,o,l,p)}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,u=S(e,["unmount","static"]),c=u.as,s=void 0===c?n:c,f=u.children,m=u.refName,d=void 0===m?"ref":m,p=(0,a.Z)(u,l),v=void 0!==e.ref?(0,r.Z)({},d,e.ref):{},h="function"==typeof f?f(t):f;p.className&&"function"==typeof p.className&&(p.className=p.className(t));var y={};if(s===o.Fragment&&Object.keys(x(p)).length>0){if(!(0,o.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <".concat(i,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - ".concat(e)})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - ".concat(e)})).join("\n")].join("\n"));return(0,o.cloneElement)(h,Object.assign({},w(h.props,x(S(p,["ref"]))),y,v))}return(0,o.createElement)(s,Object.assign({},S(p,["ref"]),s!==o.Fragment&&v,s!==o.Fragment&&y),h)}function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];for(var a={},o={},i=0,u=t;i<u.length;i++){var c=u[i];for(var l in c)l.startsWith("on")&&"function"==typeof c[l]?(null!=o[l]||(o[l]=[]),o[l].push(c[l])):a[l]=c[l]}if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(o).map((function(e){return[e,void 0]}))));var f=function(e){Object.assign(a,(0,r.Z)({},e,(function(t){for(var n=o[e],r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var u,c=s(n);try{for(c.s();!(u=c.n()).done;){var l=u.value;if(t.defaultPrevented)return;l.apply(void 0,[t].concat(a))}}catch(f){c.e(f)}finally{c.f()}})))};for(var m in o)f(m);return a}function E(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function x(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}function S(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),a=s(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;o in r&&delete r[o]}}catch(i){a.e(i)}finally{a.f()}return r}},7360:function(e,t,n){"use strict";var r=n(7294);var a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));t.Z=a},6135:function(e,t,n){"use strict";var r=n(4948),a=n(3070),o=n(9114);e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},1246:function(e,t,n){var r=n(648),a=n(8173),o=n(7497),i=n(5112)("iterator");e.exports=function(e){if(null!=e)return a(e,i)||a(e,"@@iterator")||o[r(e)]}},8554:function(e,t,n){var r=n(6916),a=n(9662),o=n(9670),i=n(6330),u=n(1246),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?u(e):t;if(a(n))return o(r(n,e));throw c(i(e)+" is not iterable")}},7659:function(e,t,n){var r=n(5112),a=n(7497),o=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||i[o]===e)}},408:function(e,t,n){var r=n(9974),a=n(6916),o=n(9670),i=n(6330),u=n(7659),c=n(6244),l=n(7976),s=n(8554),f=n(1246),m=n(9212),d=TypeError,p=function(e,t){this.stopped=e,this.result=t},v=p.prototype;e.exports=function(e,t,n){var h,y,g,b,w,E,x,S=n&&n.that,k=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_RECORD),A=!(!n||!n.IS_ITERATOR),j=!(!n||!n.INTERRUPTED),P=r(t,S),N=function(e){return h&&m(h,"normal",e),new p(!0,e)},T=function(e){return k?(o(e),j?P(e[0],e[1],N):P(e[0],e[1])):j?P(e,N):P(e)};if(O)h=e.iterator;else if(A)h=e;else{if(!(y=f(e)))throw d(i(e)+" is not iterable");if(u(y)){for(g=0,b=c(e);b>g;g++)if((w=T(e[g]))&&l(v,w))return w;return new p(!1)}h=s(e,y)}for(E=O?e.next:h.next;!(x=a(E,h)).done;){try{w=T(x.value)}catch(U){m(h,"throw",U)}if("object"==typeof w&&w&&l(v,w))return w}return new p(!1)}},9212:function(e,t,n){var r=n(6916),a=n(9670),o=n(8173);e.exports=function(e,t,n){var i,u;a(e);try{if(!(i=o(e,"return"))){if("throw"===t)throw n;return n}i=r(i,e)}catch(c){u=!0,i=c}if("throw"===t)throw n;if(u)throw i;return a(i),n}},7497:function(e){e.exports={}},8559:function(e,t,n){var r=n(2109),a=n(408),o=n(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return a(e,(function(e,n){o(t,e,n)}),{AS_ENTRIES:!0}),t}})},4717:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),a=n(1082),o=n(191),i=n(7360);var u=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))})),c=n(9446),l=[{name:"About Me",href:"/about"},{name:"Software",href:"/coding"},{name:"Games",href:"/games"},{name:"VFX",href:"/vfx"}],s=[{name:"GitHub",href:"https://github.com/marissaangell"},{name:"Itch.io",href:"https://marissaangell.itch.io/"}];function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var m=function(e){var t=e.current;return r.createElement(o.p,{as:"nav",className:"fixed w-full bg-neutral",style:{zIndex:99}},(function(e){var n=e.open;return r.createElement(r.Fragment,null,r.createElement("div",{className:"mx-auto px-2 md:px-6 lg:px-8 xl:max-w-screen-xl"},r.createElement("div",{className:"relative flex items-center justify-between h-16"},r.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center md:hidden"},r.createElement(o.p.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},r.createElement("span",{className:"sr-only"},"Open main menu"),n?r.createElement(i.Z,{className:"block h-6 w-6","aria-hidden":"true"}):r.createElement(u,{className:"block h-6 w-6","aria-hidden":"true"}))),r.createElement("div",{className:"flex-1 flex items-center justify-center md:items-stretch md:justify-start"},r.createElement("div",{className:"flex-shrink-0 flex items-center "},r.createElement("img",{className:"block h-8 w-auto mr-2",src:"data:image/png;base64,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",alt:"Site Icon"}),r.createElement(a.rU,{to:"/",className:"block w-auto text-xl text-gray-200 font-semibold mx-2 link link-hover"},"Marissa Angell")),r.createElement("div",{className:"hidden md:inline-flex divider divider-horizontal"}),r.createElement("div",{className:"hidden md:block"},r.createElement("div",{className:"flex space-x-2"},l.map((function(e){return r.createElement(a.rU,{key:e.name,to:e.href,className:f(t===e.href?"bg-gray-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"),"aria-current":t===e.href?"page":void 0},e.name)}))))),r.createElement("div",{className:"hidden md:block"},r.createElement("div",{className:"absolute inset-y-0 right-0 inline-flex space-x-2 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"},r.createElement("a",{href:"https://marissaangell.itch.io/"},r.createElement("div",{className:"hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-semibold"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 20 230 198.92646",className:"inline-block fill-current mr-1 mb-[1px]"},r.createElement("path",{d:"M28.832 1.228C19.188 6.954.186 28.785.004 34.51v9.478c0 12.014 11.23 22.572 21.424 22.572 12.24 0 22.44-10.146 22.442-22.187 0 12.04 9.85 22.187 22.093 22.187 12.242 0 21.776-10.146 21.776-22.187 0 12.04 10.47 22.187 22.71 22.187h.22c12.24 0 22.72-10.146 22.72-22.187 0 12.04 9.53 22.187 21.77 22.187s22.09-10.146 22.09-22.187c0 12.04 10.2 22.187 22.44 22.187 10.19 0 21.42-10.557 21.42-22.572V34.51c-.19-5.725-19.19-27.556-28.83-33.282-29.97-1.053-50.76-1.234-81.73-1.23C79.59 0 37.36.483 28.83 1.228zm58.753 59.674c-1.166 2.046-2.627 3.903-4.308 5.546-4.62 4.52-10.956 7.32-17.94 7.32-6.985 0-13.356-2.8-17.976-7.322-1.67-1.64-2.94-3.394-4.11-5.436v.004c-1.16 2.046-2.79 3.798-4.46 5.44-4.62 4.52-10.99 7.317-17.97 7.317-.84 0-1.71-.23-2.42-.47-.982 10.25-1.4 20.04-1.545 27.19v.04c-.02 3.63-.035 6.61-.054 10.75.19 21.51-2.13 69.7 9.48 81.54 17.99 4.2 51.094 6.11 84.31 6.12h.003c33.214-.01 66.32-1.92 84.31-6.11 11.61-11.843 9.29-60.033 9.48-81.536-.017-4.14-.034-7.122-.053-10.75v-.04c-.15-7.142-.565-16.935-1.55-27.183-.71.24-1.587.473-2.43.473-6.98 0-13.354-2.797-17.975-7.316-1.675-1.644-3.3-3.396-4.463-5.44l-.005-.006c-1.166 2.04-2.437 3.797-4.112 5.436-4.62 4.522-10.99 7.322-17.973 7.322s-13.32-2.8-17.94-7.32c-1.68-1.644-3.14-3.5-4.31-5.547-1.163 2.04-2.59 3.907-4.266 5.546-4.62 4.52-10.99 7.32-17.98 7.32-.244 0-.49-.01-.73-.02h-.008c-.243.01-.486.02-.73.02-6.986 0-13.357-2.8-17.978-7.32-1.678-1.64-3.106-3.503-4.27-5.544zM69.123 84.775l-.002.008h.02c7.31.016 13.81 0 21.85 8.783 6.34-.663 12.95-.996 19.58-.985h.01c6.63-.01 13.24.33 19.58.99 8.05-8.78 14.54-8.76 21.85-8.78h.02v-.01c3.458 0 17.27 0 26.9 27.04l10.347 37.1c7.665 27.6-2.453 28.28-15.073 28.3-18.72-.69-29.08-14.29-29.08-27.88-10.36 1.7-22.45 2.55-34.535 2.55h-.005c-12.086 0-24.172-.85-34.53-2.55 0 13.59-10.36 27.18-29.078 27.88-12.62-.02-22.74-.7-15.073-28.29l10.34-37.1c9.63-27.04 23.45-27.04 26.9-27.04zm41.44 21.25v.007c-.017.017-19.702 18.096-23.24 24.526l12.89-.516v11.24c0 .527 5.174.313 10.35.074h.007c5.177.24 10.35.453 10.35-.073v-11.24l12.89.514c-3.538-6.43-23.24-24.525-23.24-24.525v-.006l-.002.002z"})),r.createElement("div",{className:"inline-block -mt-1"},"Itch.io"))),r.createElement("a",{href:"https://github.com/marissaangell"},r.createElement("div",{className:"hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-semibold"},r.createElement(c.g_Y,{size:16,className:"mr-1 mb-[1px]"}),"GitHub")))))),r.createElement(o.p.Panel,{className:"md:hidden"},r.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},l.map((function(e){return r.createElement(o.p.Button,{key:e.name,as:"a",href:e.href,className:f(t===e.href?"bg-gray-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":t===e.href?"page":void 0},e.name)})),s.map((function(e){return r.createElement(o.p.Button,{key:e.name,as:"a",href:e.href,className:f(t===e.href?"bg-gray-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":t===e.href?"page":void 0},e.name,r.createElement(c.Pfi,{size:16,className:"ml-1"}))})))))}))},d=[{name:"About",href:"/about"},{name:"Projects",href:"/projects"}];function p(){return r.createElement("footer",{className:"footer footer-center pt-6 pb-4 bg-base-200 text-base-content rounded"},r.createElement("div",{className:"grid grid-flow-col gap-1"},r.createElement("p",{className:""},"Made by Marissa Angell"),r.createElement("div",{className:"divider divider-horizontal"}),r.createElement("div",{className:"grid grid-flow-col gap-6"},d.map((function(e){return r.createElement(a.rU,{key:e.name,to:e.href,className:"link link-hover"},e.name)})))),r.createElement("div",null,r.createElement("div",{className:"grid grid-flow-col gap-4 -mt-6"},r.createElement("a",{href:"https://github.com/marissaangell"},r.createElement("div",{className:"hover:bg-gray-700 hover:text-gray-300 px-2 py-1 pb-2 rounded-md text-sm font-medium"},r.createElement(c.g_Y,{size:16})," ",r.createElement(c.IL,{size:16})," ",r.createElement(c.Pfi,{size:16}))),r.createElement("a",{href:"https://marissaangell.itch.io/"},r.createElement("div",{className:"hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"20",viewBox:"0 0 774.7776 198.92646",className:"inline-block fill-current mb-[4px]"},r.createElement("path",{d:"M253.95 174.12V70.95h34.81v103.17h-34.81zm17.614-111.56q-8.808 0-13.63-4.404-4.614-4.403-4.614-11.743 0-6.92 4.613-11.743 4.823-4.823 13.63-4.823 8.808 0 13.422 4.823 4.823 4.823 4.823 11.743 0 7.34-4.823 11.743-4.613 4.404-13.42 4.404zM340.7 176.22q-15.1 0-22.86-7.97-7.548-8.177-7.548-22.647v-48.86h-13.84V70.948h13.84V45.784h34.81V70.95h22.65v25.79H345.1v43.828q0 4.824 1.888 6.92 2.097 1.888 6.29 1.888 5.663 0 12.373-5.033l7.97 22.858q-6.08 4.2-13.84 6.71-7.76 2.31-19.08 2.31zm85.62 0q-23.907 0-37.747-13.63-13.63-13.632-13.63-39.635 0-18.873 7.758-31.665 7.97-13.21 19.93-17.825 12.58-4.823 23.28-4.823 13.42 0 22.44 5.452 9.02 5.243 13.21 11.534 4.41 6.29 6.29 9.856l-24.11 15.518q-3.35-6.92-7.34-10.905-3.98-3.984-9.64-3.984-7.97 0-12.58 6.29-4.61 6.292-4.61 19.084 0 13.84 5.45 20.34 5.45 6.502 15.52 6.502 7.97 0 13.21-2.94 5.45-2.94 10.277-7.55l11.115 26q-5.034 4.19-14.89 8.39-9.856 3.98-23.906 3.98zm50.65-2.1V34.04h35.02v42.57q4.403-3.146 10.694-5.452 6.29-2.517 15.1-2.517 18.453 0 27.47 10.49 9.227 10.49 9.227 29.57v65.43h-35.02v-61.24q0-8.8-3.35-12.79-3.35-4.19-8.81-4.19-4.61 0-8.6 2.1-3.98 2.1-6.71 4.41v71.72h-35.02zm124.4 2.1q-8.39 0-13.212-4.823-4.823-4.823-4.823-12.372 0-7.55 4.823-12.582 4.823-5.033 13.21-5.033 7.97 0 12.793 5.033 4.83 5.033 4.83 12.582 0 7.55-4.82 12.372-4.61 4.823-12.79 4.823zm25.75-2.1V70.95h34.81v103.17h-34.81zm17.61-111.54q-8.81 0-13.632-4.404-4.613-4.404-4.613-11.743 0-6.92 4.613-11.743 4.823-4.823 13.63-4.823 8.808 0 13.422 4.823 4.823 4.823 4.823 11.743 0 7.34-4.823 11.743-4.613 4.404-13.42 4.404zm78.67 113.64q-12.164 0-21.6-3.984-9.437-4.194-16.147-11.324-6.5-7.34-10.066-17.196-3.355-10.066-3.355-21.81 0-17.404 7.55-30.406 7.758-12.792 19.292-17.825 11.743-5.033 24.325-5.033 18.03 0 29.77 8.388 11.95 8.388 16.78 20.97 4.82 12.582 4.82 23.906 0 11.743-3.57 21.81-3.35 9.855-10.07 17.195-6.5 7.13-16.15 11.33-9.435 3.99-21.6 3.99zm0-26.842q8.807 0 12.79-7.34 3.985-7.55 3.985-20.13 0-11.954-4.194-19.084-4.19-7.13-12.58-7.13-8.18 0-12.37 7.13-4.19 7.13-4.19 19.083 0 12.582 3.99 20.13 4.2 7.34 12.58 7.34z"}),r.createElement("path",{d:"M28.832 1.228C19.188 6.954.186 28.785.004 34.51v9.478c0 12.014 11.23 22.572 21.424 22.572 12.24 0 22.44-10.146 22.442-22.187 0 12.04 9.85 22.187 22.093 22.187 12.242 0 21.776-10.146 21.776-22.187 0 12.04 10.47 22.187 22.71 22.187h.22c12.24 0 22.72-10.146 22.72-22.187 0 12.04 9.53 22.187 21.77 22.187s22.09-10.146 22.09-22.187c0 12.04 10.2 22.187 22.44 22.187 10.19 0 21.42-10.557 21.42-22.572V34.51c-.19-5.725-19.19-27.556-28.83-33.282-29.97-1.053-50.76-1.234-81.73-1.23C79.59 0 37.36.483 28.83 1.228zm58.753 59.674c-1.166 2.046-2.627 3.903-4.308 5.546-4.62 4.52-10.956 7.32-17.94 7.32-6.985 0-13.356-2.8-17.976-7.322-1.67-1.64-2.94-3.394-4.11-5.436v.004c-1.16 2.046-2.79 3.798-4.46 5.44-4.62 4.52-10.99 7.317-17.97 7.317-.84 0-1.71-.23-2.42-.47-.982 10.25-1.4 20.04-1.545 27.19v.04c-.02 3.63-.035 6.61-.054 10.75.19 21.51-2.13 69.7 9.48 81.54 17.99 4.2 51.094 6.11 84.31 6.12h.003c33.214-.01 66.32-1.92 84.31-6.11 11.61-11.843 9.29-60.033 9.48-81.536-.017-4.14-.034-7.122-.053-10.75v-.04c-.15-7.142-.565-16.935-1.55-27.183-.71.24-1.587.473-2.43.473-6.98 0-13.354-2.797-17.975-7.316-1.675-1.644-3.3-3.396-4.463-5.44l-.005-.006c-1.166 2.04-2.437 3.797-4.112 5.436-4.62 4.522-10.99 7.322-17.973 7.322s-13.32-2.8-17.94-7.32c-1.68-1.644-3.14-3.5-4.31-5.547-1.163 2.04-2.59 3.907-4.266 5.546-4.62 4.52-10.99 7.32-17.98 7.32-.244 0-.49-.01-.73-.02h-.008c-.243.01-.486.02-.73.02-6.986 0-13.357-2.8-17.978-7.32-1.678-1.64-3.106-3.503-4.27-5.544zM69.123 84.775l-.002.008h.02c7.31.016 13.81 0 21.85 8.783 6.34-.663 12.95-.996 19.58-.985h.01c6.63-.01 13.24.33 19.58.99 8.05-8.78 14.54-8.76 21.85-8.78h.02v-.01c3.458 0 17.27 0 26.9 27.04l10.347 37.1c7.665 27.6-2.453 28.28-15.073 28.3-18.72-.69-29.08-14.29-29.08-27.88-10.36 1.7-22.45 2.55-34.535 2.55h-.005c-12.086 0-24.172-.85-34.53-2.55 0 13.59-10.36 27.18-29.078 27.88-12.62-.02-22.74-.7-15.073-28.29l10.34-37.1c9.63-27.04 23.45-27.04 26.9-27.04zm41.44 21.25v.007c-.017.017-19.702 18.096-23.24 24.526l12.89-.516v11.24c0 .527 5.174.313 10.35.074h.007c5.177.24 10.35.453 10.35-.073v-11.24l12.89.514c-3.538-6.43-23.24-24.525-23.24-24.525v-.006l-.002.002z"})),r.createElement(c.Pfi,{size:16,className:"ml-1"}))))))}var v=function(e){var t=e.pageTitle,n=e.navCurrent,o=e.children,i=(0,a.K2)("3159585216");return r.createElement("div",{className:"flex flex-col h-screen"},r.createElement("title",null,t," | ",i.site.siteMetadata.title),r.createElement(m,{className:"fixed",current:n}),r.createElement("main",{className:"md:max-w-3xl lg:max-w-5xl xl:max-w-7xl max-w-lg 2xl:max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8  pt-20 pb-12 grow shrink-0"},o),r.createElement(p,null))}},4925:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},885:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=commons-cde1409814685d64f1c5.js.map