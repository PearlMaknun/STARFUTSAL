if (self.CavalryLogger) { CavalryLogger.start_js(["8nkMK"]); }

__d("ChannelClientID",[],(function a(b,c,d,e,f,g){var h=(Math.random()*2147483648|0).toString(16),i={getID:function j(){return h}};f.exports=i}),null);
__d("PlatformDialog",["cx","DOMEventListener","DOMEvent","CSS"],(function a(b,c,d,e,f,g,h){__p&&__p();var i;j.getInstance=function(){"use strict";return i};function j(k,l,m){"use strict";__p&&__p();i=this;this.$PlatformDialog1=k;this.$PlatformDialog2=l;this.$PlatformDialog3=false;c("DOMEventListener").add(this.$PlatformDialog1,"submit",function(n){if(this.$PlatformDialog3){new(c("DOMEvent"))(n).kill();return}this.$PlatformDialog3=true;if(m)c("CSS").addClass(k,"_32qa")}.bind(this))}j.prototype.getForm=function(){"use strict";return this.$PlatformDialog1};j.prototype.getDisplay=function(){"use strict";return this.$PlatformDialog2};j.prototype.hasBeenSubmitted=function(){"use strict";return this.$PlatformDialog3};j.RESPONSE="platform/dialog/response";f.exports=j}),null);
__d("ArbiterFrame",[],(function a(b,c,d,e,f,g){__p&&__p();var h={inform:function i(j,k,l){__p&&__p();var m=parent.frames,n=m.length,o;k.crossFrame=true;for(var p=0;p<n;p++){o=m[p];try{if(!o||o==window)continue;if(o.require)o.require("Arbiter").inform(j,k,l);else if(o.ServerJSAsyncLoader)o.ServerJSAsyncLoader.wakeUp(j,k,l)}catch(q){}}}};f.exports=h}),null);
__d("NonBlockingIFrame",["Promise","DOM","TimeSlice"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i,j;function k(){__p&&__p();var n=arguments.length<=0||arguments[0]===undefined?h:arguments[0],o=arguments.length<=1||arguments[1]===undefined?document.body:arguments[1],p,q={className:"nonBlockingIframe",width:0,height:0,frameborder:0,scrolling:"no","aria-hidden":"true"};if(n!==h)q.src=n;p=c("DOM").create("iframe",q);p.style.left="-1000px";p.style.position="absolute";c("DOM").appendContent(o,p);if(n===h){p.contentDocument.open();p.contentDocument.close()}return p}function l(){__p&&__p();return new(c("Promise"))(function(n){__p&&__p();if(!i)i=k();if(i.contentDocument.readyState==="complete")n(i);else{if(!j)j=new(c("Promise"))(function(n){i.contentWindow.onload=c("TimeSlice").guard(function(){n(i)},"NonBlockingIFrame window.onload")});n(j)}})}var m={loadImage:function n(o){__p&&__p();return l().then(function(p){return new(c("Promise"))(function(q,r){var s=p.contentWindow.Image,t=new s();t.onload=c("TimeSlice").guard(function(){q(t)},"NonBlockingIFrame image.onload");t.onerror=c("TimeSlice").guard(function(){r(t)},"NonBlockingIFrame image.onerror");t.onabort=c("TimeSlice").guard(function(){r(t)},"NonBlockingIFrame image.onabort");t.src=o})})},loadIFrame:function n(){var o=arguments.length<=0||arguments[0]===undefined?h:arguments[0];return l().then(function(p){var q=p.contentDocument.body;return k(o,q)})}};f.exports=m}),null);
__d("isAdsExcelAddinURI",[],(function a(b,c,d,e,f,g){var h=new RegExp("(^|\\.)fbaddins\\.com$","i"),i=["https"];function j(k){if(k.isEmpty()&&k.toString()!=="#")return false;if(!k.getDomain()&&!k.getProtocol())return false;return i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain())}f.exports=j}),null);
__d("isValidURI",[],(function a(b,c,d,e,f,g){var h=new RegExp("((^|\\.)atlassolutions\\.com$)|((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)","i"),i=["https"];function j(k){if(k.isEmpty()&&k.toString()!=="#")return false;if(!k.getDomain()&&!k.getProtocol())return false;return i.includes(k.getProtocol())&&h.test(k.getDomain())}f.exports=j}),null);
__d("AsyncSignal",["Promise","ErrorUtils","NonBlockingIFrame","Run","QueryString","TimeSlice","TrackingConfig","URI","WebSpeedJSExperiments","ZeroRewrites","isValidURI","isAdsExcelAddinURI","isBonfireURI","isFacebookURI","isMessengerDotComURI","getAsyncParams","memoize"],(function a(b,c,d,e,f,g){__p&&__p();var h;function i(j,k){this.data=k||{};this.uri=j.toString();if(c("TrackingConfig").domain&&this.uri.charAt(0)=="/")this.uri=c("TrackingConfig").domain+this.uri}i.prototype.setHandler=function(j){this.handler=j;return this};i.prototype.setTimeout=function(j){this.timeout=j;return this};i.prototype.send=function(){c("TimeSlice").guard(this._send.bind(this),"AsyncSignal send",{isContinuation:false})()};i.prototype._send=function(){__p&&__p();var j=this.handler,k=this.data;k.asyncSignal=(Math.random()*1e4|0)+1;var l=c("ZeroRewrites").rewriteURI(new(c("URI"))(this.uri)),m=c("isFacebookURI")(l)||c("isMessengerDotComURI")(l)||c("isBonfireURI")(l)||c("isAdsExcelAddinURI")(l)||c("isValidURI")(l);if(m)Object.assign(k,c("getAsyncParams")("POST"));else throw new Error("'"+this.uri+"' is an external URL, you should not send async signals to offsite links.");var n=c("QueryString").appendToUrl(this.uri,k),o;if(c("WebSpeedJSExperiments").non_blocking_logger)o=c("NonBlockingIFrame").loadImage(n);else{if(!h)h=new(c("Promise"))(function(r){c("Run").onAfterLoad(r)});o=h.then(function(){return new(c("Promise"))(function(r,s){var t=new Image();t.onload=r;t.onerror=t.onabort=s;t.src=n})})}if(j){var p=false,q=c("memoize")(function(){c("ErrorUtils").applyWithGuard(j,null,[p])});o.then(function(){p=true;q()},q).done();if(this.timeout)setTimeout(q,this.timeout)}return this};f.exports=i}),null);
__d("AbstractErrorSignal",["invariant","BanzaiODS","ScriptPath","SessionName","SiteData"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=true;function j(){this.constructor!==j||h(0)}j.prototype.logJSError=function(k,l){__p&&__p();l=l||{};l.svn_rev=c("SiteData").client_revision;l.push_phase=c("SiteData").push_phase;l.script_path=c("ScriptPath").getScriptPath();l.extra=l.extra||{};l.extra.hrm=c("SiteData").be_mode;var m=l.extra.type||"error";if(i&&k==="onerror"&&m==="error"){l.extra.extra=l.extra.extra||[];l.extra.extra.push("first_error");i=false}var n=(c("SessionName").getName()||"-")+"/-";this.sendErrorSignal("javascript_error",JSON.stringify({c:k,a:n,m:l}))};j.prototype.sendBeaconErrorSignal=function(){var k="beacon_error",l=(c("SessionName").getName()||"-")+"/-",m={};m.error=k;m.svn_rev=c("SiteData").client_revision;m.push_phase=c("SiteData").push_phase;m.script_path=c("ScriptPath").getScriptPath();m.extra={message:k,type:"info"};this.sendErrorSignal(k,JSON.stringify({c:k,a:l,m:m}))};j.prototype.sendErrorSignal=function(k,l){this.performCounterLogging(k);switch(k){case"async_error":var m=JSON.parse(l),n=m.err_code,o=m.path;if(n in{1004:1,12029:1,12031:1,12152:1}&&o.indexOf("scribe_endpoint.php")==-1)this.performSignalLogging(k,l);break;default:this.performSignalLogging(k,l)}};j.prototype.performCounterLogging=function(k){c("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal.category."+k);switch(k){case"beacon_error":c("BanzaiODS").bumpEntityKey("js_error_reporting","beacon_error_signal.sent");break;case"javascript_error":c("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal.sent");break}};j.prototype.performSignalLogging=function(k,l){h(0)};f.exports=j}),null);
__d("XJavaScriptLogviewSiteCategory",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({MBASIC:"m_basic",MTOUCH:"m_touch",WWW:"www"})}),null);
__d("ErrorSignal",["AbstractErrorSignal","AsyncRequest","AsyncSignal","BanzaiODS","ErrorSignalConfig","XJavaScriptLogviewSiteCategory","emptyFunction"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("AbstractErrorSignal"));i=h&&h.prototype;j.prototype.performCounterLogging=function(l){"use strict";i.performCounterLogging.call(this,l);switch(l){case"javascript_error":c("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal."+c("XJavaScriptLogviewSiteCategory").WWW+".sent");break}};j.prototype.performSignalLogging=function(l,m){"use strict";switch(l){case"async_error":new(c("AsyncRequest"))().setURI(c("ErrorSignalConfig").uri).setData({c:"async_error",m:m}).setMethod("GET").setReadOnly(true).setOption("suppressEvaluation",true).setOption("suppressErrorAlerts",true).setHandler(c("emptyFunction")).setErrorHandler(c("emptyFunction")).send(true);break;default:new(c("AsyncSignal"))(c("ErrorSignalConfig").uri,{c:l,m:m}).send();break}};function j(){"use strict";h.apply(this,arguments)}var k=new j();f.exports=k;b.ErrorSignal=k}),null);
__d("ImageTimingHelper",["Arbiter","BigPipe","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={};c("Arbiter").subscribe(c("BigPipe").Events.init,function(j,k){__p&&__p();if(k.lid&&k.lid!=="0")k.arbiter.subscribe("images_displayed",function(j,k){__p&&__p();var l=h[k.lid];if(!l)l=h[k.lid]=[];k.images.forEach(function(m){try{var n=new(c("URI"))(m);m=n.setFragment("").toString()}catch(o){return}if(i[m])return;i[m]=true;l.push({pagelet:k.pagelet,timeslice:k.timeslice,ts:k.ts,uri:m})})})});f.exports.getImageTimings=function(j){return h[j]||[]}}),null);
__d("PageletEventsHelper",["Arbiter","PageletEventConstsJS"],(function a(b,c,d,e,f,g){__p&&__p();var h="BigPipe/init",i="pagelet_event",j="phase_begin",k={},l=[],m=false;function n(){return{pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}}}function o(r,s,t,u){if(k[u].pagelets[s]==undefined)k[u].pagelets[s]={};k[u].pagelets[s][r]=t}function p(r){__p&&__p();r.subscribe(i,function(s,t){__p&&__p();var event=t.event,u=t.ts,v=t.id,w=t.lid,x=t.phase,y=t.categories,z=t.allResources,A=t.displayResources;o(event,v,u,w);var B=k[w],C=B.pagelets[v];if(event===c("PageletEventConstsJS").ARRIVE_END){C.phase=x;B.all_resources[v]=z;B.display_resources[v]=A}if((event===c("PageletEventConstsJS").ONLOAD_END||event===c("PageletEventConstsJS").DISPLAY_END)&&y)y.forEach(function(F){if(B.categories[F]==undefined)B.categories[F]={};B.categories[F][event]=u});for(var D=0,E=l.length;D<E;D++)l[D](v,event,u,w)});r.subscribe(j,function(event,s){k[s.lid].phase_start[s.phase]=s.ts})}var q={init:function r(){if(m)return;c("Arbiter").subscribe(h,function(event,s){var t=s.lid,u=s.arbiter;k[t]=n();p(u)});m=true},getMetrics:function r(s){if(k[s])return JSON.parse(JSON.stringify(k[s]));return null},subscribeToPageletEvents:function r(s){l.push(s);return{remove:function t(){l.splice(0,l.indexOf(s))}}}};f.exports=q}),null);
__d("Plugin",["Arbiter","ArbiterFrame"],(function a(b,c,d,e,f,g){__p&&__p();var h={CONNECT:"platform/plugins/connect",DISCONNECT:"platform/plugins/disconnect",ERROR:"platform/plugins/error",RELOAD:"platform/plugins/reload",DIALOG:"platform/plugins/dialog",connect:function i(j,k){var l={identifier:j,href:j,story_fbid:k};c("Arbiter").inform(h.CONNECT,l);c("ArbiterFrame").inform(h.CONNECT,l)},disconnect:function i(j,k){var l={identifier:j,href:j,story_fbid:k};c("Arbiter").inform(h.DISCONNECT,l);c("ArbiterFrame").inform(h.DISCONNECT,l)},error:function i(j,k){c("Arbiter").inform(h.ERROR,{action:j,content:k})},reload:function i(j){c("Arbiter").inform(h.RELOAD,{reloadUrl:j||""});c("ArbiterFrame").inform(h.RELOAD,{reloadUrl:j||""})},reloadOtherPlugins:function i(j,k){c("ArbiterFrame").inform(h.RELOAD,{reloadUrl:"",reload:j||"",identifier:k||""})}};f.exports=h}),null);
__d("PluginReturn",["invariant","Arbiter","Log","PlatformDialog","Plugin","URI","PlatformWidgetEndpoint"],(function a(b,c,d,e,f,g,h){__p&&__p();c("Arbiter").subscribe(c("PlatformDialog").RESPONSE,function(event,j){if(j.error_code){c("Log").debug("Plugin Return Error (%s): %s",j.error_code,j.error_message||j.error_description);return}c("Plugin").reload(j.plugin_reload)});var i={auto:function j(){c("Arbiter").subscribe(c("Plugin").RELOAD,function(event,k){var l=typeof k=="object"?k.reloadUrl:k;i.reload(l)})},syncPlugins:function j(){c("Arbiter").subscribe(c("Plugin").RELOAD,function(event,k){if(k.crossFrame)i.reload(k.reloadUrl,k.reload,k.identifier)})},reload:function j(k,j,l){var m=c("URI").getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload",j).addQueryData("id",l);if(k){var j=new(c("URI"))(k);c("PlatformWidgetEndpoint").isPluginEndpoint(j.getPath())||h(0);m.setPath(j.getPath()).addQueryData(j.getQueryData())}window.location.replace(m.toString())}};f.exports=i}),null);
__d("PluginXDReady",["Arbiter","UnverifiedXD"],(function a(b,c,d,e,f,g){var h={handleMessage:function i(j){if(!j.method)return;try{c("Arbiter").inform("Connect.Unsafe."+j.method,JSON.parse(j.params),c("Arbiter").BEHAVIOR_PERSISTENT)}catch(k){}}};b.XdArbiter=h;c("UnverifiedXD").send({xd_action:"plugin_ready",name:window.name});f.exports=null}),null);
__d("SimpleFBAuthenticatedXHRRequest",["invariant","CurrentUser","DTSG","ServerJSDefine","XHRRequest","isFacebookURI"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=1;i=babelHelpers.inherits(l,c("XHRRequest"));j=i&&i.prototype;function l(m,n){"use strict";j.constructor.call(this,m);var o={__dyn:c("ServerJSDefine").getLoadedModuleHash(),__req:(k++).toString(36),__ajax__:1,__a:1,__user:c("CurrentUser").getID()};j.setData.call(this,babelHelpers["extends"]({},n,o))}l.prototype.send=function(){"use strict";__p&&__p();if(!c("isFacebookURI")(this.getURI()))return j.send.call(this);if(c("DTSG").getCachedToken){var m=c("DTSG").getCachedToken();if(m)return this.sendOnDTSGToken(m);else{c("DTSG").getToken().done(function(m){return this.sendOnDTSGToken(m)}.bind(this));return this}}else this.sendOnDTSGToken(c("DTSG").getToken())};l.prototype.sendOnDTSGToken=function(m){"use strict";if(m)j.setData.call(this,babelHelpers["extends"]({},this.getData(),{fb_dtsg:m}));return j.send.call(this)};l.prototype.setData=function(m){"use strict";h(0)};l.parseResponse=function(m){"use strict";return JSON.parse(m.substr(9))};l.getPayload=function(m){"use strict";var n=l.parseResponse(m).payload;return n.payload?n.payload:n};f.exports=l}),null);
__d("XFantailLogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/ajax/fantail/",{service:{type:"String",required:true}})}),null);
__d("FantailLogQueue",["ChannelClientID","CircularBuffer","FantailConfig","PHPQuerySerializer","SimpleFBAuthenticatedXHRRequest","XFantailLogController","destroyOnUnload","setIntervalAcrossTransitions","sprintf"],(function a(b,c,d,e,f,g){__p&&__p();var h={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"};function i(j){"use strict";this.$FantailLogQueue2=j;this.$FantailLogQueue3=new(c("CircularBuffer"))(200);c("setIntervalAcrossTransitions")(this.$FantailLogQueue4.bind(this),30*1e3);c("destroyOnUnload")(this.$FantailLogQueue4.bind(this))}i.get=function(j){"use strict";i.$FantailLogQueue1=i.$FantailLogQueue1||{};i.$FantailLogQueue1[j]=i.$FantailLogQueue1[j]||new i(j);return i.$FantailLogQueue1[j]};i.prototype.debug=function(j){"use strict";for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.DEBUG,j].concat(l))};i.prototype.info=function(j){"use strict";for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.INFO,j].concat(l))};i.prototype.warn=function(j){"use strict";for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.WARN,j].concat(l))};i.prototype.error=function(j){"use strict";for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.ERROR,j].concat(l))};i.prototype.$FantailLogQueue5=function(j,k){"use strict";for(var l=arguments.length,m=Array(l>2?l-2:0),n=2;n<l;n++)m[n-2]=arguments[n];var o=c("sprintf").apply(undefined,[k].concat(m));this.$FantailLogQueue3.write({log_time:Date.now(),log:o,severity:j,device_id:c("ChannelClientID").getID()})};i.prototype.$FantailLogQueue4=function(){"use strict";__p&&__p();var j=this.$FantailLogQueue3.read();if(j.length>0){var k={log_time:[],log:[],severity:[],device_id:[]};j.forEach(function(m){k.log_time.push(m.log_time);k.log.push(m.log);k.severity.push(m.severity);k.device_id.push(m.device_id)});this.$FantailLogQueue3.clear();var l=c("XFantailLogController").getURIBuilder().setString("service",this.$FantailLogQueue2).getURI();new(c("SimpleFBAuthenticatedXHRRequest"))(l,k).setMethod("POST").setDataSerializer(c("PHPQuerySerializer").serialize).setRequestHeader("Content-Type","application/x-www-form-urlencoded").send()}};f.exports=i}),null);
__d("NavigationMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"})}),null);
__d("ResourceTimingMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"})}),null);
__d("NavigationTimingHelper",["NavigationMetricsEnumJS","forEachObject","performance"],(function a(b,c,d,e,f,g){__p&&__p();function h(j,k){var l={};c("forEachObject")(c("NavigationMetricsEnumJS"),function(m){var n=k[m];if(n)l[m]=n+j});return l}var i={getAsyncRequestTimings:function j(k){if(!k||!c("performance").timing||!c("performance").getEntriesByName)return undefined;var l=c("performance").getEntriesByName(k);if(l.length===0)return undefined;return h(c("performance").timing.navigationStart,l[0])},getNavTimings:function j(){if(!c("performance").timing)return undefined;return h(0,c("performance").timing)}};f.exports=i}),null);
__d("ResourceTimingBootloaderHelper",["Bootloader","ErrorUtils","ImageTimingHelper","Map","ResourceTimingMetricsEnumJS","ResourceTimingsStore","ResourceTypes","Set","URI","forEachObject","isEmpty","performance"],(function aa(ba,a,ca,da,b,ea){__p&&__p();var c=500,d=[],e={},f={},g={},h=[".mp4",".m4v",".mpd","m4a"],i=new(a("Set"))(["bootload","js_exec","start_bootload","tag_bootload"]);function j(s){__p&&__p();for(var t=h,u=Array.isArray(t),v=0,t=u?t:t[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var w;if(u){if(v>=t.length)break;w=t[v++]}else{v=t.next();if(v.done)break;w=v.value}var x=w;if(s.endsWith(x))return true}return false}function k(s){__p&&__p();var t=new(a("Map"))();a("ResourceTimingsStore").getMapFor(s).forEach(function(u){if(u.requestSent!=null){var v=t.get(u.uri);if(v!=null)v.push(u);else t.set(u.uri,[u])}});t.forEach(function(u){return u.sort(function(v,w){return v.requestSent-w.requestSent})});return t}function l(s,t,u,v){__p&&__p();var w=s.get(t);if(w==null){var x=t.indexOf("?");if(x!==-1){var y=t.substring(0,x);w=s.get(y)}}if(w!=null)for(var z=0;z<w.length;z++){var A=w[z],B=A.requestSent,C=A.responseReceived;if((u==null||B!=null&&B<=u)&&(v==null||C!=null&&C>=v))return w.splice(z,1)[0]}return null}function m(f,s,t,u,v,w,x){__p&&__p();if(!a("performance").timing||!a("performance").getEntriesByType)return null;var y={},z=a("performance").timing.navigationStart;if(t)y=a("ImageTimingHelper").getImageTimings(u).sort(function(Z,$){return Z.ts-$.ts}).reduce(function(Z,$){if(Z[$.uri])return Z;Z[$.uri]=$.pagelet;return Z},{});var A=Array.from(a("performance").getEntriesByType("resource")),B=A.filter(function(H){return H.duration>=0&&H.startTime!=null&&H.startTime+z>s&&(v==null||H.responseEnd==null||H.responseEnd+z<v)});B.sort(function(Z,$){return Z.startTime-$.startTime});var C=B.length,D=0,E=0,F=0,fa=0,ga=0,ha=k(a("ResourceTypes").XHR),ia=k(a("ResourceTypes").CSS),ja=k(a("ResourceTypes").JS);for(var G=0;G<B.length;G++){var H=B[G],I="",J="",K="",L=void 0,ka=H.initiatorType;switch(ka){case"css":case"link":case"script":var M=a("ResourceTimingsStore").parseMakeHasteURL(H.name);if(!M)continue;var la=M[0],N=M[1];if(N==="css"||N==="js"){var ma=N==="css"?ia:ja;L=l(ma,H.name,H.startTime+z,H.responseEnd+z);if(L!=null&&x){J=N;I=L.uid;break}else{J=N;var na=g[H.name]||F++;I=na+"_"+la}}else{var O=p(H.name);K=O[0];J=O[1];I=E+++"_"+K}break;case"img":I=E+++"_"+n(H.name);J="img";break;case"iframe":I=fa+++"_"+n(H.name)+o(H.name);J="iframe";break;case"xmlhttprequest":if(w){var oa=n(H.name),P=o(H.name);if(j(P)){I=ga+++"_"+oa+P;J="video";break}else{L=l(ha,H.name,H.startTime+z,H.responseEnd+z);if(L!=null){J=a("ResourceTypes").XHR;I=L.uid;break}}}default:continue}var Q={},R=Object.keys(a("ResourceTimingMetricsEnumJS"));for(var S=0;S<R.length;S++){var T=a("ResourceTimingMetricsEnumJS")[R[S]],U=H[T];if(U)Q[T]=U+a("performance").timing.navigationStart}if(L!=null){var V=L,W=V.requestSent,X=V.responseReceived;if(s!=null&&W!=null&&W<s||v!=null&&X!=null&&X>v)continue;Q.requestSent=W;Q.responseReceived=X}Q.type=J;Q.desc=I;if(L!=null&&(J===a("ResourceTypes").JS||J===a("ResourceTypes").CSS||J===a("ResourceTypes").XHR)){var Y=a("ResourceTimingsStore").getAnnotationsFor(J,L.uid);if(Y!=null)Q.annotations=Y}if(J=="img"&&Object.prototype.hasOwnProperty.call(y,H.name))Q.pagelet=y[H.name];Q.transferSize=H.transferSize;Q.encodedBodySize=H.encodedBodySize;if(f[H.name]==undefined)f[H.name]=[];D++;f[H.name].push(Q)}if(x)return{numValidEntries:C,numSuccessfulMetrics:D};return null}function n(s){var t=new(a("URI"))(s).getDomain();return t}function o(s){var t=new(a("URI"))(s).getPath();return t}function p(s){return[n(s),"img"]}function q(s){__p&&__p();var t=Object.keys(s).filter(function(v){return v.startsWith("start_bootload/")}).sort(function(v,w){return s[v]-s[w]}).map(function(v){return v.substring(v.indexOf("/")+1)});t.forEach(function(v){return i.forEach(function(w){var x=w+"/"+v;if(s[x]!=null)e[x]=s[x]})});d=d.concat(t);if(d.length>c){var u=d.splice(0,d.length-c);u.forEach(function(v){return i.forEach(function(w){if(e[w+"/"+v])delete e[w+"/"+v]})})}}var r={addPastBootloaderMetricsToResourceTimings:function s(){__p&&__p();var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],u=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],g=a("Bootloader").getURLToHashMap();a("forEachObject")(t,function(v,w){__p&&__p();var x=g[w];if(!x)return;var y=new(a("Map"))();y.set("bootloader_hash",x);i.forEach(function(z){var A=z+"/"+x,B=u[A]||e[A];if(B!=null)y.set(z,B)});if(y.size>0)v.forEach(function(z){if(z.requestSent||z.responseReceived)return;y.forEach(function(A,B){return z[B]=A})})})},mergeBootloaderMetricsAndResourceTimings:function s(){__p&&__p();var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],u=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],v=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(a("isEmpty")(g))g=a("Bootloader").getURLToHashMap();var w=new(a("Map"))();a("forEachObject")(g,function(y,z){w.set(y,z)});var x=[];a("forEachObject")(u,function(f,y){__p&&__p();var z=y.indexOf("/");if(z===-1)return;var A=y.substring(0,z);if(!i.has(A))return;x.push(y);var B=y.substring(z+1),C=w.get(B);if(!C){C=B;B=g[C];if(!B)return}if(C.startsWith("data:"))C="inlined resource: "+B;if(t[C]==null)t[C]=[{}];t[C].forEach(function(D){D.bootloader_hash=B;D[A]=f})});if(!v){q(u);x.forEach(function(y){return delete u[y]})}return t},getLastTTIAndE2EImageResponseEnds:function s(t,u,v){__p&&__p();var w={TTI:t,E2E:u};if(!a("performance").timing)return w;var x=v.filter(function(A){return A.ts<=t}).map(function(A){return A.uri}).reduce(function(A,z){A[z]=true;return A},{}),y=v.map(function(A){return A.uri}).reduce(function(A,z){A[z]=true;return A},{});for(var z in f)f[z].forEach(function(A){if(A.type==="img"){if(x[z])w.TTI=Math.max(w.TTI,A.responseEnd);if(y[z])w.E2E=Math.max(w.E2E,A.responseEnd)}});return w},getMetrics:function s(t,u,v,w,x,y){f={};if(a("isEmpty")(g))g=a("Bootloader").getURLToHashMap();var z=m(f,t,u,v,w,x,y);return{data:f,diagnostics:z}}};b.exports=r}),null);
__d("PerfXFlusher",["invariant","Banzai"],(function a(b,c,d,e,f,g,h){var i="perfx_custom_logger_endpoint",j=["perfx_page","perfx_page_type","lid"];function k(m){j.forEach(function(n){return h(n in m,'PerfXFlusher: Field "%s" missing in the PerfX payload',n)})}var l={flush:function m(n){k(n);c("Banzai").post(i,n,{signal:true})},registerToSendWithBeacon:function m(n){c("Banzai").registerToSendWithBeacon(i,n)}};f.exports=l}),null);
__d("pageLoadedViaSWCache",[],(function a(b,c,d,e,f,g){function h(){return self.__SW_CACHE__===1}f.exports=h}),null);
__d("PerfXLogger",["DataAttributeUtils","NavigationMetrics","NavigationTimingHelper","PerfXFlusher","Set","forEachObject","pageLoadedViaSWCache","performanceAbsoluteNow","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={},j=65*1e3,k=["e2e","tti","all_pagelets_displayed","all_pagelets_loaded"],l={},m={_listenersSetUp:false,_setupListeners:function n(){__p&&__p();if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();c("PerfXFlusher").registerToSendWithBeacon(function(){var o=[];c("forEachObject")(h,function(p,q){if(!h[q].sent){var r=this.getPayload(q,"unload fired");if(r!=null)o.push(r)}}.bind(this));h={};return o}.bind(this));this._listenersSetUp=true},_init:function n(o){__p&&__p();var p=o.lid;if(p==null)return;var q=i[p]||[];delete i[p];if(o.sw_controlled_tags){if(navigator.serviceWorker&&navigator.serviceWorker.controller)for(var r=0;r<o.sw_controlled_tags.length;r++)q.push(o.sw_controlled_tags[r]);delete o.sw_controlled_tags}h[p]=babelHelpers["extends"]({tags:new(c("Set"))(q),sent:false},o);this._registerTimeoutSendback(p);this._setupListeners()},initWithNavigationMetricsLID:function n(o,p){__p&&__p();var q=c("NavigationMetrics").getFullPageLoadLid();if(!q)return;this._init(babelHelpers["extends"]({},p,{lid:q}));if(o&&o.always)for(var r=0;r<o.always.length;r++)m.addTag(q,o.always[r]);if(o&&o.swCache&&c("pageLoadedViaSWCache")())for(var s=0;s<o.swCache.length;s++)m.addTag(q,o.swCache[s])},init:function n(o,p){if(p!=null&&o.lid!=null)l[o.lid]=p;this._init(o)},addTag:function n(o,p){var q=h[o];if(q){q.tags.add(p);return}if(!i[o])i[o]=[];i[o].push(p)},addTagWithNavigationMetricsLID:function n(o){var p=c("NavigationMetrics").getFullPageLoadLid();if(!p)return;m.addTag(p,o)},_registerTimeoutSendback:function n(o){var p=this._getFetchStart(o),q=j;if(p!=null)q-=c("performanceAbsoluteNow")()-p;c("setTimeoutAcrossTransitions")(function(){return this._uploadPayload(o,"sendback time out")}.bind(this),q)},_subscribeToNavigationMetrics:function n(){__p&&__p();c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.EVENT_OCCURRED,function(o,p){if(!(o in h))return;if(k.includes(p.event)&&Object.prototype.hasOwnProperty.call(p,"timestamp")&&p.timestamp!=null){h[o][p.event]=p.timestamp;if(p.visibilityState)h[o][p.event+"_page_visibility"]=p.visibilityState}});c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.NAVIGATION_DONE,function(o,p){var q=p.serverLID;if(!(q in h))return;k.forEach(function(event){if(Object.prototype.hasOwnProperty.call(p,event)&&p[event]!=null)h[q][event]=p[event]});this._uploadPayload(q)}.bind(this))},_getPayloadWithOffset:function n(o,p,q){__p&&__p();var r=h[o];if(r==null)return null;var s=Object.assign({},r),t=document.querySelector('[id^="hyperfeed_story_id"]');if(t){var u=JSON.parse(c("DataAttributeUtils").getDataFt(t));if(u)s.mf_query_id=u.qid}s.tags=Array.from(r.tags);this._adjustValues(s,p);s.fetch_start=p;if(s.perfx_page_type==="normal"){var v=c("NavigationTimingHelper").getNavTimings();if(v!=null&&v.navigationStart!=null)s.nav_to_fetch=p-v.navigationStart}if(q!=null)s.sendback_reason=q;if(navigator&&navigator.hardwareConcurrency)s.num_cores=navigator.hardwareConcurrency;if(navigator&&navigator.deviceMemory)s.ram_gb=navigator.deviceMemory;if(navigator&&navigator.connection){if(typeof navigator.connection.downlink==="number")s.downlink_megabits=navigator.connection.downlink;if(typeof navigator.connection.effectiveType==="string")s.effective_connection_type=navigator.connection.effectiveType;if(typeof navigator.connection.rtt==="number")s.rtt_ms=navigator.connection.rtt}delete s.sent;return s},_uploadPayload:function n(o,p){if(h[o]!=null&&!h[o].sent){var q=this.getPayload(o,p);if(q!=null){c("PerfXFlusher").flush(q);h[o].sent=true}}},getPayload:function n(o,p){return this._getPayloadWithOffset(o,this._getFetchStart(o),p)},_getFetchStart:function n(o){__p&&__p();if(!(o in h))return null;var p=void 0,q=h[o].perfx_page_type;if(q=="quickling")if(!(o in l))return null;else p=c("NavigationTimingHelper").getAsyncRequestTimings(l[o]);else p=c("NavigationTimingHelper").getNavTimings();if(!p||!p.fetchStart)return null;return p.fetchStart},_adjustValues:function n(o,p){k.forEach(function(q){if(Object.prototype.hasOwnProperty.call(o,q))o[q]-=p})}};f.exports=m}),null);
__d("XRelayBootloadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/relay/bootload/",{component:{type:"String",required:true},params:{type:"String",required:true},route:{type:"String",required:true},uri:{type:"String",required:true}})}),null);