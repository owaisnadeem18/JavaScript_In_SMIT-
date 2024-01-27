// For Example , if you want to get the days of the weeks as the text data , then for this purpose you can use the following code:

let days_Array = [
  "Sunday",
  "Monday",
  "Tuesday ",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();

let day = date.getDay();

let get_day = days_Array[day];

console.log(get_day);
