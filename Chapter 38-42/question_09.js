/* Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour. */

// create a function, to calculate the overtime hours for any employee.

let calculate_Overtime = (ghntay) => {
  if (isNaN(ghntay)) {
    alert("Invalid Input \nPlease enter a valid integer input ");
  }
  if (ghntay > 40) {
    let overtime_hours = ghntay - 40;
    let extra_pay = 12.0 * overtime_hours;
    return console.log(
      `The extra hours work done by this employee is = ${overtime_hours} and the extra pay for him is ${extra_pay} Rs.`
    );
  } else {
    return console.log("No overtime hours worked by this employee");
  }
};

let hours_worked = +prompt("Enter the hours worked by employess = ");

calculate_Overtime(hours_worked);
