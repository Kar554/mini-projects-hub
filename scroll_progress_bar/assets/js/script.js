let loader = document.querySelector(".loader");
let text = loader.querySelector("span");

window.addEventListener("scroll", () => {
    let scroll=document.body.scrollHeight - window.innerHeight;
    let result=(scrollY / scroll) * 100;
    text.textContent=result.toFixed(0)+"%";
    let pourcent=result * 3.6;
    loader.style.background=`conic-gradient(black ${pourcent}deg,red ${pourcent}deg)`;
});
