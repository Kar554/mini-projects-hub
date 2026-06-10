let input=document.getElementById("input");
let arrayWords = [
  "amour","travail","famille","amitié","santé","argent","temps","patience","effort","respect",
  "confiance","courage","espoir","discipline","liberté","responsabilité","réussite","échec","apprentissage","expérience",
  "bonheur","tristesse","colère","peur","motivation","ambition","persévérance","équilibre","décision","choix",
  "routine","changement","progrès","créativité","organisation","concentration","silence","écoute","communication","collaboration",
  "solidarité","justice","honnêteté","humilité","gratitude","générosité","simplicité","engagement","constance","adaptation",
  "observation","réflexion","stratégie","planification","exécution","rigueur","qualité","performance","efficacité","amélioration",
  "innovation","leadership","influence","vision","objectif","priorité","stabilité","résilience","détermination","maîtrise",
  "savoir","compétence","talent","vocation","passion","énergie","harmonie","bienveillance","tolérance","maturité",
  "sagesse","discernement","prudence","audace","initiative","implication","fiabilité","crédibilité","légitimité","impact"
];

let niveau=document.querySelector(".current");
let word=document.querySelector(".word");
let i=0;
let wordCurrent=arrayWords[i];
let message=document.getElementById("message")
let chance=document.querySelector(".chance");
let arrayWordCurrent=wordCurrent.split('');
niveau.textContent="1/"+arrayWords.length;
arrayWordCurrent.forEach((element,index)=>{
    const span=document.createElement("span");
    span.textContent=element;
    word.appendChild(span);
    if(index==0 || index == 1){
        span.textContent=element;
    }
    else{
        span.textContent="_";
    }
})
let spanall=document.querySelectorAll("span");
input.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        valider();
    }
})
function refre(){
    word.style.color="brown";
    document.querySelector(".changebtn").style.display="none";
    message.textContent="";
    i++;
    niveau.textContent=`${i+1}/${arrayWords.length}`;
    word.textContent="";
    if(i >= arrayWordCurrent.length){
        i=0;
    }
    wordCurrent=arrayWords[i];
    arrayWordCurrent=wordCurrent.split('');
    arrayWordCurrent.forEach((element,index)=>{
        const span=document.createElement("span");
        if(index == 0 || index==1){
            span.textContent=element;
        }
        else{
            span.textContent="_";
        }
        word.appendChild(span);
    })
    spanall=document.querySelectorAll(".word span");
}

let nbr=5;
function valider(){
    let value=input.value.toLowerCase().trim();
    if(value == "") return;
    input.value="";
  
    let trouve=false;
    spanall.forEach((span,ind)=>{
        console.log(span,ind);
        if(wordCurrent[ind] == value){
            span.textContent=value;
            trouve=true;
        }
    })
      let reste=false;
    spanall.forEach(span =>{
        if(span.textContent === "_"){
            reste=true;
        }
    })
    if(!reste){
        message.textContent="Vous avez gagné";
        message.style.color="green";
        document.querySelector(".changebtn").style.display="block";
        word.style.color="green";
    }
    else if(!trouve){
        nbr--;
        message.textContent="la lettre ne corresponds pas";
        message.style.color="red";
    }
    else{
        nbr=5;
        message.textContent="continue...";
        message.style.color="orange";
    }
    if(nbr <= 0){
        nbr=0;
        message.textContent="Jeu perdu";
        document.querySelector(".mot").textContent=wordCurrent;
        none();
    }
    else if(nbr<=3){
        chance.style.color="red";
    }
    chance.textContent="Vous avez "+ nbr +" chance.";
}
function none(){
    message.style.display="none";
    word.style.display="none";
    document.querySelector(".champ").style.display="none";
    chance.style.display="none";
    document.querySelector(".changebtn").style.display="none";
    document.querySelector(".apparition").style.display="block";
}