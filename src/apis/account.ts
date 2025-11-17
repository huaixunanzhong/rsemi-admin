import http from "@/utils/request";

export const login = (data: { username: string; password: string }) => {
  return http.post<Http.BaseResponse<{ access_token: string }>>({
    url: "/auth/login",
    usePrefix: false,
    data
  });
};

export const getProfile = (token: string) => {
  return http.get({
    url: "/auth/profile",
    headers: {
      Authorization: `Bearer ${token || ""}`
    }
  });
};
