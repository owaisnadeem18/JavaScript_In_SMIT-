// Write a JS Program in which print 5 multiples of (tables) 3 , 4, 5, 6 , 7

for (let i = 3; i <= 4 + 3; i++) {
  let line = "";
  for (let j = 1; j < 6; j++) {
    line += i * j + " ";
  }
  console.log(line);
}
