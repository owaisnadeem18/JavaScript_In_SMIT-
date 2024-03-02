/*Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence 
“Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui.*/

function countSuccessiveVowels(text) {
  let count = 0;
  text = text.toLowerCase(); // Convert the text to lowercase for case-insensitive matching

  for (let i = 0; i < text.length - 1; i++) {
    let currentChar = text[i];
    let nextChar = text[i + 1];

    switch (currentChar) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        switch (nextChar) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            count++; // Increment count if two vowels occur successively
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  return count;
}

// Example usage:
let sentence = "My name is Owais Nadeem";
let occurrences = countSuccessiveVowels(sentence);
console.log(
  "Number of occurrences of any two vowels in succession:",
  occurrences
);
