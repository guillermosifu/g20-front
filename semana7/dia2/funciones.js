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
console.log(calcularPromedioNotas(notas))

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