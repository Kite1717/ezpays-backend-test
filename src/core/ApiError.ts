import { Context } from 'koa';
import { nodeEnvironment } from '../config/envVariables';
import {
  InternalErrorResponse,
  NotFoundResponse,
  BadRequestResponse,
  AuthFailureResponse,
  ForbiddenResponse
} from './ApiResponse';

enum ErrorType {
  INTERNAL = 'InternalError',
  NOT_FOUND = 'NotFoundError',
  BAD_REQUEST = 'BadRequestError',
  TOKEN_EXPIRED = 'TokenExpiredError',
  FORBIDDEN="ForbiddenError"
}

export abstract class ApiError extends Error {
  constructor(public type: ErrorType, public message: string = 'error') {
    super(type);
  }

  public static handle(err: ApiError, ctx: Context): Context {
    switch (err.type) {
      case ErrorType.TOKEN_EXPIRED:
        return new AuthFailureResponse(err.message).send(ctx);
      case ErrorType.INTERNAL:
        return new InternalErrorResponse(err.message).send(ctx);
      case ErrorType.NOT_FOUND:
        return new NotFoundResponse(err.message).send(ctx);
      case ErrorType.BAD_REQUEST:
        return new BadRequestResponse(err.message).send(ctx);
        case ErrorType.FORBIDDEN:
          return new ForbiddenResponse(err.message).send(ctx);
      default: {
        let message = err.message;
        if (nodeEnvironment === 'production') message = 'Something wrong happened.';
        return new InternalErrorResponse(message).send(ctx);
      }
    }
  }
}

export class InternalError extends ApiError {
  constructor(message = 'Internal error') {
    super(ErrorType.INTERNAL, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = 'Bad Request') {
    super(ErrorType.BAD_REQUEST, message);
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Not Found') {
    super(ErrorType.NOT_FOUND, message);
  }
}

export class TokenExpiredError extends ApiError {
  constructor(message = 'Token is expired') {
    super(ErrorType.TOKEN_EXPIRED, message);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = 'Forbidden') {
    super(ErrorType.FORBIDDEN, message);
  }
}
