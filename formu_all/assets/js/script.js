let arrayForm = [
{
  "Formulaires d’authentification & sécurité": [
    { type:"login", input:["email","password"], placeholder:["Email...","Mot de passe..."], textarea:false, button:"Se connecter", inputnbr:2, colorbtn:"blue" },
    { type:"signup", input:["text","email","password"], placeholder:["Nom complet...","Email...","Mot de passe..."], textarea:false, button:"Créer un compte", inputnbr:3, colorbtn:"orange" },
    { type:"reset_password", input:["email"], placeholder:["Email..."], textarea:false, button:"Réinitialiser", inputnbr:1, colorbtn:"green" },
    { type:"change_password", input:["password","password"], placeholder:["Ancien mot de passe...","Nouveau mot de passe..."], textarea:false, button:"Changer", inputnbr:2, colorbtn:"red" },
    { type:"two_factor_auth", input:["number"], placeholder:["Code OTP..."], textarea:false, button:"Vérifier", inputnbr:1, colorbtn:"purple" },
    { type:"verify_email", input:["email"], placeholder:["Email à vérifier..."], textarea:false, button:"Vérifier", inputnbr:1, colorbtn:"blue" },
    { type:"unlock_account", input:["email"], placeholder:["Email bloqué..."], textarea:false, button:"Débloquer", inputnbr:1, colorbtn:"orange" },
    { type:"security_question", input:["text","text"], placeholder:["Question...","Réponse..."], textarea:false, button:"Enregistrer", inputnbr:2, colorbtn:"green" },
    { type:"session_logout", input:["text"], placeholder:["Identifiant session..."], textarea:false, button:"Déconnecter", inputnbr:1, colorbtn:"red" },
    { type:"device_verification", input:["text"], placeholder:["Nom appareil..."], textarea:false, button:"Autoriser", inputnbr:1, colorbtn:"purple" },
    { type:"pin_creation", input:["number"], placeholder:["Code PIN..."], textarea:false, button:"Créer PIN", inputnbr:1, colorbtn:"blue" },
    { type:"pin_change", input:["number","number"], placeholder:["Ancien PIN...","Nouveau PIN..."], textarea:false, button:"Modifier", inputnbr:2, colorbtn:"orange" },
    { type:"captcha_validation", input:["text"], placeholder:["Code captcha..."], textarea:false, button:"Valider", inputnbr:1, colorbtn:"green" },
    { type:"login_history", input:["email"], placeholder:["Email..."], textarea:false, button:"Afficher", inputnbr:1, colorbtn:"blue" },
    { type:"trusted_device", input:["text"], placeholder:["Nom appareil..."], textarea:false, button:"Ajouter", inputnbr:1, colorbtn:"purple" },
    { type:"ip_whitelist", input:["text"], placeholder:["Adresse IP..."], textarea:false, button:"Autoriser", inputnbr:1, colorbtn:"green" },
    { type:"ip_blacklist", input:["text"], placeholder:["Adresse IP..."], textarea:false, button:"Bloquer", inputnbr:1, colorbtn:"red" },
    { type:"account_lock", input:["email"], placeholder:["Email..."], textarea:false, button:"Verrouiller", inputnbr:1, colorbtn:"red" },
    { type:"account_unlock", input:["email"], placeholder:["Email..."], textarea:false, button:"Déverrouiller", inputnbr:1, colorbtn:"green" },
    { type:"security_audit", input:["email"], placeholder:["Email utilisateur..."], textarea:false, button:"Analyser", inputnbr:1, colorbtn:"purple" }
  ]
},

{
  "Formulaires utilisateur & profil": [
    { type:"profile_update", input:["text","email","text"], placeholder:["Nom...","Email...","Bio..."], textarea:true, button:"Mettre à jour", inputnbr:3, colorbtn:"blue" },
    { type:"avatar_upload", input:["file"], placeholder:[], textarea:false, button:"Téléverser", inputnbr:1, colorbtn:"purple" },
    { type:"change_username", input:["text"], placeholder:["Nouveau pseudo..."], textarea:false, button:"Changer", inputnbr:1, colorbtn:"orange" },
    { type:"update_phone", input:["number"], placeholder:["Téléphone..."], textarea:false, button:"Mettre à jour", inputnbr:1, colorbtn:"green" },
    { type:"update_address", input:["text","text","text"], placeholder:["Adresse...","Ville...","Pays..."], textarea:false, button:"Sauvegarder", inputnbr:3, colorbtn:"blue" },
    { type:"language_setting", input:["text"], placeholder:["Langue..."], textarea:false, button:"Appliquer", inputnbr:1, colorbtn:"purple" },
    { type:"theme_setting", input:["text"], placeholder:["Thème..."], textarea:false, button:"Changer", inputnbr:1, colorbtn:"orange" },
    { type:"privacy_setting", input:["text"], placeholder:["Niveau de confidentialité..."], textarea:false, button:"Sauvegarder", inputnbr:1, colorbtn:"green" },
    { type:"notification_setting", input:["text"], placeholder:["Préférences..."], textarea:false, button:"Enregistrer", inputnbr:1, colorbtn:"blue" },
    { type:"social_links", input:["text","text"], placeholder:["Facebook...","LinkedIn..."], textarea:false, button:"Ajouter", inputnbr:2, colorbtn:"purple" },
    { type:"profile_visibility", input:["text"], placeholder:["Public / Privé..."], textarea:false, button:"Définir", inputnbr:1, colorbtn:"orange" },
    { type:"timezone_setting", input:["text"], placeholder:["Fuseau horaire..."], textarea:false, button:"Valider", inputnbr:1, colorbtn:"green" },
    { type:"birthdate", input:["date"], placeholder:["Date de naissance..."], textarea:false, button:"Enregistrer", inputnbr:1, colorbtn:"blue" },
    { type:"gender", input:["text"], placeholder:["Genre..."], textarea:false, button:"Valider", inputnbr:1, colorbtn:"purple" },
    { type:"bio_update", input:["text"], placeholder:["Biographie..."], textarea:true, button:"Mettre à jour", inputnbr:1, colorbtn:"orange" },
    { type:"delete_account", input:["password"], placeholder:["Mot de passe..."], textarea:false, button:"Supprimer", inputnbr:1, colorbtn:"red" },
    { type:"export_profile", input:["email"], placeholder:["Email..."], textarea:false, button:"Exporter", inputnbr:1, colorbtn:"green" },
    { type:"import_profile", input:["file"], placeholder:[], textarea:false, button:"Importer", inputnbr:1, colorbtn:"blue" },
    { type:"account_status", input:["email"], placeholder:["Email..."], textarea:false, button:"Vérifier", inputnbr:1, colorbtn:"purple" },
    { type:"profile_completion", input:["email"], placeholder:["Email..."], textarea:false, button:"Analyser", inputnbr:1, colorbtn:"green" }
  ]
},

{
  "Formulaires de contact & communication": [
    { type:"contact", input:["text","email"], placeholder:["Nom...","Email..."], textarea:true, button:"Envoyer", inputnbr:2, colorbtn:"green" },
    { type:"feedback", input:["text","email"], placeholder:["Nom...","Email..."], textarea:true, button:"Soumettre", inputnbr:2, colorbtn:"purple" },
    { type:"support_ticket", input:["text","email"], placeholder:["Sujet...","Email..."], textarea:true, button:"Créer", inputnbr:2, colorbtn:"orange" },
    { type:"newsletter", input:["email"], placeholder:["Email..."], textarea:false, button:"S’abonner", inputnbr:1, colorbtn:"blue" },
    { type:"complaint", input:["text","email"], placeholder:["Objet...","Email..."], textarea:true, button:"Envoyer", inputnbr:2, colorbtn:"red" },
    { type:"testimonial", input:["text"], placeholder:["Votre avis..."], textarea:true, button:"Publier", inputnbr:1, colorbtn:"green" },
    { type:"callback_request", input:["text","number"], placeholder:["Nom...","Téléphone..."], textarea:false, button:"Rappeler", inputnbr:2, colorbtn:"blue" },
    { type:"live_chat_start", input:["text"], placeholder:["Nom..."], textarea:false, button:"Démarrer", inputnbr:1, colorbtn:"purple" },
    { type:"report_abuse", input:["text","email"], placeholder:["Description...","Email..."], textarea:true, button:"Signaler", inputnbr:2, colorbtn:"red" },
    { type:"partnership", input:["text","email"], placeholder:["Entreprise...","Email..."], textarea:true, button:"Contacter", inputnbr:2, colorbtn:"orange" },
    { type:"media_request", input:["text","email"], placeholder:["Sujet...","Email..."], textarea:true, button:"Envoyer", inputnbr:2, colorbtn:"blue" },
    { type:"job_application", input:["text","email"], placeholder:["Poste...","Email..."], textarea:true, button:"Postuler", inputnbr:2, colorbtn:"green" },
    { type:"survey", input:["text"], placeholder:["Réponse..."], textarea:true, button:"Valider", inputnbr:1, colorbtn:"purple" },
    { type:"quote_request", input:["text","email"], placeholder:["Service...","Email..."], textarea:true, button:"Demander", inputnbr:2, colorbtn:"blue" },
    { type:"meeting_request", input:["email","date"], placeholder:["Email...","Date..."], textarea:false, button:"Planifier", inputnbr:2, colorbtn:"green" },
    { type:"event_registration", input:["text","email"], placeholder:["Nom...","Email..."], textarea:false, button:"S’inscrire", inputnbr:2, colorbtn:"orange" },
    { type:"unsubscribe", input:["email"], placeholder:["Email..."], textarea:false, button:"Se désinscrire", inputnbr:1, colorbtn:"red" },
    { type:"sms_contact", input:["number"], placeholder:["Téléphone..."], textarea:false, button:"Envoyer", inputnbr:1, colorbtn:"purple" },
    { type:"press_contact", input:["text","email"], placeholder:["Média...","Email..."], textarea:true, button:"Contacter", inputnbr:2, colorbtn:"blue" },
    { type:"general_message", input:["text","email"], placeholder:["Sujet...","Email..."], textarea:true, button:"Envoyer", inputnbr:2, colorbtn:"green" }
  ]
},
/* ================= PAIEMENT & TRANSACTION (20) ================= */
{
  "Formulaires de paiement & transaction": [
    { type:"payment_card", input:["text","number","number"], placeholder:["Nom sur la carte...","Numéro de carte...","CVV..."], textarea:false, button:"Payer", inputnbr:3, colorbtn:"green" },
    { type:"payment_paypal", input:["email"], placeholder:["Email PayPal..."], textarea:false, button:"Payer", inputnbr:1, colorbtn:"blue" },
    { type:"payment_crypto", input:["text","number"], placeholder:["Adresse wallet...","Montant..."], textarea:false, button:"Envoyer", inputnbr:2, colorbtn:"purple" },
    { type:"billing_address", input:["text","text","text","text"], placeholder:["Adresse...","Ville...","Code postal...","Pays..."], textarea:false, button:"Enregistrer", inputnbr:4, colorbtn:"blue" },
    { type:"invoice_request", input:["text","email"], placeholder:["Nom...","Email..."], textarea:false, button:"Générer facture", inputnbr:2, colorbtn:"orange" },
    { type:"transaction_history", input:["email"], placeholder:["Email..."], textarea:false, button:"Afficher l’historique", inputnbr:1, colorbtn:"green" },
    { type:"refund_request", input:["text","email","number"], placeholder:["Motif...","Email...","Montant..."], textarea:true, button:"Demander remboursement", inputnbr:3, colorbtn:"red" },
    { type:"subscription_create", input:["text","email","number"], placeholder:["Nom plan...","Email...","Durée (mois)..."], textarea:false, button:"Souscrire", inputnbr:3, colorbtn:"blue" },
    { type:"subscription_update", input:["text","email","number"], placeholder:["Nom plan...","Email...","Nouvelle durée..."], textarea:false, button:"Mettre à jour", inputnbr:3, colorbtn:"purple" },
    { type:"subscription_cancel", input:["email"], placeholder:["Email..."], textarea:false, button:"Annuler", inputnbr:1, colorbtn:"red" },
    { type:"promo_code_apply", input:["text","text"], placeholder:["Code promo...","Email..."], textarea:false, button:"Appliquer", inputnbr:2, colorbtn:"orange" },
    { type:"promo_code_create", input:["text","number"], placeholder:["Code promo...","Réduction (%)..."], textarea:false, button:"Créer", inputnbr:2, colorbtn:"green" },
    { type:"payment_verification", input:["number"], placeholder:["Code OTP..."], textarea:false, button:"Vérifier", inputnbr:1, colorbtn:"purple" },
    { type:"payment_limit_set", input:["number"], placeholder:["Montant maximum..."], textarea:false, button:"Enregistrer", inputnbr:1, colorbtn:"blue" },
    { type:"payment_alerts", input:["text","text"], placeholder:["Email...","Type alerte..."], textarea:false, button:"Activer", inputnbr:2, colorbtn:"orange" },
    { type:"recurring_payment", input:["text","number","text"], placeholder:["Nom plan...","Montant...","Fréquence..."], textarea:false, button:"Planifier", inputnbr:3, colorbtn:"green" },
    { type:"payment_refund_history", input:["email"], placeholder:["Email..."], textarea:false, button:"Afficher remboursements", inputnbr:1, colorbtn:"purple" },
    { type:"tax_information", input:["text","text","number"], placeholder:["Nom...","Adresse...","Taux (%)..."], textarea:false, button:"Enregistrer", inputnbr:3, colorbtn:"blue" },
    { type:"currency_setting", input:["text"], placeholder:["Devise..."], textarea:false, button:"Changer", inputnbr:1, colorbtn:"orange" },
    { type:"payment_confirmation", input:["email","text"], placeholder:["Email...","Référence transaction..."], textarea:false, button:"Confirmer", inputnbr:2, colorbtn:"green" }
  ]
},

/* ================= ADMINISTRATION & GESTION (20) ================= */
{
  "Formulaires administration & gestion": [
    { type:"create_user", input:["text","email","password"], placeholder:["Nom...","Email...","Mot de passe..."], textarea:false, button:"Créer", inputnbr:3, colorbtn:"blue" },
    { type:"edit_user", input:["text","email"], placeholder:["Nom...","Email..."], textarea:false, button:"Modifier", inputnbr:2, colorbtn:"orange" },
    { type:"delete_user", input:["email"], placeholder:["Email utilisateur..."], textarea:false, button:"Supprimer", inputnbr:1, colorbtn:"red" },
    { type:"role_create", input:["text","text"], placeholder:["Nom rôle...","Permissions..."], textarea:false, button:"Créer rôle", inputnbr:2, colorbtn:"purple" },
    { type:"role_update", input:["text","text"], placeholder:["Nom rôle...","Nouvelles permissions..."], textarea:false, button:"Mettre à jour rôle", inputnbr:2, colorbtn:"blue" },
    { type:"role_delete", input:["text"], placeholder:["Nom rôle..."], textarea:false, button:"Supprimer rôle", inputnbr:1, colorbtn:"red" },
    { type:"group_create", input:["text","text"], placeholder:["Nom groupe...","Description..."], textarea:true, button:"Créer groupe", inputnbr:2, colorbtn:"green" },
    { type:"group_update", input:["text","text"], placeholder:["Nom groupe...","Nouvelle description..."], textarea:true, button:"Modifier groupe", inputnbr:2, colorbtn:"blue" },
    { type:"group_delete", input:["text"], placeholder:["Nom groupe..."], textarea:false, button:"Supprimer groupe", inputnbr:1, colorbtn:"red" },
    { type:"content_create", input:["text","text"], placeholder:["Titre...","Contenu..."], textarea:true, button:"Publier", inputnbr:2, colorbtn:"green" },
    { type:"content_update", input:["text","text"], placeholder:["Titre...","Nouveau contenu..."], textarea:true, button:"Modifier", inputnbr:2, colorbtn:"blue" },
    { type:"content_delete", input:["text"], placeholder:["Titre contenu..."], textarea:false, button:"Supprimer", inputnbr:1, colorbtn:"red" },
    { type:"product_create", input:["text","number","text"], placeholder:["Nom produit...","Prix...","Description..."], textarea:true, button:"Ajouter produit", inputnbr:3, colorbtn:"green" },
    { type:"product_update", input:["text","number","text"], placeholder:["Nom produit...","Nouveau prix...","Nouvelle description..."], textarea:true, button:"Modifier produit", inputnbr:3, colorbtn:"blue" },
    { type:"product_delete", input:["text"], placeholder:["Nom produit..."], textarea:false, button:"Supprimer produit", inputnbr:1, colorbtn:"red" },
    { type:"system_settings", input:["text","text"], placeholder:["Paramètre...","Valeur..."], textarea:false, button:"Enregistrer", inputnbr:2, colorbtn:"purple" },
    { type:"backup_create", input:["text"], placeholder:["Nom fichier backup..."], textarea:false, button:"Créer sauvegarde", inputnbr:1, colorbtn:"blue" },
    { type:"backup_restore", input:["file"], placeholder:[], textarea:false, button:"Restaurer", inputnbr:1, colorbtn:"green" },
    { type:"audit_logs", input:["date","date"], placeholder:["Date début...","Date fin..."], textarea:false, button:"Afficher logs", inputnbr:2, colorbtn:"orange" },
    { type:"notification_broadcast", input:["text","textarea"], placeholder:["Titre...","Message..."], textarea:true, button:"Envoyer", inputnbr:2, colorbtn:"purple" }
  ]
}


];

