import{o as c,c as d,a as i,b as H,d as E,e as x,u as A,f as $,r as M,w as I,g as V,h as o,F as P,i as N,n as L,j as C,k as R,l as B,m as b,p as O,q as g,s as U}from"./vendor.5b628dea.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};S();const D={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},F=i("path",{d:"M16 18h2V6h-2M6 18l8.5-6L6 6v12z",fill:"currentColor"},null,-1),T=[F];function W(r,n){return c(),d("svg",D,T)}var j={name:"mdi-skip-next",render:W};const q={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},X=i("path",{d:"M6 18V6h2v12H6m3.5-6L18 6v12l-8.5-6z",fill:"currentColor"},null,-1),K=[X];function G(r,n){return c(),d("svg",q,K)}var J={name:"mdi-skip-previous",render:G};const Q={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Z=i("path",{d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z",fill:"currentColor"},null,-1),ee=[Z];function te(r,n){return c(),d("svg",Q,ee)}var ne={name:"mdi-menu",render:te};function re(r={}){let n=!1,a=null;const s=t=>{var u;!n||(u=r.update)==null||u.call(r,t.movementX,t.movementY,a)},e=()=>{var t;n=!1,a=null,(t=r.end)==null||t.call(r)};return H(()=>{window.addEventListener("mouseup",e),window.addEventListener("mousemove",s)}),E(()=>{window.removeEventListener("mouseup",e),window.removeEventListener("mousemove",s)}),function(u){var p;n=!0,a=u.target,(p=r.start)==null||p.call(r,a,u)}}function se(r,n){r.classList.remove(n),r.offsetWidth,r.classList.add(n)}const oe={class:"v-progress"},z=x({props:{value:null,ranges:null,theme:null,vertical:null,changeOnUp:null},emits:["update:value","activeChanged"],setup(r,{emit:n}){const a=r;A(u=>({"7b686a5d":o(s)}));const s=$(()=>{var u;return(u=a.theme)!=null?u:"black"}),e=M({current:a.value,active:!1});I(()=>{n("activeChanged",e.active)}),V(()=>a.value,()=>{e.active||(e.current=a.value)});const t=re({start(u,p){e.active=!0,e.current=p.offsetX/u.clientWidth},update(u,p,l){const y=a.vertical?-p:u,_=e.current+y/l.clientWidth;e.current=_<0?0:_>1?1:_,a.changeOnUp||n("update:value",e.current)},end(){e.active=!1,n("update:value",e.current)}});return(u,p)=>(c(),d("div",oe,[i("div",{class:"v-progress__background",onMousedown:p[0]||(p[0]=(...l)=>o(t)&&o(t)(...l))},null,32),(c(!0),d(P,null,N(a.ranges||[],l=>(c(),d("div",{class:"v-progress__loaded",style:L({left:`${l.start*100}%`,width:`${(l.end-l.start)*100}%`})},null,4))),256)),i("div",{class:"v-progress__current",style:L({width:`${o(e).current*100}%`})},null,4),i("div",{class:C(["v-progress__thumb",{visible:o(e).active}]),style:L({left:`${o(e).current*100}%`})},null,6)]))}});const ae={class:"v-cover"},ue=["src"],le=x({props:{src:null,paused:null,reset:null},setup(r){const n=r;A(e=>({"675d03b2":o(a)}));const a=$(()=>n.paused?"paused":"running"),s=R();return V(()=>[n.src,n.reset],()=>{!s.value||se(s.value,"v-cover-playing")}),(e,t)=>(c(),d("div",ae,[r.src?(c(),d("img",{key:0,ref:(u,p)=>{p.el=u,s.value=u},src:r.src,class:"v-cover-playing"},null,8,ue)):B("",!0)]))}}),ie={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ce=i("path",{d:"M8 5.14v14l11-7l-11-7z",fill:"currentColor"},null,-1),de=[ce];function ve(r,n){return c(),d("svg",ie,de)}var _e={name:"mdi-play",render:ve};const pe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},me=i("path",{d:"M14 19h4V5h-4M6 19h4V5H6v14z",fill:"currentColor"},null,-1),he=[me];function fe(r,n){return c(),d("svg",pe,he)}var ge={name:"mdi-pause",render:fe};const xe={class:"v-controls-btn v-controls-play"},$e=x({props:{paused:null},setup(r){return(n,a)=>(c(),d("span",xe,[n.$props.paused?(c(),b(o(_e),{key:0})):(c(),b(o(ge),{key:1}))]))}}),ye={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},we=i("path",{d:"M7 9v6h4l5 5V4l-5 5H7z",fill:"currentColor"},null,-1),Me=[we];function Ve(r,n){return c(),d("svg",ye,Me)}var Le={name:"mdi-volume-low",render:Ve};const Ce={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},be=i("path",{d:"M5 9v6h4l5 5V4L9 9m9.5 3c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4z",fill:"currentColor"},null,-1),ke=[be];function Ae(r,n){return c(),d("svg",Ce,ke)}var Ie={name:"mdi-volume-medium",render:Ae};const Pe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Re=i("path",{d:"M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z",fill:"currentColor"},null,-1),Be=[Re];function ze(r,n){return c(),d("svg",Pe,Be)}var Ye={name:"mdi-volume-high",render:ze};const He={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ee=i("path",{d:"M3 9h4l5-5v16l-5-5H3V9m13.59 3L14 9.41L15.41 8L18 10.59L20.59 8L22 9.41L19.41 12L22 14.59L20.59 16L18 13.41L15.41 16L14 14.59L16.59 12z",fill:"currentColor"},null,-1),Ne=[Ee];function Oe(r,n){return c(),d("svg",He,Ne)}var Ue={name:"mdi-volume-mute",render:Oe};const Se={class:"v-volume"},De={class:"v-volume-progress__inner"},Fe=x({props:{value:null},emits:["update:value"],setup(r,{emit:n}){var p,l;const a=r,s=M({value:(p=a.value)!=null?p:1,cacheValue:(l=a.value)!=null?l:1,active:!1,isChangingVolume:!1}),e=$(()=>s.active||s.isChangingVolume),t=$(()=>s.value>.6?Ye:s.value>.3?Ie:s.value>0?Le:Ue);I(()=>{n("update:value",s.value)});function u(){s.value===0?s.value=s.cacheValue:(s.cacheValue=s.value,s.value=0)}return(y,_)=>(c(),d("div",Se,[i("span",{onClick:u,class:"v-volume-icon",flex:"~",onMouseenter:_[0]||(_[0]=f=>o(s).active=!0),onMouseleave:_[1]||(_[1]=f=>o(s).active=!1)},[(c(),b(O(o(t))))],32),i("div",{class:C(["v-volume-progress",{active:o(e)}]),onMouseenter:_[4]||(_[4]=f=>o(s).active=!0),onMouseleave:_[5]||(_[5]=f=>o(s).active=!1)},[i("div",De,[g(z,{value:o(s).value,"onUpdate:value":_[2]||(_[2]=f=>o(s).value=f),vertical:!0,onActiveChanged:_[3]||(_[3]=f=>o(s).isChangingVolume=f)},null,8,["value"])])],34)]))}});const Te=["src"],We={class:"v-audio-cover"},je={class:"v-audio-play-icon"},qe={class:"v-audio-box",flex:"~ row",align:"items-center"},Xe={class:"v-controls-btn"},Ke={key:0,class:"v-controls-btn"},Ge=x({props:{audios:null,currentPlayIndex:null},emits:["update:currentPlayIndex"],setup(r,{expose:n,emit:a}){var k;const s=r,e=R(),t=M({idx:(k=s.currentPlayIndex)!=null?k:0,paused:!0,duration:0,current:0,loadedRanges:[],theme:"#d679a2",volume:1}),u=$(()=>s.audios[t.idx]),p=$(()=>t.duration>0?t.current/t.duration:0),l={switch(v){return v===t.idx||v<0||v>=s.audios.length?!1:(t.idx=v,a("update:currentPlayIndex",v),!0)},next(){return l.switch(t.idx+1)},previous(){return l.switch(t.idx-1)},seek(v){!e.value||(e.value.currentTime=v,t.current=v)},async play(){if(!!e.value){t.paused=!1;try{await e.value.play()}catch(v){}}},pause(){!e.value||e.value.paused||(t.paused=!0,e.value.pause())},async toggle(){t.paused?await l.play():l.pause()},volume(v){!e.value||(e.value.volume=v)},rate(v){!e.value||(e.value.playbackRate=v)}};function y(){!e.value||(t.duration=e.value.duration,t.current=0,t.volume=e.value.volume,t.paused||l.play(),f())}function _(){!e.value||(t.current=e.value.currentTime)}function f(){if(!e.value)return;t.loadedRanges=[];const v=e.value.duration;for(let m=0;m<e.value.seekable.length;m++){const h=e.value.seekable.start(m),w=e.value.seekable.end(m);t.loadedRanges.push({start:h/v,end:w/v})}}function Y(){t.paused=!l.next()}return V(()=>s.currentPlayIndex,()=>{var m;const v=(m=s.currentPlayIndex)!=null?m:0;l.switch(v)}),n(l),(v,m)=>(c(),d("div",{class:C(["v-audio",{playing:!o(t).paused}])},[i("audio",{ref:(h,w)=>{w.audio=h,e.value=h},src:o(u).url,style:{display:"none"},onLoadeddata:y,onTimeupdate:_,onProgress:f,onEnded:Y},null,40,Te),i("div",We,[g(le,{src:o(u).cover,paused:o(t).paused,reset:o(t).idx},null,8,["src","paused","reset"]),i("div",je,[g($e,{onClick:l.toggle,paused:o(t).paused,style:{"font-size":"1.5em"}},null,8,["onClick","paused"])])]),i("div",qe,[i("span",{class:"v-controls-btn v-controls-previous",onClick:m[0]||(m[0]=(...h)=>l.previous&&l.previous(...h))},[g(o(J))]),i("span",{class:"v-controls-btn v-controls-next",onClick:m[1]||(m[1]=(...h)=>l.next&&l.next(...h))},[g(o(j))]),g(z,{class:"v-audio-progress",theme:o(t).theme,value:o(p),ranges:o(t).loadedRanges,"change-on-up":!0,"onUpdate:value":m[2]||(m[2]=h=>l.seek(h*o(t).duration))},null,8,["theme","value","ranges"]),i("span",Xe,[g(Fe,{value:o(t).volume,"onUpdate:value":m[3]||(m[3]=h=>l.volume(h))},null,8,["value"])]),r.audios.length>1?(c(),d("span",Ke,[g(o(ne))])):B("",!0)])],2))}});var Je=(r,n)=>{for(const[a,s]of n)r[a]=s;return r};const Qe={};function Ze(r,n){return c(),d("video")}var et=Je(Qe,[["render",Ze]]);const tt=i("br",null,null,-1),nt=i("br",null,null,-1),rt=i("br",null,null,-1),st=x({setup(r){const n="./",a=[{name:"mp3-1",url:n+"audio-1.mp3",cover:n+"cover.png"},{name:"mp3-2",url:n+"audio-2.mp3",cover:n+"cover.png"},{name:"mp3-3",url:n+"audio-3.mp3",cover:n+"cover.png"}];return(s,e)=>(c(),d(P,null,[tt,g(Ge,{audios:a}),nt,rt,g(et)],64))}});U(st).mount("#app");
