import axios from "axios";
import { redirect } from "react-router-dom";

import useAuthStore from "../features/users/hooks/useAuthStore";
import axiosInstance from "./axiosInstance";
import { backendBaseURL } from "./constants";

const api = axios.create({
  baseURL: backendBaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().token;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();

        if (!newAccessToken) throw new Error("Unable to refresh access token");

        useAuthStore.getState().setToken(newAccessToken);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        redirect("/");
      }
    }
    return Promise.reject(error);
  },
);

export async function refreshAccessToken() {
  try {
    const response = await axiosInstance.post("/api/token/refresh/", null);
    return response.data.access;
  } catch (error) {
    console.error("Unable to refresh access token:", error);
    return null;
  }
}

export async function verifyToken() {
  try {
    const response = await axiosInstance.post("/api/token/verify/");
    console.log(response);
  } catch (error) {
    console.log("Token verification failed", error);
    return false;
  }
}

export default api;
