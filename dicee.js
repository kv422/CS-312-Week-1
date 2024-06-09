var imgArray = [null, "images/dice1.png", "images/dice2.png", "images/dice3.png", 
    "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var diceOne = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src", imgArray[diceOne]); 

var diceTwo = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src", imgArray[diceTwo]);

if (diceOne > diceTwo){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
else if (diceOne < diceTwo){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

