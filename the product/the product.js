var modal_1 = document.getElementById("real-estate-modal");
var btn_1 = document.getElementById("real-estate-arrow-for-checkbox-btn");
var span_1 = document.getElementsByClassName("real-estate-close")[0];

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
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }

var modal_2 = document.getElementById("electronic-modal");
var btn_2 = document.getElementById("electronic-arrow-for-checkbox-btn");
var span_2 = document.getElementsByClassName("electronic-close")[0];

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


var modal_3 = document.getElementById("fashion-modal");
var btn_3 = document.getElementById("fashion-arrow-for-checkbox-btn");
var span_3 = document.getElementsByClassName("fashion-close")[0];

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


var modal_4 = document.getElementById("car-modal");
var btn_4 = document.getElementById("car-arrow-for-checkbox-btn");
var span_4 = document.getElementsByClassName("car-close")[0];

btn_4.onclick = function() {
    modal_4.style.display = "block";
}
span_4.onclick = function() {
    modal_4.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal_4) {
        modal_4.style.display = "none";
    }
});


var modal_5 = document.getElementById("contact-us-modal");
var btn_5 = document.getElementById("contact-us-btn");
var span_5 = document.getElementsByClassName("contact-us-close")[0];

btn_5.onclick = function() {
    modal_5.style.display = "block";
}
span_5.onclick = function() {
    modal_5.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal_5) {
        modal_5.style.display = "none";
    }
});

var modal_6 = document.getElementById("about-us-modal");
var btn_6 = document.getElementById("about-us-btn");
var span_6 = document.getElementsByClassName("about-us-close")[0];

btn_6.onclick = function() {
    modal_6.style.display = "block";
}
span_6.onclick = function() {
    modal_6.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal_6) {
        modal_6.style.display = "none";
    }
});

var modal_7 = document.getElementById("guide-and-advice-modal");
var btn_7 = document.getElementById("guide-and-advice-btn");
var span_7 = document.getElementsByClassName("guide-and-advice-close")[0];

btn_7.onclick = function() {
    modal_7.style.display = "block";
}
span_7.onclick = function() {
    modal_7.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal_7) {
        modal_7.style.display = "none";
    }
});