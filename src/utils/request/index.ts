import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse
} from "axios";

import { StatusCode } from "@/constant/http.ts";
import { $t } from "@/lang/index.ts";

import {
  handleRequestError,
  handleUnauthorizedError,
  HttpError
} from "./error-handle.ts";

/** axios配置拓展 */
interface AxiosRequestConfigExtends extends AxiosRequestConfig {
  usePrefix?: boolean; // 是否使用前缀，默认true
}

const service = axios.create({
  baseURL: import.meta.env.PUBLIC_API_BASE_URL,
  timeout: import.meta.env.PUBLIC_REQUEST_TIMEOUT || 60 * 1000
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

async function request<T>(config: AxiosRequestConfigExtends): Promise<T> {
  const usePrefix = config.usePrefix ?? true;
  if (usePrefix) {
    const prefix = import.meta.env.PUBLIC_API_PREFIX || "";
    config.url = `${prefix}${config.url}`;
  }
  return service.request<T, any>({ ...config });
}

const http = {
  get<T>(config: AxiosRequestConfigExtends): Promise<T> {
    return request<T>({ ...config, method: "GET" });
  },
  post<T>(config: AxiosRequestConfigExtends): Promise<T> {
    return request<T>({ ...config, method: "POST" });
  },
  put<T>(config: AxiosRequestConfigExtends): Promise<T> {
    return request<T>({ ...config, method: "PUT" });
  },
  delete<T>(config: AxiosRequestConfigExtends): Promise<T> {
    return request<T>({ ...config, method: "DELETE" });
  },
  patch<T>(config: AxiosRequestConfigExtends): Promise<T> {
    return request<T>({ ...config, method: "PATCH" });
  }
};

export default http;
