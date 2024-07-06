
//ejercicios


let valor1 = prompt("igresa el valor 1")
let valor2 = prompt("ingresa el valor 2")

let resultado = 0

const operacion = prompt("elige la operacion + - * /")
//necesito que el usuario ingrese el tipo de operacion a realizar
//+ - * /

if(operacion === "+"){
    resultado = +valor1 + +valor2;
    console.log("la suma es",resultado)
}else if(operacion ==="-"){
    resultado = +valor1 - +valor2;
    console.log("la resta es",resultado)
}


// escribann un algoritmo que ppida 2 numeros usando prompt e imprima el numero mayor 