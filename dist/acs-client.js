"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_1 = require("q");
const axios_1 = require("axios");
const _1 = require(".");
class AcsClient {
    constructor(basePath) {
        this.basePath = basePath;
    }
    login(username, password) {
        const deferred = q_1.defer();
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
//# sourceMappingURL=acs-client.js.map