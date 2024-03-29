import Service, { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';
import { warn } from '@ember/debug';
import { task } from 'ember-concurrency';

export default class AuthService extends Service {
  authenticator = 'authenticator:jwt';

  @service router;
  @service session;
  @service store;

  @readOnly('session.isAuthenticated') isAuthenticated;

  async loadCurrentUser() {
    try {
      const userId = this.session.data.authenticated.id;

      if (userId) {
        const user = await this.store.findRecord('user', userId);
        this.user = user;
      }
    } catch (e) {
      this.user = null;
      await this.session.invalidate();
    }
  }

  @task(function* (email, password) {
    try {
      const result = yield this.session.authenticate(
        this.authenticator,
        email,
        password,
      );
      this.router.transitionTo('index');
      return result;
    } catch (e) {
      // Usually network error
      warn(`Auth error: ${e}`, { id: 'auth.service.login' });
    }
  })
  loginTask;

  @task(function* () {
    try {
      return yield this.session.invalidate();
    } catch (e) {
      // Usually network error
      warn(`Auth error: ${e}`, { id: 'auth.service.logout' });
    }
  })
  logoutTask;
}
