//Change the user pin with validation 

//while(true) {
	//let userInput = prompt(`enter new password`);
	//let newPass = ''
	//console.log(newPass);
	//if (userInput ==newPass.value.length >=4 ) {
	//	alert("password saved");
	//	break;
	//} else {
		
	//	alert("please enter valid password");
	//}
//}
//console.log('finish');


let counter = 0
const toChangePin = (pin) => {
    pin = prompt("Please enter pin")
    while (true) {
        if (pin == "9999") {
            alert("correct pin")
            newPin = prompt("Enter New Pin")
            return alert("Your pin has changed")
        }
        else if (pin != "9999" && counter < 3) {
                alert("incorrect pin")
                counter++
        }
        else if (pin != "9999" && counter == 3) {
            alert("to many attempts")
            break
        }
    }
}
toChangePin()