    let form_message=document.querySelector(".form-container-message");
    let input=document.getElementById("input");
 const discussionCouple = [
  {
    id: 1,
    question: "Ça va ?",
    reponse: "Oui."
  },
  {
    id: 2,
    question: "Tu fais quoi ?",
    reponse: "Rien de spécial."
  },
  {
    id: 3,
    question: "Tu penses à moi parfois ?",
    reponse: "Oui, plus souvent que tu ne l’imagines."
  },
  {
    id: 4,
    question: "Comment tu te sens aujourd’hui ?",
    reponse: "Un peu fatigué(e), mais mentalement ça va."
  },
  {
    id: 5,
    question: "Tu as passé une bonne journée ?",
    reponse: "Oui, plutôt calme, sans stress particulier."
  },
  {
    id: 6,
    question: "Qu’est-ce qui t’a marqué aujourd’hui ?",
    reponse: "Une discussion intéressante qui m’a fait réfléchir longtemps après."
  },
  {
    id: 7,
    question: "Tu crois qu’on communique bien ?",
    reponse: "Je pense qu’on progresse, même s’il reste des ajustements à faire."
  },
  {
    id: 8,
    question: "Est-ce que je fais parfois des choses qui te blessent ?",
    reponse: "Parfois oui, mais rien d’irréversible, surtout quand on en parle calmement."
  },
  {
    id: 9,
    question: "Qu’est-ce que tu apprécies le plus chez moi ?",
    reponse: "Ta patience, ta façon d’écouter et ton respect."
  },
  {
    id: 10,
    question: "Tu te projettes avec moi ?",
    reponse: "Oui, clairement, même si je préfère avancer étape par étape."
  },

  /* ===== Tests mots longs ===== */

  {
    id: 11,
    question: "Test mot long",
    reponse: "Anticonstitutionnellement"
  },
  {
    id: 12,
    question: "Encore plus long ?",
    reponse: "Supercalifragilisticexpialidocious"
  },
  {
    id: 13,
    question: "Mot sans espace",
    reponse: "loremipsumdolorsitametconsecteturadipiscingelitmaissansaucunespace"
  },
  {
    id: 14,
    question: "Phrase + mot long",
    reponse: "Je voulais juste dire anticonstitutionnellement parlant que tout va bien."
  },

  /* ===== Tests phrases très longues ===== */

  {
    id: 15,
    question: "Comment tu vois notre relation ?",
    reponse: "Je la vois comme une relation qui évolue progressivement, avec des hauts et des bas, mais surtout avec une vraie volonté commune d’avancer ensemble malgré les difficultés."
  },
  {
    id: 16,
    question: "Tu as des doutes parfois ?",
    reponse: "Oui, comme tout le monde, mais je pense que les doutes ne sont pas négatifs tant qu’ils ouvrent la discussion et renforcent la compréhension mutuelle."
  },
  {
    id: 17,
    question: "Tu veux qu’on améliore quoi en priorité ?",
    reponse: "Notre manière d’exprimer ce qu’on ressent sur le moment, sans attendre que ça s’accumule."
  },

  /* ===== Tests emojis / ponctuation ===== */

  {
    id: 18,
    question: "Tu souris là ?",
    reponse: "Oui 😊"
  },
  {
    id: 19,
    question: "Tu es sûr(e) ?",
    reponse: "Ouiiiiii !!! 😄😄😄"
  },
  {
    id: 20,
    question: "Dernière chose…",
    reponse: "Je tiens vraiment à toi, même dans les moments où je ne sais pas toujours comment le dire."
  },
   { id: 21, question: "Tu as faim ?", reponse: "Pas vraiment, juste un petit snack." },
  { id: 22, question: "Tu veux qu’on se voie ce soir ?", reponse: "Oui, ça me ferait plaisir !" },
  { id: 23, question: "Tu m’écoutes ?", reponse: "Oui, je t’écoute attentivement." },
  { id: 24, question: "Tu penses souvent à nos vacances ?", reponse: "Oui, j’aimerais qu’on y aille bientôt." },
  { id: 25, question: "Tu veux regarder un film ?", reponse: "Pourquoi pas, j’ai envie de me détendre." },
  { id: 26, question: "Tu as bien dormi ?", reponse: "Plutôt oui, mais je me suis réveillé(e) un peu tôt." },
  { id: 27, question: "Tu préfères rester à la maison ?", reponse: "Oui, ça me repose plus." },
  { id: 28, question: "Tu as pensé à moi aujourd’hui ?", reponse: "Oui, plusieurs fois 😘" },
  { id: 29, question: "Tu veux qu’on parle de nos projets ?", reponse: "Bien sûr, je veux tout savoir." },
  { id: 30, question: "Tu es content(e) de me voir ?", reponse: "Oui, chaque fois que je te vois ça me rend heureux(se)." },
  { id: 31, question: "Tu me manques ?", reponse: "Énormément !" },
  { id: 32, question: "Tu veux qu’on fasse une balade ?", reponse: "Oui, ça pourrait être sympa dehors." },
  { id: 33, question: "Tu as aimé notre dernier dîner ?", reponse: "Oui, c’était délicieux et agréable 😋" },
  { id: 34, question: "Tu as passé une bonne semaine ?", reponse: "Oui, plutôt tranquille." },
  { id: 35, question: "Tu veux m’appeler ?", reponse: "Oui, dans quelques minutes je peux." },
  { id: 36, question: "Tu te sens stressé(e) ?", reponse: "Un peu, mais ça va mieux maintenant." },
  { id: 37, question: "Tu veux parler de quelque chose ?", reponse: "Oui, j’aimerais partager mes idées sur notre prochain week-end." },
  { id: 38, question: "Tu te rappelles de notre premier rendez-vous ?", reponse: "Oui, je m’en souviens très bien 😊" },
  { id: 39, question: "Tu as une chanson en tête ?", reponse: "Oui, celle qu’on écoutait ensemble l’autre fois." },
  { id: 40, question: "Tu veux qu’on cuisine ensemble ?", reponse: "Oui, ce serait marrant et relaxant." },
  { id: 41, question: "Tu as aimé ton boulot aujourd’hui ?", reponse: "Oui, mais c’était un peu chargé." },
  { id: 42, question: "Tu me racontes ton idée ?", reponse: "Bien sûr, écoute ça : on pourrait essayer un week-end improvisé à la plage." },
  { id: 43, question: "Tu veux qu’on fasse du sport ?", reponse: "Oui, mais pas trop intense 😅" },
  { id: 44, question: "Tu as vu ce film récemment ?", reponse: "Oui, et je l’ai trouvé incroyable !" },
  { id: 45, question: "Tu as pensé à notre anniversaire ?", reponse: "Oui, j’ai quelques idées 😏" },
  { id: 46, question: "Tu veux qu’on joue à un jeu ?", reponse: "Oui, j’adore quand on rigole ensemble." },
  { id: 47, question: "Tu as aimé la surprise d’hier ?", reponse: "Ouiiii, j’étais vraiment touché(e) ❤️" },
  { id: 48, question: "Tu veux qu’on fasse une sortie ?", reponse: "Oui, ça nous changerait les idées." },
  { id: 49, question: "Tu veux qu’on se raconte nos journées ?", reponse: "Oui, je veux tout savoir sur toi." },
  { id: 50, question: "Tu veux qu’on écoute de la musique ?", reponse: "Oui, je te laisse choisir la playlist 😎" },
  { id: 51, question: "Tu as pensé à ton futur ?", reponse: "Oui, mais je préfère qu’on en parle ensemble." },
  { id: 52, question: "Tu veux un câlin ?", reponse: "Oui, tout de suite 🥰" },
  { id: 53, question: "Tu te sens fatigué(e) ?", reponse: "Un peu, mais rien de grave." },
  { id: 54, question: "Tu as ri aujourd’hui ?", reponse: "Oui, plusieurs fois, surtout quand je pensais à toi 😄" },
  { id: 55, question: "Tu veux qu’on fasse une surprise ?", reponse: "Oui, je suis curieux(se) de voir !" },
  { id: 56, question: "Tu veux qu’on parle de nos rêves ?", reponse: "Oui, j’adore partager ça avec toi." },
  { id: 57, question: "Tu veux un café ?", reponse: "Oui, un petit café serait parfait." },
  { id: 58, question: "Tu es fier/fière de moi ?", reponse: "Oui, toujours 😊" },
  { id: 59, question: "Tu as des nouvelles de ton ami ?", reponse: "Oui, il va bien." },
  { id: 60, question: "Tu veux qu’on fasse du bricolage ?", reponse: "Oui, ça pourrait être fun et créatif !" },
  { id: 61, question: "Salut", reponse: "Salut 😊" },

];

