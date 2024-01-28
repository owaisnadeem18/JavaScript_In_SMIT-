// // Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

document.write(
  "-------------------------------// // Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 11 -------------------------------------- <br><br>"
);

let date = new Date();

// Extract the hours from the date:

let curr_hours = date.getHours();

document.write("The Current Date and Time is: ", date);

date.setHours(curr_hours + 1);

document.write("<br>");

document.write("Current Date & Time 01 hour ahead is: ", date);
