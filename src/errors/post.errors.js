export class NotSocialError extends Error {
  errorCode = "P001";

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
    this.statusCode = 404;
  }
}

export class NotExistPost extends Error {
  errorCode = "P002";

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
    this.statusCode = 404;
  }
}

export class ExsistsNotPostError extends Error {
  errorCode = "P003";

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
    this.statusCode = 400;
  }
}
