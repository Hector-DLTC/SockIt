let Agregar = document.getElementById("btnproducto");
let Producto = document.getElementById("product");
let Descripcion = document.getElementById("textdesc");
let Precio = document.getElementById("precio");

let jsonStr ='{"Items":[]}';


let obj = JSON.parse(jsonStr);

Agregar.addEventListener("click", (event) => {
    event.preventDefault();
    if([Producto.value,Descripcion.value,Precio.value].includes("")){
        console.log("Hay al menos un campo vacio...");
        //Aqui van las validaciones....
    } else{
    obj["Items"].push({ product: `${Producto.value}`, description: `${Descripcion.value}`, price : `${Precio.value}`});
    localStorage.setItem( "jsonStr", jsonStr = JSON.stringify(obj));
    }
    location.reload();
    }
);
window.addEventListener("load", function(){
    if(["Items"]!=null){
        console.log(JSON.parse(localStorage.getItem("jsonStr")));
        obj=JSON.parse(localStorage.getItem("jsonStr"));
    }
});
