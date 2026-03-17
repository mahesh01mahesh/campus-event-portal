import axios from "axios";

const API = axios.create({
  baseURL: "https://campus-event-portal.onrender.com/api",
});

export default API;