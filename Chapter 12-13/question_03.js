// Question # 03:

// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

let ask_num = parseInt(prompt("Enter a number = "));

if (ask_num > 1) {
  document.write("This number is +ve");
} else if (ask_num < 0) {
  document.write("This number is -ve");
} else if (ask_num == 0) {
  document.write("This number is zero");
} else {
  document.write("Please enter a valid number !!! ");
}
