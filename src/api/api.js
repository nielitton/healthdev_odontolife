import axios from "axios";

export const api = axios.create({
    baseURL: "https://odontolife-backend.onrender.com"
})

export const apiDev = axios.create({
    baseURL: "http://localhost:3333"
})