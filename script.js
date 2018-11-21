var buttons = document.querySelectorAll('.button, .buttons');

buttons.forEach(element => { element.addEventListener("click", control)});

var session = "work";
var timer;
var state = 0; //0:stopped, 1:running, 2: paused
var audio = document.querySelector('audio');
function control(e){
	
	switch(e.target.id){

		case "play":
		case "pause":
		case "reset":
			runTimer(e.target.id);
			break;
		case "workplus":
		case "workminus":
		case "breakplus":
		case "breakminus":
			sessionTimes(e.target.id)	
			break;
		default:
			break;
	}
}
function runTimer(button){
	var display = document.querySelector("#counter");
	var interval = document.querySelector("#work");
	var sessionDisplay = document.querySelector("#stateLabel");

	if (state == 0 ){
		// stopped
		if (button == "play"){
			
			state = 1;
			display.textContent = interval.textContent;
			sessionDisplay.textContent = "Work";
			timer = window.setInterval(displayUpdate, 1000);

		}
	} else if (state == 1){
		// running
		if (button == "reset") {
			
			window.clearInterval(timer);
			state = 0;
			display.textContent = "00:00";
			sessionDisplay.textContent = "";
			
		} else if (button == "pause"){

			pauseValue = sessionDisplay.textContent;
			state = 2;
			window.clearInterval(timer);
			sessionDisplay.textContent = "Paused";
			
		}
	} else { 
		//state == 2
		//paused
		if (button == "reset") {
			
			state = 0;
			display.textContent = "00:00";
			sessionDisplay.textContent = "";
			pauseValue = "";

		} else if (button == "play"){

			state = 1; 
			timer = window.setInterval(displayUpdate, 1000);
			sessionDisplay.textContent = pauseValue;
		}

	}

}

function displayUpdate() {
	var display = document.querySelector("#counter");
	var sessionDisplay = document.querySelector("#stateLabel");

	var secondsValue = display.textContent.slice(display.textContent.indexOf(":")+1);
	var minutesValue = display.textContent.slice(0, display.textContent.indexOf(":"));
	
	var seconds = parseInt(secondsValue) + 60*parseInt(minutesValue);

	if ( seconds == 0 ){
		//switch
		var interval;
		var audio;
		if(session == "work"){
			interval = document.querySelector("#break");
			session = "break";
			sessionDisplay.textContent = "Rest"
		} else {
			interval = document.querySelector("#work")
			session = "work";
			sessionDisplay.textContent = "Work"
		}
		display.textContent = interval.textContent;
		
		audio.play();

	} else {
		seconds--;
		minutesValue = (seconds/60 > 9 ? ""+Math.floor(seconds/60) : "0"+Math.floor(seconds/60));
		secondsValue = (Math.floor(seconds%60) > 9 ? ":"+Math.floor(seconds%60) :":0"+Math.floor(seconds%60));
		display.textContent = minutesValue + secondsValue;
	}

}

function sessionTimes(button){
		
	var element;
	
	if(button == "workplus" || button == "workminus" ){
		element = "work";
	} else {
		element = "break";
	}

	var setTime = document.querySelector(`#${element}`)
	
	var text = setTime.textContent;

	var minutes = parseInt(text.slice(0,text.indexOf(":")));

	if (button == "workplus" || button == "breakplus"){
		minutes++;
	} else {
		if (minutes > 0){
			minutes--;
		}
	}

	if(minutes < 10){ 
		text = "0";
	} else {
		text = "";
	}

	text = text + minutes + ":00";

	setTime.textContent = text;

}

function msg(content)
{
	console.log(content);
}