import axios from "axios"

const baseUrl = "https://localhost:44376/api/Booking"  //paikallinen

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newBook => {
    return axios.post(baseUrl, newBook)
}

const remove = (id) => {
return axios.delete(`${baseUrl}/${id}`)
}

const update = (object) => {
    return axios.put(`${baseUrl}/${object.bookingId}`, object)
}

export default {getAll, create, remove, update}