// Write a function that displays current date & time in your browser

// Question 01

document.write(
  "----------------------------- Question 01 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a function that displays current date & time in your browser ----------------------------- <br> "
);

let curr_date_time = () => {
  let date = new Date();
  date = date.toString();
  return date;
};

document.write(" <br> The current Date & Time is: ", curr_date_time());
