export enum StatusCode {
  SUCCESS = 200, // 成功
  ERROR = 400, // 错误
  UNAUTHORIZED = 401, // 未授权
  FORBIDDEN = 403, // 禁止访问
  NOT_FOUND = 404, // 未找到
  METHOD_NOT_ALLOWED = 405, // 方法不允许
  REQUEST_TIMEOUT = 408, // 请求超时
  INTERNAL_SERVER_ERROR = 500, // 服务器错误
  NOT_IMPLEMENTED = 501, // 未实现
  BAD_GATEWAY = 502, // 网关错误
  SERVICE_UNAVAILABLE = 503, // 服务不可用
  GATEWAY_TIMEOUT = 504, // 网关超时
  HTTP_VERSION_NOT_SUPPORTED = 505 // HTTP版本不支持
}
