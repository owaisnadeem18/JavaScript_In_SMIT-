// Question # 05. Write a program that
// a). Store correct password in a JS variable.
// b). Asks user to enter his/her password
// c). Validate the two passwords:
// i). Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

let password = prompt("Enter a password");
// password has been stored in a variable

// Now ask the user to confirm his password
let confirm_password = prompt("Enter password one again to confirm it ");

if (password == confirm_password) {
  alert(" Password match ! So your Password has been succesfully Updated !");
} else {
  alert("Your entered password and confirmed passwords are not same ");
}
