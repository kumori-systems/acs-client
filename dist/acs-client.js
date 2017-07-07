"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const _1 = require(".");
class AcsClient {
    constructor(basePath) {
        this.basePath = basePath;
    }
    login(username, password) {
        const deferred = new Deferred();
        const loginOptions = {
            auth: { username, password },
            url: this.basePath + "/login",
        };
        axios_1.default(loginOptions)
            .then((response) => {
            if (response.status !== 200) {
                return deferred.reject(new Error("Unauthorized"));
            }
            const token = _1.AcsToken.fromUnderscore(response.data);
            // console.log(JSON.stringify(token, null, 2));
            deferred.resolve(token);
        })
            .catch((reason) => {
            deferred.reject(reason);
        });
        return deferred.promise;
    }
}
exports.AcsClient = AcsClient;
class Deferred {
    constructor() {
        this.state = "pending";
        this.fate = "unresolved";
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.promise.then(() => this.state = "fulfilled", () => this.state = "rejected");
    }
    resolve(value) {
        if (this.fate === "resolved") {
            throw "Deferred cannot be resolved twice";
        }
        this.fate = "resolved";
        this._resolve(value);
    }
    reject(reason) {
        if (this.fate === "resolved") {
            throw "Deferred cannot be resolved twice";
        }
        this.fate = "resolved";
        this._reject(reason);
    }
    isResolved() {
        return this.fate === "resolved";
    }
    isPending() {
        return this.state === "pending";
    }
    isFulfilled() {
        return this.state === "fulfilled";
    }
    isRejected() {
        return this.state === "rejected";
    }
}
exports.Deferred = Deferred;
//# sourceMappingURL=acs-client.js.map