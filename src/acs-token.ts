import {AcsUser} from ".";

export class AcsToken {

  public static fromUnderscore(data: any): AcsToken {
    const t = new AcsToken();
    t.accessToken = data.access_token;
    t.tokenType = data.token_type;
    t.expiresIn = data.expires_in;
    t.refreshToken = data.refresh_token;
    t.user = data.user;
    return t;
  }

  public accessToken: string;
  public tokenType: string;
  public expiresIn: number;
  public refreshToken: string;
  public user: AcsUser;

  public toUnderscore() {
    return {
      access_token: this.accessToken,
      expires_in: this.expiresIn,
      refresh_token: this.refreshToken,
      token_type: this.tokenType,
      user: this.user,
    };
  }

}
