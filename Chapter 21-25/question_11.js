// Write a program that takes user input. Convert and show the input in title case.
// Question # 12

document.write(
  "-------------------------------// Write a program that takes user input. Convert and show the input in title case. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 11 -------------------------------------- <br><br>"
);

let input = prompt("Enter an input: ");

document.write("<br>");
let title_case = input[0].toUpperCase() + input.slice(1).toLowerCase();

document.write("User Input: ", input, "<br>");

document.write("Title Case: ", title_case);
