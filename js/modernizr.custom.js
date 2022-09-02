window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function i(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var a in e){var i=t[e[a]];if(i!==n)return r===!1?e[a]:o(i,"function")?i.bind(r||t):i}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+w.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?i(a,t):(a=(e+" "+S.join(r+" ")+r).split(" "),c(a,t,n))}var l,u,f,d="2.7.1",p={},m=!0,h=t.documentElement,y="modernizr",v=t.createElement(y),g=v.style,b=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),E="Webkit Moz O ms",w=E.split(" "),S=E.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},T={},x=[],j=x.slice,N=function(e,n,r,o){var a,i,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:y+(r+1),l.appendChild(c);return a=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),l.id=y,(u?l:f).innerHTML+=a,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),i=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),h.style.overflow=s),!!i},P=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return N("@media "+t+" { #"+y+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},k={}.hasOwnProperty;f=o(k,"undefined")||o(k.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return k.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(j.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(j.call(arguments)))};return r}),T.flexbox=function(){return s("flexWrap")},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",b.join("touch-enabled),("),y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},T.backgroundsize=function(){return s("backgroundSize")},T.cssanimations=function(){return s("animationName")},T.csscolumns=function(){return s("columnCount")},T.csstransforms=function(){return!!s("transform")},T.csstransitions=function(){return s("transition")},T.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect};for(var M in T)f(T,M)&&(u=M.toLowerCase(),p[u]=T[M](),x.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),v=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},y++,e[h]=y,v[y]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function s(e){e||(e=t);var r=o(e);return g.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var l,u,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",y=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var g={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=g,s(t)}(this,t),p._version=d,p._prefixes=b,p._domPrefixes=S,p._cssomPrefixes=w,p.mq=P,p.testProp=function(e){return i([e])},p.testAllProps=s,p.testStyles=N,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+x.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();g=1,e?e.t?m(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function s(e,n,r,o,a,s,l){function u(t){if(!p&&i(f.readyState)&&(b.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(f)},50);for(var r in j[n])j[n].hasOwnProperty(r)&&j[n][r].onload()}}var l=l||d.errorTimeout,f=t.createElement(e),p=0,y=0,b={t:r,s:n,e:a,a:s,x:l};1===j[n]&&(y=1,j[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,b),"img"!=e&&(y||2===j[n]?(w.insertBefore(f,E?null:h),m(u,l)):j[n].push(f))}function l(e,t,n,r,a){return g=0,t=t||"j",o(e)?s("c"==t?C:S,e,t,this.i++,n,r,a):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,w=E?p:h.parentNode,p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,S=b?"object":p?"script":"img",C=p?"script":S,T=Array.isArray||function(e){return"[object Array]"==y.call(e)},x=[],j={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=x.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;i>n;n++)r=e[n].split("="),(t=N[r.shift()])&&(a=t(a,r));for(n=0;o>n;n++)a=x[n](a);return a}function i(e,o,a,i,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,a,i,c):(j[s.url]?s.noexec=!0:j[s.url]=1,a.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&a.load(function(){u(),o&&o(s.origUrl,c,i),l&&l(s.origUrl,c,i),j[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),i(e,f,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),i(e[s],f,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,f=e.callback||a,d=f,p=e.complete||a;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,f=this.yepnope.loader;if(o(e))i(e,0,f,0);else if(T(e))for(s=0;s<e.length;s++)l=e[s],o(l)?i(l,0,f,0):T(l)?d(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){N[e]=t},d.addFilter=function(e){x.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=l?c:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,i,s){var l,o=t.createElement("link"),n=s?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);i||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};