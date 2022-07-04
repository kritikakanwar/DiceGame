var randomNumber;
randomNumber=Math.floor(Math.random()*6+1);
var img="dice"+randomNumber+".png";
var randomImage="images/"+img;
console.log(randomImage);
var image1=document.querySelector(".dice1");
image1.setAttribute("src",randomImage);
// .setAttribute("src",randomImage);
// [0] means first image tag
var randomNumber2=Math.floor(Math.random()*6+1);
var img2="dice"+randomNumber2+".png";
var randomImage2="images/"+img2;
var image2=document.querySelector(".dice2").setAttribute("src",randomImage2);
if(randomImage>randomImage2)
{
    console.log("player 1 wins");
    document.querySelector("h1").style.fontSize="80px";
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(randomImage<randomImage2)
{
console.log("Player 2 wins");
document.querySelector("h1").style.fontSize="80px";
document.querySelector("h1").innerHTML="🚩player 2 wins";
}
else
{
    console.log("Tie");
    document.querySelector("h1").style.fontSize="80px";
    document.querySelector("h1").innerHTML="Draw!";
}