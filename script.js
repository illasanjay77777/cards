function opencard() {
    document.getElementById("cover").style.transform = "rotateY(180deg)";
    document.getElementById("message").style.transform = "rotateY(360deg)";
}

function closecard() {
    document.getElementById("cover").style.transform = "rotateY(0deg)";
    document.getElementById("message").style.transform = "rotateY(180deg)";
}

