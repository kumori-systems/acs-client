"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcsToken {
    static fromUnderscore(data) {
        const t = new AcsToken();
        t.accessToken = data.access_token;
        t.tokenType = data.token_type;
        t.expiresIn = data.expires_in;
        t.refreshToken = data.refresh_token;
        t.user = data.user;
        return t;
    }
    toUnderscore() {
        return {
            access_token: this.accessToken,
            expires_in: this.expiresIn,
            refresh_token: this.refreshToken,
            token_type: this.tokenType,
            user: this.user,
        };
    }
}
exports.AcsToken = AcsToken;
//# sourceMappingURL=acs-token.js.map