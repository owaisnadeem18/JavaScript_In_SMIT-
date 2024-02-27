let onBulb = document.getElementById("bulb-on");

let image_bulb = document.getElementById("image-bulb");

onBulb.addEventListener("click", () => {
  image_bulb.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4oNlbfw03R-PHvuB7dXP8VFUIx5hMmQPdFl7G5gAqf6EMmUualtQl7vXL0iQIdw4PyU&usqp=CAU";
});

let image_off = document.getElementById("turn-off");

image_off.addEventListener("click", () => {
  image_bulb.src =
    "https://www.shutterstock.com/image-illustration/3d-illustration-light-bulb-isolated-600nw-749587456.jpg";
});

// Year JS

let year = document.querySelector("#year");

year.innerText = new Date().getFullYear();
