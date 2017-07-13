import { AcsToken } from ".";
export declare class AcsClient {
    protected basePath: string;
    constructor(basePath: string);
    login(username: string, password: string): Promise<AcsToken>;
}
