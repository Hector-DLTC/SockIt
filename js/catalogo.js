//JSON
let products = JSON.parse(localStorage.getItem("jsonStr"));
console.log(products);
//addItem
function addItem(products){
    console.log(products);
    const itemHTML = 
        '<div class="card" style="width: 100%; min-width:150px; margin:0px;">\n' +
        '    <img src="'+products.img +'" class="card-img-top" alt="image" style="height:200px;max-width: 100%;vertical-align: middle;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+products.product+'</h5>\n' +
        // '        <h6 class="card-title">'+products.category+'</h6>\n' +
        '        <p class="card-text" style="overflow: auto; max-height: 50%;">'+products.description+'</p>\n' +
        '        <p class="card-text"style=" text-align: right;" > $'+products.price+'</p>\n' +
        '        <div><a href="#" class="btn btn-primary" style="position: absolute;top: 86%;">Añadir</a></div>\n' +
        '    </div>\n' +
        '</div>\n' ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
//iteracion de funcion addItem
for(let data of products.Items){
    addItem(data);
}
//Modal Carrito
let modal=document.getElementById("idCarritoModal");
let modalBtn=document.getElementById("btnCarritoModal");
let btnCerrarModal=document.getElementsByClassName("btnCerrarModal")[0];

modalBtn.addEventListener("click", abrirModal);
btnCerrarModal.addEventListener("click",cerrarModal);
window.addEventListener("click", clickFueraModal);

function clickFueraModal(e){
    if(e.target==modal){
        modal.style.display="none";
    }
}

function abrirModal(){
    modal.style.display="block";
}

function cerrarModal(){
    modal.style.display="none";
}

// let añadirProd =document.getElementById("añadirP");
// let btnAgregarP=document.getElementById("buttform");

// añadirProd.addEventListener('click',function añadirP(){
//     btnAgregarP.click();
// });

