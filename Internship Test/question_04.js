// write function that returns the quadratic roots of given equation

let a = 2;
let b = -1;
let c = 3;

let func = (a, b, c) => {
  let X = ((-b * Math.sqrt(b * b - 4 * a * c)) / 2) * a;
  return X;
};

console.log("The function is ", func(4, 8, 9));
