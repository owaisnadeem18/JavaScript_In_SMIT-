// function getFileName(url) {

//     // your code here

//     // output should be
//     html
//     .com

// }

// getFileName("index.html")
// getFileName("www.google.com")

let enter_url = prompt("Enter URL: ");

let extract_domain = (a) => {
  let variable = a.split(".");
  let lastindex = variable.pop();
  console.log("May variable tha ", variable);
  console.log(lastindex);
  return lastindex;
};

console.log("The domain is ", extract_domain(enter_url));
