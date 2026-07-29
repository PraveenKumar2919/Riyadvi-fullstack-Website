import axios from "axios";

// Uses VITE_API_URL from .env.development / .env.production.
// Falls back to the local Django backend if no env var is set.
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/",
});

export default API;