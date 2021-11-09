import Model, { attr, hasMany } from '@ember-data/model';

export default class YearModel extends Model {
  @attr('string') num;

  @hasMany('donning') donnings;
}
