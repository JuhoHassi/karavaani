import axios from "axios"

const baseUrl = "https://localhost:44376/api/Customers/varaukset"  //paikallinen

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


export default { getAll }