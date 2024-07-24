// cuando usamos async
// le decimos a la función que se vuelve asíncrona
// logrando nosotros poder su contenido ejecutarlo por pasitos
const cargarComponente = async (archivoHtml, parentId) => {
    try {
        // ya obtenemos al archivo que queremos mostrar
        const file = await fetch(archivoHtml)
        const htmlContent = await file.text()

        // mostrar el elemento en el div
        document.getElementById(parentId).outerHTML = htmlContent
    } catch (e) {
        console.error(e)
    }
}

cargarComponente('./banner.html', 'banner')


// consultando internet
async function cargarPublicaciones() {
    const publicaciones = await fetch('https://pokeapi.co/api/v2/pokemon')
    const json = await publicaciones.json()

    json.results.forEach(pokemon => {
        console.log(pokemon.name)
        document.getElementById('pokemons').innerHTML += crearPokemon(pokemon.name, pokemon.url)
    })

}

function crearPokemon(nombre, link) {

    return `Pokemon: ${nombre} <br/> <a href='${link}'> Visita su enlace </a> <br/> <br/>`
}

// async function cargarPublicaciones() {
//     await fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//         response.json()
//     })
// }

// useEffect()

cargarPublicaciones()