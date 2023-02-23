var defaultSecs = 0;
var defaultMinutes = 15;
var secs = defaultSecs;
var minutes = defaultMinutes;

function reset() {
    container.classList.add("explosion");
     setTimeout(function() {
        container.classList.remove("explosion");
        secs = defaultSecs;
        minutes = defaultMinutes;
        console.log('RESET');
        insertData(); // function defined in prices.js
     }, 1000);
}

function updateClock () {
    if (secs == 0 && minutes == 0) {
        reset();
    }
    if (secs == 0) {
        secs = 60;
        minutes--;
    }
    secs--;
}

function showTime() {
    updateClock()
    var m = (minutes < 10) ? "0" + minutes : minutes;
    var s = (secs < 10) ? "0" + secs : secs;
    if (minutes < 0) {
        m = "00";
    }
    var time = m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();

var container = document.getElementById("container");

