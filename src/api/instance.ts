//instance.ts
import Axios, { AxiosError, AxiosRequestConfig } from "axios";
const BASE_URL = "https://api.github.com";
const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${TOKEN}`,
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
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

export const http = {
  get: async function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    return axiosInstance
      .get<Response>(url, config)
      .then(response => response.data) 
      .catch((e: AxiosError) => {
        if (e.response) {
          throw new Error(String(e.response.data));
        } else {
          throw e;
        }
      });
  },
};

export default http;

