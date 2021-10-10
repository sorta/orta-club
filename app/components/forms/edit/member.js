import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormsEditMemberComponent extends Component {
  @action
  setDate(event) {
    this.args.member.birthdate = event.target.valueAsDate;
  }
}
