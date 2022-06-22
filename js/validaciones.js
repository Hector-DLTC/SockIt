
//Validaciones

//Validar Nombre:
export function validarNombre(txtNombre){
const nombre  =/^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i;
 if (!nombre.test(txtNombre.value)){
    return false;
 }else {
    return true;
 }
} 

// Validar Email: 
export function validarEmail(txtEmail){
    const emailUsuario  = /^([^0-9][a-zA-Z\d\.-_-\u00f1\u00d1]+)@([a-z\d-][^0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
     if (!emailUsuario.test(txtEmail.value)){
        return false;
     }else {
        return true;
     }
} 

//Validar Télefono:
export function validarTel(txtTel){
    const TelUsuario  = /^[0-9]{10}/;
     if (!TelUsuario.test(txtTel.value)){
        return false;
     }else {
        return true;
     }
} 


