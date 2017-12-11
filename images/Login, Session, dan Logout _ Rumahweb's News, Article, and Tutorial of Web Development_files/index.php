//===============================
// Kayako LiveResponse
// Copyright (c) 2001-2017

// http://www.kayako.com
// License: http://www.kayako.com/license.txt
//===============================

var sessionid_bv6bj7yn = "lZozmeTOQRHP8F6v3uQeSW83fbc44d8839a57de93d5d2d916bf21d9f86bcfchHemVjbZYy1tkjI89zjJglQQ0wXJvn";
var geoip_bv6bj7yn = new Array();

var hasnotes_bv6bj7yn = "0";
var isnewsession_bv6bj7yn = "1";
var repeatvisit_bv6bj7yn = "1";
var lastvisittimeline_bv6bj7yn = "0";
var lastchattimeline_bv6bj7yn = "0";
var isfirsttime_bv6bj7yn = 1;
var timer_bv6bj7yn = 0;
var imagefetch_bv6bj7yn = 19;
var updateurl_bv6bj7yn = "";
var screenHeight_bv6bj7yn = window.screen.availHeight;
var screenWidth_bv6bj7yn = window.screen.availWidth;
var colorDepth_bv6bj7yn = window.screen.colorDepth;
var timeNow = new Date();
var referrer = escape(document.referrer);
var windows_bv6bj7yn, mac_bv6bj7yn, linux_bv6bj7yn;
var ie_bv6bj7yn, op_bv6bj7yn, moz_bv6bj7yn, misc_bv6bj7yn, browsercode_bv6bj7yn, browsername_bv6bj7yn, browserversion_bv6bj7yn, operatingsys_bv6bj7yn;
var dom_bv6bj7yn, ienew, ie4_bv6bj7yn, ie5_bv6bj7yn, ie6_bv6bj7yn, ie7_bv6bj7yn, ie8_bv6bj7yn, moz_rv_bv6bj7yn, moz_rv_sub_bv6bj7yn, ie5mac, ie5xwin, opnu_bv6bj7yn, op4, op5_bv6bj7yn, op6_bv6bj7yn, op7_bv6bj7yn, op8_bv6bj7yn, op9_bv6bj7yn, op10_bv6bj7yn, saf_bv6bj7yn, konq_bv6bj7yn, chrome_bv6bj7yn, ch1_bv6bj7yn, ch2_bv6bj7yn, ch3_bv6bj7yn;
var appName_bv6bj7yn, appVersion_bv6bj7yn, userAgent_bv6bj7yn;
var appName_bv6bj7yn = navigator.appName;
var appVersion_bv6bj7yn = navigator.appVersion;
var userAgent_bv6bj7yn = navigator.userAgent;
var dombrowser = "default";
var isChatRunning_bv6bj7yn = 0;
var title = document.title;
var proactiveImageUse_bv6bj7yn = new Image();
windows_bv6bj7yn = (appVersion_bv6bj7yn.indexOf('Win') != -1);
mac_bv6bj7yn = (appVersion_bv6bj7yn.indexOf('Mac') != -1);
linux_bv6bj7yn = (appVersion_bv6bj7yn.indexOf('Linux') != -1);
if (!document.layers) {
	dom_bv6bj7yn = (document.getElementById ) ? document.getElementById : false;
} else {
	dom_bv6bj7yn = false;
}
var myWidth = 0, myHeight = 0;
if( typeof( window.innerWidth ) == 'number' ) {
	//Non-IE
	myWidth = window.innerWidth;
	myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	//IE 6+ in 'standards compliant mode'
	myWidth = document.documentElement.clientWidth;
	myHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//IE 4 compatible
	myWidth = document.body.clientWidth;
	myHeight = document.body.clientHeight;
}
winH = myHeight;
winW = myWidth;
misc_bv6bj7yn = (appVersion_bv6bj7yn.substring(0,1) < 4);
op_bv6bj7yn = (userAgent_bv6bj7yn.indexOf('Opera') != -1);
moz_bv6bj7yn = (userAgent_bv6bj7yn.indexOf('Gecko') != -1);
chrome_bv6bj7yn=(userAgent_bv6bj7yn.indexOf('Chrome') != -1);
if (document.all) {
	ie_bv6bj7yn = (document.all && !op_bv6bj7yn);
}
saf_bv6bj7yn=(userAgent_bv6bj7yn.indexOf('Safari') != -1);
konq_bv6bj7yn=(userAgent_bv6bj7yn.indexOf('Konqueror') != -1);

