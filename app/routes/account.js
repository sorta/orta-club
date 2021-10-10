import AuthenticatedRoute from 'orta-club/routes/authenticated';
import { inject as service } from '@ember/service';

export default class AccountRoute extends AuthenticatedRoute {
  @service auth;

  async model() {
    const user = this.auth.user;
    const member = await user.get('member');
    return {
      user,
      member,
    };
  }
}
