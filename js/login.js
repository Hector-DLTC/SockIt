let emailLog = document.getElementById("emailLogin");
let passwordLog = document.getElementById("passwordLogin");
let registroInfo = JSON.parse(localStorage.getItem("regis"));
let btnIncio = document.getElementById("btninicio");
let valid;

btnIncio.addEventListener('click', (event)=>{
    event.preventDefault();
  
    console.log(registroInfo);
    console.log(registroInfo.Registro[0].email);
    console.log(registroInfo.Registro[0].password);
    console.log(emailLog.value);
    console.log(passwordLog.value);

    for (let data of registroInfo.Registro){
        if (emailLog.value == data.email && passwordLog.value == data.password){
            alert("INICIASTE CORRECTAMENTE");
            valid=false;
            console.log(valid);
        }
        // }if (emailLog.value != data.email && passwordLog.value != data.password){
        //     alert("NO INICIASTE CORRECTAMENTE");
        //     valid=false;
        //     console.log(valid);
        // }
        
    }
    if (valid){
        alert("LA INFO NO CONCUERDA");
        console.log(valid);
    }else{
        return;
    }
    
    console.log(valid);
});


// console.log(data.employee.name);