import { AcsToken } from ".";
export declare class AcsClient {
    protected basePath: string;
    constructor(basePath: string);
    login(username: string, password: string): Promise<AcsToken>;
}
export declare class Deferred<T> {
    promise: Promise<T>;
    private fate;
    private state;
    private _resolve;
    private _reject;
    constructor();
    resolve(value?: any): void;
    reject(reason?: any): void;
    isResolved(): boolean;
    isPending(): boolean;
    isFulfilled(): boolean;
    isRejected(): boolean;
}
