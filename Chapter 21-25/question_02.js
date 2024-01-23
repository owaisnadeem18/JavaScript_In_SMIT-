// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// Question # 02

document.write(
  "------------------------------- Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser ------------------------------- <br>"
);
document.write(
  "--------------------------------------Question # 02--------------------------------------<br>"
);

let a = prompt("Enter your favourite mobile phone model = ");

let length = a.length;

document.write("My favourite Phone is = ", a, "<br>");

document.write("Length of the string = ", length);
