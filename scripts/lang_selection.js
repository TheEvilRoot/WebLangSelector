function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function handleLangSelection() {
    const value = readCookie("selected_lang");
    if (value != null && value != undefined && value == "en" || value == "bel" || value == "ru") {
        console.log("Selected " + value);
        window.location.href = window.location.href.split("/", 2)[0] + "/" + value;
    } else {
        console.log("No selected lang..." + value);
    }
}

function selectLang(lang) {
    createCookie("selected_lang", lang);
}

function unselectLang() {
    eraseCookie("selected_lang");
    window.location.href = "/";
}