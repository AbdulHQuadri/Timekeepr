var seconds = 5
var timeoutId;
var isPaused = false;
var isStarted = false; 
var originalMinutes = 0;
var minutes = 0;
var alertShown = false; // New flag to track if the alert has been shown



function countdown(){

    var minutes = parseInt(document.getElementById("length").value)
    timeoutId = setTimeout(countdown,1000);
    


    

    if (originalMinutes === 0 && !isStarted) {
        originalMinutes = minutes;
        isStarted = true;
    }

    
    var formatted_seconds = seconds < 10 ? "0" + seconds : seconds;                   
    document.getElementById('time').innerHTML = originalMinutes + ":" +  formatted_seconds ;
    
    if(originalMinutes > 0 || seconds > 0 ){

        if(seconds > 0){
            seconds--;
        }else{
            if(originalMinutes > 0 ){
                originalMinutes--
                seconds = 5
            }
            
        }
                                                    
    } else{
        if (!alertShown) { // Show the alert only once
            alertShown = true;
            alert("Countdown completed!");
            originalMinutes = 0;
            isStarted = false; // Reset the countdown start flag
            document.getElementById('time').innerHTML = originalMinutes + ":" +  formatted_seconds ; // Reset the display
            countdown()
        }
    }

    return false;
}

document.getElementById('pause-button').addEventListener('click', function () {
    clearTimeout(timeoutId);
    isPaused = true;
});

document.getElementById('start-button').addEventListener('click', function () {
    isPaused = false;
    countdown();
});


