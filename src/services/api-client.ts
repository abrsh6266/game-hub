import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '29a9cc001d32454ba5429a7973f27f30'
    }
})