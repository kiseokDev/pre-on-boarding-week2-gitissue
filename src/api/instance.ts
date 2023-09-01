//instance.ts
import axios from "axios";
const BASE_URL = "https://api.github.com";
const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${TOKEN}`,
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      throw new Error("Page Not Found");
    } else {
      throw error;
    }
  }
);

export default api;
