// Question # 04

// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

let num = prompt("Enter a number to show it's multiplication table = ");
let length = prompt("Enter the length for the table = ");

for (let i = 1; i <= length; i++) {
  document.write(`${num} x ${i} = ${num * i} <br>`);
}
