import axios from "axios";

const API = axios.create({
  baseURL: "https://riyadvi-fullstack-website.onrender.com/api/",
});

export default API;