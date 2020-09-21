import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class FormsLoginComponent extends Component {
  @tracked errorMessage = '';
  @tracked email = '';
  @tracked password = '';

  @service auth;

  @action
  tryToLogin() {
    this.loginTask.perform();
  }

  @task(function* () {
    try {
      const { email, password } = this;
      const result = yield this.auth.login(email, password);
    } catch (e) {
      this.errorMessage = e.error || e;
    }
  })
  loginTask;
}
