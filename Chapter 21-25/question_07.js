//  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// Question # 07

document.write(
  "-------------------------------  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 07 --------------------------------------<br>"
);

let str = "Hyderabad";
document.write("City: ", str, "<br>");

let replace = str.replace("Hyder", "Islam");

document.write("The replaced City is :", replace);
