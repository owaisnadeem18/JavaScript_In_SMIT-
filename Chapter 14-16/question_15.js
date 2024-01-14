// Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:

let phone_manufact = ["Apple", "Samsung", "Motorola", "Sony", "Nokia", "Haier"];

document.write("The Phone Manufacturers are: </br>");

for (let i = 0; i < phone_manufact.length; i++) {
  document.write("</br>", phone_manufact[i], "</br>");
}
