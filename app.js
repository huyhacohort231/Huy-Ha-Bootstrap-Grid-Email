
document.getElementById("compose-section").style.display = "none";

document.getElementById("compose-btn").addEventListener('click', showCompose);

document.getElementById("close-compose").addEventListener('click', closeCompose);

document.getElementById("nav-hamburger").addEventListener('click', showNav);

document.getElementById("close-nav").addEventListener('click', closeNav);

let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
console.log(width);

if (width < 768) {
    console.log(width);
    document.getElementById("nav-section").style.display = "none";
}

function showCompose() {
    document.getElementById("compose-section").style.display = "block";
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 768) {
        document.getElementById("preview").style.display = "none";
    }
    if (width < 992) {
        document.getElementById("preview").style.display = "none";
    }
}

function closeCompose() {
    document.getElementById("compose-section").style.display = "none";
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    
    document.getElementById("preview").style.display = "block";
    
}

// Show nav-bar in mobile mode
function showNav() {
    document.getElementById("nav-section").style.display = "block";
}

// Hide nav-bar in mobile mode
function closeNav() {
    document.getElementById("nav-section").style.display = "none";
}