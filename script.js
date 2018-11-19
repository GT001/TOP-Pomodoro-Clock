var buttons = document.querySelectorAll('.button, .buttons');

buttons.forEach(element => { element.addEventListener("click", control)});

var running = false;

function control(e){
	
	switch(e.target.id){

		case "play":
			break;
		case "pause":
			break;
		case "reset":
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

function sessionTimes(button){
	msg("here")
	var element;
	if(button == "workplus" || button == "workminus" ){
		element = "work";
	} else {
		element = "break";
	}

	var setTime = document.querySelector($element)
	msg(setTime);
}

function msg(content)
{
	console.log(content);
}