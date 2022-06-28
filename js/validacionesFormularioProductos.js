
//Validaciones Formulario de Registro

//Validar usuario:
export function validarNombreProducto(txtProductName){
    const nombreProducto  = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i
     if (!nombreProducto.test(txtProductName.value)){
        return false;
     }else {
        return true;
     }
    } 
    
    // Validar Email: 
    export function validarDescripcionProducto(txtProductDescription){
        const descripcionProducto  = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,60}[^0-9]$/i
         if (!descripcionProducto.test(txtProductDescription.value)){
            return false;
         }else {
            return true;
         }
    } 
    
    //Validar contraseña:
    export function validarPrecioProducto(txtProductPrice){
        const PrecioProducto  = /^[0-9]{1,4}$/
         if (!PrecioProducto.test(txtProductPrice.value)){
            return false;
         }else {
            return true;
         }
    } 
