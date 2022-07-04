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
        alert("LA INFO CONCUERDA...");
        
    }else{
        alert("LA INFO NO CONCUERDA...");
    }
    
    
});


// console.log(data.employee.name);