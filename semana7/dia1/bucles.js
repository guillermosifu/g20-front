// bucle es un estructura repetitiva - es decir que hace algho muchas veces 
//bucles normalmenete son usados pa iterar o recorrer arrays
//lee cada elemento de una manera independiente 
// i iterador (index)
//i++ = incrementar de uno en uno 
//i = i + 1


// for 

// for(let i = 15; i < 100 ; i=i+2){
//  console.log(i)
// }



const alumnos=["pepe","cristian","abdiel","jorge"]


for(let i = 0; i < alumnos.length;i++){
    console.log("cantida de alumnos :" ,alumnos[i] )
}


const numeros =[1,2,3,4,5,6,7,8,9,10]

for(let j =0;j < numeros.length;j++){
    //como atrapar todos los numeros pares 
     if(numeros[j] % 2 === 0){
        console.log(numeros[j])
     }
}

const laptops =[
    {
        marca: "mac",
        nombre:"19",
        precio: 2800,
        calificacion:"5"
    },

    {
        marca: "acer",
        nombre:"19",
        precio: 1500,
        calificacion:"3"
    }

]

for(let i=0;i <laptops.length;i++){
    console.log(laptops[i])
}


//map 

const productos =[
    {
        name:"laptop",
        price:1500,
        nuevo:true
    },
    {
        name:"monitor",
        price:1800
    },
    {
        name:"celular",
        price:1200
    },
    {
        name:"tv",
        price:2500
    }
]

productos.map((productos)=>{
    console.log("productos",productos.name)
})

//while 

//imprimir los numeros del 1 al 5

let o = 1;
while(o <=5){

    console.log(o);
    o++
}


// ejercicios
// realizar 2 arreglos de 6 elenmentos y recorrerlos con cada bucle 
// uno po bucle
