import Model, {belongsTo} from '@ember-data/model';

export default class DonningModel extends Model {
  @belongsTo('location') location;
  @belongsTo('member') member;
  @belongsTo('gayApparel') gayApparel;
}
