import q = require("q");
import request = require("request");
import {AcsToken} from ".";

export class AcsClient {
  protected basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  public login(username: string, password: string): q.Promise<AcsToken> {
    const deferred = q.defer<AcsToken>();
    const loginOptions: request.Options = {
      auth: {username, password},
      url: this.basePath + "/login",
    };
    request(loginOptions, (error, response, body) => {
      if (error != null) {
        return deferred.reject(error);
      }
      if (response.statusCode !== 200) {
        return deferred.reject(new Error("Unauthorized"));
      }
      const token: AcsToken = AcsToken.fromUnderscore(JSON.parse(body));
      // console.log(JSON.stringify(token, null, 2));
      deferred.resolve(token);
    });
    return deferred.promise;
  }
}
