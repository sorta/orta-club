import Controller from '@ember/controller';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class AccountController extends Controller {
  @service validation;

  @action
  tryToSave(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    this.isInvalid = false;

    const memberValidationErrors = this.model.member.validate();

    // const { nameFirst } = this.model.member;
    if (memberValidationErrors.length) {
      this.isInvalid = true;
    }

    const { email } = this.model.user;
    if (!email || !this.validation.email(email)) {
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
