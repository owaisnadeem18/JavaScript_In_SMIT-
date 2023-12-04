// Here I have to check that either my code is palindrome or not , So for this purpose I have to check it in such a way that

let enter = prompt("Enter a number = ");

let find_palindrome_function = (enter) => {
  let reversed_string = enter.toString().split("").reverse().join("");
  console.log(reversed_string);

  if (enter == reversed_string) {
    alert("It is a palindrome");
  } else {
    alert("It is not a palindrome");
  }
};

find_palindrome_function(enter);
