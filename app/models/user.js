import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') password;
  @attr('boolean') isAdmin;

  @belongsTo('member') member;
}
