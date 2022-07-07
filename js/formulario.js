import { validarNombreProducto, validarDescripcionProducto, validarPrecioProducto } from "./validacionesFormularioProductos.js";

const inputs = document.querySelectorAll('input');

const patterns = {
    product: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,15}[^0-9]$/i,
    textdesc: /^[a-zA-ZÀ-ÿ0-9]+[a-zA-Z0-9\s]*$/i,
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
