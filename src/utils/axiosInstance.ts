import axios from "axios";

import { backendBaseURL } from "./constants";

const axiosInstance = axios.create({
  baseURL: backendBaseURL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
