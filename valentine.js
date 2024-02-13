const babe = document.querySelector("#yes")
const bodyy = document.querySelector("#ctr")
const heading = document.querySelector("h1")
const body = document.querySelector("body")

var b = document.querySelector("#movingbutton");

var n = 0
let m = 20
var arr = [
    "Such a bitch ass answer",
    "Wanna go for a stargazing soirée?",
    "How about a scientific adventure?",
    "Pussy (in 21 Savage's voice)",
    "Maybe co-pilot in decoding the mysteries of global affairs",
    "Or be my co creater in this artistic symphony of existence",
    "You're gonna die anyway",
    "Maybe create a soundtrack for our adventures?",
    "Or capture the essence of life",
    "Hata ukuwe mtamu aje, huwezi jikula",
    "Let's try this again",
    "Will you be my valentines' date?"
]
var array = [m]
array.push(m+=20)
console.log(array)

function noClicked(){
    heading.innerText = arr[n]
    n++
    if(n > arr.length-1){
        n = 0
    }
    babe.style.fontSize = m + "px"
    m+=20
    babe.style.padding = "20px"
}
function yesClicked(){
    body.style.background = "url(./giphy.gif)"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    heading.innerText = "You are now mine forever!"
    heading.style.fontSize = "100" + "px"
    babe.style.display = "none"
    b.style.display = "none"
}

/*b.addEventListener("mousemove",change);*/

/*
var style = babe.getPropertyValue("font-size")
    console.log(style)

function noClicked(){
    var style = babe.getPropertyValue("font-size")
    console.log(style)
    var currentSize = parseInt(style)
    currentSize++
}
/*
function noClicked() {
    var b = document.querySelector("#movingbutton");
    var style = window.getComputedStyle(b, null).getPropertyValue('font-size');
    var currentSize = parseInt(style);
    currentSize++;
    document.querySelector("#movingbutton").style.fontSize = currentSize.toString();
}
*/
/*

function change(){
    let i = Math.floor(Math.random()*300)+1;
    let j = Math.floor(Math.random()*300)+1;
    console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i +'px';
    b.style.top = j + "px";
}

var b = document.querySelector("button");
b.addEventListener("mousemove",change);
function change()
{
    var i = Math.floor(Math.random()*300)+1;
    var j = Math.floor(Math.random()*300)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}*/

/*
var b = document.querySelector("button");
b.addEventListener("click",change);
function change()
{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}
*/

/*const nope = document.querySelector(".nope")
const yes = document.querySelector(".yes")
const body = document.querySelector("body")
const heading = document.querySelector("#heading")

nope.onclick = valentine
yes.onclick = yesValentine

function valentine(){
    heading.innerText = "LET'S TRY THAT AGAIN!"
    body.style.backgroundColor = "black"
}
function yesValentine(){
    yes.innerText = "Good for you"
}
*/
