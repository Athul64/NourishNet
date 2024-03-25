import axios from "axios";

const userInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

const adminInstance = axios.create({
  baseURL: `${"http://localhost:4000"}/admin`,
  headers: {
    "Content-Type": "application/json",
  },
});

userInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem("jwt");
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

adminInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem("adminJWT");
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export { userInstance, adminInstance };
