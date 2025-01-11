export class NotSocialError extends Error {
    errorCode = "P001";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
    }
}

export class ExsistsNotPostError extends Error{
    errorCode = 'P002';

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data
    }
}