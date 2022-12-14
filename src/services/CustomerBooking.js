import axios from "axios"

//const baseUrl = "https://localhost:44376/api/Customers/varaukset"  //paikallinen
const baseUrl = "https://caravanbackend.azurewebsites.net/api/Customers/varaukset"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


export default { getAll }