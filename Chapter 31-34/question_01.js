// Write a program that displays current date and time in your browser.

document.write(
  "------------------------------- Write a program that displays current date and time in your browser ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 01 -------------------------------------- <br><br>"
);

let date = new Date();

let curr_date = date.toString();

document.write(`The current date & time is: <br>${curr_date}`);
