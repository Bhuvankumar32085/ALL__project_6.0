let gameseq=[];
let userseq=[];


let btn=["yellow","red","purple","green"];

let started=false;
let level=0;
let highescore=level;

let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started");
    started=true;
    levelUp()
   }
})

function gameFlash(btn){
  btn.classList.add("flash");
   setTimeout(function(){
     btn.classList.remove("flash");
   },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
     setTimeout(function(){
       btn.classList.remove("userFlash");
    },250)
}

function levelUp(){
    userseq=[];
  level++;
  h2.innerText=`Level ${level}`;

  let randIdx=Math.floor(Math.random()*4);
  let randColor=btn[randIdx];
  let randbtn=document.querySelector(`.${randColor}`)
  gameFlash(randbtn);
  console.log(gameseq);
  gameseq.push(randColor);
}

function checkAns(idx){
 if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelUp,500);
    } 
 }else{
    h2.innerHTML=`Game over! Your score was <b>((${level}))</b> </br> Press any key to start,`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
 }
}
  
function btnPress(){
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userseq.push(userColor);
  
  checkAns(userseq.length-1);
}

let allBtn=document.querySelectorAll(".btn");

for(btns of allBtn){
    btns.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