if (op_bv6bj7yn) {
	op_pos = userAgent_bv6bj7yn.indexOf('Opera');
	opnu_bv6bj7yn = userAgent_bv6bj7yn.substr((op_pos+6),4);
	op5_bv6bj7yn = (opnu_bv6bj7yn.substring(0,1) == 5);
	op6_bv6bj7yn = (opnu_bv6bj7yn.substring(0,1) == 6);
	op7_bv6bj7yn = (opnu_bv6bj7yn.substring(0,1) == 7);
	op8_bv6bj7yn = (opnu_bv6bj7yn.substring(0,1) == 8);
	op9_bv6bj7yn = (opnu_bv6bj7yn.substring(0,1) == 9);
	op10_bv6bj7yn = (opnu_bv6bj7yn.substring(0,2) == 10);
} else if (chrome_bv6bj7yn) {
	chrome_pos = userAgent_bv6bj7yn.indexOf('Chrome');
	chnu = userAgent_bv6bj7yn.substr((chrome_pos+7),4);
	ch1_bv6bj7yn = (chnu.substring(0,1) == 1);
	ch2_bv6bj7yn = (chnu.substring(0,1) == 2);
	ch3_bv6bj7yn = (chnu.substring(0,1) == 3);
} else if (moz_bv6bj7yn){
	rv_pos = userAgent_bv6bj7yn.indexOf('rv');
	moz_rv_bv6bj7yn = userAgent_bv6bj7yn.substr((rv_pos+3),3);
	moz_rv_sub_bv6bj7yn = userAgent_bv6bj7yn.substr((rv_pos+7),1);
	if (moz_rv_sub_bv6bj7yn == ' ' || isNaN(moz_rv_sub_bv6bj7yn)) {
		moz_rv_sub_bv6bj7yn='';
	}
	moz_rv_bv6bj7yn = moz_rv_bv6bj7yn + moz_rv_sub_bv6bj7yn;
} else if (ie_bv6bj7yn){
	ie_pos = userAgent_bv6bj7yn.indexOf('MSIE');
	ienu = userAgent_bv6bj7yn.substr((ie_pos+5),3);
	ie4_bv6bj7yn = (!dom_bv6bj7yn);
	ie5_bv6bj7yn = (ienu.substring(0,1) == 5);
	ie6_bv6bj7yn = (ienu.substring(0,1) == 6);
	ie7_bv6bj7yn = (ienu.substring(0,1) == 7);
	ie8_bv6bj7yn = (ienu.substring(0,1) == 8);
}

