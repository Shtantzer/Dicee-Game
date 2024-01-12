playerOneScore = 0;
playerTwoScore = 0;

//Randomizing attributes of images
document.querySelector(".container h1").addEventListener("click", function() { //ovo sam mogao jednostavnije: document.querySelector("h1")

var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Displaying a winner or a draw and keeping a score
var natpis = document.querySelector(".container h1");

var score1 = document.querySelector(".score1");
var score2 = document.querySelector(".score2");

if (randomNumber1>randomNumber2) {
        natpis.innerHTML = "Player 1 wins";
        playerOneScore++;
        score1.innerHTML = playerOneScore;
    }
    else if (randomNumber1<randomNumber2) {
        natpis.innerHTML = "Player 2 wins";
        playerTwoScore++;
        score2.innerHTML = playerTwoScore;
    }
    else {
        natpis.innerHTML = "Draw";
    }
});

//Refreshing the game
var refresh = document.querySelector(".container h2");

refresh.addEventListener("click", function refreshPage() {
        location.reload();
});



