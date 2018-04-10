/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = null; // 325.00
var checkBalance = false; // true
var isActive = true; // false

// your code goes here
if (checkBalance) {
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  }
  else if (!isActive) {
    console.log("Your account is no longer active.");
  } 
  else if(balance === 0 || balance === null || balance === isNaN) {
    console.log("Your account is empty.");
  }
  else {
    console.log("Your balance is negative. Please contact bank.");
  }
}
else {
  console.log("Thank you. Have a nice day!");
}
