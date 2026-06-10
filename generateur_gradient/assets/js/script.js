let input1=document.getElementById("color1");
let input2=document.getElementById("color2");
let affichage=document.querySelector(".affichage");
let select=document.querySelector("select");
let copyBtn=document.querySelector(".copy");
let code=document.querySelector(".code");
setInterval(()=>{
   let value1=input1.value;
   let value2=input2.value;
    affichage.style.background=`linear-gradient(${select.value},${value1},${value2})`;
    input1.style.background=value1;
    input2.style.background=value2;
    code.textContent=`background:linear-gradient(${select.value},${value1},${value2})`;
},10)
function copi(){
    navigator.clipboard.writeText(code.textContent);
    copyBtn.textContent="code copié";
    setTimeout(()=>{
        copyBtn.textContent="copier le code";

    },1200)
}
function rand(){
    const arrays= [
    "#ff5f6d",
    "#ffc371",
    "#36d1dc",
    "#5b86e5",
    "#8e2de2",
    "#4a00e0",
    "#11998e",
    "#38ef7d",
    "#f7971e",
    "#ffd200"
];
const generate=
input1.value=arrays[Math.floor(Math.random()*arrays.length)]
input2.value=arrays[Math.floor(Math.random()*arrays.length)]
}