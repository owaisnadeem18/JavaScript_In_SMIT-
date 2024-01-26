document.write(
  "------------------------------- Write a program that takes a positive integer from the user & displays the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 01 -------------------------------------- <br><br>"
);

let num = prompt("Enter a positive number ");

// Convert the input to a float
let float_value = parseFloat(num);

if (isNaN(float_value) || float_value <= 0) {
  alert("Invalid Input! Please enter a positive number.");
} else {
  document.write("a. The Number Entered by the user is: ", float_value, "<br>");
  document.write(
    "b. The Round Off value of the number is: ",
    Math.round(float_value),
    "<br>"
  );
  document.write(
    "c. The Floor value of the number is: ",
    Math.floor(float_value),
    "<br>"
  );
  document.write(
    "d. The Ceil value of the number is: ",
    Math.ceil(float_value),
    "<br>"
  );
}
