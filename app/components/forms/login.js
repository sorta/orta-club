import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class FormsLoginComponent extends Component {
  @tracked email = '';
  @tracked password = '';

  @service auth;

  @action
  tryToLogin() {
    const { email, password } = this;
    this.auth.loginTask.perform(email, password);
  }
}
