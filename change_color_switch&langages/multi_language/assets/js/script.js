//script de la nav
const hamburger=document.getElementById("menu");
const fermer=document.getElementById("fermer");
const nav=document.querySelector("nav ul");
function openMenu(){
    nav.style.display="flex";
    fermer.style.display="flex";
    hamburger.style.display="none";
}
function closeMenu(){
    nav.style.display="none";
    fermer.style.display="none";
    hamburger.style.display="flex";
}

// objet de traductions
const translations = {
  fr: {
    welcome: "Bienvenue à",
    siteName: "DesmondDev",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam rem, error reprehenderit minima praesentium fuga unde temporibus? Doloremque, aliquid earum. Ad, error! Voluptate repellat debitis itaque aliquid minus! Enim.",
    readMore: "Lire plus",
    link: ["Accueil", "Apropos", "Param"]
  },
  an: {
    welcome: "Welcome to",
    siteName: "DesmondDev",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam rem, error reprehenderit minima praesentium fuga unde temporibus? Doloremque, aliquid earum. Ad, error! Voluptate repellat debitis itaque aliquid minus! Enim.",
    readMore: "Read more",
    link: ["Home", "About", "Settings"]
  },
  es: {
    welcome: "Bienvenido a",
    siteName: "DesmondDev",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vitae assumenda culpa pariatur sapiente perspiciatis ipsum alias maiores beatae! Saepe doloribus amet iure dignissimos, aut enim, earum quia reiciendis voluptates optio voluptatem minus dolores fugiat obcaecati temporibus dolore voluptatibus adipisci.",
    readMore: "Leer más",
    link: ["Inicio", "Acerca de", "Parámetros"]
  }
};

const langSelect = document.getElementById("languages");
const a=document.querySelectorAll("li a");
function langa(){
    let lang=langSelect.value;
    const select=document.querySelectorAll("[data-key]");
    select.forEach((element) => {
        const data=element.getAttribute("data-key");
       if(translations[lang][data]){
        element.textContent=translations[lang][data];
    }
})
a.forEach((el,index) =>{
    if(translations[lang]["link"]){
        el.textContent=translations[lang].link[index];
        
    }
})
    }

    langSelect.addEventListener("change" , function(){
        langa();
    })
    langa();

