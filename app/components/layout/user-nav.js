import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LayoutUserNavComponent extends Component {
  @service auth;
  @service userNav;

  @action
  toggle(event) {
    this.userNav.toggle();
    event.stopPropagation();
  }
}
