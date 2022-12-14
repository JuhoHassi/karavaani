import axios from "axios"

//const url = "https://localhost:44376/api/Authentication"   //paikallinen
const url = "https://caravanbackend.azurewebsites.net/api/Authentication"

const authenticate = (useForAuth) =>{
    const request = axios.post(url, useForAuth)
    return request.then(response => response)
}

export default { authenticate }