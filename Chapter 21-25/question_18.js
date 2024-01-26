// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// Question # 18

document.write(
  "-------------------------------You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 18 -------------------------------------- <br><br>"
);

let str = "“The quick brown fox jumps over the lazy dog";

lowerCase = str.toLowerCase();

search = (lowerCase.match(/\bthe\b/g) || []).length;

document.write("Occurence of the in the above sentence is ", search);
