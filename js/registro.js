import {validarUsername, validarEmailreg, validarPassword,validarPasswordConfirm} from "./validacionesRegistro.js";
let registrar = document.getElementById("btnRegistro")
let txtUsername = document.getElementById("username");
let txtEmailreg = document.getElementById("emailreg");
let txtPassword= document.getElementById("password");
let txtPasswordConfirm = document.getElementById("passwordConfirm");
let passwordConfirmMessage = document.getElementById("passwordHelp");
const URL_MAIN ='http://localhost:8080/api/users/';


let regis='{"Registro":[]}';
let regisJson=JSON.parse(regis);

const inputs = document.querySelectorAll('input');

const patterns = {
  username: /^[^0-9][a-zA-Z\u00f1\u00d10-9]{2,15}$/i,
  emailreg: /^([^0-9][a-zA-Z\d\.-_-\u00f1\u00d1]+)@([a-z\d-][^0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
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
       
        !validarEmailreg(txtEmailreg)
      ) {
        
        if (!validarUsername(txtUsername)) {
          txtUsername.style.border = "red medium solid";
      
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
     
       
        
        if([txtUsername.value,txtEmailreg.value,txtPassword.value].includes("")){
            console.log("Hay al menos un campo vacio...");
            txtUsername.style.border = "red medium solid";
              txtUsername.focus();
            txtEmailreg.style.border = "red medium solid";
              txtEmailreg.focus();
            txtPassword.style.border = "red medium solid";
              txtPassword.focus();
        }
       
        
        
    }
      if (txtPassword.value == txtPasswordConfirm.value) {
        passwordConfirmMessage.style.display="none"
        sendEmail(txtUsername,txtEmailreg,txtPassword);
        
        const data =  {email: `${txtEmailreg.value}`,
        password: `${txtPassword.value}`
        };
            fetch(URL_MAIN, {
            
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                 
                },
                body: JSON.stringify(data),
              })
              .then(response => response.json())
              .then(data => {
               
                console.log('Success:', data);
                Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Usuario registrado!',
                            showConfirmButton: false,
                            timer: 3000
                        });
              })
              .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'NO se pudo registrar el usuario',
                    showConfirmButton: false,
                    timer: 3000
                });
              });



       
    setTimeout(function(){  
      goLogin();
    
    }, 3000);
      } else{
        passwordConfirmMessage.style.display="block"
      }
    
    
});
function goLogin()
{
window.location.href="../Login.html"
}



function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sockitteam3@gmail.com",
    Password: "59BE6EC9FA97D2E6B92C95FDAD31261AC949",
    To: [`${emailreg.value}`],
    From: "sockitteam3@gmail.com",
    Subject: "Registro Sock It!",
    Body: `<br/> <ul><b>Usuario:</b> ${txtUsername.value} <br/> 
    <b>Email:</b> ${txtEmailreg.value} <br/> 
    <b>Contraseña:</b> ${txtPassword.value}<br/></ul>`,
  }).then((message) => (message))}
