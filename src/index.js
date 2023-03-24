import Wishlist from "./Wishlist.js";
import Car from "./Car.js"

let wishlist = new Wishlist;

//Selecting all input DOM elements.
let makeInput = document.getElementById("makeInput");
let modelInput = document.getElementById("modelInput")
let yearInput = document.getElementById("yearInput");

//Selecting the Details DOM elements.
let carMakePara = document.getElementById("car-make");
let carModelPara = document.getElementById("car-model")
let carYearPara = document.getElementById("car-year");

//Selecting buttons.
let removeButtonElements = document.getElementsByClassName("btn btn-warning removeBtn");
let removeButton = removeButtonElements[0];
let addButton = document.getElementById("submitBtn");

//Selecting the wishlist container which we'll populated with info.
let wishList = document.getElementById("wishListContainer");


addButton.addEventListener("click", function(e){
    e.preventDefault();
    let newCar = new Car(makeInput.value, modelInput.value, yearInput.value);
    addCar(newCar);
    console.log(wishlist.cars)
})

removeButton.addEventListener("click", function(e){
    e.preventDefault();
    for(let i = 0; i<wishlist.cars.length; i++){
        if(wishlist.cars[i].model == carModelPara.innerText && wishlist.cars[i].make == carMakePara.innerText){
            removeCar(wishlist.cars[i]);
        }
    }
    console.log(wishlist.cars)
    carMakePara.innerText = "";
    carModelPara.innerText = "";
    carYearPara.innerText = "";
})

function showCarDetails(car){
    carMakePara.innerText = car.make;
    carModelPara.innerText = car.model;
    carYearPara.innerText = car.year;
    removeButton.disabled = false;
}

function updateDOMList(){
    let allElements = document.querySelectorAll("li");
    allElements.forEach((item) => {
        item.remove();
    })
        for(let i = 0; i<wishlist.cars.length; i++){
                let newLI = document.createElement("li");
                wishList.appendChild(newLI);
                newLI.innerText = `${wishlist.cars[i].make} ${wishlist.cars[i].model}`
                    newLI.addEventListener("click", function() {
                        showCarDetails(wishlist.cars[i]);
                    })
        }
};

function addCar(newCar){
    wishlist.add(newCar);
    updateDOMList();
}

function removeCar(newCar){
    wishlist.remove(newCar);
    updateDOMList();
}