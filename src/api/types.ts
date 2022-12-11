export type GenerateTokenRequestBodyType = {
    grant_type : "client_credentials",
    client_id : string,
    client_secret : string
}

export class TokenExpiredError extends Error {
    constructor(msg: string) {
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, TokenExpiredError.prototype);
    }

    getErrorMessage() {
        return this.message;
    }
}

export class UserDoesNotExistsError extends Error {
    constructor(msg: string) {
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, TokenExpiredError.prototype);
    }

    getErrorMessage() {
        return this.message;
    }
}