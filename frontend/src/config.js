import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://explore-place.herokuapp.com/api/"
})