// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

let arr = ["KeyBoard", "Mouse", "Printer", "Monitor"];

document.write("Devices </br>");
document.write(arr, "</br>");
document.write("</br>");

for (let i = 0; i < arr.length; i++) {
  document.write("Out: </br>");
  document.write(arr[i], "</br>");
}
