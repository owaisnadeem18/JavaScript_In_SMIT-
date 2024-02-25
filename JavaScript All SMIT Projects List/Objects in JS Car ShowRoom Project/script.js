let carLists = {
  toyota: {
    yaris: {
      image:
        "https://d1extt4q0kbmr.cloudfront.net/wp-content/uploads/2020/03/portada-36.png",
      model: 2020,
      price: "45,00,000 PKR",
      Fuel_Tank: "15 Liter",
      type: "Manual",
      Average: "37 - 40 Km",
      colors: ["red", "blue", "white"],
    },
    Venza: {
      image:
        "https://www.motortrend.com/uploads/sites/10/2015/11/2014-toyota-venza-xle-fwd-l4-hatchback-angular-front.png?fit=around%7C875:492",
      model: 2022,
      price: "1,45,00,000 PKR",
      Fuel_Tank: "25 Liter",
      type: "Auto",
      Average: "30 - 34 Km",
      colors: ["black", "gray", "blue"],
    },
    fortuner: {
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80",
      model: 2023,
      price: "2,45,00,000 PKR",
      Fuel_Tank: "35 Liter",
      type: "Auto",
      Average: "25 - 28 Km",
      colors: ["purple", "blue", "black"],
    },
    camry: {
      image:
        "https://www.toyota.com.sg/showroom/new-models/-/media/16ac36ef89924b808b5748573b260ced.png",
      model: 2019,
      price: "1,18,00,000 PKR",
      Fuel_Tank: "35 Liter",
      type: "Manual",
      Average: "20 - 23 Km",
      colors: ["black", "blue", "white"],
    },
    prius: {
      image:
        "https://f.i.uol.com.br/fotografia/2019/07/31/15646201115d42354f46dd7_1564620111_3x2_md.jpg",
      model: 2022,
      price: "19,80,000 PKR",
      Fuel_Tank: "35 Liter",
      type: "Auto",
      Average: "20 - 23 Km",
      colors: ["red", "black", "white"],
    },
    GR86: {
      image: "https://img.autotrader.co.za/25736241/Crop640x480",
      model: 2022,
      price: "29,80,000 PKR",
      Fuel_Tank: "27 Liter",
      type: "manual",
      Average: "40 - 42 Km",
      colors: ["gray", "red", "white"],
    },
    glanza: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfY8B-i6rEnzhDf6RHxxW6IMiSKuUYWLe8A9U861J9DXHmNNdhYFF7OcwalG-cIuzUnM8&usqp=CAU",
      model: 2021,
      price: "21,80,000 PKR",
      Fuel_Tank: "34 Liter",
      type: "manual",
      Average: "23 - 40 Km",
      colors: ["red", "blue", "white"],
    },
    Corolla: {
      image:
        "https://imgd.aeplcdn.com/642x336/cw/ec/26588/Toyota-Corolla-Altis-Exterior-92974.jpg?wm=0&q=80",
      model: 2019,
      price: "50,00,000 PKR",
      Fuel_Tank: "42 Liter",
      type: "Manual",
      Average: "14 - 18 Km",
      colors: ["white", "purple", "blue"],
    },
  },

  // 2nd Brand of Cars (Suzuki)

  suzuki: {
    alto: {
      image:
        "https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Solid-White.jpg",
      model: 2021,
      price: "20,00,000 PKR",
      Fuel_Tank: "19 Liter",
      type: "auto",
      Average: "15 - 17 Km",
      colors: ["white", "purple", "blue"],
    },

    mehran: {
      image:
        "https://cache1.pakwheels.com/system/car_generation_pictures/3907/original/front_end...jpg?1451557654",
      model: 2021,
      price: "10,00,000 PKR",
      Fuel_Tank: "17 Liter",
      type: "auto",
      Average: "11 - 13 Km",
      colors: ["white", "gray", "black"],
    },
    cultus: {
      image:
        "https://imgcdn.zigwheels.pk/large/gallery/color/13/124/suzuki-cultus-color-254313.jpg",
      model: 2021,
      price: "24,00,000 PKR",
      Fuel_Tank: "22 Liter",
      type: "auto",
      Average: "18 - 19 Km",
      colors: ["white", "gray", "blue"],
    },
    swift: {
      image:
        "https://www.cartoq.com/wp-content/uploads/2023/01/next-gen-maruti-suzuki-swift-render.jpg",
      model: 2022,
      price: "22,50,000 PKR",
      Fuel_Tank: "30 Liter",
      type: "auto",
      Average: "20 - 22 Km",
      colors: ["red", "silver", "black"],
    },
    wagonR: {
      image:
        "https://www.ccarprice.com/products/Suzuki_Wagon_R_ZXI_AT_2022.jpg",
      model: 2022,
      price: "18,50,000 PKR",
      Fuel_Tank: "28 Liter",
      type: "auto",
      Average: "17 - 18 Km",
      colors: ["blue", "silver", "black"],
    },
    swiftDzire: {
      image:
        "https://imgd-ct.aeplcdn.com/1280x720/cw/cars/maruti-suzuki/swift-dzire.jpg?q=80",
      model: 2023,
      price: "26,00,000 PKR",
      Fuel_Tank: "32 Liter",
      type: "auto",
      Average: "22 - 24 Km",
      colors: ["white", "black", "gray"],
    },
    vitaraBrezza: {
      image: "https://imgd.aeplcdn.com/664x374/n/gxhh4ua_1562679.jpg?q=80",
      model: 2023,
      price: "30,00,000 PKR",
      Fuel_Tank: "35 Liter",
      type: "auto",
      Average: "19 - 21 Km",
      colors: ["orange", "silver", "black"],
    },
    baleno: {
      image: "https://imgd-ct.aeplcdn.com/664x415/n/7a8rrua_1559471.jpg?q=80",
      model: 2023,
      price: "28,00,000 PKR",
      Fuel_Tank: "27 Liter",
      type: "auto",
      Average: "20 - 22 Km",
      colors: ["blue", "gray", "red"],
    },
  },

  // 3rd Brand Honda Cars

  Honda: {
    civic: {
      image: "https://assets.fastly.carvana.io/home-assets/nba/civic.png",
      model: 2021,
      price: "30,00,000 PKR",
      Fuel_Tank: "47 Liter",
      type: "auto",
      Average: "12 - 15 Km",
      colors: ["white", "black", "red"],
    },
    city: {
      image:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201401/new-honda-city_660_010714022004.jpg",
      model: 2021,
      price: "25,00,000 PKR",
      Fuel_Tank: "40 Liter",
      type: "auto",
      Average: "14 - 16 Km",
      colors: ["white", "silver", "blue"],
    },
    accord: {
      image:
        "https://img.remediosdigitales.com/1dd87c/honda-accord-2018-mexico_/840_560.jpg",
      model: 2021,
      price: "35,00,000 PKR",
      Fuel_Tank: "56 Liter",
      type: "auto",
      Average: "14 - 17 Km",
      colors: ["white", "black", "silver"],
    },
    crv: {
      image:
        "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/cf9cbffb-b47e-4295-8120-3d24be9f97d5/397391d4-1d3b-4a08-b065-9fc20ea6804c.png",
      model: 2021,
      price: "45,00,000 PKR",
      Fuel_Tank: "53 Liter",
      type: "auto",
      Average: "10 - 12 Km",
      colors: ["white", "black", "blue"],
    },
    hrv: {
      image:
        "https://www.hondawess.lv/wp-content/uploads/sites/2/HR-VHybrid2022-Advance-NH-731P-f34-env-754x424.png",
      model: 2021,
      price: "30,00,000 PKR",
      Fuel_Tank: "47 Liter",
      type: "auto",
      Average: "14 - 16 Km",
      colors: ["white", "black", "gray"],
    },
    jazz: {
      image:
        "https://images.netdirector.co.uk/gforces-auto/image/upload/w_301,h_226,q_auto,c_fill,f_auto,fl_lossy/auto-client/84ae64bff972374cee5088a46b6c0048/jazz_crosstar.jpg",
      model: 2021,
      price: "20,00,000 PKR",
      Fuel_Tank: "40 Liter",
      type: "auto",
      Average: "16 - 18 Km",
      colors: ["white", "gray", "red"],
    },
    odyssey: {
      image:
        "https://img.indianautosblog.com/2017/01/2018-Honda-Odyssey-front-three-quarter-unveiled.jpg",
      model: 2021,
      price: "50,00,000 PKR",
      Fuel_Tank: "70 Liter",
      type: "auto",
      Average: "8 - 10 Km",
      colors: ["white", "gray", "blue"],
    },
    pilot: {
      image:
        "https://img.asmedia.epimg.net/resizer/PqawnoA_5JLTxwI0klhHktJrsfQ=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DQDDMGRTTJDL3IXAJ44ZHO55UE.jpg",
      model: 2021,
      price: "60,00,000 PKR",
      Fuel_Tank: "73 Liter",
      type: "auto",
      Average: "9 - 11 Km",
      colors: ["white", "black", "silver"],
    },
  },
};

