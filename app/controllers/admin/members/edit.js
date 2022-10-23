import Controller from '@ember/controller';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class AdminMembersEditController extends Controller {
  @service validation;

  @action
  saveAction() {
    const memberValidationErrors = this.model.validate();
    if (memberValidationErrors.length) {
      return;
    }

    this.saveTask.perform();
  }

  @task(function* () {
    yield this.model.save();
  })
  saveTask;
}
