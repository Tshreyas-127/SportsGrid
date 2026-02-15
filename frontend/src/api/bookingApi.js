import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4040",   // use your backend port
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {  
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createBooking = (payload) => {
  return API.post("/booking/create", payload);
};
