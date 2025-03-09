let userScore=0;
let comScore=0;
let randomChoice=['rock','paper',"scissors"]
let choice=document.querySelectorAll('.img');
let msg=document.querySelector('.msg');

//this function Generate random Choice for Computer
function randomComputerChoice(params) {
    let ranNum=Math.floor(Math.random()*3);
    return randomChoice[ranNum]
}

function showWinner(userWin) {
    if(userWin){
        console.log("-------> you win")
        userScore++;
        msg.innerHTML=`You win`;
        msg.style.backgroundColor='green'
        console.dir(msg)
        document.querySelector('#user-score').innerHTML=userScore;
    }else{
        console.log("-------> computer win")
        comScore++;
        msg.innerHTML=`You lose`;
        msg.style.backgroundColor='brown'
        document.querySelector('#comp-score').innerHTML=comScore;
    }
}

const playgame=(userChoices)=>{
    //Generate  Computer Choice
    let comChoice=randomComputerChoice();
    //User choice
    let userChoice=userChoices;
    
    document.querySelector('.your-choice').innerHTML=`Your Choice : ${userChoices}`;
    document.querySelector('.com-choice').innerHTML=`Computer Choice : ${comChoice}`;
    if(userChoice==comChoice){
        console.log("same choice")
        msg.style.backgroundColor='blue'
        document.querySelector('.msg').innerHTML=`Same Choice`;
    }else{
        let userWin=true;
        if(userChoice=='rock'){
            //paper scissors
            if(comChoice=='paper'){
                userWin=false;
            }else{
                userWin=true;
            }
        }else if(userChoices=='paper'){
            //rock scissors
            if(comChoice=='rock'){
                userWin=true;
            }else{
                userWin=false;
            }
        }else{//userChoices=='scissors'
            //rock paper
            if(comChoice=='rock'){
                userWin=false;
            }else{
                userWin=true;
            }
        }
        showWinner(userWin);
    }


    console.log('you=',userChoice)
    console.log('com=',comChoice)
}

// Add Event Listener for all img like : rock,paper,scissors
choice.forEach(e=>{
    e.addEventListener('click',()=>{
        let userChoice=e.classList[1];
        playgame(userChoice)
    })
})