// Given an array of numbers, identify and print all prime numbers.

const numbersArray = [2, 7, 15, 3, 11, 6, 23, 8, 19, 4];

document.write("The numbers are: <br>");

for (let i = 0; i < numbersArray.length; i++) {
  document.write(numbersArray[i] + ",");
}

document.write("<br> <br>");

document.write("The Prime numbers are: <br>");

let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Print prime numbers
for (let j = 0; j < numbersArray.length; j++) {
  if (isPrime(numbersArray[j])) {
    document.write(numbersArray[j] + ", ");
  }
}
