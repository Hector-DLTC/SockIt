let productos;
const URL_MAIN ='http://localhost:8080/api/products/';
function addItems(list_items){
    fetch(URL_MAIN,{
        method:'get'
    }).then(function(response){
        response.json().then(function(json){
            // console.log(json);
            // console.log(json.length);
            productos=json;
            Array.from(json).forEach((p,index)=>{
                list_items.innerHTML+=`
                <div class="card" style="width: 100%; min-width:150px; margin:0px; border:solid thin;">
                    <img src="${p.url_imagen}" class="card-img-top" alt="image" style="height:200px;max-width: 100%;vertical-align: middle;">
                    <div class="card-body">
                        <h5 class="card-title">${p.nombre}</h5>
                
                        <small class="card-text" style="overflow: auto; max-height: 50%;">'${p.descripcion}'</small>
                        <p class="card-text"style=" text-align: right;" > $${p.precio} MXN</p>
                        <div><button id="btn${p.id}"class ="btn btn-primary"style="position: absolute; top:86%;">Añadir</button></div>
                    </div>
                </div> `;
            });//foreach
        });//then
    }).catch(function(err){
        console.log(err);
    });
    // console.log(document.getElementById("list-items"));
}// addItems
window.addEventListener("load",function(){
    let div =document.getElementById("list-items");
    addItems(div);
});
function view(index){
    document.getElementById("productTitleModal").innerHTML=productos[index].nombre;
    document.getElementById("productoBodyModal").innerHTML=`${productos[index].descripcion}<img class="bd-placeholder-img card-img-top" role"img" src="img/${productos[index].url_imagen}"/>
    <strong>${productos[index].precio}MXN</strong>`;
    $("#productModal").modal("show");
}//view