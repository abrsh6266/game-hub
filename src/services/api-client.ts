import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '424f7874103f4d5d84400563bce4fd04'
    }
})