if (konq_bv6bj7yn) {
	browsercode_bv6bj7yn = "KO";
	browserversion_bv6bj7yn = appVersion_bv6bj7yn;
	browsername_bv6bj7yn = "Konqueror";
} else if (chrome_bv6bj7yn) {
	browsercode_bv6bj7yn = "CH";
	if (ch1_bv6bj7yn) {
		browserversion_bv6bj7yn = "1";
	} else if (ch2_bv6bj7yn) {
		browserversion_bv6bj7yn = "2";
	} else if (ch3_bv6bj7yn) {
		browserversion_bv6bj7yn = "3";
	}

	browsername_bv6bj7yn = "Google Chrome";
} else if (saf_bv6bj7yn) {
	browsercode_bv6bj7yn = "SF";
	browserversion_bv6bj7yn = appVersion_bv6bj7yn;
	browsername_bv6bj7yn = "Safari";
} else if (op_bv6bj7yn) {
	browsercode_bv6bj7yn = "OP";
	if (op5_bv6bj7yn) {
		browserversion_bv6bj7yn = "5";
	} else if (op6_bv6bj7yn) {
		browserversion_bv6bj7yn = "6";
	} else if (op7_bv6bj7yn) {
		browserversion_bv6bj7yn = "7";
	} else if (op8_bv6bj7yn) {
		browserversion_bv6bj7yn = "8";
	} else if (op9_bv6bj7yn) {
		browserversion_bv6bj7yn = "9";
	} else if (op10_bv6bj7yn) {
		browserversion_bv6bj7yn = "10";
	} else {
		browserversion_bv6bj7yn = appVersion_bv6bj7yn;
	}
	browsername_bv6bj7yn = "Opera";
} else if (moz_bv6bj7yn) {
	browsercode_bv6bj7yn = "MO";
	browserversion_bv6bj7yn = appVersion_bv6bj7yn;
	browsername_bv6bj7yn = "Firefox";
} else if (ie_bv6bj7yn) {
	browsercode_bv6bj7yn = "IE";
	if (ie4_bv6bj7yn) {
		browserversion_bv6bj7yn = "4";
	} else if (ie5_bv6bj7yn) {
		browserversion_bv6bj7yn = "5";
	} else if (ie6_bv6bj7yn) {
		browserversion_bv6bj7yn = "6";
	} else if (ie7_bv6bj7yn) {
		browserversion_bv6bj7yn = "7";
	} else if (ie8_bv6bj7yn) {
		browserversion_bv6bj7yn = "8";
	} else {
		browserversion_bv6bj7yn = appVersion_bv6bj7yn;
	}
	browsername_bv6bj7yn = "Internet Explorer";
}

if (windows_bv6bj7yn) {
	operatingsys_bv6bj7yn = "Windows";
} else if (linux_bv6bj7yn) {
	operatingsys_bv6bj7yn = "Linux";
} else if (mac_bv6bj7yn) {
	operatingsys_bv6bj7yn = "Mac";
} else {
	operatingsys_bv6bj7yn = "Unkown";
}

if (document.getElementById)
{
	dombrowser = "default";
} else if (document.layers) {
	dombrowser = "NS4";
} else if (document.all) {
	dombrowser = "IE4";
}

var proactiveX = 20;
var proactiveXStep = 1;
var proactiveDelayTime = 100;

var proactiveY = 0;
var proactiveOffsetHeight=0;
var proactiveYStep = 0;
var proactiveAnimate = false;

function browserObject_bv6bj7yn(objid)
{
	if (dombrowser == "default")
	{
		return document.getElementById(objid);
	} else if (dombrowser == "NS4") {
		return document.layers[objid];
	} else if (dombrowser == "IE4") {
		return document.all[objid];
	}
}

function doRand_bv6bj7yn()
{
	var num;
	now=new Date();
	num=(now.getSeconds());
	num=num+1;
	return num;
}

function getCookie_bv6bj7yn(name) {
	var crumb = document.cookie;
	var index = crumb.indexOf(name + "=");
	if (index == -1) return null;
	index = crumb.indexOf("=", index) + 1;
	var endstr = crumb.indexOf(";", index);
	if (endstr == -1) endstr = crumb.length;
	return unescape(crumb.substring(index, endstr));
}

function deleteCookie_bv6bj7yn(name) {
	var expiry = new Date();
	document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT" +  "; path=/";
}

function elapsedTime_bv6bj7yn()
{
	if (typeof _elapsedTimeStatusIndicator == 'undefined') {
		_elapsedTimeStatusIndicator = 'bv6bj7yn';
	} else if (typeof _elapsedTimeStatusIndicator == 'string' && _elapsedTimeStatusIndicator != 'bv6bj7yn') {

		return;
	}


	if (timer_bv6bj7yn < 3600)
	{
		timer_bv6bj7yn++;
		imagefetch_bv6bj7yn++;

		if (imagefetch_bv6bj7yn > 19) {
			imagefetch_bv6bj7yn = 0;
			doStatusLoop_bv6bj7yn();
		}

					setTimeout("elapsedTime_bv6bj7yn();", 1000);
		
	}
}


var Base64_bv6bj7yn = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64_bv6bj7yn._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	}
}

