var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); // true
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true"); // false
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true"); //false
}
if (c === 13) {
  alert("condition 2 is true"); // this is true
}
if (++c < 14) {
  alert("condition 3 is true"); // false
}
if (c === 14) {
  alert("condition 4 is true"); // true
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals"); //Yes!!! equals
}
if (true) {
  alert("True"); // unreachabe code
}
if (false) {
  alert("False"); // unreachabe code
}
if ("car" < "cat") {
  alert("car is smaller than cat"); // unreachabe code
}
