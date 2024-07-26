

//primer ejercuicio realizar una funcion asyncrona que traiga la lista de poekmones de 

//la sgte api 
//https://pokeapi.co/api/v2/pokemon?limit=20
//logicA DE JS

const pokemonsContainer = document.querySelector("#row-pokemons")
const pokemonName= document.querySelector("#pokemon-name")
const pokemonImg = document.querySelector("#pokemon-img")
const pokemonAbilities = document.querySelector("#pokemon-abilities")
//funcion que consuime los datos del api
const obtenerPokemones =async()=>{
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
  const data=await response.json()
  
 console.log(data.results)
  setPokemonsView(data.results)
}

// vamos a crear una funcion que se encargue de poder pintar nuestros poekmones
const setPokemonsView =(results)=>{
const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

results.map(async(result,index)=>{

  const html= `
  <div class="col-md-3 mt-3">
  <div class="card">
  <img class= "card-img mt-2"
   width="100"
   height="100"
   src="${imgUrl}${index + 1}.svg">
   <div class="card-body text-center">
   <h6 class="text-title">N. ${index + 1}</h6>
   <h4 class="text-title">${result.name}</h4>
   </div>
   <button class="btn btn-danger" onclick="obtenerDetallePokemon('${result.url}')" data-bs-toggle="modal" data-bs-target="#modalPokemon">Ver detalle</button>
   </div>
   </div>`;
    pokemonsContainer.innerHTML += html;
})

}

const obtenerDetallePokemon=async(url)=>{
  const response =await fetch(url);
  const data= await response.json()
  console.log(data) 
  pokemonName.innerHTML=data.name;
  pokemonImg.src= data.sprites.other.dream_world.front_default;
  pokemonAbilities.innerHTML = data.abilities[0].ability.name;

}


obtenerPokemones()

// ejercicio  crear el modal  y insertar dato al modal de cada pokemon
//nombre -imagen diferente -habilidad