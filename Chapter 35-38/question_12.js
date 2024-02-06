// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development

document.write(
  "----------------------------- Question 12 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development----------------------------- <br><br> "
);

let Find_Largest_Str = (str) => {
  let word = str.split(" ");

  let longest_str = "";
  let max_length = 0;

  for (let i = 0; i < word.length; i++) {
    let curr_length = word[i].length;

    if (curr_length > max_length) {
      longest_str = word[i];
      max_length = curr_length;
    }
  }

  return longest_str;
};

let str = prompt("Enter a string");

let largest_word = Find_Largest_Str(str);

document.write("Longest String = ", largest_word);
