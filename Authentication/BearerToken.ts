import { ObjectAssignable } from "../ObjectAssignable";

export class AccessTokenResponse extends ObjectAssignable {
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
    tokenType: string;

    constructor() {
        super();
        this.accessToken = "";
        this.expiresIn = 0;
        this.refreshToken = "";
        this.tokenType = "";
    }
}
