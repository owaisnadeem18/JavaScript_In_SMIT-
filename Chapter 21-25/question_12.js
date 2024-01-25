// Write a program that converts the variable num to string.
// var num = 35.36; Remove the dot to display “3536” display in your browser.

// Question # 12

document.write(
  "-------------------------------Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 12 -------------------------------------- <br><br>"
);

var num = 35.36;

let str = num.toString();

let result_str = str.replace(".", "");

document.write("Number: ", num, "<br>");
document.write("Result: ", result_str);
