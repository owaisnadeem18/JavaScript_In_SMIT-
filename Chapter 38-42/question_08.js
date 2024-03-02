/*The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters.*/

let distance_in_km = prompt(
  "Enter the distance between Karachi to Lahore in KM "
);

let distance_in_m = (distance) => {
  let distance_in_meters = distance * 1000;
  return distance_in_meters;
};
let distance_in_feet = (distance) => {
  let distance_in_feet = distance * 3280.84;
  return distance_in_feet;
};
let distance_in_inches = (distance) => {
  let distance_in_inches = distance * 39370.1;
  return distance_in_inches;
};
let distance_in_cm = (distance) => {
  let distance_in_cm = distance * 100000;
  return distance_in_cm;
};

console.log(
  "The distance between Karachi to Lahore in KM is = ",
  distance_in_km
);
console.log(
  "The distance between Karachi to Lahore in M is = ",
  distance_in_m(distance_in_km),
  "meters"
);
console.log(
  "The distance between Karachi to Lahore in feet is = ",
  distance_in_feet(distance_in_km),
  "feet"
);
console.log(
  "The distance between Karachi to Lahore in inches is = ",
  distance_in_inches(distance_in_km),
  "inches"
);
console.log(
  "The distance between Karachi to Lahore in centimeters is = ",
  distance_in_cm(distance_in_km),
  "centimeters"
);
