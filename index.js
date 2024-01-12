document.querySelector(".container h1").addEventListener("click", function() { //ovo sam mogao jednostavnije: document.querySelector("h1")

        var randomNumber1 = Math.ceil(Math.random()*6);
        var randomNumber2 = Math.ceil(Math.random()*6);
    
        var firstImage = document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
        var secondImage = document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
        
        var natpis = document.querySelector(".container h1");

        if (randomNumber1>randomNumber2) {
                natpis.innerHTML = "Player 1 wins";  
            }

            else if (randomNumber1<randomNumber2) {
                natpis.innerHTML = "Player 2 wins";
            }

            else {
                natpis.innerHTML = "Draw";
            }

        
        var refresh = document.querySelector(".container h2");
        
        refresh.addEventListener("click", function refreshPage() {
                location.reload();
            });
});


//var test = document.querySelector(".container h1").innerHTML = "NESTO";
//console.log(test);
