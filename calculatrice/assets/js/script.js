    let input=document.getElementById("input");
    let p=document.querySelector("p");
function press(button){
    input.value+=button;
}

function cal(operateur){
    input.value+=operateur;
}
function clea(){
    input.value="";
    p.textContent="";
}
function del(){
   input.value = input.value.slice(0,-1);

   }

   function egale(){
    p.textContent="";
    const result= eval(input.value);
    try{
        if(isNaN(result) || isFinite(result)){
            p.textContent="Ma error";
            // return;
        }
            p.textContent=result;
       
    } catch(e){
        input.value="error";
    }
   }
   input.addEventListener("keypress" , function(e){
    if(e.key =="Enter"){
        e.preventDefault();
        egale();
    }
   })