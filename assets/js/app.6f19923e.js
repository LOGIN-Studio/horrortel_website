(function(){var e={9310:function(e,t,n){"use strict";var o=n(9242),i=n(3396);function a(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var s=n(89);const r={},l=(0,s.Z)(r,[["render",a]]);var c=l,u=n(2483),m=n.p+"assets/media/web_video.be59abd2.mp4";const p=e=>((0,i.dD)("data-v-0ce9375e"),e=e(),(0,i.Cn)(),e),g={class:"home"},d=p((()=>(0,i._)("video",{class:"background-video",autoplay:"",loop:"",muted:""},[(0,i._)("source",{src:m,type:"video/mp4"}),(0,i.Uk)(" Your browser does not support the video tag. ")],-1))),f=p((()=>(0,i._)("div",{class:"title"},"Horrotel",-1)));var v=(0,i.aZ)({__name:"main_page",setup(e){const t=()=>{alert("The game is still in production and there is no download link at this time.")};return(e,n)=>((0,i.wg)(),(0,i.iD)("div",g,[d,(0,i._)("div",{class:"content"},[f,(0,i._)("button",{onClick:t},"Download")])]))}});const h=(0,s.Z)(v,[["__scopeId","data-v-0ce9375e"]]);var b=h,w=n(4870),_=n(7139);const y=[{date:"2024-04-02",text:"Completed game design and some player operations\n1. Initial game design proposal\n2. Simple click button to achieve movement\n3. Conceptual design of UI",images:["lzh-log-1.png","lzh-log-2.png","lzh-log-3.png","lzh-log-4.png"]},{date:"2024-04-01",text:"Completion of the project's official website, which includes a display of the project's progress.\nFeatures in official website as follow:\n    1. Promotional Video and Download Button\n    2. Project Progress Log\n    3. Team members",images:["log-1.png","log-2.png","log-3.png"]},{date:"2024-03-21",text:"Try Plastic SCM in Unity-related operations",images:[]},{date:"2024-03-21",text:"1. Background research on unity version control \n2. Plastic SCM selected for version control",images:[]}],j={class:"box-title ta-l pl-1 mb-7"},x={class:"title ml-3"};var k=(0,i.aZ)({__name:"boxTitle",props:{title:{}},setup(e){const t=e;return(e,n)=>((0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("span",x,(0,_.zw)((0,w.SU)(t).title),1)]))}});const O=k;var z=O;const D={class:"timeline-area"},C=["src"],W={key:0},Z={class:"log-content"};var S=(0,i.aZ)({__name:"timeline_log",setup(e){const t=(0,w.iH)(null),a=(0,w.iH)(!1),s=e=>{t.value=e,a.value=!0};return(e,r)=>{const l=(0,i.up)("v-btn"),c=(0,i.up)("v-card"),u=(0,i.up)("v-dialog"),m=(0,i.up)("v-card-title"),p=(0,i.up)("v-carousel-item"),g=(0,i.up)("v-carousel"),d=(0,i.up)("v-card-text"),f=(0,i.up)("v-timeline-item"),v=(0,i.up)("v-timeline");return(0,i.wg)(),(0,i.iD)("div",D,[(0,i.Wm)(z,{title:"Project Logs"}),(0,i.Wm)(u,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),height:"auto"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(c,{width:"80vw"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{class:"close-btn",color:"error",icon:"mdi mdi-close",onClick:r[0]||(r[0]=e=>a.value=!1)}),(0,i._)("img",{class:"full-image",src:n(9300)(`./${t.value}`)},null,8,C)])),_:1},512),[[o.F8,a.value]])])),_:1},8,["modelValue"]),(0,i.Wm)(v,{class:"timeline",align:"start",side:"end"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,w.SU)(y),((e,t)=>((0,i.wg)(),(0,i.j4)(f,{key:t,"dot-color":"#fff",icon:"mdi-math-log","fill-dot":""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{class:"card"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{class:"card-title text-h6"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,_.zw)(e.date),1)])),_:2},1024),(0,i.Wm)(d,{class:"bg-white text--primary"},{default:(0,i.w5)((()=>[e.images&&e.images.length>0?((0,i.wg)(),(0,i.iD)("div",W,[(0,i.Wm)(g,{"show-arrows":"hover","delimiter-icon":"mdi-square",height:"400","hide-delimiter-background":"",class:"carousel"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.images,((e,t)=>((0,i.wg)(),(0,i.j4)(p,{key:t,src:n(9300)("./"+e),cover:""},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{icon:"mdi mdi-eye",size:"x-small",class:"view-full-image-btn",onClick:t=>s(e)},null,8,["onClick"])])),_:2},1032,["src"])))),128))])),_:2},1024)])):(0,i.kq)("",!0),(0,i._)("div",Z,(0,_.zw)(e.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}});const U=(0,s.Z)(S,[["__scopeId","data-v-435f535a"]]);var P=U;const T={class:"member"},I=["src"],M={class:"info"},F={class:"name"};var E=(0,i.aZ)({__name:"member",props:{memberInfo:null},setup(e){const t=e,o=e=>{window.open("mailto:"+e,"_blank")};return(e,a)=>{const s=(0,i.up)("v-btn");return(0,i.wg)(),(0,i.iD)("div",T,[(0,i._)("img",{class:"cover",src:n(3987)("./"+t.memberInfo.cover),alt:""},null,8,I),(0,i._)("div",M,[(0,i._)("div",F,(0,_.zw)(t.memberInfo.name),1),(0,i.Wm)(s,{rounded:"lg",size:"x-small",variant:"plain",icon:"mdi mdi-email-outline",class:"email-btn",onClick:a[0]||(a[0]=e=>o(t.memberInfo.email))})])])}}});const H=E;var L=H;const N=[{name:"login",cover:"login.jpg",email:"loginfameneo@163.com"},{name:"phidialam",cover:"phidialam.png",email:"phidia01@connect.hku.hk"},{name:"逸之社恐猪",cover:"boyipang.jpg",email:"phidia01@connect.hku.hk"},{name:"Su Zihan",cover:"suZihan.png",email:"zsu277@gmail.com"},{name:"jasonsheih",cover:"jasonsheih.jpg",email:"jasonsheih@gmail.com"}],V={class:"members"},Y={class:"member-area div flex flex-row flex-wrap flex-evenly-center"};var K=(0,i.aZ)({__name:"team",setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)("div",V,[(0,i.Wm)(z,{title:"Members"}),(0,i._)("div",Y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,w.SU)(N),((e,t)=>((0,i.wg)(),(0,i.j4)(L,{key:t,"member-info":e},null,8,["member-info"])))),128))])]))}});const q=(0,s.Z)(K,[["__scopeId","data-v-f6283016"]]);var B=q;const R={class:"home"};var $=(0,i.aZ)({__name:"index",setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)("div",R,[(0,i.Wm)(b),(0,i.Wm)(P),(0,i.Wm)(B)]))}});const A=$;var G=A,J=n(65),Q=(0,J.MT)({state:{fullpath:""},getters:{getFullpath(e){return e.fullpath}},mutations:{setFullpath(e,t){e.fullpath=t}},actions:{},modules:{}});const X=[{path:"/",name:"web",component:G}],ee=(0,u.p7)({history:(0,u.r5)(""),routes:X});ee.beforeEach(((e,t,n)=>{Q.commit("setFullpath",e.fullPath),n()}));var te=ee,ne=n(8957),oe=(n(7691),n(7229)),ie=n(8600),ae=n(3504),se=n(596);const re=(0,ne.Rd)({components:oe,directives:ie,icons:{defaultSet:"mdi",aliases:ae.j,sets:{mdi:ae.t,fa:se.fa}}});(0,o.ri)(c).use(Q).use(te).use(re).mount("#app")},3987:function(e,t,n){var o={"./boyipang.jpg":1140,"./jasonsheih.jpg":1679,"./login.jpg":3880,"./phidialam.png":8994,"./suZihan.png":2088};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=3987},9300:function(e,t,n){var o={"./log-1.png":3954,"./log-2.png":6934,"./log-3.png":9450,"./lzh-log-1.png":7248,"./lzh-log-2.png":2918,"./lzh-log-3.png":8323,"./lzh-log-4.png":821,"./team/boyipang.jpg":1140,"./team/jasonsheih.jpg":1679,"./team/login.jpg":3880,"./team/phidialam.png":8994,"./team/suZihan.png":2088};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=9300},3954:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-1.ff06ea43.png"},6934:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-2.6c96967d.png"},9450:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-3.c8de7f20.png"},7248:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-1.ed95a52c.png"},2918:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-2.c60e21c8.png"},8323:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-3.902ef06d.png"},821:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-4.b5e902e7.png"},1140:function(e,t,n){"use strict";e.exports=n.p+"assets/img/boyipang.8ba16942.jpg"},1679:function(e,t,n){"use strict";e.exports=n.p+"assets/img/jasonsheih.08ddd1b7.jpg"},3880:function(e,t,n){"use strict";e.exports=n.p+"assets/img/login.93d1bf04.jpg"},8994:function(e,t,n){"use strict";e.exports=n.p+"assets/img/phidialam.5d92603a.png"},2088:function(e,t,n){"use strict";e.exports=n.p+"assets/img/suZihan.bde3110b.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],a=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkhorrortel_website"]=self["webpackChunkhorrortel_website"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9310)}));o=n.O(o)})();