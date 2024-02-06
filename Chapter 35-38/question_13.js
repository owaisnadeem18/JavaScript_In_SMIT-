// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

document.write(
  "----------------------------- Question 13 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o' ----------------------------- <br><br> "
);

let func = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  let count = 0;

  let characters = a.split("");

  for (let i = 0; i < a.length; i++) {
    if (characters[i] == b.toLowerCase()) {
      count++;
    }
  }
  return count;
};

document.write(`The number of occurences is = ${func("Owwadwwais", "w")}`);
