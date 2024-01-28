// Write a program to ask the user about his age. Calculate and show his birth year in your browser

document.write(
  "------------------------------- // Write a program to ask the user about his age. Calculate and show his birth year in your browser ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 13 -------------------------------------- <br><br>"
);

let ask_user = prompt("Enter Your Date Of Birth");

let birth_year = new Date(ask_user);

let curr_date = new Date();

let diff = curr_date - birth_year;

let years = diff / (1000 * 60 * 60 * 24 * 365);

document.write("Your Date of Birth is: ", birth_year, "<br>");
document.write("You are : ", Math.round(years), " Years old", "<br>");
