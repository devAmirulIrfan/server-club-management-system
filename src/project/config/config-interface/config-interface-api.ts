export interface TypedRequestBody<T> extends Express.Request {
    body: T
  }
  
  export interface TypedResponseBody<I> extends Express.Response {
    isSuccess: boolean,
    statusCode: number,
    data?: I | null,
    message: string
  }