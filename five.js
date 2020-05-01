//Change pin with validation//



const changPin=(pin)=>{
    pin = prompt("enter your pin.") 
    if (pin == "1235") {
      alert("Correct pin");}
      
     newPin= prompt("What would you like to change it to?")
         if(newPin=="1234"){
         alert("Pin has succesffuly been changed.")
        } else {
            alert("incorrect pin form. Pin has not been changed.")}

        }
     
    changPin()