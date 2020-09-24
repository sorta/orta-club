import Service from '@ember/service';

export default class ValidateService extends Service {
  email(emailAddress) {
    const re = /\S+@\S+\.\S+/;
    return re.test(emailAddress);
  }
}
