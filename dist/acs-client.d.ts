import { AcsToken } from '.';
export declare class AcsClient {
    protected basePath: string;
    constructor(basePath: string);
    login(username: string, password: string): Promise<AcsToken>;
    /**
     * Taking the previous token, obtains a new token.
     */
    refreshToken(previousToken: string): Promise<AcsToken>;
}
