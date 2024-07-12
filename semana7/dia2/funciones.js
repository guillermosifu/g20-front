console.log("Empezando con las funciones")

function calcularSuma(numero1, numero2) {
    return numero1 + numero2
}

// calcular el area de un triangulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2
}







/**
 * 
 * @param { Array } arregloNotas 
 */
function calcularPromedioNotas(arregloNotas) {
    let sumaNotas = 0

    // obtenemos la cantidad de notas que tenga el alumno
    const cantidad = arregloNotas.length

    arregloNotas.map((nota) => (
        // por cada nota, yo lo sumo
        // a mi sumaNotas
        sumaNotas += nota
    ))

    return sumaNotas / cantidad
}

const notas = [20, 20, 13, 12]
console.log("El promedio de notas es: ", calcularPromedioNotas(notas))

// calcular el area de un rectangulo 
// calcular el area de un circunferencia


// se les pide una función que, permita
// leer la cantidad de notas de todos los alumnos
// y verificar cuantos aprobados y desaprobados
// existen


// leer la cantidad de notas ✅
// ver si hay aprobados ✅
// si la nota es mayor o igual a 11, entonces aprobó
// ver si hay desaprobados ✅
// si la nota es menor 11, entonces desaprobó

/**
 * 
 * @param { Array } notasAlumnos 
 */
function verAprobadosDesaprobados(notasAlumnos) {
    const resultados = {
        aprobados: 0,
        desaprobados: 0
    }

    notasAlumnos.map((nota) => {
        // si la nota es mayor o igual a 11, entonces aprobó
        if (nota >= 11) {
            resultados.aprobados++
        } else { // no sea mayor a 11
            resultados.desaprobados++
        }
    })

    return resultados
}

const todasLasNotas = [20, 20, 13, 15, 11, 10, 9, 5, 5]
console.log(verAprobadosDesaprobados(todasLasNotas))

// ---------------------------------------------
/*
Una compañía, fabrica focos de colores (verdes, blancos y rojos). 
Se desea contabilizar, de un lote de N focos(matrices), 
el número de focos de cada color que hay en existencia. 
*/

// contar cada uno de los focos
// contar cada foco por color

/**
 * 
 * @param { Array } focos 
 */
function contarFocos(focos) {
    // este es mi objeto para almacenar los foquitos
    const cantidad = {
        rojo: 0,
        blanco: 0,
        verde: 0
    }

    // contando cada uno de los focos
    focos.map((foco) => {
        switch (foco) {
            case 'verde':
                cantidad.verde++
                break;

            case 'blanco':
                cantidad.blanco++
                break;

            case 'rojo':
                cantidad.rojo++
                break;

            default:
                break;
        }
    })

    return cantidad
}

// la lista de mis focos
const focos = [
    "verde", "rojo", "rojo", "blanco", "verde", "verde", "asdasdassa", "rojo",
    "blanco", "verde", "blanco", "rojo", "rojo", "rojo"
]

// llamo a la función con los focos a contar
console.log(contarFocos(focos))

// vamos a cambiar de dolares a soles
// usando prompt para recibir los dolares
// y un alert para mostrar cuanto saldo en soles tenemos

function convertirDolares() {
    // almacenando los dolares desde el input del prompt
    const VALOR_DOLAR = 3.76
    let dolares = prompt("Coloca tus dólares")
    // 1 dolar = 3.76 soles

    // obtenemos el resultado y usando toFixed
    // le decimos cuantos decimales tendrá
    // alert(`Tienes S/.${(dolares * VALOR_DOLAR).toFixed(2)} soles`)

    // string, number, array, boolean, object.. node
    // Document Object Model
    const calculo = `Tienes S/.${(dolares * VALOR_DOLAR).toFixed(2)} soles`

    const div = document.getElementById('cantidadSoles')
    div.innerText = calculo
}


// Se tiene el nombre y la edad de tres personas. 
// Se desean saber el nombre y la edad de la persona de menor edad. 

/**
 * 
 * @param { Array } personas 
 */
function obtenerPersona(personas) {
    let personaConMenorEdad = null
    let menorEdad = Infinity

    personas.forEach(p => {
        if (p.edad < menorEdad) {
            menorEdad = p.edad
            personaConMenorEdad = p
        }
    })

    return personaConMenorEdad
}

const personas = [
    { nombre: "Alex", edad: 15 },
    { nombre: "Ana", edad: 18 },
    { nombre: 'Jacinto', edad: 10 },
    { nombre: "Pepito", edad: 16 },
    { nombre: "Alan", edad: 13 }
]

console.log(obtenerPersona(personas))