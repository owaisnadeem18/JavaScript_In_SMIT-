let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let even_Arr = [];
let odd_Arr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even_Arr.push(arr[i]); // Push the number directly, no need for string conversion
  } else {
    odd_Arr.push(arr[i]); // Push the number directly, no need for string conversion
  }
}

document.write("Orignial Array " + arr + "<br>");
document.write("Even Numbers Array: " + even_Arr + "<br>");
document.write("Odd Numbers Array: " + odd_Arr + "<br>");
