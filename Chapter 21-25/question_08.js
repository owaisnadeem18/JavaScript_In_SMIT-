//  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// Question # 08

document.write(
  "------------------------------- Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 08 -------------------------------------- <br><br>"
);

let str =
  "Ali and Sami are best friends. They play cricket and football together";

let replaced_str = str.replace(/and/g, "&");

document.write("The String was = ", str, "<br>");
document.write("The Replaced String is = ", replaced_str);

// Another way of Solving this question using split join string method:

// let str1 =
//   "Ali and Sami are best friends. They play cricket and football together";

// let replaced_char = str1.split("and").join("&");

// document.write("The String was = ", str1, "<br>");
// document.write("The Replaced Character is = ", replaced_char);
