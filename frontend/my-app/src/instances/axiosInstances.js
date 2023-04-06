import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Definindo a base
});

export default axiosInstance;
