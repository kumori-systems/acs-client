/// <reference types="q" />
import { Promise as qPromise } from 'q';
import { AcsToken } from ".";
export declare class AcsClient {
    protected basePath: string;
    constructor(basePath: string);
    login(username: string, password: string): qPromise<AcsToken>;
}
