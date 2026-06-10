let input=document.getElementById("input");
let synt=window.speechSynthesis;
let select=document.querySelector("select");
const btnspeak=document.getElementById("btnspeak");
const btnpause=document.getElementById("btnpause");
const btnstop=document.getElementById("btnstop");
const butContent=document.querySelector(".but");
let voice=[];
synt.onvoiceschanged = () =>{
  voice=synt.getVoices();//tableau []
    voice.forEach((element,index) =>{
        const option=document.createElement("option");
        option.value=index;
        option.textContent=element.name + "-" +element.lang;
        select.appendChild(option);
    })
}
function parler(){
    synt.cancel();
    let text=new SpeechSynthesisUtterance(input.value);
    text.voice=voice[select.value];
    text.lang=voice[select.value].lang;
    synt.speak(text);
btnspeak.style.display="none";
butContent.style.display="flex";

}
function pau(){
  synt.paused ? synt.resume() : synt.pause();
}
function arret(){
    butContent.style.display="none";
    btnspeak.style.display="block";
    synt.cancel();
}