let parent1=document.querySelector(".parent.first");
let parent2=document.querySelector(".parent.second");
let parent3=document.querySelector(".parent.thirst");
    function send(){
        const message_me=document.createElement("div");
        let value=input.value.trim().toLowerCase();
        form_message.appendChild(message_me);
        message_me.className="message-me";
        const el=document.createElement("div");
        el.className="el";
        el.textContent=input.value;
        message_me.appendChild(el);
        form_message.scrollTop=form_message.scrollHeight;
        const message_you=document.createElement("div");
        message_you.className="message-you";
        const flexe=document.createElement("div");
        flexe.className="flexe";
        message_you.appendChild(flexe);
        const img=document.createElement("img");
        img.src="./assets/image/téléchargement (2).jfif";
        flexe.appendChild(img);
        const you=document.createElement("div");;
        you.className="you";
        flexe.appendChild(you);
        message_you.scrollTop=message_you.scrollHeight;
        form_message.appendChild(message_you);
        discussionCouple.forEach((element,index)=>{
            you.textContent="...";
            you.classList.add("dote");
            setTimeout(()=>{
                you.classList.remove("dote");
                if(value == element.question.toLowerCase()){
                    you.textContent=element.reponse;
                }
                else{
                    you.textContent="Je n'ai pas bien compris parle bien stp bb.";
                }
            },2000)
            })
    }

    input.addEventListener("keypress", function(e){
        if(e.key == "Enter"){
            send();
            input.value="";
        }
    })
function retour(){
    parent2.style.display="none";
    parent1.style.display="flex";
    parent1.style.width="100%";
}
function ouvrir(){
       parent1.style.display="none";
    parent2.style.display="flex";
}
function info(){
    parent3.style.display=
    parent3.style.display ==="flex" ? "none" :"flex";
}
function infoMobile(){
    parent1.style.display="none";
    parent2.style.display="none";
    parent3.style.display="flex";
    parent3.style.width="100%";
    parent3.style.animation="fadeForm 1.5s ease-in";
}
function ferme(){
    parent3.style.display="none";
        parent1.style.display="flex";
            parent2.style.display="flex";
    parent1.style.animation="fadeForm 1.6s ease-in";
    parent2.style.animation="fadeForm 1.6s ease-in";
}
function grand(img){
    window.location.href=img;
}