// Object and will discuss loop in it

let obj = {
  name: "Owais",
  department: "BSCS",
  cgpa: 3.5,
  another_object: {
    fullName: "Owais Nadeem",
  },
};

for (var owais in obj) {
  for (let var1 in obj[owais]) {
    for (var key2 in obj[owais][var1]) {
      console.log(obj[owais][var1][key2]);
    }
  }
}
