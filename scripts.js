let play = document.getElementById('play');
let playSettings = document.getElementById('play-settings');
let gameOver = document.getElementById('game-over');
let finalScore = document.getElementById('final-score');
let playAgain = document.getElementById('play-again');
let highScore = document.getElementById('high')
playAgain.addEventListener('click',()=>{
    gameOver.style.display='none';
    elem.style.top=0;
    elem.style.left=0;
    highScore.innerText=Math.max(parseInt(highScore.innerText),parseInt(score.innerText))
    score.innerText='0';
    playSettings.style.display='flex'
})
play.addEventListener('click', () => {
    playSettings.style.display = 'none';
    myMove();
})
let score = document.getElementById('value');
let container = document.getElementById('container')
var id = null;
document.addEventListener("mousemove", logKey);
var bat = document.getElementById('bat');
function logKey(e) {
    bat.style.left = e.clientX + 'px'
}
let xAxis;
let yAxis=true;
let speed=1;
if(Math.round(Math.random())==0){
    xAxis=true;
}else{
    xAxis=false;
}
var elem = document.getElementById("ball");
function myMove() {
    var x = 0;
    var y = 0;
    clearInterval(id);
    id = setInterval(frame);
    function frame() {
        let batp = bat.getBoundingClientRect();
        let contp = container.getBoundingClientRect();
        let ballp = elem.getBoundingClientRect();
        console.log(ballp.x,ballp.y);
        if (ballp.bottom >= contp.bottom) {
            gameOver.style.display='flex';
            finalScore.innerText="Your Score: "+score.innerText;
            clearInterval(id);
        } else if (yAxis&&ballp.bottom >= batp.top && (ballp.x >= batp.x && ballp.x <= batp.x + batp.width)) {
            let nscore = parseInt(score.innerText) + 1
            score.innerText = nscore;
            checkBounce(false);
        } else if(ballp.x>=screen.availWidth||ballp.x<=0){
            console.log("endX");
            checkBounce(true);
        }else if(ballp.y<=0){
            console.log("endY");
            checkBounce(false);
        }
        console.log(xAxis,yAxis,"in");
        if (xAxis) {
            x+=speed;
        } else {
            x-=speed;
        }
        if (yAxis) {
            y+=speed;
        } else {
            y-=speed;
        }
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
    }
}
function checkBounce(val){
    console.log(xAxis,yAxis,"checkBounce");
    if(val){
        xAxis=!xAxis;
    }else{
        yAxis=!yAxis;
    }
}

let slow=document.getElementById('slow');
let mid=document.getElementById('mid');
let fast=document.getElementById('fast');
slow.addEventListener('click',()=>{
    speed=1;
})
mid.addEventListener('click',()=>{
    speed=3;
})
fast.addEventListener('click',()=>{
    speed=5;
})
let small=document.getElementById('small');
let medium=document.getElementById('medium');
let large=document.getElementById('large');
small.addEventListener('click',()=>{
    bat.style.width=5+'rem';
})
medium.addEventListener('click',()=>{
    bat.style.width=10+'rem';
})
large.addEventListener('click',()=>{
    bat.style.width=20+'rem';
})