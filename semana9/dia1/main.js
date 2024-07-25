
//api (aplication programming iterface)
// es un servicio en un formato JSON  (ARREGLO DE OBJETOS)
// EN JS  NATIVA PETICIONES  FUNCTION FETCH 
// EXISTEN 4 TIPOS DE PETICIONES
//GET  OBTIENE INFO
//POST  CREAR DATOS
//PUT   ACTUALIZAR
// DELETE  BORRAR

// FUNCION ASYNC  ASINCRONIA 

// elemetno de ejcucion

const githubActionSearch = document.querySelector("#github-action-search")
const githubSearch = document.querySelector("#github-search")

// pintar los datos que vienen del api

const imgProfile = document.querySelector("#img-profile")
const githubName = document.querySelector("#github-name")
const githubUserName = document.querySelector("#github-username")
const githubBio = document.querySelector("#github-bio")


//  el disparado o evento de boton - captura el valior del input y lo guarda
//en la variable username
githubActionSearch.onclick =()=>{
 const username = githubSearch.value
 githubActionSearch.value="";
 if(username===""){
  Swal.fire({
    title:"Error",
    text:"debe llenar busqueda",
    icon:"error"
  });
  return
 }
 console.log(username)

 obtenerDatosGithub(username)

}

//funcion que se enacragra de traes los datos de la API

const obtenerDatosGithub =async(username="")=>{
    const response =await  fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    console.log(data)

    setDataUser(data)
}



// evento inserta datos al html
const setDataUser =(data)=>{
    imgProfile.src= data.avatar_url;
    githubName.textContent= data.login;
    githubUserName.textContent= data.name
    githubBio.textContent = data.bio;
}
