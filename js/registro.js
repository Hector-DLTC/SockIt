import {validarUsername, validarEmailreg, validarPassword,validarPasswordConfirm} from "./validacionesRegistro.js";
let registrar = document.getElementById("btnRegistro")
let txtUsername = document.getElementById("username");
let txtEmailreg = document.getElementById("emailreg");
let txtPassword= document.getElementById("password");
let txtPasswordConfirm = document.getElementById("passwordConfirm");
let passwordConfirmMessage = document.getElementById("passwordHelp");
// let confirm=false;

let regis='{"Registro":[]}';
let regisJson=JSON.parse(regis);

const inputs = document.querySelectorAll('input');

const patterns = {
  username: /^[^0-9][a-zA-Z\u00f1\u00d10-9]{2,15}$/i,
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
    regis='{"Registro":}';
    
    if (
        !validarUsername(txtUsername) ||
        !validarPassword(txtPassword) ||
        // !validarPasswordConfirm(txtPasswordConfirm) ||
        !validarEmailreg(txtEmailreg)
      ) {
        if (!validarUsername(txtUsername)) {
          txtUsername.style.border = "red medium solid";
        //   txtUsername.value = "";
          txtUsername.focus();
        } 
        // console.log(txtUsername.value);
        if (!validarEmailreg(txtEmailreg)) {
          txtEmailreg.style.border = "red medium solid";
          txtEmailreg.focus();
        } 
    
        if (!validarPassword(txtPassword)) {
          txtPassword.style.border = "red medium solid";
          txtPassword.focus();
        } 
        // console.log(txtPassword.value);
        // if (!validarPasswordConfirm(txtPasswordConfirm)) {
        //     txtPasswordConfirm.style.border = "red medium solid";
        //     txtPasswordConfirm.focus();
        // }//console.log(txtPasswordConfirm.value);
        
        if([txtUsername.value,txtEmailreg.value,txtPassword.value].includes("")){
            console.log("Hay al menos un campo vacio...");
        }
        // if(txtPassword.value===txtPasswordConfirm.value){
        //     console.log("Las contraseñas no son iguales..."); 
        //     // confirm=true;
        // }

        return;
        // if(confirm=true) {
        //     regisJson["Registro"].push({user:`${txtUsername.value}`,email:`${txtEmailreg.value}`,password:`${txtPassword.value}`});
        //     localStorage.setItem("regis",regis=JSON.stringify(regisJson));
            
        // }
        
        
    }
 
      
    // sendEmail(txtUsername,txtEmailreg,txtPassword);
    pushregis(txtUsername,txtEmailreg,txtPassword);
    setTimeout(function(){  
    location.reload();
    }, 3000);
    
});
function pushregis() {
  regisJson["Registro"].push({user:`${txtUsername.value}`,email:`${txtEmailreg.value}`,password:`${txtPassword.value}`});
  localStorage.setItem("regis",regis=JSON.stringify(regisJson));
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Registro exitoso!',
    showConfirmButton: false,
    timer: 3000
  });
  
}
window.addEventListener("load",function(){
    if(["Registro"]!=null){
        console.log(JSON.parse(localStorage.getItem("regis")));
        let regisTmp=JSON.parse(localStorage.getItem("regis"));
        regisJson=(regisTmp!=null)?regisTmp:regisJson;

    }

});

// let functionConfirmPassword = function(){
//   if(password.value == passwordConfirm.value){
//     message.style.color = 'green';
//     message.innerHTML = 'La contraseña concuerda';
//   } else {
//     message.style.color = 'red';
//     message.innerHTML = 'La contraseña NO concuerda';
//   }
// }
// functionConfirmPassword.addEventListener('keyup', (e) -> {})


// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "sockitteam3@gmail.com",
//     Password: "59BE6EC9FA97D2E6B92C95FDAD31261AC949",
//     To: [`${emailreg.value}`],
//     From: "sockitteam3@gmail.com",
//     Subject: "Registro Sock It!",
//     Body: `<br/> <ul><b>Usuario:</b> ${txtUsername.value} <br/> 
//     <b>Email:</b> ${txtEmailreg.value} <br/> 
//     <b>Contraseña:</b> ${txtPassword.value}<br/></ul>`,
//   }).then((message) => (message))}
