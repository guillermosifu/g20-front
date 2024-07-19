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
