let emailLog = document.getElementById("emailLogin");
let passwordLog = document.getElementById("passwordLogin");
let registroInfo = JSON.parse(localStorage.getItem("regis"));
let btnIncio = document.getElementById("btninicio");

btnIncio.addEventListener('click', (event)=>{
    event.preventDefault();
  
    console.log(registroInfo);
    console.log(registroInfo.Registro[0].email);
    console.log(registroInfo.Registro[0].password);
    console.log(emailLog.value);
    console.log(passwordLog.value);
if (emailLog.value == registroInfo.Registro[0].email && passwordLog.value == registroInfo.Registro[0].password){
    alert("INICIASTE CORRECTAMENTE");
}else{
    alert("LA INFO NO CONCUERDA");
}
});


// console.log(data.employee.name);