const input = document.getElementById("sec");
const input2 = document.getElementById("min");
let time;
let run=false;
function minuter(){
    if(run)return;
    let sec=Number(input.value);
    let min=Number(input2.value);
    if(min < 0){
        min=0;
    }
    if(min > 90){
        min=90;
    }
    if (sec < 0){
        sec = 0;
    }
    if(sec > 60){
        sec=59;
    }
    input2.value=min;
    input.value=sec;
       time=setInterval(()=>{
        run=true;
        document.querySelector(".output").style.color="white";
            document.querySelector(".output").textContent=
            (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) 
            ;
            if(sec == 0 && min == 0){
                stoptimer();
                message();
                return;
            }
            if(sec > 0){
                sec--;

            }
            else{
                min--;
                sec=59;
            }
        },800)
    }
    function message(){
        document.querySelector(".output").textContent="temps ecoulé";
        document.querySelector(".output").style.color="green";

    }
    function stoptimer(){
        clearInterval(time);
        run=false;
    }
    function refresh(){
        if(run){
            stoptimer()
        }
        else{
            minuter();
        }
    }
    function display(){
        input.disabled=true;
        input2.disabled=true;
    }
    document.querySelector(".minu").addEventListener("click", function(){
        input.disabled=false;
        input2.disabled=false;
    })
    document.querySelector(".overline").addEventListener("click",function(){
        display();   
     })
 document.querySelector(".form-minuteur").addEventListener("click", function(){
        display();
    })
    function overlayby(){
        const card=document.querySelector(".card");
        card.style.display="none";
        document.querySelector(".overlay").style.display="none";
    }
    function ferme(){
        overlayby();
    }
    document.querySelector(".overlay").addEventListener("click",function(){
        overlayby();
    })