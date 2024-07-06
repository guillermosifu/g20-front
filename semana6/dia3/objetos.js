//entidnad que tiene un key y un value


// objetoi perosona


const persona= {
    //k  //value
    edad: 32,
    sexo: "masculino",
    talla: 1.78
}

//carro

const carro ={
  marca:"audi",
  motor:"v8",
  color: "verde",
  ruedas:4,
  combustiblo: "electrico",
  nuevo:true

}

console.log(carro)
console.table(carro)
//ingreso al valor de nu objeto 
console.log(carro.ruedas)
//editar o alterar un dato o vALOR
 carro.ruedas=6
//insertar un elemeto nuevo 
  carro.anio=2024


  //crear unu arreglo de objesto 



  const laptops =[
    {
        marca:"mac",
        precio: 2500,
        anio: 2024,
        color:"aluminio"
    },
    {
        marca:"lenovo",
        precio: 3000,
        anio: 2023,
        color:"negro"
    }
  ]


   console.log(laptops[1].color)



