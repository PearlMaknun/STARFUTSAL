(self.AMP=self.AMP||[]).push({n:"amp-fx-flying-carpet",v:"1510956201635",f:(function(AMP){var g;function h(a,c){function d(){}d.prototype=c.prototype;a.prototype=new d;a.prototype.constructor=a;for(var b in c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(c,b);e&&Object.defineProperty(a,b,e)}else a[b]=c[b]};Date.now();self.log=self.log||{user:null,dev:null,userForEmbed:null};var k=self.log;function m(){if(!k.user)throw Error("failed to call initLogConstructor");return k.user};var n,p="Webkit webkit Moz moz ms O o".split(" ");var q;function u(a,c){function d(a){try{return f(a)}catch(r){throw self.reportError(r),r;}}var b=void 0,e=a,f=c,l=v(),t=!1;b&&(t=b.capture);e.addEventListener("amp:built",d,l?b:t)}function v(){if(void 0!==q)return q;q=!1;try{var a={get capture(){q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(c){}return q};function w(a){a=AMP.BaseElement.call(this,a)||this;a.a=[];a.b=0;a.c=null;return a}h(w,AMP.BaseElement);g=w.prototype;g.isLayoutSupported=function(a){return"fixed-height"==a};
g.buildCallback=function(){var a=this,c=this.element.ownerDocument,d=c.createElement("div");this.a=this.getRealChildren();this.c=d;var b=this.getRealChildNodes();this.b=x(b).length;this.a.forEach(function(c){return a.setAsOwner(c)});var e=c.createElement("div");e.setAttribute("class","i-amphtml-fx-flying-carpet-clip");d.setAttribute("class","i-amphtml-fx-flying-carpet-container");b.forEach(function(a){return d.appendChild(a)});e.appendChild(d);this.element.appendChild(e);this.getViewport().addToFixedLayer(d)};
g.onLayoutMeasure=function(){var a=this,c=this.getLayoutWidth();this.getVsync().mutate(function(){var d=a.c,b;b=d.style;n||(n=Object.create(null));var e=n.width;if(!e){e="width";if(void 0===b.width){var f;b:{for(f=0;f<p.length;f++){var l=p[f]+"Width";if(void 0!==b[l]){f=l;break b}}f=""}void 0!==b[f]&&(e=f)}n.width=e}b=e;b&&(d.style[b]=c+"px")})};g.viewportCallback=function(a){this.updateInViewport(this.a,a)};
g.layoutCallback=function(){try{var a=this.element.getLayoutBox(),c=this.getViewport(),d=c.getHeight(),b=c.getScrollHeight(),c=.75*d,d=b-.95*d;m().assert(a.top>=c,"<amp-fx-flying-carpet> elements must be positioned after the 75% of first viewport: %s Current position: %s. Min: %s",this.element,a.top,c);m().assert(a.top<=d,"<amp-fx-flying-carpet> elements must be positioned before the last viewport: %s Current position: %s. Max: %s",this.element,a.top,d)}catch(e){throw this.collapse(),e;}this.scheduleLayout(this.a);
a=this.g.bind(this);u(this.element,a);return Promise.resolve()};g.g=function(a){a=a.target;a.getOwner()===this.element&&this.scheduleLayout(a)};g.collapsedCallback=function(a){a=this.a.indexOf(a);if(-1<a&&(this.a.splice(a,1),this.b--,0==this.b))return this.attemptCollapse().catch(function(){})};function x(a){return a.filter(function(a){return 1===a.nodeType?!0:3===a.nodeType?/\S/.test(a.textContent):!1})}(function(a){a.registerElement("amp-fx-flying-carpet",w,"amp-fx-flying-carpet{position:relative!important;box-sizing:border-box!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important;margin:0!important;padding:0!important;clip:rect(0,auto,auto,0)!important;-webkit-clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip>.i-amphtml-fx-flying-carpet-container{position:fixed!important;top:0!important;width:100%;height:100%;-webkit-transform:translateZ(0)!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-fixed-height,.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-responsive{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}\n/*# sourceURL=/extensions/amp-fx-flying-carpet/0.1/amp-fx-flying-carpet.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-fx-flying-carpet-0.1.js.map

