var user_name = prompt("Enter your name: ");
var user_password = prompt("Enter your password: ");
var User_Password_Confirmation = prompt("Enter your confirm password: ");
var user_email = prompt("Enter your email: ");
var user_number = prompt("Enter your number: ");

if (user_name === null || user_name.trim() === "") {
  alert("Please fill in the name input");
} else if (user_number === null || user_number.trim() === "") {
  alert("Please fill in the number input");
} else if (user_email === null || user_email.trim() === "") {
  alert("Please fill in the email input");
} else if (user_password === null || user_password.trim() === "") {
  alert("Please fill in the password input");
} else if (
  User_Password_Confirmation === null ||
  User_Password_Confirmation.trim() === ""
) {
  alert("Please fill in the password confirmation input");
}

if (user_password === User_Password_Confirmation) {
  alert("Successfully entered the password");
} else {
  alert("Wromg Password !!! ");
}
