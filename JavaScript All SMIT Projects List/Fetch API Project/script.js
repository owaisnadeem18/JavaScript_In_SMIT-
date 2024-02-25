document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});
container = document.getElementById("container");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/pakistan");
request.send();

// To get the response from our API:
request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  // console.log(data);

  const htmlData = `
<div id='card'>
<article class = 'card'>
    <div class="card-body">
        <img src="${data.flags.png}" alt="" class="card-body-img" />
        <h1 class="card-body-title">
            ${data.name.common}<span></span>
        </h1>
        <p class="card-body-text"> Capital : ${data.capital} </p>
    </div>
    <div class="card-footer">
        <div class="card-footer-social">
            <h3>${data.languages.urd}</h3>
            <p>Language</p>
        </div>
        <div class="card-footer-social">
        <h3>${data.population}</h3>
            <p>Population</p>
        </div>
        <div class="card-footer-social">
        <h3>${data.demonyms.eng.m}</h3>
            <p>Demonym</p>
        </div>
    </div>
</div>


</div>
`;

  container.insertAdjacentHTML("afterbegin", htmlData);
});
