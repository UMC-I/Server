


// 유저가 존재하지 않을 때
export class ExsistsNotUserError extends Error{
    errorCode = "U003";

    constructor(reason) {
        super(reason);
        this.reason = reason;
        this.statusCode = 400;
    }
}
export class NotSocialError extends Error {
    errorCode = "U001";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
        this.statusCode = 400;
    }
}
export class NotExistPost extends Error {
    errorCode = "U002";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
        this.statusCode = 404;

    }
}