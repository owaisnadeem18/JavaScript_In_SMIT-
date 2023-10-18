// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.a. Store a Celsius temperature into a variable.b. Convert it to Fahrenheit & output “NNoC is NNoF”.c. Now store a Fahrenheit temperature into a variable.d. Convert it to Celsius & output “NNoF is NNoC”.

// It is task # 06 of our chapter # 05 in JavaScript

let temp_in_celcius = parseInt(prompt("Enter a temperature in celcius !!! "));

converted_temp_in_farhenheit = (9 / 5) * temp_in_celcius + 32;

document.write(
  "Your Temperature in Celcius is = " +
    temp_in_celcius +
    "°C" +
    " While, Farhenheit Temperature is = " +
    converted_temp_in_farhenheit +
    "°F" +
    "<br>"
);

let temp_in_farhenheit = parseInt(
  prompt("Enter your temperature in Farhenheit = ")
);

converted_temp_in_celcius = (5 / 9) * (temp_in_farhenheit - 32);

document.write(
  "Your Temperature in Farhenheit is = " +
    temp_in_farhenheit +
    "°F" +
    " While, Celcius Temperature is = " +
    converted_temp_in_celcius +
    "°C"
);