function doStatusLoop_bv6bj7yn() {
	date1 = new Date();
	var _finalPageTitle=Base64_bv6bj7yn.encode(title);

	var _finalWindowLocation = encodeURIComponent(decodeURIComponent(window.location));
	var _referrerURL = encodeURIComponent(decodeURIComponent(document.referrer));
	updateurl_bv6bj7yn = "https://support.srs-x.net/visitor/index.php?/LiveChat/VisitorUpdate/UpdateFootprint/_time="+date1.getTime()+"/_randomNumber="+doRand_bv6bj7yn()+"/_url="+_finalWindowLocation+"/_isFirstTime="+encodeURIComponent(isfirsttime_bv6bj7yn)+"/_sessionID="+encodeURIComponent(sessionid_bv6bj7yn)+"/_referrer="+_referrerURL+"/_resolution="+encodeURIComponent(screenWidth_bv6bj7yn+"x"+screenHeight_bv6bj7yn)+"/_colorDepth="+encodeURIComponent(colorDepth_bv6bj7yn)+"/_platform="+encodeURIComponent(navigator.platform)+"/_appVersion="+encodeURIComponent(navigator.appVersion)+"/_appName="+encodeURIComponent(navigator.appName)+"/_browserCode="+encodeURIComponent(browsercode_bv6bj7yn)+"/_browserVersion="+encodeURIComponent(browserversion_bv6bj7yn)+"/_browserName="+encodeURIComponent(browsername_bv6bj7yn)+"/_operatingSys="+encodeURIComponent(operatingsys_bv6bj7yn)+"/_pageTitle="+encodeURIComponent(_finalPageTitle)+"/_hasNotes="+encodeURIComponent(hasnotes_bv6bj7yn)+"/_repeatVisit="+encodeURIComponent(repeatvisit_bv6bj7yn)+"/_lastVisitTimeline="+encodeURIComponent(lastvisittimeline_bv6bj7yn)+"/_lastChatTimeline="+encodeURIComponent(lastchattimeline_bv6bj7yn)+"/_isNewSession="+encodeURIComponent(isnewsession_bv6bj7yn);

	proactiveImageUse_bv6bj7yn = new Image();
	proactiveImageUse_bv6bj7yn.onload = imageLoaded_bv6bj7yn;
	proactiveImageUse_bv6bj7yn.src = updateurl_bv6bj7yn;

	isfirsttime_bv6bj7yn = 0;
}

function startChat_bv6bj7yn(proactive)
{
	isChatRunning_bv6bj7yn = 1;

	docWidth = (winW-599)/2;
	docHeight = (winH-679)/2;

		_chatWindowURL = 'https://support.srs-x.net/visitor/index.php?/LiveChat/Chat/Request/_sessionID=' + sessionid_bv6bj7yn + '/_proactive=' + proactive + '/_filterDepartmentID=7%2C6%2C5/_randomNumber=' + doRand_bv6bj7yn() + '/_fullName=/_email=/_promptType=chat';
	


	chatwindow = window.open(_chatWindowURL,"customerchat"+doRand_bv6bj7yn(), "toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=yes,resizable=1,width=599,height=679,left="+docWidth+",top="+docHeight);

	hideProactiveChatData_bv6bj7yn();
}

function imageLoaded_bv6bj7yn() {
	if (!proactiveImageUse_bv6bj7yn)
	{
		return;
	}
	proactiveAction = proactiveImageUse_bv6bj7yn.width;

	if (proactiveAction == 3)
	{
		doProactiveInline_bv6bj7yn();
	} else if (proactiveAction == 4) {
		displayProactiveChatData_bv6bj7yn();
	}
}

