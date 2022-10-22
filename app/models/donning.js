import Model, { belongsTo } from '@ember-data/model';

export default class DonningModel extends Model {
  @belongsTo('location', { async: true, inverse: null }) location;
  @belongsTo('member', { async: true, inverse: null }) member;
  @belongsTo('gayApparel', { async: true, inverse: null }) gayApparel;
}
