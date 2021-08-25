(()=>{"use strict";var e={705:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),r.push(c))}},r}},917:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(705),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,".frame {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  -webkit-user-select: none; /* Chrome all / Safari all */\r\n  -moz-user-select: none; /* Firefox all */\r\n  -ms-user-select: none; /* IE 10+ */\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.image {\r\n  position: absolute;\r\n  top: 149px;\r\n  left: 125px;\r\n  height: 600px;\r\n  width: 580px;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  background-color: white;\r\n}\r\n\r\n.innerImage {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.container {\r\n  display: inline-block;\r\n  /* transform: scale(0.8); */\r\n}\r\n",""]);const i=o},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var p=n(f),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(r[p].references++,r[p].updater(d)):r.push({identifier:f,updater:o(d,t),references:1}),a.push(f)}return a}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);r[s].references--}for(var c=t(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,e)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t](i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.p;var e=n(379),r=n.n(e),t=n(795),o=n.n(t),i=n(569),a=n.n(i),s=n(565),c=n.n(s),u=n(216),l=n.n(u),f=n(589),p=n.n(f),d=n(917),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals})()})();