// write a function that return the factorial value of function

let num = 3;

let fact = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
};

console.log("The factorial of ", num, " is ", fact(num));
