// Question # 02
// Filter out strings that have a length less than 5 and capitalize the remaining ones.

document.write("<h3>Question 02</h3>");

let str = ["apple", "banana", "cake", "mangoes", "grapes", "oranges", "pastry"];

document.write(
  "<p>'Filter out strings that have a length less than 5 and capitalize the remaining ones'</p><br>"
);

filtered_str = "";
// Filter out strings with length less than 5 and capitalize the remaining ones
let filtered_and_capitalized = str.map((word) => {
  if (word.length < 5) {
    filtered_str = filtered_str.concat(word); // Keep short strings as they are
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize longer strings
  }
});

document.write("The string Array is = ", str, "<br>");

document.write("The Filtered String is = ", filtered_str);
document.write(
  "<br> The filtered & Capitalized strings =  ",
  filtered_and_capitalized
);
