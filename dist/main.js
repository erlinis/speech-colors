!function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=6)}([function(e,n,o){"use strict";var r,t=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[n]=o}return e[n]}}(),i=[];function l(e){for(var n=-1,o=0;o<i.length;o++)if(i[o].identifier===e){n=o;break}return n}function s(e,n){for(var o={},r=[],t=0;t<e.length;t++){var a=e[t],s=n.base?a[0]+n.base:a[0],c=o[s]||0,u="".concat(s," ").concat(c);o[s]=c+1;var d=l(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:m(p,n),references:1}),r.push(u)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var t=o.nc;t&&(r.nonce=t)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,o,r){var t=o?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,t);else{var a=document.createTextNode(t),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function g(e,n,o){var r=o.css,t=o.media,a=o.sourceMap;if(t?e.setAttribute("media",t):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,f=0;function m(e,n){var o,r,t;if(n.singleton){var a=f++;o=b||(b=c(n)),r=p.bind(null,o,a,!1),t=p.bind(null,o,a,!0)}else o=c(n),r=g.bind(null,o,n),t=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else t()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=t());var o=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<o.length;r++){var t=l(o[r]);i[t].references--}for(var a=s(e,n),c=0;c<o.length;c++){var u=l(o[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}o=a}}}},function(e,n,o){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o=function(e,n){var o=e[1]||"",r=e[3];if(!r)return o;if(n&&"function"==typeof btoa){var t=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[o].concat(a).concat([t]).join("\n")}var i,l,s;return[o].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(o,"}"):o})).join("")},n.i=function(e,o,r){"string"==typeof e&&(e=[[null,e,""]]);var t={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(t[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&t[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),n.push(s))}},n}},function(e,n,o){var r=o(0),t=o(3);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]);var a={insert:"head",singleton:!1},i=(r(t,a),t.locals?t.locals:{});e.exports=i},function(e,n,o){(n=o(1)(!1)).push([e.i,"/* normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}details,main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}\n\n\n/* Variables */\nhtml {\n  --grey: #e7e7e7;\n  --gray: var(--grey);\n  --blue: #0072B9;\n  --pink: #D60087;\n  --yellow: #ffc600;\n  --black: #2e2e2e;\n  --red: #c73737;\n  --green: #61e846;\n  --text-shadow: 2px 2px 0 rgba(0,0,0,0.2);\n  --box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);\n  font-size: 62.5%;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  font-size: 2rem;\n  line-height: 1.5;\n  background-color: var(--blue);\n  background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 21.184c.13.357.264.72.402 1.088l.661 1.768C4.653 33.64 6 39.647 6 50c0 10.271-1.222 15.362-4.928 24.629-.383.955-.74 1.869-1.072 2.75v6.225c.73-2.51 1.691-5.139 2.928-8.233C6.722 65.888 8 60.562 8 50c0-10.626-1.397-16.855-5.063-26.66l-.662-1.767C1.352 19.098.601 16.913 0 14.85v6.335zm20 0C17.108 13.258 16 8.077 16 0h2c0 5.744.574 9.951 2 14.85v6.334zm0 56.195c-2.966 7.86-4 13.123-4 22.621h2c0-6.842.542-11.386 2-16.396v-6.225zM6 0c0 8.44 1.21 13.718 4.402 22.272l.661 1.768C14.653 33.64 16 39.647 16 50c0 10.271-1.222 15.362-4.928 24.629C7.278 84.112 6 89.438 6 100h2c0-10.271 1.222-15.362 4.928-24.629C16.722 65.888 18 60.562 18 50c0-10.626-1.397-16.855-5.063-26.66l-.662-1.767C9.16 13.223 8 8.163 8 0H6z' fill='%23fff' fill-rule='nonzero' fill-opacity='.1' opacity='.349'/%3E%3C/svg%3E%0A\");\n  background-size: 15px;\n}\n\n\n/* Table Styles */\n\ntable {\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n  border-collapse: collapse;\n}\n\ntd, th {\n  border: 1px solid var(--grey);\n  padding: 0.5rem;\n}\n\n\n/* Helper Divs */\n\n.wrapper {\n  max-width: 1000px;\n  margin: 4rem auto;\n  padding: 2rem;\n  background: white;\n}\n\n.box, .wrapper {\n  box-shadow: 0 0 3px 5px rgba(0,0,0,0.08653);\n}\na {\n  color: var(--blue);\n  text-decoration-color: var(--yellow);\n}\n\n\na.button, button, input[type=\"button\"] {\n  color: white;\n  background: var(--pink);\n  padding: 1rem;\n  border: 0;\n  border: 2px solid transparent;\n  text-decoration: none;\n  font-weight: 600;\n  font-size:2rem;\n}\n\n:focus {\n  outline-color: var(--pink);\n}\n\nfieldset {\n  border: 1px solid black;\n}\n\ninput:not([type=\"checkbox\"]):not([type=\"radio\"]), textarea, select {\n  display: block;\n  padding: 1rem;\n  border: 1px solid var(--grey);\n}\n\n.success {\n  border: 1px solid red;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: white;\n  margin-top: 0;\n  line-height: 1;\n  text-shadow: var(--text-shadow);\n}\n.wrapper h1,\n.wrapper h2,\n.wrapper h3,\n.wrapper h4,\n.wrapper h5,\n.wrapper h6 {\n  color: var(--black);\n  text-shadow: none;\n}\n",""]),e.exports=n},function(e,n,o){var r=o(0),t=o(5);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]);var a={insert:"head",singleton:!1},i=(r(t,a),t.locals?t.locals:{});e.exports=i},function(e,n,o){(n=o(1)(!1)).push([e.i,"*,\n*:after,\n*:before {\n  box-sizing: border-box;\n}\n\nbody {\n  transition: background-color 0.4s;\n  font-family: sans-serif;\n  text-align: center;\n}\n\nh1 {\n  font-size: 10rem;\n  margin: 5rem 0 0 0;\n  transition: all 0.4s;\n  position: relative;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.lang {\n  display: flex;\n  margin: 0 auto;\n  font-size: 3.5rem;\n  justify-content: center;\n}\n\n\n.colors {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 5rem;\n}\n\n.colors span {\n  color: rgba(0, 0, 0, 0.4);\n  flex:1;\n  padding: 1rem;\n  font-weight: 900;\n}\n\n.colors span.dark {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n@keyframes jump {\n  from {\n    transform: scale(2.5) rotate(-3deg);\n    box-shadow: var(--box-shadow);\n  }\n  to {\n    transform: scale(1) rotate(0);\n  }\n}\n\n.colors span.got {\n  text-decoration: line-through;\n  animation: jump 0.2s ease-in-out 2 alternate-reverse;\n}\n",""]),e.exports=n},function(e,n,o){"use strict";o.r(n);o(2),o(4);const r=document.querySelector(".colors"),t=document.querySelector("select[name='lang']");let a=[];const i=[{color:"#000000",en:"black",es:"negro"},{color:"#C0C0C0",en:"silver",es:"plateado"},{color:"#808080",en:"grey",es:"gris"},{color:"#FFFFFF",en:"white",es:"blanco"},{color:"#800000",en:"maroon",es:"granate"},{color:"#FF0000",en:"red",es:"rojo"},{color:"#800080",en:"purple",es:"púrpura"},{color:"#FF00FF",en:"fuchsia",es:"fucsia"},{color:"#008000",en:"green",es:"verde"},{color:"#00FF00",en:"lime",es:"lima"},{color:"#808000",en:"olive",es:"oliva"},{color:"#FFFF00",en:"yellow",es:"amarillo"},{color:"#000080",en:"navy",es:"naval"},{color:"#0000FF",en:"blue",es:"azul"},{color:"#008080",en:"teal",es:"teal"},{color:"#00FFFF",en:"aqua",es:"aguamarina"},{color:"#00008B",en:"darkblue",es:"azuloscuro"},{color:"#0000CD",en:"mediumblue",es:"azulmedio"},{color:"#006400",en:"darkgreen",es:"verdeoscuro"},{color:"#008B8B",en:"darkcyan",es:"verdecian"},{color:"#00BFFF",en:"deepskyblue",es:"azulcieloprofundo"},{color:"#00CED1",en:"darkturquoise",es:"turquezaoscuro"},{color:"#00FA9A",en:"mediumspringgreen",es:"verdeprimaveramedio"},{color:"#00FF7F",en:"springgreen",es:"verdeprimavera"},{color:"#00FFFF",en:"cyan",es:"cian"},{color:"#191970",en:"midnightblue",es:"azulmedianoche"},{color:"#1E90FF",en:"dodgerblue",es:"dodgerazul"},{color:"#20B2AA",en:"lightseagreen",es:"verdeclaro"},{color:"#228B22",en:"forestgreen",es:"verdebosque"},{color:"#2E8B57",en:"seagreen",es:"verdemar"},{color:"#2F4F4F",en:"darkslategray",es:"grisnoche"},{color:"#32CD32",en:"limegreen",es:"verdelima"},{color:"#3CB371",en:"mediumseagreen",es:"verdemarmedio"},{color:"#40E0D0",en:"turquoise",es:"turquesa"},{color:"#4169E1",en:"royalblue",es:"azulreal"},{color:"#4682B4",en:"steelblue",es:"azulacero"},{color:"#483D8B",en:"darkslateblue",es:"azulnocheoscura"},{color:"#48D1CC",en:"mediumturquoise",es:"turquesamedio"},{color:"#4B0082",en:"indigo",es:"indigo"},{color:"#556B2F",en:"darkolivegreen",es:"verdeolivaoscuro"},{color:"#5F9EA0",en:"cadetblue",es:"azulcadete"},{color:"#6495ED",en:"cornflowerblue",es:"azullavanda"},{color:"#663399",en:"rebeccapurple",es:"rebecapúrpura"},{color:"#66CDAA",en:"mediumaquamarine",es:"aguamarinamedio"},{color:"#696969",en:"dimgray",es:"gristenue"},{color:"#696969",en:"dimgrey",es:"gristenue"},{color:"#6A5ACD",en:"slateblue",es:"azulpizarra"},{color:"#6B8E23",en:"olivedrab",es:"verdeoliva"},{color:"#708090",en:"slategray",es:"grispizarra"},{color:"#708090",en:"slategrey",es:"grisizarra"},{color:"#778899",en:"lightslategray",es:"grisizarraclaro"},{color:"#778899",en:"lightslategrey",es:"grisizarraclaro"},{color:"#7B68EE",en:"mediumslateblue",es:"azulpizarramedio"},{color:"#7CFC00",en:"lawngreen",es:"verdecésped"},{color:"#7FFF00",en:"chartreuse",es:"verdechillón"},{color:"#7FFFD4",en:"aquamarine",es:"aguamarina"},{color:"#87CEEB",en:"skyblue",es:"azulcielo"},{color:"#87CEFA",en:"lightskyblue",es:"azulcieloclaro"},{color:"#8A2BE2",en:"blueviolet",es:"azulvioleta"},{color:"#8B0000",en:"darkred",es:"rojooscuro"},{color:"#8B008B",en:"darkmagenta",es:"magentaoscuro"},{color:"#8B4513",en:"saddlebrown",es:"marróncaballo"},{color:"#8FBC8F",en:"darkseagreen",es:"verdemaroscuro"},{color:"#90EE90",en:"lightgreen",es:"verdeclaro"},{color:"#9370DB",en:"mediumpurple",es:"púrpura"},{color:"#9400D3",en:"darkviolet",es:"violetaoscuro"},{color:"#98FB98",en:"palegreen",es:"verdepálido"},{color:"#9932CC",en:"darkorchid",es:"orquídeaoscura"},{color:"#9ACD32",en:"yellowgreen",es:"amarilloverdoso"},{color:"#A0522D",en:"sienna",es:"tierra"},{color:"#A52A2A",en:"brown",es:"marrón"},{color:"#A9A9A9",en:"darkgray",es:"grisoscuro"},{color:"#A9A9A9",en:"darkgrey",es:"grisoscuro"},{color:"#ADD8E6",en:"lightblue",es:"azulclaro"},{color:"#ADFF2F",en:"greenyellow",es:"verdeamarillento"},{color:"#AFEEEE",en:"paleturquoise",es:"turquesapálido"},{color:"#B0C4DE",en:"lightsteelblue",es:"acero"},{color:"#B0E0E6",en:"powderblue",es:"azul pálido"},{color:"#B22222",en:"firebrick",es:"ladrillo"},{color:"#B8860B",en:"darkgoldenrod",es:"doradoquemado"},{color:"#BA55D3",en:"mediumorchid",es:"orquídeamedio"},{color:"#BC8F8F",en:"rosybrown",es:"paloderosa"},{color:"#BDB76B",en:"darkkhaki",es:"caquioscuro"},{color:"#C71585",en:"mediumvioletred",es:"rojovioletamedio"},{color:"#CD5C5C",en:"indianred",es:"rojoindio"},{color:"#CD853F",en:"peru",es:"pero"},{color:"#D2691E",en:"chocolate",es:"chocolate"},{color:"#D2B48C",en:"tan",es:"canela"},{color:"#D3D3D3",en:"lightgray",es:"grisclaro"},{color:"#D3D3D3",en:"lightgrey",es:"grisclaro"},{color:"#D8BFD8",en:"thistle",es:"cardo"},{color:"#DA70D6",en:"orchid",es:"orquídea"},{color:"#DAA520",en:"goldenrod",es:"oro"},{color:"#DB7093",en:"palevioletred",es:"violetarojizo"},{color:"#DC143C",en:"crimson",es:"carmesí"},{color:"#DCDCDC",en:"gainsboro",es:"boro"},{color:"#DDA0DD",en:"plum",es:"ciruela"}];function l(e){return a=function(e){const n=e.slice(0,2),o=i.map(e=>[e[n],e.color]);return Object.fromEntries(o)}(e),a}window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;const s=new SpeechRecognition;s.continuous=!0,s.interimResults=!0,s.onresult=g,s.lang="en-US";const c=new SpeechRecognition;function u(e){return function(e){return Object.keys(e).sort((e,n)=>e.length-n.length)}(e).map(n=>`<span \n            class="color ${n} ${function(e){const n=a[e].substring(1,7);return.299*parseInt(n.substring(0,2),16)+.587*parseInt(n.substring(2,4),16)+.114*parseInt(n.substring(4,6),16)<120}(n)?"dark":""}" \n            style="background: ${e[n]};"\n            data-rgb="${e[n]}">\n              ${n}\n        </span>`).join("")}function d(e){r.innerHTML=u(e)}function p(e){const n=e.target.value,o=l(n);!function(e){"en-US"===e?(s.start(),c.stop()):(c.start(),s.stop())}(n),d(o)}function g({results:e}){!function(e){const n=e[e.length-1][0].transcript;console.log("You said:",n)}(e);let n=e[e.length-1][0].transcript.toLowerCase();if(n=n.replace(/\s/g,""),!function(e){return!!a[e]}(n))return;const o=document.querySelector(`.${n}`),r=o.dataset.rgb;o.classList.add("got"),document.body.style.backgroundColor=r}c.continuous=!0,c.interimResults=!0,c.onresult=g,c.lang="es-CO",window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,function(){if(!("SpeechRecognition"in window))return void console.log("Sorry, your browser does not support speech recognition :(");d(l(t.value)),s.start(),t.addEventListener("change",p)}()}]);