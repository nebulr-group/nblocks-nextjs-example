export class AuthClient {

  static BASE_URL = 'https://auth-stage.nblocks.cloud';
  //static BASE_URL = 'http://localhost:3070';
  static APP_ID = '61c462cd422c2300088d369d'
  //static APP_ID = '633402fdf28d8e00252948b1'

  static async getTokens(code) {
    const tokens = await fetch(
      `${this.BASE_URL}/token/code/${this.APP_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
        }),
      }
    );
    const data = await tokens.json();
    AuthClient._storeTokens(data);
  }

  static async refreshTokens(token) {
    const tokens = await fetch(
      `${this.BASE_URL}/token/refresh/${this.APP_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }
    );
    const data = await tokens.json();
    AuthClient._storeTokens(data);
  }

  static _storeTokens(tokens) {
    localStorage.setItem("id_token", tokens.id_token);
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);
  }
}
