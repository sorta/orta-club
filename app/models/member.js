import Model, { attr, belongsTo } from '@ember-data/model';

export default class MemberModel extends Model {
  @attr('string') nameFirst;
  @attr('string') nameMiddle;
  @attr('string') nameLast;
  @attr('string') slug;
  @attr('date') birthdate;
  @attr('boolean') isApproved;

  @belongsTo('user') user;
}
