import Model from '@ember-data/model';
import { inject as service } from '@ember/service';

export default class ValidatableModel extends Model {
  @service('validation') validation;

  get validationSets() {
    return {
      main: this.validations,
    };
  }

  get validations() {
    return {};
  }

  validate(options = {}) {
    return this.validation.validateModel(this, options);
  }
}
