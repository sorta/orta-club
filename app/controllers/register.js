import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class RegisterController extends Controller {
  @tracked isInvalid = false;

  @service router;

  validEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  @action
  tryToRegister() {
    this.isInvalid = false;

    const { nameFirst } = this.model.member;
    if (!nameFirst) {
      this.isInvalid = true;
    }

    const { email, password } = this.model.user;
    if (!email || !password || !this.validEmail(email)) {
      this.isInvalid = true;
    }

    if (this.isInvalid) {
      return;
    }

    this.registerTask.perform();
  }

  @task(function* () {
    const member = yield this.model.member.save();
    this.model.user.member = member;
    const user = yield this.model.user.save();
    this.router.transitionTo('index');
  })
  registerTask;
}
