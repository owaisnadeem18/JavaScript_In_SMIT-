// Question 01
// Find the Factorial of a number entered by the user

// Solution:

document.write("<h3>Question 01</h3>");
document.write("<p>Find the Factorial of a number entered by the user</p>");

// Function of the factorial:

let Factorial_Func = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * Factorial_Func(num - 1);
  }
};

let num = prompt("Enter a number , to get the factorial = ");

document.write(
  `The number entered by the user is ${num} and the factorial is = ${Factorial_Func(
    num
  )}`
);
// Number entered by the user:
