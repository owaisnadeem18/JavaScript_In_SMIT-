// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

let a = prompt("Enter a number : ");

if (a % 3 == 0) {
  document.write("The number " + a + " is exactly divisble by 3");
} else {
  document.write("The number " + a + " is NOT exactly divisble by 3");
}
