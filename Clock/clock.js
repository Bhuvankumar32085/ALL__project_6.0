let time=setInterval(()=>{
   let d=new Date();
   let h=d.getHours();
   let m=d.getMinutes();
   let s=d.getSeconds();
   
   let hd;
   if(h>12){
      hd=((h-12)*30+m/2)
   }
   let md=m*6+s/10;
   let sd=s*6;

   document.querySelector(".hour").style.transform=`rotate(${hd}deg)`
   document.querySelector(".min").style.transform=`rotate(${md}deg)`
   document.querySelector(".sec").style.transform=`rotate(${sd}deg)`
},1000);

// clearInterval(time)