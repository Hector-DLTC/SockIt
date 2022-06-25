import {validarUsername, validarEmailreg, validarPassword,validarPasswordConfirm} from "./validacionesRegistro.js";
let registrar = document.getElementById("btnRegistro")
let txtUsername = document.getElementById("username");
let txtEmailreg = document.getElementById("emailreg");
let txtPassword= document.getElementById("password");
let txtPasswordConfirm = document.getElementById("passwordConfirm");
let confirm=false;

let regis='{"Registro":[]}';
let regisJson=JSON.parse(regis);

const inputs = document.querySelectorAll('input');

const patterns = {
  username: /^[^0-9][a-zA-ZÀ-ÿ\u00f1\u00d10-9]{2,15}$/i,
  emailreg: /^([^0-9][a-zA-Z\d\.-_-\u00f1\u00d1]+)@([a-z\d-][^0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\u00f1\u00d1]{8,}$/,
  passwordConfirm: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\u00f1\u00d1]{8,}$/
};

inputs.forEach((input) => {
  input.addEventListener('keyup', (event) => {
    validate(event.target, patterns[event.target.attributes.id.value]);
  });
});
function validate(field, regex) {
  if (regex.test(field.value)) {
    
    return field.className = 'form-control valid';
    
  } else {
    return field.className = 'form-control invalid';
  } 
}

registrar.addEventListener("click",(event)=>{
    event.preventDefault();
    regis='{"Registro":[{user:,email:,password:,}]}';
    
    if (
        !validarUsername(txtUsername) ||
        !validarPassword(txtPassword) ||
        !validarPasswordConfirm(txtPasswordConfirm) ||
        !validarEmailreg(txtEmailreg)
      ) {
        
        
        if (!validarUsername(txtUsername)) {
          txtUsername.style.border = "red medium solid";
        //   txtUsername.value = "";
          txtUsername.focus();
        } 
        console.log(txtUsername.value);
        if (!validarEmailreg(txtEmailreg)) {
          txtEmailreg.style.border = "red medium solid";
          txtEmailreg.focus();
        } 
    
        if (!validarPassword(txtPassword)) {
          txtPassword.style.border = "red medium solid";
          txtPassword.focus();
        } 
        console.log(txtPassword.value);
        if (!validarPasswordConfirm(txtPasswordConfirm)) {
            txtPasswordConfirm.style.border = "red medium solid";
            txtPasswordConfirm.focus();
        }console.log(txtPasswordConfirm.value);
        if([txtUsername.value,txtEmailreg.value,txtPassword.value,txtPasswordConfirm.value].includes("")){
            console.log("Hay al menos un campo vacio...");
        }if(txtPassword.value!=txtPasswordConfirm.value){
            console.log("Las contraseñas no son iguales..."); 
            confirm=true;
        }
        if(confirm=true) {
            regisJson["Registro"].push({user:`${txtUsername.value}`,email:`${txtEmailreg.value}`,password:`${txtPassword.value}`});
            localStorage.setItem("regis",regis=JSON.stringify(regisJson));
            
        }
        
        
    }
    location.reload();
    
    
});

window.addEventListener("load",function(){
    if(["Registro"]!=null){
        console.log(JSON.parse(localStorage.getItem("regis")));
        let regisTmp=JSON.parse(localStorage.getItem("regis"));
        regisJson=(regisTmp!=null)?regisTmp:regisJson;

    }

});
