import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminMembersEditRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('member', params.member_id);
  }
}
