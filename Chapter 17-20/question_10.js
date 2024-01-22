// Write a program to print multiples of 5 ranging 1 to 100.

// Question # 10

let num = 5;

document.write(
  " ~--------------------------------------------------- A program to print the multiples of 05 ranging from 1 to 100 in an Array ---------------------------------------------------~  "
);

numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(num * i);
}

document.write("<br><br>", numbers.join(","));
