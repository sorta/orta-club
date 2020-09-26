import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class EditFormsMemberComponent extends Component {
  @action
  setDate(event) {
    this.args.member.birthdate = event.target.valueAsDate;
  }
}