function writeInlineRequestData_bv6bj7yn()
{
	docWidth = (winW-600)/2;
	docHeight = (winH-680)/2;

	var divData = '';
	divData += "<div style=\"float: left; width: 600px; background: #ffffff; border: solid 1px #bcb5a6;\"><iframe width=\"600\" height=\"680\" scrolling=\"auto\" frameborder=\"0\" src=\"\" name=\"inlinechatframe\" id=\"inlinechatframe\">error: no iframe support detected</iframe></div><div style=\"float: left; margin-left: -8px; margin-top: -8px;\"><a href=\"javascript: closeInlineProactiveRequest_bv6bj7yn();\"><img src=\"https://support.srs-x.net/__swift/themes/client/images/icon_close.png\" border=\"0\" align=\"absmiddle\" /></a></div>";


	var inlineChatElement = document.createElement("div");
	inlineChatElement.style.position = 'absolute';
	inlineChatElement.style.display = 'none';
	inlineChatElement.style.float = 'left';
	inlineChatElement.style.top = docHeight+'px';
	inlineChatElement.style.left = docWidth+'px';
	inlineChatElement.style.zIndex = 500;

	if (inlineChatElement.style.overflow) {
		inlineChatElement.style.overflow = 'none';
	}

	inlineChatElement.id = 'inlinechatdiv';
	inlineChatElement.innerHTML = divData;

	var proactiveChatContainer = document.getElementById('proactivechatcontainer' + swiftuniqueid);
	proactiveChatContainer.appendChild(inlineChatElement);
}

function writeProactiveRequestData_bv6bj7yn()
{
	docWidth = (winW-450)/2;
	docHeight = (winH-400)/2;

	var divData = '';
	divData += "<div style=\"float: left; width: 500px; background: #ffffff url(\'https://support.srs-x.net/__swift/themes/client/images/mainbackground.gif\') repeat; border: solid 1px #bababa;\">	<div style=\"background: #ffffff url(\'https://support.srs-x.net/__swift/themes/client/images/icon_proactiveuserbackground.gif\') no-repeat bottom left; border: solid 1px #bababa; margin: 8px;\">		<div style=\"text-align: center;margin-top: 15px;margin-bottom: 10px;\"><img align=\"absmiddle\" border=\"0\" src=\"https://support.srs-x.net/__swift/files/file_dybhtkk2me0s4kl.png\"></div>		<hr style=\"border: solid #d8dbdf; border-width: 1px 0 0; clear: both; height: 0; margin: 0; text-align: center\">		<div style=\"padding-left: 100px; text-align: center; margin-top: 20px; height: 60px; overflow: hidden; font: 40px \'segoe ui\',\'helvetica neue\', arial, helvetica, sans-serif; color: #128dbe;width: 350px;\">			Can I help you?		</div>		<div style=\"padding-left: 100px; vertical-align: top; margin-top: 0px; padding-top: 0px; height: 180px; font: 18pt \'segoe ui\',\'helvetica neue\', arial, helvetica, sans-serif; color: #4c5156;width: 350px;\">			Our team is ready to assist you. Click &quot;Chat Now&quot; to be connected to one instantly.<br>			<div style=\"padding-top: 30px; padding-left: 90px; text-align: center;\">				<div onclick=\"javascript:doProactiveRequest_bv6bj7yn();\" style=\"font-weight: normal;font-size: 19px;color: #5d9928;padding: 10px 25px 10px 25px;background-color: #fff;background: -moz-linear-gradient(top,#fafafa 0%,#e7ebf0);background: -webkit-gradient(linear, left top, left bottom, from(#ffffff),to(#f3f3f3));-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;border: 1px solid #cdd2d4;-moz-box-shadow: 0px 1px 1px #f8f8f8,inset 0px 1px 1px #fff;-webkit-box-shadow: 0px 1px 1px #f8f8f8,inset 0px 1px 1px #fff;box-shadow: 0px 1px 1px #f8f8f8,inset 0px 1px 1px #fff;text-shadow: 0px 1px 0px #fff;cursor: pointer;width: 100px;\">					Chat Now				</div>			</div>		</div>	</div></div><div style=\"float: left; margin-left: -8px; margin-top: -8px;\">	<a href=\"javascript:closeProactiveRequest_bv6bj7yn();\"><img align=\"absmiddle\" border=\"0\" src=\"https://support.srs-x.net/__swift/themes/client/images/icon_close.png\"></a></div>";


	var proactiveElement = document.createElement("div");
	proactiveElement.style.position = 'absolute';
	proactiveElement.style.display = 'none';
	proactiveElement.style.float = 'left';
	proactiveElement.style.top = docHeight+'px';
	proactiveElement.style.left = docWidth+'px';
	proactiveElement.style.zIndex = 500;

	if (proactiveElement.style.overflow) {
		proactiveElement.style.overflow = 'none';
	}

	proactiveElement.id = 'proactivechatdiv';
	proactiveElement.innerHTML = divData;

	var proactiveChatContainer = document.getElementById('proactivechatcontainer' + swiftuniqueid);
	proactiveChatContainer.appendChild(proactiveElement);
}

