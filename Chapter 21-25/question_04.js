// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

// Question # 04

document.write(
  "------------------------------- Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser ------------------------------- <br>"
);
document.write(
  "--------------------------------------Question # 04--------------------------------------<br>"
);

let str = "Hello World";

let find_index = str.lastIndexOf("l");
document.write("String = ", str, "<br>");
document.write("Last Index of L = ", find_index);
