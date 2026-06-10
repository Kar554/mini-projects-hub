let formparent = document.querySelector(".form-all");
let textareavaltrue = document.getElementById("true");
let textareavalfalse = document.getElementById("false");
let colorinput = document.getElementById("colorinput");
let colorvalue = document.getElementById("colorvalue");
let arrayType = ["text", "number", "email", "password"];
let nameForm = document.getElementById("nameForm");
let tableau = document.querySelector("table");
let table = document.querySelector(".tableau");
let formGenerate=document.querySelector(".form-generate");
let btnCancel=document.querySelector(".btnCancel");
let tdcontent=["Champs","Label","Placeholder","type","valeur"];
let time = setInterval(() => {
    colorvalue.value = colorinput.value;
}, 50);

colorvalue.addEventListener("input", function() {
    
    clearInterval(time)
} 
)
function cancel(){
    table.style.display="none";
    formGenerate.style.display="flex";
    btnCancel.style.display="none";
}
function valider() {
    btnCancel.style.display="block";
    formGenerate.style.display="none";
    table.style.display="block";
    tableau.innerHTML = "";
    formparent.innerHTML = "";
    let th=document.createElement("thead");
    tdcontent.forEach((el)=>{
        let tdhead=document.createElement("td");
        tdhead.textContent=el;

        th.appendChild(tdhead);
    })
    tableau.appendChild(th)
    let nbrChamps = Number(document.getElementById("nbrChamps").value);
    for (let i = 0; i < nbrChamps; i++) {
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let preview = document.createElement("input");
        preview.disabled = true;
        preview.placeholder = "champ " + (i + 1);
        let label = document.createElement("input");
        label.placeholder = "label";
        let placeholder = document.createElement("input");
        placeholder.placeholder = "placeholder";
        let select = document.createElement("select");
        arrayType.forEach(type => {
            let option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            select.appendChild(option);
        });

        let valDef = document.createElement("input");
        valDef.placeholder = "valeur par défaut";
        let newarray=[preview, label, placeholder, select, valDef]
        newarray.forEach(el => {
            let td = document.createElement("td");
            td.appendChild(el);
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
        tableau.appendChild(tbody);
    }
}

function enregistrer() {
        btnCancel.style.display="none";
    formparent.innerHTML = "";
    table.style.display = "none";

    let form = document.createElement("form");
    form.className = "form-generate";
   let modi = document.createElement("div");
modi.className = "modi";

modi.innerHTML = `
<svg viewBox="0 0 24 24" width="22" height="22" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd"
        d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
        fill="currentColor"/>
</svg>
`;
 modi.className = "modi";
    modi.onclick = () => {
            btnCancel.style.display="block";
        form.style.display = "none";
        table.style.display = "block";
    };
    form.appendChild(modi);

    let h1 = document.createElement("h1");
    h1.textContent = nameForm.value;
    form.appendChild(h1);
    let tbodys = document.querySelectorAll("tbody");
    tbodys.forEach(tbody => {
        let tds = tbody.querySelectorAll("td");
        let label = tds[1].querySelector("input").value;
        let placeholder = tds[2].querySelector("input").value;
        let type = tds[3].querySelector("select").value;
        let valDef = tds[4].querySelector("input").value;
        let input = document.createElement("input");
        input.className="form-control mb-3  is-valid";
        input.type = type;
        input.placeholder = placeholder;
        input.value = valDef;

        if (label !== "") {
            let lbl = document.createElement("label");
            lbl.className="form-label";
            lbl.textContent = label;
            form.appendChild(lbl);
        }
        form.appendChild(input);
    });


    if (textareavaltrue.checked) {
        let textarea = document.createElement("textarea");
        form.appendChild(textarea);
    }
    let btn = document.createElement("button");
    btn.textContent = document.getElementById("btnname").value;
    btn.style.background = colorvalue.value;
    btn.style.color = "#fff";
    form.appendChild(btn);
    formparent.appendChild(form);
}
