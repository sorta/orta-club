import Service, { inject as service } from '@ember/service';

export default class AuthService extends Service {
  authenticator = 'authenticator:jwt';

  @service session;

  login(email, pw) {
    return this.session.authenticate(this.authenticator, [email, pw]);
  }

  logout() {
    this.session.invalidate();
  }
}
