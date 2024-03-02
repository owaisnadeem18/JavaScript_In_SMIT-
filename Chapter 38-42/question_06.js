/* Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */

function removing_Vowels_Func(str) {
  if (typeof str != "string") {
    alert("Please Enter a valid string input");
  } else {
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let result = "";
    for (var i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result += str[i];
      }
    }

    return result;
  }
}

let string = prompt("Enter a string");

console.log(
  `The entered string was ${string} & the updated string after removing the vowel letters is ${removing_Vowels_Func(
    string
  )} `
);
