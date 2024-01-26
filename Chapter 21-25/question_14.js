// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]

// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// Note: Perform case insensitive search. Whether the userenters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// Question # 14

document.write(
  "------------------------------- You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or cookIE, program should inform about its availability. Example: ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 14 -------------------------------------- <br><br>"
);

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let ask_user = prompt("Search for an item = ");

let searchResult = A.includes(ask_user.toLowerCase());

if (searchResult) {
  alert(`${ask_user} is available in our bakery at ${A.indexOf(ask_user)}`);
} else {
  alert(`Sorry ${ask_user} is not available in our bakery `);
}
