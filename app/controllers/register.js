import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {
  @tracked isInvalid = false;

  @action
  tryToRegister() {
    this.isInvalid = false;

    const { nameFirst } = this.model.member;
    if (!nameFirst) {
      this.isInvalid = true;
    }

    if (this.isInvalid) {
      return;
    }
  }
}
