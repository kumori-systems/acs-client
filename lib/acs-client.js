"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const _1 = require(".");
const deferred_1 = require("./deferred");
class AcsClient {
    constructor(basePath) {
        this.basePath = basePath;
    }
    login(username, password) {
        const deferred = new deferred_1.Deferred();
        const loginOptions = {
            auth: { username, password },
            url: this.basePath + '/login'
        };
        axios_1.default(loginOptions)
            .then((response) => {
            if (response.status !== 200) {
                return deferred.reject(new Error('Unauthorized'));
            }
            const token = _1.AcsToken.fromUnderscore(response.data);
            // console.log(JSON.stringify(token, null, 2))
            deferred.resolve(token);
        })
            .catch((reason) => {
            deferred.reject(reason);
        });
        return deferred.promise;
    }
    /**
     * Taking the previous token, obtains a new token.
     */
    refreshToken(previousToken) {
        const deferred = new deferred_1.Deferred();
        const loginOptions = {
            headers: { 'Authorization': 'Bearer ' + previousToken },
            url: this.basePath + '/tokens/refresh'
        };
        axios_1.default(loginOptions)
            .then((response) => {
            if (response.status !== 200) {
                return deferred.reject(new Error('Unauthorized'));
            }
            const token = _1.AcsToken.fromUnderscore(response.data);
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