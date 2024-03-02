/* A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer. */

// function to withdraw amount
let Cashier_function = (cash) => {
  let currency_1 = 100;
  let currency_2 = 50;
  let currency_3 = 10;
  notes_of_100 = Math.floor(cash / currency_1);
  cash = cash % currency_1;
  notes_of_50 = Math.floor(cash / currency_2);
  cash = cash % currency_2;
  notes_of_10 = Math.floor(cash / currency_3);
  return console.log(
    `You will have ${notes_of_100} 'hundreds', ${notes_of_50} 'fifty' and ${notes_of_10} ten notes `
  );
};

let amount_withdrawn = +prompt("Enter the amount, you want to withdraw = ");
console.log(Cashier_function(amount_withdrawn));
