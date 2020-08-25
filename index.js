// Creating random number here
var randomNumber1 = Math.floor((Math.random()) * 6 + 1);
var randomNumber2 = Math.floor((Math.random()) * 6 + 1);

// using random number to access images
var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

// changing images using image1, image2
document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

// changing h1 text using conditions.
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//
