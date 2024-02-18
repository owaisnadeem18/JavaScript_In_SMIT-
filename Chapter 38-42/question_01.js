// question 1. Write a custom function power ( a, b ), to calculate the value of 'a' raised to 'b'.

let ask_user = prompt("Enter a number ");
let b = prompt("Enter Power ");

let PowerFunct = (a, b) => {
  return Math.pow(a, b);
};

document.write(
  `The Power of '${ask_user}' raised to '${b}' is = ${PowerFunct(ask_user, b)}`
);
