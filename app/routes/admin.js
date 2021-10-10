import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service auth;

  beforeModel() {
    if (!this.auth.user.isAdmin) {
      this.transitionTo('index');
    }
  }
}
