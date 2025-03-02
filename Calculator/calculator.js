let inputs=document.querySelector('input');
let buttons=document.querySelectorAll('.btn');
let string="";

Array.from(buttons).forEach(e=>{
    e.addEventListener("click",(ev)=>{
        if(ev.target.innerHTML == "="){
            string=eval(string).toString();
            inputs.value=string;
        }else if(ev.target.innerHTML == "AC"){
            inputs.value="";
            string="";
        }else if(ev.target.innerHTML == "C"){
            let str=string.slice(0,string.length-1)
            string=str;
            inputs.value=string;
        }else{
            if(ev.target.innerHTML == "x"){
                string+="*";
                inputs.value=string;
            }else{
                string+=ev.target.innerHTML;
                inputs.value=string;
                console.log(string)
            }
        }
    })
})
