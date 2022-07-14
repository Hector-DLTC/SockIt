//AQUI VAN PUROS LOAD NO PONGAN NADA MÁS
window.addEventListener("load",function(){
    if(Boolean(this.window.localStorage.getItem("accessToken"))){
        let iconUsuarioLogin = document.getElementById("bi-person-circle");
        let drpDwnCnt=document.getElementById("dropdown-menu");
        drpDwnCnt.innerHTML='<a class="dropdown-item" id="cerrar" style="color:white; cursor:pointer;">Cerrar Sesion</a>'
        let loginCerrar=document.getElementById("cerrar");
        loginCerrar.onclick= function(){
            localStorage.removeItem("accessToken")
            location.reload();
        }
        
            iconUsuarioLogin.style.color="green";
    }
});
