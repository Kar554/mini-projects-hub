const input=document.getElementById("input");
const success=document.querySelector(".copy-success")
function generate(){
  const car = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?_+-=".split("");


    let motdepasse="";
    const long=15;
    for(i=0;i < long;i++){
        const ramdom=Math.floor(Math.random() * car.length);
        motdepasse+=car[ramdom];
    }
    input.value=motdepasse;
}
function copy() {
    let texte = input.value;

    navigator.clipboard.writeText(texte)
        .then(() => {
            if (texte) {
                success.textContent = "Text copié avec succès !";
                success.style.display = "block";
            } else {
                success.textContent = "il n'y a pas de texte à copié ";
                success.style.display = "block";
            }
            setTimeout(() => {
                success.style.display = "none";
            }, 2000);
        })
        .catch(() => {
            success.textContent = "Erreur lors de la copie";
            success.style.display = "block";
            setTimeout(() => {
                success.style.display = "none";
            }, 2000);
        });
}
