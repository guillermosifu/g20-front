

//primer ejercuicio realizar una funcion asyncrona que traiga la lista de poekmones de 

//la sgte api 
//https://pokeapi.co/api/v2/pokemon?limit=20
//logicA DE JS

const pokemonsContainer = document.querySelector("#row-pokemons")

//funcion que consuime los datos del api
const obtenerPokemones =async()=>{
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  const data=await response.json()
  
 console.log(data.results)
  setPokemonsView(data.results)
}

// vamos a crear una funcion que se encargue de poder pintar nuestros poekmones
const setPokemonsView =(results)=>{
const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"

results.map(async(result,index)=>{

  const html=`
  <div class="col-md-3">
  <div class="card">
  <img class= "card-img-top mt-2"
   widht="100"
   height="100"
   src=${imgUrl}${index + 1}.sgv>
   <div class="card-body text-center">
   <h6 class="text-title text-white>N.${index + 1}</h6>
   <h4 class="text-title">${result.name}</h4>
   </div>
   </div>`
})
 pokemonsContainer.innerHTML += html;

}


obtenerPokemones()