let currentSong=new Audio();
let songinfo=document.querySelector('.songinfo');
let songtime=document.querySelector('.songtime');
let range=document.querySelector('.range');
let burger=document.querySelector('.burger');
let bb=document.querySelector('.bb i');
let prev=document.querySelector('#prev');
let next=document.querySelector('#next');
let songs;



// num to min : sec
const numberToMinutes = (num) => {
    const minutes = Math.floor(num / 60);
    const seconds = Math.floor(num % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

async function getsong() {
    let a=await fetch("http://127.0.0.1:5500/MusicWeb/songs")
    let response=await a.text();
    let div=document.createElement('div');
    div.innerHTML=response;
    let tds=div.querySelectorAll("#files li");
    let song = [];
    for (let index = 1; index < tds.length; index++) {
        song.push(tds[index].children[0].href);
    }
    return song;
}

const playMusic=(track)=>{
    currentSong.src='/MusicWeb/songs/'+track;
    play.className="fa-solid fa-pause playbtn";  
    currentSong.play(track);
    songinfo.innerHTML=currentSong.src.split('/songs/')[1].replace('.mp3'," ").replaceAll('%20'," ");
}


// let audio;

async function main(){
    songs= await getsong();
    let songUl=document.querySelector('.song-list').getElementsByTagName('ul')[0];
    for(son of songs){
     songUl.innerHTML=songUl.innerHTML +`
                    <li class="flex align-item">
                        <i class="fa-solid fa-music"></i>
                        <div class="info">
                            <div>${son.split('/songs/')[1]}</div>
                            <div>Bhuvan</div>
                        </div>
                        <i class="fa-solid fa-circle-play playbtn"></i>
                    </li>`
    }
    
    Array.from(document.querySelector('.song-list').getElementsByTagName('li')).forEach(e=>{
        e.addEventListener('click',()=>{
            playMusic(e.querySelector('.info').firstElementChild.innerHTML)
        })
    })

    play.addEventListener('click',()=>{
        if(currentSong.paused){
            currentSong.play()
            play.className="fa-solid fa-pause playbtn";
        }else{
            currentSong.pause()
            play.className="fa-solid fa-circle-play playbtn"
        }
    })
    

    range.addEventListener('input', () => {
        currentSong.currentTime = range.value;
    });


    currentSong.addEventListener('loadedmetadata', () => {
        range.max = currentSong.duration;
        songtime.innerHTML = `0:00 / ${numberToMinutes(currentSong.duration)}`;
    });
    
    currentSong.addEventListener('timeupdate', () => {
        songtime.innerHTML = `${numberToMinutes(currentSong.currentTime)} / ${numberToMinutes(currentSong.duration)}`;
        range.value = currentSong.currentTime;
    });

//   burger and crose btn
    burger.addEventListener('click',()=>{
        document.querySelector('.left').style.left="0";
    })
    bb.addEventListener('click',()=>{
        document.querySelector('.left').style.left="-100%";
    })

//    prev nest btn
    prev.addEventListener('click',(e)=>{
        let idx=songs.indexOf(currentSong.src)
        if(idx>0 && idx<songs.length){
            playMusic(songs[idx-1].split('/songs/')[1])
        }
    }) 

    next.addEventListener('click',(e)=>{
        let idx=songs.indexOf(currentSong.src)
        if(idx>=0 && idx<songs.length-1){
            playMusic(songs[idx+1].split('/songs/')[1])
        }
    })    
 }


main()

