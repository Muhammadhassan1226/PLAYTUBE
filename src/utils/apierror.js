class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Code",
    errors = [],
    stack = ""
  ) {
    super(message);
    (this.statusCode = statusCode), (this.error = error);
    (this.message = message), (this.errors = errors), (this.data = null);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
