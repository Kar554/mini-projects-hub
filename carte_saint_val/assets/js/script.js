let index=0;
let carrousel=document.querySelector(".slide");
let gift=document.querySelectorAll(".gift");
let bar=document.getElementById("bar");
let slides=document.querySelectorAll(".card");
let parentHeart=document.querySelector(".parent-heart");
let current=0;
let hautEnveloppe=document.querySelector(".haut");
let enveloppe=document.querySelector(".paper");
let i=0;
let formCart=document.querySelector(".form-carte");
// alert(slides[0].offsetWidth)
setInterval(()=>{
    if(index < slides.length -1){
        index++;
        carrousel.style.transform=`translateX(-${index * 250}px)`;
        carrousel.style.transition="all 1.3s";
    }
    else{
        index=0;
        carrousel.style.transform=`translateX(0px)`;
        carrousel.style.transition="all 1.3s";
    }
},3000)

function next(){
    i++;
    // hautEnveloppe.style.display="none";
    // Enveloppe.style.display="none";
    gift.forEach((element,index)=>{
        element.style.display="none";
        gift[i].style.display="block";
        gift[i].style.animation="gift 1.3s ease-in";
    })
    let array=gift.length - 1;
    bar.style.transition="all 0.8s";
    bar.style.width=`${(100 / array) * i}%`;
}
function myHeart(){
    setInterval(()=>{
        
        current++;
        if(current < 700){
            let divheart=document.createElement("div");
            divheart.textContent="💖";
            divheart.className="divheart";
            parentHeart.appendChild(divheart);
        }
    },1)
}

function opene(){
    enveloppe.style.borderTop="200px solid transparent";
    hautEnveloppe.style.display="block";
    hautEnveloppe.style.zIndex="-1";
    formCart.style.animation="fadecart 2.4s ease-in";
    formCart.style.transform="translateY(-50%)";
    formCart.style.top="50%";
    formCart.style.zIndex="10";
}
function fermer(){
    i=0;
     gift.forEach((element,index)=>{
        element.style.display="none";
        gift[i].style.display="block";
        gift[i].style.animation="gift 1.3s ease-in";
    })
    formCart.style.animation="none";
    formCart.style.animation="closecart 1.3s ease-in";
    formCart.style.maxWidth= "600px";
    formCart.style.minHeight="400px";
    bar.style.width=`0%`;
    // formCart.style.maxHeight="300px";
    formCart.style.transform="translateY(-50%)";
    formCart.style.top="50%";
    formCart.style.zIndex="-1";
    setInterval(()=>{
        hautEnveloppe.style.display="none";
        enveloppe.style.borderTop="200px solid rgb(231, 12, 85)";
    },2000)
}