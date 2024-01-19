// Question # 06

// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

document.write("Counting <br>", numbers, "<br>");

document.write("<br>Reverse Counting <br>", numbers.reverse(), "<br>");

even = [];
odd = [];
even_series = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    even.unshift(numbers[i]);
  } else {
    odd.unshift(numbers[i]);
  }
}

for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] % 2 == 0) {
    even_series.push(numbers[j], "k", "<br>");
  }
}

document.write(`<br> Even Numbers Counting <br> ${even} <br>`);
document.write(`<br> Odd Numbers Counting <br> ${odd} <br>`);
document.write(`<br> Series <br> ${even} <br>`);
