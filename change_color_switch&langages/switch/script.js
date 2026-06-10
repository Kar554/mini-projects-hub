 const cercle=document.querySelector(".cercle");
    const h1=document.querySelector("h1");
    //clique du bouton
  document.getElementById("toggle").addEventListener("click", function(e){
    //changer le texte
    h1.textContent=
    h1.textContent === "Mode sombre" ? "Mode claire" : "Mode sombre";
    //changer la couleur du texte
    h1.style.color=
    h1.style.color === "white" ? "black" : "white";
    //ajouter ou supprimer la classe active qui permet de changer de direction au cercle
    cercle.classList.toggle("active");
    //changer la couleur de fond du body
  document.body.style.background=
  document.body.style.background === "black" ? "white":"black";
  //changer la couleur de fond du cercle
    cercle.style.background=
    cercle.style.background === "white" ? "black":"white";
  }) 