// Write a program to take input remaining fuel in car (inlitres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

let litres = parseInt(prompt("Enter the fuel present in the car = "));

if (litres < 0.25) {
  document.write("Please refill the fuel !!! ");
}
