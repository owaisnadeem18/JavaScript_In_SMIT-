// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

let arr = ["KeyBoard", "Mouse", "Printer", "Monitor"];

document.write("Devices </br>");
document.write(arr, "</br>");
document.write("</br>");

for (let i = arr.length - 1; i >= 0; i--) {
  document.write("Out: </br>");
  document.write(arr[i], "</br>");
}
