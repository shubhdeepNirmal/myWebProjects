function mydice()
{
    var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomdice1 = "images/dice"+ randomNumber1+".png"; 
var randomdice2 = "images/dice"+ randomNumber2+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice1);


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2);

if (randomNumber1>randomNumber2) document.querySelector("h1").innerHTML= "PLAYER 1 WINS!!!🎉";
else if(randomNumber1<randomNumber2) document.querySelector("h1").innerHTML= "PLAYER 2  WINS!!!🎉";
else document.querySelector("h1").innerHTML ="ITS A DRAW <br> ☹👀";

document.querySelector("button").innerHTML= "PLay Again??";
}





