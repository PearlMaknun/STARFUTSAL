(self.AMP=self.AMP||[]).push({n:"amp-social-share",v:"1510956201635",f:(function(AMP){function k(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};function l(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function n(a){var b=Object.create(null);if(!a)return b;for(var c;c=m.exec(a);){var d=l(c[1],c[1]).trim();c=c[2]?l(c[2],c[2]).trim():"";b[d]=c}return b};Date.now();self.log=self.log||{user:null,dev:null,userForEmbed:null};var p=self.log;function r(){if(!p.user)throw Error("failed to call initLogConstructor");return p.user};function t(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&u(b,"url-replace")?v(b,"url-replace"):null)return b}return w(a,"url-replace")}function x(a,b){a=a.__AMP_TOP||a;return v(a,b)}function w(a,b){a=y(a);a=y(a);a=a.isSingleDoc()?a.win:a;return v(a,b)}function y(a){return a.nodeType?x((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function v(a,b){u(a,b);var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function u(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function z(a){var b,c,d=b||function(a){return a},e=a.dataset;a={};var f=c?c:/^param(.+)/,g;for(g in e){var h=g.match(f);if(h){var q=h[1][0].toLowerCase()+h[1].substr(1);a[d(q)]=e[g]}}return a};var A,B;function C(a,b){var c;if(!b)return a;var d=a.split("#",2),e=d[0].split("?",2),f=e[0]+(e[1]?c?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return f+=d[1]?"#"+d[1]:""}function D(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")};var E,F="Webkit webkit Moz moz ms O o".split(" ");function G(a){var b,c;c=a.style;E||(E=Object.create(null));var d=E.display;if(!d){d="display";if(void 0===c.display){var e;b:{for(e=0;e<F.length;e++){var f=F[e]+"Display";if(void 0!==c[f]){e=f;break b}}e=""}void 0!==c[e]&&(d=e)}E.display=d}c=d;c&&(a.style[c]=b?"none"+b:"none")};var H={twitter:{shareEndpoint:"https://twitter.com/intent/tweet",defaultParams:{text:"TITLE",url:"CANONICAL_URL"}},facebook:{shareEndpoint:"https://www.facebook.com/dialog/share",defaultParams:{href:"CANONICAL_URL"}},pinterest:{shareEndpoint:"https://www.pinterest.com/pin/create/button/",defaultParams:{url:"CANONICAL_URL",description:"TITLE"}},linkedin:{shareEndpoint:"https://www.linkedin.com/shareArticle",defaultParams:{url:"CANONICAL_URL",mini:"true"}},gplus:{shareEndpoint:"https://plus.google.com/share",
defaultParams:{url:"CANONICAL_URL"}},email:{bindings:["recipient"],shareEndpoint:"mailto:RECIPIENT",defaultParams:{subject:"TITLE",body:"CANONICAL_URL",recipient:""}},tumblr:{shareEndpoint:"https://www.tumblr.com/share/link",defaultParams:{name:"TITLE",url:"CANONICAL_URL"}},whatsapp:{shareEndpoint:"whatsapp://send",defaultParams:{text:"TITLE - CANONICAL_URL"}},sms:{shareEndpoint:"sms:",defaultParams:{body:"TITLE - CANONICAL_URL"}},system:{shareEndpoint:"navigator-share:",defaultParams:{text:"TITLE",
url:"CANONICAL_URL"}}};function I(a){a=AMP.BaseElement.call(this,a)||this;a.g=null;a.c={};a.b=null;a.i=null;a.a=null;a.h=null;return a}k(I,AMP.BaseElement);I.prototype.isLayoutSupported=function(){return!0};
I.prototype.buildCallback=function(){var a=this,b=r().assert(this.element.getAttribute("type"),"The type attribute is required. %s",this.element);r().assert(!/\s/.test(b),"Space characters are not allowed in type attribute value. %s",this.element);this.b=x(this.win,"platform");this.i=w(this.element,"viewer");if("system"===b){if(!J(this)){G(this.element);return}}else{var c=J(this)&&!!this.win.document.querySelectorAll("amp-social-share[type=system][data-mode=replace]").length;if(c){G(this.element);
return}}var d=H[b]||{};this.g=r().assert(this.element.getAttribute("data-share-endpoint")||d.shareEndpoint,"The data-share-endpoint attribute is required. %s",this.element);Object.assign(this.c,d.defaultParams,z(this.element));var e=C(this.g,D(this.c)),f=t(this.getAmpDoc()),g=d.bindings,h={};g&&g.forEach(function(b){var c=b.toUpperCase();h[c]=a.c[b]});f.expandAsync(e,h).then(function(b){a.a=b;var c;c=b;A||(A=self.document.createElement("a"),B=self.UrlCache||(self.UrlCache=Object.create(null)));var d=
B[c];if(d)c=d;else{d=A;d.href=c;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c=B[c]=e}c=c.protocol;var f="mailto:"===
c,g="whatsapp:"===c,h="sms:"===c,q=a.b.isIos()&&a.b.isSafari();a.h=q&&(f||g||h)?"_top":"_blank";h&&(a.a=a.a.replace("?","?&"))});this.element.setAttribute("role","button");this.element.hasAttribute("tabindex")||this.element.setAttribute("tabindex","0");this.element.addEventListener("click",function(){K(a)});this.element.addEventListener("keydown",this.j.bind(this));this.element.classList.add("amp-social-share-"+b)};I.prototype.j=function(a){var b=a.keyCode;if(32==b||13==b)a.preventDefault(),K(this)};
function K(a){r().assert(a.a&&a.h,"Clicked before href is set.");var b=a.a,c=a.h;if("navigator-share:"===a.g)navigator.share(n(b.substr(b.indexOf("?"))));else{var d="resizable,scrollbars,width=640,height=480";a=a.win;var e;try{e=a.open(b,c,d)}catch(g){var f;if(p.dev)f=p.dev;else throw Error("failed to call initLogConstructor");f.error("DOM","Failed to open url on target: ",c,g)}e||"_top"==c||a.open(b,"_top")}}
function J(a){var b=a.i.isWebviewEmbedded()&&a.b.isChrome();return"share"in navigator&&!b}(function(a){a.registerElement("amp-social-share",I,".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-49 141 512 512'%3E%3Cpath fill='%23fff' d='M432.9 256.9c-16.6 7.4-34.5 12.4-53.2 14.6 19.2-11.5 33.8-29.7 40.8-51.3-17.9 10.6-37.8 18.4-58.9 22.5-16.9-18-41-29.2-67.7-29.2-51.2 0-92.7 41.5-92.7 92.7 0 7.2.8 14.3 2.4 21.1-77-3.9-145.3-40.8-191.1-96.9C4.6 244 0 259.9 0 276.9 0 309 16.4 337.4 41.3 354c-15.2-.4-29.5-4.7-42-11.6v1.1c0 44.9 31.9 82.4 74.4 90.9-7.8 2.1-16 3.3-24.4 3.3-6 0-11.7-.6-17.5-1.7 11.8 36.8 46.1 63.6 86.6 64.4-31.8 24.9-71.7 39.7-115.2 39.7-7.5 0-14.8-.4-22.2-1.3 41.1 26.4 89.8 41.7 142.2 41.7 170.5 0 263.8-141.3 263.8-263.8 0-4.1-.1-8-.3-12 18.1-12.9 33.8-29.2 46.2-47.8z'/%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='419' height='421' viewBox='0 0 419 421' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Elogo%3C/title%3E%3Cdefs%3E%3Cpath d='M299.558 247.553c-5.111-2.558-30.242-14.925-34.928-16.633-4.685-1.706-8.092-2.557-11.5 2.559-3.408 5.117-13.204 16.634-16.186 20.046-2.98 3.41-5.963 3.84-11.074 1.279-5.112-2.559-21.582-7.956-41.106-25.375-15.195-13.556-25.455-30.296-28.436-35.414-2.982-5.118-.318-7.885 2.24-10.434 2.3-2.291 5.113-5.971 7.668-8.957 2.557-2.984 3.408-5.118 5.112-8.528 1.704-3.413.852-6.397-.426-8.956-1.278-2.558-11.5-27.723-15.76-37.96-4.15-9.968-8.363-8.618-11.501-8.776-2.978-.148-6.39-.18-9.796-.18-3.408 0-8.946 1.28-13.632 6.397-4.685 5.118-17.89 17.487-17.89 42.649 0 25.165 18.316 49.473 20.872 52.885 2.556 3.413 36.044 55.05 87.321 77.193 12.195 5.269 21.716 8.414 29.14 10.77 12.245 3.891 23.388 3.342 32.195 2.025 9.821-1.466 30.243-12.366 34.503-24.307 4.259-11.944 4.259-22.18 2.98-24.311-1.276-2.133-4.684-3.412-9.796-5.972m-93.266 127.364h-.069c-30.511-.012-60.436-8.21-86.542-23.705l-6.21-3.685-64.353 16.884 17.177-62.753-4.043-6.435c-17.02-27.075-26.01-58.368-25.997-90.501.038-93.761 76.315-170.043 170.104-170.043 45.416.015 88.107 17.727 120.212 49.872 32.102 32.143 49.77 74.87 49.753 120.308-.038 93.77-76.314 170.058-170.032 170.058M351.003 60.126C312.38 21.452 261.016.145 206.29.122 93.532.122 1.76 91.901 1.715 204.71c-.015 36.06 9.405 71.257 27.307 102.286L0 413.02l108.447-28.452c29.88 16.3 63.523 24.892 97.761 24.903h.084c112.747 0 204.527-91.787 204.573-204.597.02-54.67-21.239-106.074-59.862-144.747' id='b'/%3E%3Cfilter x='-50%25' y='-50%25' width='200%25' height='200%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeMorphology radius='1' operator='dilate' in='SourceAlpha' result='shadowSpreadOuter1'/%3E%3CfeOffset in='shadowSpreadOuter1' result='shadowOffsetOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0' in='shadowOffsetOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M117.472 352.386l6.209 3.685c26.106 15.494 56.031 23.693 86.542 23.704h.07c93.717 0 169.993-76.288 170.032-170.058.017-45.438-17.653-88.165-49.755-120.308-32.103-32.145-74.795-49.856-120.21-49.872-93.79 0-170.068 76.282-170.105 170.043-.013 32.133 8.976 63.427 25.997 90.501l4.043 6.435-17.177 62.753 64.354-16.883z' fill='%2325D366'/%3E%3Cg transform='translate(4 4.858)'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='%23FFF' xlink:href='%23b'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' viewBox='0 0 30 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:center;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}\n/*# sourceURL=/extensions/amp-social-share/0.1/amp-social-share.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-social-share-0.1.js.map

