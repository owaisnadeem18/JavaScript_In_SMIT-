// question_01

// Write a function called reverseString that takes a string as input and returns the reverse of that string. For example, if the input string is "hello", the function should return "olleh".

// Your solution should not use the built-in reverse() method of JavaScript arrays.

let original_str = "Owais Nadeem";

let reversed_str_function = (a) => {
  let answer = "";
  for (let i = a.length - 1; i >= 0; i--) {
    answer += a[i];
  }
  return answer;
};

console.log(reversed_str_function(original_str)); //calling the function
