export class CustomError extends Error {
  status: number;
  code?: number;

  constructor(message: string, status: number, customCode?: number ) {
    super(message);
    this.status = status;
    this.code = customCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
