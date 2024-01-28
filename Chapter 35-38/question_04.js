// Calculator:

// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// Question 04

document.write(
  "----------------------------- Question 04 ----------------------------- <br> "
);

document.write(
  "----------------------------- Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. ----------------------------- <br> "
);

// Addition Function:

let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let operator = prompt("Enter the operation among '+' , '-' , '/' , '*' ");

let num_1 = parseInt(num1);
let num_2 = parseInt(num2);

if (operator == "+") {
  let add = (a, b) => {
    return a + b;
  };

  document.write(
    `The sum of two numbers ${num1} + ${num2} is = ${add(num_1, num_2)}`
  );
} else if (operator == "-") {
  let sub = (a, b) => {
    return a - b;
  };

  document.write(
    `The subtraction of two numbers ${num1} - ${num2} is = ${sub(num_1, num_2)}`
  );
} else if (operator == "/") {
  let divide = (a, b) => {
    return a / b;
  };

  document.write(
    `The Division of two numbers ${num1} / ${num2} is = ${divide(num_1, num_2)}`
  );
} else if (operator == "*") {
  let multiply = (a, b) => {
    return a * b;
  };

  document.write(
    `The Mulitiplication of two numbers ${num1} x ${num2} is = ${multiply(
      num_1,
      num_2
    )}`
  );
} else {
  alert("Dear User Please enter a valid operator i.e '+' , '-' , '*' , '/' ");
}
