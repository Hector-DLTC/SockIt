import {validarNombreProducto, validarDescripcionProducto, validarPrecioProducto } from "./validacionesFormularioProductos.js"

let Agregar = document.getElementById("btnproducto");
let txtProductName = document.getElementById("product");
let txtProductDescription = document.getElementById("textdesc");
let txtProductPrice = document.getElementById("precio");
let imagentxt = document.getElementById("inputFile");
let btnImagen = document.getElementById("btnFake");
let jsonStr = '{"Items":[]}';
const URL_MAIN ='http://localhost:8080/api/products/';

let obj = JSON.parse(jsonStr);

Agregar.addEventListener("click", (event) => {
    event.preventDefault();
    jsonStr = '{"Items":[]}';
    if (!imagentxt.value) {
        btnImagen.style.border = "red medium solid";
        btnImagen.blur();
        return;
    }
    if (!validarNombreProducto(txtProductName) ||
        !validarDescripcionProducto(txtProductDescription) ||
        !validarPrecioProducto(txtProductPrice)
    ) {
        if (!validarDescripcionProducto(txtProductName)) {
            txtProductName.style.border = "red medium solid";
            
            txtProductName.blur();
        }
     
        if (!validarDescripcionProducto(txtProductDescription)) {
            txtProductDescription.style.border = "red medium solid";
            txtProductDescription.blur();
        }

        if (!validarPrecioProducto(txtProductPrice)) {
            txtProductPrice.style.border = "red medium solid";
            txtProductPrice.blur();
        }
        
        
        if ([txtProductName.value, txtProductDescription.value, txtProductPrice.value].includes("")) {
            console.log("Hay al menos un campo vacio...");
        }
        return;
    }
 
      
        
  
const data =  {nombre: `${txtProductName.value}`,
descripcion: `${txtProductDescription.value}`,
precio: `${txtProductPrice.value}`,
url_imagen: `${inputFile.value}`
};
    fetch(URL_MAIN, {
    
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer: ${localStorage.getItem("accessToken")} `
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
      
        if (localStorage.getItem("accessToken") !== undefined){

        console.log('Success:', data);
        Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Producto registrado!',
                    showConfirmButton: false,
                    timer: 3000
                });
      }})
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Inicia sesión primero',
            showConfirmButton: false,
            timer: 3000
        });
      });
    setTimeout(function() {
        goCatalago();
      
    }, 3000);
    

});

function goCatalago()
{
window.location.href="../catalogo.html"
}
//////////////////////////////////////////////////////

let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');

btnFake.addEventListener('click', function() {
    fileImage.click();
});
fileImage.addEventListener('change', function() {
    previewFile('imageFile', 'fileImage', 'inputFile')
       
});
console.log(imageFile.value);
if (imageFile.value == undefined) {
    imageFile.style.display = 'none';
}

function previewFile(img, inputFile, input) {
    var preview = document.getElementById(img);
		var file    = document.getElementById(inputFile).files[0];
		var reader  = new FileReader();

        var preview = document.getElementById(img);
		var file    = document.getElementById(inputFile).files[0];
		var reader  = new FileReader();

    reader.addEventListener("load", function() {
        document.getElementById(input).value = reader.result;
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        imageFile.style.display = 'block';
    } // file
}


