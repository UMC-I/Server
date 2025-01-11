

// 유저가 존재하지 않을 때
export class ExsistsNotUserError extends Error{
    errorCode = "U001";

    constructor(reason) {
        super(reason);
        this.reason = reason;
        this.statusCode = 400;
    }
}