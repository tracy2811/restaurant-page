!function(e){var t={};function n(d){if(t[d])return t[d].exports;var c=t[d]={i:d,l:!1,exports:{}};return e[d].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(d,c,function(t){return e[t]}.bind(null,c));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d=function(e="Yum Yum",t="Lorem ipsum dolor sit amet, consectetur adipiscing elit."){const n=document.createElement("div");n.id="home",n.classList.add("tab");const d=document.createElement("h1");d.textContent=e;const c=document.createElement("p");return c.textContent=t,n.appendChild(d),n.appendChild(c),n};var c=function(e="0123456789",t="123 ABC Str, Defgh, Ikl"){const n=document.createElement("div");n.id="contact",n.classList="tab";const d=document.createElement("p");d.textContent="Phone: "+e;const c=document.createElement("p");return c.textContent="Address: "+t,n.appendChild(d),n.appendChild(c),n};var r=function(e=6){const t=document.createElement("div");t.id="menu",t.classList.add("flex");for(let n=0;n<e;++n){const e=document.createElement("div");e.id=n,e.classList.add("item");const d=document.createElement("p");d.classList.add("name"),d.textContent=`Combo ${n+1}`;const c=document.createElement("p");c.classList.add("price"),c.textContent=Math.ceil(10*Math.random())+" $",e.appendChild(d),e.appendChild(c),t.appendChild(e)}return t};(function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("div");return e.id="display",e.appendChild(d()),e}(),n=function(){const e=function(e){for(;t.firstChild;)t.removeChild(t.firstChild);const n=e.target.parentNode.children;for(let e=0;e<n.length;++e)n[e].classList.remove("current");switch(e.target.classList.add("current"),e.target.dataset.name){case"contact":t.appendChild(c());break;case"menu":t.appendChild(r());break;default:t.appendChild(d())}},n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("ul"),i=document.createElement("li"),l=document.createElement("li"),u=document.createElement("li");return n.id="nav",n.classList.add("flex"),a.id="brand",a.textContent="Yum Yum",a.addEventListener("click",e),i.dataset.name="home",i.textContent="Home",i.classList.add("current"),i.addEventListener("click",e),l.dataset.name="contact",l.textContent="Contact",l.addEventListener("click",e),u.dataset.name="menu",u.textContent="Menu",u.addEventListener("click",e),o.appendChild(i),o.appendChild(u),o.appendChild(l),n.appendChild(a),n.appendChild(o),n}();return{show:function(){e.appendChild(n),e.appendChild(t)}}})().show()}]);