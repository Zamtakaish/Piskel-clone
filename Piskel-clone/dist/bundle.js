!function(e){var t={};function a(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";function n(e){var t=document.getElementsByClassName("main__workspace__tools__items")[0],a=document.getElementsByClassName("main__workspace__tools__items__tool"),n=t.getElementsByClassName("active");n.length>0&&(n[0].className=n[0].className.replace(" active","")),a[e].className+=" active"}function s(){return function(){for(var e=function(e){document.getElementsByClassName("main__workspace__tools__items__tool")[e].addEventListener("click",function(){n(e)})},t=0;t<8;t+=1)e(t)}(),document.addEventListener("keydown",function(e){switch(e.code){case"KeyP":n(0);break;case"KeyO":n(1);break;case"KeyB":n(2);break;case"KeyE":n(3);break;case"KeyR":n(4);break;case"KeyC":n(5);break;case"KeyL":n(6);break;case"KeyM":n(7)}}),e=document.getElementsByClassName("main__workspace__tools__items")[0],t=document.getElementsByClassName("main__workspace__tools__items__tool"),document.getElementById("curr-color").style.backgroundColor=getComputedStyle(document.getElementById("curr-color")).backgroundColor,void document.body.addEventListener("mouseup",function(a){var n=document.elementFromPoint(a.clientX,a.clientY).closest(".main__workspace__tools__items__tool");if(e.getElementsByClassName("active")[0]===t[1]&&1===a.which&&null===n){var s=getComputedStyle(document.getElementById("curr-color")).backgroundColor;document.getElementById("curr-color").style.backgroundColor=getComputedStyle(a.target).backgroundColor,document.getElementById("prev-color").style.backgroundColor=s}});var e,t}function r(e,t,a,n){var s=document.createElement(e);return s.className+=t,arguments.length>3&&(s.id=n),a.appendChild(s),s}function c(){var e,t=document.getElementsByClassName("main__workspace__layers")[0],a=t.getElementsByClassName("current")[0];a?(e="l".concat((+t.lastElementChild.getAttribute("id").slice(1)+1).toString()),a.className=a.className.replace(" current","")):e="l1";var n=r("div","main__workspace__layers__layer_wrapper",t,e);n.classList+=" current",n=r("div","main__workspace__layers__layer",t=n),(n=r("img","main__workspace__layers__layer__make-copy_icon",r("div","main__workspace__layers__layer__make-copy",t=n))).setAttribute("src","assets/pictures/copy-icon.svg"),n.setAttribute("alt",""),(n=r("img","main__workspace__layers__layer__delete_icon",r("div","main__workspace__layers__layer__delete",t))).setAttribute("src","assets/pictures/trash-icon.svg"),n.setAttribute("alt","")}function o(e){var t,a=e,n=a.getContext("2d"),s=document.getElementsByClassName("main__workspace__canvas_wrapper")[0],r=+document.getElementsByClassName("main__workspace__size-scale")[0].getAttribute("scale"),c=32*Math.floor(getComputedStyle(s).width.slice(0,-2)/32);a.width=c,a.height=c,t=c/r,n.scale(t,t),a.addEventListener("mousedown",function(){a.className+=" active",n.fillStyle=document.getElementById("curr-color").style.backgroundColor}),a.addEventListener("mouseup",function(){a.className=a.className.replace(" active","")}),a.addEventListener("mouseleave",function(){a.className=a.className.replace(" active","")}),a.addEventListener("mousemove",function(e){var s=document.getElementsByClassName("main__workspace__tools__items")[0],r=document.getElementsByClassName("main__workspace__tools__items__tool")[0];a.classList.contains("active")&&s.getElementsByClassName("active")[0]===r&&n.fillRect(Math.floor(e.offsetX/t),Math.floor(e.offsetY/t),1,1)})}function l(e){var t,a=document.getElementsByClassName("main__workspace__canvas_wrapper")[0],n=a.getElementsByClassName("current")[0];n?(t="c".concat((+a.lastElementChild.getAttribute("id").slice(1)+1).toString()),n.className=n.className.replace(" current","")):t="c1";var s=r("canvas","main__workspace__canvas",a,t);(s.setAttribute("width","580"),s.setAttribute("height","580"),s.classList+=" current",arguments.length)&&s.getContext("2d").drawImage(document.getElementById(e),0,0);o(s)}function i(e){return e.nextElementSibling&&e.nextElementSibling.classList.contains("main__workspace__canvas")?e.nextElementSibling:document.getElementsByClassName("main__workspace__canvas_wrapper")[0].firstElementChild}function m(){document.getElementsByClassName("footer_button_animate")[0].addEventListener("click",function(){!function(e){var t=document.getElementsByClassName("footer_button_animate")[0];if(0!=+t.getAttribute("animated"))return cancelAnimationFrame(+t.getAttribute("animated")),void t.setAttribute("animated","0");var a=performance.now(),n=document.getElementsByClassName("main__workspace__canvas_wrapper")[0].getElementsByClassName("current")[0],s=i(n);t.setAttribute("animated",requestAnimationFrame(function r(c){c-a>=e?(a=c,n.className=n.className.replace(" current",""),s.classList+=" current",s=i(n=s),t.setAttribute("animated",requestAnimationFrame(r))):t.setAttribute("animated",requestAnimationFrame(r))}))}(1e3/+document.getElementById("fps").getAttribute("value"))})}function _(e){var t=document.getElementsByClassName("main__workspace__canvas_wrapper")[0].getElementsByClassName("current")[0],a=document.getElementsByClassName("main__workspace__canvas_temp")[0],n=document.getElementsByClassName("main__workspace__preview")[0],s=t.getContext("2d"),r=a.getContext("2d"),c=n.getContext("2d");a.width=t.width,a.height=t.height,r.imageSmoothingEnabled=!1,r.mozImageSmoothingEnabled=!1,r.webkitImageSmoothingEnabled=!1,r.msImageSmoothingEnabled=!1,e?r.drawImage(t,0,0,t.width,t.height,0,0,+t.width/2,+t.height/2):r.drawImage(t,0,0,+t.width/2,+t.height/2,0,0,t.width,t.height),s.clearRect(0,0,t.width,t.height),s.drawImage(a,0,0,t.width,t.height,0,0,32,32),c.clearRect(0,0,t.width,t.height),c.drawImage(a,0,0,t.width,t.height,0,0,n.width,n.height),r.clearRect(0,0,t.width,t.height)}function u(){var e,t,a,n,i,u,d,g,p;s(),e=document.getElementsByClassName("main__workspace__tools__items")[0],t=document.getElementsByClassName("main__workspace__tools__items__tool"),a=document.getElementsByClassName("main__workspace__canvas_wrapper")[0],n=a.getElementsByClassName("current")[0],i=n.getContext("2d"),u=Math.floor(getComputedStyle(a).width.slice(0,-2)/32),n.addEventListener("mousemove",function(a){e.getElementsByClassName("active")[0]===t[3]&&n.classList.contains("active")&&i.clearRect(Math.floor(a.offsetX/u),Math.floor(a.offsetY/u),1,1)}),d=document.getElementsByClassName("main__workspace__layers")[0],document.getElementById("add-layer").addEventListener("click",function(){c(),l()}),d.addEventListener("click",function(e){var t=e.target,a=document.getElementsByClassName("main__workspace__canvas_wrapper")[0];if(t.classList.contains("main__workspace__layers__layer")){var n,s=d.getElementsByClassName("current")[0];s?(n=s.getAttribute("id").slice(1),s.className=s.className.replace(" current","")):n="1";var r=document.getElementById("c".concat(n));r.className=r.className.replace(" current","");var o=t.parentElement.getAttribute("id").slice(1),i=document.getElementById("c".concat(o));t.parentElement.classList+=" current",i.classList+=" current"}if(t.classList.contains("main__workspace__layers__layer__make-copy_icon")){var m="c".concat(e.target.parentElement.parentElement.parentElement.getAttribute("id").slice(1));c(),l(m)}if(t.classList.contains("main__workspace__layers__layer__delete_icon")){var _=e.target.parentElement.parentElement.parentElement,u=_.getAttribute("id").slice(1);d.removeChild(_),a.removeChild(document.getElementById("c".concat(u)))}}),o(document.getElementsByClassName("main__workspace__canvas_wrapper")[0].getElementsByClassName("current")[0]),document.getElementsByClassName("footer_button_reset")[0].addEventListener("click",function(e){1===e.which&&(localStorage.clear(),document.location.reload())}),function(){var e=document.getElementsByClassName("main__workspace__preview_wrapper")[0],t=document.getElementsByClassName("main__workspace__preview")[0],a=t.getContext("2d"),n=32*Math.floor(getComputedStyle(e).height.slice(0,-2)/32)*.8,s=document.getElementsByClassName("main__workspace__canvas_wrapper")[0].getElementsByClassName("current")[0];t.width=n,t.height=n,s.addEventListener("mouseup",function(){a.drawImage(s,0,0,s.width,s.height,0,0,t.width,t.height)})}(),(g=document.getElementsByClassName("main__workspace__size-scale")[0]).addEventListener("click",function(e){var t=g.getElementsByClassName("current")[0],a=e.target;if(a!==g&&a!==t){t.className=t.className.replace(" current",""),a.className+=" current";var n=g.getAttribute("scale"),s=a.id.slice(1);+n<+s?(_(!0),2*+n<+s&&_(!0)):(_(!1),+n>2*+s&&_(!1)),g.setAttribute("scale",s)}}),m(),(p=document.getElementById("fps")).addEventListener("input",function(){p.setAttribute("value",p.value)}),document.getElementsByClassName("footer_button_fullscreen")[0].addEventListener("click",function(){var e=document.getElementsByClassName("main__workspace__canvas_wrapper")[0],t=r("div","main__workspace__canvas_wrapper__fullscreen_button",e);t.innerHTML="Turn off fullscreen",t.addEventListener("click",function(){document.exitFullscreen(),e.removeChild(t)}),e.requestFullscreen()})}a.r(t),u()}]);