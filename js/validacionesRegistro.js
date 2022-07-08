
//Validaciones

//Validar usuario:
export function validarUsername(txtUsername){
const nombre  =/^[^0-9][a-zA-Z\u00f1\u00d10-9]{2,15}$/i;
 if (!nombre.test(txtUsername.value)){
    return false;
 }else {
    return true;
 }
} 

// Validar Email: 
export function validarEmailreg(txtEmailreg){
    const emailUsuario  = /^([^0-9][a-zA-Z\d\.-_-\u00f1\u00d1]+)@([a-z\d-][^0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
     if (!emailUsuario.test(txtEmailreg.value)){
        return false;
     }else {
        return true;
     }
} 

//Validar contraseña:
export function validarPassword(txtPassword){
    const PassUsuario  = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
     if (!PassUsuario.test(txtPassword.value)){
        return false;
     }else {
        return true;
     }
} 

export function machpassword(pass1,pass2) {
   if (pass1.value.toString() === pass2.value.toString()) {
      return true
   }else {
   return false
   }}
//Validar repetir contraseña:
export function validarPasswordConfirm(txtPasswordConfirm){
   const PassUsuario2  = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (PassUsuario2.test(txtPasswordConfirm.value)){
       return false;
    }else {
       return true;
    } 
} 

let eye = document.getElementById('eye');
let input = document.getElementById('password');
eye.addEventListener("click", function(){
    if (input.type === "password") {
        input.type = "text";
        eye.style.opacity = 0.8;
    } else {
        input.type = "password";
        eye.style.opacity = 0.2;
    }
})



