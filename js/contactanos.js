import {validarNombre, validarEmail, validarTel} from "./validaciones.js";
let enviar = document.getElementById("btnEnviar")
let txtNombre = document.getElementById("Name");
let txtEmail = document.getElementById("email");
let txtTel = document.getElementById("phone");

const inputs = document.querySelectorAll('input');

const patterns = {
  Name: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i,
  email: /^([^0-9][a-zA-Z\d\.-_-\u00f1\u00d1]+)@([a-z\d-][^0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
  phone: /^[0-9]{10}$/
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

enviar.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    !validarNombre(txtNombre) ||
    !validarTel(txtTel) ||
    !validarEmail(txtEmail)
  ) {
    if (!validarNombre(txtNombre)) {
      txtNombre.style.border = "red medium solid";
      txtNombre.value = "";
      txtNombre.focus();
    } 

    if (!validarEmail(txtEmail)) {
      txtEmail.style.border = "red medium solid";
      txtEmail.focus();
    } 

    if (!validarTel(txtTel)) {
      txtTel.style.border = "red medium solid";
      txtTel.focus();
    } 

    return;

  } 
  sendEmail(txtNombre, txtEmail, txtTel, textBox);
  
  const inputs = document.querySelectorAll('input, #textBox');
  inputs.forEach(input => {
    input.value = '';
    txtNombre.style.border = "";
    txtEmail.style.border = "";
    txtTel.style.border = "";
  });
}); 



function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sockitteam3@gmail.com",
    Password: "59BE6EC9FA97D2E6B92C95FDAD31261AC949",
    To: ["kazuominakata@gmail.com","andresminakata@gmail.com"],
    //Aquí van agregar todos sus correos ^
    From: "sockitteam3@gmail.com",
    Subject: "Correo nuevo",
    Body: `<ul>Nombre: ${txtNombre.value} <br/> 
    Email: ${txtEmail.value} <br/> 
    Teléfono: ${txtTel.value}<br/> 
    Mensaje: ${textBox.value}</ul>`,
  }).then((message) => Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Correo enviado!',
          showConfirmButton: false,
          timer: 2000
        }));
}


