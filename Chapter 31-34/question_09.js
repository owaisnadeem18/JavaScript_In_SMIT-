// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// Here, I am declaring the date of this Ramadan 2024

document.write(
  "------------------------------- // Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 09 -------------------------------------- <br><br>"
);

let date = new Date("10 March 2024");

let past_ramadan = new Date("June 18 2015");

let diff = date - past_ramadan;

let minutes = diff / (1000 * 60);
console.log(minutes);

let days = diff / (1000 * 60 * 24 * 60);
console.log(days);

document.write(`${days} Days have been passed since 1st Ramadan 2015`);
