// Write a JavaScript function to clone an array.
// Test Data:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// Solution:-

let array = [4, 8, 2, 3];
let copyArray = array.slice(0);
console.log("may original hn ", array, "may copy hn ", copyArray);

let func = (a) => {
  return a.slice(0);
};

console.log(func(array));
