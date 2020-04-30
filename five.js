let attempt = 3; 


function validate()
{

let password = document.getElementById("password").value;

if ( password.value =4 )
{
alert ("Login successfully");
return false;
}

else
{
attempt --;
alert("You have left "+attempt+" attempt;");


if( attempt == 0)
{

document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}