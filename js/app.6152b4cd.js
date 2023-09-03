(function(){"use strict";var e={48916:function(e,t,n){var o=n(66252),i=n(58061);const l=e=>((0,o.dD)("data-v-9c806000"),e=e(),(0,o.Cn)(),e),r={id:"app",class:"max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10"},a={key:0,class:"relative mb-8 rounded-b-lg",id:"nav"},s={class:"flex items-center flex-wrap justify-between"},c={class:"mr-6"},u={class:"text-2xl"},d={class:"flex items-center logo"},f={class:"rainbow"},m=(0,o.Uk)("sfyl"),h={id:"navButtons",class:"align-baseline flex-wrap md:flex md:items-center flex-grow px-2 md:p-0 hidden md:bg-transparent justify-center"},g=(0,o.Uk)("Home"),p=l((()=>(0,o._)("span",{class:"no-wrap"},"About Me",-1))),b=(0,o.Uk)("Blog"),v=(0,o.Uk)("Contact"),w={id:"icons",class:"md:text-right flex items-center md:justify-end"},y={href:"https://github.com/SFYLL/sfyll.github.io",title:"View this website's source on GitHub"},k={key:1,class:"flex items-center flex-wrap justify-between"},_={class:"flex-1 text-center flex justify-center"},x={class:"text-2xl"},M={class:"flex items-center justify-center logo"},C=(0,o.Uk)("sfyl"),L={href:"https://github.com/SFYLL/sfyll.github.io",title:"View this website's source on GitHub"},W={key:0,id:"mobilenav",class:"flex flex-col items-center h-full"},j={id:"mobilenavbuttons",class:"flex flex-col items-center w-full"},T=(0,o.Uk)("Home"),N=l((()=>(0,o._)("span",{class:"no-wrap"},"About Me",-1))),U=(0,o.Uk)("Blog"),S=(0,o.Uk)("Contact");function E(e,t,n,l,E,B){const O=(0,o.up)("router-link"),A=(0,o.up)("ThemeSwitcher"),P=(0,o.up)("Unicon"),$=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("div",r,[E.isMobile?((0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",null,[(0,o._)("button",{id:"menuIcon",class:"flex items-center px-3 py-3 text-gray-700 hover:text-gray-900",title:"Menu",onClick:t[0]||(t[0]=(...e)=>B.mobileMenu&&B.mobileMenu(...e))},[(0,o.Wm)(P,{width:"20",height:"20",name:"bars",fill:B.iconColor},null,8,["fill"])])]),(0,o._)("div",_,[(0,o._)("h3",x,[(0,o._)("a",M,[(0,o._)("span",{onClick:t[1]||(t[1]=(...e)=>B.toggleMenu&&B.toggleMenu(...e)),class:"rainbow"},[(0,o.Wm)(O,{to:"/"},{default:(0,o.w5)((()=>[C])),_:1})])])])]),(0,o._)("div",null,[(0,o.Wm)(A),(0,o._)("a",L,[(0,o.Wm)(P,{width:"24",height:"24",name:"github",fill:B.iconColor},null,8,["fill"])])])])):((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("header",s,[(0,o._)("div",c,[(0,o._)("h3",u,[(0,o._)("a",d,[(0,o._)("span",f,[(0,o.Wm)(O,{to:"/"},{default:(0,o.w5)((()=>[m])),_:1})])])])]),(0,o._)("ul",h,[(0,o._)("li",null,[(0,o.Wm)(O,{to:"/"},{default:(0,o.w5)((()=>[g])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(O,{to:"/about"},{default:(0,o.w5)((()=>[p])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(O,{to:"/blog"},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(O,{to:"/contact"},{default:(0,o.w5)((()=>[v])),_:1})])]),(0,o._)("div",w,[(0,o.Wm)(A),(0,o._)("a",y,[(0,o.Wm)(P,{width:"24",height:"24",name:"github",fill:B.iconColor},null,8,["fill"])])])])])),(0,o.Wm)(i.uT,{name:"appear"},{default:(0,o.w5)((()=>[E.isMobile&&B.showMobileNav?((0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("ul",j,[(0,o._)("li",{onClick:t[2]||(t[2]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(O,{to:"/"},{default:(0,o.w5)((()=>[T])),_:1})]),(0,o._)("li",{onClick:t[3]||(t[3]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(O,{to:"/about"},{default:(0,o.w5)((()=>[N])),_:1})]),(0,o._)("li",{onClick:t[4]||(t[4]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(O,{to:"/blog"},{default:(0,o.w5)((()=>[U])),_:1})]),(0,o._)("li",{onClick:t[5]||(t[5]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(O,{to:"/contact"},{default:(0,o.w5)((()=>[S])),_:1})])])])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)($)])])}function B(e,t,n,i,l,r){const a=(0,o.up)("unicon");return(0,o.wg)(),(0,o.iD)("span",{onClick:t[0]||(t[0]=(...e)=>r.switchTheme&&r.switchTheme(...e)),class:"switcher align-baseline",tabindex:"0"},[this.$store.state.dark?((0,o.wg)(),(0,o.j4)(a,{key:0,name:"sun",fill:"white","aria-label":"Switch to light mode"})):((0,o.wg)(),(0,o.j4)(a,{key:1,name:"moon",fill:"black","aria-label":"Switch to dark mode"}))])}var O={methods:{switchTheme(){this.$store.commit("switchTheme")}}},A=n(83744);const P=(0,A.Z)(O,[["render",B]]);var $=P,D={components:{ThemeSwitcher:$},data(){return{isMobile:window.innerWidth<=768}},computed:{iconColor:function(){return this.$store.state.dark?"white":"black"},showMobileNav:{get(){return this.$store.state.showMobileNav},set(e){this.$store.commit("toggleMobileNav",e)}}},methods:{mobileMenu:function(){this.$store.commit("toggleMobileNav",!this.$store.state.showMobileNav)},toggleMenu:function(){this.$store.commit("toggleMobileNav",!1)}},mounted(){const e=document.createElement("meta");e.name="theme-color",e.content=this.$store.state.dark?"#2e3440":"#eceff4",document.getElementsByTagName("head")[0].appendChild(e),document.body.classList.add(this.$store.state.dark?"dark":"light")},beforeDestroy(){window.removeEventListener("resize",this.updateWindowSize)}};const H=(0,A.Z)(D,[["render",E],["__scopeId","data-v-9c806000"]]);var Z=H,q=n(42119),I=n.p+"img/luff1.e09afa46.png";const F=e=>((0,o.dD)("data-v-852046e0"),e=e(),(0,o.Cn)(),e),G={class:"home"},z=F((()=>(0,o._)("div",{class:"md:flex md:mt-16 mb-8 items-center justify-between"},[(0,o._)("section",{class:"md:w-full mt-1"},[(0,o._)("a",{class:"content-center"},[(0,o._)("img",{src:I,title:"Luffy",class:"content-center mx-auto h-48 w-48 transparent-img transparent-img-light"})])])],-1))),Y={class:"md:flex md:mt-8 mb-24 items-center justify-between"},K={class:"md:w-full mt-1"},Q=(0,o.Uk)(" Hey, I am "),V=F((()=>(0,o._)("span",{class:"rainbow"},"sfyl",-1))),J={class:"mb-0"},R=(0,o.Uk)(" High frequency trader turned byte generalist."),X=F((()=>(0,o._)("br",null,null,-1))),ee=(0,o.Uk)(" Curious? Try the "),te=(0,o.Uk)("About"),ne=(0,o.Uk)(" page"),oe=(0,o.Uk)(", or check my "),ie=(0,o.Uk)("Blog"),le=(0,o.Uk)("."),re=F((()=>(0,o._)("br",null,null,-1))),ae=(0,o.Uk)(" Building? Get my "),se=(0,o.Uk)("Contact"),ce=(0,o.Uk)(" and reach out! ");function ue(e,t,n,i,l,r){const a=(0,o.up)("heading"),s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",G,[z,(0,o._)("div",Y,[(0,o._)("section",K,[(0,o.Wm)(a,null,{default:(0,o.w5)((()=>[Q,V])),_:1}),(0,o._)("body",J,[R,X,ee,(0,o._)("span",{onClick:t[0]||(t[0]=(...e)=>r.toggleMenu&&r.toggleMenu(...e)),class:"no-wrap"},[(0,o.Wm)(s,{to:"/about"},{default:(0,o.w5)((()=>[te])),_:1}),ne]),oe,(0,o._)("span",{onClick:t[1]||(t[1]=(...e)=>r.toggleMenu&&r.toggleMenu(...e))},[(0,o.Wm)(s,{to:"/blog"},{default:(0,o.w5)((()=>[ie])),_:1})]),le,re,ae,(0,o._)("span",{onClick:t[2]||(t[2]=(...e)=>r.toggleMenu&&r.toggleMenu(...e))},[(0,o.Wm)(s,{to:"/Contact"},{default:(0,o.w5)((()=>[se])),_:1})]),ce])])])])}var de={name:"Home",components:{},methods:{toggleMenu:function(){this.$store.commit("toggleMobileNav",!1)}}};const fe=(0,A.Z)(de,[["render",ue],["__scopeId","data-v-852046e0"]]);var me=fe;const he=[{path:"/",name:"Home",component:me},{path:"/about",name:"About",component:()=>n.e(443).then(n.bind(n,47204))},{path:"/contact",name:"Contact",component:()=>n.e(631).then(n.bind(n,59203))},{path:"/blog/",name:"Blog",component:()=>Promise.all([n.e(771),n.e(239)]).then(n.bind(n,71930))},{path:"/blog/:post",name:"Blog Post",component:()=>Promise.all([n.e(771),n.e(2)]).then(n.bind(n,36357))}],ge=(0,q.p7)({history:(0,q.PO)("/"),routes:he});var pe=ge,be=n(71062),ve=n(29439),we=n(33907),ye=n(84702),ke=(0,we.MT)({plugins:[(0,ye.Z)({key:"state",storage:window.localStorage})],state:{dark:window.matchMedia("(prefers-color-scheme: dark)").matches,showMobileNav:!1},mutations:{switchTheme(e){if(e.dark=!e.dark,document.querySelector("meta[name=theme-color]").setAttribute("content",e.dark?"#2e3440":"#eceff4"),window.matchMedia("(prefers-reduced-motion: reduce)").matches)return document.body.classList.replace(e.dark?"light":"dark",e.dark?"dark":"light");let t=e.dark?"light-to-dark":"dark-to-light";document.body.classList.add(t),document.body.classList.remove(e.dark?"light":"dark"),setTimeout((()=>{document.body.classList.add(e.dark?"dark":"light"),document.body.classList.remove(t)}),600)},toggleMobileNav(e,t){e.showMobileNav=t}},actions:{},modules:{}}),_e=n(56612);function xe(e,t,n,i,l,r){return(0,o.wg)(),(0,o.iD)("h1",{class:(0,_e.C_)(l.classList)},[(0,o.WI)(e.$slots,"default")],2)}var Me={data(){return{classList:"heading "}},props:{small:{required:!1,type:Boolean}},mounted(){this.small?this.classList+="text-xl":this.classList+="text-3xl"}};const Ce=(0,A.Z)(Me,[["render",xe]]);var Le=Ce;function We(e,t,n,i,l,r){return(0,o.wg)(),(0,o.iD)("h2",{class:(0,_e.C_)(l.classList.join(" "))},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],2)}n(57658);var je={data(){return{classList:["subheading"]}},props:{small:{required:!1,type:Boolean},bold:{required:!1,type:Boolean}},mounted(){this.small?this.classList.push("text-sm"):this.classList.push("text-xl"),this.bold||this.classList.push("font-normal")}};const Te=(0,A.Z)(je,[["render",We],["__scopeId","data-v-40aa4a4e"]]);var Ne=Te,Ue=n(46676),Se=n.n(Ue),Ee=n(79128);const Be=(0,i.ri)(Z);Be.use(Ee.ZP,{config:{id:"G-Q6423EHZHZ"}},pe),ve.Z.add([be.f5K,be.n6n,be.zyo,be.E_y,be._53,be.crt,be.QYT,be.ABC]),Be.config.productionTip=!1,Be.config.globalProperties.$bodyElement=null,Be.config.globalProperties.$cms=Se()("81218e35deb9ccf0d22dbf9995b2c1d019fbd582"),Be.component("heading",Le),Be.component("subheading",Ne),Be.use(pe).use(ke).use(ve.Z).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,l){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],l=e[u][2];for(var a=!0,s=0;s<o.length;s++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,l<r&&(r=l));if(a){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,i,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({2:"blogPost",239:"blog",443:"about",631:"contact"}[e]||e)+"."+{2:"25e150dd",239:"1c7ab979",443:"136fc92f",631:"bef71415",771:"da1277d1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{239:"blog",631:"contact"}[e]+"."+{239:"c6f7afec",631:"1b97c717"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sfyl-site:";n.l=function(o,i,l,r){if(e[o])e[o].push(i);else{var a,s;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+l){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+l),a.src=o),e[o]=[i];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,i){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var r=function(n){if(l.onerror=l.onload=null,"load"===n.type)o();else{var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=a,l.parentNode&&l.parentNode.removeChild(l),i(s)}};return l.onerror=l.onload=r,l.href=t,n?n.parentNode.insertBefore(l,n.nextSibling):document.head.appendChild(l),l},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===e||l===t))return i}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){i=r[o],l=i.getAttribute("data-href");if(l===e||l===t)return i}},o=function(o){return new Promise((function(i,l){var r=n.miniCssF(o),a=n.p+r;if(t(r,a))return i();e(o,a,null,i,l)}))},i={143:0};n.f.miniCss=function(e,t){var n={239:1,631:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var l=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=l);var r=n.p+n.u(t),a=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var l=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",a.name="ChunkLoadError",a.type=l,a.request=r,i[1](a)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,r=o[0],a=o[1],s=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var u=s(n)}for(t&&t(o);c<r.length;c++)l=r[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self["webpackChunksfyl_site"]=self["webpackChunksfyl_site"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(48916)}));o=n.O(o)})();
//# sourceMappingURL=app.6152b4cd.js.map