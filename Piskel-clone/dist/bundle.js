!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e){var t=document.getElementsByClassName("main__workspace__tools__items")[0],n=document.getElementsByClassName("main__workspace__tools__items__tool"),a=t.getElementsByClassName("active");a.length>0&&(a[0].className=a[0].className.replace(" active","")),n[e].className+=" active"}function r(){return function(){for(var e=function(e){document.getElementsByClassName("main__workspace__tools__items__tool")[e].addEventListener("click",function(){a(e)})},t=0;t<2;t+=1)e(t)}(),KeyboardEvent.P="KeyP",KeyboardEvent.E="KeyE",document.addEventListener("keydown",function(e){e.code===KeyboardEvent.P&&a(0),e.code===KeyboardEvent.E&&a(1)}),e=document.getElementsByClassName("main__workspace__tools__items")[0],t=document.getElementsByClassName("main__workspace__tools__items__tool"),document.getElementById("curr-color").style.backgroundColor=getComputedStyle(document.getElementById("curr-color")).backgroundColor,void document.body.addEventListener("mouseup",function(n){var a=document.elementFromPoint(n.clientX,n.clientY).closest(".main__workspace__tools__items__tool");if(e.getElementsByClassName("active")[0]===t[1]&&1===n.which&&null===a){var r=getComputedStyle(document.getElementById("curr-color")).backgroundColor;document.getElementById("curr-color").style.backgroundColor=getComputedStyle(n.target).backgroundColor,document.getElementById("prev-color").style.backgroundColor=r}});var e,t}function s(e,t,n,a){var r=document.createElement(e);return r.className+=t,arguments.length>3&&(r.id=a),n.appendChild(r),r}function c(){var e,t=document.getElementsByClassName("main__workspace__layers")[0],n=t.getElementsByClassName("current")[0];n?(e="l".concat((+t.lastElementChild.getAttribute("id").slice(1)+1).toString()),n.className=n.className.replace(" current","")):e="l1";var a=s("div","main__workspace__layers__layer_wrapper",t,e);a.classList+=" current",a=s("div","main__workspace__layers__layer",t=a),(a=s("img","main__workspace__layers__layer__make-copy_icon",s("div","main__workspace__layers__layer__make-copy",t=a))).setAttribute("src","assets/pictures/copy-icon.svg"),a.setAttribute("alt",""),(a=s("img","main__workspace__layers__layer__delete_icon",s("div","main__workspace__layers__layer__delete",t))).setAttribute("src","assets/pictures/trash-icon.svg"),a.setAttribute("alt","")}function o(e){var t=e,n=t.getContext("2d");n.scale(10,10),t.addEventListener("mousedown",function(){t.className+=" active",n.fillStyle=document.getElementById("curr-color").getAttribute("style").slice(18).slice(0,-1)}),t.addEventListener("mouseup",function(){t.className=t.className.replace(" active","")}),t.addEventListener("mousemove",function(e){var a=document.getElementsByClassName("main__workspace__tools__items")[0],r=document.getElementsByClassName("main__workspace__tools__items__tool")[0];t.classList.contains("active")&&a.getElementsByClassName("active")[0]===r&&n.fillRect(e.offsetX/10,e.offsetY/10,1,1)})}function l(e){var t,n=document.getElementsByClassName("main__workspace__canvas_wrapper")[0],a=n.getElementsByClassName("current")[0];a?(t="c".concat((+n.lastElementChild.getAttribute("id").slice(1)+1).toString()),a.className=a.className.replace(" current","")):t="c1";var r=s("canvas","main__workspace__canvas",n,t);(r.setAttribute("width","580"),r.setAttribute("height","580"),r.classList+=" current",arguments.length)&&r.getContext("2d").drawImage(document.getElementById(e),0,0);o(r)}function i(e){return e.nextElementSibling&&e.nextElementSibling.classList.contains("main__workspace__canvas")?e.nextElementSibling:document.getElementsByClassName("main__workspace__canvas_wrapper")[0].firstElementChild}function m(){document.getElementsByClassName("footer_button_animate")[0].addEventListener("click",function(){!function(e){var t=document.getElementsByClassName("footer_button_animate")[0];if(0!=+t.getAttribute("animated"))return cancelAnimationFrame(+t.getAttribute("animated")),void t.setAttribute("animated","0");var n=performance.now(),a=document.getElementsByClassName("main__workspace__canvas_wrapper")[0].getElementsByClassName("current")[0],r=i(a);t.setAttribute("animated",requestAnimationFrame(function s(c){c-n>=e?(n=c,a.className=a.className.replace(" current",""),r.classList+=" current",r=i(a=r),t.setAttribute("animated",requestAnimationFrame(s))):t.setAttribute("animated",requestAnimationFrame(s))}))}(1e3/+document.getElementById("fps").getAttribute("value"))})}function _(){var e,t;r(),e=document.getElementsByClassName("main__workspace__layers")[0],document.getElementById("add-layer").addEventListener("click",function(){c(),l()}),e.addEventListener("click",function(t){var n=t.target,a=document.getElementsByClassName("main__workspace__canvas_wrapper")[0];if(n.classList.contains("main__workspace__layers__layer")){var r,s=e.getElementsByClassName("current")[0];s?(r=s.getAttribute("id").slice(1),s.className=s.className.replace(" current","")):r="1";var o=document.getElementById("c".concat(r));o.className=o.className.replace(" current","");var i=n.parentElement.getAttribute("id").slice(1),m=document.getElementById("c".concat(i));n.parentElement.classList+=" current",m.classList+=" current"}if(n.classList.contains("main__workspace__layers__layer__make-copy_icon")){var _="c".concat(t.target.parentElement.parentElement.parentElement.getAttribute("id").slice(1));c(),l(_)}if(n.classList.contains("main__workspace__layers__layer__delete_icon")){var u=t.target.parentElement.parentElement.parentElement,d=u.getAttribute("id").slice(1);e.removeChild(u),a.removeChild(document.getElementById("c".concat(d)))}}),o(document.getElementsByClassName("main__workspace__canvas_wrapper")[0].getElementsByClassName("current")[0]),document.getElementsByClassName("footer_button_reset")[0].addEventListener("click",function(e){1===e.which&&(localStorage.clear(),document.location.reload())}),m(),(t=document.getElementById("fps")).addEventListener("input",function(){t.setAttribute("value",t.value)}),document.getElementsByClassName("footer_button_fullscreen")[0].addEventListener("click",function(){var e=document.getElementsByClassName("main__workspace__canvas_wrapper")[0],t=s("div","main__workspace__canvas_wrapper__fullscreen_button",e);t.innerHTML="Turn off fullscreen",t.addEventListener("click",function(){document.exitFullscreen(),e.removeChild(t)}),e.requestFullscreen()})}n.r(t),_()}]);