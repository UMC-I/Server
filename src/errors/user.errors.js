

// 유저가 존재하지 않을 때
export class ExsistsNotUser extends Error{
    errorCode = "U001";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
        this.statusCode = 400;
    }
}