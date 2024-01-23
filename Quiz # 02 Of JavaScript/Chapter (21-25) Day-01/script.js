// Here , we have the questions of chapter 21:

// let ask_user = prompt("Enter a string of your choice = ");

// ---------------------------------------------- 1 ----------------------------------------------

// String Method: toLowerCase()

// ask_user = ask_user.toLowerCase();

// console.log(ask_user);

// ---------------------------------------------- 2 ----------------------------------------------

// String Method: toUpperCase()

string = "My Name is Owais Nadeem";

capital_letters = string.toUpperCase();
console.log(capital_letters);

// ---------------------------------------------- 3 ----------------------------------------------

// String Method: Finding Length of a string

length = string.length;
console.log(length);

// ---------------------------------------------- 4 ----------------------------------------------

// String Slicing Method: Slicing of a string

string = "Owais";
slice = string.slice(1);
console.log(slice); // Here, we have made the chunks of our string and we will print it after making these chunks

// ---------------------------------------------- 5 ----------------------------------------------

// Searching a String Method: Searching of a string using 'indexOf' string method

// let str = ["Hello", "World", "Python", "Programming", "Development"];
let str = "Hello";

str = str.toLowerCase();

find_string = str.indexOf("hello");
console.log(find_string);
