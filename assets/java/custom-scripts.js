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

//stay
document.getElementById("info-nav-stay").addEventListener("mouseover", function () {
    console.log("on")
    document.getElementById("info-nav-center").style.backgroundImage = "url(../assets/imgs/barnview.webp)";
}, false);

document.getElementById("info-nav-stay").addEventListener("mouseout", function () {
    console.log("off")
    document.getElementById("info-nav-center").style.backgroundImage = "";
}, false);

//celebrate
document.getElementById("info-nav-celebrate").addEventListener("mouseover", function () {
    console.log("on")
    document.getElementById("info-nav-center").style.backgroundImage = "url(../assets/imgs/carousel1.webp)";
}, false);

document.getElementById("info-nav-celebrate").addEventListener("mouseout", function () {
    console.log("off")
    document.getElementById("info-nav-center").style.backgroundImage = "";
}, false);

//retreat
document.getElementById("info-nav-retreat").addEventListener("mouseover", function () {
    console.log("on")
    document.getElementById("info-nav-center").style.backgroundImage = "url(../assets/imgs/DSC_9129-Edit.webp)";
}, false);

document.getElementById("info-nav-retreat").addEventListener("mouseout", function () {
    console.log("off")
    document.getElementById("info-nav-retreat").style.backgroundImage = "";
}, false);

//blog
document.getElementById("info-nav-blog").addEventListener("mouseover", function () {
    console.log("on")
    document.getElementById("info-nav-center").style.backgroundImage = "url(../assets/imgs/wildflowerfield.webp)";
}, false);

document.getElementById("info-nav-blog").addEventListener("mouseout", function () {
    console.log("off")
    document.getElementById("info-nav-center").style.backgroundImage = "";
}, false);



