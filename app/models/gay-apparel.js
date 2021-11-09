import Model, { attr } from '@ember-data/model';

export default class GayApparelModel extends Model {
  @attr('string') name;
}
