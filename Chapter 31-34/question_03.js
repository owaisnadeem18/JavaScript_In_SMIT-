// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

document.write(
  "------------------------------- Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 03 -------------------------------------- <br><br>"
);

let days_array = [
  "Sunday",
  "Monday ",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();

let curr_date = date.toString();

let day = date.getDay();

let split_day = days_array[day].slice(0, 3);

document.write("Today is = ", split_day);
