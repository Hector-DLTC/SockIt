let emailLog = document.getElementById("emailLogin");
let passwordLog = document.getElementById("passwordLogin");

let btnIncio = document.getElementById("btninicio");
// let valid=true;
const URL_MAIN ='http://localhost:8080/api/login/';


btnIncio.addEventListener('click', (event)=>{
    event.preventDefault();
    const data =  {email: `${emailLog.value}`,
    password: `${passwordLog.value}`
};
   fetch(URL_MAIN, {
   
       method: 'POST', // or 'PUT'
       headers: {
         'Content-Type': 'application/json',
     
       },  
       body: JSON.stringify(data),
     })
     .then(response => response.json())
     .then(data => {
       console.log('Success:', data);
       localStorage.setItem('accessToken', data.accessToken);
       if (data.accessToken !== undefined){
       // if (valid==true){
       // let iconUsuarioLogin = document.getElementById("bi-person-circle");
       // iconUsuarioLogin.style.color="green";}
       let iconUsuarioLogin = document.getElementById("bi-person-circle");
       iconUsuarioLogin.style.color="green";
         
       setTimeout(function() {
         gohome();
         
     }, 3000);
     window.localStorage.setItem("loginActive", JSON.stringify(true))
       Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Inicio de sesión correcto!',
                   showConfirmButton: false,
                   timer: 3000
               });
     } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'NO se pudo inciar sesión',
        showConfirmButton: false,
        timer: 3000
    });
     }})
     .catch((error) => {
       console.error('Error:', error);
       
     });

    //  let registroInfo = JSON.parse(localStorage.getItem("accessToken"));
     
    // for (let data of registroInfo.accessToken){
      
    //     if (data.accessToken == data.accessToken){
    //         valid=true;
    //         console.log(valid);
    //     }
    //     else {
    //         valid=false;
    //         console.log(valid);
    //     }
        
    // }
    // if (JSON.parse(localStorage.getItem("loginActive")==true)){
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Bienvenido!',
    //         showConfirmButton: false,
    //         timer: 2000
    //       });
//           let iconUsuarioLogin = document.getElementById("bi-person-circle");
//           iconUsuarioLogin.style.color="green";
            
//           setTimeout(function() {
//             gohome();
            
//         }, 3000);
//         window.localStorage.setItem("loginActive", JSON.stringify(true))
        
//     }else{
//         Swal.fire({
//             position: 'center',
//             icon: 'error',
//             title: 'La información NO es correcta!',
//             showConfirmButton: false,
//             timer: 2000
//           });
//     }
    
    
});

function gohome()
{
window.location.href="../index.html"
}
// console.log(data.employee.name);
window.addEventListener("load",function(){
    // if(Boolean(this.window.localStorage.getItem("loginActive"))){
    //     let iconUsuarioLogin = document.getElementById("bi-person-circle");
    //         iconUsuarioLogin.style.color="green";
    // }
    if(Boolean(this.window.localStorage.getItem("loginActive"))){
      // let iconUsuarioLogin = document.getElementById("bi-person-circle");
      //     iconUsuarioLogin.style.color="green";
  }
});