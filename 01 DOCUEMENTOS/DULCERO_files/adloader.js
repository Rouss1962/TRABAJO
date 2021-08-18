/* Copyright (C) 2011 Microsoft Corporation */var $=function(a){return document.getElementById(a)},_stringPrototype=String.prototype;_stringPrototype.startsWith=function $String$startsWith(a){if(!a)return false;return this.substr(0,a.length)==a};_stringPrototype.endsWith=function $String$endsWidth(a){if(!a)return false;return this.substr(this.length-a.length)==a};var $Request=new function(){var a=this;a.qp=function(){var c={},d=document.location.search.substring(1).split("&");for(var b=0;b<d.length;++b){var a=d[b].split("=");if(a[0])c[decodeURIComponent(a[0])]=a[1]?decodeURIComponent(a[1]):""}return c}();a.hashString=function(){var b=window.location.href,a=b.indexOf("#");return a!=-1?b.substring(a+1):""};a.hash=function(){var e=a.hashString(),c=e.split(";"),d={};for(var f in c){var b=c[f].split(":");if(b[0])d[decodeURIComponent(b[0])]=b[1]?decodeURIComponent(b[1]):""}return d}();this.isSSL=function(){return document.location.protocol=="https:"};a.isINTAd=function(){return $Request.hash["adenv"]&&$Request.hash["adenv"]=="int"&&document.domain.endsWith("-int.com")!=-1}},$Event=new function(){this.addEvent=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,false);else a.attachEvent("on"+b,c)}},$AdServeMsngr=new function(){var a=this,d=0,c=[],b=false;a.toFrame=function(b,c,d,a){f(b,c,d,"htof",a)};a.toHost=function(b,c,a){f(null,b,c,"ftoh",a)};function f(f,i,d,g,c){if(g=="htof"&&!f||!c||!i)return;d=d?a.serialize(d,"##","$$"):"";var h=a.serialize({frameName:f,message:d,fn:i},":",";");if(window["postMessage"]){var j=g=="htof"?window.frames[f]:window.parent;if(j)j.postMessage(h,"*")}else{var b=c.split("/");if(g=="ftoh"&&!(b.length>=3&&(b[0]=="http:"||b[0]=="https:")&&(b[2].indexOf(".live.com")!=-1||b[2].indexOf(".live-int.com")!=-1)))return;e(c+(c.indexOf("?")!=-1?"&":"?")+"c={cachebrk}"+"#"+h)}}function e(f){if(!b){b=true;var i="adNegFrm";d=d==0?1:0;f=f.replace("{cachebrk}",d);if(!window.frames[i]){var e=document.createElement("iframe");e.id=e.name=i;h(e,"load",g);e.src=f;var j="adservtmp",a=$(j);if(!a){a=document.createElement("div");a.setAttribute("id",j);a.style.display="none";document.body.appendChild(a)}a.appendChild(e)}else window.frames[i].location.replace(f)}else c.push(f)}function g(){b=false;if(c.length>0)e(c.shift())}a.receiveMessage=function(k){var f=k||event;if(!f||!f.data||!f.origin)return;var d=f.origin,c=null;if(window["$AdConfig"]&&(d.endsWith(".wlxrs.com")||d.endsWith(".wlxrs-int.com")||d.endsWith(".shared-dev.live-int.com")))c="ftoh";else if(window["$WLXRmAd"]&&(d.endsWith(".live.com")||d.endsWith(".live-int.com")))c="htof";if(!c)return;var b=a.deSerialize(f.data,":",";");if(!b||!b.fn)return;if(c=="htof"){if(!(b.fn=="$AdServe.refreshAd"||b.fn=="$AdServe.getRadIds"))return}else if(c=="ftoh"){if(!(b.fn=="$Acb.setRadIds"||b.fn=="$RmAdHandler.processMsg"||b.fn=="$RmAdHandler.processMsgFromHeader"))return}else return;var g=window;if(window["postMessage"])g=window;else{var h=b.frameName;if(c=="htof"&&h&&(h.endsWith("_frm")||h.endsWith("_hfrm")))g=window.parent.frames[h];else if(c=="ftoh")g=window.parent.parent}var j=b.fn.split("."),e=null;for(var i=0;i<j.length;++i){e=e?e[j[i]]:g[j[i]];if(!e)return}e(b.message?a.deSerialize(b.message,"##","$$"):null)};a.serialize=function(a,e,d){if(!a)return "";var c=[];if(typeof a=="object")for(var b in a)if(a[b]&&(typeof a[b]==="string"||typeof a[b]==="number"||typeof a[b]==="boolean"))c.push([encodeURIComponent(b),encodeURIComponent(a[b])].join(e||":"));return c.join(d||";")};a.deSerialize=function(e,g,f){var c={};if(!e)return c;var d=e.split(f||";");for(var b=0;b<d.length;++b){var a=d[b].split(g||":");if(a[0])c[decodeURIComponent(a[0])]=a[1]?decodeURIComponent(a[1]):""}return c};function h(a,b,c){if(a.addEventListener)a.addEventListener(b,c,false);else a.attachEvent("on"+b,c)}};window.$AdServe={};window.$WLXRmAd={};$Event.addEvent(window,"message",$AdServeMsngr.receiveMessage);var $WlxDapUtil=new function(){function a(){var c=["","a.","b."],b=0;try{var a=$Request.hash["adcntr"];if(a)b=isNaN(parseInt(a))?0:parseInt(a)%3}catch(d){}return c[b]}this.getRADUrl=function(){var c="http://{SUBDMN}rad.msn{INT}.com/ADSAdClient31.dll?GetSAd=",b="https://rad.msn{INT}.com/adsAdClient31.dll?GetSad=",d=$Request.isSSL()?b:c;return d.replace("{INT}",$Request.isINTAd()?"-int":"").replace("{SUBDMN}",a()||"")};this.getRadIds=function(){var d={adid:"",pid:"",targetid:"",url:""};try{var e=document.getElementById("wlxad").childNodes,b,d,g,h=["iframe","embed"],c,f;for(var a=0;a<e.length;a++)if((f=e[a].id)&&f.indexOf("dapIfM")!=-1)if(f.indexOf("Child")!=-1)g=e[a];else b=e[a];if(b){if(b.contentWindow["getRADIds"])c=b.contentWindow.getRADIds();b=g||b;for(var a=0;a<h.length;a++)if(innerAd=b.contentWindow.document.getElementsByTagName(h[a])[0]){d["url"]=innerAd.getAttribute("src")||"";break}}if(c){d.adid=c.adid;d.pid=c.pid;d.targetid=c.targetid}}catch(i){}return d}};$AdServe=new function(){var d=this,a={};this.canRenderAd=function(){var a=document.domain;return a.endsWith(".wlxrs.com")||a.endsWith(".wlxrs-int.com")||a.endsWith(".shared-dev.live-int.com")};this.loadAd=function(){if(!d.canRenderAd())return;var b=$Request.hash;if(b&&b.hnegurl&&b.hstkn&&b.pg&&b.pgqp&&!isNaN(parseInt(b.wt))&&!isNaN(parseInt(b.ht))&&b.divid){a.pg=b.pg;a.hostAdDivId=b.divid;a.hstkn=b.hstkn;a.hnegurl=b.hnegurl;a.wt=b.wt;a.ht=b.ht;c(b.pgqp,a.wt,a.ht,true)}};this.refreshAd=function(b){if(!d.canRenderAd())return;if(b.pgqp&&a.wt&&a.ht){$WLXRmAd.resetState();c(b.pgqp,a.wt,a.ht,false)}};function c(f,c,b,g){if(f&&c&&b){var a=$("wlxad").style;a.width=c+"px";a.height=b+"px";a.padding=a.margin=0+"px";if(g&&$Request.qp["srmad"]&&($Request.qp["srmad"]=="1"||$Request.qp["srmad"]=="2")&&$Request.isINTAd()){var d=document.createElement("script");d.setAttribute("src","sample/expad.js");d.setAttribute("type","text/javascript");document.getElementsByTagName("head")[0].appendChild(d)}else{dapMgr.enableACB("wlxad",false);dapMgr.renderAd("wlxad",e(f),c,b)}}}function e(c){try{if(c&&c.startsWith("&")){var e=c.substring(1).split("&"),d=[];for(var f in e){var a=e[f].split("=");if(a.length==2&&a[0]&&a[1])d.push([b(a[0]),b(a[1])].join("="))}return "&"+d.join("&")}}catch(g){return ""}}function b(a){return encodeURIComponent(decodeURIComponent(a)).replace(/'/g,"%27")}this.getRadIds=function(){var b=$WlxDapUtil.getRadIds();if(b&&b.adid){b.pg=a.pg;b.hstkn=a.hstkn;b.hostAdDivId=a.hostAdDivId;$AdServeMsngr.toHost("$Acb.setRadIds",b,a.hnegurl)}};this.getAdParams=function(){return a}};$WLXRmAd=new function(){var d=false,b={},k=0,j=0,f=0,i=0,g=0,h=0,c;this.init=function(b){if(!$AdServe.canRenderAd())return;if(b&&!d){k=a(b.width);j=a(b.height);f=a(b.offsetLeft);i=a(b.offsetRight);g=a(b.offsetTop);h=a(b.offsetBottom);$("wlxad").style.marginLeft=f+"px";$("wlxad").style.marginTop=g+"px";e({act:"init",ol:f,or:i,ot:g,ob:h});d=true}};this.expand=function(){if(d)e({act:"exp"})};this.collapse=function(){if(d)e({act:"col"})};this.createHeader=function(a){if(a&&typeof a=="function")c=a;e({act:"createH"})};this.getHeaderFrame=function(){if(b.hostAdDivId){var c=parent.frames[b.hostAdDivId+"_hfrm"];if(c&&c.document)return c;for(var a=0;a<15;++a)try{if(parent.frames[a].$WLXRmAd.initHeader)return parent.frames[a]}catch(d){}}return null};this.headerFrameReady=function(){try{if(c){c();c=null}}catch(a){}};this.loadAdParams=function(){b=$AdServe.getAdParams()};this.resetState=function(){d=false;k=0,j=0,f=0,i=0,g=0,h=0;c=null};function e(a){if(a&&a.act){a.adDivId=b.hostAdDivId;a.hstkn=b.hstkn;$AdServeMsngr.toHost("$RmAdHandler.processMsg",a,b.hnegurl)}}function a(b){var a=!isNaN(parseInt(b))?parseInt(b):0;return a>=0?a:0}};_dapUtilClass=function(){var a=navigator.userAgent.toLowerCase(),c=navigator.appVersion.toLowerCase();this.minorVer=parseFloat(c);this.majorVer=parseInt(this.minorVer);this.is_opera=a.indexOf("opera")!=-1;this.is_mac=a.indexOf("mac")!=-1;this.is_ff=a.indexOf("firefox")!=-1;var b=c.indexOf("msie");if(b!=-1){if(this.is_mac){var b=a.indexOf("msie");this.minorVer=parseFloat(a.substring(b+5,a.indexOf(";",b)))}else this.minorVer=parseFloat(c.substring(b+5,c.indexOf(";",b)));this.majorVer=parseInt(this.minorVer)}this.is_ie=b!=-1&&!this.is_opera;this.is_ie3=this.is_ie&&this.majorVer<4;this.is_ie4=this.is_ie&&this.majorVer==4;this.is_ie4up=this.is_ie&&this.minorVer>=4;this.is_ie5=this.is_ie&&this.majorVer==5;this.is_ie5up=this.is_ie&&this.minorVer>=5;this.is_ie5_5=this.is_ie&&a.indexOf("msie 5.5")!=-1;this.is_ie5_5up=this.is_ie&&this.minorVer>=5.5;this.is_ie6=this.is_ie&&this.majorVer==6;this.is_ie6up=this.is_ie&&this.minorVer>=6;this.is_webtv=a.indexOf("webtv")!=-1;this.is_msn=c.indexOf("msn")>=0;this.is_win=a.indexOf("win")!=-1||a.indexOf("16bit")!=-1;this.is_mac=a.indexOf("mac")!=-1;if(this.is_mac)this.is_win=!this.is_mac;if(this.is_ff){this.ffPos=a.indexOf("firefox");if(a.length>this.ffPos+8)this.majorVer=parseInt(a.substring(this.ffPos+8));if(a.length>this.ffPos+10)this.minorVer=parseInt(a.substring(this.ffPos+10));this.is_ff1_5up=this.is_ff&&(this.majorVer>=1&&this.minorVer>=5||this.majorVer>=2);this.is_ff_closeIfrm=this.is_ff1_5up&&this.majorVer<3}this.getCurrentStyle=function(a){if(window.getComputedStyle)if(window.getComputedStyle(a,null))return window.getComputedStyle(a,null);else return document.defaultView.getComputedStyle(a,null);else return a.currentStyle}};var _dapUtils=new _dapUtilClass,adCont=[],dapAd={};dapAd=function(e,a,b,d,c){this.qs=e;this.divid=a;this.ifrmid=b;this.w=d;this.h=c;this.documentClosed=false;this.resizeCalled=false};var eventType=new function(){this.click=1},dapMgr=new function(){this.MAX_AD_NUM=100;this.MAX_ITR_FF=5;this.TIME_EACH_ITR=2e3;this.renderAd=function(b,f,e,d){var a=this.getAdItemIndex(b);if(a>-1){adCont[a].qs=f;adCont[a].divid=b;adCont[a].w=e;adCont[a].h=d}else{if(adCont.length<this.MAX_AD_NUM){var c=new dapAd(f,b,"dapIfM"+adCont.length,e,d);if(_dapUtils.is_ie5)adCont[adCont.length]=c;else adCont.push(c)}else return;a=adCont.length-1}this.displayAd(a)};this.enableACB=function(){};this.getAdItemIndex=function(b){var a;for(a=0;a<adCont.length;a++)if(adCont[a].divid==b)return a};this.displayAd=function(a){var g;if(typeof $WlxDapUtil!="undefined")g=$WlxDapUtil.getRADUrl();else if(typeof $AdConfig!="undefined")g=$AdConfig.sRADUrl;if(!g)return;var d=document.getElementById(adCont[a].divid);if(!d)return;if(!adCont[a].qs||adCont[a].qs.length==0)return;for(var h=d.childNodes.length-1;h>=0;h--){var b=d.childNodes[h];if(_dapUtils.is_ff1_5up&&b.id==adCont[a].ifrmid){if(b.contentDocument.body)while(b.contentDocument.body.firstChild)b.contentDocument.body.removeChild(b.contentDocument.body.firstChild);b.id=null;b.name=null;b.style.display="none";b=null}else{if(b.nodeName=="IFRAME"&&!_dapUtils.is_ie5_5&&!_dapUtils.is_ie6)b.contentWindow.document.location.replace("about:blank");d.removeChild(b);if(_dapUtils.is_ie5up)b.removeNode(true);else b=null}}var k=_dapUtils.getCurrentStyle(d);if(k){var j=k.display;if(j=="none"||j=="hidden")return}if((_dapUtils.is_ie5_5up||_dapUtils.is_ff1_5up)&&_dapUtils.is_win){var e=adCont[a].ifrmid,c=document.createElement("IFRAME");c.id=e;c.name=e;c.width=adCont[a].w;c.height=adCont[a].h;c.scrolling="no";c.frameBorder="0";c.allowTransparency=true;var l=this.getDapOutput(g+adCont[a].qs,e,a);if(_dapUtils.is_ie5_5up){c.src="javascript:void(document.write('"+l+"'));";d.insertBefore(c,d.firstChild)}else{c.src="about:blank";d.insertBefore(c,d.firstChild);c.contentDocument.write(l);c.contentDocument.onload=verifyDapResize(a);if(_dapUtils.is_ff_closeIfrm)window.setTimeout("checkIFrameClosed("+a+",1)",this.TIME_EACH_ITR);else c.contentDocument.close()}}else{var i=true;if(parent.frames){var e=adCont[a].ifrmid;d.innerHTML+='<iframe id="'+e+'" src="about:blank" width="'+adCont[a].w+'" height="'+adCont[a].h+'" frameborder="0" scrolling="no"></iframe>';var f;if(document.frames){if(document.frames[e])f=document.frames[e].document}else if(document.getElementById(e))f=document.getElementById(e).contentDocument;if(f){i=false;f.open("text/html","replace");f.write(this.getDapOutput(g+adCont[a].qs,e,a));if(_dapUtils.is_ff_closeIfrm)window.setTimeout("checkIFrameClosed("+a+",1)",this.TIME_EACH_ITR);else if(!_dapUtils.is_ie)f.close()}}if(i){document.write('<script src="'+g+adCont[a].qs+'" type="text/javascript" language="JavaScript"></scr'+"ipt>");adCont[a].ifrmid=null}}};this.getDapOutput=function(d,c,b){var a='<html><head><title>Advertisement</title></head><body id="'+c+'" leftmargin="0" topmargin="0" style="background-color:transparent"><scr'+'ipt type="text/javascript">var inDapIF=true; var inDapMgrIf=true;';if(document.domain&&location.hostname!=document.domain)a+='document.domain="'+document.domain+'";';if(_dapUtils.is_ff_closeIfrm)a+="var fnPtr=document.close;document.close=function(){parent.adCont["+b+"].documentClosed = true;document.close=fnPtr};";a+="</scr"+"ipt><scr"+'ipt type="text/javascript">function startTimer()'+'{if (event.srcElement.readyState == "complete") {parent.verifyDapResize('+b+');window.setTimeout("document.close();", 2000);}}</scr'+"ipt><scr"+'ipt type="text/javascript"  src="'+d+'" onreadystatechange="startTimer();"></scr'+"ipt></body></html>";return a};this.trackEvent=function(){var a;for(a=0,isRef=false;a<adCont.length;a++)if(adCont[a].ifrmid!=null)this.displayAd(a)}};function checkIFrameClosed(a,c){var b=document.getElementById(adCont[a].ifrmid);if(b){if(c>=dapMgr.MAX_ITR_FF&&!adCont[a].documentClosed)b.contentDocument.close();if(adCont[a].documentClosed)try{b.contentDocument.close()}catch(d){}else window.setTimeout("checkIFrameClosed("+a+","+(c+1)+")",dapMgr.TIME_EACH_ITR)}}function dap_Resize(a,c,b){document.getElementById(a).width=c;document.getElementById(a).height=b}function verifyDapResize(){}function acbAdResize(){}function initACB(){}function ShowAcb(){}function acbGetIdFrmIdStr(){}function dapExtractValue(){}