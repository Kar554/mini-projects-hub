//generateur conseil
const arrayConseils = [ "Apprends à écouter avant de parler", "Fais de l'exercice régulièrement", "Lis un peu chaque jour", "Économise une partie de ton argent", "Respecte ton sommeil", "Sois ponctuel", "Apprends à cuisiner quelques plats simples", "Demande de l'aide quand tu en as besoin", "Entretiens tes amitiés", "Prends des pauses pour respirer", "Note tes idées importantes", "Fixe-toi des objectifs réalistes", "Apprends de tes erreurs", "Sois reconnaissant chaque jour", "Ne compare pas ta vie à celle des autres", "Apprends à dire non", "Fais preuve de patience", "Évite les dettes inutiles", "Prends soin de ta santé mentale", "Sois curieux et continue d’apprendre", "Respecte la nature", "Évite les excès", "Entoure-toi de personnes positives", "Prends le temps de voyager", "Sois honnête avec toi-même", "Apprends à gérer ton temps", "Célèbre tes petites victoires", "Ne garde pas rancune", "Fais preuve d’humour", "Crois en tes capacités" ];
let conseil=document.querySelector(".conseil");
let i=0;
function conseilGenerate(){
    if(i<arrayConseils.length){
        conseil.textContent='"' + arrayConseils[i] + '."';
        i++;
        if(i >= arrayConseils.length){
            i=0;
        }
    }
    
}