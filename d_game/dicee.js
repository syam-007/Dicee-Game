var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSoucre = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSoucre);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSoucre2 = "images/" + randomDiceImage2;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSoucre2);

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 won";
} else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "player2 won";
} else {
    document.querySelector("h1").innerHTML = "Draw"
}