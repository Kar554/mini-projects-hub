const h2 = document.querySelector(".question h2");
const zip = document.getElementById("zip");
const app = document.getElementById("app");

// 1️⃣ Faire disparaître le texte
setTimeout(() => {
    zip.classList.add("hide-text");
}, 1200);

// 2️⃣ Écarter les panneaux
setTimeout(() => {
    zip.classList.add("open");
}, 2000);

// 3️⃣ Supprimer splash et afficher contenu
setTimeout(() => {
    zip.remove();
    app.classList.add("show");
}, 3200);

const responses = document.querySelectorAll(".response");
let current = 0;
const quiz = [
    { question: "1. Quel est le plus grand animal du monde ?", options: ["Requin", "Baleine bleue", "Éléphant", "Girafe"], correct: 1 },
    { question: "2. Quelle est la capitale de la France ?", options: ["Paris", "Londres", "Rome", "Berlin"], correct: 0 },
    { question: "3. 2 + 2 × 2 = ?", options: ["8", "6", "4"], correct: 1 },
    { question: "4. Combien de continents existe-t-il ?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "5. Quelle planète est la plus proche du Soleil ?", options: ["Vénus", "Mars", "Mercure", "Jupiter"], correct: 2 },
    { question: "6. Qui a peint la Joconde ?", options: ["Van Gogh", "Picasso", "Léonard de Vinci", "Michel-Ange"], correct: 2 },
    { question: "7. Quelle est la langue la plus parlée au monde ?", options: ["Français", "Anglais", "Espagnol", "Mandarin"], correct: 3 },
    { question: "8. Combien y a-t-il de jours dans une année bissextile ?", options: ["364", "365", "366"], correct: 2 },
    { question: "9. Quel organe pompe le sang dans le corps humain ?", options: ["Poumon", "Cerveau", "Cœur", "Foie"], correct: 2 },
    { question: "10. Quelle est la capitale du Japon ?", options: ["Séoul", "Pékin", "Tokyo", "Bangkok"], correct: 2 },
    { question: "11. Quelle est la couleur du cheval blanc d'Henri IV ?", options: ["Noir", "Gris", "Blanc"], correct: 2 },
    { question: "12. Combien font 10 × 10 ?", options: ["10", "100", "1000"], correct: 1 },
    { question: "13. Quel est le plus grand océan du monde ?", options: ["Atlantique", "Indien", "Pacifique"], correct: 2 },
    { question: "14. Quel gaz respirons-nous principalement ?", options: ["Oxygène", "Azote", "Hydrogène"], correct: 1 },
    { question: "15. Quelle est la monnaie de l’Union européenne ?", options: ["Dollar", "Euro", "Livre"], correct: 1 },
    { question: "16. Qui a écrit 'Les Misérables' ?", options: ["Victor Hugo", "Émile Zola", "Molière"], correct: 0 },
    { question: "17. Combien de côtés a un triangle ?", options: ["2", "3", "4"], correct: 1 },
    { question: "18. Quelle est la capitale du Bénin ?", options: ["Cotonou", "Porto-Novo", "Parakou"], correct: 1 },
    { question: "19. Quel animal est surnommé le roi de la jungle ?", options: ["Tigre", "Lion", "Panthère"], correct: 1 },
    { question: "20. Quelle est la plus petite planète du système solaire ?", options: ["Mars", "Mercure", "Pluton"], correct: 1 }
];

function show() {
    h2.textContent = quiz[current].question;

    const options = quiz[current].options;
    responses.forEach((opt, i) => {
        if(options.length > i){
            opt.style.display="block";
            opt.classList.remove("echec");
            opt.classList.remove("success");
            opt.style.pointerEvents="auto";
        }
        else{
            opt.style.display="none";
        }

    })
    options.forEach((opt, index) => {
        responses[index].textContent = opt;
    });
}
const successSound = new Audio("success.mp3");
const echecsound=new Audio("lose.mp3")
responses.forEach((opt, index) => {
    opt.addEventListener("click", function(){

        responses.forEach(r => r.style.pointerEvents = "none");

        if(index === quiz[current].correct){
            opt.classList.add("success");

            successSound.currentTime = 0;
            successSound.play();
        } else {
            opt.classList.add("echec");
            echecsound.currentTime=0;
            echecsound.play();
            responses[quiz[current].correct].classList.add("success");
        }
    });
});

function next(){
    current++;
    if(current >= quiz.length){
        current=0;
    }
    show();
}
show();