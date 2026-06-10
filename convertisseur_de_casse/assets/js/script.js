let input=document.getElementById("input");
let form_casse=document.querySelector(".form-casse")
const button=document.querySelectorAll("button");
let agrandir=document.querySelector(".zoomout");
let reduire=document.querySelector(".zoomin");
let copibtn=document.querySelector(".copibtn");
let lettre=document.querySelector(".lettre");
const chevrondown=document.querySelector(".chevrondown");
const ferme=document.querySelector(".chevrontop");
let microBtn=document.querySelector(".micro");
input.style.fontWeight="normal";
input.style.fontStyle="normal";
input.style.textTransform="none";
function display(){
    for(i=4;i <button.length;i++){
        button[i].style.display="none";
    }
}
button.forEach((but,index)=>{
    but.addEventListener("click", function(){
        but.classList.toggle("focus");
    })
    button[2].addEventListener("mousedown", function(){
        button[2].style.background="rgb(7, 18, 160)";
    })
    button[2].addEventListener("mouseup", function(){
        button[2].style.background="blue";
    })
})
function normal(){
       button[0].addEventListener("mousedown", function(){
        button[0].style.background="rgb(7, 18, 160)";
    })
    button[0].addEventListener("mouseup", function(){
        button[0].style.background="blue";
    })
    input.style.fontWeight="normal";
input.style.fontStyle="normal";
input.style.textTransform="none";
button.forEach((element,index)=>{
    element.classList.remove("focus");
})

}
function maj() {
    
    button[5].classList.remove("focus");
    input.style.textTransform =
        input.style.textTransform === "uppercase"
        ? "lowercase"
        : "uppercase";
}
function minu(){
        button[1].classList.remove("focus");
        input.style.textTransform="lowercase";
    
}
function gras(){
    input.style.fontWeight=
    input.style.fontWeight==="bold" ? "normal" : "bold";
}
function ita(){
    input.style.fontStyle=
    input.style.fontStyle==="normal" ? "italic" : "normal"
}
function capita(){
    button[1].classList.remove("focus");
    input.style.textTransform=
    input.style.textTransform ==="capitalize" ? "none" : "capitalize";
}
function copi(){
    navigator.clipboard.writeText(input.value);
    copibtn.textContent = "copié";

    setTimeout(() => {
        copibtn.textContent = "copier";
    }, 1500);
}

function chevron(){
    button.forEach((element,index)=>{
        setTimeout(()=>{
            element.style.display="block";
            ferme.style.display="block";
            element.style.animation="fadeIn 1.3s ease-in";
        },500)
        })
    chevrondown.style.display="none";
}
display();
ferme.addEventListener("click" , function(){
    display();
    chevrondown.style="block";
    ferme.style.display="none";
})
setInterval(()=>{
    let nbr=input.value.trim();
    // nbr.split(' ');
    lettre.textContent=nbr.length + " Caractères ";
    let array=nbr.split(' ');
    let i=0;
    array.forEach((element,index)=>{
        if(element !==""){
            i++;
        }
    })
    document.querySelector(".mot").textContent = i+" "+"mots";
},10)

function sup(){
    input.value="";
    normal();
}
function micro(){
    let synt=window.speechSynthesis;
    let text=new SpeechSynthesisUtterance(input.value);
    synt.speaking ? synt.cancel() : synt.speak(text);
    microBtn.textContent=
    microBtn.textContent==="arrêter"  ? "audio" : "arrêter";
    if(microBtn.textContent === "arrêter"){
        microBtn.style.background="red";
    }
    else{
        microBtn.style.background="green";
    }
}
setInterval(()=>{
    if(input.value == ""){

        microBtn.style.display="none"
    }
    else{
        microBtn.style.display="block";
    }
})
function zoomout(){
    form_casse.style.maxWidth="100%";
    reduire.style.display="block";
    agrandir.style.display="none";
    form_casse.style.animation="zoomout 0.8s ease-in"
}
function zoomin(){
    form_casse.style.maxWidth="450px";
    reduire.style.display="none";
    agrandir.style.display="block";
    form_casse.style.animation="zoomin 0.8s ease-in"
}