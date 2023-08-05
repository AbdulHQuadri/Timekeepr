
var timeoutId;
var isPaused = false;
var isStarted = false; 
var originalMinutes = 0;

var alertShown = false; // New flag to track if the alert has been shown

//  Using setInterval

function start_timer(duration,display){

    var timer = duration,minutes,seconds

    var intervalId = setInterval(function(){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        };
    },1000);

    document.getElementById('stop-button').addEventListener('click', function () {
        clearInterval(intervalId);
    });
}


    document.getElementById('start-button').addEventListener('click', function(){
        
        var count = 60 * parseInt(document.getElementById("length").value);
        display = document.getElementById('time');
        start_timer(count,display)
    });                                                                                   

