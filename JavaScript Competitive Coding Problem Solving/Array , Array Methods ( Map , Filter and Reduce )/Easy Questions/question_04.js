// Question # 04

// How can I traverse an array:

document.write("<h3>Question 04</h3>");

document.write(
  "<p>'How can I traverse an array without using MAP , FILTER , REDUCE methods of an Array : '</p><br>"
);

let arr = [4, 2, 9, 6, 2, 14, 98, 563, 53, 42, 16];

let traverse_arr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  let traverse = arr[i];
  traverse_arr.push(traverse);
}

document.write("The Original array was: ", JSON.stringify(arr), "<br>");

document.write(
  "The Traverse Array is : ",
  JSON.stringify(traverse_arr),
  "<br>"
);
