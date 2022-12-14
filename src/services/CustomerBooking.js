import axios from "axios"

//const baseUrl = "https://localhost:44376/api/Customers/varaukset"  //paikallinen
const baseUrl = "https://caravanbackend.azurewebsites.net/api/Customers/varaukset"

//Otettaan Token mukaan
let token = null
const setToken = newToken =>{
token = `bearer ${newToken}`
}

const getAll = () => {
    const config = {
        headers: {Authorization: token},
    }
    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}


export default { getAll, setToken }