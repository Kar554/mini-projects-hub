let player1Text=document.querySelector(".player span");
let player2Text=document.querySelector(".ia span");
let message=document.getElementById("message");
let array=[];
let contentplayer1=document.querySelector(".player");
let contentplayer2=document.querySelector(".ia");
let cards=document.querySelectorAll(".case");
let run=false;
let x=false;
let i=0;
let o=false;
let arrayX=[];
let arrayO=[];
cards.forEach(card => {
    card.addEventListener("click",function(e){
        let arg=card.getAttribute("data-arg");
        if(card.textContent==""){
        if(array[array.length-1] =="X"){
                    arrayX.push(arg);
            card.textContent="O";
            card.style.color="red";
            contentplayer1.classList.add("active");
            contentplayer2.classList.remove("active");
        }
        else{
            arrayO.push(arg);
            card.textContent="X";
            card.style.color="lime";
            contentplayer2.classList.add("active");
            contentplayer1.classList.remove("active");
        }
        array.push(card.textContent);
        card.style.pointerEvents="none";
    }
if(array.length >=9){
    message.textContent="Match nulle";
}
       if(arrayX.includes("1") && arrayX.includes("2") && arrayX.includes("3")){
    run=true;
    x=true;
}
      else if(arrayX.includes("4") && arrayX.includes("5") && arrayX.includes("6")){
    run=true;
    x=true;
}
      else if(arrayX.includes("7") && arrayX.includes("8") && arrayX.includes("9")){
    run=true;
    x=true;
}
      else if(arrayX.includes("1") && arrayX.includes("4") && arrayX.includes("7")){
    run=true;
    x=true;
}
      else if(arrayX.includes("2") && arrayX.includes("5") && arrayX.includes("8")){
    run=true;
    x=true;
}
      else if(arrayX.includes("3") && arrayX.includes("6") && arrayX.includes("9")){
    run=true;
    x=true;
}
      else if(arrayX.includes("1") && arrayX.includes("5") && arrayX.includes("9")){
    run=true;
    x=true;
}
      else if(arrayX.includes("3") && arrayX.includes("5") && arrayX.includes("7")){
    run=true;
    x=true;
}
      else if(arrayO.includes("1") && arrayO.includes("2") && arrayO.includes("3")){
    run=true;
    o=true;
}
      else if(arrayO.includes("4") && arrayO.includes("5") && arrayO.includes("6")){
    run=true;
    o=true;
}
      else if(arrayO.includes("7") && arrayO.includes("8") && arrayO.includes("9")){
    run=true;
    o=true;
}
      else if(arrayO.includes("1") && arrayO.includes("4") && arrayO.includes("7")){
    run=true;
    o=true;
}
      else if(arrayO.includes("2") && arrayO.includes("5") && arrayO.includes("8")){
    run=true;
    o=true;
}
      else if(arrayO.includes("3") && arrayO.includes("6") && arrayO.includes("9")){
    run=true;
    o=true;
}
      else if(arrayO.includes("1") && arrayO.includes("5") && arrayO.includes("9")){
    run=true;
    o=true;
}
      else if(arrayO.includes("3") && arrayO.includes("5") && arrayO.includes("7")){
    run=true;
    o=true;
}
else{
    run=false;
    o=false;
    x=false;
}
    if(run && x){
        message.textContent="Le joueur O a gagné";
        i++;
        player2Text.textContent=i;
        cards.forEach(ca =>{
            ca.style.pointerEvents="none";
        })
    }
    else if(run && o){
        message.textContent="Le joueur X a gagné";
        i++;
        player1Text.textContent=i;
        cards.forEach(ca =>{
            ca.style.pointerEvents="none";
        })
    }
    })
});

function again(){
    array=[];
    arrayO=[];
    arrayX=[];
    contentplayer1.classList.add("active");
    message.textContent="";
            contentplayer2.classList.remove("active");
cards.forEach(card => {
    card.textContent="";
    card.style.pointerEvents="all";
})
}