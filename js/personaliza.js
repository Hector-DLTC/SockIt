let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnPersonaliza');
let imageFile = document.getElementById('imageFile');
let btnFaker = document.getElementById('btnEnviarPersonalizada');
const URL_MAIN ='http://localhost:8080/api/personalize/';
let personalizaImage = '{"PerIma":[]}';

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

    reader.addEventListener("load", function() {
        document.getElementById(input).value = reader.result;
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        imageFile.style.display = 'block';
    } // file
}


let obj = JSON.parse(personalizaImage);
btnFaker.addEventListener("click", (event) => {
    event.preventDefault();
    personalizaImage = '{"PerIma":[]}';

    if ([inputFile.value].includes(undefined)) {
        console.log("Hay al menos un campo vacio...");
    
    return;
    }
    // pushitems(inputFile);
    const data =  {url_imagen_personalizar: `${inputFile.value}`
    };
        fetch(URL_MAIN, {
        
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer: ${localStorage.getItem("accessToken")}`
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
                        title: 'Foto guardada con éxito!',
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
        location.reload();
    }, 3000);
});

// window.addEventListener("load", function() {
//     if (["PerIma"] != null) {
//         console.log(JSON.parse(localStorage.getItem("personalizaImage")));
//         let objtmp = JSON.parse(localStorage.getItem("personalizaImage"));
//         obj = (objtmp != null) ? objtmp : obj;
//     }
// });

// function pushitems() {
//     obj["PerIma"].push({img: `${inputFile.value}` });
//     localStorage.setItem("personalizaImage", personalizaImage = JSON.stringify(obj));
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Foto guardada!',
//         showConfirmButton: false,
//         timer: 3000
//     });
// }


