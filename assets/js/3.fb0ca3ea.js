(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},142:function(t,e,n){},143:function(t,e,n){},144:function(t,e,n){n(0)({target:"Array",stat:!0},{isArray:n(41)})},145:function(t,e,n){var i=n(16),r="["+n(141)+"]",s=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},147:function(t,e){function n(t){return"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1)}function i(t){return void 0!==t.componentInstance&&t.componentInstance.$isServer}t.exports={bind:function(t,e,r){if(!n(e))return;function s(e){if(r.context){var n=e.path||e.composedPath&&e.composedPath();n&&n.length>0&&n.unshift(e.target),t.contains(e.target)||function(t,e){if(!t||!e)return!1;for(var n=0,i=e.length;n<i;n++)try{if(t.contains(e[n]))return!0;if(e[n].contains(t))return!1}catch(t){return!1}return!1}(r.context.popupItem,n)||t.__vueClickOutside__.callback(e)}}t.__vueClickOutside__={handler:s,callback:e.value};const a="ontouchstart"in document.documentElement?"touchstart":"click";!i(r)&&document.addEventListener(a,s)},update:function(t,e){n(e)&&(t.__vueClickOutside__.callback=e.value)},unbind:function(t,e,n){const r="ontouchstart"in document.documentElement?"touchstart":"click";!i(n)&&t.__vueClickOutside__&&document.removeEventListener(r,t.__vueClickOutside__.handler),delete t.__vueClickOutside__}}},148:function(t,e,n){"use strict";var i=n(142);n.n(i).a},150:function(t,e,n){"use strict";var i=n(143);n.n(i).a},152:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){},155:function(t,e,n){},156:function(t,e,n){"use strict";var i=n(0),r=n(42),s=n(10),a=n(30),o=[].join,u=r!=Object,c=a("join",",");i({target:"Array",proto:!0,forced:u||!c},{join:function(t){return o.call(s(this),void 0===t?",":t)}})},157:function(t,e,n){},158:function(t,e,n){},160:function(t,e,n){"use strict";n(39),n(105),n(64),n(29),n(40);var i=n(147),r={directives:{ClickOutside:n.n(i).a},data:function(){return{isOpen:!1}},computed:{selectText:function(){return this.$site.themeConfig.locales[this.$localePath].selectText},links:function(){var t=this,e=this.$router.options.routes,n=this.$site.themeConfig.locales,i=this.$page.path,r=this.$localePath;return Object.keys(n).map((function(s){var a,o=n[s],u=o.selectText,c=o.label,l=o.lang,f=!1;return l===t.$lang?(f=!0,a=i):(a=i.replace(r,s),e.some((function(t){return t.path===a}))||(a=s)),{isCurrent:f,selectText:u,label:c,lang:l,path:a}}))}},methods:{toggleDropdown:function(){this.isOpen=!this.isOpen},hide:function(){this.isOpen=!1}}},s=(n(148),n(28)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hide,expression:"hide"}],class:{LanguageSelect:!0,"LanguageSelect--isOpen":t.isOpen},on:{click:t.toggleDropdown}},[n("div",{staticClass:"LanguageSelect__button"},[t._v("\n    "+t._s(t.selectText)+" ▼\n  ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"LanguageSelect__list"},t._l(t.links,(function(e){return n("router-link",{staticClass:"LanguageSelect__listItem",attrs:{to:e.path}},[t._v("\n      "+t._s(e.label)+"\n    ")])})),1)])}),[],!1,null,null,null);e.a=a.exports},169:function(t,e,n){var i=n(0),r=n(192).entries;i({target:"Object",stat:!0},{entries:function(t){return r(t)}})},170:function(t,e,n){"use strict";var i=n(96),r=n(8),s=n(13),a=n(16),o=n(103),u=n(97);i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),c=String(this);if(!a.global)return u(a,c);var l=a.unicode;a.lastIndex=0;for(var f,h=[],d=0;null!==(f=u(a,c));){var p=String(f[0]);h[d]=p,""===p&&(a.lastIndex=o(c,s(a.lastIndex),l)),d++}return 0===d?null:h}]}))},192:function(t,e,n){var i=n(6),r=n(46),s=n(10),a=n(66).f,o=function(t){return function(e){for(var n,o=s(e),u=r(o),c=u.length,l=0,f=[];c>l;)n=u[l++],i&&!a.call(o,n)||f.push(t?[n,o[n]]:o[n]);return f}};t.exports={entries:o(!0),values:o(!1)}},193:function(t,e,n){"use strict";var i=n(152);n.n(i).a},194:function(t,e,n){"use strict";var i=n(0),r=n(145).trim;i({target:"String",proto:!0,forced:n(195)("trim")},{trim:function(){return r(this)}})},195:function(t,e,n){var i=n(2),r=n(141);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},196:function(t,e,n){"use strict";var i=n(153);n.n(i).a},197:function(t,e,n){"use strict";var i=n(154);n.n(i).a},198:function(t,e,n){"use strict";var i=n(155);n.n(i).a},199:function(t,e,n){"use strict";var i=n(96),r=n(101),s=n(8),a=n(16),o=n(200),u=n(103),c=n(13),l=n(97),f=n(47),h=n(2),d=[].push,p=Math.min,v=!h((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var o,u,c,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,h+"g");(o=f.call(v,i))&&!((u=v.lastIndex)>p&&(l.push(i.slice(p,o.index)),o.length>1&&o.index<i.length&&d.apply(l,o.slice(1)),c=o[0].length,p=u,l.length>=s));)v.lastIndex===o.index&&v.lastIndex++;return p===i.length?!c&&v.test("")||l.push(""):l.push(i.slice(p)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var f=s(t),h=String(this),d=o(f,RegExp),g=f.unicode,_=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),m=new d(v?f:"^(?:"+f.source+")",_),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===h.length)return null===l(m,h)?[h]:[];for(var k=0,C=0,x=[];C<h.length;){m.lastIndex=v?C:0;var y,O=l(m,v?h:h.slice(C));if(null===O||(y=p(c(m.lastIndex+(v?0:C)),h.length))===k)C=u(h,C,g);else{if(x.push(h.slice(k,C)),x.length===b)return x;for(var I=1;I<=O.length-1;I++)if(x.push(O[I]),x.length===b)return x;C=k=y}}return x.push(h.slice(k)),x}]}),!v)},200:function(t,e,n){var i=n(8),r=n(60),s=n(1)("species");t.exports=function(t,e){var n,a=i(t).constructor;return void 0===a||null==(n=i(a)[s])?e:r(n)}},201:function(t,e,n){"use strict";var i=n(157);n.n(i).a},202:function(t,e,n){"use strict";var i=n(158);n.n(i).a},231:function(t,e,n){"use strict";n.r(e);n(17),n(39),n(169);var i={props:["items"],computed:{menuItems:function(){var t=this;return this.items.filter((function(t){return Object.entries(t).length>0})).map((function(e){return e.isActivePage="page"===e.type&&e.key===t.$page.key,e}))}}},r=(n(193),n(28)),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"Menu"},[n("div",{staticClass:"MenuPanel"},[n("h6",{staticClass:"MenuPanel__title"},[t._v("Documentation")]),t._v(" "),t._l(t.menuItems,(function(e){return n("div",{key:e.key,class:{MenuItem:!0,MenuItem__active:e.isActivePage}},["page"!==e.type||e.isActivePage?t._e():n("router-link",{staticClass:"MenuItem__link",attrs:{to:e.regularPath}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),e.isActivePage?n("span",{staticClass:"MenuItem__link"},[t._v("\n        "+t._s(e.title)+"\n      ")]):t._e(),t._v(" "),e.isActivePage?n("ul",{staticClass:"MenuItem__subItemList"},t._l(e.headers,(function(i){return i.level<3?n("li",{staticClass:"MenuItem__subItem"},[n("router-link",{staticClass:"MenuItem__subLink",attrs:{to:e.regularPath+"#"+i.slug}},[t._v(t._s(i.title))])],1):t._e()})),0):t._e()],1)}))],2),t._v(" "),n("div",{staticClass:"MenuPanel"},[n("h6",{staticClass:"MenuPanel__title"},[t._v("Links")]),t._v(" "),t._l(t.$site.themeConfig.sidebarLinks,(function(e){return n("div",{staticClass:"MenuItem"},[n("a",{staticClass:"MenuItem__link",attrs:{href:e[0]}},[t._v("\n        "+t._s(e[1])+"\n      ")])])}))],2)])}),[],!1,null,null,null).exports,a=n(160),o=(n(107),n(98),n(144),n(29),n(110),n(170),n(194),{name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(r(o))s.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(s.length>=n);u++){var c=o.headers[u];r(c)&&s.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),u=(n(196),{components:{SearchBox:Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports}}),c=(n(197),Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"Navbar"},[e("search-box",{staticClass:"SearchBox"})],1)}),[],!1,null,null,null).exports),l=(n(198),Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"ArticleHeader"},[e("h1",{staticClass:"ArticleHeader__title"},[this._v("\n    "+this._s(this.$page.title)+"\n  ")])])}),[],!1,null,null,null).exports),f=(n(40),n(37)),h=(n(45),n(156),n(199),n(65),/#.*$/),d=/\.(md|html)$/,p=/\/$/,v=/^[a-z]+:/i;function g(t){return decodeURI(t).replace(h,"").replace(d,"")}function _(t){return v.test(t)}function m(t){if(_(t))return t;var e=t.match(h),n=e?e[0]:"",i=g(t);return p.test(i)?t:i+".html"+n}function b(t,e,n){if(_(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=g(e),r=0;r<t.length;r++)if(g(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:m(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function k(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return C(t);var o=a.sidebar||s.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=u.base,l=u.config;return"auto"===l?C(t):l?l.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return b(n,e,i);if(Array.isArray(e))return Object.assign(b(n,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(b(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,c)})):[]}return[]}function C(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}var x={props:["items"],computed:{prev:function(){return O(y.PREV,this)},next:function(){return O(y.NEXT,this)},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,o=t.docsRepo,u=void 0===o?e:o,c=g(this.$page.path);return p.test(c)?c+="README.md":c+=".md",u&&n?this.createEditLink(e,u,r,a,c):void 0}}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(v.test(e)?e:t).replace(p,"")+"/".concat(i)+(n?"/"+n.replace(p,""):"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(v.test(e)?e:"https://github.com/".concat(e)).replace(p,"")+"/edit/".concat(i)+(n?"/"+n.replace(p,""):"")+r}}};var y={NEXT:{resolveLink:function(t,e){return I(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return I(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function O(t,e){var n=e.$themeConfig,i=e.$page,r=e.$route,s=e.$site,a=e.items,o=t.resolveLink,u=t.getThemeLinkConfig,c=t.getPageLinkConfig,l=u(n),f=c(i),h=null==f?l:f;return!1===h?null:"string"==typeof h?b(s.pages,h,r.path):o(i,a)}function I(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path)){var a=i[r+n];if("object"===Object(f.a)(a)&&Object.entries(a).length>0)return a}}}var $=x,S=(n(201),Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"ArticleFooter"},[n("div",{staticClass:"ArticleNav"},[t.prev?n("router-link",{staticClass:"ArticleNav__prev",attrs:{to:t.prev.path}},[t._v("← "+t._s(t.prev.title||t.prev.path))]):t._e(),t._v(" "),t.next?n("router-link",{staticClass:"ArticleNav__next",attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path)+" →")]):t._e()],1),t._v(" "),n("p",{staticClass:"ArticleFooter__editInfo"},[t._v("\n    Caught a mistake or want to contribute to the documentation? "),t.editLink?n("a",{attrs:{href:t.editLink,title:"Edit page"}},[t._v("Edit this page on github!")]):t._e()])])}),[],!1,null,null,null).exports),w={components:{SidebarMenu:s,LanguageSelect:a.a,DocpageNavbar:c,ArticleHeader:l,ArticleFooter:S},data:function(){return{isSidebarOpen:!1}},methods:{toggleSidebar:function(){this.isSidebarOpen=!this.isSidebarOpen}},watch:{isSidebarOpen:function(t){void 0!==document&&(t?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"))}},computed:{sidebarItems:function(){return k(this.$page,this.$page.regularPath,this.$site,this.$localePath).filter((function(t){return!(t.frontmatter&&!0===t.frontmatter.home)}))}},mounted:function(){var t=this;document.body.style.background="none",this.$router.afterEach((function(){t.isSidebarOpen=!1}))}},L=(n(150),n(202),Object(r.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Page"},[n("div",{class:{Sidebar:!0,"Sidebar--isOpen":t.isSidebarOpen}},[n("header",{staticClass:"SidebarHeader"},[n("router-link",{staticClass:"ProjectTitle",attrs:{to:"/"}},[n("h1",[t._v("iro.js "),n("sub",[t._v("v5")])])]),t._v(" "),n("div",{staticClass:"SidebarHeader__sidebarToggle",on:{click:t.toggleSidebar}},[n("span",{class:["menuIcon",t.isSidebarOpen?"menuIcon--active":""]})])],1),t._v(" "),n("sidebar-menu",{staticClass:"SidebarBody",attrs:{items:t.sidebarItems}})],1),t._v(" "),n("main",{staticClass:"Content"},[n("div",{staticClass:"Content__nav"},[n("docpage-navbar",{staticClass:"Content__search"}),t._v(" "),n("LanguageSelect",{staticClass:"Content__language"})],1),t._v(" "),n("article-header"),t._v(" "),n("article",{staticClass:"Article"},[n("Content",{staticClass:"Markdown Markdown--invert-alt"})],1),t._v(" "),n("article-footer",{attrs:{items:t.sidebarItems}})],1)])}),[],!1,null,null,null));e.default=L.exports}}]);