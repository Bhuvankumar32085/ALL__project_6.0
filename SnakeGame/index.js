// const { json } = require("express");

let Direction={ x:0,y:0};
let board=document.querySelector('.board')
const FoodSound=new Audio("music/food.mp3");
const GameOverSound=new Audio("music/gameover.mp3");
const MoveSound=new Audio("music/move.mp3");
const MusicSound=new Audio("music/music.mp3");
let speed=4;
let score=0;
document.querySelector('.score').innerHTML=`score : ${score}`
let lastPaintTime=0;
let snakArr=[
    {x: 13, y :15}
]

let food={x: 6,y :7}
//Game function
function main(currTime){
    window.requestAnimationFrame(main);
    if((currTime-lastPaintTime)/1000< 1/speed){
        return;
    }
    lastPaintTime=currTime;
    gameEngine()
}

function gameEngine() {
    // Updating the snake array & foor
    if(isCollide(snakArr)){
        GameOverSound.play();
        MusicSound.pause();
        Direction={ x:0,y:0};
        alert("Game over Press any keyto play again");
        snakArr=[{x: 13, y :15}]
        // MusicSound.play();
        score=0;
        document.querySelector('.score').innerHTML=`score : ${score}`
    }

    //if you have eaten the food ,increment the score and regenerate the food
    if(snakArr[0].y===food.y  && snakArr[0].x===food.x){
       FoodSound.play()
       score++;
       if(score>hiscoreval){
           hiscoreval=score;
           localStorage.setItem('.higscore',JSON.stringify(hiscoreval))
           higscore.innerHTML=`HighScore: ${hiscoreval}`
       }
       document.querySelector('.score').innerHTML=`score : ${score}`
       snakArr.unshift({x:snakArr[0].x+Direction.x,y:snakArr[0].y+Direction.y})
       food={x:Math.floor(Math.random()*15)+2,y:Math.floor(Math.random()*15)+2}
    //    console.log(food)
    }

    //moving the snake
    for (let i = snakArr.length-2; i >=0; i--) {
        snakArr[i+1]={...snakArr[i]};
    }
    snakArr[0].x+=Direction.x;
    snakArr[0].y+=Direction.y;

    // display the snake
    board.innerHTML="";
    snakArr.forEach((e,index)=>{
       snakeElement=document.createElement('div');
       snakeElement.style.gridRowStart=e.y;
       snakeElement.style.gridColumnStart=e.x;
       if(index===0){
        snakeElement.classList.add('head')
       }else{
        snakeElement.classList.add('snake');
       }
       board.appendChild(snakeElement);
    })
    //display the food
       foodElement=document.createElement('div');
       foodElement.style.gridRowStart=food.y;
       foodElement.style.gridColumnStart=food.x;
       foodElement.classList.add('food');
       board.appendChild(foodElement);
}

function isCollide(sArr){
    //if you bump into yourself
    for (let i = 1; i < snakArr.length; i++) {
        if(sArr[i].x===sArr[0].x  && sArr[i].y===sArr[0].y){
            return true;
        }
    }
    //if you bump in wall
    if(sArr[0].x>=18 || sArr[0].x <= 0 || sArr[0].y >= 18 || sArr[0].y <= 0){
        return true;
    }
}

window.addEventListener('keydown',(e)=>{
    Direction={x:0,y:1};//start the game
    // console.log(e)
    MoveSound.play();
    switch (e.key) {
        case 'ArrowUp':
            Direction.x=0;
            Direction.y=-1;
            break;
        case 'ArrowDown':
            Direction.x=0;
            Direction.y=1;
            break;
        case 'ArrowRight':
            Direction.x=1;
            Direction.y=0;
            break;
        case 'ArrowLeft':
            Direction.x=-1;
            Direction.y=0;
            break;
        default:
            break;
    }
})

let higscore=document.querySelector('.higscore')
let hifscore=localStorage.getItem('.higscore')
let hiscoreval=0;
if(hifscore===null){
    localStorage.setItem('.higscore',JSON.stringify(hiscoreval))
}else{
    // hiscoreval=JSON.parse(higscore);
    higscore.innerHTML=`Highscore : ${hifscore}`
}
console.log(hifscore)

//Main logic starts hear
window.requestAnimationFrame(main)