import axios from "axios"

const baseUrl = "https://localhost:44376/api/Admin"  //paikallinen

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newAdmin => {
    return axios.post(baseUrl, newAdmin)
}

const remove = (id) => {
return axios.delete(`${baseUrl}/${id}`)
}


export default {getAll, create, remove}