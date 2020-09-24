import { inject as service } from '@ember/service';
import BaseSessionService from 'ember-simple-auth/services/session';
import { warn } from '@ember/debug';

export default class SessionService extends BaseSessionService {
  @service auth;

  async handleAuthentication() {
    this._super(...arguments);
    // super(...arguments);

    try {
      await this.auth.loadCurrentUser();
    } catch (e) {
      warn(`Auth error: ${e}`, { id: 'session.service.handleAuth' });
    }
  }
}