function displayProactiveChatData_bv6bj7yn()
{
	if (proactiveAnimate == true) {
		return false;
	}

	writeObj = browserObject_bv6bj7yn("proactivechatdiv");
	if (writeObj)
	{
		docWidth = (winW-450)/2;
		docHeight = (winH-400)/2;
		proactiveY = docHeight;
		writeObj.top = docWidth;
		writeObj.left = docHeight;
		proactiveAnimate = true;
	}

	showDisplay_bv6bj7yn("proactivechatdiv");

		animateProactiveDiv_bv6bj7yn();
	
}

function displayInlineChatData_bv6bj7yn()
{
	writeObj = browserObject_bv6bj7yn("inlinechatdiv");
	if (writeObj)
	{
		docWidth = (winW-600)/2;
		docHeight = (winH-680)/2;
		proactiveY = docHeight;
		writeObj.top = docHeight;
		writeObj.left = docWidth;

		acceptProactive = new Image();
		acceptProactive.src = "https://support.srs-x.net/visitor/index.php?/LiveChat/VisitorUpdate/AcceptProactive/_randomNumber="+doRand_bv6bj7yn()+"/_sessionID="+sessionid_bv6bj7yn;

		inlineChatFrameObj = browserObject_bv6bj7yn("inlinechatframe");
		_iframeURL = 'https://support.srs-x.net/visitor/index.php?/LiveChat/Chat/StartInline/_sessionID=lZozmeTOQRHP8F6v3uQeSW83fbc44d8839a57de93d5d2d916bf21d9f86bcfchHemVjbZYy1tkjI89zjJglQQ0wXJvn/_proactive=1/_filterDepartmentID=7%2C6%2C5/_fullName=/_email=/_inline=1/';
		if (inlineChatFrameObj && inlineChatFrameObj.src != _iframeURL && writeObj.style.display == 'none') {
			inlineChatFrameObj.src = _iframeURL;
		}
	}

	showDisplay_bv6bj7yn("inlinechatdiv");
}

function hideProactiveChatData_bv6bj7yn()
{
	hideDisplay_bv6bj7yn("proactivechatdiv");
	hideDisplay_bv6bj7yn("inlinechatdiv");
}

function doProactiveInline_bv6bj7yn()
{
	displayInlineChatData_bv6bj7yn();
}

function doProactiveRequest_bv6bj7yn()
{
	acceptProactive = new Image();
	acceptProactive.src = "https://support.srs-x.net/visitor/index.php?/LiveChat/VisitorUpdate/AcceptProactive/_randomNumber="+doRand_bv6bj7yn()+"/_sessionID="+sessionid_bv6bj7yn;

	startChat_bv6bj7yn("4");
}

function closeProactiveRequest_bv6bj7yn()
{
	rejectProactive = new Image();
	date1 = new Date();
	proactiveAnimate = false;
	rejectProactive.src = "https://support.srs-x.net/visitor/index.php?/LiveChat/VisitorUpdate/ResetProactive/_time="+date1.getTime()+"/_randomNumber="+doRand_bv6bj7yn()+"/_sessionID="+sessionid_bv6bj7yn;

	hideProactiveChatData_bv6bj7yn();
}

function closeInlineProactiveRequest_bv6bj7yn()
{
	rejectProactive = new Image();
	date1 = new Date();
	rejectProactive.src = "https://support.srs-x.net/visitor/index.php?/LiveChat/VisitorUpdate/ResetProactive/_time="+date1.getTime()+"/_randomNumber="+doRand_bv6bj7yn()+"/_sessionID="+sessionid_bv6bj7yn;

	document.getElementById('inlinechatframe').contentWindow.postMessage('CloseProactiveChat', '*');
	//	window.frames.inlinechatframe.CloseProactiveChat();
}

