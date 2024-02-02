// Question # 03
// Given an array of strings representing names, use the map method to create a new array that includes an exclamation mark after each name. For example, if the input array is ["Alice", "Bob", "Charlie"], the output should be ["Alice!", "Bob!", "Charlie!"]. Remember to use the map method to achieve this transformation

document.write("<h3>Question 03</h3>");

let arr = ["Alice", "Bob", "Charlie"];

document.write(
  "<p>'Given an array of strings representing names, use the map method to create a new array that includes an exclamation mark after each name. For example, if the input array is ['Alice', 'Bob', 'Charlie'], the output should be ['Alice!', 'Bob!', 'Charlie!']. Remember to use the map method to achieve this transformation'</p><br>"
);

let new_arr = arr.map((str) => {
  return str.concat("!");
});

document.write("The original array is = ", arr, "<br>");
document.write("The modified array is = ", JSON.stringify(new_arr));
