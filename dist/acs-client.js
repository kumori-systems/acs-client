"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const request = require("request");
const _1 = require(".");
class AcsClient {
    constructor(basePath) {
        this.basePath = basePath;
    }
    login(username, password) {
        const deferred = q.defer();
        const loginOptions = {
            auth: { username, password },
            url: this.basePath + "/login",
        };
        request(loginOptions, (error, response, body) => {
            if (error != null) {
                return deferred.reject(error);
            }
            if (response.statusCode !== 200) {
                return deferred.reject(new Error("Unauthorized"));
            }
            const token = _1.AcsToken.fromUnderscore(JSON.parse(body));
            // console.log(JSON.stringify(token, null, 2));
            deferred.resolve(token);
        });
        return deferred.promise;
    }
}
exports.AcsClient = AcsClient;
//# sourceMappingURL=acs-client.js.map