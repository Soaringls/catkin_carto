(function(){function Ub(a){if(!(a instanceof Array)){a=fa(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
OBR.Kb||function(){function a(a){this.o=a;this.R=new OBR.R(this.o,"DFP");this.s=this.m()}a.prototype.m=function(){var a=OBR.O.Ca();return{publisherId:this.o.h("pid",""),sectionId:this.o.h("sid",""),widgetJsId:this.o.h("widgetJsId",""),widgetId:this.o.h("wnid",""),docId:this.o.h("did",""),uuid:this.o.h("lsd",""),deviceOrientation:a.width>a.height?"landscape":"portrait",platform:this.o.h("readerPlatform",""),deviceOs:"",timestamp:""}};a.prototype.Dp=function(){OBR.i.log("[DFP Data] glade DFP ad requested");
this.c({ID:4600})};a.prototype.Ep=function(){OBR.i.log("[DFP Data] glade DFP ad served");this.c({ID:4610})};a.prototype.xp=function(){OBR.i.log("[DFP Data] glade DFP got empty ad");this.c({ID:4620})};a.prototype.yp=function(){OBR.i.log("[DFP Data] glade DFP got error");this.c({ID:4630})};a.prototype.c=function(a){this.R.G(a,this.s,OBR.f.Z.fa,{})};return OBR.Kb=a}();var F={LIKE:{ID:1,Note:0},DISLIKE:{ID:2,Note:0},UNDO_DISLIKE:{ID:3,Note:0},UNDO_LIKE:{ID:4,Note:0},STASH:{ID:5,Note:0},UNDO_STASH:{ID:6,Note:0},SHARE:{FACEBOOK:{ID:7,Note:100},TWITTER:{ID:7,Note:101},MAIL:{ID:7,Note:102},CLIPBOARD:{ID:7,Note:103},MOBILE_NATIVE:{ID:7,Note:104}},REPORTS:{UNDO:{ID:9,Note:0},INAPPROPRIATE:{ID:8,Note:150},MISLEADING:{ID:8,Note:151},FAKE_NEWS:{ID:8,Note:153},SCAM:{ID:8,Note:154},OTHER:{ID:8,Note:152},UNINTERESTING:{ID:8,Note:155},OFFENSIVE:{ID:8,Note:156},REPETITIVE:{ID:8,
Note:157},SHALLOW:{ID:8,Note:158},POOR_QUALITY:{ID:8,Note:159}}},Vb=!!window.ResizeObserver,Wb=!!navigator.share,Xb={FCBK:1,TWTR:2,MAIL:3,LINK:4};function G(a){return function(b){a&&a.call(null,b);b.preventDefault();b.stopPropagation();return!1}}var H={"default":0,simplified:1,"simplified-2":2};function Yb(a,b,c,d){a={at:c.ID,an:c.Note,uuid:b.h("lsd",""),sid:b.h("sid",""),pid:b.h("pid",""),docURL:b.ea(),wId:b.D(),seId:b.h("req_id",-1)+a.m,reqId:b.h("req_id","-1"),rec_en_did:d.rec_en_did,ttid:d.ttid,ab:b.rc()||b.h("abTestVal","no_abtest")};"undefined"!==typeof d.pc_id&&"undefined"!==typeof d.pc_cmp_id&&(a.adId=d.pc_id,a.cId=d.pc_cmp_id);return a}function I(a,b,c){var d=Zb;$b(d,Yb(d,c,a,b))}function ac(a){return bc(a.querySelector("[data-event]"))}
function bc(a){var b={};a&&(a=OBR.b.aa(a,"data-event"))&&(b=JSON.parse(a));return b}function $b(a,b){OBR.Aa.hh()?OBR.Aa.Oe(a.c,b,OBR.b.Rb):(a=a.c,a+="?eventId="+b.eventId,a+="&pId="+b.pId,a+="&sId="+b.sId,a+="&wId="+b.wId,a+="&uuid="+b.uuid,a+="&pvId="+b.pvId,a+="&reqId="+b.reqId,a+="&did="+b.did,a+="&idx="+b.idx,a+=b.ttid?"&ttid="+b.ttid:"",a+=b.targetDid?"&targetDid="+b.targetDid:"",a+=b.eventData?"&eventData="+b.eventData:"",b=OBR.b.na(0,a,!0,!0),OBR.b.ua(b))}
var Zb=new function(){this.c=OBR.f.Fh+"logger/v1/userActions/";this.m=(new Date).getTime()};function cc(a,b){this.o=b;this.variant=H[b.l("interactionLayerVariant","default")];b=a.querySelector(".ob-dynamic-rec-link");var c=a.querySelector(".ob-intr-report .obr-intr-icon-x"),d=a.querySelector(".ob-intr-report-menu"),e=d.querySelector("li:last-child"),f=d.querySelectorAll("li[data-report-type]");a.querySelector(".ob-intr-report").addEventListener("click",G());dc(this,f,e,b);this.variant===H.default&&ec(c,b,d,e,a)}
function dc(a,b,c,d){var e=d.querySelector('[data-action="like"]');b.forEach(function(b){b.addEventListener("click",function(){var f=OBR.b.aa(b,"data-report-type");f=F.REPORTS[f];var h=ac(d);I(f,h,a.o);f=fc(d,"ob-intr-overlay ob-intr-overlay-disabled");f.addEventListener("click",G());gc(a,d,f);OBR.b.P(e,"ob-icon-on");OBR.b.K(d.parentElement,"ob-intr-disabled");c.click()})})}
function gc(a,b,c){c.insertAdjacentHTML("afterbegin",'<a href="#" class="ob-intr-undo">Undo</a>');var d=c.querySelector("a"),e=ac(b);d.addEventListener("click",function(){I(F.REPORTS.UNDO,e,a.o);OBR.b.$b(c);OBR.b.P(b.parentElement,"ob-intr-disabled");return!1})}function fc(a,b){if(a&&a.insertAdjacentHTML)return a.insertAdjacentHTML("beforebegin",'<div class="'+(b||"ob-intr-overlay")+'"></div>'),a.previousSibling}
function ec(a,b,c,d,e){a.addEventListener("click",function(){var a=fc(b),g=hc(a,c);a.addEventListener("click",g);d.addEventListener("click",g);OBR.b.K(c,"ob-intr-report-on");a=e.children[0];(g=e.querySelector(".ob-intr-report-menu"))&&0<g.offsetWidth&&0<g.offsetHeight&&(g.style.maxWidth=a.clientWidth-10+"px")})}function hc(a,b){return function(){OBR.b.$b(a);OBR.b.P(b,"ob-intr-report-on")}};function ic(){this.c=[];this.m=[]}t=ic.prototype;
t.In=function(a,b){var c=OBR.b.aa(a,"data-code");OBR.vb.vm(c);c={};var d=OBR.b.aa(a,"data-code"),e=a.querySelector(".ob-rec-interaction");try{var f=JSON.parse(OBR.b.aa(e,"data-event"));c.event=Yb(Zb,b,F.UNDO_STASH,f)}catch(g){}c.url=OBR.b.aa(a,"href");c.img=jc(a,".ob-rec-image","src");b=jc(a,".ob-rec-text","title");if(!b||0===b.length)if(f=a.querySelector(".ob-rec-text"))b=f.textContent;c.text=b;c.source=jc(a,".ob-rec-source","innerText",!0);a={hash:d,data:c};c=J();d=a.hash;c[d]=a.data;c.order.push(d);
kc(c);lc(this,a);a=OBR.ef;c=J().order.length;a.m=c;a.A&&(a.A.innerText=a.m);OBR.ef.showNotification()};t.jt=function(a){a=OBR.b.aa(a,"data-code");this.Xi(a,!1);a=OBR.ef;var b=J().order.length;a.m=b;a.A&&(a.A.innerText=a.m)};function mc(a){a=OBR.b.aa(a,"data-code");return J().hasOwnProperty(a)}t.Mg=function(){return J()};t.observe=function(a,b){"function"===typeof a&&this.c.push(a);"function"===typeof b&&this.m.push(b)};
function jc(a,b,c,d){var e=null;(a=a.querySelector(b))&&(e=d&&c in a?a[c]:OBR.b.aa(a,c));return e}t.Xi=function(a,b){OBR.vb.vm(a);var c=J();b&&$b(Zb,c[a].event);b=c.order.indexOf(a);c.order.splice(b,1);delete c[a];nc(this,a,b);kc(c)};function J(){var a=OBR.b.ya("OB-INTERACTION-STASH")||'{"order":[]}';return JSON.parse(a)}function kc(a){OBR.b.Hb("OB-INTERACTION-STASH",JSON.stringify(a))}function lc(a,b){a.c.forEach(function(a){a(b)})}function nc(a,b,c){a.m.forEach(function(a){a(b,c)})}var L=new ic;var oc='\n  .ob-stash-notification {\n    width: 100%;\n    max-width: 411px;\n    height: 50px;\n    line-height: 50px;\n    padding: 0 8px 0 15px;\n    background-color: #fff;\n    color: #565656;\n    border-radius: 2px;\n    box-sizing: border-box;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n    text-align: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    margin: 15px auto 0 auto;\n    -webkit-transform: translate(0, 0); \n    transform: translate(0, 0);\n    -webkit-transition: -webkit-transform 0.3s ease-in;\n    transition: -webkit-transform 0.3s ease-in;\n    transition: transform 0.3s ease-in;\n    transition: transform 0.3s ease-in,-webkit-transform 0.3s ease-in;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    z-index: 1000;\n  }\n  \n  .ob-stash-notification-count {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: inline-block;\n    min-width: 29px;\n    height: 29px;\n    line-height: 29px;\n    background-color: #ef8421;\n    color: #fff;\n    text-decoration: none;\n    padding: 3px 4px 0 5px;\n    border-radius: 3px;\n    font-size: 13px;\n    -webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,.15);\n    box-shadow: 2px 2px 2px 0 rgba(0,0,0,.15);\n  }\n\n  .ob-stash-notification-count::before {\n    content: "";\n    display: inline-block;\n    width: 13px;\n    height: 15px;\n    background: transparent url(https://widgets.outbrain.com/images/smartfeed/intr-sprite.svg) -5px -257px no-repeat;\n  }'.replace(/\n/g,
"");function M(){this.m=0;this.c=void 0;this.H=OBR.Xc(this.W.bind(this),1800);var a=document.querySelector(".ob-intr-stash");a&&pc(this,a)}M.prototype.showNotification=function(){![].slice.call(document.querySelectorAll(".ob-btn-stash")).some(this.S)&&qc(this)};M.prototype.W=function(){var a=this;this.c.setAttribute("style",this.s);setTimeout(function(){a.c.style.display="none"},300)};function qc(a){a.c.style.display="flex";setTimeout(function(){a.c.setAttribute("style","");a.H()},10)}
function pc(a,b){OBR.b.J(oc);a.c=rc(a,b);sc(a,a.c);a.c.setAttribute("style","display:none; "+a.s);a.A=a.c.querySelector(".ob-stash-notification-count");OBR.b.V(window,"resize",function(){sc(a,a.c)})}function sc(a,b){b=function(a){var b=window.getComputedStyle(a);return function(a){return parseInt(b[a],10)}}(b);b=10+b("top")+b("marginTop")+b("height");a.s="-webkit-transform: translate(0, -"+b+"px); transform: translate(0, -"+b+"px);"}
function rc(a,b){a='<span>Scroll up to see your stashed stories</span><span class="ob-stash-notification-count">'+a.m+"</span>";var c=document.createElement("div");OBR.b.K(c,"ob-stash-notification");c.innerHTML=a;b&&(c.style.display="none",b.appendChild(c));return c}M.prototype.S=function(a){a=a.getBoundingClientRect();return 0<=a.top&&0<=a.left&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&a.right<=(window.innerWidth||document.documentElement.clientWidth)};OBR.Ev=M;function P(a){this.o=a;this.variant=H[a.l("interactionLayerVariant","default")];this.m=null;this.c=OBR.b.w(this.o.C());tc(this)}P.km=function(){var a=document.querySelectorAll(".ob-smartfeed-wrapper");a&&a.forEach(function(a){Wb||OBR.b.K(a,"ob-no-share-api");OBR.f.wa&&OBR.b.Gr()&&OBR.b.K(a,"ob-mobile-touch")})};
P.vm=function(a){(a=document.querySelectorAll('a.ob-dynamic-rec-link[data-code="'+a+'"] .ob-rec-interaction [data-action="save"].ob-intrl-btn'))&&a.forEach(function(a){OBR.b.sb(a,"ob-icon-on");OBR.b.sb(a,"ob-icon-off")})};
function tc(a){a.c&&(a.sg=a.c.querySelectorAll(".ob-dynamic-rec-container"),a.sg.forEach(function(b){if(b.querySelector(".ob-intr-container")){uc(b);vc(a,b);wc(a,b);xc(a,b);a.Ql=new cc(b,a.o);var c=b.querySelector(".ob-dynamic-rec-link "),d=c.querySelector("[data-event]");d&&(d=OBR.b.aa(d,"data-event"))&&d.length&&(d=JSON.parse(d),OBR.b.Pa(c,"data-code",d.rec_en_did));mc(c)&&yc(b.querySelector('[data-action="save"].ob-intrl-btn'));b.Db={Cb:0}}}),a.o.l("isSmartFeedInjectionEnabled",!1)?zc(a):a.s=a.c.parentElement.querySelector(".ob-stash-count"))}
function xc(a,b){var c=b.querySelector("a.ob-dynamic-rec-link");b.querySelector(".ob-rec-interaction").addEventListener("click",G(function(d){d=d.target;OBR.b.pr(d)&&d.parentElement&&(d=d.parentElement);if(OBR.b.pk(d,"ob-intrl-btn")){var e=d,f=OBR.b.aa(e,"data-action");d=ac(c);switch(f){case "like-menu":a.variant===H.simplified&&Ac(a,d,b,e);break;case "like":a.variant===H["default"]?(d&&(f=Bc(e,F.LIKE,F.UNDO_LIKE),I(f,d,a.o)),yc(e),OBR.b.P(c.querySelector('[data-action="dislike"]'),"ob-icon-on")):
a.variant===H.simplified&&Ac(a,d,b);break;case "dislike":if(a.variant===H["default"])d&&(f=Bc(e,F.DISLIKE,F.UNDO_DISLIKE),I(f,d,a.o)),yc(e),OBR.b.P(c.querySelector('[data-action="like"]'),"ob-icon-on");else{e=F.DISLIKE;f=b.querySelector('[data-action="like-menu"]');Cc(b.querySelector(".ob-dynamic-rec-link "),f)();switch(b.Db.Cb){case 0:case 1:b.Db.Cb=2;OBR.b.K(f,"ob-icon-dislike-on");OBR.b.P(f,"ob-icon-like-on");var g=b.querySelector(".ob-intr-report");f=g.querySelector("li:last-child");OBR.b.K(g,
"ob-intr-report-on");var h=Dc(b.querySelector(".ob-dynamic-rec-link"));g=Ec(g,b.querySelector('[data-action="like-menu"]'),b,h);h.addEventListener("click",g);f.addEventListener("click",g);break;case 2:OBR.b.P(f,"ob-icon-dislike-on"),b.Db.Cb=0,e=F.UNDO_DISLIKE}d&&I(e,d,a.o)}break;case "share":Fc(a,c,e);break;case "save":e=Bc(e,F.STASH,F.UNDO_STASH),I(e,d,a.o),(mc(c)?L.jt:L.In).call(L,c,a.o),d=L.Mg().order.length,a.s.innerText=d}}}))}
function wc(a,b){var c=OBR.Xc(function(){uc(b);vc(a,b);var c=b.children[0],e=b.querySelector(".ob-intr-report-menu");e&&0<e.offsetWidth&&0<e.offsetHeight&&(e.style.maxWidth=c.clientWidth-10+"px")},250);Vb?(new window.ResizeObserver(c)).observe(b):window.addEventListener("resize",c)}
function vc(a,b){if(a.variant===H["default"]){var c="50%",d=b.querySelector('.ob-intr-container [data-action="share"]');a=b.querySelector(".ob-intr-share-menu");350<=b.clientWidth&&(c=d.getBoundingClientRect(),b=a.parentElement.getBoundingClientRect(),c=c.x+c.width/2,c=Math.round(c-b.x),c+="px");a.style.left=c}}
function uc(a){var b=a.querySelector(".ob-intr-container");413<=OBR.O.Ca().width?OBR.b.K(b,"ob-intr-med"):OBR.b.P(b,"ob-intr-med");500<=a.clientWidth?OBR.b.K(b,"ob-intr-wide"):OBR.b.P(b,"ob-intr-wide")}function yc(a){a&&(OBR.b.sb(a,"ob-icon-on"),OBR.b.sb(a,"ob-icon-off"))}function Bc(a,b,c){var d=a.ob_actionType;d=d?d===b?c:b:OBR.b.pk(a,"ob-icon-on")?c:b;return a.ob_actionType=d}
function Ac(a,b,c,d){var e=null,f=c.Db.Cb;d=d||c.querySelector('[data-action="like-menu"]');switch(f){case 0:OBR.b.K(d,"ob-icon-like-on");c.Db.Cb=1;e=F.LIKE;break;case 1:OBR.b.P(d,"ob-icon-like-on");c.Db.Cb=0;e=F.UNDO_LIKE;break;case 2:OBR.b.P(d,"ob-icon-dislike-on"),c.Db.Cb=0,e=F.UNDO_DISLIKE}b&&I(e,b,a.o);Cc(c.querySelector(".ob-dynamic-rec-link "),d)()}
function Fc(a,b,c){function d(){document.removeEventListener("click",d);g()}var e=b.parentElement.querySelector(".ob-intr-share-menu"),f=Dc(b);OBR.b.K(c,"ob-icon-on");OBR.b.K(e,"ob-intr-on");var g=Cc(b,c);a.ao(e,b,d);f.addEventListener("click",d);document.addEventListener("click",d)}function Gc(a){navigator.share({url:a}).then(function(){console.log("navigator.share completed")}).catch(function(a){console.log(a)})}
function Hc(a,b,c){if(!OBR.b.ld(a)){if((c=OBR.b.aa(c,"data-share")?Xb[OBR.b.aa(c,"data-share")]:null)&&c!==Xb.FCBK){a="true"===OBR.b.aa(b,"data-use-original-url")?OBR.b.aa(b,"data-orig-url"):OBR.b.aa(a,"href");a=decodeURIComponent(a);b=a.split("?");var d=1<b.length?"&"+b[1]:"";c!==Xb.FCBK&&(a=b[0]+"?shr="+c+d);c=encodeURIComponent(a)}else c=OBR.b.aa(b,"data-orig-url");return c}}
function Ec(a,b,c,d){return function(e){e.preventDefault();e.stopPropagation();OBR.b.$b(d);OBR.b.P(a,"ob-intr-report-on");OBR.b.P(b,"ob-icon-dislike-on");c.Db.Cb=0;return!1}}t=P.prototype;t.ao=function(a,b,c){this.Xn.apply(this,arguments);this.bo.apply(this,arguments);this.Yn.apply(this,arguments);this.Vn.apply(this,arguments);this.$n.apply(this,arguments)};function Ic(a,b,c,d){d&&(c=bc(c.parentElement),I(d,c,a.o));b()}
t.$n=function(a,b,c){var d=this;if(Wb){var e=a.querySelector(".ob-intr-shr-native"),f=Hc(b,a,e);Jc(e,G(function(){Gc(decodeURIComponent(f));Ic(d,c,a,F.SHARE.MOBILE_NATIVE)}))}};t.Vn=function(a,b,c){var d=this,e=a.querySelector(".ob-intr-shr-url"),f=Hc(b,a,e);Jc(e,G(function(){OBR.mj.copy(decodeURIComponent(f));Ic(d,c,a,F.SHARE.CLIPBOARD)}))};t.Yn=function(a,b,c){var d=this,e=a.querySelector(".ob-intr-shr-mail"),f=Hc(b,a,e);Jc(e,G(function(){window.location.href="mailto:?body="+f;Ic(d,c,a,F.SHARE.MAIL)}))};
t.bo=function(a,b,c){var d=this,e=a.querySelector(".ob-intr-shr-twtr"),f="https://twitter.com/share?url="+Hc(b,a,e);Jc(e,G(function(){window.open(f);Ic(d,c,a,F.SHARE.TWITTER)}))};t.Xn=function(a,b,c){var d=this,e=a.querySelector(".ob-intr-shr-fb");b=Hc(b,a,e);var f="https://www.facebook.com/sharer.php?u="+decodeURIComponent(b);Jc(e,G(function(){window.open(f);Ic(d,c,a,F.SHARE.FACEBOOK)}))};
function Jc(a,b){OBR.b.aa(a,"data-is-bound")||(a.addEventListener("click",b),OBR.b.Pa(a,"data-is-bound",1))}function Cc(a,b){return function(){OBR.b.$b(a.previousSibling);OBR.b.P(b,"ob-icon-on");OBR.b.P(a.parentElement.querySelector(".ob-intr-share-menu"),"ob-intr-on");OBR.b.P(a.querySelector(".ob-like-menu"),"ob-intr-on")}}function Dc(a){if(a&&a.insertAdjacentHTML)return a.insertAdjacentHTML("beforebegin",'<div class="ob-intr-overlay"></div>'),a.previousSibling}
function zc(a){Kc(a);var b=a.c.querySelector("a.ob-btn-stash"),c=a.c.querySelector(".ob-intr-stash");b.addEventListener("click",G(function(){OBR.b.sb(b,"ob-btn-stash-close");Lc(a,c)}))}
function Kc(a){var b='<div class="ob-intr-stash">\n        <a href="#" class="ob-btn-stash" title="Open/Hide stashed recommendations"><span class="ob-stash-count">'+L.Mg().order.length+'</span></a>\n        <div class="ob-stash-content" style="display:none;">\n          <span class="ob-stash-head">Your saved stories</span>\n          <div class="ob-intr-stash-scroll"></div>\n        </div>\n      </div>',c=a.c.querySelector(".ob-widget-items-container");c.insertAdjacentHTML("beforebegin",b);a.s=c.parentElement.querySelector(".ob-stash-count");
OBR.ef=OBR.ef||new M}function Lc(a,b){Mc(a).then(function(){a.m||(a.m=new OBR.Rf(b,L));a.m.toggle()})}function Mc(a){var b=new OBR.Promise;OBR.Rf?setTimeout(function(){b.resolve()},0):OBR.g.F(OBR.g.j.Of,function(){b.resolve()},a);return b}OBR.vb=OBR.vb||P;var Q={Ad:function(a){OBR.i.log("[WARNING] "+a)},error:function(a){OBR.i.log("[ERROR] "+a)},log:function(a){OBR.i.log(a)}};function R(a){var b=document.createElement("div");b.innerHTML=a;return b.firstChild}function Nc(a,b){var c=document.createDocumentFragment();b.forEach(function(a){return c.appendChild(a)});S.w(a).parentNode.appendChild(c)}
function Oc(a){S.J(".ob_sf_loader {margin: 25px auto 20px; width: 70px; text-align: center;} .ob_sf_loader > div {width: 18px; height: 18px; background-color: #333; border-radius: 100%; display: inline-block;  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both; animation: sk-bouncedelay 1.4s infinite ease-in-out both; }  .ob_sf_loader .bounce1 { -webkit-animation-delay: -0.32s;  animation-delay: -0.32s;  } .ob_sf_loader .bounce2 { -webkit-animation-delay: -0.16s;  animation-delay: -0.16s; }  @-webkit-keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0) } 40% { -webkit-transform: scale(1.0) }  }  @keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 40% { -webkit-transform: scale(1.0);  transform: scale(1.0);  }  }");var b=
R('<div class="ob_sf_loader">\n                      <div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>\n                     </div>\n                    ');a.appendChild(b)}function Pc(){var a=document.querySelector(".ob_sf_loader");a&&null!==a.parentNode&&a.parentNode.removeChild(a)};var Qc=OBR.Ta?OBR.Ta.Om:{},S={cp:function(a,b,c){var d=a.ca();a=d.B;var e=d.Ws;b=OBR.Jc.yg({permalink:b,widgetId:d.nf,feedFatherIdx:c,idx:a});b.setData(e);b.Zl(c);b.fm();return OBR.u[a]=b},zp:function(a,b){OBR.controller.Dj(a,b)},Gq:function(a){OBR.controller.nk(a)},jo:function(a){OBR.controller.Ya(a)},Pe:function(a){OBR.controller.Pe(a)},ud:function(a){OBR.controller.ud(a)},createElement:function(a,b,c,d){return OBR.b.createElement(a,b,c,d)},J:function(a){OBR.b.J(a)},w:function(a){return OBR.b.w(a)},
rc:function(a){if(a=OBR.u[a])return a.h("abTestVal",null)},Y:function(a,b){return OBR.b.Y(a,b)},Ua:function(a){return OBR.u[a]},jc:function(a){return OBR.b.la(a)},ya:function(a){return OBR.b.ya(a,null)},Qp:function(){return OBR.controller},mq:function(){return OBR.b.Lh()},ba:function(){return OBR.f},zq:function(){return OBR.O.Ca()},ze:function(){return"true"===OBR.Xa.ze()},am:function(a){OBR.Ja.ge=a},Ah:function(a,b){(new OBR.IntersectionObserver({element:a,callback:b,threshold:[0],unobserve:!0,callbackParams:[a.getAttribute("id").substr(16)]})).observe()},
aq:function(){return OBR.u.length-1},F:function(a,b){OBR.g.F(a,b)},Qq:function(a){if(!OBR.Lg){var b=R('<div class="ob-intr-toast" />');S.w(a).parentNode.appendChild(b);OBR.Lg=new Qc}},eh:function(a){OBR.vb=OBR.vb||P;OBR.vb.km();return new P(a)}};function Rc(){this.className="ob-smartfeed-adjoker";this.hc={};this.i=Q}
Rc.prototype.create=function(a){this.hc=a=a.hc;if(a.ic)switch(a.ic.toLowerCase()){case "dfp":return Sc(this);case "adsense":a:{try{var b=this.hc,c=b.sa,d=b.hg,e=b.mg,f="ad-unit-/"+c,g=S.createElement("div",f,null,{"data-card-idx":c,"data-feed-father-idx":b.ob}),h=S.createElement("script",null,null,{src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",async:"true"}),k=S.createElement("ins",null,"display:inline-block;width:100%;height:200px",{"class":this.className+" adsbygoogle","data-ad-client":d,
"data-ad-slot":e}),l=S.createElement("script",null,null,null);l.innerText="googletag.cmd.push(function() {googletag.display('"+f+"');})";g.appendChild(h);g.appendChild(k);g.appendChild(l);var m=g;break a}catch(r){this.i.error(r)}m=void 0}return m;case "pb":a:{h=this.hc;m=h.sa;b=h.ob;c=h.lg;d=h.Ud;e=h.ic;g=h.Vd;h=h.Td;try{var n="thirdPartyType="+e+"&thirdPartyId="+c+"&adPath="+d+"&width="+g+"&height="+h+"&refferer="+window.location.host,p=S.createElement("div",null,"position: relative; height: 120vw; margin: auto; max-width: 640px; max-height: 499px; display: none",
{"class":this.className,"data-card-idx":m,"data-feed-father-idx":b}),q=S.createElement("iframe",null,"position: absolute; top: 0; left : 0; height: 100%; width: 100%; border: 0;",{src:OBR.f.T+"widgets.outbrain.com/nanoWidget/externals/ob3rdPFrame/ob3rdPFrame.htm?"+n});Tc(p);p.appendChild(q);f=p;break a}catch(r){this.i.error(r)}f=void 0}return f;default:return a?this.i.error("adJoker type is of unknown type: "+a.ic):this.i.error("adJoker information object is "+a),Uc()}this.i.Ad("adJoker could not be created "+
a);return Uc()};function Uc(){return R('<div class="ob-no-joker-card"></div>')}
function Sc(a){var b=a.hc,c=b.sa,d=b.ob,e=b.Ud,f=b.kg,g=b.Vd,h=b.Td,k=b.jg;b=b.ig;a.Kb=new OBR.Kb(S.Ua(d));try{var l={"class":a.className,"data-card-idx":c,"data-feed-father-idx":d};(c=k||b?(k?"width:"+k+"px;":"")+(b?"height:"+b+"px;":"")+"display:none;":null)&&(l.style=c);var m=S.createElement("div",null,null,l),n=S.createElement("script",null,null,{src:"//securepubads.g.doubleclick.net/static/glade.js",async:"true"}),p=S.createElement("div",null,"display: none;",{"data-glade":"","data-ad-unit-path":e,
"data-json":f||"",width:g,height:h});m.appendChild(p);m.appendChild(n);a.Kb.Dp();p.addEventListener("gladeAdFetched",function(b){(b.detail||{empty:!0}).empty?(a.Kb.xp(),a.i.error("createDFPAd failed - got an empty ad (event.detail.empty === true); check the ad settings"),p.style.display="none",m.style.display="none"):(p.style.display="block",m.style.display="block",a.Kb.Ep())});return m}catch(q){a.i.error(q),a.Kb.yp()}}
function Tc(a){var b=window.addEventListener?"addEventListener":"attachEvent";(0,window[b])("attachEvent"===b?"onmessage":"message",function(b){var c=b.message?"message":"data",e=b[c].message||b[c];"ob-pb-ad-loaded"===e?a.style.display="block":"ob-pb-ad-after-render"===e&&(a.style.height=b[c].data+"px")},!1)}var Vc=new Rc;function Wc(a){var b=a.Fb,c=a.nf,d=a.B,e=a.sa,f=a.ob,g=a.iv,h=a.ar,k=a.br,l=a.Pn,m=a.Zu,n=a.mb;a=a.Ke;var p=[];k&&p.push("data-ob-installation-type="+k);m&&p.push("data-ob-user-id="+m);l&&p.push("data-ob-app-ver="+l);h&&p.push("data-ob-installation-key="+h);return R('<div class="OUTBRAIN" data-src='+b+" data-widget-id="+c+" data-card-idx="+e+" data-feed-father-idx="+f+' \n                            data-ob-mark="true" data-browser='+n+" data-os="+a+" data-dynload data-idx="+d+' id="outbrain_widget_'+
d+'" '+p.join(" ")+">\n                        "+g+"\n                      </div>\n                    ")};function Xc(){}function Yc(a){if(!a)Q.error("JokerCard failed - '"+a.selector+"'");else if(a&&a.selector){var b=document.querySelector(a.selector);b?b.style.display="none":Q.error("JokerCard failed joker selector was not found on page - selector: '"+a.selector+"'")}}
Xc.prototype.create=function(a){var b=a.De;a=S.createElement("div",null,null,{"class":"ob-smartfeed-joker","data-card-idx":a.sa,"data-feed-father-idx":a.ob});b=b.selector;var c=document.querySelector(b);if(null!==c)return c.parentNode.removeChild(c),c.style.display="block",a.appendChild(c),a;Q.error("joker failed - '"+b+"'");return R('<div class="ob-no-joker-card"></div>')};var Zc=new Xc;function $c(){}$c.prototype.create=function(a){var b=a;a=b.sa;b=b.ob;try{return S.createElement("div",null,null,{"class":"ob-smartfeed-joker","data-card-idx":a,"data-feed-father-idx":b,"data-joker-placeholder":""})}catch(c){return Q.error("joker placeholder failed. error: "+c),R('<div class="ob-no-joker-card"></div>')}};var ad=new $c;var bd=OBR.Ta?OBR.Ta.Lc:{},cd=OBR.Ta?OBR.Ta.yi:{};
function dd(a,b){var c=T.ea(),d=a.ca(),e=d.Ob;d=d.sa;var f=S.Ua(b);switch(e){case "widget":var g=S.ba();e=g.mb;g=g.Ke;a=a.ca();return Wc({Fb:c,nf:a.nf,ob:b,B:a.B,sa:d,iv:a.Mq,ar:f.tc(),br:f.bd(),Pn:f.Zc(),Zu:f.pc(),mb:e,Ke:g});case "joker":return c=a.ca().De,Yc(c),Zc.create({Ob:e,sa:d,ob:b,De:c});case "adJoker":return c=a.ca(),Vc.create({hc:{sa:d,ob:b,ic:c.ic,lg:c.lg,Vd:c.Vd,Td:c.Td,Ud:c.Ud,kg:c.kg,hg:c.hg,mg:c.mg,jg:c.jg,ig:c.ig}});case "followJoker":if(bd.create){var h=bd.create();cd.Pp().then(function(a){bd.mt(a,
f,h)});return h}OBR.i.log("StreamFeed - followJoker not supported.");return document.createElement("div");case "placeholderJoker":return c=a.ca().kc,ad.create({Ob:e,sa:d,ob:b,Pv:c})}};function ed(a,b,c){var d=S;this.N=d;this.Cc=this.N.ba().ss+"/Multivac/api/get?";this.o=d.Ua(a);this.fe=a;this.nd=b;this.Or=c;this.Fb=this.o.ea()}function U(a,b,c){fd(a,b&&"undefined"!==typeof c&&null!=c&&""!==c?b+"="+c:"")}function fd(a,b){if(b){var c=a.Cc;c.endsWith("&")||c.endsWith("?")?a.Cc+=b:a.Cc+="&"+b}};function gd(a,b,c){var d=parseInt(performance.now());OBR.ra.bs(a.D(),a.C(),d);return new Promise(function(e,f){var g=document.createElement("script");g.src=b;g.onerror=function(a){f(a);OBR.b.$b(g)};OBR.extern.returnedVacData=function(b){b.un={kb:a.D(),B:c,timestamp:d};OBR.ra.ks(a.D(),a.C(),d);e(b);OBR.b.$b(g)};document.body.appendChild(g)})};function hd(a){this.response=a;this.c=a.cards.map(function(a){switch(a.cardType){case "widget":return new id(a);case "joker":return new jd(a);case "adJoker":return new kd(a);case "followJoker":return new jd(a);case "placeholderJoker":return new ld(a);default:Q.error('card type "'+a.cardType+'" is not supported')}})}
hd.prototype.ca=function(){var a=this.c.filter(function(a){return"widget"===a.ca().Ob});return{fe:this.response.feedIdx,dh:this.response.hasMore,sg:this.c,fv:a,Nr:this.c[this.c.length-1],ro:[a[0],a[a.length-1]]}};function id(a){this.c=a}id.prototype.ca=function(){return{Ob:this.c.cardType,Ws:this.c,Mq:this.c.response.html,nf:this.c.response.request.widgetJsId,B:this.c.response.request.idx,sa:this.c.response.request.fCard}};function ld(a){this.c=a}
ld.prototype.ca=function(){return{Ob:this.c.cardType,De:this.c.response,sa:this.c.fCard,kc:this.c.response.callback}};function jd(a){this.c=a}jd.prototype.ca=function(){return{Ob:this.c.cardType,De:this.c.response,sa:this.c.fCard}};function kd(a){this.c=a}
kd.prototype.ca=function(){return{Ob:this.c.cardType,lg:this.c.response.adId,Vd:this.c.response.adWidth,Td:this.c.response.adHeight,Ud:this.c.response.adPath,kg:this.c.response.adData,hg:this.c.response.adClient,mg:this.c.response.adSlot,ic:this.c.response.adType,jg:this.c.response.adContainerWidth,ig:this.c.response.adContainerHeight,sa:this.c.fCard}};function md(){this.c={};this.A=Promise.resolve();this.Fb=null;this.H=!0;this.m={Jj:!1,Fg:!1};this.s=!1}function nd(a,b,c){var d=T;c=c.sa;var e=d.c[b].Vc;d.c[b]={nd:c?c:0,dh:a,Vc:c?[].concat(Ub(e),[c]):e}}function od(a,b){var c=T;c.c[a].Vc=c.c[a].Vc.filter(function(a){return a!=b})}md.prototype.ea=function(){return this.Fb};md.prototype.af=function(a){this.Fb=a};var T=new md;function pd(){}
function qd(a,b,c,d,e){d=void 0===d?null:d;e=void 0===e?!0:e;var f=T.c[b]||{},g=f.nd;!1===f.dh?(Q.Ad("fetchNextStream was triggered with hasMore=false. aborting..."),rd(d,"grey")):!e||-1<T.c[b].Vc.indexOf(c)?(rd(d,"green"),OBR.ra.gs(S.Ua(b).D(),g),od(b,c),Oc(S.w(b).parentNode),c=T.A.then(function(){var a=b,c=g,d=S.aq();a=void 0===a?0:a;c=void 0===c?0:c;var e=S.Ua(a);a=new ed(a,c,void 0===d?0:d);a.Fb&&a.Fb.startsWith("http")||Q.error("could not get permalink url");U(a,"url",a.N.jc(a.Fb));U(a,"settings",
!0);U(a,"recs",!0);U(a,"widgetJSId",a.o.D());U(a,"key",a.o.tc()?a.o.tc():a.N.ba().yl);U(a,"version",a.N.ba().ec);U(a,"apv",a.N.ba().Rc);U(a,"sig",a.N.ba().ni);U(a,"format",a.o.Uj());U(a,"rand",a.N.mq());(d=a.N.ya("OB-USER-TOKEN"))&&U(a,"lsd",a.N.jc(d));(d=a.N.ya("OB-USER-TOKEN-CREATION"))&&U(a,"lsdt",a.N.jc(d));(d=a.N.ba().Le)&&U(a,"osLang",d);a.N.ba().gg&&(d=a.N.Y("obAbtest",""),U(a,"obAbtest",d));(d=!0===a.N.ba().rm||!0===a.o.$g())&&U(a,"testMode",d);U(a,"videoId",a.o.bh());U(a,"extid",a.o.ke()||
a.N.ba().Cg?a.o.ke():"");(!0===a.o.Mk()||a.N.ba().il)&&U(a,"rtbEnabled",!0);U(a,"va",!0===a.o.Rk()?!0:null);(d=a.N.ba().zg)&&U(a,"contxtKV",a.N.jc(d));U(a,"cnsnt",a.N.Qp().Pj());U(a,"cmpStat",a.N.ba().Ae?1:0);U(a,"num",null!==a.o.qe()?a.o.qe():null);d=a.o.dk();null!==d&&"string"===typeof d&&0<d.length?U(a,"srcUrl",a.N.jc(d)):0<a.N.ba().cf.length&&U(a,"srcUrl",a.N.ba().cf);d=a.N.ba().Qh;U(a,"scrW",d.Cm);U(a,"scrH",d.lk);d=a.N.ba();fd(a,""!==d.yd?"t="+d.yd:"t");(d=a.N.ba().Dg)&&U(a,"xp",a.N.jc(d));
d=a.N.zq();U(a,"winW",d.width);U(a,"winH",d.height);U(a,"adblck",a.N.ze());(d=a.N.ba().Tc)&&U(a,"clss",d);(d="https://"===a.N.ba().T)&&U(a,"secured",d);U(a,"feedIdx",a.fe);U(a,"lastIdx",a.Or);U(a,"lastCardIdx",a.nd);a.N.ba().gl.includes("true")&&U(a,"obDraft",!0);a.N.ba().oj.includes("true")&&U(a,"crDraft",!0);(d=a.N.rc(a.fe))&&U(a,"fAB",d);OBR.f.Bk&&U(a,"wrDebug","true");U(a,"app_ver",a.o.Zc());U(a,"api_user_id",a.o.pc());U(a,"installationType",a.o.bd());(d=a.N.ba().Gl)&&U(a,"ref",d);return gd(e,
a.Cc,c)}),T.A=c,S.am(c),c.then(a.Fs.bind(a)).catch(function(a){OBR.error(a);Q.error("failed on Multivac response on feedIdx:"+b+". Reason: "+a.toString());Pc();a=Promise.resolve();T.A=a;S.am(a)})):(Q.log("fetchNextStream was triggered but chunk is not observered. aborting..."),rd(d,"red"))}function rd(a,b){OBR.f.Ie&&a&&(a.style.outline="3px dashed "+b)}t=pd.prototype;
t.Fs=function(a){var b=this,c=a.un;OBR.ra.Ju(c.kb,c.B,c.timestamp);var d=!T.m.feedManualChunkFetch,e=new hd(a),f=e.ca();a=f.sg;var g=f.fe,h=f.fv,k=f.Nr;f=f.ro;e=JSON.parse(e.ca().dh);var l=sd(this,a,g);Pc();Nc(g,l);td(l);ud(h,g);this.Ya(a,h,g);nd(e,g,k.ca());d&&e&&f.forEach(function(a){return b.Ah(g,a.ca())});T.H?(T.H=!1,OBR.ra.js(c.kb,c.B,c.timestamp)):OBR.ra.ns(c.kb,c.B,c.timestamp)};t.Ya=function(a,b,c){vd(this,b);T.m.followTopic&&wd(b,c);xd(this,b);yd(a)};
function yd(a){a.filter(function(a){return a.ca().kc}).map(function(a){try{var b=a.ca().sa,d=a.ca().kc.split(".").reduce(function(a,b){return a[b]},window),e=document.querySelector("div[data-card-idx='"+b+"']");d&&e&&setTimeout(d.bind(null,e),0)}catch(f){Q.error("fail to run card callback, card Json: "+a.ca()+" error: "+f)}})}
function vd(a,b){b.map(function(a){return S.Ua(a.ca().B)}).filter(a.Hk,a).forEach(function(b){if(a.cb){var c=b.C(),e=OBR.b.w(c);OBR.b.J('[data-idx="'+c+'"] .'+b.D()+".ob-widget .ob-dynamic-rec-link::after{display:none !important;}");e&&e.querySelectorAll(".ob-rec-interaction").forEach(function(a){return a.remove()})}else new OBR.vb(b)})}function xd(a,b){b.map(function(a){return S.Ua(a.ca().B)}).forEach(function(b){return zd(a,b)})}
function ud(a,b){a.forEach(function(a){var c=a.ca().B;a=S.cp(a,T.ea(),b);S.zp(a,c);S.Pe(a);S.ud(a);S.Gq(a);S.jo(c)})}function td(a){if(OBR.f.Ie){var b=OBR.b.oq();a.forEach(function(a){return a.style.boxShadow="-2px 4px 10px 2px "+b})}}t.Ah=function(a,b){var c=this,d=(T.c[a]||{}).nd,e=S.w(b.B);rd(e,"yellow");S.Ah(e,function(){return qd(c,a,d,e)})};function sd(a,b,c){return b.map(function(a){return dd(a,c)},a)}t.Hk=function(a){var b=a.l("interactionLayerEnabled",!1);return!0!==a.h("oo",!1)&&b};
t.eh=function(a){this.Hk(a)&&S.eh(a)};function zd(a,b){b.l("recMode","odb_dynamic").match(/embedded-article/)&&(OBR.b.w(b.C()).querySelectorAll(".ob-dynamic-rec-link").forEach(function(a){return OBR.b.K(a,"ob-embedded-article")}),S.F(OBR.g.j.Dd,function(){a.ha=new OBR.uf(b);a.ha.v()}))}
function wd(a,b){var c=OBR.Ta.yi;c&&!T.s&&(document.querySelector(".ob-smartfeed-follow-joker")?(a=S.Ua(b),(b=a.l("recReasonType"))&&c.Ej(a,b),T.s=!0):a.forEach(function(a){var b=a.ca().B;a=OBR.b.w(b);b=S.Ua(b);a&&a.querySelector(".ob-follow-status")&&((a=b.l("recReasonType"))&&!T.s&&c.Ej(b,a),T.s=!0)}))}
t.np=function(a){var b;void 0===a?b=Math.min.apply(Math,Ub(Object.keys(T.c))):b=a;a=b;if(S.Ua(a)){if(T.m.feedManualChunkFetch)return qd(this,a,-1,null,!1),!0;Q.Ad("externalChunkLoad called but feed is not set for external chunk fetching");return!1}Q.Ad("externalChunkLoad called but feedIdx="+a+" not found");return!1};var V=new pd;OBR.gf={init:function(a){var b=a.wl,c=void 0===a.Ek?!1:a.Ek;a=void 0===a.Fg?!1:a.Fg;if(S.w(b.C())){var d=OBR.b.w(b.C());V.cb=1===d.children.length&&0===d.children[0].children.length;d=S.w(b.C());var e=R('<div class="ob-smartfeed-wrapper">\n                        '+d.outerHTML+"\n                      </div>\n                    ");d.parentNode.replaceChild(e,d);b.l("hideHeaders",!1)&&S.J(".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child) .ob-widget-header {display:none;}");S.J(".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child) .ob_what {display:none;} .ob-smartfeed-joker {box-shadow: 0 2px 2px rgba(0,0,0,.28); margin-bottom: 20px; padding-bottom: 4px; padding-top: 0; background-color: #fff;}");
OBR.Ka.Ze(b);OBR.fc.Mb(b);OBR.Jd.Qc(b);OBR.bf&&b.Ok()&&OBR.bf.v(b);OBR.Ne&&b.Lk()&&OBR.Ne.v(b);T.m.followTopic=c;T.m.feedManualChunkFetch=a;c=b.C();T.c[c]={nd:0,Vc:[0]};T.af(S.Ua(c).ea());qd(V,c,0);V.cb||V.eh(b);T.m.followTopic&&S.Qq(c);zd(V,b)}else Q.Ad("Container for widgetId="+b.D()+" doesn't exist on the DOM. Feed cannot be created.")},externalChunkLoad:function(a){return V.np(a)}};OBR.g.M(OBR.g.j.Md);}).call(window);
