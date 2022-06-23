let Agregar = document.getElementById("btnproducto");
let Producto = document.getElementById("product");
let Descripcion = document.getElementById("textdesc");
let Precio = document.getElementById("precio");




let jsonStr =
  '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
  const obj = JSON.parse(jsonStr);
//   JSON.parse(localStorage.getItem("jsonStr"));
Agregar.addEventListener("click", (event) => {
    event.preventDefault();
    if([Producto.value,Descripcion.value,Precio.value].includes("")){
        console.log("Hay al menos un campo vacio...")
        //Aqui van las validaciones....
    } else{
   
    obj["theTeam"].push({ product: `${Producto.value}`, description: `${Descripcion.value}`, price : `${Precio.value}`});
    localStorage.setItem( "jsonStr", jsonStr += JSON.stringify(obj));
    JSON.parse(localStorage.getItem("jsonStr"));
    // jsonStr += JSON.parse(localStorage.getItem("jsonStr"));
    } location.reload();
}
)
window.addEventListener("load", function(){
    console.log(JSON.parse(localStorage.getItem("jsonStr")));
})
