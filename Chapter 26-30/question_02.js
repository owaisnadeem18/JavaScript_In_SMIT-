// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write(
  "------------------------------- Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 02 -------------------------------------- <br><br>"
);

let neg_float = prompt("Enter a negative floating point number: ");

if (isNaN(neg_float) || neg_float >= 0) {
  alert("Invalid Input !!! You can only write negative floating point number");
} else {
  document.write(`The number is ${neg_float}  <br><br>`);
  document.write(
    `The number in round off is ${Math.round(neg_float)} <br><br>`
  );
  document.write(`The number in floor is ${Math.floor(neg_float)} <br><br>`);
  document.write(`The number in ceil is ${Math.ceil(neg_float)} <br><br>`);
}
