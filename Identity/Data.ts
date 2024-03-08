import { ObjectAssignable } from "../ObjectAssignable";

export class ForgotPasswordRequest {
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

export class InfoRequest {
    newEmail: string | null;
    newPassword: string | null;
    oldPassword: string | null;

    constructor(newEmail: string | null, newPassword: string | null, oldPassword: string | null) {
        this.newEmail = newEmail;
        this.newPassword = newPassword;
        this.oldPassword = oldPassword;
    }
}

export class InfoResponse {
    email: string;
    isEmailConfirmed: boolean;

    constructor(...args: InfoResponse[]) {
        this.email = "";
        this.isEmailConfirmed = false;
        if (args.length === 1) {
            Object.assign(this, args[0]);
        }
    }
}

export class LoginRequest {
    email: string;
    password: string;
    twoFactorCode: string | null;
    twoFactorRecoveryCode: string | null;

    constructor(email: string, password: string, twoFactorCode: string | null, twoFactorRecoveryCode: string | null) {
        this.email = email;
        this.password = password;
        this.twoFactorCode = twoFactorCode;
        this.twoFactorRecoveryCode = twoFactorRecoveryCode;
    }
}

export class RefreshRequest {
    refreshToken: string;

    constructor(refreshToken: string) {
        this.refreshToken = refreshToken;
    }
}

export class RegisterRequest {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export class ResendConfirmationEmailRequest {
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

export class ResetPasswordRequest {
    email: string;
    newPassword: string;
    resetCode: string;

    constructor(email: string, newPassword: string, resetCode: string) {
        this.email = email;
        this.newPassword = newPassword;
        this.resetCode = resetCode;
    }
}

export class TwoFactorRequest {
    enable: boolean;
    forgetMachine: boolean;
    resetRecoveryCode: boolean;
    resetSharedKey: boolean;
    twoFactorCode: string | null;

    constructor(
        enable: boolean,
        forgetMachine: boolean,
        resetRecoveryCode: boolean,
        resetSharedKey: boolean,
        twoFactorCode: string | null
    ) {
        this.enable = enable;
        this.forgetMachine = forgetMachine;
        this.resetRecoveryCode = resetRecoveryCode;
        this.resetSharedKey = resetSharedKey;
        this.twoFactorCode = twoFactorCode;
    }
}

export class TwoFactorResponse extends ObjectAssignable {
    isMachineRemembered: boolean;
    isTwoFactorEnabled: boolean;
    recoveryCodes: string[] | null;
    recoveryCodesLeft: number;
    sharedKey: string;

    constructor() {
        super();
        this.isMachineRemembered = false;
        this.isTwoFactorEnabled = false;
        this.recoveryCodes = null;
        this.recoveryCodesLeft = 0;
        this.sharedKey = "";
    }
}
