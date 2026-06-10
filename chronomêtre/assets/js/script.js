let timer;
let min=0;
let sec=0;
let heur=0;
let run=false;
let p=document.querySelector("p");
function local(){
    
    p.textContent=
    (10 > heur ? "0" + heur : heur ) + ":"+
    (10 > min ? "0" + min :min )  + ":"+
    (10 > sec ? "0" + sec :sec );
}
function start(){
    if(!run){
        run=true;
        timer=setInterval(()=>{
            sec++;
            if(sec == "60"){
                sec=0;
                min++;
            }
            if(min =="60"){
                min=0;
                heur++;
            }
            local();
        },800)
    }
}

function pause(){
    run=false;
    clearInterval(timer);
}
function arret(){
    run=false;
    clearInterval(timer);
    sec=0;
    min=0;
    heur=0;
    local(); 
}