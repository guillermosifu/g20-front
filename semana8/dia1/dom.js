function imprimir(){
    alert('hola')
}

//5 difretes selectores 
// querySelector



document.querySelector('#btn').addEventListener('click',()=>{
    alert('desde js')
})


const elemento = document.querySelector("#miDiv");
console.log(elemento.textContent)


// existe dentro de js el document
// es un atributo que me v permitir ingresar al html desde js
// existe 5 diferentes selectores

// document.querySelector("tag") solo puede capturar un elemnto
// document.querySelectorAll('')  este selector capturq todos los elemento dcon la propiedas que buscan


// docuement.getElementsBytagName('h1')
//getElementsById('nombre')
//byclassName(nombreClase)

