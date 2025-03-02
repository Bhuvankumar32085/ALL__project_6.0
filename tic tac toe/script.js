console.log("Welcome to Tic Tac Toe");

let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let gameovers=false;

const changeTurn=()=>{
   return turn==="X"? "0":"X";
}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) 
        && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) 
        && (boxtext[e[0]].innerText !== "")){
         document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
         gameovers=true;
         document.querySelector('#img').getElementsByTagName('img')[0].style.width="156px"
        //  document.querySelector(".line").style.transform=`translate(${3}vh,${4}vh) rotate(${5}deg)`
    }
  })
}

// main logic
// music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
         if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
        if(!gameovers)
            document.getElementsByClassName("info")[0].innerText="turn for "+turn
         }
    })
})

// button 

let btn=document.querySelector('#reset');
btn.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=" ";
    })
    turn="X";
    gameovers=false;
    document.getElementsByClassName("info")[0].innerText="turn for "+turn;
    document.querySelector('#img').getElementsByTagName('img')[0].style.width="0px"
})



