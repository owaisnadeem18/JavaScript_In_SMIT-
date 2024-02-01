// Question # 01
// Double the odd numbers and square the even numbers in the array.

document.write("<h3>Question 01</h3>");

let arr = [1, 5, 9, 6, 11, 2, 3, 12, 13, 4, 31, 19, 67];

document.write(
  "<p>'Double the odd numbers and square the even numbers in the array' </p><br>"
);
document.write("Array : ", arr, "<br><br>");
let odd_nums = arr.filter((e) => {
  return e % 2 !== 0;
});

let even_numbers = arr.filter((even) => {
  return even % 2 == 0;
});

document.write("Odd Numbers Array: ", odd_nums, "<br><br>");

// Let's double the odd numbers in an array
let doubled_odd_nums = odd_nums.map((doubled_odd_nums) => {
  return doubled_odd_nums * 2;
});
document.write("Doubled Odd Numbers are: ", doubled_odd_nums, "<br><br>");
document.write("Even Number Array:", even_numbers, "<br><br>");

let square_evens = even_numbers.map((evens) => {
  let sq_evens = evens * evens;
  return sq_evens;
});

document.write("Squared Even Number Array:", square_evens, "<br><br>");
