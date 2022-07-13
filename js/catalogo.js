const items=document.getElementById("list-items");
const itemsCarrito=document.getElementById("items-carrito")
const footerModal=document.getElementById("footerModal")
const templateCard=document.getElementById("template-card").content;
const templateFooter=document.getElementById("template-footer-carrito").content;
const templateCarrito=document.getElementById("template-carrito").content;
const fragment=document.createDocumentFragment();
let carrito={};
let modal=document.getElementById("idCarritoModal");
let modalBtn=document.getElementById("btnCarritoModal");
let btnCerrarModal=document.getElementsByClassName("btnCerrarModal")[0];

//Obtener DB
const URL_MAIN ='http://localhost:8080/api/products/';
document.addEventListener("DOMContentLoaded",()=>{
    fetchData()
    if(localStorage.getItem('carritoLS')){
        carrito=JSON.parse(localStorage.getItem('carritoLS'));
        objetosCarrito();
    }
})
items.addEventListener("click",e=>{
    añadirCarrito(e);
    
})
//Modal Carrito - addEventListener
modalBtn.addEventListener("click", abrirModal);
btnCerrarModal.addEventListener("click",cerrarModal);
window.addEventListener("click", clickFueraModal);
//Botones de añadir y disminuir en el carrito
itemsCarrito.addEventListener("click",e=>{
    btnAccion(e)
})
const fetchData=async()=>{
    try{
        const res= await fetch(URL_MAIN)
        const data =await res.json()
        console.log(data);
        createCard(data)
    }catch(error){
        console.log(error);
    }
}

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
//Crear las cards de productos en catalogo con los datos de la DB
const createCard=data=>{
    data.forEach(product=>{
        // console.log(products);
        templateCard.querySelector('img').setAttribute('src', `/img/img-catalogo/${product.url_imagen}`);
        templateCard.querySelector('h5').textContent= product.nombre;
        templateCard.querySelector('small').textContent=product.descripcion;
        templateCard.querySelector('p').textContent=product.precio;
        templateCard.querySelector('.btn-primary').dataset.id=product.id
        const clone =templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}
//Añadir productos al carrito

const añadirCarrito =e=>{
    // console.log(e.target.classList.contains("btn-primary"));
    if(e.target.classList.contains("btn-primary")){
        // console.log(e.target.parentElement);
        setCarrito(e.target.parentElement)
        abrirModal();
    }
    e.stopPropagation()
}
const setCarrito=objeto=>{
    const producto={
        id: objeto.querySelector('.btn-primary').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad=carrito[producto.id].cantidad+1
    }
    carrito[producto.id]={...producto}
    objetosCarrito()
}
//Crear los productos en Carrito y guardarlo en LocalStorage
const objetosCarrito=()=>{
    itemsCarrito.innerHTML=""
    Object.values(carrito).forEach(prod=>{
        templateCarrito.querySelector('th').textContent=prod.id;
        templateCarrito.querySelectorAll('td')[0].textContent=prod.nombre;
        templateCarrito.querySelectorAll('td')[1].textContent=prod.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id=prod.id;
        templateCarrito.querySelector('.btn-danger').dataset.id=prod.id;
        templateCarrito.querySelector('span').textContent=prod.cantidad*prod.precio;
        const clone =templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    itemsCarrito.appendChild(fragment)
    footerCarrito()
    localStorage.setItem('carritoLS',JSON.stringify(carrito));
}
const footerCarrito=()=>{
    footerModal.innerHTML=""
    if(Object.keys(carrito).length===0){
        footerModal.innerHTML=`
        <th scope="row"colspan="5">Carrito vacío</th>`
        return
    }
    const nCantidad =Object.values(carrito).reduce((acc, {cantidad})=>acc+cantidad,0)
    const nPrecio =Object.values(carrito).reduce((acc,{cantidad,precio})=>acc+cantidad*precio,0)
    
    templateFooter.querySelectorAll('td')[0].textContent=nCantidad
    templateFooter.querySelector('span').textContent=nPrecio

    const clone =templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footerModal.appendChild(fragment)

    const btnVaciarCarrito =document.getElementById("vaciar-carrito")
    btnVaciarCarrito.addEventListener('click',()=>{
        carrito={}
        objetosCarrito()
    })
}
//Acciones de botones para aumentar o disminuir cantidad de productos
const btnAccion =e =>{
    //Accion de aumentar
    if(e.target.classList.contains('btn-info')){
        const producto =carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id]={...producto}
        objetosCarrito()
    }
    if(e.target.classList.contains('btn-danger')){
        const producto =carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad===0){
            delete carrito[e.target.dataset.id]
        }
        objetosCarrito()
    }
    e.stopPropagation()
}
