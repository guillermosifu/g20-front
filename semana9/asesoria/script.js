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