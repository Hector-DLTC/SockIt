import {validarNombreProducto, validarDescripcionProducto, validarPrecioProducto} from "./validacionesFormularioProductos.js"

let Agregar = document.getElementById("btnproducto");
let txtProductName = document.getElementById("product");
let txtProductDescription = document.getElementById("textdesc");
let txtProductPrice = document.getElementById("precio");

let jsonStr ='{"Items":[]}';


let obj = JSON.parse(jsonStr);
// console.log(obj);
Agregar.addEventListener("click", (event) => {
    event.preventDefault();
    jsonStr ='{"Items":[]}';
   
	if (
        !validarNombreProducto(txtProductName) ||
        !validarDescripcionProducto(txtProductDescription) ||
        !validarPrecioProducto(txtProductPrice)
      ) {
        if (!validarDescripcionProducto(txtProductName)) {
			txtProductName.style.border = "red medium solid";
        //   txtUsername.value = "";
		txtProductName.focus();
        } 
        // console.log(txtUsername.value);
        if (!validarDescripcionProducto(txtProductDescription)) {
			txtProductDescription.style.border = "red medium solid";
			txtProductDescription.focus();
        } 
    
        if (!validarPrecioProducto(txtProductPrice)) {
			txtProductPrice.style.border = "red medium solid";
			txtProductPrice.focus();
        } 
		if([txtProductName.value,txtProductDescription.value,txtProductPrice.value].includes("")){
			console.log("Hay al menos un campo vacio...");
		}
		return;
	}

	pushitems(txtProductName,txtProductDescription, txtProductPrice);
	setTimeout(function(){  
		location.reload();
		}, 3000);
});

window.addEventListener("load", function(){
    if(["Items"]!=null){
        console.log(JSON.parse(localStorage.getItem("jsonStr")));
        let objtmp=JSON.parse(localStorage.getItem("jsonStr"));
        obj=(objtmp!=null)?objtmp:obj;
    }
});

function pushitems(){
	obj["Items"].push({ product: `${txtProductName.value}`, description: `${txtProductDescription.value}`, price : `${txtProductPrice.value}`, img : `${inputFile.value}`});
    localStorage.setItem( "jsonStr", jsonStr = JSON.stringify(obj));
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Producto registrado!',
		showConfirmButton: false,
		timer: 3000
	  });
}



////////////////////////////////////////////////////////////
let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');

btnFake.addEventListener('click', function(){
	fileImage.click();
});
fileImage.addEventListener('change', function(){
	previewFile('imageFile', 'fileImage', 'inputFile' )
	//previewFile(id imagen, input type file , textArea);
});
console.log(imageFile.value);
if (imageFile.value == undefined) {
	imageFile.style.display='none';
}

	//previewFile(id imagen, input type file , textArea);
	function previewFile(img, inputFile, input) {
		
		var preview = document.getElementById(img);
		var file    = document.getElementById(inputFile).files[0];
		var reader  = new FileReader();

		reader.addEventListener("load", function () {
			document.getElementById(input).value = reader.result;
			  preview.src = reader.result;
		  }, false);
		
		  if (file) {
			reader.readAsDataURL(file);
			imageFile.style.display='block';
		  }// file
	}

//////////////////////////////////////////////////////////////////////////////////