let parent=document.querySelector(".parent");
let mot = [

/* ================= OBJET 1 ================= */
{
  title: "Chasse masquée",
  1: ["cinq","chiens","cinq","chiens","cinq","chiens","cinq","chiens"],
  2: ["chassent","singes","chassent","singes","chassent","singes","chassent","singes"],
  3: ["chiens","singes","chiens","singes","chiens","singes","chiens","singes"],
  4: ["cinq","chassent","cinq","chassent","cinq","chassent","cinq","chassent"],
  5: ["cinq","chiens","chassent","cinq","singes","chiens","chassent","singes"]
},

/* ================= OBJET 2 ================= */
{
  title: "Auto-piège",
  1: ["je","suis","je","suis","je","suis","je","suis"],
  2: ["très","moche","très","moche","très","moche","très","moche"],
  3: ["mais","je","mais","je","mais","je","mais","je"],
  4: ["souris","je","souris","je","souris","je","souris","je"],
  5: ["je","suis","très","moche","mais","je","souris","je"]
},

/* ================= OBJET 3 ================= */
{
  title: "Sifflement trompeur",
  1: ["six","scies","six","scies","six","scies","six","scies"],
  2: ["scient","six","scient","six","scient","six","scient","six"],
  3: ["cyprès","six","cyprès","six","cyprès","six","cyprès","six"],
  4: ["scies","cyprès","scies","cyprès","scies","cyprès","scies","cyprès"],
  5: ["six","scies","scient","six","cyprès","scies","six","cyprès"]
},

/* ================= OBJET 4 ================= */
{
  title: "Boucle mentale",
  1: ["ton","tonton","ton","tonton","ton","tonton","ton","tonton"],
  2: ["tond","ton","tond","ton","tond","ton","tond","ton"],
  3: ["toit","tond","toit","tond","toit","tond","toit","tond"],
  4: ["tonton","toit","tonton","toit","tonton","toit","tonton","toit"],
  5: ["ton","tonton","tond","ton","toit","tonton","tond","toit"]
},

/* ================= OBJET 5 ================= */
{
  title: "Révélation tardive",
  1: ["le","jeu","le","jeu","le","jeu","le","jeu"],
  2: ["piège","ton","piège","ton","piège","ton","piège","ton"],
  3: ["attention","piège","attention","piège","attention","piège","attention","piège"],
  4: ["ton","le","ton","le","ton","le","ton","le"],
  5: ["le","jeu","piège","ton","attention","jeu","piège","ton"]
},

/* ================= OBJET 6 ================= */
{
  title: "Erreur humaine",
  1: ["je","me","trompe","je","me","trompe","je","me"],
  2: ["souvent","je","souvent","je","souvent","je","souvent","je"],
  3: ["sans","le","sans","le","sans","le","sans","le"],
  4: ["vouloir","me","vouloir","me","vouloir","me","vouloir","me"],
  5: ["je","me","trompe","souvent","sans","le","vouloir","je"]
},

/* ================= OBJET 7 ================= */
{
  title: "Mémoire floue",
  1: ["je","crois","je","crois","je","crois","je","crois"],
  2: ["me","souvenir","me","souvenir","me","souvenir","me","souvenir"],
  3: ["mais","je","mais","je","mais","je","mais","je"],
  4: ["doute","souvent","doute","souvent","doute","souvent","doute","souvent"],
  5: ["je","crois","me","souvenir","mais","je","doute","souvent"]
},

/* ================= OBJET 8 ================= */
{
  title: "Concentration piégée",
  1: ["je","lis","je","lis","je","lis","je","lis"],
  2: ["trop","vite","trop","vite","trop","vite","trop","vite"],
  3: ["sans","comprendre","sans","comprendre","sans","comprendre","sans","comprendre"],
  4: ["au","début","au","début","au","début","au","début"],
  5: ["je","lis","trop","vite","sans","comprendre","au","début"]
},

/* ================= OBJET 9 ================= */
{
  title: "Illusion de contrôle",
  1: ["je","pense","je","pense","je","pense","je","pense"],
  2: ["avoir","raison","avoir","raison","avoir","raison","avoir","raison"],
  3: ["mais","souvent","mais","souvent","mais","souvent","mais","souvent"],
  4: ["je","me","je","me","je","me","je","me"],
  5: ["je","pense","avoir","raison","mais","je","me","trompe"]
},

/* ================= OBJET 10 ================= */
{
  title: "Attention déviée",
  1: ["tu","regardes","tu","regardes","tu","regardes","tu","regardes"],
  2: ["les","mots","les","mots","les","mots","les","mots"],
  3: ["mais","pas","mais","pas","mais","pas","mais","pas"],
  4: ["le","sens","le","sens","le","sens","le","sens"],
  5: ["tu","regardes","les","mots","mais","pas","le","sens"]
},

/* ================= OBJET 11 ================= */
{
  title: "Erreur finale",
  1: ["je","comprends","je","comprends","je","comprends","je","comprends"],
  2: ["trop","tard","trop","tard","trop","tard","trop","tard"],
  3: ["ce","jeu","ce","jeu","ce","jeu","ce","jeu"],
  4: ["est","un","est","un","est","un","est","un"],
  5: ["je","comprends","ce","jeu","trop","tard","est","un"]
},

/* ================= OBJET 12 ================= */
{
  title: "Lecture biaisée",
  1: ["ton","cerveau","ton","cerveau","ton","cerveau","ton","cerveau"],
  2: ["anticipe","toujours","anticipe","toujours","anticipe","toujours","anticipe","toujours"],
  3: ["ce","qui","ce","qui","ce","qui","ce","qui"],
  4: ["n","arrive","n","arrive","n","arrive","n","arrive"],
  5: ["ton","cerveau","anticipe","toujours","ce","qui","n","arrive"]
},

/* ================= OBJET 13 ================= */
{
  title: "Piège simple",
  1: ["tu","crois","tu","crois","tu","crois","tu","crois"],
  2: ["avoir","compris","avoir","compris","avoir","compris","avoir","compris"],
  3: ["mais","non","mais","non","mais","non","mais","non"],
  4: ["pas","encore","pas","encore","pas","encore","pas","encore"],
  5: ["tu","crois","avoir","compris","mais","non","pas","encore"]
},

/* ================= OBJET 14 ================= */
{
  title: "Surconfiance",
  1: ["tu","vas","tu","vas","tu","vas","tu","vas"],
  2: ["trop","vite","trop","vite","trop","vite","trop","vite"],
  3: ["et","tu","et","tu","et","tu","et","tu"],
  4: ["te","trompes","te","trompes","te","trompes","te","trompes"],
  5: ["tu","vas","trop","vite","et","tu","te","trompes"]
},

/* ================= OBJET 15 ================= */
{
  title: "Conclusion cachée",
  1: ["le","piège","le","piège","le","piège","le","piège"],
  2: ["fonctionne","bien","fonctionne","bien","fonctionne","bien","fonctionne","bien"],
  3: ["quand","tu","quand","tu","quand","tu","quand","tu"],
  4: ["te","concentres","te","concentres","te","concentres","te","concentres"],
  5: ["le","piège","fonctionne","bien","quand","tu","te","concentres"]
}

];
let rand=Math.floor(Math.random() * mot.length);
for(i=0;i<8;i++){
    const element=document.createElement("div");
    element.className="element";
    element.textContent=mot[rand][1][i];
    parent.appendChild(element);
}
let elements=document.querySelectorAll(".element");
let a=1;
let niveau=document.getElementById("niveau");
let b=0;
let run=false;
let time;
function update(){
        time=setInterval(()=>{
            elements[b].style.animation="Border 0.6s ease-in";
            b++;
            if(b === 8){
                suivant();
                b=0;
            }
          
        },500)
}
function start(){
    update();
    document.querySelector("button").style.display="none";
}
function suivant(){
    a++;
      if(a<=5){
          niveau.textContent=a+"/5";
            }
    elements.forEach((div,index)=>{
        div.textContent=mot[rand][a][index];
        div.style.animation="none";
    })
}
