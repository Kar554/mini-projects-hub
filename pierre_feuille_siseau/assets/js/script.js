let overflow=document.querySelector(".overflow");
let player=document.getElementById("player");
let robo=document.getElementById("robot");
let message=document.querySelector(".message");
let pierre="✊🏻";
let papier="✋🏻";
let siceaux="✌🏻";
let table=["✊🏻","✌🏻","✋🏻"];
const essaie=document.getElementById("essaie");
function jeu(arg){
    essaie.classList.add("essaie");
    message.classList.add("messages");
    overflow.style.display="none";
    let robot=table[Math.floor(Math.random() * table.length)];
    player.textContent=arg;
    robo.textContent=robot;
    if(arg ==  robot){
message.textContent="egalité";
message.style.color="yellow";
essaie.textContent="réessayer";
essaie.style.background="yellow";
    }
    else if(arg == pierre && robot == siceaux || arg == siceaux && robot == papier || arg == papier && robot == pierre){
message.textContent="vous avez gagner";
message.style.color="green";
essaie.textContent="Recommencer";
essaie.style.background="lime";
    }
    else{
        message.textContent="vous avez perdu";
        message.style.color="red";
        essaie.textContent="réessayer";
        essaie.style.background="red";
    }
  
}
essaie.addEventListener("click" , function(){
    window.location.href="index.html";
})