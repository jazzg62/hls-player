(function(){"use strict";var n={5753:function(n,t,r){var e=r(9242),o=r(3396);const i={class:"page"},u={class:"flex"},a=(0,o._)("label",{for:"src"},"请输入视频链接",-1),c=(0,o._)("br",null,null,-1),l=(0,o._)("video",{controls:"",id:"video",autoplay:"autoplay"},[(0,o._)("source",{type:"video/mp4"})],-1);function f(n,t,r,f,s,p){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",u,[a,(0,o.wy)((0,o._)("input",{type:"text",id:"src",name:"src","onUpdate:modelValue":t[0]||(t[0]=t=>n.src=t)},null,512),[[e.nr,n.src]]),(0,o._)("button",{onClick:t[1]||(t[1]=(...n)=>p.start&&p.start(...n))},"播放")]),c,l])}var s=r(137),p=r.n(s);let d=new(p());var v={name:"App",data:function(){return{src:""}},methods:{start(){if(p().isSupported()){var n=document.getElementById("video");d.attachMedia(n),d.loadSource(this.src)}}}},h=r(89);const b=(0,h.Z)(v,[["render",f]]);var y=b;(0,e.ri)(y).mount("#app")}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(t,e,o,i){if(!e){var u=1/0;for(f=0;f<n.length;f++){e=n[f][0],o=n[f][1],i=n[f][2];for(var a=!0,c=0;c<e.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](e[c])}))?e.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[e,o,i]}}(),function(){r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,{a:t}),t}}(),function(){r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,i,u=e[0],a=e[1],c=e[2],l=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var f=c(r)}for(t&&t(e);l<u.length;l++)i=u[l],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(f)},e=self["webpackChunkhls_player"]=self["webpackChunkhls_player"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(5753)}));e=r.O(e)})();
//# sourceMappingURL=app.288b07f2.js.map