// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// Question # 01:

document.write(
  "------------------------------- Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. ------------------------------- <br>"
);
document.write(
  "--------------------------------------Question # 01--------------------------------------<br>"
);

let first_Name = prompt("Enter Your First Name = ");
let last_Name = prompt("Enter Your last Name = ");

let Full_Name;

Full_Name = first_Name + " " + last_Name;

alert("Welcome , " + Full_Name);
