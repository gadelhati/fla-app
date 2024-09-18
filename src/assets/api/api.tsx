import axios from "axios"

export const api = axios.create({
  baseURL: "https://conmebol-api.vercel.app/api",
  headers: { 'content-type': 'application/json' }
});