let main = document.getElementById("main");

let brand = document.getElementById("brand");

let model = document.getElementById("model");

brand.innerHTML = `<option>Select Brand Name</option>`;
model.innerHTML = `<option>Select Model Name</option>`;

console.log(model);

for (var key in carLists) {
  brand.innerHTML += `<option value=${key}>${key}</option>`;
  for (var key1 in carLists[key]) {
    var objs = carLists[key][key1];
    var colorDiv = "";
    for (let i = 0; i < objs.colors.length; i++) {
      colorDiv += `<div class = '${objs.colors[i]}' >

      </div>`;
    }
    // for (var i = 0; i < objs.colors.length; i++) {
    //   console.log(objs.colors[i]);
    // }

    main.innerHTML += `
    <div class="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
      <div class="card mb-4" style="width: 17rem;">
        <img src=" ${
          objs.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAlbGqWi26R2WnO8pALV0idL24Ls8cV-wTA&usqp=CAU"
        }"  class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${key1.toUpperCase()} (${objs.model})</h5>
          <p class="card-text">Average ${objs.Average}</p>
          <p class="card-text">Car Type ${objs.type}</p> 
          <p class="card-text"> Fuel Tank ${objs.Fuel_Tank}</p> 
          <h5>Price: ${objs.price}</h5>

          <div class="d-flex gap-2">
            ${colorDiv}
          </div>

        </div>
      </div>
    </div>
        `;
  }
}

