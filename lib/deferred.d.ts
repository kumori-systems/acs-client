export declare class Deferred<T> {
    promise: Promise<T>;
    protected promise2: Promise<void>;
    private fate;
    private state;
    private xresolve;
    private xreject;
    constructor();
    resolve(value?: any): void;
    reject(reason?: any): void;
    isResolved(): boolean;
    isPending(): boolean;
    isFulfilled(): boolean;
    isRejected(): boolean;
}
