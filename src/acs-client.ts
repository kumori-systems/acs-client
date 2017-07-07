import {defer, Deferred, Promise as qPromise} from 'q';
import Axios from 'axios';
import {AxiosResponse, AxiosRequestConfig} from 'axios'
import {AcsToken} from ".";

export class AcsClient {
  protected basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  public login(username: string, password: string): qPromise<AcsToken> {
    const deferred:Deferred<AcsToken> = defer<AcsToken>();
    const loginOptions: AxiosRequestConfig = {
      auth: {username, password},
      url: this.basePath + "/login",
    };

    Axios(loginOptions)
    .then((response:AxiosResponse) => {
      if (response.status !== 200) {
        return deferred.reject(new Error("Unauthorized"));
      }
      const token: AcsToken = AcsToken.fromUnderscore(response.data);
      // console.log(JSON.stringify(token, null, 2));
      deferred.resolve(token);
    })
    .catch((reason) => {
      deferred.reject(reason);
    });
    return deferred.promise;
  }
}
