import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.saviglobal.xyz",
});

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
api.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
api.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
