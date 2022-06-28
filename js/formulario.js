import {validarNombreProducto, validarDescripcionProducto, validarPrecioProducto} from "./validacionesFormularioProductos.js";

const inputs = document.querySelectorAll('input');

const patterns = {
    product: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i,
    textdesc: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i,
    precio: /^[0-9]{1,4}$/
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

// let producto = document.getElementById("product");
// let descripcion = document.getElementById("textdesc");
// let precioItem = document.getElementById("precio");
// let imagen = document.getElementById("fileImage");
// let agregar = document.getElementById("btnproducto")



// const inputs = document.querySelectorAll('input');
// const patterns = {
//     product: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i,
//     textdesc: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,60}[^0-9]$/i,
//     precio: /^[0-9]{1,4}$/
// };
// inputs.forEach((input) => {
//     input.addEventListener('keyup', (event) => {
//         validate(event.target, patterns[event.target.attributes.id.value]);
//     });
// });
// function validate(field, regex) {
//     if (regex.test(field.value)) {

//         return field.className = 'form-control valid';

//     } else {
//         return field.className = 'form-control invalid';
//     }
// }
// function validarProducto(product) {
//     const productos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i;
//     if (!productos.test(product.value)) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function validarDescripcion(textdesc) {
//     const descripciones = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i;
//     if (!descripciones.test(textdesc.value)) {
//         return false;
//     } else {
//         return true;
//     }
// }



// function validarPrecio(precio) {
//     const precios = /^[0-9]{4}$/;
//     if (!precios.test(precio.value)) {
//         return false;
//     } else {
//         return true;
//     }
// }




// agregar.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (!validarProducto(producto) ||
//         !validarPrecio(precioItem) ||
//         !validarDescripcion(descripcion)
//     ) {
//         if (!validarProducto(producto)) {
//             producto.style.border = "red medium solid";
//             producto.value = "";
//             producto.focus();
//         }

//         if (!validarDescripcion(descripcion)) {
//             descripcion.style.border = "red medium solid";
//             descripcion.focus();
//         }

//         if (!validarPrecio(precioItem)) {
//             precio.style.border = "red medium solid";
//             precio.focus();
//         }

//         return;


//     }
//     const inputs = document.querySelectorAll('input');
//     inputs.forEach(input => {
//         //input.value = '';
//         product.style.border = "";
//         textdesc.style.border = "";
//         precio.style.border = "";
//     });
// });
