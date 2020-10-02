import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonsSubmitComponent extends Component {
  get type() {
    return this.args.type || 'submit';
  }

  @action
  clickAction() {
    if (typeof this.args.onClick === 'function') {
      this.args.onClick();
    }
  }
}
