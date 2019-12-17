// generates random number b/w 1 to 6 for first dice
var num1 =  Math.random()*6;
var randomNumber1 = Math.floor(num1)+1;

//random image selection
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 +".png");

// generates random number b/w 1 to 6 for second dice
var num2 =  Math.random()*6;
var randomNumber2 = Math.floor(num2)+1;

//random image selection
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 +".png");


//determining the winner
if (randomNumber1 === randomNumber2) {
 document.querySelector("h1").textContent = " 😴Draw! ";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 won ";
} else {
    document.querySelector("h1").textContent = "Player 2 won 🚩 ";
}
