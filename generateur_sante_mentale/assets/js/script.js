const domaines = {
    stress: [
        "Ce moment est inconfortable, mais il est temporaire.",
        "Respire profondément et laisse aller la tension.",
        "Tu as le droit de prendre une pause maintenant.",
        "Chaque respiration te rapproche du calme.",
        "Ce que tu ressens est normal et passager.",
        "Autorise-toi à ralentir et à te recentrer.",
        "Ton corps mérite repos et douceur.",
        "Même un petit moment de calme est précieux.",
        "Tu n’as pas à tout contrôler à la fois.",
        "Tout va se calmer, pas besoin de précipitation."
    ],
    fatigue: [
        "Être fatigué ne veut pas dire être faible.",
        "Ton corps et ton esprit ont besoin de repos.",
        "Prends le temps de récupérer sans culpabilité.",
        "Un petit moment pour toi peut tout changer.",
        "Accepter la fatigue est un signe de sagesse.",
        "Ton énergie se régénère petit à petit.",
        "Faire moins aujourd’hui prépare mieux demain.",
        "Écouter ton corps est un acte de courage.",
        "La fatigue n’est pas un échec.",
        "Repose-toi, tu le mérites vraiment."
    ],
    culpabilite: [
        "Tu n’as pas à te punir pour apprendre.",
        "Se tromper est humain et normal.",
        "Laisser le passé derrière toi est un acte de liberté.",
        "Tu peux apprendre sans te blâmer.",
        "Accepter tes erreurs te rend plus fort.",
        "Personne n’est parfait, pas toi non plus.",
        "Tu as fait de ton mieux avec ce que tu savais.",
        "Se pardonner est un cadeau que tu te fais.",
        "Tes émotions ne définissent pas ta valeur.",
        "Tu as le droit de recommencer sans culpabilité."
    ],
    confiance: [
        "Tu peux douter et avancer en même temps.",
        "Ta valeur ne dépend pas de tes réussites immédiates.",
        "Avoir confiance commence par croire en tes efforts.",
        "Chaque petit pas compte, même si tu doutes.",
        "Tu es capable, même quand tu ne le sens pas.",
        "Les erreurs n’enlèvent rien à ta valeur.",
        "Ton potentiel grandit avec chaque expérience.",
        "Le doute est un signe de réflexion, pas de faiblesse.",
        "Croire en toi est un muscle à entraîner.",
        "Avancer malgré le doute est une victoire."
    ],
    tristesse: [
        "Ce que tu ressens mérite d’être accueilli.",
        "Tu peux pleurer et continuer d’avancer.",
        "Tes émotions sont un signal, pas un obstacle.",
        "C’est normal de se sentir triste parfois.",
        "Tu as le droit de prendre du temps pour toi.",
        "La tristesse passera comme toutes les émotions.",
        "Exprimer tes émotions te rend plus léger.",
        "Même un petit sourire est un pas vers le mieux.",
        "Parler de ce que tu ressens soulage le cœur.",
        "La tristesse ne dure jamais éternellement."
    ],
    colere: [
        "Ta colère est un signal, pas un défaut.",
        "Reconnaître ta colère est déjà un pas vers le calme.",
        "Respirer profondément aide à apaiser l’émotion.",
        "Exprimer la colère avec respect est sain.",
        "La colère est humaine, elle ne te définit pas.",
        "Tu peux canaliser ton énergie en actions positives.",
        "Laisser sortir la frustration avec des mots ou mouvement est utile.",
        "Reconnaître les déclencheurs permet de mieux gérer.",
        "Même une forte colère peut passer rapidement.",
        "Se calmer prend du temps, sois patient avec toi-même."
    ],
    solitude: [
        "Se sentir seul ne signifie pas être seul.",
        "Parler à quelqu’un peut alléger le cœur.",
        "Tu peux trouver du réconfort dans de petites choses.",
        "Les moments seuls sont aussi des moments de réflexion.",
        "Ton sentiment est humain et temporaire.",
        "Chercher du lien est un signe de courage.",
        "Être seul permet parfois de mieux se comprendre.",
        "Tu peux créer des connexions même petit à petit.",
        "Accepter la solitude t’ouvre à de nouvelles perspectives.",
        "Tu n’as pas besoin d’être entouré pour être en sécurité."
    ],
    pression: [
        "Ta valeur ne se mesure pas aux autres.",
        "Il est normal de ne pas tout réussir à la fois.",
        "Avancer à ton rythme est suffisant.",
        "Comparaison n’apporte jamais de paix intérieure.",
        "Tu peux dire non sans culpabilité.",
        "Tes choix sont valables, même s’ils diffèrent des autres.",
        "Tu n’as pas besoin d’impressionner pour être aimé.",
        "La pression diminue quand tu respectes ton rythme.",
        "Être toi-même est plus puissant que de plaire aux autres.",
        "Tes limites sont légitimes et respectables."
    ],
    avenir: [
        "Tu n’as pas besoin de tout prévoir pour continuer.",
        "Chaque jour est un nouveau départ.",
        "L’inconnu peut être un espace de possibilités.",
        "Tu avances même sans voir tout le chemin.",
        "Faire confiance au processus t’apaise.",
        "Tu peux préparer demain sans t’inquiéter aujourd’hui.",
        "L’avenir se construit par petites actions.",
        "Tu n’as pas à tout contrôler pour être en sécurité.",
        "La patience avec toi-même ouvre des portes.",
        "Confiance et curiosité sont de meilleurs guides que la peur."
    ],
    acceptation: [
        "Tu n’as pas besoin de changer pour mériter la paix.",
        "Accepter qui tu es te libère de la pression.",
        "La perfection n’existe pas, tu es suffisant.",
        "La douceur envers toi-même est essentielle.",
        "Reconnaître tes forces et faiblesses est courageux.",
        "Tu peux te célébrer pour ce que tu es.",
        "La paix intérieure commence par l’acceptation.",
        "Être toi-même est ton plus grand pouvoir.",
        "Chaque jour est une opportunité de t’accepter davantage.",
        "Se respecter soi-même attire respect et sérénité."
    ],
    peur: [
    "Avoir peur ne signifie pas être faible.",
    "Tu peux avancer même avec la peur.",
    "La peur diminue quand tu respires calmement.",
    "Ce que tu crains n’est pas toujours ce qui arrive.",
    "Chaque pas malgré la peur est une victoire.",
    "La peur protège parfois, mais elle ne décide pas pour toi.",
    "Tu es plus courageux que tu ne le crois.",
    "La peur passe quand on lui laisse moins de place.",
    "Tu peux être prudent sans te bloquer.",
    "Faire face doucement apaise l’esprit."
],

manque_sens: [
    "Ne pas savoir où tu vas est parfois nécessaire.",
    "Le sens se construit, il ne se trouve pas d’un coup.",
    "Tu n’es pas en retard dans ta vie.",
    "Chaque expérience t’apprend quelque chose.",
    "Le vide peut précéder un nouveau départ.",
    "Tu peux chercher sans te juger.",
    "Avancer sans certitude est humain.",
    "Même les doutes ont leur utilité.",
    "Tu as le droit de questionner ton chemin.",
    "Le sens vient souvent après l’action."
],

procrastination: [
    "Commencer petit est déjà commencer.",
    "Tu n’as pas besoin d’être motivé pour agir.",
    "Une petite action vaut mieux que rien.",
    "Repousser ne fait pas de toi quelqu’un de paresseux.",
    "La peur est souvent derrière la procrastination.",
    "Tu peux avancer sans être parfait.",
    "Chaque minute compte, même lentement.",
    "Faire un peu soulage l’esprit.",
    "Tu as le droit de prendre ton temps.",
    "L’élan vient souvent après le premier pas."
],

surmenage: [
    "Tu n’as pas à tout porter seul.",
    "Faire une pause n’est pas abandonner.",
    "Ton bien-être est prioritaire.",
    "Trop donner épuise même les plus forts.",
    "Tu peux ralentir sans culpabilité.",
    "Le repos est une nécessité, pas un luxe.",
    "Dire stop est un acte de respect envers toi.",
    "Ton corps parle quand l’esprit ignore.",
    "Lever le pied protège ton équilibre.",
    "Tu mérites de souffler."
],

auto_critique: [
    "Se parler durement n’aide pas à progresser.",
    "Tu peux apprendre sans te rabaisser.",
    "Ta voix intérieure mérite douceur.",
    "Tu n’es pas tes erreurs.",
    "Être exigeant ne doit pas faire mal.",
    "Tu fais déjà de ton mieux.",
    "Changer demande du temps.",
    "Se respecter aide à avancer.",
    "La bienveillance commence par soi.",
    "Tu es digne de respect, même de toi-même."
],

echec: [
    "Échouer ne signifie pas être incapable.",
    "Chaque erreur enseigne quelque chose.",
    "L’échec fait partie de l’apprentissage.",
    "Tu avances même quand tu tombes.",
    "Se relever est plus important que réussir vite.",
    "L’échec n’annule pas ta valeur.",
    "Apprendre prend parfois plusieurs essais.",
    "Tu peux recommencer différemment.",
    "L’expérience compte plus que le résultat.",
    "Chaque tentative te rapproche."
],

patience: [
    "Tout ne se construit pas en un jour.",
    "La patience apaise l’esprit.",
    "Attendre ne signifie pas perdre du temps.",
    "Les choses mûrissent à leur rythme.",
    "Forcer fatigue inutilement.",
    "Avancer lentement est toujours avancer.",
    "Le calme améliore les décisions.",
    "La patience protège ton énergie.",
    "Tu peux faire confiance au temps.",
    "Respirer aide à patienter."
],

pression_familiale: [
    "Tu as le droit d’être toi-même.",
    "Les attentes des autres ne définissent pas ta vie.",
    "Tu peux écouter sans obéir.",
    "Tes choix sont légitimes.",
    "Tu n’as pas à porter les rêves des autres.",
    "Être différent n’est pas une faute.",
    "Se respecter apaise les conflits.",
    "Tu peux aimer sans te sacrifier.",
    "Ta vie t’appartient.",
    "Trouver ton chemin est essentiel."
],

pression_sociale: [
    "Tu n’as rien à prouver.",
    "Être soi-même demande du courage.",
    "Les apparences ne disent pas tout.",
    "Chacun avance à son rythme.",
    "Comparer fatigue inutilement.",
    "Ta valeur ne dépend pas du regard extérieur.",
    "Être authentique libère.",
    "Tu peux choisir ta propre voie.",
    "Plaire à tous est impossible.",
    "Te respecter suffit."
],

isolement: [
    "S’isoler n’est pas un échec.",
    "Tu peux revenir vers les autres quand tu veux.",
    "Le lien se reconstruit progressivement.",
    "Tu mérites la connexion humaine.",
    "Prendre du recul peut aider.",
    "Tu n’es pas invisible.",
    "Un pas vers l’autre suffit parfois.",
    "Le silence n’efface pas ta valeur.",
    "Tu peux demander de l’aide.",
    "Le lien commence par une intention."
],

manque_concentration: [
    "Ton esprit a besoin de pauses.",
    "Faire une chose à la fois aide.",
    "La fatigue diminue l’attention.",
    "Tu peux te recentrer doucement.",
    "La concentration revient avec le calme.",
    "Respirer améliore la clarté.",
    "Tu n’as pas besoin d’être parfait.",
    "L’attention fluctue naturellement.",
    "Simplifier allège l’esprit.",
    "Ton cerveau a besoin de repos."
],

charge_emotionnelle: [
    "Tu portes beaucoup, c’est normal d’être fatigué.",
    "Alléger commence par reconnaître.",
    "Tu peux déposer ce poids.",
    "Exprimer soulage l’intérieur.",
    "Les émotions accumulées épuisent.",
    "Parler libère l’esprit.",
    "Tu n’as pas à tout gérer.",
    "Lâcher un peu aide beaucoup.",
    "Tu mérites de te sentir léger.",
    "Respirer aide à relâcher."
],

besoin_repos: [
    "Se reposer est essentiel.",
    "Ton corps sait ce dont il a besoin.",
    "Ignorer la fatigue aggrave le stress.",
    "Dormir répare l’esprit.",
    "Le repos améliore la clarté.",
    "Tu peux ralentir aujourd’hui.",
    "Écouter ton corps est sage.",
    "Recharger ton énergie est vital.",
    "Le repos prépare demain.",
    "Tu mérites de te reposer."
],

perte_controle: [
    "Tout contrôler n’est pas possible.",
    "Lâcher prise apaise l’esprit.",
    "Tu fais de ton mieux.",
    "Certaines choses échappent naturellement.",
    "Respirer aide à accepter.",
    "Tu peux agir sans tout maîtriser.",
    "Faire confiance allège.",
    "Le contrôle excessif fatigue.",
    "Tu peux t’adapter.",
    "La souplesse protège l’équilibre."
],

manque_estime: [
    "Ta valeur est déjà là.",
    "Tu n’as pas à prouver ton importance.",
    "Te respecter change tout.",
    "Tu mérites considération.",
    "Tes efforts comptent.",
    "Tu es digne d’attention.",
    "Se comparer diminue l’estime.",
    "Tu es suffisant tel que tu es.",
    "Apprendre renforce l’estime.",
    "Te reconnaître est essentiel."
],

blocage_emotionnel: [
    "Bloquer ses émotions fatigue.",
    "Les émotions ont besoin d’espace.",
    "Exprimer n’est pas dangereux.",
    "Reconnaître libère.",
    "Tu peux ressentir sans te perdre.",
    "L’émotion passe quand elle est accueillie.",
    "Parler aide à débloquer.",
    "Le corps garde ce que l’esprit cache.",
    "Laisser sortir apaise.",
    "Tu es en sécurité."
],

hypercontrole: [
    "Tout maîtriser épuise.",
    "Faire confiance soulage.",
    "Tu peux lâcher un peu.",
    "Le contrôle n’apporte pas toujours la paix.",
    "Accepter l’imprévu libère.",
    "Respirer aide à relâcher.",
    "Tu peux t’adapter.",
    "Laisser faire est parfois utile.",
    "Le calme vient du lâcher-prise.",
    "Tu n’as pas à tout gérer."
],

injustice: [
    "Ressentir l’injustice est humain.",
    "Ta colère est compréhensible.",
    "Tu peux exprimer sans te détruire.",
    "Respirer aide à apaiser.",
    "Tout n’est pas équitable, malheureusement.",
    "Tu peux te protéger émotionnellement.",
    "L’injustice ne définit pas ta valeur.",
    "Chercher la paix est important.",
    "Tu peux avancer malgré tout.",
    "Te préserver est essentiel."
],

changement: [
    "Changer fait peur, c’est normal.",
    "Tu peux avancer progressivement.",
    "L’inconnu n’est pas toujours négatif.",
    "Chaque changement apporte un apprentissage.",
    "Tu peux t’adapter.",
    "Rien n’oblige à aller vite.",
    "Changer demande du courage.",
    "Tu peux faire confiance au processus.",
    "Le changement ouvre des portes.",
    "Tu n’es pas seul face au changement."
],

paix_interieure: [
    "La paix commence par le calme intérieur.",
    "Respirer aide à se recentrer.",
    "Tu peux ralentir maintenant.",
    "Le silence apaise l’esprit.",
    "L’équilibre se construit.",
    "La paix n’est pas l’absence de problème.",
    "Tu peux choisir le calme.",
    "Être présent apaise.",
    "La paix est un chemin.",
    "Tu peux y accéder petit à petit."
]

};
let input=document.getElementById("input");
let carte=document.querySelectorAll(".carte");
let form_generate=document.querySelector(".form-generate");
let affichage=document.querySelector(".affichage");
let text=document.querySelector(".phrase");
let fermer=document.querySelector(".retour");
let radio=document.querySelector(".radio");
let cercle=document.querySelector(".cercle");
let footer=document.querySelector("footer");
let nbrdomaine=document.querySelector(".domaines");
let header=document.querySelector("header");
let data="";
let i=0;
let loader=document.querySelector(".loader");
let loaderText=document.querySelector(".loader span");
setInterval(() => {
    if(i < carte.length){
        i++;
        nbrdomaine.textContent=i;
    }
}, 50);
carte.forEach((element,index)=>{
    element.addEventListener("click",function(){
         data=element.getAttribute("data-bloc");
            affichage.style.display="block";
            footer.style.bottom="0";
            form_generate.style.display="none";
            fermer.style.display="block";
            text.textContent=domaines[data][Math.floor(Math.random() * domaines[data].length)];
    })
})
function generer(){
    text.textContent=domaines[data][Math.floor(Math.random() * domaines[data].length)];
}
function retour(){
    footer.style.bottom="-150%";
     affichage.style.display="none";
     fermer.style.display="none";
     form_generate.style.display="block";
}

