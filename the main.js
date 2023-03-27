var modal_1 = document.getElementById("contact-us-modal");
var btn_1 = document.getElementById("contact-us-btn");
var span_1 = document.getElementsByClassName("contact-us-close")[0];

btn_1.onclick = function() {
    modal_1.style.display = "block";
}
span_1.onclick = function() {
    modal_1.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal_1) {
        modal_1.style.display = "none";
    }
});

var modal_2 = document.getElementById("about-us-modal");
var btn_2 = document.getElementById("about-us-btn");
var span_2 = document.getElementsByClassName("about-us-close")[0];

btn_2.onclick = function() {
    modal_2.style.display = "block";
}
span_2.onclick = function() {
    modal_2.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal_2) {
        modal_2.style.display = "none";
    }
});

var modal_3 = document.getElementById("guide-and-advice-modal");
var btn_3 = document.getElementById("guide-and-advice-btn");
var span_3 = document.getElementsByClassName("guide-and-advice-close")[0];

btn_3.onclick = function() {
    modal_3.style.display = "block";
}
span_3.onclick = function() {
    modal_3.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal_3) {
        modal_3.style.display = "none";
    }
});