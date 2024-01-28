// Write a function that adds two numbers (input by user) and returns the sum of two numbers

// Question 03

document.write(
  "----------------------------- Question 03 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a function that adds two numbers (input by user) and returns the sum of two numbers ----------------------------- <br> "
);

let func = () => {
  let num1 = prompt("Enter 1st Number = ");
  let num2 = prompt("Enter 2nd Number = ");
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1 + num2;
};

document.write(func());
