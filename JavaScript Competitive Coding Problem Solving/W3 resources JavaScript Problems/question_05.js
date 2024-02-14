// JavaScript Array Methods & String Methods problems

// Question 05

// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

let arr = [4, 4, 3, 1, 9, 2, 1, 4, 2];

let addition_arr = [];
let func_add = (aik_array) => {
  let total_sum = aik_array.reduce((a, b) => {
    return a + b;
  });
  addition_arr.push(total_sum);
  return addition_arr;
};
console.log(func_add(arr));
