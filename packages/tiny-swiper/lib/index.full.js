!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,function(){"use strict";function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,i=arguments[t];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function f(t,e){void 0===e&&(e=[]),Array.isArray(e)||(e=[e]),e.forEach(function(e){return!t.classList.contains(e)&&t.classList.add(e)})}function m(t,e){void 0===e&&(e=[]),Array.isArray(e)||(e=[e]),e.forEach(function(e){return t.classList.contains(e)&&t.classList.remove(e)})}function h(e,t,n,i){e.addEventListener(t,n,i)}function v(e,t,n){e.removeEventListener(t,n)}function u(e,t,n){return void 0===n&&(n=""),e.setAttribute(t,n),e}function a(t,n,e){return Object.keys(n).forEach(function(e){t.style[e]=n[e]}),e&&getComputedStyle(t),t}var g={direction:"horizontal",touchRatio:1,touchAngle:45,longSwipesRatio:.5,initialSlide:0,loop:!1,freeMode:!1,mousewheel:!1,passiveListeners:!0,resistance:!0,resistanceRatio:.85,speed:300,longSwipesMs:300,spaceBetween:0,slidesPerView:1,centeredSlides:!1,slidePrevClass:"swiper-slide-prev",slideNextClass:"swiper-slide-next",slideActiveClass:"swiper-slide-active",slideClass:"swiper-slide",wrapperClass:"swiper-wrapper",touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchMoveStopPropagation:!1,excludeElements:[],injections:{translate:function(e,t,n,i){a(t.element.$wrapper,{transition:e.isStart?"none":"transform ease "+i+"ms",transform:n.isHorizontal?"translate3d("+e.transforms+"px, 0, 0)":"translate3d(0, "+e.transforms+"px, 0)"})}}};var w="before-init",y="after-init",x="before-slide",b="scroll",S="after-slide",z="before-destroy",C="after-destroy";function T(){var o={};return{on:function(e,t){o[e]?o[e].push(t):o[e]=[t]},off:function(e,t){!o[e]||-1<(t=o[e].indexOf(t))&&o[e].splice(t,1)},emit:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];o[e]&&o[e].forEach(function(e){return e.apply(void 0,n)})},clear:function(){o={}}}}var o=180/Math.PI;function E(){var i=[];return{getDuration:function(){var e=i[0],t=i[i.length-1];return e?t.time-e.time:0},getOffset:function(){var e=i[0],t=i[i.length-1];return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}},getLogs:function(){return i},vector:function(){return t=(e=i).length-1,n=e[t],e=e[t-1],t={x:n.x-e.x,y:n.y-e.y},n=n.time-e.time,e=t.x/n,n=t.y/n,p({},t,{angle:Math.atan2(Math.abs(t.y),Math.abs(t.x))*o,velocityX:e,velocityY:n});var e,t,n},clear:function(){i=[]},push:function(e){i.push(p({time:Date.now()},e))}}}function r(){return(performance||Date).now()}function t(){var i,e,t=requestAnimationFrame||webkitRequestAnimationFrame||setTimeout,n=cancelAnimationFrame||webkitCancelAnimationFrame||clearTimeout;return{run:function(n){i=void 0===i?r():i,e=t(function(){var e=r(),t=e-i;i=e,n(t)})},stop:function(){i=void 0,n(e)}}}function n(){var e=t();return{run:function t(n){e.run(function(e){t(n),n(e)})},stop:function(){e.stop()}}}function $(l,s,u,e){var i=e.initLayout,c=e.initStatus,d=e.render,f=e.scrollPixel,p=e.slideTo,m=e.getOffsetSteps,h=n();return{preheat:function(e,t){var n=u.tracker;h.stop(),n.clear(),n.push(e),i(t),c(t),u.isStart=!0,d()},move:function(e){var t,n=u.tracker,i=l.touchRatio,o=l.touchAngle,a=l.isHorizontal;u.isStart&&!u.isScrolling&&(n.push(e),t=n.vector(),((e=n.getOffset()).x||e.y)&&(a&&t.angle<o||!a&&90-t.angle<o||u.isTouching?(i=t[a?"x":"y"]*i,u.isTouching=!0,f(i),d()):(u.isScrolling=!0,n.clear())))},stop:function(){var e,t,n,i,o=u.index,a=u.tracker,r=s.measure;u.isStart=!1,!l.freeMode||a.getLogs().length<2?(e=a.getDuration(),t=a.getOffset()[l.isHorizontal?"x":"y"],n=Math.ceil(Math.abs(t)/r.boxSize),r=m(t),e>l.longSwipesMs?p(o+r*(0<t?-1:1)):p(0<t?o-n:o+n),a.clear(),c()):(i=a.vector()[l.isHorizontal?"velocityX":"velocityY"],h.run(function(e){e*=i;i*=.98,Math.abs(e)<.004?(h.stop(),a.clear(),c()):(f(e),d(0))}))}}}function A(a,t,r,e){var n=a.touchable,l=["INPUT","SELECT","OPTION","TEXTAREA","BUTTON","VIDEO"],e=$(r,a,t,e),s=e.preheat,i=e.move,o=e.stop;function u(e){e=n?e.changedTouches[0]:e;return{x:e.pageX,y:e.pageY}}function c(e){for(var t=0;t<r.excludeElements.length;t++)if(r.excludeElements[t].contains(e.target))return;var n,i,o=a.element.$wrapper;(r.touchStartPreventDefault&&-1===l.indexOf(e.target.nodeName)||r.touchStartForcePreventDefault)&&!r.passiveListeners&&e.preventDefault(),s(u(e),(n=o,i=r.isHorizontal,o=getComputedStyle(n).transform.replace(/[a-z]|\(|\)|\s/g,"").split(",").map(parseFloat),n=[],16===o.length?n=o.slice(12,14):6===o.length&&(n=o.slice(4,6)),n[i?0:1]||0))}function d(e){r.touchMoveStopPropagation&&e.stopPropagation(),i(u(e)),t.isTouching&&e.preventDefault()}function f(){o()}return{attach:function(){var e=a.element.$el;n?(h(e,"touchstart",c,{passive:r.passiveListeners,capture:!1}),h(e,"touchmove",d),h(e,"touchend",f),h(e,"touchcancel",f)):(h(e,"mousedown",c),h(document,"mousemove",d),h(document,"mouseup",f))},detach:function(){var e=a.element.$el;v(e,"touchstart",c),v(e,"touchmove",d),v(e,"touchend",f),v(e,"touchcancel",f),v(e,"mousedown",c),v(document,"mousemove",d),v(document,"mouseup",f)}}}function l(e,t,n){var i=e.$list,o=t.viewSize,a=t.slideSize,r=t.boxSize,e=(l=n).loop?Math.ceil(l.slidesPerView):0,t=e*r,l=-t+(n.centeredSlides?(o-a)/2:0);return{max:l,min:n.spaceBetween+(n.loop?a:o)+l-r*i.length,base:l,expand:e,buffer:t,minIndex:0,maxIndex:i.length-(n.centeredSlides||n.loop?1:Math.ceil(n.slidesPerView))}}function P(e,o){var a={};function t(e){var t,t=(t=o,i=(n=e).$el,n=t.isHorizontal?i.offsetWidth:i.offsetHeight,{boxSize:(i=(n-Math.ceil(t.slidesPerView-1)*t.spaceBetween)/t.slidesPerView)+t.spaceBetween,viewSize:n,slideSize:i}),n=l(e,t,o),i=Boolean("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints||window.DocumentTouch&&document instanceof DocumentTouch);Object.assign(a,{touchable:i,element:e,measure:t,limitation:n})}return(a.update=t)(e),a}var c="data-shallow-slider",d="data-slider";function M(l,s){function r(){l.element.$wrapper.querySelectorAll("["+c+"]").forEach(function(e){return l.element.$wrapper.removeChild(e)})}function e(){var e,n,i,t,o,a;l.element.$list.forEach(function(e,t){return u(e,d,t)}),r(),s.loop&&(e=l.element,t=l.limitation,n=e.$list,i=e.$wrapper,t=t.expand,o=n.slice(-t).map(function(e){return e.cloneNode(!0)}),a=n.slice(0,t).map(function(e){return e.cloneNode(!0)}),o.forEach(function(e,t){i.appendChild(u(a[t],c)),i.insertBefore(u(o[t],c),n[0])}))}function t(){var e=l.element,t=l.measure,n=e.$wrapper,i={display:"flex",willChange:"transform",flexDirection:s.isHorizontal?"row":"column"},o=((e={})[s.isHorizontal?"width":"height"]=t.slideSize+"px",e[s.isHorizontal?"margin-right":"margin-bottom"]=s.spaceBetween+"px",e);a(n,i),n.querySelectorAll("["+d+"]").forEach(function(e){return a(e,o)})}return{init:function(){e(),t()},render:function(e,t,n,i){var o,a=l.element.$wrapper,r=void 0===t?s.speed:t;s.injections.translate(e,l,s,r),e.isStart||(t=e,e=l.element.$wrapper,o=t.index,e.querySelectorAll("["+d+"]").forEach(function(e){var t=~~e.getAttribute(d);m(e,[s.slidePrevClass,s.slideNextClass,s.slideActiveClass]),t===o&&f(e,s.slideActiveClass),t==o-1&&f(e,s.slidePrevClass),t===o+1&&f(e,s.slideNextClass)})),i&&getComputedStyle(a).transform,n&&setTimeout(n,r)},destroy:function(){var e=l.element,t=e.$list,n=e.$wrapper,i=s.isHorizontal?"margin-right":"margin-bottom";["display","will-change","flex-direction"].forEach(function(e){n.style.removeProperty(e)}),t.forEach(function(e){return e.style.removeProperty(i)}),r()},updateSize:t}}function D(e,t,n){var i=e-n.max,n=e-n.min;return 0<i?i:n<0?n:0}function L(l,s,u,i,r){function c(e){var t=l.measure;return Math.ceil(Math.abs(e)/t.boxSize-u.longSwipesRatio)}function d(e,t,n){i.render(s,e,t,n)}function f(e){var t,n=l.limitation,i=n.min,o=n.max,n=o-i+(u.loop?l.measure.boxSize:0),i=n+1;s.transforms=e,u.loop?(t=(o-e)%i/n,s.progress=t<0?1+t:1<t?t-1:t):(t=(o-e)/n,s.progress=t<0?0:1<t?1:t),r.emit(b,p({},s))}function e(e,t){var n=l.measure,i=l.limitation,o=i.maxIndex-i.minIndex+1,a=u.loop?(e%o+o)%o:e>i.maxIndex?i.maxIndex:e<i.minIndex?i.minIndex:e,o=-a*n.boxSize+i.base;s.index===a&&0!==c(o-s.transforms)&&u.loop&&(f(0<(e=D(s.transforms,0,i))?i.min-n.boxSize+e:i.max+n.boxSize+e),d(0,void 0,!0)),r.emit(x,s.index,s,a),s.index=a,f(o),d(t,function(){r.emit(S,a,s)})}return{update:function(){e(s.index,0),i.updateSize()},render:d,transform:f,slideTo:e,scrollPixel:function(e){var t,n=s.transforms,i=l.measure,o=l.limitation,a=(t=Number(e.toExponential().split("e")[1]))<=0?Math.pow(10,-(t-1)):1,r=n;u.resistance&&!u.loop&&(0<e&&n>=o.max?e-=Math.pow(e*a,u.resistanceRatio)/a:e<0&&n<=o.min&&(e+=Math.pow(-e*a,u.resistanceRatio)/a)),r+=e,u.loop&&(t=s.tracker.vector(),a=u.isHorizontal?t.velocityX:t.velocityY,(e=D(n,0,o))&&(t=n,n=o,0<(a=a)&&t>n.max||a<0&&t<n.min)&&(r=0<e?o.min-i.boxSize+e:o.max+i.boxSize+e)),f(r)},initStatus:function(e){void 0===e&&(e=0),s.startTransform=e,s.isStart=!1,s.isScrolling=!1,s.isTouching=!1},initLayout:function(e){f(e)},getOffsetSteps:c}}function O(e,t){var n="string"==typeof e?document.body.querySelector(e):e,e=n.querySelector("."+t.wrapperClass),t=[].slice.call(n.getElementsByClassName(t.slideClass));return{$el:n,$wrapper:e,$list:t}}function k(e,t){var n=(r=p({},g,r=t),p({},r,{isHorizontal:"horizontal"===r.direction})),i=T(),o=P(O(e,n),n),a={tracker:E(),index:0,startTransform:0,isStart:!1,isScrolling:!1,isTouching:!1,transforms:0,progress:0},t=i.on,r=i.off,l=i.emit,s={on:t,off:r,env:o,state:a,options:n};(n.plugins||k.plugins||[]).forEach(function(e){return e(s,n)}),l(w,s);var u=M(o,n),c=L(o,a,n,u,i),d=A(o,a,n,c);return a=c.slideTo,Object.assign(s,{update:function(){u.destroy(),o.update(O(e,n)),u.init(),c.update()},destroy:function(){l(z,s),d.detach(),u.destroy(),i.clear(),l(C,s)},slideTo:a,updateSize:function(){o.update(O(e,n)),c.update()}}),u.init(),d.attach(),a(n.initialSlide,0),l(y,s),s}var s="ArrowUp",N="ArrowRight",H="ArrowDown",I="ArrowLeft";function R(e){var t=function e(t){if(!t)return!1;var n=getComputedStyle(t);return"hidden"!==n.visibility&&"none"!==n.display&&(!t.parentElement||1!==t.parentElement.nodeType||e(t.parentElement))}(e),e=e.getBoundingClientRect();return 0<=e.top&&e.bottom<=window.innerHeight&&0<=e.left&&e.right<=window.innerWidth&&t}return(k.use=function(e){k.plugins=e})([function(o,e){var a,i;e.lazyload&&(a=e.lazyload,i={load:function(e){var t,n,e=o.env.element.$list[e];function i(e){e.removeAttribute("data-src"),f(e,[a.loadedClass]),m(e,[a.loadingClass]),e.onload=null,e.onerror=null,e.isLoaded=!0,t.every(function(e){return e.isLoaded})&&n.forEach(function(e){e.parentElement.removeChild(e)})}e&&(t=[].slice.call(e.getElementsByClassName(a.elementClass)),n=[].slice.call(e.getElementsByClassName(a.preloaderClass)),t.forEach(function(e){var t;e.hasAttribute("data-src")&&(t=e.getAttribute("data-src"),f(e,[a.loadingClass]),m(e,[a.loadedClass]),e.src=t,e.onload=function(){return i(e)},e.onerror=function(){return i(e)})}))},loadRange:function(e,t){if(i.load(e),a.loadPrevNext&&1<=t)for(var n=1;n<=t;n++)i.load(e+n),i.load(e-n)}},o.on("before-init",function(){e.lazyload=p({loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"},e.lazyload)}),a.loadOnTransitionStart?o.on("before-slide",function(e,t,n){i.loadRange(n,a.loadPrevNextAmount)}):o.on("after-slide",function(e){i.loadRange(e,a.loadPrevNextAmount)}),o.on("after-destroy",function(){o.lazyload&&delete o.lazyload}))},function(u,c){var d={$pageList:[],$pagination:null};u.on("before-init",function(){c.pagination&&(c.pagination=Object.assign({clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},c.pagination))}),u.on("after-init",function(){if(c.pagination){var e=c.pagination,t=e.bulletClass,n=e.bulletActiveClass,i=u.env.element.$list,e="string"==typeof c.pagination.el?document.body.querySelector(c.pagination.el):c.pagination.el,o=[],a=document.createDocumentFragment(),r=i.length-Math.ceil(c.slidesPerView)+1;c.excludeElements.push(e),d.$pagination=e,d.$pageList=o;for(var l=0;l<r;l++){var s=document.createElement("div");f(s,l===u.state.index?[t,n]:t),o.push(s),a.appendChild(s)}e.appendChild(a),c.pagination.clickable&&e.addEventListener("click",function(e){u.slideTo(o.indexOf(e.target)),e.stopPropagation()})}}),u.on("after-destroy",function(){c.pagination&&(d.$pagination.innerHTML="",d.$pageList=[],d.$pagination=null)}),u.on("after-slide",function(n){var i=c.pagination.bulletActiveClass;d.$pageList&&d.$pageList.forEach(function(e,t){(t===n?f:m)(e,i)})})},function(t,n){var i,e;n.keyboard&&(i=n.keyboard,e={enable:function(){i.enabled=!0},disable:function(){i.enabled=!1},onKeyDown:function(e){e=e.key;i.onlyInViewport&&!R(t.env.element.$el)||!i.enabled||(n.isHorizontal?e===I?t.slideTo(t.state.index-1):e===N&&t.slideTo(t.state.index+1):e===H?t.slideTo(t.state.index-1):e===s&&t.slideTo(t.state.index+1))}},t.on("before-init",function(){n.keyboard=p({enabled:!0,onlyInViewport:!0},n.keyboard),t.keyboard=e,h(window,"keydown",e.onKeyDown)}),t.on("after-destroy",function(){v(window,"keydown",e.onKeyDown),delete t.keyboard}))},function(i,o){function t(e){var t=o.isHorizontal?e.deltaX:e.deltaY,n=i.state.index;(0<Math.abs(t)-Math.abs(a.wheelDelta)||!a.wheeling)&&Math.abs(t)>=o.mousewheel.sensitivity&&i.slideTo(0<t?n-1:n+1),a.wheelDelta=t,clearTimeout(a.wheelingTimer),a.wheeling=!0,a.wheelingTimer=setTimeout(function(){a.wheeling=!1,a.wheelDelta=0,a.wheelingTimer=0},o.mousewheel.interval),e.preventDefault(),e.stopPropagation()}var n={$el:null},a={wheeling:!1,wheelDelta:0,wheelingTimer:0};i.on("before-init",function(){o.mousewheel&&(o.mousewheel=Object.assign({invert:!1,sensitivity:1,interval:400},o.mousewheel))}),i.on("after-init",function(){var e;o.mousewheel&&(e=i.env.element.$el,h(n.$el=e,"wheel",t))}),i.on("after-destroy",function(){o.mousewheel&&(delete n.$el,v(n.$el,"wheel",t))})}]),k});
