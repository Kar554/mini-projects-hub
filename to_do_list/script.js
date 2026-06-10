let input=document.getElementById("input");
let container=document.querySelector(".container-task");
// const zip = document.getElementById("zip");
// const app = document.getElementById("app");


// setTimeout(() => {
//     zip.classList.add("hide-text");
// }, 1200);

// setTimeout(() => {
//     zip.classList.add("open");
// }, 2000);
// setTimeout(() => {
//     zip.remove();
//     app.classList.add("show");
// }, 3200);
function deleteall() {
    const items = document.querySelectorAll(".container-task li");
    const total = items.length;
    if(confirm("Voulez-vous tous supprimer ?")){
        items.forEach((li, index) => {
            const delay = (index * 500) / total;
            setTimeout(() => {
                li.classList.add("fade-out");
                li.addEventListener("transitionend", () => li.remove());
            }, delay);
        });
    }
}

function add(){
   const value=input.value;
   if(!value) return;
   const li=document.createElement("li");
   const text=document.createElement("span");
   const check=document.createElement("input");
   const div=document.createElement("div");
   li.addEventListener("click" , function(){
    check.click();
   })
   div.addEventListener("click" , function(){
    if(confirm("voulez vous vraiment effacer ?")){
        li.remove();
    }
    else{
        return;
    }
   });
   check.type="checkbox";
   check.addEventListener("change", function () {
    if (check.checked) {
        text.style.textDecoration="line-through";
        li.style.opacity="0.7";
    }
    else{
        text.style.textDecoration="none";
        li.style.opacity="1";
    }
});

    text.textContent=value;
div.className="delete";
    div.textContent="✕";
    container.appendChild(li);
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(div);
    input.value="";
}
document.addEventListener("keypress" , function (e){
    if(e.key == "Enter"){
        e.preventDefault();
        add();
    }
})

