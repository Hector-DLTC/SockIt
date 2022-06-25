import {validarUsername, validarEmailreg, validarPassword,validarPasswordConfirm} from "./validacionesRegistro.js";
let registrar = document.getElementById("btnRegistro")
let txtUsername = document.getElementById("username");
let txtEmailreg = document.getElementById("emailreg");
let txtPassword= document.getElementById("password");
let txtPasswordConfirm = document.getElementById("passwordConfirm");

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

registrar.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    !validarUsername(txtUsername) ||
    !validarPassword(txtPassword) ||
    !validarPasswordConfirm(txtPasswordConfirm) ||
    !validarEmailreg(txtEmailreg)
  ) {
    if (!validarUsername(txtUsername)) {
      txtUsername.style.border = "red medium solid";
      txtUsername.value = "";
      txtUsername.focus();
    } 

    if (!validarEmailreg(txtEmailreg)) {
      txtEmailreg.style.border = "red medium solid";
      txtEmailreg.focus();
    } 

    if (!validarPassword(txtPassword)) {
      txtPassword.style.border = "red medium solid";
      txtPassword.focus();
    } 
    if (!validarPasswordConfirm(txtPasswordConfirm)) {
        txtPasswordConfirm.style.border = "red medium solid";
        txtPasswordConfirm.focus();
      } 

    return;

  } 
  sendEmail(txtUsername, txtEmailreg, txtPassword, txtPasswordConfirm);
  
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
    txtUsername.style.border = "";
    txtEmailreg.style.border = "";
    txtPassword.style.border = "";
    txtPasswordConfirm.style.border = "";
  });
}); 



function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sockitteam3@gmail.com",
    Password: "59BE6EC9FA97D2E6B92C95FDAD31261AC949",
    To: ["kazuominakata@gmail.com", "torresvaldezluismiguel@gmail.com", "agustin.moreno.lll@gmail.com","claudio.empire.25@gmail.com", "hectoradltc@gmail.com", "TorresValdezLuisMiguel@gmail.com"],
    From: "sockitteam3@gmail.com",
    Subject: "Correo nuevo",
    Body: `<ul>Nombre: ${txtUsername.value} <br/> 
    Email: ${txtEmailreg.value} <br/> 
    Teléfono: ${txtPassword.value}<br/> 
    Mensaje: ${txtPasswordConfirm.value}</ul>`,
  }).then((message) => Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Correo enviado!',
          showConfirmButton: false,
          timer: 2000
        }));
}


