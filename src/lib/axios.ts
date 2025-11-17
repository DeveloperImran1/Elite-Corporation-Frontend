import config from "@/config";
import axios, { type AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor  --> Server a request korar pore, je response ase, seita ai axiosInstance.interceptors.response.use() function er moddhe dia jai. Response a jodi success hoi tahole sudho return kore dei respopnse ta. But jodi error hoi tahole amra check kortesi, ai error ta ki jwt token expired er error naki. Jodi token expired hoi, tahole refresh token use kore new token set and cookie te set korar kaj kore abar previous request ta call kortesi..
// But uporer way te korar somoi sudho 1ta requst valovabe handle kora jabe, Konto refresh token get korar somie jodi aro akadhik request ase, tahole to tara fail hobe. Tader ke handle korar jonno amra akta array te store kore rakhbo oi requst gulo ke. Jodi new accessToken get kora pending a thake. Tarpor new token create hole array er moddhe store kora requst gulo abar fetch korbo.

let isRefreshing = false;
let pendingQueue: {
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
}[] = [];

const processQueue = (error: unknown) => {
  pendingQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(null);
    }
  });

  pendingQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry: boolean;
    };

    if (
      error.response.status === 500 &&
      error.response.data.message === "jwt expired" &&
      !originalRequest._retry
    ) {
      console.log("Your token is expired");

      originalRequest._retry = true;
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject });
        })
          .then(() => axiosInstance(originalRequest))
          .catch((error) => Promise.reject(error));
      }

      isRefreshing = true;
      try {
        const res = await axiosInstance.post("/auth/refresh-token");
        console.log("new token arrived", res);

        processQueue(null);
        return axiosInstance(originalRequest);
      } catch (error) {
        processQueue(error);
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    //* For Everithing
    return Promise.reject(error);
  }
);
