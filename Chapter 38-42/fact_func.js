// Write a program which can find the factorial of a number

let fact_function = (num) => {
  if (isNaN(num)) {
    alert("Please Enter a valid input");
  } else if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * fact_function(num - 1);
  }
};

let num = +prompt("Enter a number for finding factorial = ");

console.log(`The factorial of ${num} is = ${fact_function(num)}`);
