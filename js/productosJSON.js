let Agregar = document.getElementById("btnproducto");
let Producto = document.getElementById("product");
let Descripcion = document.getElementById("textdesc");
let Precio = document.getElementById("precio");

let jsonStr ='{"Items":[]}';

/////////
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
		  }// file
	}
/////////

let obj = JSON.parse(jsonStr);
console.log(obj);
Agregar.addEventListener("click", (event) => {
    event.preventDefault();
    
    if([Producto.value,Descripcion.value,Precio.value].includes("")){
        console.log("Hay al menos un campo vacio...");
        //Aqui van las validaciones....
    } else{
    obj["Items"].push({ product: `${Producto.value}`, description: `${Descripcion.value}`, price : `${Precio.value}`, img : `${inputFile.value}`});
    localStorage.setItem( "jsonStr", jsonStr = JSON.stringify(obj));
    }
    location.reload();
    }
);
window.addEventListener("load", function(){
    if(["Items"]!=null){
        console.log(JSON.parse(localStorage.getItem("jsonStr")));
        let objtmp=JSON.parse(localStorage.getItem("jsonStr"));
        obj=(objtmp!=null)?objtmp:obj;
    }
});