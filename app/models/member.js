import { attr, belongsTo } from '@ember-data/model';
import ValidatableModel from 'orta-club/models/validatable';

export default class MemberModel extends ValidatableModel {
  @attr('string') nameFirst;
  @attr('string') nameMiddle;
  @attr('string') nameLast;
  @attr('string') slug;
  @attr('date') birthdate;
  @attr('boolean') isApproved;

  @belongsTo('user', { async: true, inverse: null }) user;

  get formattedBirthdate() {
    const { birthdate } = this;
    if (!birthdate) {
      return null;
    }

    const bd = new Date(birthdate);

    let month = bd.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    let day = bd.getDate();
    if (day < 10) {
      day = `0${day}`;
    }

    return `${bd.getFullYear()}-${month}-${day}`;
  }

  get validations() {
    return {
      nameFirst: {
        name: 'First Name',
        validators: 'present',
      },
    };
  }
}
