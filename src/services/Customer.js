import axios from "axios"

//const baseUrl = "https://localhost:44376/api/Customers"  //paikallinen
const baseUrl = "https://caravanbackend.azurewebsites.net/api/Customers"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)
}

const remove = (id) => {
return axios.delete(`${baseUrl}/${id}`)
}

const update = (object) => {
    return axios.put(`${baseUrl}/${object.customerId}`, object)
}

export default {getAll, create, remove, update}