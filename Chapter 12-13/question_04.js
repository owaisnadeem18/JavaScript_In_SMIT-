// Question # 04

// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

let char = prompt("Enter a character(single word) = ");

if (char.length != 1 || !isNaN(char)) {
  alert("Invalid Input !!! (Please enter only one character from a-z)");
} else if (
  char == "a" ||
  char == "e" ||
  char == "i" ||
  char == "o" ||
  char == "u"
) {
  document.write(`The entered character is "${char}" is a "vowel" `);
} else {
  document.write(`The entered character is "${char}" is a "non-vowel" `);
}
