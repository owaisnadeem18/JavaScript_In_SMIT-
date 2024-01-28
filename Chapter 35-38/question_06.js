// Write a function that computes factorial of a number

// Question # 06

document.write(
  "----------------------------- Question 06 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a function that computes factorial of a number ----------------------------- <br> "
);

let fact_func = (a) => {
  let fact = 1;
  if (a == 0 || a == 1) {
    return 1;
  } else {
    for (let i = 1; i <= a; i++) {
      fact *= i;
    }
  }

  return fact;
};

let num = prompt("Enter the number whose factorial you want to get: ");

num = parseInt(num);

document.write(`The factorial of the ${num} is: ${fact_func(num)}`);
