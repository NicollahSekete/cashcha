///currency exchance

let balanceAcc = 106;
let forAcc = balanceAcc*1.5
let forAccTwo = balanceAcc*2
//let currency = prompt ("what currency do you want the money in?");

let withA = "E"

switch (withA) {
    case "E":
        console.log("now withdrawing" + "€" +forAcc);
        break;
 case "D":
    console.log("now withdrawing" + "$" + forAccTwo);
    break;
    default:
        console.log("now withdrawing" + "£" +balanceAcc)
        break;
}
