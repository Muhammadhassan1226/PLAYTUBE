class ApiResponse extends StatusCode {
  constructor(StatusCode, data, message = "Something Went Wrong") {
    super(message);
    this.data = data;
    this.message = message;
    this.success = StatusCode < 400;
  }
}

export { ApiResponse };
