// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let first_number = parseInt(prompt("Enter The first number = "));
let second_number = parseInt(prompt("Enter The second number = "));
let operation = prompt("Enter the operator (+, -, *, /, %) : ");

if (operation == "+") {
  document.write(
    "The adition of two numbers is " + first_number + second_number + "<br>"
  );
} else if (operation == "-") {
  let Subtraction = first_number - second_number;
  document.write("The Subtraction of two numbers is " + Subtraction + "<br>");
} else if (operation == "*") {
  document.write(
    "The Multiplication of two numbers is " +
      first_number * second_number +
      "<br>"
  );
} else if (operation == "/") {
  if (second_number == 0) {
    document.write("Zero can't be divided by any number !!! ");
  } else {
    document.write(
      "The Division of two numbers is " + first_number / second_number + "<br>"
    );
  }
} else if (operation == "%") {
  document.write(
    "The Modulus of two numbers is " + (first_number % second_number) + "<br>"
  );
}
