import Model, { attr, hasMany } from '@ember-data/model';
import ValidatableModel from 'orta-club/models/validatable';

export default class YearModel extends ValidatableModel {
  @attr('string') num;

  @hasMany('donning', { async: true, inverse: null }) donnings;

  get validations() {
    return {
      num: {
        name: 'Number',
        validator: 'number',
      },
    };
  }
}
