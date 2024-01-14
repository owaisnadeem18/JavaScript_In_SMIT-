/* . Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired position/index. Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.*/

document.write(`Question # 09 <br>`);
document.write("<br>");
document.write(` Display the colors on screen <br>`);
document.write("<br>");

// initialize the arr
let colors_Arr = ["Green", "Light", "Blue"];

for (let i = 0; i <= colors_Arr.length - 1; i++) {
  document.write(`${colors_Arr[i]} <br>`);
}

let ask_user_color = prompt("Enter your fvrt color !!! ");
colors_Arr.unshift(ask_user_color);
document.write(`<br>`);
document.write(
  `a) The updated array is after including new value in the start : <br>`
);
document.write(colors_Arr);
document.write(`<br>`);
document.write(`<br>`);

let ask_user_color_for_end = prompt("Enter your fvrt color !!! ");

document.write(
  `b) The updated array after included value in array at the end is: `
);
colors_Arr.push(ask_user_color_for_end);
document.write(`<br> ${colors_Arr} `);
document.write("<br>");
colors_Arr.push(45, 78);
document.write(
  `<br> c) The updated Array after adding two more values at the end: <br>${colors_Arr} <br>`
);

colors_Arr.shift([0]);
document.write(
  `<br> d) The updated Array after deleting one value at the begining: <br>${colors_Arr} <br>`
);

colors_Arr.pop();

document.write(
  `<br> e) The updated Array after deleting one value at the end: <br>${colors_Arr} <br>`
);

document.write(
  `<br> f) . Ask the user at which index he/she wants to add a color
  & color name. Then add the color to desired
  position/index. . Display the updated array in your
  browser. <br>${colors_Arr} <br>`
);

var user_add_color_index_request = prompt(
  `Enter index at which you want to add your color that you want to add in the array. Indexes are ${colors_Arr.length}`
);
user_add_fvrt_color = prompt(
  "Enter your fvrt color that should be added at your desired index"
);
colors_Arr.splice(user_add_color_index_request, 0, user_add_fvrt_color);

var user_requested_index = prompt(
  `Write an index between 0 to ${colors_Arr.length}`
);

var user_desired_color = prompt("Enter your fvrt color to replace in array ");

colors_Arr.splice(user_requested_index, 1, user_desired_color);
document.write(
  `<br> g) . Ask the user at which index he/she wants to add a color
    & color name. Then add the color to desired
    position/index. . Display the updated array in your
    browser. <br>${colors_Arr} <br>`
);
