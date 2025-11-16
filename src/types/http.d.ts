declare namespace Http {
  /** 基础响应 */
  interface BaseResponse<T = unknown> {
    code: number;
    message: string;
    data: T;
  }
}
