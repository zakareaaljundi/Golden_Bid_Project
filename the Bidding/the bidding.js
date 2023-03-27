// Set the date we're counting down to
var countDownDate = new Date("july 27, 2022 21:28:00").getTime();
var expired_container = document.getElementById("expired");
var winner_name = document.getElementById("winner").innerHTML;
// Update the count down every 1 second
var x = setInterval(function() {   
    // Get today's date and time
    var now = new Date().getTime();  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("days-time").innerHTML = days;
    document.getElementById("hours-time").innerHTML = hours;
    document.getElementById("minutes-time").innerHTML =  minutes;
    document.getElementById("seconds-time").innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        expired_container.style.display = "block";
        document.getElementById("expired1").innerHTML = "الفائز: " + winner_name;
        document.getElementById("days-time").innerHTML = "--";
        document.getElementById("hours-time").innerHTML = "--";
        document.getElementById("minutes-time").innerHTML = "--";
        document.getElementById("seconds-time").innerHTML = "--";
        }
}, 1000);