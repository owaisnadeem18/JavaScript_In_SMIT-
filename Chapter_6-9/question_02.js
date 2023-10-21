// // What will be the output in variables a, b & result after
// // execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;
// // --a - --b;
// // --a - --b + ++b;
// // --a - --b + ++b + b--;

var a = 14;
var b = 12;

document.write("Initial value of a is = " + a + "<br>");
document.write("Initial value of b is = " + b + "<br>");

var minus_minus_a = --a;
var minus_minus_b = --b;

document.write("The value of --a is = " + minus_minus_a + "<br>");
document.write("The value of --b is = " + minus_minus_b + "<br>");

var plus_plus_b = ++b;
document.write("The value of ++b is = " + plus_plus_b + "<br>");

var b_minus_minus = b--;
document.write("The value of b-- is = " + b_minus_minus + "<br>");

var result = minus_minus_a - minus_minus_b + plus_plus_b + b_minus_minus;
document.write("The final result is = " + result + "<br>");
