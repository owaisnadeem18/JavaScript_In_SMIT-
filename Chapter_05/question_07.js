// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

let price_of_item_1 = 650;
let quantity_of_item_1 = 3;
let price_of_item_2 = 100;
let quantity_of_item_2 = 7;
let shipping_charges = 100;

total_charges_of_shopping =
  price_of_item_1 * quantity_of_item_1 +
  price_of_item_2 * quantity_of_item_2 +
  shipping_charges;

document.write("Shopping Cart" + "<br>");

document.write("The price of Item 01 is " + price_of_item_1 + "<br>");
document.write("The quantity of Item 01 is " + quantity_of_item_1 + "<br>");
document.write("The price of Item 02 is " + price_of_item_2 + "<br>");
document.write("The quantity of Item 02 is " + quantity_of_item_2 + "<br>");
document.write(
  "The Total Shopping charges is " + total_charges_of_shopping + "<br>"
);
