//Change the user pin with validation 

while(true) {
	let userInput = prompt(`enter new password`);
	let newPass = ''
	console.log(newPass);
	if (userInput ==newPass.value.length >=4 ) {
		alert("password saved");
		break;
	} else {
		
		alert("please enter valid password");
	}
}
console.log('finish');