(self.AMP=self.AMP||[]).push({n:"amp-youtube",v:"1510956201635",f:(function(AMP){var h;(function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a})(this);function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,d);f&&Object.defineProperty(a,d,f)}else a[d]=b[d]}function m(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function n(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ca(a){var b=Object.create(null);if(!a)return b;for(var c;c=ba.exec(a);){var d=n(c[1],c[1]).trim();c=c[2]?n(c[2],c[2]).trim():"";b[d]=c}return b};var r="";function da(a){var b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var d=ca(c.location.originalHash||c.location.hash),f=ca(c.location.search);r||(r=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011510956201635");c=b.AMP_MODE={localDev:!1,development:!("1"!=d.development&&!c.AMP_DEV_MODE),examiner:"2"==d.development,filter:d.filter,minified:!0,lite:void 0!=f.amp_lite,test:!1,log:d.log,version:"1510956201635",rtvVersion:r}}return c};var ea=Object.prototype.toString;function t(a){return"[object Object]"===ea.call(a)};Date.now();self.log=self.log||{user:null,dev:null,userForEmbed:null};var u=self.log;function fa(){if(!u.user)throw Error("failed to call initLogConstructor");return u.user}function v(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");};function ga(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function ha(a){return a||{}};function ia(a,b,c){var d=w(a),f=ja(d);a=f;var g=ka(a),e=g[b];e||(e=g[b]={obj:null,promise:null,resolve:null,context:null,ctor:null});e.ctor||e.obj||(e.ctor=c,e.context=d,e.resolve&&x(a,b))}function y(a,b){a=a.__AMP_TOP||a;return x(a,b)}function z(a,b){a=w(a);a=ja(a);return x(a,b)}function w(a){return a.nodeType?y((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ja(a){a=w(a);return a.isSingleDoc()?a.win:a}
function x(a,b){var c=ka(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ka(a){var b=a.services;b||(b=a.services={});return b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function A(a){a.parentElement&&a.parentElement.removeChild(a)}var B;function la(a){if(null==B)try{a.ownerDocument.querySelector(":scope"),B=!0}catch(d){B=!1}if(B)return a.querySelector(":scope video, iframe");var b="i-amphtml-scoped";a.classList.add(b);var c=a.querySelector("."+b+" video, iframe");a.classList.remove(b);return c}
function ma(a){var b,c,d=b||function(a){return a},f=a.dataset;a={};var g=c?c:/^param(.+)/,e;for(e in f){var k=e.match(g);if(k){var l=k[1][0].toLowerCase()+k[1].substr(1);a[d(l)]=f[e]}}return a}function na(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};function C(a){return z(a,"viewport")};var D,E,oa=["javascript:","data:","vbscript:"];
function pa(a){if(!a)return!0;if("string"==typeof a){D||(D=self.document.createElement("a"),E=self.UrlCache||(self.UrlCache=Object.create(null)));var b=E[a];if(b)a=b;else{b=D;b.href=a;b.protocol||(b.href=b.href);var c={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==c.pathname[0]&&(c.pathname="/"+c.pathname);if("http:"==c.protocol&&80==c.port||"https:"==c.protocol&&443==c.port)c.port="",c.host=
c.hostname;c.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=c.protocol&&c.host?c.protocol+"//"+c.host:c.href;a=E[a]=c}}return!oa.includes(a.protocol)};function qa(a){var b;try{return JSON.parse(a)}catch(c){b&&b(c)}};var F,ra="Webkit webkit Moz moz ms O o".split(" ");function sa(a,b){var c=void 0;if(m(b,"--"))return b;F||(F=ga());var d=F[b];if(!d||c){d=b;if(void 0===a[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<ra.length;g++){var e=ra[g]+f;if(void 0!==a[e]){f=e;break a}}f=""}var k=f;void 0!==a[k]&&(d=k)}c||(F[b]=d)}return d}function ta(a,b,c){var d;(b=sa(a.style,b))&&(a.style[b]=d?c+d:c)}function G(a,b){for(var c in b)ta(a,c,b[c])}
function ua(a,b){"number"==typeof a&&(a+="px");if(void 0===b)return"translate("+a+")";"number"==typeof b&&(b+="px");return"translate("+a+", "+b+")"};var H;function I(a,b,c){function d(a){try{return e(a)}catch(q){throw self.reportError(q),q;}}var f=void 0,g=a,e=c,k=va(),l=!1;f&&(l=f.capture);g.addEventListener(b,d,k?f:l);return function(){g&&g.removeEventListener(b,d,k?f:l);d=g=e=null}}function va(){if(void 0!==H)return H;H=!1;try{var a={get capture(){H=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return H};function J(a,b,c){return I(a,b,c)}function wa(a,b){var c=b,d=I(a,"load",function(a){try{c(a)}finally{c=null,d()}});return d}function xa(a){var b,c,d=new Promise(function(b){c=wa(a,b)});d.then(c,c);b&&b(c);return d};function ya(){this.w=null}h=ya.prototype;h.add=function(a){var b=this;this.w||(this.w=[]);this.w.push(a);return function(){b.remove(a)}};h.remove=function(a){this.w&&(a=this.w.indexOf(a),-1<a&&this.w.splice(a,1))};h.removeAll=function(){this.w&&(this.w.length=0)};h.fire=function(a){if(this.w)for(var b=this.w,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.w?this.w.length:0};function K(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function za(a,b){return a&&b?a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height:!1};function Aa(a,b){function c(){d=0;var e=500-(a.Date.now()-f);if(0<e)d=a.setTimeout(c,e);else{var k=g;g=null;b.apply(null,k)}}var d=0,f=0,g=null;return function(b){for(var e=[],l=0;l<arguments.length;++l)e[l-0]=arguments[l];f=a.Date.now();g=e;d||(d=a.setTimeout(c,500))}};function Ba(a,b,c,d,f){var g=c,e=b;b>c&&(g=b,e=c);a<e?a=e:a>g&&(a=g);return(a-b)*(f-d)/(c-b)+d};function L(a,b,c,d){var f=new Ca(0,0,a,b,c,d,1,1);return f.solveYValueFromXValue.bind(f)}function Ca(a,b,c,d,f,g,e,k){this.x0=a;this.y0=b;this.x1=c;this.y1=d;this.x2=f;this.y2=g;this.x3=e;this.y3=k}h=Ca.prototype;h.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
h.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,f=1,g=0,e=0;8>e;e++){var g=this.getPointX(c),k=(this.getPointX(c+b)-g)/b;if(Math.abs(g-a)<b)return c;if(Math.abs(k)<b)break;else g<a?d=c:f=c,c-=(g-a)/k}for(e=0;Math.abs(g-a)>b&&8>e;e++)g<a?(d=c,c=(c+f)/2):(f=c,c=(c+d)/2),g=this.getPointX(c);return c};
h.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};h.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};h.lerp=function(a,b,c){return a+c*(b-a)};
var Da=L(.25,.1,.25,1),Ea=L(.42,0,1,1),Fa=L(0,0,.58,1),Ga=L(.42,0,.58,1),Ha={linear:function(a){return a},ease:Da,"ease-in":Ea,"ease-out":Fa,"ease-in-out":Ga};function Ia(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return L(b[0],b[1],b[2],b[3])}return null}return Ha[a]}return a};function Ja(){}function M(a,b){this.L=a;this.h=b||y(self,"vsync");this.pa=null;this.s=[]}function Ka(a,b){var c;return(new M(a)).setCurve(c).add(0,b,1).start(200)}M.prototype.setCurve=function(a){a&&(this.pa=Ia(a));return this};M.prototype.add=function(a,b,c,d){this.s.push({delay:a,func:b,duration:c,curve:Ia(d)});return this};
M.prototype.start=function(a){var b=new N(this.h,this.L,this.s,this.pa,a);a=b;a.wa=Date.now();a.W=!0;a.h.canAnimate(a.L)?a.ya(a.xa):(v().warn("Animation","cannot animate"),O(a,!1,0));return b};
function N(a,b,c,d,f){var g=this;this.h=a;this.L=b;this.s=[];for(b=0;b<c.length;b++){var e=c[b];this.s.push({delay:e.delay,func:e.func,duration:e.duration,curve:e.curve||d,started:!1,completed:!1})}this.Ca=f;this.Ja=this.Ia=this.wa=0;this.W=!1;this.xa={};this.ta=new Promise(function(a,b){g.Fa=a;g.Ea=b});this.ya=this.h.createAnimTask(this.L,{mutate:this.Ga.bind(this)})}N.prototype.then=function(a,b){return a||b?this.ta.then(a,b):this.ta};
N.prototype.thenAlways=function(a){a=a||Ja;return this.then(a,a)};N.prototype.halt=function(a){O(this,!1,a||0)};function O(a,b,c){if(a.W){a.W=!1;if(0!=c){1<a.s.length&&a.s.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.s.length;c++)a.s[c].func(1,!0);else for(var d=a.s.length-1;0<=d;d--)a.s[d].func(0,!1)}catch(f){v().error("Animation","completion failed: "+f,f),b=!1}}b?a.Fa():a.Ea()}}
N.prototype.Ga=function(){if(this.W){for(var a=Date.now(),b=Math.min((a-this.wa)/this.Ca,1),c=0;c<this.s.length;c++){var d=this.s[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.s.length;c++)if(d=this.s[c],d.started&&!d.completed)a:{var f,g;if(0<d.duration){if(f=g=Math.min((b-d.delay)/d.duration,1),d.curve&&1!=f)try{f=d.curve(g)}catch(e){v().error("Animation","step curve failed: "+e,e);O(this,!1,0);break a}}else f=g=1;1==g&&(d.completed=!0);try{d.func(f,d.completed)}catch(e){v().error("Animation",
"step mutate failed: "+e,e),O(this,!1,0)}}1==b?O(this,!0,0):this.h.canAnimate(this.L)?this.ya(this.xa):(v().warn("Animation","cancel animation"),O(this,!1,0))}};function La(a){var b;b=void 0===b?" ":b;return function(c,d){for(var f=[],g=0;g<a.length;g++){var e=(0,a[g])(c,d);"string"==typeof e&&f.push(e)}return f.join(b)}}function Ma(a,b){return function(c,d){for(var f in b)ta(a,f,b[f](c,d))}}function P(a,b){return function(c){return a+(b-a)*c}}function Na(a){return function(b){return a(b)+"px"}}
function Oa(a,b){return function(c){var d=a(c);"number"==typeof d&&(d+="px");if(!b)return"translate("+d+")";c=b(c);"number"==typeof c&&(c+="px");return"translate("+d+","+c+")"}}function Pa(){var a=P(.6,.6);return function(b){return"scale("+a(b)+")"}};var Qa={title:"",artist:"",album:"",artwork:[{src:""}]};function Ra(a,b,c,d){var f=a.navigator;"mediaSession"in f&&a.MediaMetadata&&(f.mediaSession.metadata=new a.MediaMetadata(Qa),Sa(b),f.mediaSession.metadata=new a.MediaMetadata(b),f.mediaSession.setActionHandler("play",c),f.mediaSession.setActionHandler("pause",d))}
function Ta(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=qa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function Sa(a){a&&a.artwork&&(Array.isArray(a.artwork),a.artwork.forEach(function(a){if(a){var b=t(a)?a.src:a;fa().assert(pa(b))}}))};function Q(){this.T=!1;this.qa=new ya}Q.prototype.onSessionEnd=function(a){this.qa.add(a)};Q.prototype.beginSession=function(){this.T=!0};Q.prototype.endSession=function(){this.T&&this.qa.fire();this.T=!1};Q.prototype.isSessionActive=function(){return this.T};function Ua(a,b,c,d){this.element=b;this.ra=d;this.fidelity=c;this.turn=0==c?Math.floor(4*Math.random()):0;this.V=null;this.c=C(a)}
Ua.prototype.update=function(a){var b=this;if(!a){if(0!=this.turn){this.turn--;return}0==this.fidelity&&(this.turn=4)}var c=this.c.getSize(),d=K(0,0,c.width,c.height);this.c.getClientRectAsync(this.element).then(function(a){var c={positionRect:a,viewportRect:d,relativePos:""},e=b.V;if(!(e&&za(e.positionRect,c.positionRect)&&za(e.viewportRect,c.viewportRect))){var e=c.positionRect,f=c.viewportRect;c.relativePos=e.top<f.top?"top":e.bottom>f.bottom?"bottom":"inside";f=c.viewportRect;e.top<=f.bottom&&
f.top<=e.bottom&&e.left<=f.right&&f.left<=e.right?(b.V=c,b.ra(c)):b.V&&(b.V=null,c.positionRect=null,b.ra(c))}})};function R(a){var b=this;this.i=a;this.Aa=a.win;this.G=[];this.h=y(this.Aa,"vsync");this.c=C(a);this.X=[];this.aa=this.ha=this.ea=!1;this.Ba=Aa(this.Aa,function(){b.ea=!1})}R.prototype.observe=function(a,b,c){var d=new Ua(this.i,a,b,c);this.G.push(d);this.aa||Va(this);d.update()};R.prototype.unobserve=function(a){for(var b=0;b<this.G.length;b++)if(this.G[b].element==a){this.G.splice(b,1);if(0==this.G.length)for(this.aa=!1;this.X.length;)this.X.pop()();return}v().error("POSITION_OBSERVER","cannot unobserve unobserved element")};
function Va(a){a.aa=!0;a.X.push(a.c.onScroll(function(){a.Ba();a.ea=!0;a.ha||Wa(a)}));a.X.push(a.c.onResize(function(){a.updateAllEntries(!0)}))}R.prototype.updateAllEntries=function(a){for(var b=0;b<this.G.length;b++)this.G[b].update(a)};function Wa(a){a.updateAllEntries();a.ha=!0;a.ea?a.h.measure(function(){Wa(a)}):a.ha=!1}function Xa(a){ia(a,"position-observer",function(){return new R(a)})};function Ya(a){var b=this;this.ampdoc=a;this.c=C(this.ampdoc);this.l=null;this.ua=this.va=!1;this.S=this.la=null;this.za=y(a.win,"timer");this.oa=function(){for(var a=0;a<b.l.length;a++){var d=b.l[a];"paused"!==d.getPlayingState()&&S(d,"video-seconds-played")}b.za.delay(b.oa,1E3)};this.za.delay(this.oa,1E3)}h=Ya.prototype;
h.register=function(a){var b=a;b.registerAction("play",b.play.bind(b,!1),1);b.registerAction("pause",b.pause.bind(b),1);b.registerAction("mute",b.mute.bind(b),1);b.registerAction("unmute",b.unmute.bind(b),1);b.registerAction("fullscreen",b.fullscreenEnter.bind(b),1);a.supportsPlatform()&&(this.l=this.l||[],b=new Za(this,a),$a(this,b),ab(this,b),bb(this,b),this.l.push(b),a.element.dispatchCustomEvent("registered"),a.element.classList.add("i-amphtml-video-interface"))};
function $a(a,b){J(b.video.element,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});J(b.video.element,"reloaded",function(){b.videoLoaded()});if(!a.va){var c=function(){for(var b=0;b<a.l.length;b++)a.l[b].updateVisibility()};a.c.onScroll(c);a.c.onChanged(c);a.va=!0}}
function bb(a,b){if(b.hasFullscreenOnLandscape){var c=a.ampdoc.win,d=c.screen,f=function(){var a,f=a=d&&"orientation"in d?m(d.orientation.type,"landscape"):-90==c.orientation||90==c.orientation;b.O&&(!f&&b.N?b.N&&(b.video.fullscreenExit(),b.N=!1):f&&"playing_manual"==b.getPlayingState()&&b.C&&z(b.i,"viewer").isVisible()&&!b.video.isFullscreen()&&!b.N&&(b.video.fullscreenEnter(),b.N=b.video.isFullscreen()))};if(d&&"orientation"in d){var g=d.orientation;J(g,"change",f.bind(a))}J(c,"orientationchange",
f.bind(a))}}function ab(a,b){if(b.hasDocking&&(a.la||(Xa(a.ampdoc),a.la=z(a.ampdoc,"position-observer")),a.la.observe(b.video.element,1,function(a){b.onDockableVideoPositionChanged(a)}),!a.ua)){var c=function(){for(var b=0;b<a.l.length;b++)a.l[b].refreshDockedVideo()};a.c.onResize(c);a.ua=!0}}function cb(a,b){for(var c=0;c<a.l.length;c++)if(a.l[c].video===b)return a.l[c];v().error("video-manager","video is not registered to this video manager");return null}
h.getVideoAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.l.length;b++){var c=this.l[b];if(c.video.element===a){b=c;break a}}v().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};h.getPlayingState=function(a){return cb(this,a).getPlayingState()};h.userInteractedWithAutoPlay=function(a){return cb(this,a).userInteractedWithAutoPlay()};h.canDock=function(a){return!this.S||this.S==a};
h.registerDocked=function(a){this.S=a};h.unregisterDocked=function(){this.S=null;for(var a=0;a<this.l.length;a++)this.l[a].R=!1};
function Za(a,b){var c=this;this.ga=a;this.i=a.ampdoc;this.c=C(this.i);this.video=b;this.Ha=null;this.N=this.C=this.H=this.O=!1;this.h=y(this.i.win,"vsync");this.Z=new Q;this.Z.onSessionEnd(function(){return S(c,"video-session")});this.K=new Q;this.K.onSessionEnd(function(){return S(c,"video-session-visible")});this.$=db.bind(null,this.i.win,da(this.i.win).lite);b=b.element;this.ia=this.sa=this.Y=!1;this.A=this.j=null;this.F=!1;this.o=this.b=null;this.u=this.m="inline";this.M=0;this.ba=null;this.fa=
this.U=this.B=this.I=this.ca=this.R=!1;this.a={mouse:{x:0,y:0},displacement:{x:0,y:0},initial:{x:0,y:0},position:{x:0,y:0},previous:{x:0,y:0},velocity:{x:0,y:0}};this.da=[];this.hasDocking=b.hasAttribute("dock");this.hasAutoplay=b.hasAttribute("autoplay");var d=b.getAttribute("fullscreen-on-landscape");this.hasFullscreenOnLandscape=""==d||"always"==d;this.D=Qa;xa(b).then(function(){return c.videoLoaded()});J(b,"pause",function(){c.video.getCurrentTime()===c.video.getDuration()?S(c,"video-ended"):
S(c,"video-pause");c.H=!1;c.ia?c.ia=!1:c.Z.endSession()});J(b,"playing",function(){return eb(c)});J(b,"muted",function(){return c.F=!0});J(b,"unmuted",function(){return c.F=!1});this.updateVisibility();this.hasAutoplay&&fb(this);this.hasDocking&&gb(this)}function eb(a){a.H=!0;a.video.preimplementsMediaSessionAPI()||Ra(a.i.win,a.D,function(){a.video.play(!1)},function(){a.video.pause()});a.Z.beginSession();a.C&&a.K.beginSession();S(a,"video-play")}h=Za.prototype;
h.videoLoaded=function(){var a=this;this.O=!0;this.j=la(this.video.element);this.h.measure(function(){a.b=a.video.element.getBoundingClientRect()});hb(this);this.updateVisibility();this.C&&ib(this)};
function hb(a){if(!a.video.preimplementsMediaSessionAPI()){a.video.getMetadata()&&(a.D=ga(a.video.getMetadata()));var b=a.i.win.document;if(!a.D.artwork||0==a.D.artwork.length){var c;(c=Ta(b))||(c=(c=b.querySelector('meta[property="og:image"]'))?c.getAttribute("content"):void 0);c||(c=(c=b.querySelector('link[rel="shortcut icon"]')||b.querySelector('link[rel="icon"]'))?c.getAttribute("href"):void 0);var d=c;d&&(a.D.artwork=[{src:d}])}!a.D.title&&(b=a.video.element.getAttribute("title")||a.video.element.getAttribute("aria-label")||
a.j.getAttribute("title")||a.j.getAttribute("aria-label")||b.title)&&(a.D.title=b)}}function ib(a){z(a.i,"viewer").isVisible()&&a.$().then(function(b){var c=a.hasAutoplay&&!a.Y;c&&b?a.C?(a.K.beginSession(),a.video.play(!0),a.sa=!0):(a.H&&a.K.endSession(),a.video.pause(),a.ia=!0):a.C?a.K.beginSession():a.H&&a.K.endSession()})}
function fb(a){a.video.isInteractive()&&a.video.hideControls();a.$().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),a.video.isInteractive()&&jb(a))})}
function jb(a){function b(b){a.h.mutate(function(){g.classList.toggle("amp-video-eq-play",b)})}function c(){this.Y=!0;this.video.showControls();this.video.unmute();k.forEach(function(a){a()});A(g);A(e)}function d(){G(e,{display:"none"})}function f(){G(e,{display:"block"})}a.video.hideControls();var g=kb(a),e=lb(a);a.h.mutate(function(){a.video.element.appendChild(g);a.video.element.appendChild(e)});var k=[];k.push(J(e,"click",c.bind(a)));k.push(J(g,"click",c.bind(a)));k.push(J(a.video.element,"pause",
b.bind(a,!1)));k.push(J(a.video.element,"playing",b.bind(a,!0)));k.push(J(a.video.element,"ad_start",d.bind(a)));k.push(J(a.video.element,"ad_end",f.bind(a)))}function gb(a){a.h.run({measure:function(){a.b=a.video.element.getBoundingClientRect()},mutate:function(){a.video.element.classList.add("i-amphtml-dockable-video")}})}function T(a,b,c,d){return(d=void 0===d?!1:d)?Ba(a.M,a.b.height,0,b,c):Ba(a.M,0,a.b.height,b,c)}
h.refreshDockedVideo=function(){var a=this;this.h.run({measure:function(){a.b=a.video.element.getBoundingClientRect();mb(a)},mutate:function(){a.u="inline";if(a.ba)a.onDockableVideoPositionChanged(a.ba);nb(a)}})};function mb(a){a.h.measure(function(){a.o=a.j.getBoundingClientRect();a.a.initial.x=a.o.left;a.a.initial.y=a.o.top;a.a.position.x=a.o.left;a.a.position.y=a.o.top;a.a.previous.x=a.o.left;a.a.previous.y=a.o.top;a.a.displacement.x=0;a.a.displacement.y=0})}
function nb(a){a.A&&a.j&&a.h.mutate(function(){function b(a){var b;b=c;b=(a=sa(b.style,a))?b.style[a]:void 0;return b}var c=a.j;G(a.A,{top:b("top"),left:b("left"),bottom:b("bottom"),right:b("right"),transform:b("transform"),"transform-origin":b("transform-origin"),borderRadius:b("borderRadius"),width:b("width"),height:b("height"),position:"fixed","z-index":"17",background:"transparent"})})}
h.onDockableVideoPositionChanged=function(a){var b=this;this.h.run({measure:function(){b.b=b.video.element.getBoundingClientRect();var c="bottom"==a.relativePos,d="top"==a.relativePos,f="inside"==a.relativePos;b.ba=a;a.positionRect||(a.positionRect=c?K(b.b.left,b.c.getHeight(),b.b.width,b.b.height):K(b.b.left,-b.b.height,b.b.width,b.b.height));var g=a.viewportRect.top,e=a.viewportRect.bottom,k=a.positionRect.top,l=a.positionRect.bottom;b.M=k<=g?l-g:l>=e?e-k:l-k;b.R=b.R||Math.ceil(b.M)>=b.b.height;
g=b.video.element.offsetTop;e=b.c.getScrollHeight()-g-b.video.element.offsetHeight;c&&g<b.c.getHeight()||d&&e<b.c.getHeight()?b.m="inline":b.video.element.offsetHeight>=b.c.getHeight()?b.m="inline":(g=b.i.win.document,"inline"!=b.m||f)?f&&(b.m="inline"):d?b.m=na(g)?"top_left":"top_right":c&&(b.m=na(g)?"bottom_left":"bottom_right")},mutate:function(){if(b.O&&b.b&&b.j&&("playing_manual"==b.getPlayingState()||b.j.classList.contains("i-amphtml-dockable-video-minimizing"))){var a="inline"!=b.m&&b.R,d=
"playing_manual"==b.getPlayingState(),f="paused"==b.getPlayingState(),g=b.j.classList.contains("i-amphtml-dockable-video-minimizing");if(a&&(d||f&&g)){if("inline"==b.u&&b.ga.canDock(b)&&(b.video.hideControls(),b.j.classList.add("i-amphtml-dockable-video-minimizing"),G(b.j,{height:b.b.height+"px",width:b.b.width+"px",maxWidth:b.b.width+"px"}),G(b.video.element,{"background-color":"#222"}),b.u="docking",b.ga.registerDocked(b)),"inline"!=b.u){var e=b.c.getWidth(),k=b.c.getHeight(),l=e-.6*b.b.width-20,
p=k-.6*b.b.height-20,q=e=0;switch(b.m){case "top_left":e=q=20;break;case "top_right":q=l;e=20;break;case "bottom_left":e=p;q=20;break;case "bottom_right":e=p,q=l}k=Math.max(0,Math.min(k-b.b.height,b.b.top));q=T(b,b.b.left,q,!0)+"px";e=T(b,k,e,!0)+"px";e=ua(q,e);k="scale("+T(b,.6,1)+")";G(b.j,{transform:e+" "+k,transformOrigin:"top left",bottom:"auto",top:"0px",right:"auto",left:"0px"});.6==T(b,.6,1)?b.u="docked":b.u="docking"}}else g&&ob(b);"docked"==b.u?pb(b):qb(b)}}})};
function U(a,b,c,d){a.da.push(I(b,c,d))}
function pb(a){a.ca||a.h.run({measure:function(){mb(a)},mutate:function(){a.A=a.i.win.document.createElement("i-amphtml-dragging-mask");nb(a);a.video.element.appendChild(a.A);U(a,a.A,"mousedown",function(b){b.preventDefault();a.I=!0;a.B=!1;V(a,b,!0)});U(a,a.i.win.document,"mouseup",function(){a.I=!1;a.B=!1;W(a)});U(a,a.i.win.document,"mousemove",function(b){a.B=a.I;a.B&&(b.preventDefault(),a.u="draggable",W(a));V(a,b)});U(a,a.A,"touchstart",function(b){b.preventDefault();a.I=!0;a.B=!1;V(a,b,!0)});
U(a,a.i.win.document,"touchend",function(){a.I=!1;a.B=!1;W(a)});U(a,a.i.win.document,"touchmove",function(b){a.B=a.I;a.B&&(b.preventDefault(),a.u="draggable",W(a));V(a,b)});a.ca=!0}})}
function W(a){a.h.run({measure:function(){a.o=a.j.getBoundingClientRect()},mutate:function(){if(a.O&&a.j&&"inline"!=a.m&&0==a.M&&a.j.classList.contains("i-amphtml-dockable-video-minimizing")&&"draggable"==a.u){var b=a.a;if(a.B){b.previous.x=b.position.x;b.previous.y=b.position.y;b.position.x=b.mouse.x-b.displacement.x;b.position.y=b.mouse.y-b.displacement.y;b.velocity.x=b.position.x-b.previous.x;b.velocity.y=b.position.y-b.previous.y;var c=a.o.width,d=a.o.height,f=b.position.x+c/2,g=b.position.y+
d/2;if(f>a.c.getWidth()||0>f||g>a.c.getHeight()||0>g)a.fa=!0}else if(b.position.x+=b.velocity.x,b.position.y+=b.velocity.y,b.velocity.x*=.55,b.velocity.y*=.55,a.fa){a.video.pause();ob(a);a.fa=!1;return}if(!a.B&&!a.U&&3>=Math.abs(b.velocity.x)&&3>=Math.abs(b.velocity.y)){var e=a.c.getWidth()-a.o.width-20,k=a.c.getHeight()-a.o.height-20;rb(a);var l=b.position.x,p=b.position.y;switch(a.m){case "bottom_right":l=e;p=k;break;case "top_right":l=e;p=20;break;case "bottom_left":l=20;p=k;break;case "top_left":p=
l=20}if(b.position.x!=l||b.position.y!=p)a.U=!0,sb(a,a.A,l,p),sb(a,a.j,l,p),a.u="docked"}a.U||(tb(a,a.A),tb(a,a.j));a.B||a.h.mutate(function(){W(a)})}}})}function qb(a){a.h.mutate(function(){for(var b=a.da.pop();b;)b.call(),b=a.da.pop();a.ca=!1;a.A&&(A(a.A),a.A=null)})}
function V(a,b,c){c=void 0===c?!1:c;b.x?(a.a.mouse.x=b.x,a.a.mouse.y=b.y):b.touches&&(a.a.mouse.x=b.touches[0].clientX,a.a.mouse.y=b.touches[0].clientY);c&&(a.a.displacement.x=Math.abs(a.a.position.x-a.a.mouse.x),a.a.displacement.y=Math.abs(a.a.position.y-a.a.mouse.y))}function rb(a){var b=a.c.getWidth()/2,c=a.c.getHeight()/2,d=a.o.width,f=a.o.height,g=a.a.position.x+d/2,e=a.a.position.y+f/2;g>=b?e>=c?a.m="bottom_right":e<c&&(a.m="top_right"):g<b&&(e>=c?a.m="bottom_left":e<c&&(a.m="top_left"))}
function ob(a){qb(a);a.video.showControls();a.j.classList.remove("i-amphtml-dockable-video-minimizing");a.j.setAttribute("style","");G(a.video.element,{"background-color":"transparent"});a.u="inline";a.ga.unregisterDocked()}
function kb(a){var b=a.i.win.document,c=b.createElement("i-amphtml-video-eq");c.classList.add("amp-video-eq");for(var d=1;4>=d;d++){var f=b.createElement("div");f.classList.add("amp-video-eq-col");for(var g=1;2>=g;g++){var e=b.createElement("div");e.classList.add("amp-video-eq-"+d+"-"+g);f.appendChild(e)}c.appendChild(f)}var k=y(a.i.win,"platform");k.isIos()&&c.setAttribute("unpausable","");return c}
function sb(a,b,c,d){Ka(b,Ma(b,{transform:La([Oa(Na(P(a.a.position.x,c)),Na(P(a.a.position.y,d))),Pa()])})).thenAlways(function(){a.a.position.x=c;a.a.position.y=d;a.U=!1})}function tb(a,b){a=ua(a.a.position.x+"px",a.a.position.y+"px");G(b,{transform:a+" scale(0.6)","transform-origin":"top left",bottom:"auto",top:"0px",right:"auto",left:"0px"})}function lb(a){a=a.i.win.document.createElement("i-amphtml-video-mask");a.classList.add("i-amphtml-fill-content");return a}
h.updateVisibility=function(a){function b(){d.C!=f&&d.O&&ib(d)}function c(){if(1==a)d.C=!0;else{var b=d.video.element.getIntersectionChangeEntry(),c=b.intersectionRatio,f="number"===typeof c&&isFinite(c)?100*b.intersectionRatio:0;d.C=75<=f}}var d=this,f=this.C;this.h.run({measure:c,mutate:b})};h.getPlayingState=function(){return this.H?this.H&&this.sa&&!this.Y?"playing_auto":"playing_manual":"paused"};h.userInteractedWithAutoPlay=function(){return this.Y};
h.getAnalyticsDetails=function(){var a=this,b=this.video;return this.$().then(function(c){var d=a.video.element.getLayoutBox(),f=d.width,d=d.height,g=a.hasAutoplay&&c,e=b.getPlayedRanges(),k=e.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:g,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.F,playedTotal:k,playedRangesJson:JSON.stringify(e),state:a.getPlayingState(),width:f}})};var X=null;
function db(a,b){if(X)return X;if(b)return X=Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;c.setAttribute("height","0");c.setAttribute("width","0");G(c,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"});try{var d=c.play();d&&d.catch&&d.catch(function(){})}catch(f){}return X=Promise.resolve(!c.paused)}
function S(a,b){var c,d=a.video,f=c?Promise.resolve(c):a.getAnalyticsDetails();f.then(function(a){d.element.dispatchCustomEvent(b,a)})};function Y(a){a=AMP.BaseElement.call(this,a)||this;a.J=-1;a.P=null;a.F=!1;a.g=null;a.na=null;a.ja=null;a.ka=null;a.ma=null;return a}aa(Y,AMP.BaseElement);h=Y.prototype;h.preconnectCallback=function(a){this.preconnect.url(ub(this));this.preconnect.url("https://s.ytimg.com",a);this.preconnect.url("https://i.ytimg.com",a)};h.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a};h.renderOutsideViewport=function(){return.75};
h.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};h.buildCallback=function(){var a=this;this.P=vb(this);this.ja=new Promise(function(b){a.ka=b});this.getPlaceholder()||wb(this);ia(this.element,"video-manager",Ya);z(this.element,"video-manager").register(this)};
function ub(a){if(a.na)return a.na;var b="https://www.youtube.com/embed/"+encodeURIComponent(a.P||"")+"?enablejsapi=1",c=ma(a.element);"autoplay"in c&&(delete c.autoplay,a.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay"));"playsinline"in c||(c.playsinline="1");var d=a.element.hasAttribute("autoplay");d&&("iv_load_policy"in c||(c.iv_load_policy="3"),c.playsinline="1");var f=[],g;for(g in c){var e=c[g];if(null!=e)if(Array.isArray(e))for(var k=0;k<e.length;k++){var l=
e[k];f.push(encodeURIComponent(g)+"="+encodeURIComponent(l))}else f.push(encodeURIComponent(g)+"="+encodeURIComponent(e))}if(c=f.join("&"))b=b.split("#",2),g=b[0].split("?",2),c=g[0]+(g[1]?"?"+g[1]+"&"+c:"?"+c),b=c+=b[1]?"#"+b[1]:"";return a.na=b}
h.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe"),c=ub(this);b.setAttribute("frameborder","0");b.setAttribute("allowfullscreen","true");b.src=c;this.applyFillContent(b);this.g=b;this.ma=J(this.win,"message",this.Da.bind(this));this.element.appendChild(this.g);var d=this.loadPromise(this.g).then(function(){a.g&&a.g.contentWindow.postMessage(JSON.stringify(ha({event:"listening"})),"*");a.element.dispatchCustomEvent("load")});this.ka(d);return d};
h.unlayoutCallback=function(){var a=this;this.g&&(A(this.g),this.g=null);this.ma&&this.ma();this.J=2;this.ja=new Promise(function(b){a.ka=b});return!0};h.pauseCallback=function(){this.g&&this.g.contentWindow&&1==this.J&&this.pause()};h.mutatedAttributesCallback=function(a){void 0!==a["data-videoid"]&&(this.P=vb(this),this.g&&Z(this,"loadVideoById",[this.P]))};
function vb(a){return fa().assert(a.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-youtube> %s",a.element)}function Z(a,b,c){a.ja.then(function(){if(a.g&&a.g.contentWindow){var d=JSON.stringify(ha({event:"command",func:b,args:c||""}));a.g.contentWindow.postMessage(d,"*")}})}
h.Da=function(a){"https://www.youtube.com"==a.origin&&a.source==this.g.contentWindow&&a.data&&(t(a.data)||m(a.data,"{"))&&(a=t(a.data)?a.data:qa(a.data),void 0!==a&&("infoDelivery"==a.event&&a.info&&void 0!==a.info.playerState?(this.J=a.info.playerState,2==this.J?this.element.dispatchCustomEvent("pause"):0==this.J?(this.element.dispatchCustomEvent("pause"),this.element.dispatchCustomEvent("ended")):1==this.J&&this.element.dispatchCustomEvent("playing")):"infoDelivery"==a.event&&a.info&&void 0!==a.info.muted&&
this.F!=a.info.muted&&(this.F=a.info.muted,this.element.dispatchCustomEvent(this.F?"muted":"unmuted"))))};
function wb(a){var b=a.element.ownerDocument.createElement("img"),c=a.P||"";G(b,{"object-fit":"cover",visibility:"hidden"});b.src="https://i.ytimg.com/vi/"+encodeURIComponent(c)+"/sddefault.jpg#404_is_fine";b.setAttribute("placeholder","");b.setAttribute("referrerpolicy","origin");a.applyFillContent(b);a.element.appendChild(b);a.loadPromise(b).then(function(){if(120==b.naturalWidth&&90==b.naturalHeight)throw Error("sddefault.jpg is not found");}).catch(function(){b.src="https://i.ytimg.com/vi/"+encodeURIComponent(c)+
"/hqdefault.jpg";return a.loadPromise(b)}).then(function(){G(b,{visibility:""})})}h.supportsPlatform=function(){return!0};h.isInteractive=function(){return!0};h.play=function(){Z(this,"playVideo")};h.pause=function(){Z(this,"pauseVideo")};h.mute=function(){Z(this,"mute")};h.unmute=function(){Z(this,"unMute")};h.showControls=function(){};h.hideControls=function(){};
h.fullscreenEnter=function(){if(this.g){var a=this.g,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitRequestFullScreen||a.webkitEnterFullscreen||a.webkitEnterFullScreen||a.msRequestFullscreen||a.msRequestFullScreen||a.mozRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
h.fullscreenExit=function(){if(this.g){var a=this.g,b=a.cancelFullScreen||a.exitFullscreen||a.exitFullScreen||a.webkitExitFullscreen||a.webkitExitFullScreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a.ownerDocument&&(b=a.ownerDocument.cancelFullScreen||a.ownerDocument.exitFullscreen||a.ownerDocument.exitFullScreen||a.ownerDocument.webkitExitFullscreen||a.ownerDocument.webkitExitFullScreen||a.ownerDocument.webkitCancelFullScreen||a.ownerDocument.mozCancelFullScreen||
a.ownerDocument.msExitFullscreen),b&&b.call(a.ownerDocument))}};h.isFullscreen=function(){var a;this.g?(a=this.g,a=a.webkitDisplayingFullscreen?!0:a.ownerDocument&&(a.ownerDocument.fullscreenElement||a.ownerDocument.webkitFullscreenElement||a.ownerDocument.mozFullScreenElement||a.webkitCurrentFullScreenElement)==a?!0:!1):a=!1;return a};h.getMetadata=function(){};h.preimplementsMediaSessionAPI=function(){return!0};h.getCurrentTime=function(){return 0};h.getDuration=function(){return 1};
h.getPlayedRanges=function(){return[]};(function(a){a.registerElement("amp-youtube",Y)})(self.AMP);
})});
//# sourceMappingURL=amp-youtube-0.1.js.map
