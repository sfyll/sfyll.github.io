(function(){"use strict";var e={50866:function(e,t,n){n.a(e,(async function(e,t){try{var o=n(2816),r=n(91593),i=n(73233),a=n(44141),l=n(89512),s=n(24239),c=n(40338),u=n(30567),d=n(84937),f=n(66948);const e=(0,i.ri)(o.Z);e.use(d.ZP,{config:{id:"G-Q6423EHZHZ"}},r.Z),l.Z.add([a.f5K,a.n6n,a.zyo,a.E_y,a._53,a.crt,a.QYT,a.ABC]),e.config.productionTip=!1,e.config.globalProperties.$bodyElement=null,e.component("heading",c.Z),e.component("subheading",u.Z),e.use(r.Z).use(s.Z).use(l.Z).use((0,f.Bg)()),await r.Z.isReady(),e.mount("#app"),t()}catch(m){t(m)}}),1)},91593:function(e,t,n){n.d(t,{Z:function(){return $}});var o=n(70678),r=n(73396),i=n.p+"img/luff1.e09afa46.png";const a=e=>((0,r.dD)("data-v-7ede844c"),e=e(),(0,r.Cn)(),e),l={class:"home"},s=a((()=>(0,r._)("div",{class:"md:flex md:mt-16 mb-8 items-center justify-between"},[(0,r._)("section",{class:"md:w-full mt-1"},[(0,r._)("a",{class:"content-center"},[(0,r._)("img",{src:i,title:"Luffy",class:"content-center mx-auto h-48 w-48 transparent-img transparent-img-light"})])])],-1))),c={class:"md:flex md:mt-8 mb-24 items-center justify-between"},u={class:"md:w-full mt-1"},d=(0,r.Uk)(" Hey, I am "),f=a((()=>(0,r._)("span",{class:"rainbow"},"sfyl",-1))),m={class:"mb-0"},h=(0,r.Uk)(" High frequency trader turned byte generalist."),p=a((()=>(0,r._)("br",null,null,-1))),g=(0,r.Uk)(" Curious? Try the "),b=(0,r.Uk)("About"),v=(0,r.Uk)(" page"),w=(0,r.Uk)(", or check my "),y=(0,r.Uk)("Blog"),_=(0,r.Uk)("."),k=a((()=>(0,r._)("br",null,null,-1))),x=(0,r.Uk)(" Building? Get my "),C=(0,r.Uk)("Contact"),M=(0,r.Uk)(" and reach out! ");function L(e,t,n,o,i,a){const L=(0,r.up)("heading"),T=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",l,[s,(0,r._)("div",c,[(0,r._)("section",u,[(0,r.Wm)(L,null,{default:(0,r.w5)((()=>[d,f])),_:1}),(0,r._)("body",m,[h,p,g,(0,r._)("span",{onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e)),class:"no-wrap"},[(0,r.Wm)(T,{to:"/about"},{default:(0,r.w5)((()=>[b])),_:1}),v]),w,(0,r._)("span",{onClick:t[1]||(t[1]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},[(0,r.Wm)(T,{to:"/blog"},{default:(0,r.w5)((()=>[y])),_:1})]),_,k,x,(0,r._)("span",{onClick:t[2]||(t[2]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},[(0,r.Wm)(T,{to:"/Contact"},{default:(0,r.w5)((()=>[C])),_:1})]),M])])])])}var T=n(66948),S={name:"Home",components:{},setup(){(0,T.jq)({htmlAttrs:{lang:"en",amp:!0},title:"The personal website of sfyl",description:"High frequency trader turned byte generalist",og:{title:"The personal website of sfyl",description:"High frequency trader turned byte generalist",image:"https://www.sfyl.xyz/favicon.ico"},twitter:{card:"summary",site:"@SFYLL"}})},methods:{toggleMenu:function(){this.$store.commit("toggleMobileNav",!1)}}},W=n(40089);const j=(0,W.Z)(S,[["render",L],["__scopeId","data-v-7ede844c"]]);var U=j;const Z=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:()=>n.e(443).then(n.bind(n,36574))},{path:"/contact",name:"Contact",component:()=>n.e(631).then(n.bind(n,72824))},{path:"/blog/",name:"Blog",component:()=>Promise.all([n.e(897),n.e(239)]).then(n.bind(n,66235))},{path:"/blog/:post",name:"Blog Post",component:()=>Promise.all([n.e(897),n.e(2)]).then(n.bind(n,92454))}],N=(0,o.p7)({history:(0,o.PO)("/"),linkActiveClass:"active",routes:Z});var $=N},24239:function(e,t,n){var o=n(87139),r=n(42415);t.Z=(0,o.MT)({plugins:[(0,r.Z)({key:"state",storage:window.localStorage})],state:{dark:window.matchMedia("(prefers-color-scheme: dark)").matches,showMobileNav:!1},mutations:{switchTheme(e){if(e.dark=!e.dark,document.querySelector("meta[name=theme-color]").setAttribute("content",e.dark?"#2e3440":"#eceff4"),window.matchMedia("(prefers-reduced-motion: reduce)").matches)return document.body.classList.replace(e.dark?"light":"dark",e.dark?"dark":"light");let t=e.dark?"light-to-dark":"dark-to-light";document.body.classList.add(t),document.body.classList.remove(e.dark?"light":"dark"),setTimeout((()=>{document.body.classList.add(e.dark?"dark":"light"),document.body.classList.remove(t)}),600)},toggleMobileNav(e,t){e.showMobileNav=t}},actions:{},modules:{}})},2816:function(e,t,n){n.d(t,{Z:function(){return D}});var o=n(73396),r=n(27156),i=n(73233);const a=e=>((0,o.dD)("data-v-ed70b472"),e=e(),(0,o.Cn)(),e),l={id:"app",class:"max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10"},s={key:0,class:"relative mb-8 rounded-b-lg",id:"nav"},c={class:"flex items-center flex-wrap justify-between"},u={class:"mr-6"},d={class:"text-2xl"},f={class:"flex items-center logo"},m={class:"rainbow"},h=(0,o.Uk)("sfyl"),p={id:"navButtons",class:"align-baseline flex-wrap md:flex md:items-center flex-grow px-2 md:p-0 hidden md:bg-transparent justify-center"},g=(0,o.Uk)("Home"),b=a((()=>(0,o._)("span",{class:"no-wrap"},"About Me",-1))),v=(0,o.Uk)("Blog"),w=(0,o.Uk)("Contact"),y={id:"icons",class:"md:text-right flex items-center md:justify-end"},_={href:"https://github.com/SFYLL/",title:"Visit my GitHub"},k={key:1,class:"flex items-center flex-wrap justify-between"},x={class:"flex-1 text-center flex justify-center"},C={class:"text-2xl"},M={class:"flex items-center justify-center logo"},L=(0,o.Uk)("sfyl"),T={href:"https://github.com/SFYLL/",title:"Visit my GitHub"},S={key:0,id:"mobilenav",class:"flex flex-col items-center h-full"},W={id:"mobilenavbuttons",class:"flex flex-col items-center w-full"},j=(0,o.Uk)("Home"),U=a((()=>(0,o._)("span",{class:"no-wrap"},"About Me",-1))),Z=(0,o.Uk)("Blog"),N=(0,o.Uk)("Contact");function $(e,t,n,a,$,E){const B=(0,o.up)("metainfo"),A=(0,o.up)("router-link"),O=(0,o.up)("ThemeSwitcher"),P=(0,o.up)("Unicon"),q=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o.Wm)(B,null,{title:(0,o.w5)((({content:e})=>[(0,o.Uk)((0,r.zw)(e),1)])),_:1}),(0,o._)("div",l,[$.isMobile?((0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",null,[(0,o._)("button",{id:"menuIcon",class:"flex items-center px-3 py-3 text-gray-700 hover:text-gray-900",title:"Menu",onClick:t[0]||(t[0]=(...e)=>E.mobileMenu&&E.mobileMenu(...e))},[(0,o.Wm)(P,{width:"20",height:"20",name:"bars",fill:E.iconColor},null,8,["fill"])])]),(0,o._)("div",x,[(0,o._)("h3",C,[(0,o._)("a",M,[(0,o._)("span",{onClick:t[1]||(t[1]=(...e)=>E.toggleMenu&&E.toggleMenu(...e)),class:"rainbow"},[(0,o.Wm)(A,{to:"/"},{default:(0,o.w5)((()=>[L])),_:1})])])])]),(0,o._)("div",null,[(0,o.Wm)(O),(0,o._)("a",T,[(0,o.Wm)(P,{width:"24",height:"24",name:"github",fill:E.iconColor},null,8,["fill"])])])])):((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("header",c,[(0,o._)("div",u,[(0,o._)("h3",d,[(0,o._)("a",f,[(0,o._)("span",m,[(0,o.Wm)(A,{to:"/"},{default:(0,o.w5)((()=>[h])),_:1})])])])]),(0,o._)("ul",p,[(0,o._)("li",null,[(0,o.Wm)(A,{to:"/"},{default:(0,o.w5)((()=>[g])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(A,{to:"/about"},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(A,{to:"/blog"},{default:(0,o.w5)((()=>[v])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(A,{to:"/contact"},{default:(0,o.w5)((()=>[w])),_:1})])]),(0,o._)("div",y,[(0,o.Wm)(O),(0,o._)("a",_,[(0,o.Wm)(P,{width:"24",height:"24",name:"github",fill:E.iconColor},null,8,["fill"])])])])])),(0,o.Wm)(i.uT,{name:"appear"},{default:(0,o.w5)((()=>[$.isMobile&&E.showMobileNav?((0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("ul",W,[(0,o._)("li",{onClick:t[2]||(t[2]=(...e)=>E.toggleMenu&&E.toggleMenu(...e))},[(0,o.Wm)(A,{to:"/"},{default:(0,o.w5)((()=>[j])),_:1})]),(0,o._)("li",{onClick:t[3]||(t[3]=(...e)=>E.toggleMenu&&E.toggleMenu(...e))},[(0,o.Wm)(A,{to:"/about"},{default:(0,o.w5)((()=>[U])),_:1})]),(0,o._)("li",{onClick:t[4]||(t[4]=(...e)=>E.toggleMenu&&E.toggleMenu(...e))},[(0,o.Wm)(A,{to:"/blog"},{default:(0,o.w5)((()=>[Z])),_:1})]),(0,o._)("li",{onClick:t[5]||(t[5]=(...e)=>E.toggleMenu&&E.toggleMenu(...e))},[(0,o.Wm)(A,{to:"/contact"},{default:(0,o.w5)((()=>[N])),_:1})])])])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(q)])])}function E(e,t,n,r,i,a){const l=(0,o.up)("unicon");return(0,o.wg)(),(0,o.iD)("span",{onClick:t[0]||(t[0]=(...e)=>a.switchTheme&&a.switchTheme(...e)),class:"switcher align-baseline",tabindex:"0"},[(0,o.Wm)(l,{name:a.themeIcon,fill:a.themeIconColor,"aria-label":`Switch to ${a.themeLabel} mode`},null,8,["name","fill","aria-label"])])}var B={computed:{themeIcon(){return this.$store.state.dark?"sun":"moon"},themeIconColor(){return this.$store.state.dark?"white":"black"},themeLabel(){return this.$store.state.dark?"light":"dark"}},methods:{switchTheme(){this.$store.commit("switchTheme")}}},A=n(40089);const O=(0,A.Z)(B,[["render",E]]);var P=O,q={components:{ThemeSwitcher:P},watch:{"$store.state.dark":{immediate:!0,handler(e){const t=document.querySelector('meta[name="theme-color"]');t&&(t.content=e?"#2e3440":"#eceff4")}}},data(){return{isMobile:window.innerWidth<=768}},computed:{iconColor:function(){return this.$store.state.dark?"white":"black"},showMobileNav:{get(){return this.$store.state.showMobileNav},set(e){this.$store.commit("toggleMobileNav",e)}}},methods:{mobileMenu:function(){this.$store.commit("toggleMobileNav",!this.$store.state.showMobileNav)},toggleMenu:function(){this.$store.commit("toggleMobileNav",!1)},updateMetaThemeColor(){const e=document.querySelector('meta[name="theme-color"]')||document.createElement("meta");e.name="theme-color",e.content=this.$store.state.dark?"#2e3440":"#eceff4",document.head.appendChild(e)},updateBodyClass(){document.body.classList.remove("dark","light"),document.body.classList.add(this.$store.state.dark?"dark":"light")},ensureCorrectThemeIcon(){this.$nextTick((()=>{this.$forceUpdate()}))}},mounted(){this.updateMetaThemeColor(),this.updateBodyClass(),this.ensureCorrectThemeIcon()},beforeDestroy(){window.removeEventListener("resize",this.updateWindowSize)}};const I=(0,A.Z)(q,[["render",$],["__scopeId","data-v-ed70b472"]]);var D=I},40338:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(73396),r=n(27156);function i(e,t,n,i,a,l){return(0,o.wg)(),(0,o.iD)("h1",{class:(0,r.C_)(a.classList)},[(0,o.WI)(e.$slots,"default")],2)}var a={data(){return{classList:"heading "}},props:{small:{required:!1,type:Boolean}},mounted(){this.small?this.classList+="text-xl":this.classList+="text-3xl"}},l=n(40089);const s=(0,l.Z)(a,[["render",i]]);var c=s},30567:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(73396),r=n(27156);function i(e,t,n,i,a,l){return(0,o.wg)(),(0,o.iD)("h2",{class:(0,r.C_)(a.classList.join(" "))},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],2)}n(57658);var a={data(){return{classList:["subheading"]}},props:{small:{required:!1,type:Boolean},bold:{required:!1,type:Boolean}},mounted(){this.small?this.classList.push("text-sm"):this.classList.push("text-xl"),this.bold||this.classList.push("font-normal")}},l=n(40089);const s=(0,l.Z)(a,[["render",i],["__scopeId","data-v-40aa4a4e"]]);var c=s}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=function(e){e&&e.d<1&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},i=function(n){return n.map((function(n){if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var i=[];i.d=0,n.then((function(e){a[t]=e,r(i)}),(function(e){a[o]=e,r(i)}));var a={};return a[e]=function(e){e(i)},a}}var l={};return l[e]=function(){},l[t]=n,l}))};n.a=function(n,a,l){var s;l&&((s=[]).d=-1);var c,u,d,f=new Set,m=n.exports,h=new Promise((function(e,t){d=t,u=e}));h[t]=m,h[e]=function(e){s&&e(s),f.forEach(e),h["catch"]((function(){}))},n.exports=h,a((function(n){var r;c=i(n);var a=function(){return c.map((function(e){if(e[o])throw e[o];return e[t]}))},l=new Promise((function(t){r=function(){t(a)},r.r=0;var n=function(e){e!==s&&!f.has(e)&&(f.add(e),e&&!e.d&&(r.r++,e.push(r)))};c.map((function(t){t[e](n)}))}));return r.r?l:a()}),(function(e){e?d(h[o]=e):u(m),r(s)})),s&&s.d<0&&(s.d=0)}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({2:"blogPost",239:"blog",443:"about",631:"contact"}[e]||e)+"."+{2:"bb49f89d",239:"01a85af2",443:"5892910d",631:"a02495c2",897:"4a35e5cc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{239:"blog",631:"contact"}[e]+"."+{239:"b080d971",631:"1b97c717"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sfyl-site:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[r];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,i.parentNode&&i.parentNode.removeChild(i),r(s)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),l=n.p+a;if(t(a,l))return r();e(o,l,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={239:1,631:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunksfyl_site"]=self["webpackChunksfyl_site"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(50866)}));o=n.O(o)})();
//# sourceMappingURL=app.e3c853a7.js.map