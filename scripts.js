
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

//Add close button to all elements in the list

var myNodeList = document.getElementsByTagName('li');
var i;
for(i=0 ;  i<myNodeList.length ;i++){
    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span)
}
// Function to add actions to the list
function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById("td").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t)

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("td-List").appendChild(li);
    }
      document.getElementById("td").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }

}

