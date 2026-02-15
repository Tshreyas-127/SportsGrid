// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:4040"
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4040"
});

// REQUEST INTERCEPTOR (already had)
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔥 RESPONSE INTERCEPTOR (NEW)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Token expired / invalid
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      localStorage.removeItem("username");

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
