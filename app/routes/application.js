import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service auth;
  @service session;

  async beforeModel() {
    await this.session.setup();
    return this.auth.loadCurrentUser();
  }
}
