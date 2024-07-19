//promesa

const BASE_URL = 'https://dummyjson.com/auth/login'

const data = {
    username: 'emilys',
    password: 'emilyspass'
}

const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
}

fetch(BASE_URL, options).then(res => res.json())
    .then(res => {
        localStorage.setItem("token", res.token)
    })


// hay una pagina de login
// hay una página de perfil
// si hay token entonces que vaya a perfil
// si no hay token que se quede en la pagina
// login.html