radio.addEventListener("click",function(){
    cercle.classList.toggle("active");
    document.body.classList.toggle("change");
    carte.forEach((element,index)=>{
        element.classList.toggle("box");
    })
    affichage.classList.toggle("box");
})
input.addEventListener("input",function(){
    let searchInput=input.value.toLowerCase().trim();
    carte.forEach((element,index)=>{
        const texte=element.textContent.toLowerCase();
        if(texte.includes(searchInput)){
            element.style.display="block";
            document.getElementById("result").style.display="none";
        }
        
        else{
            element.style.display="none";
            document.getElementById("result").textContent="Aucune recherche trouvé.";
            document.getElementById("result").style.display="block";
            document.getElementById("result").style.color="gray";

        }
    })
})
loaderText.textContent="0%";
window.addEventListener("scroll",function(){
    let scroll=this.document.body.scrollHeight - this.window.innerHeight;
    let result=Math.min(100,Math.floor((scrollY / scroll) * 100));
    let deg=Math.floor(result * 3.6);
    let signe=document.getElementById("signe");
    loaderText.textContent=result + "%";
    loader.style.background=`conic-gradient(blue ${deg}deg,white ${deg}deg)`;
    if(this.window.scrollY >=100){
        signe.style.display="block";
    }
    else{
        signe.style.display="none";
    }
    if(window.scrollY >= 200){
        header.classList.add("scroll");
    }
    else{
        header.classList.remove("scroll");
    }
})

loader.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});
