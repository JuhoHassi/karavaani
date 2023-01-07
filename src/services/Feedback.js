import axios from "axios"

//const baseUrl = "https://localhost:44376/api/Feedback"  //paikallinen
const baseUrl = "https://caravanbackend.azurewebsites.net/api/Feedback"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newFeedback => {
    return axios.post(baseUrl, newFeedback)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}


export default { getAll, create, remove }