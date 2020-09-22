import Base from 'ember-simple-auth/authenticators/base';
import { warn } from '@ember/debug';
import fetch from 'fetch';
import ENV from 'orta-club/config/environment';

export default class CustomAuthenticator extends Base {
  tokenEndpoint = `${ENV.API.HOST}/users/login`;

  async restore(data) {
    if (data.token) {
      return data;
    }
  }

  async authenticate(email, password) {
    try {
      const response = await fetch(this.tokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', //'application/vnd.api+json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });

      if (!response.ok) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }

      const data = await response.json();
      const { token } = data;

      return { token };
    } catch (e) {
      warn(`JWT error: ${e}`, { id: 'jwt.authenticate' });
      throw e;
    }
  }
}
