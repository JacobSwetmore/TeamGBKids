var myNav = document.getElementById('headerbackground');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop = 00 ) {
        myNav.classList.add("nav-coloured");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-coloured");
    }
};