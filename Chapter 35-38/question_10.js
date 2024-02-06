// Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam

document.write(
  "----------------------------- Question 10 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam ----------------------------- <br><br> "
);

let isPalindrome = (str) => {
  str = str.toLowerCase();

  let reversed_Str = str.split("").reverse().join("");

  if (reversed_Str == str) {
    document.write(
      `The entered string was ${str} , reversed string is ${reversed_Str} and the string is palindrome`
    );
  } else {
    document.write(
      `The entered string was "${str}" , reversed string is "${reversed_Str}" and the "string is not palindrome"`
    );
  }
};

let string = prompt("Enter a string: ");

isPalindrome(string);
