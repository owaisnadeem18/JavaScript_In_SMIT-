/* You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now. */

let custom_index_of_function = (str, char) => {
  for (var i = 0; i < str.length; i++) {
    if (str[i] == char) {
      return i;
    }
  }
  return -1;
};

let str = prompt("Enter a string: ");
char = prompt("Enter a string you wanna find out: ");
console.log(custom_index_of_function(str, char));
