const redColor = document.querySelector(".red");

const blackColor = document.querySelector(".black");

const imageCard = document.querySelector(".product-image");

const feedbackBtn = document.querySelector(".feedback");

const grayColor = document.getElementsByClassName("gray");

const purpleColor = document.getElementsByClassName("purple");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

const newPrice = document.querySelector(".new-price")

const redColor2 = document.querySelector(".red2");

const blackColor2 = document.querySelector(".black2");

const imageCard2 = document.querySelector(".product-image2");

const feedbackBtn2 = document.querySelector(".feedback2");

const grayColor2 = document.getElementsByClassName("gray2");

const purpleColor2 = document.getElementsByClassName("purple2");

const cartButton2 = document.getElementById("button2");

const itemTag2 = document.getElementsByTagName("h3")[1];

const newPrice2 = document.querySelector(".new-price2")

const redColor3 = document.querySelector(".red3");

const blackColor3 = document.querySelector(".black3");

const imageCard3 = document.querySelector(".product-image3");

const feedbackBtn3 = document.querySelector(".feedback3");

const grayColor3 = document.getElementsByClassName("gray3");

const purpleColor3 = document.getElementsByClassName("purple3");

const cartButton3 = document.getElementById("button3");

const itemTag3 = document.getElementsByTagName("h3")[2];

const newPrice3 = document.querySelector(".new-price3")


redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./redbenz.jpeg")';
    newPrice.textContent= "$136784";

  });

  grayColor[0].addEventListener('click', function (){
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./graybenz.webp")';
    newPrice.textContent= "$189037";
  });

  blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./blackbenz.jpg")';
    newPrice.textContent= "$190876"
  });

  purpleColor[0].addEventListener('click', function (){
    cartButton.style.backgroundColor = "purple";
    itemTag.style.backgroundColor = "purple";
    imageCard.style.backgroundImage = 'url("./purplebenz.jpg")';
    newPrice.textContent= "$156209"
  });

  redColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "red";
    itemTag2.style.backgroundColor = "red";
    imageCard2.style.backgroundImage = 'url("./redchrysler.jpeg")';
    newPrice2.textContent= "$123456";

  });

  grayColor2[0].addEventListener('click', function (){
    cartButton2.style.backgroundColor = "gray";
    itemTag2.style.backgroundColor = "gray";
    imageCard2.style.backgroundImage = 'url("./graychrysler.jpeg")';
    newPrice2.textContent= "$164327";
  });

  blackColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "black";
    itemTag2.style.backgroundColor = "black";
    imageCard2.style.backgroundImage = 'url("./blackchrysler.jpeg")';
    newPrice2.textContent= "$138902"
  });

  purpleColor2[0].addEventListener('click', function (){
    cartButton2.style.backgroundColor = "purple";
    itemTag2.style.backgroundColor = "purple";
    imageCard2.style.backgroundImage = 'url("./purplechrysler.jpeg")';
    newPrice2.textContent= "$124536"
  });


  redColor3.addEventListener("click", function () {
    cartButton3.style.backgroundColor = "red";
    itemTag3.style.backgroundColor = "red";
    imageCard3.style.backgroundImage = 'url("./redodyssey.jpeg")';
    newPrice3.textContent= "$128888";

  });

  grayColor3[0].addEventListener('click', function (){
    cartButton3.style.backgroundColor = "gray";
    itemTag3.style.backgroundColor = "gray";
    imageCard3.style.backgroundImage = 'url("./grayodyssey.jpeg")';
    newPrice3.textContent= "$166555";
  });

  blackColor3.addEventListener("click", function () {
    cartButton3.style.backgroundColor = "black";
    itemTag3.style.backgroundColor = "black";
    imageCard3.style.backgroundImage = 'url("./blackodyssey.jpeg")';
    newPrice3.textContent= "$138333";
  });

  purpleColor3[0].addEventListener('click', function (){
    cartButton3.style.backgroundColor = "purple";
    itemTag3.style.backgroundColor = "purple";
    imageCard3.style.backgroundImage = 'url("./purpleodyssey.jpeg")';
    newPrice3.textContent= "$124899"
  });

  const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  }
  cartButton.addEventListener("click", cart);

  const cart2 = () => {
    cartButton2.style.display = "none";
    feedbackBtn2.style.display = "block";
  }
  cartButton2.addEventListener("click", cart2);

  const cart3 = () => {
    cartButton3.style.display = "none";
    feedbackBtn3.style.display = "block";
  }
  cartButton3.addEventListener("click", cart3);

  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  }
  feedbackBtn.addEventListener("click", feedback);

  const feedback2 = () => {
    cartButton2.style.display = "block";
    feedbackBtn2.style.display = "none";
  }
  feedbackBtn2.addEventListener("click", feedback2);

  const feedback3 = () => {
    cartButton3.style.display = "block";
    feedbackBtn3.style.display = "none";
  }
  feedbackBtn3.addEventListener("click", feedback3);