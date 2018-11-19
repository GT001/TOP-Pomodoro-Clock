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
		minutes--;
	}

	if(minutes < 10){ 
		text = "0";
	} else {
		text = "";
	}

	text = text + minutes + ":00";

	setTime.textContent = text;

	msg(minutes);
	msg(text);
}

function msg(content)
{
	console.log(content);
}