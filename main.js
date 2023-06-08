
const campo1 = document.getElementById('password');
const campo2 = document.getElementById('cpassword');
const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', (e)=> {
e.preventDefault()
alert('Datos ingresados correctamente!')
})
campo2.addEventListener("focusout", ()=>{
    if(campo1.value != campo2.value){
        alert("Contraseñas no coinciden")
    }
});