// Function to display brand wise cars :

function SetModel() {
  // for (var key in carLists[brand.value]) {
  //   model.innerHTML += `<div class= "${key}">${key}</div>`;
  // }

  console.log("brand ", carLists[brand.value]);
  model.innerHTML = "";
  model.innerHTML = "<option>Select Model Name</option>";
  for (var key in carLists[brand.value]) {
    model.innerHTML += `<option value = "${key}" >${key}</option>`;
  }
}

// Function To Search The Car:

let CarDetail = document.getElementById("car"); // This is a global variable

function SearchCar() {
  console.log(carLists[brand.value][model.value]);
  main.style.display = "none";

  CarDetail.style.display = "flex";

  let car = carLists[brand.value][model.value];

  CarDetail.innerHTML = `<div class="row g-0">
  <div class="col-md-4">
    <img src=" ${
      car.image ||
      "https://imgcdn.zigwheels.pk/large/gallery/color/13/124/suzuki-cultus-color-254313.jpg"
    }" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${model.value.toUpperCase()}</h5>
      <p class="card-text">Average ${car.Average}</p>
      <p class="card-text">Car Type ${car.type}</p> 
      <p class="card-text"> Fuel Tank ${car.Fuel_Tank}</p> 
      <h5>Price: ${car.price}</h5>
      <div class="d-flex gap-2">
      ${colorDiv}
    </div>
    </div>
  </div>
</div>`;
}

// A function to clear all cars

clarAll = document.getElementById("clear");

clarAll.addEventListener("click", () => {
  main.style.display = "flex";
  CarDetail.style.display = "none";
});
