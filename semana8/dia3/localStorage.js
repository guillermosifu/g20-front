const btnLogin = document.querySelector('#btn-login')

btnLogin.onclick = function(event){
event.preventDefault ();

const inputs = document.querySelectorAll('input')

inputs.forEach((input)=>{
    // localStorage.setItem(key-value)
  console.log(inputs)
localStorage.setItem(input.name,input.value)
});
login()
}

// const email = localStorage.getItem('email')
// const password = localStorage.getItem('password')

function login(){
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    form.style.display ='none';
    usuarioSection.style.display='block';
    titleEmail.innerHTML = email;
    titlePassword.innerHTML= password

}

const form =document.querySelector('#section-login')
const titleEmail=document.querySelector('#email')
const titlePassword=document.querySelector('#password')

const btnCerrarSesion = document.querySelector('#cerrar-sesion')
const usuarioSection= document.querySelector('#usuario-logged')
 

if(email !== null && password !== null){
    //el usuario ya esta logeado
}else{
    usuarioSection.style.display='none'
}

btnCerrarSesion.onclick = function(){
    //vamos a cerras sesion borrando los datos del local storage 
    localStorage.clear()

    //mostrar el formulariom y ocultar el mensaje

    form.style.display= 'block';
    usuarioSection.style.display='none'

}