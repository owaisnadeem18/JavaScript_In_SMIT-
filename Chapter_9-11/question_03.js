let color = prompt("Enter a color (RED, GREEN, YELLOW): ");

document.write("<h1>Traffic Signal Lights</h1>");
document.write("<table style='border-collapse: collapse;'>");
document.write(
  "<trstyle='border-collapse: collapse;'><th style='border-collapse: collapse;'>Signal Color</th><th>Message</th></trstyle=>"
);

if (color.toLowerCase() === "red") {
  document.write(
    "<tr><td style='border: 1px solid black;'>Red</td><td style='border: 1px solid black;'>STOP</td></tr>"
  );
} else if (color.toLowerCase() === "green") {
  document.write(
    "<tr><td style='border: 1px solid black;'>Green</td><td style='border: 1px solid black;'>GO</td></tr>"
  );
} else if (color.toLowerCase() === "yellow") {
  document.write(
    "<tr><td style='border: 1px solid black;'>Yellow</td><td style='border: 1px solid black;'>Ready to Move</td></tr>"
  );
} else {
  document.write(
    "<tr><td style='border: 1px solid black;'>Invalid Color</td><td style='border: 1px solid black;'>Please enter RED, GREEN, or YELLOW</td></tr>"
  );
}

document.write("</table>");
