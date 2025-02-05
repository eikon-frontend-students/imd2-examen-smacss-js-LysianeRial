// little sesame

var backgroundYellow = document.querySelector(".l-header");
var titleBlue = document.querySelector("h1");

function clickYellow() {
  backgroundYellow.classList.toggle("is-yellow");
  titleBlue.classList.toggle("is-bluedark");
}

backgroundYellow.addEventListener("click", clickYellow);

// product 1

var productOne = document.querySelector(".product-one");
var textInfosOne = document.querySelector(".product-one-opacity");

function clickPink() {
  textInfosOne.classList.toggle("is-opacity");
  productOne.classList.textInfos("is-pink");
}

productOne.addEventListener("click", clickPink);

// product 2

var productTwo = querySelector(".product-two");
var textInfosTwo = querySelector(".product-two-opacity");

function clickOpacity() {
  textInfosTwo.classList.toggle("is-opacity-two");
}

productTwo.addEventListener("click", clickOpacity);

// product 3

var productThree = document.querySelector(".product-three");
var textInfosThree = document.querySelector(".product-three-opacity");

function clickBlue() {
  textInfosThree.classList.toggle("is-opacity");
  productThree.classList.toggle("is-blue");
}

productThree.addEventListener("click", clickBlue);
