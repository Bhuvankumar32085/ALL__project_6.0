let timeDisplay=document.querySelector('.timeDisplay');
let stopbtn=document.querySelector('.stopbtn');
let start=document.querySelector('.start');
let reset=document.querySelector('.reset');

let msec=0;
let sec=0;
let min=0;

let timerid=null;


start.addEventListener('click',()=>{
    if(timerid != null){
        clearInterval(timerid);
    }
    timerid=setInterval(startTime,10);
});

stopbtn.addEventListener('click',()=>{
    clearInterval(timerid);
});

reset.addEventListener('click',()=>{
    clearInterval(timerid);
    timeDisplay.innerHTML=`0 : 0 : 0`;
    msec=sec=min=0;
});

function startTime(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }

    // let msecStr=msec < 10 ? `0${msec}` : msec;
    // let secStr=sec < 10 ? `0${sec}` : sec;
    // let minStr=min < 10 ? `0${min}` : min;

    // timeDisplay.innerHTML=`${minStr} : ${secStr} : ${msecStr}`
    timeDisplay.innerHTML=`${min} : ${sec} : ${msec}`
}