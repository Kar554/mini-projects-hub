let menu=document.querySelector("nav ul");
let hamburger=document.querySelector(".hamburger");
let header=document.querySelector("header");
let fermeBtn=document.querySelector(".fermer");
let inputSearch=document.getElementById("searchInput");
let cardAll=document.querySelectorAll(".card");
let produittitre=document.querySelector(".produitTitle");
let searchBar=document.querySelector(".search-bar");
let pannier=document.querySelector(".pannier");
let formCard=document.querySelector(".form-card");
let dragstar=document.querySelector(".dragstar");
let formpannier=document.querySelector(".form-pannier");
let currentBtn=0;
let badge=document.querySelector(".badge");
let gdiv1=document.querySelector(".produit");
let nbrAchat=document.getElementById("nbrAchat");
let prixtotal=document.getElementById("prixtotal")
// let messagetrue=true;
let arrayprix;
let array=[];
let message=document.getElementById("message");
function openMenu(){
    menu.classList.remove("desktop");
    menu.classList.add("hide");
    menu.style.display="flex";
    fermeBtn.style.display="block";
    hamburger.style.display="none";
}
function closeMenu(){
    menu.style.display="none";
    fermeBtn.style.display="none";
    hamburger.style.display="block";
}

window.addEventListener("scroll",function(){
    if(window.innerWidth >= 576){

        if(window.scrollY >= 120){
            header.style.background="rgba(0, 0, 0, 0.267)";
            document.querySelectorAll("ul a").forEach(a => a.style.color="white");
            
        }
        else{
            header.style.background="white";
            document.querySelectorAll("ul a").forEach(a => a.style.color="black");
        }
    }
})

inputSearch.addEventListener("input",function(){
    let valueSearch=inputSearch.value.trim().toLowerCase();
    cardAll.forEach((card,index)=>{
    let title=card.querySelector("p").textContent.toLowerCase().trim();
    let price=card.querySelector("span").textContent.toLowerCase().trim();
    // if(card.style.display=="block"){
    //     array.push(card);
    // }
    // else{
    //     array=[];
    // }
    if(title.includes(valueSearch) || price.includes(valueSearch)){
        message.textContent="";
        cardAll[index].style.display="block";
        produittitre.style.display="block";
        // messagetrue=false;
    }
    else if(valueSearch.trim() ==""){
        message.textContent="";
        cardAll[index].style.display="block";
        produittitre.style.display="block";
    }
    else{
        // if(!messagetrue){
        //     message.textContent="aucune recherche trouvé";
        // }
        card.style.display="none";
        produittitre.style.display="none";
    }
})
})

function recherche(){
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
    message.textContent=""
    produittitre.style.display="block"
    searchBar.style.display=
    searchBar.style.display=="flex" ? "none" :"flex";
}
// document.getElementById("#icon-search").addEventListener("click",function(){
//     document.documentElement.scrollTop=0;
//     document.body.scrollTop=0;
// })

pannier.addEventListener("click",function(){
    nbrAchat.textContent="nombre d'achat faite "+array.length;
    // prixtotal.textContent=;
    if(formCard.classList.contains("show-pannier")){
        formCard.classList.remove("show-pannier");
        dragstar.style.display="none";
    }
    else{
        
        dragstar.style.display="block";
        formCard.classList.add("show-pannier");
    }
})

function addpannier(arg){
    
    if(window.innerWidth <= 576){
        dragstar.style.display="none";
        formpannier.style.display="none";
        dragstar.style.position="fixed";
        formpannier.classList.remove("form-pannier")
        dragstar.classList.remove("dragstar")
    }
    dragstar.style.display="block";
    dragstar.style.animation="fadepannier 0.8s ease-in";
    formCard.classList.add("show-pannier");
    if(array.includes(arg)){
        alert("ce produit as déjà été ajouté");
        return;
    }
    currentBtn++;
    nbrAchat.textContent="nombre d'achat faite "+array.length;
    badge.textContent=currentBtn;
    array.push(arg);
     cardAll.forEach((card,index)=>{
        let i=1;
        if(index == arg-1){
            let title=card.querySelector("p").textContent.toLowerCase().trim();
            let price=card.querySelector("span").textContent.toLowerCase().trim();
            let image=card.querySelector("img");
            let deletebtn=document.createElement("div");
            deletebtn.className="sup";
            deletebtn.innerHTML=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="Currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="Currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="Currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="Currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="Currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            let div=document.createElement("div");
            div.className="card-pannier";
            let img=document.createElement("img");
            img.src=image.src;
            let h1=document.createElement("p");
            h1.textContent=title;
            let btn=document.createElement("div");
            let btnplus=document.createElement("button");
            let nbr=document.createElement("input");
            nbr.value="1";
            nbr.type="number";
            // nbr.size=3;
            nbr.min=1;
            nbr.className="nbr";
            let btnmoin=document.createElement("button");
            // btnmoin.onclick="moins()";
            // btnplus.onclick=`plus('${currentBtn}')`;
            let prix=document.createElement("span");
            prix.textContent=price;
            div.appendChild(img);
            div.appendChild(deletebtn);
            div.appendChild(h1);
            div.appendChild(prix);
            div.appendChild(btn);
            btnplus.className="plus";
            btnplus.textContent="+";
            btnmoin.textContent="-";
            btn.className="but";
            btnmoin.className="moins";
            btn.appendChild(btnplus);
            btn.appendChild(nbr);
            btn.appendChild(btnmoin);
            formpannier.appendChild(div);
            div.style.animation="fadecard 1.8s ease-in";
            let prixbas=parseFloat(price);
            btnmoin.addEventListener("click",function(){
              i--;
              if(i<1){
                  i=1;
                }
                prix.textContent=(prixbas * i) +" $";
                nbr.value=i;
            })
            btnplus.addEventListener("click",function(){
                i++;
                prix.textContent=(prixbas * i) +" $";
                nbr.value=i;
            })
            nbr.addEventListener("input",function(){
                if(nbr.value<1){
                  nbr.value=1;
                }
                i=nbr.value;
                prix.textContent=(prixbas * i) +" $";
            })
            arrayprix+=prix.textContent;
            deletebtn.addEventListener("click",function(){
                div.remove();
                let ind=array.indexOf(card);
                array.splice(ind,1);
            })
        }
     })
     console.log(formpannier.innerHTML)
    }


function mobilePannier(){
    setInterval(()=>{
        prixtotal.textContent=arrayprix;
        nbrAchat.textContent="nombre d'achat faite "+array.length;
    },10)
    if(dragstar.style.display =="none"){
        gdiv1.style.display="none";
        formpannier.style.display="block";
        
        formpannier.classList.add("form-pannier")
        dragstar.classList.add("dragstar");
        dragstar.style.display="grid";
        dragstar.style.position="relative";
    }
    else{
        gdiv1.style.display="grid";
        dragstar.style.display="none";
        formpannier.style.display="none";
        formpannier.classList.remove("form-pannier")
        dragstar.classList.remove("dragstar");
        dragstar.style.position="fixed";
    }
}