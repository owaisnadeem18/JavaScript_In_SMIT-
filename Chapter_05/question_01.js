// Write a program that take two numbers & add them in a new variable. Show the result in your browser.

let a = prompt("Enter 1st number = ");
let b = prompt("Enter 2nd number = ");

a = parseInt(a);
b = parseInt(b);

let sum = a + b;

document.write(
  "The sum of two numbers i.e " + a + " and " + b + " is = " + sum
);
