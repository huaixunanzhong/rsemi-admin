import { Notification } from "@douyinfe/semi-ui-19";
import { debounce } from "lodash-es";

import { StatusCode } from "@/constant/http.ts";
import { $t } from "@/lang/index.ts";

import type { AxiosError } from "axios";

// 错误响应接口
export interface ErrorResponse {
  code: number;
  msg: string;
  data?: unknown;
}

export class HttpError extends Error {
  public readonly code: number;
  public readonly data?: unknown;
  public readonly timestamp: string;
  public readonly url?: string;
  public readonly method?: string;
  constructor(
    message: string,
    code: number,
    options?: {
      data?: unknown;
      url?: string;
      method?: string;
    }
  ) {
    super(message);
    this.name = "HttpError";
    this.code = code;
    this.data = options?.data;
    this.timestamp = new Date().toISOString();
    this.url = options?.url;
    this.method = options?.method;
  }
}

const UNAUTHORIZED_DEBOUNCE_TIME = 3000;

const logout = () => {
  console.log("Logging out user due to unauthorized error.");
};
const handleUnauthorizedErrorDebounced = debounce(
  () => {
    logout();
    Notification.warning({
      title: $t("http.theLoginHasExpired"),
      content: $t("http.unauthorizedAccessPleaseLogInAgain"),
      duration: 3
    });
  },
  UNAUTHORIZED_DEBOUNCE_TIME,
  { leading: true, trailing: false }
);
/** 处理401错误（带防抖）*/
export const handleUnauthorizedError = (message: string): never => {
  const error = new HttpError(message, StatusCode.UNAUTHORIZED);
  handleUnauthorizedErrorDebounced();

  throw error;
};

/**
 * 通过后端返回的状态码获取对应错误信息
 * */
const getErrorMsgByStatus = (status: number): string => {
  const errorMap: Record<number, string> = {
    [StatusCode.FORBIDDEN]: "http.forbidden",
    [StatusCode.NOT_FOUND]: "http.notFound",
    [StatusCode.METHOD_NOT_ALLOWED]: "http.methodNotAllowed",
    [StatusCode.REQUEST_TIMEOUT]: "http.requestTimeout",
    [StatusCode.INTERNAL_SERVER_ERROR]: "http.internalServerError",
    [StatusCode.NOT_IMPLEMENTED]: "http.notImplemented",
    [StatusCode.BAD_GATEWAY]: "http.badGateway",
    [StatusCode.SERVICE_UNAVAILABLE]: "http.serviceUnavailable",
    [StatusCode.GATEWAY_TIMEOUT]: "http.gatewayTimeout",
    [StatusCode.HTTP_VERSION_NOT_SUPPORTED]: "http.httpVersionNotSupported"
  };

  return $t(errorMap[status] || "http.unknownError");
};

/**
 * 处理错误
 * */
export const handleRequestError = (error: AxiosError<ErrorResponse>): never => {
  const { config } = error;

  // 没有响应 表示请求没有得到任何 HTTP 响应，这时可能是 网络层或客户端错误
  if (!error.response) {
    // 单独处理取消的请求
    if (error.code === "ERR_CANCELLED") {
      throw new HttpError($t("http.errCancelled"), StatusCode.ERROR);
    }

    let msg = "";
    switch (error.code) {
      case "ERR_FR_TOO_MANY_REDIRECTS":
        msg = "http.errTooManyRedirects";
        break;
      case "ERR_BAD_OPTION_VALUE":
        msg = "http.errBadOptionValue";
        break;
      case "ERR_BAD_OPTION":
        msg = "http.errBadOption";
        break;
      case "ERR_NETWORK":
        msg = "http.errNetwork";
        break;
      case "ERR_DEPRECATED":
        msg = "http.errDeprecated";
        break;
      case "ERR_BAD_RESPONSE":
        msg = "http.errBadResponse";
        break;
      case "ERR_BAD_REQUEST":
        msg = "http.errBadRequest";
        break;
      case "ERR_NOT_SUPPORT":
        msg = "http.errNotSupport";
        break;
      case "ERR_INVALID_URL":
        msg = "http.errInvalidUrl";
        break;
      case "ERR_CANCELED":
        msg = "http.errCanceled";
        break;
      case "ECONNABORTED":
        msg = "http.econnAborted";
        break;
      case "ETIMEDOUT":
        msg = "http.etimedOut";
        break;
      default:
        msg = "http.errNetwork";
        break;
    }

    throw new HttpError($t(msg), StatusCode.ERROR, {
      url: config?.url,
      method: config?.method?.toUpperCase()
    });
  }

  // 表示请求有响应，HTTP 状态码超出 2xx 或被后端拒绝
  const status = error.response.status;
  const errorMsg = error.response.data.msg || error.message;

  // 登录过期单独处理
  if (status === StatusCode.UNAUTHORIZED)
    handleUnauthorizedError($t("http.unauthorized"));
  const message = status ? getErrorMsgByStatus(status) : errorMsg;

  throw new HttpError(message, status || StatusCode.ERROR, {
    data: error.response.data,
    url: config?.url,
    method: config?.method?.toUpperCase()
  });
};
