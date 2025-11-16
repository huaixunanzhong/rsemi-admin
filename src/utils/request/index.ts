import axios, {
  type AxiosRequestConfig,
  type AxiosError,
  type AxiosResponse
} from "axios";

import { StatusCode } from "@/constant/http.ts";
import { $t } from "@/lang/index.ts";

import {
  handleRequestError,
  handleUnauthorizedError,
  HttpError
} from "./error-handle.ts";

const { PUBLIC_API_BASE_URL, PUBLIC_REQUEST_TIMEOUT } = import.meta.env;

console.log(PUBLIC_API_BASE_URL, PUBLIC_REQUEST_TIMEOUT);
const service = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 6000
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<Http.BaseResponse>) => {
    const { code, message } = response.data;

    // 请求成功
    if (code === StatusCode.SUCCESS) {
      return response;
    }

    // 登录过期
    if (code === StatusCode.UNAUTHORIZED) {
      handleUnauthorizedError(message);
      return response;
    }

    throw new HttpError($t(message || "http.requestFailed"), code);
  },
  (error) => {
    return Promise.reject(handleRequestError(error));
  }
);

async function request<T>(config: AxiosRequestConfig): Promise<T> {
  return service.request<T, any>({ ...config });
}

const http = {
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({ ...config, method: "GET" });
  },
  post<T>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({ ...config, method: "POST" });
  },
  put<T>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({ ...config, method: "PUT" });
  },
  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({ ...config, method: "DELETE" });
  },
  patch<T>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({ ...config, method: "PATCH" });
  }
};

export default http;
