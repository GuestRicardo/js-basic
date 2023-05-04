!function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=4)}([function(r,n,e){var t=e(1);"string"==typeof t&&(t=[[r.i,t,""]]);var o={insert:"head",singleton:!1};e(3)(t,o);t.locals&&(r.exports=t.locals)},function(r,n,e){(n=r.exports=e(2)(!1)).push([r.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",""]),n.push([r.i,":root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\np {\r\n  word-wrap: break-word;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input,\r\nform label,\r\nform button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n\r\n.resultado-ok,\r\n.resultado-bad {\r\n  background-color: rgb(24, 168, 67);\r\n  padding: 10px 20px;\r\n}\r\n\r\n.resultado-bad {\r\n  background-color: rgb(168, 24, 24);\r\n}\r\n\r\n.caixa {\r\n  float: right;\r\n  width: 50%;\r\n  font-size: small;\r\n}\r\n\r\n.exemplos,\r\n.anotacoes {\r\n  border: 1px solid;\r\n  color: brown;\r\n  font-size: medium;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.anotacoes {\r\n  color: rgb(43, 114, 78);\r\n  padding-left: 6px;\r\n}\r\n\r\ninput {\r\n  caret-color: aqua;\r\n}\r\n\r\n.btnTimer {\r\n  width: 10px;\r\n  height: 15px;\r\n}\r\n\r\n.timer {\r\n  font-size: 4em;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.pausado {\r\n  color: red;\r\n}\r\n\r\n\r\n/**calculadora */\r\n.calculadora {\r\n  margin: auto;\r\n  width: 460px;\r\n\r\n}\r\n\r\n.display {\r\n  font-size: 2em;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.btn {\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 1em;\r\n  border: none;\r\n  background: #75b8d3;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n  background: #4e8196;\r\n}\r\n\r\n.btn-eq {\r\n  background: rgb(79, 112, 209);\r\n}\r\n\r\n.btn-eq:hover {\r\n  background: rgb(47, 74, 156);\r\n}\r\n\r\n.btn-clear {\r\n  background: rgb(85, 201, 85);\r\n}\r\n\r\n.btn-clear:hover {\r\n  background: rgb(55, 133, 55);\r\n}\r\n\r\n.btn-del {\r\n  background: rgb(201, 85, 85);\r\n}\r\n\r\n.btn-del:hover {\r\n  background: rgb(151, 61, 61);\r\n}\r\n\r\n/** zoom em foto */\r\n\r\n.zoom {\r\n  overflow: hidden;\r\n}\r\n\r\n.zoom img {\r\n  max-width: 100%;\r\n  -moz-transition: all 0.3s;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.zoom:hover img {\r\n  -moz-transform: scale(1.1);\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.text-item {\r\n  position: absolute;\r\n  left: 5%;\r\n  right: 5%;\r\n  bottom: 20px;\r\n  z-index: 10;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n/** ########################## FORMULARIO ################################### **/\r\n\r\n.mensagemErro {\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n\r\n/*#################################c##################################################*/\r\n.imagem {  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n/*------------------------------------cor da primeira letra no h1--------------------------------------------------*/\r\nh1::first-letter{\r\n  color:#00D1FF;\r\n  font-size: 54px;\r\n  font-weight: bold;\r\n  text-transform:uppercase;\r\n}\r\n/*------------------------------espaço do paragrafo----------------------------------------------------*/\r\n.esp{\r\n  margin-left: 18px;\r\n  color: red;\r\n}\r\n/*------------------------------espaço do paragrafo----------------------------------------------------*/",""])},function(r,n,e){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e=r[1]||"",t=r[3];if(!t)return e;if(n&&"function"==typeof btoa){var o=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot).concat(r," */")}));return[e].concat(a).concat([o]).join("\n")}var i,c,u;return[e].join("\n")}(n,r);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e})).join("")},n.i=function(r,e){"string"==typeof r&&(r=[[null,r,""]]);for(var t={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(t[a]=!0)}for(var i=0;i<r.length;i++){var c=r[i];null!=c[0]&&t[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),n.push(c))}},n}},function(r,n,e){"use strict";var t,o={},a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}();function c(r,n){for(var e=[],t={},o=0;o<r.length;o++){var a=r[o],i=n.base?a[0]+n.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};t[i]?t[i].parts.push(c):e.push(t[i]={id:i,parts:[c]})}return e}function u(r,n){for(var e=0;e<r.length;e++){var t=r[e],a=o[t.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](t.parts[i]);for(;i<t.parts.length;i++)a.parts.push(m(t.parts[i],n))}else{for(var c=[];i<t.parts.length;i++)c.push(m(t.parts[i],n));o[t.id]={id:t.id,refs:1,parts:c}}}}function s(r){var n=document.createElement("style");if(void 0===r.attributes.nonce){var t=e.nc;t&&(r.attributes.nonce=t)}if(Object.keys(r.attributes).forEach((function(e){n.setAttribute(e,r.attributes[e])})),"function"==typeof r.insert)r.insert(n);else{var o=i(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,f=(l=[],function(r,n){return l[r]=n,l.filter(Boolean).join("\n")});function p(r,n,e,t){var o=e?"":t.css;if(r.styleSheet)r.styleSheet.cssText=f(n,o);else{var a=document.createTextNode(o),i=r.childNodes;i[n]&&r.removeChild(i[n]),i.length?r.insertBefore(a,i[n]):r.appendChild(a)}}function d(r,n,e){var t=e.css,o=e.media,a=e.sourceMap;if(o&&r.setAttribute("media",o),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var g=null,b=0;function m(r,n){var e,t,o;if(n.singleton){var a=b++;e=g||(g=s(n)),t=p.bind(null,e,a,!1),o=p.bind(null,e,a,!0)}else e=s(n),t=d.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var e=c(r,n);return u(e,n),function(r){for(var t=[],a=0;a<e.length;a++){var i=e[a],s=o[i.id];s&&(s.refs--,t.push(s))}r&&u(c(r,n),n);for(var l=0;l<t.length;l++){var f=t[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}},function(r,n,e){"use strict";function t(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}e.r(n);var o=function(){function r(n){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:n.replace(/\D+/g,"")})}var n,e,o;return n=r,o=[{key:"geraDigito",value:function(r){var n=0,e=r.length+1,t=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done);t=!0){var u=i.value;n+=e*Number(u),e--}}catch(r){o=!0,a=r}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}var s=11-n%11;return s<=9?String(s):"0"}}],(e=[{key:"éSequência",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var n=this.cpfLimpo.slice(0,-2),e=r.geraDigito(n),t=r.geraDigito(n+e);this.novoCPF=n+e+t}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequência()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&t(n.prototype,e),o&&t(n,o),r}();function a(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}var i,c=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,e,t;return n=r,(e=[{key:"rand",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(n-r)+r))}},{key:"formatado",value:function(r){return r.slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}},{key:"geraNovoCpf",value:function(){var r=this.rand(),n=o.geraDigito(r),e=r+n+o.geraDigito(r+n);return this.formatado(e)}}])&&a(n.prototype,e),t&&a(n,t),r}();e(0);i=new c,document.querySelector(".cpf-gerado").innerHTML=i.geraNovoCpf()}]);
//# sourceMappingURL=bundle.js.map