// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:

// a. 50
// b. 50 kgs
// c. 50.2 kgs
// d. 50.2 kilograms

document.write(
  "------------------------------- // Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 5 b. 50 kg c. 50.2 kg d. 50.2 kilograms. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 07 -------------------------------------- <br><br>"
);

let weight = prompt("Dear User ! Please enter your weight");

weight = parseFloat(weight);

if (isNaN(weight)) {
  alert("Please Enter a valid integer or float input as your weight");
} else {
  document.write(
    "The weight of the user is ",
    Math.round(weight),
    " kgs",
    "<br>"
  );
}
