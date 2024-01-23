// Repeat Q1 (Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.) using string concat() method.

// Question # 06

document.write(
  "------------------------------- Repeat Q1 (Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.) using string concat() method. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 06 --------------------------------------<br>"
);

let first_Name = prompt("Enter your First Name : ");
let last_Name = prompt("Enter your Last Name : ");

let full_name = first_Name.concat(" ", last_Name);

alert("Welcome !!! " + full_name);
