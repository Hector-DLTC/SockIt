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
// console.log(obj);
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
            //   txtUsername.value = "";
            txtProductName.blur();
        }
        // console.log(txtUsername.value);
        if (!validarDescripcionProducto(txtProductDescription)) {
            txtProductDescription.style.border = "red medium solid";
            txtProductDescription.blur();
        }

        if (!validarPrecioProducto(txtProductPrice)) {
            txtProductPrice.style.border = "red medium solid";
            txtProductPrice.blur();
        }
        
        // if (!imagentxt.value) {
        //     btnImagen.style.border = "red medium solid";
        //     Agregar.blur();
        //     // return;
        // }
        if ([txtProductName.value, txtProductDescription.value, txtProductPrice.value].includes("")) {
            console.log("Hay al menos un campo vacio...");
        }
        return;
    }
 
      
        
    // pushitems(txtProductName.value, txtProductDescription.value, txtProductPrice.value,inputFile.value);
// console.log(txtProductName.value);
const data =  {nombre: `${txtProductName.value}`,
descripcion: `${txtProductDescription.value}`,
precio: `${txtProductPrice.value}`,
url_imagen: `${inputFile.value}`
};
    fetch(URL_MAIN, {
    
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer: ${localStorage.getItem("accessToken")} `
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        // console.log(descripcion);
        // console.log(nombre);
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
        // location.reload();
    }, 3000);
    

});

function goCatalago()
{
window.location.href="../catalogo.html"
}
// window.addEventListener("load", function() {
//     if (["Items"] != null) {
//         console.log(JSON.parse(localStorage.getItem("jsonStr")));
//         let objtmp = JSON.parse(localStorage.getItem("jsonStr"));
//         obj = (objtmp != null) ? objtmp : obj;
//     }
   
// });




// function pushitems() {
//     obj["Items"].push({ nombre: `${txtProductName.value}`, descripcion: `${txtProductDescription.value}`, URL_imagen: `${inputFile.value}`, precio: `${txtProductPrice.value}` });
//     // localStorage.setItem("jsonStr", jsonStr = JSON.stringify(obj));
    // fetch(URL_MAIN, {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(obj),
    //       })
    //       .then(response => response.json())
    //       .then(obj => {
    //         // console.log(descripcion);
    //         // console.log(nombre);
    //         console.log('Success:', obj);
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Producto registrado!',
//         showConfirmButton: false,
//         timer: 3000
//     });
// }



// const data =  {nombre: `${txtProductName.value}`,
// descripcion: `${txtProductDescription.value}`,
// precio: `${txtProductPrice.value}`,
// url_imagen: `${inputFile.value}`
// };
// function pushitems() {
// obj["Items"].push({ nombre: `${txtProductName.value}`, descripcion: `${txtProductDescription.value}`, URL_imagen: `${inputFile.value}`, precio: `${txtProductPrice.value}` });
// fetch(URL_MAIN, {
    
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//     // console.log(descripcion);
//     // console.log(nombre);
//     console.log('Success:', data);

//   })
//   .catch((error) => {
//     console.error('Error:', error);

//   });

// }
////////////////////////////////////////////////////////////

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
console.log(imageFile.value);
if (imageFile.value == undefined) {
    imageFile.style.display = 'none';
}

//previewFile(id imagen, input type file , textArea);
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

//////////////////////////////////////////////////////////////////////////////////




// function pushitems() {
//     // obj["Items"].push({ nombre: `${txtProductName.value}`, descripcion: `${txtProductDescription.value}`, URL_imagen: `${inputFile.value}`, precio: `${txtProductPrice.value}` });
//     // localStorage.setItem("jsonStr", jsonStr = JSON.stringify(obj));
//     fetch(URL_MAIN, {
//         method: 'POST', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: jsonStr = JSON.stringify(obj),
//       })
//       .then(response => response.json())
//       .then(jsonStr => {
//         console.log('Success:', jsonStr);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//     // Swal.fire({
//     //     position: 'center',
//     //     icon: 'success',
//     //     title: 'Producto registrado!',
//     //     showConfirmButton: false,
//     //     timer: 3000
//     // });
// }

