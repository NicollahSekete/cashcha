//Deposit


//const newBala = () => {
//let balance = 600;
//let depNum = 260;
//let newBalance = balance+depNum;
//if(depNum > 250)
//  console.log("Sorry you can only deposit a max of 250 at one time");{
//    if(depNum <= 250)
//    console.log(`New balance is now ${newBalance}`)
//  }
//}

//newBala(depNum);

//
const deposit=(depositAmnt)=>{
  depositAmnt = prompt("How much would you like to deposit?") 
  if (depositAmnt <= 250) {
    alert(`Now depositing £ ${depositAmnt}`)
  } else {
    alert("Sorry you can only deposit a max of £250 at one time")
  }
  }
  deposit()
