// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint:ASCII codes:- A=65, Z=90, a=97, z=122).

// let's create a function named as "func"
let func = (char) => {
  if (!isNaN(char)) {
    document.write(`${char} is a "number" `);
  } else if (char >= "A" && char <= "Z") {
    document.write(`${char} is an upper-case letter`);
  } else if (char >= "a" && char <= "z") {
    document.write(`${char} is a letter in smaller case`);
  } else {
    alert("Please enter a valid number or character !!! ");
  }
};

let ask_user = prompt("Enter a number or character = ");
// let's call the function who has argument "ask_user"
func(ask_user);
