// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

let multiplication_table =
  parseInt(prompt("Enter a number to see it's table till 10 times ")) || 5;

// let number = parseInt(multiplication_table || 5);

document.write(
  "The Multiplication Table of : " + multiplication_table + " :" + "<br>"
);

document.write(
  multiplication_table + "*" + 1 + "=" + multiplication_table * 1 + "<br>"
);
document.write(
  multiplication_table + "*" + 2 + "=" + multiplication_table * 2 + "<br>"
);
document.write(
  multiplication_table + "*" + 3 + "=" + multiplication_table * 3 + "<br>"
);
document.write(
  multiplication_table + "*" + 4 + "=" + multiplication_table * 4 + "<br>"
);
document.write(
  multiplication_table + "*" + 5 + "=" + multiplication_table * 5 + "<br>"
);
document.write(
  multiplication_table + "*" + 6 + "=" + multiplication_table * 6 + "<br>"
);
document.write(
  multiplication_table + "*" + 7 + "=" + multiplication_table * 7 + "<br>"
);
document.write(
  multiplication_table + "*" + 8 + "=" + multiplication_table * 8 + "<br>"
);
document.write(
  multiplication_table + "*" + 9 + "=" + multiplication_table * 9 + "<br>"
);
document.write(
  multiplication_table + "*" + 10 + "=" + multiplication_table * 10 + "<br>"
);
