import Controller from '@ember/controller';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class AccountController extends Controller {
  @service validate;

  @action
  tryToSave() {
    this.isInvalid = false;

    const { nameFirst } = this.model.member;
    if (!nameFirst) {
      this.isInvalid = true;
    }

    const { email } = this.model.user;
    if (!email || !this.validate.email(email)) {
      this.isInvalid = true;
    }

    if (this.isInvalid) {
      return;
    }

    this.saveTask.perform();
  }

  @(task(function * () {
    yield this.model.member.save();
    yield this.model.user.save();
  })) saveTask;
}
