import { Context } from "koa";

enum ResponseStatus {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

abstract class ApiResponse {
  constructor(
    protected statusCode: ResponseStatus,
    protected message: string,
    protected data?: object | undefined | null,
  ) {}

  protected prepare<T extends ApiResponse>(ctx: Context, response: T): Context {
    ctx.status = this.statusCode;
    ctx.body = response;
    return ctx;
  }

  public send(ctx: Context): Context {
    return this.prepare<ApiResponse>(ctx, this);
  }
}

export class HResponse<T> extends ApiResponse {
  constructor(statusCode: number, message: string, data: any) {
    super((statusCode = statusCode === 204 ? 200 : statusCode), message, data);
  }

  send(ctx: Context): Context {
    return super.prepare<HResponse<T>>(ctx, this);
  }
}

export class NotFoundResponse extends ApiResponse {
  constructor(message = "Not Found") {
    super(ResponseStatus.NOT_FOUND, message);
  }

  send(ctx: Context): Context {
    this.data = null;
    return super.prepare<NotFoundResponse>(ctx, this);
  }
}

export class BadRequestResponse extends ApiResponse {
  constructor(message = "Bad Parameters") {
    super(ResponseStatus.BAD_REQUEST, message);
  }
}

export class InternalErrorResponse extends ApiResponse {
  constructor(message = "Internal Error") {
    super(ResponseStatus.INTERNAL_ERROR, message);
  }
}

export class AuthFailureResponse extends ApiResponse {
  constructor(message = "Authentication Failure") {
    super(ResponseStatus.UNAUTHORIZED, message);
  }
}

export class ForbiddenResponse extends ApiResponse {
  constructor(message = "Forbidden") {
    super(ResponseStatus.FORBIDDEN, message);
  }
}
