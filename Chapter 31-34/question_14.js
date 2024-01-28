// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// Write a program to ask the user about his age. Calculate and show his birth year in your browser

document.write(
  "------------------------------- Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b. Current Month c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date) ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 14 -------------------------------------- <br><br>"
);

document.write("<h1>K Electric Bill</h1> <br><br>");

let customer_Name = "Owais";

document.write("Customer Name ", customer_Name, "<br>");
let month = "Janaury";
document.write("Month : ", month, "<br>");

let units = 210;

let charges_per_unit = 21;

document.write("Number of Units: ", units, "<br><br><br>");

let bill_before_due = units * charges_per_unit;

let Late_fine = 410;

bill_after_due = bill_before_due + Late_fine;

document.write("Net Amount Payable within Due Date: ", bill_before_due, "<br>");
document.write(
  "Late Payment Charges = ",
  "Your Bill",
  "+",
  Late_fine,
  " (late submission charges)",
  "<br>"
);
document.write("Net Amount Payable After Due Date: ", bill_after_due);
