let usuario=document.getElementById("username");
let correo=document.getElementById("email");
let passw=document.getElementById("passw");
let confirmPassw=document.getElementById("confPassw");
let agregar=document.getElementById("btnproducto");

let regis='{"Registro":[]}';
let regisJson=JSON.parse(regis);

agregar.addEventListener("click",(event)=>{
    event.preventDefault();
    regis='{"Registro":[{user:,email:,password:,}]}';
    if([usuario.value,correo.value,passw.value,confirmPassw.value].includes("")){
        console.log("Hay al menos un campo vacio...");
    }
    else if(passw.value!=confirmPassw.value){
         console.log("Las contraseñas no son iguales...");
    }
    else{
        regisJson["Registro"].push({user:`${usuario.value}`,email:`${correo.value}`,password:`${passw.value}`});
        localStorage.setItem("regis",regis=JSON.stringify(regisJson));
    }
    location.reload();

});

window.addEventListener("load",function(){
    if(["Registro"]!=null){
        console.log(JSON.parse(localStorage.getItem("regis")));
        let regisTmp=JSON.parse(localStorage.getItem("regis"));
        regisJson=(regisTmp!=null)?regisTmp:regisJson;

    }

});