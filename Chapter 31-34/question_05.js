// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”

document.write(
  "------------------------------- Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month” ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 05 -------------------------------------- <br><br>"
);

let date = new Date();

let curr_date = date.getDate();

if (curr_date < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}
