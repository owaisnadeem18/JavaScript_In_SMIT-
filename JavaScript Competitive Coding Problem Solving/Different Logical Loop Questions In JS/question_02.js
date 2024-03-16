// Count Duplicates in Array: Write a function that counts the number of duplicate elements in an array using a loop.

let array = [6, 9, 2, 6, 96, 3, 3];
// let array = [6, 9, 2, 72, 9, 4, 2, 5, 4, 2, 6];

let countDuplicates = (arr) => {
  let duplicated_Nums = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        duplicated_Nums++;
      }
    }
  }
  return duplicated_Nums;
};

console.log(
  "The duplicates numbers in array ",
  array,
  " are ",
  countDuplicates(array)
);
