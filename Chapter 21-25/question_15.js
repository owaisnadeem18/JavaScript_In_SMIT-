// Write a program to take password as an input from user. The password must qualify these requirements:

// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long

// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// Question # 15

document.write(
  "-------------------------------  Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 15 -------------------------------------- <br><br>"
);

let password = prompt("Enter your password: ");

if (isNaN(password[0]) && password.length >= 6) {
  alert("Password has been set !!!");
} else if (password.length < 6) {
  if (!isNaN(password[0])) {
    alert("Invalid password , because it can not start from a number ");
  }
  alert("Invalid Password , Password should must be of 6 characters atleast");
} else if (!isNaN(password[0])) {
  alert("Invalid password , because it can not start from a number ");
}
