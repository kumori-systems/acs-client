/// <reference types="q" />
import q = require("q");
import { AcsToken } from ".";
export declare class AcsClient {
    protected basePath: string;
    constructor(basePath: string);
    login(username: string, password: string): q.Promise<AcsToken>;
}
