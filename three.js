//withdraw from bank account
//
//**

const makeWithdrawal = (balance, withdrawAmnt) => {

  let newBalance = balance - withdrawAmnt;
  //let balance = (balance - withdrawAmnt);
  if(newBalance < 250) {
    console.log("insuffecient funds")
  }
  if(newBalance > 250){
    console.log(`now withdrawing  ${withdrawAmnt}`)
  }
}
makeWithdrawal(300, 20)


