(function(){var e={9310:function(e,t,n){"use strict";var o=n(9242),i=n(3396);function s(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var a=n(89);const r={},l=(0,a.Z)(r,[["render",s]]);var c=l,p=n(2483),g=n.p+"assets/media/web_video.be59abd2.mp4";const u=e=>((0,i.dD)("data-v-0ce9375e"),e=e(),(0,i.Cn)(),e),m={class:"home"},d=u((()=>(0,i._)("video",{class:"background-video",autoplay:"",loop:"",muted:""},[(0,i._)("source",{src:g,type:"video/mp4"}),(0,i.Uk)(" Your browser does not support the video tag. ")],-1))),f=u((()=>(0,i._)("div",{class:"title"},"Horrotel",-1)));var h=(0,i.aZ)({__name:"main_page",setup(e){const t=()=>{alert("The game is still in production and there is no download link at this time.")};return(e,n)=>((0,i.wg)(),(0,i.iD)("div",m,[d,(0,i._)("div",{class:"content"},[f,(0,i._)("button",{onClick:t},"Download")])]))}});const v=(0,a.Z)(h,[["__scopeId","data-v-0ce9375e"]]);var b=v,w=n(4870),y=n(7139);const _=[{date:"2024-05-03",text:"Complete basic room and map design\n1. Room and map would be placed at first. Some items would be changed later to connect interaction with players\n2. The design of character has been completed. In the next step it would be used in game\n3. Some basic texture has been used. About the other would be adjusted later",images:["pby-log-1.png","pby-log-2.png","pby-log-3.png"]},{date:"2024-05-01",text:"Improve player operation logic\n1. The button will be displayed based on the presence or absence of walls around it\n2. Added action point mechanism, randomly generating action points at the beginning of the turn, and consuming action points through actions\n3. Add a prompt system, which will prompt players when they operate improperly",images:["lzh-log-5.png","lzh-log-6.png"]},{date:"2024-04-29",text:"Automatic planning of motion animation paths in rooms using artificial intelligence techniques",images:[]},{date:"2024-04-28",text:"Monster Movement Design - Second Draft\n1. Monster will be put randomly in the maze as game starts\n2. Every 5 turn points consumed by players, monster move for a distance\n3. Every time monster encounters a crossroad, randomly pick an available direction and move",images:[]},{date:"2024-04-27",text:"Implementing object interaction logic:\n    1. Implementing a Door Opening and Closing Script\n    2. Implementing a drawer fetch script\n    3. Implementing the Hiding Cabinet Script",images:["log-6.png","log-7.png","log-8.png","log-9.png"]},{date:"2024-04-26",text:"Completed the external network connection features:\n    1. Connection of players in two different network environments\n    2. Synchronization of newly generated objects\n    3. Player state synchronization",images:["external_network_connection.png"]},{date:"2024-04-19",text:"Realisation of item detection:\n    1. Add a button to interact with the door\n    2. Implementation of door distance and direction detection scripts",images:["log-4.png","log-5.png"]},{date:"2024-04-06",text:"Monster Movement Design - First Draft\n1. Algorithm So Far: Determine the relationship between monster and player through dot product, and then make monster move towards player\n2. Change state when detect player",images:[]},{date:"2024-04-02",text:"Completed game design and some player operations\n1. Initial game design proposal\n2. Simple click button to achieve movement\n3. Conceptual design of UI",images:["lzh-log-1.png","lzh-log-2.png","lzh-log-3.png","lzh-log-4.png"]},{date:"2024-04-01",text:"Completion of the project's official website, which includes a display of the project's progress.\nFeatures in official website as follow:\n    1. Promotional Video and Download Button\n    2. Project Progress Log\n    3. Team members",images:["log-1.png","log-2.png","log-3.png"]},{date:"2024-03-31",text:"Complete basic map design. Try to use drunk crawling algorithm in map generation",images:[]},{date:"2024-03-25",text:"Completion of the connection between the host and client in the local network environment:\n    1. The player Connection in local\n    2. Object synchronization\n    3. Player state synchronization",images:["local_network_connection.png"]},{date:"2024-03-21",text:"Try Plastic SCM in Unity-related operations",images:[]},{date:"2024-03-21",text:"1. Background research on unity version control \n2. Plastic SCM selected for version control",images:[]}],x={class:"box-title ta-l pl-1 mb-7"},k={class:"title ml-3"};var j=(0,i.aZ)({__name:"boxTitle",props:{title:{}},setup(e){const t=e;return(e,n)=>((0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("span",k,(0,y.zw)((0,w.SU)(t).title),1)]))}});const z=j;var C=z;const D={class:"timeline-area"},O=["src"],S={key:0},I={class:"log-content"};var T=(0,i.aZ)({__name:"timeline_log",setup(e){const t=(0,w.iH)(null),s=(0,w.iH)(!1),a=e=>{t.value=e,s.value=!0};return(e,r)=>{const l=(0,i.up)("v-btn"),c=(0,i.up)("v-card"),p=(0,i.up)("v-dialog"),g=(0,i.up)("v-card-title"),u=(0,i.up)("v-carousel-item"),m=(0,i.up)("v-carousel"),d=(0,i.up)("v-card-text"),f=(0,i.up)("v-timeline-item"),h=(0,i.up)("v-timeline");return(0,i.wg)(),(0,i.iD)("div",D,[(0,i.Wm)(C,{title:"Project Logs"}),(0,i.Wm)(p,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=e=>s.value=e),height:"auto"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(c,{width:"80vw"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{class:"close-btn",color:"error",icon:"mdi mdi-close",onClick:r[0]||(r[0]=e=>s.value=!1)}),(0,i._)("img",{class:"full-image",src:n(9300)(`./${t.value}`)},null,8,O)])),_:1},512),[[o.F8,s.value]])])),_:1},8,["modelValue"]),(0,i.Wm)(h,{class:"timeline",align:"start",side:"end"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,w.SU)(_),((e,t)=>((0,i.wg)(),(0,i.j4)(f,{key:t,"dot-color":"#fff",icon:"mdi-math-log","fill-dot":""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{class:"card"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{class:"card-title text-h6"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,y.zw)(e.date),1)])),_:2},1024),(0,i.Wm)(d,{class:"bg-white text--primary"},{default:(0,i.w5)((()=>[e.images&&e.images.length>0?((0,i.wg)(),(0,i.iD)("div",S,[(0,i.Wm)(m,{"show-arrows":"hover","delimiter-icon":"mdi-square",height:"400","hide-delimiter-background":"",class:"carousel"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.images,((e,t)=>((0,i.wg)(),(0,i.j4)(u,{key:t,src:n(9300)("./"+e),cover:""},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{icon:"mdi mdi-eye",size:"x-small",class:"view-full-image-btn",onClick:t=>a(e)},null,8,["onClick"])])),_:2},1032,["src"])))),128))])),_:2},1024)])):(0,i.kq)("",!0),(0,i._)("div",I,(0,y.zw)(e.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}});const W=(0,a.Z)(T,[["__scopeId","data-v-435f535a"]]);var Z=W;const M={class:"member"},P=["src"],U={class:"info"},F={class:"name"};var E=(0,i.aZ)({__name:"member",props:{memberInfo:null},setup(e){const t=e,o=e=>{window.open("mailto:"+e,"_blank")};return(e,s)=>{const a=(0,i.up)("v-btn");return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("img",{class:"cover",src:n(3987)("./"+t.memberInfo.cover),alt:""},null,8,P),(0,i._)("div",U,[(0,i._)("div",F,(0,y.zw)(t.memberInfo.name),1),(0,i.Wm)(a,{rounded:"lg",size:"x-small",variant:"plain",icon:"mdi mdi-email-outline",class:"email-btn",onClick:s[0]||(s[0]=e=>o(t.memberInfo.email))})])])}}});const H=E;var A=H;const L=[{name:"login",cover:"login.jpg",email:"loginfameneo@163.com"},{name:"phidialam",cover:"phidialam.png",email:"phidia01@connect.hku.hk"},{name:"逸之社恐猪",cover:"boyipang.jpg",email:"phidia01@connect.hku.hk"},{name:"Su Zihan",cover:"suZihan.png",email:"zsu277@gmail.com"},{name:"jasonsheih",cover:"jasonsheih.jpg",email:"jasonsheih@gmail.com"}],N={class:"members"},V={class:"member-area div flex flex-row flex-wrap flex-evenly-center"};var Y=(0,i.aZ)({__name:"team",setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)("div",N,[(0,i.Wm)(C,{title:"Members"}),(0,i._)("div",V,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,w.SU)(L),((e,t)=>((0,i.wg)(),(0,i.j4)(A,{key:t,"member-info":e},null,8,["member-info"])))),128))])]))}});const q=(0,a.Z)(Y,[["__scopeId","data-v-f6283016"]]);var K=q;const R={class:"home"};var B=(0,i.aZ)({__name:"index",setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)("div",R,[(0,i.Wm)(b),(0,i.Wm)(Z),(0,i.Wm)(K)]))}});const $=B;var G=$,J=n(65),Q=(0,J.MT)({state:{fullpath:""},getters:{getFullpath(e){return e.fullpath}},mutations:{setFullpath(e,t){e.fullpath=t}},actions:{},modules:{}});const X=[{path:"/",name:"web",component:G}],ee=(0,p.p7)({history:(0,p.r5)(""),routes:X});ee.beforeEach(((e,t,n)=>{Q.commit("setFullpath",e.fullPath),n()}));var te=ee,ne=n(8957),oe=(n(7691),n(7229)),ie=n(8600),se=n(3504),ae=n(596);const re=(0,ne.Rd)({components:oe,directives:ie,icons:{defaultSet:"mdi",aliases:se.j,sets:{mdi:se.t,fa:ae.fa}}});(0,o.ri)(c).use(Q).use(te).use(re).mount("#app")},3987:function(e,t,n){var o={"./boyipang.jpg":1140,"./jasonsheih.jpg":1679,"./login.jpg":3880,"./phidialam.png":8994,"./suZihan.png":2088};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=s,e.exports=i,i.id=3987},9300:function(e,t,n){var o={"./external_network_connection.png":207,"./local_network_connection.png":3979,"./log-1.png":3954,"./log-2.png":6934,"./log-3.png":9450,"./log-4.png":5594,"./log-5.png":346,"./log-6.png":2195,"./log-7.png":9767,"./log-8.png":7490,"./log-9.png":7306,"./lzh-log-1.png":7248,"./lzh-log-2.png":2918,"./lzh-log-3.png":8323,"./lzh-log-4.png":821,"./lzh-log-5.png":6164,"./lzh-log-6.png":7814,"./pby-log-1.png":2577,"./pby-log-2.png":1805,"./pby-log-3.png":7813,"./team/boyipang.jpg":1140,"./team/jasonsheih.jpg":1679,"./team/login.jpg":3880,"./team/phidialam.png":8994,"./team/suZihan.png":2088};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=s,e.exports=i,i.id=9300},207:function(e,t,n){"use strict";e.exports=n.p+"assets/img/external_network_connection.02c43471.png"},3979:function(e,t,n){"use strict";e.exports=n.p+"assets/img/local_network_connection.d9a7ac99.png"},3954:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-1.ff06ea43.png"},6934:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-2.6c96967d.png"},9450:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-3.c8de7f20.png"},5594:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-4.1a14f3cd.png"},346:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-5.1423ab0a.png"},2195:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-6.472fbbb2.png"},9767:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-7.3f4fdfbb.png"},7490:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-8.327e1224.png"},7306:function(e,t,n){"use strict";e.exports=n.p+"assets/img/log-9.9115414c.png"},7248:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-1.ed95a52c.png"},2918:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-2.c60e21c8.png"},8323:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-3.902ef06d.png"},821:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-4.b5e902e7.png"},6164:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-5.818dc2d3.png"},7814:function(e,t,n){"use strict";e.exports=n.p+"assets/img/lzh-log-6.72e20a9b.png"},2577:function(e,t,n){"use strict";e.exports=n.p+"assets/img/pby-log-1.2b8ce7d8.png"},1805:function(e,t,n){"use strict";e.exports=n.p+"assets/img/pby-log-2.ee9c06ab.png"},7813:function(e,t,n){"use strict";e.exports=n.p+"assets/img/pby-log-3.c159f5ab.png"},1140:function(e,t,n){"use strict";e.exports=n.p+"assets/img/boyipang.8ba16942.jpg"},1679:function(e,t,n){"use strict";e.exports=n.p+"assets/img/jasonsheih.08ddd1b7.jpg"},3880:function(e,t,n){"use strict";e.exports=n.p+"assets/img/login.93d1bf04.jpg"},8994:function(e,t,n){"use strict";e.exports=n.p+"assets/img/phidialam.5d92603a.png"},2088:function(e,t,n){"use strict";e.exports=n.p+"assets/img/suZihan.bde3110b.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,s){if(!o){var a=1/0;for(p=0;p<e.length;p++){o=e[p][0],i=e[p][1],s=e[p][2];for(var r=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,s<a&&(a=s));if(r){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[o,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,s,a=o[0],r=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var p=l(n)}for(t&&t(o);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},o=self["webpackChunkhorrortel_website"]=self["webpackChunkhorrortel_website"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9310)}));o=n.O(o)})();