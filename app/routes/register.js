import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class RegisterRoute extends Route {
  model() {
    const member = this.store.createRecord('member');
    const user = this.store.createRecord('user', {
      member,
    });
    return {
      member,
      user,
    }
  }
}
