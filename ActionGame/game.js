let score=0;
let cross=true;
let audio=new Audio('music.mp3');
let audiogo=new Audio('gameover.mp3');

setTimeout(()=>{
  audio.play();
},1000)

document.addEventListener('keydown',(eve)=>{
    if(eve.keyCode==38){
        let dino=document.querySelector('.dino');
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },800);
    }
    if(eve.keyCode==39){
        let dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinox+112)+"px";
    }
    if(eve.keyCode==37){
        let dino=document.querySelector('.dino');
        dinoy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoy-112)+"px";
    }
})

setInterval(()=>{
    let dino=document.querySelector('.dino');
    let gameover=document.querySelector('.game-over');
    let obstacle=document.querySelector('.obstacle');

    let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    let ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    let oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    
    if(offsetx<73 && offsety<52){
        gameover.innerHTML='Game Over - Reload to Play Again';
        obstacle.classList.remove('obstacleani');
        audiogo.play();
        setTimeout(()=>{
           audiogo.pause();
           audio.pause();
        },1000)
    }else if(offsetx<145 && cross){
        score++;
        updateScore(score)
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
            newaniDur=aniDur - 0.1;
            obstacle.style.animationDuration=newaniDur+"s"

        },500)
    }
},10);

function updateScore(score){
    let scoreCon=document.querySelector('.score-con');
    scoreCon.innerHTML=`Your Score: ${score}`;
}