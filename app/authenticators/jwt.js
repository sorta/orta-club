import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'orta-club/config/environment';

export default Base.extend({
  tokenEndpoint: `${ENV.API.HOST}/users/login`,

  restore(data) {
  },

  authenticate(/*args*/) {
  },

  invalidate(data) {
  }
});
