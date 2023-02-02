import axios from "axios"

//const baseUrl = "https://localhost:44376/api/Booking"  //paikallinen
const baseUrl = "https://caravanbackend.azurewebsites.net/api/Booking"


//Otetaan Token mukaan
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

const create = newBook => {
    const config = {
        headers: {Authorization: token},
    }
    return axios.post(baseUrl, newBook, config)
}

const remove = (id) => {
    const config = {
        headers: {Authorization: token},
    }
return axios.delete(`${baseUrl}/${id}`, config)
}

const update = (object) => {
    const config = {
        headers: {Authorization: token},
    }
    return axios.put(`${baseUrl}/${object.bookingId}`, object, config)
}

export default {getAll, create, remove, update, setToken}