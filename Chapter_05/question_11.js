// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

let born_year = 2003;
let current_year = 2023;

let age = current_year - born_year;
document.write("***** Age Calculator ***** <br>");

document.write("The current year is : " + current_year + "<br>");
document.write("Your year of birth is : " + born_year + "<br>");

// document.write(age);
document.write("Your Age is = " + age);
