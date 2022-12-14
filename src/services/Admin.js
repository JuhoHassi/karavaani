import axios from "axios"

//const baseUrl = "https://localhost:44376/api/Admin"  //paikallinen
const baseUrl = "https://caravanbackend.azurewebsites.net/api/Admin"

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

const create = newAdmin => {
    const config = {
        headers: {Authorization: token},
    }
    return axios.post(baseUrl, newAdmin, config)
}

const remove = (id) => {
    const config = {
        headers: {Authorization: token},
    }
return axios.delete(`${baseUrl}/${id}`, config)
}


export default {getAll, create, remove, setToken}