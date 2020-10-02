import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormsFormComponent extends Component {
  @action
  submitAction(event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (typeof this.args.onSubmit === 'function') {
      this.args.onSubmit();
    }
  }
}
