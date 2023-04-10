import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Definindo a base
});

export default axiosInstance;