let select=document.getElementById("filtre");

function createForm(){
 
    arrayForm.forEach((category,index)=>{
      const option=document.createElement("option");
      select.appendChild(option)
      const section=document.createElement("section");
      document.querySelector(".form-container").appendChild(section);
        const key = Object.keys(category);
        option.textContent=key;
        option.value=index;
        const h2=document.createElement("h2");
        h2.textContent=`${key} (${category[key].length})`;
        section.appendChild(h2);
        let gdiv=document.createElement("div");
        section.appendChild(gdiv);
        category[key].forEach((element)=>{
          gdiv.classList.add("form");
            let form=document.createElement("form");
            gdiv.appendChild(form);
            const h1=document.createElement("h1");
            const afficher=document.createElement("div");
            afficher.textContent="afficher";
            afficher.className="afficher";
            form.appendChild(afficher);
            h1.textContent=element.type;
            form.appendChild(h1);
            h1.style.background=`linear-gradient(95deg,${element.colorbtn},black)`;
            form.style.boxShadow=`0 0 3px ${element.colorbtn}`;
          let inputall=document.querySelectorAll("input");
          inputall.forEach((input)=>{
            input.style.border=`1px solid ${element.colorbtn}`;
          })
h1.style.backgroundClip="text";
for(i=0;i<element.inputnbr;i++){
                    const input=document.createElement("input");
                    input.type=element.input[i];
                    input.placeholder=element.placeholder[i];
                    form.appendChild(input);
                    }
                    // if(element.inputnbr>=2){
                        //     const div=document.createElement("div");
                        
                        // }
                        if(element.textarea){
                            const textarea=document.createElement("textarea");
                            form.appendChild(textarea);
                        }
                        const button=document.createElement("button");
                        button.textContent=element.button;
                        button.style.background=element.colorbtn;
                        form.appendChild(button);
                    })
    })
}
createForm();
    let inputsearch=document.getElementById("search");
    let formall=document.querySelectorAll("form");
