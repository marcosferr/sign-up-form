
const campo1 = document.getElementById('password');
const campo2 = document.getElementById('cpassword');

campo2.addEventListener("focusout", ()=>{
    if(campo1.value != campo2.value){
        alert("Contraseñas no coinciden")
    }
});
