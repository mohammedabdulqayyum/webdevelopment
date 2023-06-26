var randomNumber;
randomNumber=Math.floor(Math.random()*6) + 1;
var randomdiceno="dice"+randomNumber+".png";
var randomimges="./images/"+randomdiceno;
var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src",randomimges);

var randomNumber2;
randomNumber2=Math.floor(Math.random()*6) + 1;
var randomimges2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimges2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML= "Draw !"
}