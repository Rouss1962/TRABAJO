String.format=function String$format(a){return String.prototype.format.apply(a,Array.prototype.slice.call(arguments,1))};String.prototype.isGuid=function String$isGuid(){return /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(this)};$Cookie.getCookieValues=function $Cookie$getCookieValues(a){var b=$Cookie.getCookie(a,true);return $Utility.deserialize(b,"&")};$Cookie.setCookieValues=function $Cookie$setCookieValues(c,b,e,a,f){a=a||App.config.cookieDomain;var d=$Utility.serialize(b,"&");$Cookie.setCookie(c,d,a,f,e,true)};$Cookie.getPermanentExpirationDate=function $Cookie$getPermanentExpirationDate(){var a=new Date;return new Date(a.getUTCFullYear()+1,a.getUTCMonth(),a.getUTCDay())};$Cookie.SessionCookie=undefined;$EmptyFunction=function(){};$CombineDelegate=function(b,c){var a=function g(){var c=a._delegates,d=c.length;for(var b=0;b<d;b++)c[b].apply(this,arguments)},e=b["__delegates"]!=null?b._delegates:[b],f=c["__delegates"]!=null?c._delegates:[c],d=[];d=d.concat(e,f);a._delegates=d;return a};$HmMenu={};$HmMenu.bindMaybeReset=function $HmMenu$bindMaybeReset(e,c,g,f,h){var d=getSrcElement(e);if(d){var a=$f.pn(d,"c_ml");if(a){var b=0;if(!a.isMenuBound)b=1;$menu.bind(e,c,0,1,0,0,c,0,0,b,g);a.isMenuBound=true;f(a);a.menu.addStateListener(function(){h(a)})}}};ExpandCollapse={};ExpandCollapse.initializeForStandaloneUi=function ExpandCollapse$initializeForStandaloneUi(){var a=$("folderList");if(a)a.attachEvent("onclick",function(){ExpandCollapse.onClick(App.config.excoCookieValFl)});var b=$("quickViewList");if(b)b.attachEvent("onclick",function(){ExpandCollapse.onClick(App.config.excoCookieValQv)})};ExpandCollapse.onClick=function ExpandCollapse$onClick(a){ExpandCollapse.handleClick(event.srcElement,a)};ExpandCollapse.handleClick=function ExpandCollapse$handleClick(e,d){var c=Control.getAncestorByAttr(e,"exco_hot");if(c){var a=Control.getAncestorByAttr(c,"exco_main");if(a){var b=$css.has(a,"exco_disabled");if(b)$css.remove(a,"exco_disabled");else $css.add(a,"exco_disabled");ExpandCollapse._updateCookie(d,!b);if(Page.getLayout().indexOf("Unmanaged")>=0&&UnmanagedFooter)UnmanagedFooter.resize()}}};ExpandCollapse._updateCookie=function ExpandCollapse$_updateCookie(b,d){var a=$Cookie.getCookieValues(App.config.pdCookie),c=d?"1":"0";if(a[b]!=c){a[b]=c;$Cookie.setCookieValues(App.config.pdCookie,a,$Cookie.getPermanentExpirationDate())}};$MenuCog={};$MenuCog.onBindOpen=function $MenuCog$onBindOpen(a){$MenuCog.changeCogClass(a,true)};$MenuCog.onClose=function $MenuCog$onClose(a){if(a&&a.menu&&!a.menu.isOpen())$MenuCog.changeCogClass(a,false)};$MenuCog.changeCogClass=function $MenuCog$changeCogClass(d,c){var b=$getDescendantByClass(d,"img","MenuCog");if(b)c?$css.add(b,"CogMenuOn"):$css.has(b,"CogMenuOn")&&$css.remove(b,"CogMenuOn");var a=$getNearestParentByClass(d,"lnav_topItem");if(a)c?$css.add(a,"MenuOn"):$css.has(a,"MenuOn")&&$css.remove(a,"MenuOn")};$Network.registerFpp("HM",function(){var a=$Network.FppProxy,c=a.__string,d=a.__primitive,j=a.__array,h=a.__custom,f=a.__enum,i=a.__date,e=a.__object,g=a.__oArray,b=new $Network.FppProxy("HM");b.FppStatus=new $Flags("SUCCESS",0,"ERR_HTTP_MISCONFIGURATION",-7,"ERR_HTTP_PARSE_FAILURE",-6,"ERR_HTTP_CONNECT_FAILURE",-5,"ERR_HTTP_TIMEOUT",-4,"ERR_SERVER_UNCAUGHT",-3,"ERR_APP_SPECIFIC",-2,"ERR_FPP_PROTOCOL",-1);b.rfc("FppError",[c("ErrorCode"),c("Message"),e("ErrorObj"),c("StackTrace")]);b.rfc("FppReturnPackage",[f("Status"),e("Value"),g("OutRefParams"),h(b.FppError,"Error"),e("ProfilingInfo")]);b.rfm("ReportError",[c("errorString")],"ReportError",$Network.Type.XMLPost,null,"Microsoft.Msn.Hotmail.Ui.Fpp.MailBox");b.rfc("HmSimpleMsg",[d("IsBlocking"),d("YesCode"),d("NoCode"),c("Message")]);b.seal();return b});TodaySmcActions={};TodaySmcActions.newMsg=function TodaySmcActions$newMsg(){Page.setPerformanceId("CON");Page.postWithFolderQuickViewCache("NewMessage","/mail/EditMessageLight.aspx?n="+Page.queryString.newNonce)};TodaySmcActions.searchMail=function TodaySmcActions$searchMail(){var a=$("productSearchTerms");if(a)try{a.focus()}catch(b){}};TodaySmcActions.goToInbox=function TodaySmcActions$goToInbox(){return TodaySmcActions._goToFldr(TodaySmcPage.sysFldrs.inboxFid)};TodaySmcActions.goToDrafts=function TodaySmcActions$goToDrafts(){return TodaySmcActions._goToFldr(TodaySmcPage.sysFldrs.draftsFid)};TodaySmcActions.goToSent=function TodaySmcActions$goToSent(){return TodaySmcActions._goToFldr(TodaySmcPage.sysFldrs.sentFid)};TodaySmcActions._goToFldr=function TodaySmcActions$_goToFldr(d){if(d){var b=$(d);if(b){var c=$getDescendantByAttr(b,"A","lni","lni");if(c){var a=c.href;if(a&&a.length>0){Page.navigateTo(a);return false}}}}return true};Type.createStaticClass(TodaySmcActions,"TodaySmcActions");TodaySmcPage.initialize=function TodaySmcPage$initialize(){window.attachEvent("onunload",TodaySmcPage._onUnload);TodaySmcPage._invokes=[];Control.onPreInvoke=TodaySmcPage._onPreInvoke;if(TodaySmcPage.kbdShortcuts)KeyboardHandler.initialize(TodaySmcPage.kbdShortcuts,function(b,a){return Control.invokeStatic("TodaySmcActions",a,b,true)},KbdShortcutsTimeout,false);window.attachEvent("onload",TodaySmcPage._windowOnload)};TodaySmcPage._windowOnload=function TodaySmcPage$_windowOnload(){window.detachEvent("onload",TodaySmcPage._windowOnload);if(window.ExpandCollapse)ExpandCollapse.initializeForStandaloneUi();Page.pageComplete()};TodaySmcPage.dispose=function TodaySmcPage$dispose(){window.detachEvent("onunload",TodaySmcPage._onUnload);if(TodaySmcPage.kbdShortcuts)KeyboardHandler.dispose()};TodaySmcPage._getUserActionsStack=function TodaySmcPage$_getUserActionsStack(){return TodaySmcPage._invokes};FireAnt.Debug.CB.getUserActions=TodaySmcPage._getUserActionsStack;TodaySmcPage._onPreInvoke=function TodaySmcPage$_onPreInvoke(a,b,c){if(a=="Resize")return;if(TodaySmcPage._invokes.length>5)TodaySmcPage._invokes.shift();TodaySmcPage._invokes.push({typeName:a,methodName:b,args:c})};TodaySmcPage._onUnload=function TodaySmcPage$_onUnload(){TodaySmcPage.dispose()};Type.createStaticClass(TodaySmcPage,"TodaySmcPage");TodaySmcPage.initialize()