const section=document.querySelectorAll(".form-container section");
select.addEventListener("change", function(){
      section.forEach((element,index)=>{
        if(index == select.value || select.value=="all"){
          element.style.display="block";
        }
        else{
          element.style.display="none" 
        }
        console.log(element,index);
      })
    })

    inputsearch.addEventListener("input",function(){
      let p=document.getElementById("result");
      let value=inputsearch.value.toLowerCase().trim();
      let run=false;
      let Forma=[];
      formall.forEach((element,index)=>{
          // console.log(element,index);
          let titre=element.querySelector("h1");
          p.textContent=" ";
          if(titre.textContent.toLowerCase().includes(value)){
            element.style.display="block";
            Forma.push(element);
            run=true;
          }
          else{
            element.style.display="none";   
          }
        })
     section.forEach((el) => {
      let match=false;
      el.querySelectorAll("form").forEach((formeach)=>{
        if(formeach.style.display!=="none"){
          match=true;
          console.log(formeach);
        }
        if(!match){
          el.querySelector("h2").style.display="none";
        }
        else{
          el.querySelector("h2").style.display="block";
        }
      })
});

      p.textContent=run ? Forma.length+" formulaires trouvés" : "Aucun resultat trouvé";
    })
    section.forEach((sect)=>{
      formall.forEach((element,index)=>{
        document.querySelectorAll(".afficher").forEach((btn,ind)=>{
          btn.addEventListener("click",function(){
            if(index !== ind){
              formall[index].style.animation="cache 0.7s ease-in";
              document.querySelector(".filtre").style.display="none";
              setInterval(()=>{
                formall[index].style.display="none";
                sect.querySelector("h2").style.display="none";
              },800)
            }
            else{
              setTimeout(()=>{
                document.querySelector(".code").style.display="block";
                let code=document.querySelector("code");
                let container=document.querySelector(".form-container")
                container.classList.add("container2");
                formall[ind].classList.add("form2");
                document.querySelector(".afficher").style.display="none"; 
                code.textContent=formall[ind].outerHTML;
              },1000)
              
            }
          })
        })
      })
    })

    function retour(){
      window.location.href="index.html";
    }

    let loader=document.querySelector(".loader");
let loaderText=document.querySelector(".loader span");

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
  
})

loader.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});