import { ErrorStatusEnum } from './error-status.enum';

export class CustomError extends Error {
  //message: string // for message w/o super
  status: ErrorStatusEnum;
  code?: number;

  constructor(message: string, status: ErrorStatusEnum, customCode?: number ) {
    super(message); // may not include message in super
    // this.message = message; // for message w/o super
    this.status = status;
    this.code = customCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
