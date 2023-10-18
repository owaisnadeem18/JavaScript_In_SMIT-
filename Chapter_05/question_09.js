// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

let dollars = 10;
let riyals = 25;

one_dollar_into_rupee = 1 * 104.8;

_dollar_into_rupee = one_dollar_into_rupee * 10;

document.write("*****Currency in PKR***** <br>");

document.write("10 Dollars to pkr amount is " + _dollar_into_rupee + "<br >");

one_riyal_to_pkr = 1 * 28;

total_given_riyals_to_rupee = one_riyal_to_pkr * 25;

document.write(
  "25 Riyals to pkr amount is " + total_given_riyals_to_rupee + "<br>"
);

total_amount_in_pkr = _dollar_into_rupee + total_given_riyals_to_rupee;

document.write("The total amount in pkr is " + total_amount_in_pkr);
