// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// here we have to start solving this task # 03

let a_variable; // just declare

// Now we have to show it's value on our browser
document.write(
  "The value of the variable after just declaration is = ",
  a_variable + "<br>"
);

a_variable = 34; // Initialize it with a number

document.write(
  "The initial value of the variable is " +
    a_variable +
    " in our browser" +
    "<br>"
);

a_variable_incremented = ++a_variable;

document.write(
  "The incremented value of the variable is " +
    a_variable_incremented +
    " in our browser" +
    "<br>"
);

// Add 07 to the incremental variable

a_variable_incremented += 7;

document.write("Value after addition is: " + a_variable_incremented + "<br>");

// Decrease the value by 01 in it
a_variable_incremented = --a_variable_incremented;

variable_after_decrementation = a_variable_incremented;

document.write(
  "Value after decrementation is: " + variable_after_decrementation + "<br>"
);

// Now divide the variable's value by 03 and then show the remainder as an output

let remainder_is = variable_after_decrementation % 3;

document.write(
  "The value of the remainder is : " +
    remainder_is +
    " after dividing it with 03"
);
