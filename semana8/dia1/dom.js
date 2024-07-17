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


const inputName = document.querySelector('.input-email')

console.log(inputName.type)

const password = document.querySelector('#pass')
console.log(password.value)

const input =document.querySelector('input')
console.log(input)


const inputs = document.querySelectorAll('input')
console.log(inputs)


const convertir = Array.from(inputs)
console.log(convertir)

const convertirFilter =  convertir.filter(
    (input) => input.type === 'email'
);

console.log('iterado',convertirFilter)