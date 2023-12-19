// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// initializing the integer variables
let int1, int2;

int1 = prompt("Dear User ! Pls enter 1st Number = ");
int2 = prompt("Dear User ! Pls enter 2nd Number = ");

if (isNaN(int1) || isNaN(int2)) {
  alert(
    `You entered "${int1}" and "${int2}" which are "invalid" !!! As it is not integer data`
  );
} else if (int1 > int2) {
  document.write(`${int1} is greater than ${int2}`);
} else if (int2 > int1) {
  document.write(`${int2} is greater than ${int1}`);
} else if (int1 == int2) {
  document.write(`${int1} is equal to ${int2}`);
}
