import axios from "axios";

const api = axios.create({
    baseURL: "http://172.18.9.125:3001/"
})

export default api;