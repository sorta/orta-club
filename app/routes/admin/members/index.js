import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class AdminMembersIndexRoute extends Route {
  @service store;

  model() {
    return RSVP.hash({
      members: this.store.findAll('member'),
      users: this.store.findAll('user'),
    });
  }
}
