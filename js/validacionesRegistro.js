
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
    const PassUsuario  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
     if (!PassUsuario.test(txtPassword.value)){
        return false;
     }else {
        return true;
     }
} 
//Validar repetir contraseña:
export function validarPasswordConfirm(txtPasswordConfirm){
   const PassUsuario2  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!PassUsuario2.test(txtPasswordConfirm.value)){
       return false;
    }else {
       return true;
    }
} 



