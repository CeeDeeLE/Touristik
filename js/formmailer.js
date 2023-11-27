//
/* <![CDATA[ */
var tv = -1;
window.onLoad = page_tv();
function play(lng) {
  var hsh = new Date();
  var wlp = window.location.protocol == "http:" ? "http:" : "https:";
  audio_url =
    "http://www.dw-formmailer.de/image.php?ds=wav&language=" +
    lng +
    "&hsh=" +
    hsh;
  sprache_html =
    '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' +
    wlp +
    '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="1" height="1">' +
    '<param name="movie" value="' +
    audio_url +
    '">' +
    '<param name="quality" value="high">' +
    '<param name="loop" value="false">' +
    '<param name="bgcolor" value="#ffffff">' +
    '<param name="menu" value="false">' +
    '<embed src="' +
    audio_url +
    '" loop="false" width="1" height="1" quality="high" bgcolor="#ffffff" type="application/x-shockwave-flash" pluginspage="' +
    wlp +
    '//www.macromedia.com/go/getflashplayer" menu="false">' +
    "</embed></object>";
  document.getElementById("sprache").innerHTML = sprache_html;
  return false;
}
function reload_init() {
  if (document.getElementById("refresh_image_1")) {
    document.getElementById("refresh_image_1").onclick = reload_image;
  }
}
function reload_image() {
  if (!ds) {
    ds = 1;
  }
  var hsh = new Date();
  document.getElementById("refresh_image_1").src =
    "http://www.dw-formmailer.de/image.php?ds=" + ds + "&z=" + hsh;
  return false;
}
function VerifyEmailAddress(EmailAddress) {
  if (window.RegExp) {
    var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
    var reg2str =
      "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,4}|[0-9]{1,4})(\\]?)$";
    var reg1 = new RegExp(reg1str);
    var reg2 = new RegExp(reg2str);
    if (!reg1.test(EmailAddress) && reg2.test(EmailAddress)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (EmailAddress.indexOf("@") >= 0) {
      return true;
    } else {
      return false;
    }
  }
}
function rest(a, b, c, d) {
  r = b - a.value.length;
  if (r < 0) r = 0;
  if ((e = document.getElementById(c)) != null) e.innerHTML = r;
  if (a.value.length > b) a.value = a.value.substr(0, b);
}
function page_tv() {
  tv++;
  window.setTimeout("page_tv()", 1000);
}
var chk;
function check_form(f, g) {
  if (f.elements["absender_nachname"].value == "") {
    alert("Bitte dieses Feld ausfüllen: \n(Ihr Nachname)");
    f.elements["absender_nachname"].focus();
    return false;
  }

  if (f.elements["absender_strasse"].value == "") {
    alert("Bitte dieses Feld ausfüllen: \n(Ihre Strasse)");
    f.elements["absender_nachname"].focus();
    return false;
  }

  if (f.elements["absender_land"].value == "") {
    alert("Bitte dieses Feld ausfüllen: \n(Ihre Land)");
    f.elements["absender_nachname"].focus();
    return false;
  }

  if (f.elements["absender_mail"].value == "") {
    alert("Bitte alle Pflichtfelder ausf\u00FCllen! \n(Ihre E-Mail Adresse)");
    f.elements["absender_mail"].focus();
    return false;
  } else {
    if (!VerifyEmailAddress(f.elements["absender_mail"].value)) {
      alert(
        "Bitte geben Sie eine g\u00FCltige E-Mail Adresse ein! \n(Ihre E-Mail Adresse)"
      );
      f.elements["absender_mail"].focus();
      return false;
    }
  }
  if (f.elements["captcha_code_number"].value == "") {
    alert(
      "Bitte alle Pflichtfelder ausf\u00FCllen! \n(Sicherheitscode eingeben!)"
    );
    f.elements["captcha_code_number"].focus();
    return false;
  }
  if (navigator.appName == "Microsoft Internet Explorer") {
    for (i = 0; i < f.length; i++) {
      var e = f.elements[i];
      if (e.type == "submit" || e.type == "reset") e.disabled = true;
    }
  }
  if (f.elements["page_tv"]) {
    f.elements["page_tv"].value = tv;
  }
  return true;
}
/* ]]> */
