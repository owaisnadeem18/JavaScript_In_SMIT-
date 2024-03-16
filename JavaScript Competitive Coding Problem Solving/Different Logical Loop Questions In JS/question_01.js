// Star pattern program in reverse order

// *****
// ****
// ***
// **
// *

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 5; j >= i; j--) {
    str += "*";
  }
  console.log(str);
}
