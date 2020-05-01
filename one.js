


//original version that works console.log version//



//let pin = "1235" 
//if (pin = "1235") {
//  console.log("Correct pin")
//} else {
 // console.log("you have entered the wrong pin. please try again")
//}
//now try it with html



const pinNum=(pin)=>{
pin = prompt("enter your pin.") 
if (pin == "1235") {
  alert("Correct pin")
} else {
  alert("you have entered the wrong pin. please try again")
}
}
pinNum()