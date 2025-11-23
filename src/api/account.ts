import * as T from "@/types/api/account.ts";
import http from "@/utils/request";

/** 注册 */
export const register = (userInfo: T.UserInfo) => {
  return http.post<Http.BaseResponse<any>>({
    url: "/auth/register",
    usePrefix: false,
    data: userInfo
  });
};

/** 登录 */
export const login = (data: { username: string; password: string }) => {
  return http.post<Http.BaseResponse<{ access_token: string }>>({
    url: "/auth/login",
    usePrefix: false,
    data
  });
};

/** 获取用户信息 */
export const getProfile = (token: string) => {
  return http.get({
    url: "/auth/profile",
    headers: {
      Authorization: `Bearer ${token || ""}`
    }
  });
};
