let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');

btnFake.addEventListener('click', function() {
    fileImage.click();
});
fileImage.addEventListener('change', function() {
    previewFile('imageFile', 'fileImage', 'inputFile')
        //previewFile(id imagen, input type file , textArea);
});

//previewFile(id imagen, input type file , textArea);
function previewFile(img, inputFile, input) {

    var preview = document.getElementById(img);
    var file = document.getElementById(inputFile).files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        document.getElementById(input).value = reader.result;
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    } // file
} // previewFile 



let producto = document.getElementById("product");
let descripcion = document.getElementById("textdesc");
let precioItem = document.getElementById("precio");
let agregar = document.getElementById("btnproducto")


const inputs = document.querySelectorAll('input');

const patterns = {
    product: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i,
    textdesc: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,60}[^0-9]$/i,
    precio: /^[0-9]{1,4}[^a-zA-ZÀ-ÿ]$/
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

function validarProducto(product) {
    const productos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i;
    if (!productos.test(product.value)) {
        return false;
    } else {
        return true;
    }
}

function validarDescripcion(textdesc) {
    const descripciones = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i;
    if (!descripciones.test(textdesc.value)) {
        return false;
    } else {
        return true;
    }
}



function validarPrecio(precio) {
    const precios = /^[0-9]{1,4}$/;
    if (!precios.test(precio.value)) {
        return false;
    } else {
        return true;
    }
}




agregar.addEventListener("click", (event) => {
    event.preventDefault();
    if (!validarProducto(producto) ||
        !validarPrecio(precioItem) ||
        !validarDescripcion(descripcion)
    ) {
        if (!validarProducto(producto)) {
            producto.style.border = "red medium solid";
            producto.value = "";
            producto.focus();
        }

        if (!validarDescripcion(descripcion)) {
            descripcion.style.border = "red medium solid";
            descripcion.focus();
        }

        if (!validarPrecio(precioItem)) {
            precio.style.border = "red medium solid";
            precio.focus();
        }

        return;


    }
    location.reload();

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        //input.value = '';
        product.style.border = "";
        textdesc.style.border = "";
        precio.style.border = "";
    });
});