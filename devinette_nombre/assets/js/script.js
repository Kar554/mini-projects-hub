let input=document.getElementById("input");
let message=document.getElementById("message");
const success=document.querySelector(".succes");
const h2=document.querySelector(".overflow h4");
const btn=document.querySelector(".again");
let numberRamdom= Math.floor(Math.random() * 19);
let essai=0;
let max=3;
function verifier(){
   
    message.textContent="";
    let champs=input.value;
   if(champs == ""){
    return;
   }
    essai++;
    if(essai >= max){
    success.style.display="flex";
    h2.textContent="Vous avez perdu le nombre etait :  "+numberRamdom;
    btn.style.background="red";
    btn.textContent="Réessayer";
   }
   else if(champs > 19 || champs < 1 ){
    message.textContent=champs+" Respecter la limite de 19";
   }
   else if(champs > numberRamdom){
    message.textContent="Le nombre est plus petit que "+ champs;
   }
   
   else if(champs < numberRamdom){
    message.textContent="Le nombre est plus grand que "+ champs;
   }
   else if(champs == numberRamdom){
    success.style.display="flex";
    h2.textContent="Felicitation Vous avez gagner le nombre est : " +champs;
    btn.style.background="green";
    btn.textContent="Recommencer";
   }
   input.value=" ";
}
function btne(){
    window.location.href="index.html";
}
document.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        verifier();
    }
})