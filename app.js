document.getElementById("compose-section").style.display = "none";

document.getElementById("compose-btn").addEventListener('click', toggleSection);

document.getElementById("close-compose").addEventListener('click', closeCompose);

function toggleSection() {
    document.getElementById("compose-section").style.display = "block";
}

function closeCompose() {
    document.getElementById("compose-section").style.display = "none";
}