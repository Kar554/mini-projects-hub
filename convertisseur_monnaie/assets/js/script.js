/*rappelle toi le principe de dollors a fcfa et fcfa a euro par exemple */
const tauxfCfa = {
    XOF: 1,
    XAF: 1,
    EUR: 655.957,
    USD: 600,
    GBP: 760,
    CHF: 670,
    CAD: 445,
    AUD: 395,
    JPY: 4.2,
    CNY: 83,
    INR: 7.2,
    RUB: 6.5
};
let montant=document.getElementById("input");
let device=document.getElementById("device1");
let devices=document.getElementById("device2");
let output=document.getElementById("result");
function convertir(){
  let  device1=device.value;
  let  device2=devices.value;
  if(montant.value == ""){
       return output.textContent="Ecrivez un montant à convertir";
  }
  else if(montant.value < 0 ){
    return output.textContent="Ecrivez un montant valide";

  }
  else if(device1 == "t" || device2 == "t"){
    return output.textContent="Choisir les devices";
      
    }
      let result1=tauxfCfa[device1] * montant.value;
      let result2=result1 / tauxfCfa[device2];
      output.textContent=result2.toFixed(2) + " "+ device2;
}
