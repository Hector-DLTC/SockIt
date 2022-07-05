let emailLog = document.getElementById("emailLogin");
let passwordLog = document.getElementById("passwordLogin");
let registroInfo = JSON.parse(localStorage.getItem("regis"));
let btnIncio = document.getElementById("btninicio");
let valid=true;

btnIncio.addEventListener('click', (event)=>{
    event.preventDefault();

    for (let data of registroInfo.Registro){
        if (emailLog.value == data.email && passwordLog.value == data.password){
            valid=true;
            console.log(valid);
        }
        else {
            valid=false;
            console.log(valid);
        }
        
    }
    if (valid==true){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            timer: 2000
          });
          setTimeout(function() {
            gohome();
            
        }, 3000);
       
        
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La información NO es correcta!',
            showConfirmButton: false,
            timer: 2000
          });
    }
    
    
});

function gohome()
{
window.location.href="../index.html"
}
// console.log(data.employee.name);