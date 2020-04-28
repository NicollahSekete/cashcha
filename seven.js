//Statement of actions of the transactions occurred. 
const todaysTransactions = (day) => {
    day = prompt("What day would you like to see the transactions from?")
    if (day == "monday"){
    alert( "Your current account had £5000")
     }
     else if (day == "tuesday"){
       alert ("Your current account had £3400")

    }else if (day == "Wednesday"){
        alert ("Your current account had £400")
     }
     else if (day == "Thursday"){
        alert ("Your current account had £5600")
     }else if (day == "friday"){
        alert ("You were overdrawn")
     }
     else if (day == "saturday"){
        alert ("Your account was overdrawn and charged £40")
     }
     else if (day == "sunday"){
        alert ("Your current account had £200")
     }
   else {
        alert ("That is not a day on this planet")
    }
}
    
     todaysTransactions()