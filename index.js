document.querySelector(".container h1").addEventListener("click", function() { //ovo sam mogao jednostavnije: document.querySelector("h1")

        var randomNumber1 = Math.ceil(Math.random()*6);
        var randomNumber2 = Math.ceil(Math.random()*6);
    
        var firstImage = document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
        var secondImage = document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
});


//var test = document.querySelector(".container h1").innerHTML = "NESTO";
//console.log(test);
