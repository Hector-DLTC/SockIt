let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnPersonaliza');
let imageFile = document.getElementById('imageFile');
let btnFaker = document.getElementById('btnEnviarPersonalizada');

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
    pushitems(inputFile);
    setTimeout(function() {
        location.reload();
    }, 3000);
});

window.addEventListener("load", function() {
    if (["PerIma"] != null) {
        console.log(JSON.parse(localStorage.getItem("personalizaImage")));
        let objtmp = JSON.parse(localStorage.getItem("personalizaImage"));
        obj = (objtmp != null) ? objtmp : obj;
    }
});

function pushitems() {
    obj["PerIma"].push({img: `${inputFile.value}` });
    localStorage.setItem("personalizaImage", personalizaImage = JSON.stringify(obj));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Foto guardada!',
        showConfirmButton: false,
        timer: 3000
    });
}