function closeInlineProactiveRequest2_bv6bj7yn()
{
	var bodyElement = document.getElementsByTagName('body');
	if (bodyElement[0])
	{
		var inlineDivElement = browserObject_bv6bj7yn('inlinechatdiv');
		if (inlineDivElement) {
			var _parentNode = inlineDivElement.parentNode;
			_parentNode.removeChild(inlineDivElement);
		}
	}
}

	window.onmessage = function(e){
	if (e.data == 'CloseProactiveChat') {
	closeInlineProactiveRequest2_bv6bj7yn();
	}
	};

function switchDisplay_bv6bj7yn(objid)
{
	result = browserObject_bv6bj7yn(objid);
	if (!result)
	{
		return;
	}

	if (result.style.display == "none")
	{
		result.style.display = "block";
	} else {
		result.style.display = "none";
	}
}

function hideDisplay_bv6bj7yn(objid)
{
	result = browserObject_bv6bj7yn(objid);
	if (!result)
	{
		return;
	}

	result.style.display = "none";
}

function showDisplay_bv6bj7yn(objid)
{
	result = browserObject_bv6bj7yn(objid);
	if (!result)
	{
		return;
	}

	result.style.display = "block";
}

function updateProactivePosition_bv6bj7yn()
{
	writeObj = browserObject_bv6bj7yn("proactivechatdiv");
	writeObjInline = browserObject_bv6bj7yn("inlinechatdiv");

	docHeight = (winH-412)/2;
	docHeightInline = (winH-680)/2;

	finalTopValue = docHeight + document.body.scrollTop;
	if (finalTopValue < 0) {
		finalTopValue = 10;
	}

	finalTopValueInline = docHeightInline + document.body.scrollTop;
	if (finalTopValueInline < 0) {
		finalTopValueInline = 10;
	}

	if (writeObj) {
		writeObj.style.top = finalTopValue + "px";
	}

	if (writeObjInline) {
		writeObjInline.style.top = finalTopValueInline + "px";
	}
}

function animateProactiveDiv_bv6bj7yn()
{
	writeObj = browserObject_bv6bj7yn("proactivechatdiv");

	if (!writeObj) {
		return false;
	}

	if(proactiveYStep == 0){proactiveY = proactiveY-proactiveXStep;} else {proactiveY = proactiveY+proactiveXStep;}

	proactiveOffsetHeight = writeObj.offsetHeight;
	if(proactiveY < 0){proactiveYStep = 1; proactiveY=0; }
	if(proactiveY >= (myHeight - proactiveOffsetHeight)){proactiveYStep=0; proactiveY=(myHeight-proactiveOffsetHeight);}

	finalTopValue = proactiveY+document.body.scrollTop;
	if (finalTopValue < 0) {
		finalTopValue = 10;
	}

	writeObj.style.top = finalTopValue+"px";

	if (proactiveAnimate) {
		setTimeout('animateProactiveDiv_bv6bj7yn()', proactiveDelayTime);
	}
}

	writeProactiveRequestData_bv6bj7yn(); writeInlineRequestData_bv6bj7yn();


elapsedTime_bv6bj7yn();

var oldEvtScroll = window.onscroll; window.onscroll = function() { if (oldEvtScroll) { updateProactivePosition_bv6bj7yn(); } }

var swifttagdiv=document.createElement("div");swifttagdiv.innerHTML = "<a href=\"javascript:startChat_bv6bj7yn(\'0\');\" onMouseOver=\"window.status=\'Click Here for Live Chat\'; return true;\" onMouseOut=\"window.status=\'\'; return true;\"><img src=\"https://support.srs-x.net/__swift/themes/client/images/staffonline.png\" border=\"0\" alt=\"Click Here for Live Chat\" title=\"Click Here for Live Chat\"></a>";document.getElementById("swifttagdatacontainerjy0fwas3rs").appendChild(swifttagdiv);