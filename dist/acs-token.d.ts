import { AcsUser } from '.';
export declare class AcsToken {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    refreshToken: string;
    user: AcsUser;
    static fromUnderscore(data: any): AcsToken;
    toUnderscore(): {
        access_token: string;
        expires_in: number;
        refresh_token: string;
        token_type: string;
        user: AcsUser;
    };
}
