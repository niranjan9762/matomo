/*
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
if(!this.JSON){this.JSON={}}(function(){function d(f){return f<10?"0"+f:f}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(f){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+d(this.getUTCMonth()+1)+"-"+d(this.getUTCDate())+"T"+d(this.getUTCHours())+":"+d(this.getUTCMinutes())+":"+d(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(f){return this.valueOf()}}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),g=new RegExp('[\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),h,b,j={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;
function a(f){g.lastIndex=0;return g.test(f)?'"'+f.replace(g,function(k){var l=j[k];return typeof l==="string"?l:"\\u"+("0000"+k.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function e(r,o){var m,l,s,f,p=h,n,q=o[r];if(q&&typeof q==="object"&&typeof q.toJSON==="function"){q=q.toJSON(r)}if(typeof i==="function"){q=i.call(o,r,q)}switch(typeof q){case"string":return a(q);case"number":return isFinite(q)?String(q):"null";case"boolean":case"null":return String(q);case"object":if(!q){return"null"}h+=b;n=[];if(Object.prototype.toString.apply(q)==="[object Array]"){f=q.length;for(m=0;m<f;m+=1){n[m]=e(m,q)||"null"}s=n.length===0?"[]":h?"[\n"+h+n.join(",\n"+h)+"\n"+p+"]":"["+n.join(",")+"]";h=p;return s}if(i&&typeof i==="object"){f=i.length;for(m=0;m<f;m+=1){l=i[m];if(typeof l==="string"){s=e(l,q);if(s){n.push(a(l)+(h?": ":":")+s)}}}}else{for(l in q){if(Object.hasOwnProperty.call(q,l)){s=e(l,q);if(s){n.push(a(l)+(h?": ":":")+s)}}}}s=n.length===0?"{}":h?"{\n"+h+n.join(",\n"+h)+"\n"+p+"}":"{"+n.join(",")+"}";
h=p;return s}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(m,k,l){var f;h="";b="";if(typeof l==="number"){for(f=0;f<l;f+=1){b+=" "}}else{if(typeof l==="string"){b=l}}i=k;if(k&&typeof k!=="function"&&(typeof k!=="object"||typeof k.length!=="number")){throw new Error("JSON.stringify")}return e("",{"":m})}}if(typeof JSON.parse!=="function"){JSON.parse=function(m,f){var l;function k(q,p){var o,n,r=q[p];if(r&&typeof r==="object"){for(o in r){if(Object.hasOwnProperty.call(r,o)){n=k(r,o);if(n!==undefined){r[o]=n}else{delete r[o]}}}}return f.call(q,p,r)}m=String(m);c.lastIndex=0;if(c.test(m)){m=m.replace(c,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(m.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){l=eval("("+m+")");return typeof f==="function"?k({"":l},""):l
}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var m,w={},d=document,j=navigator,v=screen,G=window,h=false,B=[],e=G.encodeURIComponent,H=G.decodeURIComponent,F,C;function b(i){return typeof i!=="undefined"}function a(i){return typeof i==="function"}function n(i){return typeof i==="object"}function q(i){return typeof i==="string"||i instanceof String}function z(I){var i=I.shift();if(q(i)){F[i].apply(F,I)}else{i.apply(F,I)}}function t(K,J,I,i){if(K.addEventListener){K.addEventListener(J,I,i);return true}if(K.attachEvent){return K.attachEvent("on"+J,I)}K["on"+J]=I}function g(J,M){var I="",L,K;for(L in w){K=w[L][J];if(a(K)){I+=K(M)}}return I}function A(){g("unload");if(m){var i;do{i=new Date()}while(i.getTime()<m)}}function k(){var I;if(!h){h=true;g("load");for(I=0;I<B.length;I++){B[I]()}}return true}function x(){if(d.addEventListener){t(d,"DOMContentLoaded",function i(){d.removeEventListener("DOMContentLoaded",i,false);k()})}else{if(d.attachEvent){d.attachEvent("onreadystatechange",function i(){if(d.readyState==="complete"){d.detachEvent("onreadystatechange",i);
k()}});if(d.documentElement.doScroll&&G===G.top){(function i(){if(!h){try{d.documentElement.doScroll("left")}catch(I){setTimeout(i,0);return}k()}}())}}}t(G,"load",k,false)}function f(){var i="";try{i=G.top.document.referrer}catch(J){if(G.parent){try{i=G.parent.document.referrer}catch(I){i=""}}}if(i===""){i=d.referrer}return i}function y(i){var J=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),I=J.exec(i);return I?I[1]:i}function p(I,M){var L=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),K=L.exec(I),J=new RegExp("(?:^|&)"+M+"=([^&]*)"),i=K?J.exec(K[1]):0;return i?H(i[1]):""}function s(N,K,J,M,I,L){var i;if(J){i=new Date();i.setTime(i.getTime()+J)}d.cookie=N+"="+e(K)+(J?";expires="+i.toGMTString():"")+";path="+(M?M:"/")+(I?";domain="+I:"")+(L?";secure":"")}function E(J){var i=new RegExp("(^|;)[ ]*"+J+"=([^;]*)"),I=i.exec(d.cookie);return I?H(I[2]):0}function r(i){return unescape(e(i))}function u(Y){var K=function(W,i){return(W<<i)|(W>>>(32-i))},Z=function(af){var ae="",ad,W;
for(ad=7;ad>=0;ad--){W=(af>>>(ad*4))&15;ae+=W.toString(16)}return ae},N,ab,aa,J=[],R=1732584193,P=4023233417,O=2562383102,M=271733878,L=3285377520,X,V,U,T,S,ac,I,Q=[];Y=r(Y);I=Y.length;for(ab=0;ab<I-3;ab+=4){aa=Y.charCodeAt(ab)<<24|Y.charCodeAt(ab+1)<<16|Y.charCodeAt(ab+2)<<8|Y.charCodeAt(ab+3);Q.push(aa)}switch(I&3){case 0:ab=2147483648;break;case 1:ab=Y.charCodeAt(I-1)<<24|8388608;break;case 2:ab=Y.charCodeAt(I-2)<<24|Y.charCodeAt(I-1)<<16|32768;break;case 3:ab=Y.charCodeAt(I-3)<<24|Y.charCodeAt(I-2)<<16|Y.charCodeAt(I-1)<<8|128;break}Q.push(ab);while((Q.length&15)!==14){Q.push(0)}Q.push(I>>>29);Q.push((I<<3)&4294967295);for(N=0;N<Q.length;N+=16){for(ab=0;ab<16;ab++){J[ab]=Q[N+ab]}for(ab=16;ab<=79;ab++){J[ab]=K(J[ab-3]^J[ab-8]^J[ab-14]^J[ab-16],1)}X=R;V=P;U=O;T=M;S=L;for(ab=0;ab<=19;ab++){ac=(K(X,5)+((V&U)|(~V&T))+S+J[ab]+1518500249)&4294967295;S=T;T=U;U=K(V,30);V=X;X=ac}for(ab=20;ab<=39;ab++){ac=(K(X,5)+(V^U^T)+S+J[ab]+1859775393)&4294967295;S=T;T=U;U=K(V,30);V=X;X=ac}for(ab=40;ab<=59;
ab++){ac=(K(X,5)+((V&U)|(V&T)|(U&T))+S+J[ab]+2400959708)&4294967295;S=T;T=U;U=K(V,30);V=X;X=ac}for(ab=60;ab<=79;ab++){ac=(K(X,5)+(V^U^T)+S+J[ab]+3395469782)&4294967295;S=T;T=U;U=K(V,30);V=X;X=ac}R=(R+X)&4294967295;P=(P+V)&4294967295;O=(O+U)&4294967295;M=(M+T)&4294967295;L=(L+S)&4294967295}ac=Z(R)+Z(P)+Z(O)+Z(M)+Z(L);return ac.toLowerCase()}function o(J,i,I){if(J==="webcache.googleusercontent.com"||J==="cc.bingj.com"||J.slice(0,5)==="74.6."){i=d.links[0].href;J=y(i)}else{if(J==="translate.googleusercontent.com"){if(I===""){I=i}i=p(i,"u");J=y(i)}}return[J,i,I]}function l(I){var i=I.length;return(I.charAt(--i)===".")?I.slice(0,i):I}function D(az,ax){var al=o(d.domain,G.location.href,f()),aa=l(al[0]),V=al[1],aB=al[2],K="GET",ad=az||"",aR=ax||"",aK,aQ=d.title,ah="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",aC=[aa],M=[],aD=[],aG=[],ac=500,J,aj,ak,av,aE="_pk_",P,ay,L,ar,aS=63072000000,af=1800000,ab=15768000000,aH=false,T=100,Q="0",W={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},aq=false,S=false,Z,aO,ao,aA,aJ=u,aw;
function aL(aU){var aT;if(ak){aT=new RegExp("#.*");return aU.replace(aT,"")}return aU}function ap(aW){var aU,aT,aV;for(aU=0;aU<aC.length;aU++){aT=aC[aU].toLowerCase();if(aW===aT){return true}if(aT.slice(0,2)==="*."){if(aW===aT.slice(2)){return true}aV=aW.length-aT.length+1;if((aV>0)&&(aW.slice(aV)===aT.slice(1))){return true}}}return false}function i(aT){var aU=new Image(1,1);aU.onLoad=function(){};aU.src=ad+"?"+aT}function Y(aT){try{var aV=G.XMLHttpRequest?new G.XMLHttpRequest():G.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;aV.open("POST",ad,true);aV.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");aV.setRequestHeader("Content-Length",aT.length);aV.setRequestHeader("Connection","close");aV.send(aT)}catch(aU){i(aT)}}function aN(aV,aU){var aT=new Date();if(!L){if(K==="POST"){Y(aV)}else{i(aV)}m=aT.getTime()+aU}}function R(){var aT,aU;if(typeof navigator.javaEnabled!=="unknown"&&b(j.javaEnabled)&&j.javaEnabled()){W.java[2]="1"}if(a(G.GearsFactory)){W.gears[2]="1"
}if(j.mimeTypes&&j.mimeTypes.length){for(aT in W){aU=j.mimeTypes[W[aT][1]];if(aU&&aU.enabledPlugin){W[aT][2]="1"}}}}function N(aT){return aE+aT+"."+aw}function au(){var aT=N("testcookie");if(!b(j.cookieEnabled)){s(aT,"1");return E(aT)==="1"?"1":"0"}return j.cookieEnabled?"1":"0"}function ai(){aw=aJ((P||aa)+(ay||"/")).slice(0,8)}function X(){var aU=N("cvar"),aT=E(aU);if(aT.length){aT=JSON.parse(aT);if(n(aT)){return aT}}return{}}function aF(){if(aH===false){aH=X()}}function O(aT){var aU=new Date();Z=aU.getTime()}function am(be,bg){var bc,aT=new Date(),a1=Math.round(aT.getTime()/1000),aV,bf,bh,bd,aW,a8,ba,a0,aZ,bb,bi,a4,aY,a6=N("id"),a2=N("ses"),a3=N("ref"),bj=N("cvar"),a9=E(a6),a5=E(a2),aX=E(a3),a7=d.location.protocol==="https",aU="&res="+v.width+"x"+v.height+"&cookie="+Q;if(L){s(a6,"",-1,ay,P);s(a2,"",-1,ay,P);s(bj,"",-1,ay,P);s(a3,"",-1,ay,P);return""}for(bc in W){aU+="&"+W[bc][0]+"="+W[bc][2]}if(a9){bh="0";aV=a9.split(".");bd=aV[0];a8=aV[1];aW=aV[2];ba=aV[3];a0=aV[4]}else{bh="1";a8=a1;
ba=a1;a0="";bd=aJ((j.userAgent||"")+(j.platform||"")+aU+Math.round(aT.getTime/1000)).slice(0,16);aW=0}aA=bd;if(aX){bf=aX.indexOf(".");aZ=aX.slice(0,bf);bb=aX.slice(bf+1)}else{aZ=0;bb=""}if(!a5){aW++;a0=ba;bi=y(aB);a4=aX?y(aX):"";if(bi.length&&!ap(bi)&&(!ar||!a4.length||ap(a4))){aZ=a1;bb=aB;s(a3,aZ+"."+bb,ab,ay,P,a7)}}ba=a1;aY=JSON.stringify(aH);s(a6,bd+"."+a8+"."+aW+"."+ba+"."+a0,aS,ay,P,a7);s(a2,"*",af,ay,P,a7);s(bj,aY,af,ay,P,a7);aU="idsite="+aR+"&rec=1&rand="+Math.random()+"&h="+aT.getHours()+"&m="+aT.getMinutes()+"&s="+aT.getSeconds()+"&url="+e(aL(aK||V))+"&urlref="+e(aL(aB))+"&_id="+bd+"&_idts="+a8+"&_idvc="+aW+"&_idn="+bh+"&_ref="+e(aL(bb))+"&_refts="+aZ+"&_viewts="+a0+"&_cvar="+aY+aU;if(be){aU+="&data="+e(JSON.stringify(be))}else{if(av){aU+="&data="+e(JSON.stringify(av))}}aU+=g(bg);return aU}function I(aW,aX){var aT=new Date(),aV=am(aX,"log")+"&action_name="+e(aW||aQ);aN(aV,ac);if(J&&aj&&!S){S=true;t(d,"click",O);t(d,"mouseup",O);t(d,"mousedown",O);t(d,"mousemove",O);t(d,"mousewheel",O);
t(G,"DOMMouseScroll",O);t(G,"scroll",O);t(d,"keypress",O);t(d,"keydown",O);t(d,"keyup",O);t(G,"resize",O);t(G,"focus",O);t(G,"blur",O);Z=aT.getTime();setTimeout(function aU(){var aY=new Date(),aZ;if((Z+aj)>aY.getTime()){if(J<aY.getTime()){aZ=am(aX,"ping")+"&ping=1";aN(aZ,ac)}setTimeout(aU,aj)}},aj)}}function aM(aT,aW,aV){var aU=am(aV,"goal")+"&idgoal="+aT;if(aW){aU+="&revenue="+aW}aN(aU,ac)}function ag(aU,aT,aW){var aV=am(aW,"click")+"&"+aT+"="+e(aL(aU));aN(aV,ac)}function at(aV,aU){var aW,aT="(^| )(piwik[_-]"+aU;if(aV){for(aW=0;aW<aV.length;aW++){aT+="|"+aV[aW]}}aT+=")( |$)";return new RegExp(aT)}function aP(aW,aT,aX){if(!aX){return"link"}var aV=at(aD,"download"),aU=at(aG,"link"),aY=new RegExp("\\.("+ah+")([?&#]|$)","i");return aU.test(aW)?"link":(aV.test(aW)||aY.test(aT)?"download":0)}function U(aY){var aW,aU,aT;while(!!(aW=aY.parentNode)&&((aU=aY.tagName)!=="A"&&aU!=="AREA")){aY=aW}if(b(aY.href)){var aZ=aY.hostname||y(aY.href),a0=aZ.toLowerCase(),aV=aY.href.replace(aZ,a0),aX=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i");
if(!aX.test(aV)){aT=aP(aY.className,aV,ap(a0));if(aT){ag(aV,aT)}}}}function ae(aT){var aU,aV;aT=aT||G.event;aU=aT.which||aT.button;aV=aT.target||aT.srcElement;if(aT.type==="click"){if(aV){U(aV)}}else{if(aT.type==="mousedown"){if((aU===1||aU===2)&&aV){aO=aU;ao=aV}else{aO=ao=null}}else{if(aT.type==="mouseup"){if(aU===aO&&aV===ao){U(aV)}aO=ao=null}}}}function aI(aU,aT){if(aT){t(aU,"mouseup",ae,false);t(aU,"mousedown",ae,false)}else{t(aU,"click",ae,false)}}function an(aU){if(!aq){aq=true;var aV,aT=at(M,"ignore"),aW=d.links;if(aW){for(aV=0;aV<aW.length;aV++){if(!aT.test(aW[aV].className)){aI(aW[aV],aU)}}}}}Q=au();R();ai();return{getVisitorId:function(){return aA},setTrackerUrl:function(aT){ad=aT},setSiteId:function(aT){aR=aT},setCustomData:function(aT,aU){if(n(aT)){av=aT}else{if(!av){av=[]}av[aT]=aU}},getCustomData:function(){return av},setCustomVariable:function(aT,aV,aU){aF();if(aT>0&&aT<=5){aH[aT]=[aV.slice(0,T),aU.slice(0,T)]}},getCustomVariable:function(aT){aF();return aH[aT]},deleteCustomVariable:function(aT){this.setCustomVariable(aT,"","")
},setLinkTrackingTimer:function(aT){ac=aT},setDownloadExtensions:function(aT){ah=aT},addDownloadExtensions:function(aT){ah+="|"+aT},setDomains:function(aT){aC=q(aT)?[aT]:aT;aC.push(aa)},setIgnoreClasses:function(aT){M=q(aT)?[aT]:aT},setRequestMethod:function(aT){K=aT||"GET"},setReferrerUrl:function(aT){aB=aT},setCustomUrl:function(aT){aK=aT},setDocumentTitle:function(aT){aQ=aT},setDownloadClasses:function(aT){aD=q(aT)?[aT]:aT},setLinkClasses:function(aT){aG=q(aT)?[aT]:aT},discardHashTag:function(aT){ak=aT},setCookieNamePrefix:function(aT){aE=aT;aH=X()},setCookieDomain:function(aT){P=l(aT);ai()},setCookiePath:function(aT){ay=aT;ai()},setVisitorCookieTimeout:function(aT){aS=aT*1000},setSessionCookieTimeout:function(aT){af=aT*1000},setReferralCookieTimeout:function(aT){ab=aT*1000},setConversionAttributionFirstReferrer:function(aT){ar=aT},setDoNotTrack:function(aT){L=aT&&j.doNotTrack},addListener:function(aU,aT){aI(aU,aT)},enableLinkTracking:function(aT){if(h){an(aT)}else{B[B.length]=function(){an(aT)
}}},setHeartBeatTimer:function(aV,aU){var aT=new Date();J=aT.getTime()+aV*1000;aj=aU*1000},killFrame:function(){if(G!==G.top){G.top.location=G.location}},redirectFile:function(aT){if(G.location.protocol==="file:"){G.location=aT}},trackGoal:function(aT,aV,aU){aM(aT,aV,aU)},trackLink:function(aU,aT,aV){ag(aU,aT,aV)},trackPageView:function(aT,aU){I(aT,aU)}}}function c(){return{push:z}}t(G,"beforeunload",A,false);x();F=new D();for(C=0;C<_paq.length;C++){z(_paq[C])}_paq=new c();return{addPlugin:function(i,I){w[i]=I},getTracker:function(i,I){return new D(i,I)},getAsyncTracker:function(){return F}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);if(!!(c=a("tracker_pause"))){e.setLinkTrackingTimer(c)}if(!!(c=a("download_extensions"))){e.setDownloadExtensions(c)}if(!!(c=a("hosts_alias"))){e.setDomains(c)}if(!!(c=a("ignore_classes"))){e.setIgnoreClasses(c)}e.trackPageView();
if((a("install_tracker"))){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};