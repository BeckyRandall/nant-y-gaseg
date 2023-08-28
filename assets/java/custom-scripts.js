// FADE OUT FOR HERO OVERLAY

// When the user scrolls the page, run the fast fade function
window.onscroll = function () { fastfade() };

function fastfade() {
    var hero = document.getElementById("hero-overlay");
    var scroll = 100 - window.pageYOffset;
    var setopacity = scroll / 100;
    hero.style.opacity = setopacity;
}


//INFO NAV CENTRE CIRCLE IMAGE REPLACEMENT
//--
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "nant-y-gaseg/assets/imgs/barnview-info.webp",
    "nant-y-gaseg/assets/imgs/weddingwellies-info.webp",
    "nant-y-gaseg/assets/imgs/retreat-hero-info.webp",
    "nant-y-gaseg/assets/imgs/wildflowerfield.webp"
);

//stay
document.getElementById("info-nav-stay").addEventListener("mouseover", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "url(nant-y-gaseg/assets/imgs/barnview-info.webp)";
}, false);

document.getElementById("info-nav-stay").addEventListener("mouseout", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "";
}, false);

//celebrate
document.getElementById("info-nav-celebrate").addEventListener("mouseover", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "url(nant-y-gaseg/assets/imgs/weddingwellies-info.webp)";
}, false);

document.getElementById("info-nav-celebrate").addEventListener("mouseout", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "";
}, false);

//retreat
document.getElementById("info-nav-retreat").addEventListener("mouseover", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "url(nany-y-gaseg/assets/imgs/retreat-hero-info.webp)";
}, false);

document.getElementById("info-nav-retreat").addEventListener("mouseout", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "";
}, false);

//blog
document.getElementById("info-nav-blog").addEventListener("mouseover", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "url(nant-y-gaseg/assets/imgs/wildflowerfield.webp)";
}, false);

document.getElementById("info-nav-blog").addEventListener("mouseout", function () {
    document.getElementById("info-nav-center").style.backgroundImage = "";
}, false);



