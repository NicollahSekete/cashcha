//check user pin is correct
let pin = 1234;
let attempt = 3;

while(true) {
let userInput = prompt("please enter pin");
	let pin = 1234;
	console.log(pin);
	if (userInput == pin) {
        alert("correct pin");
		break;
	} else {
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if(attempt == 0){
            pin = false;
            break;
        }
        
    }
}